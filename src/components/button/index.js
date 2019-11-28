import React, {PureComponent} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

export default class Car extends PureComponent {
  render() {
    let {onPress, title} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
