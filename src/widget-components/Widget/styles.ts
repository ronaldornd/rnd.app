import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../theme';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
export const styles = StyleSheet.create({
    button: {
        width: responsiveWidth(13),
        height: responsiveWidth(13),
        borderRadius: 44,
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
        width: responsiveWidth(16),
    }
});