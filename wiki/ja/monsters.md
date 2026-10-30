[EN](../en/monsters.md) | [JA](../ja/monsters.md) | [PT-BR](../pt-br/monsters.md)

# モンスター

> Source: `project_d.xbe` .data table @ `0x607b24`–`0x65d124` (+5 stray records to `0x8e91ec`); `summon` @ `0x65d7a4`–`0x662b24` — reverse engineered

> **Quest of D 4.0 — The Battle Kingdom**（Sega Chihiro、`CDV-10035B`）の抽出データ。レコードは128バイトの `.data` 行で、フィールド0はここに示す大文字内部 ID を指す。日本語文字列は `text.bin`（5322エントリの SJIS テーブル）由来。名前解決の方法はセクションごとに記し、未解決フィールドは推測せず空欄のままにする。

`monst` テーブルには **1508件** のレコードがあるが、種族リストではない。各レコードは
**攻撃／部位／飛び道具／装備アタッチメント** のエントリである。
`MONST_{FAMILY}_{CODE}[_{N}]_{ACTION}` は持ち主のクリーチャーモデルと
アクションソケットを示す —— 例：`MONST_DYH_NO03_FIRE` はモデル `DYH_NO03` の FIRE アクション。

- **772件** はクリーチャーモデルコード（`DY*`/`DNO_`）を持ち、6系統で
  **168種の異なるモデルコード** をカバーする。
- **736件** は非クリーチャーエントリ：召喚装備ビジュアル、プレイヤー及び
  汎用の属性攻撃オブジェクト、NPC ヘルパー、スキル飛び道具、
  投擲武器代理など。
- `MONST_ALL_MEGACRUSH_M` / `MONST_ALL_MEGACRUSH_W` は **全体効果の疑似レコード**
  （パーティメガクラッシュ代理）であり、モンスターではない。

### 系統

| 系統 | モデルコード数 | レコード数 | 観測される内訳 |
|---|---|---|---|
| `DYH` | 113 | 495 | 人型・混合（アンデッド、ゴブリン、オーク、獣人、ゴーレム、魔術師、巨人） |
| `DYF` | 24 | 173 | 獣・妖魔・ドラゴン（狼、蠍、ドラゴン、ヴァンパイア、トロル） |
| `DYB` | 13 | 63 | 蝙蝠・鳥・戦闘機械（WA ワイバーン／蒸気機関系を含む） |
| `DYO` | 9 | 22 | 植物（PL）＆石造・構造生物（ST） |
| `DYS` | 6 | 12 | 蛇 |
| `DNO` | 3 | 7 | 異界・大型モンスター（ウィスプ、デーモン、固有ボス） |
種族の日本語名は `text.bin` 内の **召喚カード文字列ペア**
（`〈name〉` + `〈name〉を召喚するためのカード`、テキストエントリ
約3036–3352）を `summon` テーブルの順序に合わせて解決する。モデルコードが
複数の召喚バリアント（属性 Ｆ/Ｉ/Ｔ 形態、`・改` 形態、ペア固有ボス）に
再利用される場合は **最初の**（基本）名を表示し、曖昧さを注記する。
召喚カードのないコードは空欄のまま —— それらのクリーチャーは
カード召喚できない（ほとんどがボスや大型モンスター）。

### 種族名簿（168モデルコード）

| モデルコード | レコード数 | jp（召喚由来） | 攻撃・部位アクション |
|---|---|---|---|
| `DYH_AN01` | 7 | リザードマン *¹ | `BITE`, `SHIELD`, `SWORD`, `TAIL` |
| `DYH_AN02` | 6 | リザードマンレンジャー *¹ | `BOW`, `POISONQUIV`, `QUIV` |
| `DYH_AN03` | 2 | リザードマンランサー *¹ | `SPEAR` |
| `DYH_AN04` | 6 | Ｇリザードマン *¹ | `SHIELD`, `SWORD` |
| `DYH_AN05` | 4 | ロイヤルリザードマン *¹ | `SPEAR`, `STRUP` |
| `DYH_AN06` | 1 | コボルド | `MACE` |
| `DYH_AN07` | 2 | コボルドシューター | `BOW`, `QUIV` |
| `DYH_AN08` | 2 | コボルドウォリアー | `SHIELD`, `SWORD` |
| `DYH_AN09` | 1 | ノール | `AXE` |
| `DYH_AN10` | 1 | コボルドリーダー | `SPEAR` |
| `DYH_AN11` | 2 | サラマンダー | `BREATH`, `SPEAR` |
| `DYH_AN12` | 2 | フロストサラマンダー | `BREATH`, `SPEAR` |
| `DYH_AN13` | 2 | ハイサラマンダー | `BREATH`, `SPEAR` |
| `DYH_AN14` | 4 | ガーゴイル | `BOMB`, `CHARGE`, `CLAW_L`, `CLAW_R` |
| `DYH_AN15` | 5 | ミノタウロスバトラー | `AXE`, `CHARGE`, `SHOCKWAVE` |
| `DYH_AN16` | 8 | ミノタウロス | `AXE`, `CHARGE`, `HAND_L`, `HAND_R` |
| `DYH_AN17` | 8 | ミノタウロスＳ | `AXE`, `CHARGE`, `HAND_L`, `HAND_R` |
| `DYH_AN18` | 6 | ミノタウロスコマンダー | `AXE`, `CHARGE`, `QUAKE`, `THROW` |
| `DYH_NO01` | 4 | ドワーブンスケルトン *¹ | `AXE`, `AXE_F`, `AXE_I`, `AXE_T` |
| `DYH_NO02` | 8 | スケルトン *¹ | `SHIELD`, `SHIELD_F`, `SHIELD_I`, `SHIELD_T`, … |
| `DYH_NO03` | 10 | スケルトンメイジ *¹ | `FIRE`, `FIRE_AREA`, `ICE`, `ICE_AREA`, … |
| `DYH_NO04` | 12 | スケルトンアーチャー *¹ | `BOW`, `BOW_F`, `BOW_I`, `BOW_T`, … |
| `DYH_NO05` | 4 | スケルトンナイト *¹ | `SWORD`, `SWORD_F`, `SWORD_I`, `SWORD_T` |
| `DYH_NO06` | 2 | ゾンビ | `CLAW_L`, `CLAW_R` |
| `DYH_NO07` | 2 |  | `SHIELD`, `SWORD` |
| `DYH_NO08` | 2 |  | `SHIELD`, `SWORD` |
| `DYH_NO09` | 3 | グール | `BITE`, `CLAW_L`, `CLAW_R` |
| `DYH_NO10` | 1 |  | `SWORD` |
| `DYH_NO11` | 2 |  | `SHIELD`, `SWORD` |
| `DYH_NO12` | 5 | ゴースト | `BITE`, `FIRE`, `ICE`, `SILENT`, … |
| `DYH_NO13` | 5 | ファントム | `BITE`, `FIRE`, `ICE`, `SILENT`, … |
| `DYH_NO14` | 2 | ガスクラウド | `SHIELD`, `SWORD` |
| `DYH_NO15` | 2 | サルファークラウド | `SHIELD`, `SWORD` |
| `DYH_NO16` | 2 | ポイズンクラウド | `SHIELD`, `SWORD` |
| `DYH_NO17` | 1 | ゴブリンコック | `SWORD` |
| `DYH_NO18` | 3 | ゴブリンアーチャー | `BOW`, `POISONQUIV`, `QUIV` |
| `DYH_NO19` | 2 | ゴブリンファイター | `SHIELD`, `SWORD` |
| `DYH_NO21` | 1 | ホブゴブリン | `MACE` |
| `DYH_NO22` | 1 | ゴブリンロード | `SWORD` |
| `DYH_NO23` | 8 | オーク *¹ | `AXE`, `AXE_F`, `AXE_I`, `AXE_T`, … |
| `DYH_NO24` | 10 | オークメイジ *¹ | `FIRE`, `FIRE_AREA`, `ICE`, `ICE_AREA`, … |
| `DYH_NO25` | 4 | オークチーフ *¹ | `AXE`, `AXE_F`, `AXE_I`, `AXE_T` |
| `DYH_NO26` | 2 |  | `SHIELD`, `SWORD` |
| `DYH_NO27` | 2 |  | `SHIELD`, `SWORD` |
| `DYH_NO28` | 2 |  | `SHIELD`, `SWORD` |
| `DYH_NO29` | 2 |  | `SHIELD`, `SWORD` |
| `DYH_NO30` | 2 | ストーンゴーレム | `BEAT1`, `BEAT2` |
| `DYH_NO31` | 2 | アイアンゴーレム | `BEAT1`, `BEAT2` |
| `DYH_NO32` | 2 | アイスゴーレム | `BEAT1`, `BEAT2` |
| `DYH_NO33` | 2 | ファイアーゴーレム | `BEAT1`, `BEAT2` |
| `DYH_NO34` | 2 | ミミック | `BEAT1`, `BEAT2` |
| `DYH_NO35` | 3 | スチームナイトゴールド | `SHIELD`, `SHIELDBASH`, `SWORD` |
| `DYH_NO36` | 4 | スチームナイトダーク | `AXE`, `SHIELD`, `SHIELDBASH`, `THUNDER_AREA` |
| `DYH_NO37` | 3 | マジシャン | `SHIELD`, `SHIELDBASH`, `SWORD` |
| `DYH_NO38` | 9 | ダークマジシャン | `FIRE`, `HOLY`, `ICE`, `PANIC`, … |
| `DYH_NO39` | 3 | ネクロマンサー | `HEALNOVA`, `HOLYVENOM`, `STAFF` |
| `DYH_NO40` | 4 | ワイルドブル | `FIREVENOM`, `HEAL`, `STAFF`, `VENOM` |
| `DYH_NO41` | 4 | ロバー | `ARROW`, `SWORD` |
| `DYH_NO42` | 2 | アサシン | `SWORD` |
| `DYH_NO43` | 2 | トレント | `BOMB`, `SWORD` |
| `DYH_NO45` | 4 | ストーンジャイアント *¹ | `CLUB`, `THROW` |
| `DYH_NO46` | 3 | ファイアージャイアント | `CLUB`, `SHOCKWAVE`, `THROW` |
| `DYH_NO47` | 3 | ゴールドドラゴン | `CLUB`, `SHOCKWAVE`, `THROW` |
| `DYH_NO49` | 17 | ワイバーン | `BALL`, `CHARGE`, `FIRE`, `FIREWALL`, … |
| `DYH_NO50` | 2 | アーマートードキング | `AXE`, `CHARGE` |
| `DYH_NO51` | 3 | サキュバス | `CHARGE`, `SHIELD`, `SWORD` |
| `DYH_NO52` | 4 | スケルトンＦ | `CHARGE`, `PRESS`, `SHIELD`, `SWORD` |
| `DYH_NO53` | 7 |  | `FIRE`, `SHOCKWAVE`, `SWORD`, `SYUIRIKEN`, … |
| `DYH_NO54` | 18 |  | `FIRE`, `FIRE01`, `FIRE02`, `FIREWAVE`, … |
| `DYH_NO55` | 7 |  | `REFLECTBALL`, `SHOCKWAVE`, `SHOCKWAVE02`, `SWORD`, … |
| `DYH_NO57` | 2 |  | `HOLYVENOM`, `STAFF` |
| `DYH_NO58` | 2 |  | `BOMB`, `SWORD` |
| `DYH_NO59` | 1 |  | `STAFF` |
| `DYH_NO60` | 1 | ディアボルガ *¹ | `KICK` |
| `DYH_NO61` | 2 | デュラハン *¹ | `SHIELD`, `SWORD` |
| `DYH_NO62` | 1 | ラミア *¹ | `SWORD` |
| `DYH_NO63` | 3 |  | `CLUB`, `SHOCKWAVE`, `THROW` |
| `DYH_NO64` | 3 |  | `BOW`, `POISONQUIV`, `QUIV` |
| `DYH_NO65` | 13 |  | `3WAYTHUNDER`, `FIRE`, `FIRE02`, `FIREWALL`, … |
| `DYH_NO66` | 19 |  | `3WAYTHUNDER`, `BLAST`, `FIRE`, `FIRE02`, … |
| `DYH_NO67` | 2 |  | `SMASH`, `STONE` |
| `DYH_NO68` | 3 |  | `BEAT`, `CHARGE`, `SHOCKWAVE` |
| `DYH_NO69` | 3 |  | `SWORD`, `SWORD_1`, `THROW_AXE` |
| `DYH_NO70` | 4 |  | `HOLD`, `MAGICMISSILE`, `SWORD`, `SWORD_1` |
| `DYH_NO71` | 6 |  | `REFLECTBALL`, `SHOCKWAVE`, `SWORD`, `THUNDER01`, … |
| `DYH_NO72` | 7 |  | `FIRE`, `ICE`, `PANIC`, `POISON`, … |
| `DYH_NO74` | 1 |  | `SWORD` |
| `DYH_NO76` | 6 | セラフィー・ルカ | `BLIND`, `POISON`, `SHOTGUN`, `STAFF`, … |
| `DYH_NO77` | 3 | 鉄の竜 | `BREATH`, `STONE`, `SWORD` |
| `DYH_NO78` | 2 |  | `AXE`, `WAVE` |
| `DYH_NO79` | 3 |  | `SPEAR`, `TAIL`, `WAVE` |
| `DYH_NO80` | 8 |  | `BREATH`, `CLAW`, `CLAW_L`, `CLAW_L_SMN`, … |
| `DYH_NO81` | 16 |  | `BLAST`, `BLAST_ICE`, `BOMB`, `BOMB2`, … |
| `DYH_NO82` | 4 |  | `CHAIN`, `HOOKATTACK`, `SHOCKWAVE01`, `SHOCKWAVE02` |
| `DYH_NO83` | 4 |  | `BEAT`, `BOMB`, `SLIDING`, `SWORD` |
| `DYH_NO84` | 4 |  | `BEAT`, `GUN`, `SWORD`, `SWORD_1` |
| `DYH_NO85` | 2 |  | `BEAT1`, `BEAT2` |
| `DYH_NO86` | 4 |  | `BITE`, `SWORD`, `TAIL`, `WATER` |
| `DYH_NO87` | 3 |  | `BREATH`, `SOUND`, `TRUMPET` |
| `DYH_NO88` | 2 |  | `CHARGE01`, `CHARGE02` |
| `DYH_WA09` | 2 |  | `BLAST`, `SMASH` |
| `DYH_WI01` | 6 | デーモン | `CHARGE`, `CLAW_L`, `FIRE`, `ICE`, … |
| `DYH_WI02` | 3 | グレーターデーモン | `CHARGE`, `CLAW_L`, `CLAW_R` |
| `DYH_WI03` | 21 | インプ | `ANOTHERDIMENSION`, `BERSERKER`, `CHARGE`, `CLAW_L`, … |
| `DYH_WI04` | 3 | グレムリン | `CHARGE`, `CLAW_L`, `CLAW_R` |
| `DYH_WI06` | 4 | アージェントガーゴイル | `BITE`, `CHARGE`, `CLAW_TE`, `CLAW_TOE` |
| `DYH_WI07` | 3 | クリムゾンガーゴイル | `BITE`, `CLAW_TE`, `CLAW_TOE` |
| `DYH_WI08` | 3 | クレイゴーレム | `BITE`, `CLAW_TE`, `CLAW_TOE` |
| `DYH_WI09` | 1 | スケルトンナイトＦ | `PANIC` |
| `DYH_WI10` | 3 | ギルマン *¹ | `SMASH`, `THUNDER`, `THUNDER_AREA` |
| `DYH_WI11` | 4 |  | `CONDITION_CANCEL`, `MAGICMISSILE`, `SKILL_CANCEL`, `SMASH` |
| `DYH_WI13` | 2 |  | `SWORD`, `WAVE` |
| `DYH_WI14` | 21 |  | `BALL`, `BARRIER`, `BREATH`, `CHARGE`, … |
| `DYF_FI01` | 3 | Ｇスコーピオン | `CLAW_L`, `CLAW_R`, `TAIL` |
| `DYF_FI02` | 3 | ヒュージスコーピオン | `CLAW_L`, `CLAW_R`, `TAIL` |
| `DYF_FI03` | 4 | ストーンスコーピオン | `CLAW_L`, `CLAW_R`, `TAIL`, `TAILARROW` |
| `DYF_FI04` | 1 |  | `THREAD` |
| `DYF_FI05` | 1 |  | `STONE_SHIELD` |
| `DYF_NO01` | 4 | ダイアーウルフ | `BITE`, `BREATH`, `CLAW_L`, `CLAW_R` |
| `DYF_NO02` | 10 | ヘルハウンド | `BITE`, `CLAW_L`, `CLAW_R`, `THUNDER` |
| `DYF_NO03` | 2 | ブルータルブル | `CHARGE`, `HEAD` |
| `DYF_NO04` | 2 | ブラニーブル | `CHARGE`, `HEAD` |
| `DYF_NO05` | 2 | エクスプロージョンＳ | `CHARGE`, `HEAD` |
| `DYF_NO06` | 4 | スチームバトラー | `BOW`, `FOOT`, `QUIV`, `SHOCKWAVE` |
| `DYF_NO07` | 4 | アーマードフロッグ | `AXE`, `FOOT`, `SHIELD`, `SHOCKWAVE` |
| `DYF_NO08` | 5 | ガーディアンフロッグ | `FOOT`, `SHIELD`, `SHOCKWAVE`, `STEAM`, … |
| `DYF_NO11` | 4 |  | `BITE`, `BREATH`, `SHELL`, `SHOCKWAVE` |
| `DYF_NO12` | 7 |  | `CHARGE`, `FOOTSTAMP`, `FOOTSTAMP02`, `MISSILE`, … |
| `DYF_WA08` | 1 |  | `FIRE` |
| `DYF_WI01` | 12 | ホワイトドラゴン | `BARRIER`, `BREATH`, `CHARGE`, `CLAW`, … |
| `DYF_WI02` | 15 | ブラックドラゴン | `BLAST`, `BLAST_AIR`, `BLAST_ICE`, `BREATH`, … |
| `DYF_WI03` | 32 | レッドドラゴン *¹ | `1_FIREBALL`, `1_GRAVITYFIELD`, `1_VENOM`, `BITE`, … |
| `DYF_WI04` | 13 | ヴァンパイア | `BALL`, `BREATH`, `CHARGE`, `CLAW`, … |
| `DYF_WI05` | 12 | トロル・改 | `BLAST_ICE`, `BREATH`, `CHARGE`, `CLAW`, … |
| `DYF_WI06` | 17 |  | `BLAST`, `BLAST_DECLINE`, `CHARGE`, `CLAW`, … |
| `DYF_WI09` | 9 |  | `BREATH`, `CHARGE`, `FIREBALL`, `FIREBALL_02`, … |
| `DYF_WI10` | 6 |  | `FIRE`, `HAND_L`, `HAND_R`, `SHOCKWAVE` |
| `DYB_NO01` | 2 | バット | `BITE`, `CHARGE` |
| `DYB_NO02` | 4 | ジャイアントバット | `BITE`, `BREATH`, `CHARGE` |
| `DYB_NO03` | 2 | バンパイアバット | `BITE`, `CHARGE` |
| `DYB_NO04` | 3 | コカトリス | `BITE`, `BREATH`, `CHARGE` |
| `DYB_NO05` | 4 | トップヘヴィコカトリス | `BITE`, `BLAST`, `BREATH`, `CHARGE` |
| `DYB_NO06` | 3 | エディブルコック | `PECK1`, `PECK2`, `STONE` |
| `DYB_WA01` | 9 | スチームシューター | `BLAST`, `BREATH`, `CHARGE`, `CLAW_L`, … |
| `DYB_WA02` | 9 | ガイトラッシュ | `BLAST`, `BREATH`, `CHARGE`, `CLAW_L`, … |
| `DYB_WA03` | 3 |  | `BITE`, `CHARGE`, `FIRE` |
| `DYB_WA05` | 10 |  | `BLAST`, `BREATH`, `CHARGE`, `CLAW_L`, … |
| `DYB_WA07` | 5 |  | `BITE`, `BREATH`, `CHARGE`, `FIRE`, … |
| `DYB_WA08` | 3 |  | `BREATH`, `CHARGE`, `SHOCKWAVE` |
| `DYB_WA10` | 6 |  | `BLAST`, `BREATH`, `CHARGE`, `SHOCKWAVE`, … |
| `DYO_PL01` | 2 | リグナスファイター | `HAND`, `IVY` |
| `DYO_PL02` | 2 | リビングソーン | `HAND`, `IVY` |
| `DYO_PL03` | 2 | シュリーカー | `HAND`, `IVY` |
| `DYO_ST01` | 2 | ファンガス | `CHARGE`, `POISON` |
| `DYO_ST02` | 2 | スポア | `CHARGE`, `POISON` |
| `DYO_ST03` | 2 | トロル | `CHARGE`, `POISON` |
| `DYO_ST04` | 2 |  | `MAGICMISSILE`, `SHOCKWAVE` |
| `DYO_ST05` | 4 |  | `GRASP`, `SHOCKWAVE`, `SMASH`, `STRIKE` |
| `DYO_ST06` | 4 |  | `GRASP`, `SHOCKWAVE`, `SMASH`, `STRIKE` |
| `DYS_NO01` | 2 | スネーク | `BITE`, `CHARGE` |
| `DYS_NO02` | 2 | バイパー | `BITE`, `CHARGE` |
| `DYS_NO03` | 2 | コブラ | `BITE`, `CHARGE` |
| `DYS_NO04` | 2 | アナコンダ | `BITE`, `CHARGE` |
| `DYS_NO05` | 2 | パイソン | `BITE`, `CHARGE` |
| `DYS_NO06` | 2 |  | `BITE`, `CHARGE` |
| `DNO_NO06` | 2 | スライミミック | `BITE`, `POISON` |
| `DNO_NO07` | 2 | スチームナイト | `BITE`, `POISON` |
| `DNO_NO09` | 3 |  | `BITE`, `DARK_NOVA`, `MAGICMISSILE` |

*¹ 複数の召喚バリアントで再利用されるコード —— 掲載名は基本形態。
曖昧コード： `DYF_WI03` スパンキー/レッドドラゴン; `DYH_AN01` ガーディアンリザードマン・改/リザードマン; `DYH_AN02` リザードマンレンジャー/ロイヤルリザードマン・改; `DYH_AN03` ボーゲスト/リザードマンランサー; `DYH_AN04` ジャンプー/Ｇリザードマン; `DYH_AN05` バルキリークララ/ロイヤルリザードマン; `DYH_NO01` オークメイジＦ/スケルトンナイトＩ/スケルトンナイトＴ/ドワーブンスケルトン; `DYH_NO02` スケルトン/スケルトンメイジＦ/ドワーブンスケルトンＩ/ドワーブンスケルトンＴ; `DYH_NO03` オークＦ/スケルトンメイジ/スケルトンＩ/スケルトンＴ; `DYH_NO04` オークチーフＦ/スケルトンアーチャー/スケルトンメイジＩ/スケルトンメイジＴ; `DYH_NO05` スケルトンアーチャーＦ/スケルトンアーチャーＩ/スケルトンアーチャーＴ/スケルトンナイト; `DYH_NO23` エルドワイバーン/オーク/オークＩ/オークＴ; `DYH_NO24` オークメイジ/オークメイジＩ/オークメイジＴ/ドラゴンゾンビ; `DYH_NO25` オークチーフ/オークチーフＩ/オークチーフＴ/ブルードラゴン; `DYH_NO45` ストーンジャイアント/リザードマンランサー・改; `DYH_NO60` ディアボルガ/リッチ; `DYH_NO61` サイクロプス/デュラハン; `DYH_NO62` テラー/ラミア; `DYH_WI10` カメポポン/ギルマン

### 全レコード索引 — クリーチャーモデルレコード

すべての `MONST_DY*`/`MONST_DNO_*` レコードを系統別に掲載。`jp` は上記で
解決した種族名を繰り返す（空欄 = 未解決／召喚カードなし）。

#### DYH — 495件、113モデルコード

