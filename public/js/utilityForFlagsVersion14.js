'use strict';

// immediately self-evoking function (function () {..} ) ();
// can have argument as its parameter (function (myParameter) {..} ) (myArgument);

/*
    RCP-SPA JS/JSON structure

    1- Variables: primitive and/or object with the assigned (initial) Data which can be undefined
    2- Functions/Methods definitions starting with this file specific initialization

 */

// ****     1- Variables     ******

var previousFlag;
var hoveredFlag;
var oneCountrySelectedFlag;
var selectedOneCountryLITab; // "map" is the selected (default) One Country Tab Panel

var countryNameBayrakIndex; // Array
var countryBayrakIdByName; // JSON Object

var countryNameVsFullNameObject;
var stateIsShowing;
var countryIsShowing;

// Used while Printing/Reporting
var filteredCountriesNames;
var combinedFlag;
var currentGrade;
var regionMapDivElement;
var oneCountryPanelOne; // to be used in addEvents.js
var headerElement;
var h1First;
var firstDivElement;
var allCountryNames; // for dashBoard: Whole World Country Names (for Flag creation)
var allCountryFullNames; // for dashBoard: Whole World Country Full Names

var ogaOrOgg = {
    "Zambia":"oga","Ukraine":"oga","Tanzania":"oga","SouthAfrica":"oga","Serbia":"oga","Paraguay":"oga",
    "Myanmar":"oga","Greece":"oga","Cyprus":"oga","Brunei":"oga","Belgium":"oga","Algeria":"oga"
};

// Searchable Select/Options fields Used Indicators: if used will be "true", if back to its title (first option) will be "false"
var searchedSelectFields = { "Color":false,"Color2nd":false,"Color3rd":false,"Shape":false,"Shape2nd":false,"Shape3rd":false,"Language":false,"Population":false,"GDP":false,
    "Overweight":false,"LifeExpectancy":false,"Cell":false,"Internet":false,"RandD":false,"CleanWater":false,"CleanToilet":false,"CapitalCities":false,"LandArea":false,
    "Water":false,"Religion":false,"DrivingSide":false,"SexRatio":false,"SeatRatio":false};

var searchedSelectFieldsFilteredCountries = { "Color":"","Color2nd":"","Color3rd":"","Shape":"","Shape2nd":"","Shape3rd":"","Language":"","Population":"","Income":"",
    "Overweight":"","LifeExpectancy":"","Cell":"","Internet":"","RandD":"","CleanWater":"","CleanToilet":"","CapitalCities":"","LandArea":"","Water":"","Religion":"",
    "DrivingSide":"","SexRatio":"","SeatRatio":""};

// for Printing/Reporting
var categoryDescription = {"Color":"Flag Color","Color2nd":"Second Flag Color","Color3rd":"Third Flag Color","Shape":"Flag Shape","Shape2nd":"Second Flag Shape",
    "Shape3rd":"Third Flag Shape","Cell":"Cellular Phone","Language":"Language Name","Population":"Population Name","Income":"Income - GDP","Overweight":"Overweight Ratio %",
    "LifeExpectancy":"Life Expectancy","Internet":"Internet Usage %","RandD":"R & D per GDP%","CleanWater":"Clean Drinking Water %","CleanToilet":"Clean Toilet Facility %",
    "CapitalCities":"Capital Cities","LandArea":"Surface Area","Water":"Oceans, Seas or Lakes","Religion":"Religion Name","DrivingSide":"Driving Side","SexRatio":"Sex Ratio M per 100 F",
    "SeatRatio":"Seats Held By Women %"};

// set option value and text
var optionCode = {"Income":"income","Overweight":"overweight","LifeExpectancy":"lifeExpectancy","CapitalCities":"capitalCities","DrivingSide":"drivingSide","SexRatio":"sexRatio",
    "SeatRatio":"seatRatio","Population":"population","LandArea":"landArea","Cell":"cell","Internet":"internet","RandD":"randD","CleanWater":"cleanWater","CleanToilet":"cleanToilet",
    "Reports":"reports"};

// Data Fields for a Country besides the Searchable Select/Options Fields
var dataFields = ["Language", "Population", "Income", "Overweight", "LifeExpectancy", "CapitalCities", "Government", "LandArea","CountryCodes", "DrivingSide",
    "Currency", "Water", "TimeAndDate", "TravelWarning", "Weather", "Religion","WikiCountry","CIACountry", "UNCountry", "Gini", "HDI","GoogleMap", "Tourism", "SexRatio",
    "SeatRatio", "Cell", "Internet", "RandD", "CleanWater", "CleanToilet"];

// set the CIA Country Codes: ISO to GEO fips
var ciaCountryCode = {"vn":"vm","tr":"tu","dz":"ag","ai":"av","aw":"aa","at":"au","au":"as","pg":"pp","sb":"bp", "to":"tn","vu":"nh","bo":"bl","cl":"ci","py":"pa",
    "sr":"ns","bs":"bf","bz":"bh","cr":"cs","dm":"do","do":"dr","sv":"es","ht":"ha","hn":"ho","ni":"nu","pa":"pm","kn":"sc","lc":"st","tt":"td","az":"aj","by":"bo",
    "ba":"bk","bg":"bu","cz":"ez","dk":"da","ee":"en","ge":"gg","de":"gm","is":"ic","ie":"ei","lv":"lg","lt":"lh","pt":"po","ru":"rs","rs":"ri","sk":"lo","es":"sp",
    "se":"sw","ch":"sz","ua":"up","gb":"uk","bh":"ba","bd":"bg","bn":"bx","mm":"bm","kh":"cb","cn":"ch","tl":"tt","ig":"iz","il":"is","jp":"ja","kp":"kn","kr":"ks",
    "kw":"ku","lb":"le","mn":"mg","om":"mu","ph":"rp","sq":"sn","lk":"ce","tj":"ti","tm":"tx","ye":"ym","bj":"bn","bw":"bc","bf":"uv","td":"cd","bi":"by","cf":"ct",
    "km":"cn","cd":"cg","cg":"cf","ga":"gb","gm":"ga","gn":"gv","gq":"ek","ci":"iv","ls":"lt","lr":"li","mg":"ma","mw":"mi","mu":"mp","ma":"mo","na":"wa","ne":"ng",
    "ng":"ni","sg":"sn","sc":"se","za":"sf","sd":"su","ss":"od","sz":"wz","tg":"to","tn":"ts","eh":"wi","zm":"za","zw":"zi","gd":"gj","ag":"ac","iq":"iz","sn":"sg",
    "cw":"cc","st":"tp","sx":"nn","ps":"we","sj":"jn","va":"vt","ad":"an","pw":"ps","vi":"vq","vg":"vi","ki":"kr","me":"mj","ms":"mh","bm":"bd","pr":"rq","mo":"mc"};

// time and date plus weather:	Sri Jayawardenepura Kotte (time and date com has incorrect "a" instead of "e")
var timeDateOrWeather = {"AmericanSamoa":"usa","BonaireSintEustatiusandSaba":"netherlands","UnitedStatesVirginIslands":"us-virgin", "UnitedStatesofAmerica":"usa",
    "Kazakhstan":"Kazakstan","Sri Jayawardenepura Kotte":"Sri Jayawardenapura Kotte", "BosniaandHerzegovina":"bosnia-herzegovina", "Czechia":"czech-republic",
    "RussianFederation":"russia", "UnitedKingdom":"uk", "DemocraticRepublicoftheCongo":"congo-demrep", "RepublicofCongo":"congo", "Saint Paul":"st-paul", "Charleston":"charleston-wv",
    "Laayoune":"el-aaiun", "Yaren District":"yaren", "FrenchGuiana":"france", "TurkishRepublicofNorthernCyprus":"cyprus", "Springfield":"springfield-il", "Washington, D.C.":"washington-dc"};

// small entities time/date or weather codes
var timeDateOrWeatherSmallEntities = {"CaymanIslands":"cayman-islands","AntarcticTreatySystem":"antarctica/carlini-base","BouvetIsland":"@3371123","AlandIslands":"@661883",
    "Jersey":"jersey","BritishIndianOceanTerritory":"biot","CanaryIslands":"spain/las-palmas","ChristmasIsland":"christmas","CocosIslands":"cocos","FalklandIslands":"falkland",
    "Guernsey":"guernsey","FaroeIslands":"faroe","FrenchPolynesia":"french-polynesia/vaitape-bora-bora","FrenchSouthernandAntarcticLands":"kergulen","Macau":"macau",
    "SaintMartin":"saint-martin","NorthernMarianaIslands":"mariana-islands","PitcairnIslands":"pitcairn","SaintBarthelemy":"saint-barthelemy","SaintHelena":"saint-helena",
    "StateofPalestine":"palestine","SaintPierreandMiquelon":"st-pierre-miquelon","SvalbardandJanMayen":"norway/longyearbyen","TurksandCaicosIslands":"turks-caicos",
    "WallisandFutuna":"wallis-and-futuna","VaticanCityAndHolySee":"vatican-city-state/vatican-city","HeardIslandandMcDonaldIslands":"@1547314","Panama":"panama",
    "UnitedStatesMinorOutlyingIslands":"usa/wake-island","SouthGeorgiaAndSouthSandwichIslands":"south-georgia-sandwich","Eswatini":"swaziland","SouthAfrica":"south-africa",
    "Tokelau":"tokelau/atafu", "WesternSahara":"western-sahara", "Yemen":"yemen/sana","NewCaledonia":"newcaledonia","Aruba":"netherlands/oranjestad"};

