import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView ,SafeAreaView} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const AboutAppScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <SafeAreaView style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    

                    <ScrollView>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 20, marginVertical: 20, padding: 10, borderRadius: 10 }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Description:</Text>

                                <Text style={{ marginBottom: 10 }}>Hotels Blog - your personal world of travel and hotel service experiences. It's an app built for private use that helps you save and share your travels.</Text>

                                <Text style={{ fontWeight: 'bold',marginBottom: 10 }}>Main functions:</Text>
                                
                                <Text style={{ fontWeight: 'bold' }}>1) News feed:</Text>

                                <Text style={{ marginBottom: 10 }}>  The main page adds fresh news related to the hotel theme, giving you new ideas and trends in the world of travel.
                                </Text>
                                <Text style={{ fontWeight: 'bold' }}>2) Adding hotels by country:</Text>
                                    

                                <Text style={{ marginBottom: 10 }}>  In the "HOTELS" section, you can select a country and add the hotels you have visited. Record impressions, rate and share your experience.</Text>
                                
                                <Text style={{ fontWeight: 'bold' }}>3) Creating a personal profile:</Text>

                                <Text style={{ marginBottom: 10 }}>  Complete the user page to make the application more personalized. Add your photos and information about yourself.</Text>
                                
                                <Text style={{ fontWeight: 'bold' }}>4) Quiz for fun:</Text>

                                <Text style={{ marginBottom: 10 }}>  Entertain yourself on the road with a hotel quiz. Have a fun and educational time testing your knowledge.
                                </Text>
                                <Text style={{ fontWeight: 'bold' }}>5) Privacy and security:</Text>

                                <Text style={{ marginBottom: 10 }}>    Hotels Blog guarantees you privacy and data security, allowing you to enjoy your travels worry-free.</Text>
                               
                                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>  Let your travels become part of the big world of Hotels Blog, where every journey is a new story and every hotel is a special experience.</Text>
                            </View>
                        </View>
                    </ScrollView>
                    
                   
                    


                    <TouchableOpacity
                        onPress={() => { navigation.navigate('HomeScreen') }}
                        style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <Entypo name='home' style={{ color: '#feb801', fontSize: 35 }} />
                    </TouchableOpacity>
                </SafeAreaView>
               
            </ImageBackground>
        </View>
    );
};

export default AboutAppScreen;