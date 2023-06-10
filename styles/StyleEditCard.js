import { StyleSheet } from "react-native";

const styleEditCard = StyleSheet.create({
    body: {
        padding: 10
    },
    cardWraper: {
        marginTop: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    form: {
        marginTop: 10,
        gap: 10,
        paddingBottom: 30
    },
    inputFields: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        height: 30,
        borderColor: 'rgba(0,0,0,0.25)',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        padding: 5
    },
    locationInput: {
        backgroundColor: '#F5F5F5',
        width: '60%',
        height: 30,
        borderColor: 'rgba(0,0,0,0.25)',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        padding: 5
    },
    label: {
        fontSize: 14,
        marginBottom: 5
    },
    locationBtn: {
        width: '35%',
        height: 30,
        backgroundColor: '#009688',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnIcon: {
        width: 12,
        height: 12,
        marginRight: 5
    },
    textButton: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 600
    },
    imageBtn: {
        width: '100%',
        height: 30,
        backgroundColor: '#009688',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveBtn: {
        width: '80%',
        height: 30,
        backgroundColor: '#FF5722',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addColorBtn: {
        width: '30%',
        height: 30,
        backgroundColor: '#FF5722',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorBtn: {
        backgroundColor: '#FF5722',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5
    }
})

export default styleEditCard;