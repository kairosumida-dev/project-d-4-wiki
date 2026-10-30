[EN](../en/skills.md) | [JA](../ja/skills.md) | [PT-BR](../pt-br/skills.md)

# Habilidades

**208 registros de habilidade** na tabela `skill`. Gramática do ID:
`SKILL_SK{nnn}_{CLASS}_{TYPE}{NN}[_EX]` — `_EX` marca a variante melhorada
(31 registros EX). `COMB` = habilidade de combo/cadeia, `SPEC` = habilidade especial,
`MEGACRUSH` = super do grupo, `ESCAPE` = fuga, `BARRIER01-06` = linha de barreira.
`SK246` e `SK999` não carregam tokens de classe/tipo.

**resolução jp (importante):** a junção ingênua do `gamedb.json` colapsa toda
habilidade em `ホーリーソード` — está quebrada. Em vez disso, habilidades ordenadas por `SK###`
se alinham **1:1 com a faixa de nomes de habilidades nas entradas de texto 2685–3035** — verificado
por cada cadeia `Ⅰ/Ⅱ/Ⅲ` cair no seu grupo `COMB` correspondente (ex.:
`SK163–165 FIGHTER_COMB01` → `ＶラッシュⅠ/Ⅱ/Ⅲ`) e por cada nome `_EX`
cair na sua base correspondente (ex.: `SK376 COMB01_EX` → `ＶラッシュＥＸ`,
`SK509 PRIEST_COMB01_EX` → `粛正ＥＸ`). Um nome está faltando na faixa de texto
em `SK373_ALL_ESCAPE` (não tem slot de nome); `SK999` também não tem. Trate
a coluna como **inferida com alta confiança**, não como strings brutas.

### Classes

| classe | habilidades |
|---|---|
| `FIGHTER` | 73 |
| `THIEF` | 41 |
| `PRIEST` | 22 |
| `WIZARD` | 14 |
| `NC` | 10 |
| `BARRIER` | 6 |
| `MA` | 6 |
| `SP` | 6 |
| `KS` | 5 |
| `RA` | 5 |
| `KA` | 4 |
| `ST` | 4 |
| `RS` | 3 |
| `NI` | 3 |
| `YZ` | 2 |
| `—` | 2 |
| `ALL` | 2 |

| tipo | qtd |
|---|---|
| `COMB` | 179 |
| `SPEC` | 13 |
| `MEGACRUSH` | 7 |
| `other` | 6 |
| `—` | 2 |
| `ESCAPE` | 1 |

Os tokens de classe também servem como classes de ofício/arma: `FIGHTER`, `THIEF`, `WIZARD`,
`PRIEST` são as quatro classes de carta; `KA/KS/MA/NC/NI/RA/RS/SP/ST/YZ` são as
linhas de habilidade das famílias de arma; `BARRIER` é a linha de barreira/buff e `ALL`
marca habilidades para o grupo inteiro.

### Todas as habilidades

