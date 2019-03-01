// One for All: Get all the Country Names: Hard Key: Keep it sorted by Country for all...
// Run SELECT concat('"', country, '",') FROM countries order by country; Copy Row Unquoted
var allCountryNames = ['Afghanistan','AlandIslands','Albania','Algeria','AmericanSamoa','Andorra','Angola','Anguilla','AntiguaandBarbuda','AntarcticTreatySystem','Argentina','Armenia','Aruba',
'Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','BonaireSintEustatiusandSaba',
'BosniaandHerzegovina','Botswana','BouvetIsland','Brazil','BritishIndianOceanTerritory','BritishVirginIslands','Brunei','Bulgaria','BurkinaFaso','Burundi','Cambodia','Cameroon',
'Canada','CanaryIslands','CaboVerde','CaymanIslands','CentralAfricanRepublic','Chad','Chile','China','ChristmasIsland','CocosIslands','Colombia','Comoros','CookIslands','CostaRica',
'CotedIvoire','Croatia','Cuba','Curacao','Cyprus','Czechia','DemocraticRepublicoftheCongo','Denmark','Djibouti','Dominica','DominicanRepublic','Ecuador','Egypt','ElSalvador',
'EquatorialGuinea','Eritrea','Estonia','Eswatini','Ethiopia','FalklandIslands','FaroeIslands','Fiji','Finland','France','FrenchGuiana','FrenchPolynesia','FrenchSouthernandAntarcticLands',
'Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','GuineaBissau','Guyana','Haiti',
'HeardIslandandMcDonaldIslands','Honduras','HongKong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','IsleofMan','Israel','Italy','Jamaica','Japan','Jersey',
'Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau',
'Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','MarshallIslands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco',
'Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','NewCaledonia','NewZealand','Nicaragua','Niger','Nigeria','Niue',
'NorfolkIsland','NorthernMarianaIslands','NorthKorea','Norway','Oman','Pakistan','Palau','Panama','PapuaNewGuinea','Paraguay','Peru','Philippines','PitcairnIslands','Poland',
'Portugal','PuertoRico','Qatar','RepublicofCongo','Reunion','Romania','RussianFederation','Rwanda','SaintBarthelemy','SaintHelena','SaintKittsandNevis','SaintLucia','SaintMartin',
'SaintPierreandMiquelon','SaintVincentandGrenadines','Samoa','SanMarino','SaoTomeandPrincipe','SaudiArabia','Senegal','Serbia','Seychelles','SierraLeone','Singapore','SintMaarten',
'Slovakia','Slovenia','SolomonIslands','Somalia','SouthAfrica','SouthGeorgiaAndSouthSandwichIslands','SouthKorea','SouthSudan','Spain','SriLanka','StateofPalestine','Sudan',
'Suriname','SvalbardandJanMayen','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','TimorLeste','Togo','Tokelau','Tonga','TrinidadandTobago',
'Tunisia','Turkey','TurkishRepublicofNorthernCyprus','Turkmenistan','TurksandCaicosIslands','Tuvalu','Uganda','Ukraine','UnitedArabEmirates','UnitedKingdom',
'UnitedStatesMinorOutlyingIslands','UnitedStatesofAmerica','UnitedStatesVirginIslands','Uruguay','Uzbekistan','Vanuatu','VaticanCityAndHolySee','Venezuela','Vietnam',
'WallisandFutuna','WesternSahara','Yemen','Zambia','Zimbabwe'];

