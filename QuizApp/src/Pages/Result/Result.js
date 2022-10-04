import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Result.style';

import Title from '../../Components/Title';
import Bubble from '../../Components/Bubble/Bubble';
import { Refresh } from '../../Components/Svg';

const Result = ({ navigation, route }) => {
  const { score } = route.params

  const resultBanner = score > 40 ? require("../../Components/Assets/yeşil.png") : require("../../Components/Assets/kırmızı.png")



  return (
    <View style={styles.container}>
      <Title text={'Results'} />
      <LinearGradient
        colors={['#6949FE', '#000000c0']}
        style={styles.scorecontainer}
      >
        <Bubble />
        <Text style={styles.scoretitle}>Your final score is</Text>
        <View>
          <ImageBackground
            source={resultBanner}
            style={styles.banner}
          >
            <Text style={styles.scorevalue}>{score}</Text>
          </ImageBackground>
        </View>
      </LinearGradient>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Refresh />
          <Text style={styles.buttontext}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result;