[EN](../en/protocol.md) | [JA](../ja/protocol.md) | [PT-BR](../pt-br/protocol.md)

# Protocolo de rede

Duas camadas: o protocolo de sessão do middleware **KK "Kage"** (request/response chave-valor sobre SCTP — `ESCTPoU`) e o **protocolo de jogo em sala** (relé de 64 comandos) dentro do `SpPrjdGameServer`. Magic de transporte `0xba4766`, tamanho de frame `0x380B`; entrada do cliente `angelReceiveData` @0x289170, dispatcher `prjdNwArrivedDataPacket` @0x0804a294.

### Daemons do servidor (payload `angel` do GD-ROM)

| daemon | tamanho | papel |
|---|---|---|
| `Virtues` | 758K / ~437 fns | gerente de salas de jogo (JoinUserIntoGameRoom, GameRoomAllocateByUser, ChangeGameRoomAttribute, StartVoiceChat) |
| `Dominions` | — | matchmaking (add_player_to_matching_list, IsSameLevel, QueryPlayers, GetWorldUniqueGameRoomName) |
| `Cherubim` | — | autenticação/sessão de usuário (LoadUserLoginFile, CreateUser, CheckUserName, FindRegisteredUser) — cliente disca para `cherubim.questofd.net` |
| `Seraphim` | — | registro de classes de jogo / supervisor |
| `SpPrjdGameServer.vXXXXX` | v40000 = 885K / ~555 fns | host de sessão por sala — quase só relé; a simulação de batalha é no cliente |
| `PrjdGameServer.v1XXXX` | — | servidor de jogo antigo do protocolo angel (v1.x) |
| `spgsed / sp_gse` | — | lança SpPrjdGameServer.vNNNNN via gse remsh (GsedListenPort=40000) |
| `sp_distributor` | — | SpDistributor @ 192.168.20.8:30050 tcp+udp (sphingo.ini) |

### Pares request/response

Mensagens servidor→cliente são documentos chave-valor `*_response` com `command` + `protocol_version` (`aeaaee45`). Nomes de request recuperados do binário:

`attend_request`/`attend_response` · `auth_request`/`auth_response` · `danirank_request`/`danirank_response` · `defrank_request`/`defrank_response` · `end_request`/`end_response` · `event_request`/`event_response` · `gamepara_request`/`gamepara_response` · `init_request`/`init_response` · `itempara_request`/`itempara_response` · `live_free_request`/`live_free_response` · `news_request`/`news_response` · `passcode_request`/`passcode_response` · `ranking_request`/`ranking_response` · `recover_request`/`recover_response` · `registapply_request`/`registapply_response` · `registcancel_request`/`registcancel_response` · `reissue_request`/`reissue_response` · `reissueapply_request`/`reissueapply_response` · `rirank_request`/`rirank_response` · `shop_request`/`shop_response` · `srgen_request`/`srgen_response` · `start_request`/`start_response` · `verify_request`/`verify_response` · `vs_cr_request`/`vs_cr_response` · `vs_dr_request`/`vs_dr_response`

### Comandos de jogo em sala (cmd_string_tbl)

