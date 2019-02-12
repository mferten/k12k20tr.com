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
            "FalklandAdaları" => "Falkland",
            "FilistinDevleti" => "Filistin",
            "KeymınAdaları" => "Keymın",
            "KuzeyMariyanaAdaları" => "Mariyana",
            "NorfolkAdası" => "Norfolk",
            "FransızPolenezya" => "Polenezya",
            "AzizPiyerveMikelon" => "Aziz Piyer",
            "PitcairnAdaları" => "Pitcairn",
            "AzizeHelena" => "Azize Helena",
            "SvalbardveJenMayen" => "Svalbard",
            "SanMarino" => "San Marino",
            "SaoTomevePrincipe" => "São Tomé",
            "TürklerveKayıklarıAdaları" => "Türkler",
            "FransızGüneyveAntartikAlanı" => "Fr Antartik",
            "VatikanŞehri" => "Vatikan",
            "WallisveFutuna" => "Wallis",
            "HongKong" => "Hong Kong",
            "BonaireSintEustatiusveSaba" => "Bonaire",
            "FaroyeAdaları" => "Faroye",
            "AzizMarten" => "Aziz Marten",
            "AzizMartin" => "Aziz Martin",
            "CaboVerde" => "Cabo Verde",
            "Kotdivuar" => "Kotdivuar",
            "SierraLeone" => "Sierra Leone",
            "GüneyAfrikaCumhuriyeti" => "Güney Afrika",
            "DoğuTimor" => "Doğu Timor",
            "KuzeyKore" => "Kuzey Kore",
            "GüneyKore" => "Güney Kore",
            "RusyaFederasyonu" => "Rusya",
            "SuudiArabistan" => "Suudi Arabistan",
            "OrtaAfrikaCumhuriyeti" => "OAC",
            "SriLanka" => "Sri Lanka",
            "BirleşikArapEmirlikleri" => "BAE",
            "BosnaHersek" => "Bosna",
            "BirleşikKrallık" => "BK",
            "KostaRika" => "Kosta Rika",
            "DominikCumhuriyeti" => "Dominik",
            "ElSalvador" => "El Salvador",
            "FransızGuyana" => "Fr Guyana",
            "AzizKitsveNevis" => "Aziz Kits",
            "AzizeLuciya" => "Azize Luciya",
            "AzizVincenveGrenadin" => "Aziz Vincen",
            "TrinidadveTobago" => "Trinidad",
            "AmerikaBirleşikDevletleri" => "ABD",
            "MarşalAdaları" => "Marşal",
            "YeniZelanda" => "Y Zelanda",
            "YeniKaledonya" => "Ye Kaledonya",
            "PapuaYeniGine" => "P Y Gine",
            "SolomonAdaları" => "Solomon",
            "BurkinaFaso" => "Burkina Faso",
            "BritanyaBakireAdaları" => "BBA",
            "AmerikanBakireAdaları" => "ABA",
            "EquatorialGuinea" => "E Guinea",
            "GineBissau" => "Gine Bissau",
            "PuertoRiko" => "Puerto Riko",
            "Kuk Adaları" => "Kuk",
            "KuzeyKıbrısTürkCumhuriyeti" => "KKTC",
            "Reunion" => "Reunion",
            "AzizBartelemi" => "Bartelemi",
            "AyılovMen" => "Ayıl ov Men",
            "AmerikanSamao" => "ABD Samoa",
            "NoelAdası" => "Noel Adası",
            "KokosAdası" => "Kokos",
            "AntarktikaAntlaşmasıSistemi" => "Antarktika",
            "KanaryaAdaları" => "Kanarya",
            "GüneyJorgiyaveGÜneySandavicAdaları" => "G Jorgiya",
            "Aland Adası" => "Aland",
            "BouvetAdası" => "Bouvet",
            "HördveMekDonalAdaları" => "H MekDonal",
            "ABDMinorOutlyingAdaları" => "ABD Minor",
            "AntiguaveBarbuda" => "Antigua",
            "BritanyaHintOkyanusAlanı" => "BK Hint",
            "KongoDemokratikCumhuriyeti" => "Kongo DC",
            "KongoCumhuriyeti" => "Kongo",
            "BatıSahara" => "Batı Sahara",
            "Kuraço" => "Kuraço",
            "GüneySudan" => "G Sudan"
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
