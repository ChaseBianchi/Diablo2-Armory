export default function calculateDmg(weapon, isEthereal, strength, dexterity){
    const {base, stats} = weapon
    const physMods = []
    const fireMods = []
    const coldMods = []
    const lightMods = []
    const poisonMods = []
    const magicMods = []
    const demonMods = []
    const undeadMods = []

    stats.forEach(mod =>{
        if(
            mod.name==='item_maxdamage_percent' ||
            mod.name==='item_mindamage_percent' ||
            mod.name==='mindamage' || 
            mod.name==='maxdamage' || 
            mod.name==='secondary_mindamage' || 
            mod.name==='secondary_maxdamage' || 
            mod.name==='damagepercent' || 
            mod.name==='item_throw_mindamage' ||
            mod.name==='item_throw_maxdamage' ||
            mod.name==='damage_vs_montype' ||
            mod.name==='item_maxdamage_perlevel' ||
            mod.name==='item_maxdamage_percent_perlevel' ||
            mod.name==='item_kick_damage_perlevel' ||
            mod.name==='item_deadlystrike_perlevel' ||
            mod.name==='item_maxdamage_bytime' ||
            mod.name==='item_maxdamage_percent_bytime' ||
            mod.name==='item_kick_damage_bytime' ||
            mod.name==='item_deadlystrike_bytime' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' 
        ){
            physMods.push(mod)
        }
        else if(
            mod.name==='firemindam' ||
            mod.name==='firemaxdam' ||
            mod.name==='item_fire_damagemax_perlevel' ||
            mod.name==='item_fire_damagemax_bytime' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' 
        ){
            fireMods.push(mod)
        }
        else if(
            mod.name==='coldmindam' ||
            mod.name==='coldmaxdam' ||
            mod.name==='item_cold_damagemax_perlevel' ||
            mod.name==='item_cold_damagemax_bytime' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' 
        ){
            coldMods.push(mod)
        }
        else if(
            mod.name==='lightmindam' ||
            mod.name==='lightmaxdam' ||
            mod.name==='item_ltng_damagemax_perlevel' ||
            mod.name==='item_ltng_damagemax_bytime' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' 
            ){
            lightMods.push(mod)
        }
        else if(
            mod.name==='poisonmindam' ||
            mod.name==='poisonmaxdam' ||
            mod.name==='item_pois_damagemax_perlevel' ||
            mod.name==='item_pois_damagemax_bytime' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name===''
        ){
            poisonMods.push(mod)
        }
        else if(
            mod.name==='magicmindam' ||
            mod.name==='magicmaxdam' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name==='' ||
            mod.name===''
        ){
            magicMods.push(mod)
        }
        else if(
            mod.name==='item_demondamage_percent' ||
            mod.name==='item_damage_demon_perlevel' ||
            mod.name==='item_damage_demon_bytime'
        ){
            demonMods.push(mod)
        }
        else if(
            mod.name==='item_undeaddamage_percent' ||
            mod.name==='item_damage_undead_perlevel' ||
            mod.name==='item_damage_undead_bytime'
        ){
            undeadMods.push(mod)
        }
        
    })

    const physical = {min: '', max: '', avg: ''}
    const fire = {min: '', max: '', avg: ''}
    const cold = {min: '', max: '', avg: ''}
    const lightning = {min: '', max: '', avg: ''}
    const poison = {min: '', max: '', avg: ''}
    const magic = {min: '', max: '', avg: ''}
    const demon = {min: '', max: '', avg: ''}
    const undead = {min: '', max: '', avg: ''}
    const total = {min: base.min, max: base.max, avg: ''}


    const damage = {
        total,
        physical, 
        fire,
        cold,
        lightning,
        poison,
        magic,
        demon,
        undead
    }
    return damage
}