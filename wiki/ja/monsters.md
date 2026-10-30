[EN](../en/monsters.md) | [JA](../ja/monsters.md) | [PT-BR](../pt-br/monsters.md)

# モンスター

`monst` テーブルには **1508件** のレコードがあるが、1種族1行ではなく、各レコードはモンスターバリアントの*攻撃／部位／飛び道具* エントリである。動作サフィックスを取り除くと、6つの動的（`DY*`）系統と大型モンスター系統`DNO` に **168件の種族ベース** が残る。

### レコードIDの文法

`MONST_{FAMILY}_{SUBTYPE}{NN}[_{VARIANT}]_{ACTION}`

例: `MONST_DYH_AN01_1_SHIELD` = 系統 `DYH`・種族 `AN01`・バリアント `1`・部位 `SHIELD`。

### 系統一覧

| 系統 | レコード数 | 種族数 | サブタイプ | 読み方（推定） |
|---|---|---|---|---|
| `DYH` | 495 | 113 | AN, NO, WA, WI | 人型（兵士・魔術師・弓兵） |
| `DYF` | 174 | 24 | FI, NO, WA, WI | 飛行・妖魔系（WIウィスプ、FIフィーンド等） |
| `DYB` | 63 | 13 | NO, WA | 獣系（WAワイバーン型等） |
| `DYO` | 22 | 9 | PL, ST | 植物（PL）・石造（ST） |
| `DYS` | 12 | 6 | NO | 骨系・小型バリアント |
| `DNO` | 7 | 3 | NO | 大型モンスター／ドラゴン |

### 種族ベース（168件）

レコード数にはそのベースの全攻撃・部位行を含む — 1種族につき武器攻撃・ブレス・突進・バフ・飛び道具のエントリがぶら下がる構成。

