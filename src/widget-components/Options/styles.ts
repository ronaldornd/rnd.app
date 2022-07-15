import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'flex-start'
    },
    options: {
        width: responsiveScreenWidth(98),
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: responsiveFontSize(3.5),
        marginBottom: 32,
        padding: responsiveScreenHeight(0.5),

        fontFamily: dark.fonts.regular,
        color: dark.colors.text_primary
    },
    image: {
        width: responsiveWidth(10),
        height: responsiveWidth(10)
    }
});