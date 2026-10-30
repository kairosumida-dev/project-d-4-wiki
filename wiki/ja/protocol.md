[EN](../en/protocol.md) | [JA](../ja/protocol.md) | [PT-BR](../pt-br/protocol.md)

# ネットワークプロトコル

> Source: `project_d.xbe` + `SpPrjdGameServer.vXXXXX` command-dispatch table (`prjdNwArrivedDataPacket` @ `0x0804a294`, `cmd_string_tbl` @ file `0x1b1a0`) — reverse engineered

> サーバー→クライアントの通信はキー・バリュー形式の「レスポンス」メッセージ（`command` ＋ `protocol_version`="aeaaee45"）。ルーム内ゲーム通信は下記64コマンドのディスパッチを使う。バトルシミュレーションはほぼ **クライアント側** で動作し、ルームサーバーは主に中継＋共有リソースの調停役。クライアントは `cherubim.questofd.net` の全国ルームに接続し、`inhouse` モードは店内 LAN。

## ゲームパケットコマンド（0–63）

| cmd | name | notes |
|---|---|---|
| 0 | `INVALID PACKET` | |
| 1 | `OK` | |
| 2 | `NG` | |
| 3 | `CLIENT INFO` | プレイヤーごとの 0xAC バイト blob |
| 4 | `READY` | 全員 READY → GAME START |
| 5 | `GAME START` | |
| 6 | `GAME OVER` | |
| 7 | `DEAD ROBOT` | `dead_list[]` に登録 |
| 8 | `CONTINUE` | `dead_list[]` をクリア |
| 9 | `RAND` | |
| 10 | `EQUIP` | |
| 11 | `SWITCH` | |
| 12 | `USE` | **1.x DEPRECATED** |
| 13 | `PICK` | 1.x DEPRECATED |
| 14 | `DROP` | 1.x DEPRECATED |
| 15 | `THROW` | 1.x DEPRECATED |
| 16 | `ITEM INQ` | 1.x DEPRECATED |
| 17 | `TRAP SW` | robid ごとのトラップスイッチビット（≤0x400 トラップ） |
| 18 | `GIMMICK` | 純粋なルーム中継 |
| 19 | `LOCK GATE` | ゲートごとのプレイヤービットマスク。パーティがゲートを保持 |
| 20 | `CLIENT READY` | |
| 21 | `SERVER READY` | |
| 22 | `ROB STATE` | |
| 23 | `THROW RESULT ITEM` | 1.1.2 DEPRECATED |
| 24 | `MV FLOOR` | |
| 25 | `TREASURE BOX` | 宝箱オープン状態マシン |
| 26 | `CINFO ITEM` | プレイヤーごとのアイテム／ping 報告 |
| 27 | `THROW RESULT ITEM` | DEPRECATED |
| 28 | `GLOCK` | 純粋なルーム中継。`GlockFlagManager` が重複除去 |
| 29 | `HEARTBEAT` | |
| 30 | `DEBUG` | |
| 31 | `R_ECHO` | リライアブルチャネルのエコー |
| 32 | `U_ECHO` | UDP チャネルのエコー |
| 33 | `COMM DATA` | 純粋なルーム中継 |
| 34 | `MONSTER DATA` | モンスター同期 |
| 35 | `MONSTER BOSS` | ボス同期 |
| 36 | `MONSTER DATA IH` | インハウス（店内）版 |
| 37 | `MONSTER BOSS IH` | インハウス（店内）版 |
| 38 | `USE FREE` | DEPRECATED |
| 39 | `STEAL` | DEPRECATED |
| 40 | `ACTIVE SKILL` | |
| 41–50 | *unused* | |
| 51 | `USE ITEM` | |
| 52 | `PICK ITEM` | サーバーが `item_free[]` で許可／拒否 |
| 53 | `DROP ITEM` | |
| 54 | `THROW ITEM` | |
| 55 | `INQ ITEM` | |
| 56 | `THROW RESULT ITEM` | |
| 57 | `USE AND FREE ITEM` | |
| 58 | `STEAL ITEM` | `item_free[]` の所有権を移転（PvP 的） |
| 59–63 | *unused* | |

## サーバー調停状態（`sv->` 構造体）

| field | meaning |
|---|---|
| `item_free[]` | ダンジョン床置きアイテムの所有権。拾得を許可／拒否 |
| `trap_sw[]` | robid ごとのトラップスイッチビット（≤0x400 トラップ）。ON/OFF をブロードキャスト |
| `lock_gate[]` | ゲートごとのプレイヤービットマスク |
| `tbox_status[]` | 宝箱オープン状態マシン |
| `dead_list[]` | 死亡エンティティフラグ（cmd 7 が登録、cmd 8 がクリア） |
| `client_info[]` | プレイヤーごとの 0xAC バイト blob。全員 READY → GAME START |
| `cinfo_item(2,3)_result` | プレイヤーごとのアイテム／ping 報告を集約 |

## プロトコル事実

- `angelReceiveData` @ `0x289170`：`select` → `recv` で 0x380B フレーム → マジック `0xba4766` → `kkAllExchangeHeaderNtoH` → `kkDispatchingPacket`。
- RUDP（リライアブル）＋ UDP チャネル：cmd 31/32 はエコー、0x21–0x23 は UDP ブロードキャスト。
- `GLOCK`/`GIMMICK`/`COMM DATA` = 純粋なルーム中継。
- `MONSTER DATA IH`/`MONSTER BOSS IH` = インハウス（店内）モンスター同期版。
- ロビー参加コール：`FUN_000cf610(cfg, "Project-D", "sega-nw-Dungeon", mode|0x20, …)`
- ネットワークモード：`net nationwide main|local`、`net guild main|local`、`net Ikebukuro main|local`、`net inhouse main|local` — `inhouse` = 店内 LAN 協力。
- コマンド登録：`FUN_0006c9c0(-1, 3, "QUEST", 0, 0, 0, &handler)` — 名前→コールバックテーブル。

## init_response / event_response キー（抜粋）

| key(s) | meaning |
|---|---|
| `place_name` / `prefecture` | 店舗所在地（地域マッチング用） |
| `cherubim_ip` | 接続先ゲームサーバー IP |
| `match_wait_time` | マッチングタイムアウト |
| `dungeon_open_id` ×60、`_start_hour` ×60、`_end_hour` ×60 | ダンジョンローテーションスケジュール |
| `vs_local_dungeon_open_*` ×60 | ローカル VS ダンジョンスケジュール |
| `ex_dungeon_floor_map` / `image` / `boss` ×10 | EX ダンジョン階層テーブル |
| `vs_convention_name` / `rank_bonus` / `border_limit_job0-3` / `border_num_job0-3` | VS 大会設定、4職業 |
| `vs_capture_limit`, `vs_capture_per_{all,guild,local}_{silver,gold}` | キャプチャー要素 |
| `n_event_id` / `status` / `start_time` / `end_time` / `name` | イベントライフサイクル |
| `n_event_dungeon_id` + `n_event_dungeon_seed` | シード付きダンジョン生成 |
| `n_event_rule`, `n_event_item_limit` | イベントルール／アイテム上限 |
| `n_event_border_num` / `limit_main` / `sub_job0-3` | ランキングボーダー |
| `n_event_top10_score_main` / `sub_job0-3` | トップ10スコア |
| `n_event_stamp`, `n_event_item_main` / `sub` / `sub2` | スタンプ＋報酬アイテム |