// country name from full name in Each Language: used here to get the country...
// SELECT concat('"', long_name, '":"',country ,'",') FROM countries order by country;
var countryNameFromLongName = {"Afganistan":"Afghanistan","Aland Adası":"AlandIslands","Arnavutluk":"Albania","Cezayir":"Algeria",
"Amerikan Samao":"AmericanSamoa","Andorra":"Andorra","Angola":"Angola","Anguilla":"Anguilla","Antarktika Antlaşması Sistemi":"AntarcticTreatySystem",
"Antigua ve Barbuda":"AntiguaandBarbuda","Arjantin":"Argentina","Ermenistan":"Armenia","Aruba":"Aruba","Avustralya":"Australia","Avusturya":"Austria",
"Azerbaycan":"Azerbaijan","Bahamalar":"Bahamas","Bahreyn":"Bahrain","Bangaldeş":"Bangladesh","Barbados":"Barbados","Belarus":"Belarus","Belçika":"Belgium",
"Belize":"Belize","Benin":"Benin","Bermuda":"Bermuda","Butan":"Bhutan","Bolivya":"Bolivia","Bonaire Sint Eustatius ve Saba":"BonaireSintEustatiusandSaba",
"Bosna Hersek":"BosniaandHerzegovina","Botsvana":"Botswana","Bouvet Adası":"BouvetIsland","Brezilya":"Brazil",
"Britanya Hint Okyanus Alanı":"BritishIndianOceanTerritory","Britanya Bakire Adaları":"BritishVirginIslands","Bruney":"Brunei","Bulgaristan":"Bulgaria",
"Burkina Faso":"BurkinaFaso","Burundi":"Burundi","Cabo Verde":"CaboVerde","Kamboçya":"Cambodia","Kamerun":"Cameroon","Kanada":"Canada",
"Kanarya Adaları":"CanaryIslands","Timsah Adaları":"CaymanIslands","Orta Afrika Cumhuriyeti":"CentralAfricanRepublic","Çad":"Chad","Şili":"Chile","Çin":"China",
"Noel Adası":"ChristmasIsland","Kokos Adası":"CocosIslands","Kolombiya":"Colombia","Komorlar":"Comoros","Kuk Adaları":"CookIslands","Kosta Rika":"CostaRica",
"Kotdivuar":"CotedIvoire","Hırvatistan":"Croatia","Küba":"Cuba","Kuraço":"Curacao","Kıbrıs":"Cyprus","Çekya":"Czechia",
"Kongo Demokratik Cumhuriyeti":"DemocraticRepublicoftheCongo","Danimarka":"Denmark","Cibuti":"Djibouti","Dominika":"Dominica",
"Dominik Cumhuriyeti":"DominicanRepublic","Ekvator":"Ecuador","Mısır":"Egypt","El Salvador":"ElSalvador","Ekvator Ginesi":"EquatorialGuinea",
"Eritre":"Eritrea","Estonya":"Estonia","Esvatini":"Eswatini","Etiyopya":"Ethiopia","Falkland Adaları":"FalklandIslands","Faroye Adaları":"FaroeIslands",
"Fiji":"Fiji","Finlandiya":"Finland","Fransa":"France","Fransız Guyana":"FrenchGuiana","Fransız Polenezya":"FrenchPolynesia",
"Fransız Güney ve Antartik Alanı":"FrenchSouthernandAntarcticLands","Gabon":"Gabon","Gambiya":"Gambia","Gürcistan":"Georgia","Almanya":"Germany",
"Gana":"Ghana","Cebelitarık":"Gibraltar","Yunanistan":"Greece","Grönland":"Greenland","Grenada":"Grenada","Guadelup":"Guadeloupe","Guyam":"Guam",
"Guatemala":"Guatemala","Görnse":"Guernsey","Gine":"Guinea","Gine Bissau":"GuineaBissau","Guyana":"Guyana","Haiti":"Haiti",
"Hörd ve MekDonal Adaları":"HeardIslandandMcDonaldIslands","Honduras":"Honduras","Hong Kong":"HongKong","Macaristan":"Hungary","İzlanda":"Iceland",
"Hindistan":"India","Endonezya":"Indonesia","İran":"Iran","Irak":"Iraq","İrlanda":"Ireland","Man Adası":"IsleofMan","İsrail":"Israel","İtalya":"Italy",
"Jamaika":"Jamaica","Japonya":"Japan","Jörsiy":"Jersey","Ürdün":"Jordan","Kazakistan":"Kazakhstan","Kenya":"Kenya","Kiribati":"Kiribati","Kosova":"Kosovo",
"Kuveyt":"Kuwait","Kırgızistan":"Kyrgyzstan","Laos":"Laos","Letonya":"Latvia","Lübnan":"Lebanon","Lesotho":"Lesotho","Liberya":"Liberia","Libya":"Libya",
"Lihtenştayn":"Liechtenstein","Litvanya":"Lithuania","Lüksemburg":"Luxembourg","Makau":"Macau","Makedonya":"Macedonia","Madagaskar":"Madagascar",
"Malavi":"Malawi","Malezya":"Malaysia","Maldivler":"Maldives","Mali":"Mali","Malta":"Malta","Marşal Adaları":"MarshallIslands","Martinik":"Martinique",
"Moritanya":"Mauritania","Morityus":"Mauritius","Mayot":"Mayotte","Meksika":"Mexico","Mikronezya":"Micronesia","Moldova":"Moldova","Monako":"Monaco",
"Moğolistan":"Mongolia","Karadağ":"Montenegro","Monserat":"Montserrat","Fas":"Morocco","Mozambik":"Mozambique","Myanmar":"Myanmar","Namibya":"Namibia",
"Nauru":"Nauru","Nepal":"Nepal","Hollanda":"Netherlands","Yeni Kaledonya":"NewCaledonia","Yeni Zelanda":"NewZealand","Nikaragua":"Nicaragua","Nijer":"Niger",
"Nijerya":"Nigeria","Niyu":"Niue","Norfolk Adası":"NorfolkIsland","Kuzey Mariyana Adaları":"NorthernMarianaIslands","Kuzey Kore":"NorthKorea",
"Norveç":"Norway","Umman":"Oman","Pakistan":"Pakistan","Palau":"Palau","Panama":"Panama","Papua Yeni Gine":"PapuaNewGuinea","Paraguay":"Paraguay",
"Peru":"Peru","Filipinler":"Philippines","Pitcairn Adaları":"PitcairnIslands","Polonya":"Poland","Portekiz":"Portugal","Puerto Riko":"PuertoRico",
"Katar":"Qatar","Kongo Cumhuriyeti":"RepublicofCongo","Reunion":"Reunion","Romanya":"Romania","Rusya Federasyonu":"RussianFederation","Ruanda":"Rwanda",
"Aziz Bartelemi":"SaintBarthelemy","Azize Helena":"SaintHelena","Aziz Kits ve Nevis":"SaintKittsandNevis","Azize Luciya":"SaintLucia",
"Aziz Martin":"SaintMartin","Aziz Piyer ve Mikelon":"SaintPierreandMiquelon","Aziz Vincen ve Grenadin":"SaintVincentandGrenadines","Samoa":"Samoa",
"San Marino":"SanMarino","São Tomé ve Príncipe":"SaoTomeandPrincipe","Suudi Arabistan":"SaudiArabia","Senegal":"Senegal","Sırbistan":"Serbia",
"Seyşeller":"Seychelles","Sierra Leone":"SierraLeone","Singapur":"Singapore","Az Marten":"SintMaarten","Slovakya":"Slovakia","Slovenya":"Slovenia",
"Solomon Adaları":"SolomonIslands","Somali":"Somalia","Güney Afrika Cumhuriyeti":"SouthAfrica",
"Güney Jorgiya ve Güney Sandavic Adaları":"SouthGeorgiaAndSouthSandwichIslands","Güney Kore":"SouthKorea","Güney Sudan":"SouthSudan","İspanya":"Spain",
"Sri Lanka":"SriLanka","Filistin Devleti":"StateofPalestine","Sudan":"Sudan","Surinam":"Suriname","Svalbard ve Jen Mayen":"SvalbardandJanMayen",
"İsveç":"Sweden","İsviçre":"Switzerland","Suriye":"Syria","Tayvan Cumhuriyeti":"Taiwan","Tacikistan":"Tajikistan","Tanzanya":"Tanzania",
"Tayland":"Thailand","Doğu Timor":"TimorLeste","Togo":"Togo","Tokelau":"Tokelau","Tonga":"Tonga","Trinidad ve Tobago":"TrinidadandTobago",
"Tunus":"Tunisia","Türkiye":"Turkey","Kuzey Kıbrıs Türk Cumhuriyeti":"TurkishRepublicofNorthernCyprus","Türkmenistan":"Turkmenistan",
"Türkler ve Kayıkları Adaları":"TurksandCaicosIslands","Tuvalu":"Tuvalu","Uganda":"Uganda","Ukrayna":"Ukraine","Birleşik Arap Emirlikleri":"UnitedArabEmirates",
"Birleşik Krallık":"UnitedKingdom","ABD Minor Outlying Adaları":"UnitedStatesMinorOutlyingIslands","Amerika Birleşik Devletleri":"UnitedStatesofAmerica",
"Amerikan Bakire Adaları":"UnitedStatesVirginIslands","Uruguay":"Uruguay","Özbekistan":"Uzbekistan","Vanuatu":"Vanuatu","Vatikan Şehri":"VaticanCityAndHolySee",
"Venezuela":"Venezuela","Vietnam":"Vietnam","Walis ve Futuna":"WallisandFutuna","Batı Sahara":"WesternSahara","Yemen":"Yemen","Zambiya":"Zambia","Zimbabve":"Zimbabwe"};

