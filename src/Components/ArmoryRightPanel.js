import React, { useState, useContext } from 'react'
import { UserContext } from '../Contexts'
import { weapons, stats, weaponTable } from '../weapons'
import Select from 'react-select'

function ArmoryRightPanel() {
    const {toon, weapon, damage, rightPanel } = useContext(UserContext)

    return (
        <div style={{opacity: rightPanel}} className={`right-armory panel`}>
                <h2>Character</h2>
                
            </div>
    )
}

export default ArmoryRightPanel