| 内部id | モデル | jp | アクション |
|---|---|---|---|
| `MONST_DYH_AN01_1_SHIELD` | `DYH_AN01` | リザードマン | `SHIELD` |
| `MONST_DYH_AN01_1_SWORD` | `DYH_AN01` | リザードマン | `SWORD` |
| `MONST_DYH_AN01_1_TAIL` | `DYH_AN01` | リザードマン | `TAIL` |
| `MONST_DYH_AN01_BITE` | `DYH_AN01` | リザードマン | `BITE` |
| `MONST_DYH_AN01_SHIELD` | `DYH_AN01` | リザードマン | `SHIELD` |
| `MONST_DYH_AN01_SWORD` | `DYH_AN01` | リザードマン | `SWORD` |
| `MONST_DYH_AN01_TAIL` | `DYH_AN01` | リザードマン | `TAIL` |
| `MONST_DYH_AN02_1_BOW` | `DYH_AN02` | リザードマンレンジャー | `BOW` |
| `MONST_DYH_AN02_1_POISONQUIV` | `DYH_AN02` | リザードマンレンジャー | `POISONQUIV` |
| `MONST_DYH_AN02_1_QUIV` | `DYH_AN02` | リザードマンレンジャー | `QUIV` |
| `MONST_DYH_AN02_BOW` | `DYH_AN02` | リザードマンレンジャー | `BOW` |
| `MONST_DYH_AN02_POISONQUIV` | `DYH_AN02` | リザードマンレンジャー | `POISONQUIV` |
| `MONST_DYH_AN02_QUIV` | `DYH_AN02` | リザードマンレンジャー | `QUIV` |
| `MONST_DYH_AN03_1_SPEAR` | `DYH_AN03` | リザードマンランサー | `SPEAR` |
| `MONST_DYH_AN03_SPEAR` | `DYH_AN03` | リザードマンランサー | `SPEAR` |
| `MONST_DYH_AN04_1_SHIELD` | `DYH_AN04` | Ｇリザードマン | `SHIELD` |
| `MONST_DYH_AN04_1_SWORD` | `DYH_AN04` | Ｇリザードマン | `SWORD` |
| `MONST_DYH_AN04_2_SHIELD` | `DYH_AN04` | Ｇリザードマン | `SHIELD` |
| `MONST_DYH_AN04_2_SWORD` | `DYH_AN04` | Ｇリザードマン | `SWORD` |
| `MONST_DYH_AN04_SHIELD` | `DYH_AN04` | Ｇリザードマン | `SHIELD` |
| `MONST_DYH_AN04_SWORD` | `DYH_AN04` | Ｇリザードマン | `SWORD` |
| `MONST_DYH_AN05_STRUP` | `DYH_AN05` | ロイヤルリザードマン | `STRUP` |
| `MONST_DYH_AN05_1_SPEAR` | `DYH_AN05` | ロイヤルリザードマン | `SPEAR` |
| `MONST_DYH_AN05_2_SPEAR` | `DYH_AN05` | ロイヤルリザードマン | `SPEAR` |
| `MONST_DYH_AN05_SPEAR` | `DYH_AN05` | ロイヤルリザードマン | `SPEAR` |
| `MONST_DYH_AN06_MACE` | `DYH_AN06` | コボルド | `MACE` |
| `MONST_DYH_AN07_BOW` | `DYH_AN07` | コボルドシューター | `BOW` |
| `MONST_DYH_AN07_QUIV` | `DYH_AN07` | コボルドシューター | `QUIV` |
| `MONST_DYH_AN08_SHIELD` | `DYH_AN08` | コボルドウォリアー | `SHIELD` |
| `MONST_DYH_AN08_SWORD` | `DYH_AN08` | コボルドウォリアー | `SWORD` |
| `MONST_DYH_AN09_AXE` | `DYH_AN09` | ノール | `AXE` |
| `MONST_DYH_AN10_SPEAR` | `DYH_AN10` | コボルドリーダー | `SPEAR` |
| `MONST_DYH_AN11_BREATH` | `DYH_AN11` | サラマンダー | `BREATH` |
| `MONST_DYH_AN11_SPEAR` | `DYH_AN11` | サラマンダー | `SPEAR` |
| `MONST_DYH_AN12_BREATH` | `DYH_AN12` | フロストサラマンダー | `BREATH` |
| `MONST_DYH_AN12_SPEAR` | `DYH_AN12` | フロストサラマンダー | `SPEAR` |
| `MONST_DYH_AN13_BREATH` | `DYH_AN13` | ハイサラマンダー | `BREATH` |
| `MONST_DYH_AN13_SPEAR` | `DYH_AN13` | ハイサラマンダー | `SPEAR` |
| `MONST_DYH_AN14_BOMB` | `DYH_AN14` | ガーゴイル | `BOMB` |
| `MONST_DYH_AN14_CHARGE` | `DYH_AN14` | ガーゴイル | `CHARGE` |
| `MONST_DYH_AN14_CLAW_L` | `DYH_AN14` | ガーゴイル | `CLAW_L` |
| `MONST_DYH_AN14_CLAW_R` | `DYH_AN14` | ガーゴイル | `CLAW_R` |
| `MONST_DYH_AN15_1_AXE` | `DYH_AN15` | ミノタウロスバトラー | `AXE` |
| `MONST_DYH_AN15_1_CHARGE` | `DYH_AN15` | ミノタウロスバトラー | `CHARGE` |
| `MONST_DYH_AN15_1_SHOCKWAVE` | `DYH_AN15` | ミノタウロスバトラー | `SHOCKWAVE` |
| `MONST_DYH_AN15_AXE` | `DYH_AN15` | ミノタウロスバトラー | `AXE` |
| `MONST_DYH_AN15_CHARGE` | `DYH_AN15` | ミノタウロスバトラー | `CHARGE` |
| `MONST_DYH_AN16_1_AXE` | `DYH_AN16` | ミノタウロス | `AXE` |
| `MONST_DYH_AN16_1_CHARGE` | `DYH_AN16` | ミノタウロス | `CHARGE` |
| `MONST_DYH_AN16_1_HAND_L` | `DYH_AN16` | ミノタウロス | `HAND_L` |
| `MONST_DYH_AN16_1_HAND_R` | `DYH_AN16` | ミノタウロス | `HAND_R` |
| `MONST_DYH_AN16_AXE` | `DYH_AN16` | ミノタウロス | `AXE` |
| `MONST_DYH_AN16_CHARGE` | `DYH_AN16` | ミノタウロス | `CHARGE` |
| `MONST_DYH_AN16_HAND_L` | `DYH_AN16` | ミノタウロス | `HAND_L` |
| `MONST_DYH_AN16_HAND_R` | `DYH_AN16` | ミノタウロス | `HAND_R` |
| `MONST_DYH_AN17_1_AXE` | `DYH_AN17` | ミノタウロスＳ | `AXE` |
| `MONST_DYH_AN17_1_CHARGE` | `DYH_AN17` | ミノタウロスＳ | `CHARGE` |
| `MONST_DYH_AN17_1_HAND_L` | `DYH_AN17` | ミノタウロスＳ | `HAND_L` |
| `MONST_DYH_AN17_1_HAND_R` | `DYH_AN17` | ミノタウロスＳ | `HAND_R` |
| `MONST_DYH_AN17_AXE` | `DYH_AN17` | ミノタウロスＳ | `AXE` |
| `MONST_DYH_AN17_CHARGE` | `DYH_AN17` | ミノタウロスＳ | `CHARGE` |
| `MONST_DYH_AN17_HAND_L` | `DYH_AN17` | ミノタウロスＳ | `HAND_L` |
| `MONST_DYH_AN17_HAND_R` | `DYH_AN17` | ミノタウロスＳ | `HAND_R` |
| `MONST_DYH_AN18_QUAKE` | `DYH_AN18` | ミノタウロスコマンダー | `QUAKE` |
| `MONST_DYH_AN18_THROW` | `DYH_AN18` | ミノタウロスコマンダー | `THROW` |
| `MONST_DYH_AN18_1_AXE` | `DYH_AN18` | ミノタウロスコマンダー | `AXE` |
| `MONST_DYH_AN18_1_CHARGE` | `DYH_AN18` | ミノタウロスコマンダー | `CHARGE` |
| `MONST_DYH_AN18_AXE` | `DYH_AN18` | ミノタウロスコマンダー | `AXE` |
| `MONST_DYH_AN18_CHARGE` | `DYH_AN18` | ミノタウロスコマンダー | `CHARGE` |
| `MONST_DYH_NO01_AXE` | `DYH_NO01` | ドワーブンスケルトン | `AXE` |
| `MONST_DYH_NO01_AXE_F` | `DYH_NO01` | ドワーブンスケルトン | `AXE_F` |
| `MONST_DYH_NO01_AXE_I` | `DYH_NO01` | ドワーブンスケルトン | `AXE_I` |
| `MONST_DYH_NO01_AXE_T` | `DYH_NO01` | ドワーブンスケルトン | `AXE_T` |
| `MONST_DYH_NO02_SHIELD` | `DYH_NO02` | スケルトン | `SHIELD` |
| `MONST_DYH_NO02_SHIELD_F` | `DYH_NO02` | スケルトン | `SHIELD_F` |
| `MONST_DYH_NO02_SHIELD_I` | `DYH_NO02` | スケルトン | `SHIELD_I` |
| `MONST_DYH_NO02_SHIELD_T` | `DYH_NO02` | スケルトン | `SHIELD_T` |
| `MONST_DYH_NO02_SWORD` | `DYH_NO02` | スケルトン | `SWORD` |
| `MONST_DYH_NO02_SWORD_F` | `DYH_NO02` | スケルトン | `SWORD_F` |
| `MONST_DYH_NO02_SWORD_I` | `DYH_NO02` | スケルトン | `SWORD_I` |
| `MONST_DYH_NO02_SWORD_T` | `DYH_NO02` | スケルトン | `SWORD_T` |
| `MONST_DYH_NO03_FIRE` | `DYH_NO03` | スケルトンメイジ | `FIRE` |
| `MONST_DYH_NO03_FIRE_AREA` | `DYH_NO03` | スケルトンメイジ | `FIRE_AREA` |
| `MONST_DYH_NO03_ICE` | `DYH_NO03` | スケルトンメイジ | `ICE` |
| `MONST_DYH_NO03_ICE_AREA` | `DYH_NO03` | スケルトンメイジ | `ICE_AREA` |
| `MONST_DYH_NO03_THUNDER` | `DYH_NO03` | スケルトンメイジ | `THUNDER` |
| `MONST_DYH_NO03_THUNDER_AREA` | `DYH_NO03` | スケルトンメイジ | `THUNDER_AREA` |
| `MONST_DYH_NO03_STAFF` | `DYH_NO03` | スケルトンメイジ | `STAFF` |
| `MONST_DYH_NO03_STAFF_F` | `DYH_NO03` | スケルトンメイジ | `STAFF_F` |
| `MONST_DYH_NO03_STAFF_I` | `DYH_NO03` | スケルトンメイジ | `STAFF_I` |
| `MONST_DYH_NO03_STAFF_T` | `DYH_NO03` | スケルトンメイジ | `STAFF_T` |
| `MONST_DYH_NO04_BOW` | `DYH_NO04` | スケルトンアーチャー | `BOW` |
| `MONST_DYH_NO04_BOW_F` | `DYH_NO04` | スケルトンアーチャー | `BOW_F` |
| `MONST_DYH_NO04_BOW_I` | `DYH_NO04` | スケルトンアーチャー | `BOW_I` |
| `MONST_DYH_NO04_BOW_T` | `DYH_NO04` | スケルトンアーチャー | `BOW_T` |
| `MONST_DYH_NO04_POISONQUIV` | `DYH_NO04` | スケルトンアーチャー | `POISONQUIV` |
| `MONST_DYH_NO04_POISONQUIV_F` | `DYH_NO04` | スケルトンアーチャー | `POISONQUIV_F` |
| `MONST_DYH_NO04_POISONQUIV_I` | `DYH_NO04` | スケルトンアーチャー | `POISONQUIV_I` |
| `MONST_DYH_NO04_POISONQUIV_T` | `DYH_NO04` | スケルトンアーチャー | `POISONQUIV_T` |
| `MONST_DYH_NO04_QUIV` | `DYH_NO04` | スケルトンアーチャー | `QUIV` |
| `MONST_DYH_NO04_QUIV_F` | `DYH_NO04` | スケルトンアーチャー | `QUIV_F` |
| `MONST_DYH_NO04_QUIV_I` | `DYH_NO04` | スケルトンアーチャー | `QUIV_I` |
| `MONST_DYH_NO04_QUIV_T` | `DYH_NO04` | スケルトンアーチャー | `QUIV_T` |
| `MONST_DYH_NO05_SWORD` | `DYH_NO05` | スケルトンナイト | `SWORD` |
| `MONST_DYH_NO05_SWORD_F` | `DYH_NO05` | スケルトンナイト | `SWORD_F` |
| `MONST_DYH_NO05_SWORD_I` | `DYH_NO05` | スケルトンナイト | `SWORD_I` |
| `MONST_DYH_NO05_SWORD_T` | `DYH_NO05` | スケルトンナイト | `SWORD_T` |
| `MONST_DYH_NO06_CLAW_L` | `DYH_NO06` | ゾンビ | `CLAW_L` |
| `MONST_DYH_NO06_CLAW_R` | `DYH_NO06` | ゾンビ | `CLAW_R` |
| `MONST_DYH_NO07_SHIELD` | `DYH_NO07` |  | `SHIELD` |
| `MONST_DYH_NO07_SWORD` | `DYH_NO07` |  | `SWORD` |
| `MONST_DYH_NO08_SHIELD` | `DYH_NO08` |  | `SHIELD` |
| `MONST_DYH_NO08_SWORD` | `DYH_NO08` |  | `SWORD` |
| `MONST_DYH_NO09_BITE` | `DYH_NO09` | グール | `BITE` |
| `MONST_DYH_NO09_CLAW_L` | `DYH_NO09` | グール | `CLAW_L` |
| `MONST_DYH_NO09_CLAW_R` | `DYH_NO09` | グール | `CLAW_R` |
| `MONST_DYH_NO10_SWORD` | `DYH_NO10` |  | `SWORD` |
| `MONST_DYH_NO11_SHIELD` | `DYH_NO11` |  | `SHIELD` |
| `MONST_DYH_NO11_SWORD` | `DYH_NO11` |  | `SWORD` |
| `MONST_DYH_NO12_FIRE` | `DYH_NO12` | ゴースト | `FIRE` |
| `MONST_DYH_NO12_ICE` | `DYH_NO12` | ゴースト | `ICE` |
| `MONST_DYH_NO12_SILENT` | `DYH_NO12` | ゴースト | `SILENT` |
| `MONST_DYH_NO12_THUNDER` | `DYH_NO12` | ゴースト | `THUNDER` |
| `MONST_DYH_NO12_BITE` | `DYH_NO12` | ゴースト | `BITE` |
| `MONST_DYH_NO13_FIRE` | `DYH_NO13` | ファントム | `FIRE` |
| `MONST_DYH_NO13_ICE` | `DYH_NO13` | ファントム | `ICE` |
| `MONST_DYH_NO13_SILENT` | `DYH_NO13` | ファントム | `SILENT` |
| `MONST_DYH_NO13_THUNDER` | `DYH_NO13` | ファントム | `THUNDER` |
| `MONST_DYH_NO13_BITE` | `DYH_NO13` | ファントム | `BITE` |
| `MONST_DYH_NO14_SHIELD` | `DYH_NO14` | ガスクラウド | `SHIELD` |
| `MONST_DYH_NO14_SWORD` | `DYH_NO14` | ガスクラウド | `SWORD` |
| `MONST_DYH_NO15_SHIELD` | `DYH_NO15` | サルファークラウド | `SHIELD` |
| `MONST_DYH_NO15_SWORD` | `DYH_NO15` | サルファークラウド | `SWORD` |
| `MONST_DYH_NO16_SHIELD` | `DYH_NO16` | ポイズンクラウド | `SHIELD` |
| `MONST_DYH_NO16_SWORD` | `DYH_NO16` | ポイズンクラウド | `SWORD` |
| `MONST_DYH_NO17_SWORD` | `DYH_NO17` | ゴブリンコック | `SWORD` |
| `MONST_DYH_NO18_BOW` | `DYH_NO18` | ゴブリンアーチャー | `BOW` |
| `MONST_DYH_NO18_POISONQUIV` | `DYH_NO18` | ゴブリンアーチャー | `POISONQUIV` |
| `MONST_DYH_NO18_QUIV` | `DYH_NO18` | ゴブリンアーチャー | `QUIV` |
| `MONST_DYH_NO19_SHIELD` | `DYH_NO19` | ゴブリンファイター | `SHIELD` |
| `MONST_DYH_NO19_SWORD` | `DYH_NO19` | ゴブリンファイター | `SWORD` |
| `MONST_DYH_NO21_MACE` | `DYH_NO21` | ホブゴブリン | `MACE` |
| `MONST_DYH_NO22_SWORD` | `DYH_NO22` | ゴブリンロード | `SWORD` |
| `MONST_DYH_NO23_AXE` | `DYH_NO23` | オーク | `AXE` |
| `MONST_DYH_NO23_AXE_F` | `DYH_NO23` | オーク | `AXE_F` |
| `MONST_DYH_NO23_AXE_I` | `DYH_NO23` | オーク | `AXE_I` |
| `MONST_DYH_NO23_AXE_T` | `DYH_NO23` | オーク | `AXE_T` |
| `MONST_DYH_NO23_SHIELD` | `DYH_NO23` | オーク | `SHIELD` |
| `MONST_DYH_NO23_SHIELD_F` | `DYH_NO23` | オーク | `SHIELD_F` |
| `MONST_DYH_NO23_SHIELD_I` | `DYH_NO23` | オーク | `SHIELD_I` |
| `MONST_DYH_NO23_SHIELD_T` | `DYH_NO23` | オーク | `SHIELD_T` |
| `MONST_DYH_NO24_FIRE` | `DYH_NO24` | オークメイジ | `FIRE` |
| `MONST_DYH_NO24_FIRE_AREA` | `DYH_NO24` | オークメイジ | `FIRE_AREA` |
| `MONST_DYH_NO24_ICE` | `DYH_NO24` | オークメイジ | `ICE` |
| `MONST_DYH_NO24_ICE_AREA` | `DYH_NO24` | オークメイジ | `ICE_AREA` |
| `MONST_DYH_NO24_THUNDER` | `DYH_NO24` | オークメイジ | `THUNDER` |
| `MONST_DYH_NO24_THUNDER_AREA` | `DYH_NO24` | オークメイジ | `THUNDER_AREA` |
| `MONST_DYH_NO24_STAFF` | `DYH_NO24` | オークメイジ | `STAFF` |
| `MONST_DYH_NO24_STAFF_F` | `DYH_NO24` | オークメイジ | `STAFF_F` |
| `MONST_DYH_NO24_STAFF_I` | `DYH_NO24` | オークメイジ | `STAFF_I` |
| `MONST_DYH_NO24_STAFF_T` | `DYH_NO24` | オークメイジ | `STAFF_T` |
| `MONST_DYH_NO25_AXE` | `DYH_NO25` | オークチーフ | `AXE` |
| `MONST_DYH_NO25_AXE_F` | `DYH_NO25` | オークチーフ | `AXE_F` |
| `MONST_DYH_NO25_AXE_I` | `DYH_NO25` | オークチーフ | `AXE_I` |
| `MONST_DYH_NO25_AXE_T` | `DYH_NO25` | オークチーフ | `AXE_T` |
| `MONST_DYH_NO26_SHIELD` | `DYH_NO26` |  | `SHIELD` |
| `MONST_DYH_NO26_SWORD` | `DYH_NO26` |  | `SWORD` |
| `MONST_DYH_NO27_SHIELD` | `DYH_NO27` |  | `SHIELD` |
| `MONST_DYH_NO27_SWORD` | `DYH_NO27` |  | `SWORD` |
| `MONST_DYH_NO28_SHIELD` | `DYH_NO28` |  | `SHIELD` |
| `MONST_DYH_NO28_SWORD` | `DYH_NO28` |  | `SWORD` |
| `MONST_DYH_NO29_SHIELD` | `DYH_NO29` |  | `SHIELD` |
| `MONST_DYH_NO29_SWORD` | `DYH_NO29` |  | `SWORD` |
| `MONST_DYH_NO30_BEAT1` | `DYH_NO30` | ストーンゴーレム | `BEAT1` |
| `MONST_DYH_NO30_BEAT2` | `DYH_NO30` | ストーンゴーレム | `BEAT2` |
| `MONST_DYH_NO31_BEAT1` | `DYH_NO31` | アイアンゴーレム | `BEAT1` |
| `MONST_DYH_NO31_BEAT2` | `DYH_NO31` | アイアンゴーレム | `BEAT2` |
| `MONST_DYH_NO32_BEAT1` | `DYH_NO32` | アイスゴーレム | `BEAT1` |
| `MONST_DYH_NO32_BEAT2` | `DYH_NO32` | アイスゴーレム | `BEAT2` |
| `MONST_DYH_NO33_BEAT1` | `DYH_NO33` | ファイアーゴーレム | `BEAT1` |
| `MONST_DYH_NO33_BEAT2` | `DYH_NO33` | ファイアーゴーレム | `BEAT2` |
| `MONST_DYH_NO34_BEAT1` | `DYH_NO34` | ミミック | `BEAT1` |
| `MONST_DYH_NO34_BEAT2` | `DYH_NO34` | ミミック | `BEAT2` |
| `MONST_DYH_NO35_SHIELD` | `DYH_NO35` | スチームナイトゴールド | `SHIELD` |
| `MONST_DYH_NO35_SHIELDBASH` | `DYH_NO35` | スチームナイトゴールド | `SHIELDBASH` |
| `MONST_DYH_NO35_SWORD` | `DYH_NO35` | スチームナイトゴールド | `SWORD` |
| `MONST_DYH_NO36_THUNDER_AREA` | `DYH_NO36` | スチームナイトダーク | `THUNDER_AREA` |
| `MONST_DYH_NO36_AXE` | `DYH_NO36` | スチームナイトダーク | `AXE` |
| `MONST_DYH_NO36_SHIELD` | `DYH_NO36` | スチームナイトダーク | `SHIELD` |
| `MONST_DYH_NO36_SHIELDBASH` | `DYH_NO36` | スチームナイトダーク | `SHIELDBASH` |
| `MONST_DYH_NO37_SHIELD` | `DYH_NO37` | マジシャン | `SHIELD` |
| `MONST_DYH_NO37_SHIELDBASH` | `DYH_NO37` | マジシャン | `SHIELDBASH` |
| `MONST_DYH_NO37_SWORD` | `DYH_NO37` | マジシャン | `SWORD` |
| `MONST_DYH_NO38_FIRE` | `DYH_NO38` | ダークマジシャン | `FIRE` |
| `MONST_DYH_NO38_HOLY` | `DYH_NO38` | ダークマジシャン | `HOLY` |
| `MONST_DYH_NO38_ICE` | `DYH_NO38` | ダークマジシャン | `ICE` |
| `MONST_DYH_NO38_PANIC` | `DYH_NO38` | ダークマジシャン | `PANIC` |
| `MONST_DYH_NO38_SILENT` | `DYH_NO38` | ダークマジシャン | `SILENT` |
| `MONST_DYH_NO38_THUNDER` | `DYH_NO38` | ダークマジシャン | `THUNDER` |
| `MONST_DYH_NO38_VENOM` | `DYH_NO38` | ダークマジシャン | `VENOM` |
| `MONST_DYH_NO38_1_STAFF` | `DYH_NO38` | ダークマジシャン | `STAFF` |
| `MONST_DYH_NO38_STAFF` | `DYH_NO38` | ダークマジシャン | `STAFF` |
| `MONST_DYH_NO39_HEALNOVA` | `DYH_NO39` | ネクロマンサー | `HEALNOVA` |
| `MONST_DYH_NO39_HOLYVENOM` | `DYH_NO39` | ネクロマンサー | `HOLYVENOM` |
| `MONST_DYH_NO39_STAFF` | `DYH_NO39` | ネクロマンサー | `STAFF` |
| `MONST_DYH_NO40_FIREVENOM` | `DYH_NO40` | ワイルドブル | `FIREVENOM` |
| `MONST_DYH_NO40_HEAL` | `DYH_NO40` | ワイルドブル | `HEAL` |
| `MONST_DYH_NO40_VENOM` | `DYH_NO40` | ワイルドブル | `VENOM` |
| `MONST_DYH_NO40_STAFF` | `DYH_NO40` | ワイルドブル | `STAFF` |
| `MONST_DYH_NO41_1_ARROW` | `DYH_NO41` | ロバー | `ARROW` |
| `MONST_DYH_NO41_1_SWORD` | `DYH_NO41` | ロバー | `SWORD` |
| `MONST_DYH_NO41_ARROW` | `DYH_NO41` | ロバー | `ARROW` |
| `MONST_DYH_NO41_SWORD` | `DYH_NO41` | ロバー | `SWORD` |
| `MONST_DYH_NO42_1_SWORD` | `DYH_NO42` | アサシン | `SWORD` |
| `MONST_DYH_NO42_SWORD` | `DYH_NO42` | アサシン | `SWORD` |
| `MONST_DYH_NO43_BOMB` | `DYH_NO43` | トレント | `BOMB` |
| `MONST_DYH_NO43_SWORD` | `DYH_NO43` | トレント | `SWORD` |
| `MONST_DYH_NO45_1_CLUB` | `DYH_NO45` | ストーンジャイアント | `CLUB` |
| `MONST_DYH_NO45_1_THROW` | `DYH_NO45` | ストーンジャイアント | `THROW` |
| `MONST_DYH_NO45_CLUB` | `DYH_NO45` | ストーンジャイアント | `CLUB` |
| `MONST_DYH_NO45_THROW` | `DYH_NO45` | ストーンジャイアント | `THROW` |
| `MONST_DYH_NO46_CLUB` | `DYH_NO46` | ファイアージャイアント | `CLUB` |
| `MONST_DYH_NO46_SHOCKWAVE` | `DYH_NO46` | ファイアージャイアント | `SHOCKWAVE` |
| `MONST_DYH_NO46_THROW` | `DYH_NO46` | ファイアージャイアント | `THROW` |
| `MONST_DYH_NO47_CLUB` | `DYH_NO47` | ゴールドドラゴン | `CLUB` |
| `MONST_DYH_NO47_SHOCKWAVE` | `DYH_NO47` | ゴールドドラゴン | `SHOCKWAVE` |
| `MONST_DYH_NO47_THROW` | `DYH_NO47` | ゴールドドラゴン | `THROW` |
| `MONST_DYH_NO49_1_BALL` | `DYH_NO49` | ワイバーン | `BALL` |
| `MONST_DYH_NO49_BALL` | `DYH_NO49` | ワイバーン | `BALL` |
| `MONST_DYH_NO49_FIRE` | `DYH_NO49` | ワイバーン | `FIRE` |
| `MONST_DYH_NO49_FIREWALL` | `DYH_NO49` | ワイバーン | `FIREWALL` |
| `MONST_DYH_NO49_FIREWAVE` | `DYH_NO49` | ワイバーン | `FIREWAVE` |
| `MONST_DYH_NO49_FIRE_02` | `DYH_NO49` | ワイバーン | `FIRE_02` |
| `MONST_DYH_NO49_FIRE_AREA` | `DYH_NO49` | ワイバーン | `FIRE_AREA` |
| `MONST_DYH_NO49_PILLAR` | `DYH_NO49` | ワイバーン | `PILLAR` |
| `MONST_DYH_NO49_QUAKE` | `DYH_NO49` | ワイバーン | `QUAKE` |
| `MONST_DYH_NO49_CHARGE` | `DYH_NO49` | ワイバーン | `CHARGE` |
| `MONST_DYH_NO49_HAND_L` | `DYH_NO49` | ワイバーン | `HAND_L` |
| `MONST_DYH_NO49_HAND_R` | `DYH_NO49` | ワイバーン | `HAND_R` |
| `MONST_DYH_NO49_QUAKE01` | `DYH_NO49` | ワイバーン | `QUAKE01` |
| `MONST_DYH_NO49_SHOCKWAVE01` | `DYH_NO49` | ワイバーン | `SHOCKWAVE01` |
| `MONST_DYH_NO49_SHOCKWAVE02` | `DYH_NO49` | ワイバーン | `SHOCKWAVE02` |
| `MONST_DYH_NO49_THROW` | `DYH_NO49` | ワイバーン | `THROW` |
| `MONST_DYH_NO49_WAVE` | `DYH_NO49` | ワイバーン | `WAVE` |
| `MONST_DYH_NO50_AXE` | `DYH_NO50` | アーマートードキング | `AXE` |
| `MONST_DYH_NO50_CHARGE` | `DYH_NO50` | アーマートードキング | `CHARGE` |
| `MONST_DYH_NO51_CHARGE` | `DYH_NO51` | サキュバス | `CHARGE` |
| `MONST_DYH_NO51_SHIELD` | `DYH_NO51` | サキュバス | `SHIELD` |
| `MONST_DYH_NO51_SWORD` | `DYH_NO51` | サキュバス | `SWORD` |
| `MONST_DYH_NO52_CHARGE` | `DYH_NO52` | スケルトンＦ | `CHARGE` |
| `MONST_DYH_NO52_PRESS` | `DYH_NO52` | スケルトンＦ | `PRESS` |
| `MONST_DYH_NO52_SHIELD` | `DYH_NO52` | スケルトンＦ | `SHIELD` |
| `MONST_DYH_NO52_SWORD` | `DYH_NO52` | スケルトンＦ | `SWORD` |
| `MONST_DYH_NO53_FIRE` | `DYH_NO53` |  | `FIRE` |
| `MONST_DYH_NO53_SYUIRIKEN` | `DYH_NO53` |  | `SYUIRIKEN` |
| `MONST_DYH_NO53_THUNDER01` | `DYH_NO53` |  | `THUNDER01` |
| `MONST_DYH_NO53_THUNDER02` | `DYH_NO53` |  | `THUNDER02` |
| `MONST_DYH_NO53_VENOM` | `DYH_NO53` |  | `VENOM` |
| `MONST_DYH_NO53_SHOCKWAVE` | `DYH_NO53` |  | `SHOCKWAVE` |
| `MONST_DYH_NO53_SWORD` | `DYH_NO53` |  | `SWORD` |
| `MONST_DYH_NO54_FIRE` | `DYH_NO54` |  | `FIRE` |
| `MONST_DYH_NO54_FIRE01` | `DYH_NO54` |  | `FIRE01` |
| `MONST_DYH_NO54_FIRE02` | `DYH_NO54` |  | `FIRE02` |
| `MONST_DYH_NO54_FIREWAVE` | `DYH_NO54` |  | `FIREWAVE` |
| `MONST_DYH_NO54_FIRE_AREA` | `DYH_NO54` |  | `FIRE_AREA` |
| `MONST_DYH_NO54_ICE` | `DYH_NO54` |  | `ICE` |
| `MONST_DYH_NO54_ICE01` | `DYH_NO54` |  | `ICE01` |
| `MONST_DYH_NO54_ICE_AREA` | `DYH_NO54` |  | `ICE_AREA` |
| `MONST_DYH_NO54_MAGICMISSILE` | `DYH_NO54` |  | `MAGICMISSILE` |
| `MONST_DYH_NO54_PANIC` | `DYH_NO54` |  | `PANIC` |
| `MONST_DYH_NO54_PILLAR` | `DYH_NO54` |  | `PILLAR` |
| `MONST_DYH_NO54_THUNDER` | `DYH_NO54` |  | `THUNDER` |
| `MONST_DYH_NO54_THUNDER01` | `DYH_NO54` |  | `THUNDER01` |
| `MONST_DYH_NO54_TIMESTOP` | `DYH_NO54` |  | `TIMESTOP` |
| `MONST_DYH_NO54_TORNADO` | `DYH_NO54` |  | `TORNADO` |
| `MONST_DYH_NO54_VENOM` | `DYH_NO54` |  | `VENOM` |
| `MONST_DYH_NO54_SHOCKWAVE` | `DYH_NO54` |  | `SHOCKWAVE` |
| `MONST_DYH_NO54_STAFF` | `DYH_NO54` |  | `STAFF` |
| `MONST_DYH_NO55_REFLECTBALL` | `DYH_NO55` |  | `REFLECTBALL` |
| `MONST_DYH_NO55_THUNDER01` | `DYH_NO55` |  | `THUNDER01` |
| `MONST_DYH_NO55_THUNDER02` | `DYH_NO55` |  | `THUNDER02` |
| `MONST_DYH_NO55_VENOM` | `DYH_NO55` |  | `VENOM` |
| `MONST_DYH_NO55_SHOCKWAVE` | `DYH_NO55` |  | `SHOCKWAVE` |
| `MONST_DYH_NO55_SHOCKWAVE02` | `DYH_NO55` |  | `SHOCKWAVE02` |
| `MONST_DYH_NO55_SWORD` | `DYH_NO55` |  | `SWORD` |
| `MONST_DYH_NO57_HOLYVENOM` | `DYH_NO57` |  | `HOLYVENOM` |
| `MONST_DYH_NO57_STAFF` | `DYH_NO57` |  | `STAFF` |
| `MONST_DYH_NO58_BOMB` | `DYH_NO58` |  | `BOMB` |
| `MONST_DYH_NO58_SWORD` | `DYH_NO58` |  | `SWORD` |
| `MONST_DYH_NO59_STAFF` | `DYH_NO59` |  | `STAFF` |
| `MONST_DYH_NO60_KICK` | `DYH_NO60` | ディアボルガ | `KICK` |
| `MONST_DYH_NO61_SHIELD` | `DYH_NO61` | デュラハン | `SHIELD` |
| `MONST_DYH_NO61_SWORD` | `DYH_NO61` | デュラハン | `SWORD` |
| `MONST_DYH_NO62_SWORD` | `DYH_NO62` | ラミア | `SWORD` |
| `MONST_DYH_NO63_CLUB` | `DYH_NO63` |  | `CLUB` |
| `MONST_DYH_NO63_SHOCKWAVE` | `DYH_NO63` |  | `SHOCKWAVE` |
| `MONST_DYH_NO63_THROW` | `DYH_NO63` |  | `THROW` |
| `MONST_DYH_NO64_BOW` | `DYH_NO64` |  | `BOW` |
| `MONST_DYH_NO64_POISONQUIV` | `DYH_NO64` |  | `POISONQUIV` |
| `MONST_DYH_NO64_QUIV` | `DYH_NO64` |  | `QUIV` |
| `MONST_DYH_NO65_3WAYTHUNDER` | `DYH_NO65` |  | `3WAYTHUNDER` |
| `MONST_DYH_NO65_FIRE` | `DYH_NO65` |  | `FIRE` |
| `MONST_DYH_NO65_FIRE02` | `DYH_NO65` |  | `FIRE02` |
| `MONST_DYH_NO65_FIREWALL` | `DYH_NO65` |  | `FIREWALL` |
| `MONST_DYH_NO65_ICE` | `DYH_NO65` |  | `ICE` |
| `MONST_DYH_NO65_PILLAR` | `DYH_NO65` |  | `PILLAR` |
| `MONST_DYH_NO65_SHOOT` | `DYH_NO65` |  | `SHOOT` |
| `MONST_DYH_NO65_THUNDER01` | `DYH_NO65` |  | `THUNDER01` |
| `MONST_DYH_NO65_THUNDER02` | `DYH_NO65` |  | `THUNDER02` |
| `MONST_DYH_NO65_VENOM` | `DYH_NO65` |  | `VENOM` |
| `MONST_DYH_NO65_WAVE` | `DYH_NO65` |  | `WAVE` |
| `MONST_DYH_NO65_SHOCKWAVE` | `DYH_NO65` |  | `SHOCKWAVE` |
| `MONST_DYH_NO65_SWORD` | `DYH_NO65` |  | `SWORD` |
| `MONST_DYH_NO66_3WAYTHUNDER` | `DYH_NO66` |  | `3WAYTHUNDER` |
| `MONST_DYH_NO66_FIRE` | `DYH_NO66` |  | `FIRE` |
| `MONST_DYH_NO66_FIRE02` | `DYH_NO66` |  | `FIRE02` |
| `MONST_DYH_NO66_FIREWALL` | `DYH_NO66` |  | `FIREWALL` |
| `MONST_DYH_NO66_HEAL` | `DYH_NO66` |  | `HEAL` |
| `MONST_DYH_NO66_HOLYVENOM` | `DYH_NO66` |  | `HOLYVENOM` |
| `MONST_DYH_NO66_ICE` | `DYH_NO66` |  | `ICE` |
| `MONST_DYH_NO66_ICEPILLAR` | `DYH_NO66` |  | `ICEPILLAR` |
| `MONST_DYH_NO66_PILLAR` | `DYH_NO66` |  | `PILLAR` |
| `MONST_DYH_NO66_SHOOT` | `DYH_NO66` |  | `SHOOT` |
| `MONST_DYH_NO66_SILENT` | `DYH_NO66` |  | `SILENT` |
| `MONST_DYH_NO66_THUNDER01` | `DYH_NO66` |  | `THUNDER01` |
| `MONST_DYH_NO66_THUNDER02` | `DYH_NO66` |  | `THUNDER02` |
| `MONST_DYH_NO66_TORNADO` | `DYH_NO66` |  | `TORNADO` |
| `MONST_DYH_NO66_VENOM` | `DYH_NO66` |  | `VENOM` |
| `MONST_DYH_NO66_WAVE` | `DYH_NO66` |  | `WAVE` |
| `MONST_DYH_NO66_BLAST` | `DYH_NO66` |  | `BLAST` |
| `MONST_DYH_NO66_SHOCKWAVE` | `DYH_NO66` |  | `SHOCKWAVE` |
| `MONST_DYH_NO66_SWORD` | `DYH_NO66` |  | `SWORD` |
| `MONST_DYH_NO67_STONE` | `DYH_NO67` |  | `STONE` |
| `MONST_DYH_NO67_SMASH` | `DYH_NO67` |  | `SMASH` |
| `MONST_DYH_NO68_BEAT` | `DYH_NO68` |  | `BEAT` |
| `MONST_DYH_NO68_CHARGE` | `DYH_NO68` |  | `CHARGE` |
| `MONST_DYH_NO68_SHOCKWAVE` | `DYH_NO68` |  | `SHOCKWAVE` |
| `MONST_DYH_NO69_SWORD` | `DYH_NO69` |  | `SWORD` |
| `MONST_DYH_NO69_SWORD_1` | `DYH_NO69` |  | `SWORD_1` |
| `MONST_DYH_NO69_THROW_AXE` | `DYH_NO69` |  | `THROW_AXE` |
| `MONST_DYH_NO70_MAGICMISSILE` | `DYH_NO70` |  | `MAGICMISSILE` |
| `MONST_DYH_NO70_HOLD` | `DYH_NO70` |  | `HOLD` |
| `MONST_DYH_NO70_SWORD` | `DYH_NO70` |  | `SWORD` |
| `MONST_DYH_NO70_SWORD_1` | `DYH_NO70` |  | `SWORD_1` |
| `MONST_DYH_NO71_REFLECTBALL` | `DYH_NO71` |  | `REFLECTBALL` |
| `MONST_DYH_NO71_THUNDER01` | `DYH_NO71` |  | `THUNDER01` |
| `MONST_DYH_NO71_THUNDER02` | `DYH_NO71` |  | `THUNDER02` |
| `MONST_DYH_NO71_VENOM` | `DYH_NO71` |  | `VENOM` |
| `MONST_DYH_NO71_SHOCKWAVE` | `DYH_NO71` |  | `SHOCKWAVE` |
| `MONST_DYH_NO71_SWORD` | `DYH_NO71` |  | `SWORD` |
| `MONST_DYH_NO72_FIRE` | `DYH_NO72` |  | `FIRE` |
| `MONST_DYH_NO72_ICE` | `DYH_NO72` |  | `ICE` |
| `MONST_DYH_NO72_PANIC` | `DYH_NO72` |  | `PANIC` |
| `MONST_DYH_NO72_POISON` | `DYH_NO72` |  | `POISON` |
| `MONST_DYH_NO72_SLEEP` | `DYH_NO72` |  | `SLEEP` |
| `MONST_DYH_NO72_THUNDER` | `DYH_NO72` |  | `THUNDER` |
| `MONST_DYH_NO72_SHOCKWAVE` | `DYH_NO72` |  | `SHOCKWAVE` |
| `MONST_DYH_NO74_SWORD` | `DYH_NO74` |  | `SWORD` |
| `MONST_DYH_NO76_BLIND` | `DYH_NO76` | セラフィー・ルカ | `BLIND` |
| `MONST_DYH_NO76_POISON` | `DYH_NO76` | セラフィー・ルカ | `POISON` |
| `MONST_DYH_NO76_SHOTGUN` | `DYH_NO76` | セラフィー・ルカ | `SHOTGUN` |
| `MONST_DYH_NO76_THUNDER` | `DYH_NO76` | セラフィー・ルカ | `THUNDER` |
| `MONST_DYH_NO76_STAFF` | `DYH_NO76` | セラフィー・ルカ | `STAFF` |
| `MONST_DYH_NO76_THROW` | `DYH_NO76` | セラフィー・ルカ | `THROW` |
| `MONST_DYH_NO77_STONE` | `DYH_NO77` | 鉄の竜 | `STONE` |
| `MONST_DYH_NO77_BREATH` | `DYH_NO77` | 鉄の竜 | `BREATH` |
| `MONST_DYH_NO77_SWORD` | `DYH_NO77` | 鉄の竜 | `SWORD` |
| `MONST_DYH_NO78_WAVE` | `DYH_NO78` |  | `WAVE` |
| `MONST_DYH_NO78_AXE` | `DYH_NO78` |  | `AXE` |
| `MONST_DYH_NO79_TAIL` | `DYH_NO79` |  | `TAIL` |
| `MONST_DYH_NO79_WAVE` | `DYH_NO79` |  | `WAVE` |
| `MONST_DYH_NO79_SPEAR` | `DYH_NO79` |  | `SPEAR` |
| `MONST_DYH_NO80_POISON` | `DYH_NO80` |  | `POISON` |
| `MONST_DYH_NO80_BREATH` | `DYH_NO80` |  | `BREATH` |
| `MONST_DYH_NO80_CLAW` | `DYH_NO80` |  | `CLAW` |
| `MONST_DYH_NO80_CLAW_L` | `DYH_NO80` |  | `CLAW_L` |
| `MONST_DYH_NO80_CLAW_L_SMN` | `DYH_NO80` |  | `CLAW_L_SMN` |
| `MONST_DYH_NO80_CLAW_R` | `DYH_NO80` |  | `CLAW_R` |
| `MONST_DYH_NO80_CLAW_R_SMN` | `DYH_NO80` |  | `CLAW_R_SMN` |
| `MONST_DYH_NO80_SMASH` | `DYH_NO80` |  | `SMASH` |
| `MONST_DYH_NO81_BOMB` | `DYH_NO81` |  | `BOMB` |
| `MONST_DYH_NO81_BOMB2` | `DYH_NO81` |  | `BOMB2` |
| `MONST_DYH_NO81_BOMB_MAGIC` | `DYH_NO81` |  | `BOMB_MAGIC` |
| `MONST_DYH_NO81_BOMB_MAGIC2` | `DYH_NO81` |  | `BOMB_MAGIC2` |
| `MONST_DYH_NO81_GAS` | `DYH_NO81` |  | `GAS` |
| `MONST_DYH_NO81_HOLYTORNADO` | `DYH_NO81` |  | `HOLYTORNADO` |
| `MONST_DYH_NO81_POWER_DOWN` | `DYH_NO81` |  | `POWER_DOWN` |
| `MONST_DYH_NO81_THUNDER_AREA` | `DYH_NO81` |  | `THUNDER_AREA` |
| `MONST_DYH_NO81_THUNDER_AREA1` | `DYH_NO81` |  | `THUNDER_AREA1` |
| `MONST_DYH_NO81_THUNDER_AREA3` | `DYH_NO81` |  | `THUNDER_AREA3` |
| `MONST_DYH_NO81_WAVE` | `DYH_NO81` |  | `WAVE` |
| `MONST_DYH_NO81_BLAST` | `DYH_NO81` |  | `BLAST` |
| `MONST_DYH_NO81_BLAST_ICE` | `DYH_NO81` |  | `BLAST_ICE` |
| `MONST_DYH_NO81_CHARGE` | `DYH_NO81` |  | `CHARGE` |
| `MONST_DYH_NO81_SLIDING` | `DYH_NO81` |  | `SLIDING` |
| `MONST_DYH_NO81_SWORD` | `DYH_NO81` |  | `SWORD` |
| `MONST_DYH_NO82_CHAIN` | `DYH_NO82` |  | `CHAIN` |
| `MONST_DYH_NO82_HOOKATTACK` | `DYH_NO82` |  | `HOOKATTACK` |
| `MONST_DYH_NO82_SHOCKWAVE01` | `DYH_NO82` |  | `SHOCKWAVE01` |
| `MONST_DYH_NO82_SHOCKWAVE02` | `DYH_NO82` |  | `SHOCKWAVE02` |
| `MONST_DYH_NO83_BOMB` | `DYH_NO83` |  | `BOMB` |
| `MONST_DYH_NO83_BEAT` | `DYH_NO83` |  | `BEAT` |
| `MONST_DYH_NO83_SLIDING` | `DYH_NO83` |  | `SLIDING` |
| `MONST_DYH_NO83_SWORD` | `DYH_NO83` |  | `SWORD` |
| `MONST_DYH_NO84_GUN` | `DYH_NO84` |  | `GUN` |
| `MONST_DYH_NO84_BEAT` | `DYH_NO84` |  | `BEAT` |
| `MONST_DYH_NO84_SWORD` | `DYH_NO84` |  | `SWORD` |
| `MONST_DYH_NO84_SWORD_1` | `DYH_NO84` |  | `SWORD_1` |
| `MONST_DYH_NO85_BEAT1` | `DYH_NO85` |  | `BEAT1` |
| `MONST_DYH_NO85_BEAT2` | `DYH_NO85` |  | `BEAT2` |
| `MONST_DYH_NO86_WATER` | `DYH_NO86` |  | `WATER` |
| `MONST_DYH_NO86_BITE` | `DYH_NO86` |  | `BITE` |
| `MONST_DYH_NO86_SWORD` | `DYH_NO86` |  | `SWORD` |
| `MONST_DYH_NO86_TAIL` | `DYH_NO86` |  | `TAIL` |
| `MONST_DYH_NO87_SOUND` | `DYH_NO87` |  | `SOUND` |
| `MONST_DYH_NO87_BREATH` | `DYH_NO87` |  | `BREATH` |
| `MONST_DYH_NO87_TRUMPET` | `DYH_NO87` |  | `TRUMPET` |
| `MONST_DYH_NO88_CHARGE01` | `DYH_NO88` |  | `CHARGE01` |
| `MONST_DYH_NO88_CHARGE02` | `DYH_NO88` |  | `CHARGE02` |
| `MONST_DYH_WA09_BLAST` | `DYH_WA09` |  | `BLAST` |
| `MONST_DYH_WA09_SMASH` | `DYH_WA09` |  | `SMASH` |
| `MONST_DYH_WI01_FIRE` | `DYH_WI01` | デーモン | `FIRE` |
| `MONST_DYH_WI01_ICE` | `DYH_WI01` | デーモン | `ICE` |
| `MONST_DYH_WI01_SILENT` | `DYH_WI01` | デーモン | `SILENT` |
| `MONST_DYH_WI01_THUNDER` | `DYH_WI01` | デーモン | `THUNDER` |
| `MONST_DYH_WI01_CHARGE` | `DYH_WI01` | デーモン | `CHARGE` |
| `MONST_DYH_WI01_CLAW_L` | `DYH_WI01` | デーモン | `CLAW_L` |
| `MONST_DYH_WI02_CHARGE` | `DYH_WI02` | グレーターデーモン | `CHARGE` |
| `MONST_DYH_WI02_CLAW_L` | `DYH_WI02` | グレーターデーモン | `CLAW_L` |
| `MONST_DYH_WI02_CLAW_R` | `DYH_WI02` | グレーターデーモン | `CLAW_R` |
| `MONST_DYH_WI03_ANOTHERDIMENSION` | `DYH_WI03` | インプ | `ANOTHERDIMENSION` |
| `MONST_DYH_WI03_BERSERKER` | `DYH_WI03` | インプ | `BERSERKER` |
| `MONST_DYH_WI03_FIRE` | `DYH_WI03` | インプ | `FIRE` |
| `MONST_DYH_WI03_FIRE_VENOM` | `DYH_WI03` | インプ | `FIRE_VENOM` |
| `MONST_DYH_WI03_GRAVITYBALL` | `DYH_WI03` | インプ | `GRAVITYBALL` |
| `MONST_DYH_WI03_ICE` | `DYH_WI03` | インプ | `ICE` |
| `MONST_DYH_WI03_LIGHTBALL` | `DYH_WI03` | インプ | `LIGHTBALL` |
| `MONST_DYH_WI03_PANIC` | `DYH_WI03` | インプ | `PANIC` |
| `MONST_DYH_WI03_PRESSURECANNON` | `DYH_WI03` | インプ | `PRESSURECANNON` |
| `MONST_DYH_WI03_QUAKE` | `DYH_WI03` | インプ | `QUAKE` |
| `MONST_DYH_WI03_SHADOW` | `DYH_WI03` | インプ | `SHADOW` |
| `MONST_DYH_WI03_SPACE` | `DYH_WI03` | インプ | `SPACE` |
| `MONST_DYH_WI03_STONE` | `DYH_WI03` | インプ | `STONE` |
| `MONST_DYH_WI03_THUNDER` | `DYH_WI03` | インプ | `THUNDER` |
| `MONST_DYH_WI03_WAVE` | `DYH_WI03` | インプ | `WAVE` |
| `MONST_DYH_WI03_CHARGE` | `DYH_WI03` | インプ | `CHARGE` |
| `MONST_DYH_WI03_CLAW_L` | `DYH_WI03` | インプ | `CLAW_L` |
| `MONST_DYH_WI03_CLAW_R` | `DYH_WI03` | インプ | `CLAW_R` |
| `MONST_DYH_WI03_SHOCKWAVE01` | `DYH_WI03` | インプ | `SHOCKWAVE01` |
| `MONST_DYH_WI03_SHOCKWAVE02` | `DYH_WI03` | インプ | `SHOCKWAVE02` |
| `MONST_DYH_WI03_SPACE02` | `DYH_WI03` | インプ | `SPACE02` |
| `MONST_DYH_WI04_CHARGE` | `DYH_WI04` | グレムリン | `CHARGE` |
| `MONST_DYH_WI04_CLAW_L` | `DYH_WI04` | グレムリン | `CLAW_L` |
| `MONST_DYH_WI04_CLAW_R` | `DYH_WI04` | グレムリン | `CLAW_R` |
| `MONST_DYH_WI06_BITE` | `DYH_WI06` | アージェントガーゴイル | `BITE` |
| `MONST_DYH_WI06_CHARGE` | `DYH_WI06` | アージェントガーゴイル | `CHARGE` |
| `MONST_DYH_WI06_CLAW_TE` | `DYH_WI06` | アージェントガーゴイル | `CLAW_TE` |
| `MONST_DYH_WI06_CLAW_TOE` | `DYH_WI06` | アージェントガーゴイル | `CLAW_TOE` |
| `MONST_DYH_WI07_BITE` | `DYH_WI07` | クリムゾンガーゴイル | `BITE` |
| `MONST_DYH_WI07_CLAW_TE` | `DYH_WI07` | クリムゾンガーゴイル | `CLAW_TE` |
| `MONST_DYH_WI07_CLAW_TOE` | `DYH_WI07` | クリムゾンガーゴイル | `CLAW_TOE` |
| `MONST_DYH_WI08_BITE` | `DYH_WI08` | クレイゴーレム | `BITE` |
| `MONST_DYH_WI08_CLAW_TE` | `DYH_WI08` | クレイゴーレム | `CLAW_TE` |
| `MONST_DYH_WI08_CLAW_TOE` | `DYH_WI08` | クレイゴーレム | `CLAW_TOE` |
| `MONST_DYH_WI09_PANIC` | `DYH_WI09` | スケルトンナイトＦ | `PANIC` |
| `MONST_DYH_WI10_THUNDER` | `DYH_WI10` | ギルマン | `THUNDER` |
| `MONST_DYH_WI10_THUNDER_AREA` | `DYH_WI10` | ギルマン | `THUNDER_AREA` |
| `MONST_DYH_WI10_SMASH` | `DYH_WI10` | ギルマン | `SMASH` |
| `MONST_DYH_WI11_CONDITION_CANCEL` | `DYH_WI11` |  | `CONDITION_CANCEL` |
| `MONST_DYH_WI11_MAGICMISSILE` | `DYH_WI11` |  | `MAGICMISSILE` |
| `MONST_DYH_WI11_SKILL_CANCEL` | `DYH_WI11` |  | `SKILL_CANCEL` |
| `MONST_DYH_WI11_SMASH` | `DYH_WI11` |  | `SMASH` |
| `MONST_DYH_WI13_WAVE` | `DYH_WI13` |  | `WAVE` |
| `MONST_DYH_WI13_SWORD` | `DYH_WI13` |  | `SWORD` |
| `MONST_DYH_WI14_BALL` | `DYH_WI14` |  | `BALL` |
| `MONST_DYH_WI14_BARRIER` | `DYH_WI14` |  | `BARRIER` |
| `MONST_DYH_WI14_CURSE` | `DYH_WI14` |  | `CURSE` |
| `MONST_DYH_WI14_FANNEL` | `DYH_WI14` |  | `FANNEL` |
| `MONST_DYH_WI14_FIREDRAGON` | `DYH_WI14` |  | `FIREDRAGON` |
| `MONST_DYH_WI14_FIREWALL` | `DYH_WI14` |  | `FIREWALL` |
| `MONST_DYH_WI14_HOMING` | `DYH_WI14` |  | `HOMING` |
| `MONST_DYH_WI14_ICEDRAGON` | `DYH_WI14` |  | `ICEDRAGON` |
| `MONST_DYH_WI14_METEO` | `DYH_WI14` |  | `METEO` |
| `MONST_DYH_WI14_METEO_EXP` | `DYH_WI14` |  | `METEO_EXP` |
| `MONST_DYH_WI14_OPTION` | `DYH_WI14` |  | `OPTION` |
| `MONST_DYH_WI14_OPTION2` | `DYH_WI14` |  | `OPTION2` |
| `MONST_DYH_WI14_STARFIELD` | `DYH_WI14` |  | `STARFIELD` |
| `MONST_DYH_WI14_THUNDER` | `DYH_WI14` |  | `THUNDER` |
| `MONST_DYH_WI14_BREATH` | `DYH_WI14` |  | `BREATH` |
| `MONST_DYH_WI14_CHARGE` | `DYH_WI14` |  | `CHARGE` |
| `MONST_DYH_WI14_CLAW_L` | `DYH_WI14` |  | `CLAW_L` |
| `MONST_DYH_WI14_CLAW_R` | `DYH_WI14` |  | `CLAW_R` |
| `MONST_DYH_WI14_SHOCKWAVE01` | `DYH_WI14` |  | `SHOCKWAVE01` |
| `MONST_DYH_WI14_SHOCKWAVE02` | `DYH_WI14` |  | `SHOCKWAVE02` |
| `MONST_DYH_WI14_BALL` | `DYH_WI14` |  | `BALL` |

