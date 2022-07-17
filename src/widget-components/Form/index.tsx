import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { api } from '../../libs/api';
import { dark } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { FeedbackType } from '../Widget';

import { styles } from './styles';
interface Props {
    feedbackType: FeedbackType;
    oneFeedbackCanceled: () => void;
    onFeedbackSent: () => void;
}
export function Form({ feedbackType, oneFeedbackCanceled, onFeedbackSent }: Props) {
    const [comment, setCooment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    async function handleSendFeedback() {
        if (isSendingFeedback) {
            return;
        }

        setIsSendingFeedback(true);
        try {
            await api.post('/feedbacks',
                {
                    type: feedbackType,
                    comment,

                });
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
                <Button
                    onPress={handleSendFeedback}
                    isLoading={isSendingFeedback}

                />
            </View>
        </View>
    );
}