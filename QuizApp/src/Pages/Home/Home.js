import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './Home.style';

import Title from '../../Components/Title';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={require('../../Components/Assets/HomeBir.png')}
          style={styles.banner}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttontext}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;