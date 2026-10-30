[EN](../en/items.md) | [JA](../ja/items.md) | [PT-BR](../pt-br/items.md)

<link rel="stylesheet" href="../assets/lb.css">
<script src="../assets/lb.js" defer></script>
# Itens

Os ícones das linhas são **sprites de classe** extraídos de `spr_icon.xst` (o atlas de ícones 1024×1024 do jogo) — representam a *família* do item, não arte individual.

| ícone | família | ícone | família |
|---|---|---|---|
| ![](../img/icons/cls_ka.png) | `KA` machados 1 mão | ![](../img/icons/cls_ks.png) | `KS` espadas 1 mão |
| ![](../img/icons/cls_ra.png) | `RA` machados 2 mãos | ![](../img/icons/cls_rs.png) | `RS` espadas 2 mãos |
| ![](../img/icons/cls_ma.png) | `MA` clavas/maças | ![](../img/icons/cls_nc.png) | `NC` soqueiras |
| ![](../img/icons/cls_ni.png) | `NI` adagas | ![](../img/icons/cls_sp.png) | `SP` lanças |
| ![](../img/icons/cls_st.png) | `ST` cajados | ![](../img/icons/cls_yu.png) | `YU` arcos |
| ![](../img/icons/cls_qi.png) | `QI` flechas/aljavas | | |

Itens das nove tabelas `*2` do v4. Clique num ícone para ampliar.

### Totais das tabelas v4

| tabela | registros | jp resolvido | método |
|---|---|---|---|
| `weapon2` | 358 | 357 | âncora 3359 (KA01=ハンドアックス); um nome faltando em QI10 |
| `helm2` | 100 | 100 | exato 100/100 |
| `boots2` | 76 | 70 | alinhado por NW 76/70 |
| `armor2` | 94 | 89 | alinhado por NW 94/89 |
| `shield2` | 48 | 47 | alinhado por NW 48/47 |
| `acces2` | 90 | 90 | alinhado por NW 90/90 |
| `food2` | 21 | 21 | exato 21/21 |
| `potion2` | 38 | 32 | manual: trincas nome/desc 2465-2541; bloco de cura + PO23-29 provisório |
| `book2` | 410 | 316 | decodificação manual por tier de elemento + pares EX; clusters SK puros em branco |

### weapon2 — armas (358)

O segundo bloco é o **código da família da arma** — os mesmos códigos usados pelos
prefixos de habilidade restritos por classe. As leituras das famílias vêm dos nomes resolvidos
(machado de mão / francisca para KA, espada curta / rapieira para KS etc.):

| código | qtd | nomes mostram |
|---|---|---|
| `KS` | 57 | espadas de uma mão (ショートソード, レイピア, ロングソード…) |
| `ST` | 47 | cajados e varinhas (クォータースタッフ, セプター, ヒールロッド…) |
| `KA` | 40 | machados de uma mão (ハンドアックス, フランキスカ, ウォーアックス…) |
| `NI` | 35 | adagas (ダガー, ダーク, ソードブレイカー…) |
| `RA` | 35 | machados de duas mãos (ブロードアックス, グレートアックス, バルディッシュ…) |
| `SP` | 33 | lanças (ショートスピア, パルチザン, トライデント…) |
| `RS` | 32 | espadas de duas mãos (バスタードソード, クレイモア, トゥハンドソード…) |
| `MA` | 30 | clavas e maças (クラブ, メイス, モーニングスター…) |
| `NC` | 20 | soqueiras / armas de punho (ウッドグローブ, トライネイル, アイアンスパイク…) |
| `YU` | 20 | arcos (ウッドボウ, ロングボウ, グレートボウ…) |
| `QI` | 10 | flechas e aljavas (アロー, ファイアーアロー…) |

As linhas `*_D4SUMMON` são o conjunto 「大魔の〜」; as linhas `*_EX` são variantes
melhoradas (nomes ＥＸ). `WEAPON2_QI10_SHINKI` não tem entrada de texto.

#### `KA` (40)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA01_HANDAXE — ハンドアックス — Espada 1 mão／スケルトンが使用して / いるEspada 1 mão。não sintetizável"> `WEAPON2_KA01_HANDAXE` | ハンドアックス | Espada 1 mão／スケルトンが使用して / いるEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA02_FRANCISCA — フランキスカ — 骸骨の炎剣"> `WEAPON2_KA02_FRANCISCA` | フランキスカ | 骸骨の炎剣 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA03_WARAXE — ウォーアックス — Espada 1 mão／Ataque：２３ / RequerＳＴＲ：nenhum"> `WEAPON2_KA03_WARAXE` | ウォーアックス | Espada 1 mão／Ataque：２３ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA04_BATTLEAXE — バトルアックス — Espada 1 mão／スケルトンが使用して / いるfogoのEspada 1 mão。não sintetizável"> `WEAPON2_KA04_BATTLEAXE` | バトルアックス | Espada 1 mão／スケルトンが使用して / いるfogoのEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA05_GOLDAXE — ゴールドアックス — 骸骨の氷剣"> `WEAPON2_KA05_GOLDAXE` | ゴールドアックス | 骸骨の氷剣 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA06_SHIELDAXE — シールドアックス — Espada 1 mão／スケルトンが使用して / いるgeloのEspada 1 mão。não sintetizável"> `WEAPON2_KA06_SHIELDAXE` | シールドアックス | Espada 1 mão／スケルトンが使用して / いるgeloのEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA07_TRISTRAM — ウェルテクス — 骸骨の雷剣"> `WEAPON2_KA07_TRISTRAM` | ウェルテクス | 骸骨の雷剣 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA08_WARAXE — ★ウォーアックス — Espada 1 mão／スケルトンが使用して / いるraioのEspada 1 mão。não sintetizável"> `WEAPON2_KA08_WARAXE` | ★ウォーアックス | Espada 1 mão／スケルトンが使用して / いるraioのEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA09_SILVERAXE — シルバーアックス"> `WEAPON2_KA09_SILVERAXE` | シルバーアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA10_EGRET — イーグレット"> `WEAPON2_KA10_EGRET` | イーグレット |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA11_ORC — 邪鬼の斧"> `WEAPON2_KA11_ORC` | 邪鬼の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA12_ORC_F — 邪鬼の炎斧"> `WEAPON2_KA12_ORC_F` | 邪鬼の炎斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA13_ORC_I — 邪鬼の氷斧"> `WEAPON2_KA13_ORC_I` | 邪鬼の氷斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA14_ORC_T — 邪鬼の雷斧"> `WEAPON2_KA14_ORC_T` | 邪鬼の雷斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA15_MINOTAUR — 牛人の斧"> `WEAPON2_KA15_MINOTAUR` | 牛人の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA16_MINOTAUR_S — 牛人兵の斧"> `WEAPON2_KA16_MINOTAUR_S` | 牛人兵の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA17_ROBBER — 山賊の斧"> `WEAPON2_KA17_ROBBER` | 山賊の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA18_CRESCENT — クレセントアックス"> `WEAPON2_KA18_CRESCENT` | クレセントアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA19_TAMECHAN2 — スパイクアックス"> `WEAPON2_KA19_TAMECHAN2` | スパイクアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA20_DEMONCHOPPER — ブラックハチェット"> `WEAPON2_KA20_DEMONCHOPPER` | ブラックハチェット |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA21_LILAC — サイレントアックス"> `WEAPON2_KA21_LILAC` | サイレントアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA22_ARMOREDFROG — 蛙の斧"> `WEAPON2_KA22_ARMOREDFROG` | 蛙の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA23_GIANTSTONE — 岩石巨人の斧"> `WEAPON2_KA23_GIANTSTONE` | 岩石巨人の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA24_MUGGER — 悪漢の斧"> `WEAPON2_KA24_MUGGER` | 悪漢の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA25_HORIHORI — トライブアックス"> `WEAPON2_KA25_HORIHORI` | トライブアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA26_CRIMSON — クリムゾンライン"> `WEAPON2_KA26_CRIMSON` | クリムゾンライン |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA27_BATTLE — ★バトルアックス"> `WEAPON2_KA27_BATTLE` | ★バトルアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA28_SHIELD — ★シールドアックス"> `WEAPON2_KA28_SHIELD` | ★シールドアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA29_FRANCISCA — ★フランキスカ"> `WEAPON2_KA29_FRANCISCA` | ★フランキスカ |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA30_HORIHORI — ★トライブアックス"> `WEAPON2_KA30_HORIHORI` | ★トライブアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA31_MACHINE_GOLD — 黄金機兵の斧"> `WEAPON2_KA31_MACHINE_GOLD` | 黄金機兵の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA32_HEVY_GUARD — 重装兵の斧"> `WEAPON2_KA32_HEVY_GUARD` | 重装兵の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA33_D4SHINKI1 — ヘルクリムゾン"> `WEAPON2_KA33_D4SHINKI1` | ヘルクリムゾン |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA34_BARBARIAN — バルバロスアックス"> `WEAPON2_KA34_BARBARIAN` | バルバロスアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA35_D4SHINKI2 — バロックアックス"> `WEAPON2_KA35_D4SHINKI2` | バロックアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA36_SUNLIGHT — サンライトアックス"> `WEAPON2_KA36_SUNLIGHT` | サンライトアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA37_MOONLIGHT — ムーンライトアックス"> `WEAPON2_KA37_MOONLIGHT` | ムーンライトアックス |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA38_GLADIATOR — カタストロフィー"> `WEAPON2_KA38_GLADIATOR` | カタストロフィー |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA39_D4SUMMON — 大魔の斧"> `WEAPON2_KA39_D4SUMMON` | 大魔の斧 |
| <img src="../img/icons/cls_ka.png" width="36" title="WEAPON2_KA40_TRISTRAM_EX — ウェルテクスＥＸ"> `WEAPON2_KA40_TRISTRAM_EX` | ウェルテクスＥＸ |

#### `KS` (57)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS01_SHORTSWORD — ショートソード — 蜥蜴の剣"> `WEAPON2_KS01_SHORTSWORD` | ショートソード | 蜥蜴の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS02_RAPIER — レイピア — Espada 1 mão／Ataque：４０ / RequerＳＴＲ：nenhum"> `WEAPON2_KS02_RAPIER` | レイピア | Espada 1 mão／Ataque：４０ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS03_LONGSWORD — ロングソード — Espada 1 mão／リザードマンが使用し / ているEspada 1 mão。não sintetizável"> `WEAPON2_KS03_LONGSWORD` | ロングソード | Espada 1 mão／リザードマンが使用し / ているEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS04_VIKINGSWORD — ヴァイキングソード — 蜥蜴護衛兵の剣"> `WEAPON2_KS04_VIKINGSWORD` | ヴァイキングソード | 蜥蜴護衛兵の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS05_FALCHION — ファルシオン — Espada 1 mão／Ataque：５５ / RequerＳＴＲ：nenhum"> `WEAPON2_KS05_FALCHION` | ファルシオン | Espada 1 mão／Ataque：５５ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS06_GLADIUS — グラディウス — Espada 1 mão／ガーディアンリザード / マンが持つ剣。não sintetizável"> `WEAPON2_KS06_GLADIUS` | グラディウス | Espada 1 mão／ガーディアンリザード / マンが持つ剣。não sintetizável |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS07_MITHRILBLADE — ミスリルソード — 小鬼の剣"> `WEAPON2_KS07_MITHRILBLADE` | ミスリルソード | 小鬼の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS08_MAGICSWORD — マジックソード — Espada 1 mão／Ataque：２７ / RequerＳＴＲ：nenhum"> `WEAPON2_KS08_MAGICSWORD` | マジックソード | Espada 1 mão／Ataque：２７ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS09_EXCALIBUR — エクスカリバー — Espada 1 mão／ゴブリンファイターが / 使用しているEspada 1 mão。não sintetizável"> `WEAPON2_KS09_EXCALIBUR` | エクスカリバー | Espada 1 mão／ゴブリンファイターが / 使用しているEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS10_FAKESWORD — フェイクソード — 小鬼君主の剣"> `WEAPON2_KS10_FAKESWORD` | フェイクソード | 小鬼君主の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS11_BOLG — アンサラー — Espada 1 mão／Ataque：４５ / RequerＳＴＲ：nenhum"> `WEAPON2_KS11_BOLG` | アンサラー | Espada 1 mão／Ataque：４５ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS12_WHITESWORD — デモンズソード — Espada 1 mão／ゴブリンロードが使用 / しているEspada 1 mão。não sintetizável"> `WEAPON2_KS12_WHITESWORD` | デモンズソード | Espada 1 mão／ゴブリンロードが使用 / しているEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS13_BLACKSWORD — グレートソード — 犬頭鬼の剣"> `WEAPON2_KS13_BLACKSWORD` | グレートソード | 犬頭鬼の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS14_KNIGHTSWORD — ナイトソード — Espada 1 mão／コボルドウォリアーが / 使用しているEspada 1 mão。não sintetizável"> `WEAPON2_KS14_KNIGHTSWORD` | ナイトソード | Espada 1 mão／コボルドウォリアーが / 使用しているEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS15_LONGSWORD — ★ロングソード — サファイアエッジ"> `WEAPON2_KS15_LONGSWORD` | ★ロングソード | サファイアエッジ |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS16_FALCHION — ★ファルシオン — Espada 1 mão／Ataque：８３ / RequerＳＴＲ：１０"> `WEAPON2_KS16_FALCHION` | ★ファルシオン | Espada 1 mão／Ataque：８３ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS17_CULANNSWORD — クランのショートソード"> `WEAPON2_KS17_CULANNSWORD` | クランのショートソード |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS18_VIPERFUNG — バイパーファング"> `WEAPON2_KS18_VIPERFUNG` | バイパーファング |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS19_ROYAL — ホーリーソード"> `WEAPON2_KS19_ROYAL` | ホーリーソード |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS20_SKELETON — 骸骨の剣"> `WEAPON2_KS20_SKELETON` | 骸骨の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS21_SKELETON_F — 骸骨の炎剣"> `WEAPON2_KS21_SKELETON_F` | 骸骨の炎剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS22_SKELETON_I — 骸骨の氷剣"> `WEAPON2_KS22_SKELETON_I` | 骸骨の氷剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS23_SKELETON_T — 骸骨の雷剣"> `WEAPON2_KS23_SKELETON_T` | 骸骨の雷剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS24_LIZARDMAN — 蜥蜴の剣"> `WEAPON2_KS24_LIZARDMAN` | 蜥蜴の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS25_LIZARDNAN_G — 蜥蜴護衛兵の剣"> `WEAPON2_KS25_LIZARDNAN_G` | 蜥蜴護衛兵の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS26_GOBLIN_F — 小鬼の剣"> `WEAPON2_KS26_GOBLIN_F` | 小鬼の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS27_GOBLIN_L — 小鬼君主の剣"> `WEAPON2_KS27_GOBLIN_L` | 小鬼君主の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS28_KOBOLD_W — 犬頭鬼の剣"> `WEAPON2_KS28_KOBOLD_W` | 犬頭鬼の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS29_SAPPHIRE — サファイアエッジ"> `WEAPON2_KS29_SAPPHIRE` | サファイアエッジ |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS30_BLOODY — ブラッディスパイン"> `WEAPON2_KS30_BLOODY` | ブラッディスパイン |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS31_SHAMSHIR — シャムシール"> `WEAPON2_KS31_SHAMSHIR` | シャムシール |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS32_DIVIDER — ディバイドソード"> `WEAPON2_KS32_DIVIDER` | ディバイドソード |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS33_WING — ウィングソード"> `WEAPON2_KS33_WING` | ウィングソード |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS34_GUARDIANFROG — 蛙護衛兵の剣"> `WEAPON2_KS34_GUARDIANFROG` | 蛙護衛兵の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS35_ARMOREDFROGKING — 蛙王の剣"> `WEAPON2_KS35_ARMOREDFROGKING` | 蛙王の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS36_GIANTFIRE — 炎巨人の剣"> `WEAPON2_KS36_GIANTFIRE` | 炎巨人の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS37_GIANTICE — 氷巨人の剣"> `WEAPON2_KS37_GIANTICE` | 氷巨人の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS38_SHINOBI — 忍の刀"> `WEAPON2_KS38_SHINOBI` | 忍の刀 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS39_SEIRYUTOU — 青龍刀"> `WEAPON2_KS39_SEIRYUTOU` | 青龍刀 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS40_DRAGONSLAYER — ドラゴンソード"> `WEAPON2_KS40_DRAGONSLAYER` | ドラゴンソード |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS41_RAPIER — ★レイピア"> `WEAPON2_KS41_RAPIER` | ★レイピア |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS42 — ★ヴァイキングソード"> `WEAPON2_KS42` | ★ヴァイキングソード |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS43_GLADIUS — ★グラディウス"> `WEAPON2_KS43_GLADIUS` | ★グラディウス |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS44_SHAMSHIR — ★シャムシール"> `WEAPON2_KS44_SHAMSHIR` | ★シャムシール |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS45_SEIRYUTOU — ★青龍刀"> `WEAPON2_KS45_SEIRYUTOU` | ★青龍刀 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS46_MACHINE — 機兵の剣"> `WEAPON2_KS46_MACHINE` | 機兵の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS47_MACHINE_DARK — 暗黒機兵の剣"> `WEAPON2_KS47_MACHINE_DARK` | 暗黒機兵の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS48_DUBIOUS — 怪人の剣"> `WEAPON2_KS48_DUBIOUS` | 怪人の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS49_MASTERRAPIER — マスターレイピア"> `WEAPON2_KS49_MASTERRAPIER` | マスターレイピア |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS50_TRIBE — トライブエッジ"> `WEAPON2_KS50_TRIBE` | トライブエッジ |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS51_D4SHINKI2 — グラディエーター"> `WEAPON2_KS51_D4SHINKI2` | グラディエーター |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS52_BRINGER_R — ライトブリンガー"> `WEAPON2_KS52_BRINGER_R` | ライトブリンガー |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS53_BRINGER_L — シャドウブリンガー"> `WEAPON2_KS53_BRINGER_L` | シャドウブリンガー |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS54_RAGNAROK — アロンダイト"> `WEAPON2_KS54_RAGNAROK` | アロンダイト |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS55_PIRATE — 海賊の剣"> `WEAPON2_KS55_PIRATE` | 海賊の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS56_D4SUMMON — 大魔の剣"> `WEAPON2_KS56_D4SUMMON` | 大魔の剣 |
| <img src="../img/icons/cls_ks.png" width="36" title="WEAPON2_KS57_BOLG_EX — アンサラーＥＸ"> `WEAPON2_KS57_BOLG_EX` | アンサラーＥＸ |

#### `MA` (30)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA01_CLUB — クラブ — Espada 1 mão／特別な力を持つ純粋な / サファイアで作られた宝剣"> `WEAPON2_MA01_CLUB` | クラブ | Espada 1 mão／特別な力を持つ純粋な / サファイアで作られた宝剣 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA02_MACE — メイス — ブラッディスパイン"> `WEAPON2_MA02_MACE` | メイス | ブラッディスパイン |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA03_WARHAMMER — ウォーハンマー — Espada 1 mão／Ataque：５５ / RequerＳＴＲ：１０"> `WEAPON2_MA03_WARHAMMER` | ウォーハンマー | Espada 1 mão／Ataque：５５ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA04_MORNINGSTAR — モーニングスター — Espada 1 mão／吸血鬼の如き牙を持つ / 歪な形状の剣"> `WEAPON2_MA04_MORNINGSTAR` | モーニングスター | Espada 1 mão／吸血鬼の如き牙を持つ / 歪な形状の剣 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA05_MITHRILHAMMER — ミスリルハンマー — シャムシール"> `WEAPON2_MA05_MITHRILHAMMER` | ミスリルハンマー | シャムシール |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA06_FAYHAMMER — ペルグランデ — Espada 1 mão／Ataque：５０ / RequerＳＴＲ：５"> `WEAPON2_MA06_FAYHAMMER` | ペルグランデ | Espada 1 mão／Ataque：５０ / RequerＳＴＲ：５ |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA07_MJOLLNIR — ノームハンマー — Espada 1 mão／振り下ろすことで / 威力を最大限に発揮する剣"> `WEAPON2_MA07_MJOLLNIR` | ノームハンマー | Espada 1 mão／振り下ろすことで / 威力を最大限に発揮する剣 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA08_MACE — ★メイス — ディバイドソード"> `WEAPON2_MA08_MACE` | ★メイス | ディバイドソード |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA09_HOLYMACE — ホーリーメイス"> `WEAPON2_MA09_HOLYMACE` | ホーリーメイス |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA10_OAKCLUB — 樫のクラブ"> `WEAPON2_MA10_OAKCLUB` | 樫のクラブ |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA11_WARHAMMER_EX — ブライトハンマー"> `WEAPON2_MA11_WARHAMMER_EX` | ブライトハンマー |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA12_GOBLIN_H — 小鬼の棍棒"> `WEAPON2_MA12_GOBLIN_H` | 小鬼の棍棒 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA13_KOBOLD — 犬頭鬼の棍棒"> `WEAPON2_MA13_KOBOLD` | 犬頭鬼の棍棒 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA14_TROLL — 巨人の棍棒"> `WEAPON2_MA14_TROLL` | 巨人の棍棒 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA15_TAMECHAN1 — スクエアメイス"> `WEAPON2_MA15_TAMECHAN1` | スクエアメイス |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA16_STRIKE — スマッシュハンマー"> `WEAPON2_MA16_STRIKE` | スマッシュハンマー |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA17_TIREI — クェイクハンマー"> `WEAPON2_MA17_TIREI` | クェイクハンマー |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA18_HORIHORI — ジャッジハンマー"> `WEAPON2_MA18_HORIHORI` | ジャッジハンマー |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA19_SHIMENKI — 鬼面の大槌"> `WEAPON2_MA19_SHIMENKI` | 鬼面の大槌 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA20_WARHAMMER — ★ウォーハンマー"> `WEAPON2_MA20_WARHAMMER` | ★ウォーハンマー |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA21_SHINKI — ストリクトメイス"> `WEAPON2_MA21_SHINKI` | ストリクトメイス |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA22_WARHAMMER_EX — ★ブライトハンマー"> `WEAPON2_MA22_WARHAMMER_EX` | ★ブライトハンマー |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA23_HORIHORI — ★ジャッジハンマー"> `WEAPON2_MA23_HORIHORI` | ★ジャッジハンマー |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA24_JADE — 翡翠の大槌"> `WEAPON2_MA24_JADE` | 翡翠の大槌 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA25_D4SHINKI1 — レオパルドハンマー"> `WEAPON2_MA25_D4SHINKI1` | レオパルドハンマー |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA26_D4SHINKI2 — タイニーワンド"> `WEAPON2_MA26_D4SHINKI2` | タイニーワンド |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA27_D4SHINKI3 — ブリガンティア"> `WEAPON2_MA27_D4SHINKI3` | ブリガンティア |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA28_PIKOHAMMER — 錘"> `WEAPON2_MA28_PIKOHAMMER` | 錘 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA29_D4SUMMON — 大魔の棍棒"> `WEAPON2_MA29_D4SUMMON` | 大魔の棍棒 |
| <img src="../img/icons/cls_ma.png" width="36" title="WEAPON2_MA30_FAYHAMMER_EX — ペルグランデＥＸ"> `WEAPON2_MA30_FAYHAMMER_EX` | ペルグランデＥＸ |

