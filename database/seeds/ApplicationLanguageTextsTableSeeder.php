<?php

use Illuminate\Database\Seeder;
use App\ApplicationLanguageText;
use App\ApplicationI18ntag;
use App\ApplicationLanguage;
use App\Country;
use App\Language;

#use ApplicationI18ntag;
#use ApplicationLanguage;
#use ApplicationLanguageText;

class ApplicationLanguageTextsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {
         # These are the final text for any defined Language: For now USA English and Turkey Turkish and Slovakia Slovak
         /*
             Turkish Alphabet:

             A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
             Vowels: a, e, ı, i, o, ö, u, ü
             Consonants: b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z

         */
         $textsTR = [   'id_Required' => 'gerekli',
                        // from here to "to here" these are for the Report Table Title Column Information
                        'Language Name' => 'Dil',
                        'Population Name' => 'Nüfus',
                        'Religion Name' => 'Din',
                        'Flag Color' => 'Bayrak Rengi',
                        'Second Flag Color' => 'İkinci Bayrak Rengi',
                        'Third Flag Color' => 'Üçüncü Bayrak Rengi',
                        'Flag Shape' => 'Bayrak Şekli',
                        'Second Flag Shape' => 'İkinci Bayrak Şekli',
                        'Third Flag Shape' => 'Üçüncü Bayrak Şekli',
                        'Cellular Phone' => 'Cep Telefon',
                        'Income - GDP' => 'Gelir - ArGe',
                        'Overweight Ratio %' => 'Şişkoluk Oranı',
                        'Life Expectancy' => 'Ömür',
                        'Internet Usage %' => 'İnternet Kullanımı',
                        'R & D per GDP%' => "Ar-Ge'nin Gelire Oranı",
                        'Clean Drinking Water %' => 'Temiz İçme Suyu',
                        'Clean Toilet Facility %' => 'Temiz Tuvalet',
                        'Capital Cities' => 'Başkent',
                        'Surface Area' => 'Yüzölcümü',
                        'Oceans, Seas or Lakes' => 'Okyanus, Deniz ve Göller',
                        'Driving Side' => 'Sürüş tarafı',
                        'Sex Ratio M per 100 F' => '100 Kadına kaç Erkek',
                        'Seats Held By Women %' => 'Kadınların Mecliste Oranı',
                        // to here these are for the Report Table Title Column Information
                        'id_And' => 'Ve',
                        'id_Or' => 'Veya',
                        'id_Basics' => 'Temeller',
                        'id_HowItWorks' => 'Nasıl işliyor?',
                        'id_TechnologiesTitle' => 'Teknolojiler',
                        'id_HowTechnologiesUsed' => 'Teknolojiler nasıl kullanıldı?',
                        'id_InternationalizationI18n' => 'Dünya Dilleri Kullanımı',
                        'id_AboutTextOne' => '- www.K12K20.com hem bir yaz-boz hemde yazılım deneme tahtası olarak bir toplumsal eğitim ve kamu hizmeti olmayı hedefledi.',
                        'id_AboutTextTwo' => '- Hem alıcı hemde verici merkezli olarak, Web Vericinin "local storage" ile PHP/Laravel/Eloquent ve Java/Spring MVC/Hibernate web verici ozelliklerini aynı anda kullanıyor.',
                        'id_AboutTextThree' => '- CSS Grid Layout ve Flexbox birlikte kullanıdı.',
                        'id_AboutTextFour' => '- Dünya Dilleri Kullanımı gerek yazılımın görüntüsünde gerekse bilgilerin kendisinde bir Bütün olarak kurumsallastırıldı',
                        'id_AboutTextFive' => '- Görme ve/veya işitme engellileri için var olan teknolijiler özenle uygulandı.',
                        'id_EWorldMagic' => "K12K20.com Büyüsünü sizler ile kazandı, Teşekkürler",
                        'id_InteractiveMaps' => "Canlı SVG Haritaları",
                        'id_CountryInformation' => "Ülke Bilgileri",
                        'id_SVGNationalFlags' => "Ülke SVG Bayrakları",
                        'id_NationalAnthem' => "Ülke Milli Marşları",
                        'id_LinuxServer' => "Linux Merkez Verici",
                        'id_WebServer' => "Web Merkez Verici",
                        'id_MailServer' => "ePosta Merkez Verici",
                        'id_WorldFactsCia' => "Dünya Bilgileri",
                        'id_WorldFactsWiki' => "Dünya Bilgileri",
                        'id_DataLanguages_Ii18n' => 'Dünya Dilleri',
                        'id_LanguagePlaceHolder' => '- Lütfen bir Ülke ve konuştukları Dili seçin -',
                        'id_AmericanEnglish' => 'Amerika İngilizcesi',
                        'id_AmericanEnglishInOtherLanguage' => 'Seçilen Dile Tercümesi',
                        'id_Save' => 'Kayıtla',
                        'id_World' => 'Dünya',
                        'id_Regions' => 'Bölgeler',
                        'id_Africa' => 'Afrika',
                        'id_Asia' => 'Asya',
                        'id_Europe' => 'Avrupa',
                        'id_NorthAmerica' => 'Kuzey Amerika',
                        'id_Oceania' =>	'Okyanusya',
                        'id_SouthAmerica' => 'Güney Amerika',
						            'id_Color' => 'Renk 1',
                        'id_Color2nd' => 'Renk 2',
                        'id_Color3rd' => 'Renk 3',
                        'id_Shape' => 'Şekil 1',
                        'id_Shape2nd' => 'Şekil 2',
                        'id_Shape3rd' => 'Şekil 3',
                        'id_Cell' => 'Cep Telefon',
                        'id_Internet' => 'İnternet',
                        'id_RandD' => 'Ar-Ge',
                        'id_CleanWater' => 'Temiz Su',
                        'id_CleanToilet' => 'Temiz Tuvalet',
                        'id_SexRatio' => 'Cinsiyet Oranı',
                        'id_SeatRatio' => 'Seçilmiş Oranı',
                        'id_SexRatioDisplay' => 'Cinsiyet Oranı',
                        'id_SeatRatioDisplay' => 'Seçilmiş Oranı',
                        'id_CellDisplay' => 'Cep Telefon',
                        'id_InternetDisplay' => 'İnternet',
                        'id_RandDDisplay' => 'Ar-Ge',
                        'id_CleanWaterDisplay' => 'Temiz Su',
                        'id_CleanToiletDisplay' => 'Temiz Tuvalet',
                        'id_Overweight' => 'Şişkoluk',
                        'id_OverweightDisplay' => 'Şişkoluk',
                        'id_LifeExpectancy' => 'Ömür',
                        'id_LifeExpectancyDisplay' => 'Ömür',
                        'id_Population' => 'Nüfus',
                        'id_PopulationDisplay' => 'Nüfus',
                        'id_Reports' => 'Raporlar',
                        'id_LandArea' => 'Yüzölçümü',
                        'id_LandAreaDisplay' => 'Yüzölçümü',
                        'id_DrivingSide' => 'Sürüş tarafı',
                        'id_DrivingSideDisplay' => 'Sürüş tarafı',
                        'id_CapitalCities' => 'Başkentler',
                        'id_CapitalCitiesDisplay' => 'Başkentler',
                        'id_CountryList' => 'Dünya Ülkeri',
                        'id_AnthemApple' => 'Marş',
                        'id_GreetingApple' => 'Selam',
                        'id_Country' => 'Ülke',
                        'id_CountryThText' => 'Ülke',
                        'id_IncomeThText' => 'Gelir',
                        'id_RegionThText' => 'Bölge',
                        'id_CapitalThText' => 'Başkent',
                        'id_PopulationThText' => 'Nüfus',
                        'id_SurfaceThText' => 'Yüzölçümü',
                        'id_LargestThText' => 'En büyük',
                        'id_Country CodesThText' => 'Ülke Simgeleri',
                        'id_Income' => 'Gelir',
                        'id_IncomeDisplay' => 'Gelir',
                        'id_Language' => 'Dil',
                        'id_LanguageDisplay' => 'Dil',
                        'id_Religion' => 'Dinler',
                        'id_ReligionDisplay' => 'Dinler',
                        'id_Water' => 'Su',
                        'id_WaterDisplay' => 'Su',
                        'id_CurrencyDisplay' => "Para Birimi",
                        'id_GovernmentDisplay' => 'Hükümet',
                        'id_WeatherDisplay' => 'Hava Durumu',
                        'id_TravelWarningDisplay' => 'Yolculuk İkazı',
                        'id_WikiCountryDisplay' => "Wiki",
                        'id_CIACountryDisplay' => "CIA",
                        'id_UNCountryDisplay' => "BM",
                        'id_TimeAndDateDisplay' => "Tarih ve Saat",
                        'id_CountryCodesDisplay' => "Simgeler",
                        'id_CountryCodes' => "Dünya Ülke Simgeleri",
                        'id_GiniDisplay' => "₺ Dağılım",
                        'id_HDIDisplay' => "Gelişim",
                        'id_GoogleMapDisplay' => "Google Harita",
                        'id_TourismDisplay' => 'Turizm',
                        'id_PlaySound' => 'Durdur',
                        'id_SmallEntityText' => 'Lütfen Küçük Birimler için Google Haritasını (en alt sağ düğme) kullanın!',
                        'id_DrillDown' => 'İçine Gir',
                        'id_CombineSearchText' => 'Birleşik',
                        'id_CombineSearchNone' => 'Hiç',
                        'id_CombineSearchAnd' => 'Ve',
                        'id_CombineSearchOr' => 'Veya',
                        'id_CombineSearchReverse' => 'Tersi',
                        'title_CombineSearchReverse' => 'Tersi',
                        'title_CombineSearchNone' => 'Hiç',
                        'title_CombineSearchAnd' => 'Ve',
                        'title_CombineSearchOr' => 'Veya',
                        'title_soundOnOffIconPause' => 'Durdur',
                        'title_soundOnOffIconPlay' => 'Çal',
                        'title_SaveStartupValues' => 'Kayıtla',
                        'id_Religiosity' => 'Dinseverlik',
                        'id_TextLanguages' => 'Metin Dilleri',
                        'id_DataLanguages' => 'Bilgi Dilleri',
                        'id_AboutMe' => 'Yapısı?',
                        'id_Reset' => 'Tekrarla',
                        'id_Return' => 'Dön',
                        'id_FirstMessage' => 'Dünya',
                        'id_Surfing' => "Dünya Bölgeleri",
                        'id_Searching' => "Dünya",
                        'id_Register' => 'Başlangıç',
                        'id_RegisterUser' => 'Beni Kayıtla',
                        'id_ChooseOne' => 'Seç birini...',
                        'id_LanguageImplementedBy' => 'Türkçe Mehmet F. Erten tarafından uygulanmıştır',
                        'id_Billions' => 'Milyar',
                        'id_Millions' => 'Milyon',
                        'id_Thousands' => 'Bin',
                        'id_Citations' =>  'Alıntılar',
                        'id_CountryFacts' => 'Dünya',
                        'id_PanelOneText' => 'Harita',
                        'id_PanelTwoText' => 'Fark Yaratan',
                        'id_PanelTwoOneText' => 'Çocuklar',
                        'id_PanelThreeText' => 'Müzik',
                        'id_PanelFourText' => 'Halk',
                        'id_PanelFiveText' => 'Hayvanlar',
                        'id_PanelSixText' => 'Pazar',
                        'id_PanelSevenText' => 'Gıda',
                        'id_PanelEightText' => 'Yaşanırlık',
                        'id_ListAscending' => 'Artan Liste',
                        'id_ListDescending' => 'Azalan Liste',
                        'id_Upgraded' => "Ülkeyi Bil Yenilendi, lütfen devam edin",
                        'id_EMail' => 'E-posta Adresi',
                        "id_ElementarySchool" => 'İlk Okul',
                        "id_MiddleSchool" => 'Orta Okul',
                        "id_HighSchool" => 'Lise',
                        "id_College" => 'Üniversite',
                        "id_Please" => 'Lütfen',
                        "id_SelectQuestion" => 'Bir Soru Seçin',
                        "id_FromCategory" => 'Soru Kategorileri Sağ ve Solda',
                        "id_ShowAnswer" => 'Cevabı Göster',
                        "id_ShowCountry" => 'Ülkeyi Göster',
                        'id_StartWith' => 'Bununla başla',
                        "id_AppLanguageToUseB" => 'Sistem Dili',
                        'id_Menu' => 'Dünyamız ile Tanışalım',
                        'id_MenuStart' => 'Dünyamız ile Tanışalım',
                        "id_MenuUsage" => 'Menü',
                        'id_Countries' => 'Dünya Ülkeleri',
                        'id_Right' => 'Sağ',
                        'id_Left' => 'Sol',
                        'id_Women' => 'Kadın'
                    ];

