import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EmailScreen = ({ navigation, presenter }) => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    //const isEmailSaved = presenter.saveUserEmail(email);
   // if (isEmailSaved) {
      // Navigate to the next screen if email is saved successfully
      navigation.navigate('CourseID'); // Replace 'NextScreen' with your actual screen name
  //  }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please provide your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button
        title="→"
        onPress={handleEmailSubmit}
      />
      <Text style={styles.disclaimer}>
        Your email will strictly be used for your future group members to contact you and no other purposes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#84b5f0',
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
    width: '40%',
    marginBottom: 20,
  },
  disclaimer: {
    fontSize: 14,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default EmailScreen;
