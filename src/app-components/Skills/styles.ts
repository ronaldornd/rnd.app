import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
        justifyContent: 'space-around',
        marginTop: 5
    },
    info: {
        alignContent: 'center',
        width: responsiveWidth(98),
        backgroundColor: dark.colors.surface_secondary,

        padding: 5,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: dark.colors.primary,
        position: 'relative',
    },
    text: {
        fontSize: responsiveFontSize(2),
        fontFamily: dark.fonts.regular,
        color: dark.colors.text_primary,
        marginBottom: 3
    },



});