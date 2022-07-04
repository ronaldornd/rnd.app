import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        marginVertical: 16,
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
        fontSize: responsiveFontSize(2.5),
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.regular
    },
    image: {
        width: responsiveScreenWidth(6),
        height: responsiveScreenWidth(6),
        marginRight: 8
    },
    input: {
        width: "100%",
        height: 112,
        padding: 12,
        marginBottom: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.stroke,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.regular,
        fontSize: responsiveFontSize(2)
    },
    footer: {
        flexDirection: 'row',
        marginBottom: getBottomSpace() + 16
    }
});