// Create for Each Language: Correctly C before Ç etc first Character sorted by Long Name country: long name
var fullNameForCountry = {"UnitedStatesMinorOutlyingIslands":"ABD Minor Outlying Adaları","Afghanistan":"Afganistan","AlandIslands":"Aland Adası",
"Germany":"Almanya","UnitedStatesofAmerica":"Amerika Birleşik Devletleri","UnitedStatesVirginIslands":"Amerikan Bakire Adaları",
"AmericanSamoa":"Amerikan Samao","Andorra":"Andorra","Angola":"Angola","Anguilla":"Anguilla","AntarcticTreatySystem":"Antarktika Antlaşması Sistemi",
"AntiguaandBarbuda":"Antigua ve Barbuda","Argentina":"Arjantin","Albania":"Arnavutluk","Aruba":"Aruba","Australia":"Avustralya","Austria":"Avusturya",
"SintMaarten":"Az Marten","Azerbaijan":"Azerbaycan","SaintBarthelemy":"Aziz Bartelemi","SaintKittsandNevis":"Aziz Kits ve Nevis",
"SaintMartin":"Aziz Martin","SaintPierreandMiquelon":"Aziz Piyer ve Mikelon","SaintVincentandGrenadines":"Aziz Vincen ve Grenadin",
"SaintHelena":"Azize Helena","SaintLucia":"Azize Luciya","Bahamas":"Bahamalar","Bahrain":"Bahreyn","Bangladesh":"Bangaldeş","Barbados":"Barbados",
"WesternSahara":"Batı Sahara","Belarus":"Belarus","Belgium":"Belçika","Belize":"Belize","Benin":"Benin","Bermuda":"Bermuda",
"UnitedArabEmirates":"Birleşik Arap Emirlikleri","UnitedKingdom":"Birleşik Krallık","Bolivia":"Bolivya",
"BonaireSintEustatiusandSaba":"Bonaire Sint Eustatius ve Saba","BosniaandHerzegovina":"Bosna Hersek","Botswana":"Botsvana",
"BouvetIsland":"Bouvet Adası","Brazil":"Brezilya","BritishVirginIslands":"Britanya Bakire Adaları",
"BritishIndianOceanTerritory":"Britanya Hint Okyanus Alanı","Brunei":"Bruney","Bulgaria":"Bulgaristan","BurkinaFaso":"Burkina Faso","Burundi":"Burundi",
"Bhutan":"Butan","CaboVerde":"Cabo Verde","Gibraltar":"Cebelitarık","Algeria":"Cezayir","Djibouti":"Cibuti","Chad":"Çad","Czechia":"Çekya","China":"Çin",
"Denmark":"Danimarka","TimorLeste":"Doğu Timor","DominicanRepublic":"Dominik Cumhuriyeti","Dominica":"Dominika","EquatorialGuinea":"Ekvator Ginesi",
"Ecuador":"Ekvator","ElSalvador":"El Salvador","Indonesia":"Endonezya","Eritrea":"Eritre","Armenia":"Ermenistan","Estonia":"Estonya","Eswatini":"Esvatini",
"Ethiopia":"Etiyopya","FalklandIslands":"Falkland Adaları","FaroeIslands":"Faroye Adaları","Morocco":"Fas","Fiji":"Fiji","Philippines":"Filipinler",
"StateofPalestine":"Filistin Devleti","Finland":"Finlandiya","France":"Fransa","FrenchGuiana":"Fransız Guyana",
"FrenchSouthernandAntarcticLands":"Fransız Güney ve Antartik Alanı","FrenchPolynesia":"Fransız Polenezya","Gabon":"Gabon","Gambia":"Gambiya","Ghana":"Gana",
"GuineaBissau":"Gine Bissau","Guinea":"Gine","Guernsey":"Görnse","Grenada":"Grenada","Greenland":"Grönland","Guadeloupe":"Guadelup",
"Guatemala":"Guatemala","Guam":"Guyam","Guyana":"Guyana","SouthAfrica":"Güney Afrika Cumhuriyeti",
"SouthGeorgiaAndSouthSandwichIslands":"Güney Jorgiya ve Güney Sandavic Adaları","SouthKorea":"Güney Kore","SouthSudan":"Güney Sudan","Georgia":"Gürcistan",
"Haiti":"Haiti","Croatia":"Hırvatistan","India":"Hindistan","Netherlands":"Hollanda","Honduras":"Honduras","HongKong":"Hong Kong",
"HeardIslandandMcDonaldIslands":"Hörd ve MekDonal Adaları","Iraq":"Irak","Iran":"İran","Ireland":"İrlanda","Spain":"İspanya","Israel":"İsrail",
"Sweden":"İsveç","Switzerland":"İsviçre","Italy":"İtalya","Iceland":"İzlanda","Jamaica":"Jamaika","Japan":"Japonya","Jersey":"Jörsiy",
"Cambodia":"Kamboçya","Cameroon":"Kamerun","Canada":"Kanada","CanaryIslands":"Kanarya Adaları","Montenegro":"Karadağ","Qatar":"Katar",
"Kazakhstan":"Kazakistan","Kenya":"Kenya","Cyprus":"Kıbrıs","Kyrgyzstan":"Kırgızistan","Kiribati":"Kiribati","CocosIslands":"Kokos Adası",
"Colombia":"Kolombiya","Comoros":"Komorlar","RepublicofCongo":"Kongo Cumhuriyeti","DemocraticRepublicoftheCongo":"Kongo Demokratik Cumhuriyeti",
"Kosovo":"Kosova","CostaRica":"Kosta Rika","CotedIvoire":"Kotdivuar","CookIslands":"Kuk Adaları","Curacao":"Kuraço","Kuwait":"Kuveyt",
"TurkishRepublicofNorthernCyprus":"Kuzey Kıbrıs Türk Cumhuriyeti","NorthKorea":"Kuzey Kore","NorthernMarianaIslands":"Kuzey Mariyana Adaları",
"Cuba":"Küba","Laos":"Laos","Lesotho":"Lesotho","Latvia":"Letonya","Liberia":"Liberya","Libya":"Libya","Liechtenstein":"Lihtenştayn",
"Lithuania":"Litvanya","Lebanon":"Lübnan","Luxembourg":"Lüksemburg","Hungary":"Macaristan","Madagascar":"Madagaskar","Macau":"Makau",
"Macedonia":"Makedonya","Malawi":"Malavi","Maldives":"Maldivler","Malaysia":"Malezya","Mali":"Mali","Malta":"Malta","IsleofMan":"Man Adası",
"MarshallIslands":"Marşal Adaları","Martinique":"Martinik","Mayotte":"Mayot","Mexico":"Meksika","Egypt":"Mısır","Micronesia":"Mikronezya",
"Mongolia":"Moğolistan","Moldova":"Moldova","Monaco":"Monako","Montserrat":"Monserat","Mauritania":"Moritanya","Mauritius":"Morityus",
"Mozambique":"Mozambik","Myanmar":"Myanmar","Namibia":"Namibya","Nauru":"Nauru","Nepal":"Nepal","Niger":"Nijer","Nigeria":"Nijerya",
"Nicaragua":"Nikaragua","Niue":"Niyu","ChristmasIsland":"Noel Adası","NorfolkIsland":"Norfolk Adası","Norway":"Norveç",
"CentralAfricanRepublic":"Orta Afrika Cumhuriyeti","Uzbekistan":"Özbekistan","Pakistan":"Pakistan","Palau":"Palau","Panama":"Panama",
"PapuaNewGuinea":"Papua Yeni Gine","Paraguay":"Paraguay","Peru":"Peru","PitcairnIslands":"Pitcairn Adaları","Poland":"Polonya",
"Portugal":"Portekiz","PuertoRico":"Puerto Riko","Reunion":"Reunion","Romania":"Romanya","Rwanda":"Ruanda","RussianFederation":"Rusya Federasyonu",
"SaoTomeandPrincipe":"São Tomé ve Príncipe","Samoa":"Samoa","SanMarino":"San Marino","Senegal":"Senegal","Seychelles":"Seyşeller",
"Serbia":"Sırbistan","SierraLeone":"Sierra Leone","Singapore":"Singapur","Slovakia":"Slovakya","Slovenia":"Slovenya","SolomonIslands":"Solomon Adaları",
"Somalia":"Somali","SriLanka":"Sri Lanka","Sudan":"Sudan","Suriname":"Surinam","Syria":"Suriye","SaudiArabia":"Suudi Arabistan",
"SvalbardandJanMayen":"Svalbard ve Jen Mayen","Chile":"Şili","Tajikistan":"Tacikistan","Tanzania":"Tanzanya","Thailand":"Tayland",
"Taiwan":"Tayvan Cumhuriyeti","CaymanIslands":"Timsah Adaları","Togo":"Togo","Tokelau":"Tokelau","Tonga":"Tonga","TrinidadandTobago":"Trinidad ve Tobago",
"Tunisia":"Tunus","Tuvalu":"Tuvalu","Turkey":"Türkiye","TurksandCaicosIslands":"Türkler ve Kayıkları Adaları","Turkmenistan":"Türkmenistan",
"Uganda":"Uganda","Ukraine":"Ukrayna","Oman":"Umman","Uruguay":"Uruguay","Jordan":"Ürdün","Vanuatu":"Vanuatu","VaticanCityAndHolySee":"Vatikan Şehri",
"Venezuela":"Venezuela","Vietnam":"Vietnam","WallisandFutuna":"Walis ve Futuna","Yemen":"Yemen","NewCaledonia":"Yeni Kaledonya",
"NewZealand":"Yeni Zelanda","Greece":"Yunanistan","Zambia":"Zambiya","Zimbabwe":"Zimbabve"};