#### <img src="../img/skills/skill_018.png" width="32" title="FIGHTER"> `FIGHTER` (73)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK163_FIGHTER_COMB01 — ＶラッシュⅠ"> `SKILL_SK163_FIGHTER_COMB01` | 163 | `COMB` |  | ＶラッシュⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK164_FIGHTER_COMB01 — ＶラッシュⅡ"> `SKILL_SK164_FIGHTER_COMB01` | 164 | `COMB` |  | ＶラッシュⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK165_FIGHTER_COMB01 — ＶラッシュⅢ"> `SKILL_SK165_FIGHTER_COMB01` | 165 | `COMB` |  | ＶラッシュⅢ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK166_FIGHTER_COMB02 — スパイラルアサルトⅠ"> `SKILL_SK166_FIGHTER_COMB02` | 166 | `COMB` |  | スパイラルアサルトⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK167_FIGHTER_COMB02 — スパイラルアサルトⅡ"> `SKILL_SK167_FIGHTER_COMB02` | 167 | `COMB` |  | スパイラルアサルトⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK168_FIGHTER_COMB02 — スパイラルアサルトⅢ"> `SKILL_SK168_FIGHTER_COMB02` | 168 | `COMB` |  | スパイラルアサルトⅢ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK169_FIGHTER_COMB03 — ダブルドラゴン"> `SKILL_SK169_FIGHTER_COMB03` | 169 | `COMB` |  | ダブルドラゴン |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK170_FIGHTER_COMB04 — ハンドレッドソードⅠ"> `SKILL_SK170_FIGHTER_COMB04` | 170 | `COMB` |  | ハンドレッドソードⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK171_FIGHTER_COMB04 — ハンドレッドソードⅡ"> `SKILL_SK171_FIGHTER_COMB04` | 171 | `COMB` |  | ハンドレッドソードⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK172_FIGHTER_COMB05 — バーバリアンラッシュⅠ"> `SKILL_SK172_FIGHTER_COMB05` | 172 | `COMB` |  | バーバリアンラッシュⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK173_FIGHTER_COMB05 — バーバリアンラッシュⅡ"> `SKILL_SK173_FIGHTER_COMB05` | 173 | `COMB` |  | バーバリアンラッシュⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK174_FIGHTER_COMB05 — バーバリアンラッシュⅢ"> `SKILL_SK174_FIGHTER_COMB05` | 174 | `COMB` |  | バーバリアンラッシュⅢ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK175_FIGHTER_COMB06 — バーサーカーラッシュⅠ"> `SKILL_SK175_FIGHTER_COMB06` | 175 | `COMB` |  | バーサーカーラッシュⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK176_FIGHTER_COMB06 — バーサーカーラッシュⅡ"> `SKILL_SK176_FIGHTER_COMB06` | 176 | `COMB` |  | バーサーカーラッシュⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK177_FIGHTER_COMB06 — バーサーカーラッシュⅢ"> `SKILL_SK177_FIGHTER_COMB06` | 177 | `COMB` |  | バーサーカーラッシュⅢ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK178_FIGHTER_COMB07 — ブレイドトルネードⅠ"> `SKILL_SK178_FIGHTER_COMB07` | 178 | `COMB` |  | ブレイドトルネードⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK179_FIGHTER_COMB07 — ブレイドトルネードⅡ"> `SKILL_SK179_FIGHTER_COMB07` | 179 | `COMB` |  | ブレイドトルネードⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK180_FIGHTER_COMB07 — ブレイドトルネードⅢ"> `SKILL_SK180_FIGHTER_COMB07` | 180 | `COMB` |  | ブレイドトルネードⅢ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK181_FIGHTER_COMB08 — ライトニングランサー"> `SKILL_SK181_FIGHTER_COMB08` | 181 | `COMB` |  | ライトニングランサー |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK182_FIGHTER_COMB08 — ホースライダースラスト"> `SKILL_SK182_FIGHTER_COMB08` | 182 | `COMB` |  | ホースライダースラスト |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK183_FIGHTER_COMB09 — ＨスラッシュⅠ"> `SKILL_SK183_FIGHTER_COMB09` | 183 | `COMB` |  | ＨスラッシュⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK184_FIGHTER_COMB09 — ＨスラッシュⅡ"> `SKILL_SK184_FIGHTER_COMB09` | 184 | `COMB` |  | ＨスラッシュⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK185_FIGHTER_COMB10 — ピアシングオールⅠ"> `SKILL_SK185_FIGHTER_COMB10` | 185 | `COMB` |  | ピアシングオールⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK186_FIGHTER_COMB10 — ピアシングオールⅡ"> `SKILL_SK186_FIGHTER_COMB10` | 186 | `COMB` |  | ピアシングオールⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK187_FIGHTER_COMB11 — ピアシングオールⅢ"> `SKILL_SK187_FIGHTER_COMB11` | 187 | `COMB` |  | ピアシングオールⅢ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK188_FIGHTER_COMB11 — ミラージュインパクトⅠ"> `SKILL_SK188_FIGHTER_COMB11` | 188 | `COMB` |  | ミラージュインパクトⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK189_FIGHTER_COMB11 — ミラージュインパクトⅡ"> `SKILL_SK189_FIGHTER_COMB11` | 189 | `COMB` |  | ミラージュインパクトⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK190_FIGHTER_COMB12 — ミラージュインパクトⅢ"> `SKILL_SK190_FIGHTER_COMB12` | 190 | `COMB` |  | ミラージュインパクトⅢ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK191_FIGHTER_COMB12 — ハードスラッシュ"> `SKILL_SK191_FIGHTER_COMB12` | 191 | `COMB` |  | ハードスラッシュ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK192_FIGHTER_COMB12 — グランドブレイカー"> `SKILL_SK192_FIGHTER_COMB12` | 192 | `COMB` |  | グランドブレイカー |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK193_FIGHTER_COMB13 — アーマーブレイカーⅠ"> `SKILL_SK193_FIGHTER_COMB13` | 193 | `COMB` |  | アーマーブレイカーⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK194_FIGHTER_COMB13 — アーマーブレイカーⅡ"> `SKILL_SK194_FIGHTER_COMB13` | 194 | `COMB` |  | アーマーブレイカーⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK195_FIGHTER_COMB13 — アーマーブレイカーⅢ"> `SKILL_SK195_FIGHTER_COMB13` | 195 | `COMB` |  | アーマーブレイカーⅢ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK196_FIGHTER_COMB14 — デッドエンド"> `SKILL_SK196_FIGHTER_COMB14` | 196 | `COMB` |  | デッドエンド |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK197_FIGHTER_COMB15 — プロテクトアロー"> `SKILL_SK197_FIGHTER_COMB15` | 197 | `COMB` |  | プロテクトアロー |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK198_FIGHTER_COMB16 — リフレクトアロー"> `SKILL_SK198_FIGHTER_COMB16` | 198 | `COMB` |  | リフレクトアロー |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK199_FIGHTER_COMB16 — プロテクトマジック"> `SKILL_SK199_FIGHTER_COMB16` | 199 | `COMB` |  | プロテクトマジック |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK200_FIGHTER_COMB16 — リフレクトマジック"> `SKILL_SK200_FIGHTER_COMB16` | 200 | `COMB` |  | リフレクトマジック |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK201_FIGHTER_COMB17 — 絶対障壁１"> `SKILL_SK201_FIGHTER_COMB17` | 201 | `COMB` |  | 絶対障壁１ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK202_FIGHTER_COMB17 — 絶対障壁＞反射１"> `SKILL_SK202_FIGHTER_COMB17` | 202 | `COMB` |  | 絶対障壁＞反射１ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK203_FIGHTER_COMB17 — ライジングスラッシュⅠ"> `SKILL_SK203_FIGHTER_COMB17` | 203 | `COMB` |  | ライジングスラッシュⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK204_FIGHTER_COMB18 — ライジングスラッシュⅡ"> `SKILL_SK204_FIGHTER_COMB18` | 204 | `COMB` |  | ライジングスラッシュⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK281_FIGHTER_COMB21 — ワイルドスマッシュⅡ"> `SKILL_SK281_FIGHTER_COMB21` | 281 | `COMB` |  | ワイルドスマッシュⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK282_FIGHTER_COMB21 — ファントムインパルス"> `SKILL_SK282_FIGHTER_COMB21` | 282 | `COMB` |  | ファントムインパルス |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK284_FIGHTER_COMB22 — ウィンドブレイク"> `SKILL_SK284_FIGHTER_COMB22` | 284 | `COMB` |  | ウィンドブレイク |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK285_FIGHTER_COMB23 — ロックブレイカー"> `SKILL_SK285_FIGHTER_COMB23` | 285 | `COMB` |  | ロックブレイカー |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK299_FIGHTER_COMB19 — ビートダウン"> `SKILL_SK299_FIGHTER_COMB19` | 299 | `COMB` |  | ビートダウン |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK300_FIGHTER_COMB20 — Ｂスラッシュ"> `SKILL_SK300_FIGHTER_COMB20` | 300 | `COMB` |  | Ｂスラッシュ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK318_FIGHTER_COMB24 — カラミティエッジⅠ"> `SKILL_SK318_FIGHTER_COMB24` | 318 | `COMB` |  | カラミティエッジⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK319_FIGHTER_COMB25 — カラミティエッジⅡ"> `SKILL_SK319_FIGHTER_COMB25` | 319 | `COMB` |  | カラミティエッジⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK320_FIGHTER_COMB25 — ストームチェイサー"> `SKILL_SK320_FIGHTER_COMB25` | 320 | `COMB` |  | ストームチェイサー |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK321_FIGHTER_SPEC01 — エンハンスマジック"> `SKILL_SK321_FIGHTER_SPEC01` | 321 | `SPEC` |  | エンハンスマジック |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK341_FIGHTER_COMB28 — レイズラッシュⅠ"> `SKILL_SK341_FIGHTER_COMB28` | 341 | `COMB` |  | レイズラッシュⅠ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK342_FIGHTER_COMB29 — レイズラッシュⅡ"> `SKILL_SK342_FIGHTER_COMB29` | 342 | `COMB` |  | レイズラッシュⅡ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK343_FIGHTER_COMB29 — ファルコンブロウ"> `SKILL_SK343_FIGHTER_COMB29` | 343 | `COMB` |  | ファルコンブロウ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK345_FIGHTER_COMB32 — クレセントインパクト"> `SKILL_SK345_FIGHTER_COMB32` | 345 | `COMB` |  | クレセントインパクト |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK346_FIGHTER_COMB32 — ヴァリアントブレイブ"> `SKILL_SK346_FIGHTER_COMB32` | 346 | `COMB` |  | ヴァリアントブレイブ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK347_FIGHTER_COMB30 — メテオストライク"> `SKILL_SK347_FIGHTER_COMB30` | 347 | `COMB` |  | メテオストライク |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK348_FIGHTER_COMB30 — オーガデストラクション"> `SKILL_SK348_FIGHTER_COMB30` | 348 | `COMB` |  | オーガデストラクション |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK349_FIGHTER_COMB31 — アトミックスマッシュ"> `SKILL_SK349_FIGHTER_COMB31` | 349 | `COMB` |  | アトミックスマッシュ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK350_FIGHTER_COMB27 — ヘブンズドーン"> `SKILL_SK350_FIGHTER_COMB27` | 350 | `COMB` |  | ヘブンズドーン |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK365_FIGHTER_COMB26 — ハンターズアイ"> `SKILL_SK365_FIGHTER_COMB26` | 365 | `COMB` |  | ハンターズアイ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK376_FIGHTER_COMB01_EX — ＶラッシュＥＸ"> `SKILL_SK376_FIGHTER_COMB01_EX` | 376 | `COMB` | EX | ＶラッシュＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK378_FIGHTER_COMB15_EX — グランドブレイカーＥＸ"> `SKILL_SK378_FIGHTER_COMB15_EX` | 378 | `COMB` | EX | グランドブレイカーＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK379_FIGHTER_COMB04_EX — ハンドレットソードＥＸ"> `SKILL_SK379_FIGHTER_COMB04_EX` | 379 | `COMB` | EX | ハンドレットソードＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK380_FIGHTER_COMB06_EX — バーサーカーラッシュＥＸ"> `SKILL_SK380_FIGHTER_COMB06_EX` | 380 | `COMB` | EX | バーサーカーラッシュＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK381_FIGHTER_COMB19_EX — ロックブレイカーＥＸ"> `SKILL_SK381_FIGHTER_COMB19_EX` | 381 | `COMB` | EX | ロックブレイカーＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK383_FIGHTER_COMB18_EX — デッドエンドＥＸ"> `SKILL_SK383_FIGHTER_COMB18_EX` | 383 | `COMB` | EX | デッドエンドＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK384_FIGHTER_COMB11_EX — ピアシングオールＥＸ"> `SKILL_SK384_FIGHTER_COMB11_EX` | 384 | `COMB` | EX | ピアシングオールＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK386_FIGHTER_COMB08_EX — ホースライダースラストＥＸ"> `SKILL_SK386_FIGHTER_COMB08_EX` | 386 | `COMB` | EX | ホースライダースラストＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK387_FIGHTER_COMB09_EX — ＨスラッシュＥＸ"> `SKILL_SK387_FIGHTER_COMB09_EX` | 387 | `COMB` | EX | ＨスラッシュＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK391_FIGHTER_SPEC02_EX — クロノストライフＥＸ"> `SKILL_SK391_FIGHTER_SPEC02_EX` | 391 | `SPEC` | EX | クロノストライフＥＸ |
| <img src="../img/skills/skill_018.png" width="28" title="SKILL_SK456_FIGHTER_SPEC02 — クロノストライフ"> `SKILL_SK456_FIGHTER_SPEC02` | 456 | `SPEC` |  | クロノストライフ |

