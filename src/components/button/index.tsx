import React, {PureComponent} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
  title: string;
}

export default class Car extends PureComponent<Props, {}> {
  render() {
    let {onPress, title} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
