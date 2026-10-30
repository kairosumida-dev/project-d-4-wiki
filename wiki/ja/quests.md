[EN](../en/quests.md) | [JA](../ja/quests.md) | [PT-BR](../pt-br/quests.md)

# クエスト＆ダンジョン

> Source: `project_d.xbe` .data table @ `0x575dc4`–`0x62b024` (`offline`/`versus`/`o41` records) + `extracted/game/dungeon/` asset corpus — reverse engineered

> **Quest of D 4.0 — The Battle Kingdom**（Sega Chihiro、`CDV-10035B`）の抽出データ。クエストロジックは `FUN_0006c9c0` で登録されるクライアントモジュール（`QUEST`、`QUEST_SYSTEM` 等）に存在し、ダンジョン形状／ローテーションデータはセッションごとにサーバーから届く。

## クエストモジュール

`QUEST1` … `QUEST17` — 17個のクエスト／クエストハンドラ文字列がクライアント内に存在。これらと並んでイベントモード文字列 `EVENT1`…`EVENT14`（`trophy_event1-14.bin` ファイルと対応）、対戦文字列 `M_RING1-2`/`S_RING1-3`、および `MULTI1`…`MULTI10`（`INHOUSE` = 店内 LAN と注記）がある。

## ダンジョンアセット一覧

| path | count | what |
|---|---|---|
| `dungeon/dgn_dungeon_data_*.bin` | 394 | 部屋接続グラフ — 小型（68–84 B）の木構造部屋グラフ |
| `dungeon/map/dgn_map_data_*.bin` | 1544 | フロアタイルマップ（約5.6 KB）：寸法、タイル／オブジェクトリスト、float、インスタンスレコード |
| `dungeon/map/dgn_var_st*_*.bin` | 528 | ステージ別バリアントマップオーバーレイ |
| `dungeon/stage_model_data_ST*.bin` | 26 | ステージモデル定義（`ST01`–`ST40` の範囲） |
| `media/dungeon/map/dgn_map_data_*.bin` | 2358 | フロアタイルマップ（メディア側コピー） |
| `media/dungeon/model_def/stage_model_data_*.bin` | 57 | モデル定義：`ROOM_XX`、`ST0X`、`BOSS_XX` |
| `media/dungeon/trophy_data/trophy_*.bin` | 134 | トロフィーデータ：`trophy_dowa.bin`、`trophy_event1-14.bin`、マルチイベントトロフィー |
| `light/{roomNN,bossNN,stNN}/` | 61 | 部屋／ステージ／ボスごとのライティングセット |
| `ghost_data/ghost_*.bin` | 486 | ゴースト／リプレイ入力記録 |

## 生成＆ローテーション（サーバー主導）

| field | role |
|---|---|
| `n_event_dungeon_id` + `n_event_dungeon_seed` | シード付きダンジョン生成 — シードがグラフ／マッププールからのレイアウト選択を駆動 |
| `dungeon_open_id` / `_start_hour` / `_end_hour` | ライブローテーション — 時刻は ×60 で届く |
| `vs_local_dungeon_open_*` | ローカル（店内）VS ダンジョンスケジュール |
| `ex_dungeon_floor_map` / `ex_dungeon_floor_image` / `ex_dungeon_boss` | EX ダンジョン階層テーブル（各 ×10 スロット） |

時間ローテーション：開放ダンジョン ID と開始／終了時刻（×60）が、ある壁時計時刻でどのクエストダンジョンが利用可能かを選択する。イベントダンジョン（`n_event_*`）はシード付きレイアウト、ルール上書き（`n_event_rule`）、アイテム制限（`n_event_item_limit`）、職業別ランキングボーダー（`n_event_border_num`、`n_event_top10_score_main/sub_job0-3`）を追加する。

## ボスアリーナ

ステージモデル定義 `BOSS_00`–`BOSS_37` が文字列として存在。専用モデルファイル（`stage_model_data_BOSS_00`…`BOSS_29`）とライトセット（`light/boss00`…`boss29`）が17アリーナ分ある。各ボスライトディレクトリ内のボス固有ライティングの名前：

`Balor` · `BlackDragon` · `BlackKnight` · `Efreet` · `Ethnea` · `Folgal1` ·
`Folgal2` · `GoldDragon` · `GoldKnight` · `RedDragon` · `WhiteDragon` ·
`Wyvern`

加えて一部アリーナには `FakeBalor`、`DragonZombie`、`BlueDragon` のバリアントあり。ボス楽曲 `boss01.adx`–`boss15.adx`（＋`boss04b`）はこのアリーナ名簿と一致する。

## ミッション目標テンプレート（text.bin）

サーバーはダンジョンランごとにテンプレート＋パラメータを選択する：

| jp template | gloss |
|---|---|
| `迷宮内にある隠し宝箱を入手しろ` | 迷宮内の隠し宝箱を入手せよ |
| `迷宮内にある宝箱をすべて入手しろ` | 迷宮内の宝箱をすべて入手せよ |
| `ダンジョンから脱出せよ` | ダンジョンから脱出せよ |
| `迷宮内の敵を N 匹以上倒せ` | 敵を N 匹以上倒せ |
| `迷宮内の壷を N 個以上破壊せよ` | 壷を N 個以上破壊せよ |
| `お金を N G以上入手してクリアしろ` | N G 以上の金を集めてクリアせよ |
| `トラップを利用して敵を N 匹以上倒せ` | トラップで敵を N 匹以上倒せ |
| `召喚モンスターで敵を N 匹以上倒せ` | 召喚モンスターで敵を N 匹以上倒せ |
| `魔法を使って敵を N 匹以上倒せ` | 魔法で敵を N 匹以上倒せ |
| `N 回以上ガードしてクリアしろ` | N 回以上ガードしてクリアせよ |
| `N HIT以上のコンボをきめろ` | N HIT 以上のコンボを決めろ |
| `マップ完成度を N％以上でクリアしろ` | マップ完成度 N％ 以上でクリアせよ |
| `被ダメージを N 以内でクリアしろ` | 被ダメージ N 以内でクリアせよ |
| `サブミッション成功` | サブミッション成功 |

## クエスト関連レスポンスキー

`quest_id` · `quest_history_id` · `quest_status` · `quest_parameter` ·
`quest_counter` · `quest_deadline` · `quest_scenario_id` · `quest_text` ·
`request_id`

## オフライン／対戦レコード

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

`OFFLINE_GG*` = オフラインモードの鍵／石（ガジェットレコード）、`OFFLINE_RS21_GOLDKNIGHT` = オフラインボス、`VERSUS_VS0*` = VS モードの拾得品（ポイント／パワーアップ／レベルアップ）。

## ダンジョン内実績称号

`鬼神` · `武聖` · `羅刹` · `無双` · `猛将` · `皆伝` · `闘士`