#### `NC` (20)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC01_WAKKY — ウッドグローブ"> `WEAPON2_NC01_WAKKY` | ウッドグローブ |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC02_TAMECHAN — トライネイル"> `WEAPON2_NC02_TAMECHAN` | トライネイル |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC03_MASSU — アイアンスパイク"> `WEAPON2_NC03_MASSU` | アイアンスパイク |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC04_WAKKY2 — クランチフィスト"> `WEAPON2_NC04_WAKKY2` | クランチフィスト |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC05_THRUST — スラストナックル"> `WEAPON2_NC05_THRUST` | スラストナックル |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC06_BLADE — ブレイドナックル"> `WEAPON2_NC06_BLADE` | ブレイドナックル |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC07_TETSUTUME — アサシンネイル"> `WEAPON2_NC07_TETSUTUME` | アサシンネイル |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC08_SHINKI — ピアスグローブ"> `WEAPON2_NC08_SHINKI` | ピアスグローブ |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC09_WAKKY — ★ウッドグローブ"> `WEAPON2_NC09_WAKKY` | ★ウッドグローブ |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC10_MASSU — ★アイアンスパイク"> `WEAPON2_NC10_MASSU` | ★アイアンスパイク |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC11_FLAME — フレイムナックル"> `WEAPON2_NC11_FLAME` | フレイムナックル |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC12_TAMECHAN — ★トライネイル"> `WEAPON2_NC12_TAMECHAN` | ★トライネイル |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC13_BEAST — 猛獣の爪"> `WEAPON2_NC13_BEAST` | 猛獣の爪 |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC14_KAISER — カイザーナックル"> `WEAPON2_NC14_KAISER` | カイザーナックル |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC15_MONK — 拳聖の手甲"> `WEAPON2_NC15_MONK` | 拳聖の手甲 |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC16_D4SHINKI — ベインナックル"> `WEAPON2_NC16_D4SHINKI` | ベインナックル |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC17_SONIC — ソニックナックル"> `WEAPON2_NC17_SONIC` | ソニックナックル |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC18_GODHAND — ゴッドハンド"> `WEAPON2_NC18_GODHAND` | ゴッドハンド |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC19_GHOUL — 食屍鬼の手甲"> `WEAPON2_NC19_GHOUL` | 食屍鬼の手甲 |
| <img src="../img/icons/cls_nc.png" width="36" title="WEAPON2_NC20_D4SUMMON — 大魔の爪"> `WEAPON2_NC20_D4SUMMON` | 大魔の爪 |

#### `NI` (35)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI01_DAGGER — ダガー — Espada 1 mão／Ataque：６７ / RequerＳＴＲ：１０"> `WEAPON2_NI01_DAGGER` | ダガー | Espada 1 mão／Ataque：６７ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI02_DIRK — ダーク — Espada 1 mão／鉈を戦闘用に改良した / 断ち切ることに優れた剣"> `WEAPON2_NI02_DIRK` | ダーク | Espada 1 mão／鉈を戦闘用に改良した / 断ち切ることに優れた剣 |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI03_POISONDAGGER — ポイズンダガー — ウィングソード"> `WEAPON2_NI03_POISONDAGGER` | ポイズンダガー | ウィングソード |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI04_SWORDBRAKER — ソードブレイカー — Espada 1 mão／Ataque：５８ / RequerＳＴＲ：５"> `WEAPON2_NI04_SWORDBRAKER` | ソードブレイカー | Espada 1 mão／Ataque：５８ / RequerＳＴＲ：５ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI05_KOTETSU — 古鉄 — Espada 1 mão／神速で飛ぶことのでき / る鳥の羽で作られた剣"> `WEAPON2_NI05_KOTETSU` | 古鉄 | Espada 1 mão／神速で飛ぶことのでき / る鳥の羽で作られた剣 |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI06_GALESDAGGER — グラキエース — 蛙護衛兵の剣"> `WEAPON2_NI06_GALESDAGGER` | グラキエース | 蛙護衛兵の剣 |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI07_DIRK — ★ダーク — Espada 1 mão／Ataque：４２ / RequerＳＴＲ：nenhum"> `WEAPON2_NI07_DIRK` | ★ダーク | Espada 1 mão／Ataque：４２ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI08_ROUND — ラウンドナイフ"> `WEAPON2_NI08_ROUND` | ラウンドナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI09_STUNDAGGER — スタンダガー"> `WEAPON2_NI09_STUNDAGGER` | スタンダガー |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI10_GOBLIN_C — 小鬼の包丁"> `WEAPON2_NI10_GOBLIN_C` | 小鬼の包丁 |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI11_THIEF — 盗賊のダガー"> `WEAPON2_NI11_THIEF` | 盗賊のダガー |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI12_ASSASSIN — 暗殺者のダガー"> `WEAPON2_NI12_ASSASSIN` | 暗殺者のダガー |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI13_KERIS — クリス"> `WEAPON2_NI13_KERIS` | クリス |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI14_TAMECHAN2 — ロットナイフ"> `WEAPON2_NI14_TAMECHAN2` | ロットナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI15_BURGLAR — 夜盗のナイフ"> `WEAPON2_NI15_BURGLAR` | 夜盗のナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI16_CROSS — グレアナイフ"> `WEAPON2_NI16_CROSS` | グレアナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI17_SHINKI — フィートナイフ"> `WEAPON2_NI17_SHINKI` | フィートナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI18_POISONDAGGER — ★ポイズンダガー"> `WEAPON2_NI18_POISONDAGGER` | ★ポイズンダガー |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI19_ROUND — ★ラウンドナイフ"> `WEAPON2_NI19_ROUND` | ★ラウンドナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI20_SHINKI — デヴァステイター"> `WEAPON2_NI20_SHINKI` | デヴァステイター |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI21_SAIJYOUI — ツインエッジ"> `WEAPON2_NI21_SAIJYOUI` | ツインエッジ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI22_TAMECHAN2 — ★ロットナイフ"> `WEAPON2_NI22_TAMECHAN2` | ★ロットナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI23_SHINKI — サイ"> `WEAPON2_NI23_SHINKI` | サイ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI24_STUNDAGGER — ★スタンダガー"> `WEAPON2_NI24_STUNDAGGER` | ★スタンダガー |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI25_MOULIN — ムーラン"> `WEAPON2_NI25_MOULIN` | ムーラン |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI26_KUKRI — ククリ"> `WEAPON2_NI26_KUKRI` | ククリ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI27_SILENT — サイレントナイフ"> `WEAPON2_NI27_SILENT` | サイレントナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI28_PANIC — パニックナイフ"> `WEAPON2_NI28_PANIC` | パニックナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI29_D4SHINKI1 — ルーンナイフ"> `WEAPON2_NI29_D4SHINKI1` | ルーンナイフ |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI30_D4SHINKI2 — ツヴァイダガー"> `WEAPON2_NI30_D4SHINKI2` | ツヴァイダガー |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI31_D4SHINKI3 — インフィニティー"> `WEAPON2_NI31_D4SHINKI3` | インフィニティー |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI32_PIRATE — 海賊の短剣"> `WEAPON2_NI32_PIRATE` | 海賊の短剣 |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI33_D4SUMMON — 大魔の短剣"> `WEAPON2_NI33_D4SUMMON` | 大魔の短剣 |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI34_CATHAND — キャットスティンガー"> `WEAPON2_NI34_CATHAND` | キャットスティンガー |
| <img src="../img/icons/cls_ni.png" width="36" title="WEAPON2_NI35_GALESDAGGER_EX — グラキエースＥＸ"> `WEAPON2_NI35_GALESDAGGER_EX` | グラキエースＥＸ |

#### `QI` (10)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI01_ARROW — アロー — Espada 1 mão／ガーディアンフロッグ / が使用している剣。não sintetizável"> `WEAPON2_QI01_ARROW` | アロー | Espada 1 mão／ガーディアンフロッグ / が使用している剣。não sintetizável |
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI02_FIREARROW — ファイアーアロー — 蛙王の剣"> `WEAPON2_QI02_FIREARROW` | ファイアーアロー | 蛙王の剣 |
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI03_COLDARROW — コールドアロー — Espada 1 mão／Ataque：４７ / RequerＳＴＲ：nenhum"> `WEAPON2_QI03_COLDARROW` | コールドアロー | Espada 1 mão／Ataque：４７ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI04_SPARKARROW — サンダーアロー — Espada 1 mão／アーマードフロッグ / キングの剣。não sintetizável"> `WEAPON2_QI04_SPARKARROW` | サンダーアロー | Espada 1 mão／アーマードフロッグ / キングの剣。não sintetizável |
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI05_MITHRILARROW — ダークアロー — 炎巨人の剣"> `WEAPON2_QI05_MITHRILARROW` | ダークアロー | 炎巨人の剣 |
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI06_HOLYARROW — 太陽の矢 — Espada 1 mão／ファイアージャイアン / トが使用している剣。não sintetizável"> `WEAPON2_QI06_HOLYARROW` | 太陽の矢 | Espada 1 mão／ファイアージャイアン / トが使用している剣。não sintetizável |
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI07_TAIYOUNOYA — 銀の矢 — 氷巨人の剣"> `WEAPON2_QI07_TAIYOUNOYA` | 銀の矢 | 氷巨人の剣 |
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI08_SILVERARROW — ベアリアスアロー"> `WEAPON2_QI08_SILVERARROW` | ベアリアスアロー |
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI09_SHINKI — スパークアロー"> `WEAPON2_QI09_SHINKI` | スパークアロー |
| <img src="../img/icons/cls_qi.png" width="36" title="WEAPON2_QI10_SHINKI"> `WEAPON2_QI10_SHINKI` |  |

#### `RA` (35)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA01_BROADAXE — ブロードアックス — Espada 1 mão／アイスジャイアントが / 使用している剣。não sintetizável"> `WEAPON2_RA01_BROADAXE` | ブロードアックス | Espada 1 mão／アイスジャイアントが / 使用している剣。não sintetizável |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA02_GREATAXE — グレートアックス — 忍の刀"> `WEAPON2_RA02_GREATAXE` | グレートアックス | 忍の刀 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA03_BERDYSH — バルディッシュ — Espada 1 mão／シノビが使用している / 刀。não sintetizável"> `WEAPON2_RA03_BERDYSH` | バルディッシュ | Espada 1 mão／シノビが使用している / 刀。não sintetizável |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA04_MITHRILAXE — ミスリルアックス — 青龍刀"> `WEAPON2_RA04_MITHRILAXE` | ミスリルアックス | 青龍刀 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA05_DWARVENWARAXE — ドワーブンアックス — Espada 1 mão／Ataque：５２ / RequerＳＴＲ：１０"> `WEAPON2_RA05_DWARVENWARAXE` | ドワーブンアックス | Espada 1 mão／Ataque：５２ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA06_SICKLEAXE — イビルシックル — Espada 1 mão／古来より伝わる幅広の / 切っ先を持つ大振りの刀"> `WEAPON2_RA06_SICKLEAXE` | イビルシックル | Espada 1 mão／古来より伝わる幅広の / 切っ先を持つ大振りの刀 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA07_BROADAXE — ★ブロードアックス — ドラゴンソード"> `WEAPON2_RA07_BROADAXE` | ★ブロードアックス | ドラゴンソード |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA08_DIVINEAXE — ディバインアックス"> `WEAPON2_RA08_DIVINEAXE` | ディバインアックス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA09_STEELAXE — スチールアックス"> `WEAPON2_RA09_STEELAXE` | スチールアックス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA10_GREAT_EX1 — ブーストアックス"> `WEAPON2_RA10_GREAT_EX1` | ブーストアックス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA11_SKELETON_D — 骸骨の斧"> `WEAPON2_RA11_SKELETON_D` | 骸骨の斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA12_SKELETON_DF — 骸骨の炎斧"> `WEAPON2_RA12_SKELETON_DF` | 骸骨の炎斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA13_SKELETON_DI — 骸骨の氷斧"> `WEAPON2_RA13_SKELETON_DI` | 骸骨の氷斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA14_SKELETON_DT — 骸骨の雷斧"> `WEAPON2_RA14_SKELETON_DT` | 骸骨の雷斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA15_GNOLL — 犬頭鬼の斧"> `WEAPON2_RA15_GNOLL` | 犬頭鬼の斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA16_ORC_C — 邪鬼首領の斧"> `WEAPON2_RA16_ORC_C` | 邪鬼首領の斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA17_ORC_CF — 邪鬼首領の炎斧"> `WEAPON2_RA17_ORC_CF` | 邪鬼首領の炎斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA18_ORC_CI — 邪鬼首領の氷斧"> `WEAPON2_RA18_ORC_CI` | 邪鬼首領の氷斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA19_ORC_CT — 邪鬼首領の雷斧"> `WEAPON2_RA19_ORC_CT` | 邪鬼首領の雷斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA20_MINOTAUR_B — 牛人の両手斧"> `WEAPON2_RA20_MINOTAUR_B` | 牛人の両手斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA21_MAGICIAN_D — 黒魔術師の鎌"> `WEAPON2_RA21_MAGICIAN_D` | 黒魔術師の鎌 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA22_RUIN — ルーインアックス"> `WEAPON2_RA22_RUIN` | ルーインアックス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA23_MINOTAURCOMMANDER — 牛人司令官の斧"> `WEAPON2_RA23_MINOTAURCOMMANDER` | 牛人司令官の斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA24_BATTLEHOE — バトルピック"> `WEAPON2_RA24_BATTLEHOE` | バトルピック |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA25_MARTIANDAWN — インペリアルアックス"> `WEAPON2_RA25_MARTIANDAWN` | インペリアルアックス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA26_BERDYSH — ★バルディッシュ"> `WEAPON2_RA26_BERDYSH` | ★バルディッシュ |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA27_SAIJYOUI — グランドアックス"> `WEAPON2_RA27_SAIJYOUI` | グランドアックス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA28_GREATAXE — ★グレートアックス"> `WEAPON2_RA28_GREATAXE` | ★グレートアックス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA29_D4SHINKI1 — ブルートマホーク"> `WEAPON2_RA29_D4SHINKI1` | ブルートマホーク |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA30_D4SHINKI2 — アポカリプス"> `WEAPON2_RA30_D4SHINKI2` | アポカリプス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA31_GIGANT — ギガントアックス"> `WEAPON2_RA31_GIGANT` | ギガントアックス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA32_EXECUTIONER — ウィンドアックス"> `WEAPON2_RA32_EXECUTIONER` | ウィンドアックス |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA33_APOCALYPSE — ディストピア"> `WEAPON2_RA33_APOCALYPSE` | ディストピア |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA34_GIANT — 一つ目巨人の斧"> `WEAPON2_RA34_GIANT` | 一つ目巨人の斧 |
| <img src="../img/icons/cls_ra.png" width="36" title="WEAPON2_RA35_D4SUMMON — 大魔の大斧"> `WEAPON2_RA35_D4SUMMON` | 大魔の大斧 |

#### `RS` (31)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS01_BASTARDSWORD — バスタードソード — Espada 1 mão／Ataque：６４ / RequerＳＴＲ：１５"> `WEAPON2_RS01_BASTARDSWORD` | バスタードソード | Espada 1 mão／Ataque：６４ / RequerＳＴＲ：１５ |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS02_CLAYMORE — クレイモア — Espada 1 mão／ドラゴンのしなやかな / 尻尾の皮膚で作られた剣"> `WEAPON2_RS02_CLAYMORE` | クレイモア | Espada 1 mão／ドラゴンのしなやかな / 尻尾の皮膚で作られた剣 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS03_ZWEIHANDER — トゥハンドソード — ★レイピア"> `WEAPON2_RS03_ZWEIHANDER` | トゥハンドソード | ★レイピア |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS04_STEAM — スチームソード — Espada 1 mão／Ataque：３１ / RequerＳＴＲ：nenhum"> `WEAPON2_RS04_STEAM` | スチームソード | Espada 1 mão／Ataque：３１ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS05_EXECUTIONERSSWORD — 断罪の剣 — ★ヴァイキングソード"> `WEAPON2_RS05_EXECUTIONERSSWORD` | 断罪の剣 | ★ヴァイキングソード |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS06_DRAGONKILLER — ドラゴンキラー — Espada 1 mão／Ataque：２６ / RequerＳＴＲ：nenhum"> `WEAPON2_RS06_DRAGONKILLER` | ドラゴンキラー | Espada 1 mão／Ataque：２６ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS07_MURASAME — 砕魔刀 — ★グラディウス"> `WEAPON2_RS07_MURASAME` | 砕魔刀 | ★グラディウス |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS08_PALAMEDES — クラウ・ソナス — ★シャムシール"> `WEAPON2_RS08_PALAMEDES` | クラウ・ソナス | ★シャムシール |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS09_FLAMESWORD — フレイムソード — ★青龍刀"> `WEAPON2_RS09_FLAMESWORD` | フレイムソード | ★青龍刀 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS10_ZWEIHANDER — ★トゥハンドソード — Espada 1 mão／Ataque：４６ / RequerＳＴＲ：nenhum"> `WEAPON2_RS10_ZWEIHANDER` | ★トゥハンドソード | Espada 1 mão／Ataque：４６ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS11_SQUARETHRUST — スクエアスラッシャー"> `WEAPON2_RS11_SQUARETHRUST` | スクエアスラッシャー |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS12_SKELETON_K — 骸骨騎士の剣"> `WEAPON2_RS12_SKELETON_K` | 骸骨騎士の剣 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS13_SKELETON_KF — 骸骨騎士の炎剣"> `WEAPON2_RS13_SKELETON_KF` | 骸骨騎士の炎剣 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS14_SKELETON_KI — 骸骨騎士の氷剣"> `WEAPON2_RS14_SKELETON_KI` | 骸骨騎士の氷剣 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS15_SKELETON_KT — 骸骨騎士の雷剣"> `WEAPON2_RS15_SKELETON_KT` | 骸骨騎士の雷剣 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS16_TAMECHAN1 — ジェミニブレード"> `WEAPON2_RS16_TAMECHAN1` | ジェミニブレード |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS17_CRYSTALEDGE — リフレクトソード"> `WEAPON2_RS17_CRYSTALEDGE` | リフレクトソード |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS18_SHINKI1 — ガーディアンブレード"> `WEAPON2_RS18_SHINKI1` | ガーディアンブレード |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS19_CLAYMORE — ★クレイモア"> `WEAPON2_RS19_CLAYMORE` | ★クレイモア |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS20_SHINKI — 魔道の剣"> `WEAPON2_RS20_SHINKI` | 魔道の剣 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS22_SAIJYOUI — アルティマソード"> `WEAPON2_RS22_SAIJYOUI` | アルティマソード |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS23_SQUARETHRUST — ★スクエアスラッシャー"> `WEAPON2_RS23_SQUARETHRUST` | ★スクエアスラッシャー |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS24_ICEBRAND — アイスブランド"> `WEAPON2_RS24_ICEBRAND` | アイスブランド |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS25_THUNDERBLADE — サンダーブレード"> `WEAPON2_RS25_THUNDERBLADE` | サンダーブレード |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS26_CALIBURN — カリバーン"> `WEAPON2_RS26_CALIBURN` | カリバーン |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS27_MURAKUMO — 天叢雲剣"> `WEAPON2_RS27_MURAKUMO` | 天叢雲剣 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS28_AVALON — レオンハート"> `WEAPON2_RS28_AVALON` | レオンハート |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS29_SKELETON — 骸骨貴族の剣"> `WEAPON2_RS29_SKELETON` | 骸骨貴族の剣 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS30_D4SUMMON — 大魔の大剣"> `WEAPON2_RS30_D4SUMMON` | 大魔の大剣 |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS31_SLAP — ハリセンブレード"> `WEAPON2_RS31_SLAP` | ハリセンブレード |
| <img src="../img/icons/cls_rs.png" width="36" title="WEAPON2_RS32_PALAMEDES_EX — クラウ・ソナスＥＸ"> `WEAPON2_RS32_PALAMEDES_EX` | クラウ・ソナスＥＸ |

