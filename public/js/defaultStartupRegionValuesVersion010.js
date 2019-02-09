"use strict";

// These static variables and their data will be only used once at the very first startup

// USA-English is an Application Start UP default, If no different in the Local Storage will be used in the initial DOM creation
var USAENGLISHAPPLICATIONLANGUAGETEXT =
JSON.parse('{"id_Required":"required","id_World":"World","id_Africa":"Africa","id_Asia":"Asia","id_Europe":"Europe","id_Income":"Income",' +
'"id_IncomeDisplay":"Income","id_DrivingSideDisplay":"Driving Side","id_DrivingSide":"Driving Side","id_WeatherDisplay":"Weather","id_SeatRatioDisplay":"Seat Ratio",' +
'"id_WikiCountryDisplay":"Wiki","id_CIACountryDisplay":"CIA","id_TravelWarningDisplay":"Travel Warning","id_SexRatio":"Sex Ratio","id_SexRatioDisplay":"Sex Ratio",' +
'"id_NorthAmerica":"North America","id_Oceania":"Oceania","id_SouthAmerica":"South America","id_Reports":"Reports","id_SeatRatio":"Seat Ratio","id_CellDisplay":"Cell Phone",' +
'"id_PopulationDisplay":"Population","id_Population":"Population","id_Color2nd":"Color 2","id_TimeAndDateDisplay":"Date & Time","title_soundOnOffIconPause":"Pause",' +
'"id_CountryCodesDisplay":"Codes","id_CurrencyDisplay":"Currency","id_GiniDisplay":"Equality","id_HDIDisplay":"Development","id_Religiosity":"Religiosity",' +
'"id_WaterDisplay":"Water","id_Water":"Water","id_TextLanguages":"Text Languages","id_Color":"Color 1","id_Shape":"Shape 1","id_LanguageDisplay":"Language",' +
'"id_Language":"Language","id_DataLanguages":"Data Languages","id_AboutMe":"About","id_Reset":"Reset","id_CombineSearchText":"Combine",' +
'"id_Return":"Return","id_DrillDown":"Drill Down","id_Color3rd":"Color 3","id_CapitalCities":"Capital","id_PlaySound":"Pause","id_CombineSearchNone":"None",' +
'"id_FirstMessage":"World","id_Register":"Startup","id_OverweightDisplay":"Overweight","id_Overweight":"Overweight","title_soundOnOffIconPlay":"Play",' +
'"id_LifeExpectancyDisplay":"Life","id_LifeExpectancy":"Life","id_CombineSearchOr":"Or","id_CombineSearchAnd":"And","id_LandAreaDisplay":"Surface Area",' +
'"id_LandArea":"Surface Area","id_ConfigureLegend":"Configure","id_Shape2nd":"Shape 2","id_RegisterUser":"Register Me","id_ChooseOne":"Choose one...",' +
'"id_LanguageImplementedBy":"USA English is implemented by Mehmet F. Erten","id_GoogleMapDisplay":"Google Map","id_Billions":"Billions","title_SaveStartupValues":"Save",' +
'"id_Millions":"Millions","id_Thousands":"Thousands","id_Citations":"Citations","id_CountryFacts":"NorthAmerica","id_TourismDisplay":"Tourism",' +
'"id_GovernmentDisplay":"Government","id_RegionLegend":"Region","id_Upgraded":"Upgraded into the New Version, Please Continue.","title_CombineSearchOr":"Or",' +
'"id_Cell":"Cell Phone","id_Internet":"Internet","id_RandD":"R&D","id_CleanWater":"Potable Water","id_CleanToilet":"Clean Restroom","title_CombineSearchNone":"None",' +
'"id_InternetDisplay":"Internet","id_CleanWaterDisplay":"Potable Water","title_CombineSearchAnd":"And","id_RandDDisplay":"R&D",' +
'"id_SmallEntityText":"Please Use the Google Map (right bottom button) for the Small Entities!","id_Country":"Country","id_CombineSearchReverse":"Reverse",' +
'"id_ReligionDisplay":"Religion","id_Religion":"Religion","id_Shape3rd":"Shape 3","id_UNCountryDisplay":"UN","id_PanelOneText":"Map","id_Regions":"Regions",' +
'"id_PanelTwoText":"Made a difference","id_PanelThreeText":"Music","id_PanelFourText":"People","id_PanelFiveText":"Animals","id_PanelSixText":"Shopping",' +
'"id_PanelSevenText":"Food","id_PanelEightText":"Liveability","id_PanelTwoOneText":"Children","id_ListAscending":"List Ascending","id_ListDescending":"List Descending",' +
'"title_CombineSearchReverse":"Reverse","id_Menu":"Nice to Meet the World","id_CountryCodes":"World Country Codes","id_CountryList":"World Countries",' +
'"id_StartWith":"Start with","id_Searching":"World","id_CleanToiletDisplay":"Clean Restroom","id_CapitalCitiesDisplay":"Capital","id_MenuStart":"Nice to Meet the World",' +
'"id_Surfing":"World Regions","id_ElementarySchool":"Elementary School","id_MiddleSchool":"Middle School","id_HighSchool":"High School","id_College":"College",' +
'"id_Please":"Please","id_SelectQuestion":"Ask a Question","id_FromCategory":"From the Categories","id_ShowAnswer":"Show the Answer","id_ShowCountry":"Show the Country",' +
'"id_AnthemApple":"Anthem","id_GreetingApple":"Greeting","id_Countries":"World Countries","id_Save":"Save","id_DataLanguages_Ii18n":"World Languages",' +
'"id_LanguagePlaceHolder":"- Please Select a Country and a Language -","id_AmericanEnglish":"USA English","id_AmericanEnglishInOtherLanguage":"Translated Text",' +
'"id_EWorldMagic":"www.K12K20.com Got the Magic, Thanks to","id_InteractiveMaps":"for the Interactive Maps","id_CountryInformation":"for the Country Facts",' +
'"id_SVGNationalFlags":"for the SVG National Flags","id_NationalAnthem":"for the National Anthems","id_LinuxServer":"for the Linux Server","id_AppLanguageToUseB":"Application Language",' +
'"id_WebServer":"for the Web Server","id_MailServer":"for the Mail Server","id_WorldFactsCia":"for the World Facts","id_WorldFactsWiki":"for the World Facts",' +
'"id_HowItWorks":"How it works?","id_TechnologiesTitle":"Technologies","id_HowTechnologiesUsed":' +
'"How the Technologies are Used?","id_InternationalizationI18n":"Internationalization(i18n)","id_And":"And","id_Or":"Or",' +
'"Flag Color":"Flag Color","Second Flag Color":"Second Flag Color","Third Flag Color":"Third Flag Color","Flag Shape":"Flag Shape","Second Flag Shape":"Second Flag Shape",' +
'"Third Flag Shape":"Third Flag Shape","Cellular Phone":"Cellular Phone","Language Name":"Language","Population Name":"Population","Income - GDP":"Income - GDP",' +
'"Overweight Ratio %":"Overweight Ratio %","Life Expectancy":"Life Expectancy","Internet Usage %":"Internet Usage %","R & D per GDP%":"R & D per GDP%",' +
'"Clean Drinking Water %":"Clean Drinking Water %","Clean Toilet Facility %":"Clean Toilet Facility %","Capital Cities":"Capital Cities","Surface Area":"Surface Area",' +
'"Oceans, Seas or Lakes":"Oceans, Seas or Lakes","Religion Name":"Religion","Driving Side":"Driving Side","Sex Ratio M per 100 F":"Sex Ratio M per 100 F",' +
'"Seats Held By Women %" : "Seats Held By Women %",' +
'"id_AboutTextOne":"- www.K12K20.com is a Web activity sand-box, a programming boot-camp and aims at being a community service while an educational web application.",' +
'"id_AboutTextTwo":'+
'"- It is both client and server centric. The Web Browser Local Storage is in use together with the PHP/Laravel/Eloquent and Java/Spring MVC/Hibernate web server features.",' +
'"id_AboutTextThree":"- CSS Grid Layout integrated with Flexbox.","id_MenuUsage":"Menu","id_Basics":"Basics","id_CountryThText":"Country","id_IncomeThText":"Income",' +
'"id_RegionThText":"Region","id_CapitalThText":"Capital","id_PopulationThText":"Population","id_SurfaceThText":"Surface","id_LargestThText":"Largest","id_Right":"Right",' +
'"id_Left":"Left","id_Women":"Women","id_AboutTextFour":' +
'"- The internationalization (i18n) as the core of the community service has been designed not just for the Application Web Page Text language but the very Data language, too.",' +
'"id_Country CodesThText":"Country Codes","id_AboutTextFive":"- The implementation of the Accessibility features is a gradual goal to accomplish."}');