#### <img src="../img/skills/skill_025.png" width="32" title="THIEF"> `THIEF` (41)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK248_THIEF_COMB04 — ＫスラッシュⅡ"> `SKILL_SK248_THIEF_COMB04` | 248 | `COMB` |  | ＫスラッシュⅡ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK249_THIEF_COMB05 — ＫスラッシュⅢ"> `SKILL_SK249_THIEF_COMB05` | 249 | `COMB` |  | ＫスラッシュⅢ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK250_THIEF_COMB06 — 回避行動１＋攻撃(仮)Ⅰ"> `SKILL_SK250_THIEF_COMB06` | 250 | `COMB` |  | 回避行動１＋攻撃(仮)Ⅰ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK251_THIEF_COMB06 — 回避行動１＋攻撃(仮)１"> `SKILL_SK251_THIEF_COMB06` | 251 | `COMB` |  | 回避行動１＋攻撃(仮)１ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK252_THIEF_COMB06 — 回避行動１＋攻撃(仮)Ⅱ"> `SKILL_SK252_THIEF_COMB06` | 252 | `COMB` |  | 回避行動１＋攻撃(仮)Ⅱ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK253_THIEF_COMB07 — 回避行動１＋攻撃(仮)２"> `SKILL_SK253_THIEF_COMB07` | 253 | `COMB` |  | 回避行動１＋攻撃(仮)２ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK254_THIEF_COMB07 — 回避行動２＋攻撃(仮)Ⅰ"> `SKILL_SK254_THIEF_COMB07` | 254 | `COMB` |  | 回避行動２＋攻撃(仮)Ⅰ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK255_THIEF_COMB07 — 回避行動２＋攻撃(仮)１"> `SKILL_SK255_THIEF_COMB07` | 255 | `COMB` |  | 回避行動２＋攻撃(仮)１ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK256_THIEF_COMB08 — 回避行動２＋攻撃(仮)Ⅱ"> `SKILL_SK256_THIEF_COMB08` | 256 | `COMB` |  | 回避行動２＋攻撃(仮)Ⅱ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK257_THIEF_COMB08 — 回避行動２＋攻撃(仮)２"> `SKILL_SK257_THIEF_COMB08` | 257 | `COMB` |  | 回避行動２＋攻撃(仮)２ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK258_THIEF_COMB09 — 回避行動３＋攻撃(仮)Ⅰ"> `SKILL_SK258_THIEF_COMB09` | 258 | `COMB` |  | 回避行動３＋攻撃(仮)Ⅰ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK259_THIEF_COMB09 — 回避行動３＋攻撃(仮)１"> `SKILL_SK259_THIEF_COMB09` | 259 | `COMB` |  | 回避行動３＋攻撃(仮)１ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK260_THIEF_COMB10 — 回避行動３＋攻撃(仮)Ⅱ"> `SKILL_SK260_THIEF_COMB10` | 260 | `COMB` |  | 回避行動３＋攻撃(仮)Ⅱ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK261_THIEF_COMB10 — 回避行動３＋攻撃(仮)２"> `SKILL_SK261_THIEF_COMB10` | 261 | `COMB` |  | 回避行動３＋攻撃(仮)２ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK262_THIEF_COMB11 — ヘビースタッブ"> `SKILL_SK262_THIEF_COMB11` | 262 | `COMB` |  | ヘビースタッブ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK263_THIEF_COMB12 — シャドウキル"> `SKILL_SK263_THIEF_COMB12` | 263 | `COMB` |  | シャドウキル |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK264_THIEF_COMB13 — エクステンシブショット"> `SKILL_SK264_THIEF_COMB13` | 264 | `COMB` |  | エクステンシブショット |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK265_THIEF_COMB14 — ブラッディレイン"> `SKILL_SK265_THIEF_COMB14` | 265 | `COMB` |  | ブラッディレイン |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK266_THIEF_MEGACRUSH — イマジナリーアロー"> `SKILL_SK266_THIEF_MEGACRUSH` | 266 | `MEGACRUSH` |  | イマジナリーアロー |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK267_THIEF_COMB16 — 連続貫通攻撃２(仮)"> `SKILL_SK267_THIEF_COMB16` | 267 | `COMB` |  | 連続貫通攻撃２(仮) |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK268_THIEF_COMB17 — チャージショット"> `SKILL_SK268_THIEF_COMB17` | 268 | `COMB` |  | チャージショット |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK269_THIEF_COMB18 — メテオストーム"> `SKILL_SK269_THIEF_COMB18` | 269 | `COMB` |  | メテオストーム |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK336_THIEF_SPEC03 — デッドリーロンドⅠ"> `SKILL_SK336_THIEF_SPEC03` | 336 | `SPEC` |  | デッドリーロンドⅠ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK337_THIEF_COMB19 — デッドリーロンドⅡ"> `SKILL_SK337_THIEF_COMB19` | 337 | `COMB` |  | デッドリーロンドⅡ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK338_THIEF_COMB19 — デッドリーロンドⅢ"> `SKILL_SK338_THIEF_COMB19` | 338 | `COMB` |  | デッドリーロンドⅢ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK339_THIEF_COMB19 — ツインスティング"> `SKILL_SK339_THIEF_COMB19` | 339 | `COMB` |  | ツインスティング |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK358_THIEF_COMB22 — ジャッジメントブロウ"> `SKILL_SK358_THIEF_COMB22` | 358 | `COMB` |  | ジャッジメントブロウ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK364_THIEF_COMB21 — ヘルディバイド"> `SKILL_SK364_THIEF_COMB21` | 364 | `COMB` |  | ヘルディバイド |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK366_THIEF_SPEC02 — ヴァイパーバイト"> `SKILL_SK366_THIEF_SPEC02` | 366 | `SPEC` |  | ヴァイパーバイト |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK368_THIEF_SPEC01 — ソニッククレイドル"> `SKILL_SK368_THIEF_SPEC01` | 368 | `SPEC` |  | ソニッククレイドル |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK371_THIEF_COMB23 — リストレインショット"> `SKILL_SK371_THIEF_COMB23` | 371 | `COMB` |  | リストレインショット |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK372_THIEF_COMB20 — アドバンスドシフト"> `SKILL_SK372_THIEF_COMB20` | 372 | `COMB` |  | アドバンスドシフト |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK525_THIEF_COMB06_EX — ＬスラッシュＥＸ"> `SKILL_SK525_THIEF_COMB06_EX` | 525 | `COMB` | EX | ＬスラッシュＥＸ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK527_THIEF_COMB07_EX — ＫスラッシュＥＸ"> `SKILL_SK527_THIEF_COMB07_EX` | 527 | `COMB` | EX | ＫスラッシュＥＸ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK528_THIEF_COMB11_EX — ヘビースタッブＥＸ"> `SKILL_SK528_THIEF_COMB11_EX` | 528 | `COMB` | EX | ヘビースタッブＥＸ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK529_THIEF_COMB18_EX — チャージショットＥＸ"> `SKILL_SK529_THIEF_COMB18_EX` | 529 | `COMB` | EX | チャージショットＥＸ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK530_THIEF_COMB20_EX — リストレインショットＥＸ"> `SKILL_SK530_THIEF_COMB20_EX` | 530 | `COMB` | EX | リストレインショットＥＸ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK531_THIEF_COMB14_EX — エクステンシブショットＥＸ"> `SKILL_SK531_THIEF_COMB14_EX` | 531 | `COMB` | EX | エクステンシブショットＥＸ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK532_THIEF_COMB23_EX — ライトニングブラストＥＸ"> `SKILL_SK532_THIEF_COMB23_EX` | 532 | `COMB` | EX | ライトニングブラストＥＸ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK536_THIEF_MEGACRUSH_EX — ブラッディレインＥＸ"> `SKILL_SK536_THIEF_MEGACRUSH_EX` | 536 | `MEGACRUSH` | EX | ブラッディレインＥＸ |
| <img src="../img/skills/skill_025.png" width="28" title="SKILL_SK542_THIEF_SPEC03_EX — サイレントフラッシュＥＸ"> `SKILL_SK542_THIEF_SPEC03_EX` | 542 | `SPEC` | EX | サイレントフラッシュＥＸ |

#### <img src="../img/skills/skill_035.png" width="32" title="WIZARD"> `WIZARD` (14)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK151_WIZARD_COMB01 — ＳＦラッシュⅠ"> `SKILL_SK151_WIZARD_COMB01` | 151 | `COMB` |  | ＳＦラッシュⅠ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK152_WIZARD_COMB01 — ＳＦラッシュⅡ"> `SKILL_SK152_WIZARD_COMB01` | 152 | `COMB` |  | ＳＦラッシュⅡ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK153_WIZARD_COMB01 — ＳＦラッシュⅢ"> `SKILL_SK153_WIZARD_COMB01` | 153 | `COMB` |  | ＳＦラッシュⅢ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK154_WIZARD_COMB02 — オールレンジアタックⅠ"> `SKILL_SK154_WIZARD_COMB02` | 154 | `COMB` |  | オールレンジアタックⅠ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK155_WIZARD_COMB02 — オールレンジアタックⅡ"> `SKILL_SK155_WIZARD_COMB02` | 155 | `COMB` |  | オールレンジアタックⅡ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK270_WIZARD_MEGACRUSH — エターナルサンライズ"> `SKILL_SK270_WIZARD_MEGACRUSH` | 270 | `MEGACRUSH` |  | エターナルサンライズ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK283_WIZARD_COMB03 — ソニックブラスト"> `SKILL_SK283_WIZARD_COMB03` | 283 | `COMB` |  | ソニックブラスト |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK324_WIZARD_SPEC02 — ウィルオブユニバースⅠ"> `SKILL_SK324_WIZARD_SPEC02` | 324 | `SPEC` |  | ウィルオブユニバースⅠ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK325_WIZARD_COMB04 — ウィルオブユニバースⅡ"> `SKILL_SK325_WIZARD_COMB04` | 325 | `COMB` |  | ウィルオブユニバースⅡ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK326_WIZARD_COMB04 — ウィルオブユニバースⅢ"> `SKILL_SK326_WIZARD_COMB04` | 326 | `COMB` |  | ウィルオブユニバースⅢ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK327_WIZARD_COMB04 — ドラゴンスマッシュ"> `SKILL_SK327_WIZARD_COMB04` | 327 | `COMB` |  | ドラゴンスマッシュ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK370_WIZARD_SPEC01 — ライトニングブラスト"> `SKILL_SK370_WIZARD_SPEC01` | 370 | `SPEC` |  | ライトニングブラスト |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK508_WIZARD_MEGACRUSH_EX — メテオストームＥＸ"> `SKILL_SK508_WIZARD_MEGACRUSH_EX` | 508 | `MEGACRUSH` | EX | メテオストームＥＸ |
| <img src="../img/skills/skill_035.png" width="28" title="SKILL_SK541_WIZARD_SPEC02_EX — エンハンスマジックＥＸ"> `SKILL_SK541_WIZARD_SPEC02_EX` | 541 | `SPEC` | EX | エンハンスマジックＥＸ |

