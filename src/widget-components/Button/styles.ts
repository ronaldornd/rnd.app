import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        backgroundColor: theme.colors.brand,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    title: {
        fontSize: responsiveFontSize(1.8),
        fontFamily: theme.fonts.regular,
        color: theme.colors.text_onBrand
    }
});