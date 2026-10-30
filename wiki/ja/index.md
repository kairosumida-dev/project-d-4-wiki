[EN](../en/index.md) | [JA](../ja/index.md) | [PT-BR](../pt-br/index.md)

# Quest of D 4.0 — データ Wiki

**Quest of D 4.0 — The Battle Kingdom**（セガ・Chihiro サテライト端末、GD-ROM `CDV-10035B`）のリバースエンジニアリング・ノートと抽出済みゲームデータ。内部名：`Project D`（`c:\prjd_main\4.00\main\project_d\Release\project_d.exe`）、ビルド日は2007年10月1日。

> **注意 — テキスト解決について。** エンティティレコードは `.data` から生の128バイト行としてダンプされ、`text.bin`（5322エントリの SJIS 文字列テーブル）と結合されている。結合フィールドはいまだ解読途中のため、ここに示す `jp` 文字列は生のソースデータであり——多くは正しい表示テキストだが、時折隣の文字列が混ざる。FINDINGS.md 参照。

### データソース

| ソース | 内容 |
|---|---|
| `extracted/gamedb.json` | text.bin の文字列と結合した26のエンティティテーブル（128バイトレコード） |
| `extracted/tables/*.csv` | レコードごとの生 u32 フィールドダンプ |
| `extracted/game/text/text.bin` | 5322エントリの SJIS 文字列テーブル |
| `extracted/game/dungeon/` | 391個のダンジョン接続データ |
| `extracted/game/media/dungeon/` | 2358枚のフロアマップ、57のモデル定義、134のトロフィーデータ |
| `extracted/game/media/light/` | 部屋・ボスごとのライティング（ボス名入り） |
| `extracted/project_d_strings.txt` | project_d.xbe の文字列ダンプ |
| `docs/FINDINGS.md` | リバースエンジニアリング台帳 |

### エンティティデータベース集計

| テーブル | レコード数 | 内容 |
|---|---|---|
| `monst` | 1508 | モンスターの部位・攻撃レコード（168種ベース） |
| `book2` | 410 | 魔法書・スキル書＋素材＋クエストガジェット |
| `weapon2` | 358 | 11系統の武器 |
| `param` | 245 | 状態異常、トラップ、属性、スキルパラメータ |
| `skill` | 208 | _EX 強化版を含むスキル |
| `summon` | 168 | 召喚モンスターカード |
| `helm2` | 100 | 頭装備 |
| `armor2` | 94 | 鎧＋ローブ |
| `acces2` | 90 | アミュレット＋指輪 |
| `boots2` | 76 | ブーツ |
| `shield2` | 48 | 盾 |
| `potion2` | 38 | ポーション |
| `food2` | 21 | 食料アイテム |
| — | 307 | 旧 v1.x テーブル＋その他レコード |

### ページ

- [モンスター](monsters.md)
- [アイテム](items.md)
- [スキル](skills.md)
- [カード](cards.md)
