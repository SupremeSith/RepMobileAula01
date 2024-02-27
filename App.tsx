import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const LandingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.precisaocortelaser.com.br/wp-content/uploads/2020/07/logo-senai-1.png' }}
          style={styles.logo}
        />
        <Text style={styles.Textoo}>Bem vindo(a)!</Text>
      </View>

      <View>
        <Text style={styles.logotxt}>Email:</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#666"
        />

        <View>
          <Text style={styles.logotxt2}>Senha:</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.text}>Não possui conta? Cadastre-se</Text>
        </View>
      </View>

      {/* Ícones de login */}
      <View style={styles.socialIconsContainer}>
        <View style={styles.iconWrapper}>
          <AntDesign name="google" size={24} color="black" />
        </View>
        <View style={styles.iconWrapper}>
          <FontAwesome5 name="facebook" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  text: {
    color: 'blue',
    fontSize: 16,
    top: 20,
  },
  Textoo: {
    top: -34,
    fontSize: 14,
    color: 'white',
  },
  logo: {
    width: 240,
    height: 180,
    resizeMode: 'contain',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  logotxt: {
    fontSize: 17,
    top: 20,
    left: 18,
  },
  logotxt2: {
    fontSize: 17,
    top: 7,
    left: -1,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
  button: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
},

  iconWrapper: {
    marginHorizontal: 10,
  },
});

export default LandingPage;
