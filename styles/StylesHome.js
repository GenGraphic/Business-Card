import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF'
    },

    pageTitle: {
        fontSize: 14,
        fontWeight: 900,
        marginBottom: 20
    },

    cardCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardBtnCont: {
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    cardOption: {
        backgroundColor: '#009688',
        width: 90,
        height: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,0.25)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    cardBtnText: {
        color: '#FFF',
        fontSize: 10,
    },
    cardBtnIcon: {
        width: 10,
        height: 10,
        marginRight: 5
    },
    favCont: {
        minHeight: 200,
        borderTopColor: '#000',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: 20,
    },
    searchCont: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        paddingRight: 5,
        paddingLeft: 5,
        borderRadius: 15,
        backgroundColor: '#F5F5F5'
    },
    searchIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    searchPlaceholder: {
       width: '100%',
       resizeMode: 'contain'
    },
})

export default homeStyles;