#### DYF — 173件、24モデルコード

| 内部id | モデル | jp | アクション |
|---|---|---|---|
| `MONST_DYF_FI01_CLAW_L` | `DYF_FI01` | Ｇスコーピオン | `CLAW_L` |
| `MONST_DYF_FI01_CLAW_R` | `DYF_FI01` | Ｇスコーピオン | `CLAW_R` |
| `MONST_DYF_FI01_TAIL` | `DYF_FI01` | Ｇスコーピオン | `TAIL` |
| `MONST_DYF_FI02_CLAW_L` | `DYF_FI02` | ヒュージスコーピオン | `CLAW_L` |
| `MONST_DYF_FI02_CLAW_R` | `DYF_FI02` | ヒュージスコーピオン | `CLAW_R` |
| `MONST_DYF_FI02_TAIL` | `DYF_FI02` | ヒュージスコーピオン | `TAIL` |
| `MONST_DYF_FI03_CLAW_L` | `DYF_FI03` | ストーンスコーピオン | `CLAW_L` |
| `MONST_DYF_FI03_CLAW_R` | `DYF_FI03` | ストーンスコーピオン | `CLAW_R` |
| `MONST_DYF_FI03_TAIL` | `DYF_FI03` | ストーンスコーピオン | `TAIL` |
| `MONST_DYF_FI03_TAILARROW` | `DYF_FI03` | ストーンスコーピオン | `TAILARROW` |
| `MONST_DYF_FI04_THREAD` | `DYF_FI04` |  | `THREAD` |
| `MONST_DYF_FI05_STONE_SHIELD` | `DYF_FI05` |  | `STONE_SHIELD` |
| `MONST_DYF_NO01_BITE` | `DYF_NO01` | ダイアーウルフ | `BITE` |
| `MONST_DYF_NO01_BREATH` | `DYF_NO01` | ダイアーウルフ | `BREATH` |
| `MONST_DYF_NO01_CLAW_L` | `DYF_NO01` | ダイアーウルフ | `CLAW_L` |
| `MONST_DYF_NO01_CLAW_R` | `DYF_NO01` | ダイアーウルフ | `CLAW_R` |
| `MONST_DYF_NO02_THUNDER` | `DYF_NO02` | ヘルハウンド | `THUNDER` |
| `MONST_DYF_NO02_1_BITE` | `DYF_NO02` | ヘルハウンド | `BITE` |
| `MONST_DYF_NO02_1_CLAW_L` | `DYF_NO02` | ヘルハウンド | `CLAW_L` |
| `MONST_DYF_NO02_1_CLAW_R` | `DYF_NO02` | ヘルハウンド | `CLAW_R` |
| `MONST_DYF_NO02_2_BITE` | `DYF_NO02` | ヘルハウンド | `BITE` |
| `MONST_DYF_NO02_2_CLAW_L` | `DYF_NO02` | ヘルハウンド | `CLAW_L` |
| `MONST_DYF_NO02_2_CLAW_R` | `DYF_NO02` | ヘルハウンド | `CLAW_R` |
| `MONST_DYF_NO02_BITE` | `DYF_NO02` | ヘルハウンド | `BITE` |
| `MONST_DYF_NO02_CLAW_L` | `DYF_NO02` | ヘルハウンド | `CLAW_L` |
| `MONST_DYF_NO02_CLAW_R` | `DYF_NO02` | ヘルハウンド | `CLAW_R` |
| `MONST_DYF_NO03_CHARGE` | `DYF_NO03` | ブルータルブル | `CHARGE` |
| `MONST_DYF_NO03_HEAD` | `DYF_NO03` | ブルータルブル | `HEAD` |
| `MONST_DYF_NO04_CHARGE` | `DYF_NO04` | ブラニーブル | `CHARGE` |
| `MONST_DYF_NO04_HEAD` | `DYF_NO04` | ブラニーブル | `HEAD` |
| `MONST_DYF_NO05_CHARGE` | `DYF_NO05` | エクスプロージョンＳ | `CHARGE` |
| `MONST_DYF_NO05_HEAD` | `DYF_NO05` | エクスプロージョンＳ | `HEAD` |
| `MONST_DYF_NO06_BOW` | `DYF_NO06` | スチームバトラー | `BOW` |
| `MONST_DYF_NO06_FOOT` | `DYF_NO06` | スチームバトラー | `FOOT` |
| `MONST_DYF_NO06_QUIV` | `DYF_NO06` | スチームバトラー | `QUIV` |
| `MONST_DYF_NO06_SHOCKWAVE` | `DYF_NO06` | スチームバトラー | `SHOCKWAVE` |
| `MONST_DYF_NO07_AXE` | `DYF_NO07` | アーマードフロッグ | `AXE` |
| `MONST_DYF_NO07_FOOT` | `DYF_NO07` | アーマードフロッグ | `FOOT` |
| `MONST_DYF_NO07_SHIELD` | `DYF_NO07` | アーマードフロッグ | `SHIELD` |
| `MONST_DYF_NO07_SHOCKWAVE` | `DYF_NO07` | アーマードフロッグ | `SHOCKWAVE` |
| `MONST_DYF_NO08_FOOT` | `DYF_NO08` | ガーディアンフロッグ | `FOOT` |
| `MONST_DYF_NO08_SHIELD` | `DYF_NO08` | ガーディアンフロッグ | `SHIELD` |
| `MONST_DYF_NO08_SHOCKWAVE` | `DYF_NO08` | ガーディアンフロッグ | `SHOCKWAVE` |
| `MONST_DYF_NO08_STEAM` | `DYF_NO08` | ガーディアンフロッグ | `STEAM` |
| `MONST_DYF_NO08_SWORD` | `DYF_NO08` | ガーディアンフロッグ | `SWORD` |
| `MONST_DYF_NO11_SHELL` | `DYF_NO11` |  | `SHELL` |
| `MONST_DYF_NO11_BITE` | `DYF_NO11` |  | `BITE` |
| `MONST_DYF_NO11_BREATH` | `DYF_NO11` |  | `BREATH` |
| `MONST_DYF_NO11_SHOCKWAVE` | `DYF_NO11` |  | `SHOCKWAVE` |
| `MONST_DYF_NO12_MISSILE` | `DYF_NO12` |  | `MISSILE` |
| `MONST_DYF_NO12_MISSILE_FAST` | `DYF_NO12` |  | `MISSILE_FAST` |
| `MONST_DYF_NO12_CHARGE` | `DYF_NO12` |  | `CHARGE` |
| `MONST_DYF_NO12_FOOTSTAMP` | `DYF_NO12` |  | `FOOTSTAMP` |
| `MONST_DYF_NO12_FOOTSTAMP02` | `DYF_NO12` |  | `FOOTSTAMP02` |
| `MONST_DYF_NO12_SHOCKWAVE` | `DYF_NO12` |  | `SHOCKWAVE` |
| `MONST_DYF_NO12_STEAM` | `DYF_NO12` |  | `STEAM` |
| `MONST_DYF_WA08_FIRE` | `DYF_WA08` |  | `FIRE` |
| `MONST_DYF_WI01_BARRIER` | `DYF_WI01` | ホワイトドラゴン | `BARRIER` |
| `MONST_DYF_WI01_FIREBALL` | `DYF_WI01` | ホワイトドラゴン | `FIREBALL` |
| `MONST_DYF_WI01_HEAL` | `DYF_WI01` | ホワイトドラゴン | `HEAL` |
| `MONST_DYF_WI01_THUNDER` | `DYF_WI01` | ホワイトドラゴン | `THUNDER` |
| `MONST_DYF_WI01_THUNDER02` | `DYF_WI01` | ホワイトドラゴン | `THUNDER02` |
| `MONST_DYF_WI01_BREATH` | `DYF_WI01` | ホワイトドラゴン | `BREATH` |
| `MONST_DYF_WI01_CHARGE` | `DYF_WI01` | ホワイトドラゴン | `CHARGE` |
| `MONST_DYF_WI01_CLAW` | `DYF_WI01` | ホワイトドラゴン | `CLAW` |
| `MONST_DYF_WI01_SHOCKWAVE01` | `DYF_WI01` | ホワイトドラゴン | `SHOCKWAVE01` |
| `MONST_DYF_WI01_SHOCKWAVE02` | `DYF_WI01` | ホワイトドラゴン | `SHOCKWAVE02` |
| `MONST_DYF_WI01_SHOCKWAVE03` | `DYF_WI01` | ホワイトドラゴン | `SHOCKWAVE03` |
| `MONST_DYF_WI01_TAIL` | `DYF_WI01` | ホワイトドラゴン | `TAIL` |
| `MONST_DYF_WI02_FIREBALL` | `DYF_WI02` | ブラックドラゴン | `FIREBALL` |
| `MONST_DYF_WI02_FIREBALL_02` | `DYF_WI02` | ブラックドラゴン | `FIREBALL_02` |
| `MONST_DYF_WI02_ICE_TOWER02` | `DYF_WI02` | ブラックドラゴン | `ICE_TOWER02` |
| `MONST_DYF_WI02_TRAP_ICE` | `DYF_WI02` | ブラックドラゴン | `TRAP_ICE` |
| `MONST_DYF_WI02_BLAST` | `DYF_WI02` | ブラックドラゴン | `BLAST` |
| `MONST_DYF_WI02_BLAST_AIR` | `DYF_WI02` | ブラックドラゴン | `BLAST_AIR` |
| `MONST_DYF_WI02_BLAST_ICE` | `DYF_WI02` | ブラックドラゴン | `BLAST_ICE` |
| `MONST_DYF_WI02_BREATH` | `DYF_WI02` | ブラックドラゴン | `BREATH` |
| `MONST_DYF_WI02_CHARGE` | `DYF_WI02` | ブラックドラゴン | `CHARGE` |
| `MONST_DYF_WI02_CLAW` | `DYF_WI02` | ブラックドラゴン | `CLAW` |
| `MONST_DYF_WI02_SHOCKWAVE01` | `DYF_WI02` | ブラックドラゴン | `SHOCKWAVE01` |
| `MONST_DYF_WI02_SHOCKWAVE02` | `DYF_WI02` | ブラックドラゴン | `SHOCKWAVE02` |
| `MONST_DYF_WI02_SHOCKWAVE03` | `DYF_WI02` | ブラックドラゴン | `SHOCKWAVE03` |
| `MONST_DYF_WI02_SHOCKWAVE04` | `DYF_WI02` | ブラックドラゴン | `SHOCKWAVE04` |
| `MONST_DYF_WI02_TAIL` | `DYF_WI02` | ブラックドラゴン | `TAIL` |
| `MONST_DYF_WI03_02_FIREBALL` | `DYF_WI03` | レッドドラゴン | `FIREBALL` |
| `MONST_DYF_WI03_02_GRAVITYFIELD` | `DYF_WI03` | レッドドラゴン | `GRAVITYFIELD` |
| `MONST_DYF_WI03_02_POISON` | `DYF_WI03` | レッドドラゴン | `POISON` |
| `MONST_DYF_WI03_02_PRESSURECANNON` | `DYF_WI03` | レッドドラゴン | `PRESSURECANNON` |
| `MONST_DYF_WI03_02_SLEEP` | `DYF_WI03` | レッドドラゴン | `SLEEP` |
| `MONST_DYF_WI03_02_VENOM` | `DYF_WI03` | レッドドラゴン | `VENOM` |
| `MONST_DYF_WI03_1_1_FIREBALL` | `DYF_WI03` | レッドドラゴン | `1_FIREBALL` |
| `MONST_DYF_WI03_1_1_GRAVITYFIELD` | `DYF_WI03` | レッドドラゴン | `1_GRAVITYFIELD` |
| `MONST_DYF_WI03_1_1_VENOM` | `DYF_WI03` | レッドドラゴン | `1_VENOM` |
| `MONST_DYF_WI03_1_FIREBALL` | `DYF_WI03` | レッドドラゴン | `FIREBALL` |
| `MONST_DYF_WI03_1_GRAVITYFIELD` | `DYF_WI03` | レッドドラゴン | `GRAVITYFIELD` |
| `MONST_DYF_WI03_1_PRESSURECANNON` | `DYF_WI03` | レッドドラゴン | `PRESSURECANNON` |
| `MONST_DYF_WI03_1_VENOM` | `DYF_WI03` | レッドドラゴン | `VENOM` |
| `MONST_DYF_WI03_FIREBALL` | `DYF_WI03` | レッドドラゴン | `FIREBALL` |
| `MONST_DYF_WI03_GRAVITYFIELD` | `DYF_WI03` | レッドドラゴン | `GRAVITYFIELD` |
| `MONST_DYF_WI03_PRESSURECANNON` | `DYF_WI03` | レッドドラゴン | `PRESSURECANNON` |
| `MONST_DYF_WI03_VENOM` | `DYF_WI03` | レッドドラゴン | `VENOM` |
| `MONST_DYF_WI03_1_BREATH` | `DYF_WI03` | レッドドラゴン | `BREATH` |
| `MONST_DYF_WI03_1_CHARGE` | `DYF_WI03` | レッドドラゴン | `CHARGE` |
| `MONST_DYF_WI03_1_CLAW` | `DYF_WI03` | レッドドラゴン | `CLAW` |
| `MONST_DYF_WI03_1_SHOCKWAVE` | `DYF_WI03` | レッドドラゴン | `SHOCKWAVE` |
| `MONST_DYF_WI03_1_SHOCKWAVE03` | `DYF_WI03` | レッドドラゴン | `SHOCKWAVE03` |
| `MONST_DYF_WI03_1_TAIL` | `DYF_WI03` | レッドドラゴン | `TAIL` |
| `MONST_DYF_WI03_2_BREATH` | `DYF_WI03` | レッドドラゴン | `BREATH` |
| `MONST_DYF_WI03_BITE` | `DYF_WI03` | レッドドラゴン | `BITE` |
| `MONST_DYF_WI03_BREATH` | `DYF_WI03` | レッドドラゴン | `BREATH` |
| `MONST_DYF_WI03_CHARGE` | `DYF_WI03` | レッドドラゴン | `CHARGE` |
| `MONST_DYF_WI03_CLAW` | `DYF_WI03` | レッドドラゴン | `CLAW` |
| `MONST_DYF_WI03_SHOCKWAVE` | `DYF_WI03` | レッドドラゴン | `SHOCKWAVE` |
| `MONST_DYF_WI03_SHOCKWAVE03` | `DYF_WI03` | レッドドラゴン | `SHOCKWAVE03` |
| `MONST_DYF_WI03_SLEEPBREATH` | `DYF_WI03` | レッドドラゴン | `SLEEPBREATH` |
| `MONST_DYF_WI03_TAIL` | `DYF_WI03` | レッドドラゴン | `TAIL` |
| `MONST_DYF_WI04_1_GRAVITYFIELD` | `DYF_WI04` | ヴァンパイア | `GRAVITYFIELD` |
| `MONST_DYF_WI04_BALL` | `DYF_WI04` | ヴァンパイア | `BALL` |
| `MONST_DYF_WI04_FIRE` | `DYF_WI04` | ヴァンパイア | `FIRE` |
| `MONST_DYF_WI04_FIREWALL` | `DYF_WI04` | ヴァンパイア | `FIREWALL` |
| `MONST_DYF_WI04_FIREWAVE` | `DYF_WI04` | ヴァンパイア | `FIREWAVE` |
| `MONST_DYF_WI04_FIRE_VENOM` | `DYF_WI04` | ヴァンパイア | `FIRE_VENOM` |
| `MONST_DYF_WI04_PILLAR` | `DYF_WI04` | ヴァンパイア | `PILLAR` |
| `MONST_DYF_WI04_BREATH` | `DYF_WI04` | ヴァンパイア | `BREATH` |
| `MONST_DYF_WI04_CHARGE` | `DYF_WI04` | ヴァンパイア | `CHARGE` |
| `MONST_DYF_WI04_CLAW` | `DYF_WI04` | ヴァンパイア | `CLAW` |
| `MONST_DYF_WI04_SHOCKWAVE` | `DYF_WI04` | ヴァンパイア | `SHOCKWAVE` |
| `MONST_DYF_WI04_SHOCKWAVE02` | `DYF_WI04` | ヴァンパイア | `SHOCKWAVE02` |
| `MONST_DYF_WI04_TAIL` | `DYF_WI04` | ヴァンパイア | `TAIL` |
| `MONST_DYF_WI05_ICE` | `DYF_WI05` | トロル・改 | `ICE` |
| `MONST_DYF_WI05_ICE_SHIELD` | `DYF_WI05` | トロル・改 | `ICE_SHIELD` |
| `MONST_DYF_WI05_ICE_TOWER02` | `DYF_WI05` | トロル・改 | `ICE_TOWER02` |
| `MONST_DYF_WI05_TRAP_ICE` | `DYF_WI05` | トロル・改 | `TRAP_ICE` |
| `MONST_DYF_WI05_BLAST_ICE` | `DYF_WI05` | トロル・改 | `BLAST_ICE` |
| `MONST_DYF_WI05_BREATH` | `DYF_WI05` | トロル・改 | `BREATH` |
| `MONST_DYF_WI05_CHARGE` | `DYF_WI05` | トロル・改 | `CHARGE` |
| `MONST_DYF_WI05_CLAW` | `DYF_WI05` | トロル・改 | `CLAW` |
| `MONST_DYF_WI05_ICE_TOWER` | `DYF_WI05` | トロル・改 | `ICE_TOWER` |
| `MONST_DYF_WI05_SHOCKWAVE01` | `DYF_WI05` | トロル・改 | `SHOCKWAVE01` |
| `MONST_DYF_WI05_SHOCKWAVE03` | `DYF_WI05` | トロル・改 | `SHOCKWAVE03` |
| `MONST_DYF_WI05_TAIL` | `DYF_WI05` | トロル・改 | `TAIL` |
| `MONST_DYF_WI06_FIREWALL` | `DYF_WI06` |  | `FIREWALL` |
| `MONST_DYF_WI06_GAS` | `DYF_WI06` |  | `GAS` |
| `MONST_DYF_WI06_NEEDLE` | `DYF_WI06` |  | `NEEDLE` |
| `MONST_DYF_WI06_TRAP_NEEDLE` | `DYF_WI06` |  | `TRAP_NEEDLE` |
| `MONST_DYF_WI06_BLAST` | `DYF_WI06` |  | `BLAST` |
| `MONST_DYF_WI06_BLAST_DECLINE` | `DYF_WI06` |  | `BLAST_DECLINE` |
| `MONST_DYF_WI06_CHARGE` | `DYF_WI06` |  | `CHARGE` |
| `MONST_DYF_WI06_CLAW` | `DYF_WI06` |  | `CLAW` |
| `MONST_DYF_WI06_CLAW_BLAST` | `DYF_WI06` |  | `CLAW_BLAST` |
| `MONST_DYF_WI06_CLAW_L` | `DYF_WI06` |  | `CLAW_L` |
| `MONST_DYF_WI06_SHOCKWAVE01` | `DYF_WI06` |  | `SHOCKWAVE01` |
| `MONST_DYF_WI06_SHOCKWAVE02` | `DYF_WI06` |  | `SHOCKWAVE02` |
| `MONST_DYF_WI06_SHOCKWAVE04` | `DYF_WI06` |  | `SHOCKWAVE04` |
| `MONST_DYF_WI06_TAIL` | `DYF_WI06` |  | `TAIL` |
| `MONST_DYF_WI06_WING` | `DYF_WI06` |  | `WING` |
| `MONST_DYF_WI06_WINGSHOCK_L` | `DYF_WI06` |  | `WINGSHOCK_L` |
| `MONST_DYF_WI06_WINGSHOCK_R` | `DYF_WI06` |  | `WINGSHOCK_R` |
| `MONST_DYF_WI09_FIREBALL` | `DYF_WI09` |  | `FIREBALL` |
| `MONST_DYF_WI09_FIREBALL_02` | `DYF_WI09` |  | `FIREBALL_02` |
| `MONST_DYF_WI09_FIRE_VENOM` | `DYF_WI09` |  | `FIRE_VENOM` |
| `MONST_DYF_WI09_BREATH` | `DYF_WI09` |  | `BREATH` |
| `MONST_DYF_WI09_CHARGE` | `DYF_WI09` |  | `CHARGE` |
| `MONST_DYF_WI09_SAVAGEBODY` | `DYF_WI09` |  | `SAVAGEBODY` |
| `MONST_DYF_WI09_SHOCKWAVE02` | `DYF_WI09` |  | `SHOCKWAVE02` |
| `MONST_DYF_WI09_SHOCKWAVE03` | `DYF_WI09` |  | `SHOCKWAVE03` |
| `MONST_DYF_WI09_TAIL` | `DYF_WI09` |  | `TAIL` |
| `MONST_DYF_WI10_FIRE` | `DYF_WI10` |  | `FIRE` |
| `MONST_DYF_WI10_HAND_L` | `DYF_WI10` |  | `HAND_L` |
| `MONST_DYF_WI10_HAND_R` | `DYF_WI10` |  | `HAND_R` |
| `MONST_DYF_WI10_SHOCKWAVE` | `DYF_WI10` |  | `SHOCKWAVE` |
| `MONST_DYF_WI10_SHOCKWAVE` | `DYF_WI10` |  | `SHOCKWAVE` |
| `MONST_DYF_WI10_SHOCKWAVE` | `DYF_WI10` |  | `SHOCKWAVE` |

