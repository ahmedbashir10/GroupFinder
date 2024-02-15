// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const WelcomeScreen = ({ navigation }) => {
//   const [name, setName] = useState('');

//   const handleNameSubmit = () => {
//     navigation.navigate('Email');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>WELCOME TO GROUP FINDER</Text>
//       <Text style={styles.promptText}>What is your name?</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         placeholderTextColor="#A9A9A9" 
//         value={name}
//         onChangeText={setName}
//       />
//       <Button
//         title="→"
//         onPress={handleNameSubmit}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // centers vertically
//     alignItems: 'center', // centers horizontally
//     backgroundColor: '#84b5f0',
//     padding: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   promptText: {
//     fontSize: 18, // Make the font size larger
//     color: '#FFFFFF', // Change the color to white for visibility
//     marginBottom: 10, // Add some space before the input field
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'white',
//     padding: 10,
//     width: '40%',
//     marginBottom: 20,
//     alignSelf: 'center',
//     color: 'white', // Change text color
//     // Removed placeholderTextColor from here
//   },
  
// });

// export default WelcomeScreen;





import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import WelcomePresenter from '../presenter/WelcomePresenter';

const WelcomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [presenter, setPresenter] = useState(null);

  useEffect(() => {
    // Initialize the presenter and pass the navigation to it
    const welcomePresenter = new WelcomePresenter(navigation);
    setPresenter(welcomePresenter);
  }, [navigation]);

  if (!presenter) {
    // Return loading state or null if the presenter is not initialized
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
    justifyContent: 'center', // centers vertically
    alignItems: 'center', // centers horizontally
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
    fontSize: 18, // Make the font size larger
    color: '#FFFFFF', // Change the color to white for visibility
    marginBottom: 10, // Add some space before the input field
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: '40%',
    marginBottom: 20,
    alignSelf: 'center',
    color: 'white', // Change text color
    // Removed placeholderTextColor from here
  },
  
});

export default WelcomeScreen;
