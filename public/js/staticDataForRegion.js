'use strict';

var sixRegionsValues = [ [ [], {}, [] ], [ [], {}, [] ], [ [], {}, [] ], [ [], {}, [] ], [ [], {}, [] ], [ [], {}, [] ]];
// here: 0: North America 1: South America 2: Europe 3: Africa 4: Oceania 5: Asia
// sql: 1: Africa 2: Asia 3: Europe 4: North America 5: Oceania 6: South America
// Run SELECT '"',country,'",' FROM country_region, countries where country_region.country_id = countries.id and region_id=1 order by country;
/* Country:Language:
SELECT '"',countries.country,'",:"',languages.language,'",,' FROM country_language, countries, languages, country_region
    where country_language.country_id=countries.id and language_id=languages.id
    and country_region.country_id = countries.id and country_region.region_id = 1 order by country;

    replace: ", with " and , ", with " and
 */
// Run SELECT '"',long_name,'",' FROM country_region, countries where country_region.country_id = countries.id and region_id=1 order by country;
// Copy Row Unquoted (Africa region=1)
// notepad replace ", with " and , ", with ",
sixRegionsValues[0][0] =
    ["Anguilla", "AntiguaandBarbuda", "Bahamas", "Barbados", "Belize", "Bermuda", "BonaireSintEustatiusandSaba", "BritishVirginIslands", "Canada", "CaymanIslands", "CostaRica", "Cuba",
    "Curacao", "Dominica", "DominicanRepublic", "ElSalvador", "Greenland", "Grenada", "Guadeloupe", "Guatemala", "Haiti", "Honduras", "Jamaica", "Martinique", "Mexico",
    "Montserrat", "Nicaragua", "Panama", "PuertoRico", "SaintBarthelemy", "SaintKittsandNevis", "SaintLucia", "SaintMartin", "SaintPierreandMiquelon",
    "SaintVincentandGrenadines", "SintMaarten", "TrinidadandTobago", "TurksandCaicosIslands", "UnitedStatesofAmerica", "UnitedStatesVirginIslands"];
sixRegionsValues[0][1] = {"Anguilla":"English", "AntiguaandBarbuda":"English","Bahamas":"English","Barbados":"English","Belize":"English","Bermuda":"English",
    "BonaireSintEustatiusandSaba":"Dutch","BritishVirginIslands":"English","Canada":"English","CaymanIslands":"English","CostaRica":"Spanish","Cuba":"Spanish","Curacao":"Dutch",
    "Dominica":"English","DominicanRepublic":"Spanish","ElSalvador":"Spanish","Greenland":"Greenlandic","Grenada":"English","Guadeloupe":"French","Guatemala":"Spanish","Haiti":"French",
    "Honduras":"Spanish","Jamaica":"English","Martinique":"French","Mexico":"Spanish","Montserrat":"English","Nicaragua":"Spanish","Panama":"Spanish","PuertoRico":"Spanish",
    "SaintBarthelemy":"French","SaintKittsandNevis":"English","SaintLucia":"English","SaintMartin":"French","SaintPierreandMiquelon":"French",
    "SaintVincentandGrenadines":"English","SintMaarten":"Dutch","TrinidadandTobago":"English","TurksandCaicosIslands":"English","UnitedStatesofAmerica":"English",
    "UnitedStatesVirginIslands":"English"};
sixRegionsValues[0][2] =
    ["Anguilla", "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Bermuda", "Bonaire Sint Eustatius and Saba", "British Virgin Islands", "Canada", "Cayman Islands", "Costa Rica",
    "Cuba", "Curaçao", "Dominica", "Dominican Republic", "El Salvador", "Greenland", "Grenada", "Guadeloupe", "Guatemala", "Haiti", "Honduras", "Jamaica","Martinique",
    "Mexico", "Montserrat", "Nicaragua", "Panama", "Puerto Rico", "Saint Barthélemy", "St. Kitts & Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines", "Sint Maarten", "Trinidad and Tobago", "Turks and Caicos Islands", "United States",
    "United States Virgin Islands"];

