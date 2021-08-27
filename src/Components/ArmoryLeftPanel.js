import React, { useState, useContext } from 'react'
import { UserContext } from '../Contexts'
import { weapons, stats, weaponTable } from '../weapons'
import Select from 'react-select'
import StatsCards from './StatsCards'

function ArmoryLeftPanel() {
    const {weapon, setWeapon, leftPanel} = useContext(UserContext)
    
    const handleEthereal = e =>{
        const newWeapon = {...weapon, isEthereal: !weapon.isEthereal}
        setWeapon(newWeapon)
    }
    const handleStatsDropdown= stat =>{
        if(!(weapon.stats.some(obj => obj.name===stat.value))){
            setWeapon({...weapon, stats: [...weapon.stats, {name: stat.value, value: ''}]})
        }
    }
    return (
        <div style={{opacity: leftPanel}} className={`left-armory panel`}>
                <h2>{weapon.type}</h2>
                {
                weapon.type
                    ?   (weapon.isEthereal
                        ? <h4 className='base-dmg'>{`${Math.floor(weaponTable[weapon.type].min*1.5)}-${Math.floor(weaponTable[weapon.type].max*1.5)} base damage`}</h4>
                        : <h4 className='base-dmg'>{`${weaponTable[weapon.type].min}-${weaponTable[weapon.type].max} base damage`}</h4>
                        )
                    : ''
                }
                <label className='eth-label'>Ethereal 
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
                weapon.stats.length>0 
                ? weapon.stats.map(stat=> {
                    return <StatsCards key={stat.name} weapon={weapon} stat={stat} setWeapon={setWeapon}/>
                })
                : ''
                }
            </div>
    )
}

export default ArmoryLeftPanel
