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
        alignItems: 'center',
        width: responsiveWidth(98),
        alignSelf: 'center',
        margin: 10
    },
    textInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: responsiveHeight(12),
        alignItems: 'center',
    },
    text: {
        color: dark.colors.text_primary,
        fontSize: responsiveFontSize(3.7),
        fontFamily: dark.fonts.regular
    },
    local: {
        color: dark.colors.text_primary,
        fontSize: 20,
        fontFamily: dark.fonts.regular,
        textAlign: 'center',
        width: '100%'
    },
    img: {
        width: responsiveWidth(25),
        height: responsiveWidth(25),
        margin: 10,
        borderWidth: responsiveWidth(0.8),
        borderRadius: 15,
        borderColor: '#6B0000',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%'
    },
    ico: {
        width: responsiveWidth(11),
        height: responsiveWidth(11)
    }
});