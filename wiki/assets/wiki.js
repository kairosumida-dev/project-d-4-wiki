(function () {
  var DECK_MAX_TOTAL = 35;
  var DECK_MAX_ITEMS = 14;
  var DECK_MAX_SKILLS = 8;
  var DECK_STORAGE_KEY = 'qod4_deck_v1';
  var DECK_CATALOG = {"WEAPON2_KS01_SHORTSWORD":{"code":"0-2108","short":"SHORTSWORD","wno":"018","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Espada Curta","ja":"ショートソード","img":"img/cards_hd/WEAPON2_KS01_SHORTSWORD.jpg","hd":1},"WEAPON2_KS06_GLADIUS":{"code":"0-2113","short":"GLADIUS","wno":"019","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Gládio","ja":"グラディウス","img":"img/cards_hd/WEAPON2_KS06_GLADIUS.jpg","hd":1},"WEAPON2_RS01_BASTARDSWORD":{"code":"0-2120","short":"BASTARDSWORD","wno":"020","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Espada Bastarda","ja":"バスタードソード","img":"img/cards_hd/WEAPON2_RS01_BASTARDSWORD.jpg","hd":1},"WEAPON2_KA01_HANDAXE":{"code":"0-2126","short":"HANDAXE","wno":"021","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Machadinha","ja":"ハンドアックス","img":"img/cards_hd/WEAPON2_KA01_HANDAXE.jpg","hd":1},"WEAPON2_RA01_BROADAXE":{"code":"0-2132","short":"BROADAXE","wno":"022","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Machado Largo","ja":"ブロードアックス","img":"img/cards_hd/WEAPON2_RA01_BROADAXE.jpg","hd":1},"WEAPON2_SP01_SHORTSPEAR":{"code":"0-2136","short":"SHORTSPEAR","wno":"023","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Lança Curta","ja":"ショートスピア","img":"img/cards_hd/WEAPON2_SP01_SHORTSPEAR.jpg","hd":1},"WEAPON2_SP03_PARTIZAN":{"code":"0-2138","short":"PARTIZAN","wno":"024","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Partisana","ja":"パルチザン","img":"img/cards_hd/WEAPON2_SP03_PARTIZAN.jpg","hd":1},"WEAPON2_MA01_CLUB":{"code":"0-2141","short":"CLUB","wno":"025","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Porrete","ja":"クラブ","img":"img/cards_hd/WEAPON2_MA01_CLUB.jpg","hd":1},"WEAPON2_NI01_DAGGER":{"code":"0-2147","short":"DAGGER","wno":"026","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Adaga","ja":"ダガー","img":"img/cards_hd/WEAPON2_NI01_DAGGER.jpg","hd":1},"WEAPON2_YU01_WOODBOW":{"code":"0-2157","short":"WOODBOW","wno":"027","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Arco de Madeira","ja":"ウッドボウ","img":"img/cards_hd/WEAPON2_YU01_WOODBOW.jpg","hd":1},"WEAPON2_QI01_ARROW":{"code":"0-2161","short":"ARROW","wno":"028","kind":"WEAPON","rar":"C","flv":1,"mode":"charges","max":3,"plus":99,"unit":33,"pt":"Flecha","ja":"アロー","img":"img/cards_hd/WEAPON2_QI01_ARROW.jpg","hd":1},"WEAPON2_QI02_FIREARROW":{"code":"0-2162","short":"FIREARROW","wno":"029","kind":"WEAPON","rar":"UC","flv":1,"mode":"charges","max":3,"plus":99,"unit":33,"pt":"Flecha de Fogo","ja":"ファイアーアロー","img":"img/cards_hd/WEAPON2_QI02_FIREARROW.jpg","hd":1},"WEAPON2_QI03_COLDARROW":{"code":"0-2163","short":"COLDARROW","wno":"030","kind":"WEAPON","rar":"UC","flv":1,"mode":"charges","max":3,"plus":99,"unit":33,"pt":"Flecha de Gelo","ja":"コールドアロー","img":"img/cards_hd/WEAPON2_QI03_COLDARROW.jpg","hd":1},"WEAPON2_QI04_SPARKARROW":{"code":"0-2164","short":"SPARKARROW","wno":"031","kind":"WEAPON","rar":"UC","flv":1,"mode":"charges","max":3,"plus":99,"unit":33,"pt":"Flecha do Trovão","ja":"サンダーアロー","img":"img/cards/card_370.png","hd":0},"WEAPON2_KS03_LONGSWORD":{"code":"0-2110","short":"LONGSWORD","wno":"099","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Espada Longa","ja":"ロングソード","img":"img/cards_hd/WEAPON2_KS03_LONGSWORD.jpg","hd":1},"WEAPON2_RS03_ZWEIHANDER":{"code":"0-2122","short":"ZWEIHANDER","wno":"100","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Espada de Duas Mãos","ja":"トゥハンドソード","img":"img/cards_hd/WEAPON2_RS03_ZWEIHANDER.jpg","hd":1},"WEAPON2_RS06_DRAGONKILLER":{"code":"1-250","short":"DRAGONKILLER","wno":"101","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Mata-Dragões","ja":"ドラゴンキラー","img":"img/cards/card_386.png","hd":0},"WEAPON2_KA03_WARAXE":{"code":"0-2128","short":"WARAXE","wno":"102","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Machado de Guerra","ja":"ウォーアックス","img":"img/cards_hd/WEAPON2_KA03_WARAXE.jpg","hd":1},"WEAPON2_KA04_BATTLEAXE":{"code":"0-2129","short":"BATTLEAXE","wno":"103","kind":"WEAPON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Machado de Batalha","ja":"バトルアックス","img":"img/cards_hd/WEAPON2_KA04_BATTLEAXE.jpg","hd":1},"WEAPON2_MA02_MACE":{"code":"0-2142","short":"MACE","wno":"104","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Maça","ja":"メイス","img":"img/cards_hd/WEAPON2_MA02_MACE.jpg","hd":1},"WEAPON2_NI02_DIRK":{"code":"0-2148","short":"DIRK","wno":"105","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Dirk","ja":"ダーク","img":"img/cards_hd/WEAPON2_NI02_DIRK.jpg","hd":1},"WEAPON2_NI03_POISONDAGGER":{"code":"0-2149","short":"POISONDAGGER","wno":"106","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Adaga Venenosa","ja":"ポイズンダガー","img":"img/cards_hd/WEAPON2_NI03_POISONDAGGER.jpg","hd":1},"WEAPON2_YU04_GREATBOW":{"code":"0-2160","short":"GREATBOW","wno":"107","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Grande Arco","ja":"グレートボウ","img":"img/cards/card_417.png","hd":0},"WEAPON2_ST01_QUARTERSTAFF":{"code":"0-2152","short":"QUARTERSTAFF","wno":"165","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Bastão","ja":"クォータースタッフ","img":"img/cards_hd/WEAPON2_ST01_QUARTERSTAFF.jpg","hd":1},"WEAPON2_ST02_SCEPTER":{"code":"0-2153","short":"SCEPTER","wno":"166","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Cetro","ja":"セプター","img":"img/cards_hd/WEAPON2_ST02_SCEPTER.jpg","hd":1},"WEAPON2_KS07_MITHRILBLADE":{"code":"1-248","short":"MITHRILBLADE","wno":"173","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espada de Mithril","ja":"ミスリルソード","img":"img/cards/card_329.png","hd":0},"WEAPON2_RA02_GREATAXE":{"code":"0-2133","short":"GREATAXE","wno":"174","kind":"WEAPON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Grande Machado","ja":"グレートアックス","img":"img/cards_hd/WEAPON2_RA02_GREATAXE.jpg","hd":1},"WEAPON2_ST03_WIZARDSSTAFF":{"code":"0-2154","short":"WIZARDSSTAFF","wno":"207","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cajado de Feiticeiro","ja":"ウィザードスタッフ","img":"img/cards/card_405.png","hd":0},"WEAPON2_SP04_TRIDENT":{"code":"0-2139","short":"TRIDENT","wno":"214","kind":"WEAPON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Tridente","ja":"トライデント","img":"img/cards_hd/WEAPON2_SP04_TRIDENT.jpg","hd":1},"WEAPON2_SP06_ICELANCE":{"code":"1-257","short":"ICELANCE","wno":"215","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lança de Gelo","ja":"アイススピア","img":"img/cards_hd/WEAPON2_SP06_ICELANCE.jpg","hd":1},"WEAPON2_MA03_WARHAMMER":{"code":"0-2364","short":"WARHAMMER","wno":"249","kind":"WEAPON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Martelo de Guerra","ja":"ウォーハンマー","img":"img/cards/card_342.png","hd":0},"WEAPON2_KS05_FALCHION":{"code":"0-2365","short":"FALCHION","wno":"250","kind":"WEAPON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Falchion","ja":"ファルシオン","img":"img/cards/card_327.png","hd":0},"WEAPON2_KS04_VIKINGSWORD":{"code":"0-2501","short":"VIKINGSWORD","wno":"253","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Espada Viking","ja":"ヴァイキングソード","img":"img/cards/card_326.png","hd":0},"WEAPON2_NI08_ROUND":{"code":"0-2502","short":"ROUND","wno":"254","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Faca Redonda","ja":"ラウンドナイフ","img":"img/cards/card_361.png","hd":0},"WEAPON2_NI09_STUNDAGGER":{"code":"0-2503","short":"STUNDAGGER","wno":"255","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Adaga Atordoante","ja":"スタンダガー","img":"img/cards_hd/WEAPON2_NI09_STUNDAGGER.jpg","hd":1},"WEAPON2_KS18_VIPERFUNG":{"code":"0-2504","short":"VIPERFUNG","wno":"256","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Presa de Víbora","ja":"バイパーファング","img":"img/cards/card_337.png","hd":0},"WEAPON2_RS11_SQUARETHRUST":{"code":"0-2505","short":"SQUARETHRUST","wno":"257","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cortador Quadrado","ja":"スクエアスラッシャー","img":"img/cards_hd/WEAPON2_RS11_SQUARETHRUST.jpg","hd":1},"WEAPON2_KA09_SILVERAXE":{"code":"0-2506","short":"SILVERAXE","wno":"258","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Machado de Prata","ja":"シルバーアックス","img":"img/cards/card_318.png","hd":0},"WEAPON2_KA06_SHIELDAXE":{"code":"0-2507","short":"SHIELDAXE","wno":"259","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Machado-escudo","ja":"シールドアックス","img":"img/cards_hd/WEAPON2_KA06_SHIELDAXE.jpg","hd":1},"WEAPON2_RA09_STEELAXE":{"code":"0-2508","short":"STEELAXE","wno":"260","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Machado de Aço","ja":"スチールアックス","img":"img/cards_hd/WEAPON2_RA09_STEELAXE.jpg","hd":1},"WEAPON2_RA10_GREAT_EX1":{"code":"0-2509","short":"GREAT EX1","wno":"261","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Machado Impulsor","ja":"ブーストアックス","img":"img/cards_hd/WEAPON2_RA10_GREAT_EX1.jpg","hd":1},"WEAPON2_MA09_HOLYMACE":{"code":"0-2510","short":"HOLYMACE","wno":"262","kind":"WEAPON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Maça Sagrada","ja":"ホーリーメイス","img":"img/cards/card_345.png","hd":0},"WEAPON2_KA02_FRANCISCA":{"code":"0-2513","short":"FRANCISCA","wno":"263","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Francisca","ja":"フランキスカ","img":"img/cards_hd/WEAPON2_KA02_FRANCISCA.jpg","hd":1},"WEAPON2_NI04_SWORDBRAKER":{"code":"0-2514","short":"SWORDBRAKER","wno":"264","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Quebra-Espadas","ja":"ソードブレイカー","img":"img/cards_hd/WEAPON2_NI04_SWORDBRAKER.jpg","hd":1},"WEAPON2_YU09_IRONBOW":{"code":"0-2515","short":"IRONBOW","wno":"265","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Arco de Ferro","ja":"アイアンボウ","img":"img/cards_hd/WEAPON2_YU09_IRONBOW.jpg","hd":1},"WEAPON2_YU03_LONGBOW":{"code":"0-2516","short":"LONGBOW","wno":"266","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Arco Longo","ja":"ロングボウ","img":"img/cards/card_416.png","hd":0},"WEAPON2_QI05_MITHRILARROW":{"code":"0-2517","short":"MITHRILARROW","wno":"267","kind":"WEAPON","rar":"UC","flv":1,"mode":"charges","max":3,"plus":99,"unit":33,"pt":"Flecha Sombria","ja":"ダークアロー","img":"img/cards_hd/WEAPON2_QI05_MITHRILARROW.jpg","hd":1},"WEAPON2_ST11_WIZARD_EX1":{"code":"0-2571","short":"WIZARD EX1","wno":"320","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cajado Flamejante","ja":"フレイムスタッフ","img":"img/cards/card_409.png","hd":0},"WEAPON2_ST12_WIZARD_EX2":{"code":"0-2572","short":"WIZARD EX2","wno":"321","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cajado de Gelo","ja":"アイススタッフ","img":"img/cards_hd/WEAPON2_ST12_WIZARD_EX2.jpg","hd":1},"WEAPON2_ST13_WIZARD_EX3":{"code":"0-2573","short":"WIZARD EX3","wno":"322","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cajado do Trovão","ja":"サンダースタッフ","img":"img/cards/card_411.png","hd":0},"WEAPON2_SP09_FRAME":{"code":"1-344","short":"FRAME","wno":"323","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lança Flamejante","ja":"フレイムスピア","img":"img/cards_hd/WEAPON2_SP09_FRAME.jpg","hd":1},"WEAPON2_SP10_THUNDER":{"code":"1-345","short":"THUNDER","wno":"324","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lança do Trovão","ja":"サンダースピア","img":"img/cards/card_401.png","hd":0},"WEAPON2_NC03_MASSU":{"code":"0-2605","short":"MASSU","wno":"367","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cravo de Ferro","ja":"アイアンスパイク","img":"img/cards/card_351.png","hd":0},"WEAPON2_MA11_WARHAMMER_EX":{"code":"0-2610","short":"WARHAMMER EX","wno":"368","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Martelo Brilhante","ja":"ブライトハンマー","img":"img/cards/card_347.png","hd":0},"WEAPON2_KA10_EGRET":{"code":"0-2611","short":"EGRET","wno":"369","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Garça","ja":"イーグレット","img":"img/cards/card_319.png","hd":0},"WEAPON2_SP02_AWLPIKE":{"code":"0-2612","short":"AWLPIKE","wno":"370","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Pique Leve","ja":"オウルパイク","img":"img/cards/card_394.png","hd":0},"WEAPON2_NI13_KERIS":{"code":"0-2613","short":"KERIS","wno":"371","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Kris","ja":"クリス","img":"img/cards/card_363.png","hd":0},"WEAPON2_KA19_TAMECHAN2":{"code":"0-2614","short":"TAMECHAN2","wno":"372","kind":"WEAPON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Machado de Espinho","ja":"スパイクアックス","img":"img/cards/card_321.png","hd":0},"WEAPON2_ST05_MAGICALSTAFF":{"code":"0-2618","short":"MAGICALSTAFF","wno":"373","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Varinha de Cristal","ja":"クリスタルワンド","img":"img/cards/card_407.png","hd":0},"WEAPON2_RA08_DIVINEAXE":{"code":"1-370","short":"DIVINEAXE","wno":"374","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Machado Divino","ja":"ディバインアックス","img":"img/cards/card_378.png","hd":0},"WEAPON2_KS08_MAGICSWORD":{"code":"1-371","short":"MAGICSWORD","wno":"375","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espada Mágica","ja":"マジックソード","img":"img/cards/card_330.png","hd":0},"WEAPON2_YU05_YUMI":{"code":"1-372","short":"YUMI","wno":"376","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Cerejeira Rubra","ja":"紅桜","img":"img/cards/card_418.png","hd":0},"WEAPON2_RA04_MITHRILAXE":{"code":"1-416","short":"MITHRILAXE","wno":"377","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Machado de Mithril","ja":"ミスリルアックス","img":"img/cards/card_377.png","hd":0},"WEAPON2_YU06_MITHRILBOW":{"code":"1-421","short":"MITHRILBOW","wno":"378","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Arco de Mithril","ja":"ミスリルボウ","img":"img/cards/card_419.png","hd":0},"WEAPON2_MA15_TAMECHAN1":{"code":"0-2615","short":"TAMECHAN1","wno":"444","kind":"WEAPON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Maça Quadrada","ja":"スクエアメイス","img":"img/cards_hd/WEAPON2_MA15_TAMECHAN1.jpg","hd":1},"WEAPON2_NI14_TAMECHAN2":{"code":"0-2616","short":"TAMECHAN2","wno":"445","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Faca Podre","ja":"ロットナイフ","img":"img/cards_hd/WEAPON2_NI14_TAMECHAN2.jpg","hd":1},"WEAPON2_NC05_THRUST":{"code":"0-2617","short":"THRUST","wno":"446","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Soqueira Perfurante","ja":"スラストナックル","img":"img/cards_hd/WEAPON2_NC05_THRUST.jpg","hd":1},"WEAPON2_SP18_MUSSU":{"code":"1-376","short":"MUSSU","wno":"447","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Glaive","ja":"グレイブ","img":"img/cards/card_402.png","hd":0},"WEAPON2_KS13_BLACKSWORD":{"code":"1-373","short":"BLACKSWORD","wno":"448","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espada Grande","ja":"グレートソード","img":"img/cards/card_334.png","hd":0},"WEAPON2_KA18_CRESCENT":{"code":"1-374","short":"CRESCENT","wno":"449","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Machado Crescente","ja":"クレセントアックス","img":"img/cards/card_320.png","hd":0},"WEAPON2_RA22_RUIN":{"code":"1-375","short":"RUIN","wno":"450","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Machado da Ruína","ja":"ルーインアックス","img":"img/cards_hd/WEAPON2_RA22_RUIN.jpg","hd":1},"WEAPON2_NC06_BLADE":{"code":"1-378","short":"BLADE","wno":"451","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Soqueira de Lâmina","ja":"ブレイドナックル","img":"img/cards/card_353.png","hd":0},"WEAPON2_ST23_TAMECHAN1":{"code":"1-377","short":"TAMECHAN1","wno":"452","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Vara da Maldição","ja":"カースロッド","img":"img/cards/card_412.png","hd":0},"WEAPON2_SP05_MITHRILSPEAR":{"code":"1-419","short":"MITHRILSPEAR","wno":"453","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lança de Mithril","ja":"ミスリルスピア","img":"img/cards/card_397.png","hd":0},"WEAPON2_MA05_MITHRILHAMMER":{"code":"1-420","short":"MITHRILHAMMER","wno":"454","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Martelo de Mithril","ja":"ミスリルハンマー","img":"img/cards/card_344.png","hd":0},"WEAPON2_ST32_SHINKI":{"code":"1-379","short":"SHINKI","wno":"464","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Varinha Astral","ja":"アストラルワンド","img":"img/cards/card_413.png","hd":0},"WEAPON2_KS02_RAPIER":{"code":"0-2700","short":"RAPIER","wno":"494","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Rapieira","ja":"レイピア","img":"img/cards/card_324.png","hd":0},"WEAPON2_KS10_FAKESWORD":{"code":"0-2701","short":"FAKESWORD","wno":"495","kind":"WEAPON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Espada Falsa","ja":"フェイクソード","img":"img/cards/card_331.png","hd":0},"WEAPON2_KS39_SEIRYUTOU":{"code":"0-2702","short":"SEIRYUTOU","wno":"496","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Espada do Dragão Azul","ja":"青龍刀","img":"img/cards_hd/WEAPON2_KS39_SEIRYUTOU.jpg","hd":1},"WEAPON2_NC07_TETSUTUME":{"code":"0-2705","short":"TETSUTUME","wno":"497","kind":"WEAPON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Garra do Assassino","ja":"アサシンネイル","img":"img/cards_hd/WEAPON2_NC07_TETSUTUME.jpg","hd":1},"WEAPON2_RS05_EXECUTIONERSSWORD":{"code":"1-434","short":"EXECUTIONERSSWORD","wno":"498","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espada da Condenação","ja":"断罪の剣","img":"img/cards/card_385.png","hd":0},"WEAPON2_NI05_KOTETSU":{"code":"1-436","short":"KOTETSU","wno":"499","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Ferro Antigo","ja":"古鉄","img":"img/cards/card_360.png","hd":0},"WEAPON2_NI25_MOULIN":{"code":"1-493","short":"MOULIN","wno":"500","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Moulin","ja":"ムーラン","img":"img/cards/card_365.png","hd":0},"WEAPON2_KS12_WHITESWORD":{"code":"1-430","short":"WHITESWORD","wno":"501","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espada Demoníaca","ja":"デモンズソード","img":"img/cards/card_332.png","hd":0},"WEAPON2_KS19_ROYAL":{"code":"1-431","short":"ROYAL","wno":"502","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espada Sagrada","ja":"ホーリーソード","img":"img/cards/card_338.png","hd":0},"WEAPON2_MA04_MORNINGSTAR":{"code":"1-437","short":"MORNINGSTAR","wno":"503","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Estrela da Manhã","ja":"モーニングスター","img":"img/cards/card_343.png","hd":0},"WEAPON2_NC17_SONIC":{"code":"1-491","short":"SONIC","wno":"504","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Soqueira Sônica","ja":"ソニックナックル","img":"img/cards/card_355.png","hd":0},"WEAPON2_RS22_SAIJYOUI":{"code":"1-492","short":"SAIJYOUI","wno":"505","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espada Suprema","ja":"アルティマソード","img":"img/cards/card_389.png","hd":0},"WEAPON2_KA26_CRIMSON":{"code":"1-494","short":"CRIMSON","wno":"506","kind":"WEAPON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Linha Carmesim","ja":"クリムゾンライン","img":"img/cards/card_322.png","hd":0},"WEAPON2_RS09_FLAMESWORD":{"code":"1-435","short":"FLAMESWORD","wno":"554","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espada Flamejante","ja":"フレイムソード","img":"img/cards/card_387.png","hd":0},"WEAPON2_RS25_THUNDERBLADE":{"code":"1-433","short":"THUNDERBLADE","wno":"555","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lâmina do Trovão","ja":"サンダーブレード","img":"img/cards/card_391.png","hd":0},"WEAPON2_RS24_ICEBRAND":{"code":"1-432","short":"ICEBRAND","wno":"556","kind":"WEAPON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Marca de Gelo","ja":"アイスブランド","img":"img/cards/card_390.png","hd":0},"WEAPON2_KS17_CULANNSWORD":{"code":"0-2350","short":"CULANNSWORD","wno":"—","kind":"WEAPON","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Espada Curta de Klan","ja":"クランのショートソード","img":"img/cards/card_336.png","hd":0},"WEAPON2_MA10_OAKCLUB":{"code":"0-2351","short":"OAKCLUB","wno":"—","kind":"WEAPON","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Porrete de Carvalho","ja":"樫のクラブ","img":"img/cards/card_346.png","hd":0},"WEAPON2_ST10_MAGESTAFF":{"code":"0-2352","short":"MAGESTAFF","wno":"—","kind":"WEAPON","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cajado de Mago","ja":"メイジスタッフ","img":"img/cards/card_408.png","hd":0},"WEAPON2_QI06_HOLYARROW":{"code":"0-2518","short":"HOLYARROW","wno":"268/156","kind":"WEAPON","rar":"UC","flv":1,"mode":"charges","max":3,"plus":99,"unit":33,"pt":"Flecha Sagrada","ja":"ホーリーアロー","img":"img/cards_hd/WEAPON2_QI06_HOLYARROW.jpg","hd":1},"WEAPON2_RA03_BERDYSH":{"code":"0-2704","short":"BERDYSH","wno":"—","kind":"WEAPON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Bardiche","ja":"バルディッシュ","img":"img/cards/card_376.png","hd":0},"ARMOR2_AM24_DEFAULT":{"code":"0-2169","short":"DEFAULT","wno":"032","kind":"ARMOR","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Couraça de Lutador","ja":"ファイタークロス","img":"img/cards_hd/ARMOR2_AM24_DEFAULT.jpg","hd":1},"ARMOR2_AM03_CHAINMAIL":{"code":"0-2170","short":"CHAINMAIL","wno":"033","kind":"ARMOR","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Cota de Malha","ja":"チェインメイル","img":"img/cards_hd/ARMOR2_AM03_CHAINMAIL.jpg","hd":1},"ARMOR2_RO07_DALMATICA":{"code":"0-2176","short":"DALMATICA","wno":"034","kind":"ARMOR","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Dalmática","ja":"ダルマティカ","img":"img/cards_hd/ARMOR2_RO07_DALMATICA.jpg","hd":1},"ARMOR2_AM23_CROTH":{"code":"0-2177","short":"CROTH","wno":"035","kind":"ARMOR","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Armadura de Pano","ja":"クロスアーマー","img":"img/cards_hd/ARMOR2_AM23_CROTH.jpg","hd":1},"SHIELD2_SH01_WOOD":{"code":"0-2187","short":"WOOD","wno":"036","kind":"SHIELD","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Escudo de Madeira","ja":"ウッドシールド","img":"img/cards_hd/SHIELD2_SH01_WOOD.jpg","hd":1},"SHIELD2_SH02_BUCKLER":{"code":"0-2188","short":"BUCKLER","wno":"037","kind":"SHIELD","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Broquel","ja":"バックラー","img":"img/cards_hd/SHIELD2_SH02_BUCKLER.jpg","hd":1},"SHIELD2_SH03_ROUND":{"code":"0-2189","short":"ROUND","wno":"038","kind":"SHIELD","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Escudo Redondo","ja":"ラウンドシールド","img":"img/cards_hd/SHIELD2_SH03_ROUND.jpg","hd":1},"HELM2_HM01_HALF":{"code":"0-2201","short":"HALF","wno":"039","kind":"HELM","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Meio Elmo","ja":"ハーフヘルム","img":"img/cards_hd/HELM2_HM01_HALF.jpg","hd":1},"HELM2_HM02_IRON":{"code":"0-2202","short":"IRON","wno":"040","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Elmo de Ferro","ja":"アイアンヘルム","img":"img/cards_hd/HELM2_HM02_IRON.jpg","hd":1},"HELM2_HM15_WARLOCKCAP":{"code":"0-2211","short":"WARLOCKCAP","wno":"041","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Gorro de Bruxo","ja":"ウォーロックキャップ","img":"img/cards_hd/HELM2_HM15_WARLOCKCAP.jpg","hd":1},"ARMOR2_RO17_WARLOCKROBE":{"code":"0-2354","short":"WARLOCKROBE","wno":"041","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Manto de Bruxo","ja":"ウォーロックローブ","img":"img/cards/card_178.png","hd":0},"HELM2_HM17_CLERICCAP":{"code":"0-2213","short":"CLERICCAP","wno":"042","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Gorro de Clérigo","ja":"クレリックキャップ","img":"img/cards/card_136.png","hd":0},"BOOTS2_BT04_PLATE":{"code":"0-2221","short":"PLATE","wno":"043","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas de Ferro","ja":"アイアンブーツ","img":"img/cards_hd/BOOTS2_BT04_PLATE.jpg","hd":1},"ARMOR2_AM05_LAMELLAR":{"code":"0-2171","short":"LAMELLAR","wno":"108","kind":"ARMOR","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Armadura Lamelar","ja":"ラメラアーマー","img":"img/cards_hd/ARMOR2_AM05_LAMELLAR.jpg","hd":1},"ARMOR2_AM06_IRON":{"code":"0-2172","short":"IRON","wno":"109","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Armadura de Ferro","ja":"アイアンアーマー","img":"img/cards_hd/ARMOR2_AM06_IRON.jpg","hd":1},"ARMOR2_RO03_MAGEROBE":{"code":"0-2180","short":"MAGEROBE","wno":"110","kind":"ARMOR","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Manto de Mago","ja":"メイジローブ","img":"img/cards_hd/ARMOR2_RO03_MAGEROBE.jpg","hd":1},"ARMOR2_RO04_HOODROBE":{"code":"0-2181","short":"HOODROBE","wno":"111","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Manto com Capuz","ja":"フードローブ","img":"img/cards_hd/ARMOR2_RO04_HOODROBE.jpg","hd":1},"SHIELD2_SH04_LARGE":{"code":"0-2190","short":"LARGE","wno":"112","kind":"SHIELD","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Escudo Grande","ja":"ラージシールド","img":"img/cards_hd/SHIELD2_SH04_LARGE.jpg","hd":1},"HELM2_HM12_KETTLEHAT":{"code":"0-2209","short":"KETTLEHAT","wno":"113","kind":"HELM","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Chapéu Chaleira","ja":"ケトルハット","img":"img/cards/card_131.png","hd":0},"HELM2_HM16_SORCERERCAP":{"code":"0-2212","short":"SORCERERCAP","wno":"114","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Gorro de Feiticeiro","ja":"ソーサラーキャップ","img":"img/cards_hd/HELM2_HM16_SORCERERCAP.jpg","hd":1},"HELM2_HM13_MAGICIANHAT":{"code":"0-2215","short":"MAGICIANHAT","wno":"115","kind":"HELM","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Chapéu de Mágico","ja":"マジシャンハット","img":"img/cards_hd/HELM2_HM13_MAGICIANHAT.jpg","hd":1},"BOOTS2_BT12_WARRIOR":{"code":"0-2220","short":"WARRIOR","wno":"116","kind":"BOOTS","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Botas Enferrujadas","ja":"ラスティブーツ","img":"img/cards_hd/BOOTS2_BT12_WARRIOR.jpg","hd":1},"BOOTS2_BT07_MAGICIANSHOES":{"code":"1-297","short":"MAGICIANSHOES","wno":"117","kind":"BOOTS","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Sapatos de Mágico","ja":"マジシャンシューズ","img":"img/cards_hd/BOOTS2_BT07_MAGICIANSHOES.jpg","hd":1},"BOOTS2_BT11_PRIEST":{"code":"0-2225","short":"PRIEST","wno":"118","kind":"BOOTS","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Botas de Sacerdote","ja":"プリーストブーツ","img":"img/cards_hd/BOOTS2_BT11_PRIEST.jpg","hd":1},"SHIELD2_SH11_ICE":{"code":"0-2197","short":"ICE","wno":"175","kind":"SHIELD","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Escudo de Gelo","ja":"アイスシールド","img":"img/cards_hd/SHIELD2_SH11_ICE.jpg","hd":1},"SHIELD2_SH15_MITHRIL":{"code":"1-281","short":"MITHRIL","wno":"176","kind":"SHIELD","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Escudo de Mithril","ja":"ミスリルシールド","img":"img/cards/card_199.png","hd":0},"HELM2_HM05_GREAT":{"code":"1-283","short":"GREAT","wno":"177","kind":"HELM","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Grande Elmo","ja":"グレートヘルム","img":"img/cards_hd/HELM2_HM05_GREAT.jpg","hd":1},"HELM2_HM14_MITLA":{"code":"0-2210","short":"MITLA","wno":"178","kind":"HELM","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Mitra","ja":"ミトラ","img":"img/cards_hd/HELM2_HM14_MITLA.jpg","hd":1},"HELM2_HM21_TIARA":{"code":"1-288","short":"TIARA","wno":"179","kind":"HELM","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Tiara","ja":"ティアラ","img":"img/cards_hd/HELM2_HM21_TIARA.jpg","hd":1},"HELM2_HM28_KINGCROWN":{"code":"1-294","short":"KINGCROWN","wno":"180","kind":"HELM","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Coroa do Rei","ja":"キングクラウン","img":"img/cards/card_143.png","hd":0},"BOOTS2_BT22_KING":{"code":"1-299","short":"KING","wno":"181","kind":"BOOTS","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Botas do Rei","ja":"キングブーツ","img":"img/cards_hd/BOOTS2_BT22_KING.jpg","hd":1},"ARMOR2_AM16_DRAGON":{"code":"1-265","short":"DRAGON","wno":"216","kind":"ARMOR","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Armadura de Dragão","ja":"ドラゴンアーマー","img":"img/cards/card_084.png","hd":0},"ARMOR2_RO11_WIZARDROBE":{"code":"1-271","short":"WIZARDROBE","wno":"217","kind":"ARMOR","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Manto de Feiticeiro","ja":"ウィザードローブ","img":"img/cards/card_176.png","hd":0},"ARMOR2_AM15_MITHRIL":{"code":"1-278","short":"MITHRIL","wno":"218","kind":"ARMOR","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Armadura de Mithril","ja":"ミスリルアーマー","img":"img/cards/card_083.png","hd":0},"SHIELD2_SH14_DRAGON":{"code":"1-280","short":"DRAGON","wno":"219","kind":"SHIELD","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Escudo de Dragão","ja":"ドラゴンシールド","img":"img/cards/card_198.png","hd":0},"HELM2_HM06_MITHRIL":{"code":"1-284","short":"MITHRIL","wno":"220","kind":"HELM","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Elmo de Mithril","ja":"ミスリルヘルム","img":"img/cards/card_125.png","hd":0},"BOOTS2_BT06_MITHRIL":{"code":"1-296","short":"MITHRIL","wno":"221","kind":"BOOTS","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Botas de Mithril","ja":"ミスリルブーツ","img":"img/cards/card_097.png","hd":0},"BOOTS2_BT23_SOUL":{"code":"1-300","short":"SOUL","wno":"222","kind":"BOOTS","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Botas de Feiticeiro","ja":"ウィザードブーツ","img":"img/cards/card_106.png","hd":0},"ARMOR2_RO09_KINGROBE":{"code":"1-329","short":"KINGROBE","wno":"248","kind":"ARMOR","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Manto do Rei","ja":"キングローブ","img":"img/cards/card_175.png","hd":0},"HELM2_HM56_IRONMASK":{"code":"0-2709","short":"IRONMASK","wno":"265","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Máscara de Ferro","ja":"アイアンマスク","img":"img/cards/card_292.png","hd":0},"HELM2_HM10_LEATHERHAT":{"code":"0-2519","short":"LEATHERHAT","wno":"269","kind":"HELM","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Gorro de Couro","ja":"レザーキャップ","img":"img/cards/card_129.png","hd":0},"HELM2_HM03_VIKING":{"code":"0-2520","short":"VIKING","wno":"270","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Elmo Viking","ja":"ヴァイキングヘルム","img":"img/cards_hd/HELM2_HM03_VIKING.jpg","hd":1},"HELM2_HM34_SCALE":{"code":"0-2521","short":"SCALE","wno":"271","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Elmo de Escamas","ja":"スケイルヘルム","img":"img/cards/card_145.png","hd":0},"ARMOR2_AM04_SCALE":{"code":"0-2522","short":"SCALE","wno":"272","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cota de Escamas","ja":"スケイルメイル","img":"img/cards_hd/ARMOR2_AM04_SCALE.jpg","hd":1},"ARMOR2_AM02_JACKET":{"code":"0-2523","short":"JACKET","wno":"273","kind":"ARMOR","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Jaqueta de Couro","ja":"レザージャケット","img":"img/cards/card_075.png","hd":0},"ARMOR2_AM01_LEATHER":{"code":"0-2524","short":"LEATHER","wno":"274","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Armadura de Couro","ja":"レザーアーマー","img":"img/cards_hd/ARMOR2_AM01_LEATHER.jpg","hd":1},"ARMOR2_AM17_LEATHER":{"code":"0-2525","short":"LEATHER","wno":"275","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Couraça de Couro","ja":"レザークロス","img":"img/cards_hd/ARMOR2_AM17_LEATHER.jpg","hd":1},"SHIELD2_SH07_WING":{"code":"0-2526","short":"WING","wno":"276","kind":"SHIELD","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Escudo Alado","ja":"ウィングシールド","img":"img/cards/card_194.png","hd":0},"SHIELD2_SH22_PALISADE":{"code":"0-2527","short":"PALISADE","wno":"277","kind":"SHIELD","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Escudo Paliçada","ja":"パリセイドシールド","img":"img/cards/card_201.png","hd":0},"BOOTS2_BT29_SCALE":{"code":"0-2528","short":"SCALE","wno":"278","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas de Escamas","ja":"スケイルブーツ","img":"img/cards/card_108.png","hd":0},"BOOTS2_BT21_CROTH":{"code":"0-2529","short":"CROTH","wno":"279","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas Cruzadas","ja":"クロスブーツ","img":"img/cards_hd/BOOTS2_BT21_CROTH.jpg","hd":1},"BOOTS2_BT30_MANA":{"code":"0-2530","short":"MANA","wno":"280","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas de Mana","ja":"マナブーツ","img":"img/cards_hd/BOOTS2_BT30_MANA.jpg","hd":1},"BOOTS2_BT01_LONG":{"code":"0-2531","short":"LONG","wno":"281","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas Longas","ja":"ロングブーツ","img":"img/cards_hd/BOOTS2_BT01_LONG.jpg","hd":1},"BOOTS2_BT02_LEATHER":{"code":"0-2532","short":"LEATHER","wno":"282","kind":"BOOTS","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Botas de Couro","ja":"レザーブーツ","img":"img/cards_hd/BOOTS2_BT02_LEATHER.jpg","hd":1},"HELM2_HM25_WIZARDHAT":{"code":"1-346","short":"WIZARDHAT","wno":"325","kind":"HELM","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Chapéu de Feiticeiro","ja":"ウィザードハット","img":"img/cards/card_142.png","hd":0},"HELM2_HM22_CIRCLET":{"code":"1-347","short":"CIRCLET","wno":"326","kind":"HELM","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Diadema","ja":"サークレット","img":"img/cards_hd/HELM2_HM22_CIRCLET.jpg","hd":1},"ARMOR2_AM07_PLATE":{"code":"0-2574","short":"PLATE","wno":"327","kind":"ARMOR","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Armadura de Placas","ja":"プレートメイル","img":"img/cards/card_080.png","hd":0},"ARMOR2_RO06_CHASUBLE":{"code":"0-2576","short":"CHASUBLE","wno":"329","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Casula","ja":"カズラ","img":"img/cards/card_172.png","hd":0},"HELM2_HM07_MAGIC":{"code":"1-348","short":"MAGIC","wno":"330","kind":"HELM","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Elmo Mágico","ja":"マジックヘルム","img":"img/cards_hd/HELM2_HM07_MAGIC.jpg","hd":1},"BOOTS2_BT08_MAGIC":{"code":"1-349","short":"MAGIC","wno":"331","kind":"BOOTS","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Botas Mágicas","ja":"マジックブーツ","img":"img/cards/card_099.png","hd":0},"ARMOR2_AM33_CHAINMALE_EX":{"code":"0-2619","short":"CHAINMALE EX","wno":"379","kind":"ARMOR","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Corrente Carmesim","ja":"クリムゾンチェイン","img":"img/cards_hd/ARMOR2_AM33_CHAINMALE_EX.jpg","hd":1},"ARMOR2_RO21_TAMECHAN1":{"code":"0-2637","short":"TAMECHAN1","wno":"380","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Hábito de Monge","ja":"モンクフロック","img":"img/cards/card_183.png","hd":0},"ARMOR2_AM34_CLOTH_EX":{"code":"0-2620","short":"CLOTH EX","wno":"381","kind":"ARMOR","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Manto do Raio","ja":"レイクロス","img":"img/cards_hd/ARMOR2_AM34_CLOTH_EX.jpg","hd":1},"SHIELD2_SH08_TOWER":{"code":"0-2622","short":"TOWER","wno":"382","kind":"SHIELD","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Escudo Torre","ja":"タワーシールド","img":"img/cards/card_195.png","hd":0},"HELM2_HM41_UNICORNHEAD":{"code":"0-2630","short":"UNICORNHEAD","wno":"383","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cabeça de Unicórnio","ja":"ユニコーンヘッド","img":"img/cards/card_152.png","hd":0},"ARMOR2_RO08_SHADOWROBE":{"code":"0-2575","short":"SHADOWROBE","wno":"384","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Manto Sombrio","ja":"シャドウローブ","img":"img/cards/card_174.png","hd":0},"HELM2_HM43_SHADOWHAT":{"code":"0-2631","short":"SHADOWHAT","wno":"384","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Chapéu Sombrio","ja":"シャドウハット","img":"img/cards_hd/HELM2_HM43_SHADOWHAT.jpg","hd":1},"HELM2_HM44_NISOUZUKIN":{"code":"0-2632","short":"NISOUZUKIN","wno":"385","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Véu de Frade","ja":"フライアベール","img":"img/cards/card_154.png","hd":0},"HELM2_HM04_BARREL":{"code":"0-2623","short":"BARREL","wno":"386","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Elmo Barril","ja":"バレルヘルム","img":"img/cards/card_123.png","hd":0},"HELM2_HM36_WARLOCKCAP_EX":{"code":"0-2625","short":"WARLOCKCAP EX","wno":"387","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Gorro Encantado","ja":"チャームキャップ","img":"img/cards/card_147.png","hd":0},"HELM2_HM37_CLERICCAP_EX":{"code":"0-2626","short":"CLERICCAP EX","wno":"388","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Boina Índigo","ja":"インディゴバニット","img":"img/cards_hd/HELM2_HM37_CLERICCAP_EX.jpg","hd":1},"HELM2_HM18_BISHOPCAP":{"code":"0-2627","short":"BISHOPCAP","wno":"389","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Gorro de Bispo","ja":"ビショップキャップ","img":"img/cards/card_137.png","hd":0},"BOOTS2_BT32_PRIEST_EX":{"code":"0-2628","short":"PRIEST EX","wno":"390","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas Orientais","ja":"オリエントブーツ","img":"img/cards/card_111.png","hd":0},"BOOTS2_BT33_SOUL_EX":{"code":"0-2629","short":"SOUL EX","wno":"391","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas Nobres","ja":"ノーブルブーツ","img":"img/cards/card_112.png","hd":0},"BOOTS2_BT37_BISHOP":{"code":"0-2633","short":"BISHOP","wno":"392","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas de Monge","ja":"モンクブーツ","img":"img/cards/card_115.png","hd":0},"ARMOR2_AM12_MAGIC":{"code":"1-380","short":"MAGIC","wno":"393","kind":"ARMOR","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Armadura Mágica","ja":"マジックアーマー","img":"img/cards_hd/ARMOR2_AM12_MAGIC.jpg","hd":1},"ARMOR2_RO24_HOOD_EX":{"code":"0-2621","short":"HOOD EX","wno":"455","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Manto Reforçado","ja":"エンハンスローブ","img":"img/cards/card_187.png","hd":0},"HELM2_HM29_SNAKEHEAD":{"code":"0-2624","short":"SNAKEHEAD","wno":"456","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cabeça de Serpente","ja":"スネークヘッド","img":"img/cards_hd/HELM2_HM29_SNAKEHEAD.jpg","hd":1},"BOOTS2_BT38_SHADOW":{"code":"0-2634","short":"SHADOW","wno":"457","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas Sombrias","ja":"シャドウブーツ","img":"img/cards_hd/BOOTS2_BT38_SHADOW.jpg","hd":1},"BOOTS2_BT39_MAGE":{"code":"0-2635","short":"MAGE","wno":"458","kind":"BOOTS","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Botas Atadas","ja":"バインドブーツ","img":"img/cards/card_118.png","hd":0},"HELM2_HM38_HANNYA":{"code":"1-381","short":"HANNYA","wno":"459","kind":"HELM","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Elmo do Demônio Branco","ja":"白鬼の兜","img":"img/cards/card_149.png","hd":0},"HELM2_HM39_DIVINECIRCLET":{"code":"1-382","short":"DIVINECIRCLET","wno":"460","kind":"HELM","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Diadema Divino","ja":"ディバインサークレット","img":"img/cards/card_150.png","hd":0},"HELM2_HM40_QUEENTIARA":{"code":"1-383","short":"QUEENTIARA","wno":"461","kind":"HELM","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Tiara da Rainha","ja":"クイーンティアラ","img":"img/cards/card_151.png","hd":0},"BOOTS2_BT34_DAIGUSOKU":{"code":"1-384","short":"DAIGUSOKU","wno":"462","kind":"BOOTS","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Caneleira Negra","ja":"黒紋の脛当","img":"img/cards/card_113.png","hd":0},"BOOTS2_BT36_PROTECT":{"code":"1-385","short":"PROTECT","wno":"463","kind":"BOOTS","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Botas Protetoras","ja":"プロテクトブーツ","img":"img/cards/card_114.png","hd":0},"ARMOR2_RO29_SHINKI":{"code":"1-388","short":"SHINKI","wno":"465","kind":"ARMOR","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Manto Astral","ja":"アストラルローブ","img":"img/cards/card_188.png","hd":0},"BOOTS2_BT50_SHINKI":{"code":"1-389","short":"SHINKI","wno":"466","kind":"BOOTS","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Botas Astrais","ja":"アストラルブーツ","img":"img/cards/card_119.png","hd":0},"HELM2_HM72_SHINKI":{"code":"1-390","short":"SHINKI","wno":"467","kind":"HELM","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Chapéu Astral","ja":"アストラルハット","img":"img/cards_hd/HELM2_HM72_SHINKI.jpg","hd":1},"ARMOR2_AM19_SPIKE":{"code":"0-2706","short":"SPIKE","wno":"507","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Couraça de Espinhos","ja":"スパイククロス","img":"img/cards/card_087.png","hd":0},"ARMOR2_RO12_BURGLARJACKET":{"code":"1-438","short":"BURGLARJACKET","wno":"508","kind":"ARMOR","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Jaqueta do Ladrão","ja":"バーグラージャケット","img":"img/cards/card_177.png","hd":0},"HELM2_HM11_WINGHAT":{"code":"0-2708","short":"WINGHAT","wno":"509","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Elmo Alado","ja":"ウィングヘルム","img":"img/cards_hd/HELM2_HM11_WINGHAT.jpg","hd":1},"HELM2_HM09_BANDANNA":{"code":"0-2707","short":"BANDANNA","wno":"510","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Bandana","ja":"バンダナ","img":"img/cards_hd/HELM2_HM09_BANDANNA.jpg","hd":1},"HELM2_HM47_GLASS":{"code":"0-2710","short":"GLASS","wno":"511","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Óculos","ja":"メガネ","img":"img/cards/card_155.png","hd":0},"HELM2_HM52_EVILEYE":{"code":"0-2711","short":"EVILEYE","wno":"512","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Olho Maligno","ja":"イービルアイ","img":"img/cards/card_157.png","hd":0},"HELM2_HM55_VALKYRIE":{"code":"1-445","short":"VALKYRIE","wno":"513","kind":"HELM","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Valquíria","ja":"ヴァルキリエ","img":"img/cards/card_158.png","hd":0},"HELM2_HM58_BARRETTE":{"code":"1-444","short":"BARRETTE","wno":"514","kind":"HELM","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Presilha do Falcão","ja":"ファルコンバレッタ","img":"img/cards/card_159.png","hd":0},"BOOTS2_BT16_ROGUE":{"code":"0-2713","short":"ROGUE","wno":"515","kind":"BOOTS","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Botas de Malandro","ja":"ローグブーツ","img":"img/cards_hd/BOOTS2_BT16_ROGUE.jpg","hd":1},"SHIELD2_SH13_MAGIC":{"code":"1-443","short":"MAGIC","wno":"516","kind":"SHIELD","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Escudo Mágico","ja":"マジックシールド","img":"img/cards_hd/SHIELD2_SH13_MAGIC.jpg","hd":1},"ARMOR2_AM18_CUCHULAIN":{"code":"1-439","short":"CUCHULAIN","wno":"557","kind":"ARMOR","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Armadura Sólida","ja":"ソリッドアーマー","img":"img/cards/card_086.png","hd":0},"ARMOR2_RO23_SHAMANQUILT":{"code":"1-440","short":"SHAMANQUILT","wno":"558","kind":"ARMOR","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Kilt de Xamã","ja":"シャーマンキルト","img":"img/cards/card_186.png","hd":0},"ARMOR2_RO19_MUSSU1":{"code":"1-441","short":"MUSSU1","wno":"559","kind":"ARMOR","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Manto Anelado","ja":"リンガーローブ","img":"img/cards/card_181.png","hd":0},"ARMOR2_RO31_SHINKI":{"code":"1-442","short":"SHINKI","wno":"560","kind":"ARMOR","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Malha de Bandido","ja":"バンデットメイル","img":"img/cards/card_189.png","hd":0},"ARMOR2_AM31_COPPERCLOTH":{"code":"0-2353","short":"COPPERCLOTH","wno":"—","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Couraça de Cobre","ja":"カッパークロス","img":"img/cards/card_090.png","hd":0},"ARMOR2_RO18_DEGRATICA":{"code":"0-2355","short":"DEGRATICA","wno":"—","kind":"ARMOR","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Degratica","ja":"ディグラティカ","img":"img/cards/card_179.png","hd":0},"SHIELD2_SH23_CHARCOAL":{"code":"0-2356","short":"CHARCOAL","wno":"—","kind":"SHIELD","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Escudo de Carvão","ja":"チャコールシールド","img":"img/cards/card_202.png","hd":0},"HELM2_HM35_RUSTYHAT":{"code":"0-2357","short":"RUSTYHAT","wno":"—","kind":"HELM","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Chapéu Enferrujado","ja":"ラスティハット","img":"img/cards/card_146.png","hd":0},"BOOTS2_BT31_CROWNSHOES":{"code":"0-2358","short":"CROWNSHOES","wno":"—","kind":"BOOTS","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Sapatos de Palhaço","ja":"クラウンシューズ","img":"img/cards/card_110.png","hd":0},"HELM2_HM60_MASQUERADE":{"code":"0-2712","short":"MASQUERADE","wno":"—","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Máscara de Baile","ja":"マスカレイドマスク","img":"img/cards_hd/HELM2_HM60_MASQUERADE.jpg","hd":1},"HELM2_HM48_GOBLINMASK":{"code":"1-360","short":"GOBLINMASK","wno":"—","kind":"HELM","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Máscara de Goblin","ja":"ゴブリンマスク","img":"img/cards/card_156.png","hd":0},"ACCES2_AL01_FIREAMULET":{"code":"0-2232","short":"FIREAMULET","wno":"044","kind":"ACCES","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Amuleto de Fogo","ja":"ファイアーアミュレット","img":"img/cards_hd/ACCES2_AL01_FIREAMULET.jpg","hd":1},"ACCES2_RI03_POWERRING":{"code":"0-2237","short":"POWERRING","wno":"045","kind":"ACCES","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Anel do Poder","ja":"パワーリング","img":"img/cards_hd/ACCES2_RI03_POWERRING.jpg","hd":1},"ACCES2_AL02_ICEAMULET":{"code":"0-2233","short":"ICEAMULET","wno":"182","kind":"ACCES","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Amuleto de Gelo","ja":"アイスアミュレット","img":"img/cards_hd/ACCES2_AL02_ICEAMULET.jpg","hd":1},"ACCES2_AL03_THUNDERAMULET":{"code":"0-2234","short":"THUNDERAMULET","wno":"183","kind":"ACCES","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Amuleto do Trovão","ja":"サンダーアミュレット","img":"img/cards_hd/ACCES2_AL03_THUNDERAMULET.jpg","hd":1},"ACCES2_RI05_MAGICIANRING":{"code":"0-2239","short":"MAGICIANRING","wno":"184","kind":"ACCES","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Anel Mágico","ja":"マジックリング","img":"img/cards_hd/ACCES2_RI05_MAGICIANRING.jpg","hd":1},"ACCES2_RI02_TOUGHNESSRING":{"code":"0-2236","short":"TOUGHNESSRING","wno":"223","kind":"ACCES","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Anel da Resistência","ja":"タフネスリング","img":"img/cards_hd/ACCES2_RI02_TOUGHNESSRING.jpg","hd":1},"ACCES2_RI04_SPEEDRING":{"code":"0-2238","short":"SPEEDRING","wno":"224","kind":"ACCES","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Anel da Velocidade","ja":"スピードリング","img":"img/cards_hd/ACCES2_RI04_SPEEDRING.jpg","hd":1},"ACCES2_RI06_SIGHTRING":{"code":"0-2362","short":"SIGHTRING","wno":"246","kind":"ACCES","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Anel do Vendaval","ja":"ゲイルリング","img":"img/cards_hd/ACCES2_RI06_SIGHTRING.jpg","hd":1},"ACCES2_RI01_SPELLRING":{"code":"0-2363","short":"SPELLRING","wno":"247","kind":"ACCES","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Anel da Mente","ja":"マインドリング","img":"img/cards_hd/ACCES2_RI01_SPELLRING.jpg","hd":1},"ACCES2_AL05_DARKAMULET":{"code":"1-330","short":"DARKAMULET","wno":"251","kind":"ACCES","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Amuleto Sombrio","ja":"ダークアミュレット","img":"img/cards_hd/ACCES2_AL05_DARKAMULET.jpg","hd":1},"ACCES2_AL04_HOLYAMULET":{"code":"1-331","short":"HOLYAMULET","wno":"252","kind":"ACCES","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Amuleto Sagrado","ja":"ホーリーアミュレット","img":"img/cards/card_071.png","hd":0},"ACCES2_RI28_TECH":{"code":"1-489","short":"TECH","wno":"517","kind":"ACCES","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Anel Técnico","ja":"テックリング","img":"img/cards/card_168.png","hd":0},"ACCES2_RI31_LIBERAL":{"code":"1-490","short":"LIBERAL","wno":"518","kind":"ACCES","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Anel Liberal","ja":"リベラルリング","img":"img/cards/card_169.png","hd":0},"FOOD2_FD01_MEAT":{"code":"0-2059","short":"MEAT","wno":"046","kind":"FOOD","rar":"UC","flv":4,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Carne","ja":"肉","img":"img/cards/card_000.png","hd":0},"POTION2_PO01_HEAL1":{"code":"0-2066","short":"HEAL1","wno":"047","kind":"POTION","rar":"UC","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Poção","ja":"ポーション","img":"img/cards/card_036.png","hd":0},"POTION2_PO02_HEAL2":{"code":"1-232","short":"HEAL2","wno":"048","kind":"POTION","rar":"R","flv":4,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Superpoção","ja":"ハイポーション","img":"img/cards/card_037.png","hd":0},"FOOD2_FD09_MUSH":{"code":"0-2063","short":"MUSH","wno":"119","kind":"FOOD","rar":"UC","flv":2,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Cogumelo","ja":"きのこ","img":"img/cards/card_004.png","hd":0},"FOOD2_FD11_CHIKEN":{"code":"0-2065","short":"CHIKEN","wno":"120","kind":"FOOD","rar":"UC","flv":4,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Frango","ja":"鶏肉","img":"img/cards/card_006.png","hd":0},"POTION2_PO10_C_SLEEP":{"code":"0-2072","short":"C SLEEP","wno":"121","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Despertador","ja":"目覚まし薬","img":"img/cards_hd/POTION2_PO10_C_SLEEP.jpg","hd":1},"POTION2_PO12_C_PANIC":{"code":"0-2074","short":"C PANIC","wno":"122","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Sais Revigorantes","ja":"きつけ薬","img":"img/cards_hd/POTION2_PO12_C_PANIC.jpg","hd":1},"FOOD2_FD05_BREAD":{"code":"0-2061","short":"BREAD","wno":"185","kind":"FOOD","rar":"UC","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Pão","ja":"パン","img":"img/cards/card_002.png","hd":0},"FOOD2_FD10_CHEESE":{"code":"0-2064","short":"CHEESE","wno":"186","kind":"FOOD","rar":"UC","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Queijo","ja":"チーズ","img":"img/cards/card_005.png","hd":0},"POTION2_PO05_POISON1":{"code":"0-2067","short":"POISON1","wno":"187","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Veneno","ja":"毒薬","img":"img/cards/card_038.png","hd":0},"POTION2_PO06_SLEEP1":{"code":"0-2068","short":"SLEEP1","wno":"188","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Sonífero","ja":"眠り薬","img":"img/cards/card_039.png","hd":0},"POTION2_PO07_SILENCE1":{"code":"0-2069","short":"SILENCE1","wno":"189","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Remédio do Silêncio","ja":"沈黙薬","img":"img/cards/card_040.png","hd":0},"POTION2_PO08_PANIC1":{"code":"0-2070","short":"PANIC1","wno":"190","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Remédio da Confusão","ja":"混乱薬","img":"img/cards/card_041.png","hd":0},"POTION2_PO09_C_POISON":{"code":"0-2071","short":"C POISON","wno":"191","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Antídoto","ja":"解毒薬","img":"img/cards/card_042.png","hd":0},"POTION2_PO11_C_SILENT":{"code":"0-2073","short":"C SILENT","wno":"192","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Remédio Antisselo","ja":"封印解除薬","img":"img/cards_hd/POTION2_PO11_C_SILENT.jpg","hd":1},"POTION2_PO16_INVISIBLE1":{"code":"0-2579","short":"INVISIBLE1","wno":"340","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Remédio da Invisibilidade","ja":"透明薬","img":"img/cards_hd/POTION2_PO16_INVISIBLE1.jpg","hd":1},"POTION2_PO18_STRIKE":{"code":"0-2580","short":"STRIKE","wno":"341","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Erva do Golpe","ja":"打撃草","img":"img/cards/card_049.png","hd":0},"FOOD2_FD14_FIREWORKS":{"code":"0-2684","short":"FIREWORKS","wno":"436","kind":"FOOD","rar":"C","flv":1,"mode":"charges","max":33,"plus":99,"unit":3,"pt":"Fogos de Artifício","ja":"花火","img":"img/cards/card_007.png","hd":0},"POTION2_PO13_C_ALL":{"code":"1-408","short":"C ALL","wno":"487","kind":"POTION","rar":"R","flv":2,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Panaceia","ja":"万能薬","img":"img/cards/card_046.png","hd":0},"POTION2_PO17_BLUSTER":{"code":"0-2681","short":"BLUSTER","wno":"488","kind":"POTION","rar":"C","flv":1,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Erva da Investida","ja":"特攻草","img":"img/cards/card_048.png","hd":0},"FOOD2_FD15_CHOCOLATE":{"code":"1-356","short":"CHOCOLATE","wno":"—","kind":"FOOD","rar":"UC","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Chocolate","ja":"チョコレート","img":"img/cards/card_008.png","hd":0},"FOOD2_FD16_PERSIMMON":{"code":"1-357","short":"PERSIMMON","wno":"—","kind":"FOOD","rar":"UC","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Caqui","ja":"柿","img":"img/cards/card_009.png","hd":0},"FOOD2_FD22_D4FIREWORKS02":{"code":"1-483","short":"D4FIREWORKS02","wno":"—","kind":"FOOD","rar":"UC","flv":1,"mode":"charges","max":3,"plus":99,"unit":33,"pt":"Fogos de Sapo","ja":"蛙花火","img":"img/cards/card_011.png","hd":0},"FOOD2_FD23_D4FIREWORKS03":{"code":"1-484","short":"D4FIREWORKS03","wno":"—","kind":"FOOD","rar":"UC","flv":1,"mode":"charges","max":3,"plus":99,"unit":33,"pt":"Fogos (Estrela)","ja":"花火（飛星）","img":"img/cards/card_012.png","hd":0},"BOOK2_SC22_HEAL1":{"code":"0-2084","short":"HEAL1","wno":"058","kind":"BOOK","rar":"C","flv":2,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Cura Menor","ja":"マイナーヒール","img":"img/cards_hd/BOOK2_SC22_HEAL1.jpg","hd":1},"BOOK2_SC23_HEAL2":{"code":"0-2085","short":"HEAL2","wno":"059","kind":"BOOK","rar":"UC","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Cura","ja":"ヒール","img":"img/cards_hd/BOOK2_SC23_HEAL2.jpg","hd":1},"BOOK2_SC24_HEAL3":{"code":"1-238","short":"HEAL3","wno":"060","kind":"BOOK","rar":"R","flv":4,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Supercura","ja":"スーパーヒール","img":"img/cards_hd/BOOK2_SC24_HEAL3.jpg","hd":1},"BOOK2_SK212_ATKUP01":{"code":"0-2256","short":"ATKUP01","wno":"081","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Concentração","ja":"コンセントレーション","img":"img/cards_hd/BOOK2_SK212_ATKUP01.jpg","hd":1},"BOOK2_SK060_FIRE10":{"code":"0-2257","short":"FIRE10","wno":"082","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Explosão","ja":"エクスプロージョン","img":"img/cards_hd/BOOK2_SK060_FIRE10.jpg","hd":1},"BOOK2_SK057_FIRE07":{"code":"0-2258","short":"FIRE07","wno":"083","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Espírito do Fogo","ja":"ファイアースピリット","img":"img/cards_hd/BOOK2_SK057_FIRE07.jpg","hd":1},"BOOK2_SK069_ICE07":{"code":"0-2259","short":"ICE07","wno":"084","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Vento Gélido","ja":"アイスウインド","img":"img/cards_hd/BOOK2_SK069_ICE07.jpg","hd":1},"BOOK2_SK072_ICE10":{"code":"0-2260","short":"ICE10","wno":"085","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Impacto Tempestuoso","ja":"Ｓストームインパクト","img":"img/cards_hd/BOOK2_SK072_ICE10.jpg","hd":1},"BOOK2_SK078_THUNDER04":{"code":"0-2261","short":"THUNDER04","wno":"086","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Corrente de Relâmpagos","ja":"ライトニングチェイン","img":"img/skills/skill_073.png","hd":0},"BOOK2_SK081_THUNDER07":{"code":"0-2262","short":"THUNDER07","wno":"087","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Tempestade Elétrica","ja":"ライトニングストーム","img":"img/cards_hd/BOOK2_SK081_THUNDER07.jpg","hd":1},"BOOK2_JW01_RUBY_ORE":{"code":"0-2094","short":"RUBY ORE","wno":"123","kind":"BOOK","rar":"UC","flv":2,"mode":"indiv","max":5,"plus":0,"unit":1,"pt":"Rubi Bruto","ja":"ルビーの原石","img":"img/cards/card_022.png","hd":0},"BOOK2_JW05_AQUAMARINE_ORE":{"code":"0-2098","short":"AQUAMARINE ORE","wno":"124","kind":"BOOK","rar":"UC","flv":2,"mode":"indiv","max":5,"plus":0,"unit":1,"pt":"Água-marinha Bruta","ja":"アクアマリンの原石","img":"img/cards_hd/BOOK2_JW05_AQUAMARINE_ORE.jpg","hd":1},"BOOK2_JW06_AMETHYST_ORE":{"code":"0-2099","short":"AMETHYST ORE","wno":"125","kind":"BOOK","rar":"UC","flv":2,"mode":"indiv","max":5,"plus":0,"unit":1,"pt":"Ametista Bruta","ja":"アメジストの原石","img":"img/cards_hd/BOOK2_JW06_AMETHYST_ORE.jpg","hd":1},"BOOK2_SK211_SPEEDUP":{"code":"1-315","short":"SPEEDUP","wno":"135","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Acelerar","ja":"スピードアップ","img":"img/cards_hd/BOOK2_SK211_SPEEDUP.jpg","hd":1},"BOOK2_SK058_FIRE08":{"code":"0-2293","short":"FIRE08","wno":"145","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Espírito da Chama","ja":"フレイムスピリット","img":"img/cards_hd/BOOK2_SK058_FIRE08.jpg","hd":1},"BOOK2_SK070_ICE08":{"code":"0-2296","short":"ICE08","wno":"148","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Tempestade de Gelo","ja":"アイスストーム","img":"img/cards_hd/BOOK2_SK070_ICE08.jpg","hd":1},"BOOK2_SK087_POISON01":{"code":"0-2300","short":"POISON01","wno":"151","kind":"BOOK","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Veneno","ja":"ポイズン","img":"img/cards_hd/BOOK2_SK087_POISON01.jpg","hd":1},"BOOK2_SK089_PANIC01":{"code":"0-2302","short":"PANIC01","wno":"152","kind":"BOOK","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Confusão","ja":"コンフューズ","img":"img/cards_hd/BOOK2_SK089_PANIC01.jpg","hd":1},"BOOK2_SK095_HOLY02":{"code":"0-2310","short":"HOLY02","wno":"157","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Relâmpago Sagrado","ja":"ホーリーライトニング","img":"img/cards_hd/BOOK2_SK095_HOLY02.jpg","hd":1},"BOOK2_SK097_HEAL01":{"code":"0-2311","short":"HEAL01","wno":"158","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Cura Leve","ja":"マイナーヒーリング","img":"img/cards_hd/BOOK2_SK097_HEAL01.jpg","hd":1},"BOOK2_SK098_HEAL02":{"code":"0-2312","short":"HEAL02","wno":"159","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Curar","ja":"ヒーリング","img":"img/cards_hd/BOOK2_SK098_HEAL02.jpg","hd":1},"BOOK2_SK100_HEAL04":{"code":"0-2313","short":"HEAL04","wno":"160","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Nova Curativa Menor","ja":"マイナーヒールノヴァ","img":"img/cards_hd/BOOK2_SK100_HEAL04.jpg","hd":1},"BOOK2_SK103_HEAL07":{"code":"0-2315","short":"HEAL07","wno":"161","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Impacto Curativo M","ja":"Ｍヒールインパクト","img":"img/skills/skill_096.png","hd":0},"BOOK2_SK112_STRUP01":{"code":"0-2318","short":"STRUP01","wno":"163","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Canção do Poder","ja":"ソングオブパワー","img":"img/cards_hd/BOOK2_SK112_STRUP01.jpg","hd":1},"BOOK2_SK115_DEFUP01":{"code":"0-2319","short":"DEFUP01","wno":"164","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Escudo","ja":"シールド","img":"img/cards_hd/BOOK2_SK115_DEFUP01.jpg","hd":1},"BOOK2_JW02_DIAMOND_ORE":{"code":"0-2095","short":"DIAMOND ORE","wno":"193","kind":"BOOK","rar":"UC","flv":2,"mode":"indiv","max":5,"plus":0,"unit":1,"pt":"Diamante Bruto","ja":"ダイヤモンドの原石","img":"img/cards_hd/BOOK2_JW02_DIAMOND_ORE.jpg","hd":1},"BOOK2_SK088_SLEEP01":{"code":"0-2301","short":"SLEEP01","wno":"199","kind":"BOOK","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Sono","ja":"スリープ","img":"img/cards_hd/BOOK2_SK088_SLEEP01.jpg","hd":1},"BOOK2_SK096_HOLY03":{"code":"1-325","short":"HOLY03","wno":"203","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Raio Sagrado","ja":"ホーリーボルト","img":"img/cards_hd/BOOK2_SK096_HOLY03.jpg","hd":1},"BOOK2_SK101_HEAL05":{"code":"0-2314","short":"HEAL05","wno":"204","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Nova Curativa","ja":"ヒールノヴァ","img":"img/cards_hd/BOOK2_SK101_HEAL05.jpg","hd":1},"BOOK2_SK104_HEAL08":{"code":"0-2316","short":"HEAL08","wno":"205","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Impacto Curativo","ja":"ヒールインパクト","img":"img/cards_hd/BOOK2_SK104_HEAL08.jpg","hd":1},"BOOK2_SK106_SILENT01":{"code":"1-326","short":"SILENT01","wno":"206","kind":"BOOK","rar":"R","flv":2,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Silêncio","ja":"サイレンス","img":"img/skills/skill_099.png","hd":0},"BOOK2_JW03_TOPAZ_ORE":{"code":"0-2096","short":"TOPAZ ORE","wno":"225","kind":"BOOK","rar":"UC","flv":2,"mode":"indiv","max":5,"plus":0,"unit":1,"pt":"Topázio Bruto","ja":"トパーズの原石","img":"img/cards/card_024.png","hd":0},"BOOK2_JW04_SAPPHIA_ORE":{"code":"0-2097","short":"SAPPHIA ORE","wno":"226","kind":"BOOK","rar":"UC","flv":2,"mode":"indiv","max":5,"plus":0,"unit":1,"pt":"Safira Bruta","ja":"サファイアの原石","img":"img/cards_hd/BOOK2_JW04_SAPPHIA_ORE.jpg","hd":1},"BOOK2_JW07_EMERALD_ORE":{"code":"0-2100","short":"EMERALD ORE","wno":"227","kind":"BOOK","rar":"UC","flv":2,"mode":"indiv","max":5,"plus":0,"unit":1,"pt":"Esmeralda Bruta","ja":"エメラルドの原石","img":"img/cards_hd/BOOK2_JW07_EMERALD_ORE.jpg","hd":1},"BOOK2_SK059_FIRE09":{"code":"1-321","short":"FIRE09","wno":"239","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espírito da Salamandra","ja":"サラマンダースピリット","img":"img/cards_hd/BOOK2_SK059_FIRE09.jpg","hd":1},"BOOK2_SK079_THUNDER05":{"code":"0-2299","short":"THUNDER05","wno":"241","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corrente de Trovões","ja":"サンダーチェイン","img":"img/cards_hd/BOOK2_SK079_THUNDER05.jpg","hd":1},"BOOK2_SK080_THUNDER06":{"code":"1-324","short":"THUNDER06","wno":"242","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Corrente de Trovões T","ja":"Ｔサンダーチェイン","img":"img/cards_hd/BOOK2_SK080_THUNDER06.jpg","hd":1},"BOOK2_SK111_C_ALL01":{"code":"1-327","short":"C ALL01","wno":"243","kind":"BOOK","rar":"R","flv":2,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Cura Total","ja":"キュアオール","img":"img/cards_hd/BOOK2_SK111_C_ALL01.jpg","hd":1},"BOOK2_SK128_BOMB":{"code":"0-2545","short":"BOMB","wno":"295","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Bomba","ja":"ボム","img":"img/cards_hd/BOOK2_SK128_BOMB.jpg","hd":1},"BOOK2_SK134_INVISIBLE":{"code":"0-2546","short":"INVISIBLE","wno":"296","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Invisível","ja":"インビジブル","img":"img/cards_hd/BOOK2_SK134_INVISIBLE.jpg","hd":1},"BOOK2_SK124_BODY01":{"code":"0-2552","short":"BODY01","wno":"302","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Corpo Ardente","ja":"ヒートボディ","img":"img/cards_hd/BOOK2_SK124_BODY01.jpg","hd":1},"BOOK2_SK137_QUAKE1":{"code":"0-2553","short":"QUAKE1","wno":"303","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Sacudir o Solo","ja":"グランドシェイカー","img":"img/cards_hd/BOOK2_SK137_QUAKE1.jpg","hd":1},"BOOK2_SK054_FIRE04":{"code":"0-2554","short":"FIRE04","wno":"304","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Fogo Convergente","ja":"コンバージファイアー","img":"img/cards_hd/BOOK2_SK054_FIRE04.jpg","hd":1},"BOOK2_SK071_ICE09":{"code":"0-2555","short":"ICE09","wno":"305","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Nevasca de Gelo","ja":"アイスブリザード","img":"img/cards_hd/BOOK2_SK071_ICE09.jpg","hd":1},"BOOK2_SK082_THUNDER08":{"code":"0-2556","short":"THUNDER08","wno":"306","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Tornado Elétrico","ja":"ライトニングトルネード","img":"img/skills/skill_077.png","hd":0},"BOOK2_SK148_INTUP01":{"code":"0-2557","short":"INTUP01","wno":"307","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Aura","ja":"オーラ","img":"img/cards_hd/BOOK2_SK148_INTUP01.jpg","hd":1},"BOOK2_SK401_TORNADO01":{"code":"0-2561","short":"TORNADO01","wno":"311","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Vento Sagrado","ja":"ホーリーウィンド","img":"img/cards_hd/BOOK2_SK401_TORNADO01.jpg","hd":1},"BOOK2_SK118_STRDW01":{"code":"0-2562","short":"STRDW01","wno":"312","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Enfraquecer","ja":"パワーダウン","img":"img/cards_hd/BOOK2_SK118_STRDW01.jpg","hd":1},"BOOK2_SK121_DEFDW01":{"code":"0-2563","short":"DEFDW01","wno":"313","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Fraqueza","ja":"ウィークネス","img":"img/cards_hd/BOOK2_SK121_DEFDW01.jpg","hd":1},"BOOK2_SK099_HEAL03":{"code":"1-341","short":"HEAL03","wno":"314","kind":"BOOK","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Supercurar","ja":"スーパーヒーリング","img":"img/cards_hd/BOOK2_SK099_HEAL03.jpg","hd":1},"BOOK2_SK116_DEFUP02":{"code":"0-2565","short":"DEFUP02","wno":"315","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Proteção","ja":"プロテクション","img":"img/cards_hd/BOOK2_SK116_DEFUP02.jpg","hd":1},"BOOK2_SK105_HEAL09":{"code":"1-342","short":"HEAL09","wno":"316","kind":"BOOK","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Impacto Curativo S","ja":"Ｓヒールインパクト","img":"img/skills/skill_098.png","hd":0},"BOOK2_SK451_REGIST_FIRE":{"code":"0-2567","short":"REGIST FIRE","wno":"317","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Resistir ao Fogo","ja":"レジストファイアー","img":"img/cards_hd/BOOK2_SK451_REGIST_FIRE.jpg","hd":1},"BOOK2_SK452_REGIST_ICE":{"code":"0-2568","short":"REGIST ICE","wno":"318","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Resistir ao Gelo","ja":"レジストアイス","img":"img/cards_hd/BOOK2_SK452_REGIST_ICE.jpg","hd":1},"BOOK2_SK453_REGIST_THUNDER":{"code":"0-2569","short":"REGIST THUNDER","wno":"319","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Resistir ao Trovão","ja":"レジストサンダー","img":"img/cards_hd/BOOK2_SK453_REGIST_THUNDER.jpg","hd":1},"BOOK2_GG15_MAP":{"code":"0-2578","short":"MAP","wno":"339","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Mapa","ja":"地図","img":"img/cards/card_020.png","hd":0},"BOOK2_SK129_BOMB_STUN":{"code":"0-2582","short":"BOMB STUN","wno":"343","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Bomba Atordoante","ja":"スタンボム","img":"img/cards_hd/BOOK2_SK129_BOMB_STUN.jpg","hd":1},"BOOK2_SK131_MINE01":{"code":"0-2583","short":"MINE01","wno":"344","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Mina","ja":"マイン","img":"img/cards_hd/BOOK2_SK131_MINE01.jpg","hd":1},"BOOK2_SK136_IMPASSE":{"code":"0-2585","short":"IMPASSE","wno":"346","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Detectar","ja":"ディティクト","img":"img/cards_hd/BOOK2_SK136_IMPASSE.jpg","hd":1},"BOOK2_SK125_BODY02":{"code":"0-2586","short":"BODY02","wno":"347","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Permanência","ja":"パーマネンス","img":"img/cards_hd/BOOK2_SK125_BODY02.jpg","hd":1},"BOOK2_SK140_FIREWALL1":{"code":"0-2587","short":"FIREWALL1","wno":"348","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Muro de Fogo","ja":"ファイアーウォール","img":"img/skills/skill_124.png","hd":0},"BOOK2_SK091_POISON02":{"code":"0-2588","short":"POISON02","wno":"349","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Chuva Ácida","ja":"アシッドレイン","img":"img/cards_hd/BOOK2_SK091_POISON02.jpg","hd":1},"BOOK2_SK061_FIRE11":{"code":"0-2589","short":"FIRE11","wno":"350","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Inferno de Chamas","ja":"フレイムインフェルノ","img":"img/skills/skill_056.png","hd":0},"BOOK2_SK113_STRUP02":{"code":"0-2590","short":"STRUP02","wno":"351","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Canção da Batalha","ja":"ソングオブバトル","img":"img/cards_hd/BOOK2_SK113_STRUP02.jpg","hd":1},"BOOK2_SK454_REGIST_HOLY":{"code":"0-2591","short":"REGIST HOLY","wno":"352","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Resistir à Luz","ja":"レジストホーリー","img":"img/cards_hd/BOOK2_SK454_REGIST_HOLY.jpg","hd":1},"BOOK2_SK455_REGIST_DARK":{"code":"0-2592","short":"REGIST DARK","wno":"353","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Resistir às Trevas","ja":"レジストダーク","img":"img/cards_hd/BOOK2_SK455_REGIST_DARK.jpg","hd":1},"BOOK2_SK149_MNDUP01":{"code":"0-2593","short":"MNDUP01","wno":"354","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Graça","ja":"グレイス","img":"img/cards_hd/BOOK2_SK149_MNDUP01.jpg","hd":1},"BOOK2_SK090_STONE01":{"code":"0-2594","short":"STONE01","wno":"355","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Pedra","ja":"ストーン","img":"img/cards_hd/BOOK2_SK090_STONE01.jpg","hd":1},"BOOK2_SK073_ICE11":{"code":"0-2595","short":"ICE11","wno":"356","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Impacto Congelante","ja":"フリーズインパクト","img":"img/cards_hd/BOOK2_SK073_ICE11.jpg","hd":1},"BOOK2_SK404_HOLY04":{"code":"0-2596","short":"HOLY04","wno":"357","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Força Sagrada","ja":"セイクレッドフォース","img":"img/cards_hd/BOOK2_SK404_HOLY04.jpg","hd":1},"BOOK2_SK407_SAINT01":{"code":"0-2597","short":"SAINT01","wno":"358","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Luz Santa","ja":"セイントライト","img":"img/cards_hd/BOOK2_SK407_SAINT01.jpg","hd":1},"BOOK2_SK150_LUCUP01":{"code":"1-361","short":"LUCUP01","wno":"359","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Sorte","ja":"ラック","img":"img/cards_hd/BOOK2_SK150_LUCUP01.jpg","hd":1},"BOOK2_SK084_THUNDER10":{"code":"0-2642","short":"THUNDER10","wno":"397","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Martelo do Deus do Trovão","ja":"雷神の鉄槌","img":"img/skills/skill_079.png","hd":0},"BOOK2_SK062_FIRE12":{"code":"1-394","short":"FIRE12","wno":"398","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Vulcão","ja":"ボルケーノ","img":"img/skills/skill_057.png","hd":0},"BOOK2_SK055_FIRE05":{"code":"0-2643","short":"FIRE05","wno":"399","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Chama Convergente","ja":"コンバージフレイム","img":"img/skills/skill_050.png","hd":0},"BOOK2_SK066_ICE04":{"code":"0-2644","short":"ICE04","wno":"400","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Corte de Gelo","ja":"アイススラッシュ","img":"img/skills/skill_061.png","hd":0},"BOOK2_SK074_ICE12":{"code":"1-397","short":"ICE12","wno":"401","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Impacto da Nevasca","ja":"ブリザードインパクト","img":"img/skills/skill_069.png","hd":0},"BOOK2_SK138_QUAKE2":{"code":"0-2646","short":"QUAKE2","wno":"402","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Terremoto","ja":"アースクェイク","img":"img/skills/skill_122.png","hd":0},"BOOK2_SK457_MPRATIO":{"code":"0-2648","short":"MPRATIO","wno":"404","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Ressurreição da Alma","ja":"ソウルリザレクション","img":"img/cards_hd/BOOK2_SK457_MPRATIO.jpg","hd":1},"BOOK2_SK092_STUN01":{"code":"0-2649","short":"STUN01","wno":"405","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Onda de Choque","ja":"ショックウェーブ","img":"img/skills/skill_085.png","hd":0},"BOOK2_SK146_DEXUP01":{"code":"0-2650","short":"DEXUP01","wno":"406","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Rapidez","ja":"クイックネス","img":"img/skills/skill_127.png","hd":0},"BOOK2_SK144_LVLDOWN":{"code":"0-2652","short":"LVLDOWN","wno":"407","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Rebaixar Nível","ja":"レベルダウン","img":"img/skills/skill_126.png","hd":0},"BOOK2_SK408_SAINT02":{"code":"0-2654","short":"SAINT02","wno":"408","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Sopro Santo","ja":"セイントブレス","img":"img/skills/skill_317.png","hd":0},"BOOK2_SK402_TORNADO02":{"code":"0-2655","short":"TORNADO02","wno":"409","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Tornado Sagrado","ja":"ホーリートルネード","img":"img/skills/skill_313.png","hd":0},"BOOK2_SK472_MAGE03":{"code":"0-2675","short":"MAGE03","wno":"425","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Dor Genocida","ja":"ジェノサイドペイン","img":"img/skills/skill_331.png","hd":0},"BOOK2_SK471_MAGE02":{"code":"0-2676","short":"MAGE02","wno":"426","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Zero Absoluto","ja":"アブソリュートゼロ","img":"img/skills/skill_330.png","hd":0},"BOOK2_SK470_MAGE01":{"code":"1-405","short":"MAGE01","wno":"427","kind":"BOOK","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Última Lembrança","ja":"ラストメモリー","img":"img/skills/skill_329.png","hd":0},"BOOK2_SK481_BISHOP02":{"code":"0-2677","short":"BISHOP02","wno":"428","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Onda da Vitória","ja":"ビクトリーサージ","img":"img/skills/skill_333.png","hd":0},"BOOK2_SK482_BISHOP03":{"code":"0-2678","short":"BISHOP03","wno":"429","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Proteção D","ja":"Ｄプロテクション","img":"img/skills/skill_334.png","hd":0},"BOOK2_SK480_BISHOP01":{"code":"1-406","short":"BISHOP01","wno":"430","kind":"BOOK","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Força Elemental","ja":"エレメンタルフォース","img":"img/skills/skill_332.png","hd":0},"BOOK2_SK490_BANDIT01":{"code":"0-2680","short":"BANDIT01","wno":"432","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Tornado de Ouro","ja":"ゴールドツイスター","img":"img/skills/skill_335.png","hd":0},"BOOK2_GG16_COMPASS":{"code":"0-2682","short":"COMPASS","wno":"434","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Cristal","ja":"水晶","img":"img/cards/card_021.png","hd":0},"BOOK2_GG07_OCARINA":{"code":"0-2683","short":"OCARINA","wno":"435","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Ocarina","ja":"オカリナ","img":"img/cards_hd/BOOK2_GG07_OCARINA.jpg","hd":1},"BOOK2_SK068_ICE06":{"code":"1-396","short":"ICE06","wno":"468","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Corte da Nevasca","ja":"ブリザードスラッシュ","img":"img/skills/skill_063.png","hd":0},"BOOK2_SK139_QUAKE3":{"code":"1-398","short":"QUAKE3","wno":"469","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Fúria de Gaia","ja":"レイジングガイア","img":"img/skills/skill_123.png","hd":0},"BOOK2_SK056_FIRE06":{"code":"1-395","short":"FIRE06","wno":"470","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Inferno Convergente","ja":"コンバージインフェルノ","img":"img/skills/skill_051.png","hd":0},"BOOK2_SK147_AGIUP01":{"code":"0-2651","short":"AGIUP01","wno":"475","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Ligeireza","ja":"スウィットネス","img":"img/skills/skill_128.png","hd":0},"BOOK2_SK143_NOATTACK":{"code":"0-2653","short":"NOATTACK","wno":"476","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Solidão","ja":"ソリチュード","img":"img/skills/skill_125.png","hd":0},"BOOK2_SK409_SAINT03":{"code":"1-400","short":"SAINT03","wno":"477","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lágrima Santa","ja":"セイントティアー","img":"img/skills/skill_318.png","hd":0},"BOOK2_SK403_TORNADO03":{"code":"1-401","short":"TORNADO03","wno":"478","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Tempestade Sagrada","ja":"ホーリーストーム","img":"img/skills/skill_314.png","hd":0},"BOOK2_SK083_THUNDER09":{"code":"1-393","short":"THUNDER09","wno":"479","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Tormenta Elétrica","ja":"ライトニングテンペスト","img":"img/skills/skill_078.png","hd":0},"BOOK2_SK420_SHIELDBASH":{"code":"0-2639","short":"SHIELDBASH","wno":"480","kind":"BOOK","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Golpe de Escudo","ja":"シールドバッシュ","img":"img/skills/skill_319.png","hd":0},"BOOK2_SK135_STONE_COVER":{"code":"0-2657","short":"STONE COVER","wno":"481","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Prever","ja":"プレディクト","img":"img/skills/skill_119.png","hd":0},"BOOK2_SK067_ICE05":{"code":"0-2645","short":"ICE05","wno":"483","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corte Gélido","ja":"フロストスラッシュ","img":"img/skills/skill_062.png","hd":0},"BOOK2_SK317_GRAPPLE":{"code":"0-2719","short":"GRAPPLE","wno":"519","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Agarrão","ja":"グラップル","img":"img/skills/skill_253.png","hd":0},"BOOK2_SK322_MANADRAIN":{"code":"0-2723","short":"MANADRAIN","wno":"523","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Dreno de Mana","ja":"マナドレイン","img":"img/skills/skill_258.png","hd":0},"BOOK2_SK329_HEAL06":{"code":"1-463","short":"HEAL06","wno":"525","kind":"BOOK","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Supernova Curativa","ja":"スーパーヒールノヴァ","img":"img/skills/skill_265.png","hd":0},"BOOK2_SK332_HOLY05":{"code":"0-2729","short":"HOLY05","wno":"526","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Círculo Sagrado","ja":"セイクレッドサークル","img":"img/skills/skill_268.png","hd":0},"BOOK2_SK367_POISON_EN":{"code":"0-2736","short":"POISON EN","wno":"528","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Encantar Veneno","ja":"エンチャントポイズン","img":"img/skills/skill_303.png","hd":0},"BOOK2_SK340_ARMS":{"code":"1-466","short":"ARMS","wno":"530","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Armas","ja":"アームズ","img":"img/skills/skill_276.png","hd":0},"BOOK2_SK330_RAPID":{"code":"1-468","short":"RAPID","wno":"535","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Movimento Rápido","ja":"ラピッドムーブ","img":"img/cards_hd/BOOK2_SK330_RAPID.jpg","hd":1},"BOOK2_SK352_GRAVITY":{"code":"0-2746","short":"GRAVITY","wno":"540","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Campo Gravitacional","ja":"グラビティフィールド","img":"img/skills/skill_288.png","hd":0},"BOOK2_SK353_VENOM":{"code":"0-2747","short":"VENOM","wno":"541","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Peçonha","ja":"ベノム","img":"img/skills/skill_289.png","hd":0},"BOOK2_SK355_JAVELIN":{"code":"1-476","short":"JAVELIN","wno":"542","kind":"BOOK","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Dardo de Gelo","ja":"アイスジャベリン","img":"img/cards_hd/BOOK2_SK355_JAVELIN.jpg","hd":1},"BOOK2_SK359_HOLYSTREAM":{"code":"0-2748","short":"HOLYSTREAM","wno":"544","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Fluxo Sagrado","ja":"ホーリーストリーム","img":"img/skills/skill_295.png","hd":0},"BOOK2_SK360_DESIRE":{"code":"0-2749","short":"DESIRE","wno":"545","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Canção do Desejo","ja":"ソングオブデザイア","img":"img/skills/skill_296.png","hd":0},"BOOK2_SK363_BLASTARROW":{"code":"0-2750","short":"BLASTARROW","wno":"546","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Flecha Explosiva","ja":"ブラストアロー","img":"img/skills/skill_299.png","hd":0},"BOOK2_SK354_DARKFLARE":{"code":"1-475","short":"DARKFLARE","wno":"566","kind":"BOOK","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Chama Sombria","ja":"ダークフレア","img":"img/skills/skill_290.png","hd":0},"BOOK2_SK351_DEMONIC":{"code":"1-474","short":"DEMONIC","wno":"567","kind":"BOOK","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Ataque Demoníaco","ja":"デモニックレイド","img":"img/cards_hd/BOOK2_SK351_DEMONIC.jpg","hd":1},"BOOK2_SK335_SNARE":{"code":"1-481","short":"SNARE","wno":"571","kind":"BOOK","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Laço Sombrio","ja":"シャドウスネア","img":"img/skills/skill_271.png","hd":0},"BOOK2_SK323_ENFEEBLE":{"code":"0-2724","short":"ENFEEBLE","wno":"575","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Debilitar","ja":"エンフィーブル","img":"img/cards_hd/BOOK2_SK323_ENFEEBLE.jpg","hd":1},"BOOK2_SK333_DULLNESS":{"code":"0-2731","short":"DULLNESS","wno":"580","kind":"BOOK","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Lerdeza","ja":"ダルネス","img":"img/cards_hd/BOOK2_SK333_DULLNESS.jpg","hd":1},"BOOK2_SK331_HOLY06":{"code":"1-464","short":"HOLY06","wno":"582","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Aglomerado Sagrado","ja":"セイクレッドクラスター","img":"img/cards_hd/BOOK2_SK331_HOLY06.jpg","hd":1},"BOOK2_SK362_FANG":{"code":"0-2738","short":"FANG","wno":"584","kind":"BOOK","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Presa do Tigre","ja":"タイガーファング","img":"img/cards_hd/BOOK2_SK362_FANG.jpg","hd":1},"BOOK2_JW08_RUBY":{"code":"1-446","short":"RUBY","wno":"589","kind":"BOOK","rar":"R","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Rubi Lapidado","ja":"ルビーの宝石","img":"img/cards/card_029.png","hd":0},"BOOK2_JW12_AQUAMARINE":{"code":"1-447","short":"AQUAMARINE","wno":"590","kind":"BOOK","rar":"R","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Água-marinha Lapidada","ja":"アクアマリンの宝石","img":"img/cards/card_033.png","hd":0},"BOOK2_JW13_AMETHYST":{"code":"1-448","short":"AMETHYST","wno":"591","kind":"BOOK","rar":"R","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Ametista Lapidada","ja":"アメジストの宝石","img":"img/cards/card_034.png","hd":0},"BOOK2_JW11_SAPPHIA":{"code":"1-449","short":"SAPPHIA","wno":"592","kind":"BOOK","rar":"R","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Safira Lapidada","ja":"サファイアの宝石","img":"img/cards/card_032.png","hd":0},"BOOK2_JW10_TOPAZ":{"code":"1-450","short":"TOPAZ","wno":"593","kind":"BOOK","rar":"R","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Topázio Lapidado","ja":"トパーズの宝石","img":"img/cards/card_031.png","hd":0},"BOOK2_JW14_EMERALD":{"code":"1-451","short":"EMERALD","wno":"594","kind":"BOOK","rar":"R","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Esmeralda Lapidada","ja":"エメラルドの宝石","img":"img/cards/card_035.png","hd":0},"BOOK2_JW09_DIAMOND":{"code":"1-452","short":"DIAMOND","wno":"595","kind":"BOOK","rar":"R","flv":3,"mode":"indiv","max":3,"plus":0,"unit":1,"pt":"Diamante Lapidado","ja":"ダイヤモンドの宝石","img":"img/cards/card_030.png","hd":0},"BOOK2_SC01_FIRE1":{"code":"0-2077","short":"FIRE1","wno":"049/143","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Bola de Fogo","ja":"ファイアーボール","img":"img/cards_hd/BOOK2_SC01_FIRE1.jpg","hd":1},"BOOK2_SC02_FIRE2":{"code":"0-2078","short":"FIRE2","wno":"050/144","kind":"BOOK","rar":"UC","flv":1,"mode":"charges","max":20,"plus":20,"unit":1,"pt":"Explosão Flamejante","ja":"フレアバースト","img":"img/cards/card_053.png","hd":0},"BOOK2_SC10_ICE1":{"code":"0-2080","short":"ICE1","wno":"052/146","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Rajada de Gelo","ja":"アイスブラスト","img":"img/cards_hd/BOOK2_SC10_ICE1.jpg","hd":1},"BOOK2_SC11_ICE2":{"code":"0-2081","short":"ICE2","wno":"053/147","kind":"BOOK","rar":"UC","flv":1,"mode":"charges","max":20,"plus":20,"unit":1,"pt":"Queimadura de Gelo","ja":"フロストバイト","img":"img/cards_hd/BOOK2_SC11_ICE2.jpg","hd":1},"BOOK2_SC16_THUNDER1":{"code":"0-2082","short":"THUNDER1","wno":"055/149","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Bola de Trovão","ja":"サンダーボール","img":"img/cards_hd/BOOK2_SC16_THUNDER1.jpg","hd":1},"BOOK2_SC17_THUNDER2":{"code":"0-2083","short":"THUNDER2","wno":"056/150","kind":"BOOK","rar":"UC","flv":1,"mode":"charges","max":20,"plus":20,"unit":1,"pt":"Relâmpago","ja":"ライトニングボルト","img":"img/cards_hd/BOOK2_SC17_THUNDER2.jpg","hd":1},"BOOK2_SC41_C_POISON":{"code":"0-2089","short":"C POISON","wno":"061/090","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Curar Veneno","ja":"キュアポイズン","img":"img/cards_hd/BOOK2_SC41_C_POISON.jpg","hd":1},"BOOK2_SC42_C_SLEEP":{"code":"0-2090","short":"C SLEEP","wno":"062/091","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Despertar","ja":"アレイズ","img":"img/cards_hd/BOOK2_SC42_C_SLEEP.jpg","hd":1},"BOOK2_SC43_C_SILENCE":{"code":"0-2091","short":"C SILENCE","wno":"063/162","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Antissilêncio","ja":"アンチサイレンス","img":"img/cards_hd/BOOK2_SC43_C_SILENCE.jpg","hd":1},"BOOK2_SC44_C_PANIC":{"code":"0-2092","short":"C PANIC","wno":"064/092","kind":"BOOK","rar":"C","flv":1,"mode":"charges","max":30,"plus":30,"unit":1,"pt":"Curar Confusão","ja":"キュアコンフューズ","img":"img/cards/card_067.png","hd":0},"BOOK2_SK107_C_POISON01":{"code":"0-2265","short":"C POISON01","wno":"061/090","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Curar Veneno","ja":"キュアポイズン","img":"img/cards_hd/BOOK2_SK107_C_POISON01.jpg","hd":1},"BOOK2_SK108_C_SLEEP01":{"code":"0-2266","short":"C SLEEP01","wno":"062/091","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Despertar","ja":"アレイズ","img":"img/cards_hd/BOOK2_SK108_C_SLEEP01.jpg","hd":1},"BOOK2_SK110_C_PANIC01":{"code":"0-2267","short":"C PANIC01","wno":"064/092","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Curar Confusão","ja":"キュアコンフューズ","img":"img/skills/skill_103.png","hd":0},"BOOK2_SK051_FIRE01":{"code":"0-2291","short":"FIRE01","wno":"049/143","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Bola de Fogo","ja":"ファイアーボール","img":"img/cards_hd/BOOK2_SK051_FIRE01.jpg","hd":1},"BOOK2_SK052_FIRE02":{"code":"0-2292","short":"FIRE02","wno":"050/144","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Explosão Flamejante","ja":"フレアバースト","img":"img/cards_hd/BOOK2_SK052_FIRE02.jpg","hd":1},"BOOK2_SK063_ICE01":{"code":"0-2294","short":"ICE01","wno":"052/146","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Rajada de Gelo","ja":"アイスブラスト","img":"img/cards_hd/BOOK2_SK063_ICE01.jpg","hd":1},"BOOK2_SK064_ICE02":{"code":"0-2295","short":"ICE02","wno":"053/147","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Queimadura de Gelo","ja":"フロストバイト","img":"img/cards_hd/BOOK2_SK064_ICE02.jpg","hd":1},"BOOK2_SK075_THUNDER01":{"code":"0-2297","short":"THUNDER01","wno":"055/149","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Bola de Trovão","ja":"サンダーボール","img":"img/cards_hd/BOOK2_SK075_THUNDER01.jpg","hd":1},"BOOK2_SK076_THUNDER02":{"code":"0-2298","short":"THUNDER02","wno":"056/150","kind":"BOOK","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Relâmpago","ja":"ライトニングボルト","img":"img/skills/skill_071.png","hd":0},"BOOK2_SK094_HOLY01":{"code":"0-2309","short":"HOLY01","wno":"268/156","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Flecha Sagrada","ja":"ホーリーアロー","img":"img/cards_hd/BOOK2_SK094_HOLY01.jpg","hd":1},"BOOK2_SK109_C_SILENT01":{"code":"0-2317","short":"C SILENT01","wno":"063/162","kind":"BOOK","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Antissilêncio","ja":"アンチサイレンス","img":"img/cards_hd/BOOK2_SK109_C_SILENT01.jpg","hd":1},"BOOK2_SC03_FIRE3":{"code":"1-235","short":"FIRE3","wno":"051/238","kind":"BOOK","rar":"R","flv":2,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Inferno Feroz","ja":"ハードインフェルノ","img":"img/cards/card_054.png","hd":0},"BOOK2_SC12_ICE3":{"code":"1-236","short":"ICE3","wno":"054/198","kind":"BOOK","rar":"R","flv":2,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Nevasca","ja":"ブリザード","img":"img/cards/card_057.png","hd":0},"BOOK2_SC18_THUNDER3":{"code":"1-237","short":"THUNDER3","wno":"057/240","kind":"BOOK","rar":"R","flv":2,"mode":"charges","max":10,"plus":10,"unit":1,"pt":"Tempestade de Raios","ja":"サンダーストーム","img":"img/cards/card_060.png","hd":0},"BOOK2_SK053_FIRE03":{"code":"1-320","short":"FIRE03","wno":"051/238","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Inferno Feroz","ja":"ハードインフェルノ","img":"img/skills/skill_048.png","hd":0},"BOOK2_SK065_ICE03":{"code":"1-322","short":"ICE03","wno":"054/198","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Nevasca","ja":"ブリザード","img":"img/skills/skill_060.png","hd":0},"BOOK2_SK077_THUNDER03":{"code":"1-323","short":"THUNDER03","wno":"057/240","kind":"BOOK","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Tempestade de Raios","ja":"サンダーストーム","img":"img/skills/skill_072.png","hd":0},"BOOK2_SK458_PROVOKE1":{"code":"1-414","short":"PROVOKE1","wno":"—","kind":"BOOK","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Isca","ja":"ルアー","img":"img/skills/skill_327.png","hd":0},"BOOK2_SK459_PROVOKE2":{"code":"1-415","short":"PROVOKE2","wno":"—","kind":"BOOK","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Provocar","ja":"プロボーク","img":"img/skills/skill_328.png","hd":0},"SKILL_SK213_KS_COMB01":{"code":"0-2241","short":"KS COMB01","wno":"065","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corte Ascendente I","ja":"ライジングスラッシュⅠ","img":"img/cards_hd/SKILL_SK213_KS_COMB01.jpg","hd":1},"SKILL_SK214_KS_COMB01":{"code":"0-2242","short":"KS COMB01","wno":"066","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corte Ascendente II","ja":"ライジングスラッシュⅡ","img":"img/cards_hd/SKILL_SK214_KS_COMB01.jpg","hd":1},"SKILL_SK215_KS_COMB02":{"code":"0-2246","short":"KS COMB02","wno":"070","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cauda Debulhadora","ja":"スレッシャーテイル","img":"img/cards_hd/SKILL_SK215_KS_COMB02.jpg","hd":1},"SKILL_SK223_MA_COMB02":{"code":"0-2247","short":"MA COMB02","wno":"071","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Quebra-Pesada","ja":"ハードブレイカー","img":"img/cards_hd/SKILL_SK223_MA_COMB02.jpg","hd":1},"SKILL_SK227_SP_COMB02":{"code":"0-2250","short":"SP COMB02","wno":"072","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Quebra-Nuvens","ja":"クラウドブレイカー","img":"img/cards_hd/SKILL_SK227_SP_COMB02.jpg","hd":1},"SKILL_SK181_FIGHTER_COMB08":{"code":"1-307","short":"FIGHTER COMB08","wno":"073","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lanceiro Relâmpago","ja":"ライトニングランサー","img":"img/cards_hd/SKILL_SK181_FIGHTER_COMB08.jpg","hd":1},"SKILL_SK182_FIGHTER_COMB08":{"code":"1-308","short":"FIGHTER COMB08","wno":"074","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Estocada do Cavaleiro","ja":"ホースライダースラスト","img":"img/skills/skill_158.png","hd":0},"SKILL_SK234_RA_COMB01":{"code":"0-2251","short":"RA COMB01","wno":"075","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Espinho Tornado I","ja":"トルネードスパイクⅠ","img":"img/skills/skill_200.png","hd":0},"SKILL_SK245_NC_COMB03":{"code":"1-358","short":"NC COMB03","wno":"075","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Soco Tornado","ja":"トルネードパンチ","img":"img/skills/skill_207.png","hd":0},"SKILL_SK235_RA_COMB01":{"code":"0-2252","short":"RA COMB01","wno":"076","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Espinho Tornado II","ja":"トルネードスパイクⅡ","img":"img/cards_hd/SKILL_SK235_RA_COMB01.jpg","hd":1},"SKILL_SK236_RA_COMB01":{"code":"0-2253","short":"RA COMB01","wno":"077","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Espinho Tornado III","ja":"トルネードスパイクⅢ","img":"img/skills/skill_202.png","hd":0},"SKILL_SK204_FIGHTER_COMB18":{"code":"1-309","short":"FIGHTER COMB18","wno":"078","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Beco sem Saída","ja":"デッドエンド","img":"img/cards_hd/SKILL_SK204_FIGHTER_COMB18.jpg","hd":1},"SKILL_SK231_RS_COMB01":{"code":"1-310","short":"RS COMB01","wno":"079","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Corte Destruidor I","ja":"バスタースラッシュⅠ","img":"img/cards_hd/SKILL_SK231_RS_COMB01.jpg","hd":1},"SKILL_SK232_RS_COMB01":{"code":"1-311","short":"RS COMB01","wno":"080","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Corte Destruidor II","ja":"バスタースラッシュⅡ","img":"img/cards_hd/SKILL_SK232_RS_COMB01.jpg","hd":1},"SKILL_SK205_BARRIER01":{"code":"0-2263","short":"BARRIER01","wno":"088","kind":"SKILL","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Proteção contra Flechas","ja":"プロテクトアロー","img":"img/cards_hd/SKILL_SK205_BARRIER01.jpg","hd":1},"SKILL_SK207_BARRIER03":{"code":"0-2264","short":"BARRIER03","wno":"089","kind":"SKILL","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Proteção Mágica","ja":"プロテクトマジック","img":"img/cards_hd/SKILL_SK207_BARRIER03.jpg","hd":1},"SKILL_SK216_KA_COMB01":{"code":"0-2268","short":"KA COMB01","wno":"126","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida do Ogro I","ja":"オーガラッシュⅠ","img":"img/cards_hd/SKILL_SK216_KA_COMB01.jpg","hd":1},"SKILL_SK217_KA_COMB01":{"code":"0-2269","short":"KA COMB01","wno":"127","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida do Ogro II","ja":"オーガラッシュⅡ","img":"img/cards_hd/SKILL_SK217_KA_COMB01.jpg","hd":1},"SKILL_SK218_KA_COMB01":{"code":"0-2270","short":"KA COMB01","wno":"128","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida do Ogro III","ja":"オーガラッシュⅢ","img":"img/cards_hd/SKILL_SK218_KA_COMB01.jpg","hd":1},"SKILL_SK220_MA_COMB01":{"code":"0-2271","short":"MA COMB01","wno":"129","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Esmaga-Rochas I","ja":"ロッククラッシャーⅠ","img":"img/cards_hd/SKILL_SK220_MA_COMB01.jpg","hd":1},"SKILL_SK221_MA_COMB01":{"code":"0-2272","short":"MA COMB01","wno":"130","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Esmaga-Rochas II","ja":"ロッククラッシャーⅡ","img":"img/cards_hd/SKILL_SK221_MA_COMB01.jpg","hd":1},"SKILL_SK222_MA_COMB01":{"code":"0-2273","short":"MA COMB01","wno":"131","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Esmaga-Rochas III","ja":"ロッククラッシャーⅢ","img":"img/cards_hd/SKILL_SK222_MA_COMB01.jpg","hd":1},"SKILL_SK224_SP_COMB01":{"code":"0-2274","short":"SP COMB01","wno":"132","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Estocada de Lança I","ja":"スピアージャブⅠ","img":"img/cards_hd/SKILL_SK224_SP_COMB01.jpg","hd":1},"SKILL_SK225_SP_COMB01":{"code":"0-2275","short":"SP COMB01","wno":"133","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Estocada de Lança II","ja":"スピアージャブⅡ","img":"img/cards_hd/SKILL_SK225_SP_COMB01.jpg","hd":1},"SKILL_SK226_SP_COMB01":{"code":"0-2276","short":"SP COMB01","wno":"134","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Estocada de Lança III","ja":"スピアージャブⅢ","img":"img/cards_hd/SKILL_SK226_SP_COMB01.jpg","hd":1},"SKILL_SK172_FIGHTER_COMB05":{"code":"0-2277","short":"FIGHTER COMB05","wno":"136","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida Bárbara I","ja":"バーバリアンラッシュⅠ","img":"img/cards_hd/SKILL_SK172_FIGHTER_COMB05.jpg","hd":1},"SKILL_SK173_FIGHTER_COMB05":{"code":"0-2278","short":"FIGHTER COMB05","wno":"137","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida Bárbara II","ja":"バーバリアンラッシュⅡ","img":"img/cards_hd/SKILL_SK173_FIGHTER_COMB05.jpg","hd":1},"SKILL_SK174_FIGHTER_COMB05":{"code":"0-2279","short":"FIGHTER COMB05","wno":"138","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida Bárbara III","ja":"バーバリアンラッシュⅢ","img":"img/cards_hd/SKILL_SK174_FIGHTER_COMB05.jpg","hd":1},"SKILL_SK196_FIGHTER_COMB14":{"code":"0-2283","short":"FIGHTER COMB14","wno":"139","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Corte Pesado","ja":"ハードスラッシュ","img":"img/cards_hd/SKILL_SK196_FIGHTER_COMB14.jpg","hd":1},"SKILL_SK156_PRIEST_COMB01":{"code":"0-2303","short":"PRIEST COMB01","wno":"153","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Expurgo I","ja":"粛正Ⅰ","img":"img/cards_hd/SKILL_SK156_PRIEST_COMB01.jpg","hd":1},"SKILL_SK157_PRIEST_COMB01":{"code":"0-2304","short":"PRIEST COMB01","wno":"154","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Expurgo II","ja":"粛正Ⅱ","img":"img/cards_hd/SKILL_SK157_PRIEST_COMB01.jpg","hd":1},"SKILL_SK158_PRIEST_COMB01":{"code":"0-2305","short":"PRIEST COMB01","wno":"155","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Expurgo III","ja":"粛正Ⅲ","img":"img/cards_hd/SKILL_SK158_PRIEST_COMB01.jpg","hd":1},"SKILL_SK197_FIGHTER_COMB15":{"code":"0-2284","short":"FIGHTER COMB15","wno":"194","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Quebra-Terra","ja":"グランドブレイカー","img":"img/cards_hd/SKILL_SK197_FIGHTER_COMB15.jpg","hd":1},"SKILL_SK198_FIGHTER_COMB16":{"code":"0-2359","short":"FIGHTER COMB16","wno":"195","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Quebra-Armadura I","ja":"アーマーブレイカーⅠ","img":"img/cards_hd/SKILL_SK198_FIGHTER_COMB16.jpg","hd":1},"SKILL_SK199_FIGHTER_COMB16":{"code":"0-2360","short":"FIGHTER COMB16","wno":"196","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Quebra-Armadura II","ja":"アーマーブレイカーⅡ","img":"img/cards_hd/SKILL_SK199_FIGHTER_COMB16.jpg","hd":1},"SKILL_SK200_FIGHTER_COMB16":{"code":"0-2361","short":"FIGHTER COMB16","wno":"197","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Quebra-Armadura III","ja":"アーマーブレイカーⅢ","img":"img/cards_hd/SKILL_SK200_FIGHTER_COMB16.jpg","hd":1},"SKILL_SK159_PRIEST_COMB02":{"code":"0-2306","short":"PRIEST COMB02","wno":"200","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Castigo Divino I","ja":"神罰Ⅰ","img":"img/skills/skill_138.png","hd":0},"SKILL_SK160_PRIEST_COMB02":{"code":"0-2307","short":"PRIEST COMB02","wno":"201","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Castigo Divino II","ja":"神罰Ⅱ","img":"img/cards_hd/SKILL_SK160_PRIEST_COMB02.jpg","hd":1},"SKILL_SK161_PRIEST_COMB02":{"code":"0-2308","short":"PRIEST COMB02","wno":"202","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Castigo Divino III","ja":"神罰Ⅲ","img":"img/cards_hd/SKILL_SK161_PRIEST_COMB02.jpg","hd":1},"SKILL_SK228_ST_COMB01":{"code":"1-312","short":"ST COMB01","wno":"228","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Roda da Carruagem I","ja":"ＷオブチャリオットⅠ","img":"img/skills/skill_194.png","hd":0},"SKILL_SK229_ST_COMB01":{"code":"1-313","short":"ST COMB01","wno":"229","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Roda da Carruagem II","ja":"ＷオブチャリオットⅡ","img":"img/cards_hd/SKILL_SK229_ST_COMB01.jpg","hd":1},"SKILL_SK230_ST_COMB01":{"code":"1-314","short":"ST COMB01","wno":"230","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Roda da Carruagem III","ja":"ＷオブチャリオットⅢ","img":"img/cards_hd/SKILL_SK230_ST_COMB01.jpg","hd":1},"SKILL_SK170_FIGHTER_COMB04":{"code":"1-316","short":"FIGHTER COMB04","wno":"231","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Cem Espadas I","ja":"ハンドレッドソードⅠ","img":"img/cards_hd/SKILL_SK170_FIGHTER_COMB04.jpg","hd":1},"SKILL_SK171_FIGHTER_COMB04":{"code":"1-317","short":"FIGHTER COMB04","wno":"232","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Cem Espadas II","ja":"ハンドレッドソードⅡ","img":"img/skills/skill_150.png","hd":0},"SKILL_SK175_FIGHTER_COMB06":{"code":"0-2280","short":"FIGHTER COMB06","wno":"233","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida Berserker I","ja":"バーサーカーラッシュⅠ","img":"img/cards_hd/SKILL_SK175_FIGHTER_COMB06.jpg","hd":1},"SKILL_SK176_FIGHTER_COMB06":{"code":"0-2281","short":"FIGHTER COMB06","wno":"234","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida Berserker II","ja":"バーサーカーラッシュⅡ","img":"img/skills/skill_155.png","hd":0},"SKILL_SK177_FIGHTER_COMB06":{"code":"0-2282","short":"FIGHTER COMB06","wno":"235","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida Berserker III","ja":"バーサーカーラッシュⅢ","img":"img/cards_hd/SKILL_SK177_FIGHTER_COMB06.jpg","hd":1},"SKILL_SK206_BARRIER02":{"code":"0-2320","short":"BARRIER02","wno":"244","kind":"SKILL","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Reflexo de Flechas","ja":"リフレクトアロー","img":"img/cards_hd/SKILL_SK206_BARRIER02.jpg","hd":1},"SKILL_SK208_BARRIER04":{"code":"1-328","short":"BARRIER04","wno":"245","kind":"SKILL","rar":"R","flv":2,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Reflexo Mágico","ja":"リフレクトマジック","img":"img/cards_hd/SKILL_SK208_BARRIER04.jpg","hd":1},"SKILL_SK262_THIEF_COMB11":{"code":"0-2544","short":"THIEF COMB11","wno":"294","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Punhalada Pesada","ja":"ヘビースタッブ","img":"img/cards_hd/SKILL_SK262_THIEF_COMB11.jpg","hd":1},"SKILL_SK281_FIGHTER_COMB21":{"code":"0-2547","short":"FIGHTER COMB21","wno":"297","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Pancada Selvagem I","ja":"ワイルドスマッシュⅠ","img":"img/skills/skill_232.png","hd":0},"SKILL_SK282_FIGHTER_COMB21":{"code":"0-2548","short":"FIGHTER COMB21","wno":"298","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Pancada Selvagem II","ja":"ワイルドスマッシュⅡ","img":"img/cards_hd/SKILL_SK282_FIGHTER_COMB21.jpg","hd":1},"SKILL_SK187_FIGHTER_COMB11":{"code":"0-2549","short":"FIGHTER COMB11","wno":"299","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Perfuração Total I","ja":"ピアシングオールⅠ","img":"img/cards_hd/SKILL_SK187_FIGHTER_COMB11.jpg","hd":1},"SKILL_SK189_FIGHTER_COMB11":{"code":"0-2551","short":"FIGHTER COMB11","wno":"299","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Perfuração Total III","ja":"ピアシングオールⅢ","img":"img/cards_hd/SKILL_SK189_FIGHTER_COMB11.jpg","hd":1},"SKILL_SK275_PRIEST_COMB04":{"code":"0-2558","short":"PRIEST COMB04","wno":"308","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Martelo Divino I","ja":"神の鉄槌Ⅰ","img":"img/cards_hd/SKILL_SK275_PRIEST_COMB04.jpg","hd":1},"SKILL_SK276_PRIEST_COMB04":{"code":"0-2559","short":"PRIEST COMB04","wno":"309","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Martelo Divino II","ja":"神の鉄槌Ⅱ","img":"img/cards_hd/SKILL_SK276_PRIEST_COMB04.jpg","hd":1},"SKILL_SK277_PRIEST_COMB04":{"code":"0-2560","short":"PRIEST COMB04","wno":"310","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Martelo Divino III","ja":"神の鉄槌Ⅲ","img":"img/cards_hd/SKILL_SK277_PRIEST_COMB04.jpg","hd":1},"SKILL_SK269_THIEF_COMB18":{"code":"0-2581","short":"THIEF COMB18","wno":"342","kind":"SKILL","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Tiro Carregado","ja":"チャージショット","img":"img/skills/skill_220.png","hd":0},"SKILL_SK249_THIEF_COMB05":{"code":"0-2584","short":"THIEF COMB05","wno":"345","kind":"SKILL","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Rolamento","ja":"バックロール","img":"img/cards_hd/SKILL_SK249_THIEF_COMB05.jpg","hd":1},"SKILL_SK239_NC_COMB01":{"code":"0-2598","short":"NC COMB01","wno":"360","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Dança do Dragão I","ja":"ダンスオブザドラゴンⅠ","img":"img/cards_hd/SKILL_SK239_NC_COMB01.jpg","hd":1},"SKILL_SK240_NC_COMB01":{"code":"0-2599","short":"NC COMB01","wno":"361","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Dança do Dragão II","ja":"ダンスオブザドラゴンⅡ","img":"img/cards_hd/SKILL_SK240_NC_COMB01.jpg","hd":1},"SKILL_SK241_NC_COMB01":{"code":"0-2600","short":"NC COMB01","wno":"362","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Dança do Dragão III","ja":"ダンスオブザドラゴンⅢ","img":"img/cards_hd/SKILL_SK241_NC_COMB01.jpg","hd":1},"SKILL_SK190_FIGHTER_COMB12":{"code":"0-2601","short":"FIGHTER COMB12","wno":"363","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Impacto Miragem I","ja":"ミラージュインパクトⅠ","img":"img/cards_hd/SKILL_SK190_FIGHTER_COMB12.jpg","hd":1},"SKILL_SK191_FIGHTER_COMB12":{"code":"0-2602","short":"FIGHTER COMB12","wno":"364","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Impacto Miragem II","ja":"ミラージュインパクトⅡ","img":"img/cards_hd/SKILL_SK191_FIGHTER_COMB12.jpg","hd":1},"SKILL_SK192_FIGHTER_COMB12":{"code":"0-2603","short":"FIGHTER COMB12","wno":"365","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Impacto Miragem III","ja":"ミラージュインパクトⅢ","img":"img/cards_hd/SKILL_SK192_FIGHTER_COMB12.jpg","hd":1},"SKILL_SK299_FIGHTER_COMB19":{"code":"0-2604","short":"FIGHTER COMB19","wno":"366","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Quebra-Pedra","ja":"ロックブレイカー","img":"img/cards_hd/SKILL_SK299_FIGHTER_COMB19.jpg","hd":1},"SKILL_SK456_FIGHTER_SPEC02":{"code":"1-391","short":"FIGHTER SPEC02","wno":"394","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Conflito de Cronos","ja":"クロノストライフ","img":"img/skills/skill_325.png","hd":0},"SKILL_SK093_PRIEST_SPEC02":{"code":"1-392","short":"PRIEST SPEC02","wno":"395","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Senhor da Falange","ja":"ロードオブファランクス","img":"img/skills/skill_086.png","hd":0},"SKILL_SK300_FIGHTER_COMB20":{"code":"0-2640","short":"FIGHTER COMB20","wno":"396","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Surra","ja":"ビートダウン","img":"img/skills/skill_238.png","hd":0},"SKILL_SK283_WIZARD_COMB03":{"code":"0-2647","short":"WIZARD COMB03","wno":"403","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Impulso Fantasma","ja":"ファントムインパルス","img":"img/skills/skill_234.png","hd":0},"SKILL_SK162_PRIEST_COMB03":{"code":"0-2656","short":"PRIEST COMB03","wno":"410","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Quebra-Rancor","ja":"スパイトブレイカー","img":"img/skills/skill_141.png","hd":0},"SKILL_SK265_THIEF_COMB14":{"code":"0-2658","short":"THIEF COMB14","wno":"411","kind":"SKILL","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Tiro Amplo","ja":"エクステンシブショット","img":"img/cards_hd/SKILL_SK265_THIEF_COMB14.jpg","hd":1},"SKILL_SK278_KS_COMB03":{"code":"0-2666","short":"KS COMB03","wno":"415","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Golpe da Valquíria","ja":"ヴァルキリーストライク","img":"img/skills/skill_229.png","hd":0},"SKILL_SK233_RS_COMB02":{"code":"0-2667","short":"RS COMB02","wno":"416","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Corte Violento","ja":"バイオレントスラッシュ","img":"img/skills/skill_199.png","hd":0},"SKILL_SK279_MA_COMB03":{"code":"0-2668","short":"MA COMB03","wno":"417","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Golpe Evanescente","ja":"バニシングブロー","img":"img/skills/skill_230.png","hd":0},"SKILL_SK272_ST_COMB02":{"code":"0-2669","short":"ST COMB02","wno":"418","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Portão Celestial","ja":"ヘブンズゲート","img":"img/cards_hd/SKILL_SK272_ST_COMB02.jpg","hd":1},"SKILL_SK273_NI_COMB01":{"code":"0-2670","short":"NI COMB01","wno":"419","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Batida Ampla","ja":"ブロードビート","img":"img/skills/skill_224.png","hd":0},"SKILL_SK285_FIGHTER_COMB23":{"code":"0-2671","short":"FIGHTER COMB23","wno":"420","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Quebra-Vento","ja":"ウィンドブレイク","img":"img/skills/skill_236.png","hd":0},"SKILL_SK166_FIGHTER_COMB02":{"code":"0-2672","short":"FIGHTER COMB02","wno":"421","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Assalto Espiral I","ja":"スパイラルアサルトⅠ","img":"img/skills/skill_145.png","hd":0},"SKILL_SK167_FIGHTER_COMB02":{"code":"0-2673","short":"FIGHTER COMB02","wno":"422","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Assalto Espiral II","ja":"スパイラルアサルトⅡ","img":"img/skills/skill_146.png","hd":0},"SKILL_SK168_FIGHTER_COMB02":{"code":"0-2674","short":"FIGHTER COMB02","wno":"423","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Assalto Espiral III","ja":"スパイラルアサルトⅢ","img":"img/skills/skill_147.png","hd":0},"SKILL_SK169_FIGHTER_COMB03":{"code":"1-404","short":"FIGHTER COMB03","wno":"424","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Dragão Duplo","ja":"ダブルドラゴン","img":"img/skills/skill_148.png","hd":0},"SKILL_SK267_THIEF_COMB16":{"code":"0-2679","short":"THIEF COMB16","wno":"431","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Flecha Imaginária","ja":"イマジナリーアロー","img":"img/cards_hd/SKILL_SK267_THIEF_COMB16.jpg","hd":1},"SKILL_SK274_NI_COMB02":{"code":"0-2662","short":"NI COMB02","wno":"471","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Estripador S","ja":"Ｓリッパー","img":"img/skills/skill_225.png","hd":0},"SKILL_SK280_SP_COMB03":{"code":"0-2663","short":"SP COMB03","wno":"472","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Explosão Ardente","ja":"ブレイジングブラスト","img":"img/skills/skill_231.png","hd":0},"SKILL_SK219_KA_COMB02":{"code":"0-2664","short":"KA COMB02","wno":"473","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Golpe Derrubador","ja":"ブロウダウン","img":"img/skills/skill_185.png","hd":0},"SKILL_SK237_RA_COMB02":{"code":"0-2665","short":"RA COMB02","wno":"474","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Ataque Bestial","ja":"ビーストアタック","img":"img/skills/skill_203.png","hd":0},"SKILL_SK284_FIGHTER_COMB22":{"code":"0-2641","short":"FIGHTER COMB22","wno":"482","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Explosão Sônica","ja":"ソニックブラスト","img":"img/skills/skill_235.png","hd":0},"SKILL_SK270_WIZARD_MEGACRUSH":{"code":"1-399","short":"WIZARD MEGACRUSH","wno":"484","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Tempestade de Meteoros","ja":"メテオストーム","img":"img/skills/skill_221.png","hd":0},"SKILL_SK271_PRIEST_MEGACRUSH":{"code":"1-402","short":"PRIEST MEGACRUSH","wno":"485","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Aurora Eterna","ja":"エターナルサンライズ","img":"img/skills/skill_222.png","hd":0},"SKILL_SK266_THIEF_MEGACRUSH":{"code":"1-403","short":"THIEF MEGACRUSH","wno":"486","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Chuva Sangrenta","ja":"ブラッディレイン","img":"img/cards_hd/SKILL_SK266_THIEF_MEGACRUSH.jpg","hd":1},"SKILL_SK319_FIGHTER_COMB25":{"code":"1-459","short":"FIGHTER COMB25","wno":"521","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lâmina da Calamidade I","ja":"カラミティエッジⅠ","img":"img/skills/skill_255.png","hd":0},"SKILL_SK320_FIGHTER_COMB25":{"code":"1-460","short":"FIGHTER COMB25","wno":"522","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lâmina da Calamidade II","ja":"カラミティエッジⅡ","img":"img/skills/skill_256.png","hd":0},"SKILL_SK370_WIZARD_SPEC01":{"code":"0-2728","short":"WIZARD SPEC01","wno":"524","kind":"SKILL","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Redemoinho","ja":"ワールウィンド","img":"img/skills/skill_306.png","hd":0},"SKILL_SK334_PRIEST_COMB05":{"code":"0-2730","short":"PRIEST COMB05","wno":"527","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Sacode-Cérebro","ja":"ブレインシェイカー","img":"img/skills/skill_270.png","hd":0},"SKILL_SK368_THIEF_SPEC01":{"code":"0-2737","short":"THIEF SPEC01","wno":"529","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Picada da Víbora","ja":"ヴァイパーバイト","img":"img/skills/skill_304.png","hd":0},"SKILL_SK371_THIEF_COMB23":{"code":"1-467","short":"THIEF COMB23","wno":"531","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Explosão Relâmpago","ja":"ライトニングブラスト","img":"img/cards_hd/SKILL_SK371_THIEF_COMB23.jpg","hd":1},"SKILL_SK372_THIEF_COMB20":{"code":"0-2739","short":"THIEF COMB20","wno":"532","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Tiro Contido","ja":"リストレインショット","img":"img/skills/skill_308.png","hd":0},"SKILL_SK344_NC_COMB06":{"code":"0-2740","short":"NC COMB06","wno":"533","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Golpe do Falcão","ja":"ファルコンブロウ","img":"img/skills/skill_280.png","hd":0},"SKILL_SK328_NC_COMB07":{"code":"0-2741","short":"NC COMB07","wno":"534","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Pancada do Dragão","ja":"ドラゴンスマッシュ","img":"img/skills/skill_264.png","hd":0},"SKILL_SK341_FIGHTER_COMB28":{"code":"0-2743","short":"FIGHTER COMB28","wno":"536","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Ferroada Dupla","ja":"ツインスティング","img":"img/skills/skill_277.png","hd":0},"SKILL_SK342_FIGHTER_COMB29":{"code":"0-2744","short":"FIGHTER COMB29","wno":"537","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida Ascendente I","ja":"レイズラッシュⅠ","img":"img/skills/skill_278.png","hd":0},"SKILL_SK343_FIGHTER_COMB29":{"code":"0-2745","short":"FIGHTER COMB29","wno":"538","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida Ascendente II","ja":"レイズラッシュⅡ","img":"img/skills/skill_279.png","hd":0},"SKILL_SK349_FIGHTER_COMB31":{"code":"1-471","short":"FIGHTER COMB31","wno":"539","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Destruição do Ogro","ja":"オーガデストラクション","img":"img/skills/skill_285.png","hd":0},"SKILL_SK356_PRIEST_COMB06":{"code":"1-477","short":"PRIEST COMB06","wno":"543","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Alvorada Celestial","ja":"ヘブンズドーン","img":"img/skills/skill_292.png","hd":0},"SKILL_SK364_THIEF_COMB21":{"code":"1-480","short":"THIEF COMB21","wno":"547","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Flecha Brilhante","ja":"シャイニングアロー","img":"img/cards_hd/SKILL_SK364_THIEF_COMB21.jpg","hd":1},"SKILL_SK366_THIEF_SPEC02":{"code":"0-2751","short":"THIEF SPEC02","wno":"548","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Olho do Caçador","ja":"ハンターズアイ","img":"img/skills/skill_302.png","hd":0},"SKILL_SK347_FIGHTER_COMB30":{"code":"1-469","short":"FIGHTER COMB30","wno":"562","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Bravura Valente","ja":"ヴァリアントブレイブ","img":"img/skills/skill_283.png","hd":0},"SKILL_SK348_FIGHTER_COMB30":{"code":"1-470","short":"FIGHTER COMB30","wno":"563","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Golpe Meteoro","ja":"メテオストライク","img":"img/skills/skill_284.png","hd":0},"SKILL_SK345_FIGHTER_COMB32":{"code":"1-472","short":"FIGHTER COMB32","wno":"564","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Corte Lunar","ja":"ムーンスラッシュ","img":"img/skills/skill_281.png","hd":0},"SKILL_SK346_FIGHTER_COMB32":{"code":"1-473","short":"FIGHTER COMB32","wno":"565","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Impacto Crescente","ja":"クレセントインパクト","img":"img/skills/skill_282.png","hd":0},"SKILL_SK357_PRIEST_COMB07":{"code":"1-478","short":"PRIEST COMB07","wno":"568","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Gêiser Sagrado","ja":"ホーリーガイザー","img":"img/skills/skill_293.png","hd":0},"SKILL_SK361_PRIEST_COMB08":{"code":"1-479","short":"PRIEST COMB08","wno":"569","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Golpe do Julgamento","ja":"ジャッジメントブロウ","img":"img/skills/skill_297.png","hd":0},"SKILL_SK358_THIEF_COMB22":{"code":"1-482","short":"THIEF COMB22","wno":"570","kind":"SKILL","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Punhalada Dupla","ja":"デュアルスタッブ","img":"img/skills/skill_294.png","hd":0},"SKILL_SK365_FIGHTER_COMB26":{"code":"0-2721","short":"FIGHTER COMB26","wno":"572","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Divisão Infernal","ja":"ヘルディバイド","img":"img/cards_hd/SKILL_SK365_FIGHTER_COMB26.jpg","hd":1},"SKILL_SK350_FIGHTER_COMB27":{"code":"1-461","short":"FIGHTER COMB27","wno":"573","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Pancada Atômica","ja":"アトミックスマッシュ","img":"img/skills/skill_286.png","hd":0},"SKILL_SK321_FIGHTER_SPEC01":{"code":"0-2722","short":"FIGHTER SPEC01","wno":"574","kind":"SKILL","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Caçador de Tempestades","ja":"ストームチェイサー","img":"img/cards_hd/SKILL_SK321_FIGHTER_SPEC01.jpg","hd":1},"SKILL_SK324_WIZARD_SPEC02":{"code":"1-462","short":"WIZARD SPEC02","wno":"576","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Reforçar Magia","ja":"エンハンスマジック","img":"img/skills/skill_260.png","hd":0},"SKILL_SK325_WIZARD_COMB04":{"code":"0-2725","short":"WIZARD COMB04","wno":"577","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Vontade do Universo I","ja":"ウィルオブユニバースⅠ","img":"img/cards_hd/SKILL_SK325_WIZARD_COMB04.jpg","hd":1},"SKILL_SK326_WIZARD_COMB04":{"code":"0-2726","short":"WIZARD COMB04","wno":"578","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Vontade do Universo II","ja":"ウィルオブユニバースⅡ","img":"img/cards_hd/SKILL_SK326_WIZARD_COMB04.jpg","hd":1},"SKILL_SK327_WIZARD_COMB04":{"code":"0-2727","short":"WIZARD COMB04","wno":"579","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Vontade do Universo III","ja":"ウィルオブユニバースⅢ","img":"img/cards_hd/SKILL_SK327_WIZARD_COMB04.jpg","hd":1},"SKILL_SK375_PRIEST_SPEC01":{"code":"0-2732","short":"PRIEST SPEC01","wno":"581","kind":"SKILL","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Sinceridade","ja":"シンセリティー","img":"img/cards_hd/SKILL_SK375_PRIEST_SPEC01.jpg","hd":1},"SKILL_SK336_THIEF_SPEC03":{"code":"1-465","short":"THIEF SPEC03","wno":"583","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Clarão Silencioso","ja":"サイレントフラッシュ","img":"img/skills/skill_272.png","hd":0},"SKILL_SK337_THIEF_COMB19":{"code":"0-2733","short":"THIEF COMB19","wno":"585","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Ronda Mortal I","ja":"デッドリーロンドⅠ","img":"img/cards_hd/SKILL_SK337_THIEF_COMB19.jpg","hd":1},"SKILL_SK338_THIEF_COMB19":{"code":"0-2734","short":"THIEF COMB19","wno":"586","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Ronda Mortal II","ja":"デッドリーロンドⅡ","img":"img/cards_hd/SKILL_SK338_THIEF_COMB19.jpg","hd":1},"SKILL_SK339_THIEF_COMB19":{"code":"0-2735","short":"THIEF COMB19","wno":"587","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Ronda Mortal III","ja":"デッドリーロンドⅢ","img":"img/cards_hd/SKILL_SK339_THIEF_COMB19.jpg","hd":1},"SKILL_SK369_YZ_COMB02":{"code":"0-2742","short":"YZ COMB02","wno":"588","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Berço Sônico","ja":"ソニッククレイドル","img":"img/skills/skill_305.png","hd":0},"SKILL_SK163_FIGHTER_COMB01":{"code":"0-2243","short":"FIGHTER COMB01","wno":"065/126/067/136/233/537/140/291/412","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida V I","ja":"ＶラッシュⅠ","img":"img/skills/skill_142.png","hd":0},"SKILL_SK164_FIGHTER_COMB01":{"code":"0-2244","short":"FIGHTER COMB01","wno":"066/127/068/137/234/538/141/292/413","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida V II","ja":"ＶラッシュⅡ","img":"img/skills/skill_143.png","hd":0},"SKILL_SK165_FIGHTER_COMB01":{"code":"0-2245","short":"FIGHTER COMB01","wno":"128/069/138/235/142/293/414","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida V III","ja":"ＶラッシュⅢ","img":"img/skills/skill_144.png","hd":0},"SKILL_SK151_WIZARD_COMB01":{"code":"0-2288","short":"WIZARD COMB01","wno":"065/126/067/136/233/537/140/291/412","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida SF I","ja":"ＳＦラッシュⅠ","img":"img/skills/skill_132.png","hd":0},"SKILL_SK152_WIZARD_COMB01":{"code":"0-2289","short":"WIZARD COMB01","wno":"066/127/068/137/234/538/141/292/413","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida SF II","ja":"ＳＦラッシュⅡ","img":"img/skills/skill_133.png","hd":0},"SKILL_SK153_WIZARD_COMB01":{"code":"0-2290","short":"WIZARD COMB01","wno":"128/069/138/235/142/293/414","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Investida SF III","ja":"ＳＦラッシュⅢ","img":"img/skills/skill_134.png","hd":0},"SKILL_SK250_THIEF_COMB06":{"code":"0-2541","short":"THIEF COMB06","wno":"065/291/412","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corte L I","ja":"ＬスラッシュⅠ","img":"img/skills/skill_210.png","hd":0},"SKILL_SK251_THIEF_COMB06":{"code":"0-2542","short":"THIEF COMB06","wno":"066/292/413","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corte L II","ja":"ＬスラッシュⅡ","img":"img/skills/skill_211.png","hd":0},"SKILL_SK252_THIEF_COMB06":{"code":"0-2543","short":"THIEF COMB06","wno":"293/414","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corte L III","ja":"ＬスラッシュⅢ","img":"img/skills/skill_212.png","hd":0},"SKILL_SK188_FIGHTER_COMB11":{"code":"0-2550","short":"FIGHTER COMB11","wno":"300/301","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Perfuração Total II","ja":"ピアシングオールⅡ","img":"img/cards_hd/SKILL_SK188_FIGHTER_COMB11.jpg","hd":1},"SKILL_SK253_THIEF_COMB07":{"code":"0-2659","short":"THIEF COMB07","wno":"065/291/412","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corte K I","ja":"ＫスラッシュⅠ","img":"img/skills/skill_213.png","hd":0},"SKILL_SK254_THIEF_COMB07":{"code":"0-2660","short":"THIEF COMB07","wno":"066/292/413","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corte K II","ja":"ＫスラッシュⅡ","img":"img/skills/skill_214.png","hd":0},"SKILL_SK255_THIEF_COMB07":{"code":"0-2661","short":"THIEF COMB07","wno":"293/414","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Corte K III","ja":"ＫスラッシュⅢ","img":"img/skills/skill_215.png","hd":0},"SKILL_SK318_FIGHTER_COMB24":{"code":"0-2720","short":"FIGHTER COMB24","wno":"416/520/139","kind":"SKILL","rar":"C","flv":3,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Corte B","ja":"Ｂスラッシュ","img":"img/cards_hd/SKILL_SK318_FIGHTER_COMB24.jpg","hd":1},"SKILL_SK183_FIGHTER_COMB09":{"code":"1-318","short":"FIGHTER COMB09","wno":"079/236","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Corte H I","ja":"ＨスラッシュⅠ","img":"img/skills/skill_159.png","hd":0},"SKILL_SK184_FIGHTER_COMB09":{"code":"1-319","short":"FIGHTER COMB09","wno":"080/237","kind":"SKILL","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Corte H II","ja":"ＨスラッシュⅡ","img":"img/skills/skill_160.png","hd":0},"SKILL_SK247_NC_COMB05":{"code":"1-359","short":"NC COMB05","wno":"—","kind":"SKILL","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cotovelada Rimon","ja":"裡門頂肘","img":"img/skills/skill_208.png","hd":0},"SKILL_SK373_ALL_ESCAPE":{"code":"1-487","short":"ALL ESCAPE","wno":"—","kind":"SKILL","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Mudança Avançada","ja":"アドバンスドシフト","img":"img/skills/skill_309.png","hd":0},"SKILL_SK374_ALL_MEGACRUSH":{"code":"1-488","short":"ALL MEGACRUSH","wno":"—","kind":"SKILL","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Explosão Radical","ja":"ラディカルバースト","img":"img/skills/skill_310.png","hd":0},"SUMMON_MN002_DYH_NO02":{"code":"0-2002","short":"DYH NO02","wno":"001","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Esqueleto","ja":"スケルトン","img":"img/cards_hd/SUMMON_MN002_DYH_NO02.jpg","hd":1},"SUMMON_MN003_DYH_NO03":{"code":"0-2003","short":"DYH NO03","wno":"002","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Esqueleto Mago","ja":"スケルトンメイジ","img":"img/cards_hd/SUMMON_MN003_DYH_NO03.jpg","hd":1},"SUMMON_MN004_DYH_NO04":{"code":"0-2004","short":"DYH NO04","wno":"003","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Esqueleto Arqueiro","ja":"スケルトンアーチャー","img":"img/cards_hd/SUMMON_MN004_DYH_NO04.jpg","hd":1},"SUMMON_MN017_DYH_AN01":{"code":"0-2008","short":"DYH AN01","wno":"004","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Homem-lagarto","ja":"リザードマン","img":"img/cards_hd/SUMMON_MN017_DYH_AN01.jpg","hd":1},"SUMMON_MN018_DYH_AN02":{"code":"0-2009","short":"DYH AN02","wno":"005","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Homem-lagarto Patrulheiro","ja":"リザードマンレンジャー","img":"img/cards/card_214.png","hd":0},"SUMMON_MN020_DYH_AN04":{"code":"1-203","short":"DYH AN04","wno":"006","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Homem-lagarto G","ja":"Ｇリザードマン","img":"img/cards/card_216.png","hd":0},"SUMMON_MN023_DYH_NO18":{"code":"0-2012","short":"DYH NO18","wno":"007","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Goblin Arqueiro","ja":"ゴブリンアーチャー","img":"img/cards/card_219.png","hd":0},"SUMMON_MN024_DYH_NO19":{"code":"0-2013","short":"DYH NO19","wno":"008","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Goblin Lutador","ja":"ゴブリンファイター","img":"img/cards/card_220.png","hd":0},"SUMMON_MN027_DYH_AN06":{"code":"0-2015","short":"DYH AN06","wno":"009","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Kobold","ja":"コボルド","img":"img/cards_hd/SUMMON_MN027_DYH_AN06.jpg","hd":1},"SUMMON_MN028_DYH_AN08":{"code":"0-2016","short":"DYH AN08","wno":"010","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Kobold Guerreiro","ja":"コボルドウォリアー","img":"img/cards_hd/SUMMON_MN028_DYH_AN08.jpg","hd":1},"SUMMON_MN035_DYH_AN16":{"code":"0-2021","short":"DYH AN16","wno":"011","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Minotauro","ja":"ミノタウロス","img":"img/cards/card_231.png","hd":0},"SUMMON_MN039_DYF_FI01":{"code":"0-2023","short":"DYF FI01","wno":"012","kind":"SUMMON","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Escorpião G","ja":"Ｇスコーピオン","img":"img/cards/card_235.png","hd":0},"SUMMON_MN040_DYF_FI02":{"code":"0-2024","short":"DYF FI02","wno":"013","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Escorpião Enorme","ja":"ヒュージスコーピオン","img":"img/cards_hd/SUMMON_MN040_DYF_FI02.jpg","hd":1},"SUMMON_MN053_DYF_NO01":{"code":"0-2033","short":"DYF NO01","wno":"014","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Lobo Atroz","ja":"ダイアーウルフ","img":"img/cards_hd/SUMMON_MN053_DYF_NO01.jpg","hd":1},"SUMMON_MN060_DYH_WI01":{"code":"0-2036","short":"DYH WI01","wno":"015","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Demônio Menor","ja":"レッサーデーモン","img":"img/cards_hd/SUMMON_MN060_DYH_WI01.jpg","hd":1},"SUMMON_MN065_DYH_WI06":{"code":"0-2039","short":"DYH WI06","wno":"016","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Gárgula","ja":"ガーゴイル","img":"img/cards/card_258.png","hd":0},"SUMMON_MN068_DYH_NO30":{"code":"0-2040","short":"DYH NO30","wno":"017","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Golem de Barro","ja":"クレイゴーレム","img":"img/cards_hd/SUMMON_MN068_DYH_NO30.jpg","hd":1},"SUMMON_MN006_DYH_NO06":{"code":"0-2005","short":"DYH NO06","wno":"093","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Zumbi","ja":"ゾンビ","img":"img/cards_hd/SUMMON_MN006_DYH_NO06.jpg","hd":1},"SUMMON_MN045_DYB_NO01":{"code":"0-2025","short":"DYB NO01","wno":"094","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Morcego","ja":"バット","img":"img/cards_hd/SUMMON_MN045_DYB_NO01.jpg","hd":1},"SUMMON_MN046_DYB_NO02":{"code":"0-2026","short":"DYB NO02","wno":"095","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Morcego Gigante","ja":"ジャイアントバット","img":"img/cards_hd/SUMMON_MN046_DYB_NO02.jpg","hd":1},"SUMMON_MN048_DYS_NO01":{"code":"0-2028","short":"DYS NO01","wno":"096","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Cobra","ja":"スネーク","img":"img/cards_hd/SUMMON_MN048_DYS_NO01.jpg","hd":1},"SUMMON_MN049_DYS_NO02":{"code":"0-2029","short":"DYS NO02","wno":"097","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Víbora","ja":"バイパー","img":"img/cards_hd/SUMMON_MN049_DYS_NO02.jpg","hd":1},"SUMMON_MN095_DYO_ST02":{"code":"0-2051","short":"DYO ST02","wno":"098","kind":"SUMMON","rar":"UC","flv":1,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Fungo","ja":"ファンガス","img":"img/cards_hd/SUMMON_MN095_DYO_ST02.jpg","hd":1},"SUMMON_MN094_DYO_ST01":{"code":"0-2050","short":"DYO ST01","wno":"167","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Gritador","ja":"シュリーカー","img":"img/cards_hd/SUMMON_MN094_DYO_ST01.jpg","hd":1},"SUMMON_MN019_DYH_AN03":{"code":"0-2010","short":"DYH AN03","wno":"168","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Homem-lagarto Lanceiro","ja":"リザードマンランサー","img":"img/cards_hd/SUMMON_MN019_DYH_AN03.jpg","hd":1},"SUMMON_MN032_DYH_NO23":{"code":"0-2019","short":"DYH NO23","wno":"169","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Orc","ja":"オーク","img":"img/cards_hd/SUMMON_MN032_DYH_NO23.jpg","hd":1},"SUMMON_MN050_DYS_NO03":{"code":"0-2030","short":"DYS NO03","wno":"170","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Naja","ja":"コブラ","img":"img/cards_hd/SUMMON_MN050_DYS_NO03.jpg","hd":1},"SUMMON_MN054_DYF_NO02":{"code":"1-214","short":"DYF NO02","wno":"171","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Cão Infernal","ja":"ヘルハウンド","img":"img/cards_hd/SUMMON_MN054_DYF_NO02.jpg","hd":1},"SUMMON_MN063_DYH_WI04":{"code":"0-2037","short":"DYH WI04","wno":"172","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Diabrete","ja":"インプ","img":"img/cards/card_256.png","hd":0},"SUMMON_MN025_DYH_NO21":{"code":"0-2014","short":"DYH NO21","wno":"208","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Hobgoblin","ja":"ホブゴブリン","img":"img/cards_hd/SUMMON_MN025_DYH_NO21.jpg","hd":1},"SUMMON_MN030_DYH_AN09":{"code":"0-2018","short":"DYH AN09","wno":"209","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Gnoll","ja":"ノール","img":"img/cards/card_226.png","hd":0},"SUMMON_MN033_DYH_NO24":{"code":"0-2020","short":"DYH NO24","wno":"210","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Orc Mago","ja":"オークメイジ","img":"img/cards_hd/SUMMON_MN033_DYH_NO24.jpg","hd":1},"SUMMON_MN047_DYB_NO03":{"code":"0-2027","short":"DYB NO03","wno":"211","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Morcego Vampiro","ja":"バンパイアバット","img":"img/cards_hd/SUMMON_MN047_DYB_NO03.jpg","hd":1},"SUMMON_MN061_DYH_WI02":{"code":"1-218","short":"DYH WI02","wno":"212","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Demônio","ja":"デーモン","img":"img/cards/card_255.png","hd":0},"SUMMON_MN081_DYF_NO03":{"code":"0-2046","short":"DYF NO03","wno":"213","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Touro Selvagem","ja":"ワイルドブル","img":"img/cards/card_269.png","hd":0},"SUMMON_MN009_DYH_NO09":{"code":"0-2533","short":"DYH NO09","wno":"283","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Carniçal","ja":"グール","img":"img/cards/card_210.png","hd":0},"SUMMON_MN012_DYH_NO12":{"code":"0-2534","short":"DYH NO12","wno":"284","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Fantasma","ja":"ゴースト","img":"img/cards_hd/SUMMON_MN012_DYH_NO12.jpg","hd":1},"SUMMON_MN036_DYH_AN15":{"code":"0-2535","short":"DYH AN15","wno":"285","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Minotauro Guerreiro","ja":"ミノタウロスバトラー","img":"img/cards_hd/SUMMON_MN036_DYH_AN15.jpg","hd":1},"SUMMON_MN034_DYH_NO25":{"code":"0-2536","short":"DYH NO25","wno":"286","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Orc Chefe","ja":"オークチーフ","img":"img/cards/card_230.png","hd":0},"SUMMON_MN042_DYH_AN11":{"code":"1-340","short":"DYH AN11","wno":"287","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Salamandra","ja":"サラマンダー","img":"img/cards_hd/SUMMON_MN042_DYH_AN11.jpg","hd":1},"SUMMON_MN092_DYO_PL02":{"code":"0-2538","short":"DYO PL02","wno":"288","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Lutador Lignus","ja":"リグナスファイター","img":"img/cards_hd/SUMMON_MN092_DYO_PL02.jpg","hd":1},"SUMMON_MN093_DYO_PL03":{"code":"0-2539","short":"DYO PL03","wno":"289","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Espinho Vivo","ja":"リビングソーン","img":"img/cards_hd/SUMMON_MN093_DYO_PL03.jpg","hd":1},"SUMMON_MN055_DYB_NO04":{"code":"0-2540","short":"DYB NO04","wno":"290","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Cocatriz","ja":"コカトリス","img":"img/cards_hd/SUMMON_MN055_DYB_NO04.jpg","hd":1},"SUMMON_MN043_DYH_AN12":{"code":"1-350","short":"DYH AN12","wno":"332","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Salamandra Gélida","ja":"フロストサラマンダー","img":"img/cards/card_239.png","hd":0},"SUMMON_MN091_DYO_PL01":{"code":"0-2577","short":"DYO PL01","wno":"333","kind":"SUMMON","rar":"R","flv":2,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Ent","ja":"トレント","img":"img/cards/card_270.png","hd":0},"SUMMON_MN013_DYH_NO13":{"code":"1-351","short":"DYH NO13","wno":"334","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Espectro","ja":"ファントム","img":"img/cards/card_212.png","hd":0},"SUMMON_MN170_DYH_NO62_1":{"code":"1-51","short":"DYH NO62 1","wno":"335","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Valquíria Tsubame","ja":"バルキリー燕","img":"img/cards/card_290.png","hd":0},"SUMMON_MN170_DYH_NO62_2":{"code":"1-352","short":"DYH NO62 2","wno":"335","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Valquíria Tsubame","ja":"バルキリー燕","img":"img/cards/card_290.png","hd":0},"SUMMON_MN169_DYH_NO61_1":{"code":"0-218","short":"DYH NO61 1","wno":"336","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Valquíria Clara","ja":"バルキリークララ","img":"img/cards/card_289.png","hd":0},"SUMMON_MN169_DYH_NO61_2":{"code":"1-353","short":"DYH NO61 2","wno":"336","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Valquíria Clara","ja":"バルキリークララ","img":"img/cards/card_289.png","hd":0},"SUMMON_MN168_DYH_NO60_1":{"code":"0-12","short":"DYH NO60 1","wno":"337","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Jampoo","ja":"ジャンプー","img":"img/cards/card_288.png","hd":0},"SUMMON_MN168_DYH_NO60_2":{"code":"1-354","short":"DYH NO60 2","wno":"337","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Jampoo","ja":"ジャンプー","img":"img/cards/card_288.png","hd":0},"SUMMON_MN171_DYH_WI10_1":{"code":"1-45","short":"DYH WI10 1","wno":"338","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Diaborga","ja":"ディアボルガ","img":"img/cards/card_291.png","hd":0},"SUMMON_MN171_DYH_WI10_2":{"code":"1-355","short":"DYH WI10 2","wno":"338","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Diaborga","ja":"ディアボルガ","img":"img/cards/card_291.png","hd":0},"SUMMON_MN205_SELF":{"code":"1-407","short":"SELF","wno":"433","kind":"SUMMON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Visão Mística","ja":"ミスティカルビジョン","img":"img/skills/skill_008.png","hd":0},"SUMMON_MN021_DYH_AN05":{"code":"1-409","short":"DYH AN05","wno":"437","kind":"SUMMON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Homem-lagarto Real","ja":"ロイヤルリザードマン","img":"img/cards/card_217.png","hd":0},"SUMMON_MN026_DYH_NO22":{"code":"1-410","short":"DYH NO22","wno":"438","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Senhor Goblin","ja":"ゴブリンロード","img":"img/cards/card_222.png","hd":0},"SUMMON_MN156_DYH_AN19":{"code":"0-2685","short":"DYH AN19","wno":"439","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Spunkie","ja":"スパンキー","img":"img/cards/card_287.png","hd":0},"SUMMON_MN155_DYF_NO09":{"code":"0-2689","short":"DYF NO09","wno":"440","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Gytrash","ja":"ガイトラッシュ","img":"img/cards/card_286.png","hd":0},"SUMMON_MN097_DYH_NO45":{"code":"0-2690","short":"DYH NO45","wno":"441","kind":"SUMMON","rar":"C","flv":2,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Troll","ja":"トロル","img":"img/cards/card_276.png","hd":0},"SUMMON_MN005_DYH_NO05":{"code":"1-412","short":"DYH NO05","wno":"442","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Esqueleto Cavaleiro","ja":"スケルトンナイト","img":"img/cards/card_208.png","hd":0},"SUMMON_MN118_DYH_NO50":{"code":"0-2691","short":"DYH NO50","wno":"443","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Sapo Blindado","ja":"アーマードフロッグ","img":"img/cards_hd/SUMMON_MN118_DYH_NO50.jpg","hd":1},"SUMMON_MN044_DYH_AN13":{"code":"1-411","short":"DYH AN13","wno":"489","kind":"SUMMON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Alta Salamandra","ja":"ハイサラマンダー","img":"img/cards/card_240.png","hd":0},"SUMMON_MN057_DYB_NO06":{"code":"0-2687","short":"DYB NO06","wno":"490","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Galo Comestível","ja":"エディブルコック","img":"img/cards/card_253.png","hd":0},"SUMMON_MN119_DYH_NO51":{"code":"0-2686","short":"DYH NO51","wno":"491","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Sapo Guardião","ja":"ガーディアンフロッグ","img":"img/cards/card_283.png","hd":0},"SUMMON_MN022_DYH_NO17":{"code":"0-2688","short":"DYH NO17","wno":"492","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Goblin Cozinheiro","ja":"ゴブリンコック","img":"img/cards_hd/SUMMON_MN022_DYH_NO17.jpg","hd":1},"SUMMON_MN067_DYH_WI08":{"code":"1-413","short":"DYH WI08","wno":"493","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Gárgula Carmesim","ja":"クリムゾンガーゴイル","img":"img/cards/card_260.png","hd":0},"SUMMON_MN001_DYH_NO01":{"code":"0-2716","short":"DYH NO01","wno":"549","kind":"SUMMON","rar":"C","flv":1,"mode":"synth","max":11,"plus":10,"unit":1,"pt":"Esqueleto Anão","ja":"ドワーブンスケルトン","img":"img/cards_hd/SUMMON_MN001_DYH_NO01.jpg","hd":1},"SUMMON_MN218_DYH_NO76":{"code":"1-455","short":"DYH NO76","wno":"550","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Lich","ja":"リッチ","img":"img/cards/card_423.png","hd":0},"SUMMON_MN221_DYH_NO79":{"code":"0-2717","short":"DYH NO79","wno":"551","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Lâmia","ja":"ラミア","img":"img/cards/card_426.png","hd":0},"SUMMON_MN222_DYH_NO80":{"code":"1-458","short":"DYH NO80","wno":"552","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Terror","ja":"テラー","img":"img/cards/card_427.png","hd":0},"SUMMON_MN225_DYH_NO86":{"code":"0-2718","short":"DYH NO86","wno":"553","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Homem-peixe","ja":"ギルマン","img":"img/cards/card_428.png","hd":0},"SUMMON_MN219_DYH_NO77":{"code":"1-456","short":"DYH NO77","wno":"597","kind":"SUMMON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Dullahan","ja":"デュラハン","img":"img/cards/card_424.png","hd":0},"SUMMON_MN220_DYH_NO78":{"code":"1-457","short":"DYH NO78","wno":"598","kind":"SUMMON","rar":"R","flv":4,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Ciclope","ja":"サイクロプス","img":"img/cards/card_425.png","hd":0},"SUMMON_MN235_DYF_WI10_2":{"code":"1-453","short":"DYF WI10 2","wno":"599","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Dragão de Ferro","ja":"鉄の竜","img":"img/cards/card_432.png","hd":0},"SUMMON_MN234_DYH_WI13_2":{"code":"1-454","short":"DYH WI13 2","wno":"600","kind":"SUMMON","rar":"R","flv":3,"mode":"synth","max":4,"plus":3,"unit":1,"pt":"Seraphy Luka","ja":"セラフィー・ルカ","img":"img/cards/card_431.png","hd":0},"SUMMON_MN163_DYF_NO10":{"code":"0-2715","short":"DYF NO10","wno":"—","kind":"SUMMON","rar":"UC","flv":2,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Barghest","ja":"ボーゲスト","img":"img/cards_hd/SUMMON_MN163_DYF_NO10.jpg","hd":1},"SUMMON_MN233_DYH_NO87_2":{"code":"1-485","short":"DYH NO87 2","wno":"—","kind":"SUMMON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Fuu","ja":"ふぅ","img":"img/cards/card_430.png","hd":0},"SUMMON_MN232_DYH_NO88_2":{"code":"1-486","short":"DYH NO88 2","wno":"—","kind":"SUMMON","rar":"UC","flv":3,"mode":"synth","max":6,"plus":5,"unit":1,"pt":"Kamepopon","ja":"カメポポン","img":"img/cards/card_429.png","hd":0}};

  var CODE_TO_IID = {};
  (function () {
    for (var k in DECK_CATALOG) {
      if (Object.prototype.hasOwnProperty.call(DECK_CATALOG, k)) {
        CODE_TO_IID[DECK_CATALOG[k].code] = k;
      }
    }
  })();

  function isJaPage() {
    var htmlEl = document.documentElement;
    return Boolean(htmlEl && htmlEl.getAttribute && htmlEl.getAttribute('lang') === 'ja');
  }

  function getWikiRoot() {
    var b = document.body;
    if (b && b.getAttribute) {
      var r = b.getAttribute('data-wiki-root');
      if (r) return r.replace(/\/+$/, '') + '/';
    }
    var p = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '';
    if (p.indexOf('/wiki/pt-br/') !== -1 || p.indexOf('/wiki/ja/') !== -1) return '../';
    if (p.indexOf('/wiki/') !== -1) return './';
    return 'wiki/';
  }

  var openLightboxFn = null;

  function initLightbox() {
    var ov = document.createElement('div');
    ov.id = 'lb-ov';
    var img = document.createElement('img');
    var cap = document.createElement('div');
    cap.id = 'lb-cap';
    ov.appendChild(img);
    ov.appendChild(cap);
    document.body.appendChild(ov);

    openLightboxFn = function (src, alt, titleText, isHd) {
      img.src = src;
      img.alt = alt || '';
      img.classList.toggle('lb-hd', Boolean(isHd));
      cap.textContent = titleText || alt || '';
      ov.classList.add('open');
    };

    ov.addEventListener('click', function () {
      ov.classList.remove('open');
    });
    ov.addEventListener('mousemove', function (e) {
      if (!ov.classList.contains('open') || !ov.getBoundingClientRect) return;
      var rect = ov.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      var x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
      var y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
      if (ov.style && ov.style.setProperty) {
        ov.style.setProperty('--holo-x', x + '%');
        ov.style.setProperty('--holo-y', y + '%');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') ov.classList.remove('open');
    });
    document.addEventListener('click', function (e) {
      var t = e.target;
      if (!t) return;
      var zoomBtn = t.closest && t.closest('.zoom-img-btn');
      if (zoomBtn) {
        e.stopPropagation();
        var cell = zoomBtn.closest('.col-img');
        var cellImg = cell && cell.querySelector ? cell.querySelector('img') : null;
        if (cellImg) {
          openLightboxFn(
            cellImg.src,
            cellImg.alt || '',
            cellImg.getAttribute('title') || cellImg.alt || '',
            cellImg.classList.contains('card-hd')
          );
        }
        return;
      }
      if (t.tagName !== 'IMG') return;
      if (t.classList && t.classList.contains('deck-item-thumb')) {
        openLightboxFn(t.src, t.alt || '', t.getAttribute('title') || t.alt || '', t.getAttribute('data-hd') === '1');
        return;
      }
      var inHero = t.classList && t.classList.contains('hero-showcase-img');
      if (inHero) {
        openLightboxFn(t.src, t.alt || '', t.getAttribute('title') || t.alt || '', t.classList.contains('card-hd'));
        return;
      }
      var inTable = t.closest && t.closest('table.wiki-table');
      if (inTable) {
        var tr = t.closest('tr[data-id]');
        var rowId = tr && tr.getAttribute ? tr.getAttribute('data-id') : null;
        if (rowId && DECK_CATALOG[rowId]) {
          /* Handled by Deck Builder row click so clicking the card adds it to the deck */
          return;
        }
        openLightboxFn(t.src, t.alt || '', t.getAttribute('title') || t.alt || '', t.classList.contains('card-hd'));
      }
    });
  }

  function initSpotlight() {
    document.addEventListener('mousemove', function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      var card = t.closest('[data-spotlight]');
      if (!card || !card.getBoundingClientRect || !card.style || !card.style.setProperty) return;
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--spot-y', (e.clientY - rect.top) + 'px');
    });
  }

  function initCopy() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('button.copy-id');
      if (!btn) return;
      var text = btn.getAttribute('data-copy') || '';
      if (!text) return;
      var finish = function () {
        btn.classList.add('copied');
        var prev = btn.textContent;
        btn.textContent = '✓';
        setTimeout(function () {
          btn.classList.remove('copied');
          btn.textContent = prev;
        }, 900);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(finish, finish);
      } else {
        finish();
      }
    });
  }

  function initDeckBuilder() {
    if (typeof window === 'undefined' || !document.querySelectorAll) return;

    var ja = isJaPage();
    var deckEntries = []; // [{ iid: string, qty: number }]
    var savedDirHandle = null;
    var toastTimer = null;

    function loadDeckStorage() {
      try {
        var raw = window.localStorage ? window.localStorage.getItem(DECK_STORAGE_KEY) : null;
        if (!raw) return;
        var parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return;
        var clean = [];
        var total = 0;
        for (var i = 0; i < parsed.length; i++) {
          var item = parsed[i];
          if (!item || !item.iid || !DECK_CATALOG[item.iid]) continue;
          var meta = DECK_CATALOG[item.iid];
          var q = parseInt(item.qty, 10) || 1;
          if (q < 1) continue;
          if (q > meta.max) q = meta.max;
          if (total + q > DECK_MAX_TOTAL) q = DECK_MAX_TOTAL - total;
          if (q > 0) {
            clean.push({ iid: item.iid, qty: q });
            total += q;
          }
        }
        deckEntries = clean;
      } catch (_e) {}
    }

    function saveDeckStorage() {
      try {
        if (window.localStorage) {
          window.localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deckEntries));
        }
      } catch (_e) {}
    }

    function totalCards() {
      var sum = 0;
      for (var i = 0; i < deckEntries.length; i++) sum += deckEntries[i].qty;
      return sum;
    }

    function findEntry(iid) {
      for (var i = 0; i < deckEntries.length; i++) {
        if (deckEntries[i].iid === iid) return deckEntries[i];
      }
      return null;
    }

    function getQty(iid) {
      var e = findEntry(iid);
      return e ? e.qty : 0;
    }

    function slotCounts() {
      var itemSlots = 0;
      var skillSlots = 0;
      for (var i = 0; i < deckEntries.length; i++) {
        var e = deckEntries[i];
        var m = DECK_CATALOG[e.iid];
        if (!m) continue;
        var slotsUsed = m.mode === 'indiv' ? e.qty : 1;
        if (m.kind === 'SKILL') skillSlots += slotsUsed;
        else itemSlots += slotsUsed;
      }
      return { itemSlots: itemSlots, skillSlots: skillSlots };
    }

    var toastEl = document.createElement('div');
    toastEl.id = 'deck-toast';
    document.body.appendChild(toastEl);

    function showToast(msg) {
      toastEl.textContent = msg;
      toastEl.classList.add('show');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        toastEl.classList.remove('show');
      }, 2200);
    }

    function pulseNavBtn() {
      var btn = document.getElementById('deck-open-btn');
      if (!btn) return;
      btn.classList.remove('pulse');
      void btn.offsetWidth;
      btn.classList.add('pulse');
    }

    function describeEffect(meta, qty) {
      if (meta.mode === 'synth') {
        var plus = Math.min(meta.plus, Math.max(0, qty - 1));
        var isMax = qty >= meta.max;
        if (ja) {
          return 'カード合成: +' + plus + (isMax ? ' (最大上限)' : ' / 最大 +' + meta.plus + ' (' + meta.max + '枚)');
        }
        return 'Síntese no jogo: +' + plus + (isMax ? ' (MÁXIMO)' : ' · máx +' + meta.plus + ' (' + meta.max + ' cartas)');
      }
      if (meta.mode === 'charges') {
        var charges = Math.min(meta.plus, qty * meta.unit);
        var isMaxC = qty >= meta.max;
        if (ja) {
          return '合計回数/弾数: ' + charges + ' / ' + meta.plus + (isMaxC ? ' (最大)' : ' (1枚+' + meta.unit + ')');
        }
        return 'Total de cargas: ' + charges + ' / ' + meta.plus + (isMaxC ? ' (MÁXIMO)' : ' (+' + meta.unit + ' por carta)');
      }
      if (ja) {
        return '個別持込: ' + qty + '個 / 最大' + meta.max + '枚 (合成なし)';
      }
      return 'Unidades separadas: ' + qty + ' / máx ' + meta.max + ' cartas';
    }

    function setCardQty(iid, desiredQty, silent) {
      var meta = DECK_CATALOG[iid];
      if (!meta) return false;
      var current = findEntry(iid);
      var currentQty = current ? current.qty : 0;
      var othersTotal = totalCards() - currentQty;

      if (desiredQty <= 0) {
        if (current) {
          deckEntries = deckEntries.filter(function (x) { return x.iid !== iid; });
          saveDeckStorage();
          syncAllUI();
        }
        return true;
      }

      var maxAllowedByCard = meta.max;
      var maxAllowedByDeck = DECK_MAX_TOTAL - othersTotal;
      if (maxAllowedByDeck <= 0) {
        showToast(ja ? 'デッキ上限（35枚）に達しています！' : 'Limite do leitor atingido (35/35 cartas)!');
        return false;
      }
      var finalQty = desiredQty;
      if (finalQty > maxAllowedByCard) {
        finalQty = maxAllowedByCard;
        if (!silent) {
          showToast(
            ja
              ? (meta.ja + ' は最大 ' + maxAllowedByCard + ' 枚までです')
              : ('Limite desta carta: máx. ' + maxAllowedByCard + ' cópias (' + (meta.mode === 'synth' ? '+' + meta.plus : meta.plus || maxAllowedByCard) + ')')
          );
        }
      }
      if (finalQty > maxAllowedByDeck) {
        finalQty = maxAllowedByDeck;
        if (!silent) {
          showToast(ja ? 'デッキ残り枠に合わせて ' + finalQty + ' 枚に設定しました (35/35)' : 'Ajustado para ' + finalQty + ' para respeitar o limite de 35 cartas!');
        }
      }

      if (current) {
        current.qty = finalQty;
      } else {
        deckEntries.push({ iid: iid, qty: finalQty });
      }
      saveDeckStorage();
      syncAllUI();
      if (!silent) {
        pulseNavBtn();
        var dispName = ja ? meta.ja : meta.pt;
        showToast(
          ja
            ? ('デッキに追加: ' + dispName + ' (' + finalQty + '/' + meta.max + '枚 · 合計 ' + totalCards() + '/35)')
            : ('No Deck: ' + dispName + ' (' + finalQty + '/' + meta.max + ' · Total ' + totalCards() + '/35)')
        );
      }
      return true;
    }

    // Build Modal DOM
    var modalOv = document.createElement('div');
    modalOv.id = 'deck-modal-ov';
    modalOv.setAttribute('role', 'dialog');
    modalOv.setAttribute('aria-modal', 'true');

    var dialog = document.createElement('div');
    dialog.className = 'deck-dialog';
    modalOv.appendChild(dialog);

    var hdr = document.createElement('div');
    hdr.className = 'deck-hdr';
    var hdrTitle = document.createElement('div');
    hdrTitle.className = 'deck-hdr-title';
    var h2 = document.createElement('h2');
    h2.textContent = ja ? 'Dフォース デッキビルダー' : 'Construtor de Deck D-Force';
    var hdrCountBadge = document.createElement('span');
    hdrCountBadge.className = 'home-count';
    hdrTitle.appendChild(h2);
    hdrTitle.appendChild(hdrCountBadge);
    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'deck-close-btn';
    closeBtn.textContent = '✕';
    closeBtn.title = ja ? '閉じる (Esc)' : 'Fechar (Esc)';
    hdr.appendChild(hdrTitle);
    hdr.appendChild(closeBtn);
    dialog.appendChild(hdr);

    var meters = document.createElement('div');
    meters.className = 'deck-meters';
    var meterRow = document.createElement('div');
    meterRow.className = 'deck-meter-row';
    var meterLeft = document.createElement('span');
    var slotPills = document.createElement('div');
    slotPills.className = 'deck-slot-pills';
    var itemSlotPill = document.createElement('span');
    itemSlotPill.className = 'deck-slot-pill';
    var skillSlotPill = document.createElement('span');
    skillSlotPill.className = 'deck-slot-pill';
    slotPills.appendChild(itemSlotPill);
    slotPills.appendChild(skillSlotPill);
    meterRow.appendChild(meterLeft);
    meterRow.appendChild(slotPills);
    var barTrack = document.createElement('div');
    barTrack.className = 'deck-bar-track';
    var barFill = document.createElement('div');
    barFill.className = 'deck-bar-fill';
    barTrack.appendChild(barFill);
    meters.appendChild(meterRow);
    meters.appendChild(barTrack);
    dialog.appendChild(meters);

    var bodyEl = document.createElement('div');
    bodyEl.className = 'deck-body';
    dialog.appendChild(bodyEl);

    var ftr = document.createElement('div');
    ftr.className = 'deck-ftr';
    var statusMsg = document.createElement('div');
    statusMsg.className = 'deck-status-msg';
    var ftrActions = document.createElement('div');
    ftrActions.className = 'deck-ftr-actions';
    var ftrLeft = document.createElement('div');
    ftrLeft.className = 'deck-ftr-left';
    var ftrRight = document.createElement('div');
    ftrRight.className = 'deck-ftr-right';

    var saveFolderBtn = document.createElement('button');
    saveFolderBtn.type = 'button';
    saveFolderBtn.className = 'btn-primary';
    saveFolderBtn.textContent = ja ? '💾 ゲームの deck フォルダに保存' : '💾 Salvar Deck no Computador (Pasta deck)';

    var pickFolderBtn = document.createElement('button');
    pickFolderBtn.type = 'button';
    pickFolderBtn.className = 'btn-secondary';
    pickFolderBtn.textContent = ja ? '📁 保存先フォルダ選択...' : '📁 Escolher Pasta...';
    pickFolderBtn.style.display = 'none';

    var zipBtn = document.createElement('button');
    zipBtn.type = 'button';
    zipBtn.className = 'btn-secondary';
    zipBtn.textContent = ja ? '📦 ZIPでダウンロード' : '📦 Baixar Deck (.zip)';

    var loadFolderBtn = document.createElement('button');
    loadFolderBtn.type = 'button';
    loadFolderBtn.className = 'btn-secondary';
    loadFolderBtn.textContent = ja ? '📂 PCのデッキを読込' : '📂 Carregar Pasta do PC';

    var clearDeckBtn = document.createElement('button');
    clearDeckBtn.type = 'button';
    clearDeckBtn.className = 'deck-mini-btn danger';
    clearDeckBtn.textContent = ja ? '🗑️ 全消去' : '🗑️ Limpar Deck';

    ftrLeft.appendChild(loadFolderBtn);
    ftrLeft.appendChild(clearDeckBtn);
    ftrRight.appendChild(zipBtn);
    ftrRight.appendChild(pickFolderBtn);
    ftrRight.appendChild(saveFolderBtn);
    ftrActions.appendChild(ftrLeft);
    ftrActions.appendChild(ftrRight);
    ftr.appendChild(statusMsg);
    ftr.appendChild(ftrActions);
    dialog.appendChild(ftr);
    document.body.appendChild(modalOv);

    function setStatus(text, kind) {
      statusMsg.textContent = text || '';
      statusMsg.className = 'deck-status-msg' + (kind ? ' ' + kind : '');
    }

    function openDeckModal() {
      renderModalList();
      modalOv.classList.add('open');
    }

    function closeDeckModal() {
      modalOv.classList.remove('open');
    }

    closeBtn.addEventListener('click', closeDeckModal);
    modalOv.addEventListener('click', function (e) {
      if (e.target === modalOv) closeDeckModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalOv.classList.contains('open')) {
        closeDeckModal();
      }
    });

    var navDeckBtn = document.getElementById('deck-open-btn');
    if (navDeckBtn) {
      navDeckBtn.addEventListener('click', openDeckModal);
    }

    clearDeckBtn.addEventListener('click', function () {
      if (!deckEntries.length) return;
      deckEntries = [];
      saveDeckStorage();
      syncAllUI();
      setStatus(ja ? 'デッキを空にしました。' : 'Deck esvaziado.', '');
    });

    function renderModalList() {
      var tot = totalCards();
      var slots = slotCounts();
      hdrCountBadge.textContent = tot + ' / ' + DECK_MAX_TOTAL;
      meterLeft.textContent = ja
        ? ('リーダー読込枚数: ' + tot + ' / 35枚 （同じカードを重ねるとゲーム内で自動合成されます）')
        : ('Cartas físicas no leitor: ' + tot + ' / 35 (cópias repetidas se fundem automaticamente no jogo)');

      itemSlotPill.innerHTML = (ja ? 'アイテム・魔法・召喚枠: ' : 'Slots Itens/Magias/Invoc.: ') + '<strong>' + slots.itemSlots + '/' + DECK_MAX_ITEMS + '</strong>';
      itemSlotPill.classList.toggle('warn', slots.itemSlots > DECK_MAX_ITEMS);

      skillSlotPill.innerHTML = (ja ? 'スキル枠: ' : 'Slots Habilidades (Skills): ') + '<strong>' + slots.skillSlots + '/' + DECK_MAX_SKILLS + '</strong>';
      skillSlotPill.classList.toggle('warn', slots.skillSlots > DECK_MAX_SKILLS);

      var pct = Math.min(100, Math.round((tot / DECK_MAX_TOTAL) * 100));
      barFill.style.width = pct + '%';
      barFill.classList.toggle('full', tot >= DECK_MAX_TOTAL);

      while (bodyEl.firstChild) bodyEl.removeChild(bodyEl.firstChild);

      if (!deckEntries.length) {
        var emp = document.createElement('div');
        emp.className = 'deck-empty';
        emp.textContent = ja
          ? 'デッキにカードがありません。「Dフォースカード」「スキル」「アイテム」ページでカードをクリックするとここに追加されます。'
          : 'Seu deck está vazio. Clique em qualquer carta nas abas Cartas D-Force, Habilidades ou Itens para adicioná-la aqui!';
        bodyEl.appendChild(emp);
        return;
      }

      var wikiRoot = getWikiRoot();
      for (var i = 0; i < deckEntries.length; i++) {
        (function (entry) {
          var meta = DECK_CATALOG[entry.iid];
          if (!meta) return;
          var row = document.createElement('div');
          row.className = 'deck-item';

          var thumb = document.createElement('img');
          thumb.className = 'deck-item-thumb';
          thumb.src = wikiRoot + meta.img;
          thumb.alt = ja ? meta.ja : meta.pt;
          thumb.title = (ja ? meta.ja : meta.pt) + ' (' + meta.code + ' ' + meta.short + '.png)';
          thumb.setAttribute('data-hd', meta.hd ? '1' : '0');
          row.appendChild(thumb);

          var info = document.createElement('div');
          info.className = 'deck-item-info';

          var titleLine = document.createElement('div');
          titleLine.className = 'deck-item-title';
          var nameSpan = document.createElement('span');
          nameSpan.textContent = ja ? meta.ja : meta.pt;
          var codeCode = document.createElement('code');
          codeCode.textContent = meta.code + ' ' + meta.short + '.png';
          titleLine.appendChild(nameSpan);
          titleLine.appendChild(codeCode);

          var subLine = document.createElement('div');
          subLine.className = 'deck-item-sub';
          subLine.textContent = (ja ? 'No.' + meta.wno + ' · ' + meta.kind + ' · ' + meta.rar : 'No. ' + meta.wno + ' · ' + meta.kind + ' · Raridade ' + meta.rar + ' · ' + meta.ja);

          var effLine = document.createElement('div');
          effLine.className = 'deck-item-effect';
          effLine.textContent = describeEffect(meta, entry.qty);

          info.appendChild(titleLine);
          info.appendChild(subLine);
          info.appendChild(effLine);
          row.appendChild(info);

          var ctrls = document.createElement('div');
          ctrls.className = 'deck-item-ctrls';

          var minusB = document.createElement('button');
          minusB.type = 'button';
          minusB.className = 'deck-mini-btn';
          minusB.textContent = '−';
          minusB.addEventListener('click', function () {
            setCardQty(entry.iid, entry.qty - 1, true);
          });

          var qtyInput = document.createElement('input');
          qtyInput.type = 'number';
          qtyInput.className = 'deck-qty-input';
          qtyInput.min = '1';
          qtyInput.max = String(meta.max);
          qtyInput.value = String(entry.qty);
          qtyInput.setAttribute('aria-label', ja ? '枚数' : 'Quantidade');
          qtyInput.addEventListener('change', function () {
            var v = parseInt(qtyInput.value, 10);
            if (isNaN(v) || v < 1) v = 1;
            setCardQty(entry.iid, v, false);
          });

          var maxLbl = document.createElement('span');
          maxLbl.className = 'deck-qty-max-lbl';
          maxLbl.textContent = '/ ' + meta.max;

          var plusB = document.createElement('button');
          plusB.type = 'button';
          plusB.className = 'deck-mini-btn';
          plusB.textContent = '+';
          plusB.addEventListener('click', function () {
            setCardQty(entry.iid, entry.qty + 1, false);
          });

          var maxB = document.createElement('button');
          maxB.type = 'button';
          maxB.className = 'deck-mini-btn';
          maxB.textContent = 'MAX';
          maxB.title = ja ? ('このカードの最大枚数 (' + meta.max + '枚) に設定') : ('Preencher máximo desta carta (' + meta.max + 'x)');
          maxB.addEventListener('click', function () {
            setCardQty(entry.iid, meta.max, false);
          });

          var delB = document.createElement('button');
          delB.type = 'button';
          delB.className = 'deck-mini-btn danger';
          delB.textContent = '✕';
          delB.title = ja ? 'デッキから外す' : 'Remover carta';
          delB.addEventListener('click', function () {
            setCardQty(entry.iid, 0, true);
          });

          ctrls.appendChild(minusB);
          ctrls.appendChild(qtyInput);
          ctrls.appendChild(maxLbl);
          ctrls.appendChild(plusB);
          ctrls.appendChild(maxB);
          ctrls.appendChild(delB);
          row.appendChild(ctrls);

          bodyEl.appendChild(row);
        })(deckEntries[i]);
      }
    }

    // Decorate catalog table rows that correspond to usable D-Force cards
    var tableRows = Array.prototype.slice.call(document.querySelectorAll('table.wiki-table tbody tr[data-id]'));
    var rowWidgets = {};

    for (var rIdx = 0; rIdx < tableRows.length; rIdx++) {
      (function (tr) {
        var iid = tr.getAttribute('data-id');
        var meta = iid ? DECK_CATALOG[iid] : null;
        if (!meta) return;
        tr.classList.add('has-deck-card');

        var imgCell = tr.querySelector('.col-img');
        if (imgCell && imgCell.querySelector('img') && !imgCell.querySelector('.zoom-img-btn')) {
          var zBtn = document.createElement('button');
          zBtn.type = 'button';
          zBtn.className = 'zoom-img-btn';
          zBtn.textContent = ja ? '🔍 拡大' : '🔍 Zoom';
          zBtn.title = ja ? '画像を拡大表示' : 'Ampliar imagem da carta';
          imgCell.appendChild(zBtn);
        }

        var nameCell = tr.querySelector('.col-name');
        if (nameCell) {
          var ctrlWrap = document.createElement('div');
          ctrlWrap.className = 'row-deck-ctrl';
          nameCell.appendChild(ctrlWrap);
          rowWidgets[iid] = { tr: tr, wrap: ctrlWrap, meta: meta };
        }

        tr.addEventListener('click', function (e) {
          var target = e.target;
          if (!target) return;
          if (target.closest && (target.closest('button.copy-id') || target.closest('.zoom-img-btn') || target.closest('.row-deck-ctrl'))) {
            return;
          }
          var q = getQty(iid);
          setCardQty(iid, q + 1, false);
        });
      })(tableRows[rIdx]);
    }

    function updateRowWidget(iid) {
      var w = rowWidgets[iid];
      if (!w) return;
      var q = getQty(iid);
      var meta = w.meta;
      w.tr.classList.toggle('in-deck', q > 0);
      while (w.wrap.firstChild) w.wrap.removeChild(w.wrap.firstChild);

      if (q === 0) {
        var addB = document.createElement('button');
        addB.type = 'button';
        addB.className = 'row-deck-add';
        addB.textContent = ja
          ? ('+ デッキに追加 (最大' + meta.max + '枚)')
          : ('+ Adicionar ao Deck (máx ' + meta.max + 'x)');
        addB.addEventListener('click', function (e) {
          e.stopPropagation();
          setCardQty(iid, 1, false);
        });
        w.wrap.appendChild(addB);
      } else {
        var step = document.createElement('div');
        step.className = 'row-deck-stepper';
        var mBtn = document.createElement('button');
        mBtn.type = 'button';
        mBtn.className = 'rd-btn';
        mBtn.textContent = '−';
        mBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          setCardQty(iid, q - 1, true);
        });
        var qSpan = document.createElement('span');
        qSpan.className = 'rd-qty';
        qSpan.textContent = (ja ? 'デッキ: ' : 'No Deck: ') + q + '/' + meta.max;
        var pBtn = document.createElement('button');
        pBtn.type = 'button';
        pBtn.className = 'rd-btn';
        pBtn.textContent = '+';
        pBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          setCardQty(iid, q + 1, false);
        });
        step.appendChild(mBtn);
        step.appendChild(qSpan);
        step.appendChild(pBtn);
        w.wrap.appendChild(step);
      }
    }

    function syncAllUI() {
      var tot = totalCards();
      var navBadge = document.getElementById('deck-nav-count');
      if (navBadge) navBadge.textContent = tot + '/' + DECK_MAX_TOTAL;
      if (navDeckBtn) navDeckBtn.classList.toggle('has-cards', tot > 0);

      for (var iid in rowWidgets) {
        if (Object.prototype.hasOwnProperty.call(rowWidgets, iid)) {
          updateRowWidget(iid);
        }
      }
      if (modalOv.classList.contains('open')) {
        renderModalList();
      }
    }

    // IndexedDB persistence for the chosen game deck folder handle
    function openHandleDB() {
      return new Promise(function (resolve) {
        if (typeof indexedDB === 'undefined') return resolve(null);
        var req = indexedDB.open('qod4_deck_fs_db', 1);
        req.onupgradeneeded = function (ev) {
          var db = ev.target.result;
          if (!db.objectStoreNames.contains('handles')) {
            db.createObjectStore('handles');
          }
        };
        req.onsuccess = function (ev) { resolve(ev.target.result); };
        req.onerror = function () { resolve(null); };
      });
    }

    function loadSavedDirHandle() {
      return openHandleDB().then(function (db) {
        if (!db) return null;
        return new Promise(function (resolve) {
          var tx = db.transaction('handles', 'readonly');
          var req = tx.objectStore('handles').get('deckDir');
          req.onsuccess = function () { resolve(req.result || null); };
          req.onerror = function () { resolve(null); };
        });
      });
    }

    function storeSavedDirHandle(handle) {
      return openHandleDB().then(function (db) {
        if (!db) return;
        return new Promise(function (resolve) {
          var tx = db.transaction('handles', 'readwrite');
          tx.objectStore('handles').put(handle, 'deckDir');
          tx.oncomplete = function () { resolve(); };
          tx.onerror = function () { resolve(); };
        });
      });
    }

    loadSavedDirHandle().then(function (h) {
      if (h) {
        savedDirHandle = h;
        pickFolderBtn.style.display = 'inline-flex';
      }
    });

    // Render a card PNG blob (240x336 or HD scan PNG) for saving to the game's deck folder
    function loadImageElement(url) {
      return new Promise(function (resolve, reject) {
        var im = new Image();
        im.crossOrigin = 'anonymous';
        im.onload = function () { resolve(im); };
        im.onerror = function (err) { reject(err); };
        im.src = url;
      });
    }

    function renderCardPngBytes(iid) {
      var meta = DECK_CATALOG[iid];
      var wikiRoot = getWikiRoot();
      var imgUrl = wikiRoot + meta.img;

      return loadImageElement(imgUrl).then(function (im) {
        var canvas = document.createElement('canvas');
        if (meta.hd) {
          canvas.width = im.naturalWidth || 240;
          canvas.height = im.naturalHeight || 336;
          var ctxHd = canvas.getContext('2d');
          ctxHd.drawImage(im, 0, 0);
        } else {
          var W = 240, H = 336;
          canvas.width = W;
          canvas.height = H;
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = '#141210';
          ctx.fillRect(0, 0, W, H);
          ctx.strokeStyle = meta.rar === 'R' ? '#e6c67c' : (meta.rar === 'UC' ? '#5ab9fc' : '#a59d90');
          ctx.lineWidth = 4;
          ctx.strokeRect(4, 4, W - 8, H - 8);
          ctx.fillStyle = '#1f1a15';
          ctx.fillRect(16, 40, W - 32, 160);
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(im, (W - 116) / 2, 54, 116, 132);
          ctx.fillStyle = '#e6c67c';
          ctx.font = 'bold 12px monospace';
          ctx.fillText(meta.kind + ' · ' + meta.rar + ' · FLv' + meta.flv, 16, 26);
          ctx.fillStyle = '#f2efe9';
          ctx.fillText('No.' + meta.wno + ' (' + meta.code + ')', 124, 26);
          ctx.font = 'bold 15px sans-serif';
          ctx.fillText((meta.pt || meta.short).slice(0, 22), 16, 226);
          ctx.fillStyle = '#a59d90';
          ctx.font = '13px sans-serif';
          ctx.fillText((meta.ja || '').slice(0, 18), 16, 248);
          ctx.fillStyle = '#c9a45a';
          ctx.font = '12px monospace';
          ctx.fillText(meta.code + ' ' + meta.short, 16, 276);
        }
        return new Promise(function (resolve) {
          canvas.toBlob(function (blob) {
            blob.arrayBuffer().then(function (buf) {
              resolve(new Uint8Array(buf));
            });
          }, 'image/png');
        });
      });
    }

    function buildDeckFileList() {
      var tasks = [];
      for (var i = 0; i < deckEntries.length; i++) {
        tasks.push((function (entry) {
          var meta = DECK_CATALOG[entry.iid];
          return renderCardPngBytes(entry.iid).then(function (bytes) {
            var baseName = meta.code + ' ' + meta.short;
            var out = [];
            for (var c = 1; c <= entry.qty; c++) {
              var fn = c === 1 ? (baseName + '.png') : (baseName + ' (' + c + ').png');
              out.push({ name: fn, data: bytes });
            }
            return out;
          });
        })(deckEntries[i]));
      }
      return Promise.all(tasks).then(function (groups) {
        var all = [];
        for (var g = 0; g < groups.length; g++) {
          for (var k = 0; k < groups[g].length; k++) {
            all.push(groups[g][k]);
          }
        }
        return all;
      });
    }

    async function writeDeckToDirectory(forcePick) {
      if (!deckEntries.length) {
        setStatus(ja ? '保存する前にカードを1枚以上追加してください。' : 'Adicione pelo menos 1 carta ao deck antes de salvar!', 'err');
        return;
      }
      if (typeof window.showDirectoryPicker !== 'function') {
        setStatus(ja ? 'お使いのブラウザは直接フォルダ保存に未対応のため、ZIPをダウンロードします...' : 'Seu navegador não suporta gravação direta em pasta; baixando o arquivo .zip...', '');
        downloadDeckZip();
        return;
      }
      try {
        var dirHandle = savedDirHandle;
        if (forcePick || !dirHandle) {
          dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
          savedDirHandle = dirHandle;
          await storeSavedDirHandle(dirHandle);
          pickFolderBtn.style.display = 'inline-flex';
        } else if (dirHandle.requestPermission) {
          var perm = await dirHandle.requestPermission({ mode: 'readwrite' });
          if (perm !== 'granted') {
            dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
            savedDirHandle = dirHandle;
            await storeSavedDirHandle(dirHandle);
          }
        }

        setStatus(ja ? 'カード画像を生成してフォルダに書き込んでいます...' : 'Montando as cartas e gravando na pasta do computador...', '');
        var files = await buildDeckFileList();

        // Remove previous card files (<series>-<number>*.png) in that deck folder
        var toRemove = [];
        for await (var entry of dirHandle.values()) {
          if (entry.kind === 'file' && /^[01]-\d+\b/.test(entry.name)) {
            toRemove.push(entry.name);
          }
        }
        for (var r = 0; r < toRemove.length; r++) {
          try { await dirHandle.removeEntry(toRemove[r]); } catch (_e) {}
        }

        // Write each card file
        for (var f = 0; f < files.length; f++) {
          var fh = await dirHandle.getFileHandle(files[f].name, { create: true });
          var writable = await fh.createWritable();
          await writable.write(files[f].data);
          await writable.close();
        }

        var msgOk = ja
          ? ('✓ 保存完了！ フォルダ「' + dirHandle.name + '」に ' + files.length + ' 枚のカードを作成しました（ゲーム内で F キーを押すと読み込まれます）。')
          : ('✓ Deck salvo com sucesso na pasta "' + dirHandle.name + '" (' + files.length + ' cartas prontas)! No jogo, aperte F na tela D-Force para ler o deck.');
        setStatus(msgOk, 'ok');
        showToast(msgOk);
      } catch (err) {
        if (err && err.name === 'AbortError') return;
        setStatus((ja ? '保存エラー: ' : 'Erro ao salvar na pasta: ') + (err && err.message ? err.message : String(err)), 'err');
      }
    }

    saveFolderBtn.addEventListener('click', function () {
      writeDeckToDirectory(false);
    });
    pickFolderBtn.addEventListener('click', function () {
      writeDeckToDirectory(true);
    });

    // Load an existing deck folder from PC into the Wiki Deck Builder
    loadFolderBtn.addEventListener('click', async function () {
      if (typeof window.showDirectoryPicker !== 'function') {
        setStatus(ja ? 'このブラウザはフォルダ読込に対応していません（Chrome / Edge を推奨）。' : 'Use Chrome ou Edge para carregar uma pasta de deck diretamente do PC.', 'err');
        return;
      }
      try {
        var dirHandle = await window.showDirectoryPicker({ mode: 'read' });
        var countsByCode = {};
        var orderCodes = [];
        for await (var entry of dirHandle.values()) {
          if (entry.kind !== 'file') continue;
          var m = /^([01])-(\d+)\b/.exec(entry.name);
          if (!m) continue;
          var code = m[1] + '-' + parseInt(m[2], 10);
          if (!CODE_TO_IID[code]) continue;
          if (!countsByCode[code]) {
            countsByCode[code] = 0;
            orderCodes.push(code);
          }
          countsByCode[code]++;
        }
        if (!orderCodes.length) {
          setStatus(ja ? '選択したフォルダに Dフォースカードが見つかりませんでした。' : 'Nenhuma carta D-Force (0-xxxx / 1-xxx) encontrada nessa pasta.', 'err');
          return;
        }
        savedDirHandle = dirHandle;
        await storeSavedDirHandle(dirHandle);
        pickFolderBtn.style.display = 'inline-flex';

        var loaded = [];
        var running = 0;
        for (var i = 0; i < orderCodes.length; i++) {
          var cCode = orderCodes[i];
          var iid = CODE_TO_IID[cCode];
          var meta = DECK_CATALOG[iid];
          var q = Math.min(meta.max, countsByCode[cCode]);
          if (running + q > DECK_MAX_TOTAL) q = DECK_MAX_TOTAL - running;
          if (q > 0) {
            loaded.push({ iid: iid, qty: q });
            running += q;
          }
        }
        deckEntries = loaded;
        saveDeckStorage();
        syncAllUI();
        setStatus(
          ja
            ? ('✓ フォルダ「' + dirHandle.name + '」から ' + running + ' 枚のカードを読み込みました。')
            : ('✓ Deck carregado da pasta "' + dirHandle.name + '" (' + running + ' cartas)!'),
          'ok'
        );
      } catch (err) {
        if (err && err.name === 'AbortError') return;
        setStatus((ja ? '読込エラー: ' : 'Erro ao ler pasta: ') + (err && err.message ? err.message : String(err)), 'err');
      }
    });

    // Pure JS ZIP builder (STORE mode with CRC32) for universal 1-click deck download
    var crcTable = (function () {
      var t = new Uint32Array(256);
      for (var n = 0; n < 256; n++) {
        var c = n;
        for (var k = 0; k < 8; k++) {
          c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
        }
        t[n] = c >>> 0;
      }
      return t;
    })();

    function crc32(bytes) {
      var c = 0xFFFFFFFF;
      for (var i = 0; i < bytes.length; i++) {
        c = crcTable[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
      }
      return (c ^ 0xFFFFFFFF) >>> 0;
    }

    function makeZipBlob(files) {
      var enc = new TextEncoder();
      var localParts = [];
      var centralParts = [];
      var offset = 0;

      for (var i = 0; i < files.length; i++) {
        var nameBytes = enc.encode('deck/' + files[i].name);
        var data = files[i].data;
        var crc = crc32(data);
        var sz = data.length;

        var lh = new Uint8Array(30 + nameBytes.length);
        var lhv = new DataView(lh.buffer);
        lhv.setUint32(0, 0x04034B50, true);
        lhv.setUint16(4, 20, true);
        lhv.setUint16(6, 0x0800, true);
        lhv.setUint16(8, 0, true);
        lhv.setUint16(10, 0, true);
        lhv.setUint16(12, 0x5421, true);
        lhv.setUint32(14, crc, true);
        lhv.setUint32(18, sz, true);
        lhv.setUint32(22, sz, true);
        lhv.setUint16(26, nameBytes.length, true);
        lhv.setUint16(28, 0, true);
        lh.set(nameBytes, 30);

        var ch = new Uint8Array(46 + nameBytes.length);
        var chv = new DataView(ch.buffer);
        chv.setUint32(0, 0x02014B50, true);
        chv.setUint16(4, 20, true);
        chv.setUint16(6, 20, true);
        chv.setUint16(8, 0x0800, true);
        chv.setUint16(10, 0, true);
        chv.setUint16(12, 0, true);
        chv.setUint16(14, 0x5421, true);
        chv.setUint32(16, crc, true);
        chv.setUint32(20, sz, true);
        chv.setUint32(24, sz, true);
        chv.setUint16(28, nameBytes.length, true);
        chv.setUint16(30, 0, true);
        chv.setUint16(32, 0, true);
        chv.setUint16(34, 0, true);
        chv.setUint16(36, 0, true);
        chv.setUint32(38, 0, true);
        chv.setUint32(42, offset, true);
        ch.set(nameBytes, 46);

        localParts.push(lh, data);
        centralParts.push(ch);
        offset += lh.length + sz;
      }

      var centralSize = 0;
      for (var c = 0; c < centralParts.length; c++) centralSize += centralParts[c].length;

      var eocd = new Uint8Array(22);
      var ev = new DataView(eocd.buffer);
      ev.setUint32(0, 0x06054B50, true);
      ev.setUint16(4, 0, true);
      ev.setUint16(6, 0, true);
      ev.setUint16(8, files.length, true);
      ev.setUint16(10, files.length, true);
      ev.setUint32(12, centralSize, true);
      ev.setUint32(16, offset, true);
      ev.setUint16(20, 0, true);

      return new Blob(localParts.concat(centralParts, [eocd]), { type: 'application/zip' });
    }

    async function downloadDeckZip() {
      if (!deckEntries.length) {
        setStatus(ja ? 'カードを追加してからダウンロードしてください。' : 'Adicione cartas ao deck antes de baixar!', 'err');
        return;
      }
      try {
        setStatus(ja ? 'ZIPファイルを作成中...' : 'Gerando arquivo deck.zip com as cartas...', '');
        var files = await buildDeckFileList();
        var blob = makeZipBlob(files);
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'deck_qod4_' + files.length + 'cartas.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 3000);
        setStatus(
          ja
            ? ('✓ ZIPをダウンロードしました（' + files.length + '枚）。sim/cards/deck に展開して使えます。')
            : ('✓ Download concluído (' + files.length + ' cartas)! Extraia na pasta sim\cards\deck ou em Decks\.'),
          'ok'
        );
      } catch (err) {
        setStatus((ja ? 'ZIP作成エラー: ' : 'Erro ao gerar ZIP: ') + (err && err.message ? err.message : String(err)), 'err');
      }
    }

    zipBtn.addEventListener('click', downloadDeckZip);

    loadDeckStorage();
    syncAllUI();
  }

  function initCatalog() {
    var root = document.getElementById('catalog-root');
    if (!root) return;

    var searchInput = document.getElementById('wiki-search');
    var clearBtn = document.getElementById('wiki-clear');
    var countEl = document.getElementById('result-count');
    var emptyEl = document.getElementById('empty-state');
    var sections = Array.prototype.slice.call(root.querySelectorAll('.cat-section'));
    var rows = Array.prototype.slice.call(root.querySelectorAll('tbody tr[data-search]'));
    var totalRows = rows.length;

    var state = { q: '', cat: 'ALL', sub: 'ALL', rarity: 'ALL', flag: 'ALL' };

    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== searchInput && !e.ctrlKey && !e.metaKey) {
        var activeTag = document.activeElement && document.activeElement.tagName;
        if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;
        e.preventDefault();
        if (searchInput) searchInput.focus();
      }
    });

    function applyFilters() {
      var q = state.q.trim().toLowerCase();
      var tokens = q ? q.split(/\s+/) : [];
      var visibleTotal = 0;

      for (var i = 0; i < rows.length; i++) {
        var r = rows[i];
        var ok = true;
        if (state.cat !== 'ALL' && r.getAttribute('data-cat') !== state.cat) ok = false;
        if (ok && state.sub !== 'ALL' && r.getAttribute('data-sub') !== state.sub) ok = false;
        if (ok && state.rarity !== 'ALL' && r.getAttribute('data-rarity') !== state.rarity) ok = false;
        if (ok && state.flag !== 'ALL') {
          var flags = (r.getAttribute('data-flag') || '').split(',');
          if (flags.indexOf(state.flag) === -1) ok = false;
        }
        if (ok && tokens.length) {
          var hay = r.getAttribute('data-search') || '';
          for (var j = 0; j < tokens.length; j++) {
            if (hay.indexOf(tokens[j]) === -1) {
              ok = false;
              break;
            }
          }
        }
        r.classList.toggle('is-hidden', !ok);
        if (ok) visibleTotal++;
      }

      for (var s = 0; s < sections.length; s++) {
        var sec = sections[s];
        var secVisible = sec.querySelectorAll('tbody tr:not(.is-hidden)').length;
        sec.classList.toggle('is-hidden', secVisible === 0);
        var sc = sec.querySelector('.cat-count');
        if (sc) sc.textContent = '(' + secVisible + ')';
      }

      if (countEl) {
        var tpl = countEl.getAttribute('data-tpl') || 'Mostrando {n} de {total}';
        countEl.textContent = tpl.replace('{n}', visibleTotal).replace('{total}', totalRows);
      }
      if (emptyEl) {
        emptyEl.style.display = visibleTotal === 0 ? 'block' : 'none';
      }

      var subBar = document.getElementById('weapon-sub-filters');
      if (subBar) {
        subBar.style.display = (state.cat === 'ALL' || state.cat === 'WEAPON2') ? 'flex' : 'none';
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        state.q = searchInput.value;
        applyFilters();
      });
    }

    document.addEventListener('click', function (e) {
      var pill = e.target.closest('.pill[data-filter]');
      if (!pill) return;
      var group = pill.getAttribute('data-filter');
      var val = pill.getAttribute('data-val');
      state[group] = val;
      if (group === 'cat' && val !== 'ALL' && val !== 'WEAPON2') {
        state.sub = 'ALL';
        var subPills = document.querySelectorAll('.pill[data-filter="sub"]');
        for (var k = 0; k < subPills.length; k++) {
          subPills[k].classList.toggle('active', subPills[k].getAttribute('data-val') === 'ALL');
        }
      }
      var peers = document.querySelectorAll('.pill[data-filter="' + group + '"]');
      for (var p = 0; p < peers.length; p++) {
        peers[p].classList.toggle('active', peers[p] === pill);
      }
      applyFilters();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        state = { q: '', cat: 'ALL', sub: 'ALL', rarity: 'ALL', flag: 'ALL' };
        if (searchInput) searchInput.value = '';
        var allPills = document.querySelectorAll('.pill[data-filter]');
        for (var i = 0; i < allPills.length; i++) {
          allPills[i].classList.toggle('active', allPills[i].getAttribute('data-val') === 'ALL');
        }
        applyFilters();
      });
    }

    applyFilters();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLightbox();
    initSpotlight();
    initCopy();
    initDeckBuilder();
    initCatalog();
  });
})();
