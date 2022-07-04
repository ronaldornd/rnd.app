import { StatusBar, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    marginBottom: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    top: StatusBar.currentHeight,
    backgroundColor: theme.colors.surface_secondary,

  },
  headerText: {
    fontSize: responsiveFontSize(6),
    color: '#FF0000',
    alignContent: 'center',
    marginBottom: 5
  },
  share: {
    width: 35,
    height: 35,
  },
  touch: {
    position: 'absolute',
    alignSelf: 'center',
    right: 15,

  }
});