        $textsUSA = [   'id_Required' => 'required',
                        // from here to "to here" these are for the Report Table Title Column Information
                        'Language Name' => 'Language',
                        'Population Name' => 'Population',
                        'Religion Name' => 'Religion',
                        'Flag Color' => 'Flag Color',
                        'Second Flag Color' => 'Second Flag Color',
                        'Third Flag Color' => 'Third Flag Color',
                        'Flag Shape' => 'Flag Shape',
                        'Second Flag Shape' => 'Second Flag Shape',
                        'Third Flag Shape' => 'Third Flag Shape',
                        'Cellular Phone' => 'Cellular Phone',
                        'Income - GDP' => 'Income - GDP',
                        'Overweight Ratio %' => 'Overweight Ratio %',
                        'Life Expectancy' => 'Life Expectancy',
                        'Internet Usage %' => 'Internet Usage %',
                        'R & D per GDP%' => 'R & D per GDP%',
                        'Clean Drinking Water %' => 'Clean Drinking Water %',
                        'Clean Toilet Facility %' => 'Clean Toilet Facility %',
                        'Capital Cities' => 'Capital Cities',
                        'Surface Area' => 'Surface Area',
                        'Oceans, Seas or Lakes' => 'Oceans, Seas or Lakes',
                        'Driving Side' => 'Driving Side',
                        'Sex Ratio M per 100 F' => 'Sex Ratio M per 100 F',
                        'Seats Held By Women %' => 'Seats Held By Women %',
                         // to here these are for the Report Table Title Column Information
                        'id_And' => 'And',
                        'id_Or' => 'Or',
                        'id_Basics' => 'Basics',
                        'id_HowItWorks' => 'How it works?',
                        'id_TechnologiesTitle' => 'Technologies',
                        'id_HowTechnologiesUsed' => 'How the Technologies are Used?',
                        'id_InternationalizationI18n' =>  'Internationalization(i18n)',
                        'id_AboutTextOne' => '- www.K12K20.com is a Web activity sand-box, a programming "boot-camp" and aims at being a community service while an educational web application.',
                        'id_AboutTextTwo' => '- It is both client and server centric. The Web Browser\'s "local storage" is in use together with the PHP/Laravel/Eloquent and Java/Spring MVC/Hibernate web server features.',
                        'id_AboutTextThree' => '- CSS Grid Layout integrated with Flexbox.',
                        'id_AboutTextFour' => '- The internationalization (i18n) as the core of the community service has been designed not just for the Application Web Page Text language but the very Data language, too.',
                        'id_AboutTextFive' => '- The implementation of the Accessibility features is a gradual goal to accomplish.',
                        'id_EWorldMagic' => "www.K12K20.com Got the Magic, Thanks to",
                        'id_InteractiveMaps' => "for the Interactive Maps",
                        'id_CountryInformation' => "for the Country Facts",
                        'id_SVGNationalFlags' => "for the SVG National Flags",
                        'id_NationalAnthem' => "for the National Anthems",
                        'id_LinuxServer' => "for the Linux Server",
                        'id_WebServer' => "for the Web Server",
                        'id_MailServer' => "for the Mail Server",
                        'id_WorldFactsCia' => "for the World Facts",
                        'id_WorldFactsWiki' => "for the World Facts",
                        'id_DataLanguages_Ii18n' => 'World Languages',
                        'id_LanguagePlaceHolder' => '- Please Select a Country and a Language -',
                        'id_AmericanEnglish' => 'USA English',
                        'id_AmericanEnglishInOtherLanguage' => 'Translated Text',
                        'id_Save' => 'Save',
                        'id_World' => 'World',
                        'id_Regions' => 'Regions',
                        'id_Africa' => 'Africa',
                        'id_Asia' => 'Asia',
                        'id_Europe' => 'Europe',
                        'id_NorthAmerica' => 'North America',
                        'id_Oceania' =>	'Oceania',
                        'id_SouthAmerica' => 'South America',
						            'id_Color' => 'Color 1',
                        'id_Color2nd' => 'Color 2',
                        'id_Color3rd' => 'Color 3',
                        'id_Shape' => 'Shape 1',
                        'id_Shape2nd' => 'Shape 2',
                        'id_Shape3rd' => 'Shape 3',
                        'id_Cell' => 'Cell Phone',
                        'id_Internet' => 'Internet',
                        'id_RandD' => 'R&D',
                        'id_CleanWater' => 'Potable Water',
                        'id_CleanToilet' => 'Clean Restroom',
                        'id_SexRatio' => 'Sex Ratio',
                        'id_SeatRatio' => 'Seat Ratio',
                        'id_SexRatioDisplay' => 'Sex Ratio',
                        'id_SeatRatioDisplay' => 'Seat Ratio',
                        'id_CellDisplay' => 'Cell Phone',
                        'id_InternetDisplay' => 'Internet',
                        'id_RandDDisplay' => 'R&D',
                        'id_CleanWaterDisplay' => 'Potable Water',
                        'id_CleanToiletDisplay' => 'Clean Restroom',
                        'id_Population' => 'Population',
                        'id_PopulationDisplay' => 'Population',
                        'id_Reports' => 'Reports',
                        'id_LandArea' => 'Surface Area',
                        'id_LandAreaDisplay' => 'Surface Area',
                        'id_DrivingSide' => 'Driving Side',
                        'id_DrivingSideDisplay' => 'Driving Side',
                        'id_Overweight' => 'Overweight',
                        'id_OverweightDisplay' => 'Overweight',
                        'id_LifeExpectancy' => 'Life Expectancy',
                        'id_LifeExpectancyDisplay' => 'Life Expectancy',
                        'id_CapitalCities' => 'Capital',
                        'id_CapitalCitiesDisplay' => 'Capital',
                        'id_CountryList' => 'World Countries',
                        'id_Language' => 'Language',
                        'id_LanguageDisplay' => 'Language',
                        'id_Religion' => 'Religion',
                        'id_ReligionDisplay' => 'Religion',
                        'id_AnthemApple' => 'Anthem',
                        'id_GreetingApple' => 'Greeting',
                        'id_CountryThText' => 'Country',
                        'id_IncomeThText' => 'Income',
                        'id_RegionThText' => 'Region',
                        'id_CapitalThText' => 'Capital',
                        'id_PopulationThText' => 'Population',
                        'id_SurfaceThText' => 'Surface',
                        'id_LargestThText' => 'Largest',
                        'id_Country CodesThText' => 'Country Codes',
                        'id_Income' => 'Income',
                        'id_Country' => 'Country',
                        'id_IncomeDisplay' => 'Income',
                        'id_Water' => 'Water',
                        'id_WaterDisplay' => 'Water',
                        'id_GovernmentDisplay' => 'Government',
                        'id_WeatherDisplay' => 'Weather',
                        'id_TravelWarningDisplay' => 'Travel Warning',
                        'id_WikiCountryDisplay' => "Wiki",
                        'id_CIACountryDisplay' => "CIA",
                        'id_UNCountryDisplay' => "UN",
                        'id_CountryCodesDisplay' => "Country Codes",
                        'id_CountryCodes' => "World Country Codes",
                        'id_CurrencyDisplay' => "Currency",
                        'id_TimeAndDateDisplay' => "Time & Date",
                        'id_GiniDisplay' => "Equality",
                        'id_HDIDisplay' => "Development",
                        'id_GoogleMapDisplay' => "Google Map",
                        'id_TourismDisplay' => 'Tourism',
                        'id_PlaySound' => 'Pause',
                        'id_SmallEntityText' => 'Please Use the Google Map (right bottom button) for the Small Entities!',
                        'id_DrillDown' => 'Drill Down',
                        'id_CombineSearchText' => 'Combine',
                        'id_CombineSearchNone' => 'None',
                        'id_CombineSearchAnd' => 'And',
                        'id_CombineSearchOr' => 'Or',
                        'id_CombineSearchReverse' => 'Reverse',
                        'title_CombineSearchReverse' => 'Reverse',
                        'title_CombineSearchNone' => 'None',
                        'title_CombineSearchAnd' => 'And',
                        'title_CombineSearchOr' => 'Or',
                        'title_soundOnOffIconPause' => 'Pause',
                        'title_soundOnOffIconPlay' => 'Play',
                        'title_SaveStartupValues' => 'Save',
                        'id_TextLanguages' => 'Text Languages',
                        'id_DataLanguages' => 'Data Languages',
                        'id_AboutMe' => 'About',
                        'id_Religiosity' => 'Religiosity',
                        'id_Reset' => 'Reset',
                        'id_Return' => 'Return',
                        'id_FirstMessage' => 'World',
                        'id_Surfing' => 'World Regions',
                        'id_Searching' => 'World',
                        'id_Register' => 'Startup',
                        'id_RegisterUser' => 'Register Me',
                        'id_ChooseOne' => 'Choose one...',
                        'id_LanguageImplementedBy' => 'USA English is implemented by Mehmet F. Erten',
                        'id_Billions' => 'Billions',
                        'id_Millions' => 'Millions',
                        'id_Thousands' => 'Thousands',
                        'id_Citations' =>  'Citations',
                        'id_CountryFacts' => 'World',
                        'id_PanelOneText' => 'Map',
                        'id_PanelTwoText' => 'Made a difference',
                        'id_PanelTwoOneText' => 'Children',
                        'id_PanelThreeText' => 'Music',
                        'id_PanelFourText' => 'People',
                        'id_PanelFiveText' => 'Animals',
                        'id_PanelSixText' => 'Shopping',
                        'id_PanelSevenText' => 'Food',
                        'id_PanelEightText' => "Liveability",
                        'id_ListAscending' => 'List Ascending',
                        'id_ListDescending' => 'List Descending',
                        'id_Upgraded' => 'Upgraded into the New Version, Please Continue',
                        'id_EMail' => 'Email Address',
                        "id_ElementarySchool" => 'Elementary School',
                        "id_MiddleSchool" => 'Middle School',
                        "id_HighSchool" => 'High School',
                        "id_College" => 'College',
                        "id_Please" => 'Please',
                        "id_SelectQuestion" => 'Ask a Question',
                        "id_FromCategory" => 'From the Categories',
                        "id_ShowAnswer" => 'Show the Answer',
                        "id_ShowCountry" => 'Show the Country',
                        'id_StartWith' => 'Start with',
                        "id_AppLanguageToUseB" => 'Application Language',
                        'id_Menu' => 'Nice to Meet the World',
                        'id_MenuStart' => 'Nice to Meet the World',
                        "id_MenuUsage" => 'Menu',
                        'id_Countries' => 'World Countries',
                        'id_Right' => 'Right',
                        'id_Left' => 'Left',
                        'id_Women' => 'Women'
                    ];

