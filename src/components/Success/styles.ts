import { Alien } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        marginTop: 42,
        marginBottom: 10
    },
    title: {
        fontFamily: theme.fonts.medium,
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
        fontSize: 14,
        fontFamily: theme.fonts.medium,
        color: theme.colors.text_onBrand
    }
});