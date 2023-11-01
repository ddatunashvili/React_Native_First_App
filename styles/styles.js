import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sourceButton: {
    backgroundColor: '#E9A367',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 20,
    width: 70,
    height: 30,
  },
  sourceButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  animeItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#E2E7B9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
    height: 250,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    borderRadius: 8,
  },
  animeDetails: {
    flex: 1,
    padding: 10,
  },
  title: {
    width: 170,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  genres: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  synopsis: {
    fontSize: 10,
    lineHeight: 18,
    color: '#555',
    height: 58,
    width: 200,
  },
  infoText: {
    fontSize: 10,
    color: '#555',
    marginBottom: 5,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  additional: {
    backgroundColor: 'grey',
    width: 220,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'start',
    gap: 16,
    padding: 10,
    borderRadius: 10,
  },
  additionalInfoText: {
    color: 'red',
  },
  price: {
    fontSize: 12,
    marginLeft: 12,
    padding: 10,
    color: '#603244',
  },
  dets: {
    fontSize: 10,
    color: '#bfbf99',
  },
  fav: {
    width: 25,
    height: 25,
    marginLeft: 40,
  },
  bar:{
    backgroundColor: '#222536', 
    width:200,
    display:"flex",
  
  },
  // New styles for navigation logo and menu items
  drawerHeader: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  navLogo: {
    marginTop: 30,
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  menuItems: {
    width: 100,
    textAlign: 'center',
    backgroundColor: '#e7e2e25c',
    marginVertical: 10,
    padding: 10,
  },
  logoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 10,
  },
  budget: {
    fontSize: 16,
    marginTop: 5,
    color: 'gray',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:"#E9A367",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#E9A367',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  searchButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#888',
  },
  categoryButtonText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  categoryButtonSelected: {
    backgroundColor: '#888',
    color:"black"
  }
});
