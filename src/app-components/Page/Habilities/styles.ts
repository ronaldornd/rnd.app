import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';
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
        color: theme.colors.text_primary,
        alignSelf: 'center'
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
        color: theme.colors.text_primary,
        textAlign: 'center'
    }
});