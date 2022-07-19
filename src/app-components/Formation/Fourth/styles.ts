import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
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
        color: "#9f02fa",
        marginLeft: 5
    },
    info: {
        width: '100%',
        alignItems: 'center'
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
    },
    text: {
        fontSize: responsiveFontSize(1.98),
        fontFamily: dark.fonts.regular,
        color: dark.colors.text_primary,
        margin: 3,
        width: responsiveWidth(90)
    },

});