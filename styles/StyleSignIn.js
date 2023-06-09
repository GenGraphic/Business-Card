import { StyleSheet } from "react-native";

const stylesSignIn = StyleSheet.create({
    MainContainer: {
        height: '100%',
    },
    body : {
        paddingLeft: 10,
        paddingRight: 10,
        height: '100%',
        flex: 1,
    },


    logoCont: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
    },


    formCont: {
        alignItems: 'center',
    },  
    formTitle: {
        fontSize: 22,
        textAlign: 'center',
    },
    inputfield: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#FFF',
        height: 30,
        width: 250,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 5,
        marginTop: 20,
        fontSize: 12
    },
    links: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#FF5722',
        borderRadius: 15,
        height: 30,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5
    },
    BtnText: {
        color: '#FFF',
        fontWeight: '700'
    },
    stackCards: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 300, // Adjust the width to your desired size
        height: 300, // Adjust the height to your desired size
        zIndex: 0
    },
})

export default stylesSignIn;