sixRegionsValues[1][0] = ["AntarcticTreatySystem","Argentina","Aruba","Bolivia","Brazil","Chile","Colombia","Ecuador","FalklandIslands","FrenchGuiana","Guyana","Paraguay",
    "Peru","SouthGeorgiaAndSouthSandwichIslands","Suriname","Uruguay","Venezuela"]
sixRegionsValues[1][1] = {"AntarcticTreatySystem":"Russian","Argentina":"Spanish","Aruba":"Dutch","Bolivia":"Spanish","Brazil":"Portuguese","Chile":"Spanish",
    "Colombia":"Spanish","Ecuador":"Spanish","FalklandIslands":"English","FrenchGuiana":"French","Guyana":"English","Paraguay":"Spanish","Peru":"Spanish",
    "SouthGeorgiaAndSouthSandwichIslands":"English","Suriname":"Dutch","Uruguay":"Spanish","Venezuela":"Spanish"};
sixRegionsValues[1][2] = ["Antarctic Treaty System","Argentina","Aruba","Bolivia","Brazil","Chile","Colombia","Ecuador","Falkland Islands","French Guiana","Guyana",
"Paraguay","Peru","South Georgia And South Sandwich Islands","Suriname","Uruguay","Venezuela"]

sixRegionsValues[2][0] = ["AlandIslands","Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus","Belgium","BosniaandHerzegovina","Bulgaria","Croatia","Cyprus","Czechia",
    "Denmark","Estonia","FaroeIslands","Finland","France","Georgia","Germany","Gibraltar","Greece","Guernsey","Hungary","Iceland","Ireland","IsleofMan","Italy","Jersey","Kosovo",
    "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","RussianFederation",
    "SanMarino","Serbia","Slovakia","Slovenia","Spain","SvalbardandJanMayen","Sweden","Switzerland","Turkey","TurkishRepublicofNorthernCyprus","Ukraine","UnitedKingdom",
    "VaticanCityAndHolySee"];
sixRegionsValues[2][1] = {"AlandIslands":"Swedish","Albania":"Albanian","Andorra":"Catalan","Armenia":"Armenian","Austria":"German","Azerbaijan":"Azerbaijani",
    "Belarus":"Belarusian","Belgium":"Dutch","BosniaandHerzegovina":"Bosnian","Bulgaria":"Bulgarian","Croatia":"Croatian","Cyprus":"Greek","Czechia":"Czech",
    "Denmark":"Danish","Estonia":"Estonian","FaroeIslands":"Danish","Finland":"Finnish","France":"French","Georgia":"Georgian","Germany":"German","Gibraltar":"English",
    "Greece":"Greek","Guernsey":"English","Hungary":"Hungarian","Iceland":"Icelandic","Ireland":"English","IsleofMan":"English","Italy":"Italian","Jersey":"English",
    "Kosovo":"Albanian","Latvia":"Latvian","Liechtenstein":"German","Lithuania":"Lithuanian","Luxembourg":"Luxembourgish","Macedonia":"Macedonian","Malta":"Maltese",
    "Moldova":"Moldovan","Monaco":"French","Montenegro":"Montenegrin","Netherlands":"Dutch","Norway":"Norwegian","Poland":"Polish","Portugal":"Portuguese","Romania":"Romanian",
    "RussianFederation":"Russian","SanMarino":"Italian","Serbia":"Serbian","Slovakia":"Slovak","Slovenia":"Slovenian","Spain":"Spanish","SvalbardandJanMayen":"Norwegian",
    "Sweden":"Swedish","Switzerland":"German","Turkey":"Turkish","TurkishRepublicofNorthernCyprus":"Turkish","Ukraine":"Ukrainian","UnitedKingdom":"English",
    "VaticanCityAndHolySee":"Italian"};
sixRegionsValues[2][2] = ["Åland Islands","Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus",
    "Czechia","Denmark","Estonia","Faroe Islands","Finland","France","Georgia","Germany","Gibraltar","Greece","Guernsey","Hungary","Iceland","Ireland","Isle of Man","Italy",
    "Jersey","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania",
    "Russian Federation","San Marino","Serbia","Slovakia","Slovenia","Spain","Svalbard and Jan Mayen","Sweden","Switzerland","Turkey","Turkish Republic of Northern Cyprus",
    "Ukraine","United Kingdom","Vatican City and Holy See"];