#### DYB — 63件、13モデルコード

| 内部id | モデル | jp | アクション |
|---|---|---|---|
| `MONST_DYB_NO01_BITE` | `DYB_NO01` | バット | `BITE` |
| `MONST_DYB_NO01_CHARGE` | `DYB_NO01` | バット | `CHARGE` |
| `MONST_DYB_NO02_2_BREATH` | `DYB_NO02` | ジャイアントバット | `BREATH` |
| `MONST_DYB_NO02_BITE` | `DYB_NO02` | ジャイアントバット | `BITE` |
| `MONST_DYB_NO02_BREATH` | `DYB_NO02` | ジャイアントバット | `BREATH` |
| `MONST_DYB_NO02_CHARGE` | `DYB_NO02` | ジャイアントバット | `CHARGE` |
| `MONST_DYB_NO03_BITE` | `DYB_NO03` | バンパイアバット | `BITE` |
| `MONST_DYB_NO03_CHARGE` | `DYB_NO03` | バンパイアバット | `CHARGE` |
| `MONST_DYB_NO04_BITE` | `DYB_NO04` | コカトリス | `BITE` |
| `MONST_DYB_NO04_BREATH` | `DYB_NO04` | コカトリス | `BREATH` |
| `MONST_DYB_NO04_CHARGE` | `DYB_NO04` | コカトリス | `CHARGE` |
| `MONST_DYB_NO05_BITE` | `DYB_NO05` | トップヘヴィコカトリス | `BITE` |
| `MONST_DYB_NO05_BLAST` | `DYB_NO05` | トップヘヴィコカトリス | `BLAST` |
| `MONST_DYB_NO05_BREATH` | `DYB_NO05` | トップヘヴィコカトリス | `BREATH` |
| `MONST_DYB_NO05_CHARGE` | `DYB_NO05` | トップヘヴィコカトリス | `CHARGE` |
| `MONST_DYB_NO06_STONE` | `DYB_NO06` | エディブルコック | `STONE` |
| `MONST_DYB_NO06_PECK1` | `DYB_NO06` | エディブルコック | `PECK1` |
| `MONST_DYB_NO06_PECK2` | `DYB_NO06` | エディブルコック | `PECK2` |
| `MONST_DYB_WA01_FIREBALL` | `DYB_WA01` | スチームシューター | `FIREBALL` |
| `MONST_DYB_WA01_POISONBALL` | `DYB_WA01` | スチームシューター | `POISONBALL` |
| `MONST_DYB_WA01_BLAST` | `DYB_WA01` | スチームシューター | `BLAST` |
| `MONST_DYB_WA01_BREATH` | `DYB_WA01` | スチームシューター | `BREATH` |
| `MONST_DYB_WA01_CHARGE` | `DYB_WA01` | スチームシューター | `CHARGE` |
| `MONST_DYB_WA01_CLAW_L` | `DYB_WA01` | スチームシューター | `CLAW_L` |
| `MONST_DYB_WA01_CLAW_R` | `DYB_WA01` | スチームシューター | `CLAW_R` |
| `MONST_DYB_WA01_SHOCKWAVE` | `DYB_WA01` | スチームシューター | `SHOCKWAVE` |
| `MONST_DYB_WA01_TAIL` | `DYB_WA01` | スチームシューター | `TAIL` |
| `MONST_DYB_WA02_THUNDER` | `DYB_WA02` | ガイトラッシュ | `THUNDER` |
| `MONST_DYB_WA02_THUNDER02` | `DYB_WA02` | ガイトラッシュ | `THUNDER02` |
| `MONST_DYB_WA02_BLAST` | `DYB_WA02` | ガイトラッシュ | `BLAST` |
| `MONST_DYB_WA02_BREATH` | `DYB_WA02` | ガイトラッシュ | `BREATH` |
| `MONST_DYB_WA02_CHARGE` | `DYB_WA02` | ガイトラッシュ | `CHARGE` |
| `MONST_DYB_WA02_CLAW_L` | `DYB_WA02` | ガイトラッシュ | `CLAW_L` |
| `MONST_DYB_WA02_CLAW_R` | `DYB_WA02` | ガイトラッシュ | `CLAW_R` |
| `MONST_DYB_WA02_SHOCKWAVE` | `DYB_WA02` | ガイトラッシュ | `SHOCKWAVE` |
| `MONST_DYB_WA02_TAIL` | `DYB_WA02` | ガイトラッシュ | `TAIL` |
| `MONST_DYB_WA03_FIRE` | `DYB_WA03` |  | `FIRE` |
| `MONST_DYB_WA03_BITE` | `DYB_WA03` |  | `BITE` |
| `MONST_DYB_WA03_CHARGE` | `DYB_WA03` |  | `CHARGE` |
| `MONST_DYB_WA05_FIREBALL` | `DYB_WA05` |  | `FIREBALL` |
| `MONST_DYB_WA05_NAPALM` | `DYB_WA05` |  | `NAPALM` |
| `MONST_DYB_WA05_POISONBALL` | `DYB_WA05` |  | `POISONBALL` |
| `MONST_DYB_WA05_BLAST` | `DYB_WA05` |  | `BLAST` |
| `MONST_DYB_WA05_BREATH` | `DYB_WA05` |  | `BREATH` |
| `MONST_DYB_WA05_CHARGE` | `DYB_WA05` |  | `CHARGE` |
| `MONST_DYB_WA05_CLAW_L` | `DYB_WA05` |  | `CLAW_L` |
| `MONST_DYB_WA05_CLAW_R` | `DYB_WA05` |  | `CLAW_R` |
| `MONST_DYB_WA05_SHOCKWAVE` | `DYB_WA05` |  | `SHOCKWAVE` |
| `MONST_DYB_WA05_TAIL` | `DYB_WA05` |  | `TAIL` |
| `MONST_DYB_WA07_FIRE` | `DYB_WA07` |  | `FIRE` |
| `MONST_DYB_WA07_BITE` | `DYB_WA07` |  | `BITE` |
| `MONST_DYB_WA07_BREATH` | `DYB_WA07` |  | `BREATH` |
| `MONST_DYB_WA07_CHARGE` | `DYB_WA07` |  | `CHARGE` |
| `MONST_DYB_WA07_ROAR` | `DYB_WA07` |  | `ROAR` |
| `MONST_DYB_WA08_BREATH` | `DYB_WA08` |  | `BREATH` |
| `MONST_DYB_WA08_CHARGE` | `DYB_WA08` |  | `CHARGE` |
| `MONST_DYB_WA08_SHOCKWAVE` | `DYB_WA08` |  | `SHOCKWAVE` |
| `MONST_DYB_WA10_THUNDER` | `DYB_WA10` |  | `THUNDER` |
| `MONST_DYB_WA10_THUNDER_AREA3` | `DYB_WA10` |  | `THUNDER_AREA3` |
| `MONST_DYB_WA10_BLAST` | `DYB_WA10` |  | `BLAST` |
| `MONST_DYB_WA10_BREATH` | `DYB_WA10` |  | `BREATH` |
| `MONST_DYB_WA10_CHARGE` | `DYB_WA10` |  | `CHARGE` |
| `MONST_DYB_WA10_SHOCKWAVE` | `DYB_WA10` |  | `SHOCKWAVE` |