#### `SP` (33)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP01_SHORTSPEAR — ショートスピア — 機兵の剣"> `WEAPON2_SP01_SHORTSPEAR` | ショートスピア | 機兵の剣 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP02_AWLPIKE — オウルパイク — Espada 1 mão／Ataque：５８ / RequerＳＴＲ：nenhum"> `WEAPON2_SP02_AWLPIKE` | オウルパイク | Espada 1 mão／Ataque：５８ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP03_PARTIZAN — パルチザン — Espada 1 mão／メタルナイトが使用 / しているEspada 1 mão。não sintetizável"> `WEAPON2_SP03_PARTIZAN` | パルチザン | Espada 1 mão／メタルナイトが使用 / しているEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP04_TRIDENT — トライデント — 暗黒機兵の剣"> `WEAPON2_SP04_TRIDENT` | トライデント | 暗黒機兵の剣 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP05_MITHRILSPEAR — ミスリルスピア — Espada 1 mão／メタルナイトダークが / 使用しているEspada 1 mão。não sintetizável"> `WEAPON2_SP05_MITHRILSPEAR` | ミスリルスピア | Espada 1 mão／メタルナイトダークが / 使用しているEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP06_ICELANCE — アイススピア — 怪人の剣"> `WEAPON2_SP06_ICELANCE` | アイススピア | 怪人の剣 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP07_HOLYLANCE — ガイ・ボルガ — Espada 1 mão／Ataque：５０ / RequerＳＴＲ：nenhum"> `WEAPON2_SP07_HOLYLANCE` | ガイ・ボルガ | Espada 1 mão／Ataque：５０ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP08_PARTIZAN — ★パルチザン — Espada 1 mão／デヴィアスが使用して / いるEspada 1 mão。não sintetizável"> `WEAPON2_SP08_PARTIZAN` | ★パルチザン | Espada 1 mão／デヴィアスが使用して / いるEspada 1 mão。não sintetizável |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP09_FRAME — フレイムスピア"> `WEAPON2_SP09_FRAME` | フレイムスピア |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP10_THUNDER — サンダースピア"> `WEAPON2_SP10_THUNDER` | サンダースピア |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP11_LIZARDMAN_L — 蜥蜴槍兵の槍"> `WEAPON2_SP11_LIZARDMAN_L` | 蜥蜴槍兵の槍 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP12_LIZARDMAN_R — 王族蜥蜴の槍"> `WEAPON2_SP12_LIZARDMAN_R` | 王族蜥蜴の槍 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP13_KOBOLD_L — 犬頭鬼の槍"> `WEAPON2_SP13_KOBOLD_L` | 犬頭鬼の槍 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP14_SALAMANDER — 火蜥蜴の槍"> `WEAPON2_SP14_SALAMANDER` | 火蜥蜴の槍 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP15_SALAMANDER_F — 氷蜥蜴の槍"> `WEAPON2_SP15_SALAMANDER_F` | 氷蜥蜴の槍 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP16_SALAMANDER_H — 雷蜥蜴の槍"> `WEAPON2_SP16_SALAMANDER_H` | 雷蜥蜴の槍 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP17_SPLITLANCE — スプリットランス"> `WEAPON2_SP17_SPLITLANCE` | スプリットランス |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP18_MUSSU — グレイブ"> `WEAPON2_SP18_MUSSU` | グレイブ |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP19_RUSHING — ラッシングスピア"> `WEAPON2_SP19_RUSHING` | ラッシングスピア |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP20_SHINKI1 — ニードルランス"> `WEAPON2_SP20_SHINKI1` | ニードルランス |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP21_AWLPIKE — ★オウルパイク"> `WEAPON2_SP21_AWLPIKE` | ★オウルパイク |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP22_TRIDENT — ★トライデント"> `WEAPON2_SP22_TRIDENT` | ★トライデント |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP23_BRIONAC — ブリューナク"> `WEAPON2_SP23_BRIONAC` | ブリューナク |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP24_FRAME — ★フレイムスピア"> `WEAPON2_SP24_FRAME` | ★フレイムスピア |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP25_ICELANCE — ★アイススピア"> `WEAPON2_SP25_ICELANCE` | ★アイススピア |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP26_THUNDER — ★サンダースピア"> `WEAPON2_SP26_THUNDER` | ★サンダースピア |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP27_PARALYZER — パラライザー"> `WEAPON2_SP27_PARALYZER` | パラライザー |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP28_SNAKEHALBERD — 軍神の蛇矛"> `WEAPON2_SP28_SNAKEHALBERD` | 軍神の蛇矛 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP29_D4SHINKI — ノーザンハルバード"> `WEAPON2_SP29_D4SHINKI` | ノーザンハルバード |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP30_DYSTOPIA — 虚空閃"> `WEAPON2_SP30_DYSTOPIA` | 虚空閃 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP31_FISHMAN — 魚人の槍"> `WEAPON2_SP31_FISHMAN` | 魚人の槍 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP32_D4SUMMON — 大魔の槍"> `WEAPON2_SP32_D4SUMMON` | 大魔の槍 |
| <img src="../img/icons/cls_sp.png" width="36" title="WEAPON2_SP33_HOLYLANCE_EX — ガイ・ボルガＥＸ"> `WEAPON2_SP33_HOLYLANCE_EX` | ガイ・ボルガＥＸ |

#### `ST` (47)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST01_QUARTERSTAFF — クォータースタッフ — マスターレイピア"> `WEAPON2_ST01_QUARTERSTAFF` | クォータースタッフ | マスターレイピア |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST02_SCEPTER — セプター — Espada 1 mão／Ataque：５３ / RequerＳＴＲ：５"> `WEAPON2_ST02_SCEPTER` | セプター | Espada 1 mão／Ataque：５３ / RequerＳＴＲ：５ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST03_WIZARDSSTAFF — ウィザードスタッフ — Espada 1 mão／相手を斬りつけること / よりも刺すことを重視した剣"> `WEAPON2_ST03_WIZARDSSTAFF` | ウィザードスタッフ | Espada 1 mão／相手を斬りつけること / よりも刺すことを重視した剣 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST04_HEALROD — ヒールロッド — トライブエッジ"> `WEAPON2_ST04_HEALROD` | ヒールロッド | トライブエッジ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST05_MAGICALSTAFF — クリスタルワンド — Espada 1 mão／大きく湾曲した刃が / 特徴的なEspada 1 mão"> `WEAPON2_ST05_MAGICALSTAFF` | クリスタルワンド | Espada 1 mão／大きく湾曲した刃が / 特徴的なEspada 1 mão |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST06_POWERSTAFF — パワースタッフ — グラディエーター"> `WEAPON2_ST06_POWERSTAFF` | パワースタッフ | グラディエーター |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST07_MYRDDINSTAFF — ユーデクス — Espada 1 mão／Ataque：７３ / RequerＳＴＲ：１０"> `WEAPON2_ST07_MYRDDINSTAFF` | ユーデクス | Espada 1 mão／Ataque：７３ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST08_WIZARDSSTAFF — ★ウィザードスタッフ — Espada 1 mão／罪人の怨念が / 込められた剣"> `WEAPON2_ST08_WIZARDSSTAFF` | ★ウィザードスタッフ | Espada 1 mão／罪人の怨念が / 込められた剣 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST09_MANASTAFF — マナスタッフ"> `WEAPON2_ST09_MANASTAFF` | マナスタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST10_MAGESTAFF — メイジスタッフ"> `WEAPON2_ST10_MAGESTAFF` | メイジスタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST11_WIZARD_EX1 — フレイムスタッフ"> `WEAPON2_ST11_WIZARD_EX1` | フレイムスタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST12_WIZARD_EX2 — アイススタッフ"> `WEAPON2_ST12_WIZARD_EX2` | アイススタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST13_WIZARD_EX3 — サンダースタッフ"> `WEAPON2_ST13_WIZARD_EX3` | サンダースタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST14_SKELETON_M — 骸骨の杖"> `WEAPON2_ST14_SKELETON_M` | 骸骨の杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST15_SKELETON_MF — 骸骨の炎杖"> `WEAPON2_ST15_SKELETON_MF` | 骸骨の炎杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST16_SKELETON_MI — 骸骨の氷杖"> `WEAPON2_ST16_SKELETON_MI` | 骸骨の氷杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST17_SKELETON_MT — 骸骨の雷杖"> `WEAPON2_ST17_SKELETON_MT` | 骸骨の雷杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST18_ORC_M — 邪鬼の杖"> `WEAPON2_ST18_ORC_M` | 邪鬼の杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST19_ORC_MF — 邪鬼の炎杖"> `WEAPON2_ST19_ORC_MF` | 邪鬼の炎杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST20_ORC_MI — 邪鬼の氷杖"> `WEAPON2_ST20_ORC_MI` | 邪鬼の氷杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST21_ORC_MT — 邪鬼の雷杖"> `WEAPON2_ST21_ORC_MT` | 邪鬼の雷杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST22_MAGICIAN — 魔術師の杖"> `WEAPON2_ST22_MAGICIAN` | 魔術師の杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST23_TAMECHAN1 — カースロッド"> `WEAPON2_ST23_TAMECHAN1` | カースロッド |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST24_MANA — マナロッド"> `WEAPON2_ST24_MANA` | マナロッド |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST25_NECROMANCER — 死霊術士の杖"> `WEAPON2_ST25_NECROMANCER` | 死霊術士の杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST26_SORCERESS — 魔女の杖"> `WEAPON2_ST26_SORCERESS` | 魔女の杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST27_CONJURER — 奇術師の杖"> `WEAPON2_ST27_CONJURER` | 奇術師の杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST28_JEM — ジェムスタッフ"> `WEAPON2_ST28_JEM` | ジェムスタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST29_SHINKI — セイクリッドワンド"> `WEAPON2_ST29_SHINKI` | セイクリッドワンド |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST30_MAGICALSTAFF — ★クリスタルワンド"> `WEAPON2_ST30_MAGICALSTAFF` | ★クリスタルワンド |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST31_SHINKI — マギスタッフ"> `WEAPON2_ST31_SHINKI` | マギスタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST32_SHINKI — アストラルワンド"> `WEAPON2_ST32_SHINKI` | アストラルワンド |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST33_SAIJYOUI — エクリプスロッド"> `WEAPON2_ST33_SAIJYOUI` | エクリプスロッド |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST34_JEM — ★ジェムスタッフ"> `WEAPON2_ST34_JEM` | ★ジェムスタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST35_WIZARD_EX1 — ★フレイムスタッフ"> `WEAPON2_ST35_WIZARD_EX1` | ★フレイムスタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST36_WIZARD_EX2 — ★アイススタッフ"> `WEAPON2_ST36_WIZARD_EX2` | ★アイススタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST37_WIZARD_EX3 — ★サンダースタッフ"> `WEAPON2_ST37_WIZARD_EX3` | ★サンダースタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST38_DRUID_ARCH — 大神官の杖"> `WEAPON2_ST38_DRUID_ARCH` | 大神官の杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST39_PRISMATIC — プリズマティックワンド"> `WEAPON2_ST39_PRISMATIC` | プリズマティックワンド |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST40_NECRO — イビルロッド"> `WEAPON2_ST40_NECRO` | イビルロッド |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST41_D4SHINKI1 — マイティスタッフ"> `WEAPON2_ST41_D4SHINKI1` | マイティスタッフ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST42_ZOMBI — 死霊の杖"> `WEAPON2_ST42_ZOMBI` | 死霊の杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST43_D4SHINKI2 — ラケシスの杖"> `WEAPON2_ST43_D4SHINKI2` | ラケシスの杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST44_D4SUMMON — 大魔の杖"> `WEAPON2_ST44_D4SUMMON` | 大魔の杖 |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST45_MAGICBROOM — マジカルブルーム"> `WEAPON2_ST45_MAGICBROOM` | マジカルブルーム |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST46_MYRDDINSTAFF_EX — ユーデクスＥＸ"> `WEAPON2_ST46_MYRDDINSTAFF_EX` | ユーデクスＥＸ |
| <img src="../img/icons/cls_st.png" width="36" title="WEAPON2_ST47_LAMIA — 蛇女の杖"> `WEAPON2_ST47_LAMIA` | 蛇女の杖 |

#### `YU` (20)

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU01_WOODBOW — ウッドボウ — ライトブリンガー"> `WEAPON2_YU01_WOODBOW` | ウッドボウ | ライトブリンガー |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU02_BATTLEBOW — バトルボウ — Espada 1 mão／Ataque：７２ / RequerＳＴＲ：１０"> `WEAPON2_YU02_BATTLEBOW` | バトルボウ | Espada 1 mão／Ataque：７２ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU03_LONGBOW — ロングボウ — Espada 1 mão／絶大な力を恐れた神々 / が二つに分断したといわれる剣"> `WEAPON2_YU03_LONGBOW` | ロングボウ | Espada 1 mão／絶大な力を恐れた神々 / が二つに分断したといわれる剣 |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU04_GREATBOW — グレートボウ — シャドウブリンガー"> `WEAPON2_YU04_GREATBOW` | グレートボウ | シャドウブリンガー |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU05_YUMI — 紅桜 — Espada 1 mão／Ataque：７４ / RequerＳＴＲ：１０"> `WEAPON2_YU05_YUMI` | 紅桜 | Espada 1 mão／Ataque：７４ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU06_MITHRILBOW — ミスリルボウ — アロンダイト"> `WEAPON2_YU06_MITHRILBOW` | ミスリルボウ | アロンダイト |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU07_TSUKINOYUMI — 月の弓 — Espada 1 mão／Ataque：７７ / RequerＳＴＲ：１０"> `WEAPON2_YU07_TSUKINOYUMI` | 月の弓 | Espada 1 mão／Ataque：７７ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU08_LONGBOW — ★ロングボウ"> `WEAPON2_YU08_LONGBOW` | ★ロングボウ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU09_IRONBOW — アイアンボウ"> `WEAPON2_YU09_IRONBOW` | アイアンボウ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU10 — 狩人の弓"> `WEAPON2_YU10` | 狩人の弓 |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU11_BATTLEBOW — ★バトルボウ"> `WEAPON2_YU11_BATTLEBOW` | ★バトルボウ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU12_GREATBOW — ★グレートボウ"> `WEAPON2_YU12_GREATBOW` | ★グレートボウ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU13_SHINKI — エルブンボウ"> `WEAPON2_YU13_SHINKI` | エルブンボウ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU14_IRONBOW — ★アイアンボウ"> `WEAPON2_YU14_IRONBOW` | ★アイアンボウ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU15_LUGH — ルーの弓"> `WEAPON2_YU15_LUGH` | ルーの弓 |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU16_RANGER — ハンターズボウ"> `WEAPON2_YU16_RANGER` | ハンターズボウ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU17_D4SHINKI1 — アサシンボウ"> `WEAPON2_YU17_D4SHINKI1` | アサシンボウ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU18_D4SHINKI2 — ディメンションボウ"> `WEAPON2_YU18_D4SHINKI2` | ディメンションボウ |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU19_D4SHINKI3 — タスラム"> `WEAPON2_YU19_D4SHINKI3` | タスラム |
| <img src="../img/icons/cls_yu.png" width="36" title="WEAPON2_YU20_D4SUMMON — 大魔の弓"> `WEAPON2_YU20_D4SUMMON` | 大魔の弓 |

### armor2 — armadura — armaduras corporais e túnicas (94)

`AM*` armaduras de metal, `RO*` túnicas/mantos

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM01_LEATHER — レザーアーマー — スケルトンメイジＩを / 召喚するためのカード"> `ARMOR2_AM01_LEATHER` | レザーアーマー | スケルトンメイジＩを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM02_JACKET — レザージャケット — ドワーブンスケルトンＩ"> `ARMOR2_AM02_JACKET` | レザージャケット | ドワーブンスケルトンＩ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM03_CHAINMAIL — チェインメイル — ドワーブンスケルトンＩを / 召喚するためのカード"> `ARMOR2_AM03_CHAINMAIL` | チェインメイル | ドワーブンスケルトンＩを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM04_SCALE — スケイルメイル — スケルトンアーチャーＩ"> `ARMOR2_AM04_SCALE` | スケイルメイル | スケルトンアーチャーＩ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM05_LAMELLAR — ラメラアーマー — スケルトンアーチャーＩを / 召喚するためのカード"> `ARMOR2_AM05_LAMELLAR` | ラメラアーマー | スケルトンアーチャーＩを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM06_IRON — アイアンアーマー — スケルトンＴ"> `ARMOR2_AM06_IRON` | アイアンアーマー | スケルトンＴ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM07_PLATE — プレートメイル — スケルトンＴを / 召喚するためのカード"> `ARMOR2_AM07_PLATE` | プレートメイル | スケルトンＴを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM08_KNIGHT — ナイトプレート — スケルトンナイトＴ"> `ARMOR2_AM08_KNIGHT` | ナイトプレート | スケルトンナイトＴ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM09_FLAME — フレイムアーマー — スケルトンナイトＴを / 召喚するためのカード"> `ARMOR2_AM09_FLAME` | フレイムアーマー | スケルトンナイトＴを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM10_ICE — アイスアーマー — スケルトンメイジＴ"> `ARMOR2_AM10_ICE` | アイスアーマー | スケルトンメイジＴ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM11_SPARK — スパークアーマー — スケルトンメイジＴを / 召喚するためのカード"> `ARMOR2_AM11_SPARK` | スパークアーマー | スケルトンメイジＴを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM12_MAGIC — マジックアーマー — ドワーブンスケルトンＴ"> `ARMOR2_AM12_MAGIC` | マジックアーマー | ドワーブンスケルトンＴ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM13_CURE — キュアアーマー — ドワーブンスケルトンＴを / 召喚するためのカード"> `ARMOR2_AM13_CURE` | キュアアーマー | ドワーブンスケルトンＴを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM14_BRIGANDINE — ブリガンダイン — スケルトンアーチャーＴ"> `ARMOR2_AM14_BRIGANDINE` | ブリガンダイン | スケルトンアーチャーＴ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM15_MITHRIL — ミスリルアーマー — スケルトンアーチャーＴを / 召喚するためのカード"> `ARMOR2_AM15_MITHRIL` | ミスリルアーマー | スケルトンアーチャーＴを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM16_DRAGON — ドラゴンアーマー — オークＦ"> `ARMOR2_AM16_DRAGON` | ドラゴンアーマー | オークＦ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM17_LEATHER — レザークロス — オークＦを / 召喚するためのカード"> `ARMOR2_AM17_LEATHER` | レザークロス | オークＦを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM18_CUCHULAIN — ソリッドアーマー — オークメイジＦ"> `ARMOR2_AM18_CUCHULAIN` | ソリッドアーマー | オークメイジＦ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM19_SPIKE — スパイククロス — オークメイジＦを / 召喚するためのカード"> `ARMOR2_AM19_SPIKE` | スパイククロス | オークメイジＦを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM20_WHITE — ホーリーメイル — オークチーフＦ"> `ARMOR2_AM20_WHITE` | ホーリーメイル | オークチーフＦ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM21_PIRATE — パイレーツプレート — オークチーフＦを / 召喚するためのカード"> `ARMOR2_AM21_PIRATE` | パイレーツプレート | オークチーフＦを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM22_BLACK — デモンズアーマー — オークＩ"> `ARMOR2_AM22_BLACK` | デモンズアーマー | オークＩ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM23_CROTH — オークＩを / 召喚するためのカード"> `ARMOR2_AM23_CROTH` |  | オークＩを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM24_DEFAULT — クロスアーマー — オークメイジＩ"> `ARMOR2_AM24_DEFAULT` | クロスアーマー | オークメイジＩ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM25_FIGHTER — ファイタークロス — ホーリーソード"> `ARMOR2_AM25_FIGHTER` | ファイタークロス | ホーリーソード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM26_LEATHER — ★レザーアーマー — オークメイジＩを / 召喚するためのカード"> `ARMOR2_AM26_LEATHER` | ★レザーアーマー | オークメイジＩを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM27_JACKET — ★レザージャケット — オークチーフＩ"> `ARMOR2_AM27_JACKET` | ★レザージャケット | オークチーフＩ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM28_CHAINMAIL — ★チェインメイル — オークチーフＩを / 召喚するためのカード"> `ARMOR2_AM28_CHAINMAIL` | ★チェインメイル | オークチーフＩを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM29_IRON — ★アイアンアーマー — オークＴ"> `ARMOR2_AM29_IRON` | ★アイアンアーマー | オークＴ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM30_CROTH — ★クロスアーマー — オークＴを / 召喚するためのカード"> `ARMOR2_AM30_CROTH` | ★クロスアーマー | オークＴを / 召喚するためのカード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM31_COPPERCLOTH — カッパークロス"> `ARMOR2_AM31_COPPERCLOTH` | カッパークロス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM32_DAIYOROI — 緋染の鎧"> `ARMOR2_AM32_DAIYOROI` | 緋染の鎧 |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM33_CHAINMALE_EX — クリムゾンチェイン"> `ARMOR2_AM33_CHAINMALE_EX` | クリムゾンチェイン |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM34_CLOTH_EX — レイクロス"> `ARMOR2_AM34_CLOTH_EX` | レイクロス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM35_DWARVEN — ドワーブンアーマー — ホーリーソード"> `ARMOR2_AM35_DWARVEN` | ドワーブンアーマー | ホーリーソード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM36_REFLECT — リフレクトアーマー"> `ARMOR2_AM36_REFLECT` | リフレクトアーマー |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM37_SCALE — ★スケイルメイル"> `ARMOR2_AM37_SCALE` | ★スケイルメイル |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM38_BONE — リブアーマー"> `ARMOR2_AM38_BONE` | リブアーマー |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM39_SHINKI — ジェネラルアーマー"> `ARMOR2_AM39_SHINKI` | ジェネラルアーマー |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM40_SOURAN — 蒼藍の鎧"> `ARMOR2_AM40_SOURAN` | 蒼藍の鎧 |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM41_RUFFIAN — ラフィアンコート"> `ARMOR2_AM41_RUFFIAN` | ラフィアンコート |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM42_D4SHINKI1 — アリサノスアーマー"> `ARMOR2_AM42_D4SHINKI1` | アリサノスアーマー |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM43_D4SHINKI2 — ブラッディクロス"> `ARMOR2_AM43_D4SHINKI2` | ブラッディクロス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM44_BARBAROS — バルバロスアーマー"> `ARMOR2_AM44_BARBAROS` | バルバロスアーマー |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM45_HUNTER — ハンターズクロス"> `ARMOR2_AM45_HUNTER` | ハンターズクロス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM46_D4SUMMON — 大魔の鎧"> `ARMOR2_AM46_D4SUMMON` | 大魔の鎧 |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM47_LORD — ロードオブローズ"> `ARMOR2_AM47_LORD` | ロードオブローズ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM48_D4SHINKI3 — アルカナローブ"> `ARMOR2_AM48_D4SHINKI3` | アルカナローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM49_DRAGON_EX — ドラゴニックアーマー"> `ARMOR2_AM49_DRAGON_EX` | ドラゴニックアーマー |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM50_SHADOWROBE_EX — マーブルローブ"> `ARMOR2_AM50_SHADOWROBE_EX` | マーブルローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM51_KINGROBE_EX — エンペラーローブ"> `ARMOR2_AM51_KINGROBE_EX` | エンペラーローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_AM52_NINJYA_EX — 風魔装束"> `ARMOR2_AM52_NINJYA_EX` | 風魔装束 |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO01_ROBE — メイジローブ — ホーリーソード"> `ARMOR2_RO01_ROBE` | メイジローブ | ホーリーソード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO02_TUNIC — フードローブ — ホーリーソード"> `ARMOR2_RO02_TUNIC` | フードローブ | ホーリーソード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO03_MAGEROBE — 片手Machado／Ataque：５７ / RequerＳＴＲ：１５"> `ARMOR2_RO03_MAGEROBE` |  | 片手Machado／Ataque：５７ / RequerＳＴＲ：１５ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO04_HOODROBE — 片手Machado／ウォーアックスをより / 戦闘向けにしたもの"> `ARMOR2_RO04_HOODROBE` |  | 片手Machado／ウォーアックスをより / 戦闘向けにしたもの |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO05_SIRCOAT — ホーリーソード"> `ARMOR2_RO05_SIRCOAT` |  | ホーリーソード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO06_CHASUBLE — カズラ — ゴールドアックス"> `ARMOR2_RO06_CHASUBLE` | カズラ | ゴールドアックス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO07_DALMATICA — ダルマティカ — 片手Machado／Ataque：４０ / RequerＳＴＲ：１５"> `ARMOR2_RO07_DALMATICA` | ダルマティカ | 片手Machado／Ataque：４０ / RequerＳＴＲ：１５ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO08_SHADOWROBE — シャドウローブ — 片手Machado／耐久性に優れた黄金で / 作られたバトルアックス"> `ARMOR2_RO08_SHADOWROBE` | シャドウローブ | 片手Machado／耐久性に優れた黄金で / 作られたバトルアックス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO09_KINGROBE — キングローブ — シールドアックス"> `ARMOR2_RO09_KINGROBE` | キングローブ | シールドアックス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO10_PROTECTROBE — プロテクトローブ — 片手Machado／Ataque：５２ / RequerＳＴＲ：１０"> `ARMOR2_RO10_PROTECTROBE` | プロテクトローブ | 片手Machado／Ataque：５２ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO11_WIZARDROBE — ウィザードローブ — 片手Machado／Machadoの柄の部分に鉄製の / シールドを装着したもの"> `ARMOR2_RO11_WIZARDROBE` | ウィザードローブ | 片手Machado／Machadoの柄の部分に鉄製の / シールドを装着したもの |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO12_BURGLARJACKET — バーグラージャケット — ウェルテクス"> `ARMOR2_RO12_BURGLARJACKET` | バーグラージャケット | ウェルテクス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO13_SOULROBE — ソウルローブ — 片手Machado／Ataque：３０ / RequerＳＴＲ：nenhum"> `ARMOR2_RO13_SOULROBE` | ソウルローブ | 片手Machado／Ataque：３０ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO14_MAGEROBE — ★メイジローブ — 片手Machado／神王のみが所有するこ / とを許された伝説のMachado"> `ARMOR2_RO14_MAGEROBE` | ★メイジローブ | 片手Machado／神王のみが所有するこ / とを許された伝説のMachado |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO15_HOODROBE — ★フードローブ — ★ウォーアックス"> `ARMOR2_RO15_HOODROBE` | ★フードローブ | ★ウォーアックス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO16_DALMATICA — ★ダルマティカ — 片手Machado／Ataque：３８ / RequerＳＴＲ：nenhum"> `ARMOR2_RO16_DALMATICA` | ★ダルマティカ | 片手Machado／Ataque：３８ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO17_WARLOCKROBE — ウォーロックローブ"> `ARMOR2_RO17_WARLOCKROBE` | ウォーロックローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO18_DEGRATICA — ディグラティカ"> `ARMOR2_RO18_DEGRATICA` | ディグラティカ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO19_MUSSU1"> `ARMOR2_RO19_MUSSU1` |  |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO20_WAKKY1 — リンガーローブ"> `ARMOR2_RO20_WAKKY1` | リンガーローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO21_TAMECHAN1 — カオスローブ"> `ARMOR2_RO21_TAMECHAN1` | カオスローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO22_WAKKY2 — モンクフロック"> `ARMOR2_RO22_WAKKY2` | モンクフロック |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO23_SHAMANQUILT — セイントローブ"> `ARMOR2_RO23_SHAMANQUILT` | セイントローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO24_HOOD_EX — シャーマンキルト"> `ARMOR2_RO24_HOOD_EX` | シャーマンキルト |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO25_ELVEN — エンハンスローブ — ホーリーソード"> `ARMOR2_RO25_ELVEN` | エンハンスローブ | ホーリーソード |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO26_CHASUBLE — ★カズラ"> `ARMOR2_RO26_CHASUBLE` | ★カズラ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO27_SHADOWROBE — ★シャドウローブ"> `ARMOR2_RO27_SHADOWROBE` | ★シャドウローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO28_SHINKI — セイクリッドローブ"> `ARMOR2_RO28_SHINKI` | セイクリッドローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO29_SHINKI — アストラルローブ"> `ARMOR2_RO29_SHINKI` | アストラルローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO30_PLATE — ★プレートメイル"> `ARMOR2_RO30_PLATE` | ★プレートメイル |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO31_SHINKI — バンデットメイル"> `ARMOR2_RO31_SHINKI` | バンデットメイル |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO32_SHINKI — 忍者装束"> `ARMOR2_RO32_SHINKI` | 忍者装束 |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO33_LEATHER — ★レザークロス"> `ARMOR2_RO33_LEATHER` | ★レザークロス |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO34_SHINKI — アビスローブ"> `ARMOR2_RO34_SHINKI` | アビスローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO35_SHINKI — ルミナスローブ"> `ARMOR2_RO35_SHINKI` | ルミナスローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO36_SHINKI — ノートリアスジャケット"> `ARMOR2_RO36_SHINKI` | ノートリアスジャケット |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO37_ROZETTA — ロゼッタローブ"> `ARMOR2_RO37_ROZETTA` | ロゼッタローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO38_MISTICAL — オラクルローブ"> `ARMOR2_RO38_MISTICAL` | オラクルローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO39_DEMONIC — デモニックローブ"> `ARMOR2_RO39_DEMONIC` | デモニックローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO40_HERMIT — グレイスローブ"> `ARMOR2_RO40_HERMIT` | グレイスローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO41_NECRO — イビルローブ"> `ARMOR2_RO41_NECRO` | イビルローブ |
| <img src="../img/icons/cls_armor.png" width="36" title="ARMOR2_RO42_KENSEI — 拳聖の僧服"> `ARMOR2_RO42_KENSEI` | 拳聖の僧服 |