// set the Country Travel Warning from Travel.State.Gov Page: Skip USA, Greenland, WesternSahara, PuertoRico
var travelWarningCountryCode = {"BritishIndianOceanTerritory":"none","AmericanSamoa":"none","UnitedStatesofAmerica":"none","Greenland":"none","SaintMartin":"none",
    "WesternSahara":"none","PuertoRico":"none","ChristmasIsland":"none","Guadeloupe":"none","Guernsey":"none","IsleofMan":"none","WallisandFutuna":"none",
    "UnitedStatesVirginIslands":"none","NorthKorea":"KoreaDemocraticPeoplesRepublicof","TimorLeste":"Timor-Leste","AntarcticTreatySystem":"none","BouvetIsland":"none",
    "BritishVirginIslands":"print_vi","RepublicofCongo":"RepublicoftheCongo","Gambia":"Gambia","CotedIvoire":"CotedvIoire","CanaryIslands":"Spain",
    "DemocraticRepublicoftheCongo":"DemocraticRepublicoftheCongoDRC", "Washington, D.C.":"washington-dc","CocosIslands":"none",
    "TurkishRepublicofNorthernCyprus":"Cyprus","FalklandIslands":"none","FaroeIslands":"none","FrenchSouthernandAntarcticLands":"none","Gibraltar":"none",
    "NorthernMarianaIslands":"none","NorfolkIsland":"none","PitcairnIslands":"none","Reunion":"none","SaintBarthelemy":"none","SaintHelena":"none",
    "SaintPierreandMiquelon":"none","StateofPalestine":"IsraeltheWestBankandGaza","SvalbardandJanMayen":"none","VaticanCityAndHolySee":"none","Jersey":"none",
    "AlandIslands":"none","SouthGeorgiaAndSouthSandwichIslands":"none","UnitedStatesMinorOutlyingIslands":"none","UnitedStatesMinorOutlyingIslands":"none"};

var ciaFactBookCodes = {"AmericanSamoa":"aq.html","AntarcticTreatySystem":"ay.html","BritishIndianOceanTerritory":"io.html","CaymanIslands":"cj.html",
    "ChristmasIsland":"kt.html","CocosIslands":"ck.html","FrenchPolynesia":"fp.html","FrenchSouthernandAntarcticLands":"fs.html","Guernsey":"gk.html",
    "Jersey":"je.html","NorthernMarianaIslands":"cq.html","PitcairnIslands":"pc.html","SaintBarthelemy":"tb.html","SaintMartin":"rn.html",
    "SaintPierreandMiquelon":"sb.html","TurksandCaicosIslands":"tk.html","UnitedStatesMinorOutlyingIslands":"jq.html","BouvetIsland":"bv.html",
    "HeardIslandandMcDonaldIslands":"hm.html","SouthGeorgiaAndSouthSandwichIslands":"sx.html","Niue":"ne.html","Tokelau":"tl.html"};

// Most of categories share the Verification Links from Wiki or CIA factbook
var countryCategorySharedLinks = {
    "Population" : "http://www.worldometers.info/world-population/population-by-country/",
    "Language" : "https://www.cia.gov/library/publications/the-world-factbook/fields/2098.html",
    "LandArea" : "https://www.cia.gov/library/publications/the-world-factbook/rankorder/2147rank.html",
    "Income" : "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    "Overweight" : "http://www.who.int/gho/ncd/risk_factors/overweight/en/",
    "LifeExpectancy" : "https://ourworldindata.org/life-expectancy",
    "Religion" : "https://www.cia.gov/library/publications/the-world-factbook/fields/2122.html",
    "CounryCodes" : "/countryCodes",
    "DrivingSide" : "https://en.wikipedia.org/wiki/Left-_and_right-hand_traffic",
    "Gini" : "https://www.cia.gov/library/publications/the-world-factbook/rankorder/2172rank.html",
    "HDI" : "http://hdr.undp.org/en/composite/HDI",
    "SexSeatRatio" : "http://www.searo.who.int/entity/health_situation_trends/data/chi/sex-ratio/en/"}

// select options values
var populationCode = ['0,100000','100000,1000000','1000000,5000000','5000000,10000000','10000000,25000000','25000000,100000000',
                      '100000000,500000000','500000000,2000000000'];

// select options values
var populationOptionTexts = ['0 - 100K', '100K - 1M', '1M - 5M', '5M - 10M',
                  '10M - 25M', '25M - 100M', '100M - 500M', '500M - 2B'];

var incomeCode = ["0,300","301,800","801,1500","1501,3000","3001,6000","6001,12000",
                  "12001,20000","20001,40000","40001,60000","60001,90000","90001,120000",
                  "120001,150000","150001,300000"];

var incomeOptionTexts = ["$0 - $300","$301 - $800","$801 - $1.5K","$1.5K - $3K",
                      "$3K - $6K","$6K - $12K","$12K - $20K","$20K - $40K",
                      "$40K - $60K","$60K - $90K","$90K - $120K","$120K - $150K",
                      "$150K to $300K"];

var overweightCode = ["1,10","11,20","21,30","31,40","41,50","51,60","61,70","71,80","81,90"];

var overweightOptionTexts = ["1 - 10","11 - 20","21 - 30","31 - 40","41 - 50",
                          "51 to 60","61 to 70","71 to 80","81 to 100"];

var lifeExpectancyCode = ["1,50","51,55","56,60","61,65","66,70","71,75","76,80","81,85","86,100"];

var lifeExpectancyOptionTexts = ["1 - 50","51 - 55","56 - 60","61 - 65","66 - 70","71 - 75","76 - 80","81 - 85","86 - 100"];

var sexRatioCode = ["1,80","81,85","86,90","91,95","96,98","99,100","101,105","106,115","116,135","136,350"];

var sexRatioOptionTexts = ["1 - 80","81 - 85","86 - 90","91 - 95","96 - 98","99 - 100","101 - 105","106 - 115","116 - 135","136 - 350"];

var seatRatioCode = ["1,10","11,20","21,30","31,40","41,50","51,60","61,70","71,80","81,90","91,100"];

var seatRatioOptionTexts = ["1 - 10","11 - 20","21 - 30","31 - 40","41 - 50","51 - 60","61 - 70","71 - 80","81 - 90","91 - 100"];

var landAreaCode = ["1,1000","1001, 10000","10001,50000","50001,100000","100001,250000","250001,500000","500001,750000","750001,1000000","1000001,2000000",
                    "2000001,3000000","3000001,20000000"];

var landAreaOptionTexts = ["1 - 1K km2","1K - 10K km2","10K - 50K km2","50K - 100K km2","100K - 250K km2","250K - 500K km2","500K - 750K km2",
                        "750K - 1M km2","1M - 2M km2","2M - 3M km2","3M - 18M km2"];

var internetCode = ["1,10","11,20","21,30","31,40","41,50","51,60","61,70","71,80","81,90","91,100"];

var internetOptionTexts = ["1 -  10","11 - 20","21 - 30","31 - 40","41 - 50","51 - 60","61 - 70","71 - 80","81 - 90","91 - 100"];

var cellCode = ["1,20","21,30","31,40","41,50","51,60","61,70","71,80","81,90","91,100","101,120","121,150","151,300"];

var cellOptionTexts = ["1 - 20","21 - 30","31 - 40","41 - 50","51 - 60","61 - 70","71 - 80","81 - 90","91 - 100","101 - 120","121 - 150","151 - 300"];

var cleanWaterCode = ["1,20","21,30","31,40","41,50","51,60","61,70","71,80","81,90","91,100"];

var cleanWaterOptionTexts = ["1 - 20","21 - 30","31 - 40","41 - 50","51 - 60","61 - 70","71 - 80","81 - 90","91 - 100"];

var cleanToiletCode = ["1,20","21,30","31,40","41,50","51,60","61,70","71,80","81,90","91,100"];

var cleanToiletOptionTexts = ["1 - 20","21 - 30","31 - 40","41 - 50","51 - 60","61 - 70","71 - 80","81 - 90","91 - 100"];

var randDCode = ["0.1,0.5","0.6,1","1.1,1.5","1.6,2","2.1,2.5","2.6,3","3.1,3.5","3.6,4","4.1,6","6.1,10","11,100"];

var randDOptionTexts = ["0.1 - 0.5","0.6 - 1","1.1 - 1.5","1.6 - 2","2.1 - 2.5","2.6 - 3","3.1 - 3.5","3.6 - 4","4.1 - 6","6.1 - 10","10.1 - 100"];

var capitalCitiesCode = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
                         'Q','R','S','T','U','V','W','X','Y','Z'];
var capitalCitiesOptionTexts = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
                                'Q','R','S','T','U','V','W','X','Y','Z'];

var drivingSideCode = ["Right", "Left"];
var drivingSideOptionTexts = ["Right", "Left"];

var reportsCode = ["Basics"];
var reportsOptionTexts = ["Basics"];

