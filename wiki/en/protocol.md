[EN](../en/protocol.md) | [JA](../ja/protocol.md) | [PT-BR](../pt-br/protocol.md)

# Network protocol

> Source: `project_d.xbe` + `SpPrjdGameServer.vXXXXX` command-dispatch table (`prjdNwArrivedDataPacket` @ `0x0804a294`, `cmd_string_tbl` @ file `0x1b1a0`) — reverse engineered

> Server→client traffic is key-value "response" messages (`command` + `protocol_version`="aeaaee45"); in-room game traffic uses the 64-command dispatch below. The battle simulation is mostly **client-side** — the room server is primarily a relay + shared-resource arbiter. Client joins the nationwide room at `cherubim.questofd.net`; the `inhouse` mode is in-store LAN.

## Game packet commands (0–63)

| cmd | name | notes |
|---|---|---|
| 0 | `INVALID PACKET` | |
| 1 | `OK` | |
| 2 | `NG` | |
| 3 | `CLIENT INFO` | per-player 0xAC-byte blob |
| 4 | `READY` | all ready → GAME START |
| 5 | `GAME START` | |
| 6 | `GAME OVER` | |
| 7 | `DEAD ROBOT` | marks `dead_list[]` |
| 8 | `CONTINUE` | clears `dead_list[]` |
| 9 | `RAND` | |
| 10 | `EQUIP` | |
| 11 | `SWITCH` | |
| 12 | `USE` | **1.x DEPRECATED** |
| 13 | `PICK` | 1.x DEPRECATED |
| 14 | `DROP` | 1.x DEPRECATED |
| 15 | `THROW` | 1.x DEPRECATED |
| 16 | `ITEM INQ` | 1.x DEPRECATED |
| 17 | `TRAP SW` | trap switch bits per robid (≤0x400 traps) |
| 18 | `GIMMICK` | pure room relay |
| 19 | `LOCK GATE` | per-gate player bitmask; party holds gates |
| 20 | `CLIENT READY` | |
| 21 | `SERVER READY` | |
| 22 | `ROB STATE` | |
| 23 | `THROW RESULT ITEM` | 1.1.2 DEPRECATED |
| 24 | `MV FLOOR` | |
| 25 | `TREASURE BOX` | tbox open state machine |
| 26 | `CINFO ITEM` | per-player item/ping report |
| 27 | `THROW RESULT ITEM` | DEPRECATED |
| 28 | `GLOCK` | pure room relay; `GlockFlagManager` dedups |
| 29 | `HEARTBEAT` | |
| 30 | `DEBUG` | |
| 31 | `R_ECHO` | reliable-channel echo |
| 32 | `U_ECHO` | UDP-channel echo |
| 33 | `COMM DATA` | pure room relay |
| 34 | `MONSTER DATA` | monster sync |
| 35 | `MONSTER BOSS` | boss sync |
| 36 | `MONSTER DATA IH` | in-house (local-store) variant |
| 37 | `MONSTER BOSS IH` | in-house (local-store) variant |
| 38 | `USE FREE` | DEPRECATED |
| 39 | `STEAL` | DEPRECATED |
| 40 | `ACTIVE SKILL` | |
| 41–50 | *unused* | |
| 51 | `USE ITEM` | |
| 52 | `PICK ITEM` | server grants/denies via `item_free[]` |
| 53 | `DROP ITEM` | |
| 54 | `THROW ITEM` | |
| 55 | `INQ ITEM` | |
| 56 | `THROW RESULT ITEM` | |
| 57 | `USE AND FREE ITEM` | |
| 58 | `STEAL ITEM` | transfers `item_free[]` ownership (PvP-ish) |
| 59–63 | *unused* | |

## Server arbitration state (`sv->` struct)

| field | meaning |
|---|---|
| `item_free[]` | dungeon floor-item ownership; grants/denies pickups |
| `trap_sw[]` | trap switch bits per robid (≤0x400 traps); ON/OFF broadcast |
| `lock_gate[]` | per-gate player bitmask |
| `tbox_status[]` | treasure-box open state machine |
| `dead_list[]` | dead entity flags (cmd 7 marks, cmd 8 clears) |
| `client_info[]` | 0xAC-byte blob per player; all READY → GAME START |
| `cinfo_item(2,3)_result` | per-player item/ping reports aggregated |

## Protocol facts

- `angelReceiveData` @ `0x289170`: `select` → `recv` 0x380B frames → magic `0xba4766` → `kkAllExchangeHeaderNtoH` → `kkDispatchingPacket`.
- RUDP (reliable) + UDP channels: cmds 31/32 are echoes; 0x21–0x23 are UDP broadcasts.
- `GLOCK`/`GIMMICK`/`COMM DATA` = pure room relays.
- `MONSTER DATA IH`/`MONSTER BOSS IH` = in-house (local-store) monster sync variants.
- Lobby join call: `FUN_000cf610(cfg, "Project-D", "sega-nw-Dungeon", mode|0x20, …)`
- Network modes: `net nationwide main|local`, `net guild main|local`, `net Ikebukuro main|local`, `net inhouse main|local` — `inhouse` = in-store LAN co-op.
- Command registration: `FUN_0006c9c0(-1, 3, "QUEST", 0, 0, 0, &handler)` — name→callback table.

## init_response / event_response keys (selection)

| key(s) | meaning |
|---|---|
| `place_name` / `prefecture` | arcade location (regional matchmaking) |
| `cherubim_ip` | game server IP to connect |
| `match_wait_time` | matching timeout |
| `dungeon_open_id` ×60, `_start_hour` ×60, `_end_hour` ×60 | dungeon rotation schedule |
| `vs_local_dungeon_open_*` ×60 | local VS dungeon schedule |
| `ex_dungeon_floor_map` / `image` / `boss` ×10 | EX dungeon floor tables |
| `vs_convention_name` / `rank_bonus` / `border_limit_job0-3` / `border_num_job0-3` | VS tournament config, 4 jobs |
| `vs_capture_limit`, `vs_capture_per_{all,guild,local}_{silver,gold}` | capture mechanics |
| `n_event_id` / `status` / `start_time` / `end_time` / `name` | event lifecycle |
| `n_event_dungeon_id` + `n_event_dungeon_seed` | seeded dungeon generation |
| `n_event_rule`, `n_event_item_limit` | event rules / item cap |
| `n_event_border_num` / `limit_main` / `sub_job0-3` | ranking borders |
| `n_event_top10_score_main` / `sub_job0-3` | top-10 scores |
| `n_event_stamp`, `n_event_item_main` / `sub` / `sub2` | stamp + reward items |
