import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
    info: {
        flexDirection: 'column',
        alignContent: 'center',
    },
    header: {
        fontSize: 25,
        margin: 5,
        marginBottom: 0,
        color: theme.colors.text_primary,
        alignSelf: 'center'
    },
    div: {
        flexDirection: 'row'
    },
    habi: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 15,
        margin: 5,
        color: theme.colors.text_primary
    }
});