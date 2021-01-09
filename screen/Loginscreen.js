import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            Email : "",
            Password : "",
            Firstname: "",
            Lastname : "",
            Address : "",
            Contact : "",
            confirmPassword : "",
            isModalVisible : false
        }
    }

    userSignUp=async(email, password, confirmPassword)=>{
        if(password !== confirmPassword){
         return alert("Password doesn't match - please check it again")   
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{
                db.collection('Users').add({
                    Email : this.state.Email,
                    Address : this.state.Address,
                    Contact : this.state.Contact,
                    First_Name : this.state.Firstname,
                    Last_Name:this.state.Lastname
                })
                return alert("User added successfully")
            })
            .catch(()=>{
                return alert("Error, user hasn't been added")
            })
        }
    }


login = async(email, password)=>{
firebase.auth().signInWithEmailAndPassword(email, password)
.then(()=>{
    return alert("Successfully logged in")
})

.catch(()=>{
    return alert("Error, check your email and password again")
})
}
showModal = ()=>{
    <Modal
    animationType = "fade"
    transparent = {true}
    visible = {this.state.isModalVisible}>
    <View style = {styles.modalContainer}>
        <ScrollView style = {{width : '100%'}}>
        <Text style = {styles.modalTitle}>Registration</Text>
 <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              Firstname: text
            })
          }}
        />
 <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              Lastname: text
            })
          }}
        />
         <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              Address: text
            })
          }}
        />
 <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          onChangeText={(text)=>{
            this.setState({
              Contact: text
            })
          }}
        />
         <TextInput
          style={styles.formTextInput}
          placeholder ={"Email"}
          keyboardType = {'email-address'}
          onChangeText={(text)=>{
            this.setState({
              Email: text
            })
          }}
        />
         <TextInput
          style={styles.formTextInput}
          placeholder ={"Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              Password: text
            })
          }}
        />
        <View>
         <TouchableOpacity styles = {styles.button} onPress = {()=>{
             this.userSignUp(this.state.Email, this.state.Password, this.state.confirmPassword)
         }}>
           <Text style = {styles.text1}>Register</Text>
           </TouchableOpacity>
           </View>
           <View>
               <TouchableOpacity style = {styles.button}
               onPress = {()=>{
                   this.setState({
                       "isModalVisible" : false
                   })
               }}>
                   <Text>Cancel</Text>
               </TouchableOpacity>
           </View>
        </ScrollView>
</View>
    </Modal>
}
    
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    {
                    this.showModal()
                    }
                    
                </View>
           <TextInput
           placeholder = "Email"
           style = {styles.input1}
             onChangeText = {(text)=>{
               this.setState({
                   Email : text
               })
             }}
       >
           </TextInput>

           <TextInput 
           placeholder = "Password"
           style = {styles.input1}
           onChangeText = {(text)=>{
              this.setState({
                  Password : text
              })
           }}>
           </TextInput>

           <TouchableOpacity style = {styles.button}
           onPress = {()=>{
               this.login(this.state.Email, this.state.Password)
            } }>
             <Text style = {styles.text1}>Login</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {styles.button}
           onPress = {()=>{
               this.setState({
                   isModalVisible : true
               })
            } }>
             <Text style = {styles.text1}>Sign Up</Text>
           </TouchableOpacity>

          

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
      },
      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
    button:{
        backgroundColor:"lightpink",
        width:120,
        height:40,
        marginTop:20,
        marginBottom:30,
        textAlign : "center",
        justifyContent : "center",
        borderWidth:3,
        borderRadius:50,
        marginLeft:15
    },
    text1 :{
        fontSize:20,
        fontWeight:"bold"
    },
    input1 : {
        height:40,
        width:150,
        borderWidth:3,
        marginTop:20,
        marginBottom:20,
        textAlign:"center"
       
    }
})