| ベースid | 系統 | レコード数 | 部位例 |
|---|---|---|---|
| `DNO_NO06` | DNO | 2 | `POISON`, `BITE` |
| `DNO_NO07` | DNO | 2 | `POISON`, `BITE` |
| `DNO_NO09` | DNO | 3 | `DARK_NOVA`, `MAGICMISSILE`, `BITE` |
| `DYB_NO01` | DYB | 2 | `BITE`, `CHARGE` |
| `DYB_NO02` | DYB | 4 | `2_BREATH`, `BITE`, `BREATH`, `CHARGE` |
| `DYB_NO03` | DYB | 2 | `BITE`, `CHARGE` |
| `DYB_NO04` | DYB | 3 | `BITE`, `BREATH`, `CHARGE` |
| `DYB_NO05` | DYB | 4 | `BITE`, `BLAST`, `BREATH`, `CHARGE` |
| `DYB_NO06` | DYB | 3 | `STONE`, `PECK1`, `PECK2` |
| `DYB_WA01` | DYB | 9 | `FIREBALL`, `POISONBALL`, `BLAST`, `BREATH` |
| `DYB_WA02` | DYB | 9 | `THUNDER`, `THUNDER02`, `BLAST`, `BREATH` |
| `DYB_WA03` | DYB | 3 | `FIRE`, `BITE`, `CHARGE` |
| `DYB_WA05` | DYB | 10 | `FIREBALL`, `NAPALM`, `POISONBALL`, `BLAST` |
| `DYB_WA07` | DYB | 5 | `FIRE`, `BITE`, `BREATH`, `CHARGE` |
| `DYB_WA08` | DYB | 3 | `BREATH`, `CHARGE`, `SHOCKWAVE` |
| `DYB_WA10` | DYB | 6 | `THUNDER`, `THUNDER_AREA3`, `BLAST`, `BREATH` |
| `DYF_FI01` | DYF | 3 | `CLAW_L`, `CLAW_R`, `TAIL` |
| `DYF_FI02` | DYF | 3 | `CLAW_L`, `CLAW_R`, `TAIL` |
| `DYF_FI03` | DYF | 4 | `CLAW_L`, `CLAW_R`, `TAIL`, `TAILARROW` |
| `DYF_FI04` | DYF | 1 | `THREAD` |
| `DYF_FI05` | DYF | 1 | `STONE_SHIELD` |
| `DYF_NO01` | DYF | 4 | `BITE`, `BREATH`, `CLAW_L`, `CLAW_R` |
| `DYF_NO02` | DYF | 10 | `THUNDER`, `1_BITE`, `1_CLAW_L`, `1_CLAW_R` |
| `DYF_NO03` | DYF | 2 | `CHARGE`, `HEAD` |
| `DYF_NO04` | DYF | 2 | `CHARGE`, `HEAD` |
| `DYF_NO05` | DYF | 2 | `CHARGE`, `HEAD` |
| `DYF_NO06` | DYF | 4 | `BOW`, `FOOT`, `QUIV`, `SHOCKWAVE` |
| `DYF_NO07` | DYF | 4 | `AXE`, `FOOT`, `SHIELD`, `SHOCKWAVE` |
| `DYF_NO08` | DYF | 5 | `FOOT`, `SHIELD`, `SHOCKWAVE`, `STEAM` |
| `DYF_NO11` | DYF | 4 | `SHELL`, `BITE`, `BREATH`, `SHOCKWAVE` |
| `DYF_NO12` | DYF | 7 | `MISSILE`, `MISSILE_FAST`, `CHARGE`, `FOOTSTAMP` |
| `DYF_WA08` | DYF | 1 | `FIRE` |
| `DYF_WI01` | DYF | 12 | `BARRIER`, `FIREBALL`, `HEAL`, `THUNDER` |
| `DYF_WI02` | DYF | 15 | `FIREBALL`, `FIREBALL_02`, `ICE_TOWER02`, `TRAP_ICE` |
| `DYF_WI03` | DYF | 32 | `02_FIREBALL`, `02_GRAVITYFIELD`, `02_POISON`, `02_PRESSURECANNON` |
| `DYF_WI04` | DYF | 13 | `1_GRAVITYFIELD`, `BALL`, `FIRE`, `FIREWALL` |
| `DYF_WI05` | DYF | 12 | `ICE`, `ICE_SHIELD`, `ICE_TOWER02`, `TRAP_ICE` |
| `DYF_WI06` | DYF | 17 | `FIREWALL`, `GAS`, `NEEDLE`, `TRAP_NEEDLE` |
| `DYF_WI09` | DYF | 9 | `FIREBALL`, `FIREBALL_02`, `FIRE_VENOM`, `BREATH` |
| `DYF_WI10` | DYF | 6 | `FIRE`, `HAND_L`, `HAND_R`, `SHOCKWAVE` |
| `DYH_AN01` | DYH | 7 | `1_SHIELD`, `1_SWORD`, `1_TAIL`, `BITE` |
| `DYH_AN02` | DYH | 6 | `1_BOW`, `1_POISONQUIV`, `1_QUIV`, `BOW` |
| `DYH_AN03` | DYH | 2 | `1_SPEAR`, `SPEAR` |
| `DYH_AN04` | DYH | 6 | `1_SHIELD`, `1_SWORD`, `2_SHIELD`, `2_SWORD` |
| `DYH_AN05` | DYH | 4 | `STRUP`, `1_SPEAR`, `2_SPEAR`, `SPEAR` |
| `DYH_AN06` | DYH | 1 | `MACE` |
| `DYH_AN07` | DYH | 2 | `BOW`, `QUIV` |
| `DYH_AN08` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_AN09` | DYH | 1 | `AXE` |
| `DYH_AN10` | DYH | 1 | `SPEAR` |
| `DYH_AN11` | DYH | 2 | `BREATH`, `SPEAR` |
| `DYH_AN12` | DYH | 2 | `BREATH`, `SPEAR` |
| `DYH_AN13` | DYH | 2 | `BREATH`, `SPEAR` |
| `DYH_AN14` | DYH | 4 | `BOMB`, `CHARGE`, `CLAW_L`, `CLAW_R` |
| `DYH_AN15` | DYH | 5 | `1_AXE`, `1_CHARGE`, `1_SHOCKWAVE`, `AXE` |
| `DYH_AN16` | DYH | 8 | `1_AXE`, `1_CHARGE`, `1_HAND_L`, `1_HAND_R` |
| `DYH_AN17` | DYH | 8 | `1_AXE`, `1_CHARGE`, `1_HAND_L`, `1_HAND_R` |
| `DYH_AN18` | DYH | 6 | `QUAKE`, `THROW`, `1_AXE`, `1_CHARGE` |
| `DYH_NO01` | DYH | 4 | `AXE`, `AXE_F`, `AXE_I`, `AXE_T` |
| `DYH_NO02` | DYH | 8 | `SHIELD`, `SHIELD_F`, `SHIELD_I`, `SHIELD_T` |
| `DYH_NO03` | DYH | 10 | `FIRE`, `FIRE_AREA`, `ICE`, `ICE_AREA` |
| `DYH_NO04` | DYH | 12 | `BOW`, `BOW_F`, `BOW_I`, `BOW_T` |
| `DYH_NO05` | DYH | 4 | `SWORD`, `SWORD_F`, `SWORD_I`, `SWORD_T` |
| `DYH_NO06` | DYH | 2 | `CLAW_L`, `CLAW_R` |
| `DYH_NO07` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO08` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO09` | DYH | 3 | `BITE`, `CLAW_L`, `CLAW_R` |
| `DYH_NO10` | DYH | 1 | `SWORD` |
| `DYH_NO11` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO12` | DYH | 5 | `FIRE`, `ICE`, `SILENT`, `THUNDER` |
| `DYH_NO13` | DYH | 5 | `FIRE`, `ICE`, `SILENT`, `THUNDER` |
| `DYH_NO14` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO15` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO16` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO17` | DYH | 1 | `SWORD` |
| `DYH_NO18` | DYH | 3 | `BOW`, `POISONQUIV`, `QUIV` |
| `DYH_NO19` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO21` | DYH | 1 | `MACE` |
| `DYH_NO22` | DYH | 1 | `SWORD` |
| `DYH_NO23` | DYH | 8 | `AXE`, `AXE_F`, `AXE_I`, `AXE_T` |
| `DYH_NO24` | DYH | 10 | `FIRE`, `FIRE_AREA`, `ICE`, `ICE_AREA` |
| `DYH_NO25` | DYH | 4 | `AXE`, `AXE_F`, `AXE_I`, `AXE_T` |
| `DYH_NO26` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO27` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO28` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO29` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO30` | DYH | 2 | `BEAT1`, `BEAT2` |
| `DYH_NO31` | DYH | 2 | `BEAT1`, `BEAT2` |
| `DYH_NO32` | DYH | 2 | `BEAT1`, `BEAT2` |
| `DYH_NO33` | DYH | 2 | `BEAT1`, `BEAT2` |
| `DYH_NO34` | DYH | 2 | `BEAT1`, `BEAT2` |
| `DYH_NO35` | DYH | 3 | `SHIELD`, `SHIELDBASH`, `SWORD` |
| `DYH_NO36` | DYH | 4 | `THUNDER_AREA`, `AXE`, `SHIELD`, `SHIELDBASH` |
| `DYH_NO37` | DYH | 3 | `SHIELD`, `SHIELDBASH`, `SWORD` |
| `DYH_NO38` | DYH | 9 | `FIRE`, `HOLY`, `ICE`, `PANIC` |
| `DYH_NO39` | DYH | 3 | `HEALNOVA`, `HOLYVENOM`, `STAFF` |
| `DYH_NO40` | DYH | 4 | `FIREVENOM`, `HEAL`, `VENOM`, `STAFF` |
| `DYH_NO41` | DYH | 4 | `1_ARROW`, `1_SWORD`, `ARROW`, `SWORD` |
| `DYH_NO42` | DYH | 2 | `1_SWORD`, `SWORD` |
| `DYH_NO43` | DYH | 2 | `BOMB`, `SWORD` |
| `DYH_NO45` | DYH | 4 | `1_CLUB`, `1_THROW`, `CLUB`, `THROW` |
| `DYH_NO46` | DYH | 3 | `CLUB`, `SHOCKWAVE`, `THROW` |
| `DYH_NO47` | DYH | 3 | `CLUB`, `SHOCKWAVE`, `THROW` |
| `DYH_NO49` | DYH | 17 | `1_BALL`, `BALL`, `FIRE`, `FIREWALL` |
| `DYH_NO50` | DYH | 2 | `AXE`, `CHARGE` |
| `DYH_NO51` | DYH | 3 | `CHARGE`, `SHIELD`, `SWORD` |
| `DYH_NO52` | DYH | 4 | `CHARGE`, `PRESS`, `SHIELD`, `SWORD` |
| `DYH_NO53` | DYH | 7 | `FIRE`, `SYUIRIKEN`, `THUNDER01`, `THUNDER02` |
| `DYH_NO54` | DYH | 18 | `FIRE`, `FIRE01`, `FIRE02`, `FIREWAVE` |
| `DYH_NO55` | DYH | 7 | `REFLECTBALL`, `THUNDER01`, `THUNDER02`, `VENOM` |
| `DYH_NO57` | DYH | 2 | `HOLYVENOM`, `STAFF` |
| `DYH_NO58` | DYH | 2 | `BOMB`, `SWORD` |
| `DYH_NO59` | DYH | 1 | `STAFF` |
| `DYH_NO60` | DYH | 1 | `KICK` |
| `DYH_NO61` | DYH | 2 | `SHIELD`, `SWORD` |
| `DYH_NO62` | DYH | 1 | `SWORD` |
| `DYH_NO63` | DYH | 3 | `CLUB`, `SHOCKWAVE`, `THROW` |
| `DYH_NO64` | DYH | 3 | `BOW`, `POISONQUIV`, `QUIV` |
| `DYH_NO65` | DYH | 13 | `3WAYTHUNDER`, `FIRE`, `FIRE02`, `FIREWALL` |
| `DYH_NO66` | DYH | 19 | `3WAYTHUNDER`, `FIRE`, `FIRE02`, `FIREWALL` |
| `DYH_NO67` | DYH | 2 | `STONE`, `SMASH` |
| `DYH_NO68` | DYH | 3 | `BEAT`, `CHARGE`, `SHOCKWAVE` |
| `DYH_NO69` | DYH | 3 | `SWORD`, `SWORD_1`, `THROW_AXE` |
| `DYH_NO70` | DYH | 4 | `MAGICMISSILE`, `HOLD`, `SWORD`, `SWORD_1` |
| `DYH_NO71` | DYH | 6 | `REFLECTBALL`, `THUNDER01`, `THUNDER02`, `VENOM` |
| `DYH_NO72` | DYH | 7 | `FIRE`, `ICE`, `PANIC`, `POISON` |
| `DYH_NO74` | DYH | 1 | `SWORD` |
| `DYH_NO76` | DYH | 6 | `BLIND`, `POISON`, `SHOTGUN`, `THUNDER` |
| `DYH_NO77` | DYH | 3 | `STONE`, `BREATH`, `SWORD` |
| `DYH_NO78` | DYH | 2 | `WAVE`, `AXE` |
| `DYH_NO79` | DYH | 3 | `TAIL`, `WAVE`, `SPEAR` |
| `DYH_NO80` | DYH | 8 | `POISON`, `BREATH`, `CLAW`, `CLAW_L` |
| `DYH_NO81` | DYH | 16 | `BOMB`, `BOMB2`, `BOMB_MAGIC`, `BOMB_MAGIC2` |
| `DYH_NO82` | DYH | 4 | `CHAIN`, `HOOKATTACK`, `SHOCKWAVE01`, `SHOCKWAVE02` |
| `DYH_NO83` | DYH | 4 | `BOMB`, `BEAT`, `SLIDING`, `SWORD` |
| `DYH_NO84` | DYH | 4 | `GUN`, `BEAT`, `SWORD`, `SWORD_1` |
| `DYH_NO85` | DYH | 2 | `BEAT1`, `BEAT2` |
| `DYH_NO86` | DYH | 4 | `WATER`, `BITE`, `SWORD`, `TAIL` |
| `DYH_NO87` | DYH | 3 | `SOUND`, `BREATH`, `TRUMPET` |
| `DYH_NO88` | DYH | 2 | `CHARGE01`, `CHARGE02` |
| `DYH_WA09` | DYH | 2 | `BLAST`, `SMASH` |
| `DYH_WI01` | DYH | 6 | `FIRE`, `ICE`, `SILENT`, `THUNDER` |
| `DYH_WI02` | DYH | 3 | `CHARGE`, `CLAW_L`, `CLAW_R` |
| `DYH_WI03` | DYH | 21 | `ANOTHERDIMENSION`, `BERSERKER`, `FIRE`, `FIRE_VENOM` |
| `DYH_WI04` | DYH | 3 | `CHARGE`, `CLAW_L`, `CLAW_R` |
| `DYH_WI06` | DYH | 4 | `BITE`, `CHARGE`, `CLAW_TE`, `CLAW_TOE` |
| `DYH_WI07` | DYH | 3 | `BITE`, `CLAW_TE`, `CLAW_TOE` |
| `DYH_WI08` | DYH | 3 | `BITE`, `CLAW_TE`, `CLAW_TOE` |
| `DYH_WI09` | DYH | 1 | `PANIC` |
| `DYH_WI10` | DYH | 3 | `THUNDER`, `THUNDER_AREA`, `SMASH` |
| `DYH_WI11` | DYH | 4 | `CONDITION_CANCEL`, `MAGICMISSILE`, `SKILL_CANCEL`, `SMASH` |
| `DYH_WI13` | DYH | 2 | `WAVE`, `SWORD` |
| `DYH_WI14` | DYH | 21 | `BALL`, `BARRIER`, `CURSE`, `FANNEL` |
| `DYO_PL01` | DYO | 2 | `IVY`, `HAND` |
| `DYO_PL02` | DYO | 2 | `IVY`, `HAND` |
| `DYO_PL03` | DYO | 2 | `IVY`, `HAND` |
| `DYO_ST01` | DYO | 2 | `POISON`, `CHARGE` |
| `DYO_ST02` | DYO | 2 | `POISON`, `CHARGE` |
| `DYO_ST03` | DYO | 2 | `POISON`, `CHARGE` |
| `DYO_ST04` | DYO | 2 | `MAGICMISSILE`, `SHOCKWAVE` |
| `DYO_ST05` | DYO | 4 | `GRASP`, `SHOCKWAVE`, `SMASH`, `STRIKE` |
| `DYO_ST06` | DYO | 4 | `GRASP`, `SHOCKWAVE`, `SMASH`, `STRIKE` |
| `DYS_NO01` | DYS | 2 | `BITE`, `CHARGE` |
| `DYS_NO02` | DYS | 2 | `BITE`, `CHARGE` |
| `DYS_NO03` | DYS | 2 | `BITE`, `CHARGE` |
| `DYS_NO04` | DYS | 2 | `BITE`, `CHARGE` |
| `DYS_NO05` | DYS | 2 | `BITE`, `CHARGE` |
| `DYS_NO06` | DYS | 2 | `BITE`, `CHARGE` |

