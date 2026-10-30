[EN](../en/index.md) | [JA](../ja/index.md) | [PT-BR](../pt-br/index.md)

# Quest of D 4.0 — Data Wiki

Reverse-engineering notes and extracted game data for **Quest of D 4.0 — The Battle Kingdom** (Sega, Chihiro satellite terminal, GD-ROM `CDV-10035B`). Internal name: `Project D` (`c:\prjd_main\4.00\main\project_d\Release\project_d.exe`), build date Oct 1 2007.

> **Caveat — text resolution.** Entity records were dumped from `.data` as raw 128-byte rows and joined with `text.bin` (5322-string SJIS table). The join field is still being decoded, so the `jp` strings shown here are raw source data — frequently the correct display text, occasionally a neighbouring string. See FINDINGS.md.

### Data sources

| source | what it is |
|---|---|
| `extracted/gamedb.json` | 26 entity tables (128-byte records) joined with text.bin strings |
| `extracted/tables/*.csv` | raw u32 field dump per record |
| `extracted/game/text/text.bin` | 5322-entry SJIS string table |
| `extracted/game/dungeon/` | 391 dungeon connectivity blobs |
| `extracted/game/media/dungeon/` | 2358 floor maps, 57 model defs, 134 trophy blobs |
| `extracted/game/media/light/` | per-room/per-boss lighting (boss names) |
| `extracted/project_d_strings.txt` | string dump of project_d.xbe |
| `docs/FINDINGS.md` | reverse-engineering ledger |

### Entity database totals

| table | records | contents |
|---|---|---|
| `monst` | 1508 | monster part/attack records (168 species bases) |
| `book2` | 410 | spell/skill books + materials + quest gadgets |
| `weapon2` | 358 | weapons in 11 class families |
| `param` | 245 | status effects, traps, elements, skill params |
| `skill` | 208 | skills incl. _EX upgrades |
| `summon` | 168 | summonable monster cards |
| `helm2` | 100 | helmets |
| `armor2` | 94 | armors + robes |
| `acces2` | 90 | amulets + rings |
| `boots2` | 76 | boots |
| `shield2` | 48 | shields |
| `potion2` | 38 | potions |
| `food2` | 21 | food items |
| — | 307 | legacy v1.x tables + misc records |

### Pages

- [Monsters](monsters.md)
- [Items](items.md)
- [Skills](skills.md)
- [Cards](cards.md)
- [Quests & dungeons](quests.md)
- [Status effects & traps](status-effects.md)
- [Network protocol](protocol.md)