#### DYO — 22件、9モデルコード

| 内部id | モデル | jp | アクション |
|---|---|---|---|
| `MONST_DYO_PL01_IVY` | `DYO_PL01` | リグナスファイター | `IVY` |
| `MONST_DYO_PL01_HAND` | `DYO_PL01` | リグナスファイター | `HAND` |
| `MONST_DYO_PL02_IVY` | `DYO_PL02` | リビングソーン | `IVY` |
| `MONST_DYO_PL02_HAND` | `DYO_PL02` | リビングソーン | `HAND` |
| `MONST_DYO_PL03_IVY` | `DYO_PL03` | シュリーカー | `IVY` |
| `MONST_DYO_PL03_HAND` | `DYO_PL03` | シュリーカー | `HAND` |
| `MONST_DYO_ST01_POISON` | `DYO_ST01` | ファンガス | `POISON` |
| `MONST_DYO_ST01_CHARGE` | `DYO_ST01` | ファンガス | `CHARGE` |
| `MONST_DYO_ST02_POISON` | `DYO_ST02` | スポア | `POISON` |
| `MONST_DYO_ST02_CHARGE` | `DYO_ST02` | スポア | `CHARGE` |
| `MONST_DYO_ST03_POISON` | `DYO_ST03` | トロル | `POISON` |
| `MONST_DYO_ST03_CHARGE` | `DYO_ST03` | トロル | `CHARGE` |
| `MONST_DYO_ST04_MAGICMISSILE` | `DYO_ST04` |  | `MAGICMISSILE` |
| `MONST_DYO_ST04_SHOCKWAVE` | `DYO_ST04` |  | `SHOCKWAVE` |
| `MONST_DYO_ST05_GRASP` | `DYO_ST05` |  | `GRASP` |
| `MONST_DYO_ST05_SHOCKWAVE` | `DYO_ST05` |  | `SHOCKWAVE` |
| `MONST_DYO_ST05_SMASH` | `DYO_ST05` |  | `SMASH` |
| `MONST_DYO_ST05_STRIKE` | `DYO_ST05` |  | `STRIKE` |
| `MONST_DYO_ST06_GRASP` | `DYO_ST06` |  | `GRASP` |
| `MONST_DYO_ST06_SHOCKWAVE` | `DYO_ST06` |  | `SHOCKWAVE` |
| `MONST_DYO_ST06_SMASH` | `DYO_ST06` |  | `SMASH` |
| `MONST_DYO_ST06_STRIKE` | `DYO_ST06` |  | `STRIKE` |

#### DYS — 12件、6モデルコード

| 内部id | モデル | jp | アクション |
|---|---|---|---|
| `MONST_DYS_NO01_BITE` | `DYS_NO01` | スネーク | `BITE` |
| `MONST_DYS_NO01_CHARGE` | `DYS_NO01` | スネーク | `CHARGE` |
| `MONST_DYS_NO02_BITE` | `DYS_NO02` | バイパー | `BITE` |
| `MONST_DYS_NO02_CHARGE` | `DYS_NO02` | バイパー | `CHARGE` |
| `MONST_DYS_NO03_BITE` | `DYS_NO03` | コブラ | `BITE` |
| `MONST_DYS_NO03_CHARGE` | `DYS_NO03` | コブラ | `CHARGE` |
| `MONST_DYS_NO04_BITE` | `DYS_NO04` | アナコンダ | `BITE` |
| `MONST_DYS_NO04_CHARGE` | `DYS_NO04` | アナコンダ | `CHARGE` |
| `MONST_DYS_NO05_BITE` | `DYS_NO05` | パイソン | `BITE` |
| `MONST_DYS_NO05_CHARGE` | `DYS_NO05` | パイソン | `CHARGE` |
| `MONST_DYS_NO06_BITE` | `DYS_NO06` |  | `BITE` |
| `MONST_DYS_NO06_CHARGE` | `DYS_NO06` |  | `CHARGE` |

#### DNO — 7件、3モデルコード

| 内部id | モデル | jp | アクション |
|---|---|---|---|
| `MONST_DNO_NO06_POISON` | `DNO_NO06` | スライミミック | `POISON` |
| `MONST_DNO_NO06_BITE` | `DNO_NO06` | スライミミック | `BITE` |
| `MONST_DNO_NO07_POISON` | `DNO_NO07` | スチームナイト | `POISON` |
| `MONST_DNO_NO07_BITE` | `DNO_NO07` | スチームナイト | `BITE` |
| `MONST_DNO_NO09_DARK_NOVA` | `DNO_NO09` |  | `DARK_NOVA` |
| `MONST_DNO_NO09_MAGICMISSILE` | `DNO_NO09` |  | `MAGICMISSILE` |
| `MONST_DNO_NO09_BITE` | `DNO_NO09` |  | `BITE` |

### 非クリーチャーレコード

#### `MONST_ARMOR_*` — 212件 — モンスターモデルに付く鎧ビジュアル

| 内部id | モデル | jp | バリアント |
|---|---|---|---|
| `MONST_ARMOR_DNO_NO01` | `DNO_NO01` | ウィル・オ・ウィスプＢ |  |
| `MONST_ARMOR_DNO_NO02` | `DNO_NO02` | レッサーデーモン |  |
| `MONST_ARMOR_DNO_NO03` | `DNO_NO03` | ラバストーン |  |
| `MONST_ARMOR_DNO_NO04` | `DNO_NO04` | アイスストーン |  |
| `MONST_ARMOR_DNO_NO05` | `DNO_NO05` | シーフ |  |
| `MONST_ARMOR_DNO_NO06` | `DNO_NO06` | スライミミック |  |
| `MONST_ARMOR_DNO_NO07` | `DNO_NO07` | スチームナイト |  |
| `MONST_ARMOR_DNO_NO09` | `DNO_NO09` |  |  |
| `MONST_ARMOR_DYB_NO01` | `DYB_NO01` | バット |  |
| `MONST_ARMOR_DYB_NO02` | `DYB_NO02` | ジャイアントバット |  |
| `MONST_ARMOR_DYB_NO03` | `DYB_NO03` | バンパイアバット |  |
| `MONST_ARMOR_DYB_NO04` | `DYB_NO04` | コカトリス |  |
| `MONST_ARMOR_DYB_NO05` | `DYB_NO05` | トップヘヴィコカトリス |  |
| `MONST_ARMOR_DYB_NO06` | `DYB_NO06` | エディブルコック |  |
| `MONST_ARMOR_DYB_WA01` | `DYB_WA01` | スチームシューター |  |
| `MONST_ARMOR_DYB_WA02` | `DYB_WA02` | ガイトラッシュ |  |
| `MONST_ARMOR_DYB_WA02_1` | `DYB_WA02` | ガイトラッシュ | `1` |
| `MONST_ARMOR_DYB_WA03` | `DYB_WA03` |  |  |
| `MONST_ARMOR_DYB_WA05` | `DYB_WA05` |  |  |
| `MONST_ARMOR_DYB_WA06` | `DYB_WA06` |  |  |
| `MONST_ARMOR_DYB_WA07` | `DYB_WA07` |  |  |
| `MONST_ARMOR_DYB_WA10` | `DYB_WA10` |  |  |
| `MONST_ARMOR_DYF_FI01` | `DYF_FI01` | Ｇスコーピオン |  |
| `MONST_ARMOR_DYF_FI02` | `DYF_FI02` | ヒュージスコーピオン |  |
| `MONST_ARMOR_DYF_FI03` | `DYF_FI03` | ストーンスコーピオン |  |
| `MONST_ARMOR_DYF_FI04` | `DYF_FI04` |  |  |
| `MONST_ARMOR_DYF_NO01` | `DYF_NO01` | ダイアーウルフ |  |
| `MONST_ARMOR_DYF_NO02` | `DYF_NO02` | ヘルハウンド |  |
| `MONST_ARMOR_DYF_NO02_1` | `DYF_NO02` | ヘルハウンド | `1` |
| `MONST_ARMOR_DYF_NO02_2` | `DYF_NO02` | ヘルハウンド | `2` |
| `MONST_ARMOR_DYF_NO03` | `DYF_NO03` | ブルータルブル |  |
| `MONST_ARMOR_DYF_NO04` | `DYF_NO04` | ブラニーブル |  |
| `MONST_ARMOR_DYF_NO05` | `DYF_NO05` | エクスプロージョンＳ |  |
| `MONST_ARMOR_DYF_NO06` | `DYF_NO06` | スチームバトラー |  |
| `MONST_ARMOR_DYF_NO07` | `DYF_NO07` | アーマードフロッグ |  |
| `MONST_ARMOR_DYF_NO08` | `DYF_NO08` | ガーディアンフロッグ |  |
| `MONST_ARMOR_DYF_NO11` | `DYF_NO11` |  |  |
| `MONST_ARMOR_DYF_NO12` | `DYF_NO12` |  |  |
| `MONST_ARMOR_DYF_NO13` | `DYF_NO13` |  |  |
| `MONST_ARMOR_DYF_WI01` | `DYF_WI01` | ホワイトドラゴン |  |
| `MONST_ARMOR_DYF_WI02` | `DYF_WI02` | ブラックドラゴン |  |
| `MONST_ARMOR_DYF_WI02_BLUE` | `DYF_WI02` | ブラックドラゴン | `BLUE` |
| `MONST_ARMOR_DYF_WI02_RED` | `DYF_WI02` | ブラックドラゴン | `RED` |
| `MONST_ARMOR_DYF_WI03` | `DYF_WI03` | レッドドラゴン |  |
| `MONST_ARMOR_DYF_WI03_1` | `DYF_WI03` | レッドドラゴン | `1` |
| `MONST_ARMOR_DYF_WI03_1_1` | `DYF_WI03` | レッドドラゴン | `1_1` |
| `MONST_ARMOR_DYF_WI03_2` | `DYF_WI03` | レッドドラゴン | `2` |
| `MONST_ARMOR_DYF_WI03_3` | `DYF_WI03` | レッドドラゴン | `3` |
| `MONST_ARMOR_DYF_WI04` | `DYF_WI04` | ヴァンパイア |  |
| `MONST_ARMOR_DYF_WI05` | `DYF_WI05` | トロル・改 |  |
| `MONST_ARMOR_DYF_WI05_1` | `DYF_WI05` | トロル・改 | `1` |
| `MONST_ARMOR_DYF_WI06` | `DYF_WI06` |  |  |
| `MONST_ARMOR_DYF_WI07` | `DYF_WI07` |  |  |
| `MONST_ARMOR_DYF_WI09` | `DYF_WI09` |  |  |
| `MONST_ARMOR_DYH_AN01` | `DYH_AN01` | リザードマン |  |
| `MONST_ARMOR_DYH_AN01_1` | `DYH_AN01` | リザードマン | `1` |
| `MONST_ARMOR_DYH_AN02` | `DYH_AN02` | リザードマンレンジャー |  |
| `MONST_ARMOR_DYH_AN02_1` | `DYH_AN02` | リザードマンレンジャー | `1` |
| `MONST_ARMOR_DYH_AN03` | `DYH_AN03` | リザードマンランサー |  |
| `MONST_ARMOR_DYH_AN03_1` | `DYH_AN03` | リザードマンランサー | `1` |
| `MONST_ARMOR_DYH_AN04` | `DYH_AN04` | Ｇリザードマン |  |
| `MONST_ARMOR_DYH_AN04_1` | `DYH_AN04` | Ｇリザードマン | `1` |
| `MONST_ARMOR_DYH_AN04_2` | `DYH_AN04` | Ｇリザードマン | `2` |
| `MONST_ARMOR_DYH_AN05` | `DYH_AN05` | ロイヤルリザードマン |  |
| `MONST_ARMOR_DYH_AN05_1` | `DYH_AN05` | ロイヤルリザードマン | `1` |
| `MONST_ARMOR_DYH_AN05_2` | `DYH_AN05` | ロイヤルリザードマン | `2` |
| `MONST_ARMOR_DYH_AN06` | `DYH_AN06` | コボルド |  |
| `MONST_ARMOR_DYH_AN07` | `DYH_AN07` | コボルドシューター |  |
| `MONST_ARMOR_DYH_AN08` | `DYH_AN08` | コボルドウォリアー |  |
| `MONST_ARMOR_DYH_AN09` | `DYH_AN09` | ノール |  |
| `MONST_ARMOR_DYH_AN10` | `DYH_AN10` | コボルドリーダー |  |
| `MONST_ARMOR_DYH_AN11` | `DYH_AN11` | サラマンダー |  |
| `MONST_ARMOR_DYH_AN12` | `DYH_AN12` | フロストサラマンダー |  |
| `MONST_ARMOR_DYH_AN13` | `DYH_AN13` | ハイサラマンダー |  |
| `MONST_ARMOR_DYH_AN14` | `DYH_AN14` | ガーゴイル |  |
| `MONST_ARMOR_DYH_AN14_1` | `DYH_AN14` | ガーゴイル | `1` |
| `MONST_ARMOR_DYH_AN15` | `DYH_AN15` | ミノタウロスバトラー |  |
| `MONST_ARMOR_DYH_AN15_1` | `DYH_AN15` | ミノタウロスバトラー | `1` |
| `MONST_ARMOR_DYH_AN15_2` | `DYH_AN15` | ミノタウロスバトラー | `2` |
| `MONST_ARMOR_DYH_AN16` | `DYH_AN16` | ミノタウロス |  |
| `MONST_ARMOR_DYH_AN16_1` | `DYH_AN16` | ミノタウロス | `1` |
| `MONST_ARMOR_DYH_AN17` | `DYH_AN17` | ミノタウロスＳ |  |
| `MONST_ARMOR_DYH_AN17_1` | `DYH_AN17` | ミノタウロスＳ | `1` |
| `MONST_ARMOR_DYH_AN18` | `DYH_AN18` | ミノタウロスコマンダー |  |
| `MONST_ARMOR_DYH_AN18_1` | `DYH_AN18` | ミノタウロスコマンダー | `1` |
| `MONST_ARMOR_DYH_NO01` | `DYH_NO01` | ドワーブンスケルトン |  |
| `MONST_ARMOR_DYH_NO01_F` | `DYH_NO01` | ドワーブンスケルトン | `F` |
| `MONST_ARMOR_DYH_NO01_I` | `DYH_NO01` | ドワーブンスケルトン | `I` |
| `MONST_ARMOR_DYH_NO01_T` | `DYH_NO01` | ドワーブンスケルトン | `T` |
| `MONST_ARMOR_DYH_NO02` | `DYH_NO02` | スケルトン |  |
| `MONST_ARMOR_DYH_NO02_F` | `DYH_NO02` | スケルトン | `F` |
| `MONST_ARMOR_DYH_NO02_I` | `DYH_NO02` | スケルトン | `I` |
| `MONST_ARMOR_DYH_NO02_T` | `DYH_NO02` | スケルトン | `T` |
| `MONST_ARMOR_DYH_NO03` | `DYH_NO03` | スケルトンメイジ |  |
| `MONST_ARMOR_DYH_NO03_F` | `DYH_NO03` | スケルトンメイジ | `F` |
| `MONST_ARMOR_DYH_NO03_I` | `DYH_NO03` | スケルトンメイジ | `I` |
| `MONST_ARMOR_DYH_NO03_T` | `DYH_NO03` | スケルトンメイジ | `T` |
| `MONST_ARMOR_DYH_NO04` | `DYH_NO04` | スケルトンアーチャー |  |
| `MONST_ARMOR_DYH_NO04_F` | `DYH_NO04` | スケルトンアーチャー | `F` |
| `MONST_ARMOR_DYH_NO04_I` | `DYH_NO04` | スケルトンアーチャー | `I` |
| `MONST_ARMOR_DYH_NO04_T` | `DYH_NO04` | スケルトンアーチャー | `T` |
| `MONST_ARMOR_DYH_NO05` | `DYH_NO05` | スケルトンナイト |  |
| `MONST_ARMOR_DYH_NO05_F` | `DYH_NO05` | スケルトンナイト | `F` |
| `MONST_ARMOR_DYH_NO05_I` | `DYH_NO05` | スケルトンナイト | `I` |
| `MONST_ARMOR_DYH_NO05_T` | `DYH_NO05` | スケルトンナイト | `T` |
| `MONST_ARMOR_DYH_NO06` | `DYH_NO06` | ゾンビ |  |
| `MONST_ARMOR_DYH_NO09` | `DYH_NO09` | グール |  |
| `MONST_ARMOR_DYH_NO12` | `DYH_NO12` | ゴースト |  |
| `MONST_ARMOR_DYH_NO13` | `DYH_NO13` | ファントム |  |
| `MONST_ARMOR_DYH_NO13_1` | `DYH_NO13` | ファントム | `1` |
| `MONST_ARMOR_DYH_NO14` | `DYH_NO14` | ガスクラウド |  |
| `MONST_ARMOR_DYH_NO15` | `DYH_NO15` | サルファークラウド |  |
| `MONST_ARMOR_DYH_NO16` | `DYH_NO16` | ポイズンクラウド |  |
| `MONST_ARMOR_DYH_NO17` | `DYH_NO17` | ゴブリンコック |  |
| `MONST_ARMOR_DYH_NO18` | `DYH_NO18` | ゴブリンアーチャー |  |
| `MONST_ARMOR_DYH_NO19` | `DYH_NO19` | ゴブリンファイター |  |
| `MONST_ARMOR_DYH_NO21` | `DYH_NO21` | ホブゴブリン |  |
| `MONST_ARMOR_DYH_NO22` | `DYH_NO22` | ゴブリンロード |  |
| `MONST_ARMOR_DYH_NO23` | `DYH_NO23` | オーク |  |
| `MONST_ARMOR_DYH_NO23_F` | `DYH_NO23` | オーク | `F` |
| `MONST_ARMOR_DYH_NO23_I` | `DYH_NO23` | オーク | `I` |
| `MONST_ARMOR_DYH_NO23_T` | `DYH_NO23` | オーク | `T` |
| `MONST_ARMOR_DYH_NO24` | `DYH_NO24` | オークメイジ |  |
| `MONST_ARMOR_DYH_NO24_F` | `DYH_NO24` | オークメイジ | `F` |
| `MONST_ARMOR_DYH_NO24_I` | `DYH_NO24` | オークメイジ | `I` |
| `MONST_ARMOR_DYH_NO24_T` | `DYH_NO24` | オークメイジ | `T` |
| `MONST_ARMOR_DYH_NO25` | `DYH_NO25` | オークチーフ |  |
| `MONST_ARMOR_DYH_NO25_F` | `DYH_NO25` | オークチーフ | `F` |
| `MONST_ARMOR_DYH_NO25_I` | `DYH_NO25` | オークチーフ | `I` |
| `MONST_ARMOR_DYH_NO25_T` | `DYH_NO25` | オークチーフ | `T` |
| `MONST_ARMOR_DYH_NO30` | `DYH_NO30` | ストーンゴーレム |  |
| `MONST_ARMOR_DYH_NO31` | `DYH_NO31` | アイアンゴーレム |  |
| `MONST_ARMOR_DYH_NO32` | `DYH_NO32` | アイスゴーレム |  |
| `MONST_ARMOR_DYH_NO33` | `DYH_NO33` | ファイアーゴーレム |  |
| `MONST_ARMOR_DYH_NO34` | `DYH_NO34` | ミミック |  |
| `MONST_ARMOR_DYH_NO35` | `DYH_NO35` | スチームナイトゴールド |  |
| `MONST_ARMOR_DYH_NO36` | `DYH_NO36` | スチームナイトダーク |  |
| `MONST_ARMOR_DYH_NO37` | `DYH_NO37` | マジシャン |  |
| `MONST_ARMOR_DYH_NO38` | `DYH_NO38` | ダークマジシャン |  |
| `MONST_ARMOR_DYH_NO38_1` | `DYH_NO38` | ダークマジシャン | `1` |
| `MONST_ARMOR_DYH_NO39` | `DYH_NO39` | ネクロマンサー |  |
| `MONST_ARMOR_DYH_NO39_1` | `DYH_NO39` | ネクロマンサー | `1` |
| `MONST_ARMOR_DYH_NO40` | `DYH_NO40` | ワイルドブル |  |
| `MONST_ARMOR_DYH_NO40_1` | `DYH_NO40` | ワイルドブル | `1` |
| `MONST_ARMOR_DYH_NO41` | `DYH_NO41` | ロバー |  |
| `MONST_ARMOR_DYH_NO41_1` | `DYH_NO41` | ロバー | `1` |
| `MONST_ARMOR_DYH_NO42` | `DYH_NO42` | アサシン |  |
| `MONST_ARMOR_DYH_NO42_1` | `DYH_NO42` | アサシン | `1` |
| `MONST_ARMOR_DYH_NO43` | `DYH_NO43` | トレント |  |
| `MONST_ARMOR_DYH_NO43_1` | `DYH_NO43` | トレント | `1` |
| `MONST_ARMOR_DYH_NO45` | `DYH_NO45` | ストーンジャイアント |  |
| `MONST_ARMOR_DYH_NO45_1` | `DYH_NO45` | ストーンジャイアント | `1` |
| `MONST_ARMOR_DYH_NO46` | `DYH_NO46` | ファイアージャイアント |  |
| `MONST_ARMOR_DYH_NO47` | `DYH_NO47` | ゴールドドラゴン |  |
| `MONST_ARMOR_DYH_NO48` | `DYH_NO48` | イフリート |  |
| `MONST_ARMOR_DYH_NO49` | `DYH_NO49` | ワイバーン |  |
| `MONST_ARMOR_DYH_NO49_1` | `DYH_NO49` | ワイバーン | `1` |
| `MONST_ARMOR_DYH_NO50` | `DYH_NO50` | アーマートードキング |  |
| `MONST_ARMOR_DYH_NO51` | `DYH_NO51` | サキュバス |  |
| `MONST_ARMOR_DYH_NO52` | `DYH_NO52` | スケルトンＦ |  |
| `MONST_ARMOR_DYH_NO53` | `DYH_NO53` |  |  |
| `MONST_ARMOR_DYH_NO54` | `DYH_NO54` |  |  |
| `MONST_ARMOR_DYH_NO55` | `DYH_NO55` |  |  |
| `MONST_ARMOR_DYH_NO63` | `DYH_NO63` |  |  |
| `MONST_ARMOR_DYH_NO64` | `DYH_NO64` |  |  |
| `MONST_ARMOR_DYH_NO65` | `DYH_NO65` |  |  |
| `MONST_ARMOR_DYH_NO66` | `DYH_NO66` |  |  |
| `MONST_ARMOR_DYH_NO67` | `DYH_NO67` |  |  |
| `MONST_ARMOR_DYH_NO68` | `DYH_NO68` |  |  |
| `MONST_ARMOR_DYH_NO69` | `DYH_NO69` |  |  |
| `MONST_ARMOR_DYH_NO70` | `DYH_NO70` |  |  |
| `MONST_ARMOR_DYH_NO71` | `DYH_NO71` |  |  |
| `MONST_ARMOR_DYH_NO72` | `DYH_NO72` |  |  |
| `MONST_ARMOR_DYH_NO73` | `DYH_NO73` |  |  |
| `MONST_ARMOR_DYH_NO74` | `DYH_NO74` |  |  |
| `MONST_ARMOR_DYH_NO76` | `DYH_NO76` | セラフィー・ルカ |  |
| `MONST_ARMOR_DYH_NO77` | `DYH_NO77` | 鉄の竜 |  |
| `MONST_ARMOR_DYH_NO78` | `DYH_NO78` |  |  |
| `MONST_ARMOR_DYH_NO79` | `DYH_NO79` |  |  |
| `MONST_ARMOR_DYH_NO80` | `DYH_NO80` |  |  |
| `MONST_ARMOR_DYH_NO81` | `DYH_NO81` |  |  |
| `MONST_ARMOR_DYH_NO82` | `DYH_NO82` |  |  |
| `MONST_ARMOR_DYH_NO83` | `DYH_NO83` |  |  |
| `MONST_ARMOR_DYH_NO84` | `DYH_NO84` |  |  |
| `MONST_ARMOR_DYH_NO86` | `DYH_NO86` |  |  |
| `MONST_ARMOR_DYH_WI01` | `DYH_WI01` | デーモン |  |
| `MONST_ARMOR_DYH_WI02` | `DYH_WI02` | グレーターデーモン |  |
| `MONST_ARMOR_DYH_WI03` | `DYH_WI03` | インプ |  |
| `MONST_ARMOR_DYH_WI03_1` | `DYH_WI03` | インプ | `1` |
| `MONST_ARMOR_DYH_WI04` | `DYH_WI04` | グレムリン |  |
| `MONST_ARMOR_DYH_WI06` | `DYH_WI06` | アージェントガーゴイル |  |
| `MONST_ARMOR_DYH_WI07` | `DYH_WI07` | クリムゾンガーゴイル |  |
| `MONST_ARMOR_DYH_WI08` | `DYH_WI08` | クレイゴーレム |  |
| `MONST_ARMOR_DYH_WI09` | `DYH_WI09` | スケルトンナイトＦ |  |
| `MONST_ARMOR_DYH_WI11` | `DYH_WI11` |  |  |
| `MONST_ARMOR_DYH_WI14` | `DYH_WI14` |  |  |
| `MONST_ARMOR_DYH_WI14_GMC` | `DYH_WI14` |  | `GMC` |
| `MONST_ARMOR_DYO_PL01` | `DYO_PL01` | リグナスファイター |  |
| `MONST_ARMOR_DYO_PL02` | `DYO_PL02` | リビングソーン |  |
| `MONST_ARMOR_DYO_PL03` | `DYO_PL03` | シュリーカー |  |
| `MONST_ARMOR_DYO_ST01` | `DYO_ST01` | ファンガス |  |
| `MONST_ARMOR_DYO_ST02` | `DYO_ST02` | スポア |  |
| `MONST_ARMOR_DYO_ST03` | `DYO_ST03` | トロル |  |
| `MONST_ARMOR_DYO_ST04` | `DYO_ST04` |  |  |
| `MONST_ARMOR_DYO_ST05` | `DYO_ST05` |  |  |
| `MONST_ARMOR_DYO_ST06` | `DYO_ST06` |  |  |
| `MONST_ARMOR_DYS_NO01` | `DYS_NO01` | スネーク |  |
| `MONST_ARMOR_DYS_NO02` | `DYS_NO02` | バイパー |  |
| `MONST_ARMOR_DYS_NO03` | `DYS_NO03` | コブラ |  |
| `MONST_ARMOR_DYS_NO04` | `DYS_NO04` | アナコンダ |  |
| `MONST_ARMOR_DYS_NO05` | `DYS_NO05` | パイソン |  |
| `MONST_ARMOR_DYS_NO06` | `DYS_NO06` |  |  |

