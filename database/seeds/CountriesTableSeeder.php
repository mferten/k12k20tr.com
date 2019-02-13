<?php

use Illuminate\Database\Seeder;
use App\Country;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # Load json file into PHP array
        $countries = json_decode(file_get_contents(database_path().'/jsonfile/countriesPopulations.json'), true);

        # Short Name for Application language
        $shortCountryNames =
        [
            "Afghanistan" => "Afghanistan",
          	"AlandIslands" => "Aland",
          	"Albania" => "Arnavutluk",
          	"Algeria" =>  Cezayir 	,
          	"AmericanSamoa" =>  ABD Samoa         	,
          	"Andorra" =>   Andorra        	,
          	"Angola" =>      Angola    	,
          	"Anguilla" =>     Anguilla      	,
          	"AntarcticTreatySystem" => Antartika          	,
          	"AntiguaandBarbuda" =>  Antigua         	,
          	"Argentina" =>    Arjantin       	,
          	"Armenia" =>     Ermenistan      	,
          	"Aruba" =>      Aruba    	,
          	"Australia" =>   Avustralya        	,
          	"Austria" => Avusturya,
          	"Azerbaijan" => Azerbaycan,
          	"Bahamas" =>   Bahamalar        	,
          	"Bahrain" => Bahreyn,
          	"Bangladesh" => Bangaldeş,
          	"Barbados" => Barbados          	,
          	"Belarus" =>   Belarus        	,
          	"Belgium" =>   Belçika        	,
          	"Belize" =>    Belize       	,
          	"Benin" =>      Benin     	,
          	"Bermuda" =>   Bermuda       	,
          	"Bhutan" =>   Butan        	,
          	"Bolivia" =>      Bolivya    	,
          	"BonaireSintEustatiusandSaba" => Bonaire ,
          	"BosniaandHerzegovina" => "Bosna",
          	"Botswana" =>    Botsvana       	,
          	"BouvetIsland" =>   Bouvet        	,
          	"Brazil" =>      Brezilya     	,
          	"BritishIndianOceanTerritory" => BK Hint          	,
          	"BritishVirginIslands" =>   BBA        	,
          	"Brunei" =>      Bruney     	,
          	"Bulgaria" =>   Bulgaristan        	,
          	"BurkinaFaso" =>    Burkina       	,
          	"Burundi" =>  Burundi         	,
          	"Cambodia" =>  Kamboçya        	,
          	"Cameroon" => Kamerun         	,
          	"Canada" =>  Kanada         	,
          	"CanaryIslands" =>  Kanarya         	,
          	"CaboVerde" =>   Cabo Verde        	,
          	"CaymanIslands" =>   "Keymın",
          	"CentralAfricanRepublic" => OAC          	,
          	"Chad" =>     Çad      	,
          	"Chile" =>      Şili    	,
          	"China" =>  Çin        	,
          	"ChristmasIsland" =>  Noel Adası         	,
          	"CocosIslands" =>  Kokos         	,
          	"Colombia" =>  Kolombiya         	,
          	"Comoros" =>     Komorlar      	,
          	"CookIslands" =>  Kuk        	,
          	"CostaRica" =>   Kosta Rika        	,
          	"CotedIvoire" =>  Kotdivuar        	,
          	"Croatia" =>   Hırvatistan        	,
          	"Cuba" =>   Küba        	,
          	"Curacao" =>  Kuraço         	,
          	"Cyprus" =>    Kıbrıs       	,
          	"Czechia" => Çekya         	,
          	"DemocraticRepublicoftheCongo" => Kongo DC ,
          	"Denmark" => Danimarka          	,
          	"Djibouti" =>     Cibuti     	,
          	"Dominica" =>    Dominika      	,
          	"DominicanRepublic" =>   Dominikan        	,
          	"Ecuador" =>  Ekvator         	,
          	"Egypt" =>    Mısır       	,
          	"ElSalvador" =>  El Salvador         	,
          	"EquatorialGuinea" =>   E Ginesi        	,
          	"Eritrea" =>    Eritre       	,
          	"Estonia" =>    Estonya       	,
          	"Eswatini" =>  Esvatini        	,
          	"Ethiopia" =>       Etiyopya   	,
          	"FalklandIslands" => Falkland          	,
          	"FaroeIslands" => Faroye          	,
          	"Fiji" =>  Fiji         	,
          	"Finland" =>   Finlandiya        	,
          	"France" =>  Fransa         	,
          	"FrenchGuiana" => Fr Guyana        	,
          	"FrenchPolynesia" => Polenezya   	,
          	"FrenchSouthernandAntarcticLands" => Fr Antartik           	,
          	"Gabon" =>   Gabon        	,
          	"Gambia" =>   Gambiya       	,
          	"Georgia" =>    Gürcistan       	,
          	"Germany" =>     Almanya      	,
          	"Ghana" =>    Gana       	,
          	"Gibraltar" => Cebelitarık          	,
          	"Greece" =>    Yunanistan       	,
          	"Greenland" =>   Grönland        	,
          	"Grenada" =>    Grenada       	,
          	"Guadeloupe" =>   Guadelup        	,
          	"Guam" =>     Guyam      	,
          	"Guatemala" =>    Guatemala       	,
          	"Guernsey" =>  Görnse         	,
          	"Guinea" =>    Gine       	,
          	"GuineaBissau" =>   Gine Bissau        	,
          	"Guyana" =>  Guyana         	,
          	"Haiti" =>     Haiti      	,
          	"HeardIslandandMcDonaldIslands" => H MekDonald          	,
          	"Honduras" =>    Honduras       	,
          	"HongKong" =>     Hong Kong      	,
          	"Hungary" =>   Macaristan        	,
          	"Iceland" =>  İzlanda         	,
          	"India" =>     Hindistan      	,
          	"Indonesia" =>  Endonezya         	,
          	"Iran" =>   İran        	,
          	"Iraq" =>   Irak        	,
          	"Ireland" =>   İrlanda        	,
          	"IsleofMan" =>      Ayıl ov Men     	,
          	"Israel" => İsrail           	,
          	"Italy" =>    İtalya       	,
          	"Jamaica" =>   Jamaika        	,
          	"Japan" =>   Japonya        	,
          	"Jersey" =>   Jörsiy       	,
          	"Jordan" =>    Ürdün      	,
          	"Kazakhstan" =>   Kazakistan        	,
          	"Kenya" =>   Kenya        	,
          	"Kiribati" =>    Kiribati       	,
          	"Kosovo" => Kosova          	,
          	"Kuwait" =>   Kuveyt       	,
          	"Kyrgyzstan" =>  Kırgızistan         	,
          	"Laos" =>    Laos       	,
          	"Latvia" =>  Letonya        	,
          	"Lebanon" =>    Lübnan       	,
          	"Lesotho" =>   Lesotho        	,
          	"Liberia" =>     Liberya      	,
          	"Libya" => Libya          	,
          	"Liechtenstein" =>    Lihtenştayn       	,
          	"Lithuania" =>   Litvanya        	,
          	"Luxembourg" =>  Lüksemburg        	,
          	"Macau" =>     Makau      	,
          	"Macedonia" =>  Makedonya         	,
          	"Madagascar" =>     Madagaskar     	,
          	"Malawi" =>     Malavi      	,
          	"Malaysia" =>    Malezya       	,
          	"Maldives" =>          Maldivler 	,
          	"Mali" =>     Mali      	,
          	"Malta" =>   Malta        	,
          	"MarshallIslands" =>    Marşal       	,
          	"Martinique" =>    Martinik       	,
          	"Mauritania" =>    Moritanya      	,
          	"Mauritius" =>   Morityus        	,
          	"Mayotte" =>    Mayot       	,
          	"Mexico" =>    Meksika       	,
          	"Micronesia" =>  Mikronezya         	,
          	"Moldova" =>   Moldova        	,
          	"Monaco" => Monako          	,
          	"Mongolia" => Moğolistan         	,
          	"Montenegro" =>   Karadağ        	,
          	"Montserrat" =>    Monserat       	,
          	"Morocco" =>     Fas      	,
          	"Mozambique" =>   Mozambik        	,
          	"Myanmar" =>   Myanmar        	,
          	"Namibia" =>   Namibya        	,
          	"Nauru" =>    Nauru       	,
          	"Nepal" =>    Nepal       	,
          	"Netherlands" =>   Hollanda        	,
          	"NewCaledonia" =>    Y Kaledonya      	,
          	"NewZealand" =>  Y Zelanda         	,
          	"Nicaragua" =>   Yeni Zelanda        	,
          	"Niger" =>    Nijer       	,
          	"Nigeria" =>  Nijerya        	,
          	"Niue" =>   Niyu        	,
          	"NorfolkIsland" =>  Norfolk         	,
          	"NorthernMarianaIslands" =>   Mariyana        	,
          	"NorthKorea" =>  Kuzey Kore         	,
          	"Norway" =>    Norveç       	,
          	"Oman" =>     Umman      	,
          	"Pakistan" =>  Pakistan         	,
          	"Palau" =>  Palau         	,
          	"Panama" =>  Panama        	,
          	"PapuaNewGuinea" => P Y Gine          	,
          	"Paraguay" => Paraguay,
          	"Peru" =>       Peru    	,
          	"Philippines" =>     Filipinler      	,
          	"PitcairnIslands" =>  Pitcairn         	,
          	"Poland" =>  Polonya         	,
          	"Portugal" =>  Portekiz         	,
          	"PuertoRico" => Puerto Riko          	,
          	"Qatar" =>     Katar      	,
          	"RepublicofCongo" => Kongo          	,
          	"Reunion" =>  Reunion        	,
          	"Romania" =>   Romanya        	,
          	"RussianFederation" =>   Rusya        	,
          	"Rwanda" =>  Ruanda         	,
          	"SaintBarthelemy" => Bartelemi          	,
          	"SaintHelena" =>    Az Helena       	,
          	"SaintKittsandNevis" =>  Az Kits         	,
          	"SaintLucia" =>  Az Luciya        	,
          	"SaintMartin" =>   Az Martin       	,
          	"SaintPierreandMiquelon" =>   Az Piyer       	,
          	"SaintVincentandGrenadines" =>  Az Vincen        	,
          	"Samoa" =>    Samoa      	,
          	"SanMarino" =>   San Marino       	,
          	"SaoTomeandPrincipe" =>  Sao Tome        	,
          	"SaudiArabia" =>  Suudi Arabistan        	,
          	"Senegal" =>  Senegal        	,
          	"Serbia" =>   Sırbistan       	,
          	"Seychelles" =>  Seyşeller        	,
          	"SierraLeone" =>  Sierra Leone        	,
          	"Singapore" =>   Singapur       	,
          	"SintMaarten" =>     Az Marten     	,
          	"Slovakia" =>  Slovakya        	,
          	"Slovenia" =>   Slovenya       	,
          	"SolomonIslands" =>  Solomon        	,
          	"Somalia" =>  Somali        	,
          	"SouthAfrica" =>  G Afrika      	,
          	"SouthGeorgiaAndSouthSandwichIslands" =>  G Gorgiya        	,
          	"SouthKorea" =>  Güney Kore        	,
          	"SouthSudan" =>    G Sudan      	,
            "Spain" =>    İspanya      	,
          	"SriLanka" =>  Sri Lanka        	,
          	"StateofPalestine" =>  "Filistin",
          	"Sudan" =>   Sudan       	,
          	"Suriname" =>  Surinam        	,
          	"SvalbardandJanMayen" =>  Svalbard        	,
          	"Sweden" =>    İsveç      	,
          	"Switzerland" =>  İsviçre        	,
          	"Syria" =>   Suriye      	,
          	"Taiwan" => Tayvan         	,
          	"Tajikistan" =>   Tacikistan       	,
          	"Tanzania" =>  Tanzanya        	,
          	"Thailand" =>   Tayland       	,
          	"TimorLeste" => Doğu Timor         	,
          	"Togo" =>  Togo        	,
          	"Tokelau" =>  Tokelau        	,
          	"Tonga" =>    Tonga      	,
          	"TrinidadandTobago" =>  Trinidad        	,
          	"Tunisia" =>  Tunus        	,
          	"Turkey" =>    Türkiye      	,
          	"TurkishRepublicofNorthernCyprus" => KKTC         	,
          	"Turkmenistan" =>  Türkmenistan        	,
          	"TurksandCaicosIslands" =>   Türkler ve Kayıkları       	,
          	"Tuvalu" => Tuvalu         	,
          	"Uganda" =>      Uganda    	,
          	"Ukraine" =>        Ukrayna  	,
          	"UnitedArabEmirates" => BAE         	,
          	"UnitedKingdom" =>   BK       	,
          	"UnitedStatesMinorOutlyingIslands" =>    ABD Minor      	,
          	"UnitedStatesofAmerica" =>    ABD      	,
          	"UnitedStatesVirginIslands" =>  ABD-BA        	,
          	"Uruguay" =>     Uruguay     	,
          	"Uzbekistan" =>   Özbekistan       	,
          	"Vanuatu" =>   Vanuatu       	,
          	"VaticanCityAndHolySee" =>   Vatikan       	,
          	"Venezuela" =>    Venezuela      	,
          	"Vietnam" =>    Vietnam      	,
          	"WallisandFutuna" => Walis,
          	"WesternSahara" => B Sahara ,
          	"Yemen" => Yemen,
          	"Zambia" => Zambiya,
          	"Zimbabwe" => Zimbabve
        ];

        # Long Name for Congratulation Panel
        $longCountryNames =
        [
            "FalklandAdaları" => "Falkland Adaları",
            "FilistinDevleti" => "Filistin Devleti",
            "KeymınAdaları" => "Keymın Adaları",
            "KuzeyMariyanaAdaları" => "Kuzey Mariyana Adaları",
            "NorfolkAdası" => "Norfolk Adası",
            "FransızPolenezya" => "Fransız Polenezya",
            "AzizPiyerveMikelon" => "Aziz Piyer ve Mikelon",
            "PitcairnAdaları" => "Pitcairn Adaları",
            "AzizeHelena" => "Azize Helena",
            "SvalbardveJenMayen" => "Svalbard ve Jen Mayen",
            "SanMarino" => "San Marino",
            "SaoTomevePrincipe" => "Sao Tome ve Principe",
            "TürklerveKayıklarıAdaları" => "Türkler ve Kayıkları Adaları",
            "FransızGüneyveAntartikAlanı" => "Fransız Güney ve Antartik Alanı",
            "VatikanŞehri" => "Vatikan Şehri",
            "WallisveFutuna" => "Wallis ve Futuna",
            "HongKong" => "Hong Kong",
            "BonaireSintEustatiusveSaba" => "Bonaire Sint Eustatius ve Saba",
            "FaroyeAdaları" => "Faroye Adaları",
            "AzizMarten" => "Aziz Marten",
            "AzizMartin" => "Aziz Martin",
            "CaboVerde" => "Cabo Verde",
            "Kotdivuar" => "Kotdivuar",
            "SierraLeone" => "Sierra Leone",
            "GüneyAfrikaCumhuriyeti" => "Güney Afrika Cumhuriyeti",
            "DoğuTimor" => "Doğu Timor",
            "KuzeyKore" => "Kuzey Kore",
            "GüneyKore" => "Güney Kore",
            "RusyaFederasyonu" => "Rusya Federasyonu",
            "SuudiArabistan" => "Suudi Arabistan",
            "OrtaAfrikaCumhuriyeti" => "Orta Afrika Cumhuriyeti",
            "SriLanka" => "Sri Lanka",
            "BirleşikArapEmirlikleri" => "Birleşik Arap Emirlikleri",
            "BosnaHersek" => "Bosna Hersek",
            "BirleşikKrallık" => "Birleşik Krallık",
            "KostaRika" => "Kosta Rika",
            "DominikCumhuriyeti" => "Dominik Cumhuriyeti",
            "ElSalvador" => "El Salvador",
            "FransızGuyana" => "Fransız Guyana",
            "AzizKitsveNevis" => "Aziz Kits ve Nevis",
            "AzizeLuciya" => "Azize Luciya",
            "AzizVincenveGrenadin" => "Aziz Vincen ve Grenadin",
            "TrinidadveTobago" => "Trinidad ve Tobago",
            "AmerikaBirleşikDevletleri" => "Amerika Birleşik Devletleri",
            "MarşalAdaları" => "Marşal Adaları",
            "YeniZelanda" => "Yeni Zelanda",
            "YeniKaledonya" => "Yeni Kaledonya",
            "PapuaYeniGine" => "Papua Yeni Gine",
            "SolomonAdaları" => "Solomon Adaları",
            "BurkinaFaso" => "Burkina Faso",
            "BritanyaBakireAdaları" => "Britanya Bakire Adaları",
            "AmerikanBakireAdaları" => "Amerikan Bakire Adaları",
            "EquatorialGuinea" => "Equatorial Guinea",
            "GineBissau" => "Gine Bissau",
            "PuertoRiko" => "Puerto Riko",
            "Kuk Adaları" => "Kuk Adaları",
            "KuzeyKıbrısTürkCumhuriyeti" => "Kuzey Kıbrıs Türk Cumhuriyeti",
            "Reunion" => "Reunion",
            "AzizBartelemi" => "Aziz Bartelemi",
            "AyılovMen" => "Ayıl ov Men",
            "AmerikanSamao" => "Amerikan Samao",
            "NoelAdası" => "Noel Adası",
            "KokosAdası" => "Kokos Adası",
            "AntarktikaAntlaşmasıSistemi" => "Antarktika Antlaşması Sistemi",
            "KanaryaAdaları" => "Kanarya Adaları",
            "GüneyJorgiyaveGÜneySandavicAdaları" => "Güney Jorgiya ve GÜney Sandavic Adaları",
            "Aland Adası" => "Aland Adası",
            "BouvetAdası" => "Bouvet Adası",
            "HördveMekDonalAdaları" => "Hörd ve MekDonal Adaları",
            "ABDMinorOutlyingAdaları" => "ABD Minor Outlying Adaları",
            "AntiguaveBarbuda" => "Antigua ve Barbuda",
            "BritanyaHintOkyanusAlanı" => "Britanya Hint Okyanus Alanı",
            "KongoDemokratikCumhuriyeti" => "Kongo Demokratik Cumhuriyeti",
            "KongoCumhuriyeti" => "Kongo Cumhuriyeti",
            "BatıSahara" => "Batı Sahara",
            "Kuraço" => "Kuraço",
            "GüneySudan" => "Güney
            Sudan"
        ];
        # Initiate a new timestamp we can use for created_at/updated_at fields
        $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK

        foreach($countries as $countryName => $country)
        {
            // Short Name
            if (array_key_exists($countryName, $shortCountryNames))
            {
                $shortName = $shortCountryNames["$countryName"];
            }
            else
            {
                $shortName = $countryName;
            }
            // Full Name
            if (array_key_exists($countryName, $longCountryNames))
            {
                $longtName = $longCountryNames["$countryName"];
            }
            else
            {
                $longtName = $countryName;
            }

            Country::insert([
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
                'country' => $countryName,
                'short_name' => $shortName,
                'long_name' => $longtName,
            ]);
        }
    }
}
