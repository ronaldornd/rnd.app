import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
    info: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    textInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        alignItems: 'center'
    },
    text: {
        color: theme.colors.text_primary,
        fontSize: 26,
    },
    local: {
        color: theme.colors.text_primary,
        fontSize: 20,
    },
    img: {
        width: 125,
        height: 125,
        margin: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#6B0000',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%'
    },
    ico: {
        width: 40,
        height: 40
    }
});