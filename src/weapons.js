export const weaponlist = [
    {name: "Tulwar", id: 'tul'},
    {name: 'Berserker Axe', id: 'ber'}
    ]

export const pd2Weapons = [    
    {
        // crafted ammy no corr
        "iLevel": 91,
        "name": "Beast clasp",
        "quality": "Crafted",
        "stats": [
        {
            "name": "vitality",
            "value": 20
        },
        {
            "name": "maxmana",
            "value": 15
        },
        {
            "name": "lifedrainmindam",
            "value": 6
        },
        {
            "name": "item_magicbonus",
            "value": 43
        },
        {
            "name": "item_addclassskills",
            "skill": "Sorceress Skills",
            "value": 1
        },
        {
            "name": "item_lightradius",
            "value": 1
        }
        ],
        "type": "Amulet"
    },
    // LW runeword
    {
        "iLevel": 89,
        "isEthereal": true,
        "isRuneword": true,
        "quality": "Normal",
        "runeword": "Last Wish",
        "socketed": [
        {
            "iLevel": 1,
            "isRune": true,
            "quality": "Normal",
            "type": "Jah Rune"
        },
        {
            "iLevel": 1,
            "isRune": true,
            "quality": "Normal",
            "type": "Mal Rune"
        },
        {
            "iLevel": 1,
            "isRune": true,
            "quality": "Normal",
            "type": "Jah Rune"
        },
        {
            "iLevel": 1,
            "isRune": true,
            "quality": "Normal",
            "type": "Sur Rune"
        },
        {
            "iLevel": 1,
            "isRune": true,
            "quality": "Normal",
            "type": "Jah Rune"
        },
        {
            "iLevel": 1,
            "isRune": true,
            "quality": "Normal",
            "type": "Ber Rune"
        }
        ],
        "sockets": 6,
        "stats": [
        {
            "chance%": 60,
            "level": 40,
            "name": "item_skillonattack",
            "skill": "Charged Bolt"
        },
        {
            "chance%": 10,
            "level": 18,
            "name": "item_skillonhit",
            "skill": "Life Tap Proc"
        },
        {
            "chance%": 6,
            "level": 11,
            "name": "item_skillongethit",
            "skill": "Fade"
        },
        {
            "name": "item_splashonhit",
            "value": 100
        }
        ],
        "type": "Thunder Maul"
    },
    // cyclopean with corruption
    {
        "defense": 162,
        "iLevel": 81,
        "name": "Cyclopean Roar",
        "quality": "Unique",
        "socketed": [
        {
            "iLevel": 85,
            "name": "Ruby Jewel",
            "quality": "Magic",
            "stats": [
            {
                "name": "fireresist",
                "value": 29
            }
            ],
            "type": "Jewel"
        }
        ],
        "sockets": 1,
        "stats": [
        {
            "name": "passive_phys_pierce",
            "range": {
            "max": 10,
            "min": 5
            },
            "value": 10
        },
        {
            "name": "item_leap_speed",
            "value": 20
        },
        {
            "name": "item_fastermovevelocity",
            "value": 20
        },
        {
            "chance%": 10,
            "level": 8,
            "name": "item_skillonhit",
            "skill": "Battle Cry"
        },
        {
            "name": "item_armor_percent",
            "range": {
            "max": 145,
            "min": 90
            },
            "value": 135
        },
        {
            "name": "item_addskill_tab",
            "skill": "Warcries (Barbarian)",
            "value": 2
        },
        {
            "name": "corrupted",
            "value": 32
        }
        ],
        "type": "Jawbone Visor"
    },
    // HIGHLORDS with corruption
    {
        "iLevel": 81,
        "name": "Highlord's Wrath",
        "quality": "Unique",
        "stats": [
        {
            "name": "lightresist",
            "range": {
            "max": 35,
            "min": 25
            },
            "value": 27
        },
        {
            "max": 300,
            "min": 1,
            "name": "lightmindam",
            "value": 1
        },
        {
            "name": "lightmaxdam",
            "range": {
            "max": 300,
            "min": 1
            },
            "value": 300
        },
        {
            "name": "item_fasterattackrate",
            "value": 20
        },
        {
            "name": "item_allskills",
            "value": 1
        },
        {
            "name": "item_deadlystrike_perlevel",
            "value": 2
        },
        {
            "name": "item_attackertakeslightdamage",
            "range": {
            "max": 150,
            "min": 100
            },
            "value": 124
        },
        {
            "corrupted": 1,
            "name": "dexterity",
            "value": 7
        },
        {
            "name": "corrupted",
            "value": 69
        }
        ],
        "type": "Amulet"
    }
    
]