var smallEntities = {
    "AntarcticTreatySystem": "images/SmallEntityGoogleMap/AntarcticTreatySystem.png", "CocosIslands": "images/SmallEntityGoogleMap/CocosIslands.png",
    "Monaco": "images/SmallEntityGoogleMap/Monaco.png","IsleofMan": "images/SmallEntityGoogleMap/IsleofMan.png", "Reunion": "images/SmallEntityGoogleMap/Reunion.png",
    "Martinique": "images/SmallEntityGoogleMap/Martinique.png","Guam": "images/SmallEntityGoogleMap/Guam.png","Niue": "images/SmallEntityGoogleMap/Niue.png/",
    "Mayotte": "images/SmallEntityGoogleMap/Mayotte.png","UnitedStatesMinorOutlyingIslands":"images/SmallEntityGoogleMap/UnitedStatesMinorOutlyingIslands.jpg",
    "Palau": "images/SmallEntityGoogleMap/Palau.png","AmericanSamoa": "images/SmallEntityGoogleMap/AmericanSamoa.png","Samoa": "images/SmallEntityGoogleMap/Samoa.png",
    "Tuvalu" : "images/SmallEntityGoogleMap/Tuvalu.png","FrenchGuiana": "images/SmallEntityGoogleMap/FrenchGuiana.png","Tokelau":"images/SmallEntityGoogleMap/Tokelau.png",
    "TurkishRepublicofNorthernCyprus": "images/SmallEntityGoogleMap/TurkishRepublicofNorthernCyprus.png","Micronesia":"images/SmallEntityGoogleMap/Micronesia.png",
    "MarshallIslands":"images/SmallEntityGoogleMap/MarshallIslands.png","CookIslands":"images/SmallEntityGoogleMap/CookIslands.png",
    "Montserrat":"images/SmallEntityGoogleMap/Montserrat.png","BritishIndianOceanTerritory":"images/SmallEntityGoogleMap/BritishIndianOceanTerritory.png",
    "SaintBarthelemy": "images/SmallEntityGoogleMap/SaintBarthelemy.png","AlandIslands": "images/SmallEntityGoogleMap/AlandIslands.png",
    "NorthernMarianaIslands": "images/SmallEntityGoogleMap/NorthernMarianaIslands.png", "Guadeloupe": "images/SmallEntityGoogleMap/Guadeloupe.png",
    "NorfolkIsland": "images/SmallEntityGoogleMap/NorfolkIsland.png","SouthGeorgiaAndSouthSandwichIslands":"images/SmallEntityGoogleMap/SouthGeorgiaAndSouthSandwichIslands.jpg",
    "SaintPierreandMiquelon": "images/SmallEntityGoogleMap/SaintPierreandMiquelon.png", "SanMarino": "images/SmallEntityGoogleMap/SanMarino.png",
    "SaintHelena": "images/SmallEntityGoogleMap/SaintHelena.png","SvalbardandJanMayen": "images/SmallEntityGoogleMap/SvalbardandJanMayen.png",
    "VaticanCityAndHolySee": "images/SmallEntityGoogleMap/VaticanCityAndHolySee.png", "WallisandFutuna": "images/SmallEntityGoogleMap/WallisandFutuna.png",
    "BonaireSintEustatiusandSaba": "images/SmallEntityGoogleMap/BonaireSintEustatiusandSaba.png", "Gibraltar": "images/SmallEntityGoogleMap/Gibraltar.png",
    "Seychelles":"images/SmallEntityGoogleMap/Seychelles.png", "HeardIslandandMcDonaldIslands": "images/SmallEntityGoogleMap/HeardIslandandMcDonaldIslands.png",
    "Macau": "images/SmallEntityGoogleMap/Macau.png", "CanaryIslands":"images/SmallEntityGoogleMap/CanaryIslands.png","Guernsey":"images/SmallEntityGoogleMap/Guernsey.png",
    "Liechtenstein": "images/SmallEntityGoogleMap/Liechtenstein.jpg","Andorra": "images/SmallEntityGoogleMap/Andorra.png","Jersey":"images/SmallEntityGoogleMap/Jersey.png",
    "ChristmasIsland":"images/SmallEntityGoogleMap/ChristmasIsland.png", "FrenchSouthernandAntarcticLands": "images/SmallEntityGoogleMap/FrenchSouthernandAntarcticLands.png",
    "Kiribati": "images/SmallEntityGoogleMap/Kiribati.png","BouvetIsland":"images/SmallEntityGoogleMap/BouvetIsland.png"
}

//  High Resolution file is slow but has all the small countries: now some small island states are missing
var countryTwoDigitsCodeWithName = {
    "Afghanistan" : "AF","UnitedArabEmirates" : "AE","Andorra": "AD","AntiguaandBarbuda" : "AG","Anguilla" :"AI","Albania":"AL","Armenia":"AM",
    "Angola":"AO" ,"Argentina":"AR","Austria":"AT","Australia":"AU","Aruba":"AW","Azerbaijan":"AZ","BosniaandHerzegovina":"BA","Barbados":"BB",
    "Bangladesh":"BD","Belgium":"BE","BurkinaFaso":"BF","Bulgaria":"BG","Bahrain":"BH","Burundi":"BI","Benin":"BJ","Bermuda":"BM","Brunei":"BN",
    "Bolivia":"BO","Brazil":"BR","Bahamas":"BS","Bhutan":"BT","Botswana":"BW","Belarus":"BY","Belize":"BZ","BonaireSintEustatiusandSaba":"BQ",
    "Canada":"CA","DemocraticRepublicoftheCongo":"CD","CentralAfricanRepublic": "CF","RepublicofCongo":"CG","Switzerland":"CH",
    "CanaryIslands":"ES","CotedIvoire":"CI","Chile":"CL","Cameroon":"CM","China":"CN","Colombia":"CO","CostaRica":"CR","Cuba":"CU","CaboVerde":"CV",
    "Curacao":"CW","Cyprus":"CY","Czechia":"CZ","Germany":"DE","Djibouti":"DJ","Denmark":"DK","Dominica":"DM","DominicanRepublic":"DO","Algeria":"DZ",
    "Ecuador":"EC","Estonia":"EE","Egypt":"EG","WesternSahara":"EH","Eritrea":"ER","Spain":"ES","Ethiopia":"ET","Finland":"FI","Fiji":"FJ",
    "FalklandIslands":"FK","FaroeIslands":"FO","France":"FR","FrenchPolynesia":"PF","FrenchSouthernandAntarcticLands":"TF","TH": "Thailand",
    "Gabon":"GA","UnitedKingdom":"GB","Grenada":"GD","Georgia":"GE","FrenchGuiana":"GF","Ghana":"GH","Gibraltar":"GI","Greenland":"GL","Gambia":"GM",
    "Guadeloupe":"GP","Guinea":"GN","EquatorialGuinea":"GQ","Greece":"GR","Guatemala":"GT","Guam":"GU","GuineaBissau":"GW","Guyana":"GY","Honduras":"HN",
    "Croatia":"HR","Haiti":"HT","HongKong":"HK","Hungary":"HU","Indonesia":"ID","Ireland":"IE","Israel":"IL","India":"IN","Iraq":"IQ","Iran":"IR",
    "Iceland":"IS","Italy":"IT","Jamaica":"JM","Jordan":"JO","Japan":"JP","Kenya":"KE","Kyrgyzstan":"KG","Cambodia":"KH","Comoros":"KM","SanMarino":"SM",
    "SaintKittsandNevis":"KN","NorthKorea":"KP","SouthKorea":"KR","Kuwait":"KW","CaymanIslands":"KY","Kazakhstan":"KZ","Laos":"LA","Lebanon":"LB",
    "SaintLucia":"LC","SriLanka":"LK","Liberia":"LR","Liechtenstein":"LI","Lesotho":"LS","Lithuania":"LT","Luxembourg":"LU","Latvia":"LV","Libya":"LY",
    "Monaco":"MC","Morocco":"MA","Moldova":"MD","Montenegro":"ME","Macau":"MO","Madagascar":"MG","Macedonia":"MK","Mali":"ML","Myanmar":"MM","Mongolia":"MN",
    "Martinique":"MQ","Mauritania":"MR","Malta":"MT","Mauritius":"MU","Maldives":"MV","Malawi":"MW","Mexico":"MX","Malaysia":"MY","Mozambique":"MZ",
    "Namibia":"NA","NewCaledonia":"NC","Niger":"NE","Nigeria":"NG","Nicaragua":"NI","Netherlands":"NL","NorfolkIsland":"NF","Norway":"NO",
    "NorthernMarianaIslands":"MP","Nepal":"NP","Nauru":"NR","NewZealand":"NZ","Oman":"OM","Panama":"PA","Peru":"PE","PapuaNewGuinea":"PG","Philippines":"PH",
    "Pakistan":"PK","Poland":"PL","PuertoRico":"PR","StateofPalestine":"PS","PitcairnIslands":"PN","Portugal":"PT","Palau":"PW","Paraguay":"PY","Qatar":"QA",
    "Romania":"RO","Reunion":"RE","Serbia":"RS","RussianFederation":"RU","Rwanda":"RW","SaintBarthelemy":"BL","SaintHelena":"SH","SaintPierreandMiquelon":"PM",
    "SaintMartin":"MF","SaudiArabia":"SA","SolomonIslands":"SB","Seychelles":"SC","Sudan":"SD","Sweden":"SE","Slovenia":"SI","Slovakia":"SK","SierraLeone":"SL",
    "Singapore":"SG","Senegal":"SN","Somalia":"SO","Suriname":"SR","SouthSudan":"SS","SaoTomeandPrincipe":"ST","ElSalvador":"SV","SintMaarten":"SX","Syria":"SY",
    "Eswatini":"SZ","TurksandCaicosIslands": "TC","Chad":"TD","Togo":"TG","Thailand":"TH","Tajikistan":"TJ","TimorLeste":"TL","Turkmenistan":"TM","Tunisia":"TN",
    "Tonga":"TO","Turkey":"TR","TurkishRepublicofNorthernCyprus":"CY","TrinidadandTobago":"TT","Tuvalu":"TV","Taiwan":"TW","Tanzania":"TZ","Ukraine":"UA",
    "Uganda":"UG","UnitedStatesofAmerica":"US","Uruguay":"UY","Uzbekistan":"UZ","SaintVincentandGrenadines":"VC","SvalbardandJanMayen":"SJ","Venezuela":"VE",
    "BritishVirginIslands":"VG","UnitedStatesVirginIslands":"VI","Vietnam":"VN","Vanuatu":"VU","VaticanCityAndHolySee":"VA","WallisandFutuna":"WF","Samoa":"WS",
    "Kosovo":"XK","Yemen":"YE","SouthAfrica":"ZA","Zambia":"ZM","Zimbabwe":"ZW", "CookIslands":"CK", "Kiribati":"KI", "MarshallIslands":"MH", "Mayotte":"YT",
    "Micronesia":"FM","Montserrat":"MS","Niue":"NU","Tokelau":"TK","AmericanSamoa":"AS","IsleofMan":"IM"
}

