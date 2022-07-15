import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        padding: responsiveScreenHeight(0.5),
        paddingHorizontal: responsiveScreenHeight(2),
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',

        alignItems: 'center'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 24
    },
    titleText: {
        fontSize: responsiveFontSize(3.5),
        color: dark.colors.text_primary,
        fontFamily: dark.fonts.regular
    },
    image: {
        width: responsiveScreenWidth(6),
        height: responsiveScreenWidth(6),
        marginRight: 8
    },
    input: {
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(19),
        padding: 12,
        marginTop: responsiveScreenHeight(2),
        marginBottom: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: dark.colors.stroke,
        color: dark.colors.text_primary,
        fontFamily: dark.fonts.regular,
        fontSize: responsiveFontSize(2)
    },
    footer: {
        flexDirection: 'row',
        marginBottom: getBottomSpace() + 16
    }
});