import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const QuizScreen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    

                    <Text>Quiz Screen</Text>
                    


                    <TouchableOpacity
                        onPress={() => { navigation.navigate('HomeScreen')}}
                        style={{ position: 'absolute', bottom: 10, right: 10 }}>
                         <Entypo name='home' style={{color: '#fff', fontSize: 35}} />
                    </TouchableOpacity>
                </View>
               
            </ImageBackground>
        </View>
    )
};

export default QuizScreen;