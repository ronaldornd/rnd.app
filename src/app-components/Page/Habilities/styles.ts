import EStyleSheet from 'react-native-extended-stylesheet';
import { theme } from '../../../theme';

export const styles = EStyleSheet.create({
    info: {
        flexDirection: 'column',
        alignContent: 'center',
    },
    header: {
        fontSize: '25rem',
        margin: 5,
        marginBottom: 0,
        color: theme.colors.text_primary,
        alignSelf: 'center'
    },
    div: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    habi: {
        flexDirection: 'column',
    },
    text: {
        fontSize: 15,
        margin: 5,
        color: theme.colors.text_primary,
        textAlign: 'center'
    }
});