// North America Region Lists
var NORTHAMERICANFLAGOFCOUNTRIES = ["Anguilla","AntiguaandBarbuda","Bahamas","Barbados","Belize","Bermuda","BonaireSintEustatiusandSaba","BritishVirginIslands",
"Canada","CaymanIslands","CostaRica","Cuba","Curacao","Dominica","DominicanRepublic","ElSalvador","Greenland","Grenada","Guadeloupe","Guatemala","Haiti",
"Honduras","Jamaica","Martinique","Mexico","Montserrat","Nicaragua","Panama","PuertoRico","SaintBarthelemy","SaintKittsandNevis","SaintLucia","SaintMartin",
"SaintPierreandMiquelon","SaintVincentandGrenadines","SintMaarten","TrinidadandTobago","TurksandCaicosIslands","UnitedStatesofAmerica","UnitedStatesVirginIslands"];

var NORTHAMERICANLANGUAGEOFCOUNTRIES = JSON.parse('{"Anguilla":"English","AntiguaandBarbuda":"English","Bahamas":"English","Barbados":"English","Belize":"English","Bermuda":"English",' +
        '"BonaireSintEustatiusandSaba":"Dutch","BritishVirginIslands":"English","Canada":"English","CaymanIslands":"English","CostaRica":"Spanish","Cuba":"Spanish","Curacao":"Dutch",' +
        '"Dominica":"English","DominicanRepublic":"Spanish","ElSalvador":"Spanish","Greenland":"Greenlandic","Grenada":"English","Guadeloupe":"French","Guatemala":"Spanish",' +
        '"Haiti":"French","Honduras":"Spanish","Jamaica":"English","Martinique":"French","Mexico":"Spanish","Montserrat":"English","Nicaragua":"Spanish","Panama":"Spanish",' +
        '"PuertoRico":"Spanish","SaintBarthelemy":"French","SaintKittsandNevis":"English","SaintLucia":"English","SaintMartin":"French","SaintPierreandMiquelon":"French",' +
        '"SaintVincentandGrenadines":"English","SintMaarten":"Dutch","TrinidadandTobago":"English","TurksandCaicosIslands":"English",' +
        '"UnitedStatesofAmerica":"English","UnitedStatesVirginIslands":"English"}');

var NORTHAMERICANFLAGOFCOUNTRIESFULLNAME =
["Anguilla","Antigua and Barbuda","Bahamas","Barbados","Belize","Bermuda","Bonaire Sint Eustatius and Saba","British Virgin Islands","Canada","Cayman Islands","Costa Rica",
"Cuba","Curaçao","Dominica","Dominican Republic","El Salvador","Greenland","Grenada","Guadeloupe","Guatemala","Haiti","Honduras","Jamaica","Martinique","Mexico",
"Montserrat","Nicaragua","Panama","Puerto Rico","Saint Barthélemy","St. Kitts & Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon",
"Saint Vincent and the Grenadines","Sint Maarten","Trinidad and Tobago","Turks and Caicos Islands","United States","United States Virgin Islands"];
