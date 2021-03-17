import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  app: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto",
    marginTop: 20,
    padding: 70,
    maxWidth: 500
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
    color: '#f0f0f0',
  },
  recipeH1: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3AA43E',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10
  },
  recipeH2: {
    fontSize: 10,
    color: 'white',
    backgroundColor: '#3AA43E',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10
  },
  recipeHL: {
    fontSize: 10,
    letterSpacing: 1.3,
    color: 'white',
    backgroundColor: '#3AA43E',
    alignSelf: 'flex-start',
    marginBottom: 5,
    padding: 7,
    borderRadius: 10,
    overflow: 'hidden'
  },
  recipeStat: {
    fontSize: 10,
    color: 'white',
    backgroundColor: '#3AA43E',
    alignSelf: 'flex-start',
    padding: 7,
    marginRight: 4,
    borderRadius: 10,
    overflow: 'hidden'
  },
  peasy: {
    fontSize: 50,
    fontFamily: 'Avenir-BlackOblique',
    paddingBottom: 10,
    color: '#3AA43E',
  },
  logoContainer: {
    paddingVertical: 50,
  },
  card: {
    paddingVertical: 10
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
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 5,
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
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 5,
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
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 5,
  },
  recipeCard1: {
    height: 155,
    width: 320,
    padding: 25,
    paddingRight: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 5,  
  },
  button: {
    backgroundColor: '#3AA43E',
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  recipeCardBg: {
    height: 155,
    width: 320,
    opacity: 1,
    position: 'absolute',
  }
});