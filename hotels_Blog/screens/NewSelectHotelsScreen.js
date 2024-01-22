import React, {useState} from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { uid } from "uid";

const NewSelectHotelsScreen = ({ navigation, route }) => {
  
    const [country, setCountry] = useState(route.params.country)
    console.log('country==>', country);


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    
                    <SafeAreaView >
                        <ScrollView style={{ marginTop: 20 }}>

                           

                           

                        </ScrollView>
                    
                    </SafeAreaView>

                    <TouchableOpacity
                        onPress={() => { }}
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

export default NewSelectHotelsScreen;