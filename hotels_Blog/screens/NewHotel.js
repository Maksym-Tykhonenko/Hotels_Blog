import React, {useState} from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Image } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { uid } from "uid";
import { useWindowDimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Rating, AirbnbRating } from 'react-native-ratings';

const NewHotelScreen = ({ navigation, route }) => {
    const item = route.params;
    const [hotels, setHotels] = useState(item);
    console.log('hotel==>', route.params)
    //console.log('route', route.params.hotels)
    const [hotelReting, setHotelReting] = useState(0);
    console.log('hotelReting==>', hotelReting)

    const { height, width } = useWindowDimensions();

    //console.log("Rating is: " + hotelReting);
    const ratingCompleted = (rating) => {
        //console.log("Rating is: " + rating);
        setHotelReting(rating)
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    
                    <SafeAreaView >
                        <ScrollView style={{ marginTop: 10 }}>

                            {!hotelReting > 0 && <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold', marginBottom: -5 }}>Please select raiting</Text>
                            </View>}
                            
                            {/**RAITING */}
                            <AirbnbRating
                                onFinishRating={ratingCompleted}
                                defaultRating={hotelReting}
                            />

                            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 15, marginTop: 10 }}>
                                <Image
                                    source={{uri: hotels.photo}}
                                    style={{ width: width, height: 220, borderRadius: 15 }}
                                />
                           
                                <View style={{ padding: 15, borderRadius: 15 }}>
                                    
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>{hotels.hotel}</Text>
                                    </View>
                                
                                    <Text style={{ fontSize: 18, marginBottom: 5 }}>Description: {hotels.description}</Text>
                                    <Text style={{ fontSize: 18, marginBottom: 5 }}><Entypo name='location-pin' style={{ fontSize: 20, color: 'red' }} /> {hotels.location}</Text>
                                    <Text style={{ fontSize: 18, marginBottom: 5 }}>Quantity of rooms: {hotels.numberOfRooms}</Text>

                                </View>

                                <View
                                    style={{}}
                                >
                                    <MapView
                                        style={{ height: 200, marginBottom: 50, borderRadius: 10 }}
                                        initialRegion={{
                                            latitude: 52.51601653914004,
                                            longitude: 13.379944154728385,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                    />
                                </View>



                            </View>
                            
                            

                           

                        </ScrollView>
                    
                    </SafeAreaView>

                   

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

export default NewHotelScreen;