         # Initiate a new timestamp
         $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK

         // Insert TurkeyTurkish Texts
         $countryId = Country::getCountryIdFromName('Turkey');
         $languageId = Language::getLanguageId('Turkish');
         $applicationLanguage = ApplicationLanguage::getApplicationLanguageId($countryId, $languageId);
         foreach($textsTR as $key => $text)
         {
             $applicationI18ntag = ApplicationI18ntag::getApplicationI18ntagId($key);
             ApplicationLanguageText::insert([
                 'created_at' => $timestamp,
                 'updated_at' => $timestamp,
                 'application_language_id' => $applicationLanguage,
                 'application_i18ntag_id' => $applicationI18ntag,
                 'text' => $text,
             ]);
         }

         # Initiate a new timestamp
         $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK

         // Insert USA English Texts
         $countryId = Country::getCountryIdFromName('UnitedStatesofAmerica');
         $languageId = Language::getLanguageId('English');
         $applicationLanguage = ApplicationLanguage::getApplicationLanguageId($countryId, $languageId);
         foreach($textsUSA as $key => $text)
         {
             $applicationI18ntag = ApplicationI18ntag::getApplicationI18ntagId($key);
             ApplicationLanguageText::insert([
                 'created_at' => $timestamp,
                 'updated_at' => $timestamp,
                 'application_language_id' => $applicationLanguage,
                 'application_i18ntag_id' => $applicationI18ntag,
                 'text' => $text,
             ]);
         }
    }
}
