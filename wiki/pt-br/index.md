[EN](../en/index.md) | [JA](../ja/index.md) | [PT-BR](../pt-br/index.md)

# Quest of D 4.0 — Wiki de Dados

Notas de engenharia reversa e dados extraídos do jogo **Quest of D 4.0 — The Battle Kingdom** (Sega, terminal satélite Chihiro, GD-ROM `CDV-10035B`). Nome interno: `Project D` (`c:\prjd_main\4.00\main\project_d\Release\project_d.exe`), data de compilação: 1º de outubro de 2007.

> **Ressalva — resolução de texto.** Os registros de entidades foram despejados de `.data` como linhas brutas de 128 bytes e unidos a `text.bin` (tabela SJIS de 5322 strings). O campo de junção ainda está sendo decodificado, portanto as strings `jp` exibidas aqui são dados brutos da fonte — frequentemente o texto de exibição correto, ocasionalmente uma string vizinha. Veja FINDINGS.md.

### Fontes de dados

| fonte | o que é |
|---|---|
| `extracted/gamedb.json` | 26 tabelas de entidades (registros de 128 bytes) unidas às strings de text.bin |
| `extracted/tables/*.csv` | despejo bruto de campos u32 por registro |
| `extracted/game/text/text.bin` | tabela de strings SJIS com 5322 entradas |
| `extracted/game/dungeon/` | 391 blocos de conectividade de masmorras |
| `extracted/game/media/dungeon/` | 2358 mapas de andares, 57 definições de modelos, 134 blocos de troféus |
| `extracted/game/media/light/` | iluminação por sala/chefe (nomes dos chefes) |
| `extracted/project_d_strings.txt` | despejo de strings do project_d.xbe |
| `docs/FINDINGS.md` | registro de engenharia reversa |

### Totais do banco de dados de entidades

| tabela | registros | conteúdo |
|---|---|---|
| `monst` | 1508 | registros de partes/ataques de monstros (168 espécies-base) |
| `book2` | 410 | livros de magia/habilidade + materiais + gadgets de missão |
| `weapon2` | 358 | armas em 11 famílias de classe |
| `param` | 245 | efeitos de status, armadilhas, elementos, parâmetros de habilidade |
| `skill` | 208 | habilidades incl. melhorias _EX |
| `summon` | 168 | cartas de monstros invocáveis |
| `helm2` | 100 | elmos |
| `armor2` | 94 | armaduras + túnicas |
| `acces2` | 90 | amuletos + anéis |
| `boots2` | 76 | botas |
| `shield2` | 48 | escudos |
| `potion2` | 38 | poções |
| `food2` | 21 | alimentos |
| — | 307 | tabelas legadas v1.x + registros diversos |

### Páginas

- [Monstros](monsters.md)
- [Itens](items.md)
- [Habilidades](skills.md)
- [Cartas](cards.md)