// One for All
// Run SELECT concat('"', language, '",') FROM languages order by language; Copy Row Unquoted
var languagesFromLanguageTable = ["Afrikaans","Albanian","Amharic","Arabic","Armenian","Asante","Assamese","Aymara","Azerbaijani","Bahasa","Bahasa Indonesia",
"Bajan","Bambara","Bangla","Belarusian","Bemba","Bengali","Bhojpuri","Bislama","Bosnian","Bulgarian","Burmese","Catalan","Chamorro","Chichewa",
"Creole","Crioulo","Croatian","Czech","Danish","Dari","Dhivehi","Dioula","Dutch","Dzongkha","Emakhuwa","English","Estonian","Ewe","Fante",
"Fijian","Filipino","Finnish","French","Fula","Gaelic","Ganda","Georgian","German","Greek","Greenlandic","Guarani","Gujarati","Hebrew","Hindi",
"Hiri Motu","Hungarian","I-Kiribati","Icelandic","Irish","isiZulu","Italian","Japanese","Javanese","Kannada","Kashmiri","Kazakh","Khmer",
"Kinyarwanda","Kirundi","Korean","Krio","Kurdish","Kyrgyz","Lao","Latvian","Lhotshamkha","Lingala","Lithuanian","Luganda","Luxembourgish",
"Macedonian","Maithali","Makasai","Malagasy","Malay","Malayalam","Maltese","Mambai","Mandarin","Mandinka","Marathi","Marshallese","Maya",
"Melanesian pidgin","Mende","Moldovan","Mongolian","Monokutuba","Montenegrin","Nauruan","Nawat","Ndebele","Nepali","Niuean","Norwegian",
"Nyanja","Oriya","Oromo","Palauan","Papiamento","Pashto","Persian","Polish","Portuguese","Punjabi","Quechua","Rarotongan","Romanian",
"Romansch","Russian","Samoan","Sango","Sanskrit","Saraiki","Scots","Sekalanga","Sepedi","Serbian","Sesotho","Setswana","Seychellois Creole",
"Sharchhopka","Shona","Sindhi","Sinhala","siSwati","Slovak","Slovenian","Somali","Spanish","Swahili","Swedish","Tajik","Tamil","Tatar",
"Telugu","Temne","Tetum","Thai","Tigrinya","Tok Pisin","Tokelauan","Tonga","Tongan","Turkish","Turkmen","Tuvaluan","Ukrainian","Umbundu",
"Urdu","Uzbek","Vietnamese","Welsh","Wolof","Xichangana"];

