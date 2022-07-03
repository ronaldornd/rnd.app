import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: theme.colors.brand,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 6,
        bottom: getBottomSpace() + 16
    },
    modal: {
        flex: 1,
        backgroundColor: theme.colors.surface_primary,
        paddingBottom: getBottomSpace() + 16,
        position: 'absolute'
    },
    indicator: {
        backgroundColor: theme.colors.brand,
        width: 56,
    }
});