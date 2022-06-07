import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const colorFontGit = '#696969';
const imageProfileGit = 'https://avatars.githubusercontent.com/u/81887835?v=4'
const urlToMyGithub = 'https://github.com/Joicemota99';
const App = () => {
    
    //Função para navegar prop GitHub
    const handlePressGoToGithub = async () => {
        console.log('verificando link');
     const res =  await Linking.canOpenURL(urlToMyGithub);
     if (res) {
        console.log('link aprovado');
        console.log('Abrindo link...');
         await Linking.openURL(urlToMyGithub);
     }
    };
    return (
    
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="dark-content"/>
        <View style={style.content}>
         <Image acessibilityLabel='Selfie de Joice' style={style.avatar} source={{uri:imageProfileGit }}></Image>
       <Text acessibilityLabel='Nome: Joice Mota'style={[style.text, style.name]}>Joice Mota</Text>
       <Text acessibilityLabel='NickName: Joicemota99' style={[style.text, style.nickname]}>Joicemota99</Text>
       <Text acessibilityLabel='Descrição: Estudante de Engenharia de Software | Aprimorando minhas habilidades no FrontEnd | Estudante na DIO' style={[style.text, style.description]}>
           Estudante de Engenharia de Software | Aprimorando minhas habilidades no FrontEnd | Estudante na DIO
           
       </Text>
       <Pressable onPress={handlePressGoToGithub}>
       <View style={style.button}>
           <Text style={[style.text, style.textButton]}>Open In GitHub</Text>
       </View>
       </Pressable>
       
        </View>
        </SafeAreaView>
    );
    
}

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex:1, //Expande pra tela toda ficar rosa
        justifyContent: 'center',

    },
    content:{
        padding: 20,
        alignItems: 'center',
        
    },
    avatar:{
        height:200,
        width:200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth:2,
    },
    text:{
        color:'white',
    },

    name:{
        marginTop: 20,
        fontWeight:'bold',
        fontSize:24,
    },
    nickname:{
        fontSize:18,
        color:colorFontGit,

    },
    description:{
        fontWeight:'bold',
        fontSize:14,
        
    },
    textButton:{
        fontWeight:'bold',
        fontSize:16,
        
    },
    button:{
        marginTop:20,
        backgroundColor: colorFontGit,
        borderRadius: 10,
        padding: 20,
    }
   
   
});