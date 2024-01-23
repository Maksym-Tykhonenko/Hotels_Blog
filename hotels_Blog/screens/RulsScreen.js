import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView ,SafeAreaView} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const RulsScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <SafeAreaView style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    

                    <ScrollView>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 20, marginVertical: 20, padding: 10, borderRadius: 10 }}>
                            <View>
                                <Text style={{ fontWeight: 'bold',fontSize:20, marginBottom: 10 }}>Rules of the game:</Text>

                                <Text style={{ fontWeight: 'bold' }}>1) Start of the game:</Text>

                                <Text style={{marginBottom: 10}}>  There are two columns on the screen: on the left - hotel names, on the right - photos of these hotels.
                                    The goal of the game is to correctly match the name of the hotel with its photo.
                                </Text>
                                <Text style={{ fontWeight: 'bold' }}>2) Choosing a hotel name:</Text>
                                    

                                <Text style={{marginBottom: 10}}>  The player touches the name of the hotel in the left column.
                                    The name of the hotel lights up in green.</Text>
                                
                                <Text style={{ fontWeight: 'bold' }}>3) Selection of photos of the hotel:</Text>

                                <Text style={{marginBottom: 10}}>  The player touches the photo of the hotel in the right column.
                                    The photo of the hotel lights up in green.</Text>
                                
                                <Text style={{ fontWeight: 'bold' }}>4) Compliance check:</Text>

                                <Text style={{marginBottom: 10}}>  The system checks whether the name of the hotel and its photo are correctly selected.
                                    If the choice is correct, the pair disappears from the screen.
                                </Text>
                                <Text style={{ fontWeight: 'bold' }}>5) The game continues:</Text>

                                <Text style={{marginBottom: 10}}>    The player repeats the selection of names and photos until all pairs are correctly connected.</Text>
                                <Text style={{ fontWeight: 'bold' }}>Ending the game:</Text>

                                <Text>  The game ends when all pairs of hotel names and photos are correctly connected.
                                    A message about the end of the game is displayed.</Text>
                                <Text style={{ marginTop: 20, fontWeight:'bold' }}>  This quiz develops players' attentiveness and memory, allowing them to enjoy the beauty of different hotels.</Text>
                            </View>
                        </View>
                    </ScrollView>
                    


                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <Entypo name='reply' style={{ color: '#feb801', fontSize: 35 }} />
                    </TouchableOpacity>
                </SafeAreaView>
               
            </ImageBackground>
        </View>
    );
};

export default RulsScreen;