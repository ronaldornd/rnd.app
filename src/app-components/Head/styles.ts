import { StatusBar, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { responsiveFontSize, responsiveWidth,responsiveHeight } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    top: StatusBar.currentHeight,
    backgroundColor: dark.colors.surface_secondary,

  },
  headerText: {
    fontSize: responsiveFontSize(5.5),
    color: dark.colors.primary,
    alignContent: 'center',
    textAlign: 'center',
    fontFamily: dark.fonts.regular,
    width: 115
  },
  share: {
    flex:1,
  },
  touch: {
    position: 'absolute',
    alignItems: 'center',
    right: 15,
    padding: 5,
   


  }
});