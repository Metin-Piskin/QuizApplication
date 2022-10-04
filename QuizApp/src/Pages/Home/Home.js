import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './Home.style';

import Title from '../../Components/Title';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Components/Assets/mt.png')}
        style={styles.banner}
      />
      <View style={styles.titlecontainer}>
        <Text style={styles.titletext}>Quizzles</Text>
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.textone}>Let's Play!</Text>
        <Text style={styles.texttwo}>Play now and set your Level</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttontext}>Play Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutbutton}>
        <Text style={styles.aboutbuttontext}>About</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;