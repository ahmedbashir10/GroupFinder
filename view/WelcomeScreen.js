// WelcomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation, presenter }) => {
  const [name, setName] = useState('');

  const handleNameSubmit = () => {
   // presenter.saveUserName(name);
    // Assuming you have another screen called 'GroupList' that you want to navigate to
    navigation.navigate('Email');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO GROUP FINDER</Text>
      <Text>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="→"
        onPress={handleNameSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center', // centers horizontally
    backgroundColor: '#4f6d7a',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: '40%', // Adjust width as needed to make the input smaller
    marginBottom: 20,
    alignSelf: 'center', // Ensures that the input is centered in the screen
  },
  // Add a style for the button if needed
  button: {
    // Define your button styles here if needed
  },
});

export default WelcomeScreen;
