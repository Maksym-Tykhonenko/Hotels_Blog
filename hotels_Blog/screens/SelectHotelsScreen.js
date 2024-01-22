import React, {useState} from "react";
import {Modal, View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView ,TextInput} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { uid } from "uid";

const SelectHotelsScreen = ({ navigation, route }) => {
    const [hotels, setHotels] = useState(route.params.hotels);
    console.log('hotels SelectHotelsScreen==>', hotels)
    //console.log('route', route.params.hotels);

    const [madalIsVisible, setMadalIsVisible] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    
                    <SafeAreaView >
                        <ScrollView style={{ marginTop: 20 }}>

                            {hotels.map(({ hotel, location, description, numberOfRooms, photo, latitude, longitude }) => {
                                return (
                                    <TouchableOpacity
                                        key={uid()}
                                        onPress={() => {
                                            navigation.navigate('HotelScreen', {hotel, location, description, numberOfRooms, photo, latitude, longitude})
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

                            <View style={{marginLeft: 10}}>
                                <TextInput
                                    placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                    placeholder="Hotel..."
                                    //value={countryName}
                                    //onChangeText={setCountryName}
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
                                <TextInput
                                    placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                    placeholder="Location..."
                                    //value={countryName}
                                    //onChangeText={setCountryName}
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
                                <TextInput
                                    placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                    placeholder="Description..."
                                    //value={countryName}
                                    //onChangeText={setCountryName}
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
                                <TextInput
                                    placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                    placeholder="Quantity of rooms..."
                                    //value={countryName}
                                    //onChangeText={setCountryName}
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

                                <Text> add photo</Text>


                            </View>


 {/**BTN Modal Close */}
                            <TouchableOpacity
                                onPress={() => { setMadalIsVisible(false) }}
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
                        <Entypo name='reply' style={{ color: '#fff', fontSize: 40 }} />
                    </TouchableOpacity>
                </View>
               
            </ImageBackground>
        </View>
    );
};

export default SelectHotelsScreen;