### helm2 — elmos (100)

chapéus, elmos, coroas, máscaras, óculos

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM00_D4SHINKI4 — アルカナベール"> `HELM2_HM00_D4SHINKI4` | アルカナベール |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM01_HALF — ハーフヘルム — ロイヤルリザードマン・改を / 召喚するためのカード"> `HELM2_HM01_HALF` | ハーフヘルム | ロイヤルリザードマン・改を / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM02_IRON — アイアンヘルム — ボーゲスト"> `HELM2_HM02_IRON` | アイアンヘルム | ボーゲスト |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM03_VIKING — ヴァイキングヘルム — ボーゲストを / 召喚するためのカード"> `HELM2_HM03_VIKING` | ヴァイキングヘルム | ボーゲストを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM04_BARREL — バレルヘルム — ジャンプー"> `HELM2_HM04_BARREL` | バレルヘルム | ジャンプー |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM05_GREAT — グレートヘルム — ジャンプーを / 召喚するためのカード"> `HELM2_HM05_GREAT` | グレートヘルム | ジャンプーを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM06_MITHRIL — ミスリルヘルム — バルキリークララ"> `HELM2_HM06_MITHRIL` | ミスリルヘルム | バルキリークララ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM07_MAGIC — マジックヘルム — バルキリークララを / 召喚するためのカード"> `HELM2_HM07_MAGIC` | マジックヘルム | バルキリークララを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM08_KNIGHT — ナイトヘルム — バルキリー燕"> `HELM2_HM08_KNIGHT` | ナイトヘルム | バルキリー燕 |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM09_BANDANNA — バンダナ — バルキリー燕を / 召喚するためのカード"> `HELM2_HM09_BANDANNA` | バンダナ | バルキリー燕を / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM10_LEATHERHAT — レザーキャップ — ディアボルガ"> `HELM2_HM10_LEATHERHAT` | レザーキャップ | ディアボルガ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM11_WINGHAT — ウィングヘルム — ディアボルガを / 召喚するためのカード"> `HELM2_HM11_WINGHAT` | ウィングヘルム | ディアボルガを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM12_KETTLEHAT — ケトルハット — ミスティカルビジョン"> `HELM2_HM12_KETTLEHAT` | ケトルハット | ミスティカルビジョン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM13_MAGICIANHAT — マジシャンハット — スキル／技：幻影召喚 / ユーズボタンなどで発動"> `HELM2_HM13_MAGICIANHAT` | マジシャンハット | スキル／技：幻影召喚 / ユーズボタンなどで発動 |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM14_MITLA — ミトラ — スキル／無inimigoの幻影を召喚し、 / ataqueすることができる"> `HELM2_HM14_MITLA` | ミトラ | スキル／無inimigoの幻影を召喚し、 / ataqueすることができる |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM15_WARLOCKCAP — ウォーロックキャップ — リッチ"> `HELM2_HM15_WARLOCKCAP` | ウォーロックキャップ | リッチ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM16_SORCERERCAP — ソーサラーキャップ — リッチを / 召喚するためのカード"> `HELM2_HM16_SORCERERCAP` | ソーサラーキャップ | リッチを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM17_CLERICCAP — クレリックキャップ — デュラハン"> `HELM2_HM17_CLERICCAP` | クレリックキャップ | デュラハン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM18_BISHOPCAP — ビショップキャップ — デュラハンを / 召喚するためのカード"> `HELM2_HM18_BISHOPCAP` | ビショップキャップ | デュラハンを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM19_CROTHCAP — クロスキャップ — サイクロプス"> `HELM2_HM19_CROTHCAP` | クロスキャップ | サイクロプス |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM20_PIRATESHAT — パイレーツハット — サイクロプスを / 召喚するためのカード"> `HELM2_HM20_PIRATESHAT` | パイレーツハット | サイクロプスを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM21_TIARA — ティアラ — ラミア"> `HELM2_HM21_TIARA` | ティアラ | ラミア |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM22_CIRCLET — サークレット — ラミアを / 召喚するためのカード"> `HELM2_HM22_CIRCLET` | サークレット | ラミアを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM23_WHITE — ホーリーヘルム — テラー"> `HELM2_HM23_WHITE` | ホーリーヘルム | テラー |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM24_BLACK — デモンズヘルム — テラーを / 召喚するためのカード"> `HELM2_HM24_BLACK` | デモンズヘルム | テラーを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM25_WIZARDHAT — ウィザードハット — ギルマン"> `HELM2_HM25_WIZARDHAT` | ウィザードハット | ギルマン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM26_PROTECTHAT — プロテクトハット — ギルマンを / 召喚するためのカード"> `HELM2_HM26_PROTECTHAT` | プロテクトハット | ギルマンを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM27_SPIKECAP — スパイクキャップ — カメポポン"> `HELM2_HM27_SPIKECAP` | スパイクキャップ | カメポポン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM28_KINGCROWN — キングクラウン — カメポポンを / 召喚するためのカード"> `HELM2_HM28_KINGCROWN` | キングクラウン | カメポポンを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM29_SNAKEHEAD — スネークヘッド — ふぅ"> `HELM2_HM29_SNAKEHEAD` | スネークヘッド | ふぅ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM30_IRON — ★アイアンヘルム — ふぅを / 召喚するためのカード"> `HELM2_HM30_IRON` | ★アイアンヘルム | ふぅを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM31_LEATHERHAT — ★レザーキャップ — セラフィー・ルカ"> `HELM2_HM31_LEATHERHAT` | ★レザーキャップ | セラフィー・ルカ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM32_MAGICIANHAT — ★マジシャンハット — セラフィー・ルカを / 召喚するためのカード"> `HELM2_HM32_MAGICIANHAT` | ★マジシャンハット | セラフィー・ルカを / 召喚するためのカード |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM33_CLERICCAP — ★クレリックキャップ — 鉄の竜"> `HELM2_HM33_CLERICCAP` | ★クレリックキャップ | 鉄の竜 |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM34_SCALE — スケイルヘルム"> `HELM2_HM34_SCALE` | スケイルヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM35_RUSTYHAT — ラスティハット"> `HELM2_HM35_RUSTYHAT` | ラスティハット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM36_WARLOCKCAP_EX — チャームキャップ"> `HELM2_HM36_WARLOCKCAP_EX` | チャームキャップ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM37_CLERICCAP_EX — インディゴバニット"> `HELM2_HM37_CLERICCAP_EX` | インディゴバニット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM38_HANNYA — 白鬼の兜"> `HELM2_HM38_HANNYA` | 白鬼の兜 |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM39_DIVINECIRCLET — ディバインサークレット"> `HELM2_HM39_DIVINECIRCLET` | ディバインサークレット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM40_QUEENTIARA — クイーンティアラ"> `HELM2_HM40_QUEENTIARA` | クイーンティアラ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM41_UNICORNHEAD — ユニコーンヘッド"> `HELM2_HM41_UNICORNHEAD` | ユニコーンヘッド |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM42_CUREHELM — キュアヘルム"> `HELM2_HM42_CUREHELM` | キュアヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM43_SHADOWHAT — シャドウハット"> `HELM2_HM43_SHADOWHAT` | シャドウハット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM44_NISOUZUKIN — フライアベール"> `HELM2_HM44_NISOUZUKIN` | フライアベール |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM45_CROWN — ゴールドクラウン"> `HELM2_HM45_CROWN` | ゴールドクラウン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM46_EARRING1 — ウェイバーピアス"> `HELM2_HM46_EARRING1` | ウェイバーピアス |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM47_GLASS — メガネ"> `HELM2_HM47_GLASS` | メガネ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM48_GOBLINMASK — ゴブリンマスク"> `HELM2_HM48_GOBLINMASK` | ゴブリンマスク |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM49_EARRING2 — チャームピアス"> `HELM2_HM49_EARRING2` | チャームピアス |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM50_CLOWNMASK — ファントムマスク"> `HELM2_HM50_CLOWNMASK` | ファントムマスク |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM51_BARANCHE — バランチェ"> `HELM2_HM51_BARANCHE` | バランチェ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM52_EVILEYE — イービルアイ"> `HELM2_HM52_EVILEYE` | イービルアイ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM53_VEIL — ワイアベール"> `HELM2_HM53_VEIL` | ワイアベール |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM54_EYECAP — ブラインドマスク"> `HELM2_HM54_EYECAP` | ブラインドマスク |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM55_VALKYRIE — ヴァルキリエ"> `HELM2_HM55_VALKYRIE` | ヴァルキリエ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM56_IRONMASK — アイアンマスク"> `HELM2_HM56_IRONMASK` | アイアンマスク |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM57_SKULLFACE — スカルフェイス"> `HELM2_HM57_SKULLFACE` | スカルフェイス |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM58_BARRETTE — ファルコンバレッタ"> `HELM2_HM58_BARRETTE` | ファルコンバレッタ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM59_PIERCE — リングピアス"> `HELM2_HM59_PIERCE` | リングピアス |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM60_MASQUERADE — マスカレイドマスク"> `HELM2_HM60_MASQUERADE` | マスカレイドマスク |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM61_MONOCLE — モノクル"> `HELM2_HM61_MONOCLE` | モノクル |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM62_SPIDERFRAME — スパイダーフレーム"> `HELM2_HM62_SPIDERFRAME` | スパイダーフレーム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM63_WARRIORFRAME — ウォーリアーフレーム"> `HELM2_HM63_WARRIORFRAME` | ウォーリアーフレーム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM64_SCALE — ★スケイルヘルム"> `HELM2_HM64_SCALE` | ★スケイルヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM65_WARLOCKCAP — ★ウォーロックキャップ"> `HELM2_HM65_WARLOCKCAP` | ★ウォーロックキャップ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM66_SORCERERCAP — ★ソーサラーキャップ"> `HELM2_HM66_SORCERERCAP` | ★ソーサラーキャップ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM67_MITLA — ★ミトラ"> `HELM2_HM67_MITLA` | ★ミトラ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM68_BONE — スカルヘルム"> `HELM2_HM68_BONE` | スカルヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM69_DRAGON — ドラゴンヘルム"> `HELM2_HM69_DRAGON` | ドラゴンヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM70_SHINKI — セイクリッドハット"> `HELM2_HM70_SHINKI` | セイクリッドハット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM71_SHINKI — アビスハット"> `HELM2_HM71_SHINKI` | アビスハット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM72_SHINKI — アストラルハット"> `HELM2_HM72_SHINKI` | アストラルハット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM73_BANDANNA — ★バンダナ"> `HELM2_HM73_BANDANNA` | ★バンダナ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM74_SHINKI — 忍者頭巾"> `HELM2_HM74_SHINKI` | 忍者頭巾 |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM75_BARREL — ★バレルヘルム"> `HELM2_HM75_BARREL` | ★バレルヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM76_SHINKI — ジェネラルヘルム"> `HELM2_HM76_SHINKI` | ジェネラルヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM77_SHINKI — ルミナスキャップ"> `HELM2_HM77_SHINKI` | ルミナスキャップ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM78_SHINKI — ノートリアスハット"> `HELM2_HM78_SHINKI` | ノートリアスハット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM79_SNAKEHEAD — ★スネークヘッド"> `HELM2_HM79_SNAKEHEAD` | ★スネークヘッド |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM80_SOURAN — 蒼藍の兜"> `HELM2_HM80_SOURAN` | 蒼藍の兜 |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM81_ROZETTA — ロゼッタハット"> `HELM2_HM81_ROZETTA` | ロゼッタハット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM82_MISTICAL — オラクルクラウン"> `HELM2_HM82_MISTICAL` | オラクルクラウン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM83_RAFFIAN — ラフィアンターバン"> `HELM2_HM83_RAFFIAN` | ラフィアンターバン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM84_D4SHINKI2 — アリサノスヘルム"> `HELM2_HM84_D4SHINKI2` | アリサノスヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM85_DEMONIC — デモニックヘルム"> `HELM2_HM85_DEMONIC` | デモニックヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM86_HERMIT — グレイスクラウン"> `HELM2_HM86_HERMIT` | グレイスクラウン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM87_D4SHINKI3 — ブラッディハット"> `HELM2_HM87_D4SHINKI3` | ブラッディハット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM88_PRINCESS — プリンセスティアラ"> `HELM2_HM88_PRINCESS` | プリンセスティアラ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM89_ROYAL — ロイヤルクラウン"> `HELM2_HM89_ROYAL` | ロイヤルクラウン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM90_D4SHINKI1 — ラムナミスバレッタ"> `HELM2_HM90_D4SHINKI1` | ラムナミスバレッタ |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM91_ALTORISER — アルトライザー"> `HELM2_HM91_ALTORISER` | アルトライザー |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM92_BARBAROS — バルバロスヘルム"> `HELM2_HM92_BARBAROS` | バルバロスヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM93_KENSEI — 拳聖頭巾"> `HELM2_HM93_KENSEI` | 拳聖頭巾 |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM94_EVIL — イビルハット"> `HELM2_HM94_EVIL` | イビルハット |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM95_HUNTER — ハンターズベレー"> `HELM2_HM95_HUNTER` | ハンターズベレー |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM96_DRAGON_EX — ドラゴニックヘルム"> `HELM2_HM96_DRAGON_EX` | ドラゴニックヘルム |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM97_SHADOWHAT_EX — マーブルマスク"> `HELM2_HM97_SHADOWHAT_EX` | マーブルマスク |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM98_KINGCROWN_EX — エンペラークラウン"> `HELM2_HM98_KINGCROWN_EX` | エンペラークラウン |
| <img src="../img/icons/cls_helm.png" width="36" title="HELM2_HM99_NINJYA_EX — 風魔頭巾"> `HELM2_HM99_NINJYA_EX` | 風魔頭巾 |

### boots2 — botas (76)

