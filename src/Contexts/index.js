import React, { useState, createContext } from 'react';

export const UserContext = createContext(
    {
        toon: '',
        weapon: {iLevel: 0, name: '', quality: '', type: '', isEthereal: false, isRuneword: false, runeword: '', isRune: false, socketed: [], stats: []},
        damage: 0,
        leftPanel: '0',
        midPanel: '0',
        rightPanel: '0',
        toggleLeftPanel: ()=>{},
        toggleMidPanel: ()=>{},
        toggleRightPanel: ()=>{},
        setWeapAndPanels: ()=>{},
        resetAll: ()=>{},
        setWeapon: ()=>{},
        setToon: ()=>{},
    }
);

export const UserContextProvider = props =>{
    const initState = {
        toon: '',
        weapon: {iLevel: 0, name: '', quality: '', type: '', isEthereal: false, isRuneword: false, runeword: '', isRune: false, socketed: [], stats: []},
        damage: {total: 0, physical: 0, fire: 0, cold: 0, lightning: 0, poison: 0},
        leftPanel: '0',
        midPanel: '0',
        rightPanel: '0',
        toggleLeftPanel: ()=>{},
        toggleMidPanel: ()=>{},
        toggleRightPanel: ()=>{},
        setWeapAndPanels: ()=>{},
        resetAll: ()=>{},
        setWeapon: ()=>{},
        setToon: ()=>{},
        
    }
    const [userState, setUserState] = useState(initState)
    function setToon(toon){
        const newState = {...userState, midPanel: '100', toon: toon}
        setUserState(newState)
    }
    function setWeapon(weapon){
        const newState = {...userState, weapon: {...userState.weapon, ...weapon}}
        setUserState(newState)
    }
    function toggleLeftPanel(){
        const newState = {...userState, leftPanel: userState.leftPanel==='0' ? '100' : '0'}
        setUserState(newState)
    }
    function toggleMidPanel(){
        const newState = {...userState, midPanel: userState.midPanel==='0' ? '100' : '0'}
        setUserState(newState)
    }
    function toggleRightPanel(){
        const newState = {...userState, rightPanel: userState.rightPanel==='0' ? '100' : '0'}
        setUserState(newState)
    }
    function setWeapAndPanels(weapon){
        const newState = {...userState, leftPanel: '100', rightPanel: '100', weapon: {...userState.weapon, ...weapon}}
        setUserState(newState)
    }
    function resetUser(){
        setUserState({initState})
    }
    
    
    return <UserContext.Provider value={{...userState, setWeapon, setToon, resetUser, toggleLeftPanel, toggleMidPanel, toggleRightPanel, setWeapAndPanels}} >{props.children}</UserContext.Provider>
}