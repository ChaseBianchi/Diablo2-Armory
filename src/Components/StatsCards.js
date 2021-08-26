import React from 'react'




function StatsCards(props) {
    const {stat, weapon, setWeapon} = props
   
    const statIndex = weapon.stats.findIndex(obj=> obj.name===stat.name)
    const onChange= e =>{
        const re = /^[0-9]+$/;
        if (re.test(e.target.value)) {
            const newStats = [...weapon.stats]
            newStats[statIndex].value = e.target.value
            setWeapon({...weapon, stats: [...newStats]})
        }
    }
    return (
        <div className='stats-card-container'>
            <div className="left-stat-box">
            <input
                className='stat-input'
                name={stat.name} 
                type='text'
                placeholder='100'
                value={weapon.stats[weapon.stats.findIndex(obj=> obj.name===stat.name)].value}   
                onChange={onChange} 
                />
            
            </div>
            <div className="right-stat-box">
            {stat.name}
            </div>
                
        </div>
    )
}

export default StatsCards
