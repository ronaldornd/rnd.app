import { StyleSheet } from 'react-native';
import { dark } from '../../theme';
import {
    responsiveWidth,
    responsiveScreenWidth,
    responsiveScreenHeight
} from "react-native-responsive-dimensions";
export const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 5
    },
    info: {
        alignContent: 'center',
        width: responsiveWidth(98),
        backgroundColor: dark.colors.surface_secondary,
        margin: 7,
        paddingTop: 5,
        paddingBottom: 10,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: dark.colors.primary,
        position: 'relative'
    },
    icons: {
        padding: 15,
        flexDirection: 'row',

        justifyContent: 'space-around',
        alignItems: 'center',
    },
    wid: {
        position: 'absolute',
        bottom: 5
    }

});