botas, sapatos, grevas

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT01_LONG — ロングブーツ — オークメイジＴ"> `BOOTS2_BT01_LONG` | ロングブーツ | オークメイジＴ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT02_LEATHER — レザーブーツ — オークメイジＴを / 召喚するためのカード"> `BOOTS2_BT02_LEATHER` | レザーブーツ | オークメイジＴを / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT03_WING — ウィングブーツ — オークチーフＴ"> `BOOTS2_BT03_WING` | ウィングブーツ | オークチーフＴ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT04_PLATE — アイアンブーツ — オークチーフＴを / 召喚するためのカード"> `BOOTS2_BT04_PLATE` | アイアンブーツ | オークチーフＴを / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT05_KNIGHT — ナイトブーツ — エルドワイバーン"> `BOOTS2_BT05_KNIGHT` | ナイトブーツ | エルドワイバーン |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT06_MITHRIL — ミスリルブーツ — エルドワイバーンを / 召喚するためのカード"> `BOOTS2_BT06_MITHRIL` | ミスリルブーツ | エルドワイバーンを / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT07_MAGICIANSHOES — マジシャンシューズ — ドラゴンゾンビ"> `BOOTS2_BT07_MAGICIANSHOES` | マジシャンシューズ | ドラゴンゾンビ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT08_MAGIC — マジックブーツ — ドラゴンゾンビを / 召喚するためのカード"> `BOOTS2_BT08_MAGIC` | マジックブーツ | ドラゴンゾンビを / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT09_WHITE — ホーリーブーツ — ブルードラゴン"> `BOOTS2_BT09_WHITE` | ホーリーブーツ | ブルードラゴン |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT10_BLACK — デモンズブーツ — ブルードラゴンを / 召喚するためのカード"> `BOOTS2_BT10_BLACK` | デモンズブーツ | ブルードラゴンを / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT11_PRIEST — ガイトラッシュ"> `BOOTS2_BT11_PRIEST` |  | ガイトラッシュ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT12_WARRIOR — ガイトラッシュを / 召喚するためのカード"> `BOOTS2_BT12_WARRIOR` |  | ガイトラッシュを / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT13_CLERIC — ホーリーソード"> `BOOTS2_BT13_CLERIC` |  | ホーリーソード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT14_THIEF — プリーストブーツ — ホーリーソード"> `BOOTS2_BT14_THIEF` | プリーストブーツ | ホーリーソード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT15_MAGE — ラスティブーツ — ホーリーソード"> `BOOTS2_BT15_MAGE` | ラスティブーツ | ホーリーソード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT16_ROGUE — ローグブーツ — スパンキー"> `BOOTS2_BT16_ROGUE` | ローグブーツ | スパンキー |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT17_SPEED — スピードブーツ — スパンキーを / 召喚するためのカード"> `BOOTS2_BT17_SPEED` | スピードブーツ | スパンキーを / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT18_WARM — ワームブーツ — トロル・改"> `BOOTS2_BT18_WARM` | ワームブーツ | トロル・改 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT19_SPIKE — スパイクブーツ — トロル・改を / 召喚するためのカード"> `BOOTS2_BT19_SPIKE` | スパイクブーツ | トロル・改を / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT20_GATHER — ギャザーブーツ — リザードマン・改"> `BOOTS2_BT20_GATHER` | ギャザーブーツ | リザードマン・改 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT21_CROTH — クロスブーツ — リザードマン・改を / 召喚するためのカード"> `BOOTS2_BT21_CROTH` | クロスブーツ | リザードマン・改を / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT22_KING — キングブーツ — リザードマンレンジャー・改"> `BOOTS2_BT22_KING` | キングブーツ | リザードマンレンジャー・改 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT23_SOUL — リザードマンレンジャー・改を / 召喚するためのカード"> `BOOTS2_BT23_SOUL` |  | リザードマンレンジャー・改を / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT24_FIGHTER — ウィザードブーツ — リザードマンランサー・改"> `BOOTS2_BT24_FIGHTER` | ウィザードブーツ | リザードマンランサー・改 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT25_LEATHER — ★レザーブーツ — リザードマンランサー・改を / 召喚するためのカード"> `BOOTS2_BT25_LEATHER` | ★レザーブーツ | リザードマンランサー・改を / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT26_PLATE — ★アイアンブーツ — ガーディアンリザードマン・改"> `BOOTS2_BT26_PLATE` | ★アイアンブーツ | ガーディアンリザードマン・改 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT27_MAGICIANSHOES — ★マジシャンシューズ — ガーディアンリザードマン・改を / 召喚するためのカード"> `BOOTS2_BT27_MAGICIANSHOES` | ★マジシャンシューズ | ガーディアンリザードマン・改を / 召喚するためのカード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT28_PRIEST — ★プリーストブーツ — ロイヤルリザードマン・改"> `BOOTS2_BT28_PRIEST` | ★プリーストブーツ | ロイヤルリザードマン・改 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT29_SCALE — スケイルブーツ"> `BOOTS2_BT29_SCALE` | スケイルブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT30_MANA — マナブーツ"> `BOOTS2_BT30_MANA` | マナブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT31_CROWNSHOES — クラウンシューズ"> `BOOTS2_BT31_CROWNSHOES` | クラウンシューズ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT32_PRIEST_EX — オリエントブーツ"> `BOOTS2_BT32_PRIEST_EX` | オリエントブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT33_SOUL_EX — ノーブルブーツ"> `BOOTS2_BT33_SOUL_EX` | ノーブルブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT34_DAIGUSOKU — 黒紋の脛当"> `BOOTS2_BT34_DAIGUSOKU` | 黒紋の脛当 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT35_CURE — キュアブーツ"> `BOOTS2_BT35_CURE` | キュアブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT36_PROTECT — プロテクトブーツ"> `BOOTS2_BT36_PROTECT` | プロテクトブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT37_BISHOP — モンクブーツ"> `BOOTS2_BT37_BISHOP` | モンクブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT38_SHADOW — シャドウブーツ"> `BOOTS2_BT38_SHADOW` | シャドウブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT39_MAGE"> `BOOTS2_BT39_MAGE` |  |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT40_DWARVEN — ホーリーソード"> `BOOTS2_BT40_DWARVEN` |  | ホーリーソード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT41_ELVEN — バインドブーツ — ホーリーソード"> `BOOTS2_BT41_ELVEN` | バインドブーツ | ホーリーソード |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT42_SLASH — スラッシュブーツ"> `BOOTS2_BT42_SLASH` | スラッシュブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT43_SOARGREAVE — ソアグリーヴ"> `BOOTS2_BT43_SOARGREAVE` | ソアグリーヴ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT44_CROTH — ★クロスブーツ"> `BOOTS2_BT44_CROTH` | ★クロスブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT45_SCALE — ★スケイルブーツ"> `BOOTS2_BT45_SCALE` | ★スケイルブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT46_MANA — ★マナブーツ"> `BOOTS2_BT46_MANA` | ★マナブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT47_BONE — シャンクブーツ"> `BOOTS2_BT47_BONE` | シャンクブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT48_DRAGON — ドラゴンブーツ"> `BOOTS2_BT48_DRAGON` | ドラゴンブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT49_SHINKI — セイクリッドブーツ"> `BOOTS2_BT49_SHINKI` | セイクリッドブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT50_SHINKI — アストラルブーツ"> `BOOTS2_BT50_SHINKI` | アストラルブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT51_SHINKI — フォールドブーツ"> `BOOTS2_BT51_SHINKI` | フォールドブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT52_SHINKI — 忍者脛当"> `BOOTS2_BT52_SHINKI` | 忍者脛当 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT53_SHINKI — ジェネラルブーツ"> `BOOTS2_BT53_SHINKI` | ジェネラルブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT54_SHINKI — アビスブーツ"> `BOOTS2_BT54_SHINKI` | アビスブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT55_SHINKI — ルミナスブーツ"> `BOOTS2_BT55_SHINKI` | ルミナスブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT56_SHINKI — ノートリアスブーツ"> `BOOTS2_BT56_SHINKI` | ノートリアスブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT57_WARRIOR — ★ラスティブーツ"> `BOOTS2_BT57_WARRIOR` | ★ラスティブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT58_ROGUE — ★ローグブーツ"> `BOOTS2_BT58_ROGUE` | ★ローグブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT59_SPEED — ★スピードブーツ"> `BOOTS2_BT59_SPEED` | ★スピードブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT60_SOURAN — 蒼藍の脛当"> `BOOTS2_BT60_SOURAN` | 蒼藍の脛当 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT61_ROZETTA — ロゼッタブーツ"> `BOOTS2_BT61_ROZETTA` | ロゼッタブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT62_MISTICAL — オラクルブーツ"> `BOOTS2_BT62_MISTICAL` | オラクルブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT63_RAFFIAN — ラフィアンシューズ"> `BOOTS2_BT63_RAFFIAN` | ラフィアンシューズ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT64_D4SHINKI1 — アリサノスブーツ"> `BOOTS2_BT64_D4SHINKI1` | アリサノスブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT65_DEMONIC — デモニックブーツ"> `BOOTS2_BT65_DEMONIC` | デモニックブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT66_HERMIT — グレイスブーツ"> `BOOTS2_BT66_HERMIT` | グレイスブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT67_D4SHINKI2 — ブラッディブーツ"> `BOOTS2_BT67_D4SHINKI2` | ブラッディブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT68_BARBAROS — バルバロスブーツ"> `BOOTS2_BT68_BARBAROS` | バルバロスブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT69_KENSEI — 拳聖の脛当"> `BOOTS2_BT69_KENSEI` | 拳聖の脛当 |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT70_EVIL — イビルブーツ"> `BOOTS2_BT70_EVIL` | イビルブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT71_HUNTER — ハンターズブーツ"> `BOOTS2_BT71_HUNTER` | ハンターズブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT72_D4SHINKI3 — アルカナブーツ"> `BOOTS2_BT72_D4SHINKI3` | アルカナブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT73_DRAGON_EX — ドラゴニックブーツ"> `BOOTS2_BT73_DRAGON_EX` | ドラゴニックブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT74_SHADOW_EX — マーブルブーツ"> `BOOTS2_BT74_SHADOW_EX` | マーブルブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT75_KING_EX — エンペラーブーツ"> `BOOTS2_BT75_KING_EX` | エンペラーブーツ |
| <img src="../img/icons/cls_boots.png" width="36" title="BOOTS2_BT76_NINJYA_EX — 風魔脛当"> `BOOTS2_BT76_NINJYA_EX` | 風魔脛当 |

### shield2 — escudos (48)

broquéis, escudos redondos/em losango/de torre

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH01_WOOD — ウッドシールド — シルバーアックス"> `SHIELD2_SH01_WOOD` | ウッドシールド | シルバーアックス |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH02_BUCKLER — バックラー — 片手Machado／純銀製で作りの見事な / 美しいバトルアックス"> `SHIELD2_SH02_BUCKLER` | バックラー | 片手Machado／純銀製で作りの見事な / 美しいバトルアックス |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH03_ROUND — ラウンドシールド — イーグレット"> `SHIELD2_SH03_ROUND` | ラウンドシールド | イーグレット |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH04_LARGE — ラージシールド — 片手Machado／Ataque：４６ / RequerＳＴＲ：１０"> `SHIELD2_SH04_LARGE` | ラージシールド | 片手Machado／Ataque：４６ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH05_KITE — カイトシールド — 片手Machado／相手に向かって投げる / ことができる片手Machado"> `SHIELD2_SH05_KITE` | カイトシールド | 片手Machado／相手に向かって投げる / ことができる片手Machado |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH06_KNIGHT — ナイトシールド — 邪鬼のMachado"> `SHIELD2_SH06_KNIGHT` | ナイトシールド | 邪鬼のMachado |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH07_WING — ウィングシールド — 片手Machado／Ataque：４２ / RequerＳＴＲ：nenhum"> `SHIELD2_SH07_WING` | ウィングシールド | 片手Machado／Ataque：４２ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH08_TOWER — タワーシールド — 片手Machado／オークが使用している / 片手Machado。não sintetizável"> `SHIELD2_SH08_TOWER` | タワーシールド | 片手Machado／オークが使用している / 片手Machado。não sintetizável |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH09_SPIKE — スパイクシールド — 邪鬼の炎Machado"> `SHIELD2_SH09_SPIKE` | スパイクシールド | 邪鬼の炎Machado |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH10_FLAME — フレイムシールド — 片手Machado／Ataque：２７ / RequerＳＴＲ：nenhum"> `SHIELD2_SH10_FLAME` | フレイムシールド | 片手Machado／Ataque：２７ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH11_ICE — アイスシールド — 片手Machado／オークが使用している / fogoの片手Machado。não sintetizável"> `SHIELD2_SH11_ICE` | アイスシールド | 片手Machado／オークが使用している / fogoの片手Machado。não sintetizável |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH12_THUNDER — サンダーシールド — 邪鬼の氷Machado"> `SHIELD2_SH12_THUNDER` | サンダーシールド | 邪鬼の氷Machado |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH13_MAGIC — マジックシールド — 片手Machado／オークが使用している / geloの片手Machado。não sintetizável"> `SHIELD2_SH13_MAGIC` | マジックシールド | 片手Machado／オークが使用している / geloの片手Machado。não sintetizável |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH14_DRAGON — ドラゴンシールド — 邪鬼の雷Machado"> `SHIELD2_SH14_DRAGON` | ドラゴンシールド | 邪鬼の雷Machado |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH15_MITHRIL — ミスリルシールド — 片手Machado／オークが使用している / raioの片手Machado。não sintetizável"> `SHIELD2_SH15_MITHRIL` | ミスリルシールド | 片手Machado／オークが使用している / raioの片手Machado。não sintetizável |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH16_REFLECT — リフレクトシールド — 牛人のMachado"> `SHIELD2_SH16_REFLECT` | リフレクトシールド | 牛人のMachado |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH17_WHITE — ホーリーシールド — 片手Machado／Ataque：５０ / RequerＳＴＲ：nenhum"> `SHIELD2_SH17_WHITE` | ホーリーシールド | 片手Machado／Ataque：５０ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH18_BLACK — デモンズシールド — 片手Machado／ミノタウロスが使用し / ている片手Machado。não sintetizável"> `SHIELD2_SH18_BLACK` | デモンズシールド | 片手Machado／ミノタウロスが使用し / ている片手Machado。não sintetizável |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH19_ROUND — ★ラウンドシールド — 牛人兵のMachado"> `SHIELD2_SH19_ROUND` | ★ラウンドシールド | 牛人兵のMachado |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH20_LARGE — ★ラージシールド — 片手Machado／Ataque：５５ / RequerＳＴＲ：nenhum"> `SHIELD2_SH20_LARGE` | ★ラージシールド | 片手Machado／Ataque：５５ / RequerＳＴＲ：nenhum |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH21_LEATHER — レザーシールド"> `SHIELD2_SH21_LEATHER` | レザーシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH22_PALISADE — パリセイドシールド"> `SHIELD2_SH22_PALISADE` | パリセイドシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH23_CHARCOAL — チャコールシールド"> `SHIELD2_SH23_CHARCOAL` | チャコールシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH24_SKELETON — 骸骨の盾"> `SHIELD2_SH24_SKELETON` | 骸骨の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH25_LIZARDMAN — 蜥蜴の盾"> `SHIELD2_SH25_LIZARDMAN` | 蜥蜴の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH26_LIZARDNAN_G — 蜥蜴護衛兵の盾"> `SHIELD2_SH26_LIZARDNAN_G` | 蜥蜴護衛兵の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH27_GOBLIN_F — 小鬼の盾"> `SHIELD2_SH27_GOBLIN_F` | 小鬼の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH28_KOBOLD_W — 犬頭鬼の盾"> `SHIELD2_SH28_KOBOLD_W` | 犬頭鬼の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH29_ORC — 邪鬼の盾"> `SHIELD2_SH29_ORC` | 邪鬼の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH30_WING — ★ウィングシールド"> `SHIELD2_SH30_WING` | ★ウィングシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH31_TOWER — ★タワーシールド"> `SHIELD2_SH31_TOWER` | ★タワーシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH32_PALISADE — ★パリセイドシールド"> `SHIELD2_SH32_PALISADE` | ★パリセイドシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH33_SHINKI"> `SHIELD2_SH33_SHINKI` |  |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH34_SHINKI — ジェネラルシールド"> `SHIELD2_SH34_SHINKI` | ジェネラルシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH35_SHINKI — ルミナスシールド"> `SHIELD2_SH35_SHINKI` | ルミナスシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH36_LARGE — ノートリアスシールド"> `SHIELD2_SH36_LARGE` | ノートリアスシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH37_KITE — ★カイトシールド"> `SHIELD2_SH37_KITE` | ★カイトシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH38_MACHINE — 機兵の盾"> `SHIELD2_SH38_MACHINE` | 機兵の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH39_MACHINE_GOLD — 黄金機兵の盾"> `SHIELD2_SH39_MACHINE_GOLD` | 黄金機兵の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH40_MACHINE_DARK — 暗黒機兵の盾"> `SHIELD2_SH40_MACHINE_DARK` | 暗黒機兵の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH41_SOURAN — 蒼藍の盾"> `SHIELD2_SH41_SOURAN` | 蒼藍の盾 |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH42_MISTICAL — オラクルシールド"> `SHIELD2_SH42_MISTICAL` | オラクルシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH43_RAFFIAN — ラフィアンシールド"> `SHIELD2_SH43_RAFFIAN` | ラフィアンシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH44_D4SHINKI1 — アリサノスシールド"> `SHIELD2_SH44_D4SHINKI1` | アリサノスシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH45_HERMIT — グレイスシールド"> `SHIELD2_SH45_HERMIT` | グレイスシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH46_D4SHINKI2 — ブラッディシールド"> `SHIELD2_SH46_D4SHINKI2` | ブラッディシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH47_BARBAROS — バルバロスシールド"> `SHIELD2_SH47_BARBAROS` | バルバロスシールド |
| <img src="../img/icons/cls_shield.png" width="36" title="SHIELD2_SH50_D4SUMMON — 大魔の盾"> `SHIELD2_SH50_D4SUMMON` | 大魔の盾 |

### acces2 — acessórios (90)

amuletos, anéis, talismãs + o conjunto easter-egg de hardware Sega
Inclui os acessórios easter-egg de consoles Sega (`SC3000`, `SG1000`, `MARK3`, `MASTERSYSTEM`, `MEGADRIVE`, `MEGAJET`, `GENESIS_CDX`, `GAMEGEAR`, `SEGASATURN`, `DREAMCAST`, `DREAMCAST_R7`).

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL01_FIREAMULET — ファイアーアミュレット — アーマートードキングを / 召喚するためのカード"> `ACCES2_AL01_FIREAMULET` | ファイアーアミュレット | アーマートードキングを / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL02_ICEAMULET — アイスアミュレット — サキュバス"> `ACCES2_AL02_ICEAMULET` | アイスアミュレット | サキュバス |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL03_THUNDERAMULET — サンダーアミュレット — サキュバスを / 召喚するためのカード"> `ACCES2_AL03_THUNDERAMULET` | サンダーアミュレット | サキュバスを / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL04_HOLYAMULET — ホーリーアミュレット — スケルトンＦ"> `ACCES2_AL04_HOLYAMULET` | ホーリーアミュレット | スケルトンＦ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL05_DARKAMULET — ダークアミュレット — スケルトンＦを / 召喚するためのカード"> `ACCES2_AL05_DARKAMULET` | ダークアミュレット | スケルトンＦを / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL06_GREATAMULET — グレートアミュレット — スケルトンナイトＦ"> `ACCES2_AL06_GREATAMULET` | グレートアミュレット | スケルトンナイトＦ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL07_HOLYCHARM — 破邪の護符 — スケルトンナイトＦを / 召喚するためのカード"> `ACCES2_AL07_HOLYCHARM` | 破邪の護符 | スケルトンナイトＦを / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL08_GOODCHARM — 光の護符 — スケルトンメイジＦ"> `ACCES2_AL08_GOODCHARM` | 光の護符 | スケルトンメイジＦ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL09_EVILCHARM — 風の護符 — スケルトンメイジＦを / 召喚するためのカード"> `ACCES2_AL09_EVILCHARM` | 風の護符 | スケルトンメイジＦを / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL10_WATERCHARM — 水の護符 — ドワーブンスケルトンＦ"> `ACCES2_AL10_WATERCHARM` | 水の護符 | ドワーブンスケルトンＦ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL11_FIRECHARM — 炎の護符 — スケルトンアーチャーＦ"> `ACCES2_AL11_FIRECHARM` | 炎の護符 | スケルトンアーチャーＦ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL12_EARTHCHARM — 地の護符 — スケルトンアーチャーＦを / 召喚するためのカード"> `ACCES2_AL12_EARTHCHARM` | 地の護符 | スケルトンアーチャーＦを / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL13_OCEANCHARM — 海の護符 — スケルトンＩ"> `ACCES2_AL13_OCEANCHARM` | 海の護符 | スケルトンＩ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL14_LAWCHARM — 法の護符 — スケルトンＩを / 召喚するためのカード"> `ACCES2_AL14_LAWCHARM` | 法の護符 | スケルトンＩを / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL15_HOLYAMULET — ★ホーリーアミュレット — スケルトンナイトＩ"> `ACCES2_AL15_HOLYAMULET` | ★ホーリーアミュレット | スケルトンナイトＩ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL16_DARKAMULET — ★ダークアミュレット — スケルトンナイトＩを / 召喚するためのカード"> `ACCES2_AL16_DARKAMULET` | ★ダークアミュレット | スケルトンナイトＩを / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL17_GREATAMULET — ★グレートアミュレット — スケルトンメイジＩ"> `ACCES2_AL17_GREATAMULET` | ★グレートアミュレット | スケルトンメイジＩ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL18_SILVERAMULET — 銀のネックレス"> `ACCES2_AL18_SILVERAMULET` | 銀のネックレス |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL19_OMAMORI — 朱鳥のお守り"> `ACCES2_AL19_OMAMORI` | 朱鳥のお守り |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL20_WISEAMULET — リリーフアミュレット"> `ACCES2_AL20_WISEAMULET` | リリーフアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL21_WISDOMAMULET — ワイズアミュレット"> `ACCES2_AL21_WISDOMAMULET` | ワイズアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL22_ETHERAMULET — エーテルアミュレット"> `ACCES2_AL22_ETHERAMULET` | エーテルアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL23_DIANAAMULET — ディアナアミュレット"> `ACCES2_AL23_DIANAAMULET` | ディアナアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL24_SOLAMULET — ソルアミュレット"> `ACCES2_AL24_SOLAMULET` | ソルアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL25_DAMULET — 魔道の首飾り"> `ACCES2_AL25_DAMULET` | 魔道の首飾り |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL26_FIREAMULET — ★Ｆアミュレット"> `ACCES2_AL26_FIREAMULET` | ★Ｆアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL27_ICEAMULET — ★アイスアミュレット"> `ACCES2_AL27_ICEAMULET` | ★アイスアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL28_THUNDERAMULET — ★サンダーアミュレット"> `ACCES2_AL28_THUNDERAMULET` | ★サンダーアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL29_SC3000 — ＳＣ－３０００"> `ACCES2_AL29_SC3000` | ＳＣ－３０００ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL30_SG1000 — ＳＧ－１０００"> `ACCES2_AL30_SG1000` | ＳＧ－１０００ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL31_SG1000_2 — ＳＧ－１０００Ⅱ"> `ACCES2_AL31_SG1000_2` | ＳＧ－１０００Ⅱ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL32_MARK3 — ＳＥＧＡ ＭＡＲＫⅢ"> `ACCES2_AL32_MARK3` | ＳＥＧＡ　ＭＡＲＫⅢ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL33_MASTERSYSTEM — マスターシステム"> `ACCES2_AL33_MASTERSYSTEM` | マスターシステム |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL34_MEGADRIVE — メガドライブ"> `ACCES2_AL34_MEGADRIVE` | メガドライブ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL35_MEGADRIVE_SET — メガドライブセット"> `ACCES2_AL35_MEGADRIVE_SET` | メガドライブセット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL36_MEGAJET — メガジェット"> `ACCES2_AL36_MEGAJET` | メガジェット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL37_GENESIS_CDX — ＧＥＮＥＳＩＳ ＣＤＸ"> `ACCES2_AL37_GENESIS_CDX` | ＧＥＮＥＳＩＳ　ＣＤＸ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL38_GAMEGEAR — ゲームギア"> `ACCES2_AL38_GAMEGEAR` | ゲームギア |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL39_SEGASATURN — セガサターン"> `ACCES2_AL39_SEGASATURN` | セガサターン |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL40_SEGASATURN_W — セガサターン 白"> `ACCES2_AL40_SEGASATURN_W` | セガサターン　白 |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL41_DREAMCAST — ドリームキャスト"> `ACCES2_AL41_DREAMCAST` | ドリームキャスト |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL42_DREAMCAST_R7 — ドリームキャストＲ７"> `ACCES2_AL42_DREAMCAST_R7` | ドリームキャストＲ７ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL43_D4SHINKI1 — ブラッドアミュレット"> `ACCES2_AL43_D4SHINKI1` | ブラッドアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL44_WILLAMULET — ソウルアミュレット"> `ACCES2_AL44_WILLAMULET` | ソウルアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL45_GLOWAMULET — グロウアミュレット"> `ACCES2_AL45_GLOWAMULET` | グロウアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL46_D4SHINKI2 — ジュピターアミュレット"> `ACCES2_AL46_D4SHINKI2` | ジュピターアミュレット |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_AL47_D4SHINKI3 — Ｄ４新規アミュレット２ — アーマートードキングを / 召喚するためのカード"> `ACCES2_AL47_D4SHINKI3` | Ｄ４新規アミュレット２ | アーマートードキングを / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI01_SPELLRING — マインドリング — 鉄の竜を / 召喚するためのカード"> `ACCES2_RI01_SPELLRING` | マインドリング | 鉄の竜を / 召喚するためのカード |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI02_TOUGHNESSRING — タフネスリング — スキル／特殊な能力を持つゴー / レムを召喚し、inimigoをataqueさせる"> `ACCES2_RI02_TOUGHNESSRING` | タフネスリング | スキル／特殊な能力を持つゴー / レムを召喚し、inimigoをataqueさせる |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI03_POWERRING — パワーリング — 対戦ポイント"> `ACCES2_RI03_POWERRING` | パワーリング | 対戦ポイント |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI04_SPEEDRING — スピードリング — 対戦／ポイント"> `ACCES2_RI04_SPEEDRING` | スピードリング | 対戦／ポイント |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI05_MAGICIANRING — マジックリング — 対戦パワーアップ"> `ACCES2_RI05_MAGICIANRING` | マジックリング | 対戦パワーアップ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI06_SIGHTRING — ゲイルリング — 対戦／パワーアップ"> `ACCES2_RI06_SIGHTRING` | ゲイルリング | 対戦／パワーアップ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI07_HAPPYRING — ギネヴィアの指輪"> `ACCES2_RI07_HAPPYRING` | ギネヴィアの指輪 |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI08_DICTATOR — 支配者の指輪"> `ACCES2_RI08_DICTATOR` | 支配者の指輪 |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI09_GREATRING — グレートリング — 対戦／レベルアップ"> `ACCES2_RI09_GREATRING` | グレートリング | 対戦／レベルアップ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI10_LUCKRING — ラックリング — ハンドアックス"> `ACCES2_RI10_LUCKRING` | ラックリング | ハンドアックス |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI11 — バロルの邪眼"> `ACCES2_RI11` | バロルの邪眼 |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI12 — 妖精王の紅玉"> `ACCES2_RI12` | 妖精王の紅玉 |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI13 — 宝珠"> `ACCES2_RI13` | 宝珠 |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI14_SPELLRING — ★マインドリング — 片手Machado／Ataque：３０ / RequerＳＴＲ：５"> `ACCES2_RI14_SPELLRING` | ★マインドリング | 片手Machado／Ataque：３０ / RequerＳＴＲ：５ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI15_TOUGHNESSRING — ★タフネスリング — 片手Machado／一般的で簡素なMachado"> `ACCES2_RI15_TOUGHNESSRING` | ★タフネスリング | 片手Machado／一般的で簡素なMachado |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI16_POWERRING — ★パワーリング — フランキスカ"> `ACCES2_RI16_POWERRING` | ★パワーリング | フランキスカ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI17_SPEEDRING — ★スピードリング — 片手Machado／Ataque：５１ / RequerＳＴＲ：１０"> `ACCES2_RI17_SPEEDRING` | ★スピードリング | 片手Machado／Ataque：５１ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI18_MAGICIANRING — ★マジックリング — 片手Machado／地中海近くに住む勇猛 / な民族が愛用していたMachado"> `ACCES2_RI18_MAGICIANRING` | ★マジックリング | 片手Machado／地中海近くに住む勇猛 / な民族が愛用していたMachado |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI19_SIGHTRING — ★ゲイルリング — ウォーアックス"> `ACCES2_RI19_SIGHTRING` | ★ゲイルリング | ウォーアックス |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI20_GREATRING — ★グレートリング — 片手Machado／Ataque：３６ / RequerＳＴＲ：１０"> `ACCES2_RI20_GREATRING` | ★グレートリング | 片手Machado／Ataque：３６ / RequerＳＴＲ：１０ |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI21_LUCKRING — ★ラックリング — 片手Machado／工具としてのMachadoから発 / 展して完成された戦闘用のMachado"> `ACCES2_RI21_LUCKRING` | ★ラックリング | 片手Machado／工具としてのMachadoから発 / 展して完成された戦闘用のMachado |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI22_HAPPYRING — ★プロテクトリング — バトルアックス"> `ACCES2_RI22_HAPPYRING` | ★プロテクトリング | バトルアックス |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI23_KNIGHT — ナイトリング"> `ACCES2_RI23_KNIGHT` | ナイトリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI24_PROTECT — プロテクトリング"> `ACCES2_RI24_PROTECT` | プロテクトリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI25_DWARVEN — ドワーブンリング"> `ACCES2_RI25_DWARVEN` | ドワーブンリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI26_CRONUS — クロノスリング"> `ACCES2_RI26_CRONUS` | クロノスリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI27_ELVISH — エルビッシュリング"> `ACCES2_RI27_ELVISH` | エルビッシュリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI28_TECH — テックリング"> `ACCES2_RI28_TECH` | テックリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI29_SENCE — センスリング"> `ACCES2_RI29_SENCE` | センスリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI30_RISE — ライズリング"> `ACCES2_RI30_RISE` | ライズリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI31_LIBERAL — リベラルリング"> `ACCES2_RI31_LIBERAL` | リベラルリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI32_DEMONS — デモンズリング"> `ACCES2_RI32_DEMONS` | デモンズリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI33_DWARVEN — ★ドワーブンリング"> `ACCES2_RI33_DWARVEN` | ★ドワーブンリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI34_CRONUS — ★クロノスリング"> `ACCES2_RI34_CRONUS` | ★クロノスリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI35_ELVISH — ★エルビッシュリング"> `ACCES2_RI35_ELVISH` | ★エルビッシュリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI36_FORCERING — フォースリング"> `ACCES2_RI36_FORCERING` | フォースリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI37_VITALRING — バイタルリング"> `ACCES2_RI37_VITALRING` | バイタルリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI38_SPIRITRING — スピリットリング"> `ACCES2_RI38_SPIRITRING` | スピリットリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI39_MISTICALRING — ウィルリング"> `ACCES2_RI39_MISTICALRING` | ウィルリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI40_MOMENTRING — モーメントリング"> `ACCES2_RI40_MOMENTRING` | モーメントリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI41_WINDRING — ウィンドリング"> `ACCES2_RI41_WINDRING` | ウィンドリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI42_FORTUNERING — フォーチュンリング"> `ACCES2_RI42_FORTUNERING` | フォーチュンリング |
| <img src="../img/icons/cls_acces.png" width="36" title="ACCES2_RI43_MASTERRING — マスターリング"> `ACCES2_RI43_MASTERRING` | マスターリング |

