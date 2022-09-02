import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(100),
        height: responsiveHeight(100)
    },
    txt: {
        color: dark.colors.primary,
        fontSize: responsiveFontSize(3),

    }
});