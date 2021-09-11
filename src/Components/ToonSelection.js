import React, { useContext, createRef } from 'react'
import { UserContext } from '../Contexts'

function ToonSelection() {
    const user = useContext(UserContext)
    const scrollRef = createRef()
    const handleToonClick = name =>{
        user.setToon(name)
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
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
            <p ref={scrollRef} id='toon-text'>{user.toon.name ? `[ ${user.toon.name} ]` : '[ Click a character to select your class ]'}</p>
        </div>
    )
}

export default ToonSelection