### potion2 — poções (38)

poções de cura/remédio/buff e frascos de status arremessáveis

| item | nome | notas |
|---|---|---|
| `POTION2_001` |  |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO01_HEAL1 — ポーション — アサシン"> `POTION2_PO01_HEAL1` | ポーション | アサシン |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO02_HEAL2 — ハイポーション — アサシンを / 召喚するためのカード"> `POTION2_PO02_HEAL2` | ハイポーション | アサシンを / 召喚するためのカード |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO03_HEAL3 — エリクシャー"> `POTION2_PO03_HEAL3` | エリクシャー |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO04_ELIXIR — トレント"> `POTION2_PO04_ELIXIR` |  | トレント |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO05_POISON1 — 毒薬 — トレントを / 召喚するためのカード"> `POTION2_PO05_POISON1` | 毒薬 | トレントを / 召喚するためのカード |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO06_SLEEP1 — 眠り薬 — リグナスファイター"> `POTION2_PO06_SLEEP1` | 眠り薬 | リグナスファイター |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO07_SILENCE1 — 沈黙薬 — リグナスファイターを / 召喚するためのカード"> `POTION2_PO07_SILENCE1` | 沈黙薬 | リグナスファイターを / 召喚するためのカード |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO08_PANIC1 — 混乱薬 — リビングソーン"> `POTION2_PO08_PANIC1` | 混乱薬 | リビングソーン |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO09_C_POISON — 解毒薬 — リビングソーンを / 召喚するためのカード"> `POTION2_PO09_C_POISON` | 解毒薬 | リビングソーンを / 召喚するためのカード |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO10_C_SLEEP — 目覚まし薬 — シュリーカー"> `POTION2_PO10_C_SLEEP` | 目覚まし薬 | シュリーカー |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO11_C_SILENT — 封印解除薬 — シュリーカーを / 召喚するためのカード"> `POTION2_PO11_C_SILENT` | 封印解除薬 | シュリーカーを / 召喚するためのカード |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO12_C_PANIC — きつけ薬 — ファンガス"> `POTION2_PO12_C_PANIC` | きつけ薬 | ファンガス |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO13_C_ALL — 万能薬 — ファンガスを / 召喚するためのカード"> `POTION2_PO13_C_ALL` | 万能薬 | ファンガスを / 召喚するためのカード |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO14_REGENE — リジェネポーション — スポア"> `POTION2_PO14_REGENE` | リジェネポーション | スポア |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO15_C_ROCK"> `POTION2_PO15_C_ROCK` |  |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO16_INVISIBLE1 — 透明薬"> `POTION2_PO16_INVISIBLE1` | 透明薬 |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO17_BLUSTER — 特攻草 *(provisório)*"> `POTION2_PO17_BLUSTER` | 特攻草 *(provisório)* |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO18_STRIKE — 打撃草"> `POTION2_PO18_STRIKE` | 打撃草 |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO19_HEAL_MP — 林檎 *(provisório)*"> `POTION2_PO19_HEAL_MP` | 林檎 *(provisório)* |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO20_HOLYWATER — 聖水 — アサシン"> `POTION2_PO20_HOLYWATER` | 聖水 | アサシン |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO22_BLOW_AGAINST — 風見の羽根 *(provisório)*"> `POTION2_PO22_BLOW_AGAINST` | 風見の羽根 *(provisório)* |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO23 — コウゲキリョクアガル *(provisório)*"> `POTION2_PO23` | コウゲキリョクアガル *(provisório)* |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO24 — マゼルナキケン *(provisório)*"> `POTION2_PO24` | マゼルナキケン *(provisório)* |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO25 — ボウギョリョクアガル *(provisório)*"> `POTION2_PO25` | ボウギョリョクアガル *(provisório)* |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO26 — スピードアガル *(provisório)*"> `POTION2_PO26` | スピードアガル *(provisório)* |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO27"> `POTION2_PO27` |  |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO28"> `POTION2_PO28` |  |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO29"> `POTION2_PO29` |  |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO30_STRUP1 — 攻撃力向上薬 — アサシン"> `POTION2_PO30_STRUP1` | 攻撃力向上薬 | アサシン |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO31_STRDW1 — 攻撃力減少薬"> `POTION2_PO31_STRDW1` | 攻撃力減少薬 |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO32_VITUP1 — 防御力向上薬 — アサシン"> `POTION2_PO32_VITUP1` | 防御力向上薬 | アサシン |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO33_VITDW1 — 防御力減少薬"> `POTION2_PO33_VITDW1` | 防御力減少薬 |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO34_AGIUP1 — 移動力向上薬 — アサシン"> `POTION2_PO34_AGIUP1` | 移動力向上薬 | アサシン |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO35_AGIDW1 — 移動力減少薬"> `POTION2_PO35_AGIDW1` | 移動力減少薬 |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO36_C_SLOW — キュアスロウ"> `POTION2_PO36_C_SLOW` | キュアスロウ |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO37_C_BLIND — キュアブラインド"> `POTION2_PO37_C_BLIND` | キュアブラインド |
| <img src="../img/icons/cls_potion.png" width="36" title="POTION2_PO38_C_BLEED — キュアブリード"> `POTION2_PO38_C_BLEED` | キュアブリード |

### food2 — comida (21)

itens de comida

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD01_MEAT — 肉 — クレイゴーレム"> `FOOD2_FD01_MEAT` | 肉 | クレイゴーレム |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD02_BIGMEAT — 大きい肉 — クレイゴーレムを / 召喚するためのカード"> `FOOD2_FD02_BIGMEAT` | 大きい肉 | クレイゴーレムを / 召喚するためのカード |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD04_PUTREFY — くさった肉 — ストーンゴーレム"> `FOOD2_FD04_PUTREFY` | くさった肉 | ストーンゴーレム |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD05_BREAD — パン — ストーンゴーレムを / 召喚するためのカード"> `FOOD2_FD05_BREAD` | パン | ストーンゴーレムを / 召喚するためのカード |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD06_BIGBREAD — 大きいパン — アイアンゴーレム"> `FOOD2_FD06_BIGBREAD` | 大きいパン | アイアンゴーレム |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD08_ADDLEBREAD — くさったパン — アイアンゴーレムを / 召喚するためのカード"> `FOOD2_FD08_ADDLEBREAD` | くさったパン | アイアンゴーレムを / 召喚するためのカード |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD09_MUSH — きのこ — アイスゴーレムを / 召喚するためのカード"> `FOOD2_FD09_MUSH` | きのこ | アイスゴーレムを / 召喚するためのカード |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD10_CHEESE — チーズ — ファイアーゴーレム"> `FOOD2_FD10_CHEESE` | チーズ | ファイアーゴーレム |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD11_CHIKEN — 鶏肉 — ファイアーゴーレムを / 召喚するためのカード"> `FOOD2_FD11_CHIKEN` | 鶏肉 | ファイアーゴーレムを / 召喚するためのカード |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD12_DRAGONMEAT — ドラゴン肉"> `FOOD2_FD12_DRAGONMEAT` | ドラゴン肉 |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD13_MONSTER_MEAL — モンスターフード"> `FOOD2_FD13_MONSTER_MEAL` | モンスターフード |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD14_FIREWORKS — 花火"> `FOOD2_FD14_FIREWORKS` | 花火 |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD15_CHOCOLATE — チョコレート"> `FOOD2_FD15_CHOCOLATE` | チョコレート |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD16_PERSIMMON — 柿"> `FOOD2_FD16_PERSIMMON` | 柿 |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD17_MONSTER_MEAL_L — 生命の葉"> `FOOD2_FD17_MONSTER_MEAL_L` | 生命の葉 |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD18_MONSTER_MEAL_S — 力の実"> `FOOD2_FD18_MONSTER_MEAL_S` | 力の実 |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD19_MONSTER_MEAL_I — 魔力の果実"> `FOOD2_FD19_MONSTER_MEAL_I` | 魔力の果実 |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD20_MONSTER_MEAL_V — 守りのハーブ"> `FOOD2_FD20_MONSTER_MEAL_V` | 守りのハーブ |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD21_D4FIREWORKS01 — 花火（華）"> `FOOD2_FD21_D4FIREWORKS01` | 花火（華） |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD22_D4FIREWORKS02 — 蛙花火"> `FOOD2_FD22_D4FIREWORKS02` | 蛙花火 |
| <img src="../img/icons/cls_food.png" width="36" title="FOOD2_FD23_D4FIREWORKS03 — 花火（飛星）"> `FOOD2_FD23_D4FIREWORKS03` | 花火（飛星） |

### book2 — livros, pergaminhos, materiais, dinheiro (410)

`book2` mistura várias famílias: `GG` gadgets/chaves de masmorra, `GO` moedas de ouro, `JW` joias e minérios, `MS` materiais/itens de status, `MT` materiais de criação, `SC` magias em pergaminho e `SK` livros de habilidade/magia. Os números `SK` compartilham o espaço `SKILL_SK*` (260 registros SK de livros vs 208 habilidades). IDs `BOOK2_SK{nnn}` puros (~71) em geral não carregam token de tipo embutido; a maioria fica sem nome, e nomes marcados *(provisório)* nesta seção são posicionais/de melhor estimativa.

#### `BOOK2_GG*` — 13 registros — gadgets e chaves

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG04_FEATHER — 帰還の翼"> `BOOK2_GG04_FEATHER` | 帰還の翼 |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG05_BLACKSMITH — クランへの修理依頼書"> `BOOK2_GG05_BLACKSMITH` | クランへの修理依頼書 |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG06_LEVELUP — 成長の実"> `BOOK2_GG06_LEVELUP` | 成長の実 |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG07_OCARINA — オカリナ"> `BOOK2_GG07_OCARINA` | オカリナ |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG08_ALSTER — アルスターの紋章"> `BOOK2_GG08_ALSTER` | アルスターの紋章 |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG15_MAP — 地図"> `BOOK2_GG15_MAP` | 地図 |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG16_COMPASS — 水晶"> `BOOK2_GG16_COMPASS` | 水晶 |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG17_STONE_COVER — タリスマン"> `BOOK2_GG17_STONE_COVER` | タリスマン |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG21_SMALLCOIN1 — カッパークレスト"> `BOOK2_GG21_SMALLCOIN1` | カッパークレスト |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG22_SMALLCOIN2 — シルバークレスト"> `BOOK2_GG22_SMALLCOIN2` | シルバークレスト |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG23_SMALLCOIN3 — ゴールドクレスト"> `BOOK2_GG23_SMALLCOIN3` | ゴールドクレスト |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG24_SMALLCOIN4 — プラチナクレスト"> `BOOK2_GG24_SMALLCOIN4` | プラチナクレスト |
| <img src="../img/icons/cls_gadget.png" width="36" title="BOOK2_GG25_KEY_GREEN — 転生の鍵"> `BOOK2_GG25_KEY_GREEN` | 転生の鍵 |

#### `BOOK2_GO*` — 3 registros — ouro

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_gold.png" width="36" title="BOOK2_GO09_COPPER — スモールバッグ"> `BOOK2_GO09_COPPER` | スモールバッグ |
| <img src="../img/icons/cls_gold.png" width="36" title="BOOK2_GO10_SILVER — バッグ"> `BOOK2_GO10_SILVER` | バッグ |
| <img src="../img/icons/cls_gold.png" width="36" title="BOOK2_GO11_GOLD — ラージバッグ"> `BOOK2_GO11_GOLD` | ラージバッグ |

#### `BOOK2_JW*` — 21 registros — joias e minérios

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW01_RUBY_ORE — ルビーの原石 — マジシャン"> `BOOK2_JW01_RUBY_ORE` | ルビーの原石 | マジシャン |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW02_DIAMOND_ORE — ダイヤモンドの原石 — マジシャンを / 召喚するためのカード"> `BOOK2_JW02_DIAMOND_ORE` | ダイヤモンドの原石 | マジシャンを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW03_TOPAZ_ORE — トパーズの原石 — ダークマジシャン"> `BOOK2_JW03_TOPAZ_ORE` | トパーズの原石 | ダークマジシャン |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW04_SAPPHIA_ORE — サファイアの原石 — ダークマジシャンを / 召喚するためのカード"> `BOOK2_JW04_SAPPHIA_ORE` | サファイアの原石 | ダークマジシャンを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW05_AQUAMARINE_ORE — アクアマリンの原石 — ネクロマンサー"> `BOOK2_JW05_AQUAMARINE_ORE` | アクアマリンの原石 | ネクロマンサー |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW06_AMETHYST_ORE — アメジストの原石 — ネクロマンサーを / 召喚するためのカード"> `BOOK2_JW06_AMETHYST_ORE` | アメジストの原石 | ネクロマンサーを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW07_EMERALD_ORE — エメラルドの原石 — ワイルドブル"> `BOOK2_JW07_EMERALD_ORE` | エメラルドの原石 | ワイルドブル |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW08_RUBY — ルビーの宝石 — ワイルドブルを / 召喚するためのカード"> `BOOK2_JW08_RUBY` | ルビーの宝石 | ワイルドブルを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW09_DIAMOND — ダイヤモンドの宝石 — ブルータルブル"> `BOOK2_JW09_DIAMOND` | ダイヤモンドの宝石 | ブルータルブル |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW10_TOPAZ — トパーズの宝石 — ブルータルブルを / 召喚するためのカード"> `BOOK2_JW10_TOPAZ` | トパーズの宝石 | ブルータルブルを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW11_SAPPHIA — サファイアの宝石 — ブラニーブル"> `BOOK2_JW11_SAPPHIA` | サファイアの宝石 | ブラニーブル |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW12_AQUAMARINE — アクアマリンの宝石 — ブラウニーブルを / 召喚するためのカード"> `BOOK2_JW12_AQUAMARINE` | アクアマリンの宝石 | ブラウニーブルを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW13_AMETHYST — アメジストの宝石 — エクスプロージョンＳ"> `BOOK2_JW13_AMETHYST` | アメジストの宝石 | エクスプロージョンＳ |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW14_EMERALD — エメラルドの宝石 — エクスプロージョンストーンを / 召喚するためのカード"> `BOOK2_JW14_EMERALD` | エメラルドの宝石 | エクスプロージョンストーンを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW15_RUBY_GORGEOUS — ルビーの塊鉱 — ラバストーン"> `BOOK2_JW15_RUBY_GORGEOUS` | ルビーの塊鉱 | ラバストーン |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW16_DIAMOND_GORGEOUS — ダイヤモンドの塊鉱 — ラバストーンを / 召喚するためのカード"> `BOOK2_JW16_DIAMOND_GORGEOUS` | ダイヤモンドの塊鉱 | ラバストーンを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW17_TOPAZ_GORGEOUS — トパーズの塊鉱 — アイスストーンを / 召喚するためのカード"> `BOOK2_JW17_TOPAZ_GORGEOUS` | トパーズの塊鉱 | アイスストーンを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW18_SAPPHIA_GORGEOUS — サファイアの塊鉱 — シーフ"> `BOOK2_JW18_SAPPHIA_GORGEOUS` | サファイアの塊鉱 | シーフ |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW19_AQUAMARINE_GORGEOUS — アクアマリンの塊鉱 — シーフを / 召喚するためのカード"> `BOOK2_JW19_AQUAMARINE_GORGEOUS` | アクアマリンの塊鉱 | シーフを / 召喚するためのカード |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW20_AMETHYST_GORGEOUS — アメジストの塊鉱 — ロバー"> `BOOK2_JW20_AMETHYST_GORGEOUS` | アメジストの塊鉱 | ロバー |
| <img src="../img/icons/cls_jewel.png" width="36" title="BOOK2_JW21_EMERALD_GORGEOUS — エメラルドの塊鉱 — ロバーを / 召喚するためのカード"> `BOOK2_JW21_EMERALD_GORGEOUS` | エメラルドの塊鉱 | ロバーを / 召喚するためのカード |

