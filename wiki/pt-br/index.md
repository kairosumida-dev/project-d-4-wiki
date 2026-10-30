[EN](../en/index.md) | [JA](../ja/index.md) | [PT-BR](../pt-br/index.md)

# Quest of D 4.0 — Wiki de Dados

Notas de engenharia reversa e dados extraídos de **Quest of D 4.0 — The Battle Kingdom** (Sega, terminal satélite Chihiro, GD-ROM `CDV-10035B`). Nome interno: `Project D` (`c:\prjd_main\4.00\main\project_d\Release\project_d.exe`), build de 1º de outubro de 2007.

> **Ressalva — resolução de textos.** Os registros de entidades foram extraídos de `.data` como linhas brutas de 128 bytes e relacionados ao `text.bin` (tabela SJIS com 5322 strings). O campo de junção ainda está sendo decodificado, portanto as strings `jp` exibidas aqui são dados brutos da fonte — em geral o texto de exibição correto, às vezes uma string vizinha. Ver FINDINGS.md.

### Fontes de dados

| fonte | conteúdo |
|---|---|
| `extracted/gamedb.json` | 26 tabelas de entidades (registros de 128 bytes) + strings do text.bin |
| `extracted/tables/*.csv` | dump bruto dos campos u32 por registro |
| `extracted/game/text/text.bin` | tabela de strings SJIS com 5322 entradas |
| `extracted/game/dungeon/` | 391 blobs de conectividade de masmorra |
| `extracted/game/media/dungeon/` | 2358 mapas de andar, 57 definições de modelo, 134 troféus |
| `extracted/game/media/light/` | iluminação por sala/chefe (origem dos nomes de chefes) |
| `extracted/project_d_strings.txt` | dump de strings do project_d.xbe |
| `docs/FINDINGS.md` | registro da engenharia reversa |

### Totais do banco de entidades

| tabela | registros | conteúdo |
|---|---|---|
| `monst` | 1508 | registros de partes/ataques de monstros (168 espécies) |
| `book2` | 410 | livros de magia/habilidades + materiais + gadgets de missão |
| `weapon2` | 358 | armas em 11 famílias de classe |
| `param` | 245 | efeitos de status, armadilhas, elementos, parâmetros |
| `skill` | 208 | habilidades incl. versões _EX |
| `summon` | 168 | cartas de monstros invocáveis |
| `helm2` | 100 | elmos |
| `armor2` | 94 | armaduras + túnicas |
| `acces2` | 90 | amuletos + anéis |
| `boots2` | 76 | botas |
| `shield2` | 48 | escudos |
| `potion2` | 38 | poções |
| `food2` | 21 | comida |
| — | 307 | tabelas legadas v1.x + registros diversos |

### Páginas

- [Monstros](monsters.md)
- [Itens](items.md)
- [Habilidades](skills.md)
- [Cartas](cards.md)
- [Missões e masmorras](quests.md)
- [Efeitos de status e armadilhas](status-effects.md)
- [Protocolo de rede](protocol.md)
