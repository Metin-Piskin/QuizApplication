import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './Result.style';

const Result = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../../Components/Assets/Home.png')}
          style={styles.banner}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result;