import React, { useRef, useState } from 'react';
import { ChatTeardropDots } from 'phosphor-react-native';
import { TouchableOpacity, } from 'react-native';
import { dark } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet/';
import { styles } from './styles';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Success } from '../Success';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
export type FeedbackType = keyof typeof feedbackTypes;
function Widget() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);
    const bottomSheetRef = useRef<BottomSheet>(null);
    function handleOpen() {
        bottomSheetRef.current?.expand();
    }
    function handleRestartFeedback() {
        setFeedbackType(null);
        setFeedbackSent(false);
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
                    size={responsiveHeight(4)}
                    weight='bold'
                    color={dark.colors.text_onBrand} />
            </TouchableOpacity>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[10, 290]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
                containerHeight={150}
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