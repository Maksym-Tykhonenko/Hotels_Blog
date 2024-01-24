import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Modal, TextInput } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { germanHotels } from "../data/germanHotels";
import { franceHotels } from "../data/franceHotels";
import { uid } from "uid";
import AsyncStorage from '@react-native-async-storage/async-storage';


const SelectCountryScreen = ({ navigation }) => {

    const [germanHotelsState, setGermanHotelsState] = useState(germanHotels);
    const [franceHotelsState, setFranceHotelsState] = useState(franceHotels);
    const [madalIsVisible, setMadalIsVisible] = useState(false);
    const [countryName, setCountryName] = useState('');
    const [country, setCountry] = useState([]);
    console.log('country==>', country);

    useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    setData();
  }, [country])

  const setData = async () => {
    try {
      const data = {
        country,
      }
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem("SelectCountryScreen", jsonData);
      console.log('Дані збережено в AsyncStorage')
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('SelectCountryScreen');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setCountry(parsedData.country);
        
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

    const handleAddCountry = () => {
        setCountry([...country, countryName])

        setMadalIsVisible(false);
        setCountryName("");

    };
    
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    
                    <SafeAreaView >
                        <ScrollView style={{ marginTop: 30 }}>

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('SelectHotelsScreen', { hotels: germanHotelsState })
                                }}
                                style={{ marginBottom: 10, width: 250, height: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 20, borderColor: '#feb801', backgroundColor: 'rgba(255, 255, 255, 0.5)', shadowOffset: { width: 3, height: 4 }, shadowOpacity: 0.8, elevation: 9, }}>
                                <Text style={{ color: '#feb801', fontWeight: 'bold', fontSize: 20 }}>GERMANY</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('SelectHotelsScreen', { hotels: franceHotelsState })
                                }}
                                style={{ marginBottom: 10, width: 250, height: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 20, borderColor: '#feb801', backgroundColor: 'rgba(255, 255, 255, 0.5)', shadowOffset: { width: 3, height: 4 }, shadowOpacity: 0.8, elevation: 9, }}>
                                <Text style={{ color: '#feb801', fontWeight: 'bold', fontSize: 20 }}>FRANCE</Text>
                            </TouchableOpacity>

                            {country && country.map((i) => {
                                return (
                                    <TouchableOpacity
                                        key={uid()}
                                        onPress={() => {
                                            navigation.navigate('NewSelectHotelsScreen', { country: i })
                                        }}
                                        style={{ marginBottom: 10, width: 250, height: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 20, borderColor: '#feb801', backgroundColor: 'rgba(255, 255, 255, 0.5)', shadowOffset: { width: 3, height: 4 }, shadowOpacity: 0.8, elevation: 9, }}>
                                        <Text style={{ color: '#feb801', fontWeight: 'bold', fontSize: 20 }}>{i.toUpperCase() }</Text>
                                    </TouchableOpacity>
                                )
                            })}

                        </ScrollView>
                    
                    </SafeAreaView>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={madalIsVisible}
                    >
                        <View style={{ backgroundColor: '#292c33', flex: 1, marginVertical: '45%', marginHorizontal: '5%', borderRadius: 15, shadowOffset: { width: 3, height: 4 }, shadowOpacity: 0.8, elevation: 9, }}>

                            <View style={{ alignItems: 'center', marginTop: 40 }}>
                                <Text style={{ color: '#feb801', fontWeight: 'bold', fontSize: 30 }}>ADD COUNTRY:</Text>
                                

                                <TextInput
                                    placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                    placeholder="Country..."
                                    value={countryName}
                                    onChangeText={setCountryName}
                                    style={{
                                        shadowOffset: { width: 3, height: 4 },
                                        shadowOpacity: .8,
                                        elevation: 9,
                                        marginTop: 20,
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
                                        handleAddCountry()
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
                                        width: 120,
                                        height: 40,
                                        marginLeft: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text style={{ color: '#feb801', fontSize: 20, fontWeight: 'bold' }}>SAVE</Text>
                                </TouchableOpacity>
                                
                            </View>


                           




                            {/**BTN Modal Close */}
                            <TouchableOpacity
                                onPress={() => {
                                    setMadalIsVisible(false)
                                    setCountryName("")
                                }}
                                style={{ position: 'absolute', top: 10, right: 10 }}>
                                <Text style={{ color: '#feb801', fontSize: 30, fontWeight: 'bold' }}>X</Text>
                            </TouchableOpacity>


                        </View>

                    </Modal>

                    <TouchableOpacity
                        onPress={() => { setMadalIsVisible(true) }}
                        style={{ position: 'absolute', top: 30, right: 10, width: 40, height: 40, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: '#feb801', borderWidth: 1, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialIcons name='add' style={{ color: '#feb801', fontSize: 35 }} />
                    </TouchableOpacity>

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

export default SelectCountryScreen;