import React from "react";
import LottieView from 'lottie-react-native';

function Loading() {
    return <LottieView
        source={require('../Assets/bubble.json')}
        autoPlay
        style={{ 
            position: "absolute", 
            height: 350, 
            top:50,
        }}
    />;
}
export default Loading;