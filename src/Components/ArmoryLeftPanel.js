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
    const handleWeaponMethod = evt =>{
        const newWeapon = {...weapon, method: evt.target.value}
        setWeapon(newWeapon)

    }
    const baseDmgMap = {
        '1h': {min: 'min', max: 'max'},
        '2h': {min: 'min_2h', max: 'max_2h'},
        'throw': {min: 'throw_min', max: 'throw_max'},
    }
    return (
        <div style={{opacity: leftPanel}} className={`left-armory panel`}>
                <h2>{weapon.type}</h2>
                {
                weapon.type
                    ?   (weapon.isEthereal
                        ? <h3 className='base-dmg'>{`${Math.floor(weaponTable[weapon.type][baseDmgMap[weapon.method].min]*1.5)}-${Math.floor(weaponTable[weapon.type][baseDmgMap[weapon.method].max]*1.5)} base damage`}</h3>
                        : <h3 className='base-dmg'>{`${weaponTable[weapon.type][baseDmgMap[weapon.method].min]}-${weaponTable[weapon.type][baseDmgMap[weapon.method].max]} base damage`}</h3>
                        )
                    : ''
                }
                {(weapon.base.type!=='bow' && weapon.base.type!=='crossbow')
                ? <label className='eth-label'>Ethereal 
                    <input
                    name='isEthereal'
                    type='checkbox'
                    checked={weapon.isEthereal}
                    onChange={handleEthereal} 
                    />
                </label>
                : ''
                }
                {
                weapon.base.throw_min 
                ?   <div className="weapon-method-container">
                        <label className='eth-label'>1 Hand 
                            <input
                            name='weapon-method'
                            value='1h'
                            type='radio'
                            checked={weapon.method==='1h'}
                            onChange={handleWeaponMethod} 
                            />
                        </label> 
                        <label className='eth-label'>Throw 
                            <input
                            name='weapon-method'
                            value='throw'
                            type='radio'
                            checked={weapon.method==='throw'}
                            onChange={handleWeaponMethod} 
                            />
                        </label> 
                    </div>  
                : ''
                }
                {
                weapon.base.min_2h 
                ?   <div className="weapon-method-container">
                        <label className='eth-label'>1 Hand 
                            <input
                            name='weapon-method'
                            value='1h'
                            type='radio'
                            checked={weapon.method==='1h'}
                            onChange={handleWeaponMethod} 
                            />
                        </label> 
                        <label className='eth-label'>2 Hand 
                            <input
                            name='weapon-method'
                            value='2h'
                            type='radio'
                            checked={weapon.method==='2h'}
                            onChange={handleWeaponMethod} 
                            />
                        </label> 
                    </div>  
                : ''
                }
                
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
