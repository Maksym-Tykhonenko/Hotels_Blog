import React,{useState,useEffect} from "react";
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView, Image, ScrollView, TextInput, Modal } from "react-native";
import {useWindowDimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { uid } from "uid";
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserScreen = ({ navigation }) => {
    
    const [bcgrAvatar, setBcgrAvatar] = useState(null);
    const [avatart, setAvatart] = useState(null);
    const [prevName, setPrevName] = useState('');
    const [userName, setUserName] = useState(null);
    const [visitiesList, setVisitiesList] = useState([]);
    console.log('visitiesList==>', visitiesList)
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const [country, setCountry] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [selectedData, setSelectedData] = useState('');

    const { height, width } = useWindowDimensions();

    useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    setData();
  }, [avatart,bcgrAvatar,userName,visitiesList])

  const setData = async () => {
    try {
      const data = {
        avatart,
        bcgrAvatar,
        userName,
        visitiesList,
      }
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem("UserScreen", jsonData);
      console.log('Дані збережено в AsyncStorage')
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('UserScreen');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAvatart(parsedData.avatart);
        setBcgrAvatar(parsedData.bcgrAvatar);
        setUserName(parsedData.userName);
        setVisitiesList(parsedData.visitiesList);
        
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
    
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

    const handleAddVisitiesPlase = () => {
        let newPlace = {
            country,
            hotelName,
            data: selectedData,
        };
        setVisitiesList([newPlace, ...visitiesList ]);
        console.log('visitiesList==>', visitiesList);
        closeModal()
    };

    const closeModal = () => {
        setCountry("");
        setHotelName("");
        setSelectedData('');
        setModalIsVisible(false);
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
                                        style={{ marginLeft: 15, fontSize: 35, color: '#feb801', fontWeight: 'bold' }}
                                    >{userName.toUpperCase()}</Text>
                                )}
                               
                            </View>

                            <View style={{ flex: 1, }}>
                                <TouchableOpacity
                                    onPress={()=>{setModalIsVisible(true)}}
                                    style={{
                                        shadowOffset: { width: 3, height: 4 },
                                        shadowOpacity: .8,
                                        elevation: 9,
                                        fontSize: 20,
                                        borderWidth: 1,
                                        borderColor: 'gold',
                                        color: '#000',
                                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                        borderRadius: 50,
                                        width: 230,
                                        height: 40,
                                        marginLeft: 10,
                                        marginBottom: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text style={{ fontSize: 18, color: 'rgba(0, 0, 0, 0.5)' }}>ADD VISITED HOTEL
                                        <AntDesign name='arrowdown' style={{ fontSize: 18, fontWeight: 'bold' }} /></Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                {visitiesList.map((i) => {
                                    return (
                                        <View
                                            key={uid()}
                                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginBottom:3,marginHorizontal:10,borderRadius:10, padding:5,borderWidth:1,borderColor:'gold' }}>
                                            <Text>Date: {i.data }</Text>
                                            <Text>Country: {i.country}</Text>
                                            <Text>Hotel: {i.hotelName}</Text>
                                            
                                        </View>
                                    )
                                })}
                            </View>


                        </ScrollView>
                    </SafeAreaView>

                    
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalIsVisible}
                    >
                        <View style={{ backgroundColor: '#292c33', flex: 1, marginTop: '20%', borderTopLeftRadius: 10,borderTopRightRadius:10 }}>

                            <View style={{padding: 10}}>
                                <View style={{ alignItems: 'center', marginTop: 22, marginBottom: 20}}>
                                    <Text style={{color: 'gold', fontSize: 24, fontWeight: 'bold'}}>PLEASE ADD VISITED HOTEL</Text>
                                </View>

                                <View>
                                    <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Country..."
                                            value={country}
                                            onChangeText={setCountry}
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
                                    
                                    <TextInput
                                            placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                            placeholder="Hotel name..."
                                            value={hotelName}
                                            onChangeText={setHotelName}
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

                                    {/**Caledar */}
                                    
                                    <Calendar
                                        onDayPress={day => {
                                            setSelectedData(day.dateString);
                                        }}
                                        markedDates={{
                                            [selectedData]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                        }}
                                    />

                                    <TouchableOpacity
                                        onPress={() => {
                                            handleAddVisitiesPlase()
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
                                        borderRadius: 50,
                                        width: 150,
                                        height: 40,
                                        marginLeft: 10,
                                        marginTop: 15,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text style={{ fontSize: 18, color: 'rgba(0, 0, 0, 0.5)' }}>SAVE</Text>
                                </TouchableOpacity>
                                    
                                </View>
                                
                            </View>



                            {/**BTN MODAL Close */}
                            <TouchableOpacity
                                onPress={() => {
                                    closeModal()
                                }}
                                style={{ position: 'absolute', top: 5, right: 10 }}>
                                <Text style={{ color: 'gold', fontSize: 30 }}>X</Text>
                            </TouchableOpacity>

                        </View>

                    </Modal>


                    <TouchableOpacity
                        onPress={() => { navigation.navigate('HomeScreen') }}
                        style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <Entypo name='home' style={{ color: '#feb801', fontSize: 35 }} />
                    </TouchableOpacity>
                </View>
               
            </ImageBackground>
        </View>
    );
};

export default UserScreen;