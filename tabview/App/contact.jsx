import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function Contact() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Me</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("mailto:vishuraghu2111@gmail.com")}
        >
          <Text style={styles.buttonText}>Email: vishuraghu2111@gmail.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://instagram.com/_vishhhnu")}
        >
          <Text style={styles.buttonText}>Instagram: @_vishhhnu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://linkedin.com/in/_vishhhnu")}
        >
          <Text style={styles.buttonText}>LinkedIn: Vishnu Kumar</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F0F' },

  section: {
    backgroundColor: '#1A1A1A',
    marginTop: 20, marginHorizontal: 20,
    borderRadius: 18, padding: 20,
  },

  sectionTitle: {
    fontSize: 22, fontWeight: '700', color: '#fff', marginBottom: 15,
  },

  button: {
    backgroundColor: '#3A3AFF',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff', textAlign: 'center',
    fontSize: 16, fontWeight: '600',
  }
});