// from languageConversionHelper...
var fullNameForLanguage = {"Afrikaans":"Afrikanca","German":"Almanca","Amharic":"Amharca","Arabic":"Arapça","Albanian":"Arnavutça","Assamese":"Asamiz","Asante":"Asante","Aymara":"Aymara","Azerbaijani":"Azerice","Bajan":"Bacan","Bahasa":"Bahasa","Bambara":"Bamana","Bemba":"Bemba","Bangla":"Bengal","Bengali":"Bengalce","Belarusian":"Beyaz Rusca","Bislama":"Bislama","Bhojpuri":"Bocpuri","Bosnian":"Boşnakça","Bulgarian":"Bulgarca","Burmese":"Burma","Dzongkha":"Butanez","Chamorro":"Çamoro","Czech":"Çekce","Chichewa":"Çiçeva","Mandarin":"Çince","Danish":"Danimarkaca","Dari":"Dari","Dioula":"Dioula","Dhivehi":"Divehi","Bahasa Indonesia":"Endonez Bahasa","Armenian":"Ermenice","Estonian":"Estonca","Ewe":"Ewe","Fante":"Fante","Persian":"Farsça","Dutch":"Felamenkçe","Fijian":"Ficice","Filipino":"Filipince","Finnish":"Fince","French":"Fransızca","Fula":"Fulani","Ganda":"Ganda","Gaelic":"Gelik","Guarani":"Guarani","Gujarati":"Gucurati","Georgian":"Gürcüce","Croatian":"Hırvatça","Hindi":"Hintçe","Hiri Motu":"Hiri Motu","Ndebele":"Indebeli","Italian":"Italyanca","Hebrew":"İbranice","English":"İngilizce","Irish":"İrlandaca","Scots":"İskoçça","Spanish":"İspanyolca","Swedish":"İsveçce","Icelandic":"İzlandaca","Japanese":"Japonca","Javanese":"Javaca","Greenlandic":"Kalaallisut","Khmer":"Kamir","Kannada":"Kannada","Montenegrin":"Karadağca","Catalan":"Katalan","Kazakh":"Kazakça","Kashmiri":"Keşmirce","Crioulo":"Kırayulo","Kyrgyz":"Kırgızca","Quechua":"Kicua","Kinyarwanda":"Kinyarvanda","I-Kiribati":"Kiribati","Krio":"Kiriyo","Kirundi":"Kirundi","Korean":"Korece","Creole":"Krığıl","Kurdish":"Kürtçe","Lao":"Laoca","Polish":"Lehce","Latvian":"Letonca","Lingala":"Lingala","Lithuanian":"Litvanca","Luganda":"Luganda","Lhotshamkha":"Luhotşampaz","Luxembourgish":"Lüksemburgiş","Hungarian":"Macarca","Maithali":"Maithili","Makasai":"Makasay","Macedonian":"Makedonca","Emakhuwa":"Makua","Malagasy":"Malagasi","Malayalam":"Malayalam","Melanesian pidgin":"Malezian pigin","Maltese":"Malti","Mambai":"Mambai","Mandinka":"Mandinka","Marathi":"Marati","Marshallese":"Marşaliz","Maya":"Maya","Mende":"Mende","Malay":"Mıley","Mongolian":"Moğolca","Monokutuba":"Monokutuba","Nauruan":"Nauruca","Nawat":"Navat","Nepali":"Nepali","Nyanja":"Niyanca","Niuean":"Niyuce","Norwegian":"Norveçce","Oriya":"Oriya","Oromo":"Oromo","Uzbek":"Özbekçe","Palauan":"Palauca","Papiamento":"Papimentu","Pashto":"Peştu","Portuguese":"Portekizce","Punjabi":"Puncapi","Rarotongan":"Rarotongan","Romansch":"Romanş","Romanian":"Romence","Russian":"Rusça","Samoan":"Samoaca","Sango":"Sango","Saraiki":"Saraiki","Sekalanga":"Sekalanga","Sanskrit":"Senskirit","Sepedi":"Sepedi","Sesotho":"Sesotho","Setswana":"Setswana","Seychellois Creole":"Seyşel Krığıl","Sharchhopka":"Sharchhopka","Shona":"Shona","Serbian":"Sırpça","Sindhi":"Sindhi","Sinhala":"Sinhala","Slovak":"Slovakça","Slovenian":"Slovence","Somali":"Somalice","Swahili":"Svahili","siSwati":"Swati","Tajik":"Tacikçe","Tamil":"Tamilce","Tatar":"Tatar","Thai":"Tayca","Telugu":"Telugu","Temne":"Temne","Tetum":"Tetum","Tigrinya":"Tigrinya","Tok Pisin":"Tok Pisin","Tokelauan":"Tokelauan","Tonga":"Tonga","Tongan":"Tongaca","Tuvaluan":"Tuvaluca","Turkish":"Türkçe","Turkmen":"Türkmence","Ukrainian":"Ukraynaca","Umbundu":"Umbundu","Urdu":"Urduca","Welsh":"Velş","Vietnamese":"Vietnamca","Wolof":"Volof","Xichangana":"Xichangana","Greek":"Yunanca","isiZulu":"Zulu"};

