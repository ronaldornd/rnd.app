import { StyleSheet } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
        justifyContent: 'flex-start',
        marginTop: 5
    },
    info: {
        alignContent: 'center',
        width: responsiveWidth(98),
        backgroundColor: dark.colors.surface_secondary,
        margin: 7,
        padding: 5,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: dark.colors.primary,
        position: 'relative',
    },
    text: {
        fontFamily: dark.fonts.regular,
        color: dark.colors.text_primary,
        marginBottom: 3
    },
    levelText: {
        fontFamily: dark.fonts.regular,
        color: dark.colors.text_primary,
    },
    level: {
        flexDirection: 'row',
        width: '99%',
        justifyContent: 'space-between',
        marginTop: 1

    }

});