import React, {useState,useEffect} from "react";
import {Modal, View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView ,TextInput, Image} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { uid } from "uid";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';



const NewSelectHotelsScreen = ({ navigation, route }) => {
  
    const [country, setCountry] = useState(route.params.country)
    console.log('country==>', country);
    const [newHotelsArr, setNewHotelsArr] = useState([]);
    const [madalIsVisible, setMadalIsVisible] = useState(false);

    const [hotel, setHotel] = useState('');
    const [location, setLocation] = useState('');
    const [quantityRooms, setQuantityRooms] = useState('');
    const [description, setDescription] = useState('');
    const [selectPhoto, setSelectPhoto] = useState(null);


    useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    setData();
  }, [newHotelsArr])

  const setData = async () => {
    try {
      const data = {
        newHotelsArr,
      }
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem("NewSelectHotelsScreen", jsonData);
      console.log('Дані збережено в AsyncStorage')
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('NewSelectHotelsScreen');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setNewHotelsArr(parsedData.newHotelsArr);
        
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };



    const handleAddNewHotels = () => {
        let newHotel = {
            id: uid(),
            hotel: hotel,
            location: location,
            numberOfRooms: quantityRooms,
            description: description,
            photo: selectPhoto

        };
        console.log('newHotel=>', newHotel)

        setNewHotelsArr([...newHotelsArr, newHotel]);
        console.log('newHotelsArr==>', newHotelsArr);
       closeModal()
    };

    const closeModal = () => {
        setMadalIsVisible(false);
        setHotel('');
        setLocation('');
        setQuantityRooms('');
        setDescription('');
        setSelectPhoto(null);
    } 

    const ImagePicer = () => {
        let options = {
            storageOptios: {
                path: 'image',
            }
        };
        
        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                //console.log('response==>', response.assets[0].uri);
                setSelectPhoto(response.assets[0].uri);

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
                    
                    <SafeAreaView >
                        <ScrollView style={{ marginTop: 20 }}>

                           {newHotelsArr && newHotelsArr.map(({ hotel, location, description, numberOfRooms, photo,}) => {
                                return (
                                    <TouchableOpacity
                                        key={uid()}
                                        onPress={() => {
                                            navigation.navigate('NewHotelScreen', { hotel, location, description, numberOfRooms, photo })
                                        }}
                                        style={{ marginBottom: 10, width: 250, height: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 20, borderColor: '#feb801', backgroundColor: 'rgba(255, 255, 255, 0.5)', shadowOffset: { width: 3, height: 4 }, shadowOpacity: 0.8, elevation: 9, }}>
                                        <Text style={{ color: '#feb801', fontWeight: 'bold', fontSize: 20 }}>{hotel}</Text>
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
                        <View style={{ backgroundColor: '#292c33', flex: 1, marginVertical: '15%', marginHorizontal: '5%', borderRadius: 15, shadowOffset: { width: 3, height: 4 }, shadowOpacity: 0.8, elevation: 9, }}>

                            <View style={{ flex: 1, marginLeft: 10, flexDirection: 'column', justifyContent: 'space-between' }}>
                                <View>
                                    <TextInput
                                        placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                        placeholder="Hotel..."
                                        value={hotel}
                                        onChangeText={setHotel}
                                        style={{
                                            shadowOffset: { width: 3, height: 4 },
                                            shadowOpacity: .8,
                                            elevation: 9,
                                            marginTop: 20,
                                            marginBottom: 20,
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
                                        placeholder="Location..."
                                        value={location}
                                        onChangeText={setLocation}
                                        style={{
                                            shadowOffset: { width: 3, height: 4 },
                                            shadowOpacity: .8,
                                            elevation: 9,
                                            //marginTop: 20,
                                            marginBottom: 20,
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
                                        placeholder="Quantity of rooms..."
                                        value={quantityRooms}
                                        onChangeText={setQuantityRooms}
                                        style={{
                                            shadowOffset: { width: 3, height: 4 },
                                            shadowOpacity: .8,
                                            elevation: 9,
                                            //marginTop: 20,
                                            marginBottom: 20,
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
                                        placeholder="Description..."
                                        value={description}
                                        onChangeText={setDescription}
                                        multiline={true}
                                        style={{
                                            shadowOffset: { width: 3, height: 4 },
                                            shadowOpacity: .8,
                                            elevation: 9,
                                            //marginTop: 20,
                                            marginBottom: 20,
                                            paddingLeft: 10,
                                            fontSize: 20,
                                            borderWidth: 1,
                                            borderColor: 'gold',
                                            color: '#000',
                                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                            borderRadius: 10,
                                            width: 250,
                                            height: 80,
                                             
                                        }}
                                    />
                                   

                                    {!selectPhoto ? (
                                        <TouchableOpacity
                                            onPress={() => { ImagePicer() }}
                                            style={{
                                                shadowOffset: { width: 3, height: 4 },
                                                shadowOpacity: .8,
                                                elevation: 9,
                                                //marginTop: 20,
                                                marginBottom: 20,
                                                paddingLeft: 10,
                                                fontSize: 20,
                                                borderWidth: 1,
                                                borderColor: 'gold',
                                                color: '#000',
                                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                borderRadius: 10,
                                                width: 250,
                                                height: 40,
                                                alignItems: 'center',
                                                justifyContent: "center"
                                            }}
                                        >
                                            <Text
                                                style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.5)' }}
                                            >Select photo</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <Image
                                            style={{ width: 250, height: 150, borderRadius: 15 }}
                                            source={{ uri: selectPhoto }}
                                        />
                                    )}
                                   
                                </View>
                                


                                <View>
                                    <TouchableOpacity
                                        onPress={()=>{handleAddNewHotels()}}
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
                                            borderRadius: 50,
                                            width: 200,
                                            height: 40,
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            alignSelf: 'center',
                                        
                                        }}
                                    ><Text
                                        style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.5)' }}
                                    >SAVE HOTEL</Text>
                                    </TouchableOpacity>
                                </View>
                               


                            </View>


                            {/**BTN Modal Close */}
                            <TouchableOpacity
                                onPress={() => { closeModal() }}
                                style={{ position: 'absolute', top: 10, right: 10 }}>
                                <Text style={{ color: '#feb801', fontSize: 30, fontWeight: 'bold' }}>X</Text>
                            </TouchableOpacity>
                        </View>



                    </Modal>




                    <TouchableOpacity
                        onPress={() => {setMadalIsVisible(true) }}
                        style={{ position: 'absolute', top: 20, right: 10, width: 40, height: 40, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: '#feb801', borderWidth: 1, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialIcons name='add' style={{ color: '#feb801', fontSize: 35 }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <Entypo name='reply' style={{ color: '#feb801', fontSize: 40 }} />
                    </TouchableOpacity>
                </View>
               
            </ImageBackground>
        </View>
    );
};

export default NewSelectHotelsScreen;