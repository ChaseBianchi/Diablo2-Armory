import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../Contexts'
import { weapons, stats, weaponTable } from '../Data/weapons'
import Select from 'react-select'

function ArmoryRightPanel() {
    const {toon, setStrength, setDexterity, setLevel, weapon, damage, rightPanel } = useContext(UserContext)
    const onChange= e =>{
        const re = /^[0-9]+$/;
        console.log(e)
        if (e.target.value==='' || re.test(e.target.value)) {
            if(e.target.name==='strength'){
                setStrength(e.target.value)
            }else if(e.target.name==='dexterity')
                {setDexterity(e.target.value)}
            else{setLevel(e.target.value)}
        }
    }
    
    
    
    // Async / await usage
    // const jsonArray=await csv().fromFile(csvFilePath);
    return (
        <div style={{opacity: rightPanel}} className={`right-armory panel`}>
            <h2>{toon.name}</h2>
            {/* <div className="underscore-line"></div> */}
            <div className='stats-container'>
            <div className="stat">
                <div className="right-stat-box">
                Level
                </div>
                <div className="left-stat-box">
                    <input
                        className='stat-input'
                        name='level' 
                        type='text'
                        placeholder='#'
                        value={toon.level}   
                        onChange={onChange} 
                    />
                </div>
            </div>
            <div className="stat">
                <div className="right-stat-box">
                Strength
                </div>
                <div className="left-stat-box">
                    <input
                        className='stat-input'
                        name='strength' 
                        type='text'
                        placeholder='#'
                        value={toon.strength}   
                        onChange={onChange} 
                    />
                </div>
            </div>
            <div className="stat">
                <div className="right-stat-box">
                Dexterity
                </div>
                <div className="left-stat-box">
                    <input
                        className='stat-input'
                        name='dexterity' 
                        type='text'
                        placeholder='#'
                        value={toon.dexterity}   
                        onChange={onChange} 
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

export default ArmoryRightPanel
