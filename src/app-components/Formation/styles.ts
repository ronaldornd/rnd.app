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
  },
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
  }
});