// from languageConversionHelper...
var worldLanguagesDropDownValues = [{"value":"Afrikanca"},{"value":"Almanca"},{"value":"Amharca"},{"value":"Arapça"},{"value":"Arnavutça"},{"value":"Asamiz"},{"value":"Asante"},{"value":"Aymara"},{"value":"Azerice"},{"value":"Bacan"},{"value":"Bahasa"},{"value":"Bamana"},{"value":"Bemba"},{"value":"Bengal"},{"value":"Bengalce"},{"value":"Beyaz Rusca"},{"value":"Bislama"},{"value":"Bocpuri"},{"value":"Boşnakça"},{"value":"Bulgarca"},{"value":"Burma"},{"value":"Butanez"},{"value":"Çamoro"},{"value":"Çekce"},{"value":"Çiçeva"},{"value":"Çince"},{"value":"Danimarkaca"},{"value":"Dari"},{"value":"Dioula"},{"value":"Divehi"},{"value":"Endonez Bahasa"},{"value":"Ermenice"},{"value":"Estonca"},{"value":"Ewe"},{"value":"Fante"},{"value":"Farsça"},{"value":"Felamenkçe"},{"value":"Ficice"},{"value":"Filipince"},{"value":"Fince"},{"value":"Fransızca"},{"value":"Fulani"},{"value":"Ganda"},{"value":"Gelik"},{"value":"Guarani"},{"value":"Gucurati"},{"value":"Gürcüce"},{"value":"Hırvatça"},{"value":"Hintçe"},{"value":"Hiri Motu"},{"value":"Indebeli"},{"value":"Italyanca"},{"value":"İbranice"},{"value":"İngilizce"},{"value":"İrlandaca"},{"value":"İskoçça"},{"value":"İspanyolca"},{"value":"İsveçce"},{"value":"İzlandaca"},{"value":"Japonca"},{"value":"Javaca"},{"value":"Kalaallisut"},{"value":"Kamir"},{"value":"Kannada"},{"value":"Karadağca"},{"value":"Katalan"},{"value":"Kazakça"},{"value":"Keşmirce"},{"value":"Kırayulo"},{"value":"Kırgızca"},{"value":"Kicua"},{"value":"Kinyarvanda"},{"value":"Kiribati"},{"value":"Kiriyo"},{"value":"Kirundi"},{"value":"Korece"},{"value":"Krığıl"},{"value":"Kürtçe"},{"value":"Laoca"},{"value":"Lehce"},{"value":"Letonca"},{"value":"Lingala"},{"value":"Litvanca"},{"value":"Luganda"},{"value":"Luhotşampaz"},{"value":"Lüksemburgiş"},{"value":"Macarca"},{"value":"Maithili"},{"value":"Makasay"},{"value":"Makedonca"},{"value":"Makua"},{"value":"Malagasi"},{"value":"Malayalam"},{"value":"Malezian pigin"},{"value":"Malti"},{"value":"Mambai"},{"value":"Mandinka"},{"value":"Marati"},{"value":"Marşaliz"},{"value":"Maya"},{"value":"Mende"},{"value":"Mıley"},{"value":"Moğolca"},{"value":"Monokutuba"},{"value":"Nauruca"},{"value":"Navat"},{"value":"Nepali"},{"value":"Niyanca"},{"value":"Niyuce"},{"value":"Norveçce"},{"value":"Oriya"},{"value":"Oromo"},{"value":"Özbekçe"},{"value":"Palauca"},{"value":"Papimentu"},{"value":"Peştu"},{"value":"Portekizce"},{"value":"Puncapi"},{"value":"Rarotongan"},{"value":"Romanş"},{"value":"Romence"},{"value":"Romence"},{"value":"Rusça"},{"value":"Samoaca"},{"value":"Sango"},{"value":"Saraiki"},{"value":"Sekalanga"},{"value":"Senskirit"},{"value":"Sepedi"},{"value":"Sesotho"},{"value":"Setswana"},{"value":"Seyşel Krığıl"},{"value":"Sharchhopka"},{"value":"Shona"},{"value":"Sırpça"},{"value":"Sindhi"},{"value":"Sinhala"},{"value":"Slovakça"},{"value":"Slovence"},{"value":"Somalice"},{"value":"Svahili"},{"value":"Swati"},{"value":"Tacikçe"},{"value":"Tamilce"},{"value":"Tatar"},{"value":"Tayca"},{"value":"Telugu"},{"value":"Temne"},{"value":"Tetum"},{"value":"Tigrinya"},{"value":"Tok Pisin"},{"value":"Tokelauan"},{"value":"Tonga"},{"value":"Tongaca"},{"value":"Tuvaluca"},{"value":"Türkçe"},{"value":"Türkmence"},{"value":"Ukraynaca"},{"value":"Umbundu"},{"value":"Urduca"},{"value":"Velş"},{"value":"Vietnamca"},{"value":"Volof"},{"value":"Xichangana"},{"value":"Yunanca"},{"value":"Zulu"}];

