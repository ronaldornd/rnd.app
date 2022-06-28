import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        marginBottom: 15
    },
    info: {
        alignContent: 'center',
        width: '95%',
        marginTop: 5,
        backgroundColor: theme.colors.surface_secondary,
        margin: 5,
        paddingTop: 5,
        paddingBottom: 10,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: theme.colors.brand
    },
    icons: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ico: {
        width: 55,
        height: 55
    }
});