#### `BOOK2_MS*` — 24 registros — materiais e itens de status

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS01_MATERIAL — マテリアルストーン"> `BOOK2_MS01_MATERIAL` | マテリアルストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS02_FIRE — ファイアーストーン"> `BOOK2_MS02_FIRE` | ファイアーストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS03_ICE — アイスストーン"> `BOOK2_MS03_ICE` | アイスストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS04_THUNDER — サンダーストーン"> `BOOK2_MS04_THUNDER` | サンダーストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS05_HOLY — ホーリーストーン"> `BOOK2_MS05_HOLY` | ホーリーストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS06_DARK — ダークストーン"> `BOOK2_MS06_DARK` | ダークストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS07_POWER — パワーストーン"> `BOOK2_MS07_POWER` | パワーストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS08_TOUGHNESS — タフネスストーン"> `BOOK2_MS08_TOUGHNESS` | タフネスストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS09_SPEED — スピードストーン"> `BOOK2_MS09_SPEED` | スピードストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS10_GALE — ゲイルストーン"> `BOOK2_MS10_GALE` | ゲイルストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS11_MAGIC — マジックストーン"> `BOOK2_MS11_MAGIC` | マジックストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS12_MIND — マインドストーン"> `BOOK2_MS12_MIND` | マインドストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS13_LUCK — ラックストーン"> `BOOK2_MS13_LUCK` | ラックストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS14_POISON — ポイズンストーン"> `BOOK2_MS14_POISON` | ポイズンストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS15_BREAK — ブレイクストーン"> `BOOK2_MS15_BREAK` | ブレイクストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS16_SILENCE — サイレンスストーン"> `BOOK2_MS16_SILENCE` | サイレンスストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS17_PANIC — スリープストーン"> `BOOK2_MS17_PANIC` | スリープストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS18_BLEED — ブリードストーン"> `BOOK2_MS18_BLEED` | ブリードストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS19_RISE — ライズストーン — マジシャン"> `BOOK2_MS19_RISE` | ライズストーン | マジシャン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS20_SENCE — センスストーン — マジシャン"> `BOOK2_MS20_SENCE` | センスストーン | マジシャン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS21_SOUL — ソウルストーン"> `BOOK2_MS21_SOUL` | ソウルストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS22_ETHER — エーテルストーン"> `BOOK2_MS22_ETHER` | エーテルストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS23_BLIND — ブラインドストーン"> `BOOK2_MS23_BLIND` | ブラインドストーン |
| <img src="../img/icons/cls_mat.png" width="36" title="BOOK2_MS24_SLOW — スロウストーン"> `BOOK2_MS24_SLOW` | スロウストーン |

#### `BOOK2_MT*` — 55 registros — materiais de criação

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT01_WHITE — 白紙のスクロール"> `BOOK2_MT01_WHITE` | 白紙のスクロール |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT02_MGC_POWDER — 魔力の粉"> `BOOK2_MT02_MGC_POWDER` | 魔力の粉 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT03_MGC_STONE — 魔錬石"> `BOOK2_MT03_MGC_STONE` | 魔錬石 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT04_ELEM_FIRE — ファイアーエレメント"> `BOOK2_MT04_ELEM_FIRE` | ファイアーエレメント |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT05_ELEM_ICE — アイスエレメント"> `BOOK2_MT05_ELEM_ICE` | アイスエレメント |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT06_ELEM_THUNDER — サンダーエレメント"> `BOOK2_MT06_ELEM_THUNDER` | サンダーエレメント |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT07_ELEM_HOLY — 素材１"> `BOOK2_MT07_ELEM_HOLY` | 素材１ |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT08_ELEM_DARK — 仮素材2"> `BOOK2_MT08_ELEM_DARK` | 仮素材2 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT09_ORB_FIRE — ファイアーオーブ"> `BOOK2_MT09_ORB_FIRE` | ファイアーオーブ |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT10_ORB_ICE — アイスオーブ"> `BOOK2_MT10_ORB_ICE` | アイスオーブ |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT11_ORB_THUNDER — サンダーオーブ"> `BOOK2_MT11_ORB_THUNDER` | サンダーオーブ |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT12_ORB_HOLY — ホーリーオーブ"> `BOOK2_MT12_ORB_HOLY` | ホーリーオーブ |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT13_ORB_DARK — ダークオーブ"> `BOOK2_MT13_ORB_DARK` | ダークオーブ |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT14_IRON_RAW — 砂鉄"> `BOOK2_MT14_IRON_RAW` | 砂鉄 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT15_IRON — 鉄"> `BOOK2_MT15_IRON` | 鉄 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT16_IRON_INGOT — アイアンインゴット"> `BOOK2_MT16_IRON_INGOT` | アイアンインゴット |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT17_IRON_G — 仮素材3"> `BOOK2_MT17_IRON_G` | 仮素材3 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT18_LEATHER_BEAST — 獣の皮"> `BOOK2_MT18_LEATHER_BEAST` | 獣の皮 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT19_LEATHER_TANNED — なめした皮"> `BOOK2_MT19_LEATHER_TANNED` | なめした皮 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT20_POLISHER — 研磨布"> `BOOK2_MT20_POLISHER` | 研磨布 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT21_LEATHER_G — 育成の種"> `BOOK2_MT21_LEATHER_G` | 育成の種 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT22_COTTON_RAW — 木綿"> `BOOK2_MT22_COTTON_RAW` | 木綿 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT23_COTTON_CLOTH — コットンの生地"> `BOOK2_MT23_COTTON_CLOTH` | コットンの生地 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT24_COTTON_STRING — 綿糸"> `BOOK2_MT24_COTTON_STRING` | 綿糸 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT25_COTTON_G — 仮素材5"> `BOOK2_MT25_COTTON_G` | 仮素材5 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT26_TIMBER_TWIG — 小枝"> `BOOK2_MT26_TIMBER_TWIG` | 小枝 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT27_TIMBER — 木材"> `BOOK2_MT27_TIMBER` | 木材 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT28_TIMBER_BOARD — ヒヒイロカネ"> `BOOK2_MT28_TIMBER_BOARD` | ヒヒイロカネ |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT29_TIMBER_G — アボイタカラ"> `BOOK2_MT29_TIMBER_G` | アボイタカラ |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT30_ORICHALCON — オリハルコン"> `BOOK2_MT30_ORICHALCON` | オリハルコン |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT31_ADAMANTITE — アダマンタイト"> `BOOK2_MT31_ADAMANTITE` | アダマンタイト |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT32_MGC_DRAGON — 魔竜の宝玉"> `BOOK2_MT32_MGC_DRAGON` | 魔竜の宝玉 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT33_CRYSTAL_FIRE — ファイアークリスタル"> `BOOK2_MT33_CRYSTAL_FIRE` | ファイアークリスタル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT34_CRYSTAL_ICE — アイスクリスタル"> `BOOK2_MT34_CRYSTAL_ICE` | アイスクリスタル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT35_CRYSTAL_THUNDER — サンダークリスタル"> `BOOK2_MT35_CRYSTAL_THUNDER` | サンダークリスタル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT36_CRYSTAL_HOLY — ホーリークリスタル"> `BOOK2_MT36_CRYSTAL_HOLY` | ホーリークリスタル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT37_CRYSTAL_DARK — ダーククリスタル"> `BOOK2_MT37_CRYSTAL_DARK` | ダーククリスタル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT38_RING_PLANE — プレーンリング"> `BOOK2_MT38_RING_PLANE` | プレーンリング |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT39_JEWEL_FIRE — フレイムジュエル"> `BOOK2_MT39_JEWEL_FIRE` | フレイムジュエル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT40_JEWEL_ICE — フロストジュエル"> `BOOK2_MT40_JEWEL_ICE` | フロストジュエル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT41_JEWEL_THUNDER — ライトニングジュエル"> `BOOK2_MT41_JEWEL_THUNDER` | ライトニングジュエル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT42_WING — 飛翔の翼"> `BOOK2_MT42_WING` | 飛翔の翼 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT43_MGC_ROCK"> `BOOK2_MT43_MGC_ROCK` |  |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT44"> `BOOK2_MT44` |  |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT45 — 幻魔石"> `BOOK2_MT45` | 幻魔石 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT46_D4SOZAI1 — プレーンアミュレット"> `BOOK2_MT46_D4SOZAI1` | プレーンアミュレット |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT47_D4SOZAI2 — ホーリージュエル"> `BOOK2_MT47_D4SOZAI2` | ホーリージュエル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT48_D4SOZAI3 — ダークジュエル"> `BOOK2_MT48_D4SOZAI3` | ダークジュエル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT49_D4SOZAI4 — アレキサンドライト"> `BOOK2_MT49_D4SOZAI4` | アレキサンドライト |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT50_D4SOZAI5 — カーバンクル"> `BOOK2_MT50_D4SOZAI5` | カーバンクル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT51_D4SOZAI6 — アルスマグナ"> `BOOK2_MT51_D4SOZAI6` | アルスマグナ |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT52_D4SOZAI7 — 賢者の石"> `BOOK2_MT52_D4SOZAI7` | 賢者の石 |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT53_D4SOZAI8 — リアファイル"> `BOOK2_MT53_D4SOZAI8` | リアファイル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT54_D4SOZAI9 — サングリアル"> `BOOK2_MT54_D4SOZAI9` | サングリアル |
| <img src="../img/icons/cls_book2.png" width="36" title="BOOK2_MT55_D4SOZAI10 — 新規素材１０"> `BOOK2_MT55_D4SOZAI10` | 新規素材１０ |

#### `BOOK2_SC*` — 34 registros — pergaminhos

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC01_FIRE1 — ファイアーボール — ゴールドドラゴン"> `BOOK2_SC01_FIRE1` | ファイアーボール | ゴールドドラゴン |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC02_FIRE2 — フレアバースト — ゴールドドラゴンを / 召喚するためのカード"> `BOOK2_SC02_FIRE2` | フレアバースト | ゴールドドラゴンを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC03_FIRE3 — ハードインフェルノ — ホワイトドラゴン"> `BOOK2_SC03_FIRE3` | ハードインフェルノ | ホワイトドラゴン |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC04_BLAST"> `BOOK2_SC04_BLAST` |  |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC10_ICE1 — アイスブラスト — ホワイトドラゴンを / 召喚するためのカード"> `BOOK2_SC10_ICE1` | アイスブラスト | ホワイトドラゴンを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC11_ICE2 — フロストバイト — ブラックドラゴン"> `BOOK2_SC11_ICE2` | フロストバイト | ブラックドラゴン |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC12_ICE3 — ブリザード — ブラックドラゴンを / 召喚するためのカード"> `BOOK2_SC12_ICE3` | ブリザード | ブラックドラゴンを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC16_THUNDER1 — サンダーボール — レッドドラゴン"> `BOOK2_SC16_THUNDER1` | サンダーボール | レッドドラゴン |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC17_THUNDER2 — ライトニングボルト — レッドドラゴンを / 召喚するためのカード"> `BOOK2_SC17_THUNDER2` | ライトニングボルト | レッドドラゴンを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC18_THUNDER3 — サンダーストーム — ヴァンパイア"> `BOOK2_SC18_THUNDER3` | サンダーストーム | ヴァンパイア |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC22_HEAL1 — マイナーヒール — ヴァンパイアを / 召喚するためのカード"> `BOOK2_SC22_HEAL1` | マイナーヒール | ヴァンパイアを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC23_HEAL2 — ヒール — イフリート"> `BOOK2_SC23_HEAL2` | ヒール | イフリート |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC24_HEAL3 — スーパーヒール — イフリートを / 召喚するためのカード"> `BOOK2_SC24_HEAL3` | スーパーヒール | イフリートを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC28_ABSORB1 — ドレイン *(provisório)* — ワイバーン"> `BOOK2_SC28_ABSORB1` | ドレイン *(provisório)* | ワイバーン |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC29_ABSORB2 — ソウルスティール *(provisório)* — ワイバーンを / 召喚するためのカード"> `BOOK2_SC29_ABSORB2` | ソウルスティール *(provisório)* | ワイバーンを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC30_ABSORB3 — ドレインタッチ *(provisório)* — スチームシューター"> `BOOK2_SC30_ABSORB3` | ドレインタッチ *(provisório)* | スチームシューター |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC34_ULTIMET — スチームシューターを / 召喚するためのカード"> `BOOK2_SC34_ULTIMET` |  | スチームシューターを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC35_LVLDOWN — レベルダウン"> `BOOK2_SC35_LVLDOWN` | レベルダウン |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC36_POISON1 — ポイズン — スチームバトラー"> `BOOK2_SC36_POISON1` | ポイズン | スチームバトラー |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC37_SLEEP1 — スリープ — スチームバトラー"> `BOOK2_SC37_SLEEP1` | スリープ | スチームバトラー |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC38_SILENCE1 — サイレンス — スチームバトラー"> `BOOK2_SC38_SILENCE1` | サイレンス | スチームバトラー |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC39_PANIC1 — コンフューズ — スチームバトラー"> `BOOK2_SC39_PANIC1` | コンフューズ | スチームバトラー |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC41_C_POISON — キュアポイズン — スチームバトラーを / 召喚するためのカード"> `BOOK2_SC41_C_POISON` | キュアポイズン | スチームバトラーを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC42_C_SLEEP — アレイズ — スチームバトラーver.2"> `BOOK2_SC42_C_SLEEP` | アレイズ | スチームバトラーver.2 |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC43_C_SILENCE — アンチサイレンス — アーマードフロッグ"> `BOOK2_SC43_C_SILENCE` | アンチサイレンス | アーマードフロッグ |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC44_C_PANIC — キュアコンフューズ — アーマードフロッグを / 召喚するためのカード"> `BOOK2_SC44_C_PANIC` | キュアコンフューズ | アーマードフロッグを / 召喚するためのカード |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC45_C_ALL — キュアオール — ガーディアンフロッグ"> `BOOK2_SC45_C_ALL` | キュアオール | ガーディアンフロッグ |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC46_DEFUP1"> `BOOK2_SC46_DEFUP1` |  |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC47_STRUP1"> `BOOK2_SC47_STRUP1` |  |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC48_HITUP1"> `BOOK2_SC48_HITUP1` |  |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC49_DEFDW1"> `BOOK2_SC49_DEFDW1` |  |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC50_STRDW1"> `BOOK2_SC50_STRDW1` |  |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC51_HITDW1"> `BOOK2_SC51_HITDW1` |  |
| <img src="../img/icons/cls_scroll.png" width="36" title="BOOK2_SC52_SPDDW1"> `BOOK2_SC52_SPDDW1` |  |

#### `BOOK2_SK*` — 260 registros — livros de habilidade e magia