#### <img src="../img/skills/skill_041.png" width="32" title="PRIEST"> `PRIEST` (22)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK093_PRIEST_SPEC02 — ロードオブファランクス"> `SKILL_SK093_PRIEST_SPEC02` | 093 | `SPEC` |  | ロードオブファランクス |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK156_PRIEST_COMB01 — 粛正Ⅰ"> `SKILL_SK156_PRIEST_COMB01` | 156 | `COMB` |  | 粛正Ⅰ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK157_PRIEST_COMB01 — 粛正Ⅱ"> `SKILL_SK157_PRIEST_COMB01` | 157 | `COMB` |  | 粛正Ⅱ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK158_PRIEST_COMB01 — 粛正Ⅲ"> `SKILL_SK158_PRIEST_COMB01` | 158 | `COMB` |  | 粛正Ⅲ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK159_PRIEST_COMB02 — 神罰Ⅰ"> `SKILL_SK159_PRIEST_COMB02` | 159 | `COMB` |  | 神罰Ⅰ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK160_PRIEST_COMB02 — 神罰Ⅱ"> `SKILL_SK160_PRIEST_COMB02` | 160 | `COMB` |  | 神罰Ⅱ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK161_PRIEST_COMB02 — 神罰Ⅲ"> `SKILL_SK161_PRIEST_COMB02` | 161 | `COMB` |  | 神罰Ⅲ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK162_PRIEST_COMB03 — スパイトブレイカー"> `SKILL_SK162_PRIEST_COMB03` | 162 | `COMB` |  | スパイトブレイカー |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK271_PRIEST_MEGACRUSH — ヘブンズゲート"> `SKILL_SK271_PRIEST_MEGACRUSH` | 271 | `MEGACRUSH` |  | ヘブンズゲート |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK275_PRIEST_COMB04 — 神の鉄槌Ⅱ"> `SKILL_SK275_PRIEST_COMB04` | 275 | `COMB` |  | 神の鉄槌Ⅱ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK276_PRIEST_COMB04 — 神の鉄槌Ⅲ"> `SKILL_SK276_PRIEST_COMB04` | 276 | `COMB` |  | 神の鉄槌Ⅲ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK277_PRIEST_COMB04 — ヴァルキリーストライク"> `SKILL_SK277_PRIEST_COMB04` | 277 | `COMB` |  | ヴァルキリーストライク |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK334_PRIEST_COMB05 — サイレントフラッシュ"> `SKILL_SK334_PRIEST_COMB05` | 334 | `COMB` |  | サイレントフラッシュ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK356_PRIEST_COMB06 — ホーリーガイザー"> `SKILL_SK356_PRIEST_COMB06` | 356 | `COMB` |  | ホーリーガイザー |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK357_PRIEST_COMB07 — デュアルスタッブ"> `SKILL_SK357_PRIEST_COMB07` | 357 | `COMB` |  | デュアルスタッブ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK361_PRIEST_COMB08 — シャイニングアロー"> `SKILL_SK361_PRIEST_COMB08` | 361 | `COMB` |  | シャイニングアロー |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK375_PRIEST_SPEC01 — シンセリティー"> `SKILL_SK375_PRIEST_SPEC01` | 375 | `SPEC` |  | シンセリティー |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK509_PRIEST_COMB01_EX — 粛正ＥＸ"> `SKILL_SK509_PRIEST_COMB01_EX` | 509 | `COMB` | EX | 粛正ＥＸ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK510_PRIEST_COMB03_EX — スパイトブレイカーＥＸ"> `SKILL_SK510_PRIEST_COMB03_EX` | 510 | `COMB` | EX | スパイトブレイカーＥＸ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK511_PRIEST_COMB02_EX — 神罰ＥＸ"> `SKILL_SK511_PRIEST_COMB02_EX` | 511 | `COMB` | EX | 神罰ＥＸ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK516_PRIEST_MEGACRUSH_EX — エターナルサンライズＥＸ"> `SKILL_SK516_PRIEST_MEGACRUSH_EX` | 516 | `MEGACRUSH` | EX | エターナルサンライズＥＸ |
| <img src="../img/skills/skill_041.png" width="28" title="SKILL_SK524_PRIEST_SPEC02_EX — ロードオブファランクスＥＸ"> `SKILL_SK524_PRIEST_SPEC02_EX` | 524 | `SPEC` | EX | ロードオブファランクスＥＸ |

#### <img src="../img/icons/cls_ka.png" width="32" title="KA"> `KA` (4)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_ka.png" width="28" title="SKILL_SK216_KA_COMB01 — スピアージャブⅠ"> `SKILL_SK216_KA_COMB01` | 216 | `COMB` |  | スピアージャブⅠ |
| <img src="../img/icons/cls_ka.png" width="28" title="SKILL_SK217_KA_COMB01 — スピアージャブⅡ"> `SKILL_SK217_KA_COMB01` | 217 | `COMB` |  | スピアージャブⅡ |
| <img src="../img/icons/cls_ka.png" width="28" title="SKILL_SK218_KA_COMB01 — スピアージャブⅢ"> `SKILL_SK218_KA_COMB01` | 218 | `COMB` |  | スピアージャブⅢ |
| <img src="../img/icons/cls_ka.png" width="28" title="SKILL_SK219_KA_COMB02 — クラウドブレイカー"> `SKILL_SK219_KA_COMB02` | 219 | `COMB` |  | クラウドブレイカー |

#### <img src="../img/icons/cls_ks.png" width="32" title="KS"> `KS` (5)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_ks.png" width="28" title="SKILL_SK213_KS_COMB01 — ロッククラッシャーⅡ"> `SKILL_SK213_KS_COMB01` | 213 | `COMB` |  | ロッククラッシャーⅡ |
| <img src="../img/icons/cls_ks.png" width="28" title="SKILL_SK214_KS_COMB01 — ロッククラッシャーⅢ"> `SKILL_SK214_KS_COMB01` | 214 | `COMB` |  | ロッククラッシャーⅢ |
| <img src="../img/icons/cls_ks.png" width="28" title="SKILL_SK215_KS_COMB02 — ハードブレイカー"> `SKILL_SK215_KS_COMB02` | 215 | `COMB` |  | ハードブレイカー |
| <img src="../img/icons/cls_ks.png" width="28" title="SKILL_SK278_KS_COMB03 — バニシングブロー"> `SKILL_SK278_KS_COMB03` | 278 | `COMB` |  | バニシングブロー |
| <img src="../img/icons/cls_ks.png" width="28" title="SKILL_SK377_KS_COMB02_EX — スレッシャーテイルＥＸ"> `SKILL_SK377_KS_COMB02_EX` | 377 | `COMB` | EX | スレッシャーテイルＥＸ |

#### <img src="../img/icons/cls_ma.png" width="32" title="MA"> `MA` (6)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_ma.png" width="28" title="SKILL_SK220_MA_COMB01 — ＷオブチャリオットⅠ"> `SKILL_SK220_MA_COMB01` | 220 | `COMB` |  | ＷオブチャリオットⅠ |
| <img src="../img/icons/cls_ma.png" width="28" title="SKILL_SK221_MA_COMB01 — ＷオブチャリオットⅡ"> `SKILL_SK221_MA_COMB01` | 221 | `COMB` |  | ＷオブチャリオットⅡ |
| <img src="../img/icons/cls_ma.png" width="28" title="SKILL_SK222_MA_COMB01 — ＷオブチャリオットⅢ"> `SKILL_SK222_MA_COMB01` | 222 | `COMB` |  | ＷオブチャリオットⅢ |
| <img src="../img/icons/cls_ma.png" width="28" title="SKILL_SK223_MA_COMB02 — バスタースラッシュⅠ"> `SKILL_SK223_MA_COMB02` | 223 | `COMB` |  | バスタースラッシュⅠ |
| <img src="../img/icons/cls_ma.png" width="28" title="SKILL_SK279_MA_COMB03 — ブレイジングブラスト"> `SKILL_SK279_MA_COMB03` | 279 | `COMB` |  | ブレイジングブラスト |
| <img src="../img/icons/cls_ma.png" width="28" title="SKILL_SK512_MA_COMB02_EX — ハードブレイカーＥＸ"> `SKILL_SK512_MA_COMB02_EX` | 512 | `COMB` | EX | ハードブレイカーＥＸ |

