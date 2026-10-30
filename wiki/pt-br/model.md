[EN](../en/model.md) | [JA](../ja/model.md) | [PT-BR](../pt-br/model.md)

# Reconstrução de Modelo

> Fonte: `media/object/pack_cha_*.bin`, `media/motion/bone_cha_*.bin`,
> `media/motion/mot_cha_*.bin`, `media/mothead/mothead_*.bin` — trabalho em andamento

> Log ao vivo da reconstrução do **modelo do jogador HIM**
> (`pack_cha_him.bin`): o container cozido do personagem, seu rig de 85
> ossos e o esforço contínuo de remontar a malha skinned. Os renders
> abaixo são saída real do decodificador — estágios iniciais mostram
> geometria bruta/desorientada, estágios posteriores convergem para o
> corpo. Veja FINDINGS.md para notas em nível de byte.

## Containers de assets

| arquivo | papel |
|---|---|
| `pack_cha_*.bin` | container cozido: geometria + skin + texturas XPR |
| `bone_cha_*.bin` | esqueleto (85 ossos nomeados) + tabela de links/remap |
| `mothead_cha_*.bin` | índice de animação (pares de offset para o `.mot`) |
| `mot_cha_*.bin` | curvas de animação — chaves Hermite fp16, 1416 clips |

## Galeria de progresso

### Primeiros vértices decodificados

As seções rígidas `_S_` cederam primeiro: `ear_verts` mostra a nuvem de
vértices da peça da orelha (8 testes de projeção) após localizar o
layout `{pos3, pkNormal, uv1, uv2}` de stride 0x18.

![ear vertices](../img/model/ear_verts.png)

### Triangulação de seção

Cada seção carrega um index buffer u16 com restarts de strip `0xFFFE`.
Um render inicial de triangle-list (`sec_trilist`) mostra o embaralho
característico antes de fixar o offset do vertex stream (`voff`/`vsz`).

![section trilist](../img/model/sec_trilist.png)

### Esqueleto — resolvido

`bone_cha_him.bin` = 85 ossos nomeados (romaji: `kosi`=quadril,
`hiza`=joelho, `asi`=pé, `ude`=braço, `kata`=ombro, `kubi`=pescoço,
`kao`=rosto, `mune`=peito, `hara`=barriga, `buki`=arma). O array u16 de
84 entradas no header é a tabela de links filhos; `f30`/`f34` retornam
os filhos de cada osso.

Ossos armazenados desdobrados ao longo de +X (`bones_raw`) — o rig é uma
**cadeia de solver IK**, não um esqueleto FK, então composição euler
simples colapsa (`skel_zyx` tentativa intermediária). `skel_solved`
mostra a hierarquia humanoide recuperada em projeção x–y e z–y.

| | |
|---|---|
| ![raw bones](../img/model/bones_raw.png) | ![zyx attempt](../img/model/skel_zyx.png) |

![solved skeleton](../img/model/skel_solved.png)

### Montagem de peças

O pack se divide em peças nomeadas — `HIM_{variant}{LOD}_{bone}_wgt`
(skinned) e `HIM_S_{bone}` (caps de junta rígidas, 19 peças cobrindo o
corpo). As primeiras montagens (`him_assembled`, `him_body_*`) recuperam
um tronco reconhecível — cabeça, braços em T-pose, torso — com a dobra
das pernas ainda errada.

| | |
|---|---|
| ![assembled pieces](../img/model/him_assembled.png) | ![body render](../img/model/him_body_render.png) |

![body side](../img/model/him_body_side.png)

### O muro do bind-pose

Os vértices skinned `_wgt` são **bone-local**: renderizados crus
colapsam na origem (`all_raw`). Posicionamento real precisa das bind
matrices — o rig é dirigido por IK, então o bind pose deve vir do solver
de runtime ou das paletas de matrizes `type-0` dentro do pack.

| | |
|---|---|
| ![collapsed verts](../img/model/all_raw.png) | ![manual layout](../img/model/body_manual.png) |

### Iterações mais recentes do corpo

Montagem anatômica manual dos caps `_S_` + fragmentos `_wgt` válidos
(`bv2` → `bv4`): proporções humanoides emergem (~1,8 m, quadril a 1,02 m)
enquanto o twist por peça e o posicionamento das pernas permanecem
incorretos até as transforms de bind reais.

| | |
|---|---|
| ![v2 front](../img/model/bv2_front.png) | ![v2 ¾](../img/model/bv2_q34.png) |
| ![v4 front](../img/model/bv4_front.png) | ![v4 side](../img/model/bv4_side.png) |

### Peças de skin e armadura

Iterações mais recentes — peças weighted/skin decodificadas mais
a fundo e partes de armadura posicionadas. `wgt_raw` mostra os
vértices `_wgt` ainda agrupados, `stick_up` a cadeia de esqueleto
de pé, `model_up_*` montagens coloridas por peça, `final_*` a
tentativa mais nova de corpo inteiro, `zb_*` renders de
profundidade (z-buffer), `skinned`/`armor_render` peças com
textura e `godot_render` a malha dentro do Godot.

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

## Estado atual

| etapa | status |
|---|---|
| layout do container pack | resolvido — root index, tabelas de seção, paletas de matrizes |
| vertex streams | resolvido — strides `_wgt` 0x24 / `_S_` 0x18 |
| nomeação de peças | resolvido — personagem modular (9 variantes × LODs) |
| hierarquia do esqueleto | resolvido — 85 ossos, tabela de links verificada |
| formato de animação | resolvido — tabela de clips, chaves de curva Hermite fp16 |
| bind pose | **aberto** — rig IK; precisa do solver ou encadeamento de paletas |
| montagem do corpo skinned | em progresso — caps `_S_` posicionados, `_wgt` pendente |
