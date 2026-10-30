[EN](../en/quests.md) | [JA](../ja/quests.md) | [PT-BR](../pt-br/quests.md)

# Missões e masmorras

> Source: `project_d.xbe` .data table @ `0x575dc4`–`0x62b024` (`offline`/`versus`/`o41` records) + `extracted/game/dungeon/` asset corpus — reverse engineered

> Dados extraídos de **Quest of D 4.0 — The Battle Kingdom** (Sega Chihiro, `CDV-10035B`). A lógica de missões vive em módulos do cliente registrados por `FUN_0006c9c0` (ex.: `QUEST`, `QUEST_SYSTEM`); os dados de formato/rotação das masmorras chegam do servidor a cada sessão.

## Módulos de missão

`QUEST1` … `QUEST17` — 17 strings de missão/manipulador de missão aparecem no cliente. Junto a elas estão as strings de modo de evento `EVENT1`…`EVENT14` (correspondentes aos arquivos `trophy_event1-14.bin`), strings de versus `M_RING1-2`/`S_RING1-3`, e `MULTI1`…`MULTI10` (marcadas `INHOUSE` = LAN dentro da loja).

## Corpus de assets de masmorra

| path | count | what |
|---|---|---|
| `dungeon/dgn_dungeon_data_*.bin` | 394 | grafos de conectividade de salas — grafos pequenos (68–84 B) em árvore |
| `dungeon/map/dgn_map_data_*.bin` | 1544 | mapas de tiles de andar (~5,6 KB): dimensões, listas de tiles/objetos, floats, registros de instância |
| `dungeon/map/dgn_var_st*_*.bin` | 528 | overlays de mapa variantes por estágio |
| `dungeon/stage_model_data_ST*.bin` | 26 | definições de modelo de estágio (faixa `ST01`–`ST40`) |
| `media/dungeon/map/dgn_map_data_*.bin` | 2358 | mapas de tiles de andar (cópia do lado da mídia) |
| `media/dungeon/model_def/stage_model_data_*.bin` | 57 | definições de modelo: `ROOM_XX`, `ST0X`, `BOSS_XX` |
| `media/dungeon/trophy_data/trophy_*.bin` | 134 | dados de troféu: `trophy_dowa.bin`, `trophy_event1-14.bin`, troféus multi-evento |
| `light/{roomNN,bossNN,stNN}/` | 61 | conjuntos de iluminação por sala/estágio/chefe |
| `ghost_data/ghost_*.bin` | 486 | gravações de input de fantasma/replay |

## Geração e rotação (dirigida pelo servidor)

| field | role |
|---|---|
| `n_event_dungeon_id` + `n_event_dungeon_seed` | geração de masmorra por seed — a seed define a seleção de layout do pool de grafos/mapas |
| `dungeon_open_id` / `_start_hour` / `_end_hour` | rotação ao vivo — horas chegam ×60 |
| `vs_local_dungeon_open_*` | agenda de masmorra VS local (dentro da loja) |
| `ex_dungeon_floor_map` / `ex_dungeon_floor_image` / `ex_dungeon_boss` | tabelas de andares de masmorra EX (×10 slots cada) |

Rotação por hora: o id de masmorra aberta mais as horas de início/fim (×60) selecionam quais masmorras de missão estão disponíveis em qualquer horário. Masmorras de evento (`n_event_*`) adicionam layouts por seed, sobrescritas de regras (`n_event_rule`), limites de itens (`n_event_item_limit`) e bordas de ranking por classe (`n_event_border_num`, `n_event_top10_score_main/sub_job0-3`).

## Arenas de chefes

Definições de modelo de estágio `BOSS_00`–`BOSS_37` existem como strings; arquivos de modelo dedicados (`stage_model_data_BOSS_00`…`BOSS_29`) e conjuntos de luz (`light/boss00`…`boss29`) cobrem 17 arenas. Dentro de cada diretório de luz de chefe, a iluminação específica do chefe é nomeada:

`Balor` · `BlackDragon` · `BlackKnight` · `Efreet` · `Ethnea` · `Folgal1` ·
`Folgal2` · `GoldDragon` · `GoldKnight` · `RedDragon` · `WhiteDragon` ·
`Wyvern`

mais variantes `FakeBalor`, `DragonZombie` e `BlueDragon` em algumas arenas. As músicas de chefe `boss01.adx`–`boss15.adx` (+`boss04b`) correspondem ao elenco de arenas.

## Modelos de objetivo de missão (text.bin)

O servidor escolhe um modelo + parâmetros por exploração de masmorra:

| jp template | gloss |
|---|---|
| `迷宮内にある隠し宝箱を入手しろ` | obtenha o baú escondido no labirinto |
| `迷宮内にある宝箱をすべて入手しろ` | obtenha todos os baús do labirinto |
| `ダンジョンから脱出せよ` | escape da masmorra |
| `迷宮内の敵を N 匹以上倒せ` | derrote pelo menos N inimigos |
| `迷宮内の壷を N 個以上破壊せよ` | destrua pelo menos N potes |
| `お金を N G以上入手してクリアしろ` | colete pelo menos N de ouro |
| `トラップを利用して敵を N 匹以上倒せ` | derrote N inimigos usando armadilhas |
| `召喚モンスターで敵を N 匹以上倒せ` | derrote N inimigos com invocações |
| `魔法を使って敵を N 匹以上倒せ` | derrote N inimigos usando magia |
| `N 回以上ガードしてクリアしろ` | defenda N vezes e depois finalize |
| `N HIT以上のコンボをきめろ` | acerte um combo de N hits |
| `マップ完成度を N％以上でクリアしろ` | finalize com N% de conclusão do mapa |
| `被ダメージを N 以内でクリアしろ` | finalize recebendo ≤N de dano |
| `サブミッション成功` | submissão concluída |

## Chaves de resposta relacionadas a missões

`quest_id` · `quest_history_id` · `quest_status` · `quest_parameter` ·
`quest_counter` · `quest_deadline` · `quest_scenario_id` · `quest_text` ·
`request_id`

## Registros offline / versus

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

`OFFLINE_GG*` = chaves/pedras do modo offline (registros de gadget), `OFFLINE_RS21_GOLDKNIGHT` = chefe offline, `VERSUS_VS0*` = itens coletáveis do modo VS (ponto/power-up/level-up).

## Títulos de desempenho em masmorra

`鬼神` · `武聖` · `羅刹` · `無双` · `猛将` · `皆伝` · `闘士`
