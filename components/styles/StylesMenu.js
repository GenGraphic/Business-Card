import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
    body: {
        padding: 10,
        width: 320,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5
    },
    menuIcon: {
        width: 20,
        height: 20
    },
    menuText: {
        fontSize: 10,
        color: '#000'
    },
    optionMenu: {
        alignItems: 'center',
    },
})

export default menuStyles;