//  From mapdata id (two digits) to find the Flag File Country Name
var reverseCountryTwoDigitsCodeWithName = {
    "AF": "Afghanistan","AE": "UnitedArabEmirates","AD": "Andorra","AG": "AntiguaandBarbuda","AI": "Anguilla","AL": "Albania","AM": "Armenia","AO": "Angola",
    "AR": "Argentina","AT": "Austria","AU": "Australia","AW": "Aruba","AZ": "Azerbaijan","BA": "BosniaandHerzegovina","BL": "SaintBarthelemy","BB": "Barbados",
    "BD": "Bangladesh","BE": "Belgium","BF": "BurkinaFaso","BG": "Bulgaria","BH": "Bahrain","BI": "Burundi","BJ": "Benin","BM": "Bermuda","BN": "Brunei",
    "BO": "Bolivia","BQ": "BonaireSintEustatiusandSaba","BR": "Brazil","BS": "Bahamas","BT": "Bhutan","BW": "Botswana","BY": "Belarus","BZ": "Belize",
    "CA": "Canada","CD": "DemocraticRepublicoftheCongo","CF": "CentralAfricanRepublic","CG": "RepublicofCongo","CH": "Switzerland","CI": "CotedIvoire",
    "CL": "Chile","CM": "Cameroon","CN": "China","CO": "Colombia","CR": "CostaRica","CU": "Cuba","CV": "CaboVerde","CW": "Curacao","CY": "Cyprus","CZ": "Czechia",
    "DE": "Germany","DJ": "Djibouti","DK": "Denmark","DM": "Dominica","DO": "DominicanRepublic","DZ": "Algeria","EC": "Ecuador","EE": "Estonia","EG": "Egypt",
    "EH": "WesternSahara","ER": "Eritrea","ES": "Spain","ET": "Ethiopia","FI": "Finland","FJ": "Fiji","FK": "FalklandIslands","FO": "FaroeIslands","FR": "France",
    "GA": "Gabon","GB": "UnitedKingdom","GD": "Grenada","GE": "Georgia","GF": "FrenchGuiana","GH": "Ghana","GI": "Gibraltar","GL": "Greenland","GM": "Gambia",
    "GN": "Guinea","GP": "Guadeloupe","GQ": "EquatorialGuinea","GR": "Greece","GT": "Guatemala","GU": "Guam","GW": "GuineaBissau","GY": "Guyana","HN": "Honduras",
    "HR": "Croatia","HT": "Haiti","HK": "HongKong","HU": "Hungary","IC": "Spain","ID" :"Indonesia","IE": "Ireland","IL" :"Israel","IN": "India","IQ": "Iraq",
    "IR" :"Iran","IS": "Iceland","IT": "Italy","JM": "Jamaica","JO": "Jordan","JP": "Japan","KE": "Kenya","KG": "Kyrgyzstan","KH": "Cambodia","KM": "Comoros",
    "KN": "SaintKittsandNevis","KP": "NorthKorea","KR": "SouthKorea","KW": "Kuwait","KY": "CaymanIslands","KZ": "Kazakhstan","LA": "Laos","LB": "Lebanon",
    "LC": "SaintLucia","LK": "SriLanka","LR": "Liberia","LI": "Liechtenstein","LS": "Lesotho","LT": "Lithuania","LU": "Luxembourg","LV": "Latvia","LY": "Libya",
    "MC": "Monaco","MA": "Morocco","MD": "Moldova","ME": "Montenegro","MF": "SaintMartin","MG": "Madagascar","MH": "MarshallIslands","MK": "Macedonia",
    "ML": "Mali","MM": "Myanmar","MN": "Mongolia","MO": "Macau","MP": "NorthernMarianaIslands","MR": "Mauritania","MT": "Malta","MU": "Mauritius","MV": "Maldives",
    "MW": "Malawi","MX": "Mexico","MY": "Malaysia","MZ": "Mozambique","NA": "Namibia","NC": "NewCaledonia","NE": "Niger","NG": "Nigeria","NF":"NorfolkIsland",
    "NI": "Nicaragua","NL": "Netherlands","NO": "Norway","NP": "Nepal","NR": "Nauru","NZ": "NewZealand","OM": "Oman","PA": "Panama","PE": "Peru","PF": "FrenchPolynesia",
    "PG": "PapuaNewGuinea","PH": "Philippines","PK": "Pakistan","PL": "Poland","PM": "SaintPierreandMiquelon","PN": "PitcairnIslands","PR": "PuertoRico",
    "PS": "StateofPalestine","PT": "Portugal","PW": "Palau","PY": "Paraguay","QA": "Qatar","RE": "Reunion","RO": "Romania","RS": "Serbia","RU": "RussianFederation",
    "RW": "Rwanda","SA": "SaudiArabia","SB": "SolomonIslands","SC": "Seychelles","SD": "Sudan","SE": "Sweden","SH": "SaintHelena","SI": "Slovenia",
    "SJ": "SvalbardandJanMayen", "SK": "Slovakia","SL": "SierraLeone","SG": "Singapore","SM":"SanMarino","SN": "Senegal","SO": "Somalia","SR": "Suriname",
    "SS": "SouthSudan","ST":"SaoTomeandPrincipe", "SV": "ElSalvador","SX": "SintMaarten","SY": "Syria","SZ": "Eswatini","TC": "TurksandCaicosIslands","TD": "Chad",
    "TG": "Togo","TF": "FrenchSouthernandAntarcticLands", "TH": "Thailand","TJ": "Tajikistan","TL": "TimorLeste","TM": "Turkmenistan","TN": "Tunisia","TO": "Tonga",
    "TR": "Turkey","TT": "TrinidadandTobago","TV": "Tuvalu", "TW": "Taiwan","TZ": "Tanzania","UA": "Ukraine","UG": "Uganda","US": "UnitedStatesofAmerica","UY": "Uruguay",
    "UZ": "Uzbekistan","VA": "VaticanCityAndHolySee", "VC": "SaintVincentandGrenadines","VE": "Venezuela","VG": "BritishVirginIslands","VI": "UnitedStatesVirginIslands",
    "VN": "Vietnam","VU": "Vanuatu","WF": "WallisandFutuna", "XK": "Kosovo","YE": "Yemen","ZA": "SouthAfrica","ZM": "Zambia","ZW": "Zimbabwe", "CK": "CookIslands",
     "KI":"Kiribati", "YT":"Mayotte", "FM":"Micronesia", "MS":"Montserrat","NU":"Niue","TK":"Tokelau", "MQ":"Martinique", "AS":"AmericanSamoa"
}

//  From mapdata id (two digits) to find the Flag File Country Name" Put the Flag into Map ONCE
var countriesArrayNo = {
    "AF": 1,"AE": 2,"AG": 3,"AI": 4,"AL": 5,"AM": 6,"AO": 7,"AR": 8,"AS": 9,"AT": 10,"AU": 11,"AW": 12,"AZ": 13,
    "BA": 14,"BB": 15,"BD": 16,"BE": 17,"BF": 18,"BG": 19,"BH": 20,"BI": 21,"BJ": 22,"BL": 23,"BM": 24,"BN": 25,
    "BO": 26,"BR": 27,"BS": 28,"BT": 29,"BW": 30,"BY": 31,"BZ": 32,"CA": 33,"CD": 34,"CF": 35,"CG": 36,"CH": 37,
    "CI": 38,"CL": 39,"CM": 40,"CN": 41,"CO": 42, "CR": 43,"CU": 44,"CV": 45,"CW": 46,"CY": 47,"CZ": 48,"DE": 49,
    "DJ": 50,"DK": 51,"DM": 52,"DO": 53,"DZ": 54,"EC": 55,"EE": 56,"EG": 57,"EH": 58,"ER": 59,"ES": 60,"ET": 61,
    "FI": 62,"FJ": 63,"FK": 64,"FM": 65,"FO": 66,"FR": 67,"GA": 68,"GB": 69,"GD": 70,"GE": 71,"GF": 72,"GH": 73,
    "GL": 74,"GM": 75,"GN": 76,"GP": 77,"GQ": 78,"GR": 79,"GT": 80,"GW": 81,"GY": 82,"HN": 83,"HR": 84,"HT": 85,
    "HU": 86,"IC": 87,"ID" :88,"IE": 89,"IL" :90,"IN": 91,"IQ": 92,"IR" :93,"IS": 94,"IT": 95,"JM": 96,"JO": 97,
    "JP": 98,"KE": 99,"KG": 100,"KH": 101,"KM": 102,"KN": 103,"KP": 104,"KR": 105,"KW": 106,"KY": 107,"KZ": 108,
    "LA": 109,"LB": 110,"LC": 111,"LK": 112,"LR": 113,"LS": 114,"LT": 115,"LU": 116,"LV": 117,"LY": 118,"MA": 119,
    "MD": 120,"ME": 121,"MF": 122,"MG": 123,"MH": 124,"MK": 125,"ML": 126,"MM": 127,"MN": 128,"MP": 129,"MQ": 130,
    "MR": 131,"MS": 132,"MT": 133,"MU": 134,"MV": 135,"MW": 136,"MX": 137,"MY": 138,"MZ": 139,"NA": 140,"NE": 141,
    "NG": 142,"NI": 143,"NL": 144,"NO": 145,"NP": 146,"NR": 147,"NZ": 148,"OM": 149,"PA": 150,"PE": 151,"PF": 152,
    "PG": 153,"PH": 154,"PK": 155,"PL": 156,"PR": 157,"PS": 158,"PT": 159,"PW": 160,"PY": 161,"QA": 162,"RE": 163,
    "RO": 164,"RS": 165,"RU": 166,"RW": 167,"SA": 168,"SB": 169,"SC": 170,"SD": 171,"SE": 172,"SI": 173,"SK": 174,
    "SL": 175,"SG": 176,"SN": 177,"SO": 178,"SR": 179,"SS": 180,"ST": 181,"SV": 182,"SX": 183,"SY": 184,"SZ": 185,
    "TC": 186,"TD": 187,"TG": 188,"TH": 189,"TJ": 190,"TL": 191,"TM": 192,"TN": 193,"TO": 194,"TR": 195,"TT": 196,
    "TV": 197,"TW": 198,"TZ": 199,"UA": 200,"UG": 201,"US": 202,"UY": 203,"UZ": 204,"VC": 205,"VE": 206,"VG": 207,
    "VI": 208,"VN": 209,"VU": 210,"WS": 211,"XK": 212,"YE": 213,"YT": 214,"ZA": 215,"ZM": 216,"ZW": 217,"NF": 218,
    "PM": 219,"PN": 220,"SH": 221,"SJ": 222,"SM": 223,"TF": 224,"VA": 225,"WF": 226,"HK": 227,"MO": 228,"BQ": 229,
    "GI": 230,"CK": 231,"KI": 232,"NU": 233,"TK": 234,"AS": 235, "LI": 226, "AD": 227
}

