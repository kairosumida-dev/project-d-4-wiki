[EN](../en/model.md) | [JA](../ja/model.md) | [PT-BR](../pt-br/model.md)

<link rel="stylesheet" href="../assets/lb.css">
<script src="../assets/lb.js" defer></script>
# モデル復元

> 出典: `media/object/pack_cha_*.bin`, `media/motion/bone_cha_*.bin`,
> `media/motion/mot_cha_*.bin`, `media/mothead/mothead_*.bin` — 作業中

> **HIM プレイヤーモデル**(`pack_cha_him.bin`)のライブ復元ログ:
> クック済みキャラクターコンテナ、85ボーンのリグ、スキンメッシュ
> 再組み立ての進行中の作業。以下のレンダーは実際のデコーダー出力 —
> 初期段階は生の無秩序なジオメトリ、後期はボディへ収束。
> バイトレベルの詳細は FINDINGS.md 参照。

## アセットコンテナ

| ファイル | 役割 |
|---|---|
| `pack_cha_*.bin` | クック済みコンテナ: ジオメトリ + スキン + XPRテクスチャ |
| `bone_cha_*.bin` | スケルトン(命名済み85ボーン) + リンク/リマップ表 |
| `mothead_cha_*.bin` | アニメーションインデックス(`.mot`へのオフセットペア) |
| `mot_cha_*.bin` | アニメーションカーブ — Hermite fp16キー、1416クリップ |

## 進行ギャラリー

### 最初のデコード頂点

剛体 `_S_` セクションが最初に解けた: `ear_verts` は耳パーツの頂点群
(8投影テスト) — `{pos3, pkNormal, uv1, uv2}` stride-0x18 レイアウト
発見後。

![ear vertices](../img/model/ear_verts.png)

### セクション三角形化

各セクションは `0xFFFE` ストリップ再開を持つu16インデックスバッファ。
初期のトライアングルリスト描画(`sec_trilist`)は頂点ストリーム
オフセット(`voff`/`vsz`)確定前の典型的な乱れを示す。

![section trilist](../img/model/sec_trilist.png)

### スケルトン — 解決済み

`bone_cha_him.bin` = 命名済み85ボーン(ローマ字: `kosi`=腰, `hiza`=膝,
`asi`=足, `ude`=腕, `kata`=肩, `kubi`=首, `kao`=顔, `mune`=胸,
`hara`=腹, `buki`=武器)。ヘッダーの84エントリu16配列が子リンク表;
`f30`/`f34`が各ボーンの子を返す。

ボーンは+X方向に展開されて格納(`bones_raw`) — このリグはFKスケルトン
ではなく**IKソルバーチェーン**のため、単純なオイラー合成は崩壊する
(`skel_zyx` 中間試行)。`skel_solved` は復元されたヒューマノイド
階層(x–y / z–y 投影)。

| | |
|---|---|
| ![raw bones](../img/model/bones_raw.png) | ![zyx attempt](../img/model/skel_zyx.png) |

![solved skeleton](../img/model/skel_solved.png)

### パーツ組み立て

パックは命名パーツに分割 — `HIM_{variant}{LOD}_{bone}_wgt`(スキン済み)
と `HIM_S_{bone}`(剛体関節キャップ、19パーツで全身をカバー)。
最初の組み立て(`him_assembled`, `him_body_*`)で頭・T字腕・胴体が
認識できる上半身に — 脚部の折れは未修正。

| | |
|---|---|
| ![assembled pieces](../img/model/him_assembled.png) | ![body render](../img/model/him_body_render.png) |

![body side](../img/model/him_body_side.png)

### バインドポーズの壁

`_wgt` スキン頂点は**ボーンローカル**: 生描画では原点に崩壊
(`all_raw`)。実配置にはバインド行列が必要 — IK駆動リグのため、
ランタイムソルバーまたはパック内の`type-0`行列パレット連鎖から
取得する必要がある。

| | |
|---|---|
| ![collapsed verts](../img/model/all_raw.png) | ![manual layout](../img/model/body_manual.png) |

### 最新ボディ反復

`_S_` キャップ + 有効な `_wgt` 断片の手動解剖学的組み立て
(`bv2` → `bv4`): ヒューマノイド比率が浮上(約1.8m、腰1.02m)が、
真のバインド変換待ちでピースごとのねじれと脚配置は未だ不正確。

| | |
|---|---|
| ![v2 front](../img/model/bv2_front.png) | ![v2 ¾](../img/model/bv2_q34.png) |
| ![v4 front](../img/model/bv4_front.png) | ![v4 side](../img/model/bv4_side.png) |

### スキン&アーマーピース

最新の反復 — 重み付き/スキンピースのデコードが進み、アーマー
パーツも配置。`wgt_raw` はまだ凝集した `_wgt` 生頂点、`stick_up` は
直立スケルトンチェーン、`model_up_*` はピース別カラー組み立て、
`final_*` は最新の全身試行、`zb_*` はzバッファ深度レンダー、
`skinned`/`armor_render` はテクスチャ付きピース、`godot_render` は
Godot 内のメッシュ。

| | |
|---|---|
| ![wgt raw](../img/model/wgt_raw.png) | ![stick up](../img/model/stick_up.png) | ![skinned](../img/model/skinned.png) |
| ![armor](../img/model/armor_render.png) | ![godot](../img/model/godot_render.png) | |

#### Piece-colour assemblies (latest)

| | |
|---|---|
| ![v5 front](../img/model/model_up_front.png) | ![v5 ¾](../img/model/model_up_q34.png) | ![v5 side](../img/model/model_up_side.png) |
| ![v6](../img/model/model_up2.png) | ![final front](../img/model/final_front.png) | ![final ¾](../img/model/final_q34.png) |
| ![final side](../img/model/final_side.png) | ![final back](../img/model/final_back.png) | ![z-buffer](../img/model/zb_front.png) |

## 現在の状態

| ステップ | 状態 |
|---|---|
| パックコンテナレイアウト | 解決 — ルートインデックス、セクション表、行列パレット |
| 頂点ストリーム | 解決 — `_wgt` 0x24 / `_S_` 0x18 ストライド |
| パーツ命名 | 解決 — モジュラーキャラクター(9バリアント × LOD) |
| スケルトン階層 | 解決 — 85ボーン、リンク表検証済み |
| アニメーション形式 | 解決 — クリップ表、Hermite fp16カーブキー |
| バインドポーズ | **未解決** — IKリグ; ソルバーまたはパレット連鎖が必要 |
| スキンボディ組み立て | 進行中 — `_S_` キャップ配置済み、`_wgt` 待ち |
