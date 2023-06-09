import { StyleSheet } from "react-native";

const stylesRegister1 = StyleSheet.create({
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
        marginBottom: 50,
        flexDirection: 'row',
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        alignSelf: 'flex-end'
    },


    formCont: {
        alignItems: 'center',
        gap: 20,
        paddingTop: 10
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
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        padding: 5,
        fontSize: 12
    },
    label: {
        fontSize: 14,
        fontWeight: 600
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
        elevation: 5,
    },
    BtnText: {
        color: '#FFF',
        fontWeight: '700'
    },
    stackCards: {
        position: 'absolute',
        bottom: 0
    },
    bkgImage: {
        width: 200,
        height: 200
    }

});

export default stylesRegister1;