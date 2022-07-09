import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    text: {
        fontSize: responsiveFontSize(1.4),
        color: dark.colors.text_secondary,
        fontFamily: dark.fonts.regular,
        position: 'relative'
    },
    my: {
        fontWeight: 'bold',
    }
});