var imageSize = {
    "AT":".85","MN":".96","PG":".80","HU":".85","SK":".85","TR":".98","US":".96"
}

var canadaProvinces = {
  "AB": "Alberta","BC": "British_Columbia","SK": "Saskatchewan","MB": "Manitoba","ON": "Ontario","QC": "Quebec",
  "NB": "New_Brunswick","PE": "Prince_Edward_Island","NS": "Nova_Scotia","NL": "Newfoundland","NU": "Nunavut",
  "NT": "Northwest_Territories","YT": "Yukon"
}

var usStates={ // images/SVGUSStateFlags/Flag_of_ + usStates[xx] + ".svg"
    "HI" : "Hawaii","DC" : "Washington_DC","AK" : "Alaska","FL" : "Florida","NH" : "New_Hampshire","VT" : "Vermont",
    "ME" : "Maine","RI" : "Rhode_Island","NY" : "New_York","PA" : "Pennsylvania","NJ" : "New_Jersey","DE" : "Delaware",
    "MD" : "Maryland","VA" : "Virginia","WV" : "West_Virginia","OH" : "Ohio","IN" : "Indiana","IL" : "Illinois",
    "CT" : "Connecticut","WI" : "Wisconsin","NC" : "North_Carolina","MA" : "Massachusetts","TN" : "Tennessee",
    "AR" : "Arkansas","MO" : "Missouri","GA" : "Georgia","SC" : "South_Carolina","KY" : "Kentucky","AL" : "Alabama",
    "LA" : "Louisiana","MS" : "Mississippi","IA" : "Iowa","MN" : "Minnesota","OK" : "Oklahoma","TX" : "Texas",
    "NM" : "New_Mexico","KS" : "Kansas","NE" : "Nebraska","SD" : "South_Dakota","ND" : "North_Dakota","WY" : "Wyoming",
    "MT" : "Montana","CO" : "Colorado","UT" : "Utah","AZ" : "Arizona","NV" : "Nevada","OR" : "Oregon","WA" : "Washington",
    "CA" : "California","MI" : "Michigan","ID" : "Idaho"
}

