"use strict";

var DEFAULTREGIONAPPLICATIONLANGUAGE = "appLanguageToUseOption2";
var DEFAULTREGIONAPPLICATIONCOUNTRYANDLANGUAGE = "Turkish-Turkey";
var DEFAULTREGION = "Europe";
var DEFAULTCOUNTRY = "Turkey";
var DEFAULTLANGUAGE = "Türkçe";
var DEFAULTURL = "http://www.k12k20tr.com";

//  Keep Adding new Application Languages (both Text and Data)
var selectedApplicationLanguageName = {"English (US)":["İngilizce", "UnitedStatesofAmerica", "http://www.k12k20.com"],
    "Slovak":["Slovakça", "Slovakia", "http://www.k12k20sk.com"]};

// DEFAULT REGION Application Start UP Values which will be used to load into Local Storage Area
// console.log(encodeURIComponent(JSON.stringify(selectedApplicationLanguageTexts))) and encodeURIComponent(JSON.stringify(languageOfCountries)
// and JSON.parse(decodeURIComponent("%7B%22Flag%20Colo
// others are Arrays: Console.log(flagOfCountries);  console.log(flagOfCountriesFullName); console.log(languageOfCountries);
var DEFAULTREGIONAPPLICATIONLANGUAGETEXT = JSON.parse(decodeURIComponent("%7B%22Flag%20Color%22%3A%22Bayrak%20Rengi%22%2C%22Second%20Flag%20Color%22%3A%22%5Cu0130kinci%20Bayrak%20Rengi%22%2C%22Third%20Flag%20Color%22%3A%22%5Cu00dc%5Cu00e7%5Cu00fcnc%5Cu00fc%20Bayrak%20Rengi%22%2C%22Flag%20Shape%22%3A%22Bayrak%20%5Cu015eekli%22%2C%22Second%20Flag%20Shape%22%3A%22%5Cu0130kinci%20Bayrak%20%5Cu015eekli%22%2C%22Third%20Flag%20Shape%22%3A%22%5Cu00dc%5Cu00e7%5Cu00fcnc%5Cu00fc%20Bayrak%20%5Cu015eekli%22%2C%22Cellular%20Phone%22%3A%22Cep%20Telefon%22%2C%22Language%20Name%22%3A%22Dil%22%2C%22Population%20Name%22%3A%22N%5Cu00fcfus%22%2C%22Religion%20Name%22%3A%22Din%22%2C%22Income%20-%20GDP%22%3A%22Gelir%20-%20ArGe%22%2C%22Overweight%20Ratio%20%25%22%3A%22%5Cu015ei%5Cu015fkoluk%20Oran%5Cu0131%22%2C%22Life%20Expectancy%22%3A%22%5Cu00d6m%5Cu00fcr%22%2C%22Internet%20Usage%20%25%22%3A%22%5Cu0130nternet%20Kullan%5Cu0131m%5Cu0131%22%2C%22R%20%26%20D%20per%20GDP%25%22%3A%22Ar-Ge'nin%20Gelire%20Oran%5Cu0131%22%2C%22Clean%20Drinking%20Water%20%25%22%3A%22Temiz%20%5Cu0130%5Cu00e7me%20Suyu%22%2C%22Clean%20Toilet%20Facility%20%25%22%3A%22Temiz%20Tuvalet%22%2C%22Capital%20Cities%22%3A%22Ba%5Cu015fkent%22%2C%22Surface%20Area%22%3A%22Y%5Cu00fcz%5Cu00f6lc%5Cu00fcm%5Cu00fc%22%2C%22Oceans%2C%20Seas%20or%20Lakes%22%3A%22Okyanus%2C%20Deniz%20ve%20G%5Cu00f6ller%22%2C%22Driving%20Side%22%3A%22S%5Cu00fcr%5Cu00fc%5Cu015f%20taraf%5Cu0131%22%2C%22Sex%20Ratio%20M%20per%20100%20F%22%3A%22100%20Kad%5Cu0131na%20ka%5Cu00e7%20Erkek%22%2C%22Seats%20Held%20By%20Women%20%25%22%3A%22Kad%5Cu0131nlar%5Cu0131n%20Mecliste%20Oran%5Cu0131%22%2C%22id_ReverseImage%22%3A%22Tersinden%20se%5Cu00e7im%20g%5Cu00f6r%5Cu00fcnt%5Cu00fcs%5Cu00fc%20%22%2C%22id_CleanWaterDM%22%3A%22Temiz%20su%20i%5Cu00e7ebilen%20n%5Cu00fcfusun%20%25%20oran%5Cu0131%3Cp%3EBirle%5Cu015fmis%20Milletler%20(BM)%20Environment%20(%5Cu00e7evre)%20ve%20infrastructure%20(altyap%5Cu0131)%20g%5Cu00f6stergeleri%20b%5Cu00f6lum%5Cu00fc%22%2C%22id_CleanToiletDM%22%3A%22Temiz%20Tuvalet%20kullabilen%20n%5Cu00fcfusun%20%25%20oran%5Cu0131%3Cp%3EBirle%5Cu015fmis%20Milletler%20(BM)%20Environment%20(%5Cu00e7evre)%20ve%20infrastructure%20(altyap%5Cu0131)%20g%5Cu00f6stergeleri%20b%5Cu00f6lum%5Cu00fc%22%2C%22id_CellDM%22%3A%22Her%20y%5Cu00fcz%20kiside%20olan%20Cep%20telefon%20say%5Cu0131s%5Cu0131%3Cp%3EBirle%5Cu015fmis%20Milletler%20(BM)%20Environment%20(%5Cu00e7evre)%20ve%20infrastructure%20(altyap%5Cu0131)%20g%5Cu00f6stergeleri%20b%5Cu00f6lum%5Cu00fc%22%2C%22id_RandDDM%22%3A%22Research%20(Ara%5Cu015ft%5Cu0131rma)%20%26%20Development%20(Geli%5Cu015ftirme)%20expenditure%20(harcamas%5Cu0131)%3Cp%3E--%20%25%20of%20GDP%20(Y%5Cu0131ll%5Cu0131k%20Toplam%20Gelir)%3Cp%3EEnvironment%20(%5Cu00e7evre)%20ve%20infrastructure%20(altyap%5Cu0131)%20g%5Cu00f6stergeleri%20b%5Cu00f6lum%5Cu00fc%22%2C%22id_InternetDM%22%3A%22Individuals%20using%20the%20Internets%3Cp%3E--%20per%20100%20inhabitants%3Cp%3EBirle%5Cu015fmis%20Milletler%20(BM)%20Environment%20(%5Cu00e7evre)%20ve%20infrastructure%20(altyap%5Cu0131)%20g%5Cu00f6stergeleri%20b%5Cu00f6lum%5Cu00fc%22%2C%22id_SexRatioDM%22%3A%22Kad%5Cu0131n%20oran%5Cu0131%3Cp%3E--%20her%20y%5Cu00fcz%20kad%5Cu0131na%20ka%5Cu00e7%20erkek%20var%2C%202017%3Cp%3EBirle%5Cu015fmis%20Milletler%20(BM)%20General%20Information%20(Genel%20Bilgi%20b%5Cu00f6lum%5Cu00fc)%22%2C%22id_SeatRatioDM%22%3A%22Millet%20Meclisinde%20Kad%5Cu0131n%20Vekillerin%20y%5Cu00fczde%20oran%5Cu0131%3Cp%3E--%20%25%3Cp%3EBirle%5Cu015fmis%20Milletler%20(BM)%20Social%20(Toplumsal)%20g%5Cu00f6stergeler%20b%5Cu00f6lum%5Cu00fc%22%2C%22id_HDIDM%22%3A%22%5Cu0130nsani%20Geli%5Cu015fmi%5Cu015flik%20Olc%5Cu00fcs%5Cu00fc%3A%20Human%20Development%20Index%20(HDI)%3Cp%3EUzun%20ve%20sa%5Cu011fl%5Cu0131kl%5Cu0131%20bir%20ya%5Cu015fam%2C%20zihinsel%20ayd%5Cu0131nlanm%5Cu0131%5Cu015f%20ve%3Cp%3Esayg%5Cu0131n%20bir%20ya%5Cu015fam%20bi%5Cu00e7imi.%22%2C%22id_GiniDM%22%3A%22Aile%20gelirinin%20da%5Cu011f%5Cu0131l%5Cu0131m%5Cu0131...%3Cp%3ES%5Cu0131f%5Cu0131r%3A%20En%20iyi%2C%20Y%5Cu00fcz%3A%20En%20k%5Cu00f6t%5Cu00fc%22%2C%22id_CountryCodesDM%22%3A%22ISO%202%20and%203%3Cp%3ETelefon%20%5Cu00fclke%20say%5Cu0131s%5Cu0131%20and%20GEO%22%2C%22id_And%22%3A%22Ve%22%2C%22id_Or%22%3A%22Veya%22%2C%22id_Right%22%3A%22Sa%5Cu011f%22%2C%22id_Left%22%3A%22Sol%22%2C%22id_Women%22%3A%22Kad%5Cu0131n%22%2C%22id_CountryThText%22%3A%22%5Cu00dclke%22%2C%22id_IncomeThText%22%3A%22Gelir%22%2C%22id_RegionThText%22%3A%22B%5Cu00f6lge%22%2C%22id_CapitalThText%22%3A%22Ba%5Cu015fkent%22%2C%22id_PopulationThText%22%3A%22N%5Cu00fcfus%22%2C%22id_SurfaceThText%22%3A%22Y%5Cu00fcz%5Cu00f6l%5Cu00e7%5Cu00fcm%5Cu00fc%22%2C%22id_LargestThText%22%3A%22En%20b%5Cu00fcy%5Cu00fck%22%2C%22id_Country%20CodesThText%22%3A%22%5Cu00dclke%20Simgeleri%22%2C%22id_HowItWorks%22%3A%22Nas%5Cu0131l%20i%5Cu015fliyor%3F%22%2C%22id_Basics%22%3A%22Temeller%22%2C%22id_TechnologiesTitle%22%3A%22Teknolojiler%22%2C%22id_HowTechnologiesUsed%22%3A%22Teknolojiler%20nas%5Cu0131l%20kullan%5Cu0131ld%5Cu0131%3F%22%2C%22id_InternationalizationI18n%22%3A%22D%5Cu00fcnya%20Dilleri%20Kullan%5Cu0131m%5Cu0131%22%2C%22id_AboutTextOne%22%3A%22-%20www.K12K20.com%20hem%20bir%20yaz-boz%20hemde%20yaz%5Cu0131l%5Cu0131m%20deneme%20tahtas%5Cu0131%20olarak%20bir%20toplumsal%20e%5Cu011fitim%20ve%20kamu%20hizmeti%20olmay%5Cu0131%20hedefledi.%22%2C%22id_AboutTextTwo%22%3A%22-%20Hem%20al%5Cu0131c%5Cu0131%20hemde%20verici%20merkezli%20olarak%2C%20Web%20Vericinin%20%5C%22local%20storage%5C%22%20ile%20PHP%5C%2FLaravel%5C%2FEloquent%20ve%20Java%5C%2FSpring%20MVC%5C%2FHibernate%20web%20verici%20ozelliklerini%20ayn%5Cu0131%20anda%20kullan%5Cu0131yor.%22%2C%22id_AboutTextThree%22%3A%22-%20CSS%20Grid%20Layout%20ve%20Flexbox%20birlikte%20kullan%5Cu0131d%5Cu0131.%22%2C%22id_AboutTextFour%22%3A%22-%20D%5Cu00fcnya%20Dilleri%20Kullan%5Cu0131m%5Cu0131%20gerek%20yaz%5Cu0131l%5Cu0131m%5Cu0131n%20g%5Cu00f6r%5Cu00fcnt%5Cu00fcs%5Cu00fcnde%20gerekse%20bilgilerin%20kendisinde%20bir%20B%5Cu00fct%5Cu00fcn%20olarak%20kurumsallast%5Cu0131r%5Cu0131ld%5Cu0131%22%2C%22id_AboutTextFive%22%3A%22-%20G%5Cu00f6rme%20ve%5C%2Fveya%20i%5Cu015fitme%20engellileri%20i%5Cu00e7in%20var%20olan%20teknolijiler%20%5Cu00f6zenle%20uyguland%5Cu0131.%22%2C%22id_DataLanguages_Ii18n%22%3A%22D%5Cu00fcnya%20Dilleri%22%2C%22id_LanguagePlaceHolder%22%3A%22-%20L%5Cu00fctfen%20bir%20%5Cu00dclke%20ve%20konu%5Cu015ftuklar%5Cu0131%20Dili%20se%5Cu00e7in%20-%22%2C%22id_AmericanEnglish%22%3A%22Amerika%20%5Cu0130ngilizcesi%22%2C%22id_AmericanEnglishInOtherLanguage%22%3A%22Se%5Cu00e7ilen%20Dile%20Terc%5Cu00fcmesi%22%2C%22id_EWorldMagic%22%3A%22K12K20.com%20B%5Cu00fcy%5Cu00fcs%5Cu00fcn%5Cu00fc%20sizler%20ile%20kazand%5Cu0131%2C%20Te%5Cu015fekk%5Cu00fcrler%22%2C%22id_InteractiveMaps%22%3A%22Canl%5Cu0131%20SVG%20Haritalar%5Cu0131%22%2C%22id_CountryInformation%22%3A%22%5Cu00dclke%20Bilgileri%22%2C%22id_SVGNationalFlags%22%3A%22%5Cu00dclke%20SVG%20Bayraklar%5Cu0131%22%2C%22id_NationalAnthem%22%3A%22%5Cu00dclke%20Milli%20Mar%5Cu015flar%5Cu0131%22%2C%22id_LinuxServer%22%3A%22Linux%20Merkez%20Verici%22%2C%22id_WebServer%22%3A%22Web%20Merkez%20Verici%22%2C%22id_MailServer%22%3A%22ePosta%20Merkez%20Verici%22%2C%22id_WorldFactsCia%22%3A%22D%5Cu00fcnya%20Bilgileri%22%2C%22id_WorldFactsWiki%22%3A%22D%5Cu00fcnya%20Bilgileri%22%2C%22id_Required%22%3A%22gerekli%22%2C%22id_Save%22%3A%22Kay%5Cu0131tla%22%2C%22id_World%22%3A%22D%5Cu00fcnya%22%2C%22id_Regions%22%3A%22B%5Cu00f6lgeler%22%2C%22id_Africa%22%3A%22Afrika%22%2C%22id_Asia%22%3A%22Asya%22%2C%22id_Europe%22%3A%22Avrupa%22%2C%22id_NorthAmerica%22%3A%22Kuzey%20Amerika%22%2C%22id_Oceania%22%3A%22Okyanusya%22%2C%22id_SouthAmerica%22%3A%22G%5Cu00fcney%20Amerika%22%2C%22id_Religiosity%22%3A%22Dinseverlik%22%2C%22id_Color%22%3A%22Renk%201%22%2C%22id_Color2nd%22%3A%22Renk%202%22%2C%22id_Color3rd%22%3A%22Renk%203%22%2C%22id_Shape%22%3A%22%5Cu015eekil%201%22%2C%22id_Shape2nd%22%3A%22%5Cu015eekil%202%22%2C%22id_Shape3rd%22%3A%22%5Cu015eekil%203%22%2C%22id_Cell%22%3A%22Cep%20Telefon%22%2C%22id_Internet%22%3A%22%5Cu0130nternet%22%2C%22id_RandD%22%3A%22Ar-Ge%22%2C%22id_CleanWater%22%3A%22Temiz%20Su%22%2C%22id_CleanToilet%22%3A%22Temiz%20Tuvalet%22%2C%22id_SexRatio%22%3A%22Cinsiyet%20Oran%5Cu0131%22%2C%22id_SeatRatio%22%3A%22Se%5Cu00e7ilmi%5Cu015f%20Oran%5Cu0131%22%2C%22id_SexRatioDisplay%22%3A%22Cinsiyet%20Oran%5Cu0131%22%2C%22id_SeatRatioDisplay%22%3A%22Se%5Cu00e7ilmi%5Cu015f%20Oran%5Cu0131%22%2C%22id_CellDisplay%22%3A%22Cep%20Telefon%22%2C%22id_InternetDisplay%22%3A%22%5Cu0130nternet%22%2C%22id_RandDDisplay%22%3A%22Ar-Ge%22%2C%22id_CleanWaterDisplay%22%3A%22Temiz%20Su%22%2C%22id_CleanToiletDisplay%22%3A%22Temiz%20Tuvalet%22%2C%22id_Overweight%22%3A%22%5Cu015ei%5Cu015fkoluk%22%2C%22id_OverweightDisplay%22%3A%22%5Cu015ei%5Cu015fkoluk%22%2C%22id_LifeExpectancy%22%3A%22%5Cu00d6m%5Cu00fcr%22%2C%22id_LifeExpectancyDisplay%22%3A%22%5Cu00d6m%5Cu00fcr%22%2C%22id_Population%22%3A%22N%5Cu00fcfus%22%2C%22id_Reports%22%3A%22Raporlar%22%2C%22id_PopulationDisplay%22%3A%22N%5Cu00fcfus%22%2C%22id_Language%22%3A%22Dil%22%2C%22id_LanguageDisplay%22%3A%22Dil%22%2C%22id_Religion%22%3A%22Dinler%22%2C%22id_ReligionDisplay%22%3A%22Dinler%22%2C%22id_CapitalCities%22%3A%22Ba%5Cu015fkentler%22%2C%22id_CapitalCitiesDisplay%22%3A%22Ba%5Cu015fkentler%22%2C%22id_CountryList%22%3A%22D%5Cu00fcnya%20%5Cu00dclkeri%22%2C%22id_Income%22%3A%22Gelir%22%2C%22id_Country%22%3A%22%5Cu00dclke%22%2C%22id_IncomeDisplay%22%3A%22Gelir%22%2C%22id_Water%22%3A%22Su%22%2C%22id_WaterDisplay%22%3A%22Su%22%2C%22id_LandArea%22%3A%22Y%5Cu00fcz%5Cu00f6l%5Cu00e7%5Cu00fcm%5Cu00fc%22%2C%22id_LandAreaDisplay%22%3A%22Y%5Cu00fcz%5Cu00f6l%5Cu00e7%5Cu00fcm%5Cu00fc%22%2C%22id_DrivingSide%22%3A%22S%5Cu00fcr%5Cu00fc%5Cu015f%20taraf%5Cu0131%22%2C%22id_DrivingSideDisplay%22%3A%22S%5Cu00fcr%5Cu00fc%5Cu015f%20taraf%5Cu0131%22%2C%22id_TourismDisplay%22%3A%22Turizm%22%2C%22id_GovernmentDisplay%22%3A%22H%5Cu00fck%5Cu00fcmet%22%2C%22id_WeatherDisplay%22%3A%22Hava%20Durumu%22%2C%22id_TravelWarningDisplay%22%3A%22Yolculuk%20%5Cu0130kaz%5Cu0131%22%2C%22id_WikiCountryDisplay%22%3A%22Wiki%22%2C%22id_CIACountryDisplay%22%3A%22CIA%22%2C%22id_UNCountryDisplay%22%3A%22Birle%5Cu015fmi%5Cu015f%20Milletler%22%2C%22id_TimeAndDateDisplay%22%3A%22Tarih%20ve%20Saat%22%2C%22id_CountryCodesDisplay%22%3A%22Simgeler%22%2C%22id_CountryCodes%22%3A%22D%5Cu00fcnya%20%5Cu00dclke%20Simgeleri%22%2C%22id_CurrencyDisplay%22%3A%22Para%20Birimi%22%2C%22id_GiniDisplay%22%3A%22%5Cu20ba%20Da%5Cu011f%5Cu0131l%5Cu0131m%22%2C%22id_HDIDisplay%22%3A%22Geli%5Cu015fim%22%2C%22id_GoogleMapDisplay%22%3A%22Google%20Harita%22%2C%22id_PlaySound%22%3A%22Durdur%22%2C%22id_SmallEntityText%22%3A%22L%5Cu00fctfen%20K%5Cu00fc%5Cu00e7%5Cu00fck%20Birimler%20i%5Cu00e7in%20Google%20Haritas%5Cu0131n%5Cu0131%20(en%20alt%20sa%5Cu011f%20d%5Cu00fc%5Cu011fme)%20kullan%5Cu0131n!%22%2C%22id_CombineSearchText%22%3A%22Birle%5Cu015fik%22%2C%22id_CombineSearchReverse%22%3A%22Tersi%22%2C%22id_CombineSearchNone%22%3A%22Hi%5Cu00e7%22%2C%22id_CombineSearchAnd%22%3A%22Ve%22%2C%22id_CombineSearchOr%22%3A%22Veya%22%2C%22title_CombineSearchReverse%22%3A%22Tersi%22%2C%22title_CombineSearchNone%22%3A%22Hi%5Cu00e7%22%2C%22title_CombineSearchAnd%22%3A%22Ve%22%2C%22title_CombineSearchOr%22%3A%22Veya%22%2C%22title_soundOnOffIconPause%22%3A%22Durdur%22%2C%22title_soundOnOffIconPlay%22%3A%22%5Cu00c7al%22%2C%22title_SaveStartupValues%22%3A%22Kay%5Cu0131tla%22%2C%22id_AnthemApple%22%3A%22Mar%5Cu015f%22%2C%22id_GreetingApple%22%3A%22Selam%22%2C%22id_DrillDown%22%3A%22%5Cu0130%5Cu00e7ine%20Gir%22%2C%22id_TextLanguages%22%3A%22Metin%20Dilleri%22%2C%22id_DataLanguages%22%3A%22Bilgi%20Dilleri%22%2C%22id_AboutMe%22%3A%22Yap%5Cu0131s%5Cu0131%3F%22%2C%22id_Reset%22%3A%22Tekrarla%22%2C%22id_Return%22%3A%22D%5Cu00f6n%22%2C%22id_FirstMessage%22%3A%22D%5Cu00fcnya%22%2C%22id_Surfing%22%3A%22B%5Cu00f6lgeler%22%2C%22id_Searching%22%3A%22D%5Cu00fcnya%22%2C%22id_Register%22%3A%22Ba%5Cu015flang%5Cu0131%5Cu00e7%22%2C%22id_RegisterUser%22%3A%22Beni%20Kay%5Cu0131tla%22%2C%22id_ChooseOne%22%3A%22Se%5Cu00e7%20birini...%22%2C%22id_LanguageImplementedBy%22%3A%22T%5Cu00fcrk%5Cu00e7e%20Mehmet%20F.%20Erten%20taraf%5Cu0131ndan%20uygulanm%5Cu0131%5Cu015ft%5Cu0131r%22%2C%22id_Billions%22%3A%22Milyar%22%2C%22id_Millions%22%3A%22Milyon%22%2C%22id_Thousands%22%3A%22Bin%22%2C%22id_Citations%22%3A%22Al%5Cu0131nt%5Cu0131lar%22%2C%22id_CountryFacts%22%3A%22D%5Cu00fcnya%22%2C%22id_Upgraded%22%3A%22%5Cu00dclkeyi%20Bil%20Yenilendi%2C%20l%5Cu00fctfen%20devam%20edin%22%2C%22id_PanelOneText%22%3A%22Harita%22%2C%22id_PanelTwoText%22%3A%22Fark%20Yaratan%22%2C%22id_PanelTwoOneText%22%3A%22%5Cu00c7ocuklar%22%2C%22id_PanelThreeText%22%3A%22M%5Cu00fczik%22%2C%22id_PanelFourText%22%3A%22Halk%22%2C%22id_PanelFiveText%22%3A%22Hayvanlar%22%2C%22id_PanelSixText%22%3A%22Pazar%22%2C%22id_PanelSevenText%22%3A%22G%5Cu0131da%22%2C%22id_PanelEightText%22%3A%22Ya%5Cu015fan%5Cu0131rl%5Cu0131k%22%2C%22id_ListAscending%22%3A%22Artan%20Liste%22%2C%22id_ListDescending%22%3A%22Azalan%20Liste%22%2C%22id_EMail%22%3A%22E-posta%20Adresi%22%2C%22id_ElementarySchool%22%3A%22%5Cu0130lk%20Okul%22%2C%22id_MiddleSchool%22%3A%22Orta%20Okul%22%2C%22id_HighSchool%22%3A%22Lise%22%2C%22id_College%22%3A%22%5Cu00dcniversite%22%2C%22id_Please%22%3A%22L%5Cu00fctfen%22%2C%22id_SelectQuestion%22%3A%22Bir%20Soru%20Se%5Cu00e7in%22%2C%22id_FromCategory%22%3A%22Soru%20Kategorileri%20Sa%5Cu011f%20ve%20Solda%22%2C%22id_ShowAnswer%22%3A%22Cevab%5Cu0131%20G%5Cu00f6ster%22%2C%22id_ShowCountry%22%3A%22%5Cu00dclkeyi%20G%5Cu00f6ster%22%2C%22id_StartWith%22%3A%22Bununla%20ba%5Cu015fla%22%2C%22id_AppLanguageToUseB%22%3A%22Sistem%20Dili%22%2C%22id_Menu%22%3A%22D%5Cu00fcnyam%5Cu0131z%20ile%20Tan%5Cu0131%5Cu015fal%5Cu0131m%22%2C%22id_MenuStart%22%3A%22D%5Cu00fcnyam%5Cu0131z%20ile%20Tan%5Cu0131%5Cu015fal%5Cu0131m%22%2C%22id_MenuUsage%22%3A%22Men%5Cu00fc%22%2C%22id_Countries%22%3A%22%5Cu00dclkeler%22%7D"));

