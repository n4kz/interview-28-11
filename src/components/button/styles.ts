import {StyleSheet, TextStyle} from 'react-native';

interface Styles {
  title: TextStyle;
}

export default StyleSheet.create<Styles>({
  title: {
    borderRadius: 4,
    margin: 8,
    padding: 8,
    backgroundColor: '#CAE',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
