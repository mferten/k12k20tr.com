// this data is comming from console.log through oneLanguageSpecificTextAndCodeGeneration.js

var allLanguages =  {"Afghanistan":"Pashto","AlandIslands":"Swedish","Albania":"Albanian","Algeria":"Arabic","AmericanSamoa":"English","Andorra":"Catalan","Angola":"Portuguese",
"Anguilla":"English","AntarcticTreatySystem":"Russian","AntiguaandBarbuda":"English","Argentina":"Spanish","Armenia":"Armenian","Aruba":"Dutch","Australia":"English","Austria":"German",
"Azerbaijan":"Azerbaijani","Bahamas":"English","Bahrain":"Arabic","Bangladesh":"Bangla","Barbados":"English","Belarus":"Belarusian","Belgium":"Dutch","Belize":"English","Benin":"French",
"Bermuda":"English","Bhutan":"Dzongkha","Bolivia":"Spanish","BonaireSintEustatiusandSaba":"Dutch","BosniaandHerzegovina":"Bosnian","Botswana":"Setswana","BouvetIsland":"Norwegian",
"Brazil":"Portuguese","BritishIndianOceanTerritory":"English","BritishVirginIslands":"English","Brunei":"Malay","Bulgaria":"Bulgarian","BurkinaFaso":"French","Burundi":"Kirundi",
"Cambodia":"Khmer","Cameroon":"English","Canada":"English","CanaryIslands":"Spanish","CaboVerde":"Portuguese","CaymanIslands":"English","CentralAfricanRepublic":"French","Chad":"French",
"Chile":"Spanish","China":"Mandarin","ChristmasIsland":"English","CocosIslands":"English","Colombia":"Spanish","Comoros":"Arabic","CookIslands":"English","CostaRica":"Spanish",
"CotedIvoire":"French","Croatia":"Croatian","Cuba":"Spanish","Curacao":"Dutch","Cyprus":"Greek","Czechia":"Czech","DemocraticRepublicoftheCongo":"French","Denmark":"Danish",
"Djibouti":"French","Dominica":"English","DominicanRepublic":"Spanish","Ecuador":"Spanish","Egypt":"Arabic","ElSalvador":"Spanish","EquatorialGuinea":"Spanish","Eritrea":"Tigrinya",
"Estonia":"Estonian","Eswatini":"English","Ethiopia":"Amharic","FalklandIslands":"English","FaroeIslands":"Danish","Fiji":"English","Finland":"Finnish","France":"French",
"FrenchGuiana":"French","FrenchPolynesia":"French","FrenchSouthernandAntarcticLands":"French","Gabon":"French","Gambia":"English","Georgia":"Georgian","Germany":"German",
"Ghana":"English","Gibraltar":"English","Greece":"Greek","Greenland":"Greenlandic","Grenada":"English","Guadeloupe":"French","Guam":"English","Guatemala":"Spanish","Guernsey":"English",
"Guinea":"French","GuineaBissau":"Portuguese","Guyana":"English","Haiti":"French","HeardIslandandMcDonaldIslands":"English","Honduras":"Spanish","HongKong":"Mandarin","Hungary":"Hungarian",
"Iceland":"Icelandic","India":"English","Indonesia":"Indonesian","Iran":"Persian","Iraq":"Arabic","Ireland":"English","IsleofMan":"English","Israel":"Hebrew","Italy":"Italian",
"Jamaica":"English","Japan":"Japanese","Jersey":"English","Jordan":"Arabic","Kazakhstan":"Kazakh","Kenya":"English","Kiribati":"English","Kosovo":"Albanian","Kuwait":"Arabic",
"Kyrgyzstan":"Kyrgyz","Laos":"Lao","Latvia":"Latvian","Lebanon":"Arabic","Lesotho":"Sesotho","Liberia":"English","Libya":"Arabic","Liechtenstein":"German","Lithuania":"Lithuanian",
"Luxembourg":"Luxembourgish","Macau":"Mandarin","Macedonia":"Macedonian","Madagascar":"French","Malawi":"English","Malaysia":"Bahasa","Maldives":"Maldivian","Mali":"French",
"Malta":"Maltese","MarshallIslands":"Marshallese","Martinique":"French","Mauritania":"Arabic","Mauritius":"French","Mayotte":"French","Mexico":"Spanish","Micronesia":"English",
"Moldova":"Moldovan","Monaco":"French","Mongolia":"Mongolian","Montenegro":"Montenegrin","Montserrat":"English","Morocco":"Arabic","Mozambique":"Portuguese","Myanmar":"Burmese",
"Namibia":"English","Nauru":"English","Nepal":"Nepali","Netherlands":"Dutch","NewCaledonia":"French","NewZealand":"English","Nicaragua":"Spanish","Niger":"French","Nigeria":"English",
"Niue":"English","NorfolkIsland":"English","NorthernMarianaIslands":"English","NorthKorea":"Korean","Norway":"Norwegian","Oman":"Arabic","Pakistan":"Punjabi","Palau":"English",
"Panama":"Spanish","PapuaNewGuinea":"English","Paraguay":"Spanish","Peru":"Spanish","Philippines":"Filipino","PitcairnIslands":"English","Poland":"Polish","Portugal":"Portuguese",
"PuertoRico":"Spanish","Qatar":"Arabic","RepublicofCongo":"French","Reunion":"French","Romania":"Romanian","RussianFederation":"Russian","Rwanda":"Kinyarwanda","SaintBarthelemy":"French",
"SaintHelena":"English","SaintKittsandNevis":"English","SaintLucia":"English","SaintMartin":"French","SaintPierreandMiquelon":"French","SaintVincentandGrenadines":"English",
"Samoa":"Samoan","SanMarino":"Italian","SaoTomeandPrincipe":"Portuguese","SaudiArabia":"Arabic","Senegal":"French","Serbia":"Serbian","Seychelles":"French","SierraLeone":"English",
"Singapore":"Mandarin","SintMaarten":"Dutch","Slovakia":"Slovak","Slovenia":"Slovenian","SolomonIslands":"English","Somalia":"Somali","SouthAfrica":"IsiZulu",
"SouthGeorgiaAndSouthSandwichIslands":"English","SouthKorea":"Korean","SouthSudan":"English","Spain":"Spanish","SriLanka":"Sinhala","StateofPalestine":"Arabic","Sudan":"Arabic",
"Suriname":"Dutch","SvalbardandJanMayen":"Norwegian","Sweden":"Swedish","Switzerland":"German","Syria":"Arabic","Taiwan":"Mandarin","Tajikistan":"Tajik","Tanzania":"Swahili",
"Thailand":"Thai","TimorLeste":"Tetum","Togo":"French","Tokelau":"Tokelau","Tonga":"Tongan","TrinidadandTobago":"English","Tunisia":"Arabic","Turkey":"Turkish",
"TurkishRepublicofNorthernCyprus":"Turkish","Turkmenistan":"Turkmen","TurksandCaicosIslands":"English","Tuvalu":"English","Uganda":"English","Ukraine":"Ukrainian",
"UnitedArabEmirates":"Arabic","UnitedKingdom":"English","UnitedStatesMinorOutlyingIslands":"English","UnitedStatesofAmerica":"English","UnitedStatesVirginIslands":"English",
"Uruguay":"Spanish","Uzbekistan":"Uzbek","Vanuatu":"Bislama","VaticanCityAndHolySee":"Italian","Venezuela":"Spanish","Vietnam":"Vietnamese","WallisandFutuna":"French",
"WesternSahara":"Arabic","Yemen":"Arabic","Zambia":"English","Zimbabwe":"English"}

