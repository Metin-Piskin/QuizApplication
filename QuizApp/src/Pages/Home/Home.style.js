import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#1F1147',
        flex: 1
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    banner: {
        width: '100%',
        height: 405,
        resizeMode: 'contain'
    },
    titlecontainer: {
        zIndex: 1,
        position: "absolute",
        top: 267,
        left: 82,
    },
    titletext: {
        color: '#37E9BB',
        fontSize: 58,
        fontWeight: '600',
    },
    textcontainer: {
        alignItems: "center",
        flex: 1
    },
    textone: {
        color: '#fff',
        fontSize: 30,
        fontWeight: "500"
    },
    texttwo: {
        color: '#fff',
        fontWeight: "400"
    },
    button: {
        backgroundColor: '#6949FE',
        marginHorizontal: 25,
        padding: 16,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttontext: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff'
    },
    aboutbutton: {
        backgroundColor: '#1F1147',
        marginHorizontal: 25,
        padding: 16,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 30,
        borderWidth:1,
        borderColor:'#6949FE'
    },
    aboutbuttontext: {
        fontSize: 24,
        fontWeight: '800',
        color: '#6949FE'
    }
});