import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../Contexts'
import { weapons, stats, weaponTable } from '../Data/weapons'
import Select from 'react-select'
import calculateDmg from '../Data/calculator'

function ArmoryMiddlePanel() {
    const {toon, weapon, pasteWeapon, mod, setWeapon, setWeapAndPanels, midPanel, isEthereal, toggleLeftPanel, toggleRightPanel, strength, dexterity} = useContext(UserContext)
    const [img, setImg] = useState('default')
    const [text, setText] = useState({})
    // const [damage, setDamage] = useState({total: {min: 0, max: 0, avg: 0}, physical: {min: 0, max: 0, avg: 0}, fire: {min: 0, max: 0, avg: 0}, cold: {min: 0, max: 0, avg: 0}, lightning: {min: 0, max: 0, avg: 0}, poison: {min: 0, max: 0, avg: 0}})


    const damage = calculateDmg(weapon, isEthereal, strength, dexterity)


    const handleWeaponSelect = evt =>{
        setWeapAndPanels({type: evt.label, base: weaponTable[evt.label]})
        setImg(evt.image)
    }
    const pasteFromClipboard = ()=>{
        navigator.clipboard.readText()
            .then(
                clipText => {
                    const weap = JSON.parse(clipText)
                    if(weap.type in weaponTable){
                        setWeapAndPanels({...weap, base: weaponTable[weap.type]})
                    }
                    else{return}
                    for(let i=0;i<weapons.length; i++){
                        if(weapons[i].image === weap.type){
                            setImg(weap.type)
                            break
                        }
                        if(weapons[i].label === weap.type){
                            setImg(weapons[i].image)
                            break
                        }
                    }
                }
            )
            .catch(e=>console.log('error ',e))
    }
    return (
        <div style={{opacity: midPanel }} className="middle-armory panel">
                {
                    mod==='pd2' ? <p className='paste' onClick={pasteFromClipboard}>paste from clipboard</p> : ''
                }
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
                        {damage.total.min ? <h1>DAMAGE </h1> : ''}
                        {damage.physical.min ? <h3 className='phys dmg-type'>physical</h3> : ''}
                        {damage.fire.min ? <h3 className="fire dmg-type">fire</h3> : ''}
                        {damage.lightning.min ? <h3 className="light dmg-type">lightning</h3> : ''}
                        {damage.cold.min ? <h3 className="cold dmg-type">cold</h3> : ''}
                        {damage.poison.min ? <h3 className="poison dmg-type">poison</h3> : ''}
                    </div>
                    <div className="right-damage">
                        {damage.total.min ? <h1>{`${damage.total.min}-${damage.total.max}`}</h1> : ''}
                        {damage.physical.min ? <h3 className={`phys dmg-type `}>{`${damage.physical.min}-${damage.physical.max}`}</h3> : ''}                   
                        {damage.fire.min ? <h3 className="fire dmg-type">{`${damage.fire.min}-${damage.fire.max}`}</h3> : ''}
                        {damage.lightning.min ? <h3 className="light dmg-type">{`${damage.lightning.min}-${damage.lightning.max}`}</h3> : ''}
                        {damage.cold.min ? <h3 className="cold dmg-type">{`${damage.cold.min}-${damage.cold.max}`}</h3> : ''}
                        {damage.poison.min ? <h3 className="poison dmg-type">{`${damage.poison.min}-${damage.poison.max}`}</h3> : ''}
                        {damage.magic.min ? <h3 className="poison dmg-type">{`${damage.magic.min}-${damage.magic.max}`}</h3> : ''}

                    </div>
                
                </div>
                </div>
            </div>
    )
}

export default ArmoryMiddlePanel
