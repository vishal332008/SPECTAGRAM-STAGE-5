import React , {Component} from 'react';
import {View, Button} from 'react-native';

export default class LoginScreen extends Component{
    
    signInWithGoogleAsync = async () => {
        try{
            const result = await Google.loginAsync({
                behaviour:"web",
                androidClientId:"701303377808-av2dl5u9qjebikipdvdgb6dpji0o910p.apps.googleusercontent.com",
                iosClientId:"701303377808-l0qfniph96qc62rv9542koff9dk8thbq701303377808-l0qfniph96qc62rv9542koff9dk8thbq.apps.googleusercontent.com",
                scopes:['profile','email'],
            });
        }
    }
    
    
    
    
    
    
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            </View>
        )
    }
}