[EN](../en/status-effects.md) | [JA](../ja/status-effects.md) | [PT-BR](../pt-br/status-effects.md)

# 状態異常・トラップ

`param` テーブル（245件）はゲームパラメータを束ねる: **状態異常31件**（`PARAM_EFFECT_*`）、**トラップ63件**（`PARAM_TRAP_*`）、**属性5件**（`PARAM_SAMP_*`）＋矢属性2件、それにここでは省略する **スキルパラメータ144件**（`PARAM_SK*`）。

### 状態異常（31件）

| 内部id | 種別 | jp |
|---|---|---|
| `PARAM_EFFECT_ANTI_BLEED` | 耐性（ANTI_*） | スチームバトラー |
| `PARAM_EFFECT_ANTI_BLIND` | 耐性（ANTI_*） | スチームバトラー |
| `PARAM_EFFECT_ANTI_PANIC` | 耐性（ANTI_*） | スチームバトラー |
| `PARAM_EFFECT_ANTI_POISON` | 耐性（ANTI_*） | スチームバトラー |
| `PARAM_EFFECT_ANTI_SILENCE` | 耐性（ANTI_*） | スチームバトラー |
| `PARAM_EFFECT_ANTI_SLEEP` | 耐性（ANTI_*） | スチームバトラー |
| `PARAM_EFFECT_ANTI_SLOW` | 耐性（ANTI_*） | スチームバトラー |
| `PARAM_EFFECT_BLOWAGAINST` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_COMPANION` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_DEFDW` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_DEFUP` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_DRAIN` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_FEAR` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_HARDBODY` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_HITDW` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_HITUP` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_LVLDOWN` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_NOATTACK` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_PANIC` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_POISON` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_PROVOKE` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_SHIELD` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_SILENCE` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_SLEEP` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_SPDDW` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_SPDUP` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_STRDW` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_STRUP` | バフ・強化 | スチームバトラー |
| `PARAM_EFFECT_STUN` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_WPNDW` | 状態異常・デバフ | スチームバトラー |
| `PARAM_EFFECT_WPNUP` | バフ・強化 | スチームバトラー |

### 属性

| 内部id | jp |
|---|---|
| `PARAM_SAMP_DARK` | — |
| `PARAM_SAMP_FIRE` | — |
| `PARAM_SAMP_HOLY` | — |
| `PARAM_SAMP_ICE` | — |
| `PARAM_SAMP_THUNDER` | — |
| `PARAM_HOLY_ARROW` | — |
| `PARAM_THUNDER_ARROW` | — |

### トラップ（63件）

#### ガス・ブレス系トラップ (13)

| 内部id |
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

#### 属性床トラップ（レベル01–05） (15)

| 内部id |
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

#### 泉 (2)

| 内部id |
|---|
| `PARAM_TRAP_MP_SPRING` |
| `PARAM_TRAP_SPRING` |

#### 飛び道具（矢・ボウガン・ランサー・針） (16)

| 内部id |
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

#### 仕掛け・障害物 (17)

| 内部id |
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

