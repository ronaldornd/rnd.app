import { StatusBar, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    marginBottom: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    top: StatusBar.currentHeight,
    backgroundColor: dark.colors.surface_secondary,

  },
  headerText: {
    fontSize: responsiveFontSize(5.5),
    color: '#FF0000',
    alignContent: 'center',
    textAlign: 'center',
    fontFamily: dark.fonts.regular,
    width: 115
  },
  share: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
  },
  touch: {
    position: 'absolute',
    alignItems: 'center',
    right: 15,
    padding: 5,

  }
});