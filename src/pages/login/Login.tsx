import { View, Button, AsyncStorage, Image, Text } from 'react-native';
import { auth, User } from 'firebase';
import React from 'react';
import * as Google from 'expo-google-app-auth';

export function LoginScreen() {
  const signInAsync = async () => {
    try {
      const { type, accessToken, idToken }: any = await Google.logInAsync({
        iosClientId: `<iosClientId>`,
        iosStandaloneAppClientId: `<iosStandaloneAppClientId>`
      });

      if (type === 'success') {
        const credential = auth.GoogleAuthProvider.credential(idToken, accessToken);

        const { user } = await auth().signInWithCredential(credential);

        AsyncStorage.setItem("@User", JSON.stringify(constructUserObjectForStorage(user)));
      }
    } catch (error) {
      return error;
    }
  }

  const constructUserObjectForStorage = ({ displayName, uid, email, photoURL, emailVerified }: User) => {
    return { displayName, uid, email, photoURL, emailVerified };
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#FFF' }}>
      <Image source={require('../../../assets/icon.png')} />

      <View style={{ backgroundColor: '#4096EE', display: 'flex', padding: 4, borderRadius: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={{ width: 32, height: 32, borderRadius: 4 }}
          source={require('../../../assets/google.png')}
        />
        <Button onPress={signInAsync} title="Login with Google" color="#FFF"></Button>
      </View>
    </View >
  );
}
