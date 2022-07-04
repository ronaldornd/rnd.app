import { Alien } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { theme } from '../../theme';

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
        fontFamily: theme.fonts.regular,
        fontSize: 22,
        color: theme.colors.text_primary,
        marginBottom: 24
    },
    button: {
        height: 40,
        backgroundColor: theme.colors.brand,
        borderRadius: 4,
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginBottom: 16
    },
    buttonTitle: {
        fontSize: responsiveFontSize(2),
        fontFamily: theme.fonts.regular,
        color: theme.colors.text_onBrand
    }
});