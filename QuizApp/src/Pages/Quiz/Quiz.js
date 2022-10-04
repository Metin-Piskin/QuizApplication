import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Quiz.style';

import LoadingScreen from '../../Components/Loading/Loading';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true)
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
    setIsLoading(false)
  };
  useEffect(() => {
    getQuiz()
  }, [])

  const handleNextPress = () => {
    setQues(ques + 1)
    setNumber(number + 1)
    setOptions(generateOptionsAndShuffle(questions[ques + 1]))
  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
  }

  const handleSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10)
    }
    if (ques !== 9) {
      setQues(ques + 1)
      setNumber(number + 1)
      setOptions(generateOptionsAndShuffle(questions[ques + 1]))
    }
    if (ques === 9) {
      handleShowResult()
    }
  }
  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score
    })
  }

  return (
    <View style={styles.container}>
      {isLoading ?
        <View style={{ flex: 1 }}>
          <LoadingScreen />
        </View> :
        questions && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.number}>{number}/10</Text>
              <Text style={styles.question}>
                {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity style={styles.optionbutton} onPress={() => handleSelectedOption(options[0])}>
                <View style={styles.optionsayi}>
                  <Text style={styles.optionsayitext}>1</Text>
                </View>
                <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionbutton} onPress={() => handleSelectedOption(options[1])}>
                <View style={styles.optionsayi}>
                  <Text style={styles.optionsayitext}>2</Text>
                </View>
                <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionbutton} onPress={() => handleSelectedOption(options[2])}>
                <View style={styles.optionsayi}>
                  <Text style={styles.optionsayitext}>3</Text>
                </View>
                <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionbutton} onPress={() => handleSelectedOption(options[3])}>
                <View style={styles.optionsayi}>
                  <Text style={styles.optionsayitext}>4</Text>
                </View>
                <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonvontainer}>
              {ques !== 9 &&
                <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                  <Text style={styles.buttontext}>SKIP</Text>
                </TouchableOpacity>
              }

              {ques === 9 &&
                <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                  <Text style={styles.buttontext}>SHOW RESULTS</Text>
                </TouchableOpacity>
              }
            </View>
          </View>
        )}
    </View>
  )
}

export default Quiz;