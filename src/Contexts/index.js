import React, { useState, createContext } from 'react';

export const UserContext = createContext(
    {
        mod: 'pd2',
        toon: '',
        strength: '',
        dexterity: '',
        weapon: {base: {}, method: '1h', iLevel: 0, quality: '', type: '', isEthereal: false, isRuneword: false, runeword: '', isRune: false, socketed: [], stats: []},
        damage: {total: {min: 0, max: 0, avg: 0}, physical: {min: 0, max: 0, avg: 0}, fire: {min: 0, max: 0, avg: 0}, cold: {min: 0, max: 0, avg: 0}, lightning: {min: 0, max: 0, avg: 0}, poison: {min: 0, max: 0, avg: 0}},
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
        calcDamage: ()=>{},
        setMod: ()=>{},
        setStrength: ()=>{},
        setDexterity: ()=>{},
        pasteWeapon: ()=>{},
    }
);

export const UserContextProvider = props =>{
    const initState = {
        mod: 'pd2',
        toon: '',
        strength: '',
        dexterity: '',
        weapon: {base: {}, method: '1h', iLevel: 0, quality: '', type: '', isEthereal: false, isRuneword: false, runeword: '', isRune: false, socketed: [], stats: []},
        damage: {total: {min: 0, max: 0, avg: 0}, physical: {min: 0, max: 0, avg: 0}, fire: {min: 0, max: 0, avg: 0}, cold: {min: 0, max: 0, avg: 0}, lightning: {min: 0, max: 0, avg: 0}, poison: {min: 0, max: 0, avg: 0}},
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
        calcDamage: ()=>{},
        setMod: ()=>{},
        setStrength: ()=>{},
        setDexterity: ()=>{},
        pasteWeapon: ()=>{},
    }
    const [userState, setUserState] = useState(initState)

    function setToon(toon){
        const newState = {...userState, midPanel: '100', toon: toon}
        setUserState(newState)
    }
    function setMod(e){
        console.log(e)
        const newState = {...userState, mod: e.target.value}
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
    function calcDamage(){

    }
    function setStrength(value){
        setUserState({...userState, strength: value})
    }
    function setDexterity(value){
        setUserState({...userState, dexterity: value})
    }
    function pasteWeapon(weapon){
        setUserState({...userState, weapon: {...userState.weapon, ...weapon}})
    }
    
    return <UserContext.Provider value={{...userState, pasteWeapon, setStrength, setDexterity, setMod, setWeapon, setToon, resetUser, toggleLeftPanel, toggleMidPanel, toggleRightPanel, setWeapAndPanels, calcDamage}} >{props.children}</UserContext.Provider>
}