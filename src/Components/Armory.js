import React, { useState, useContext } from 'react'
import { UserContext } from '../Contexts'
import { weaponlist } from '../weapons'
import defaultimg from '../media/default.png'

const styles = {
    transition: 'opacity 1s ease-in-out',
    // transitionTimingFunction: 'Fast Out, Linear In'
}

function Armory() {
    
    const {toon, weapon, damage, setWeapAndPanels, leftPanel, midPanel, rightPanel } = useContext(UserContext)


    const handleWeaponSelect = evt =>{
        console.log(evt.target)
        const ele = evt.target.getAttribute('tag')
        setWeapAndPanels({name: evt.target.value, tag: ele})
        
    }
        return (
        <div className={`armory-box`}>
            <div style={{...styles, opacity: leftPanel,  }} className={`left-armory panel`}>
                <h2>Weapon</h2>
            </div>
            <div style={{...styles, opacity: midPanel }} className="middle-armory panel">
                <div className="weapon-select">
                <select value={weapon.name} onChange={handleWeaponSelect}>
                    <option value=''>Select Weapon</option>
                    {weaponlist.map((weap)=>{
                        return <option value={weap.name} tag={weap.tag}>{weap.name}</option>
                    })}
                </select>
                <div className='weapon-image-div'>
                    <img style={weapon.name ? {border: '3px solid #A1A1A1'} : {}} src={weapon.name ? `/media/${weapon.name.toLowerCase().replace(/\s+/g, '')}.png` : '/media/default.png'} 
                    alt="weapon" className="weapon-image" 
                    />
                </div>
                <div className="damage-box">
                    <div className="left-damage">
                    <h1>DAMAGE </h1>
                        <h3 className='phys dmg-type'>physical</h3>
                        <h3 className="fire dmg-type">fire</h3>
                        <h3 className="light dmg-type">lightning</h3>
                        <h3 className="cold dmg-type">cold</h3>
                        <h3 className="poison dmg-type">poison</h3>
                    </div>
                    <div className="right-damage">
                    <h1>{damage.total}</h1>
                        <h3 className={`phys dmg-type `}>{damage.physical}</h3>
                        <h3 className="fire dmg-type">{damage.fire}</h3>
                        <h3 className="light dmg-type">{damage.lightning}</h3>
                        <h3 className="cold dmg-type">{damage.cold}</h3>
                        <h3 className="poison dmg-type">{damage.poison}</h3>
                    </div>
                
                </div>
                </div>
            </div>
            <div style={{...styles, opacity: rightPanel,  }} className={`right-armory panel`}>
                <h2>Character</h2>
                
            </div>
        </div>
    )
    
}

export default Armory
