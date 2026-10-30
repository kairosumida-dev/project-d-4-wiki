[EN](../en/quests.md) | [JA](../ja/quests.md) | [PT-BR](../pt-br/quests.md)

# クエスト・ダンジョン

クエスト処理はクライアントの `QUEST_SYSTEM` と `QUEST`モジュール（`FUN_0006c9c0` 経由で登録）と **17個のクエストモジュール**（`QUEST1`–`QUEST17`）に分かれる。ダンジョンはサーバー側で生成・ローテーションされ、セッションごとにダウンロードされる。

### ダンジョン資産

| パス | 件数 | 内容 |
|---|---|---|
| `dungeon/dgn_dungeon_data_*.bin` | 391 | 部屋接続グラフ（木構造の辺、各68–84B） |
| `dungeon/map/dgn_map_data_*.bin` | 1544 | フロアタイルマップ（各約5.6KB） |
| `dungeon/map/dgn_var_st*_*.bin` | 528 | ステージ別バリアント差分 |
| `dungeon/stage_model_data_ST*.bin` | 26 | ステージモデル定義（STアリーナ） |
| `media/dungeon/map/dgn_map_data_*.bin` | 2358 | フロアタイルマップ・media側コピー |
| `media/dungeon/model_def/stage_model_data_*.bin` | 57 | ステージモデル定義（部屋・ステージ・ボスアリーナ） |
| `media/dungeon/trophy_data/trophy_*.bin` | 134 | トロフィーデータ（dowa＋event1-14） |
| `media/light/{roomNN,bossNN,stNN}/` | 58 | 部屋・ステージ・ボス別ライティング |
| `ghost_data/ghost_*.bin` | 486 | ゴースト/リプレイ入力記録 |

### ミッション目標テンプレート

text.bin から回収した目標テンプレート（サーバーがテンプレ＋パラメータを選ぶ。「サブミッション」= submission）:

| 日本語テンプレート | 補足 |
|---|---|
| `迷宮内にある隠し宝箱を入手しろ` | 隠し宝箱1個を入手してクリア |
| `迷宮内にある宝箱をすべて入手しろ` | 全宝箱を回収してクリア |
| `ダンジョンから脱出せよ` | 脱出すればクリア |
| `迷宮内の敵を N 匹以上倒せ` | N = サーバー指定の撃破数 |
| `迷宮内の壷を N 個以上破壊せよ` | N = サーバー指定の破壊数 |
| `お金を N G以上入手してクリアしろ` | N = サーバー指定の金額（G） |
| `トラップを利用して敵を N 匹以上倒せ` | トラップ利用で N 匹撃破 |
| `召喚モンスターで敵を N 匹以上倒せ` | 召喚獣で N 匹撃破 |
| `魔法を使って敵を N 匹以上倒せ` | 魔法で N 匹撃破 |
| `N 回以上ガードしてクリアしろ` | N = 必要ガード回数 |
| `N HIT以上のコンボをきめろ` | N = 必要コンボ数（HIT） |
| `マップ完成度を N％以上でクリアしろ` | N = 必要マップ完成度（％） |
| `被ダメージを N 以内でクリアしろ` | N = 被ダメージ上限 |
| `サブミッション成功` | 達成時の表示 |

### ダンジョンスケジュール

`init_response` が稼働ローテーションを運ぶ: `dungeon_open_id`/`_start_hour`/`_end_hour` ×60、`vs_local_dungeon_open_*` ×60、`ex_dungeon_floor_map/image/boss` ×10。`event_response` はイベントダンジョンを追加 — `n_event_dungeon_id`＋`n_event_dungeon_seed` で**シード付きダンジョン生成**を行い、`n_event_rule`と職業別ランキングボーダーを伴う。

### クエスト関連レスポンスキー

`quest_id` · `quest_history_id` · `quest_status` · `quest_parameter` · `quest_counter` · `quest_deadline` · `quest_scenario_id` · `quest_text` · `request_id`

### オフライン/クエストアイテム

`offline` テーブル（クエストの鍵・キーストーン）と `versus` テーブル:

| 内部id | jp |
|---|---|
| `OFFLINE_GG01_KEY_RED` | — |
| `OFFLINE_GG02_KEY_BLUE` | — |
| `OFFLINE_GG03_KEY_GOLD` | — |
| `OFFLINE_GG18_KEY_STONE1` | — |
| `OFFLINE_GG19_KEY_STONE2` | — |
| `OFFLINE_GG20_KEY_STONE3` | — |
| `OFFLINE_RS21_GOLDKNIGHT` | — |

| 内部id | jp |
|---|---|
| `VERSUS_VS01_POINT` | — |
| `VERSUS_VS02_PWRUP` | — |
| `VERSUS_VS03_LVLUP` | — |

### 称号

text.bin にあるダンジョン内称号:

`鬼神` · `武聖` · `羅刹` · `無双` · `猛将` · `皆伝` · `闘士`