// Country Greetings in the native (top used) language
// ISO CODES two digits as it is used in mapsdata.js SimpleMaps
var countryGreetingTexts = {
    "AF": "سلام، څنګه یې؟",
    "AE": "مرحبا كيف حالك",
    "AG": "Hi, How are you doing?",
    "AI": "Hi, How you are doing?",
    "AL": "Hi, si jeni?",
    "AM": "Ողջույն, ինչպես եք դուք",
    "AO": "Oi tudo bem",
    "AR": "Hola, ¿cómo estás?",
    "AS": "Hi, How you are doing?",
    "AT": "Hallo, wie geht es dir?",
    "AU": "Hi, How are you doing?",
    "AW": "Hallo, hoe gaat het?",
    "AZ": "Salam, necəsən?",
    "BA": "Zdravo, kako si?",
    "BB": "Hi, How are you doing?",
    "BD": "হাই, কেমন আছেন?",
    "BE": "Hallo, hoe gaat het?",
    "BF": "Salut, comment ça va?",
    "BG": "Здравей, как си?",
    "BH": "مرحبا كيف حالك",
    "BI": "Bwakeye, Urakomeye?",
    "BJ": "Salut, comment ça va?",
    "BL": "Salut, comment ça va?",
    "BM": "Hi, How are you doing?",
    "BN": "Selamat sejahtera, Apa Khabar?",
    "BO": "Hola, ¿cómo estás?",
    "BQ": "Hallo, hoe gaat het?",
    "BR": "Oi tudo bem",
    "BS": "Hi, How are you doing?",
    "BT": "Kuzoozangpo La, Ga Day Bay Zhu Yoe Ga ?",
    "BW": "Dumela mma Dumela rra",
    "BY": "Привет, как дела?",
    "BZ": "Hi, How are you doing?",
    "CA": "Hi, How are you doing?",
    "CD": "Salut, comment ça va?",
    "CF": "Salut, comment ça va?",
    "CG": "Salut, comment ça va?",
    "CH": "Hallo, wie geht es dir?",
    "CI": "Salut, comment ça va?",
    "CL": "Hola, ¿cómo estás?",
    "CM": "Hi, How are you doing? Salut, comment ça va?",
    "CN": "嗨，你好吗？",
    "CO": "Hola, ¿cómo estás?",
    "CR": "Hola, ¿cómo estás?",
    "CU": "Hola, ¿cómo estás?",
    "CV": "Oi tudo bem",
    "CW": "Hallo, hoe gaat het?",
    "CY": "Γεια σου, πώς είσαι Merhaba, nasılsın?",
    "CZ": "Ahoj, jak se máš?",
    "DE": "Hallo, wie geht es dir?",
    "DJ": "Salut, comment ça va? مرحبا كيف حالك",
    "DK": "Hej, hvordan har du det?",
    "DM": "Hi, How are you doing?",
    "DO": "Hola, ¿cómo estás?",
    "DZ": "مرحبا كيف حالك",
    "EC": "Hola, ¿cómo estás?",
    "EE": "Tere, kuidas sul läheb?",
    "EG": "مرحبا كيف حالك",
    "EH": "مرحبا كيف حالك",
    "ER": "መርሓባ ከመይ ኣለኻ ከመይ ኣለኺ",
    "ES": "Hola, ¿cómo estás?",
    "ET": "እንዴት ነህ! naqaa? isin attam?",
    "FI": "Hei, miten olet?",
    "FJ": "Hi, How are you doing?",
    "FK": "Hi, How are you doing?",
    "FM": "Hi, How are you doing?",
    "FO": "Hej, hvordan har du det?",
    "FR": "Salut, comment ça va?",
    "GA": "Salut, comment ça va?",
    "GB": "Hi, How are you doing?",
    "GD": "Hi, How are you doing?",
    "GE": "გამარჯობა, როგორ ხარ?",
    "GF": "Salut, comment ça va?",
    "GH": "Hi, How are you doing?",
    "GI": "Hi, How are you doing?",
    "GL": "Hej, hvordan har du det?",
    "GM": "Hi, How are you doing?",
    "GN": "Salut, comment ça va?",
    "GP": "Salut, comment ça va?",
    "GQ": "Hola, ¿cómo estás?",
    "GR": "Γεια σου, πώς είσαι",
    "GT": "Hola, ¿cómo estás?",
    "GW": "Oi tudo bem",
    "GY": "Hi, How are you doing?",
    "HN": "Hola, ¿cómo estás?",
    "HR": "Bok, kako si?",
    "HT": "Salut, comment ça va?",
    "HK": "嗨，你好吗？",
    "HU": "Szia, hogy vagy?",
    "IC": "--",
    "ID": "Hai, piye kabare?",
    "IE": "Dia duit, cén chaoi a bhfuil tú?",
    "IL": "مرحبا كيف حالك היי, מה שלומך?",
    "IN": "हाय, तुम कैसे हो",
    "IQ": "مرحبا كيف حالك Hi, tu çawa?",
    "IR": "سلام، چطوری؟",
    "IS": "Hæ, hvernig ertu?",
    "IT": "Ciao, come stai?",
    "JM": "Hi, How are you doing?",
    "JO": "مرحبا كيف حالك",
    "JP": "こんにちは、元気？",
    "KE": "Hi, How are you doing?",
    "KG": "Салам, кандайсыз?",
    "KH": "សួស្តីតើអ្នកសុខសប្បាយទេ?",
    "KM": "مرحبا كيف حالك Salut, comment ça va?",
    "KN": "Hi, How are you doing?",
    "KP": "안녕, 안녕하세요?",
    "KR": "안녕, 안녕하세요?",
    "KW": "مرحبا كيف حالك",
    "KY": "Hi, How are you doing?",
    "KZ": "Сәлеметсіз бе, сіз қалайсыз?",
    "LA": "ສະບາຍດີ, ທ່ານແມ່ນແນວໃດ?",
    "LB": "مرحبا كيف حالك",
    "LC": "Hi, How are you doing?",
    "LK": "හායි, කොහොමද ඔයා?",
    "LR": "Hi, How are you doing?",
    "LS": "Hi, How are you doing?",
    "LT": "Sveiki, kaip tu gyveni?",
    "LU": "Hallo, wéi sidd Dir?",
    "LV": "Sveiks, kā tu esi?",
    "LY": "مرحبا كيف حالك",
    "MA": "مرحبا كيف حالك",
    "MD": "Bună, ce mai faci?",
    "ME": "Здраво, како си?",
    "MF": "Salut, comment ça va?",
    "MG": "Hi, ahoana ianao?",
    "MH": "Io̧kwe kom̧  Ej et mour",
    "MK": "Здраво, како си?",
    "ML": "Aw ni ce Aw ka kεnε wa?",
    "MM": "မင်္ဂလာပါနေကောင်းလား?",
    "MN": "Сайн байна уу, чи яаж байна?",
    "MO": "嗨，你好吗？",
    "MP": "Hi, How are you doing?",
    "MQ": "Salut, comment ça va?",
    "MR": "مرحبا كيف حالك",
    "MS": "Hi, How are you doing?",
    "MT": "Hi, kif int?",
    "MU": "Bonzur  	Ki manyèr ?",
    "MV": "Assalaa mu alaikum Kihineh",
    "MW": "Moni Moni onse Muli bwanji?",
    "MX": "Hola, ¿cómo estás?",
    "MY": "Selamat, Apa kabar",
    "MZ": "Oi tudo bem",
    "NA": "Hi, How are you doing?",
    "NE": "Salut, comment ça va?",
    "NG": "Hi, How are you doing?",
    "NF": "Hi, How are you doing?",
    "NI": "Hola, ¿cómo estás?",
    "NL": "Hallo, hoe gaat het?",
    "NO": "Hei, hvordan har du det?",
    "NP": "नमस्ते, तिमीलाई कस्तो छ?",
    "NR": "Ekamowir Omo, Wo Areit Ed",
    "NZ": "Hi, How are you doing?",
    "OM": "مرحبا كيف حالك",
    "PA": "Hola, ¿cómo estás?",
    "PE": "Hola, ¿cómo estás?",
    "PF": "Salut, comment ça va?",
    "PG": "Hi, How are you doing?",
    "PH": "Hi, How are you doing?",
    "PK": "سلام، توهان ڪيئن آهيو؟",
    "PL": "Cześć, jak się masz?",
    "PM": "Hi, How are you doing?",
    "PN": "Hi, How are you doing?",
    "PR": "Hola, ¿cómo estás?",
    "PS": "مرحبا كيف حالك",
    "PT": "Oi tudo bem",
    "PW": "Hi, How are you doing?",
    "PY": "Hola, ¿cómo estás?",
    "QA": "مرحبا كيف حالك",
    "RE": "Salut, comment ça va?",
    "RO": "Bună, ce mai faci?",
    "RS": "Здраво, како си?",
    "RU": "Привет, как дела?",
    "RW": "Salut, comment ça va?",
    "SA": "مرحبا كيف حالك",
    "SB": "Hi, How are you doing?",
    "SC": "Salut, comment ça va?",
    "SD": "مرحبا كيف حالك",
    "SE": "Hej, hur mår du?",
    "SH": "Hi, How are you doing?",
    "SI": "Zdravo, kako si?",
    "SK": "Ahoj, ako sa máš?",
    "SJ": "Hei, hvordan har du det?",
    "SL": "Hi, How are you doing?",
    "SG": "Hi, How are you doing?",
    "SM": "Ciao, come stai?",
    "SN": "Salut, comment ça va?",
    "SO": "مرحبا كيف حالك",
    "SR": "Hallo, hoe gaat het?",
    "SS": "Hi, How are you doing?",
    "ST": "Hola, ¿cómo estás?",
    "SV": "Hola, ¿cómo estás?",
    "SX": "Hallo, hoe gaat het?",
    "SY": "مرحبا كيف حالك",
    "SZ": "Hi, How are you doing?",
    "TC": "Hi, How are you doing?",
    "TD": "Salut, comment ça va? مرحبا كيف حالك",
    "TG": "Salut, comment ça va?",
    "TF": "Salut, comment ça va?",
    "TH": "สวัสดีคุณเป็นอย่างไร?",
    "TJ": "Хуб, чӣ хел шумо ҳастед?",
    "TK": "Malo ni, ea mai koe?",
    "TL": "Hi, How are you doing?",
    "TM": "Merhaba, nasılsın?",
    "TN": "مرحبا كيف حالك",
    "TO": "Hi, How are you doing?",
    "TR": "Merhaba, Nasılsın?",
    "TT": "Hi, How are you doing?",
    "TV": "Hi, How are you doing?",
    "TW": "嗨，你好吗？",
    "TZ": "Hi, How are you doing?",
    "UA": "Привіт як ти?",
    "UG": "Hi, How are you doing?",
    "US": "Hi, How are you doing?",
    "UY": "Hola, ¿cómo estás?",
    "UZ": "Salom, qanday qilib?",
    "VC": "Hi, How are you doing?",
    "VE": "Hola, ¿cómo estás?",
    "VG": "Hi, How are you doing?",
    "VI": "Hi, How are you doing?",
    "VN": "Xin chào, bạn thế nào?",
    "VU": "Hi, How are you doing?",
    "WS": "Malō soifua Ua mai oe?",
    "XK": "Hi, si jeni?",
    "YE": "مرحبا كيف حالك",
    "YT": "Salut, comment ça va?",
    "ZA": "Hoe gaan dit met jou?",
    "ZM": "Hi, How are you doing?",
    "ZW": "Hi, How are you doing?",
    "AD": "Hola, com estàs?",
    "CK": "Hi, How are you doing?",
    "GU": "Hi, How are you doing?",
    "KI": "Hi, How are you doing?",
    "LI": "Hallo, wie geht es dir?",
    "MC": "Salut, comment ça va?",
    "NC": "Salut, comment ça va?",
    "NU": "Fakaalofa atu!, Malolo nakai a koe?",
    "VA": "Ciao, come stai?",
    "WF": "Salut, comment ça va?",
    "AS": "Hi, How are you doing?",
}

// ****     2- Functions     ******

// execute this method for each Page requires this external JS file (acts af if it just opened for the requested SPA page)
function initializationUtilityForFlags() {
    previousFlag = -1;
    hoveredFlag = -1;
    oneCountrySelectedFlag = false;
    selectedOneCountryLITab = "id_PanelOneText"; // "map" is the selected (default) One Country Tab Panel

    countryNameBayrakIndex = []; // Array
    countryBayrakIdByName = {}; // JSON Object

    countryNameVsFullNameObject = {};
    stateIsShowing = false;
    countryIsShowing = false;

    // Used while Printing/Reporting
    filteredCountriesNames = [];
    combinedFlag = "";
    currentGrade = "";
}

// Set the Background Map for the Region
function changeTheBackgroundMap(region)
{
    // show the selected region
    worldMap.mapdata.main_settings.initial_zoom = regionNumbers[region];
    // if a region selected while world maps are loading: don't loose the new selected Region Name
    if (dashBoardFlag) document.getElementById("id_CountryFacts").innerHTML = selectedApplicationLanguageTexts["id_World"];
    else document.getElementById("id_CountryFacts").innerHTML =
        selectedApplicationLanguageTexts["id_" + document.querySelectorAll('input[type="radio"]:checked')[0].id];
    // ---> make "map" visible, remove "displayNone"
    if (worldMapLoaded || dashBoardFlag)
    { } // loaded already, do not repeat
    else
    {
        worldMap.load();
    }
    // show World/Region view and hide Country view
    showWorldView();
    fillCountriesMaps();
}

// show World/Region view and hide Country view
function showWorldView()
{
    if (!document.getElementById("mapTab").classList.contains("displayNone"))
        document.getElementById("mapTab").classList.add("displayNone");
    // ---> hide "map1", add "displayNone" to "map1"
    if (document.getElementById("map1").classList.contains("displayNone"))
        document.getElementById("map1").classList.remove("displayNone");
    // no lingering Map
    document.getElementById("map").innerHTML = "";
    // ---> hide Report Menu All the Time: Only Report Selection Change Event will show it
    if (dashBoardFlag)
    {
        if (!document.getElementById("reportPanel").classList.contains("displayNone"))
            document.getElementById("reportPanel").classList.add("displayNone");
    }
    resetOneCountryTabPanel("show");
}

function resetOneCountryTabPanel(what)
{
    // if not "map", hide the current One Country Tab Panel, show "map"
    if (selectedOneCountryLITab != "id_PanelOneText")
    {
        // First set the Text right (Selected Tab text)
        if (document.getElementById(selectedOneCountryLITab).classList.contains("oneCountryPanelSelectedTab"))
            document.getElementById(selectedOneCountryLITab).classList.remove("oneCountryPanelSelectedTab");
        if (!document.getElementById("id_PanelOneText").classList.contains("oneCountryPanelSelectedTab"))
            document.getElementById("id_PanelOneText").classList.add("oneCountryPanelSelectedTab");
        if (!document.getElementById(selectedOneCountryLITab.substring(3, selectedOneCountryLITab.indexOf("Text"))).classList.contains("displayNone"))
            document.getElementById(selectedOneCountryLITab.substring(3, selectedOneCountryLITab.indexOf("Text"))).classList.add("displayNone");
        selectedOneCountryLITab = "id_PanelOneText";
        if (document.getElementById("map").classList.contains("displayNone"))
            document.getElementById("map").classList.remove("displayNone");
        document.getElementById("map").innerHTML = ""; // no more lingering Country map left
    }
}