#### `MONST_ACCESS_*` — 209件 — モンスターモデルに付くアクセサリビジュアル

| 内部id | モデル | jp | バリアント |
|---|---|---|---|
| `MONST_ACCESS_DNO_NO01` | `DNO_NO01` | ウィル・オ・ウィスプＢ |  |
| `MONST_ACCESS_DNO_NO02` | `DNO_NO02` | レッサーデーモン |  |
| `MONST_ACCESS_DNO_NO03` | `DNO_NO03` | ラバストーン |  |
| `MONST_ACCESS_DNO_NO04` | `DNO_NO04` | アイスストーン |  |
| `MONST_ACCESS_DNO_NO05` | `DNO_NO05` | シーフ |  |
| `MONST_ACCESS_DNO_NO06` | `DNO_NO06` | スライミミック |  |
| `MONST_ACCESS_DNO_NO07` | `DNO_NO07` | スチームナイト |  |
| `MONST_ACCESS_DNO_NO09` | `DNO_NO09` |  |  |
| `MONST_ACCESS_DYB_NO01` | `DYB_NO01` | バット |  |
| `MONST_ACCESS_DYB_NO02` | `DYB_NO02` | ジャイアントバット |  |
| `MONST_ACCESS_DYB_NO03` | `DYB_NO03` | バンパイアバット |  |
| `MONST_ACCESS_DYB_NO04` | `DYB_NO04` | コカトリス |  |
| `MONST_ACCESS_DYB_NO05` | `DYB_NO05` | トップヘヴィコカトリス |  |
| `MONST_ACCESS_DYB_NO06` | `DYB_NO06` | エディブルコック |  |
| `MONST_ACCESS_DYB_WA01` | `DYB_WA01` | スチームシューター |  |
| `MONST_ACCESS_DYB_WA02` | `DYB_WA02` | ガイトラッシュ |  |
| `MONST_ACCESS_DYB_WA02_1` | `DYB_WA02` | ガイトラッシュ | `1` |
| `MONST_ACCESS_DYB_WA03` | `DYB_WA03` |  |  |
| `MONST_ACCESS_DYB_WA05` | `DYB_WA05` |  |  |
| `MONST_ACCESS_DYB_WA06` | `DYB_WA06` |  |  |
| `MONST_ACCESS_DYB_WA07` | `DYB_WA07` |  |  |
| `MONST_ACCESS_DYB_WA10` | `DYB_WA10` |  |  |
| `MONST_ACCESS_DYF_FI01` | `DYF_FI01` | Ｇスコーピオン |  |
| `MONST_ACCESS_DYF_FI02` | `DYF_FI02` | ヒュージスコーピオン |  |
| `MONST_ACCESS_DYF_FI03` | `DYF_FI03` | ストーンスコーピオン |  |
| `MONST_ACCESS_DYF_FI04` | `DYF_FI04` |  |  |
| `MONST_ACCESS_DYF_NO01` | `DYF_NO01` | ダイアーウルフ |  |
| `MONST_ACCESS_DYF_NO02` | `DYF_NO02` | ヘルハウンド |  |
| `MONST_ACCESS_DYF_NO02_1` | `DYF_NO02` | ヘルハウンド | `1` |
| `MONST_ACCESS_DYF_NO02_2` | `DYF_NO02` | ヘルハウンド | `2` |
| `MONST_ACCESS_DYF_NO03` | `DYF_NO03` | ブルータルブル |  |
| `MONST_ACCESS_DYF_NO04` | `DYF_NO04` | ブラニーブル |  |
| `MONST_ACCESS_DYF_NO05` | `DYF_NO05` | エクスプロージョンＳ |  |
| `MONST_ACCESS_DYF_NO06` | `DYF_NO06` | スチームバトラー |  |
| `MONST_ACCESS_DYF_NO07` | `DYF_NO07` | アーマードフロッグ |  |
| `MONST_ACCESS_DYF_NO08` | `DYF_NO08` | ガーディアンフロッグ |  |
| `MONST_ACCESS_DYF_NO11` | `DYF_NO11` |  |  |
| `MONST_ACCESS_DYF_NO12` | `DYF_NO12` |  |  |
| `MONST_ACCESS_DYF_NO13` | `DYF_NO13` |  |  |
| `MONST_ACCESS_DYF_WI01` | `DYF_WI01` | ホワイトドラゴン |  |
| `MONST_ACCESS_DYF_WI02` | `DYF_WI02` | ブラックドラゴン |  |
| `MONST_ACCESS_DYF_WI03` | `DYF_WI03` | レッドドラゴン |  |
| `MONST_ACCESS_DYF_WI03_1` | `DYF_WI03` | レッドドラゴン | `1` |
| `MONST_ACCESS_DYF_WI03_1_1` | `DYF_WI03` | レッドドラゴン | `1_1` |
| `MONST_ACCESS_DYF_WI03_2` | `DYF_WI03` | レッドドラゴン | `2` |
| `MONST_ACCESS_DYF_WI03_3` | `DYF_WI03` | レッドドラゴン | `3` |
| `MONST_ACCESS_DYF_WI04` | `DYF_WI04` | ヴァンパイア |  |
| `MONST_ACCESS_DYF_WI05` | `DYF_WI05` | トロル・改 |  |
| `MONST_ACCESS_DYF_WI05_1` | `DYF_WI05` | トロル・改 | `1` |
| `MONST_ACCESS_DYF_WI06` | `DYF_WI06` |  |  |
| `MONST_ACCESS_DYF_WI07` | `DYF_WI07` |  |  |
| `MONST_ACCESS_DYF_WI09` | `DYF_WI09` |  |  |
| `MONST_ACCESS_DYH_AN01` | `DYH_AN01` | リザードマン |  |
| `MONST_ACCESS_DYH_AN01_1` | `DYH_AN01` | リザードマン | `1` |
| `MONST_ACCESS_DYH_AN02` | `DYH_AN02` | リザードマンレンジャー |  |
| `MONST_ACCESS_DYH_AN02_1` | `DYH_AN02` | リザードマンレンジャー | `1` |
| `MONST_ACCESS_DYH_AN03` | `DYH_AN03` | リザードマンランサー |  |
| `MONST_ACCESS_DYH_AN03_1` | `DYH_AN03` | リザードマンランサー | `1` |
| `MONST_ACCESS_DYH_AN04` | `DYH_AN04` | Ｇリザードマン |  |
| `MONST_ACCESS_DYH_AN04_1` | `DYH_AN04` | Ｇリザードマン | `1` |
| `MONST_ACCESS_DYH_AN05` | `DYH_AN05` | ロイヤルリザードマン |  |
| `MONST_ACCESS_DYH_AN05_1` | `DYH_AN05` | ロイヤルリザードマン | `1` |
| `MONST_ACCESS_DYH_AN05_2` | `DYH_AN05` | ロイヤルリザードマン | `2` |
| `MONST_ACCESS_DYH_AN06` | `DYH_AN06` | コボルド |  |
| `MONST_ACCESS_DYH_AN07` | `DYH_AN07` | コボルドシューター |  |
| `MONST_ACCESS_DYH_AN08` | `DYH_AN08` | コボルドウォリアー |  |
| `MONST_ACCESS_DYH_AN09` | `DYH_AN09` | ノール |  |
| `MONST_ACCESS_DYH_AN10` | `DYH_AN10` | コボルドリーダー |  |
| `MONST_ACCESS_DYH_AN11` | `DYH_AN11` | サラマンダー |  |
| `MONST_ACCESS_DYH_AN12` | `DYH_AN12` | フロストサラマンダー |  |
| `MONST_ACCESS_DYH_AN13` | `DYH_AN13` | ハイサラマンダー |  |
| `MONST_ACCESS_DYH_AN14` | `DYH_AN14` | ガーゴイル |  |
| `MONST_ACCESS_DYH_AN14_1` | `DYH_AN14` | ガーゴイル | `1` |
| `MONST_ACCESS_DYH_AN15` | `DYH_AN15` | ミノタウロスバトラー |  |
| `MONST_ACCESS_DYH_AN15_1` | `DYH_AN15` | ミノタウロスバトラー | `1` |
| `MONST_ACCESS_DYH_AN15_2` | `DYH_AN15` | ミノタウロスバトラー | `2` |
| `MONST_ACCESS_DYH_AN16` | `DYH_AN16` | ミノタウロス |  |
| `MONST_ACCESS_DYH_AN16_1` | `DYH_AN16` | ミノタウロス | `1` |
| `MONST_ACCESS_DYH_AN17` | `DYH_AN17` | ミノタウロスＳ |  |
| `MONST_ACCESS_DYH_AN17_1` | `DYH_AN17` | ミノタウロスＳ | `1` |
| `MONST_ACCESS_DYH_AN18` | `DYH_AN18` | ミノタウロスコマンダー |  |
| `MONST_ACCESS_DYH_AN18_1` | `DYH_AN18` | ミノタウロスコマンダー | `1` |
| `MONST_ACCESS_DYH_NO01` | `DYH_NO01` | ドワーブンスケルトン |  |
| `MONST_ACCESS_DYH_NO01_F` | `DYH_NO01` | ドワーブンスケルトン | `F` |
| `MONST_ACCESS_DYH_NO01_I` | `DYH_NO01` | ドワーブンスケルトン | `I` |
| `MONST_ACCESS_DYH_NO01_T` | `DYH_NO01` | ドワーブンスケルトン | `T` |
| `MONST_ACCESS_DYH_NO02` | `DYH_NO02` | スケルトン |  |
| `MONST_ACCESS_DYH_NO02_F` | `DYH_NO02` | スケルトン | `F` |
| `MONST_ACCESS_DYH_NO02_I` | `DYH_NO02` | スケルトン | `I` |
| `MONST_ACCESS_DYH_NO02_T` | `DYH_NO02` | スケルトン | `T` |
| `MONST_ACCESS_DYH_NO03` | `DYH_NO03` | スケルトンメイジ |  |
| `MONST_ACCESS_DYH_NO03_F` | `DYH_NO03` | スケルトンメイジ | `F` |
| `MONST_ACCESS_DYH_NO03_I` | `DYH_NO03` | スケルトンメイジ | `I` |
| `MONST_ACCESS_DYH_NO03_T` | `DYH_NO03` | スケルトンメイジ | `T` |
| `MONST_ACCESS_DYH_NO04` | `DYH_NO04` | スケルトンアーチャー |  |
| `MONST_ACCESS_DYH_NO04_F` | `DYH_NO04` | スケルトンアーチャー | `F` |
| `MONST_ACCESS_DYH_NO04_I` | `DYH_NO04` | スケルトンアーチャー | `I` |
| `MONST_ACCESS_DYH_NO04_T` | `DYH_NO04` | スケルトンアーチャー | `T` |
| `MONST_ACCESS_DYH_NO05` | `DYH_NO05` | スケルトンナイト |  |
| `MONST_ACCESS_DYH_NO05_F` | `DYH_NO05` | スケルトンナイト | `F` |
| `MONST_ACCESS_DYH_NO05_I` | `DYH_NO05` | スケルトンナイト | `I` |
| `MONST_ACCESS_DYH_NO05_T` | `DYH_NO05` | スケルトンナイト | `T` |
| `MONST_ACCESS_DYH_NO06` | `DYH_NO06` | ゾンビ |  |
| `MONST_ACCESS_DYH_NO09` | `DYH_NO09` | グール |  |
| `MONST_ACCESS_DYH_NO12` | `DYH_NO12` | ゴースト |  |
| `MONST_ACCESS_DYH_NO13` | `DYH_NO13` | ファントム |  |
| `MONST_ACCESS_DYH_NO13_1` | `DYH_NO13` | ファントム | `1` |
| `MONST_ACCESS_DYH_NO14` | `DYH_NO14` | ガスクラウド |  |
| `MONST_ACCESS_DYH_NO15` | `DYH_NO15` | サルファークラウド |  |
| `MONST_ACCESS_DYH_NO16` | `DYH_NO16` | ポイズンクラウド |  |
| `MONST_ACCESS_DYH_NO17` | `DYH_NO17` | ゴブリンコック |  |
| `MONST_ACCESS_DYH_NO18` | `DYH_NO18` | ゴブリンアーチャー |  |
| `MONST_ACCESS_DYH_NO19` | `DYH_NO19` | ゴブリンファイター |  |
| `MONST_ACCESS_DYH_NO21` | `DYH_NO21` | ホブゴブリン |  |
| `MONST_ACCESS_DYH_NO22` | `DYH_NO22` | ゴブリンロード |  |
| `MONST_ACCESS_DYH_NO23` | `DYH_NO23` | オーク |  |
| `MONST_ACCESS_DYH_NO23_F` | `DYH_NO23` | オーク | `F` |
| `MONST_ACCESS_DYH_NO23_I` | `DYH_NO23` | オーク | `I` |
| `MONST_ACCESS_DYH_NO23_T` | `DYH_NO23` | オーク | `T` |
| `MONST_ACCESS_DYH_NO24` | `DYH_NO24` | オークメイジ |  |
| `MONST_ACCESS_DYH_NO24_F` | `DYH_NO24` | オークメイジ | `F` |
| `MONST_ACCESS_DYH_NO24_I` | `DYH_NO24` | オークメイジ | `I` |
| `MONST_ACCESS_DYH_NO24_T` | `DYH_NO24` | オークメイジ | `T` |
| `MONST_ACCESS_DYH_NO25` | `DYH_NO25` | オークチーフ |  |
| `MONST_ACCESS_DYH_NO25_F` | `DYH_NO25` | オークチーフ | `F` |
| `MONST_ACCESS_DYH_NO25_I` | `DYH_NO25` | オークチーフ | `I` |
| `MONST_ACCESS_DYH_NO25_T` | `DYH_NO25` | オークチーフ | `T` |
| `MONST_ACCESS_DYH_NO30` | `DYH_NO30` | ストーンゴーレム |  |
| `MONST_ACCESS_DYH_NO31` | `DYH_NO31` | アイアンゴーレム |  |
| `MONST_ACCESS_DYH_NO32` | `DYH_NO32` | アイスゴーレム |  |
| `MONST_ACCESS_DYH_NO33` | `DYH_NO33` | ファイアーゴーレム |  |
| `MONST_ACCESS_DYH_NO34` | `DYH_NO34` | ミミック |  |
| `MONST_ACCESS_DYH_NO35` | `DYH_NO35` | スチームナイトゴールド |  |
| `MONST_ACCESS_DYH_NO36` | `DYH_NO36` | スチームナイトダーク |  |
| `MONST_ACCESS_DYH_NO37` | `DYH_NO37` | マジシャン |  |
| `MONST_ACCESS_DYH_NO38` | `DYH_NO38` | ダークマジシャン |  |
| `MONST_ACCESS_DYH_NO38_1` | `DYH_NO38` | ダークマジシャン | `1` |
| `MONST_ACCESS_DYH_NO39` | `DYH_NO39` | ネクロマンサー |  |
| `MONST_ACCESS_DYH_NO39_1` | `DYH_NO39` | ネクロマンサー | `1` |
| `MONST_ACCESS_DYH_NO40` | `DYH_NO40` | ワイルドブル |  |
| `MONST_ACCESS_DYH_NO40_1` | `DYH_NO40` | ワイルドブル | `1` |
| `MONST_ACCESS_DYH_NO41` | `DYH_NO41` | ロバー |  |
| `MONST_ACCESS_DYH_NO41_1` | `DYH_NO41` | ロバー | `1` |
| `MONST_ACCESS_DYH_NO42` | `DYH_NO42` | アサシン |  |
| `MONST_ACCESS_DYH_NO42_1` | `DYH_NO42` | アサシン | `1` |
| `MONST_ACCESS_DYH_NO43` | `DYH_NO43` | トレント |  |
| `MONST_ACCESS_DYH_NO43_1` | `DYH_NO43` | トレント | `1` |
| `MONST_ACCESS_DYH_NO45` | `DYH_NO45` | ストーンジャイアント |  |
| `MONST_ACCESS_DYH_NO45_1` | `DYH_NO45` | ストーンジャイアント | `1` |
| `MONST_ACCESS_DYH_NO46` | `DYH_NO46` | ファイアージャイアント |  |
| `MONST_ACCESS_DYH_NO47` | `DYH_NO47` | ゴールドドラゴン |  |
| `MONST_ACCESS_DYH_NO48` | `DYH_NO48` | イフリート |  |
| `MONST_ACCESS_DYH_NO49` | `DYH_NO49` | ワイバーン |  |
| `MONST_ACCESS_DYH_NO49_1` | `DYH_NO49` | ワイバーン | `1` |
| `MONST_ACCESS_DYH_NO50` | `DYH_NO50` | アーマートードキング |  |
| `MONST_ACCESS_DYH_NO51` | `DYH_NO51` | サキュバス |  |
| `MONST_ACCESS_DYH_NO52` | `DYH_NO52` | スケルトンＦ |  |
| `MONST_ACCESS_DYH_NO53` | `DYH_NO53` |  |  |
| `MONST_ACCESS_DYH_NO54` | `DYH_NO54` |  |  |
| `MONST_ACCESS_DYH_NO55` | `DYH_NO55` |  |  |
| `MONST_ACCESS_DYH_NO63` | `DYH_NO63` |  |  |
| `MONST_ACCESS_DYH_NO64` | `DYH_NO64` |  |  |
| `MONST_ACCESS_DYH_NO65` | `DYH_NO65` |  |  |
| `MONST_ACCESS_DYH_NO66` | `DYH_NO66` |  |  |
| `MONST_ACCESS_DYH_NO67` | `DYH_NO67` |  |  |
| `MONST_ACCESS_DYH_NO68` | `DYH_NO68` |  |  |
| `MONST_ACCESS_DYH_NO69` | `DYH_NO69` |  |  |
| `MONST_ACCESS_DYH_NO70` | `DYH_NO70` |  |  |
| `MONST_ACCESS_DYH_NO71` | `DYH_NO71` |  |  |
| `MONST_ACCESS_DYH_NO72` | `DYH_NO72` |  |  |
| `MONST_ACCESS_DYH_NO73` | `DYH_NO73` |  |  |
| `MONST_ACCESS_DYH_NO74` | `DYH_NO74` |  |  |
| `MONST_ACCESS_DYH_NO76` | `DYH_NO76` | セラフィー・ルカ |  |
| `MONST_ACCESS_DYH_NO77` | `DYH_NO77` | 鉄の竜 |  |
| `MONST_ACCESS_DYH_NO78` | `DYH_NO78` |  |  |
| `MONST_ACCESS_DYH_NO79` | `DYH_NO79` |  |  |
| `MONST_ACCESS_DYH_NO80` | `DYH_NO80` |  |  |
| `MONST_ACCESS_DYH_NO81` | `DYH_NO81` |  |  |
| `MONST_ACCESS_DYH_NO82` | `DYH_NO82` |  |  |
| `MONST_ACCESS_DYH_NO83` | `DYH_NO83` |  |  |
| `MONST_ACCESS_DYH_NO84` | `DYH_NO84` |  |  |
| `MONST_ACCESS_DYH_NO86` | `DYH_NO86` |  |  |
| `MONST_ACCESS_DYH_WI01` | `DYH_WI01` | デーモン |  |
| `MONST_ACCESS_DYH_WI02` | `DYH_WI02` | グレーターデーモン |  |
| `MONST_ACCESS_DYH_WI03` | `DYH_WI03` | インプ |  |
| `MONST_ACCESS_DYH_WI03_1` | `DYH_WI03` | インプ | `1` |
| `MONST_ACCESS_DYH_WI04` | `DYH_WI04` | グレムリン |  |
| `MONST_ACCESS_DYH_WI06` | `DYH_WI06` | アージェントガーゴイル |  |
| `MONST_ACCESS_DYH_WI07` | `DYH_WI07` | クリムゾンガーゴイル |  |
| `MONST_ACCESS_DYH_WI08` | `DYH_WI08` | クレイゴーレム |  |
| `MONST_ACCESS_DYH_WI09` | `DYH_WI09` | スケルトンナイトＦ |  |
| `MONST_ACCESS_DYH_WI11` | `DYH_WI11` |  |  |
| `MONST_ACCESS_DYH_WI14` | `DYH_WI14` |  |  |
| `MONST_ACCESS_DYH_WI14_GMC` | `DYH_WI14` |  | `GMC` |
| `MONST_ACCESS_DYO_PL01` | `DYO_PL01` | リグナスファイター |  |
| `MONST_ACCESS_DYO_PL02` | `DYO_PL02` | リビングソーン |  |
| `MONST_ACCESS_DYO_PL03` | `DYO_PL03` | シュリーカー |  |
| `MONST_ACCESS_DYO_ST01` | `DYO_ST01` | ファンガス |  |
| `MONST_ACCESS_DYO_ST02` | `DYO_ST02` | スポア |  |
| `MONST_ACCESS_DYO_ST03` | `DYO_ST03` | トロル |  |
| `MONST_ACCESS_DYO_ST04` | `DYO_ST04` |  |  |
| `MONST_ACCESS_DYO_ST05` | `DYO_ST05` |  |  |
| `MONST_ACCESS_DYO_ST06` | `DYO_ST06` |  |  |
| `MONST_ACCESS_DYS_NO01` | `DYS_NO01` | スネーク |  |
| `MONST_ACCESS_DYS_NO02` | `DYS_NO02` | バイパー |  |
| `MONST_ACCESS_DYS_NO03` | `DYS_NO03` | コブラ |  |
| `MONST_ACCESS_DYS_NO04` | `DYS_NO04` | アナコンダ |  |
| `MONST_ACCESS_DYS_NO05` | `DYS_NO05` | パイソン |  |
| `MONST_ACCESS_DYS_NO06` | `DYS_NO06` |  |  |

