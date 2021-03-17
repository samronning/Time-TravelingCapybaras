import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

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
    maxWidth: 500
  },
  header:{
    fontSize: 50,
    fontWeight: 'bold',
  },
  headerProfile:{
    paddingTop: 50,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  h2: {
    fontSize: 20,
    paddingVertical: 15,
    color: '#808080',
  },
  h2Profile: {
    fontSize: 20,
    paddingVertical: 15,
    color: '#808080',
    textAlign: 'center',
  },
  cardH1: {
    fontSize: 27,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  welcomeConfirm: {
    fontSize: 27,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',
    alignItems: 'center'
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
  logoContainerProfile: {
    paddingVertical: 50,
    alignItems: 'center'
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
  welcomeButton: {
    marginTop: 30,
    marginLeft: 45,
    height: 155,
    width: 320,
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
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 20,
  },
  myRecipes: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'black',
  },
  profileModal: {
    backgroundColor: 'white',
  },
  individualIcon: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 0,
    paddingRight: 20,
    paddingTop: 20,
  },
  userProfile: {
    marginHorizontal: "auto",
    marginTop: 20,
    maxWidth: 500
  },
});