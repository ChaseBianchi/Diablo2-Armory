import React, { useState, useContext } from 'react'
import { UserContext } from '../Contexts'
import { weaponlist } from '../weapons'
import defaultimg from '../media/default.png'


function Armory() {

    const {toon, weapon, setWeapon} = useContext(UserContext)
    const handleWeaponSelect = evt =>{
        console.log(evt.target)
        const ele = evt.target.getAttribute('tag')
        setWeapon({name: evt.target.value, tag: ele})
    }
    
    const handleWeaponDropdown = evt =>{
        console.log('setWeaponName ', setWeapon)
        setWeapon('test2')
        console.log(weapon)
    }
    return (
        <div className={`armory-box ${toon ? '' : 'hidden'}`}>
            <div className={`left-armory panel ${weapon.name ? '' : 'hidden'}`}>
                {weapon.name}
                {weapon.tag}
            </div>
            <div className="right-armory panel">
                <div className="weapon-select">
                <select value={weapon.name} onChange={handleWeaponSelect}>
                    <option value=''>Select Weapon</option>
                    {weaponlist.map((weap)=>{
                        return <option value={weap.name} tag={weap.tag}>{weap.name}</option>
                    })}
                </select>
                <div className='weapon-image-div'>
                    <img src='/media/default.png' alt="weapon" className="weapon-image" />
                </div>
                </div>
            </div>
        </div>
    )
    
}

export default Armory
