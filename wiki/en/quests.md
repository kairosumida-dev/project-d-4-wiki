[EN](../en/quests.md) | [JA](../ja/quests.md) | [PT-BR](../pt-br/quests.md)

# Quests & dungeons

> Source: `project_d.xbe` .data table @ `0x575dc4`–`0x62b024` (`offline`/`versus`/`o41` records) + `extracted/game/dungeon/` asset corpus — reverse engineered

> Extracted data for **Quest of D 4.0 — The Battle Kingdom** (Sega Chihiro, `CDV-10035B`). Quest logic lives in client modules registered through `FUN_0006c9c0` (e.g. `QUEST`, `QUEST_SYSTEM`); dungeon shape/rotation data arrives from the server per session.

## Quest modules

`QUEST1` … `QUEST17` — 17 quest/quest-handler strings appear in the client. Alongside them sit event mode strings `EVENT1`…`EVENT14` (matching the `trophy_event1-14.bin` files), versus strings `M_RING1-2`/`S_RING1-3`, and `MULTI1`…`MULTI10` (marked `INHOUSE` = in-store LAN).

## Dungeon asset corpus

| path | count | what |
|---|---|---|
| `dungeon/dgn_dungeon_data_*.bin` | 394 | room connectivity graphs — small (68–84 B) tree-like room graphs |
| `dungeon/map/dgn_map_data_*.bin` | 1544 | floor tile maps (~5.6 KB): dimensions, tile/object lists, floats, instance records |
| `dungeon/map/dgn_var_st*_*.bin` | 528 | per-stage variant map overlays |
| `dungeon/stage_model_data_ST*.bin` | 26 | stage model definitions (`ST01`–`ST40` range) |
| `media/dungeon/map/dgn_map_data_*.bin` | 2358 | floor tile maps (media-side copy) |
| `media/dungeon/model_def/stage_model_data_*.bin` | 57 | model defs: `ROOM_XX`, `ST0X`, `BOSS_XX` |
| `media/dungeon/trophy_data/trophy_*.bin` | 134 | trophy data: `trophy_dowa.bin`, `trophy_event1-14.bin`, multi-event trophies |
| `light/{roomNN,bossNN,stNN}/` | 61 | per-room/stage/boss lighting sets |
| `ghost_data/ghost_*.bin` | 486 | ghost/replay input recordings |

## Generation & rotation (server-driven)

| field | role |
|---|---|
| `n_event_dungeon_id` + `n_event_dungeon_seed` | seeded dungeon generation — the seed drives layout selection from the graph/map pool |
| `dungeon_open_id` / `_start_hour` / `_end_hour` | live rotation — hours arrive ×60 |
| `vs_local_dungeon_open_*` | local (in-store) VS dungeon schedule |
| `ex_dungeon_floor_map` / `ex_dungeon_floor_image` / `ex_dungeon_boss` | EX dungeon floor tables (×10 slots each) |

Hourly rotation: the open-dungeon id plus start/end hours (×60) select which
quest dungeons are available at any wall-clock hour. Event dungeons
(`n_event_*`) add seeded layouts, rule overrides (`n_event_rule`), item
limits (`n_event_item_limit`) and per-job ranking borders
(`n_event_border_num`, `n_event_top10_score_main/sub_job0-3`).

## Boss arenas

Stage model defs `BOSS_00`–`BOSS_37` exist as strings; dedicated model files
(`stage_model_data_BOSS_00`…`BOSS_29`) and light sets (`light/boss00`…`boss29`)
cover 17 arenas. Inside each boss light directory the boss-specific
lighting is named:

`Balor` · `BlackDragon` · `BlackKnight` · `Efreet` · `Ethnea` · `Folgal1` ·
`Folgal2` · `GoldDragon` · `GoldKnight` · `RedDragon` · `WhiteDragon` ·
`Wyvern`

plus `FakeBalor`, `DragonZombie` and `BlueDragon` variants in some arenas.
Boss music `boss01.adx`–`boss15.adx` (+`boss04b`) matches the arena roster.

## Mission objective templates (text.bin)

Server picks a template + parameters per dungeon run:

| jp template | gloss |
|---|---|
| `迷宮内にある隠し宝箱を入手しろ` | obtain the hidden chest in the labyrinth |
| `迷宮内にある宝箱をすべて入手しろ` | obtain every chest in the labyrinth |
| `ダンジョンから脱出せよ` | escape from the dungeon |
| `迷宮内の敵を N 匹以上倒せ` | defeat at least N enemies |
| `迷宮内の壷を N 個以上破壊せよ` | destroy at least N pots |
| `お金を N G以上入手してクリアしろ` | collect at least N gold |
| `トラップを利用して敵を N 匹以上倒せ` | defeat N enemies using traps |
| `召喚モンスターで敵を N 匹以上倒せ` | defeat N enemies with summons |
| `魔法を使って敵を N 匹以上倒せ` | defeat N enemies using magic |
| `N 回以上ガードしてクリアしろ` | guard N times then clear |
| `N HIT以上のコンボをきめろ` | land an N-hit combo |
| `マップ完成度を N％以上でクリアしろ` | clear at N% map completion |
| `被ダメージを N 以内でクリアしろ` | clear with ≤N damage taken |
| `サブミッション成功` | submission success |

## Quest-related response keys

`quest_id` · `quest_history_id` · `quest_status` · `quest_parameter` ·
`quest_counter` · `quest_deadline` · `quest_scenario_id` · `quest_text` ·
`request_id`

## Offline / versus records

| internal id | jp |
|---|---|
| `OFFLINE_GG01_KEY_RED` | — |
| `OFFLINE_GG02_KEY_BLUE` | — |
| `OFFLINE_GG03_KEY_GOLD` | — |
| `OFFLINE_GG18_KEY_STONE1` | — |
| `OFFLINE_GG19_KEY_STONE2` | — |
| `OFFLINE_GG20_KEY_STONE3` | — |
| `OFFLINE_RS21_GOLDKNIGHT` | — |
| `VERSUS_VS01_POINT` | — |
| `VERSUS_VS02_PWRUP` | — |
| `VERSUS_VS03_LVLUP` | — |

`OFFLINE_GG*` = offline-mode keys/stones (gadget records), `OFFLINE_RS21_GOLDKNIGHT` = offline boss, `VERSUS_VS0*` = VS-mode pickups (point/power-up/level-up).

## In-dungeon performance titles

`鬼神` · `武聖` · `羅刹` · `無双` · `猛将` · `皆伝` · `闘士`