// show Country view and hide World/Region view
function hideWorldView()
{
    // ---> show "map": one country view
    if (document.getElementById("mapTab").classList.contains("displayNone"))
        document.getElementById("mapTab").classList.remove("displayNone");
    // ---> hide "map1": world (region) view
    if (!document.getElementById("map1").classList.contains("displayNone"))
        document.getElementById("map1").classList.add("displayNone");
    // ---> hide Report Menu All the Time: Only Report Selection Change Event will show it
    if (dashBoardFlag)
    {
        if (!document.getElementById("reportPanel").classList.contains("displayNone"))
            document.getElementById("reportPanel").classList.add("displayNone");
        if (document.getElementById("Reports") && document.getElementById("Reports").selectedIndex != 0) Reports.selectedIndex = 0;
    }
    playAnthem.pause();
    playGreeting.pause();
    resetOneCountryTabPanel("hide");
}

// show Report Panel and Hide All Maps (Country Panels)
function showReportPanel()
{
    // ---> show "map": one country view
    if (!document.getElementById("mapTab").classList.contains("displayNone"))
        document.getElementById("mapTab").classList.add("displayNone");
    // ---> hide "map1": world (region) view
    if (!document.getElementById("map1").classList.contains("displayNone"))
        document.getElementById("map1").classList.add("displayNone");
    // ---> hide Report Menu All the Time: Only Report Selection Change Event will show it
    if (document.getElementById("reportPanel").classList.contains("displayNone"))
        document.getElementById("reportPanel").classList.remove("displayNone");
    if (document.getElementById("Reports") && document.getElementById("Reports").selectedIndex != 0) Reports.selectedIndex = 0;
}

// if HTML Flags Object as a block (one time read and put) used: Just create the Arrays/Objects
function setTheFlags(region)
{
    var oneImgElement;
    countryNameBayrakIndex = [];
    countryBayrakIdByName = {};
    //var flags;
    if (dashBoardFlag)
    {
        //flags = document.getElementById("flagsWorld");
        flagOfCountries = allCountryNames; // use all the country name for World
        flagOfCountriesFullName = allCountryFullNames; // use all the country name for World
        // Country(name) : Full Name JSON Object
        for (var key in flagOfCountries)
        {
            countryNameVsFullNameObject[flagOfCountries[key]] = flagOfCountriesFullName[key];
        }
    }
    else // Selected Region Background Color
    {
        setTheSelectedRegion(region); // used by Region and Register
    }

    for (var key in flagOfCountries)
    {
        countryNameBayrakIndex[key] = flagOfCountries[key];
        countryBayrakIdByName[flagOfCountries[key]] = "bayrak" + key;
    }
}

function setTheRegionFlags(region, flagsObj)
{
    var flags;
    // NorthAmerica:NAFlags  SouthAmerica:SAFlags  Europe:EuropeFlags  Africa:AfricaFlags  Oceania:OceaniaFlags  Asia:AsiaFlags
    if (flagsObj) flags=flagsObj;
    else flags = document.getElementById("flags");
    if (region == "NorthAmerica")
        flags.innerHTML = decodeURIComponent(NAFlags["flags"]);
    else if (region == "SouthAmerica")
        flags.innerHTML = decodeURIComponent(SAFlags["flags"]);
    else if (region == "Africa")
        flags.innerHTML = decodeURIComponent(AfricaFlags["flags"]);
    else if (region == "Europe")
        flags.innerHTML = decodeURIComponent(EuropeFlags["flags"]);
    else if (region == "Asia")
        flags.innerHTML = decodeURIComponent(AsiaFlags["flags"]);
    else if (region == "Oceania")
        flags.innerHTML = decodeURIComponent(OceaniaFlags["flags"]);
    setTheFlags(region);
}

function mapStateSelected(stateCode, stateName, stateFlagName)
{
    if (stateCode) // stateCode is the Name in JSON for the state feature objects
    {
        // mapdata.js (Configuration) very small will be loaded before the map file
        var importedCountryConfiguration = document.createElement('script');
        importedCountryConfiguration.src = "js/USAStates/" + stateCode + "/mapdata.js";
        document.body.appendChild(importedCountryConfiguration);
        // this is the map file, it takes time for some of the countries
        var importedCountryMap = document.createElement('script');
        // define the function it will run when it is ready (onload)
        importedCountryMap.onload = function()
        {
            var mapState1=simplemaps_statemap.create();
            mapState1.load();
            // the Country Name to be displayed:
            document.getElementById("id_CountryFacts").innerHTML = stateName;
            // for now load State Map into each County: Should be a Photo related to the county
            for (var stateCountyTwoDigitsCode in mapState1.mapdata.state_specific)
            {
                (function(twoDigit, countryName)
                {
                    setTimeout(function()
                    {
                        mapState1.mapdata.state_specific[twoDigit].image_url
                            = "images/SVGUSStateFlags/Flag_of_" + countryName + ".svg";
                        mapState1.refresh_state(twoDigit);
                    }, .1);
                })(stateCountyTwoDigitsCode, stateFlagName);
            }
        }
        // set the source (where is what (name) file
        importedCountryMap.src = "js/USAStates/" + stateCode + "/statemap.js";
        // attach it to the element (make it a child)
        document.body.appendChild(importedCountryMap);
        stateIsShowing = true;
        retrieveAllFeaturesForThisCountry(stateCode);
    }
}

function mapFlagSelected(country)
{
    // From the Map Country click to the Flag click
    if (country)
    {
        for (var key in countryNameBayrakIndex)
        {
            if (countryNameBayrakIndex[key] == country)
            {
                triggerAMouseEvent("bayrak"+key);
            }
        }
    }
}

// SimpleMaps related Functions
function remove_name(id, skip_refresh) {
    var state=worldMap.mapdata.state_specific[id];
    state.name='<div></div>';
    if (!skip_refresh){
        worldMap.refresh_state(id);
    }
}

function show_name(id, skip_refresh) {
    var names=worldMap_mapinfo.names;
    worldMap.mapdata.state_specific[id].name=names[id];
    if (!skip_refresh){
        worldMap.refresh_state(id);
    }
}

function remove_all_names() {
    for (var id in worldMap.mapdata.state_specific) {
        remove_name(id, true);
    }
}

function show_all_names() {
    for (var id in worldMap.mapdata.state_specific) {
        show_name(id, true);
    }
}

function addPlaceHolderTextNow(oneCountryPanel, text, idPanel)
{
    // add a text to explain what the panel is for...
    var oneLine = document.createElement("p");
    oneLine.setAttribute("id", "id_Panel" + idPanel);
    oneLine.setAttribute("class", "whatThisPanelFor");
    oneLine.innerHTML = text;
    oneCountryPanel.appendChild(oneLine);
}

// eWorld Dashboard Ajax calls: Dynamic User Driven Queries
// (3) this is a dynamic data selection: Will alwyas be an AJAX call.
function retrieveOneSelection(selectionId, optionValue)
{
    if (optionValue.indexOf("Ascending") > 1) optionValue = optionValue.substring(0, 13);
    if (optionValue.indexOf("Descending") > 1) optionValue = optionValue.substring(0, 14);
    var xhttpOneSelectionCountries = new XMLHttpRequest(); // Ajax call to get the Countries with this Criteria: Data will be passed to the Server
    xhttpOneSelectionCountries.onreadystatechange = function() { // On Ready State Change
        if (xhttpOneSelectionCountries.readyState == 4 && xhttpOneSelectionCountries.status == 200) {
            if (xhttpOneSelectionCountries.responseText != "no row") {
                if (optionValue == "ListAscending" || optionValue == "ListDescending") { // return PHP string as a JSON object
                    var header = ((optionValue == "ListAscending")?selectedApplicationLanguageTexts["id_ListAscending"]:selectedApplicationLanguageTexts["id_ListDescending"])
                        + " " + selectedApplicationLanguageTexts["id_"+selectionId];
                    var countryIDArrayWithObjects = JSON.parse(xhttpOneSelectionCountries.responseText);
                    if (selectionId == "Color" || selectionId == "Shape" || selectionId == "Water" || selectionId == "Language" || selectionId == "Religion")
                        createATable("id_CountryListTable", ["Count", selectedApplicationLanguageTexts["id_" + selectionId],
                            selectedApplicationLanguageTexts["id_Country"]], countryIDArrayWithObjects, -999, "Object", header, false, 11);
                    else // only one field, location is important
                        createATable("id_CountryListTable", ["Count", selectedApplicationLanguageTexts["id_Country"],
                            selectedApplicationLanguageTexts["id_" + selectionId]], countryIDArrayWithObjects,[countrySelectableFeatureLocation[selectionId]], "", header, false, 11);
                    showReportPanel();
                }
                else {
                    var countryIDArrayWithObjects = JSON.parse(xhttpOneSelectionCountries.responseText);
                    // here create a JSON object: {"countryName":"CountryName", ..... }
                    var jsonFilteredCountryNames = {};
                    for (var key in countryIDArrayWithObjects) {
                        jsonFilteredCountryNames[countryIDArrayWithObjects[key]] = countryIDArrayWithObjects[key];
                    }
                    searchedSelectFieldsFilteredCountries[selectionId] = jsonFilteredCountryNames;
                }
            }
        }
    }
    xhttpOneSelectionCountries.open("GET", "/ajax/retrieveOneSelection?selectionId="
        + selectionId
        + "&optionValue="
        + optionValue, true);
    // xhttpOneSelectionCountries.setRequestHeader('X-CSRF-TOKEN', document.getElementsByName('csrf-token')[0].getAttribute('content'));
    // Start the Ajax Communication (calls PHP program through Route => Controller)
    xhttpOneSelectionCountries.send();
}

