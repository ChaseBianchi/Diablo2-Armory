import React, { useState, useContext } from 'react'
import { UserContext } from '../Contexts'
import { weapons, stats, weaponTable } from '../weapons'
import Select from 'react-select'

function ArmoryMiddlePanel() {
    const {toon, weapon, damage, setWeapon, setWeapAndPanels, midPanel} = useContext(UserContext)
    const [img, setImg] = useState('default')
    const handleWeaponSelect = evt =>{
        setWeapAndPanels({type: evt.label, base: weaponTable[evt.label]})
        setImg(evt.image)
    }
    return (
        <div style={{opacity: midPanel }} className="middle-armory panel">
                <div className="weapon-select">
                <Select 
                options={weapons.sort((w1, w2)=>{
                    if(w1.label<w2.label){return -1}
                    if(w1.label>w2.label){return 1}
                    return 0
                    })
                }
                onChange={handleWeaponSelect}
                placeholder='Select Weapon'
                className='dropdown-weapon-selection dropdown'
                isSearchable
                />
                <div className='weapon-image-div'>
                    <img style={weapon.type ? {border: '3px solid #A1A1A1'} : {}} src={img ? `/media/${img.toLowerCase().replace(/\s+/g, '')}.png` : '/media/default.png'} 
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
                    <h1>{`${damage.total.min}-${damage.total.max}`}</h1>
                        <h3 className={`phys dmg-type `}>{`${damage.physical.min}-${damage.physical.max}`}</h3>
                        <h3 className="fire dmg-type">{`${damage.fire.min}-${damage.fire.max}`}</h3>
                        <h3 className="light dmg-type">{`${damage.lightning.min}-${damage.lightning.max}`}</h3>
                        <h3 className="cold dmg-type">{`${damage.cold.min}-${damage.cold.max}`}</h3>
                        <h3 className="poison dmg-type">{`${damage.poison.min}-${damage.poison.max}`}</h3>
                    </div>
                
                </div>
                </div>
            </div>
    )
}

export default ArmoryMiddlePanel
