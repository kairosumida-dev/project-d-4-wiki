[EN](../en/status-effects.md) | [JA](../ja/status-effects.md) | [PT-BR](../pt-br/status-effects.md)

# Efeitos de status, elementos e armadilhas

> Source: `project_d.xbe` .data table @ `0x6127a4`–`0x663524` (`param`, non-contiguous) — reverse engineered

> Dados extraídos de **Quest of D 4.0 — The Battle Kingdom** (Sega Chihiro, `CDV-10035B`). Os registros são linhas `.data` de 128 bytes; o campo 0 aponta para o ID interno em maiúsculas exibido aqui. As strings japonesas vêm de `text.bin` (tabela SJIS de 5322 entradas); os métodos de resolução de nomes são descritos por seção e campos não resolvidos ficam em branco em vez de serem adivinhados.

A tabela `param` (245 registros) agrupa parâmetros de gameplay: **31 efeitos de status** (`PARAM_EFFECT_*`), **63 armadilhas** (`PARAM_TRAP_*`), **5 elementos** (`PARAM_SAMP_*`), **2 parâmetros de elemento de flecha** e **144 parâmetros de habilidade** (`PARAM_SK*`, não listados aqui).

> **Nota de contagem:** o resumo listava "30 efeitos" — a tabela na verdade nomeia **31 registros `PARAM_EFFECT_*` distintos** (de `ANTI_BLEED` a `WPNUP`). Todos os 31 estão listados; nenhum foi omitido.
>
> **Nota jp:** nenhuma vinculação de nome de exibição por registro foi decodificada para esta tabela, então a coluna `jp` fica intencionalmente vazia em vez de ser preenchida com a junção bruta não confiável (que mapeia todas as linhas para `スチームバトラー`).

### Efeitos de status (31)

| internal id | kind |
|---|---|
| `PARAM_EFFECT_ANTI_BLEED` | resistência (ANTI_*) |
| `PARAM_EFFECT_ANTI_BLIND` | resistência (ANTI_*) |
| `PARAM_EFFECT_ANTI_PANIC` | resistência (ANTI_*) |
| `PARAM_EFFECT_ANTI_POISON` | resistência (ANTI_*) |
| `PARAM_EFFECT_ANTI_SILENCE` | resistência (ANTI_*) |
| `PARAM_EFFECT_ANTI_SLEEP` | resistência (ANTI_*) |
| `PARAM_EFFECT_ANTI_SLOW` | resistência (ANTI_*) |
| `PARAM_EFFECT_BLOWAGAINST` | especial |
| `PARAM_EFFECT_COMPANION` | especial |
| `PARAM_EFFECT_DEFDW` | condição / debuff |
| `PARAM_EFFECT_DEFUP` | buff / bônus |
| `PARAM_EFFECT_DRAIN` | especial |
| `PARAM_EFFECT_FEAR` | condição / debuff |
| `PARAM_EFFECT_HARDBODY` | especial |
| `PARAM_EFFECT_HITDW` | condição / debuff |
| `PARAM_EFFECT_HITUP` | buff / bônus |
| `PARAM_EFFECT_LVLDOWN` | condição / debuff |
| `PARAM_EFFECT_NOATTACK` | condição / debuff |
| `PARAM_EFFECT_PANIC` | condição / debuff |
| `PARAM_EFFECT_POISON` | condição / debuff |
| `PARAM_EFFECT_PROVOKE` | especial |
| `PARAM_EFFECT_SHIELD` | especial |
| `PARAM_EFFECT_SILENCE` | condição / debuff |
| `PARAM_EFFECT_SLEEP` | condição / debuff |
| `PARAM_EFFECT_SPDDW` | condição / debuff |
| `PARAM_EFFECT_SPDUP` | buff / bônus |
| `PARAM_EFFECT_STRDW` | condição / debuff |
| `PARAM_EFFECT_STRUP` | buff / bônus |
| `PARAM_EFFECT_STUN` | condição / debuff |
| `PARAM_EFFECT_WPNDW` | condição / debuff |
| `PARAM_EFFECT_WPNUP` | buff / bônus |

### Elementos (5 + 2 parâmetros de flecha)

| internal id | element |
|---|---|
| `PARAM_SAMP_DARK` | trevas |
| `PARAM_SAMP_FIRE` | fogo |
| `PARAM_SAMP_HOLY` | sagrado |
| `PARAM_SAMP_ICE` | gelo |
| `PARAM_SAMP_THUNDER` | raio |
| `PARAM_HOLY_ARROW` | sagrado (flecha) |
| `PARAM_THUNDER_ARROW` | raio (flecha) |

