[EN](../en/status-effects.md) | [JA](../ja/status-effects.md) | [PT-BR](../pt-br/status-effects.md)

# 状態異常・属性・トラップ

> Source: `project_d.xbe` .data table @ `0x6127a4`–`0x663524` (`param`, non-contiguous) — reverse engineered

> **Quest of D 4.0 — The Battle Kingdom**（Sega Chihiro、`CDV-10035B`）の抽出データ。レコードは128バイトの `.data` 行で、フィールド0はここに示す大文字内部 ID を指す。日本語文字列は `text.bin`（5322エントリの SJIS テーブル）由来。名前解決の方法はセクションごとに記し、未解決フィールドは推測せず空欄のままにする。

`param` テーブル（245レコード）はゲームプレイパラメータを束ねる：**31種の状態異常**（`PARAM_EFFECT_*`）、**63種のトラップ**（`PARAM_TRAP_*`）、**5属性**（`PARAM_SAMP_*`）、**2つの矢属性パラメータ**、**144のスキルパラメータ**（`PARAM_SK*`、ここでは未掲載）。

> **件数メモ：** 概要には「効果30種」とあったが、テーブルには実際に **31個の異なる `PARAM_EFFECT_*` レコード**（`ANTI_BLEED` から `WPNUP` まで）がある。31個すべてを掲載しており、欠落はない。
>
> **jp メモ：** このテーブルのレコード別表示名バインドはまだ解読されていないため、`jp` 列は、信頼性の低い生結合（全行が `スチームバトラー` になるもの）で埋めるのではなく、意図的に空欄にしている。

### 状態異常（31）

| internal id | kind |
|---|---|
| `PARAM_EFFECT_ANTI_BLEED` | 耐性（ANTI_*） |
| `PARAM_EFFECT_ANTI_BLIND` | 耐性（ANTI_*） |
| `PARAM_EFFECT_ANTI_PANIC` | 耐性（ANTI_*） |
| `PARAM_EFFECT_ANTI_POISON` | 耐性（ANTI_*） |
| `PARAM_EFFECT_ANTI_SILENCE` | 耐性（ANTI_*） |
| `PARAM_EFFECT_ANTI_SLEEP` | 耐性（ANTI_*） |
| `PARAM_EFFECT_ANTI_SLOW` | 耐性（ANTI_*） |
| `PARAM_EFFECT_BLOWAGAINST` | 特殊 |
| `PARAM_EFFECT_COMPANION` | 特殊 |
| `PARAM_EFFECT_DEFDW` | 状態異常／デバフ |
| `PARAM_EFFECT_DEFUP` | バフ／強化 |
| `PARAM_EFFECT_DRAIN` | 特殊 |
| `PARAM_EFFECT_FEAR` | 状態異常／デバフ |
| `PARAM_EFFECT_HARDBODY` | 特殊 |
| `PARAM_EFFECT_HITDW` | 状態異常／デバフ |
| `PARAM_EFFECT_HITUP` | バフ／強化 |
| `PARAM_EFFECT_LVLDOWN` | 状態異常／デバフ |
| `PARAM_EFFECT_NOATTACK` | 状態異常／デバフ |
| `PARAM_EFFECT_PANIC` | 状態異常／デバフ |
| `PARAM_EFFECT_POISON` | 状態異常／デバフ |
| `PARAM_EFFECT_PROVOKE` | 特殊 |
| `PARAM_EFFECT_SHIELD` | 特殊 |
| `PARAM_EFFECT_SILENCE` | 状態異常／デバフ |
| `PARAM_EFFECT_SLEEP` | 状態異常／デバフ |
| `PARAM_EFFECT_SPDDW` | 状態異常／デバフ |
| `PARAM_EFFECT_SPDUP` | バフ／強化 |
| `PARAM_EFFECT_STRDW` | 状態異常／デバフ |
| `PARAM_EFFECT_STRUP` | バフ／強化 |
| `PARAM_EFFECT_STUN` | 状態異常／デバフ |
| `PARAM_EFFECT_WPNDW` | 状態異常／デバフ |
| `PARAM_EFFECT_WPNUP` | バフ／強化 |

### 属性（5＋矢パラメータ2）

| internal id | element |
|---|---|
| `PARAM_SAMP_DARK` | 闇 |
| `PARAM_SAMP_FIRE` | 火 |
| `PARAM_SAMP_HOLY` | 聖 |
| `PARAM_SAMP_ICE` | 氷 |
| `PARAM_SAMP_THUNDER` | 雷 |
| `PARAM_HOLY_ARROW` | 聖（矢） |
| `PARAM_THUNDER_ARROW` | 雷（矢） |

`SAMP` はおそらく「sample／属性（elemental attribute）」の意味 —— この5つの正規属性は武器（`*_F` `*_I` `*_T` のモンスターバリアント）、トラップ、魔法にも現れる。

### トラップ（`PARAM_TRAP_*` 63件）

#### ガス＆ブレス系（13）

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

#### 火柱（5）

| internal id |
|---|
| `PARAM_TRAP_FIRE01` |
| `PARAM_TRAP_FIRE02` |
| `PARAM_TRAP_FIRE03` |
| `PARAM_TRAP_FIRE04` |
| `PARAM_TRAP_FIRE05` |

#### 氷柱（5）

| internal id |
|---|
| `PARAM_TRAP_ICE01` |
| `PARAM_TRAP_ICE02` |
| `PARAM_TRAP_ICE03` |
| `PARAM_TRAP_ICE04` |
| `PARAM_TRAP_ICE05` |

#### 雷柱（5）

| internal id |
|---|
| `PARAM_TRAP_THUNDER01` |
| `PARAM_TRAP_THUNDER02` |
| `PARAM_TRAP_THUNDER03` |
| `PARAM_TRAP_THUNDER04` |
| `PARAM_TRAP_THUNDER05` |

#### 地雷＆泉（4）

| internal id |
|---|
| `PARAM_TRAP_MINE` |
| `PARAM_TRAP_MP_SPRING` |
| `PARAM_TRAP_SPRING` |
| `PARAM_TRAP_MOVE_BOMB` |

#### 矢＆飛び道具（14）

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

#### 機械式ギミック（17）

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

### スキルパラメータ（144、展開なし）

`PARAM_SK*` レコードは `BOOK2_SK*`／`SKILL_SK*` の番号空間を反映し、スキルごとの数値チューニングを保持する（未解読の `u32` フィールド — 生の CSV ダンプは FINDINGS.md を参照）。
