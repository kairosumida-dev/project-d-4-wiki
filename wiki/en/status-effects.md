[EN](../en/status-effects.md) | [JA](../ja/status-effects.md) | [PT-BR](../pt-br/status-effects.md)

# Status effects, elements & traps

> Source: `project_d.xbe` .data table @ `0x6127a4`–`0x663524` (`param`, non-contiguous) — reverse engineered

> Extracted data for **Quest of D 4.0 — The Battle Kingdom** (Sega Chihiro, `CDV-10035B`). Records are 128-byte `.data` rows; field 0 points to the uppercase internal ID shown here. Japanese strings come from `text.bin` (5322-entry SJIS table); name resolution methods are described per section and unresolved fields are left blank rather than guessed.

The `param` table (245 records) bundles gameplay parameters: **31 status
effects** (`PARAM_EFFECT_*`), **63 traps** (`PARAM_TRAP_*`), **5 elements**
(`PARAM_SAMP_*`), **2 arrow-element params** and **144 skill params**
(`PARAM_SK*`, not listed here).

> **Count note:** the brief listed "30 effects" — the table actually names
> **31 distinct `PARAM_EFFECT_*` records** (`ANTI_BLEED` through `WPNUP`).
> All 31 are listed; none were dropped.
>
> **jp note:** no per-record display-name binding has been decoded for this
> table, so the `jp` column is intentionally empty rather than filled with
> the unreliable raw join (which maps all rows to `スチームバトラー`).

### Status effects (31)

| internal id | kind |
|---|---|
| `PARAM_EFFECT_ANTI_BLEED` | resistance (ANTI_*) |
| `PARAM_EFFECT_ANTI_BLIND` | resistance (ANTI_*) |
| `PARAM_EFFECT_ANTI_PANIC` | resistance (ANTI_*) |
| `PARAM_EFFECT_ANTI_POISON` | resistance (ANTI_*) |
| `PARAM_EFFECT_ANTI_SILENCE` | resistance (ANTI_*) |
| `PARAM_EFFECT_ANTI_SLEEP` | resistance (ANTI_*) |
| `PARAM_EFFECT_ANTI_SLOW` | resistance (ANTI_*) |
| `PARAM_EFFECT_BLOWAGAINST` | special |
| `PARAM_EFFECT_COMPANION` | special |
| `PARAM_EFFECT_DEFDW` | ailment / debuff |
| `PARAM_EFFECT_DEFUP` | buff / boon |
| `PARAM_EFFECT_DRAIN` | special |
| `PARAM_EFFECT_FEAR` | ailment / debuff |
| `PARAM_EFFECT_HARDBODY` | special |
| `PARAM_EFFECT_HITDW` | ailment / debuff |
| `PARAM_EFFECT_HITUP` | buff / boon |
| `PARAM_EFFECT_LVLDOWN` | ailment / debuff |
| `PARAM_EFFECT_NOATTACK` | ailment / debuff |
| `PARAM_EFFECT_PANIC` | ailment / debuff |
| `PARAM_EFFECT_POISON` | ailment / debuff |
| `PARAM_EFFECT_PROVOKE` | special |
| `PARAM_EFFECT_SHIELD` | special |
| `PARAM_EFFECT_SILENCE` | ailment / debuff |
| `PARAM_EFFECT_SLEEP` | ailment / debuff |
| `PARAM_EFFECT_SPDDW` | ailment / debuff |
| `PARAM_EFFECT_SPDUP` | buff / boon |
| `PARAM_EFFECT_STRDW` | ailment / debuff |
| `PARAM_EFFECT_STRUP` | buff / boon |
| `PARAM_EFFECT_STUN` | ailment / debuff |
| `PARAM_EFFECT_WPNDW` | ailment / debuff |
| `PARAM_EFFECT_WPNUP` | buff / boon |

### Elements (5 + 2 arrow params)

| internal id | element |
|---|---|
| `PARAM_SAMP_DARK` | dark |
| `PARAM_SAMP_FIRE` | fire |
| `PARAM_SAMP_HOLY` | holy |
| `PARAM_SAMP_ICE` | ice |
| `PARAM_SAMP_THUNDER` | thunder |
| `PARAM_HOLY_ARROW` | holy (arrow) |
| `PARAM_THUNDER_ARROW` | thunder (arrow) |

`SAMP` is likely "sample/elemental attribute" — the five canonical elements
also appear on weapons (`*_F` `*_I` `*_T` monster variants), traps and spells.

### Traps (63 `PARAM_TRAP_*`)

#### Gas & breath hazards (13)

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

#### Fire pillars (5)

| internal id |
|---|
| `PARAM_TRAP_FIRE01` |
| `PARAM_TRAP_FIRE02` |
| `PARAM_TRAP_FIRE03` |
| `PARAM_TRAP_FIRE04` |
| `PARAM_TRAP_FIRE05` |

#### Ice pillars (5)

| internal id |
|---|
| `PARAM_TRAP_ICE01` |
| `PARAM_TRAP_ICE02` |
| `PARAM_TRAP_ICE03` |
| `PARAM_TRAP_ICE04` |
| `PARAM_TRAP_ICE05` |

#### Thunder pillars (5)

| internal id |
|---|
| `PARAM_TRAP_THUNDER01` |
| `PARAM_TRAP_THUNDER02` |
| `PARAM_TRAP_THUNDER03` |
| `PARAM_TRAP_THUNDER04` |
| `PARAM_TRAP_THUNDER05` |

#### Mines & springs (4)

| internal id |
|---|
| `PARAM_TRAP_MINE` |
| `PARAM_TRAP_MP_SPRING` |
| `PARAM_TRAP_SPRING` |
| `PARAM_TRAP_MOVE_BOMB` |

#### Arrows & projectiles (14)

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
| `PARAM_TRAP_POISON_ARROW` |
| `PARAM_TRAP_SLEEP_ARROW` |
| `PARAM_TRAP_THR_ARROW` |

#### Mechanical hazards (17)

| internal id |
|---|
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
| `PARAM_TRAP_LANCER` |
| `PARAM_TRAP_LOG` |
| `PARAM_TRAP_PILLER` |
| `PARAM_TRAP_PRICKLE` |
| `PARAM_TRAP_THORNROLLER` |
| `PARAM_TRAP_WEIGHT` |
| `PARAM_TRAP_WEIGHT_BLOW` |

### Skill params (144, not expanded)

`PARAM_SK*` records mirror the `BOOK2_SK*`/`SKILL_SK*` numbering space and
hold per-skill numeric tuning (undecoded `u32` fields — see FINDINGS.md for
the raw CSV dump).