#### <img src="../img/icons/cls_nc.png" width="32" title="NC"> `NC` (10)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK239_NC_COMB01 — ナイフ用連係２(仮)３"> `SKILL_SK239_NC_COMB01` | 239 | `COMB` |  | ナイフ用連係２(仮)３ |
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK240_NC_COMB01 — トルネードパンチ"> `SKILL_SK240_NC_COMB01` | 240 | `COMB` |  | トルネードパンチ |
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK241_NC_COMB01 — 裡門頂肘"> `SKILL_SK241_NC_COMB01` | 241 | `COMB` |  | 裡門頂肘 |
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK242_NC_COMB02 — ハンドレッドダガー"> `SKILL_SK242_NC_COMB02` | 242 | `COMB` |  | ハンドレッドダガー |
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK243_NC_COMB02 — バックロール"> `SKILL_SK243_NC_COMB02` | 243 | `COMB` |  | バックロール |
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK244_NC_COMB02 — ＬスラッシュⅠ"> `SKILL_SK244_NC_COMB02` | 244 | `COMB` |  | ＬスラッシュⅠ |
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK245_NC_COMB03 — ＬスラッシュⅡ"> `SKILL_SK245_NC_COMB03` | 245 | `COMB` |  | ＬスラッシュⅡ |
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK247_NC_COMB05 — ＫスラッシュⅠ"> `SKILL_SK247_NC_COMB05` | 247 | `COMB` |  | ＫスラッシュⅠ |
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK328_NC_COMB07 — ブレインシェイカー"> `SKILL_SK328_NC_COMB07` | 328 | `COMB` |  | ブレインシェイカー |
| <img src="../img/icons/cls_nc.png" width="28" title="SKILL_SK344_NC_COMB06 — ムーンスラッシュ"> `SKILL_SK344_NC_COMB06` | 344 | `COMB` |  | ムーンスラッシュ |

#### <img src="../img/icons/cls_ni.png" width="32" title="NI"> `NI` (3)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_ni.png" width="28" title="SKILL_SK273_NI_COMB01 — Ｓリッパー"> `SKILL_SK273_NI_COMB01` | 273 | `COMB` |  | Ｓリッパー |
| <img src="../img/icons/cls_ni.png" width="28" title="SKILL_SK274_NI_COMB02 — 神の鉄槌Ⅰ"> `SKILL_SK274_NI_COMB02` | 274 | `COMB` |  | 神の鉄槌Ⅰ |
| <img src="../img/icons/cls_ni.png" width="28" title="SKILL_SK526_NI_COMB01_EX — ブロードビートＥＸ"> `SKILL_SK526_NI_COMB01_EX` | 526 | `COMB` | EX | ブロードビートＥＸ |

#### <img src="../img/icons/cls_ra.png" width="32" title="RA"> `RA` (5)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_ra.png" width="28" title="SKILL_SK234_RA_COMB01 — ナックル用連係２(仮)Ⅰ"> `SKILL_SK234_RA_COMB01` | 234 | `COMB` |  | ナックル用連係２(仮)Ⅰ |
| <img src="../img/icons/cls_ra.png" width="28" title="SKILL_SK235_RA_COMB01 — ナイフ用連係２(仮)１"> `SKILL_SK235_RA_COMB01` | 235 | `COMB` |  | ナイフ用連係２(仮)１ |
| <img src="../img/icons/cls_ra.png" width="28" title="SKILL_SK236_RA_COMB01 — ナックル用連係２(仮)Ⅱ"> `SKILL_SK236_RA_COMB01` | 236 | `COMB` |  | ナックル用連係２(仮)Ⅱ |
| <img src="../img/icons/cls_ra.png" width="28" title="SKILL_SK237_RA_COMB02 — ナイフ用連係２(仮)２"> `SKILL_SK237_RA_COMB02` | 237 | `COMB` |  | ナイフ用連係２(仮)２ |
| <img src="../img/icons/cls_ra.png" width="28" title="SKILL_SK382_RA_COMB01_EX — トルネードスパイクＥＸ"> `SKILL_SK382_RA_COMB01_EX` | 382 | `COMB` | EX | トルネードスパイクＥＸ |

#### <img src="../img/icons/cls_rs.png" width="32" title="RS"> `RS` (3)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_rs.png" width="28" title="SKILL_SK231_RS_COMB01 — ダンスオブザドラゴンⅠ"> `SKILL_SK231_RS_COMB01` | 231 | `COMB` |  | ダンスオブザドラゴンⅠ |
| <img src="../img/icons/cls_rs.png" width="28" title="SKILL_SK232_RS_COMB01 — ダンスオブザドラゴンⅡ"> `SKILL_SK232_RS_COMB01` | 232 | `COMB` |  | ダンスオブザドラゴンⅡ |
| <img src="../img/icons/cls_rs.png" width="28" title="SKILL_SK233_RS_COMB02 — ダンスオブザドラゴンⅢ"> `SKILL_SK233_RS_COMB02` | 233 | `COMB` |  | ダンスオブザドラゴンⅢ |

#### <img src="../img/icons/cls_sp.png" width="32" title="SP"> `SP` (6)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_sp.png" width="28" title="SKILL_SK224_SP_COMB01 — バスタースラッシュⅡ"> `SKILL_SK224_SP_COMB01` | 224 | `COMB` |  | バスタースラッシュⅡ |
| <img src="../img/icons/cls_sp.png" width="28" title="SKILL_SK225_SP_COMB01 — バイオレントスラッシュ"> `SKILL_SK225_SP_COMB01` | 225 | `COMB` |  | バイオレントスラッシュ |
| <img src="../img/icons/cls_sp.png" width="28" title="SKILL_SK226_SP_COMB01 — トルネードスパイクⅠ"> `SKILL_SK226_SP_COMB01` | 226 | `COMB` |  | トルネードスパイクⅠ |
| <img src="../img/icons/cls_sp.png" width="28" title="SKILL_SK227_SP_COMB02 — トルネードスパイクⅡ"> `SKILL_SK227_SP_COMB02` | 227 | `COMB` |  | トルネードスパイクⅡ |
| <img src="../img/icons/cls_sp.png" width="28" title="SKILL_SK280_SP_COMB03 — ワイルドスマッシュⅠ"> `SKILL_SK280_SP_COMB03` | 280 | `COMB` |  | ワイルドスマッシュⅠ |
| <img src="../img/icons/cls_sp.png" width="28" title="SKILL_SK385_SP_COMB02_EX — クラウドブレイカーＥＸ"> `SKILL_SK385_SP_COMB02_EX` | 385 | `COMB` | EX | クラウドブレイカーＥＸ |

#### <img src="../img/icons/cls_st.png" width="32" title="ST"> `ST` (4)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_st.png" width="28" title="SKILL_SK228_ST_COMB01 — トルネードスパイクⅢ"> `SKILL_SK228_ST_COMB01` | 228 | `COMB` |  | トルネードスパイクⅢ |
| <img src="../img/icons/cls_st.png" width="28" title="SKILL_SK229_ST_COMB01 — ビーストアタック"> `SKILL_SK229_ST_COMB01` | 229 | `COMB` |  | ビーストアタック |
| <img src="../img/icons/cls_st.png" width="28" title="SKILL_SK230_ST_COMB01 — ダブルショット"> `SKILL_SK230_ST_COMB01` | 230 | `COMB` |  | ダブルショット |
| <img src="../img/icons/cls_st.png" width="28" title="SKILL_SK272_ST_COMB02 — ブロードビート"> `SKILL_SK272_ST_COMB02` | 272 | `COMB` |  | ブロードビート |

#### <img src="../img/icons/cls_yu.png" width="32" title="YZ"> `YZ` (2)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_yu.png" width="28" title="SKILL_SK238_YZ_COMB01 — ナックル用連係２(仮)Ⅲ"> `SKILL_SK238_YZ_COMB01` | 238 | `COMB` |  | ナックル用連係２(仮)Ⅲ |
| <img src="../img/icons/cls_yu.png" width="28" title="SKILL_SK369_YZ_COMB02 — ワールウィンド"> `SKILL_SK369_YZ_COMB02` | 369 | `COMB` |  | ワールウィンド |

#### <img src="../img/icons/cls_shield.png" width="32" title="BARRIER"> `BARRIER` (6)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/icons/cls_shield.png" width="28" title="SKILL_SK205_BARRIER01 — スレッシャーテイル"> `SKILL_SK205_BARRIER01` | 205 | `01` |  | スレッシャーテイル |
| <img src="../img/icons/cls_shield.png" width="28" title="SKILL_SK206_BARRIER02 — オーガラッシュⅠ"> `SKILL_SK206_BARRIER02` | 206 | `02` |  | オーガラッシュⅠ |
| <img src="../img/icons/cls_shield.png" width="28" title="SKILL_SK207_BARRIER03 — オーガラッシュⅡ"> `SKILL_SK207_BARRIER03` | 207 | `03` |  | オーガラッシュⅡ |
| <img src="../img/icons/cls_shield.png" width="28" title="SKILL_SK208_BARRIER04 — オーガラッシュⅢ"> `SKILL_SK208_BARRIER04` | 208 | `04` |  | オーガラッシュⅢ |
| <img src="../img/icons/cls_shield.png" width="28" title="SKILL_SK209_BARRIER05 — ブロウダウン"> `SKILL_SK209_BARRIER05` | 209 | `05` |  | ブロウダウン |
| <img src="../img/icons/cls_shield.png" width="28" title="SKILL_SK210_BARRIER06 — ロッククラッシャーⅠ"> `SKILL_SK210_BARRIER06` | 210 | `06` |  | ロッククラッシャーⅠ |

