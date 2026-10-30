[EN](../en/quests.md) | [JA](../ja/quests.md) | [PT-BR](../pt-br/quests.md)

# Missões e masmorras

A lógica de missões se divide entre os módulos `QUEST_SYSTEM` e `QUEST` do cliente (registrados via `FUN_0006c9c0`) e **17 módulos de missão** (`QUEST1`–`QUEST17`). As masmorras são geradas/alternadas no servidor e baixadas por sessão.

### Acervo de assets de masmorra

| caminho | qtd | conteúdo |
|---|---|---|
| `dungeon/dgn_dungeon_data_*.bin` | 391 | grafos de conectividade de salas (arestas de árvore, 68–84B cada) |
| `dungeon/map/dgn_map_data_*.bin` | 1544 | mapas de tiles de andar (~5,6KB cada) |
| `dungeon/map/dgn_var_st*_*.bin` | 528 | overlays de variantes por estágio |
| `dungeon/stage_model_data_ST*.bin` | 26 | definições de modelo de estágio (arenas ST) |
| `media/dungeon/map/dgn_map_data_*.bin` | 2358 | mapas de tiles de andar, cópia em media |
| `media/dungeon/model_def/stage_model_data_*.bin` | 57 | definições de modelo de estágio (salas, estágios, arenas de chefe) |
| `media/dungeon/trophy_data/trophy_*.bin` | 134 | dados de troféu (dowa + event1-14) |
| `media/light/{roomNN,bossNN,stNN}/` | 58 | conjuntos de iluminação por sala/estágio/chefe |
| `ghost_data/ghost_*.bin` | 486 | gravações de input de ghost/replay |

### Templates de objetivo de missão

Templates de objetivo recuperados do text.bin (o servidor escolhe template + parâmetros por masmorra; 「サブミッション」= submissão):

| template jp | tradução |
|---|---|
| `迷宮内にある隠し宝箱を入手しろ` | Obtenha o baú de tesouro escondido no labirinto |
| `迷宮内にある宝箱をすべて入手しろ` | Obtenha todos os baús de tesouro do labirinto |
| `ダンジョンから脱出せよ` | Fuja da masmorra |
| `迷宮内の敵を N 匹以上倒せ` | Derrote pelo menos N inimigos no labirinto |
| `迷宮内の壷を N 個以上破壊せよ` | Destrua pelo menos N potes no labirinto |
| `お金を N G以上入手してクリアしろ` | Colete pelo menos N G e conclua a missão |
| `トラップを利用して敵を N 匹以上倒せ` | Use armadilhas para derrotar pelo menos N inimigos |
| `召喚モンスターで敵を N 匹以上倒せ` | Derrote pelo menos N inimigos com monstros invocados |
| `魔法を使って敵を N 匹以上倒せ` | Derrote pelo menos N inimigos usando magia |
| `N 回以上ガードしてクリアしろ` | Defenda-se pelo menos N vezes e conclua a missão |
| `N HIT以上のコンボをきめろ` | Acerte um combo de pelo menos N hits |
| `マップ完成度を N％以上でクリアしろ` | Conclua com pelo menos N% do mapa completado |
| `被ダメージを N 以内でクリアしろ` | Conclua sofrendo no máximo N de dano |
| `サブミッション成功` | Submissão bem-sucedida |

### Agendamento de masmorras

`init_response` carrega a rotação ativa: `dungeon_open_id`/`_start_hour`/`_end_hour` ×60, `vs_local_dungeon_open_*` ×60 e `ex_dungeon_floor_map/image/boss` ×10. `event_response` adiciona masmorras de evento — `n_event_dungeon_id` + `n_event_dungeon_seed` alimentam a **geração de masmorra por seed** com `n_event_rule` e bordas de ranking por classe.

### Chaves de resposta de missão

`quest_id` · `quest_history_id` · `quest_status` · `quest_parameter` · `quest_counter` · `quest_deadline` · `quest_scenario_id` · `quest_text` · `request_id`

### Itens offline/de missão

Tabela `offline` (chaves/pedras-chave de missão) e tabela `versus`:

| id interno | jp |
|---|---|
| `OFFLINE_GG01_KEY_RED` | — |
| `OFFLINE_GG02_KEY_BLUE` | — |
| `OFFLINE_GG03_KEY_GOLD` | — |
| `OFFLINE_GG18_KEY_STONE1` | — |
| `OFFLINE_GG19_KEY_STONE2` | — |
| `OFFLINE_GG20_KEY_STONE3` | — |
| `OFFLINE_RS21_GOLDKNIGHT` | — |

| id interno | jp |
|---|---|
| `VERSUS_VS01_POINT` | — |
| `VERSUS_VS02_PWRUP` | — |
| `VERSUS_VS03_LVLUP` | — |

### Títulos de classe

Títulos de desempenho em masmorra no text.bin:

`鬼神` · `武聖` · `羅刹` · `無双` · `猛将` · `皆伝` · `闘士`
