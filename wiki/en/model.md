[EN](../en/model.md) | [JA](../ja/model.md) | [PT-BR](../pt-br/model.md)

# Model Reconstruction

> Source: `media/object/pack_cha_*.bin`, `media/motion/bone_cha_*.bin`,
> `media/motion/mot_cha_*.bin`, `media/mothead/mothead_*.bin` — work in progress

> Live reconstruction log for the **HIM player model** (`pack_cha_him.bin`):
> the cooked character container, its 85-bone rig, and the ongoing effort to
> reassemble the skinned mesh. Renders below are real decoder output — early
> stages show raw/disoriented geometry, later stages converge on the body.
> See FINDINGS.md for the byte-level notes.

## Asset containers

| file | role |
|---|---|
| `pack_cha_*.bin` | cooked container: geometry + skin + XPR textures |
| `bone_cha_*.bin` | skeleton (85 named bones) + link/remap table |
| `mothead_cha_*.bin` | animation index (offset pairs into `.mot`) |
| `mot_cha_*.bin` | animation curves — Hermite fp16 keys, 1416 clips |

## Progress gallery

### First decoded vertices

The rigid `_S_` sections yielded first: `ear_verts` shows the ear piece's
vertex cloud (8 projection tests) once the `{pos3, pkNormal, uv1, uv2}`
stride-0x18 layout was located.

![ear vertices](../img/model/ear_verts.png)

### Section triangulation

Each section carries a u16 index buffer with `0xFFFE` strip restarts. An
early triangle-list render (`sec_trilist`) shows the characteristic
scramble before the vertex stream offset (`voff`/`vsz`) was pinned down.

![section trilist](../img/model/sec_trilist.png)

### Skeleton — solved

`bone_cha_him.bin` = 85 named bones (romaji: `kosi`=hip, `hiza`=knee,
`asi`=foot, `ude`=arm, `kata`=shoulder, `kubi`=neck, `kao`=face,
`mune`=chest, `hara`=belly, `buki`=weapon). The header's 84-entry u16
array is the child-link table; `f30`/`f34` give each bone's children.

Bones stored unfolded along +X (`bones_raw`) — the rig is an **IK solver
chain**, not an FK skeleton, so plain euler composition collapses
(`skel_zyx` intermediate attempt). `skel_solved` shows the recovered
humanoid hierarchy in x–y and z–y projection.

| | |
|---|---|
| ![raw bones](../img/model/bones_raw.png) | ![zyx attempt](../img/model/skel_zyx.png) |

![solved skeleton](../img/model/skel_solved.png)

### Piece assembly

The pack splits into named pieces — `HIM_{variant}{LOD}_{bone}_wgt`
(skinned) and `HIM_S_{bone}` (rigid joint caps, 19 pieces covering the
body). First assemblies (`him_assembled`, `him_body_*`) recover a
recognizable upper body — head, T-pose arms, torso — with leg folding
still wrong.

| | |
|---|---|
| ![assembled pieces](../img/model/him_assembled.png) | ![body render](../img/model/him_body_render.png) |

![body side](../img/model/him_body_side.png)

### The bind-pose wall

`_wgt` skinned verts are **bone-local**: rendered raw they collapse at
the origin (`all_raw`). Real placement needs bind matrices — the rig is
IK-driven, so bind pose must come from the runtime solver or the
`type-0` matrix palettes inside the pack.

| | |
|---|---|
| ![collapsed verts](../img/model/all_raw.png) | ![manual layout](../img/model/body_manual.png) |

### Latest body iterations

Manual anatomical assembly of the `_S_` caps + valid `_wgt` fragments
(`bv2` → `bv4`): humanoid proportions emerge (~1.8 m, hip at 1.02 m)
while per-piece twist and leg placement remain incorrect pending the
true bind transforms.

| | |
|---|---|
| ![v2 front](../img/model/bv2_front.png) | ![v2 ¾](../img/model/bv2_q34.png) |
| ![v4 front](../img/model/bv4_front.png) | ![v4 side](../img/model/bv4_side.png) |

### Skinned & armour pieces

Latest iterations — weighted/skin pieces decoded further and armour
parts placed. `wgt_raw` shows raw `_wgt` verts still clustered,
`stick_up` the upright skeleton chain, `model_up_*` per-piece
colour-coded assemblies, `final_*` the newest whole-body attempt,
`zb_*` z-buffer depth renders, `skinned`/`armor_render` textured
pieces, `godot_render` the mesh inside Godot.

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

## Current state

| step | status |
|---|---|
| pack container layout | solved — root index, section tables, matrix palettes |
| vertex streams | solved — `_wgt` 0x24 / `_S_` 0x18 strides |
| piece naming | solved — modular character (9 variants × LODs) |
| skeleton hierarchy | solved — 85 bones, link table verified |
| animation format | solved — clip table, Hermite fp16 curve keys |
| bind pose | **open** — IK rig; needs solver or palette chaining |
| skinned body assembly | in progress — `_S_` caps placed, `_wgt` pending |
