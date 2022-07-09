import { Alien } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: responsiveHeight(8),
        height: responsiveHeight(8),
        marginTop: responsiveScreenHeight(3),
        marginBottom: 10
    },
    title: {
        fontFamily: dark.fonts.regular,
        fontSize: 22,
        color: dark.colors.text_primary,
        marginBottom: 24
    },
    button: {
        height: 40,
        backgroundColor: dark.colors.brand,
        borderRadius: 4,
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginBottom: 16
    },
    buttonTitle: {
        fontSize: responsiveFontSize(2),
        fontFamily: dark.fonts.regular,
        color: dark.colors.text_onBrand
    }
});