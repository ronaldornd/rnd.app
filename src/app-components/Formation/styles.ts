import { StyleSheet } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    paddingTop: 5
  },
  info: {
    alignContent: 'center',
    width: responsiveWidth(98),
    backgroundColor: dark.colors.surface_secondary,
    margin: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: dark.colors.primary,
    position: 'relative'
  },
  rocketInfo: {
    alignContent: 'center',
    width: responsiveWidth(98),
    backgroundColor: dark.colors.surface_secondary,
    margin: 5,
    paddingTop: 5,
    paddingBottom: 10,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: "#bf5afa",
    position: 'relative'
  }
});