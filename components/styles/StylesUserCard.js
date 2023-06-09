import { StyleSheet } from "react-native";

const userCardStyles = StyleSheet.create({
    cardCont: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    cardWrapper: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.05,
        elevation: 4,
        backgroundColor: '#FFF', // Change the background color
        borderRadius: 10
    },
    card: {
        width: 250,
        height: 150,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    userLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    cardHeader: {
        flexDirection: 'row',
    },
    busineesName: {
        color: '#FFF',
        fontWeight: 900,
        fontSize: 12
    },
    infoCont: {
        
    },
    infoCard: {
        color: '#FFF',
        fontSize: 10,
        marginBottom: 5,
        fontWeight: 600,
        maxWidth: '90%'
    },
    sloganCard: {
        color: '#FFF',
        fontSize: 10,
        textAlign: 'center'
    },
    btnCard: {
        width: 20,
        height: 20,
        marginBottom: 5
    },
    btnContCard: {
        position: 'absolute',
        right: 10,
        bottom: 10
    },
});

export default userCardStyles;