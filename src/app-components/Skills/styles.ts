import { StyleSheet } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
    container: {},
    info: {
        alignContent: 'center',
        width: responsiveWidth(98),
        marginTop: 5,
        backgroundColor: dark.colors.surface_secondary,
        margin: 5,
        paddingTop: 5,
        paddingBottom: 10,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: dark.colors.primary,
        position: 'relative'
    },
    text: {}
});