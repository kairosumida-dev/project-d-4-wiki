[EN](../en/index.md) | [JA](../ja/index.md) | [PT-BR](../pt-br/index.md)

# Quest of D 4.0 — データWiki

**Quest of D 4.0 — The Battle Kingdom**（SEGA・Chihiro衛星端末・GD-ROM `CDV-10035B`）のリバースエンジニアリング記録と抽出済みゲームデータ。内部名: `Project D`（`c:\prjd_main\4.00\main\project_d\Release\project_d.exe`）、ビルド日時 2007年10月1日。

> **注意 — 文字列解決について。** エンティティレコードは `.data` から128バイトの生データとしてダンプし、`text.bin`（SJIS文字列5322件）と結合しています。結合フィールドはまだ解読途中のため、ここに載せる `jp` 文字列は生のソースデータです — 多くの場合正しい表示名ですが、隣接する別の文字列を指していることもあります。FINDINGS.md 参照。

### データソース

| ソース | 内容 |
|---|---|
| `extracted/gamedb.json` | 26エンティティテーブル（128バイトレコード）＋text.bin文字列 |
| `extracted/tables/*.csv` | レコードごとの生u32フィールドダンプ |
| `extracted/game/text/text.bin` | SJIS文字列テーブル5322件 |
| `extracted/game/dungeon/` | ダンジョン接続グラフ391件 |
| `extracted/game/media/dungeon/` | フロアマップ2358件・モデル定義57件・トロフィー134件 |
| `extracted/game/media/light/` | 部屋別・ボス別ライティング（ボス名の由来） |
| `extracted/project_d_strings.txt` | project_d.xbe の文字列ダンプ |
| `docs/FINDINGS.md` | 解析レッジャー（発見記録） |

### エンティティDB集計

| テーブル | 件数 | 内容 |
|---|---|---|
| `monst` | 1508 | モンスター部位・攻撃レコード（種族ベース168件） |
| `book2` | 410 | 魔法/スキル書・素材・クエストガジェット |
| `weapon2` | 358 | 11系統の武器 |
| `param` | 245 | 状態異常・トラップ・属性・スキルパラメータ |
| `skill` | 208 | _EX上位版を含むスキル |
| `summon` | 168 | 召喚モンスターカード |
| `helm2` | 100 | 兜・帽子 |
| `armor2` | 94 | 鎧・ローブ |
| `acces2` | 90 | アミュレット・指輪 |
| `boots2` | 76 | ブーツ |
| `shield2` | 48 | 盾 |
| `potion2` | 38 | ポーション |
| `food2` | 21 | 食料 |
| — | 307 | 旧v1.xテーブル＋その他レコード |

### ページ一覧

- [モンスター](monsters.md)
- [アイテム](items.md)
- [スキル](skills.md)
- [カード](cards.md)
- [クエスト・ダンジョン](quests.md)
- [状態異常・トラップ](status-effects.md)
- [ネットワークプロトコル](protocol.md)
