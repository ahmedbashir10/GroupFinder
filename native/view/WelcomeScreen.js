import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import WelcomePresenter from '../presenter/WelcomePresenter';

const WelcomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [presenter, setPresenter] = useState(null);

  useEffect(() => {
    const welcomePresenter = new WelcomePresenter(navigation);
    setPresenter(welcomePresenter);
  }, [navigation]);

  if (!presenter) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO GROUP FINDER</Text>
      <Text style={styles.promptText}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="→"
        onPress={() => presenter.handleNameSubmit(name)}
      />
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
  promptText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '80%',
    marginBottom: 20,
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
});

export default WelcomeScreen;
