import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto",
    paddingHorizontal: 70,
    maxWidth: 500
  },
  app: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto",
    marginTop: 20,
    padding: 70,
    maxWidth: 500,
    flex: 1
  },
  header:{
    fontSize: 50,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    paddingVertical: 15,
    color: '#808080',
  },
  cardH1: {
    fontSize: 27,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cardH2: {
    fontSize: 17,
    paddingBottom: 20,
    color: 'lightgrey',
  },
  peasy: {
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingBottom: 20,
    color: '#3AA43E',
  },
  logoContainer: {
    paddingVertical: 50,
  },
  card: {
    paddingVertical: 20
  },
  homeCard1: {
    height: 155,
    width: 320,
    padding: 25,
    paddingRight: 50,
    backgroundColor: '#3AA43E',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  homeCard2: {
    height: 155,
    width: 320,
    padding: 25,
    paddingRight: 50,
    backgroundColor: '#3AA43E',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  homeCard3: {
    height: 155,
    width: 320,
    padding: 25,
    paddingRight: 50,
    backgroundColor: '#3AA43E',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  button: {
    backgroundColor: '#3AA43E',
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  inputBox: {
    height: 50,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
    opacity: .5,
    fontSize: 20,
    padding: 10,
    flex: 2
  },
  searchFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center'
  }
});