| item | nome | notas |
|---|---|---|
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK051_FIRE01 — ファイアーボール — ホーリーソード"> `BOOK2_SK051_FIRE01` | ファイアーボール | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK052_FIRE02 — フレアバースト — ホーリーソード"> `BOOK2_SK052_FIRE02` | フレアバースト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK053_FIRE03 — ハードインフェルノ — ホーリーソード"> `BOOK2_SK053_FIRE03` | ハードインフェルノ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK054_FIRE04 — コンバージファイアー — ホーリーソード"> `BOOK2_SK054_FIRE04` | コンバージファイアー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK055_FIRE05 — コンバージフレイム — ホーリーソード"> `BOOK2_SK055_FIRE05` | コンバージフレイム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK056_FIRE06 — コンバージインフェルノ — ホーリーソード"> `BOOK2_SK056_FIRE06` | コンバージインフェルノ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK057_FIRE07 — ファイアースピリット — ホーリーソード"> `BOOK2_SK057_FIRE07` | ファイアースピリット | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK058_FIRE08 — フレイムスピリット — ホーリーソード"> `BOOK2_SK058_FIRE08` | フレイムスピリット | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK059_FIRE09 — サラマンダースピリット — ホーリーソード"> `BOOK2_SK059_FIRE09` | サラマンダースピリット | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK060_FIRE10 — エクスプロージョン — ホーリーソード"> `BOOK2_SK060_FIRE10` | エクスプロージョン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK061_FIRE11 — フレイムインフェルノ — ホーリーソード"> `BOOK2_SK061_FIRE11` | フレイムインフェルノ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK062_FIRE12 — ボルケーノ — ホーリーソード"> `BOOK2_SK062_FIRE12` | ボルケーノ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK063_ICE01 — アイスブラスト — ホーリーソード"> `BOOK2_SK063_ICE01` | アイスブラスト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK064_ICE02 — フロストバイト — ホーリーソード"> `BOOK2_SK064_ICE02` | フロストバイト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK065_ICE03 — ブリザード — ホーリーソード"> `BOOK2_SK065_ICE03` | ブリザード | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK066_ICE04 — アイススラッシュ — ホーリーソード"> `BOOK2_SK066_ICE04` | アイススラッシュ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK067_ICE05 — フロストスラッシュ — ホーリーソード"> `BOOK2_SK067_ICE05` | フロストスラッシュ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK068_ICE06 — ブリザードスラッシュ — ホーリーソード"> `BOOK2_SK068_ICE06` | ブリザードスラッシュ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK069_ICE07 — アイスウインド — ホーリーソード"> `BOOK2_SK069_ICE07` | アイスウインド | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK070_ICE08 — アイスストーム — ホーリーソード"> `BOOK2_SK070_ICE08` | アイスストーム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK071_ICE09 — アイスブリザード — ホーリーソード"> `BOOK2_SK071_ICE09` | アイスブリザード | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK072_ICE10 — Ｓストームインパクト — ホーリーソード"> `BOOK2_SK072_ICE10` | Ｓストームインパクト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK073_ICE11 — フリーズインパクト — ホーリーソード"> `BOOK2_SK073_ICE11` | フリーズインパクト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK074_ICE12 — ブリザードインパクト — ホーリーソード"> `BOOK2_SK074_ICE12` | ブリザードインパクト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK075_THUNDER01 — サンダーボール — ホーリーソード"> `BOOK2_SK075_THUNDER01` | サンダーボール | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK076_THUNDER02 — ライトニングボルト — ホーリーソード"> `BOOK2_SK076_THUNDER02` | ライトニングボルト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK077_THUNDER03 — サンダーストーム — ホーリーソード"> `BOOK2_SK077_THUNDER03` | サンダーストーム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK078_THUNDER04 — ライトニングチェイン — ホーリーソード"> `BOOK2_SK078_THUNDER04` | ライトニングチェイン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK079_THUNDER05 — サンダーチェイン — ホーリーソード"> `BOOK2_SK079_THUNDER05` | サンダーチェイン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK080_THUNDER06 — Ｔサンダーチェイン — ホーリーソード"> `BOOK2_SK080_THUNDER06` | Ｔサンダーチェイン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK081_THUNDER07 — ライトニングストーム — ホーリーソード"> `BOOK2_SK081_THUNDER07` | ライトニングストーム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK082_THUNDER08 — ライトニングトルネード — ホーリーソード"> `BOOK2_SK082_THUNDER08` | ライトニングトルネード | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK083_THUNDER09 — ライトニングテンペスト — ホーリーソード"> `BOOK2_SK083_THUNDER09` | ライトニングテンペスト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK084_THUNDER10 — 雷神の鉄槌 — ホーリーソード"> `BOOK2_SK084_THUNDER10` | 雷神の鉄槌 | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK085_THUNDER11 — 雷帝の鉄槌Ⅱ — ホーリーソード"> `BOOK2_SK085_THUNDER11` | 雷帝の鉄槌Ⅱ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK086_THUNDER12 — 雷帝の鉄槌Ⅲ — ホーリーソード"> `BOOK2_SK086_THUNDER12` | 雷帝の鉄槌Ⅲ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK087_POISON01 — ポイズン — ホーリーソード"> `BOOK2_SK087_POISON01` | ポイズン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK088_SLEEP01 — スリープ — ホーリーソード"> `BOOK2_SK088_SLEEP01` | スリープ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK089_PANIC01 — コンフューズ — ホーリーソード"> `BOOK2_SK089_PANIC01` | コンフューズ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK090_STONE01 — ストーン — ホーリーソード"> `BOOK2_SK090_STONE01` | ストーン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK091_POISON02 — アシッドレイン — ホーリーソード"> `BOOK2_SK091_POISON02` | アシッドレイン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK092_STUN01 — ショックウェーブ — ホーリーソード"> `BOOK2_SK092_STUN01` | ショックウェーブ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK093 — 旧ロードオブファランクス — ホーリーソード"> `BOOK2_SK093` | 旧ロードオブファランクス | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK094_HOLY01 — ホーリーアロー — ホーリーソード"> `BOOK2_SK094_HOLY01` | ホーリーアロー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK095_HOLY02 — ホーリーライトニング — ホーリーソード"> `BOOK2_SK095_HOLY02` | ホーリーライトニング | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK096_HOLY03 — ホーリーボルト — ホーリーソード"> `BOOK2_SK096_HOLY03` | ホーリーボルト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK097_HEAL01 — マイナーヒーリング — ホーリーソード"> `BOOK2_SK097_HEAL01` | マイナーヒーリング | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK098_HEAL02 — ヒーリング — ホーリーソード"> `BOOK2_SK098_HEAL02` | ヒーリング | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK099_HEAL03 — スーパーヒーリング — ホーリーソード"> `BOOK2_SK099_HEAL03` | スーパーヒーリング | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK100_HEAL04 — マイナーヒールノヴァ — ホーリーソード"> `BOOK2_SK100_HEAL04` | マイナーヒールノヴァ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK101_HEAL05 — ヒールノヴァ — ホーリーソード"> `BOOK2_SK101_HEAL05` | ヒールノヴァ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK102_HEAL06 — スーパーヒールノヴァ — ホーリーソード"> `BOOK2_SK102_HEAL06` | スーパーヒールノヴァ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK103_HEAL07 — Ｍヒールインパクト — ホーリーソード"> `BOOK2_SK103_HEAL07` | Ｍヒールインパクト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK104_HEAL08 — ヒールインパクト — ホーリーソード"> `BOOK2_SK104_HEAL08` | ヒールインパクト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK105_HEAL09 — Ｓヒールインパクト — ホーリーソード"> `BOOK2_SK105_HEAL09` | Ｓヒールインパクト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK106_SILENT01 — サイレンス — ホーリーソード"> `BOOK2_SK106_SILENT01` | サイレンス | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK107_C_POISON01 — キュアポイズン — ホーリーソード"> `BOOK2_SK107_C_POISON01` | キュアポイズン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK108_C_SLEEP01 — アレイズ — ホーリーソード"> `BOOK2_SK108_C_SLEEP01` | アレイズ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK109_C_SILENT01 — アンチサイレンス — ホーリーソード"> `BOOK2_SK109_C_SILENT01` | アンチサイレンス | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK110_C_PANIC01 — キュアコンフューズ — ホーリーソード"> `BOOK2_SK110_C_PANIC01` | キュアコンフューズ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK111_C_ALL01 — キュアオール — ホーリーソード"> `BOOK2_SK111_C_ALL01` | キュアオール | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK112_STRUP01 — ソングオブパワー — ホーリーソード"> `BOOK2_SK112_STRUP01` | ソングオブパワー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK113_STRUP02 — ソングオブバトル — ホーリーソード"> `BOOK2_SK113_STRUP02` | ソングオブバトル | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK114_STRUP03 — ソングオブウォー — ホーリーソード"> `BOOK2_SK114_STRUP03` | ソングオブウォー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK115_DEFUP01 — シールド — ホーリーソード"> `BOOK2_SK115_DEFUP01` | シールド | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK116_DEFUP02 — プロテクション — ホーリーソード"> `BOOK2_SK116_DEFUP02` | プロテクション | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK117_DEFUP03 — ディバイン — ホーリーソード"> `BOOK2_SK117_DEFUP03` | ディバイン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK118_STRDW01 — パワーダウン — ホーリーソード"> `BOOK2_SK118_STRDW01` | パワーダウン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK119_STRDW02 — ロストパワー — ホーリーソード"> `BOOK2_SK119_STRDW02` | ロストパワー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK120_STRDW03 — ウィークネス — ホーリーソード"> `BOOK2_SK120_STRDW03` | ウィークネス | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK121_DEFDW01 — エネバート — ホーリーソード"> `BOOK2_SK121_DEFDW01` | エネバート | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK122 — 旧エンフィーブル *(provisório)* — ホーリーソード"> `BOOK2_SK122` | 旧エンフィーブル *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK123_DEFDW03 — ウィーケニング — ホーリーソード"> `BOOK2_SK123_DEFDW03` | ウィーケニング | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK124_BODY01 — ヒートボディ — ホーリーソード"> `BOOK2_SK124_BODY01` | ヒートボディ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK125_BODY02 — パーマネンス *(provisório)* — ホーリーソード"> `BOOK2_SK125_BODY02` | パーマネンス *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK128_BOMB — ボム — ホーリーソード"> `BOOK2_SK128_BOMB` | ボム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK129_BOMB_STUN — スタンボム — ホーリーソード"> `BOOK2_SK129_BOMB_STUN` | スタンボム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK130_BOMB_POISON — ポイズンボム — ホーリーソード"> `BOOK2_SK130_BOMB_POISON` | ポイズンボム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK131_MINE01 — マイン — ホーリーソード"> `BOOK2_SK131_MINE01` | マイン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK132_MINE02 — アンブッシュ *(provisório)* — ホーリーソード"> `BOOK2_SK132_MINE02` | アンブッシュ *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK133_MINE03 — サイレントキル *(provisório)* — ホーリーソード"> `BOOK2_SK133_MINE03` | サイレントキル *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK134_INVISIBLE — インビジブル — ホーリーソード"> `BOOK2_SK134_INVISIBLE` | インビジブル | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK135_STONE_COVER — プレディクト *(provisório)* — ホーリーソード"> `BOOK2_SK135_STONE_COVER` | プレディクト *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK136_IMPASSE — ディティクト *(provisório)* — ホーリーソード"> `BOOK2_SK136_IMPASSE` | ディティクト *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK137_QUAKE1 — グランドシェイカー — ホーリーソード"> `BOOK2_SK137_QUAKE1` | グランドシェイカー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK138_QUAKE2 — アースクェイク — ホーリーソード"> `BOOK2_SK138_QUAKE2` | アースクェイク | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK139_QUAKE3 — レイジングガイア — ホーリーソード"> `BOOK2_SK139_QUAKE3` | レイジングガイア | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK140_FIREWALL1 — ファイアーウォール — ホーリーソード"> `BOOK2_SK140_FIREWALL1` | ファイアーウォール | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK141_FIREWALL2 — ファイアーウォール２ — ホーリーソード"> `BOOK2_SK141_FIREWALL2` | ファイアーウォール２ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK142_FIREWALL3 — ファイアーウォール３ — ホーリーソード"> `BOOK2_SK142_FIREWALL3` | ファイアーウォール３ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK143_NOATTACK — ソリチュード *(provisório)* — ホーリーソード"> `BOOK2_SK143_NOATTACK` | ソリチュード *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK144_LVLDOWN — レベルダウン — ホーリーソード"> `BOOK2_SK144_LVLDOWN` | レベルダウン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK145_VITUP01 — グレイス *(provisório)* — ホーリーソード"> `BOOK2_SK145_VITUP01` | グレイス *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK146_DEXUP01 — クイックネス — ホーリーソード"> `BOOK2_SK146_DEXUP01` | クイックネス | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK147_AGIUP01 — スウィットネス — ホーリーソード"> `BOOK2_SK147_AGIUP01` | スウィットネス | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK148_INTUP01 — オーラ *(provisório)* — ホーリーソード"> `BOOK2_SK148_INTUP01` | オーラ *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK149_MNDUP01 — ホーリーソード"> `BOOK2_SK149_MNDUP01` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK150_LUCUP01 — ラック — ホーリーソード"> `BOOK2_SK150_LUCUP01` | ラック | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK211_SPEEDUP — スピードアップ — ホーリーソード"> `BOOK2_SK211_SPEEDUP` | スピードアップ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK212_ATKUP01 — コンセントレーション *(provisório)* — ホーリーソード"> `BOOK2_SK212_ATKUP01` | コンセントレーション *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK317_GRAPPLE — グラップル — ホーリーソード"> `BOOK2_SK317_GRAPPLE` | グラップル | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK322_MANADRAIN — マナドレイン — ホーリーソード"> `BOOK2_SK322_MANADRAIN` | マナドレイン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK323_ENFEEBLE — エンフィーブル — ホーリーソード"> `BOOK2_SK323_ENFEEBLE` | エンフィーブル | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK324 — 旧エンハンスマジック *(provisório)* — ホーリーソード"> `BOOK2_SK324` | 旧エンハンスマジック *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK329_HEAL06 — ホーリーソード"> `BOOK2_SK329_HEAL06` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK330_RAPID — ラピッドムーブ — ホーリーソード"> `BOOK2_SK330_RAPID` | ラピッドムーブ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK331_HOLY06 — セイクレッドクラスター *(provisório)* — ホーリーソード"> `BOOK2_SK331_HOLY06` | セイクレッドクラスター *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK332_HOLY05 — セイクレッドサークル *(provisório)* — ホーリーソード"> `BOOK2_SK332_HOLY05` | セイクレッドサークル *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK333_DULLNESS — ダルネス — ホーリーソード"> `BOOK2_SK333_DULLNESS` | ダルネス | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK335_SNARE — シャドウスネア — ホーリーソード"> `BOOK2_SK335_SNARE` | シャドウスネア | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK336 — 旧サイレントフラッシュ *(provisório)* — ホーリーソード"> `BOOK2_SK336` | 旧サイレントフラッシュ *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK340_ARMS — アームズ — ホーリーソード"> `BOOK2_SK340_ARMS` | アームズ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK351_DEMONIC — デモニックレイド — ホーリーソード"> `BOOK2_SK351_DEMONIC` | デモニックレイド | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK352_GRAVITY — グラビティフィールド — ホーリーソード"> `BOOK2_SK352_GRAVITY` | グラビティフィールド | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK353_VENOM — ベノム — ホーリーソード"> `BOOK2_SK353_VENOM` | ベノム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK354_DARKFLARE — ダークフレア — ホーリーソード"> `BOOK2_SK354_DARKFLARE` | ダークフレア | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK355_JAVELIN — アイスジャベリン — ホーリーソード"> `BOOK2_SK355_JAVELIN` | アイスジャベリン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK359_HOLYSTREAM — ホーリーストリーム — ホーリーソード"> `BOOK2_SK359_HOLYSTREAM` | ホーリーストリーム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK360_DESIRE — ソングオブデザイア — ホーリーソード"> `BOOK2_SK360_DESIRE` | ソングオブデザイア | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK362_FANG — タイガーファング — ホーリーソード"> `BOOK2_SK362_FANG` | タイガーファング | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK363_BLASTARROW — ブラストアロー — ホーリーソード"> `BOOK2_SK363_BLASTARROW` | ブラストアロー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK367_POISON_EN — エンチャントポイズン — ホーリーソード"> `BOOK2_SK367_POISON_EN` | エンチャントポイズン | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK388_BODY01_EX — ヒートボディＥＸ — ホーリーソード"> `BOOK2_SK388_BODY01_EX` | ヒートボディＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK389_ATKUP01_EX — コンセントレーションＥＸ *(provisório)* — ホーリーソード"> `BOOK2_SK389_ATKUP01_EX` | コンセントレーションＥＸ *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK390_SPEEDUP_EX — スピードアップＥＸ — ホーリーソード"> `BOOK2_SK390_SPEEDUP_EX` | スピードアップＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK391 — 旧クロノストライフＥＸ — ホーリーソード"> `BOOK2_SK391` | 旧クロノストライフＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK392_FIRE04_EX — コンバージファイアーＥＸ — ホーリーソード"> `BOOK2_SK392_FIRE04_EX` | コンバージファイアーＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK393_FIRE11_EX — フレイムインフェルノＥＸ — ホーリーソード"> `BOOK2_SK393_FIRE11_EX` | フレイムインフェルノＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK394_FIRE03_EX — ハードインフェルノＥＸ — ホーリーソード"> `BOOK2_SK394_FIRE03_EX` | ハードインフェルノＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK395_FIRE09_EX — サラマンダースピリットＥＸ — ホーリーソード"> `BOOK2_SK395_FIRE09_EX` | サラマンダースピリットＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK396_ICE04_EX — アイススラッシュＥＸ — ホーリーソード"> `BOOK2_SK396_ICE04_EX` | アイススラッシュＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK397_ICE11_EX — フリーズインパクトＥＸ — ホーリーソード"> `BOOK2_SK397_ICE11_EX` | フリーズインパクトＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK398_ICE03_EX — ブリザードＥＸ — ホーリーソード"> `BOOK2_SK398_ICE03_EX` | ブリザードＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK399_ICE09_EX — アイスブリザードＥＸ — ホーリーソード"> `BOOK2_SK399_ICE09_EX` | アイスブリザードＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK401_TORNADO01 — ホーリーウィンド — ホーリーソード"> `BOOK2_SK401_TORNADO01` | ホーリーウィンド | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK402_TORNADO02 — ホーリートルネード — ホーリーソード"> `BOOK2_SK402_TORNADO02` | ホーリートルネード | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK403_TORNADO03 — ホーリーストーム — ホーリーソード"> `BOOK2_SK403_TORNADO03` | ホーリーストーム | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK404_HOLY04 — セイクレッドフォース *(provisório)* — ホーリーソード"> `BOOK2_SK404_HOLY04` | セイクレッドフォース *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK405_HOLY05 — ホーリー範囲魔法攻撃Ⅱ *(provisório)* — ホーリーソード"> `BOOK2_SK405_HOLY05` | ホーリー範囲魔法攻撃Ⅱ *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK406_HOLY06 — ホーリー範囲魔法攻撃Ⅲ *(provisório)* — ホーリーソード"> `BOOK2_SK406_HOLY06` | ホーリー範囲魔法攻撃Ⅲ *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK407_SAINT01 — セイントライト — ホーリーソード"> `BOOK2_SK407_SAINT01` | セイントライト | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK408_SAINT02 — セイントブレス — ホーリーソード"> `BOOK2_SK408_SAINT02` | セイントブレス | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK409_SAINT03 — セイントティアー — ホーリーソード"> `BOOK2_SK409_SAINT03` | セイントティアー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK410 — ホーリーソード"> `BOOK2_SK410` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK411 — ホーリーソード"> `BOOK2_SK411` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK412 — ホーリーソード"> `BOOK2_SK412` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK413 — ホーリーソード"> `BOOK2_SK413` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK414 — ホーリーソード"> `BOOK2_SK414` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK415 — ホーリーソード"> `BOOK2_SK415` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK416 — ホーリーソード"> `BOOK2_SK416` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK417 — ホーリーソード"> `BOOK2_SK417` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK418 — ホーリーソード"> `BOOK2_SK418` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK419 — ホーリーソード"> `BOOK2_SK419` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK420_SHIELDBASH — シールドバッシュ — ホーリーソード"> `BOOK2_SK420_SHIELDBASH` | シールドバッシュ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK421 — ホーリーソード"> `BOOK2_SK421` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK422 — ホーリーソード"> `BOOK2_SK422` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK423 — ホーリーソード"> `BOOK2_SK423` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK424 — ホーリーソード"> `BOOK2_SK424` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK425 — ホーリーソード"> `BOOK2_SK425` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK426 — ホーリーソード"> `BOOK2_SK426` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK427 — ホーリーソード"> `BOOK2_SK427` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK428 — ホーリーソード"> `BOOK2_SK428` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK429 — ホーリーソード"> `BOOK2_SK429` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK430 — ホーリーソード"> `BOOK2_SK430` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK431 — ホーリーソード"> `BOOK2_SK431` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK432 — ホーリーソード"> `BOOK2_SK432` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK433 — ホーリーソード"> `BOOK2_SK433` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK434 — ホーリーソード"> `BOOK2_SK434` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK435 — ホーリーソード"> `BOOK2_SK435` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK436 — ホーリーソード"> `BOOK2_SK436` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK437 — ホーリーソード"> `BOOK2_SK437` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK438 — ホーリーソード"> `BOOK2_SK438` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK439 — ホーリーソード"> `BOOK2_SK439` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK440 — ホーリーソード"> `BOOK2_SK440` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK441 — ホーリーソード"> `BOOK2_SK441` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK442 — ホーリーソード"> `BOOK2_SK442` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK443 — ホーリーソード"> `BOOK2_SK443` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK444 — ホーリーソード"> `BOOK2_SK444` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK445 — ホーリーソード"> `BOOK2_SK445` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK446 — ホーリーソード"> `BOOK2_SK446` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK447 — ホーリーソード"> `BOOK2_SK447` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK448 — ホーリーソード"> `BOOK2_SK448` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK449 — ホーリーソード"> `BOOK2_SK449` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK450 — ホーリーソード"> `BOOK2_SK450` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK451_REGIST_FIRE — レジストファイアー — ホーリーソード"> `BOOK2_SK451_REGIST_FIRE` | レジストファイアー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK452_REGIST_ICE — レジストアイス — ホーリーソード"> `BOOK2_SK452_REGIST_ICE` | レジストアイス | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK453_REGIST_THUNDER — レジストサンダー — ホーリーソード"> `BOOK2_SK453_REGIST_THUNDER` | レジストサンダー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK454_REGIST_HOLY — レジストホーリー — ホーリーソード"> `BOOK2_SK454_REGIST_HOLY` | レジストホーリー | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK455_REGIST_DARK — レジストダーク — ホーリーソード"> `BOOK2_SK455_REGIST_DARK` | レジストダーク | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK456 — 旧クロノストライフ — ホーリーソード"> `BOOK2_SK456` | 旧クロノストライフ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK457_MPRATIO — ソウルリザレクション — ホーリーソード"> `BOOK2_SK457_MPRATIO` | ソウルリザレクション | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK458_PROVOKE1 — プロボーク — ホーリーソード"> `BOOK2_SK458_PROVOKE1` | プロボーク | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK459_PROVOKE2 — ルアー *(provisório)* — ホーリーソード"> `BOOK2_SK459_PROVOKE2` | ルアー *(provisório)* | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK460 — ホーリーソード"> `BOOK2_SK460` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK461 — ホーリーソード"> `BOOK2_SK461` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK462 — ホーリーソード"> `BOOK2_SK462` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK463 — ホーリーソード"> `BOOK2_SK463` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK464 — ホーリーソード"> `BOOK2_SK464` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK465 — ホーリーソード"> `BOOK2_SK465` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK466 — ホーリーソード"> `BOOK2_SK466` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK467 — ホーリーソード"> `BOOK2_SK467` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK468 — ホーリーソード"> `BOOK2_SK468` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK469 — ホーリーソード"> `BOOK2_SK469` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK470_MAGE01 — ホーリーソード"> `BOOK2_SK470_MAGE01` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK471_MAGE02 — ホーリーソード"> `BOOK2_SK471_MAGE02` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK472_MAGE03 — ホーリーソード"> `BOOK2_SK472_MAGE03` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK473 — ホーリーソード"> `BOOK2_SK473` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK474 — ホーリーソード"> `BOOK2_SK474` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK475 — ホーリーソード"> `BOOK2_SK475` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK476 — ホーリーソード"> `BOOK2_SK476` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK477 — ホーリーソード"> `BOOK2_SK477` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK478 — ホーリーソード"> `BOOK2_SK478` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK479 — ホーリーソード"> `BOOK2_SK479` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK480_BISHOP01 — ホーリーソード"> `BOOK2_SK480_BISHOP01` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK481_BISHOP02 — ホーリーソード"> `BOOK2_SK481_BISHOP02` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK482_BISHOP03 — ホーリーソード"> `BOOK2_SK482_BISHOP03` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK483 — ホーリーソード"> `BOOK2_SK483` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK484 — ホーリーソード"> `BOOK2_SK484` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK485 — ホーリーソード"> `BOOK2_SK485` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK486 — ホーリーソード"> `BOOK2_SK486` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK487 — ホーリーソード"> `BOOK2_SK487` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK488 — ホーリーソード"> `BOOK2_SK488` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK489 — ホーリーソード"> `BOOK2_SK489` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK490_BANDIT01 — ホーリーソード"> `BOOK2_SK490_BANDIT01` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK491 — ホーリーソード"> `BOOK2_SK491` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK492 — ホーリーソード"> `BOOK2_SK492` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK493 — ホーリーソード"> `BOOK2_SK493` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK494 — ホーリーソード"> `BOOK2_SK494` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK495 — ホーリーソード"> `BOOK2_SK495` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK496 — ホーリーソード"> `BOOK2_SK496` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK497 — ホーリーソード"> `BOOK2_SK497` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK498 — ホーリーソード"> `BOOK2_SK498` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK499 — ホーリーソード"> `BOOK2_SK499` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK500 — ホーリーソード"> `BOOK2_SK500` |  | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK501_THUNDER04_EX — ライトニングチェインＥＸ — ホーリーソード"> `BOOK2_SK501_THUNDER04_EX` | ライトニングチェインＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK502_THUNDER10_EX — 雷神の鉄槌ＥＸ — ホーリーソード"> `BOOK2_SK502_THUNDER10_EX` | 雷神の鉄槌ＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK503_THUNDER03_EX — サンダーストームＥＸ — ホーリーソード"> `BOOK2_SK503_THUNDER03_EX` | サンダーストームＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK504_THUNDER09_EX — ライトニングテンペストＥＸ — ホーリーソード"> `BOOK2_SK504_THUNDER09_EX` | ライトニングテンペストＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK505_POISON02_EX — アシッドレインＥＸ — ホーリーソード"> `BOOK2_SK505_POISON02_EX` | アシッドレインＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK506_MPRATIO_EX — ソウルリザレクションＥＸ — ホーリーソード"> `BOOK2_SK506_MPRATIO_EX` | ソウルリザレクションＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK507_QUAKE2_EX — アースクェイクＥＸ — ホーリーソード"> `BOOK2_SK507_QUAKE2_EX` | アースクェイクＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK513_STUN01_EX — ショックウェーブＥＸ — ホーリーソード"> `BOOK2_SK513_STUN01_EX` | ショックウェーブＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK514_HOLY02_EX — ホーリーライトニングＥＸ — ホーリーソード"> `BOOK2_SK514_HOLY02_EX` | ホーリーライトニングＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK515_TORNADO03_EX — ホーリーストームＥＸ — ホーリーソード"> `BOOK2_SK515_TORNADO03_EX` | ホーリーストームＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK517_HEAL07_EX — ＭヒールインパクトＥＸ — ホーリーソード"> `BOOK2_SK517_HEAL07_EX` | ＭヒールインパクトＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK518_HEAL02_EX — ヒーリングＥＸ — ホーリーソード"> `BOOK2_SK518_HEAL02_EX` | ヒーリングＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK519_HEAL05_EX — ヒールノヴァＥＸ — ホーリーソード"> `BOOK2_SK519_HEAL05_EX` | ヒールノヴァＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK520_HEAL03_EX — スーパーヒーリングＥＸ — ホーリーソード"> `BOOK2_SK520_HEAL03_EX` | スーパーヒーリングＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK521_DEXUP01_EX — クイックネスＥＸ — ホーリーソード"> `BOOK2_SK521_DEXUP01_EX` | クイックネスＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK522_AGIUP01_EX — スウィットネスＥＸ — ホーリーソード"> `BOOK2_SK522_AGIUP01_EX` | スウィットネスＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK523_STRUP02_EX — ソングオブバトルＥＸ — ホーリーソード"> `BOOK2_SK523_STRUP02_EX` | ソングオブバトルＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK524 — 旧ロードオブファランクスＥＸ — ホーリーソード"> `BOOK2_SK524` | 旧ロードオブファランクスＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK533_MINE01_EX — マインＥＸ — ホーリーソード"> `BOOK2_SK533_MINE01_EX` | マインＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK534_BOMB_STUN_EX — スタンボムＥＸ — ホーリーソード"> `BOOK2_SK534_BOMB_STUN_EX` | スタンボムＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK535_FANG_EX — タイガーファングＥＸ — ホーリーソード"> `BOOK2_SK535_FANG_EX` | タイガーファングＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK537_IMPASSE_EX — ディティクトＥＸ — ホーリーソード"> `BOOK2_SK537_IMPASSE_EX` | ディティクトＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK538_STONE_COVER_EX — プレディクトＥＸ — ホーリーソード"> `BOOK2_SK538_STONE_COVER_EX` | プレディクトＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK539_INVISIBLE_EX — インビジブルＥＸ — ホーリーソード"> `BOOK2_SK539_INVISIBLE_EX` | インビジブルＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK540_LUCUP01_EX — ラックＥＸ — ホーリーソード"> `BOOK2_SK540_LUCUP01_EX` | ラックＥＸ | ホーリーソード |
| <img src="../img/icons/cls_book.png" width="36" title="BOOK2_SK543_POISON_EN_EX — エンチャントポイズンＥＸ — ホーリーソード"> `BOOK2_SK543_POISON_EN_EX` | エンチャントポイズンＥＸ | ホーリーソード |

### Tabelas legadas v1.x (resumo)

| tabela | registros | mistura de prefixos (topo) |
|---|---|---|
| `weapon` | 76 | ? ×76 |
| `armor` | 29 | ? ×29 |
| `helm` | 24 | ? ×24 |
| `boots` | 18 | ? ×18 |
| `shield` | 15 | ? ×15 |
| `acces` | 21 | ? ×21 |
| `potion` | 16 | ? ×16 |
| `food` | 8 | ? ×8 |
| `book` | 39 | ? ×39 |

Outras tabelas pequenas no dump: `versus` (3), `offline` (7), `o41` (7), `t` (24), `36` (11), `law` (4), `hield` (5) — registros de modo VS, missão offline, objeto/armadilha e papel desconhecido.