#### <img src="../img/skills/skill_050.png" width="32" title="ALL"> `ALL` (2)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| <img src="../img/skills/skill_050.png" width="28" title="SKILL_SK373_ALL_ESCAPE"> `SKILL_SK373_ALL_ESCAPE` | 373 | `ESCAPE` |  |  |
| <img src="../img/skills/skill_050.png" width="28" title="SKILL_SK374_ALL_MEGACRUSH — ラディカルバースト"> `SKILL_SK374_ALL_MEGACRUSH` | 374 | `MEGACRUSH` |  | ラディカルバースト |

#### `—` (2)

| id interno | SK# | tipo | EX | jp (inferido) |
|---|---|---|---|---|
| `SKILL_SK246` | 246 | `` |  | ＬスラッシュⅢ |
| `SKILL_SK999` | 999 | `` |  |  |

## Ícones de habilidade (336)

Emblemas de habilidade extraídos de `spr_skill.xst` (64×64 cada).

<img src="../img/skills/skill_000.png" width="48" title="Skill icon #0"> <img src="../img/skills/skill_001.png" width="48" title="Skill icon #1"> <img src="../img/skills/skill_002.png" width="48" title="Skill icon #2"> <img src="../img/skills/skill_003.png" width="48" title="Skill icon #3"> <img src="../img/skills/skill_004.png" width="48" title="Skill icon #4"> <img src="../img/skills/skill_005.png" width="48" title="Skill icon #5"> <img src="../img/skills/skill_006.png" width="48" title="Skill icon #6"> <img src="../img/skills/skill_007.png" width="48" title="Skill icon #7"> <img src="../img/skills/skill_008.png" width="48" title="Skill icon #8"> <img src="../img/skills/skill_009.png" width="48" title="Skill icon #9"> <img src="../img/skills/skill_010.png" width="48" title="Skill icon #10"> <img src="../img/skills/skill_011.png" width="48" title="Skill icon #11">
<img src="../img/skills/skill_012.png" width="48" title="Skill icon #12"> <img src="../img/skills/skill_013.png" width="48" title="Skill icon #13"> <img src="../img/skills/skill_014.png" width="48" title="Skill icon #14"> <img src="../img/skills/skill_015.png" width="48" title="Skill icon #15"> <img src="../img/skills/skill_016.png" width="48" title="Skill icon #16"> <img src="../img/skills/skill_017.png" width="48" title="Skill icon #17"> <img src="../img/skills/skill_018.png" width="48" title="Skill icon #18"> <img src="../img/skills/skill_019.png" width="48" title="Skill icon #19"> <img src="../img/skills/skill_020.png" width="48" title="Skill icon #20"> <img src="../img/skills/skill_021.png" width="48" title="Skill icon #21"> <img src="../img/skills/skill_022.png" width="48" title="Skill icon #22"> <img src="../img/skills/skill_023.png" width="48" title="Skill icon #23">
<img src="../img/skills/skill_024.png" width="48" title="Skill icon #24"> <img src="../img/skills/skill_025.png" width="48" title="Skill icon #25"> <img src="../img/skills/skill_026.png" width="48" title="Skill icon #26"> <img src="../img/skills/skill_027.png" width="48" title="Skill icon #27"> <img src="../img/skills/skill_028.png" width="48" title="Skill icon #28"> <img src="../img/skills/skill_029.png" width="48" title="Skill icon #29"> <img src="../img/skills/skill_030.png" width="48" title="Skill icon #30"> <img src="../img/skills/skill_031.png" width="48" title="Skill icon #31"> <img src="../img/skills/skill_032.png" width="48" title="Skill icon #32"> <img src="../img/skills/skill_033.png" width="48" title="Skill icon #33"> <img src="../img/skills/skill_034.png" width="48" title="Skill icon #34"> <img src="../img/skills/skill_035.png" width="48" title="Skill icon #35">
<img src="../img/skills/skill_036.png" width="48" title="Skill icon #36"> <img src="../img/skills/skill_037.png" width="48" title="Skill icon #37"> <img src="../img/skills/skill_038.png" width="48" title="Skill icon #38"> <img src="../img/skills/skill_039.png" width="48" title="Skill icon #39"> <img src="../img/skills/skill_040.png" width="48" title="Skill icon #40"> <img src="../img/skills/skill_041.png" width="48" title="Skill icon #41"> <img src="../img/skills/skill_042.png" width="48" title="Skill icon #42"> <img src="../img/skills/skill_043.png" width="48" title="Skill icon #43"> <img src="../img/skills/skill_044.png" width="48" title="Skill icon #44"> <img src="../img/skills/skill_045.png" width="48" title="Skill icon #45"> <img src="../img/skills/skill_046.png" width="48" title="Skill icon #46"> <img src="../img/skills/skill_047.png" width="48" title="Skill icon #47">
<img src="../img/skills/skill_048.png" width="48" title="Skill icon #48"> <img src="../img/skills/skill_049.png" width="48" title="Skill icon #49"> <img src="../img/skills/skill_050.png" width="48" title="Skill icon #50"> <img src="../img/skills/skill_051.png" width="48" title="Skill icon #51"> <img src="../img/skills/skill_052.png" width="48" title="Skill icon #52"> <img src="../img/skills/skill_053.png" width="48" title="Skill icon #53"> <img src="../img/skills/skill_054.png" width="48" title="Skill icon #54"> <img src="../img/skills/skill_055.png" width="48" title="Skill icon #55"> <img src="../img/skills/skill_056.png" width="48" title="Skill icon #56"> <img src="../img/skills/skill_057.png" width="48" title="Skill icon #57"> <img src="../img/skills/skill_058.png" width="48" title="Skill icon #58"> <img src="../img/skills/skill_059.png" width="48" title="Skill icon #59">
<img src="../img/skills/skill_060.png" width="48" title="Skill icon #60"> <img src="../img/skills/skill_061.png" width="48" title="Skill icon #61"> <img src="../img/skills/skill_062.png" width="48" title="Skill icon #62"> <img src="../img/skills/skill_063.png" width="48" title="Skill icon #63"> <img src="../img/skills/skill_064.png" width="48" title="Skill icon #64"> <img src="../img/skills/skill_065.png" width="48" title="Skill icon #65"> <img src="../img/skills/skill_066.png" width="48" title="Skill icon #66"> <img src="../img/skills/skill_067.png" width="48" title="Skill icon #67"> <img src="../img/skills/skill_068.png" width="48" title="Skill icon #68"> <img src="../img/skills/skill_069.png" width="48" title="Skill icon #69"> <img src="../img/skills/skill_070.png" width="48" title="Skill icon #70"> <img src="../img/skills/skill_071.png" width="48" title="Skill icon #71">
<img src="../img/skills/skill_072.png" width="48" title="Skill icon #72"> <img src="../img/skills/skill_073.png" width="48" title="Skill icon #73"> <img src="../img/skills/skill_074.png" width="48" title="Skill icon #74"> <img src="../img/skills/skill_075.png" width="48" title="Skill icon #75"> <img src="../img/skills/skill_076.png" width="48" title="Skill icon #76"> <img src="../img/skills/skill_077.png" width="48" title="Skill icon #77"> <img src="../img/skills/skill_078.png" width="48" title="Skill icon #78"> <img src="../img/skills/skill_079.png" width="48" title="Skill icon #79"> <img src="../img/skills/skill_080.png" width="48" title="Skill icon #80"> <img src="../img/skills/skill_081.png" width="48" title="Skill icon #81"> <img src="../img/skills/skill_082.png" width="48" title="Skill icon #82"> <img src="../img/skills/skill_083.png" width="48" title="Skill icon #83">
<img src="../img/skills/skill_084.png" width="48" title="Skill icon #84"> <img src="../img/skills/skill_085.png" width="48" title="Skill icon #85"> <img src="../img/skills/skill_086.png" width="48" title="Skill icon #86"> <img src="../img/skills/skill_087.png" width="48" title="Skill icon #87"> <img src="../img/skills/skill_088.png" width="48" title="Skill icon #88"> <img src="../img/skills/skill_089.png" width="48" title="Skill icon #89"> <img src="../img/skills/skill_090.png" width="48" title="Skill icon #90"> <img src="../img/skills/skill_091.png" width="48" title="Skill icon #91"> <img src="../img/skills/skill_092.png" width="48" title="Skill icon #92"> <img src="../img/skills/skill_093.png" width="48" title="Skill icon #93"> <img src="../img/skills/skill_094.png" width="48" title="Skill icon #94"> <img src="../img/skills/skill_095.png" width="48" title="Skill icon #95">
<img src="../img/skills/skill_096.png" width="48" title="Skill icon #96"> <img src="../img/skills/skill_097.png" width="48" title="Skill icon #97"> <img src="../img/skills/skill_098.png" width="48" title="Skill icon #98"> <img src="../img/skills/skill_099.png" width="48" title="Skill icon #99"> <img src="../img/skills/skill_100.png" width="48" title="Skill icon #100"> <img src="../img/skills/skill_101.png" width="48" title="Skill icon #101"> <img src="../img/skills/skill_102.png" width="48" title="Skill icon #102"> <img src="../img/skills/skill_103.png" width="48" title="Skill icon #103"> <img src="../img/skills/skill_104.png" width="48" title="Skill icon #104"> <img src="../img/skills/skill_105.png" width="48" title="Skill icon #105"> <img src="../img/skills/skill_106.png" width="48" title="Skill icon #106"> <img src="../img/skills/skill_107.png" width="48" title="Skill icon #107">
<img src="../img/skills/skill_108.png" width="48" title="Skill icon #108"> <img src="../img/skills/skill_109.png" width="48" title="Skill icon #109"> <img src="../img/skills/skill_110.png" width="48" title="Skill icon #110"> <img src="../img/skills/skill_111.png" width="48" title="Skill icon #111"> <img src="../img/skills/skill_112.png" width="48" title="Skill icon #112"> <img src="../img/skills/skill_113.png" width="48" title="Skill icon #113"> <img src="../img/skills/skill_114.png" width="48" title="Skill icon #114"> <img src="../img/skills/skill_115.png" width="48" title="Skill icon #115"> <img src="../img/skills/skill_116.png" width="48" title="Skill icon #116"> <img src="../img/skills/skill_117.png" width="48" title="Skill icon #117"> <img src="../img/skills/skill_118.png" width="48" title="Skill icon #118"> <img src="../img/skills/skill_119.png" width="48" title="Skill icon #119">
<img src="../img/skills/skill_120.png" width="48" title="Skill icon #120"> <img src="../img/skills/skill_121.png" width="48" title="Skill icon #121"> <img src="../img/skills/skill_122.png" width="48" title="Skill icon #122"> <img src="../img/skills/skill_123.png" width="48" title="Skill icon #123"> <img src="../img/skills/skill_124.png" width="48" title="Skill icon #124"> <img src="../img/skills/skill_125.png" width="48" title="Skill icon #125"> <img src="../img/skills/skill_126.png" width="48" title="Skill icon #126"> <img src="../img/skills/skill_127.png" width="48" title="Skill icon #127"> <img src="../img/skills/skill_128.png" width="48" title="Skill icon #128"> <img src="../img/skills/skill_129.png" width="48" title="Skill icon #129"> <img src="../img/skills/skill_130.png" width="48" title="Skill icon #130"> <img src="../img/skills/skill_131.png" width="48" title="Skill icon #131">
<img src="../img/skills/skill_132.png" width="48" title="Skill icon #132"> <img src="../img/skills/skill_133.png" width="48" title="Skill icon #133"> <img src="../img/skills/skill_134.png" width="48" title="Skill icon #134"> <img src="../img/skills/skill_135.png" width="48" title="Skill icon #135"> <img src="../img/skills/skill_136.png" width="48" title="Skill icon #136"> <img src="../img/skills/skill_137.png" width="48" title="Skill icon #137"> <img src="../img/skills/skill_138.png" width="48" title="Skill icon #138"> <img src="../img/skills/skill_139.png" width="48" title="Skill icon #139"> <img src="../img/skills/skill_140.png" width="48" title="Skill icon #140"> <img src="../img/skills/skill_141.png" width="48" title="Skill icon #141"> <img src="../img/skills/skill_142.png" width="48" title="Skill icon #142"> <img src="../img/skills/skill_143.png" width="48" title="Skill icon #143">
<img src="../img/skills/skill_144.png" width="48" title="Skill icon #144"> <img src="../img/skills/skill_145.png" width="48" title="Skill icon #145"> <img src="../img/skills/skill_146.png" width="48" title="Skill icon #146"> <img src="../img/skills/skill_147.png" width="48" title="Skill icon #147"> <img src="../img/skills/skill_148.png" width="48" title="Skill icon #148"> <img src="../img/skills/skill_149.png" width="48" title="Skill icon #149"> <img src="../img/skills/skill_150.png" width="48" title="Skill icon #150"> <img src="../img/skills/skill_151.png" width="48" title="Skill icon #151"> <img src="../img/skills/skill_152.png" width="48" title="Skill icon #152"> <img src="../img/skills/skill_153.png" width="48" title="Skill icon #153"> <img src="../img/skills/skill_154.png" width="48" title="Skill icon #154"> <img src="../img/skills/skill_155.png" width="48" title="Skill icon #155">
<img src="../img/skills/skill_156.png" width="48" title="Skill icon #156"> <img src="../img/skills/skill_157.png" width="48" title="Skill icon #157"> <img src="../img/skills/skill_158.png" width="48" title="Skill icon #158"> <img src="../img/skills/skill_159.png" width="48" title="Skill icon #159"> <img src="../img/skills/skill_160.png" width="48" title="Skill icon #160"> <img src="../img/skills/skill_161.png" width="48" title="Skill icon #161"> <img src="../img/skills/skill_162.png" width="48" title="Skill icon #162"> <img src="../img/skills/skill_163.png" width="48" title="Skill icon #163"> <img src="../img/skills/skill_164.png" width="48" title="Skill icon #164"> <img src="../img/skills/skill_165.png" width="48" title="Skill icon #165"> <img src="../img/skills/skill_166.png" width="48" title="Skill icon #166"> <img src="../img/skills/skill_167.png" width="48" title="Skill icon #167">
<img src="../img/skills/skill_168.png" width="48" title="Skill icon #168"> <img src="../img/skills/skill_169.png" width="48" title="Skill icon #169"> <img src="../img/skills/skill_170.png" width="48" title="Skill icon #170"> <img src="../img/skills/skill_171.png" width="48" title="Skill icon #171"> <img src="../img/skills/skill_172.png" width="48" title="Skill icon #172"> <img src="../img/skills/skill_173.png" width="48" title="Skill icon #173"> <img src="../img/skills/skill_174.png" width="48" title="Skill icon #174"> <img src="../img/skills/skill_175.png" width="48" title="Skill icon #175"> <img src="../img/skills/skill_176.png" width="48" title="Skill icon #176"> <img src="../img/skills/skill_177.png" width="48" title="Skill icon #177"> <img src="../img/skills/skill_178.png" width="48" title="Skill icon #178"> <img src="../img/skills/skill_179.png" width="48" title="Skill icon #179">
<img src="../img/skills/skill_180.png" width="48" title="Skill icon #180"> <img src="../img/skills/skill_181.png" width="48" title="Skill icon #181"> <img src="../img/skills/skill_182.png" width="48" title="Skill icon #182"> <img src="../img/skills/skill_183.png" width="48" title="Skill icon #183"> <img src="../img/skills/skill_184.png" width="48" title="Skill icon #184"> <img src="../img/skills/skill_185.png" width="48" title="Skill icon #185"> <img src="../img/skills/skill_186.png" width="48" title="Skill icon #186"> <img src="../img/skills/skill_187.png" width="48" title="Skill icon #187"> <img src="../img/skills/skill_188.png" width="48" title="Skill icon #188"> <img src="../img/skills/skill_189.png" width="48" title="Skill icon #189"> <img src="../img/skills/skill_190.png" width="48" title="Skill icon #190"> <img src="../img/skills/skill_191.png" width="48" title="Skill icon #191">
<img src="../img/skills/skill_192.png" width="48" title="Skill icon #192"> <img src="../img/skills/skill_193.png" width="48" title="Skill icon #193"> <img src="../img/skills/skill_194.png" width="48" title="Skill icon #194"> <img src="../img/skills/skill_195.png" width="48" title="Skill icon #195"> <img src="../img/skills/skill_196.png" width="48" title="Skill icon #196"> <img src="../img/skills/skill_197.png" width="48" title="Skill icon #197"> <img src="../img/skills/skill_198.png" width="48" title="Skill icon #198"> <img src="../img/skills/skill_199.png" width="48" title="Skill icon #199"> <img src="../img/skills/skill_200.png" width="48" title="Skill icon #200"> <img src="../img/skills/skill_201.png" width="48" title="Skill icon #201"> <img src="../img/skills/skill_202.png" width="48" title="Skill icon #202"> <img src="../img/skills/skill_203.png" width="48" title="Skill icon #203">
<img src="../img/skills/skill_204.png" width="48" title="Skill icon #204"> <img src="../img/skills/skill_205.png" width="48" title="Skill icon #205"> <img src="../img/skills/skill_206.png" width="48" title="Skill icon #206"> <img src="../img/skills/skill_207.png" width="48" title="Skill icon #207"> <img src="../img/skills/skill_208.png" width="48" title="Skill icon #208"> <img src="../img/skills/skill_209.png" width="48" title="Skill icon #209"> <img src="../img/skills/skill_210.png" width="48" title="Skill icon #210"> <img src="../img/skills/skill_211.png" width="48" title="Skill icon #211"> <img src="../img/skills/skill_212.png" width="48" title="Skill icon #212"> <img src="../img/skills/skill_213.png" width="48" title="Skill icon #213"> <img src="../img/skills/skill_214.png" width="48" title="Skill icon #214"> <img src="../img/skills/skill_215.png" width="48" title="Skill icon #215">
<img src="../img/skills/skill_216.png" width="48" title="Skill icon #216"> <img src="../img/skills/skill_217.png" width="48" title="Skill icon #217"> <img src="../img/skills/skill_218.png" width="48" title="Skill icon #218"> <img src="../img/skills/skill_219.png" width="48" title="Skill icon #219"> <img src="../img/skills/skill_220.png" width="48" title="Skill icon #220"> <img src="../img/skills/skill_221.png" width="48" title="Skill icon #221"> <img src="../img/skills/skill_222.png" width="48" title="Skill icon #222"> <img src="../img/skills/skill_223.png" width="48" title="Skill icon #223"> <img src="../img/skills/skill_224.png" width="48" title="Skill icon #224"> <img src="../img/skills/skill_225.png" width="48" title="Skill icon #225"> <img src="../img/skills/skill_226.png" width="48" title="Skill icon #226"> <img src="../img/skills/skill_227.png" width="48" title="Skill icon #227">
<img src="../img/skills/skill_228.png" width="48" title="Skill icon #228"> <img src="../img/skills/skill_229.png" width="48" title="Skill icon #229"> <img src="../img/skills/skill_230.png" width="48" title="Skill icon #230"> <img src="../img/skills/skill_231.png" width="48" title="Skill icon #231"> <img src="../img/skills/skill_232.png" width="48" title="Skill icon #232"> <img src="../img/skills/skill_233.png" width="48" title="Skill icon #233"> <img src="../img/skills/skill_234.png" width="48" title="Skill icon #234"> <img src="../img/skills/skill_235.png" width="48" title="Skill icon #235"> <img src="../img/skills/skill_236.png" width="48" title="Skill icon #236"> <img src="../img/skills/skill_237.png" width="48" title="Skill icon #237"> <img src="../img/skills/skill_238.png" width="48" title="Skill icon #238"> <img src="../img/skills/skill_239.png" width="48" title="Skill icon #239">
<img src="../img/skills/skill_240.png" width="48" title="Skill icon #240"> <img src="../img/skills/skill_241.png" width="48" title="Skill icon #241"> <img src="../img/skills/skill_242.png" width="48" title="Skill icon #242"> <img src="../img/skills/skill_243.png" width="48" title="Skill icon #243"> <img src="../img/skills/skill_244.png" width="48" title="Skill icon #244"> <img src="../img/skills/skill_245.png" width="48" title="Skill icon #245"> <img src="../img/skills/skill_246.png" width="48" title="Skill icon #246"> <img src="../img/skills/skill_247.png" width="48" title="Skill icon #247"> <img src="../img/skills/skill_248.png" width="48" title="Skill icon #248"> <img src="../img/skills/skill_249.png" width="48" title="Skill icon #249"> <img src="../img/skills/skill_250.png" width="48" title="Skill icon #250"> <img src="../img/skills/skill_251.png" width="48" title="Skill icon #251">
<img src="../img/skills/skill_252.png" width="48" title="Skill icon #252"> <img src="../img/skills/skill_253.png" width="48" title="Skill icon #253"> <img src="../img/skills/skill_254.png" width="48" title="Skill icon #254"> <img src="../img/skills/skill_255.png" width="48" title="Skill icon #255"> <img src="../img/skills/skill_256.png" width="48" title="Skill icon #256"> <img src="../img/skills/skill_257.png" width="48" title="Skill icon #257"> <img src="../img/skills/skill_258.png" width="48" title="Skill icon #258"> <img src="../img/skills/skill_259.png" width="48" title="Skill icon #259"> <img src="../img/skills/skill_260.png" width="48" title="Skill icon #260"> <img src="../img/skills/skill_261.png" width="48" title="Skill icon #261"> <img src="../img/skills/skill_262.png" width="48" title="Skill icon #262"> <img src="../img/skills/skill_263.png" width="48" title="Skill icon #263">
<img src="../img/skills/skill_264.png" width="48" title="Skill icon #264"> <img src="../img/skills/skill_265.png" width="48" title="Skill icon #265"> <img src="../img/skills/skill_266.png" width="48" title="Skill icon #266"> <img src="../img/skills/skill_267.png" width="48" title="Skill icon #267"> <img src="../img/skills/skill_268.png" width="48" title="Skill icon #268"> <img src="../img/skills/skill_269.png" width="48" title="Skill icon #269"> <img src="../img/skills/skill_270.png" width="48" title="Skill icon #270"> <img src="../img/skills/skill_271.png" width="48" title="Skill icon #271"> <img src="../img/skills/skill_272.png" width="48" title="Skill icon #272"> <img src="../img/skills/skill_273.png" width="48" title="Skill icon #273"> <img src="../img/skills/skill_274.png" width="48" title="Skill icon #274"> <img src="../img/skills/skill_275.png" width="48" title="Skill icon #275">
<img src="../img/skills/skill_276.png" width="48" title="Skill icon #276"> <img src="../img/skills/skill_277.png" width="48" title="Skill icon #277"> <img src="../img/skills/skill_278.png" width="48" title="Skill icon #278"> <img src="../img/skills/skill_279.png" width="48" title="Skill icon #279"> <img src="../img/skills/skill_280.png" width="48" title="Skill icon #280"> <img src="../img/skills/skill_281.png" width="48" title="Skill icon #281"> <img src="../img/skills/skill_282.png" width="48" title="Skill icon #282"> <img src="../img/skills/skill_283.png" width="48" title="Skill icon #283"> <img src="../img/skills/skill_284.png" width="48" title="Skill icon #284"> <img src="../img/skills/skill_285.png" width="48" title="Skill icon #285"> <img src="../img/skills/skill_286.png" width="48" title="Skill icon #286"> <img src="../img/skills/skill_287.png" width="48" title="Skill icon #287">
<img src="../img/skills/skill_288.png" width="48" title="Skill icon #288"> <img src="../img/skills/skill_289.png" width="48" title="Skill icon #289"> <img src="../img/skills/skill_290.png" width="48" title="Skill icon #290"> <img src="../img/skills/skill_291.png" width="48" title="Skill icon #291"> <img src="../img/skills/skill_292.png" width="48" title="Skill icon #292"> <img src="../img/skills/skill_293.png" width="48" title="Skill icon #293"> <img src="../img/skills/skill_294.png" width="48" title="Skill icon #294"> <img src="../img/skills/skill_295.png" width="48" title="Skill icon #295"> <img src="../img/skills/skill_296.png" width="48" title="Skill icon #296"> <img src="../img/skills/skill_297.png" width="48" title="Skill icon #297"> <img src="../img/skills/skill_298.png" width="48" title="Skill icon #298"> <img src="../img/skills/skill_299.png" width="48" title="Skill icon #299">
<img src="../img/skills/skill_300.png" width="48" title="Skill icon #300"> <img src="../img/skills/skill_301.png" width="48" title="Skill icon #301"> <img src="../img/skills/skill_302.png" width="48" title="Skill icon #302"> <img src="../img/skills/skill_303.png" width="48" title="Skill icon #303"> <img src="../img/skills/skill_304.png" width="48" title="Skill icon #304"> <img src="../img/skills/skill_305.png" width="48" title="Skill icon #305"> <img src="../img/skills/skill_306.png" width="48" title="Skill icon #306"> <img src="../img/skills/skill_307.png" width="48" title="Skill icon #307"> <img src="../img/skills/skill_308.png" width="48" title="Skill icon #308"> <img src="../img/skills/skill_309.png" width="48" title="Skill icon #309"> <img src="../img/skills/skill_310.png" width="48" title="Skill icon #310"> <img src="../img/skills/skill_311.png" width="48" title="Skill icon #311">
<img src="../img/skills/skill_312.png" width="48" title="Skill icon #312"> <img src="../img/skills/skill_313.png" width="48" title="Skill icon #313"> <img src="../img/skills/skill_314.png" width="48" title="Skill icon #314"> <img src="../img/skills/skill_315.png" width="48" title="Skill icon #315"> <img src="../img/skills/skill_316.png" width="48" title="Skill icon #316"> <img src="../img/skills/skill_317.png" width="48" title="Skill icon #317"> <img src="../img/skills/skill_318.png" width="48" title="Skill icon #318"> <img src="../img/skills/skill_319.png" width="48" title="Skill icon #319"> <img src="../img/skills/skill_320.png" width="48" title="Skill icon #320"> <img src="../img/skills/skill_321.png" width="48" title="Skill icon #321"> <img src="../img/skills/skill_322.png" width="48" title="Skill icon #322"> <img src="../img/skills/skill_323.png" width="48" title="Skill icon #323">
<img src="../img/skills/skill_324.png" width="48" title="Skill icon #324"> <img src="../img/skills/skill_325.png" width="48" title="Skill icon #325"> <img src="../img/skills/skill_326.png" width="48" title="Skill icon #326"> <img src="../img/skills/skill_327.png" width="48" title="Skill icon #327"> <img src="../img/skills/skill_328.png" width="48" title="Skill icon #328"> <img src="../img/skills/skill_329.png" width="48" title="Skill icon #329"> <img src="../img/skills/skill_330.png" width="48" title="Skill icon #330"> <img src="../img/skills/skill_331.png" width="48" title="Skill icon #331"> <img src="../img/skills/skill_332.png" width="48" title="Skill icon #332"> <img src="../img/skills/skill_333.png" width="48" title="Skill icon #333"> <img src="../img/skills/skill_334.png" width="48" title="Skill icon #334"> <img src="../img/skills/skill_335.png" width="48" title="Skill icon #335">