var sixRegionsValues = [  // 0: North America 1: South America 2: Europe 3: Africa 4: Oceania 5: Asia
    ["Anguilla", "AntiguaandBarbuda", "Bahamas", "Barbados", "Belize", "Bermuda", "BonaireSintEustatiusandSaba", "BritishVirginIslands", "Canada", "CaymanIslands", "CostaRica", "Cuba",
    "Curacao", "Dominica", "DominicanRepublic", "ElSalvador", "Greenland", "Grenada", "Guadeloupe", "Guatemala", "Haiti", "Honduras", "Jamaica", "Martinique", "Mexico",
    "Montserrat", "Nicaragua", "Panama", "PuertoRico", "SaintBarthelemy", "SaintKittsandNevis", "SaintLucia", "SaintMartin", "SaintPierreandMiquelon",
    "SaintVincentandGrenadines", "SintMaarten", "TrinidadandTobago", "TurksandCaicosIslands", "UnitedStatesofAmerica", "UnitedStatesVirginIslands"],

    ["AntarcticTreatySystem","Argentina","Aruba","Bolivia","Brazil","Chile","Colombia","Ecuador","FalklandIslands","FrenchGuiana","Guyana","Paraguay",
    "Peru","SouthGeorgiaAndSouthSandwichIslands","Suriname","Uruguay","Venezuela"],

    ["AlandIslands","Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus","Belgium","BosniaandHerzegovina","Bulgaria","Croatia","Cyprus","Czechia",
    "Denmark","Estonia","FaroeIslands","Finland","France","Georgia","Germany","Gibraltar","Greece","Guernsey","Hungary","Iceland","Ireland","IsleofMan","Italy","Jersey","Kosovo",
    "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","RussianFederation",
    "SanMarino","Serbia","Slovakia","Slovenia","Spain","SvalbardandJanMayen","Sweden","Switzerland","Turkey","TurkishRepublicofNorthernCyprus","Ukraine","UnitedKingdom",
    "VaticanCityAndHolySee"],

    ["Algeria","Angola","Benin","Botswana","BouvetIsland","BurkinaFaso","Burundi","Cameroon","CanaryIslands","CaboVerde","CentralAfricanRepublic","Chad",
    "Comoros","CotedIvoire","DemocraticRepublicoftheCongo","Djibouti","Egypt","EquatorialGuinea","Eritrea","Eswatini","Ethiopia","FrenchSouthernandAntarcticLands","Gabon","Gambia","Ghana",
    "Guinea","GuineaBissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Mayotte","Morocco","Mozambique","Namibia","Niger","Nigeria",
    "RepublicofCongo","Reunion","Rwanda","SaintHelena","SaoTomeandPrincipe","Senegal","Seychelles","SierraLeone","Somalia","SouthAfrica","SouthSudan","Sudan","Tanzania",
    "Togo","Tunisia","Uganda","WesternSahara","Zambia","Zimbabwe"],

    ["AmericanSamoa","Australia","ChristmasIsland","CocosIslands","CookIslands","Fiji","FrenchPolynesia","Guam","HeardIslandandMcDonaldIslands",
    "Kiribati","MarshallIslands","Micronesia","Nauru","NewCaledonia","NewZealand","Niue","NorfolkIsland","NorthernMarianaIslands","Palau","PapuaNewGuinea","PitcairnIslands",
    "Samoa","SolomonIslands","Tokelau","Tonga","Tuvalu","UnitedStatesMinorOutlyingIslands","Vanuatu","WallisandFutuna"],

    ["Afghanistan","Bahrain","Bangladesh","Bhutan","BritishIndianOceanTerritory","Brunei","Cambodia","China","HongKong","India","Indonesia","Iran","Iraq",
    "Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Macau","Malaysia","Maldives","Mongolia","Myanmar","Nepal","NorthKorea","Oman","Pakistan",
    "Philippines","Qatar","RussianFederation","SaudiArabia","Singapore","SouthKorea","SriLanka","StateofPalestine","Syria","Taiwan","Tajikistan","Thailand","TimorLeste",
    "Turkey","Turkmenistan","UnitedArabEmirates","Uzbekistan","Vietnam","Yemen"]
];

// Europe region countries
var DEFAULTREGIONFLAGOFCOUNTRIES = sixRegionsValues[2];

var TARGETEDENTITY = "İnternet Şirketli Doğal Çiftlik Hanı";
