import React,{useState} from "react";
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView, Image, ScrollView, TextInput } from "react-native";
import {useWindowDimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const UserScreen = ({ navigation }) => {
    
    const [bcgrAvatar, setBcgrAvatar] = useState(null);
    const [avatart, setAvatart] = useState(null);
    const [prevName, setPrevName] = useState('');
    const [userName, setUserName] = useState(null);

    const { height, width } = useWindowDimensions();
    
    const avatarImagePicer = () => {
        let options = {
            storageOptios: {
                path: 'image',
            }
        };
        
        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                //console.log('response==>', response.assets[0].uri);
                setAvatart(response.assets[0].uri);

            } else {
                console.log('Вибір скасовано');
            }
        });
    };

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
                            <View style={{ width: width, position: 'relative' }}>
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
                                    <View style={{ position: 'relative', width: 150 }}>
                                        <Image
                                            style={{ position: 'absolute', bottom: -75, left: 10, width: 150, height: 150, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: '#feb801', borderWidth: 1, borderRadius: 150 }}
                                            source={{ uri: avatart }}
                                        />
                                        <TouchableOpacity
                                            onPress={() => {
                                                avatarImagePicer()
                                            }}
                                            style={{ position: 'absolute', right: -25, bottom: -60, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 1, borderColor: '#feb801', borderRadius: 50, }}>
                                            <MaterialIcons name='add-a-photo' style={{ color: '#0395e0', fontSize: 30 }} />
                                        </TouchableOpacity>
                                    </View>
                                    
                                ) : (
                                    <TouchableOpacity
                                        onPress={() => {
                                            avatarImagePicer()
                                        }}
                                        style={{ position: 'absolute', bottom: -75, left: 10, width: 150, height: 150, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: '#feb801', borderWidth: 1, borderRadius: 150 }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                avatarImagePicer()
                                            }}
                                            style={{ position: 'absolute', right: 0, bottom: 0, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 1, borderColor: '#feb801', borderRadius: 50, }}>
                                            <MaterialIcons name='add-a-photo' style={{ color: '#0395e0', fontSize: 30 }} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                )}

                            </View>

                            {/**NAME BLOCK */}
                            <View style={{ marginTop: 80 }}>
                                {!userName ? (
                                    <View style={{ flexDirection: 'row', }}>
                                        <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Name..."
                                            value={prevName}
                                            onChangeText={setPrevName}
                                            style={{
                                                shadowOffset: { width: 3, height: 4 },
                                                shadowOpacity: .8,
                                                elevation: 9,
                                                //marginTop: 80,
                                                marginBottom: 15,
                                                paddingLeft: 10,
                                                fontSize: 20,
                                                borderWidth: 1,
                                                borderColor: 'gold',
                                                color: '#000',
                                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                borderRadius: 10,
                                                width: 250,
                                                height: 40,
                                             
                                            }}
                                        />
                                        <TouchableOpacity
                                            onPress={() => {
                                                setUserName(prevName)
                                            }}
                                            style={{
                                                shadowOffset: { width: 3, height: 4 },
                                                shadowOpacity: .8,
                                                elevation: 9,
                                                fontSize: 20,
                                                borderWidth: 1,
                                                borderColor: 'gold',
                                                color: '#000',
                                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                borderRadius: 10,
                                                width: 40,
                                                height: 40,
                                                marginLeft: 10,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Entypo name='check' style={{ color: '#0395e0', fontSize: 30 }} />
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                        <Text
                                            style={{marginLeft: 15, fontSize: 35, color: '#feb801', fontWeight: 'bold'}}
                                        >{userName.toUpperCase()}</Text>
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