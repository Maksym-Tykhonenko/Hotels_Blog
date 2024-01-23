import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

import { germanHotels } from "../data/germanHotels";

const QuizScreen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    

                    <TouchableOpacity
                                        //key={uid()}
                                        onPress={() => {
                                            navigation.navigate('GameScreen')
                                        }}
                                        style={{ marginBottom: 10, width: 250, height: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 20, borderColor: '#feb801', backgroundColor: 'rgba(255, 255, 255, 0.5)', shadowOffset: { width: 3, height: 4 }, shadowOpacity: 0.8, elevation: 9, }}>
                                        <Text style={{ color: '#feb801', fontWeight: 'bold', fontSize: 20 }}>HOTELS QUIZ</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                                        //key={uid()}
                                        onPress={() => {
                                            navigation.navigate('RulsScreen')
                                        }}
                                        style={{ marginBottom: 10, width: 250, height: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 20, borderColor: '#feb801', backgroundColor: 'rgba(255, 255, 255, 0.5)', shadowOffset: { width: 3, height: 4 }, shadowOpacity: 0.8, elevation: 9, }}>
                                        <Text style={{ color: '#feb801', fontWeight: 'bold', fontSize: 20 }}>RULS</Text>
                    </TouchableOpacity>
                    
                    


                    <TouchableOpacity
                        onPress={() => { navigation.navigate('HomeScreen')}}
                        style={{ position: 'absolute', bottom: 10, right: 10 }}>
                         <Entypo name='home' style={{color: '#feb801', fontSize: 35}} />
                    </TouchableOpacity>
                </View>
               
            </ImageBackground>
        </View>
    )
};

export default QuizScreen;