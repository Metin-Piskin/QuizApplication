import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 13,
    paddingHorizontal: 20,
    height: '100%'
  },
  scorevalue: {
    color:'#000',
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center"
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  banner: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30
  },
  buttontext: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
});