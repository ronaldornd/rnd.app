import { StyleSheet } from 'react-native';
import { dark } from '../../../theme';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
export const styles = StyleSheet.create({
    info: {
        flexDirection: 'column',
        alignContent: 'center',
    },
    header: {
        fontSize: responsiveFontSize(3),
        margin: 5,
        marginBottom: 0,
        color: dark.colors.text_primary,
        alignSelf: 'center',
        fontFamily: dark.fonts.regular
    },
    div: {
        flexDirection: 'row',
        width: responsiveWidth(98),
        justifyContent: 'space-around',
        alignSelf: 'center'

    },
    habi: {
        flexDirection: 'column',
    },
    text: {
        fontSize: responsiveFontSize(1.9),
        margin: 5,
        color: dark.colors.text_primary,
        textAlign: 'center',
        fontFamily: dark.fonts.regular
    }
});