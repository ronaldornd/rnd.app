import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(27),
        height: responsiveWidth(30),
        justifyContent: 'center',
        alignItems: 'center',
        padding: responsiveScreenHeight(1),
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: dark.colors.surface_secondary
    },
    image: {
        width: responsiveWidth(15),
        height: responsiveWidth(15)
    },
    title: {
        fontSize: responsiveFontSize(2.5),
        marginTop: 8,
        fontFamily: dark.fonts.regular,
        color: dark.colors.text_primary
    }
});