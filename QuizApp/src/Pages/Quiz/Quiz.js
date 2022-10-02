import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Quiz.style';

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz()
  }, [])
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q. Imagin this is a really cool question
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>Cool Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>Cool Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>Cool Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>Cool Option 4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonvontainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>NEXT</Text>
            </TouchableOpacity>
            {/*
        <TouchableOpacity onPress={() => navigation.navigate('Result')} style={styles.button}>
          <Text style={styles.buttontext}>END</Text>
        </TouchableOpacity>
        */}
          </View>
        </View>
      )}
    </View>
  )
}

export default Quiz;