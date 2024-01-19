import React,{useState} from "react";
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView, Image, ScrollView } from "react-native";
import {useWindowDimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const UserScreen = ({ navigation }) => {
    
    const [bcgrAvatar, setBcgrAvatar] = useState(null);
    const [avatart, setAvatart] = useState(null);
    const { height, width } = useWindowDimensions();
    
    const bcgrAvatarImagePicer = () => {
        let options = {
            storageOptios: {
                path: 'image',
            }
        };
        
        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                //console.log('response==>', response.assets[0].uri);
                setBcgrAvatar(response.assets[0].uri);

            } else {
                console.log('Вибір скасовано');
            }
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    
                    <SafeAreaView style={{ flex: 1, }}>
                        <ScrollView>

                            {/**AVATART BLOCK */}
                            <View style={{ width: width }}>
                                {/**CAVER */}
                                {bcgrAvatar ? (
                                    <View>
                                        <Image
                                            source={{ uri: bcgrAvatar }}
                                            style={{ width: '100%', height: 250, borderWidth: 1, borderColor: '#feb801', borderRadius: 10 }}
                                        />
                                        <TouchableOpacity
                                            onPress={() => { bcgrAvatarImagePicer() }}
                                            style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 1, borderColor: '#feb801', borderRadius: 150, position: 'absolute', right: 10, bottom: -25 }}>
                                            <MaterialIcons name='photo-camera' style={{ color: '#0395e0', fontSize: 35 }} />
                                        </TouchableOpacity>
                                    </View>) : (
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => { bcgrAvatarImagePicer() }}
                                            style={{ alignItems: 'center', justifyContent: 'center', height: 250, borderWidth: 1, borderColor: '#feb801', borderRadius: 5, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                                        ></TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => { bcgrAvatarImagePicer() }}
                                            style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 1, borderColor: '#feb801', borderRadius: 150, position: 'absolute', right: 10, bottom: -25 }}>
                                            <MaterialIcons name='photo-camera' style={{ color: '#0395e0', fontSize: 35 }} />
                                        </TouchableOpacity>
                                    </View>
                                )}
                                {/**AVATAR */}
                                {avatart ? (
                                    <></>
                                ) : (
                                    <></>
                                )}

                            </View>


                        </ScrollView>
                    </SafeAreaView>

                    
                    


                    <TouchableOpacity
                        onPress={() => { navigation.navigate('HomeScreen') }}
                        style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <Entypo name='home' style={{ color: '#fff', fontSize: 35 }} />
                    </TouchableOpacity>
                </View>
               
            </ImageBackground>
        </View>
    );
};

export default UserScreen;