// Get all the Country Names for Whole World view
// Run SELECT "'", country, "'" FROM worldflags.countries order by country;
// Copy Row Unquoted
// notepad replace First:  ', with ' and Second: ", ' with ',
function getAllCountriesNames() {
    return ['Afghanistan','AlandIslands','Albania','Algeria','AmericanSamoa','Andorra','Angola','Anguilla','AntiguaandBarbuda','AntarcticTreatySystem','Argentina','Armenia','Aruba',
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
}

// Get all the Country Long Names for Whole World View
// Run SELECT "'", long_name, "'" FROM worldflags.countries order by country order by country; (change 'Côte d\'Ivoire' to "Côte d'Ivoire",)
// Copy Row Unquoted
// notepad replace First:  ', with ' and Second: ", ' with ',
function getAllCountriesFullNames() {
    return ['Afghanistan','Åland Islands','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antigua and Barbuda','Antarctic Treaty System','Argentina','Armenia','Aruba',
'Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire Sint Eustatius and Saba',
'Bosnia and Herzegovina','Botswana','Bouvet Island','Brazil','British Indian Ocean Territory','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia',
'Cameroon','Canada','Canary Islands','Cabo Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos Islands','Colombia','Comoros',
'Cook Islands','Costa Rica',"Côte d'Ivoire",'Croatia','Cuba','Curaçao','Cyprus','Czechia','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic',
'Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana',
'French Polynesia','French Southern and Antarctic Lands','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala',
'Guernsey','Guinea','Guinea-Bissau','Guyana','Haiti','Heard Island and McDonald Islands','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland',
'Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya',
'Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius',
'Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Caledonia',
'New Zealand','Nicaragua','Niger','Nigeria','Niue','Norfolk Island','Northern Mariana Islands','North Korea','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea',
'Paraguay','Peru','Philippines','Pitcairn Islands','Poland','Portugal','Puerto Rico','Qatar','Republic of Congo','Réunion','Romania','Russian Federation','Rwanda',
'Saint Barthélemy','Saint Helena','St. Kitts & Nevis','Saint Lucia','Saint Martin','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa','San Marino',
'São Tomé and Príncipe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Maarten','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa',
'South Georgia And South Sandwich Islands','South Korea','South Sudan','Spain','Sri Lanka','State of Palestine','Sudan','Suriname','Svalbard and Jan Mayen',
'Sweden','Switzerland','Syria','Taiwan: Republic of China','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tokelau','Tonga','Trinidad and Tobago','Tunisia','Turkey',
'Turkish Republic of Northern Cyprus','Turkmenistan','Turks and Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom',
'United States Minor Outlying Islands','United States','United States Virgin Islands','Uruguay','Uzbekistan','Vanuatu','Vatican City and Holy See','Venezuela','Vietnam',
'Wallis and Futuna','Western Sahara','Yemen','Zambia','Zimbabwe']; }

// used in utilityForAllVersion... in createTableRows(...) see if a duplicate function...
var longNameFromCountry = {"AmericanSamoa":"American Samoa", "AntarcticTreatySystem":"Antarctic Treaty System", "AntiguaandBarbuda":"Antigua and Barbuda",
"BonaireSintEustatiusandSaba":"Bonaire Sint Eustatius and Saba", "BosniaandHerzegovina":"Bosnia and Herzegovina", "BritishVirginIslands":"British Virgin Islands",
"BritishIndianOceanTerritory":"British Indian Ocean Territory", "BurkinaFaso":"Burkina Faso", "CaboVerde":"Cabo Verde", "CanaryIslands":"Canary Islands",
"CaymanIslands":"Cayman Islands", "CentralAfricanRepublic":"Central African Republic", "ChristmasIsland":"Christmas Island", "CocosIslands":"Cocos Islands",
"CookIslands":"Cook Islands", "CostaRica":"Costa Rica", "DemocraticRepublicoftheCongo":"Democratic Republic of the Congo", "RepublicofCongo":"Republic of Congo",
"CotedIvoire":"Côte d'Ivoire", "DominicanRepublic":"Dominican Republic", "ElSalvador":"El Salvador", "EquatorialGuinea":"Equatorial Guinea",
"FalklandIslands":"Falkland Islands", "FaroeIslands":"Faroe Islands", "FrenchGuiana":"French Guiana", "FrenchPolynesia":"French Polynesia",
"FrenchSouthernandAntarcticLands":"French Southern and Antarctic Lands", "GuineaBissau":"Guinea-Bissau", "HongKong":"Hong Kong", "IsleofMan":"Isle of Man",
"MarshallIslands":"Marshall Islands", "NewCaledonia":"New Caledonia", "NewZealand":"New Zealand", "NorfolkIsland":"Norfolk Island",
"NorthernMarianaIslands":"Northern Mariana Islands", "NorthKorea":"North Korea",  "PapuaNewGuinea":"Papua New Guinea", "PitcairnIslands":"Pitcairn Islands",
"PuertoRico":"Puerto Rico", "RussianFederation":"Russian Federation", "SaintBarthelemy":"Saint Barthélemy", "SaintHelena":"Saint Helena",
"SaintKittsandNevis":"St. Kitts & Nevis", "SaintLucia":"Saint Lucia", "SaintPierreandMiquelon":"Saint Pierre and Miquelon",
"SaintVincentandGrenadines":"Saint Vincent and the Grenadines", "SanMarino":"San Marino", "SaoTomeandPrincipe":"São Tomé and Príncipe", "SaudiArabia":"Saudi Arabia",
"SierraLeone":"Sierra Leone", "SintMaarten":"Sint Maarten", "SolomonIslands":"Solomon Islands", "SouthAfrica":"South Africa", "SouthKorea":"South Korea",
"SouthSudan":"South Sudan", "SriLanka":"Sri Lanka", "StateofPalestine":"State of Palestine", "SvalbardandJanMayen":"Svalbard and Jan Mayen",
"Taiwan":"Taiwan: Republic of China", "TimorLeste":"Timor-Leste", "TrinidadandTobago":"Trinidad and Tobago",
"TurkishRepublicofNorthernCyprus":"Turkish Republic of Northern Cyprus", "TurksandCaicosIslands":"Turks and Caicos Islands", "UnitedKingdom":"United Kingdom",
"UnitedStatesofAmerica":"United States", "UnitedStatesVirginIslands":"United States Virgin Islands", "UnitedArabEmirates":"United Arab Emirates",
"WesternSahara":"Western Sahara", "VaticanCityAndHolySee":"Vatican City and Holy See", "WallisandFutuna":"Wallis and Futuna", "AlandIslands":"Åland Islands",
"BouvetIsland":"Bouvet Island", "HeardIslandandMcDonaldIslands":"Heard Island and McDonald Islands",
"SouthGeorgiaAndSouthSandwichIslands":"South Georgia And South Sandwich Islands", "UnitedStatesMinorOutlyingIslands":"United States Minor Outlying Islands" }

// Run SELECT distinct '{"value":"',value, '"},' FROM worldflags.features where feature = "Language" order by value;
// Copy Row Unquoted
// notepad replace First: ", (one blank at the end) with " Second: , " (command space and quote) with " (one quote: , and blank will be gone)
function getWorldLanguagesDropDownValues() {
    return [{"value":"Afrikaans"},{"value":"Albanian"},{"value":"Amharic"},{"value":"Arabic"},{"value":"Armenian"},{"value":"Asante"},{"value":"Assamese"},
{"value":"Aymara"},{"value":"Azerbaijani"},{"value":"Bahasa"},{"value":"Bahasa Indonesia"},{"value":"Bajan"},{"value":"Bambara"},{"value":"Bangla"},{"value":"Belarusian"},
{"value":"Bemba"},{"value":"Bengali"},{"value":"Bhojpuri"},{"value":"Bislama"},{"value":"Bosnian"},{"value":"Bulgarian"},{"value":"Burmese"},{"value":"Catalan"},
{"value":"Chamorro"},{"value":"Chichewa"},{"value":"Creole"},{"value":"Crioulo"},{"value":"Croatian"},{"value":"Czech"},{"value":"Danish"},{"value":"Dari"},{"value":"Dhivehi"},
{"value":"Dioula"},{"value":"Dutch"},{"value":"Dzongkha"},{"value":"Emakhuwa"},{"value":"English"},{"value":"Estonian"},{"value":"Ewe"},{"value":"Fante"},{"value":"Fijian"},
{"value":"Filipino"},{"value":"Finnish"},{"value":"French"},{"value":"Fula"},{"value":"Gaelic"},{"value":"Ganda"},{"value":"Georgian"},{"value":"German"},{"value":"Greek"},
{"value":"Greenlandic"},{"value":"Guarani"},{"value":"Gujarati"},{"value":"Hebrew"},{"value":"Hindi"},{"value":"Hiri Motu"},{"value":"Hungarian"},{"value":"I-Kiribati"},
{"value":"Icelandic"},{"value":"Irish"},{"value":"isiZulu"},{"value":"Italian"},{"value":"Japanese"},{"value":"Javanese"},{"value":"Kannada"},{"value":"Kashmiri"},
{"value":"Kazakh"},{"value":"Khmer"},{"value":"Kinyarwanda"},{"value":"Kirundi"},{"value":"Korean"},{"value":"Krio"},{"value":"Kurdish"},
{"value":"Kyrgyz"},{"value":"Lao"},{"value":"Latvian"},{"value":"Lhotshamkha"},{"value":"Lingala"},{"value":"Lithuanian"},{"value":"Luganda"},{"value":"Luxembourgish"},
{"value":"Macedonian"},{"value":"Maithali"},{"value":"Makasai"},{"value":"Malagasy"},{"value":"Malay"},{"value":"Malayalam"},{"value":"Maltese"},{"value":"Mambai"},
{"value":"Mandarin"},{"value":"Mandinka"},{"value":"Marathi"},{"value":"Marshallese"},{"value":"Maya"},{"value":"Melanesian pidgin"},{"value":"Mende"},{"value":"Moldovan"},
{"value":"Mongolian"},{"value":"Monokutuba"},{"value":"Montenegrin"},{"value":"Nauruan"},{"value":"Nawat"},{"value":"Ndebele"},{"value":"Nepali"},{"value":"Niuean"},
{"value":"Norwegian"},{"value":"Nyanja"},{"value":"Oriya"},{"value":"Oromo"},{"value":"Palauan"},{"value":"Papiamento"},{"value":"Pashto"},{"value":"Persian"},{"value":"Polish"},
{"value":"Portuguese"},{"value":"Punjabi"},{"value":"Quechua"},{"value":"Rarotongan"},{"value":"Romanian"},{"value":"Romansch"},{"value":"Russian"},{"value":"Samoan"},
{"value":"Sango"},{"value":"Sanskrit"},{"value":"Saraiki"},{"value":"Scots"},{"value":"Sekalanga"},{"value":"Sepedi"},{"value":"Serbian"},{"value":"Sesotho"},{"value":"Setswana"},
{"value":"Seychellois Creole"},{"value":"Sharchhopka"},{"value":"Shona"},{"value":"Sindhi"},{"value":"Sinhala"},{"value":"siSwati"},{"value":"Slovak"},
{"value":"Slovenian"},{"value":"Somali"},{"value":"Spanish"},{"value":"Swahili"},{"value":"Swedish"},{"value":"Tajik"},{"value":"Tamil"},{"value":"Tatar"},
{"value":"Telugu"},{"value":"Temne"},{"value":"Tetum"},{"value":"Thai"},{"value":"Tigrinya"},{"value":"Tok Pisin"},{"value":"Tokelauan"},{"value":"Tonga"},{"value":"Tongan"},
{"value":"Turkish"},{"value":"Turkmen"},{"value":"Tuvaluan"},{"value":"Ukrainian"},{"value":"Umbundu"},{"value":"Urdu"},{"value":"Uzbek"},{"value":"Vietnamese"},
{"value":"Welsh"},{"value":"Wolof"},{"value":"Xichangana"}]; }

// Run SELECT distinct '{"value":"',value, '"},' FROM worldflags.features where feature = "Religion" order by value; // same as above but "Religion"
// Copy Row Unquoted
// notepad replace First: ",  (quote command space: one blank at the end) with " Second: , " (command space and quote) with " (one quote: , and blank will be gone)
function getWorldReligionsDropDownValues() {
    return [{"value":"Agnostic"},{"value":"Animism"},{"value":"Buddhism"},{"value":"Christianity"},{"value":"Confucianism"},{"value":"Druze"},{"value":"Folk"},{"value":"Hinduism"},
{"value":"Indigenous"},{"value":"Islam"},{"value":"Judism"},{"value":"Shamanism "},{"value":"Shintoism"},{"value":"Taoism"},{"value":"Unaffiliated"}];}

// Run SELECT distinct '{"value":"',value,'"},' FROM worldflags.features where feature = "Water" order by value; // same as above but "Water"
// Copy Row Unquoted
// notepad replace First: ",  (quote command space: one blank at the end) with " Second: , " (command space and quote) with " (one quote: , and blank will be gone)
function getWorldWatersDropDownValues() {
    return [{"value":"Adriatic"},{"value":"Aegean"},{"value":"Andaman"},{"value":"Antarctic"},{"value":"Arabian"},{"value":"Arafura"},{"value":"Arctic"},{"value":"Atlantic"},
{"value":"Bali"},{"value":"Baltic"},{"value":"Banda"},{"value":"Barent"},{"value":"Bay of Bengal"},{"value":"Bay of Biscay"},{"value":"Bering"},{"value":"Bering Seas"},
{"value":"Bismarck"},{"value":"Black"},{"value":"Caribbean"},{"value":"Caspian"},{"value":"Celebes"},{"value":"Celtic"},{"value":"Ceram"},{"value":"Chukchi"},
{"value":"East China"},{"value":"East Siberian"},{"value":"English Channel"},{"value":"Flores"},{"value":"Gulf of Aden"},{"value":"Gulf of Aqaba"},{"value":"Gulf of California"},
{"value":"Gulf of Guinea"},{"value":"Gulf of Mexico"},{"value":"Gulf of Oman"},{"value":"Gulf of Thailand"},{"value":"Gulf of Thailand & Pacific Ocean"},
{"value":"Halmahera"},{"value":"Indian"},{"value":"Indian Oceans"},{"value":"Ionian"},{"value":"Irish"},{"value":"Java"},{"value":"Kara"},{"value":"Laccadive"},
{"value":"Lake Malawi"},{"value":"Lake Victoria"},{"value":"Landlocked"},{"value":"Laptev"},{"value":"Ligurian"},{"value":"Marmara"},
{"value":"Mediterranean"},{"value":"Molucca"},{"value":"Natuna"},{"value":"North"},{"value":"Norwegian"},{"value":"Pacific"},{"value":"Persian Gulf"},
{"value":"Philippine"},{"value":"Read"},{"value":"Red"},{"value":"Savu"},{"value":"Sea of Azov"},{"value":"Sea of Japan"},{"value":"Sea of Okhotsk"},
{"value":"See of Japan"},{"value":"Solomon"},{"value":"South China"},{"value":"Southern"},{"value":"Sulu"},{"value":"Tasman"},
{"value":" Timor"},{"value":" Yellow"},{"value":"Yellow Sea"}]; }

// Run SELECT distinct '{"value":"',value,'"},' FROM worldflags.features where feature = "Color" order by value; // same as above but "Color"
// Copy Row Unquoted
// notepad replace First: ",  (quote command space: one blank at the end) with " Second: , " (command space and quote) with " (one quote: , and blank will be gone)
function getFlagsColorsDropDownValues() {
    return [ {"value":"Black"},{"value":"Blue"},{"value":"Brown"},{"value":"Gray"},{"value":"Green"},{"value":"Maroon"},{"value":"Orange"},{"value":"Pink"},
{"value":"Purple"},{"value":"Red"},{"value":"Saffron"},{"value":"White"},{"value":"Yellow"}]; }

// Run SELECT distinct '{"value":"',value,'"},' FROM worldflags.features where feature = "Shape" order by value; // same as above but "Shape"
// Copy Row Unquoted
// notepad replace First: ",  (quote command space: one blank at the end) with " Second: , " (command space and quote) with " (one quote: , and blank will be gone)
function getFlagsShapesDropDownValues() {
    return [{"value":"Alpaca"},{"value":"Anchor"},{"value":"Angkor Wat"},{"value":"Animal"},{"value":"Arabic"},{"value":"Armillary sphere"},{"value":"Armour"},{"value":"Armoured"},
{"value":"Arrow"},{"value":"Arrowhead"},{"value":"Axe"},{"value":"Banana"},{"value":"Band"},{"value":"Bar"},{"value":"Barrel"},{"value":"Bay"},{"value":"Bay laurel"},{"value":"Bayonet"},
{"value":"Bible"},{"value":"Bird"},{"value":"Book"},{"value":"Border"},{"value":"Bow"},{"value":"Branch"},{"value":"Bridge"},{"value":"British-Flag"},{"value":"Bugle"},{"value":"Building"},
{"value":"Cacao"},{"value":"Cactus"},{"value":"Candor"},{"value":"Cannon"},{"value":"Canoe"},{"value":"Canton"},{"value":"Cap"},{"value":"Carpet"},{"value":"Castle"},{"value":"Cedar"},
{"value":"Chain"},{"value":"Circle"},{"value":"Clove"},{"value":"Coat of Arms"},{"value":"Cocoa"},{"value":"Coconut"},{"value":"Coin"},{"value":"Compass"},{"value":"Condor"},{"value":"Cord"},
{"value":"Cornucopia"},{"value":"Courthouse"},{"value":"Cow"},{"value":"Crane"},{"value":"Crescent"},{"value":"Crest"},{"value":"Cross"},{"value":"Crown"},{"value":"Crux"},{"value":"Dagger"},
{"value":"Diagonal"},{"value":"Diamond"},{"value":"Dog"},{"value":"Dolphin"},{"value":"Double Cross"},{"value":"Dove"},{"value":"Dragon"},{"value":"Drum"},{"value":"Eagle"},
{"value":"Eight-Pointed Star"},{"value":"Emblem"},{"value":"English"},{"value":"Equilateral"},{"value":"Estoile"},{"value":"Face"},{"value":"Feather"},{"value":"Female"},{"value":"Fern"},
{"value":"Fimbriation"},{"value":"Fire"},{"value":"Five-Petal"},{"value":"Five-Pointed"},{"value":"Five-Pointed Star"},{"value":"Flag"},{"value":"Fleurs-de-lys"},{"value":"Flower"},
{"value":"Fly whisk"},{"value":"Forteen-Points Star"},{"value":"Four-Pointed Star"},{"value":"French"},{"value":"Fruit"},{"value":"Gear"},{"value":"George"},{"value":"Globe"},{"value":"Goat"},
{"value":"Grass"},{"value":"Hand"},{"value":"Harp"},{"value":"Hat"},{"value":"Head"},{"value":"Helmet"},{"value":"Hexagram"},{"value":"Hill"},{"value":"Hood"},{"value":"Horizontal"},
{"value":"Horn"},{"value":"Human Face"},{"value":"Ice"},{"value":"Isosceles"},{"value":"Jewel"},{"value":"Key"},{"value":"Kufic"},{"value":"Lady"},{"value":"Lama"},{"value":"Lamp"},
{"value":"Latin"},{"value":"Laurel"},{"value":"Leaf"},{"value":"Leg"},{"value":"Leopard"},{"value":"Line"},{"value":"Lion"},{"value":"Lobster"},{"value":"Lotus"},{"value":"Machete"},
{"value":"Mahogany"},{"value":"Mango"},{"value":"Mantle"},{"value":"Map"},{"value":"Maple"},{"value":"Miro"},{"value":"Monument"},{"value":"Moon"},{"value":"Mountain"},{"value":"Mullet"},
{"value":"Namele"},{"value":"Nutmeg"},{"value":"Oak"},{"value":"Oar"},{"value":"Oblique"},{"value":"Ocean"},{"value":"Olive"},{"value":"Ornament"},{"value":"Ostrich-plume"},{"value":"Palm"},
{"value":"Papal tiara"},{"value":"Parallelogram"},{"value":"Parasol"},{"value":"Parrot"},{"value":"Pattern"},{"value":"Pearl"},{"value":"Penguin"},{"value":"Pennon"},{"value":"Pentagram"},
{"value":"Person"},{"value":"Pillar"},{"value":"Pine"},{"value":"Pineapple"},{"value":"Pomegranate"},{"value":"Portuguese"},{"value":"Potato"},{"value":"Rainbow"},{"value":"Ram"},
{"value":"Ray"},{"value":"Rectangle"},{"value":"Reindeer"},{"value":"Rhombus"},{"value":"Ribbon"},{"value":"Rifle"},{"value":"Ring"},{"value":"River"},{"value":"Rope"},{"value":"Rose"},
{"value":"Sage"},{"value":"Sail"},{"value":"Sailboat"},{"value":"Saltire"},{"value":"Script"},{"value":"Sea"},{"value":"Seahorse"},{"value":"Seal"},{"value":"Seven-Pointed Star"},
{"value":"Shahada"},{"value":"Sheath"},{"value":"Sheep"},{"value":"Shell"},{"value":"Shield"},{"value":"Ship"},{"value":"Six-Pointed Star"},{"value":"Sling"},{"value":"Smoke"},
{"value":"Snake"},{"value":"Snow"},{"value":"Spanish"},{"value":"Spear"},{"value":"Spur"},{"value":"Square"},{"value":"Stairs"},{"value":"Stalk"},{"value":"Star"},{"value":"Stone"},
{"value":"Stripe"},{"value":"Sun"},{"value":"Sun of May"},{"value":"Surgarcane"},{"value":"Sword"},{"value":"Symbol"},{"value":"Taegeukgi"},{"value":"Taiji"},{"value":"Takbir"},
{"value":"Tent"},{"value":"Thuluth"},{"value":"Torch"},{"value":"Totem"},{"value":"Tower"},{"value":"Trapezium"},{"value":"Trapezoid"},{"value":"Tree"},{"value":"Triangle"},
{"value":"Trident"},{"value":"Trigram"},{"value":"Tulip"},{"value":"Turtle"},{"value":"Tusk"},{"value":"Twelve-Pointed Star"},{"value":"Twenty-Four-Pointed Star"},{"value":"Vertical"},
{"value":"Volcano"},{"value":"Water"},{"value":"Wave"},{"value":"Waves"},{"value":"Weapon"},{"value":"Wheat"},{"value":"Wheel"},{"value":"Wheelbarrow"},{"value":"White Saltire"},
{"value":"Wing"},{"value":"Wreath"},{"value":"Yin Yang"},{"value":"Zodiac"}]; }