#### `MONST_HELM_*` — 16件 — モンスターモデルに付く兜ビジュアル

| 内部id | モデル | jp | バリアント |
|---|---|---|---|
| `MONST_HELM_DYF_WI02_BLUEDOWN_1` | `DYF_WI02` | ブラックドラゴン | `BLUEDOWN_1` |
| `MONST_HELM_DYF_WI02_BLUEDOWN_2` | `DYF_WI02` | ブラックドラゴン | `BLUEDOWN_2` |
| `MONST_HELM_DYF_WI02_BLUEDOWN_3` | `DYF_WI02` | ブラックドラゴン | `BLUEDOWN_3` |
| `MONST_HELM_DYF_WI02_BLUEDOWN_4` | `DYF_WI02` | ブラックドラゴン | `BLUEDOWN_4` |
| `MONST_HELM_DYF_WI02_BLUEDOWN_5` | `DYF_WI02` | ブラックドラゴン | `BLUEDOWN_5` |
| `MONST_HELM_DYF_WI02_BLUEUP` | `DYF_WI02` | ブラックドラゴン | `BLUEUP` |
| `MONST_HELM_DYF_WI02_REDDOWN_1` | `DYF_WI02` | ブラックドラゴン | `REDDOWN_1` |
| `MONST_HELM_DYF_WI02_REDDOWN_2` | `DYF_WI02` | ブラックドラゴン | `REDDOWN_2` |
| `MONST_HELM_DYF_WI02_REDDOWN_3` | `DYF_WI02` | ブラックドラゴン | `REDDOWN_3` |
| `MONST_HELM_DYF_WI02_REDDOWN_4` | `DYF_WI02` | ブラックドラゴン | `REDDOWN_4` |
| `MONST_HELM_DYF_WI02_REDDOWN_5` | `DYF_WI02` | ブラックドラゴン | `REDDOWN_5` |
| `MONST_HELM_DYF_WI02_REDUP` | `DYF_WI02` | ブラックドラゴン | `REDUP` |
| `MONST_HELM_DYH_NO49_DOWN_1` | `DYH_NO49` | ワイバーン | `DOWN_1` |
| `MONST_HELM_DYH_NO49_DOWN_2` | `DYH_NO49` | ワイバーン | `DOWN_2` |
| `MONST_HELM_DYH_NO49_DOWN_3` | `DYH_NO49` | ワイバーン | `DOWN_3` |
| `MONST_HELM_DYH_NO49_DOWN_4` | `DYH_NO49` | ワイバーン | `DOWN_4` |

#### `MONST_BOOTS_*` — 5件 — モンスターモデルに付くブーツビジュアル

| 内部id | モデル | jp | バリアント |
|---|---|---|---|
| `MONST_BOOTS_DYF_WI02_YELLOWDOWN_1` | `DYF_WI02` | ブラックドラゴン | `YELLOWDOWN_1` |
| `MONST_BOOTS_DYF_WI02_YELLOWDOWN_2` | `DYF_WI02` | ブラックドラゴン | `YELLOWDOWN_2` |
| `MONST_BOOTS_DYF_WI02_YELLOWDOWN_3` | `DYF_WI02` | ブラックドラゴン | `YELLOWDOWN_3` |
| `MONST_BOOTS_DYF_WI02_YELLOWDOWN_4` | `DYF_WI02` | ブラックドラゴン | `YELLOWDOWN_4` |
| `MONST_BOOTS_DYF_WI02_YELLOWDOWN_5` | `DYF_WI02` | ブラックドラゴン | `YELLOWDOWN_5` |

#### `MONST_SUMMON_*` — 189件 — 召喚モンスター用装備アタッチメント

| 内部id | スロット | モデル | jp | バリアント |
|---|---|---|---|---|
| `MONST_SUMMON_ACCESS_DYB_NO01` | `ACCESS` | `DYB_NO01` | バット |  |
| `MONST_SUMMON_ACCESS_DYB_NO02` | `ACCESS` | `DYB_NO02` | ジャイアントバット |  |
| `MONST_SUMMON_ACCESS_DYB_NO03` | `ACCESS` | `DYB_NO03` | バンパイアバット |  |
| `MONST_SUMMON_ACCESS_DYB_NO04` | `ACCESS` | `DYB_NO04` | コカトリス |  |
| `MONST_SUMMON_ACCESS_DYB_NO05` | `ACCESS` | `DYB_NO05` | トップヘヴィコカトリス |  |
| `MONST_SUMMON_ACCESS_DYB_NO06` | `ACCESS` | `DYB_NO06` | エディブルコック |  |
| `MONST_SUMMON_ACCESS_DYF_FI01` | `ACCESS` | `DYF_FI01` | Ｇスコーピオン |  |
| `MONST_SUMMON_ACCESS_DYF_FI02` | `ACCESS` | `DYF_FI02` | ヒュージスコーピオン |  |
| `MONST_SUMMON_ACCESS_DYF_FI03` | `ACCESS` | `DYF_FI03` | ストーンスコーピオン |  |
| `MONST_SUMMON_ACCESS_DYF_NO01` | `ACCESS` | `DYF_NO01` | ダイアーウルフ |  |
| `MONST_SUMMON_ACCESS_DYF_NO02` | `ACCESS` | `DYF_NO02` | ヘルハウンド |  |
| `MONST_SUMMON_ACCESS_DYF_NO02_1` | `ACCESS` | `DYF_NO02` | ヘルハウンド | `1` |
| `MONST_SUMMON_ACCESS_DYF_NO02_2` | `ACCESS` | `DYF_NO02` | ヘルハウンド | `2` |
| `MONST_SUMMON_ACCESS_DYF_NO03` | `ACCESS` | `DYF_NO03` | ブルータルブル |  |
| `MONST_SUMMON_ACCESS_DYF_NO04` | `ACCESS` | `DYF_NO04` | ブラニーブル |  |
| `MONST_SUMMON_ACCESS_DYF_NO05` | `ACCESS` | `DYF_NO05` | エクスプロージョンＳ |  |
| `MONST_SUMMON_ACCESS_DYF_WI10` | `ACCESS` | `DYF_WI10` |  |  |
| `MONST_SUMMON_ACCESS_DYH_AN01` | `ACCESS` | `DYH_AN01` | リザードマン |  |
| `MONST_SUMMON_ACCESS_DYH_AN02` | `ACCESS` | `DYH_AN02` | リザードマンレンジャー |  |
| `MONST_SUMMON_ACCESS_DYH_AN03` | `ACCESS` | `DYH_AN03` | リザードマンランサー |  |
| `MONST_SUMMON_ACCESS_DYH_AN04` | `ACCESS` | `DYH_AN04` | Ｇリザードマン |  |
| `MONST_SUMMON_ACCESS_DYH_AN05` | `ACCESS` | `DYH_AN05` | ロイヤルリザードマン |  |
| `MONST_SUMMON_ACCESS_DYH_AN06` | `ACCESS` | `DYH_AN06` | コボルド |  |
| `MONST_SUMMON_ACCESS_DYH_AN07` | `ACCESS` | `DYH_AN07` | コボルドシューター |  |
| `MONST_SUMMON_ACCESS_DYH_AN08` | `ACCESS` | `DYH_AN08` | コボルドウォリアー |  |
| `MONST_SUMMON_ACCESS_DYH_AN09` | `ACCESS` | `DYH_AN09` | ノール |  |
| `MONST_SUMMON_ACCESS_DYH_AN10` | `ACCESS` | `DYH_AN10` | コボルドリーダー |  |
| `MONST_SUMMON_ACCESS_DYH_AN11` | `ACCESS` | `DYH_AN11` | サラマンダー |  |
| `MONST_SUMMON_ACCESS_DYH_AN12` | `ACCESS` | `DYH_AN12` | フロストサラマンダー |  |
| `MONST_SUMMON_ACCESS_DYH_AN13` | `ACCESS` | `DYH_AN13` | ハイサラマンダー |  |
| `MONST_SUMMON_ACCESS_DYH_AN14` | `ACCESS` | `DYH_AN14` | ガーゴイル |  |
| `MONST_SUMMON_ACCESS_DYH_AN14_1` | `ACCESS` | `DYH_AN14` | ガーゴイル | `1` |
| `MONST_SUMMON_ACCESS_DYH_AN15` | `ACCESS` | `DYH_AN15` | ミノタウロスバトラー |  |
| `MONST_SUMMON_ACCESS_DYH_AN16` | `ACCESS` | `DYH_AN16` | ミノタウロス |  |
| `MONST_SUMMON_ACCESS_DYH_AN17` | `ACCESS` | `DYH_AN17` | ミノタウロスＳ |  |
| `MONST_SUMMON_ACCESS_DYH_AN18` | `ACCESS` | `DYH_AN18` | ミノタウロスコマンダー |  |
| `MONST_SUMMON_ACCESS_DYH_NO01` | `ACCESS` | `DYH_NO01` | ドワーブンスケルトン |  |
| `MONST_SUMMON_ACCESS_DYH_NO02` | `ACCESS` | `DYH_NO02` | スケルトン |  |
| `MONST_SUMMON_ACCESS_DYH_NO03` | `ACCESS` | `DYH_NO03` | スケルトンメイジ |  |
| `MONST_SUMMON_ACCESS_DYH_NO04` | `ACCESS` | `DYH_NO04` | スケルトンアーチャー |  |
| `MONST_SUMMON_ACCESS_DYH_NO05` | `ACCESS` | `DYH_NO05` | スケルトンナイト |  |
| `MONST_SUMMON_ACCESS_DYH_NO06` | `ACCESS` | `DYH_NO06` | ゾンビ |  |
| `MONST_SUMMON_ACCESS_DYH_NO09` | `ACCESS` | `DYH_NO09` | グール |  |
| `MONST_SUMMON_ACCESS_DYH_NO12` | `ACCESS` | `DYH_NO12` | ゴースト |  |
| `MONST_SUMMON_ACCESS_DYH_NO13` | `ACCESS` | `DYH_NO13` | ファントム |  |
| `MONST_SUMMON_ACCESS_DYH_NO17` | `ACCESS` | `DYH_NO17` | ゴブリンコック |  |
| `MONST_SUMMON_ACCESS_DYH_NO18` | `ACCESS` | `DYH_NO18` | ゴブリンアーチャー |  |
| `MONST_SUMMON_ACCESS_DYH_NO19` | `ACCESS` | `DYH_NO19` | ゴブリンファイター |  |
| `MONST_SUMMON_ACCESS_DYH_NO21` | `ACCESS` | `DYH_NO21` | ホブゴブリン |  |
| `MONST_SUMMON_ACCESS_DYH_NO22` | `ACCESS` | `DYH_NO22` | ゴブリンロード |  |
| `MONST_SUMMON_ACCESS_DYH_NO23` | `ACCESS` | `DYH_NO23` | オーク |  |
| `MONST_SUMMON_ACCESS_DYH_NO24` | `ACCESS` | `DYH_NO24` | オークメイジ |  |
| `MONST_SUMMON_ACCESS_DYH_NO25` | `ACCESS` | `DYH_NO25` | オークチーフ |  |
| `MONST_SUMMON_ACCESS_DYH_NO30` | `ACCESS` | `DYH_NO30` | ストーンゴーレム |  |
| `MONST_SUMMON_ACCESS_DYH_NO45` | `ACCESS` | `DYH_NO45` | ストーンジャイアント |  |
| `MONST_SUMMON_ACCESS_DYH_NO50` | `ACCESS` | `DYH_NO50` | アーマートードキング |  |
| `MONST_SUMMON_ACCESS_DYH_NO51` | `ACCESS` | `DYH_NO51` | サキュバス |  |
| `MONST_SUMMON_ACCESS_DYH_NO52` | `ACCESS` | `DYH_NO52` | スケルトンＦ |  |
| `MONST_SUMMON_ACCESS_DYH_NO60` | `ACCESS` | `DYH_NO60` | ディアボルガ |  |
| `MONST_SUMMON_ACCESS_DYH_NO61` | `ACCESS` | `DYH_NO61` | デュラハン |  |
| `MONST_SUMMON_ACCESS_DYH_NO62` | `ACCESS` | `DYH_NO62` | ラミア |  |
| `MONST_SUMMON_ACCESS_DYH_NO76` | `ACCESS` | `DYH_NO76` | セラフィー・ルカ |  |
| `MONST_SUMMON_ACCESS_DYH_NO77` | `ACCESS` | `DYH_NO77` | 鉄の竜 |  |
| `MONST_SUMMON_ACCESS_DYH_NO78` | `ACCESS` | `DYH_NO78` |  |  |
| `MONST_SUMMON_ACCESS_DYH_NO79` | `ACCESS` | `DYH_NO79` |  |  |
| `MONST_SUMMON_ACCESS_DYH_NO80` | `ACCESS` | `DYH_NO80` |  |  |
| `MONST_SUMMON_ACCESS_DYH_NO85` | `ACCESS` | `DYH_NO85` |  |  |
| `MONST_SUMMON_ACCESS_DYH_NO86` | `ACCESS` | `DYH_NO86` |  |  |
| `MONST_SUMMON_ACCESS_DYH_NO87` | `ACCESS` | `DYH_NO87` |  |  |
| `MONST_SUMMON_ACCESS_DYH_NO88` | `ACCESS` | `DYH_NO88` |  |  |
| `MONST_SUMMON_ACCESS_DYH_WI01` | `ACCESS` | `DYH_WI01` | デーモン |  |
| `MONST_SUMMON_ACCESS_DYH_WI02` | `ACCESS` | `DYH_WI02` | グレーターデーモン |  |
| `MONST_SUMMON_ACCESS_DYH_WI04` | `ACCESS` | `DYH_WI04` | グレムリン |  |
| `MONST_SUMMON_ACCESS_DYH_WI06` | `ACCESS` | `DYH_WI06` | アージェントガーゴイル |  |
| `MONST_SUMMON_ACCESS_DYH_WI07` | `ACCESS` | `DYH_WI07` | クリムゾンガーゴイル |  |
| `MONST_SUMMON_ACCESS_DYH_WI08` | `ACCESS` | `DYH_WI08` | クレイゴーレム |  |
| `MONST_SUMMON_ACCESS_DYH_WI10` | `ACCESS` | `DYH_WI10` | ギルマン |  |
| `MONST_SUMMON_ACCESS_DYH_WI13` | `ACCESS` | `DYH_WI13` |  |  |
| `MONST_SUMMON_ACCESS_DYO_PL01` | `ACCESS` | `DYO_PL01` | リグナスファイター |  |
| `MONST_SUMMON_ACCESS_DYO_PL02` | `ACCESS` | `DYO_PL02` | リビングソーン |  |
| `MONST_SUMMON_ACCESS_DYO_PL03` | `ACCESS` | `DYO_PL03` | シュリーカー |  |
| `MONST_SUMMON_ACCESS_DYO_ST01` | `ACCESS` | `DYO_ST01` | ファンガス |  |
| `MONST_SUMMON_ACCESS_DYO_ST02` | `ACCESS` | `DYO_ST02` | スポア |  |
| `MONST_SUMMON_ACCESS_DYO_ST03` | `ACCESS` | `DYO_ST03` | トロル |  |
| `MONST_SUMMON_ACCESS_DYS_NO01` | `ACCESS` | `DYS_NO01` | スネーク |  |
| `MONST_SUMMON_ACCESS_DYS_NO02` | `ACCESS` | `DYS_NO02` | バイパー |  |
| `MONST_SUMMON_ACCESS_DYS_NO03` | `ACCESS` | `DYS_NO03` | コブラ |  |
| `MONST_SUMMON_ACCESS_DYS_NO04` | `ACCESS` | `DYS_NO04` | アナコンダ |  |
| `MONST_SUMMON_ACCESS_DYS_NO05` | `ACCESS` | `DYS_NO05` | パイソン |  |
| `MONST_SUMMON_ACCESS_QUE_DWARF_M` |  |  |  |  |
| `MONST_SUMMON_ACCESS_QUE_DYB_NO01` |  |  |  |  |
| `MONST_SUMMON_ACCESS_QUE_ELF_F` |  |  |  |  |
| `MONST_SUMMON_ACCESS_QUE_HUMAN_M` |  |  |  |  |
| `MONST_SUMMON_ARMOR_DYB_NO01` | `ARMOR` | `DYB_NO01` | バット |  |
| `MONST_SUMMON_ARMOR_DYB_NO02` | `ARMOR` | `DYB_NO02` | ジャイアントバット |  |
| `MONST_SUMMON_ARMOR_DYB_NO03` | `ARMOR` | `DYB_NO03` | バンパイアバット |  |
| `MONST_SUMMON_ARMOR_DYB_NO04` | `ARMOR` | `DYB_NO04` | コカトリス |  |
| `MONST_SUMMON_ARMOR_DYB_NO05` | `ARMOR` | `DYB_NO05` | トップヘヴィコカトリス |  |
| `MONST_SUMMON_ARMOR_DYB_NO06` | `ARMOR` | `DYB_NO06` | エディブルコック |  |
| `MONST_SUMMON_ARMOR_DYF_FI01` | `ARMOR` | `DYF_FI01` | Ｇスコーピオン |  |
| `MONST_SUMMON_ARMOR_DYF_FI02` | `ARMOR` | `DYF_FI02` | ヒュージスコーピオン |  |
| `MONST_SUMMON_ARMOR_DYF_FI03` | `ARMOR` | `DYF_FI03` | ストーンスコーピオン |  |
| `MONST_SUMMON_ARMOR_DYF_NO01` | `ARMOR` | `DYF_NO01` | ダイアーウルフ |  |
| `MONST_SUMMON_ARMOR_DYF_NO02` | `ARMOR` | `DYF_NO02` | ヘルハウンド |  |
| `MONST_SUMMON_ARMOR_DYF_NO02_1` | `ARMOR` | `DYF_NO02` | ヘルハウンド | `1` |
| `MONST_SUMMON_ARMOR_DYF_NO02_2` | `ARMOR` | `DYF_NO02` | ヘルハウンド | `2` |
| `MONST_SUMMON_ARMOR_DYF_NO03` | `ARMOR` | `DYF_NO03` | ブルータルブル |  |
| `MONST_SUMMON_ARMOR_DYF_NO04` | `ARMOR` | `DYF_NO04` | ブラニーブル |  |
| `MONST_SUMMON_ARMOR_DYF_NO05` | `ARMOR` | `DYF_NO05` | エクスプロージョンＳ |  |
| `MONST_SUMMON_ARMOR_DYF_WI10` | `ARMOR` | `DYF_WI10` |  |  |
| `MONST_SUMMON_ARMOR_DYH_AN01` | `ARMOR` | `DYH_AN01` | リザードマン |  |
| `MONST_SUMMON_ARMOR_DYH_AN02` | `ARMOR` | `DYH_AN02` | リザードマンレンジャー |  |
| `MONST_SUMMON_ARMOR_DYH_AN03` | `ARMOR` | `DYH_AN03` | リザードマンランサー |  |
| `MONST_SUMMON_ARMOR_DYH_AN04` | `ARMOR` | `DYH_AN04` | Ｇリザードマン |  |
| `MONST_SUMMON_ARMOR_DYH_AN05` | `ARMOR` | `DYH_AN05` | ロイヤルリザードマン |  |
| `MONST_SUMMON_ARMOR_DYH_AN06` | `ARMOR` | `DYH_AN06` | コボルド |  |
| `MONST_SUMMON_ARMOR_DYH_AN07` | `ARMOR` | `DYH_AN07` | コボルドシューター |  |
| `MONST_SUMMON_ARMOR_DYH_AN08` | `ARMOR` | `DYH_AN08` | コボルドウォリアー |  |
| `MONST_SUMMON_ARMOR_DYH_AN09` | `ARMOR` | `DYH_AN09` | ノール |  |
| `MONST_SUMMON_ARMOR_DYH_AN10` | `ARMOR` | `DYH_AN10` | コボルドリーダー |  |
| `MONST_SUMMON_ARMOR_DYH_AN11` | `ARMOR` | `DYH_AN11` | サラマンダー |  |
| `MONST_SUMMON_ARMOR_DYH_AN12` | `ARMOR` | `DYH_AN12` | フロストサラマンダー |  |
| `MONST_SUMMON_ARMOR_DYH_AN13` | `ARMOR` | `DYH_AN13` | ハイサラマンダー |  |
| `MONST_SUMMON_ARMOR_DYH_AN14` | `ARMOR` | `DYH_AN14` | ガーゴイル |  |
| `MONST_SUMMON_ARMOR_DYH_AN14_1` | `ARMOR` | `DYH_AN14` | ガーゴイル | `1` |
| `MONST_SUMMON_ARMOR_DYH_AN15` | `ARMOR` | `DYH_AN15` | ミノタウロスバトラー |  |
| `MONST_SUMMON_ARMOR_DYH_AN16` | `ARMOR` | `DYH_AN16` | ミノタウロス |  |
| `MONST_SUMMON_ARMOR_DYH_AN17` | `ARMOR` | `DYH_AN17` | ミノタウロスＳ |  |
| `MONST_SUMMON_ARMOR_DYH_AN18` | `ARMOR` | `DYH_AN18` | ミノタウロスコマンダー |  |
| `MONST_SUMMON_ARMOR_DYH_NO01` | `ARMOR` | `DYH_NO01` | ドワーブンスケルトン |  |
| `MONST_SUMMON_ARMOR_DYH_NO02` | `ARMOR` | `DYH_NO02` | スケルトン |  |
| `MONST_SUMMON_ARMOR_DYH_NO03` | `ARMOR` | `DYH_NO03` | スケルトンメイジ |  |
| `MONST_SUMMON_ARMOR_DYH_NO04` | `ARMOR` | `DYH_NO04` | スケルトンアーチャー |  |
| `MONST_SUMMON_ARMOR_DYH_NO05` | `ARMOR` | `DYH_NO05` | スケルトンナイト |  |
| `MONST_SUMMON_ARMOR_DYH_NO06` | `ARMOR` | `DYH_NO06` | ゾンビ |  |
| `MONST_SUMMON_ARMOR_DYH_NO09` | `ARMOR` | `DYH_NO09` | グール |  |
| `MONST_SUMMON_ARMOR_DYH_NO12` | `ARMOR` | `DYH_NO12` | ゴースト |  |
| `MONST_SUMMON_ARMOR_DYH_NO13` | `ARMOR` | `DYH_NO13` | ファントム |  |
| `MONST_SUMMON_ARMOR_DYH_NO17` | `ARMOR` | `DYH_NO17` | ゴブリンコック |  |
| `MONST_SUMMON_ARMOR_DYH_NO18` | `ARMOR` | `DYH_NO18` | ゴブリンアーチャー |  |
| `MONST_SUMMON_ARMOR_DYH_NO19` | `ARMOR` | `DYH_NO19` | ゴブリンファイター |  |
| `MONST_SUMMON_ARMOR_DYH_NO21` | `ARMOR` | `DYH_NO21` | ホブゴブリン |  |
| `MONST_SUMMON_ARMOR_DYH_NO22` | `ARMOR` | `DYH_NO22` | ゴブリンロード |  |
| `MONST_SUMMON_ARMOR_DYH_NO23` | `ARMOR` | `DYH_NO23` | オーク |  |
| `MONST_SUMMON_ARMOR_DYH_NO24` | `ARMOR` | `DYH_NO24` | オークメイジ |  |
| `MONST_SUMMON_ARMOR_DYH_NO25` | `ARMOR` | `DYH_NO25` | オークチーフ |  |
| `MONST_SUMMON_ARMOR_DYH_NO30` | `ARMOR` | `DYH_NO30` | ストーンゴーレム |  |
| `MONST_SUMMON_ARMOR_DYH_NO45` | `ARMOR` | `DYH_NO45` | ストーンジャイアント |  |
| `MONST_SUMMON_ARMOR_DYH_NO50` | `ARMOR` | `DYH_NO50` | アーマートードキング |  |
| `MONST_SUMMON_ARMOR_DYH_NO51` | `ARMOR` | `DYH_NO51` | サキュバス |  |
| `MONST_SUMMON_ARMOR_DYH_NO52` | `ARMOR` | `DYH_NO52` | スケルトンＦ |  |
| `MONST_SUMMON_ARMOR_DYH_NO60` | `ARMOR` | `DYH_NO60` | ディアボルガ |  |
| `MONST_SUMMON_ARMOR_DYH_NO61` | `ARMOR` | `DYH_NO61` | デュラハン |  |
| `MONST_SUMMON_ARMOR_DYH_NO62` | `ARMOR` | `DYH_NO62` | ラミア |  |
| `MONST_SUMMON_ARMOR_DYH_NO76` | `ARMOR` | `DYH_NO76` | セラフィー・ルカ |  |
| `MONST_SUMMON_ARMOR_DYH_NO77` | `ARMOR` | `DYH_NO77` | 鉄の竜 |  |
| `MONST_SUMMON_ARMOR_DYH_NO78` | `ARMOR` | `DYH_NO78` |  |  |
| `MONST_SUMMON_ARMOR_DYH_NO79` | `ARMOR` | `DYH_NO79` |  |  |
| `MONST_SUMMON_ARMOR_DYH_NO80` | `ARMOR` | `DYH_NO80` |  |  |
| `MONST_SUMMON_ARMOR_DYH_NO85` | `ARMOR` | `DYH_NO85` |  |  |
| `MONST_SUMMON_ARMOR_DYH_NO86` | `ARMOR` | `DYH_NO86` |  |  |
| `MONST_SUMMON_ARMOR_DYH_NO87` | `ARMOR` | `DYH_NO87` |  |  |
| `MONST_SUMMON_ARMOR_DYH_NO88` | `ARMOR` | `DYH_NO88` |  |  |
| `MONST_SUMMON_ARMOR_DYH_WI01` | `ARMOR` | `DYH_WI01` | デーモン |  |
| `MONST_SUMMON_ARMOR_DYH_WI02` | `ARMOR` | `DYH_WI02` | グレーターデーモン |  |
| `MONST_SUMMON_ARMOR_DYH_WI04` | `ARMOR` | `DYH_WI04` | グレムリン |  |
| `MONST_SUMMON_ARMOR_DYH_WI06` | `ARMOR` | `DYH_WI06` | アージェントガーゴイル |  |
| `MONST_SUMMON_ARMOR_DYH_WI07` | `ARMOR` | `DYH_WI07` | クリムゾンガーゴイル |  |
| `MONST_SUMMON_ARMOR_DYH_WI08` | `ARMOR` | `DYH_WI08` | クレイゴーレム |  |
| `MONST_SUMMON_ARMOR_DYH_WI10` | `ARMOR` | `DYH_WI10` | ギルマン |  |
| `MONST_SUMMON_ARMOR_DYH_WI13` | `ARMOR` | `DYH_WI13` |  |  |
| `MONST_SUMMON_ARMOR_DYO_PL01` | `ARMOR` | `DYO_PL01` | リグナスファイター |  |
| `MONST_SUMMON_ARMOR_DYO_PL02` | `ARMOR` | `DYO_PL02` | リビングソーン |  |
| `MONST_SUMMON_ARMOR_DYO_PL03` | `ARMOR` | `DYO_PL03` | シュリーカー |  |
| `MONST_SUMMON_ARMOR_DYO_ST01` | `ARMOR` | `DYO_ST01` | ファンガス |  |
| `MONST_SUMMON_ARMOR_DYO_ST02` | `ARMOR` | `DYO_ST02` | スポア |  |
| `MONST_SUMMON_ARMOR_DYO_ST03` | `ARMOR` | `DYO_ST03` | トロル |  |
| `MONST_SUMMON_ARMOR_DYS_NO01` | `ARMOR` | `DYS_NO01` | スネーク |  |
| `MONST_SUMMON_ARMOR_DYS_NO02` | `ARMOR` | `DYS_NO02` | バイパー |  |
| `MONST_SUMMON_ARMOR_DYS_NO03` | `ARMOR` | `DYS_NO03` | コブラ |  |
| `MONST_SUMMON_ARMOR_DYS_NO04` | `ARMOR` | `DYS_NO04` | アナコンダ |  |
| `MONST_SUMMON_ARMOR_DYS_NO05` | `ARMOR` | `DYS_NO05` | パイソン |  |
| `MONST_SUMMON_ARMOR_QUE_DWARF_M` |  |  |  |  |
| `MONST_SUMMON_ARMOR_QUE_DYB_NO01` |  |  |  |  |
| `MONST_SUMMON_ARMOR_QUE_ELF_F` |  |  |  |  |
| `MONST_SUMMON_ARMOR_QUE_HUMAN_M` |  |  |  |  |
| `MONST_SUMMON_BOOTS_QUE_DWARF_M` |  |  |  |  |
| `MONST_SUMMON_BOOTS_QUE_ELF_F` |  |  |  |  |
| `MONST_SUMMON_BOOTS_QUE_HUMAN_M` |  |  |  |  |

