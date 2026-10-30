[EN](../en/protocol.md) | [JA](../ja/protocol.md) | [PT-BR](../pt-br/protocol.md)

# Network protocol

Two protocol layers: the **KK "Kage" middleware** session protocol (key-value request/response over SCTP — `ESCTPoU`) and the **in-room game protocol** (64-command relay) inside `SpPrjdGameServer`. Transport magic `0xba4766`, frame size `0x380B`; client entry `angelReceiveData` @0x289170, dispatcher `prjdNwArrivedDataPacket` @0x0804a294.

### Server daemons (GD-ROM `angel` payload)

| daemon | size | role |
|---|---|---|
| `Virtues` | 758K / ~437 fns | game-room manager (JoinUserIntoGameRoom, GameRoomAllocateByUser, ChangeGameRoomAttribute, StartVoiceChat) |
| `Dominions` | — | matchmaking (add_player_to_matching_list, IsSameLevel, QueryPlayers, GetWorldUniqueGameRoomName) |
| `Cherubim` | — | user auth/session (LoadUserLoginFile, CreateUser, CheckUserName, FindRegisteredUser) — client dials `cherubim.questofd.net` |
| `Seraphim` | — | game-class registry / supervisor |
| `SpPrjdGameServer.vXXXXX` | v40000 = 885K / ~555 fns | per-room session host — mostly a relay; battle sim is client-side |
| `PrjdGameServer.v1XXXX` | — | older angel-protocol game server (v1.x) |
| `spgsed / sp_gse` | — | gse remsh spawner of SpPrjdGameServer.vNNNNN (GsedListenPort=40000) |
| `sp_distributor` | — | SpDistributor @ 192.168.20.8:30050 tcp+udp (sphingo.ini) |

### Request/response pairs

Server→client messages are key-value `*_response` documents keyed by `command` + `protocol_version` (`aeaaee45`). Request names recovered from the binary:

`attend_request`/`attend_response` · `auth_request`/`auth_response` · `danirank_request`/`danirank_response` · `defrank_request`/`defrank_response` · `end_request`/`end_response` · `event_request`/`event_response` · `gamepara_request`/`gamepara_response` · `init_request`/`init_response` · `itempara_request`/`itempara_response` · `live_free_request`/`live_free_response` · `news_request`/`news_response` · `passcode_request`/`passcode_response` · `ranking_request`/`ranking_response` · `recover_request`/`recover_response` · `registapply_request`/`registapply_response` · `registcancel_request`/`registcancel_response` · `reissue_request`/`reissue_response` · `reissueapply_request`/`reissueapply_response` · `rirank_request`/`rirank_response` · `shop_request`/`shop_response` · `srgen_request`/`srgen_response` · `start_request`/`start_response` · `verify_request`/`verify_response` · `vs_cr_request`/`vs_cr_response` · `vs_dr_request`/`vs_dr_response`

### In-room game commands (cmd_string_tbl)

| # | command | note |
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
| 12 | `USE` | deprecated in 1.x |
| 13 | `PICK` | deprecated in 1.x |
| 14 | `DROP` | deprecated in 1.x |
| 15 | `THROW` | deprecated in 1.x |
| 16 | `ITEM INQ` | deprecated in 1.x |
| 17 | `TRAP SW` |  |
| 18 | `GIMMICK` |  |
| 19 | `LOCK GATE` |  |
| 20 | `CLIENT READY` |  |
| 21 | `SERVER READY` |  |
| 22 | `ROB STATE` |  |
| 23 | `THROW RESULT ITEM` | deprecated in 1.1.2 |
| 24 | `MV FLOOR` |  |
| 25 | `TREASURE BOX` |  |
| 26 | `CINFO ITEM` |  |
| 27 | `THROW RESULT ITEM` | deprecated |
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
| 38 | `USE_FREE` | deprecated |
| 39 | `STEAL` | deprecated |
| 40 | `ACTIVE SKILL` |  |
| 41 | `—` | unused |
| 42 | `—` | unused |
| 43 | `—` | unused |
| 44 | `—` | unused |
| 45 | `—` | unused |
| 46 | `—` | unused |
| 47 | `—` | unused |
| 48 | `—` | unused |
| 49 | `—` | unused |
| 50 | `—` | unused |
| 51 | `USE ITEM` |  |
| 52 | `PICK ITEM` |  |
| 53 | `DROP ITEM` |  |
| 54 | `THROW ITEM` |  |
| 55 | `INQ ITEM` |  |
| 56 | `THROW RESULT ITEM` |  |
| 57 | `USE AND FREE ITEM` |  |
| 58 | `STEAL ITEM` |  |
| 59 | `—` | unused |
| 60 | `—` | unused |
| 61 | `—` | unused |
| 62 | `—` | unused |
| 63 | `—` | unused |

### Server arbitration state

The server is a relay + shared-resource arbiter. Per-room state fields:

| field(s) | meaning |
|---|---|
| `item_free[]` | dungeon floor-item ownership; grants/denies pickups; STEAL ITEM transfers ownership (PvP-ish) |
| `trap_sw[]` | trap switch bits per robid (≤0x400 traps); ON/OFF transitions broadcast |
| `lock_gate[]` | per-gate player bitmask; party holds gates |
| `tbox_status[]` | treasure-box open state machine |
| `dead_list[]` | dead entity flags; DEAD ROBOT marks, CONTINUE clears |
| `client_info[]` | 0xAC-byte blob per player; all READY → GAME START |
| `cinfo_item(2,3)_result` | per-player item/ping reports aggregated |

### init_response fields

| field(s) | meaning |
|---|---|
| `place_name / prefecture` | arcade location (regional matchmaking) |
| `cherubim_ip` | game server IP to connect to |
| `match_wait_time` | matching timeout |
| `dungeon_open_id ×60 / _start_hour ×60 / _end_hour ×60` | dungeon rotation schedule |
| `vs_local_dungeon_open_* ×60` | local VS dungeon schedule |
| `ex_dungeon_floor_map / image / boss ×10` | EX dungeon floor tables |
| `vs_convention_name / rank_bonus / border_limit_job0-3 / border_num_job0-3` | VS tournament config, 4 jobs |
| `vs_capture_limit, vs_capture_per_{all,guild,local}_{silver,gold}` | VS capture mechanics |

### event_response fields

`n_event_id` · `n_event_status` · `n_event_start_time` · `n_event_end_time` · `n_event_name` · `n_event_dungeon_id` · `n_event_dungeon_seed` · `n_event_rule` · `n_event_item_limit` · `n_event_border_num / limit_main / sub_job0-3` · `n_event_top10_score_main / sub_job0-3` · `n_event_stamp` · `n_event_item_main / sub / sub2`

### Misc

- `GlockFlagManager` dedups flag packets (cmd 28 `GLOCK`).
- RUDP (reliable) + UDP channels: cmds 31/32 echo, 0x21–0x23 UDP broadcasts.
- `GLOCK`/`GIMMICK`/`COMM DATA` = pure room relays.
- `MONSTER DATA IH` / `MONSTER BOSS IH` = in-house (local-store) monster sync variants.