// Run SELECT distinct concat('{"value":"',value, '"},') FROM features where feature = "Religion" order by value; Copy Row Unquoted
var worldReligionsDropDownValues = [{"value":"Bağlı olmayan"},
{"value":"Budizm"},
{"value":"Canlıcılık (Animism)"},
{"value":"Dürzi"},
{"value":"Halk"},
{"value":"Hinduizm"},
{"value":"Hiristiyanlık"},
{"value":"İslam"},
{"value":"Konfüçyüsçülük"},
{"value":"Şamanizm"},
{"value":"Şintoizm"},
{"value":"Şüpheci"},
{"value":"Taoculuk"},
{"value":"Yahudilik"},
{"value":"Yerli"}];

// Run SELECT distinct concat('{"value":"',value, '"},') FROM features where feature = "Water" order by value; Copy Row Unquoted
var worldWatersDropDownValues = [{"value":"Adriyatik"},
{"value":"Akdeniz"},
{"value":"Andaman"},
{"value":"Arafura"},
{"value":"Arap"},
{"value":"Arktik"},
{"value":"Atlantik"},
{"value":"Bali"},
{"value":"Baltık"},
{"value":"Banda"},
{"value":"Barent"},
{"value":"Bay of Bengal"},
{"value":"Bay of Biscay"},
{"value":"Bering"},
{"value":"Bismarck"},
{"value":"Celebes"},
{"value":"Ceram"},
{"value":"Chukchi"},
{"value":"East China"},
{"value":"East Siberian"},
{"value":"Ege"},
{"value":"English Channel"},
{"value":"Filipin"},
{"value":"Flores"},
{"value":"Gulf of Aden"},
{"value":"Gulf of Aqaba"},
{"value":"Gulf of California"},
{"value":"Gulf of Guinea"},
{"value":"Gulf of Mexico"},
{"value":"Gulf of Oman"},
{"value":"Gulf of Thailand"},
{"value":"Gulf of Thailand and Pacific Ocean"},
{"value":"Güney"},
{"value":"Halmahera"},
{"value":"Hazar"},
{"value":"Hint"},
{"value":"İrlanda"},
{"value":"İyon"},
{"value":"Java"},
{"value":"Kara"},
{"value":"Kara İle Çevrili"},
{"value":"Karayip"},
{"value":"Kelt"},
{"value":"Kızıl"},
{"value":"Kuzey"},
{"value":"Laccadive"},
{"value":"Lake Kivu"},
{"value":"Laptev"},
{"value":"Liguria"},
{"value":"Malavi Gölü"},
{"value":"Marmara"},
{"value":"Molacca"},
{"value":"Natuna"},
{"value":"Norveççe"},
{"value":"Pasifik (Büyük)"},
{"value":"Persian Gulf"},
{"value":"Sarı"},
{"value":"Savu"},
{"value":"Sea of Azov"},
{"value":"Sea of Japan"},
{"value":"Sea of Okhotsk"},
{"value":"Solomon"},
{"value":"South China"},
{"value":"Sulu"},
{"value":"Tasman"},
{"value":"Timor"},
{"value":"Victoria Gölü"},
{"value":"Yellow Sea"}];

// Run SELECT distinct concat('{"value":"',value, '"},') FROM features where feature = "Color" order by value; Copy Row Unquoted
var flagsColorsDropDownValues = [ {"value":"Beyaz"},
{"value":"Bordo"},
{"value":"Giri"},
{"value":"Kahverengi"},
{"value":"Kara"},
{"value":"Kızıl"},
{"value":"Mavi"},
{"value":"Mor"},
{"value":"Pembe"},
{"value":"Portakal"},
{"value":"Safran"},
{"value":"Sarı"},
{"value":"Yeşil"} ];

