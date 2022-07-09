import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
    },
    local: {
        flexDirection: 'row',
        width: "98%",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        color: dark.colors.text_primary,
        fontSize: responsiveFontSize(2.5),
        marginLeft: 5,
        fontFamily: dark.fonts.regular

    },
    map: {
        width: responsiveWidth(8),
        height: responsiveWidth(8),
    },
    type: {
        fontFamily: dark.fonts.regular,
        fontSize: responsiveFontSize(1.7),
        color: dark.colors.text_secondary,
        marginLeft: 5
    },
    actHeader: {
        fontFamily: dark.fonts.regular,
        fontSize: responsiveFontSize(2),
        color: dark.colors.text_primary,
        marginLeft: 10,
        paddingTop: 10,
    },
    activities: {
        paddingTop: 5,
        fontFamily: dark.fonts.regular,
        fontSize: responsiveFontSize(2),
        color: dark.colors.text_primary,
        marginLeft: 15
    }
});