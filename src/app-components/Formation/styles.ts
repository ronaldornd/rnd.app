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
    margin: 7,
    backgroundColor: dark.colors.surface_secondary,
    paddingTop: 5,
    paddingBottom: 10,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: dark.colors.primary,
    position: 'relative'
  }
});