### 種族以外のレコード

| グループ | 件数 | 意味 | id |
|---|---|---|---|
| `ALL` | 2 | 全員メガクラッシュ用プロキシ | `MONST_ALL_MEGACRUSH_M`, `MONST_ALL_MEGACRUSH_W` |
| `CANNON` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_CANNON_SHELL` |
| `DYF` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_DYF_DYH_NO38_PRESSURECANNON` |
| `KA10` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_KA10_HAND_THROW` |
| `KA17` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_KA17_ROBBER_THROW` |
| `KA24` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_KA24_MUGGER_THROW` |
| `KA33` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_KA33_THROW` |
| `KS08` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_KS08_THROW` |
| `KS12` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_KS12_THROW` |
| `KS19` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_KS19_THROW` |
| `KS29` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_KS29_BEAM` |
| `LINKED` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_LINKED_PRIEST_MEGACRUSH` |
| `MAGICMISSILE` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_MAGICMISSILE` |
| `MONKMISSILE` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_MONKMISSILE` |
| `MONSTER` | 9 | 属性スポナー/状態異常ハザード | `MONST_MONSTER_FIRE`, `MONST_MONSTER_ICE`, `MONST_MONSTER_PANIC`, `MONST_MONSTER_POISON`, `MONST_MONSTER_SILENT`, `MONST_MONSTER_SLEEP`, … |
| `NC14` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NC14_KAISER_BEAM` |
| `NECROMISSILE` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NECROMISSILE` |
| `NECROPLOSION` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NECROPLOSION` |
| `NI01` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI01_DAGGER_THROW` |
| `NI02` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI02_DIRK_THROW` |
| `NI03` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI03_POISONDAGGER_THROW` |
| `NI04` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI04_SWORDBRAKER_THROW` |
| `NI05` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI05_KOTETSU_THROW` |
| `NI06` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI06_GALESDAGGER_THROW` |
| `NI07` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI07_DIRK_THROW` |
| `NI08` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI08_ROUND_THROW` |
| `NI09` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI09_STUNDAGGER_THROW` |
| `NI10` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI10_GOBLIN_C_THROW` |
| `NI11` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI11_THIEF_THROW` |
| `NI12` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI12_ASSASSIN_THROW` |
| `NI13` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI13_KERIS_THROW` |
| `NI14` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI14_TAMECHAN2_THROW` |
| `NI15` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI15_BURGLAR_THROW` |
| `NI16` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI16_CROSS_THROW` |
| `NI17` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI17_SHINKI_THROW` |
| `NI18` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI18_POISONDAGGER_THROW` |
| `NI19` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI19_ROUND_THROW` |
| `NI20` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI20_SHINKI_THROW` |
| `NI21` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI21_SHINKI_THROW` |
| `NI22` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI22_SHINKI_THROW` |
| `NI23` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI23_SHINKI_THROW` |
| `NI24` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI24_SHINKI_THROW` |
| `NI25` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI25_SHINKI_THROW` |
| `NI26` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI26_SHINKI_THROW` |
| `NI27` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI27_SHINKI_THROW` |
| `NI28` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI28_SHINKI_THROW` |
| `NI29` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI29_SHINKI_THROW` |
| `NI30` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI30_SHINKI_THROW` |
| `NI31` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI31_SHINKI_THROW` |
| `NI32` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI32_SHINKI_THROW` |
| `NI33` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI33_SHINKI_THROW` |
| `NI34` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI34_SHINKI_THROW` |
| `NI35` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_NI35_SHINKI_THROW` |
| `OPTION` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_OPTION` |
| `PLAYER` | 13 | プレイヤー判定・肉弾パーツ | `MONST_PLAYER_POISON_EN`, `MONST_PLAYER_AURA_ARROW`, `MONST_PLAYER_BLAST`, `MONST_PLAYER_BLASTARROW`, `MONST_PLAYER_CHARGE`, `MONST_PLAYER_DAMAGE_HEAT_BODY`, … |
| `POWER` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_POWER_BEAM` |
| `PRIEST` | 2 | スキル飛び道具・投擲武器・その他 | `MONST_PRIEST_COMB07`, `MONST_PRIEST_MEGACRUSH` |
| `QUE` | 7 | クエストNPC（ドワーフ/エルフ/人間の仲間） | `MONST_QUE_ELF_FIRE`, `MONST_QUE_ELF_THUNDER`, `MONST_QUE_HUMAN_HEAL`, `MONST_QUE_DWARF_M_DWARVENWARAXE`, `MONST_QUE_ELF_F_MAGICALSTAFF`, `MONST_QUE_HUMAN_M_ROUND`, … |
| `RANGERMISSILE` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_RANGERMISSILE` |
| `RS09` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_RS09_FIREWAVE` |
| `RS16` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_RS16_POWERUP` |
| `SHIEF` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_SHIEF_COMB23` |
| `SK267` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_SK267_ARROW` |
| `SK285` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_SK285_WAVE` |
| `SP02` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_SP02_AWLPIKE_THROW` |
| `SP23` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_SP23_NEEDLE` |
| `ST04` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_ST04_HEALROD_HEALNOVA` |
| `ST11` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_ST11_WIZARD_EX1_THROW` |
| `ST12` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_ST12_WIZARD_EX2_THROW` |
| `ST13` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_ST13_WIZARD_EX3_THROW` |
| `ST35` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_ST35_WIZARD_EX1_THROW` |
| `ST36` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_ST36_WIZARD_EX2_THROW` |
| `ST37` | 1 | スキル飛び道具・投擲武器・その他 | `MONST_ST37_WIZARD_EX3_THROW` |
| `THIEF` | 2 | スキル飛び道具・投擲武器・その他 | `MONST_THIEF_COMB19`, `MONST_THIEF_MEGACRUSH` |
| `WIZARD` | 2 | スキル飛び道具・投擲武器・その他 | `MONST_WIZARD_COMB04`, `MONST_WIZARD_MEGACRUSH` |
| `ACCESS` | 209 | 召喚獣用アクセサリモデル | `MONST_ACCESS_DNO_NO01`, `MONST_ACCESS_DNO_NO02`, `MONST_ACCESS_DNO_NO03`, `MONST_ACCESS_DNO_NO04`, `MONST_ACCESS_DNO_NO05`, `MONST_ACCESS_DNO_NO06`, … |
| `ARMOR` | 212 | 召喚獣用鎧モデル | `MONST_ARMOR_DNO_NO01`, `MONST_ARMOR_DNO_NO02`, `MONST_ARMOR_DNO_NO03`, `MONST_ARMOR_DNO_NO04`, `MONST_ARMOR_DNO_NO05`, `MONST_ARMOR_DNO_NO06`, … |
| `BOOTS` | 5 | 召喚獣用ブーツモデル | `MONST_BOOTS_DYF_WI02_YELLOWDOWN_1`, `MONST_BOOTS_DYF_WI02_YELLOWDOWN_2`, `MONST_BOOTS_DYF_WI02_YELLOWDOWN_3`, `MONST_BOOTS_DYF_WI02_YELLOWDOWN_4`, `MONST_BOOTS_DYF_WI02_YELLOWDOWN_5` |
| `HELM` | 16 | 召喚獣用兜モデル | `MONST_HELM_DYF_WI02_BLUEDOWN_1`, `MONST_HELM_DYF_WI02_BLUEDOWN_2`, `MONST_HELM_DYF_WI02_BLUEDOWN_3`, `MONST_HELM_DYF_WI02_BLUEDOWN_4`, `MONST_HELM_DYF_WI02_BLUEDOWN_5`, `MONST_HELM_DYF_WI02_BLUEUP`, … |
| `SUMMON` | 189 | 召喚カードバリアント | `MONST_SUMMON_ACCESS_DYB_NO01`, `MONST_SUMMON_ACCESS_DYB_NO02`, `MONST_SUMMON_ACCESS_DYB_NO03`, `MONST_SUMMON_ACCESS_DYB_NO04`, `MONST_SUMMON_ACCESS_DYB_NO05`, `MONST_SUMMON_ACCESS_DYB_NO06`, … |

### ボス

ボスアリーナは `media/light/bossNN/` 配下のボス別ライティングフォルダで特定できる。boss00–boss29 が存在し、boss00/boss01 は下表の共通ロスターを持つ。各ボスは属性パレット違い（同モデル・照明差し替え）で出る。

| ボスアリーナ | ロスター |
|---|---|
| `boss00` | Balor, BlackDragon, BlackKnight, Efreet, Ethnea, Folgal1, Folgal2, GoldDragon, GoldKnight, RedDragon, WhiteDragon, Wyvern |
| `boss01` | Balor, BlackDragon, BlackKnight, DragonZombie, Efreet, Ethnea, FakeBalor, Folgal1, Folgal2, GoldDragon, GoldKnight, RedDragon, WhiteDragon, Wyvern |

### ボス名一覧

`Balor` · `FakeBalor` · `BlackDragon` · `BlackKnight` · `DragonZombie` · `Efreet` · `Ethnea` · `Folgal1` · `Folgal2` · `GoldDragon` · `GoldKnight` · `RedDragon` · `WhiteDragon` · `Wyvern`

### 召喚モンスター

`summon` テーブルには `SUMMON_MN{nnn}_{FAMILY}_{SPECIES}` 形式の **召喚可能モンスター168件** と特殊レコード `SUMMON_MN205_SELF`・`SUMMON_MN307_PRIVATE` がある。召喚はカード型アイテム経由（[カード](cards.md)参照）。`MONST_SUMMON_*`（189件）は装備可能ビジュアルのバリアントで、`MONST_ACCESS/ARMOR/HELM/BOOTS_*` は「召喚獣専用装備品」に対応する。

`SUMMON_MN001_DYH_NO01`, `SUMMON_MN002_DYH_NO02`, `SUMMON_MN003_DYH_NO03`, `SUMMON_MN004_DYH_NO04`, `SUMMON_MN005_DYH_NO05`, `SUMMON_MN006_DYH_NO06`, `SUMMON_MN009_DYH_NO09`, `SUMMON_MN012_DYH_NO12`, …

**jp列について:** モンスターレコードは定数フレーズ（`力を貸しな` — このテーブルの文字列結合は未解読）に解決されるため、ここでは省略する。
