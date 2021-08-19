import React, { useState, createContext } from 'react';

export const DataContext = createContext(
    {
        toon: '',
        weapon: {name: '', mods: []},
        setToon: ()=>{},
        setWeapon: ()=>{},
        resetAll: ()=>{},

    }
);

export const DataContextProvider = props =>{
    
    const setToon = toon => {
        setState({...state, toon: toon})
    }
    const setWeapon = weapon =>{
        setState({...state, weapon: weapon})
    }
    function resetAll(){
        setState({initState})
    }
    const initState = {
        toon: '',
        weapon: {name: '', mods: []},
        setToon: setToon,
        setWeapon: setWeapon,
        resetAll: resetAll,
    }
    const [state, setState] = useState(initState)
    return <DataContext.Provider value={state} >{props.children}</DataContext.Provider>
}