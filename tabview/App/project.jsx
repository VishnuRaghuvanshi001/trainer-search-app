import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Projects() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Projects</Text>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Portfolio App</Text>
          <Text style={styles.projectDesc}>
            A clean multi-section portfolio app built in React Native.
          </Text>
        </View>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Trainer Search App</Text>
          <Text style={styles.projectDesc}>
            A React Native app to browse trainers and manage profiles.
          </Text>
        </View>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>C++ & Java DSA Repo</Text>
          <Text style={styles.projectDesc}>
            My structured GitHub solutions for DSA problems.
          </Text>
        </View>

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

  projectCard: {
    backgroundColor: '#262626',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  projectTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },

  projectDesc: {
    color: '#bfbfbf',
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
  },
});