| # | comando | nota |
|---|---|---|
| 0 | `INVALID PACKET` |  |
| 1 | `OK` |  |
| 2 | `NG` |  |
| 3 | `CLIENT INFO` |  |
| 4 | `READY` |  |
| 5 | `GAME START` |  |
| 6 | `GAME OVER` |  |
| 7 | `DEAD ROBOT` |  |
| 8 | `CONTINUE` |  |
| 9 | `RAND` |  |
| 10 | `EQUIP` |  |
| 11 | `SWITCH` |  |
| 12 | `USE` | deprecado na 1.x |
| 13 | `PICK` | deprecado na 1.x |
| 14 | `DROP` | deprecado na 1.x |
| 15 | `THROW` | deprecado na 1.x |
| 16 | `ITEM INQ` | deprecado na 1.x |
| 17 | `TRAP SW` |  |
| 18 | `GIMMICK` |  |
| 19 | `LOCK GATE` |  |
| 20 | `CLIENT READY` |  |
| 21 | `SERVER READY` |  |
| 22 | `ROB STATE` |  |
| 23 | `THROW RESULT ITEM` | deprecado na 1.1.2 |
| 24 | `MV FLOOR` |  |
| 25 | `TREASURE BOX` |  |
| 26 | `CINFO ITEM` |  |
| 27 | `THROW RESULT ITEM` | deprecado |
| 28 | `GLOCK` |  |
| 29 | `HEARTBEAT` |  |
| 30 | `DEBUG` |  |
| 31 | `R_ECHO` |  |
| 32 | `U_ECHO` |  |
| 33 | `COMM DATA` |  |
| 34 | `MONSTER DATA` |  |
| 35 | `MONSTER BOSS` |  |
| 36 | `MONSTER DATA IH` |  |
| 37 | `MONSTER BOSS IH` |  |
| 38 | `USE_FREE` | deprecado |
| 39 | `STEAL` | deprecado |
| 40 | `ACTIVE SKILL` |  |
| 41 | `—` | sem uso |
| 42 | `—` | sem uso |
| 43 | `—` | sem uso |
| 44 | `—` | sem uso |
| 45 | `—` | sem uso |
| 46 | `—` | sem uso |
| 47 | `—` | sem uso |
| 48 | `—` | sem uso |
| 49 | `—` | sem uso |
| 50 | `—` | sem uso |
| 51 | `USE ITEM` |  |
| 52 | `PICK ITEM` |  |
| 53 | `DROP ITEM` |  |
| 54 | `THROW ITEM` |  |
| 55 | `INQ ITEM` |  |
| 56 | `THROW RESULT ITEM` |  |
| 57 | `USE AND FREE ITEM` |  |
| 58 | `STEAL ITEM` |  |
| 59 | `—` | sem uso |
| 60 | `—` | sem uso |
| 61 | `—` | sem uso |
| 62 | `—` | sem uso |
| 63 | `—` | sem uso |

### Estado de arbitragem do servidor

O servidor é um relé + árbitro de recursos compartilhados. Campos de estado por sala:

| campo(s) | significado |
|---|---|
| `item_free[]` | posse de itens de chão da masmorra; concede/nega coletas; STEAL ITEM transfere posse (quase PvP) |
| `trap_sw[]` | bits de interruptor de armadilha por robid (≤0x400); transições ON/OFF em broadcast |
| `lock_gate[]` | bitmask de jogadores por portão; o grupo segura portões |
| `tbox_status[]` | máquina de estados de abertura de baú |
| `dead_list[]` | flags de entidades mortas; DEAD ROBOT marca, CONTINUE limpa |
| `client_info[]` | blob de 0xAC bytes por jogador; todos READY → GAME START |
| `cinfo_item(2,3)_result` | relatórios de item/ping por jogador agregados |

### Campos de init_response

| campo(s) | significado |
|---|---|
| `place_name / prefecture` | local do fliperama (matchmaking regional) |
| `cherubim_ip` | IP do servidor de jogo a conectar |
| `match_wait_time` | timeout de matchmaking |
| `dungeon_open_id ×60 / _start_hour ×60 / _end_hour ×60` | rotação de masmorras |
| `vs_local_dungeon_open_* ×60` | agenda de masmorras VS locais |
| `ex_dungeon_floor_map / image / boss ×10` | tabelas de andares de masmorra EX |
| `vs_convention_name / rank_bonus / border_limit_job0-3 / border_num_job0-3` | config de torneio VS, 4 classes |
| `vs_capture_limit, vs_capture_per_{all,guild,local}_{silver,gold}` | mecânica de captura VS |

### Campos de event_response

`n_event_id` · `n_event_status` · `n_event_start_time` · `n_event_end_time` · `n_event_name` · `n_event_dungeon_id` · `n_event_dungeon_seed` · `n_event_rule` · `n_event_item_limit` · `n_event_border_num / limit_main / sub_job0-3` · `n_event_top10_score_main / sub_job0-3` · `n_event_stamp` · `n_event_item_main / sub / sub2`

### Diversos

- `GlockFlagManager` remove duplicatas de pacotes de flag (cmd 28 `GLOCK`).
- Canais RUDP (confiável) + UDP: cmds 31/32 echo, broadcasts UDP 0x21–0x23.
- `GLOCK`/`GIMMICK`/`COMM DATA` = relés de sala puros.
- `MONSTER DATA IH` / `MONSTER BOSS IH` = variantes de sincronização de monstros in-house (LAN da loja).
