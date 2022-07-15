import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        backgroundColor: dark.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    title: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: dark.fonts.regular,
        color: dark.colors.background
    }
});