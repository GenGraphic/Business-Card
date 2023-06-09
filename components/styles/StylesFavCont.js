import { StyleSheet } from "react-native";

const stylesFavCont = StyleSheet.create({
    body: {
        width: 100,
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        borderColor: 'rgba(0,0,0,0.25)',
        borderWidth: 1,
        backgroundColor: '#000'
    },
    favImg: {
        width: 30,
        height: 30,
        borderRadius: 14
    },
    textCont: {
        alignItems: 'center'
    },
    businessName: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: 600,
        textAlign: 'center'
    },
    name: {
        color: '#FFF',
        fontSize: 8
    },
    callIcon: {
        width: 10,
        height: 10,
        marginRight: 5
    },
    callBtn: {
        width: 80,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009688',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
        padding: 2,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5
    },
    textBtn: {
        color: '#FFF',
        fontWeight: 600,
        fontSize: 10,
    },
})

export default stylesFavCont;