import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
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
    question: {
        color: '#000',
        fontSize: 28,
    },
    options: {
        flex: 1,
        marginVertical: 16,
    },
    optionbutton: {
        backgroundColor: '#34A0A4',
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginVertical: 6,
        borderRadius: 12
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
        backgroundColor: '#1A759F',
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