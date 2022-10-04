import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#1F1147',
    paddingTop: 13,
    paddingHorizontal: 20,
    height: '100%'
  },
  scorecontainer: {
    backgroundColor: '#6949FE',
    alignItems: "center",
    paddingHorizontal: 50,
    paddingBottom: 40,
    paddingTop: 60,
    borderRadius: 50,
    marginBottom: 70,
  },
  scoretitle: {
    color: '#fff',
    fontSize: 31,
    fontWeight: "700",
    marginBottom:40,
  },
  scorevalue: {
    color: '#fff',
    fontSize: 120,
    fontWeight: "800",
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  banner: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection:"row",
    width: '100%',
    backgroundColor: '#6949FE',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent:"center",
    marginBottom: 30,
  },
  buttontext: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginLeft:10
  },
});