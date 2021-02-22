import React, { Component } from "react";
import {
  Image,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
  "951963137071-kt6dadc0tnj01q2i1ov686l2n32tljhf.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "951963137071-i39cq9tc88r9gvom3bebsfkv4606nfr0.apps.googleusercontent.com";

export default class LoginScreen extends Component {
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {

        console.log("LoginScreen.js.js 21 | ", result.user.givenName);


        this.props.navigation.navigate("Profile", {
          username: result.user.givenName,
        }); //after Google login redirect to Profile
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {

      console.log("LoginScreen.js.js 30 | Error with login", e);

      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/LogoFieldFind.png")}
        />
        <TouchableOpacity onPress={this.signInWithGoogle}>
          <Image
            style={styles.googleLogo}
            source={require("../../assets/GoogleLogin.png")}
          />
        </TouchableOpacity>

        <Text> This is cool af, yeahhsss</Text>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a4750",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    bottom: 80,
    width: 244,
    height: 398,
  },
  googleLogo: {
    width: 295,
    height: 120,
  },

});

