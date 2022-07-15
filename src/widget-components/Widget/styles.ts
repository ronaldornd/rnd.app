import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { dark } from '../../theme';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenWidth,
    responsiveScreenHeight,
} from "react-native-responsive-dimensions";
export const styles = StyleSheet.create({
    button: {
        width: responsiveWidth(13),
        height: responsiveWidth(13),
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 6,

    },
    centeredView: {
        bottom: -1,
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(40),
        position: 'absolute',
        justifyContent: 'flex-start'
    },
    indicator: {
        width: responsiveWidth(16),
    },
    modalView: {
        flex: 1,
        alignItems: 'flex-start',

        backgroundColor: dark.colors.surface_primary,
        bottom: 0,
        paddingTop: responsiveHeight(2),
        height: responsiveScreenHeight(40),
        width: responsiveScreenWidth(100),
        justifyContent: "flex-start",
        borderColor: dark.colors.primary,
        borderWidth: 2,
        borderBottomWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalText: {},

    buttonClose: {
        marginTop: responsiveScreenHeight(1.4),
        marginRight: responsiveScreenHeight(1)
    },
    textStyle: {},
    buttonOpen: {
        backgroundColor: dark.colors.primary,
        width: responsiveWidth(14),
        height: responsiveWidth(14),
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 6,
        bottom: getBottomSpace() + 16
    }


});