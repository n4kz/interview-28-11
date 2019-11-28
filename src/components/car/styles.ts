import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  brand: TextStyle;
  amount: TextStyle;
  light: ViewStyle;
  dark: ViewStyle;

  [propName: string]: ViewStyle | TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 15,
  },

  brand: {
    fontSize: 16,
  },

  amount: {
    marginTop: 4,
  },

  light: {
    backgroundColor: '#FFF',
  },

  dark: {
    backgroundColor: '#AAA',
  },
});

export default styles;