// Run SELECT distinct concat('{"value":"',value, '"},') FROM features where feature = "Shape" order by value; Copy Row Unquoted
var flagsShapesDropDownValues = [ {"value":"Adaçayı"}, // Turkish special characters sorted manually
{"value":"Adliye"},
{"value":"Ağaç"},
{"value":"Akbaba"},
{"value":"Alpaka"},
{"value":"Altı Dalgalı Kenarlı Yıldız"},
{"value":"Altı Köşeli Yıldız"},
{"value":"Amblem"},
{"value":"Anahtar"},
{"value":"Ananas"},
{"value":"Angkor Wat"},
{"value":"Anıt"},
{"value":"Arapça"},
{"value":"Arması"},
{"value":"Aslan"},
{"value":"Ateş"},
{"value":"Ay"},
{"value":"Bacak"},
{"value":"Balta"},
{"value":"Bar"},
{"value":"Baş"},
{"value":"Bayrak"},
{"value":"Bereket"},
{"value":"Beş Köşeli Yıldız"},
{"value":"Beş Yaprak"},
{"value":"Beyaz Saltire"},
{"value":"Bina"},
{"value":"Boru"},
{"value":"Boynuz"},
{"value":"Buğday"},
{"value":"Buz"},
{"value":"Çadır"},
{"value":"Çam"},
{"value":"Çapa"},
{"value":"Çapraz"},
{"value":"Çapraz (Haç)"},
{"value":"Çelenk"},
{"value":"Çınar (Akçaağaç)"},
{"value":"Çırpma teli uçmak"},
{"value":"Çiçek"},
{"value":"Çift çapraz"},
{"value":"Çimen"},
{"value":"Dağ"},
{"value":"Daire"},
{"value":"Dal"},
{"value":"Dalga"},
{"value":"Dalgalar"},
{"value":"Davul"},
{"value":"Defne"},
{"value":"Deniz"},
{"value":"Denizatı"},
{"value":"Desen"},
{"value":"Devekuşu-tüy"},
{"value":"Dikdörtgen"},
{"value":"Dikey"},
{"value":"Dişi"},
{"value":"Dört Köşeli Yıldız"},
{"value":"Duman"},
{"value":"Eğik"},
{"value":"Eğreltiotu"},
{"value":"Ejderha"},
{"value":"El"},
{"value":"El Arabası"},
{"value":"Elmas"},
{"value":"Elyazısı"},
{"value":"Eşkenar"},
{"value":"Eşkenar Dörtgen"},
{"value":"Fimbriation"},
{"value":"Flama"},
{"value":"Fleurs-de-lys"},
{"value":"Folk Balığı"},
{"value":"Fourteen-Points Star"},
{"value":"Fransızca"},
{"value":"Gemi"},
{"value":"Gökkuşağı"},
{"value":"Grup"},
{"value":"Gül"},
{"value":"Güneş"},
{"value":"Güneş Şemsiyesi"},
{"value":"Güneyhaçı"},
{"value":"Güvercin"},
{"value":"Haç"},
{"value":"Halat"},
{"value":"Halı"},
{"value":"Halka"},
{"value":"Hançer"},
{"value":"Hanımefendi"},
{"value":"Harita"},
{"value":"Harp"},
{"value":"Hat"},
{"value":"Hayvan"},
{"value":"Hilâl"},
{"value":"Hindistan cevizi"},
{"value":"Işın"},
{"value":"Istakoz"},
{"value":"İbik"},
{"value":"İkizkenar"},
{"value":"İnci"},
{"value":"İncil"},
{"value":"İnek"},
{"value":"İngiliz bayrağı"},
{"value":"İngilizce"},
{"value":"İnsan Yüzü"},
{"value":"İspanyol(ca)"},
{"value":"Kabuk"},
{"value":"Kakao"},
{"value":"Kaktüs"},
{"value":"Kale"},
{"value":"Kalkan"},
{"value":"Kanat"},
{"value":"Kano"},
{"value":"Kanton"},
{"value":"Kapak"},
{"value":"Kaplumbağa"},
{"value":"Kapüşon"},
{"value":"Kar"},
{"value":"Karanfil"},
{"value":"Kare"},
{"value":"Kartal"},
{"value":"Kask"},
{"value":"Keçi"},
{"value":"Kılıç"},
{"value":"Kılıf"},
{"value":"Kişi"},
{"value":"Kitap"},
{"value":"Koç"},
{"value":"Kordon"},
{"value":"Koyun"},
{"value":"Köpek"},
{"value":"Köprü"},
{"value":"Körfez"},
{"value":"Körfez defnesi"},
{"value":"kufi"},
{"value":"Kule"},
{"value":"Kurdele"},
{"value":"Kuş"},
{"value":"Küçük Hindistan Cevizi"},
{"value":"Küre"},
{"value":"Kürek"},
{"value":"Lale"},
{"value":"Lama"},
{"value":"Lamba"},
{"value":"Latin"},
{"value":"Leopar"},
{"value":"Leylek"},
{"value":"Lotus"},
{"value":"Madeni para"},
{"value":"Mahmuz"},
{"value":"Mango"},
{"value":"Maun (Mahogany)"},
{"value":"Mayıs Güneşi"},
{"value":"Merdivenler"},
{"value":"Meşale"},
{"value":"Meşe"},
{"value":"Meyve"},
{"value":"Mızrak"},
{"value":"Miro"},
{"value":"Muz"},
{"value":"Mücevher"},
{"value":"Namele"},
{"value":"Nar"},
{"value":"Nehir (Irmak)"},
{"value":"Ok"},
{"value":"Ok başı"},
{"value":"Okyanus"},
{"value":"On İki Köşeli Yıldız"},
{"value":"Örtü"},
{"value":"Pala"},
{"value":"Palmiye"},
{"value":"Papağan"},
{"value":"Papalık tacı"},
{"value":"Paralelkenar"},
{"value":"Patates"},
{"value":"Penguen"},
{"value":"Portekizce"},
{"value":"Pusula"},
{"value":"Ren Geyiği"},
{"value":"Saltire (haç)"},
{"value":"Sap"},
{"value":"Sapan"},
{"value":"Sedir"},
{"value":"Sekiz Köşeli Yıldız"},
{"value":"Sembol"},
{"value":"Seven-pointed star"},
{"value":"Sınır"},
{"value":"Silah"},
{"value":"Silahlı küre"},
{"value":"Su"},
{"value":"Sülüs"},
{"value":"Süngü"},
{"value":"Süs"},
{"value":"Sütun"},
{"value":"Şapka"},
{"value":"Şehadet"},
{"value":"Şerit"},
{"value":"Taç"},
{"value":"Taegeukgi (Güney Kore Bayrağı)"},
{"value":"Taiji (En Yüce)"},
{"value":"Taş"},
{"value":"Tekbir"},
{"value":"Tekerlek"},
{"value":"Tekir (Mullet)"},
{"value":"Tepe"},
{"value":"Top"},
{"value":"Totem"},
{"value":"Trigram"},
{"value":"Tüfek"},
{"value":"Tüy"},
{"value":"Uzun diş"},
{"value":"Üç Dişli Mızrak"},
{"value":"Üçgen"},
{"value":"Varil"},
{"value":"Vites"},
{"value":"Volkan (Yanardağ)"},
{"value":"Yamuk"},
{"value":"Yamuk Dörtgen"},
{"value":"Yaprak"},
{"value":"Yatay"},
{"value":"Yay"},
{"value":"Yedi Köşeli Yıldız"},
{"value":"Yelken"},
{"value":"Yelkenli"},
{"value":"Yılan"},
{"value":"Yıldız"},
{"value":"Yin Yang"},
{"value":"Yirmi Dört Köşeli Yıldız"},
{"value":"Yunus"},
{"value":"Yüz"},
{"value":"Zeytin"},
{"value":"Zırh"},
{"value":"Zırhlı"},
{"value":"Zincir"},
{"value":"Zodyak"} ];