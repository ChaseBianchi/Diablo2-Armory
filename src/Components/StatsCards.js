import React from 'react'




function StatsCards(props) {
    const {stat, weapon, setWeapon} = props
   
    const statIndex = weapon.stats.findIndex(obj=> obj.name===stat.name)
    const onChange= e =>{
        const re = /^[0-9]+$/;
        if (e.target.value==='' || re.test(e.target.value)) {
            const newStats = [...weapon.stats]
            newStats[statIndex].value = e.target.value
            setWeapon({...weapon, stats: [...newStats]})
        }
    }
    const handleCancelStat = ()=>{
        const newStats = [...weapon.stats]
        newStats.splice(statIndex, 1)
        setWeapon({...weapon, stats: [...newStats]})
    }
    return (
        <div className='stats-card-container'>
            <div className="left-stat-card">
                <button  
                onClick={handleCancelStat}
                className='cancel-btn'
                >x</button>
                <input
                className='stat-input'
                name={stat.name} 
                type='text'
                placeholder='#'
                value={weapon.stats[weapon.stats.findIndex(obj=> obj.name===stat.name)].value}   
                onChange={onChange} 
                />
            </div>
            <div className="right-stat-card">
            {stat.name}
            </div>
                
        </div>
    )
}

export default StatsCards
