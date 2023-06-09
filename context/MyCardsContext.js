import React, {useState, createContext} from "react";

const MyCardsContext = createContext();

export function MyCardsProvider({ children }) {
    const [myCards, setMyCards] = useState([
        {
            id: 1,
            name: 'Edurd',
            businessName: 'Bussiness name',
            email: 'deleucostel32@gmail.com',
            phone: '',
            website: '',
            adress: '',
            slogan: 'Slogan will appear here',
            image: '',
            businessField: '',
            colors: ['#009688', '#FF0000']
        },
        {
            id: 2,
            name: 'Edurd',
            businessName: 'Bussiness name',
            email: 'deleucostel32@gmail.com',
            phone: '',
            website: '',
            adress: '',
            slogan: 'Slogan will appear here',
            image: '',
            businessField: '',
            colors: ['#000', '#7E61F1']
        },
        {
            id: 3,
            name: 'Edurd',
            businessName: 'Bussiness name',
            email: 'deleucostel32@gmail.com',
            phone: '',
            website: '',
            adress: '',
            slogan: 'Slogan will appear here',
            image: '',
            businessField: '',
            colors: ['#009688', '#7E61F1']
        },
        {
            id: 4,
            name: 'Edurd',
            businessName: 'Bussiness name',
            email: 'deleucostel32@gmail.com',
            phone: '',
            website: '',
            adress: '',
            slogan: 'Slogan will appear here',
            image: '',
            businessField: '',
            colors: ['#FFF', '#7E61F1']
        },
        {
            id: 5,
            name: 'Edurd',
            businessName: 'Bussiness name',
            email: 'deleucostel32@gmail.com',
            phone: '',
            website: '',
            adress: '',
            slogan: 'Slogan will appear here',
            image: '',
            businessField: '',
            colors: ['#009688', '#7E61F1']
        },
        {
            id: 6,
            name: 'Edurd',
            businessName: 'Bussiness name',
            email: 'deleucostel32@gmail.com',
            phone: '',
            website: '',
            adress: '',
            slogan: 'Slogan will appear here',
            image: '',
            businessField: '',
            colors: ['#009688', '#FF5722']
        },
    ]);

    return (
        <MyCardsContext.Provider value={{myCards, setMyCards}}>{ children }</MyCardsContext.Provider>
    )
}

export default MyCardsContext;