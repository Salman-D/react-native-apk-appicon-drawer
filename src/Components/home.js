import React from 'react'
import {View,Text,TextInput,ScrollView,TouchableOpacity,FlatList,Button} from 'react-native'
// import { useEffect,useState } from 'react'
//   import auth from '@react-native-firebase/auth';
//   import firestore from '@react-native-firebase/firestore';

// const storeData = "https://fakestoreapi.com/products?limit=5";
  
export default function App(){
  
  // const [store ,setStore] = useState([]);
 
  // useEffect(()=>{
  //    fetch(storeData).then((response) => response.json()).then((json)=>{
  //    console.log(json[0])
  //    var item = ({
  //      category : json[0]['category'],
  //      title: json[0]['title'],
  //      description:json[0]['description']
  //    })

  //    console.log(item)
  //     setStore(item)})
  // },[])

// const signup =()=>{
// auth()
//   .createUserWithEmailAndPassword('i@gmail.com', 'SuperSecretPassword!')
//   .then((data) => {
//     console.log('User account created & signed in!');
//     console.log(data.user.uid);
//     const usersCollection = firestore().collection('Users');
//     var obj ={
//       name:'Usman',
//       gmail:'i@gmail.com',
//       password:"1234567",
//       uid:data.user.uid,
//     }
//     usersCollection.doc(data.user.uid).set(obj);
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
// }
  return(

      <View style={{ flex: 1 }}>
          <Text>Home</Text>
       {/* <Button onPress={()=>signup()} title='Signup'></Button> */}
      </View>    
    // <ScrollView>
    // <View style={{flex:1}}>
    // <View style={{flex:1,backgroundColor:"red"}}>
    //   <Text>Header</Text> 
    // </View>
    // <View style={{flex:18,backgroundColor:"yellow"}}>
    //   <Text>Body</Text> 
    //   <TextInput placeholder='Enter Your Name' type='password' secureTextEntry></TextInput>
    // </View>
    // <View style={{flex:1,backgroundColor:"red"}}>
    //   <Text>Footer</Text> 
    // </View>
    // </View>
    // </ScrollView>
  
    // <View>
    // <TouchableOpacity style={{backgroundColor:'yellow' ,color:'#fff' ,marginTop:50 ,width:80 ,height:50,marginLeft:120,textAlign:'center'}}>
    //   <Text style={{paddingTop:10,marginLeft:5}}>Click Me</Text>   
    // </TouchableOpacity>    
    // </View>
    // <Text>hggfhfhghg</Text>

//     <FlatList
//       data={store}
//       renderItem={(data)=>{
//         return(
//           <View>
//             <Text>{data.item.title}</Text>
//             <Text>{data.item.category}</Text>
//             <Text>{data.item.description}</Text>          
//           </View>
//         )
// }}
//       keyExtractor={(item) => item.id}
// />   
  )
}
