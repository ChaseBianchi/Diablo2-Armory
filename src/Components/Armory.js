import React, { useState, useContext } from 'react'
import { UserContext } from '../Contexts'
import { weapons, stats, weaponTable } from '../Data/weapons'
import ArmoryLeftPanel from './ArmoryLeftPanel'
import ArmoryRightPanel from './ArmoryRightPanel'
import ArmoryMiddlePanel from './ArmoryMiddlePanel'

function Armory() {
    
    const {toon, mod, setMod, weapon, damage, setWeapon, setWeapAndPanels, leftPanel, midPanel, rightPanel } = useContext(UserContext)

        return (
        <div className={`armory-box`}>
            <div className="mod-select">
                {/* <div className="coming-soon"> */}
                    <button onClick={setMod} value='lod' className={`lod mod ${mod==='lod' ? 'curr-mod' : ''}`} >Lord of Destruction</button>
                    {/* <p>coming soon</p> */}
                {/* </div> */}
                <button onClick={setMod} value='pd2' className={`lod mod ${mod==='pd2' ? 'curr-mod' : ''}`}>Project Diablo 2</button>
                <div className="coming-soon">
                    <button onClick={()=>{}} value='pod' className={`lod mod ${mod==='pod' ? 'curr-mod' : ''}`}>Path of Diablo</button>
                    <p>coming soon</p>
                </div>
            </div>
            <ArmoryLeftPanel />
            <ArmoryMiddlePanel />
            <ArmoryRightPanel />
        </div>
    )
    
}

export default Armory
