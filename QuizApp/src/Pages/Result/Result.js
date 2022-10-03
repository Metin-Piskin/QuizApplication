import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './Result.style';

import Title from '../../Components/Title';

const Result = ({ navigation, route }) => {
  const { score } = route.params

  const resultBanner = score > 40 ? require("../../Components/Assets/Home.png") : require("../../Components/Assets/Resu.png")



  return (
    <View style={styles.container}>
      <Title text={'Results'} />
      <Text style={styles.scorevalue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={resultBanner}
          style={styles.banner}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttontext}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result;