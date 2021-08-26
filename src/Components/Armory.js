import React, { useState, useContext } from 'react'
import { UserContext } from '../Contexts'
import { weapons, stats, weaponTable } from '../weapons'
import defaultimg from '../media/default.png'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import StatsCards from './StatsCards'

const styles = {
    transition: 'opacity 1s ease-in-out',
    // transitionTimingFunction: 'Fast Out, Linear In'
}
const test = ['item1', 'item1', 'item2']

function Armory() {
    
    const {toon, weapon, damage, setWeapon, setWeapAndPanels, leftPanel, midPanel, rightPanel } = useContext(UserContext)


    const handleWeaponSelect = evt =>{
        console.log(evt.value)
        setWeapAndPanels({name: evt.value})
    }
    const handleEthereal = e =>{
        const newWeapon = {...weapon, isEthereal: !weapon.isEthereal}
        setWeapon(newWeapon)
    }
    const handleStatsDropdown= stat =>{
        console.log('stat ', stat)
        setWeapon({...weapon, stats: [...weapon.stats, {name: stat.value, value: ''}]})
    }
        return (
        <div className={`armory-box`}>
            <div style={{...styles, opacity: leftPanel,  }} className={`left-armory panel`}>
                <h2>Weapon</h2>
                <label>Ethereal 
                    <input
                    name='isEthereal'
                    type='checkbox'
                    checked={weapon.isEthereal}
                    onChange={handleEthereal} 
                    />
                </label>
                <Select
                options={stats}
                className='dropdown-weapon-stats dropdown'
                placeholder='Add a Stat'
                onChange={handleStatsDropdown}
                isSearchable
                autoFocus
                />
                {
                weapon.name
                    ?   (weapon.isEthereal
                        ? <p>{`${Math.floor(weaponTable[weapon.name].min*1.5)}-${Math.floor(weaponTable[weapon.name].max*1.5)} base damage`}</p>
                        : <p>{`${weaponTable[weapon.name].min}-${weaponTable[weapon.name].max} base damage`}</p>
                        )
                    : ''
                }
                {
                weapon.stats.length>0 
                ? weapon.stats.map(stat=> {
                    return <StatsCards key={stat.name} weapon={weapon} stat={stat} setWeapon={setWeapon}/>
                })
                : ''
                }
            </div>
            <div style={{...styles, opacity: midPanel }} className="middle-armory panel">
                <div className="weapon-select">
                <Select 
                options={weapons}
                onChange={handleWeaponSelect}
                placeholder='Select Weapon'
                className='dropdown-weapon-selection dropdown'
                isSearchable
                />
                    {/* <option value=''>Select Weapon</option>
                    {weaponlist.map((weap)=>{
                        return <option value={weap.name} tag={weap.tag}>{weap.name}</option>
                    })} */}
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
