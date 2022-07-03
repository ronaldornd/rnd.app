import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    info: {
        alignContent: 'center',
        width: '98%',
        marginTop: 5,
        backgroundColor: theme.colors.surface_secondary,
        margin: 5,
        paddingTop: 5,
        paddingBottom: 10,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: theme.colors.brand,
        position: 'relative'
    },
    icons: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ico: {
        position: 'relative',
        width: 55,
        height: 55
    },
    wid: {
        right: 5
    }
});