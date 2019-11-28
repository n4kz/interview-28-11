import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export default class Car extends PureComponent {
  render() {
    let {theme, brand, amount} = this.props;

    return (
      <View style={[styles.container, styles[theme]]}>
        <Text style={styles.brand}>Brand: {brand}</Text>
        <Text style={styles.amount}>Amount: {amount}</Text>
      </View>
    );
  }
}