function h1TitleCodes(headerTag)
{
    /*
    * Create the Header with the Selected Application Text
    * <header id="id_Header"> the only Header HTML in <body>
    */
    if (headerTag) headerElement = headerTag;
    else headerElement = document.getElementById("id_Header");

    // Get the First Header which will be used as the Status
    h1First = document.createElement("H1");
    h1First.setAttribute("id", "errorOrStatus");
    if (dashBoardFlag) // Searching
        h1First.appendChild(getASpanElement("id_FirstMessage", myUndefined,selectedApplicationLanguageTexts["id_Searching"]));
    else // Surfing
        h1First.appendChild(getASpanElement("id_FirstMessage", myUndefined,selectedApplicationLanguageTexts["id_Surfing"]));
    headerElement.appendChild(h1First);
    // Header Input
    firstDivElement = document.createElement("div");
    firstDivElement.setAttribute("id", "firstDiv");
    firstDivElement.setAttribute("class", "center");
}

function simpleMapOneCountryMap(formDivElement)
{
    if (appleProduct) {
        createCountryInformationLabels(formDivElement, // Left Labels
            ["Language", "Population", "Overweight", "LifeExpectancy", "CapitalCities"],"marginPointPoint2Rem displayNone sharedLinkState");
    }
    else {
        createCountryInformationLabels(formDivElement, // Left Labels
            ["Language", "Population", "Religion", "LandArea", "Income", "Overweight", "LifeExpectancy", "CapitalCities", "CountryCodes", "Currency", "Water",
            "SexRatio", "SeatRatio","HDI", "Gini"],"marginPointPoint2Rem displayNone sharedLinkState");
    }

    regionMapDivElement = document.createElement("div"); // the Region Map: 2 of 3 <div> of mainWrapper <div>
    regionMapDivElement.setAttribute("id", "selectedFlagImageDiv");

    var selectedRegionImage = document.createElement("div");
    selectedRegionImage.setAttribute("id", "map1");
    regionMapDivElement.appendChild(selectedRegionImage);

    var selectedOneCountryTab = document.createElement("div"); // simplemaps one country map is here: Hidden up until a Country selected (clicked)
    selectedOneCountryTab.setAttribute("id", "mapTab");
    selectedOneCountryTab.setAttribute("class", "displayNone");
    var selectedOneCountryTabPanels = document.createElement("ul");
    selectedOneCountryTabPanels.setAttribute("class", "oneCountryPanel");

    addUlLiItems(selectedOneCountryTabPanels);
    selectedOneCountryTab.appendChild(selectedOneCountryTabPanels);

    addCountryTabPanels(selectedOneCountryTab);
    regionMapDivElement.appendChild(selectedOneCountryTab);
}

function addUlLiItems(selectedOneCountryTabPanels)
{
    selectedOneCountryTabPanels.appendChild(addOneLiItem("id_PanelOne", "countryPanel","id_PanelOneText", "oneCountryPanelSelectedTab"));
    selectedOneCountryTabPanels.appendChild(addOneLiItem("id_PanelTwo", "countryPanel","id_PanelTwoText", myUndefined));
    selectedOneCountryTabPanels.appendChild(addOneLiItem("id_PanelTwoOne", "countryPanel","id_PanelTwoOneText", myUndefined));
    selectedOneCountryTabPanels.appendChild(addOneLiItem("id_PanelThree", "countryPanel","id_PanelThreeText", myUndefined));
    selectedOneCountryTabPanels.appendChild(addOneLiItem("id_PanelFour", "countryPanel","id_PanelFourText", myUndefined));
    selectedOneCountryTabPanels.appendChild(addOneLiItem("id_PanelFive", "countryPanel","id_PanelFiveText", myUndefined));
    selectedOneCountryTabPanels.appendChild(addOneLiItem("id_PanelSix", "countryPanel","id_PanelSixText", myUndefined));
    selectedOneCountryTabPanels.appendChild(addOneLiItem("id_PanelSeven", "countryPanel","id_PanelSevenText", myUndefined));
    selectedOneCountryTabPanels.appendChild(addOneLiItem("id_PanelEight", "countryPanel","id_PanelEightText", myUndefined));
}

function addOneLiItem(liId, liClass,liTextId, liTextClass)
{
    var selectedOneCountryTabPanelItemOne = document.createElement("li");
    selectedOneCountryTabPanelItemOne.setAttribute("id", liId);
    selectedOneCountryTabPanelItemOne.setAttribute("class", liClass);
    selectedOneCountryTabPanelItemOne.appendChild(getASpanElement(liTextId, liTextClass,selectedApplicationLanguageTexts[liTextId]));
    return selectedOneCountryTabPanelItemOne;
}

function addCountryTabPanels(selectedOneCountryTab)
{
    oneCountryPanelOne = document.createElement("div");
    oneCountryPanelOne.setAttribute("id", "map");
    selectedOneCountryTab.appendChild(oneCountryPanelOne);

    addOnePanel(selectedOneCountryTab,"PanelTwo","displayNone","WIP: Who made a Difference? Information and the links will be here!","id_WikiIframe");
    addOnePanel(selectedOneCountryTab,"PanelTwoOne","displayNone","WIP: Children are the future. What are the status of the Children?","id_CiaIframe");
    addOnePanel(selectedOneCountryTab,"PanelThree","displayNone","WIP: Recommended Songs for all ages", "id_UNIframe");
    addOnePanel(selectedOneCountryTab,"PanelFour","displayNone","WIP: Who Are We?", "id_TravelWarningIframe");
    addOnePanel(selectedOneCountryTab,"PanelFive","displayNone","WIP: What are the loved Dogs, Birds, Domestic and Wild Animals?");
    addOnePanel(selectedOneCountryTab,"PanelSix","displayNone","WIP: Where should We Shop?");
    addOnePanel(selectedOneCountryTab,"PanelSeven","displayNone","WIP: What should We Eat?");
    addOnePanel(selectedOneCountryTab,"PanelEight","displayNone","WIP: How Liveable is Our Place? How Can we Improve our Living?");
}

function addOnePanel(selectedOneCountryTab,idPanel,classPanel,panelText,iframeID)
{
    var oneCountryPanel = document.createElement("div");
    oneCountryPanel.setAttribute("id", idPanel); // Keep first letter Uppercase, will come from id_Panel###Text
    oneCountryPanel.setAttribute("class", classPanel);
    addPlaceHolderTextNow(oneCountryPanel, panelText, idPanel);
    if (iframeID)
    {
        var wikiCountryIframe = document.createElement("iframe");
        wikiCountryIframe.setAttribute("id", iframeID);
        wikiCountryIframe.setAttribute("class", "tabPanelIframe");
        oneCountryPanel.appendChild(wikiCountryIframe);
    }
    selectedOneCountryTab.appendChild(oneCountryPanel);
}

function rightLabelAndMainElementCodes(flagControllDivElement, mainElement, formDivElement)
{
    // Right Labels
    if (appleProduct) {
        createCountryInformationLabels(flagControllDivElement,
            ["TravelWarning", "TimeAndDate", "GoogleMap", "Tourism", "UNCountry"],"marginPointPoint2Rem displayNone sharedLinkState");
    }
    else {
        createCountryInformationLabels(flagControllDivElement,
            ["DrivingSide", "CleanWater", "CleanToilet", "Cell", "RandD", "Internet", "TravelWarning", "TimeAndDate", "GoogleMap", "Government", "Tourism", "Weather",
              "WikiCountry", "CIACountry", "UNCountry"],"marginPointPoint2Rem displayNone sharedLinkState");
    }

    mainElement.appendChild(formDivElement);
    mainElement.appendChild(regionMapDivElement);
    mainElement.appendChild(flagControllDivElement);
}

function setReportingMedia()
{
    // Report Panel is here: Hidden up until a Report Type (Select/Option Drop-Down Box) selected
    var selectedOneReportPanel = document.createElement("div");
    selectedOneReportPanel.setAttribute("id", "reportPanel");
    selectedOneReportPanel.setAttribute("class", "displayNone");
    var selectedOneReportPanelLabel = document.createElement("p");
    selectedOneReportPanelLabel.setAttribute("id", "reportPanelLabel");
    selectedOneReportPanelLabel.appendChild(getASpanElement("id_ReportPanelLabel", "displayNone","-"));
    var reportPanelMediaOut = document.createElement("div");
    var reportHeaderParagraph = document.createElement("h3");
    reportHeaderParagraph.setAttribute("id", "id_ReportHeaderParagraph");
    reportHeaderParagraph.setAttribute("class", "appLanguageSel");
    reportHeaderParagraph.innerHTML = "-";
    reportPanelMediaOut.appendChild(reportHeaderParagraph);
    var reportPanelMedia = document.createElement("div");
    reportPanelMedia.setAttribute("id", "id_CountryListDiv");
    var reportPanelMediaTable = document.createElement("table");
    reportPanelMediaTable.setAttribute("id", "id_CountryListTable");
    reportPanelMediaTable.setAttribute("class", "displayNone");
    reportPanelMedia.appendChild(reportPanelMediaTable);
    selectedOneReportPanelLabel.appendChild(reportPanelMediaOut);
    selectedOneReportPanelLabel.appendChild(reportPanelMedia);
    selectedOneReportPanel.appendChild(selectedOneReportPanelLabel);
    regionMapDivElement.appendChild(selectedOneReportPanel);
}
