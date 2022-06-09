import React , {useState,useEffect} from 'react';

import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image, Alert,SafeAreaView,KeyboardAvoidingView,keyboardVerticalOffset,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import * as firebase from 'firebase';
//import { UploadPost } from '../../../../API/firebaseMethods/firebaseMethod';
//import IMAGE from '../../../assets/photo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { CreateNotice } from '../../../API/firebaseMethods/firebaseMethod';
import { FontAwesome } from '@expo/vector-icons';

export default function AddNoticeScreen({navigation,route}){

  const [notice, setNotice] = useState('');
  const [title, setTitle] = useState('');
  const { type } = route.params;
 
 
  const id = uuid.v4(); 

 


  const handlePress = () => {

    if(!notice ){
      Alert.alert('Text required');
    }
    else if(!title){
      Alert.alert('title required');
    }
    else{
      CreateNotice(id,notice,title,type);
      navigation.replace('Dashboard');
      Alert.alert('Notice Uploaded!');

    }

    
    
   

  }

  


  

  





    
    
 
    return(
    
  
    <View style={styles.container}>
          
          
          <MaterialIcons name="post-add" size={40} color="#38deff" style = {{marginLeft:60 , marginTop : 35,marginBottom : -65}}/>
          <View style = {styles.postName}>
            
         
            <Text style = {{fontSize : 25,marginTop:8}}> Create Notice</Text>

          </View>
    

<ScrollView>

      <View style = {[styles.homeContent ,{backgroundColor : '#e0f8ff'}]}> 
         

         

        

      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style = {{flex:1}}
     >

            
        <Text style = {{fontSize : 20, marginTop : 30, marginLeft :10}}>Title</Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.action}>
            <TextInput  
            style={styles.textinput}
            placeholder="Type here"
            value={title}
            multiline={true}
            numberOfLines={2}
            keyboardDismissMode='on-drag'
            textAlignVertical="top" 
            onChangeText={(title) => setTitle(title)} />
        </View>
        </TouchableWithoutFeedback>

        <Text style = {{fontSize : 20, marginTop : 30, marginLeft :10}}>Content</Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.action}>
            <TextInput  
            style={styles.textinput}
            placeholder="Type here"
            value={notice}
            multiline={true}
            numberOfLines={10}  
            
            keyboardDismissMode='on-drag'
           
            textAlignVertical="top" 
            onChangeText={(notice) => setNotice(notice)} />
        </View>
        </TouchableWithoutFeedback>

        </KeyboardAvoidingView>



        
       
       
      </View>

      <View style= {styles.iconAdd}>

        <TouchableOpacity onPress = {handlePress}>
       
          <FontAwesome name="send" size={30} color="#38deff" style={{alignSelf :'center'}} />
          <Text style = {{alignSelf : 'center', fontWeight : '900'}}>Upload</Text>
          
        </TouchableOpacity>
        
      </View>


      
      </ScrollView>

      
          
      

      

      


    
      
    </View>
   
   
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      paddingTop: 30,
      
      backgroundColor: "white",
    },
    iconAdd :{

      alignSelf : 'center',
      marginBottom :50
     
      
     
      

    },
    avatar :{
      marginTop : 30,
      alignSelf : 'center'
    

    },
    postName : {
     
      marginTop : 20,
      alignSelf : 'center',
      marginLeft : 40 ,
      marginBottom : 10,
      height : 60,
      width :290,
      borderRadius : 10,
      alignItems : 'center',
      
    },
    scrollScreen :{
      marginTop : 5,
      marginRight : 1,
      marginBottom : 500,
      borderRadius : 1,
      marginLeft:10,
      backgroundColor :'white',
      marginHorizontal: 1,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 0.5,
      
  
    },
    homeContent :{
      alignSelf :'center',
     
      marginTop : 5,
      marginBottom : 20,
      backgroundColor :'#f2ffff',
      height : 500,
      width : 330,
      marginLeft : -10,
      marginRight : -10,
      borderRadius : 10,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 1,
      },
      shadowOpacity: 6,
      shadowRadius: 20,
      elevation: 0.5,
    },
    homeContentText :{
      alignSelf : 'center',
      marginTop : 30,
      fontSize : 30,

    },
    head : {
        alignSelf : 'center',
        marginTop : 20,
        
    },
    headText : {
        fontSize : 20,
        marginBottom : 10,
    },
    addPhotoName:{
      alignSelf : 'center',
      fontWeight : 'bold',
      fontSize : 8
      
    },
    photoUpload :{
      marginTop : 20
    },
    textinput :{
      marginLeft : 10,
      marginRight : 10,
      borderWidth : 1 ,
      borderRadius :5,
      borderColor :'#8af7ff',
      backgroundColor :'#ffffff',
      
      paddingRight :20,
      padding: 10      
    }

}) 