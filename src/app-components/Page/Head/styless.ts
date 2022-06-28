import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 65,
    paddingTop: 3,
    justifyContent: 'center',
    top: getBottomSpace() + 35,
    backgroundColor: theme.colors.surface_secondary,
    marginBottom: 40
  },
  headerText: {
    fontSize: 45,
    color: '#FF0000',
    alignSelf: 'center'
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