sixRegionsValues[3][0] = ["Algeria","Angola","Benin","Botswana","BouvetIsland","BurkinaFaso","Burundi","Cameroon","CanaryIslands","CaboVerde","CentralAfricanRepublic","Chad",
    "Comoros","CotedIvoire","DemocraticRepublicoftheCongo","Djibouti","Egypt","EquatorialGuinea","Eritrea","Eswatini","Ethiopia","FrenchSouthernandAntarcticLands","Gabon","Gambia","Ghana",
    "Guinea","GuineaBissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Mayotte","Morocco","Mozambique","Namibia","Niger","Nigeria",
    "RepublicofCongo","Reunion","Rwanda","SaintHelena","SaoTomeandPrincipe","Senegal","Seychelles","SierraLeone","Somalia","SouthAfrica","SouthSudan","Sudan","Tanzania",
    "Togo","Tunisia","Uganda","WesternSahara","Zambia","Zimbabwe"];
sixRegionsValues[3][1] = {"Algeria":"Arabic","Angola":"Portuguese","Benin":"French","Botswana":"Setswana","BouvetIsland":"Norwegian","BurkinaFaso":"French","Burundi":"Kirundi",
    "Cameroon":"English","CanaryIslands":"Spanish","CaboVerde":"Portuguese","CentralAfricanRepublic":"French","Chad":"French","Comoros":"Arabic","CotedIvoire":"French",
    "DemocraticRepublicoftheCongo":"French","Djibouti":"French","Egypt":"Arabic","EquatorialGuinea":"Spanish","Eritrea":"Tigrinya","Eswatini":"English","Ethiopia":"Amharic",
    "FrenchSouthernandAntarcticLands":"French","Gabon":"French","Gambia":"English","Ghana":"English","Guinea":"French","GuineaBissau":"Portuguese","Kenya":"English",
    "Lesotho":"Sesotho","Liberia":"English","Libya":"Arabic","Madagascar":"French","Malawi":"English","Mali":"French","Mauritania":"Arabic","Mauritius":"French",
    "Mayotte":"French","Morocco":"Arabic","Mozambique":"Portuguese","Namibia":"English","Niger":"French","Nigeria":"English","RepublicofCongo":"French","Reunion":"French",
    "Rwanda":"Kinyarwanda","SaintHelena":"English","SaoTomeandPrincipe":"Portuguese","Senegal":"French","Seychelles":"French","SierraLeone":"English","Somalia":"Somali",
    "SouthAfrica":"IsiZulu","SouthSudan":"English","Sudan":"Arabic","Tanzania":"Swahili","Togo":"French","Tunisia":"Arabic","Uganda":"English",
    "WesternSahara":"Arabic","Zambia":"English","Zimbabwe":"English"};
sixRegionsValues[3][2] = ["Algeria","Angola","Benin","Botswana","Bouvet Island","Burkina Faso","Burundi","Cameroon","Canary Islands","Cabo Verde","Central African Republic",
    "Chad","Comoros","Côte d'Ivoire","Democratic Republic of the Congo","Djibouti","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","French Southern and Antarctic Lands",
    "Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Mayotte","Morocco","Mozambique",
    "Namibia","Niger","Nigeria","Republic of Congo","Réunion","Rwanda","Saint Helena","São Tomé and Príncipe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa",
    "South Sudan","Sudan","Tanzania","Togo","Tunisia","Uganda","Western Sahara","Zambia","Zimbabwe"];

sixRegionsValues[4][0] = ["AmericanSamoa","Australia","ChristmasIsland","CocosIslands","CookIslands","Fiji","FrenchPolynesia","Guam","HeardIslandandMcDonaldIslands",
    "Kiribati","MarshallIslands","Micronesia","Nauru","NewCaledonia","NewZealand","Niue","NorfolkIsland","NorthernMarianaIslands","Palau","PapuaNewGuinea","PitcairnIslands",
    "Samoa","SolomonIslands","Tokelau","Tonga","Tuvalu","UnitedStatesMinorOutlyingIslands","Vanuatu","WallisandFutuna"];
