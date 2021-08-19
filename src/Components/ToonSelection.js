import React, { useContext } from 'react'
import campfireimg from '../media/campfire.png'
import { DataContext } from '../Contexts'

function ToonSelection() {
    const context = useContext(DataContext)
    const handleToonClick = name =>{
        context.setToon(name)
    }
    return (
        <div className="character-selection">
            <div className="campfire-image">
                <div className="amazon-box selection-box" onClick={()=>handleToonClick('Amazon')}></div>
                <div className="assassin-box selection-box" onClick={()=>handleToonClick('Assassin')}></div>
                <div className="necro-box selection-box" onClick={()=>handleToonClick('Necromancer')}></div>
                <div className="barb-box selection-box" onClick={()=>handleToonClick('Barbarian')}></div>
                <div className="sorc-box selection-box" onClick={()=>handleToonClick('Sorceress')}></div>
                <div className="druid-box selection-box" onClick={()=>handleToonClick('Druid')}></div>
                <div className="pal-box selection-box" onClick={()=>handleToonClick('Paladin')}></div>
            </div>
            {/* <img src={campfireimg} alt="character selection" className="campfire" /> */}
            <p>{context.toon ? `[ ${context.toon} ]` : '[ Click a character to select your class ]'}</p>
        </div>
    )
}

export default ToonSelection
