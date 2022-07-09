import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
    },
    local: {
        flexDirection: 'row',
        width: "98%",
        justifyContent: 'space-between'
    },
    name: {
        color: dark.colors.text_primary,
        fontSize: responsiveFontSize(2.5),
        marginLeft: 5,
        fontFamily: dark.fonts.regular

    },
    map: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    }
});