#### `MONST_PLAYER_*` — 13件 — プレイヤーアクション／エフェクト代理（手・投擲・バフ）

| 内部id |
|---|
| `MONST_PLAYER_POISON_EN` |
| `MONST_PLAYER_AURA_ARROW` |
| `MONST_PLAYER_BLAST` |
| `MONST_PLAYER_BLASTARROW` |
| `MONST_PLAYER_CHARGE` |
| `MONST_PLAYER_DAMAGE_HEAT_BODY` |
| `MONST_PLAYER_HAND_L` |
| `MONST_PLAYER_HAND_R` |
| `MONST_PLAYER_HEAT_BODY` |
| `MONST_PLAYER_POISON_HEAT_BODY` |
| `MONST_PLAYER_THROW` |
| `MONST_PLAYER_TOE_L` |
| `MONST_PLAYER_TOE_R` |

#### `MONST_MONSTER_*` — 9件 — 汎用モンスター属性攻撃オブジェクト（火・氷・雷・毒・眠・混乱・沈黙＋手）

| 内部id |
|---|
| `MONST_MONSTER_FIRE` |
| `MONST_MONSTER_ICE` |
| `MONST_MONSTER_PANIC` |
| `MONST_MONSTER_POISON` |
| `MONST_MONSTER_SILENT` |
| `MONST_MONSTER_SLEEP` |
| `MONST_MONSTER_THUNDER` |
| `MONST_MONSTER_HAND_L` |
| `MONST_MONSTER_HAND_R` |

#### `MONST_QUE_*` — 7件 — NPC／クエスト補助エンティティ（エルフ・ドワーフ・人間の助っ人）

| 内部id |
|---|
| `MONST_QUE_ELF_FIRE` |
| `MONST_QUE_ELF_THUNDER` |
| `MONST_QUE_HUMAN_HEAL` |
| `MONST_QUE_DWARF_M_DWARVENWARAXE` |
| `MONST_QUE_ELF_F_MAGICALSTAFF` |
| `MONST_QUE_HUMAN_M_ROUND` |
| `MONST_QUE_HUMAN_M_WARHAMMER` |

#### `MONST_ALL_*` — 2件 — パーティ全体メガクラッシュ代理 —— **疑似／システムレコードでありモンスターではない**

| 内部id |
|---|
| `MONST_ALL_MEGACRUSH_M` |
| `MONST_ALL_MEGACRUSH_W` |

#### その他の飛び道具／エフェクト／スキル代理 — 74件

投擲武器代理（`*_THROW`、`*_BEAM`、`*_NEEDLE`）は武器テーブルを反映する ——
例：`MONST_NI01_DAGGER_THROW` ↔ `WEAPON2_NI01_DAGGER`。

| 内部id | 読み |
|---|---|
| `MONST_CANNON_SHELL` | 砲弾 |
| `MONST_DYF_DYH_NO38_PRESSURECANNON` | スキル／エフェクト代理 |
| `MONST_KA10_HAND_THROW` | 投擲武器の飛び道具 |
| `MONST_KA17_ROBBER_THROW` | 投擲武器の飛び道具 |
| `MONST_KA24_MUGGER_THROW` | 投擲武器の飛び道具 |
| `MONST_KA33_THROW` | 投擲武器の飛び道具 |
| `MONST_KS08_THROW` | 投擲武器の飛び道具 |
| `MONST_KS12_THROW` | 投擲武器の飛び道具 |
| `MONST_KS19_THROW` | 投擲武器の飛び道具 |
| `MONST_KS29_BEAM` | 飛び道具／エフェクト |
| `MONST_LINKED_PRIEST_MEGACRUSH` | 連携メガクラッシュエフェクト |
| `MONST_MAGICMISSILE` | 飛び道具／エフェクト |
| `MONST_MONKMISSILE` | 飛び道具／エフェクト |
| `MONST_NC14_KAISER_BEAM` | 飛び道具／エフェクト |
| `MONST_NECROMISSILE` | 飛び道具／エフェクト |
| `MONST_NECROPLOSION` | 飛び道具／エフェクト |
| `MONST_NI01_DAGGER_THROW` | 投擲武器の飛び道具 |
| `MONST_NI02_DIRK_THROW` | 投擲武器の飛び道具 |
| `MONST_NI03_POISONDAGGER_THROW` | 投擲武器の飛び道具 |
| `MONST_NI04_SWORDBRAKER_THROW` | 投擲武器の飛び道具 |
| `MONST_NI05_KOTETSU_THROW` | 投擲武器の飛び道具 |
| `MONST_NI06_GALESDAGGER_THROW` | 投擲武器の飛び道具 |
| `MONST_NI07_DIRK_THROW` | 投擲武器の飛び道具 |
| `MONST_NI08_ROUND_THROW` | 投擲武器の飛び道具 |
| `MONST_NI09_STUNDAGGER_THROW` | 投擲武器の飛び道具 |
| `MONST_NI10_GOBLIN_C_THROW` | 投擲武器の飛び道具 |
| `MONST_NI11_THIEF_THROW` | 投擲武器の飛び道具 |
| `MONST_NI12_ASSASSIN_THROW` | 投擲武器の飛び道具 |
| `MONST_NI13_KERIS_THROW` | 投擲武器の飛び道具 |
| `MONST_NI14_TAMECHAN2_THROW` | 投擲武器の飛び道具 |
| `MONST_NI15_BURGLAR_THROW` | 投擲武器の飛び道具 |
| `MONST_NI16_CROSS_THROW` | 投擲武器の飛び道具 |
| `MONST_NI17_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI18_POISONDAGGER_THROW` | 投擲武器の飛び道具 |
| `MONST_NI19_ROUND_THROW` | 投擲武器の飛び道具 |
| `MONST_NI20_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI21_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI22_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI23_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI24_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI25_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI26_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI27_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI28_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI29_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI30_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI31_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI32_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI33_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI34_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_NI35_SHINKI_THROW` | 投擲武器の飛び道具 |
| `MONST_OPTION` | オプション／随伴 |
| `MONST_POWER_BEAM` | 飛び道具／エフェクト |
| `MONST_PRIEST_COMB07` | スキル／エフェクト代理 |
| `MONST_PRIEST_MEGACRUSH` | スキル／エフェクト代理 |
| `MONST_RANGERMISSILE` | 飛び道具／エフェクト |
| `MONST_RS09_FIREWAVE` | 飛び道具／エフェクト |
| `MONST_RS16_POWERUP` | スキル／エフェクト代理 |
| `MONST_SHIEF_COMB23` | スキル／エフェクト代理 |
| `MONST_SK267_ARROW` | 飛び道具／エフェクト |
| `MONST_SK285_WAVE` | 飛び道具／エフェクト |
| `MONST_SP02_AWLPIKE_THROW` | 投擲武器の飛び道具 |
| `MONST_SP23_NEEDLE` | 飛び道具／エフェクト |
| `MONST_ST04_HEALROD_HEALNOVA` | スキル連動エフェクト |
| `MONST_ST11_WIZARD_EX1_THROW` | 投擲武器の飛び道具 |
| `MONST_ST12_WIZARD_EX2_THROW` | 投擲武器の飛び道具 |
| `MONST_ST13_WIZARD_EX3_THROW` | 投擲武器の飛び道具 |
| `MONST_ST35_WIZARD_EX1_THROW` | 投擲武器の飛び道具 |
| `MONST_ST36_WIZARD_EX2_THROW` | 投擲武器の飛び道具 |
| `MONST_ST37_WIZARD_EX3_THROW` | 投擲武器の飛び道具 |
| `MONST_THIEF_COMB19` | スキル／エフェクト代理 |
| `MONST_THIEF_MEGACRUSH` | スキル／エフェクト代理 |
| `MONST_WIZARD_COMB04` | スキル／エフェクト代理 |
| `MONST_WIZARD_MEGACRUSH` | スキル／エフェクト代理 |

### 召喚テーブル名簿

`summon` テーブル（168件）は `SUMMON_MN{nnn}_{FAMILY}_{CODE}` 形式で召喚可能モンスターを索引する。下記の日本語名は `text.bin` 内で `…を召喚するためのカード` というカード文とペアになった表示名 —— ダンプ中最も強い名前の根拠。13件はカード文がない（ペアなし）。

| 内部id | jp |
|---|---|
| `SUMMON_MN001_DYH_NO01` | ドワーブンスケルトン |
| `SUMMON_MN002_DYH_NO02` | スケルトン |
| `SUMMON_MN003_DYH_NO03` | スケルトンメイジ |
| `SUMMON_MN004_DYH_NO04` | スケルトンアーチャー |
| `SUMMON_MN005_DYH_NO05` | スケルトンナイト |
| `SUMMON_MN006_DYH_NO06` | ゾンビ |
| `SUMMON_MN009_DYH_NO09` | グール |
| `SUMMON_MN012_DYH_NO12` | ゴースト |
| `SUMMON_MN013_DYH_NO13` | ファントム |
| `SUMMON_MN014_DYH_NO14` | ガスクラウド |
| `SUMMON_MN015_DYH_NO15` | サルファークラウド |
| `SUMMON_MN016_DYH_NO16` | ポイズンクラウド |
| `SUMMON_MN017_DYH_AN01` | リザードマン |
| `SUMMON_MN018_DYH_AN02` | リザードマンレンジャー |
| `SUMMON_MN019_DYH_AN03` | リザードマンランサー |
| `SUMMON_MN020_DYH_AN04` | Ｇリザードマン |
| `SUMMON_MN021_DYH_AN05` | ロイヤルリザードマン |
| `SUMMON_MN022_DYH_NO17` | ゴブリンコック |
| `SUMMON_MN023_DYH_NO18` | ゴブリンアーチャー |
| `SUMMON_MN024_DYH_NO19` | ゴブリンファイター |
| `SUMMON_MN025_DYH_NO21` | ホブゴブリン |
| `SUMMON_MN026_DYH_NO22` | ゴブリンロード |
| `SUMMON_MN027_DYH_AN06` | コボルド |
| `SUMMON_MN028_DYH_AN08` | コボルドウォリアー |
| `SUMMON_MN029_DYH_AN07` | コボルドシューター |
| `SUMMON_MN030_DYH_AN09` | ノール |
| `SUMMON_MN031_DYH_AN10` | コボルドリーダー |
| `SUMMON_MN032_DYH_NO23` | オーク |
| `SUMMON_MN033_DYH_NO24` | オークメイジ |
| `SUMMON_MN034_DYH_NO25` | オークチーフ |
| `SUMMON_MN035_DYH_AN16` | ミノタウロス |
| `SUMMON_MN036_DYH_AN15` | ミノタウロスバトラー |
| `SUMMON_MN037_DYH_AN17` | ミノタウロスＳ |
| `SUMMON_MN038_DYH_AN18` | ミノタウロスコマンダー |
| `SUMMON_MN039_DYF_FI01` | Ｇスコーピオン |
| `SUMMON_MN040_DYF_FI02` | ヒュージスコーピオン |
| `SUMMON_MN041_DYF_FI03` | ストーンスコーピオン |
| `SUMMON_MN042_DYH_AN11` | サラマンダー |
| `SUMMON_MN043_DYH_AN12` | フロストサラマンダー |
| `SUMMON_MN044_DYH_AN13` | ハイサラマンダー |
| `SUMMON_MN045_DYB_NO01` | バット |
| `SUMMON_MN046_DYB_NO02` | ジャイアントバット |
| `SUMMON_MN047_DYB_NO03` | バンパイアバット |
| `SUMMON_MN048_DYS_NO01` | スネーク |
| `SUMMON_MN049_DYS_NO02` | バイパー |
| `SUMMON_MN050_DYS_NO03` | コブラ |
| `SUMMON_MN051_DYS_NO04` | アナコンダ |
| `SUMMON_MN052_DYS_NO05` | パイソン |
| `SUMMON_MN053_DYF_NO01` | ダイアーウルフ |
| `SUMMON_MN054_DYF_NO02` | ヘルハウンド |
| `SUMMON_MN055_DYB_NO04` | コカトリス |
| `SUMMON_MN056_DYB_NO05` | トップヘヴィコカトリス |
| `SUMMON_MN057_DYB_NO06` | エディブルコック |
| `SUMMON_MN058_DNO_NO01` | ウィル・オ・ウィスプＢ |
| `SUMMON_MN059_DNO_NO02` | レッサーデーモン |
| `SUMMON_MN060_DYH_WI01` | デーモン |
| `SUMMON_MN061_DYH_WI02` | グレーターデーモン |
| `SUMMON_MN062_DYH_WI03` | インプ |
| `SUMMON_MN063_DYH_WI04` | グレムリン |
| `SUMMON_MN064_DYH_AN14` | ガーゴイル |
| `SUMMON_MN065_DYH_WI06` | アージェントガーゴイル |
| `SUMMON_MN066_DYH_WI07` | クリムゾンガーゴイル |
| `SUMMON_MN067_DYH_WI08` | クレイゴーレム |
| `SUMMON_MN068_DYH_NO30` | ストーンゴーレム |
| `SUMMON_MN069_DYH_NO31` | アイアンゴーレム |
| `SUMMON_MN070_DYH_NO32` | アイスゴーレム |
| `SUMMON_MN071_DYH_NO33` | ファイアーゴーレム |
| `SUMMON_MN072_DYH_NO34` | ミミック |
| `SUMMON_MN073_DNO_NO06` | スライミミック |
| `SUMMON_MN074_DNO_NO07` | スチームナイト |
| `SUMMON_MN075_DYH_NO35` | スチームナイトゴールド |
| `SUMMON_MN076_DYH_NO36` | スチームナイトダーク |
| `SUMMON_MN077_DYH_NO37` | マジシャン |
| `SUMMON_MN078_DYH_NO38` | ダークマジシャン |
| `SUMMON_MN079_DYH_NO39` | ネクロマンサー |
| `SUMMON_MN080_DYH_NO40` | ワイルドブル |
| `SUMMON_MN081_DYF_NO03` | ブルータルブル |
| `SUMMON_MN082_DYF_NO04` | ブラニーブル |
| `SUMMON_MN083_DYF_NO05` | エクスプロージョンＳ |
| `SUMMON_MN084_DNO_NO03` | ラバストーン |
| `SUMMON_MN085_DNO_NO04` | アイスストーン |
| `SUMMON_MN086_DNO_NO05` | シーフ |
| `SUMMON_MN087_DYH_NO41` | ロバー |
| `SUMMON_MN088_DYH_NO42` | アサシン |
| `SUMMON_MN089_DYH_NO43` | トレント |
| `SUMMON_MN091_DYO_PL01` | リグナスファイター |
| `SUMMON_MN092_DYO_PL02` | リビングソーン |
| `SUMMON_MN093_DYO_PL03` | シュリーカー |
| `SUMMON_MN094_DYO_ST01` | ファンガス |
| `SUMMON_MN095_DYO_ST02` | スポア |
| `SUMMON_MN096_DYO_ST03` | トロル |
| `SUMMON_MN097_DYH_NO45` | ストーンジャイアント |
| `SUMMON_MN098_DYH_NO46` | ファイアージャイアント |
| `SUMMON_MN099_DYH_NO47` | ゴールドドラゴン |
| `SUMMON_MN100_DYF_WI01` | ホワイトドラゴン |
| `SUMMON_MN101_DYF_WI02` | ブラックドラゴン |
| `SUMMON_MN102_DYF_WI03` | レッドドラゴン |
| `SUMMON_MN103_DYF_WI04` | ヴァンパイア |
| `SUMMON_MN104_DYH_NO48` | イフリート |
| `SUMMON_MN105_DYH_NO49` | ワイバーン |
| `SUMMON_MN106_DYB_WA01` | スチームシューター |
| `SUMMON_MN115_DYF_NO06` | スチームバトラー |
| `SUMMON_MN116_DYF_NO07` | アーマードフロッグ |
| `SUMMON_MN117_DYF_NO08` | ガーディアンフロッグ |
| `SUMMON_MN118_DYH_NO50` | アーマートードキング |
| `SUMMON_MN119_DYH_NO51` | サキュバス |
| `SUMMON_MN120_DYH_NO52` | スケルトンＦ |
| `SUMMON_MN121_DYH_WI09` | スケルトンナイトＦ |
| `SUMMON_MN128_DYH_NO02` | スケルトンメイジＦ |
| `SUMMON_MN129_DYH_NO05` | スケルトンアーチャーＦ |
| `SUMMON_MN130_DYH_NO03` | スケルトンＩ |
| `SUMMON_MN131_DYH_NO01` | スケルトンナイトＩ |
| `SUMMON_MN132_DYH_NO04` | スケルトンメイジＩ |
| `SUMMON_MN133_DYH_NO02` | ドワーブンスケルトンＩ |
| `SUMMON_MN134_DYH_NO05` | スケルトンアーチャーＩ |
| `SUMMON_MN135_DYH_NO03` | スケルトンＴ |
| `SUMMON_MN136_DYH_NO01` | スケルトンナイトＴ |
| `SUMMON_MN137_DYH_NO04` | スケルトンメイジＴ |
| `SUMMON_MN138_DYH_NO02` | ドワーブンスケルトンＴ |
| `SUMMON_MN139_DYH_NO05` | スケルトンアーチャーＴ |
| `SUMMON_MN140_DYH_NO03` | オークＦ |
| `SUMMON_MN141_DYH_NO01` | オークメイジＦ |
| `SUMMON_MN142_DYH_NO04` | オークチーフＦ |
| `SUMMON_MN143_DYH_NO23` | オークＩ |
| `SUMMON_MN144_DYH_NO24` | オークメイジＩ |
| `SUMMON_MN145_DYH_NO25` | オークチーフＩ |
| `SUMMON_MN146_DYH_NO23` | オークＴ |
| `SUMMON_MN147_DYH_NO24` | オークメイジＴ |
| `SUMMON_MN148_DYH_NO25` | オークチーフＴ |
| `SUMMON_MN149_DYH_NO23` | エルドワイバーン |
| `SUMMON_MN150_DYH_NO24` | ドラゴンゾンビ |
| `SUMMON_MN151_DYH_NO25` | ブルードラゴン |
| `SUMMON_MN152_DYB_WA02` | ガイトラッシュ |
| `SUMMON_MN153_DYF_WI03` | スパンキー |
| `SUMMON_MN154_DYF_WI05` | トロル・改 |
| `SUMMON_MN155_DYF_NO09` | リザードマン・改 |
| `SUMMON_MN156_DYH_AN19` | リザードマンレンジャー・改 |
| `SUMMON_MN157_DYH_NO45` | リザードマンランサー・改 |
| `SUMMON_MN158_DYH_AN01` | ガーディアンリザードマン・改 |
| `SUMMON_MN159_DYH_AN02` | ロイヤルリザードマン・改 |
| `SUMMON_MN160_DYH_AN03` | ボーゲスト |
| `SUMMON_MN161_DYH_AN04` | ジャンプー |
| `SUMMON_MN162_DYH_AN05` | バルキリークララ |
| `SUMMON_MN163_DYF_NO10` | バルキリー燕 |
| `SUMMON_MN168_DYH_NO60_1` | ディアボルガ |
| `SUMMON_MN168_DYH_NO60_2` | リッチ |
| `SUMMON_MN169_DYH_NO61_1` | デュラハン |
| `SUMMON_MN169_DYH_NO61_2` | サイクロプス |
| `SUMMON_MN170_DYH_NO62_1` | ラミア |
| `SUMMON_MN170_DYH_NO62_2` | テラー |
| `SUMMON_MN171_DYH_WI10_1` | ギルマン |
| `SUMMON_MN171_DYH_WI10_2` | カメポポン |
| `SUMMON_MN205_SELF` | ふぅ |
| `SUMMON_MN218_DYH_NO76` | セラフィー・ルカ |
| `SUMMON_MN219_DYH_NO77` | 鉄の竜 |
| `SUMMON_MN220_DYH_NO78` |  |
| `SUMMON_MN221_DYH_NO79` |  |
| `SUMMON_MN222_DYH_NO80` |  |
| `SUMMON_MN225_DYH_NO86` |  |
| `SUMMON_MN232_DYH_NO88_1` |  |
| `SUMMON_MN232_DYH_NO88_2` |  |
| `SUMMON_MN233_DYH_NO87_1` |  |
| `SUMMON_MN233_DYH_NO87_2` |  |
| `SUMMON_MN234_DYH_WI13_1` |  |
| `SUMMON_MN234_DYH_WI13_2` |  |
| `SUMMON_MN235_DYF_WI10_1` |  |
| `SUMMON_MN235_DYF_WI10_2` |  |
| `SUMMON_MN307_PRIVATE` |  |