`SAMP` provavelmente significa "sample/atributo elemental" — os cinco elementos canônicos também aparecem em armas (variantes de monstro `*_F` `*_I` `*_T`), armadilhas e magias.

### Armadilhas (63 `PARAM_TRAP_*`)

#### Perigos de gás e sopro (13)

| internal id |
|---|
| `PARAM_TRAP_BLIND_BREATHE` |
| `PARAM_TRAP_BLIND_GAS` |
| `PARAM_TRAP_BREATHE` |
| `PARAM_TRAP_CONF_GAS` |
| `PARAM_TRAP_DGRD_GAS` |
| `PARAM_TRAP_GAS` |
| `PARAM_TRAP_GAS_ROOM` |
| `PARAM_TRAP_ICE_BREATHE` |
| `PARAM_TRAP_ICE_GAS` |
| `PARAM_TRAP_POISON_BREATHE` |
| `PARAM_TRAP_PRLY_GAS` |
| `PARAM_TRAP_SLEEP_GAS` |
| `PARAM_TRAP_STN_GAS` |

#### Pilares de fogo (5)

| internal id |
|---|
| `PARAM_TRAP_FIRE01` |
| `PARAM_TRAP_FIRE02` |
| `PARAM_TRAP_FIRE03` |
| `PARAM_TRAP_FIRE04` |
| `PARAM_TRAP_FIRE05` |

#### Pilares de gelo (5)

| internal id |
|---|
| `PARAM_TRAP_ICE01` |
| `PARAM_TRAP_ICE02` |
| `PARAM_TRAP_ICE03` |
| `PARAM_TRAP_ICE04` |
| `PARAM_TRAP_ICE05` |

#### Pilares de raio (5)

| internal id |
|---|
| `PARAM_TRAP_THUNDER01` |
| `PARAM_TRAP_THUNDER02` |
| `PARAM_TRAP_THUNDER03` |
| `PARAM_TRAP_THUNDER04` |
| `PARAM_TRAP_THUNDER05` |

#### Minas e fontes (4)

| internal id |
|---|
| `PARAM_TRAP_MINE` |
| `PARAM_TRAP_MP_SPRING` |
| `PARAM_TRAP_SPRING` |
| `PARAM_TRAP_MOVE_BOMB` |

#### Flechas e projéteis (14)

| internal id |
|---|
| `PARAM_TRAP_ARROW` |
| `PARAM_TRAP_BLIND_ARROW` |
| `PARAM_TRAP_BOWGUN_ARROW` |
| `PARAM_TRAP_BOWGUN_BLIND_ARROW` |
| `PARAM_TRAP_BOWGUN_FIRE_ARROW` |
| `PARAM_TRAP_BOWGUN_HOLY_ARROW` |
| `PARAM_TRAP_BOWGUN_ICE_ARROW` |
| `PARAM_TRAP_BOWGUN_POISON_ARROW` |
| `PARAM_TRAP_BOWGUN_THUNDER_ARROW` |
| `PARAM_TRAP_FIRE_ARROW` |
| `PARAM_TRAP_ICE_ARROW` |
| `PARAM_TRAP_POISON_ARROW` |
| `PARAM_TRAP_SLEEP_ARROW` |
| `PARAM_TRAP_THR_ARROW` |

#### Perigos mecânicos (17)

| internal id |
|---|
| `PARAM_TRAP_BARREL` |
| `PARAM_TRAP_BLEED_GUILLOTINE` |
| `PARAM_TRAP_BLOW_BARREL` |
| `PARAM_TRAP_BLOW_IRONBALL` |
| `PARAM_TRAP_BREAK_WALL` |
| `PARAM_TRAP_CEILING` |
| `PARAM_TRAP_GATE` |
| `PARAM_TRAP_GUILLOTINE` |
| `PARAM_TRAP_GUILLOTINE_L` |
| `PARAM_TRAP_IRONROCK` |
| `PARAM_TRAP_LANCER` |
| `PARAM_TRAP_LOG` |
| `PARAM_TRAP_PILLER` |
| `PARAM_TRAP_PRICKLE` |
| `PARAM_TRAP_THORNROLLER` |
| `PARAM_TRAP_WEIGHT` |
| `PARAM_TRAP_WEIGHT_BLOW` |

### Parâmetros de habilidade (144, não expandidos)

Os registros `PARAM_SK*` espelham o espaço de numeração `BOOK2_SK*`/`SKILL_SK*` e guardam ajustes numéricos por habilidade (campos `u32` não decodificados — veja FINDINGS.md para o despejo CSV bruto).
