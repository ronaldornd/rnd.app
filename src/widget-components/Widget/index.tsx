import React, { useRef, useState } from 'react';
import { ChatTeardropDots, XSquare } from 'phosphor-react-native';
import { Alert, Modal, Pressable, Text, TouchableOpacity, View, } from 'react-native';
import { dark } from '../../theme';
import { styles } from './styles';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Success } from '../Success';
import Popover, { PopoverMode } from 'react-native-popover-view';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
;
export type FeedbackType = keyof typeof feedbackTypes;
export default function Widget() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackType(null);
        setFeedbackSent(false);
    }
    function handleFeedbackSet() {
        setFeedbackSent(true)
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {
                                feedbackSent ?
                                    <Success onSendAnotherFeedback={handleRestartFeedback} />
                                    :
                                    <>
                                        {feedbackType ?
                                            <Form feedbackType={feedbackType}
                                                onFeedbackSent={handleFeedbackSet}
                                                oneFeedbackCanceled={handleRestartFeedback}
                                            />
                                            :
                                            <Options onFeedbackChanged={setFeedbackType} />
                                        }
                                    </>

                            }
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <XSquare size={responsiveWidth(13)} color={dark.colors.primary} />
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>

        </>
    );
}

