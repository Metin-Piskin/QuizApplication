import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#1F1147',
        paddingTop: 13,
        paddingHorizontal: 20,
        height: '100%'
    },
    parent: {
        height: '100%'
    },
    top: {
        marginVertical: 16,
    },
    number: {
        color: '#37E9BB',
        fontWeight: 'bold',
        fontSize: 18,
    },
    question: {
        color: '#fff',
        fontSize: 28,
    },
    options: {
        flex: 1,
        marginVertical: 16,
    },
    optionbutton: {
        backgroundColor: '#1F1147',
        borderWidth: 1,
        borderColor: '#37E9BB',
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginVertical: 6,
        borderRadius: 20
    },
    optionsayi: {
        backgroundColor: '#6949FE',
        justifyContent: "center",
        marginHorizontal: 10,
        borderRadius: 35
    },
    optionsayitext: {
        color: '#fff',
        fontSize: 18,
        paddingHorizontal: 12,
        paddingVertical: 5,
        fontWeight: "600"
    },
    option: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '400'
    },
    buttonvontainer: {
        marginBottom: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#6949FE',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttontext: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
});