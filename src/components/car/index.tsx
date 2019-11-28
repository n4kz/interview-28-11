import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export interface CarProps {
  theme: string;
  brand: string;
  amount: number;
}

export default class Car extends PureComponent<CarProps, {}> {
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
