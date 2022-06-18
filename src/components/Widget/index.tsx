import React, { useRef, useState } from 'react';
import { ChatTeardropDots } from 'phosphor-react-native';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet/';
import { styles } from './styles';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Success } from '../Success';

export type FeedbackType = keyof typeof feedbackTypes;
function Widget() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(null);
    const bottomSheetRef = useRef<BottomSheet>(null);
    function handleOpen() {
        bottomSheetRef.current?.expand();
    }
    function handleRestartFeedback() {
        setFeedbackType(null);
        setFeedbackSent(null);
    }
    function handleFeedbackSet() {
        setFeedbackSent(true)
    }
    return (
        <>

            <TouchableOpacity
                style={styles.button}
                onPress={handleOpen}
            >
                <ChatTeardropDots
                    size={24}
                    weight='bold'
                    color={theme.colors.text_onBrand} />
            </TouchableOpacity>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[1, 290]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
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
            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget);