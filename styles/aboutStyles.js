import { StyleSheet } from 'react-native';

const aboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // marginTop: 100,
    backgroundColor: '#f5f5f5',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    width: 300,
    textAlign: 'justify',
    marginBottom: 30,
  },
  tableContainer: {
    alignItems:"center",
    width: 200,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tableLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  tableValue: {
    flex: 2,
    fontSize: 16,
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
  contactIcons: {
    flexDirection: 'row',
    marginTop: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  projectContainer: {
    marginTop: 40,
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default aboutStyles;
