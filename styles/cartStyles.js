import { StyleSheet } from 'react-native';

const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animeItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbnail: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
  animeDetails: {
    flex: 1,
  },
  animeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  genres: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  synopsis: {
    fontSize: 14,
    width: 180,
    height: 200,
    marginBottom: 10,
  },
  additional: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dets: {
    fontSize: 12,
    marginRight: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#e74c3c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buyButton: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffa500',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
    color: '#888',
    fontWeight: 'bold',
  },
  categoryButtonSelected: {
    backgroundColor: '#888',
  },
});

export default cartStyles;
