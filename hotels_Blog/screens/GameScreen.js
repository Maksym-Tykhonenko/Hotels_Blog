import React,{useState, useEffect} from "react";
import { View, Text, ImageBackground, TouchableOpacity ,ScrollView, Image} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

import { germanHotels } from "../data/germanHotels";

const GameScreen = ({ navigation }) => {
    const [startMassiv, setStartMassiv] = useState(germanHotels);
    const [sights, setSights] = useState(startMassiv);
    console.log('sights', sights.length);
    const [sightsImg, setSightsImg] = useState(startMassiv);
    //console.log('sightsImg', sightsImg.length)
    const [shuffledSightsImg, setShuffledSightsImg] = useState([]);
    //console.log('length==>', shuffledSightsImg.length)

    const [actButnTitle, setActButnTitle] = useState(-1);
    const [actBtnImg, setActBtnImg] = useState(-1);
    //console.log('==>', actButnTitle, actBtnImg)
    const [btnIsVisible, setBtnIsVisible] = useState(false);
    const [quizIsComplited, setQuizIsComplited] = useState(false);

    const goTooAppAfterQuizComplited = () => {
        setBtnIsVisible(false);
        navigation.navigate('QuizScreen')
    };

    useEffect(() => {
        setBtnIsVisible(false)
        if (shuffledSightsImg.length === 0) {
            setBtnIsVisible(true)
        }
    }, [shuffledSightsImg]);

    // Функція для перемішування масиву
    const shuffleArray = (array) => {
        const newArray = [...array]; // Створюємо копію масиву
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Генеруємо випадкове число
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Переставляємо елементи масиву
        }
        return newArray; // Повертаємо перемішаний масив
    };

    // Функція для перемішування масиву sightsImg перед рендерингом
    useEffect(() => {
        setShuffledSightsImg(shuffleArray(sights));
    }, [sights]);

    // Функція для зміни кольору в кнопці з імедж
    const changeColorInImg = (id) => {
        if (id === actBtnImg && id === actButnTitle) {
            return 'green';
        }
        return '#0395e0'
    };

    {/** */ }
    // Функція для видалення об'єкта за його id
    const removeSightById = (id) => {
        const updatedSights = sights.filter(item => item.id !== id);
        //setStartMassiv(updatedSights)
        setSights(updatedSights);
        setShuffledSightsImg(updatedSights);
        setActButnTitle(-1)
        setActBtnImg(-1)
    };

    // Викликати цю функцію всередині useEffect, щоб видалити елемент з масиву після зміни стану
    useEffect(() => {
        if (actButnTitle !== -1 && actButnTitle === actBtnImg) {
            removeSightById(actButnTitle);
        }
    }, [actButnTitle, actBtnImg]);


    return (
        <View style={{flex:1}}>
            <ImageBackground
                source={require('../accets/bcgr.jpeg')}
                style={{ flex: 1, }}>
                <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }} >
                    

                     <View style={{ flex: 1, position: 'relative', marginTop: 30, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>

                        {/* Блок кнопок з назвами */}
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Text style={{ marginLeft: 20, marginBottom: 10, color: 'gold', fontWeight: 'bold', fontSize: 20 }}>Categories: </Text>
                        
                            <ScrollView>
                            
                                {/* Блок кнопок з назвами */}
                                {sights.map((item, index) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setActButnTitle(item.id);
                                        }}
                                        style={{
                                            marginBottom: 10,
                                            width: 150,
                                            height: 135,
                                            borderWidth: 1,
                                            borderRadius: 15,
                                            backgroundColor: actButnTitle === item.id ? 'green' : '#0395e0',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: 5,
                                            borderColor: actButnTitle === item.id ? 'green' : 'gold',
                                        }}
                                        key={item.id}
                                    >
                                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.hotel}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        {/* Полоска */}
                        <View style={{ borderWidth: 1, borderColor: 'red' }}></View>

                        {/* Блок зображень */}
                        <View style={{ flex: 0.5, alignItems: 'center' }}>

                            <Text style={{ marginBottom: 10, color: 'gold', fontWeight: 'bold', fontSize: 20 }}>Photos of sights: </Text>

                            <ScrollView>
              
                                {/* Блок зображень */}
                                {shuffledSightsImg.map((item) => (
                                    <TouchableOpacity
                                        onPress={() => { setActBtnImg(item.id) }} // Обробник події натискання на зображення
                                        style={{
                                            marginBottom: 10,
                                            borderWidth: 8,
                                            borderRadius: 15,
                                            borderColor: changeColorInImg(item.id)
                                        }}
                                        key={item.id}
                                    >
                                        <Image style={{ width: 150, height: 119, borderRadius: 10 }} source={item.photo} />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>

                        </View>
                   
                        {/* Кнопка перехода на Home Screen */}
                       {btnIsVisible && <TouchableOpacity
                            onPress={() => { goTooAppAfterQuizComplited() }}
                            style={{ position: 'absolute', top: '50%', right: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gold', width: 250, height: 80, borderWidth: 2, borderColor: 'gold', borderRadius: 35 }}>
                            
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>Congratulations!!!</Text>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}><Entypo name='arrow-bold-left' style={{ fontSize: 20 }} /> Go to app  </Text>
                        </TouchableOpacity>}
                
                    </View>
                    


                    <TouchableOpacity
                        onPress={() => { navigation.goBack()}}
                        style={{ position: 'absolute', bottom: 10, right: 10 }}>
                         <Entypo name='reply' style={{color: '#feb801', fontSize: 35}} />
                    </TouchableOpacity>
                </View>
               
            </ImageBackground>
        </View>
    )
};

export default GameScreen;