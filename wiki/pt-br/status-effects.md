[EN](../en/status-effects.md) | [JA](../ja/status-effects.md) | [PT-BR](../pt-br/status-effects.md)

# Efeitos de status e armadilhas

A tabela `param` (245 registros) reúne parâmetros de jogo: **31 efeitos de status** (`PARAM_EFFECT_*`), **63 armadilhas** (`PARAM_TRAP_*`), **5 elementos** (`PARAM_SAMP_*`) + 2 parâmetros de elemento de flecha, e **144 parâmetros de habilidade** (`PARAM_SK*`) não listados aqui.

### Efeitos de status (31)

| id interno | tipo | jp |
|---|---|---|
| `PARAM_EFFECT_ANTI_BLEED` | resistência (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_BLIND` | resistência (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_PANIC` | resistência (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_POISON` | resistência (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_SILENCE` | resistência (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_SLEEP` | resistência (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_ANTI_SLOW` | resistência (ANTI_*) | スチームバトラー |
| `PARAM_EFFECT_BLOWAGAINST` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_COMPANION` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_DEFDW` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_DEFUP` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_DRAIN` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_FEAR` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_HARDBODY` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_HITDW` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_HITUP` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_LVLDOWN` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_NOATTACK` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_PANIC` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_POISON` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_PROVOKE` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_SHIELD` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_SILENCE` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_SLEEP` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_SPDDW` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_SPDUP` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_STRDW` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_STRUP` | buff / bônus | スチームバトラー |
| `PARAM_EFFECT_STUN` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_WPNDW` | condição / debuff | スチームバトラー |
| `PARAM_EFFECT_WPNUP` | buff / bônus | スチームバトラー |

### Elementos

| id interno | jp |
|---|---|
| `PARAM_SAMP_DARK` | — |
| `PARAM_SAMP_FIRE` | — |
| `PARAM_SAMP_HOLY` | — |
| `PARAM_SAMP_ICE` | — |
| `PARAM_SAMP_THUNDER` | — |
| `PARAM_HOLY_ARROW` | — |
| `PARAM_THUNDER_ARROW` | — |

### Armadilhas (63)

#### Armadilhas de gás e sopro (13)

| id interno |
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

#### Armadilhas de piso elemental (níveis 01–05) (15)

| id interno |
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

#### Fontes (2)

| id interno |
|---|
| `PARAM_TRAP_MP_SPRING` |
| `PARAM_TRAP_SPRING` |

#### Projéteis (flechas, besta, lancer, espinhos) (16)

| id interno |
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

#### Mecanismos e perigos (17)

| id interno |
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

