import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      {/* Background Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>

      {/* Profile Card */}
      <View style={styles.card}>
        <Image 
          source={require('../assets/Vishhhnu.jpg')}

          style={styles.profileImage}
        />

        <Text style={styles.name}>Vishnu Kumar</Text>
        <Text style={styles.description}>
          A passionate B.Tech ISE student, coder, and tech learner.  
          I love web development, React Native, C++, and solving real-world problems.
        </Text>

        {/* Social Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Linking.openURL("https://www.linkedin.com/")}
          >
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => Linking.openURL("https://www.instagram.com/")}
          >
            <Text style={styles.buttonText}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },

  header: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
  },

  card: {
    backgroundColor: '#1A1A1A',
    marginTop: -30,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: -60,
    marginBottom: 10,
  },

  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },

  description: {
    fontSize: 15,
    color: '#ccc',
    textAlign: 'center',
    marginVertical: 10,
    lineHeight: 22,
  },

  buttons: {
    marginTop: 20,
    gap: 12,
  },

  button: {
    backgroundColor: '#3A3AFF',
    paddingVertical: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  }
});
