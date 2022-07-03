import { StatusBar, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    marginBottom: StatusBar.currentHeight,
    justifyContent: 'center',

    top: StatusBar.currentHeight,
    backgroundColor: theme.colors.surface_secondary,

  },
  headerText: {
    fontSize: 45,
    color: '#FF0000',
    alignSelf: 'center',
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