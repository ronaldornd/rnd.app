import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(7),
    justifyContent: 'space-around',

  },
  ico: {
    flex: 1,
    width: 55,
    height: 55
  },
});