sixRegionsValues[4][1] = {"AmericanSamoa":"English","Australia":"English","ChristmasIsland":"English","CocosIslands":"English","CookIslands":"English","Fiji":"English",
    "FrenchPolynesia":"French","Guam":"English","HeardIslandandMcDonaldIslands":"English","Kiribati":"English","MarshallIslands":"Marshallese","Micronesia":"English",
    "Nauru":"English","NewCaledonia":"French","NewZealand":"English","Niue":"English","NorfolkIsland":"English","NorthernMarianaIslands":"English","Palau":"English",
    "PapuaNewGuinea":"English","PitcairnIslands":"English","Samoa":"Samoan","SolomonIslands":"English","Tokelau":"English","Tonga":"Tongan","Tuvalu":"English",
    "UnitedStatesMinorOutlyingIslands":"English","Vanuatu":"Bislama","WallisandFutuna":"French"};
sixRegionsValues[4][2] = ["American Samoa","Australia","Christmas Island","Cocos Islands","Cook Islands","Fiji","French Polynesia","Guam","Heard Island and McDonald Islands",
    "Kiribati","Marshall Islands","Micronesia","Nauru","New Caledonia","New Zealand","Niue","Norfolk Island","Northern Mariana Islands","Palau","Papua New Guinea",
    "Pitcairn Islands","Samoa","Solomon Islands","Tokelau","Tonga","Tuvalu","United States Minor Outlying Islands","Vanuatu","Wallis and Futuna"];

sixRegionsValues[5][0] = ["Afghanistan","Bahrain","Bangladesh","Bhutan","BritishIndianOceanTerritory","Brunei","Cambodia","China","HongKong","India","Indonesia","Iran","Iraq",
    "Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Macau","Malaysia","Maldives","Mongolia","Myanmar","Nepal","NorthKorea","Oman","Pakistan",
    "Philippines","Qatar","RussianFederation","SaudiArabia","Singapore","SouthKorea","SriLanka","StateofPalestine","Syria","Taiwan","Tajikistan","Thailand","TimorLeste",
    "Turkey","Turkmenistan","UnitedArabEmirates","Uzbekistan","Vietnam","Yemen"];
sixRegionsValues[5][1] = {"Afghanistan":"Pashto","Bahrain":"Arabic","Bangladesh":"Bangla","Bhutan":"Dzongkha","BritishIndianOceanTerritory":"English","Brunei":"Malay",
    "Cambodia":"Khmer","China":"Mandarin","HongKong":"Mandarin","India":"English","Indonesia":"Indonesian","Iran":"Persian","Iraq":"Arabic","Israel":"Hebrew",
    "Japan":"Japanese","Jordan":"Arabic","Kazakhstan":"Kazakh","Kuwait":"Arabic","Kyrgyzstan":"Kyrgyz","Laos":"Lao","Lebanon":"Arabic","Macau":"Mandarin","Malaysia":"Bahasa",
    "Maldives":"Maldivian","Mongolia":"Mongolian","Myanmar":"Burmese","Nepal":"Nepali","NorthKorea":"Korean","Oman":"Arabic","Pakistan":"Punjabi","Philippines":"Filipino",
    "Qatar":"Arabic","RussianFederation":"Russian","SaudiArabia":"Arabic","Singapore":"Mandarin","SouthKorea":"Korean","SriLanka":"Sinhala","StateofPalestine":"Arabic",
    "Syria":"Arabic","Taiwan":"Mandarin","Tajikistan":"Tajik","Thailand":"Thai","TimorLeste":"Tetum","Turkey":"Turkish","Turkmenistan":"Turkmen","UnitedArabEmirates":"Arabic",
    "Uzbekistan":"Uzbek","Vietnam":"Vietnamese","Yemen":"Arabic"};
sixRegionsValues[5][2] =
    ["Afghanistan", "Bahrain", "Bangladesh", "Bhutan", "British Indian Ocean Territory", "Brunei", "Cambodia", "China", "Hong Kong", "India", "Indonesia",
    "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon","Macau", "Malaysia", "Maldives", "Mongolia", "Myanmar",
    "Nepal", "North Korea", "Oman", "Pakistan", "Philippines", "Qatar", "Russian Federation", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka",
    "State of Palestine", "Syria", "Taiwan: Republic of China", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates",
    "Uzbekistan", "Vietnam", "Yemen"];
