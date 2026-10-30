[EN](../en/cards.md) | [JA](../ja/cards.md) | [PT-BR](../pt-br/cards.md)

# Cards & the IC-card system

> Source: `project_d.xbe` .data table @ `0x65d7a4`–`0x662b24` (`summon`) + client strings / save-field names — reverse engineered

> Extracted data for **Quest of D 4.0 — The Battle Kingdom** (Sega Chihiro, `CDV-10035B`). This page collects the string/symbol evidence for the card hardware and the on-card save data. Physical reader behaviour is evidenced by I/O strings and save structures; individual gameplay semantics are only partially decoded.

Quest of D uses **two card layers**: the player's **IC save card** (character data, like other Sega Chihiro/ALL.Net card games) and **dispensed deck cards** — physical cards the machine prints, each representing an in-game item or summoned monster.

## Reader hardware evidence

| string / symbol | role |
|---|---|
| `sens_card` | IC card-present sensor |
| `card_lock` | locks the IC card inside the reader |
| `card_unlock_instant` | instant eject/unlock |
| `DFOCECARD_RED_LEFT` | left card-slot indicator LED (red) |
| `ICCARD_RED_RIGHT` | right card-slot indicator LED (red) |
| `DECK READER`, `DECK READER DOOR OPEN` | deck-card unit + door (test menu) |
| `SEL_DM_VDECK` | virtual deck reader selector |

## IC card lifecycle strings (Shift-JIS, from text.bin)

| raw jp | meaning |
|---|---|
| `・新規カード` | new card |
| `・更新済みのカード` | renewed card |
| `・使用回数限度のカード` | card at usage-count limit |
| `・データが壊れているカード` | corrupted card |
| `フォーマットバージョン違いのカード` | different format version |
| `リリースバージョン違いのカード` | different release version |
| `ＱＵＥＳＴ＿ＯＦ＿Ｄ以外のカード` | not a QUEST_OF_D card |
| `このカードでの再発行はあと一回までです` | can be reissued only once more |
| `このカードは前回正常終了していません` | previous session ended abnormally |
| `再発行専用カードではありません` | not a reissue-only card |
| `カードが２枚挿入されています` | two cards inserted |
| `ＩＣカードに書き込み中です` | writing to IC card |
| `デッキカードを排出しました` | deck card dispensed |
| `ＩＣカード，デッキカードの取り忘れにご注意ください` | don't forget IC card & deck card |

Service modes visible in menu strings: `＜ＩＣカード挿入モード＞`, `＜カード更新モード＞`, `ＩＣカード復旧モード` / `＜カード復旧モード＞`. Cards are PIN-protected (暗証番号); three consecutive failures lock the card until the next day. One string bans Ver.2.0 location-test cards.

## Save record (per card)

The save/party loader (`FUN_000de7c0`) reads up to **12 player slots** with these field names:

`player_name` · `job` · `card_id` · `stage_id` · `get_date` · `numof_item` · `item_id` · `item_nm`

Other card-related keys in the binary: `card_id%d`, `card_trade`, `card_trade%d`, `card_reissue_status`, `card_ban_flag`, `card_item_send`, `card_item_receive`, `card_send_gold_amount`, `multi_history_card_id`, `old_card_id`, `rr_card_id` — evidence for card trading, reissue tracking, ban flags, and item/gold transfer between cards.

## Player jobs (card characters)

Four main jobs appear throughout skill/quest/server data:

| job | role |
|---|---|
| `FIGHTER` | melee front-liner |
| `THIEF` | speed/trap/ranged job |
| `WIZARD` | offensive caster |
| `PRIEST` | healer/support caster |

Internal sub-job / weapon-class codes used in skill, book and server records (`vs_border_limit_job0-3` etc.):

`MA` (monk) · `NI` (ninja) · `KA` `KS` `MA` `NC` `NI` `RA` `RS` `SP` `ST` `YU`/`YZ` (weapon classes — see items) · `BARRIER` (barrier line) · `ALL` (party-wide)

## Deck cards as in-game items

Every dungeon pickup is a card. The strongest evidence is the `text.bin`
summon-card block (~entries 3036–3352): each summonable monster owns a
`〈name〉を召喚するためのカード` ("card to summon 〈name〉") string — i.e.
physical deck cards literally carry the summon spell. Equipment records
`MONST_SUMMON_ARMOR_*` / `MONST_SUMMON_ACCESS_*` show summoned monsters can
equip items too.

`auth2d/card.bin` (also `media/auth2d/card.bin`) is the sprite/atlas
definition for card faces used by the UI — binary, not yet decoded beyond
its role as the card-image table.

## Unresolved

- Exact on-card record layout (fields above are names only)
- Deck-card print/dispense protocol details
- How `card_trade` / `card_send_gold_amount` were exposed in-game
