[EN](../en/status-effects.md) | [JA](../ja/status-effects.md) | [PT-BR](../pt-br/status-effects.md)

# Status effects & traps

The `param` table (245 records) bundles gameplay parameters: **31 status effects** (`PARAM_EFFECT_*`), **63 traps** (`PARAM_TRAP_*`), **5 elements** (`PARAM_SAMP_*`) + 2 arrow-element params, and **144 skill params** (`PARAM_SK*`) not listed here.

### Status effects (31)

| internal id | kind | jp |
|---|---|---|
| `PARAM_EFFECT_ANTI_BLEED` | resistance (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_BLIND` | resistance (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_PANIC` | resistance (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_POISON` | resistance (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_SILENCE` | resistance (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_SLEEP` | resistance (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_SLOW` | resistance (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_BLOWAGAINST` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_COMPANION` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_DEFDW` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_DEFUP` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_DRAIN` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_FEAR` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_HARDBODY` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_HITDW` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_HITUP` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_LVLDOWN` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_NOATTACK` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_PANIC` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_POISON` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_PROVOKE` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_SHIELD` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_SILENCE` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_SLEEP` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_SPDDW` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_SPDUP` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_STRDW` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_STRUP` | buff / boon | スチームバトラー |
| `PARAM_EFFECT_STUN` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_WPNDW` | ailment / debuff | スチームバトラー |
| `PARAM_EFFECT_WPNUP` | buff / boon | スチームバトラー |

### Elements

| internal id | jp |
|---|---|
| `PARAM_SAMP_DARK` | — |
| `PARAM_SAMP_FIRE` | — |
| `PARAM_SAMP_HOLY` | — |
| `PARAM_SAMP_ICE` | — |
| `PARAM_SAMP_THUNDER` | — |
| `PARAM_HOLY_ARROW` | — |
| `PARAM_THUNDER_ARROW` | — |

### Traps (63)

#### Gas & breath traps (13)

| internal id |
|---|
| `PARAM_TRAP_BLIND_BREATHE` |
| `PARAM_TRAP_BLIND_GAS` |
| `PARAM_TRAP_BREATHE` |
| `PARAM_TRAP_CONF_GAS` |
| `PARAM_TRAP_DGRD_GAS` |
| `PARAM_TRAP_GAS` |
| `PARAM_TRAP_GAS_ROOM` |
| `PARAM_TRAP_ICE_BREATHE` |
| `PARAM_TRAP_ICE_GAS` |
| `PARAM_TRAP_POISON_BREATHE` |
| `PARAM_TRAP_PRLY_GAS` |
| `PARAM_TRAP_SLEEP_GAS` |
| `PARAM_TRAP_STN_GAS` |

#### Elemental floor traps (levelled 01–05) (15)

| internal id |
|---|
| `PARAM_TRAP_FIRE01` |
| `PARAM_TRAP_FIRE02` |
| `PARAM_TRAP_FIRE03` |
| `PARAM_TRAP_FIRE04` |
| `PARAM_TRAP_FIRE05` |
| `PARAM_TRAP_ICE01` |
| `PARAM_TRAP_ICE02` |
| `PARAM_TRAP_ICE03` |
| `PARAM_TRAP_ICE04` |
| `PARAM_TRAP_ICE05` |
| `PARAM_TRAP_THUNDER01` |
| `PARAM_TRAP_THUNDER02` |
| `PARAM_TRAP_THUNDER03` |
| `PARAM_TRAP_THUNDER04` |
| `PARAM_TRAP_THUNDER05` |

#### Springs (2)

| internal id |
|---|
| `PARAM_TRAP_MP_SPRING` |
| `PARAM_TRAP_SPRING` |

#### Projectiles (arrows, bowgun, lancer, prickle) (16)

| internal id |
|---|
| `PARAM_TRAP_ARROW` |
| `PARAM_TRAP_BLIND_ARROW` |
| `PARAM_TRAP_BOWGUN_ARROW` |
| `PARAM_TRAP_BOWGUN_BLIND_ARROW` |
| `PARAM_TRAP_BOWGUN_FIRE_ARROW` |
| `PARAM_TRAP_BOWGUN_HOLY_ARROW` |
| `PARAM_TRAP_BOWGUN_ICE_ARROW` |
| `PARAM_TRAP_BOWGUN_POISON_ARROW` |
| `PARAM_TRAP_BOWGUN_THUNDER_ARROW` |
| `PARAM_TRAP_FIRE_ARROW` |
| `PARAM_TRAP_ICE_ARROW` |
| `PARAM_TRAP_LANCER` |
| `PARAM_TRAP_POISON_ARROW` |
| `PARAM_TRAP_PRICKLE` |
| `PARAM_TRAP_SLEEP_ARROW` |
| `PARAM_TRAP_THR_ARROW` |

#### Mechanisms & hazards (17)

| internal id |
|---|
| `PARAM_TRAP_MINE` |
| `PARAM_TRAP_BARREL` |
| `PARAM_TRAP_BLEED_GUILLOTINE` |
| `PARAM_TRAP_BLOW_BARREL` |
| `PARAM_TRAP_BLOW_IRONBALL` |
| `PARAM_TRAP_BREAK_WALL` |
| `PARAM_TRAP_CEILING` |
| `PARAM_TRAP_GATE` |
| `PARAM_TRAP_GUILLOTINE` |
| `PARAM_TRAP_GUILLOTINE_L` |
| `PARAM_TRAP_IRONROCK` |
| `PARAM_TRAP_LOG` |
| `PARAM_TRAP_MOVE_BOMB` |
| `PARAM_TRAP_PILLER` |
| `PARAM_TRAP_THORNROLLER` |
| `PARAM_TRAP_WEIGHT` |
| `PARAM_TRAP_WEIGHT_BLOW` |

