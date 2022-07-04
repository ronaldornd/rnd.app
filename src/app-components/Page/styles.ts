import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
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
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
        justifyContent: 'flex-start',
    },
    info: {
        alignContent: 'center',
        width: responsiveWidth(98),
        marginTop: 5,
        backgroundColor: theme.colors.surface_secondary,
        margin: 5,
        paddingTop: 5,
        paddingBottom: 10,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: theme.colors.brand,
        position: 'relative'
    },
    icons: {
        padding: 15,
        flexDirection: 'row',

        justifyContent: 'space-around',
        alignItems: 'center',
    },

});