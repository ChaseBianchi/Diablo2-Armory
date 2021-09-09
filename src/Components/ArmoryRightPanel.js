import React, { useState, useContext } from 'react'
import { UserContext } from '../Contexts'
import { weapons, stats, weaponTable } from '../Data/weapons'
import Select from 'react-select'

function ArmoryRightPanel() {
    const {toon, setStrength, setDexterity, strength, dexterity, weapon, damage, rightPanel } = useContext(UserContext)
    const onChange= e =>{
        const re = /^[0-9]+$/;
        console.log(e)
        if (e.target.value==='' || re.test(e.target.value)) {
            if(e.target.name==='strength'){
                setStrength(e.target.value)
            }else{setDexterity(e.target.value)}
        }
    }
    return (
        <div style={{opacity: rightPanel}} className={`right-armory panel`}>
            <h2>{toon}</h2>
            {/* <div className="underscore-line"></div> */}
            <div className='stats-card-container'>
            <div className="left-stat-box">
            <input
                className='stat-input'
                name='strength' 
                type='text'
                placeholder='#'
                value={strength}   
                onChange={onChange} 
                />
            </div>
            <div className="right-stat-box">
            Strength
            </div>
            <div className="left-stat-box">
            <input
                className='stat-input'
                name='dexterity' 
                type='text'
                placeholder='#'
                value={dexterity}   
                onChange={onChange} 
                />
            </div>
            <div className="right-stat-box">
            Dexterity
            </div>
            </div>
        </div>
    )
}

export default ArmoryRightPanel
