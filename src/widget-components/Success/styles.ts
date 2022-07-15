import { Alien } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(90),
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    image: {
        width: responsiveHeight(8),
        height: responsiveHeight(8),
        marginTop: responsiveScreenHeight(3),
        marginBottom: 10
    },
    title: {
        fontFamily: dark.fonts.regular,
        fontSize: responsiveFontSize(3.5),
        color: dark.colors.text_primary,
        marginBottom: 24
    },
    button: {
        height: 40,
        backgroundColor: dark.colors.primary,
        borderRadius: 4,
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginBottom: 46
    },
    buttonTitle: {
        fontSize: responsiveFontSize(2),
        fontFamily: dark.fonts.regular,
        color: dark.colors.background
    }
});