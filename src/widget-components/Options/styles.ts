import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    options: {
        width: '100%',
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: responsiveFontSize(3),
        marginBottom: 32,
        fontFamily: theme.fonts.regular,
        color: theme.colors.text_primary
    },
    image: {
        width: responsiveWidth(10),
        height: responsiveWidth(10)
    }
});