[EN](../en/cards.md) | [JA](../ja/cards.md) | [PT-BR](../pt-br/cards.md)

# カード

Quest of D のカードは **3層**: 物理 **ICセーブカード**、排出される物理 **デッキカード**、そして **ゲーム内カードアイテム**（ダンジョンの拾得品はすべてデッキに入るカード）。

### リーダーハードウェア

| 文字列/シンボル | 役割 |
|---|---|
| `sens_card` | IC card-present sensor |
| `card_lock` | locks the IC card in the reader |
| `card_unlock_instant` | instant card eject/unlock |
| `DFOCECARD_RED_LEFT` | left card slot indicator (red) |
| `ICCARD_RED_RIGHT` | right card slot indicator (red) |
| `B_SYSTEM_CARD_DISPLAY` | card-reader display device |
| `B_SYSTEM_CARD_BUZZER / B_SYSTEM_CARD_BUZZER2` | card-reader buzzers |
| `DECK READER` | deck-card dispenser/reader unit (test menu) |
| `DECK READER DOOR OPEN` | deck reader door test command |
| `SEL_DM_VDECK` | virtual deck reader selector |

### ICカードのライフサイクル

| 生の日本語文字列 | 意味 |
|---|---|
| `・新規カード` | 初回発行直後の状態 |
| `・更新済みのカード` | リニューアル済み |
| `・使用回数限度のカード` | 使用回数上限に到達 |
| `・データが壊れているカード` | データ破損を検出 |
| `フォーマットバージョン違いのカード` | 別バージョンでフォーマット済み |
| `リリースバージョン違いのカード` | 別リリースで発行済み |
| `ＱＵＥＳＴ＿ＯＦ＿Ｄ以外のカード` | 他タイトルのカード |
| `このカードでの再発行はあと一回までです` | 再発行は残り1回 |
| `このカードは前回正常終了していません` | 前回異常終了（復旧対象） |
| `再発行専用カードではありません` | 再発行専用カードが必要 |
| `カードが２枚挿入されています` | 2枚同時挿入を検出 |
| `ＩＣカードに書き込み中です` | 書き込み中（抜き取り禁止） |
| `デッキカードを排出しました` | デッキカード排出済み |
| `ＩＣカード，デッキカードの取り忘れにご注意ください` | IC/デッキカードの取り忘れ注意 |

サービスメニューに出るモード: `＜ＩＣカード挿入モード＞`（挿入）、`＜カード更新モード＞`（更新）、`ＩＣカード復旧モード`/`＜カード復旧モード＞`（復旧）。カードは暗証番号で保護され、3回連続で失敗すると翌日までロックされる。`Ver.2.0` ロケテストカードでのプレイを禁じる文字列もある。

### セーブレコード（カードごと）

セーブ/パーティローダー（`FUN_000de7c0`）はカード1枚につき最大 **12人分** のスロットを読む:

| # | field |
|---|---|
| 1 | `player_name` |
| 2 | `job` |
| 3 | `card_id` |
| 4 | `stage_id` |
| 5 | `get_date` |
| 6 | `numof_item` |
| 7 | `item_id[]` |
| 8 | `item_nm[]` |

### カード関連プロトコルキー

KK "Kage" プロトコルとカードトレードで使われるキー・バリューフィールド:

`card_id` · `card_id%d` · `card_trade` · `card_trade%d` · `old_card_id` · `multi_history_card_id` · `card_ban_flag` · `card_reissue_status` · `card_send_item_main` · `card_send_item_sub` · `card_send_item_sub2` · `card_send_gold_amount` · `card_receive_item_main` · `card_receive_item_sub` · `card_receive_item_sub2` · `card_gold_send_counter` · `card_gold_receive_counter` · `card_item_send_counter` · `card_item_receive_counter` · `d_force_card_item_id` · `d_force_card_item_nm` · `CARDRENEW` · `CARDPLAY` · `CARD RETURN` · `NU_CARD_AUTH` · `CLEAR_WITHOUT_CARDITEM`

トレード: `card_item_send/receive_counter` と `card_gold_send/receive_counter` が main/sub/sub2 のアイテム・ゴールド交換を順序付ける。`old_card_id`/`multi_history_card_id` はカード更新（データがカード間を移行）を追跡する。`d_force_card_item_*` はデバッグ注入フィールド。

### ゲーム内カードアイテム

text.bin の証拠: `カードウィンドウ`、`カードをデッキに入れたため`、`デッキカードを排出しました`。多くのアイテム説明文は `〜を召喚するためのカード`（Xを召喚するためのカード）に解決される。召喚モンスターは物理デッキカードとして配布され、デッキウィンドウから使う。
