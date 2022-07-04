import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    text: {
        fontSize: responsiveFontSize(1.4),
        color: theme.colors.text_secondary,
        fontFamily: theme.fonts.regular,
        position: 'relative'
    },
    my: {
        fontWeight: 'bold',
    }
});