import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      
      {/* Profile Image */}
      <Image 
        source={require('./assets/Vishhhnu.jpg')}
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.name}>Vishnu Kumar</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Developer • Learner • Gym Lover</Text>

      {/* About Me */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>About Me</Text>
        <Text style={styles.cardText}>
          I'm Vishnu, a passionate learner who loves fitness, coding, and self-growth. 
          I enjoy building projects, improving my skills, and exploring new technologies. 
          Gym is my therapy, coding is my passion, and consistency is my mindset.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Skills</Text>
        <Text style={styles.cardText}>• Web Development</Text>
        <Text style={styles.cardText}>• Java (OOP + DSA)</Text>
        <Text style={styles.cardText}>• C / C++</Text>
        <Text style={styles.cardText}>• React / Expo</Text>
        <Text style={styles.cardText}>• Problem Solving & Logic Building</Text>
      </View>

      {/* Interests */}
      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>💪 Gym</Text>
        <Text style={styles.tag}>💻 Coding</Text>
        <Text style={styles.tag}>🎧 Music</Text>
        <Text style={styles.tag}>📚 Self Improvement</Text>
      </View>

      {/* Social Links */}
      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/vishnu-kumar-384b6a308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}
        >
          <Text style={styles.socialText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://www.instagram.com/_.vishhhnu?igsh=MWNtajNvOW03ejczcQ==')}
        >
          <Text style={styles.socialText}>Instagram</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F0F0F',
    alignItems: 'center',
    paddingVertical: 50,
  },

  profileImage: {
    width: 160,
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },

  name: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
  },

  subtitle: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 20,
  },

  card: {
    width: '85%',
    backgroundColor: 'rgba(255,255,255,0.07)',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    marginBottom: 25,
  },

  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },

  cardText: {
    color: '#CFCFCF',
    fontSize: 15,
    lineHeight: 22,
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 30,
  },

  tag: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    color: 'white',
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },

  socialContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 40,
  },

  socialButton: {
    backgroundColor: '#1C1C1C',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },

  socialText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

