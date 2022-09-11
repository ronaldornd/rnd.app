import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        backgroundColor: dark.colors.surface_secondary,
        borderRadius: 8,
        padding: 10,
        margin: 10
    },
    header: {
        width: responsiveWidth(90),
        textAlign: 'center',
        color: dark.colors.text_primary,
        fontFamily: dark.fonts.regular,
        fontSize: responsiveFontSize(5),
        margin: 1,

    },
    input: {
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        height: responsiveHeight(5),
        width: responsiveWidth(85),
        backgroundColor: dark.colors.surface_primary,
        borderWidth: 2,
        borderColor: dark.colors.text_primary,
        margin: 5,

    },
    icon: {
        margin: 5
    },
    inputArea: {
        width: responsiveWidth(80),
        color: dark.colors.text_primary
    },
    buttons: {
        width: responsiveWidth(85),
        height: responsiveHeight(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    btn: {
        width: responsiveWidth(40),
        height: responsiveHeight(5),
        backgroundColor: dark.colors.surface_primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },
    btnGreen: {
        width: responsiveWidth(40),
        height: responsiveHeight(5),
        backgroundColor: "#023a01",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },
    btnText: {
        fontSize: responsiveFontSize(3),
        color: dark.colors.text_primary,
    },
    services: {
        height: responsiveHeight(70),
        width: responsiveWidth(85),
        margin: 10,
    },
    serviceInfo: {
        backgroundColor: dark.colors.surface_primary,
        padding: 5,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 8
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(80),

    },
    info: {
        color: dark.colors.text_primary,
        fontFamily: dark.fonts.regular,
    },

});