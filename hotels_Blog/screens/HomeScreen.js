import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Modal, TouchableOpacity, ScrollView, Image } from "react-native";  
import { uid } from 'uid';
import AntDesign from 'react-native-vector-icons/AntDesign';



const HomeScreen = ({navigation}) => {

    const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    console.log('news ==>', news)

    useEffect(() => {
        getNews()
    }, []);
    //'&apiKey=' + API_KEY
    const API_KEY = '457f28a414374255bef076ebfec01ad5';
    const url = 'https://newsapi.org/v2/everything?';
    // https://newsapi.org/v2/top-headlines?  country=us&category=business
    
    const getNews = () => {
        fetch(`${url}q=hotels&pageSize=20&sortBy=publishedAt&apiKey=${API_KEY}`).then((res) => res.json()).then(data => {
            //console.log(data);
            setNews(data.articles)

        }).catch(e => {
            console.error(`Error: ${e}`);
        })
    }

    
    // Функція для відкриття посилання на повну статтю
    const openFullArticle = (url) => {
        Linking.openURL(url);
    };


    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1 }}>
                <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                     
                    {/**BTN SideBar Open */}
                    <TouchableOpacity
                        onPress={() => { setSideBarIsVisible(true) }}
                        style={{ position: 'absolute', top: 20, left: 10 }}>
                        <AntDesign name='bars' style={{color: '#fff', fontSize: 35}} />
                    </TouchableOpacity>
                    
                    { }
                    {/**NEWS block */}
                    <ScrollView style={{ flex: 1, marginTop: 60, marginHorizontal: 10, }}>
            
                        {news.length < 5 ? (
                            <View style={{flex:1, alignItems: 'center', justifyContent:'center', marginTop: 150}}>
                                <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold'}}>LOADING ...</Text>
                        </View>
                        ) : (news.map((item) => {
                            return (
                                <View
                                    style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                                    key={uid()}>
                            
                            
                                    <Image
                                        style={{ width: '100%', height: 250, borderWidth: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
                                        source={{ uri: item.urlToImage }}
                                    />
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}><Text style={{ fontSize: 20, fontWeight: 'bold' }}>Newspaper: </Text>{`${item.source.name}`}</Text>
                                    <Text style={{ fontSize: 14, color: 'grey' }}><Text style={{ fontWeight: 'bold' }}>Author: </Text>{item.author}</Text>
                                    <Text style={{ fontSize: 20, marginTop: 5, color: 'black' }}><Text style={{ fontWeight: 'bold' }}>Description: </Text>{item.description}</Text>
                                    <Text style={{ fontSize: 20, marginTop: 5, color: 'black' }}><Text style={{ fontWeight: 'bold' }}>Content: </Text>{item.content}</Text>
                            
                                    <TouchableOpacity
                                        style={{ marginTop: 10 }}
                                        onPress={() => openFullArticle(item.url)}>
                                        <Text style={{ color: 'blue' }}>Read Full Article</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }))}

           
                    </ScrollView>

                    {/**SIDEBAR */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={sideBarIsVisible}
                    >
                        <View style={{ backgroundColor: '#292c33', flex: 1, marginRight: '30%' }}>

                            {/**BTN SideBar Close */}
                            <TouchableOpacity
                                onPress={() => { setSideBarIsVisible(false) }}
                                style={{ position: 'absolute', top: 20, left: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 30 }}>X</Text>
                            </TouchableOpacity>

                            {/**BTN route block */}
                            <View style={{ marginTop: 70, marginLeft: 20 }}>

                                {/**BTN route USER */}
                                <TouchableOpacity
                                    onPress={() => {
                                        setSideBarIsVisible(false),
                                        navigation.navigate("UserScreen")
                                     }}
                                    style={{marginBottom: 10}}>
                                    <Text style={{ color: '#fff', fontSize: 30 }}>USER</Text>
                                </TouchableOpacity>

                                {/**BTN route HOTELS */}
                                <TouchableOpacity 
                                    onPress={() => {
                                        setSideBarIsVisible(false),
                                        navigation.navigate("HotelsScreen")
                                     }}
                                    style={{marginBottom: 10}}>
                                    <Text style={{ color: '#fff', fontSize: 30 }}>HOTELS</Text>
                                </TouchableOpacity>

                                {/**BTN route QUZE */}
                                <TouchableOpacity
                                    onPress={() => { setSideBarIsVisible(false),
                                        navigation.navigate("QuizScreen")
                                     }}
                                    style={{marginBottom: 10}}>
                                    <Text style={{ color: '#fff', fontSize: 30 }}>QUIZ</Text>
                                </TouchableOpacity>

                                {/**BTN route BOUTE APP */}
                                <TouchableOpacity
                                    onPress={() => { setSideBarIsVisible(false),
                                        navigation.navigate("AboutAppScreen")
                                     }}
                                    style={{}}>
                                    <Text style={{ color: '#fff', fontSize: 30 }}>ABOUTE APP</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Modal>

                </View>
                 
            </ImageBackground>
          
        </View>
    );
};


export default HomeScreen;