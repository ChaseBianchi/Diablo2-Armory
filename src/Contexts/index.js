import React, { useState, createContext } from 'react';

export const UserContext = createContext(
    {
        toon: '',
        weapon: {iLevel: 0, name: '', quality: '', type: '', isEthereal: false, isRuneword: false, runeword: '', isRune: false, socketed: [], stats: []},
        setToon: ()=>{},
        setWeapon: ()=>{},
        resetAll: ()=>{},

    }
);

export const UserContextProvider = props =>{
    const initState = {
        toon: '',
        weapon: {iLevel: 0, name: '', quality: '', type: '', isEthereal: false, isRuneword: false, runeword: '', isRune: false, socketed: [], stats: []},
    }
    const [userState, setUserState] = useState(initState)
    function setToon(toon){
        const newState = {...userState, toon: toon}
        setUserState(newState)
    }
    function setWeapon(weapon){
        const newState = {...userState, weapon: {...userState.weapon, ...weapon}}
        setUserState(newState)
    }
    function resetUser(){
        setUserState({initState})
    }
    
    
    return <UserContext.Provider value={{...userState, setWeapon, setToon, resetUser}} >{props.children}</UserContext.Provider>
}