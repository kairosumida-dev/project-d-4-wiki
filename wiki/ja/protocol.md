[EN](../en/protocol.md) | [JA](../ja/protocol.md) | [PT-BR](../pt-br/protocol.md)

# ネットワークプロトコル

2層構成: **KK "Kage" ミドルウェア** のセッションプロトコル（SCTP `ESCTPoU` 上のキー・バリュー型リクエスト/レスポンス）と `SpPrjdGameServer` 内の **ルーム内ゲームプロトコル**（64コマンド中継）。転送マジック `0xba4766`、フレームサイズ `0x380B`。クライアント入口 `angelReceiveData` @0x289170、ディスパッチャ `prjdNwArrivedDataPacket` @0x0804a294。

### サーバーデーモン（GD-ROM `angel` ペイロード）

| デーモン | サイズ | 役割 |
|---|---|---|
| `Virtues` | 758K / ~437 fns | ゲームルーム管理（JoinUserIntoGameRoom, GameRoomAllocateByUser, ChangeGameRoomAttribute, StartVoiceChat） |
| `Dominions` | — | マッチメイキング（add_player_to_matching_list, IsSameLevel, QueryPlayers, GetWorldUniqueGameRoomName） |
| `Cherubim` | — | ユーザー認証/セッション（LoadUserLoginFile, CreateUser, CheckUserName, FindRegisteredUser）— クライアントは `cherubim.questofd.net` に接続 |
| `Seraphim` | — | ゲームクラス登録/スーパーバイザー |
| `SpPrjdGameServer.vXXXXX` | v40000 = 885K / ~555 fns | ルーム毎のセッションホスト — ほぼ中継のみ。戦闘シミュレーションはクライアント側 |
| `PrjdGameServer.v1XXXX` | — | 旧 angel プロトコルのゲームサーバー（v1.x） |
| `spgsed / sp_gse` | — | gse remsh 経由で SpPrjdGameServer.vNNNNN を起動（GsedListenPort=40000） |
| `sp_distributor` | — | SpDistributor @ 192.168.20.8:30050 tcp+udp（sphingo.ini） |

### リクエスト/レスポンス対

サーバー→クライアントのメッセージは `command`＋`protocol_version`（`aeaaee45`）を持つキー・バリュー型 `*_response` ドキュメント。バイナリから回収したリクエスト名一覧:

`attend_request`/`attend_response` · `auth_request`/`auth_response` · `danirank_request`/`danirank_response` · `defrank_request`/`defrank_response` · `end_request`/`end_response` · `event_request`/`event_response` · `gamepara_request`/`gamepara_response` · `init_request`/`init_response` · `itempara_request`/`itempara_response` · `live_free_request`/`live_free_response` · `news_request`/`news_response` · `passcode_request`/`passcode_response` · `ranking_request`/`ranking_response` · `recover_request`/`recover_response` · `registapply_request`/`registapply_response` · `registcancel_request`/`registcancel_response` · `reissue_request`/`reissue_response` · `reissueapply_request`/`reissueapply_response` · `rirank_request`/`rirank_response` · `shop_request`/`shop_response` · `srgen_request`/`srgen_response` · `start_request`/`start_response` · `verify_request`/`verify_response` · `vs_cr_request`/`vs_cr_response` · `vs_dr_request`/`vs_dr_response`

### ルーム内ゲームコマンド（cmd_string_tbl）

