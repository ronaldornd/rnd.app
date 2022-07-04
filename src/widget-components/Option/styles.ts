import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(23),
        height: responsiveWidth(25),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: theme.colors.surface_secondary
    },
    image: {
        width: responsiveWidth(13),
        height: responsiveWidth(13)
    },
    title: {
        fontSize: responsiveFontSize(1.8),
        marginTop: 8,
        fontFamily: theme.fonts.regular,
        color: theme.colors.text_primary
    }
});