import React from 'react';
import { Text, View } from 'react-native';

import styles from './Title.style';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzler</Text>
    </View>
  )
}

export default Title;