| # | コマンド | 備考 |
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
| 12 | `USE` | 1.xで廃止 |
| 13 | `PICK` | 1.xで廃止 |
| 14 | `DROP` | 1.xで廃止 |
| 15 | `THROW` | 1.xで廃止 |
| 16 | `ITEM INQ` | 1.xで廃止 |
| 17 | `TRAP SW` |  |
| 18 | `GIMMICK` |  |
| 19 | `LOCK GATE` |  |
| 20 | `CLIENT READY` |  |
| 21 | `SERVER READY` |  |
| 22 | `ROB STATE` |  |
| 23 | `THROW RESULT ITEM` | 1.1.2で廃止 |
| 24 | `MV FLOOR` |  |
| 25 | `TREASURE BOX` |  |
| 26 | `CINFO ITEM` |  |
| 27 | `THROW RESULT ITEM` | 廃止 |
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
| 38 | `USE_FREE` | 廃止 |
| 39 | `STEAL` | 廃止 |
| 40 | `ACTIVE SKILL` |  |
| 41 | `—` | 未使用 |
| 42 | `—` | 未使用 |
| 43 | `—` | 未使用 |
| 44 | `—` | 未使用 |
| 45 | `—` | 未使用 |
| 46 | `—` | 未使用 |
| 47 | `—` | 未使用 |
| 48 | `—` | 未使用 |
| 49 | `—` | 未使用 |
| 50 | `—` | 未使用 |
| 51 | `USE ITEM` |  |
| 52 | `PICK ITEM` |  |
| 53 | `DROP ITEM` |  |
| 54 | `THROW ITEM` |  |
| 55 | `INQ ITEM` |  |
| 56 | `THROW RESULT ITEM` |  |
| 57 | `USE AND FREE ITEM` |  |
| 58 | `STEAL ITEM` |  |
| 59 | `—` | 未使用 |
| 60 | `—` | 未使用 |
| 61 | `—` | 未使用 |
| 62 | `—` | 未使用 |
| 63 | `—` | 未使用 |

### サーバー仲裁ステート

サーバーは中継＋共有リソースの仲裁役。ルーム毎の状態フィールド:

| フィールド | 意味 |
|---|---|
| `item_free[]` | ダンジョン床アイテムの所有権。拾取を許可/拒否。STEAL ITEM で所有権移転（PvP的） |
| `trap_sw[]` | robid毎のトラップスイッチbit（≤0x400個）。ON/OFF遷移を全員に配信 |
| `lock_gate[]` | ゲート毎のプレイヤーbitmask。パーティがゲートを保持 |
| `tbox_status[]` | 宝箱オープンの状態機械 |
| `dead_list[]` | 死亡エンティティフラグ。DEAD ROBOT で登録、CONTINUE で解除 |
| `client_info[]` | プレイヤー毎0xACバイトのblob。全員 READY → GAME START |
| `cinfo_item(2,3)_result` | プレイヤー毎のアイテム/ping レポートを集約 |

### init_response フィールド

| フィールド | 意味 |
|---|---|
| `place_name / prefecture` | 店舗所在地（地域マッチング用） |
| `cherubim_ip` | 接続先ゲームサーバーIP |
| `match_wait_time` | マッチングタイムアウト |
| `dungeon_open_id ×60 / _start_hour ×60 / _end_hour ×60` | ダンジョンローテーション |
| `vs_local_dungeon_open_* ×60` | ローカルVSダンジョンスケジュール |
| `ex_dungeon_floor_map / image / boss ×10` | EXダンジョンフロアテーブル |
| `vs_convention_name / rank_bonus / border_limit_job0-3 / border_num_job0-3` | VSトーナメント設定（4職業） |
| `vs_capture_limit, vs_capture_per_{all,guild,local}_{silver,gold}` | VSキャプチャー機構 |

### event_response フィールド

`n_event_id` · `n_event_status` · `n_event_start_time` · `n_event_end_time` · `n_event_name` · `n_event_dungeon_id` · `n_event_dungeon_seed` · `n_event_rule` · `n_event_item_limit` · `n_event_border_num / limit_main / sub_job0-3` · `n_event_top10_score_main / sub_job0-3` · `n_event_stamp` · `n_event_item_main / sub / sub2`

### その他

- `GlockFlagManager` がフラグパケット（cmd 28 `GLOCK`）を重複排除。
- RUDP（信頼性あり）＋UDPチャンネル: cmd 31/32 エコー、0x21–0x23 はUDPブロードキャスト。
- `GLOCK`/`GIMMICK`/`COMM DATA` は純粋なルーム中継。
- `MONSTER DATA IH` / `MONSTER BOSS IH` はインハウス（店内LAN）モンスター同期バリアント。
