[EN](../en/protocol.md) | [JA](../ja/protocol.md) | [PT-BR](../pt-br/protocol.md)

# Protocolo de rede

> Source: `project_d.xbe` + `SpPrjdGameServer.vXXXXX` command-dispatch table (`prjdNwArrivedDataPacket` @ `0x0804a294`, `cmd_string_tbl` @ file `0x1b1a0`) — reverse engineered

> O tráfego servidor→cliente usa mensagens de "resposta" em chave-valor (`command` + `protocol_version`="aeaaee45"); o tráfego de jogo dentro da sala usa o dispatch de 64 comandos abaixo. A simulação de batalha é majoritariamente **do lado do cliente** — o servidor da sala é principalmente um retransmissor + árbitro de recursos compartilhados. O cliente entra na sala nacional em `cherubim.questofd.net`; o modo `inhouse` é LAN dentro da loja.

## Comandos de pacote de jogo (0–63)

| cmd | name | notes |
|---|---|---|
| 0 | `INVALID PACKET` | |
| 1 | `OK` | |
| 2 | `NG` | |
| 3 | `CLIENT INFO` | blob de 0xAC bytes por jogador |
| 4 | `READY` | todos prontos → GAME START |
| 5 | `GAME START` | |
| 6 | `GAME OVER` | |
| 7 | `DEAD ROBOT` | marca `dead_list[]` |
| 8 | `CONTINUE` | limpa `dead_list[]` |
| 9 | `RAND` | |
| 10 | `EQUIP` | |
| 11 | `SWITCH` | |
| 12 | `USE` | **1.x DEPRECATED** |
| 13 | `PICK` | 1.x DEPRECATED |
| 14 | `DROP` | 1.x DEPRECATED |
| 15 | `THROW` | 1.x DEPRECATED |
| 16 | `ITEM INQ` | 1.x DEPRECATED |
| 17 | `TRAP SW` | bits de chave de armadilha por robid (≤0x400 armadilhas) |
| 18 | `GIMMICK` | retransmissão pura da sala |
| 19 | `LOCK GATE` | bitmask de jogadores por portão; o grupo segura os portões |
| 20 | `CLIENT READY` | |
| 21 | `SERVER READY` | |
| 22 | `ROB STATE` | |
| 23 | `THROW RESULT ITEM` | 1.1.2 DEPRECATED |
| 24 | `MV FLOOR` | |
| 25 | `TREASURE BOX` | máquina de estado de abertura de baú |
| 26 | `CINFO ITEM` | relatório de item/ping por jogador |
| 27 | `THROW RESULT ITEM` | DEPRECATED |
| 28 | `GLOCK` | retransmissão pura da sala; `GlockFlagManager` remove duplicatas |
| 29 | `HEARTBEAT` | |
| 30 | `DEBUG` | |
| 31 | `R_ECHO` | eco do canal confiável |
| 32 | `U_ECHO` | eco do canal UDP |
| 33 | `COMM DATA` | retransmissão pura da sala |
| 34 | `MONSTER DATA` | sincronização de monstros |
| 35 | `MONSTER BOSS` | sincronização de chefe |
| 36 | `MONSTER DATA IH` | variante in-house (loja local) |
| 37 | `MONSTER BOSS IH` | variante in-house (loja local) |
| 38 | `USE FREE` | DEPRECATED |
| 39 | `STEAL` | DEPRECATED |
| 40 | `ACTIVE SKILL` | |
| 41–50 | *unused* | |
| 51 | `USE ITEM` | |
| 52 | `PICK ITEM` | servidor concede/nega via `item_free[]` |
| 53 | `DROP ITEM` | |
| 54 | `THROW ITEM` | |
| 55 | `INQ ITEM` | |
| 56 | `THROW RESULT ITEM` | |
| 57 | `USE AND FREE ITEM` | |
| 58 | `STEAL ITEM` | transfere posse de `item_free[]` (quase PvP) |
| 59–63 | *unused* | |

## Estado de arbitragem do servidor (struct `sv->`)

| field | meaning |
|---|---|
| `item_free[]` | posse de itens no chão da masmorra; concede/nega coletas |
| `trap_sw[]` | bits de chave de armadilha por robid (≤0x400 armadilhas); broadcast ON/OFF |
| `lock_gate[]` | bitmask de jogadores por portão |
| `tbox_status[]` | máquina de estado de abertura de baú |
| `dead_list[]` | flags de entidades mortas (cmd 7 marca, cmd 8 limpa) |
| `client_info[]` | blob de 0xAC bytes por jogador; todos READY → GAME START |
| `cinfo_item(2,3)_result` | relatórios de item/ping por jogador agregados |

## Fatos do protocolo

- `angelReceiveData` @ `0x289170`: `select` → `recv` de frames 0x380B → magic `0xba4766` → `kkAllExchangeHeaderNtoH` → `kkDispatchingPacket`.
- Canais RUDP (confiável) + UDP: cmds 31/32 são ecos; 0x21–0x23 são broadcasts UDP.
- `GLOCK`/`GIMMICK`/`COMM DATA` = retransmissões puras da sala.
- `MONSTER DATA IH`/`MONSTER BOSS IH` = variantes de sincronização de monstros in-house (loja local).
- Chamada de entrada no lobby: `FUN_000cf610(cfg, "Project-D", "sega-nw-Dungeon", mode|0x20, …)`
- Modos de rede: `net nationwide main|local`, `net guild main|local`, `net Ikebukuro main|local`, `net inhouse main|local` — `inhouse` = co-op em LAN dentro da loja.
- Registro de comandos: `FUN_0006c9c0(-1, 3, "QUEST", 0, 0, 0, &handler)` — tabela nome→callback.

## Chaves de init_response / event_response (seleção)

| key(s) | meaning |
|---|---|
| `place_name` / `prefecture` | local do fliperama (matchmaking regional) |
| `cherubim_ip` | IP do servidor de jogo a conectar |
| `match_wait_time` | tempo limite de matchmaking |
| `dungeon_open_id` ×60, `_start_hour` ×60, `_end_hour` ×60 | agenda de rotação de masmorras |
| `vs_local_dungeon_open_*` ×60 | agenda de masmorras VS locais |
| `ex_dungeon_floor_map` / `image` / `boss` ×10 | tabelas de andares de masmorras EX |
| `vs_convention_name` / `rank_bonus` / `border_limit_job0-3` / `border_num_job0-3` | config de torneio VS, 4 classes |
| `vs_capture_limit`, `vs_capture_per_{all,guild,local}_{silver,gold}` | mecânicas de captura |
| `n_event_id` / `status` / `start_time` / `end_time` / `name` | ciclo de vida de eventos |
| `n_event_dungeon_id` + `n_event_dungeon_seed` | geração de masmorra por seed |
| `n_event_rule`, `n_event_item_limit` | regras de evento / limite de itens |
| `n_event_border_num` / `limit_main` / `sub_job0-3` | bordas de ranking |
| `n_event_top10_score_main` / `sub_job0-3` | pontuações top-10 |
| `n_event_stamp`, `n_event_item_main` / `sub` / `sub2` | selo + itens de recompensa |
