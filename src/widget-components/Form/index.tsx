import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../libs/api';
import { dark } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { Screenshoot } from '../Screenshoot';
import { FeedbackType } from '../Widget';
import * as FileSystem from 'expo-file-system'

import { styles } from './styles';
interface Props {
    feedbackType: FeedbackType;
    oneFeedbackCanceled: () => void;
    onFeedbackSent: () => void;
}
export function Form({ feedbackType, oneFeedbackCanceled, onFeedbackSent }: Props) {
    const [comment, setCooment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const [screenshoot, setScreenshoot] = useState<string | null>(null);
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleScreenshoot() {
        captureScreen({
            format: 'jpg',
            quality: 0.8
        })
            .then(uri => setScreenshoot(uri))
            .catch(error => console.log(error));
    }

    function handleScreenshootRemove() {
        setScreenshoot(null)
    }

    async function handleSendFeedback() {
        if (isSendingFeedback) {
            return;
        }

        setIsSendingFeedback(true);
        const screenshoot64 = screenshoot && await FileSystem.readAsStringAsync(screenshoot, { encoding: 'base64' })
        try {
            await api.post('/feedbacks',
                {
                    type: feedbackType,
                    screenshoot: `data:image/png;base64,${screenshoot64}`,
                    comment
                });
            console.log(screenshoot)
            onFeedbackSent();
        } catch (error) {
            console.log(error);
            setIsSendingFeedback(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={oneFeedbackCanceled}>
                    <ArrowLeft
                        size={24}
                        weight='bold'
                        color={dark.colors.text_secondary}

                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image
                        source={feedbackTypeInfo.image}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>
            <TextInput
                multiline
                style={styles.input}
                placeholder="Descreva seu problema ou idéia"
                placeholderTextColor={dark.colors.text_secondary}
                autoCorrect={false}
                onChangeText={setCooment}
            />
            <View style={styles.footer}>
                <Screenshoot
                    onRemove={handleScreenshoot}
                    onTakeShot={handleScreenshootRemove}
                    screenshoot={screenshoot} />
                <Button
                    onPress={handleSendFeedback}
                    isLoading={isSendingFeedback}

                />
            </View>
        </View>
    );
}