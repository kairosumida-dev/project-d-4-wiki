[EN](../en/quests.md) | [JA](../ja/quests.md) | [PT-BR](../pt-br/quests.md)

# Quests & dungeons

Quest logic is split between the `QUEST_SYSTEM` and `QUEST` client modules (registered through `FUN_0006c9c0`) and **17 quest modules** (`QUEST1`–`QUEST17`). Dungeons are generated/rotated server-side and downloaded per session.

### Dungeon asset corpus

| path | count | what |
|---|---|---|
| `dungeon/dgn_dungeon_data_*.bin` | 391 | room connectivity graphs (tree edges, 68–84B each) |
| `dungeon/map/dgn_map_data_*.bin` | 1544 | floor tile maps (~5.6KB each) |
| `dungeon/map/dgn_var_st*_*.bin` | 528 | per-stage variant map overlays |
| `dungeon/stage_model_data_ST*.bin` | 26 | stage model defs (ST arenas) |
| `media/dungeon/map/dgn_map_data_*.bin` | 2358 | floor tile maps, media-side copy |
| `media/dungeon/model_def/stage_model_data_*.bin` | 57 | stage model defs (rooms, stages, boss arenas) |
| `media/dungeon/trophy_data/trophy_*.bin` | 134 | trophy data (dowa + event1-14) |
| `media/light/{roomNN,bossNN,stNN}/` | 58 | per-room/stage/boss lighting sets |
| `ghost_data/ghost_*.bin` | 486 | ghost/replay input recordings |

### Mission objective strings

Objective templates recovered from text.bin (server picks a template + parameters per dungeon; 「サブミッション」= submission):

| jp template | gloss |
|---|---|
| `迷宮内にある隠し宝箱を入手しろ` | Obtain the hidden treasure chest in the labyrinth |
| `迷宮内にある宝箱をすべて入手しろ` | Obtain every treasure chest in the labyrinth |
| `ダンジョンから脱出せよ` | Escape from the dungeon |
| `迷宮内の敵を N 匹以上倒せ` | Defeat at least N enemies in the labyrinth |
| `迷宮内の壷を N 個以上破壊せよ` | Destroy at least N pots in the labyrinth |
| `お金を N G以上入手してクリアしろ` | Collect at least N G and clear the quest |
| `トラップを利用して敵を N 匹以上倒せ` | Use traps to defeat at least N enemies |
| `召喚モンスターで敵を N 匹以上倒せ` | Defeat at least N enemies with summoned monsters |
| `魔法を使って敵を N 匹以上倒せ` | Defeat at least N enemies using magic |
| `N 回以上ガードしてクリアしろ` | Guard at least N times, then clear the quest |
| `N HIT以上のコンボをきめろ` | Land a combo of at least N hits |
| `マップ完成度を N％以上でクリアしろ` | Clear with map completion of at least N% |
| `被ダメージを N 以内でクリアしろ` | Clear while taking no more than N damage |
| `サブミッション成功` | Submission successful |

### Dungeon scheduling

`init_response` carries the live rotation: `dungeon_open_id`/`_start_hour`/`_end_hour` ×60, `vs_local_dungeon_open_*` ×60 and `ex_dungeon_floor_map/image/boss` ×10. `event_response` adds event dungeons — `n_event_dungeon_id` + `n_event_dungeon_seed` drive **seeded dungeon generation** with `n_event_rule` and per-job ranking borders.

### Quest-related response keys

`quest_id` · `quest_history_id` · `quest_status` · `quest_parameter` · `quest_counter` · `quest_deadline` · `quest_scenario_id` · `quest_text` · `request_id`

### Offline/quest items

`offline` table (quest keys/keystones) and the `versus` table:

| internal id | jp |
|---|---|
| `OFFLINE_GG01_KEY_RED` | — |
| `OFFLINE_GG02_KEY_BLUE` | — |
| `OFFLINE_GG03_KEY_GOLD` | — |
| `OFFLINE_GG18_KEY_STONE1` | — |
| `OFFLINE_GG19_KEY_STONE2` | — |
| `OFFLINE_GG20_KEY_STONE3` | — |
| `OFFLINE_RS21_GOLDKNIGHT` | — |

| internal id | jp |
|---|---|
| `VERSUS_VS01_POINT` | — |
| `VERSUS_VS02_PWRUP` | — |
| `VERSUS_VS03_LVLUP` | — |

### Rank titles

In-dungeon performance titles found in text.bin:

`鬼神` · `武聖` · `羅刹` · `無双` · `猛将` · `皆伝` · `闘士`
