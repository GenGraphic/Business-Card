import React, {createContext, useState} from "react";

const UserCardContext = createContext([]);

export function UserCardProvider({ children }) {
    const [userCardInfo, setUserCardInfo] = useState({
        id: 1,
        name: '',
        businessName: 'Your Bussiness name',
        email: '',
        phone: '',
        website: '',
        adress: '',
        slogan: 'Your Slogan will appear here',
        image: '',
        businessField: '',
        colors: ['#009688', '#7E61F1']
        
    });

    return (
        <UserCardContext.Provider value={{userCardInfo, setUserCardInfo}}>{ children }</UserCardContext.Provider>
    )
}

export default UserCardContext;