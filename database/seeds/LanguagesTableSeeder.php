<?php

use Illuminate\Database\Seeder;
use App\Language;

class LanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # Load json file into PHP array
        $languages = ["Afrikaans","Albanian","Amharic","Arabic","Armenian","Asante","Assamese","Aymara","Azerbaijani","Bahasa","Bahasa Indonesia","Bajan",
            "Bambara","Bangla","Belarusian","Bemba","Bengali","Bhojpuri","Bislama","Bosnian","Bulgarian","Burmese","Catalan","Chamorro","Chichewa","Creole","Crioulo",
            "Croatian","Czech","Danish","Dari","Dhivehi","Dioula","Dutch","Dzongkha","Emakhuwa","English","Estonian","Ewe","Fante","Fijian","Filipino","Finnish",
            "French","Fula","Gaelic","Ganda","Georgian","German","Greek","Greenlandic","Guarani","Gujarati","Hebrew","Hindi","Hiri Motu","Hungarian","I-Kiribati",
            "Icelandic","Irish","isiZulu","Italian","Japanese","Javanese","Kannada","Kashmiri","Kazakh","Khmer","Kinyarwanda","Kirundi","Korean","Krio","Kurdish",
            "Kyrgyz","Lao","Latvian","Lhotshamkha","Lingala","Lithuanian","Luganda","Luxembourgish","Macedonian","Maithali","Makasai","Malagasy","Malay","Malayalam",
            "Maltese","Mambai","Mandarin","Mandinka","Marathi","Marshallese","Maya","Melanesian pidgin","Mende","Moldovan","Mongolian","Monokutuba","Montenegrin",
            "Nauruan","Nawat","Ndebele","Nepali","Niuean","Norwegian","Nyanja","Oriya","Oromo","Palauan","Papiamento","Pashto","Persian","Polish","Portuguese","Punjabi",
            "Quechua","Rarotongan","Romanian","Romansch","Russian","Samoan","Sango","Sanskrit","Saraiki","Scots","Sekalanga","Sepedi","Serbian","Sesotho","Setswana",
            "Seychellois Creole","Sharchhopka","Shona","Sindhi","Sinhala","siSwati","Slovak","Slovenian","Somali","Spanish","Swahili","Swedish","Tajik",
            "Tamil","Tatar","Telugu","Temne","Tetum","Thai","Tigrinya","Tok Pisin","Tokelauan","Tonga","Tongan","Turkish","Turkmen","Tuvaluan","Ukrainian","Umbundu",
            "Urdu","Uzbek","Vietnamese","Welsh","Wolof","Xichangana"];

        # Initiate a new timestamp we can use for created_at/updated_at fields
        $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK

        $languagesShortAndLongDescription = ["Afrikaans"=>["Afrikanca","Afrikanca"],"Albanian" => ["Arnavutça","Arnavutça"],
            "Amharic" => ["Amharca","Amharca"],
            "Arabic" => ["Arapça","Arapça"],"Armenian" => ["Ermenice","Ermenice"],
            "Asante" => ["Asante","Asante"],"Assamese" => ["Asamiz","Asamiz"],"Aymara" => ["Aymara","Aymara"],
            "Azerbaijani" => ["Azerice","Azerice"],
            "Bahasa" => ["Bahasa","Bahasa"],"Bahasa Indonesia" => ["Endonez Bahasa","Endonez Bahasa"],"Bajan" => ["Bacan","Bacan"],
            "Bambara" => ["Bamana","Bamana"],"Bangla" => ["Bengal","Bengal"],"Belarusian" => ["Beyaz Rusca","Beyaz Rusca"],
            "Bemba" => ["Bemba","Bemba"],
            "Bengali" => ["Bengalce","Bengalce"],"Bhojpuri" => ["Bocpuri","Bocpuri"],"Bislama" => ["Bislama","Bislama"],
            "Bosnian" => ["Boşnakça","Boşnakça"],"Bulgarian" => ["Bulgarca","Bulgarca"],"Burmese" => ["Burma","Burma"],
            "Catalan" => ["Katalan","Katalan"],
            "Chamorro" => ["Çamoro","Çamoro"],"Chichewa" => ["Çiçeva","Çiçeva"],"Creole" => ["Krığıl","Krığıl"],
            "Crioulo" => ["Kırayulo","Kırayulo"],
            "Croatian" => ["Hırvatça","Hırvatça"],"Czech" => ["Çekce","Çekce"],"Danish" => ["Danimarkaca","Danimarkaca"],
            "Dari" => ["Dari","Dari"],"Dhivehi" => ["Divehi","Divehi"],
            "Dioula" => ["Dioula","Dioula"],"Dutch" => ["Felamenkçe","Felamenkçe"],"Dzongkha" => ["Butanez","Butanez"],
            "Emakhuwa" => ["Makua","Makua"],
            "English" => ["İngilizce","İngilizce"],"Estonian" => ["Estonca","Estonca"],"Ewe" => ["Ewe","Ewe"],
            "Fante" => ["Fante","Fante"],
            "Fijian" => ["Ficice","Ficice"],"Filipino" => ["Filipince","Filipince"],"Finnish" => ["Fince","Fince"],
            "French" => ["Fransızca","Fransızca"],"Fula" => ["Fulani","Fulani"],"Gaelic" => ["Gelik","Gelik"],
            "Ganda" => ["Ganda","Ganda"],"Georgian" => ["Gürcüce","Gürcüce"],
            "German" => ["Almanca","Almanca"],"Greek" => ["Yunanca","Yunanca"],"Greenlandic" => ["Kalaallisut","Kalaallisut"],
            "Guarani" => ["Guarani","Guarani"],
            "Gujarati" => ["Gucurati","Gucurati"],"Hebrew" => ["İbranice","İbranice"],"Hindi" => ["Hintçe","Hintçe"],
            "Hiri Motu" => ["Hiri Motu","Hiri Motu"],
            "Hungarian" => ["Macarca","Macarca"],"I-Kiribati" => ["Kiribati","Kiribati"],
            "Icelandic" => ["İzlandaca","İzlandaca"],"Indonesian" => ["Endonezca","Endonezca"],
            "Irish" => ["İrlandaca","İrlandaca"],"isiZulu" => ["Zulu","Zulu"],"Italian" => ["Italyanca","Italyanca"],
            "Japanese" => ["Japonca","Japonca"],"Javanese" => ["Javaca","Javaca"],"Kannada" => ["Kannada","Kannada"],
            "Kashmiri" => ["Keşmirce","Keşmirce"],"Kazakh" => ["Kazakça","Kazakça"],"Khmer" => ["Kamir","Kamir"],
            "Kinyarwanda" => ["Kinyarvanda","Kinyarvanda"],
            "Kirundi" => ["Kirundi","Kirundi"],"Korean" => ["Korece","Korece"],"Krio" => ["Kiriyo","Kiriyo"],
            "Kurdish" => ["Kürtçe","Kürtçe"],
            "Kyrgyz" => ["Kırgızca","Kırgızca"],"Lao" => ["Laoca","Laoca"],"Latvian" => ["Letonca","Letonca"],
            "Lhotshamkha" => ["Luhotşampaz","Luhotşampaz"],"Lingala" => ["Lingala","Lingala"],
            "Lithuanian" => ["Litvanca","Litvanca"],"Luganda" => ["Luganda","Luganda"],
            "Luxembourgish" => ["Lüksemburgiş","Lüksemburgiş"],
            "Macedonian" => ["Makedonca","Makedonca"],"Maithali" => ["Maithili","Maithili"],
            "Makasai" => ["Makasay","Makasay"],
            "Malagasy" => ["Malagasi","Malagasi"],"Malay" => ["Mıley","Mıley"],"Malayalam" => ["Malayalam","Malayalam"],
            "Maltese" => ["Malti","Malti"],"Mambai" => ["Mambai","Mambai"],"Mandarin" => ["Çince","Çince"],
            "Mandinka" => ["Mandinka","Mandinka"],
            "Marathi" => ["Marati","Marati"],"Marshallese" => ["Marşaliz","Marşaliz"],"Maya" => ["Maya","Maya"],
            "Melanesian pidgin" => ["Malezian pigin","Malezian pigin"],"Mende" => ["Mende","Mende"],
            "Moldovan" => ["Romence","Romence"],
            "Mongolian" => ["Moğolca","Moğolca"],"Monokutuba" => ["Monokutuba","Monokutuba"],
            "Montenegrin" => ["Karadağca","Karadağca"],
            "Nauruan" => ["Nauruca","Nauruca"],"Nawat" => ["Navat","Navat"],"Ndebele" => ["Indebeli","Indebeli"],
            "Nepali" => ["Nepali","Nepali"],
            "Niuean" => ["Niyuce","Niyuce"],"Norwegian" => ["Norveçce","Norveçce"],"Nyanja" => ["Niyanca","Niyanca"],
            "Oriya" => ["Oriya","Oriya"],
            "Oromo" => ["Oromo","Oromo"],"Palauan" => ["Palauca","Palauca"],"Papiamento" => ["Papimentu","Papimentu"],
            "Pashto" => ["Peştu","Peştu"],
            "Persian" => ["Farsça","Farsça"],"Polish" => ["Lehce","Lehce"],"Portuguese" => ["Portekizce","Portekizce"],
            "Punjabi" => ["Puncapi","Puncapi"],
            "Quechua" => ["Kicua","Kicua"],"Rarotongan" => ["Rarotongan","Rarotongan"],"Romanian" => ["Romence","Romence"],
            "Romansch" => ["Romanş","Romanş"],
            "Russian" => ["Rusça","Rusça"],"Samoan" => ["Samoaca","Samoaca"],"Sango" => ["Sango","Sango"],
            "Sanskrit" => ["Senskirit","Senskirit"],
            "Saraiki" => ["Saraiki","Saraiki"],"Scots" => ["İskoçça","İskoçça"],"Sekalanga" => ["Sekalanga","Sekalanga"],
            "Sepedi" => ["Sepedi","Sepedi"],
            "Serbian" => ["Sırpça","Sırpça"],"Sesotho" => ["Sesotho","Sesotho"],"Setswana" => ["Setswana","Setswana"],
            "Seychellois Creole" => ["Seyşel Krığıl","Seyşel Krığıl"],"Sharchhopka" => ["Sharchhopka","Sharchhopka"],
            "Shona" => ["Shona","Shona"],
            "Sign language" => ["İşaret dili","İşaret dili"],"Sindhi" => ["Sindhi","Sindhi"],"Sinhala" => ["Sinhala","Sinhala"],
            "siSwati" => ["Swati","Swati"],"Slovak" => ["Slovakça","Slovakça"],"Slovenian" => ["Slovence","Slovence"],
            "Somali" => ["Somalice","Somalice"],
            "Spanish" => ["İspanyolca","İspanyolca"],"Swahili" => ["Svahili","Svahili"],"Swedish" => ["İsveçce","İsveçce"],
            "Tajik" => ["Tacikçe","Tacikçe"],
            "Tamil" => ["Tamilce","Tamilce"],"Tatar" => ["Tatar","Tatar"],"Telugu" => ["Telugu","Telugu"],"Temne" => ["Temne","Temne"],
            "Tetum" => ["Tetum","Tetum"],
            "Thai" => ["Tayca","Tayca"],"Tigrinya" => ["Tigrinya","Tigrinya"],"Tok Pisin" => ["Tok Pisin","Tok Pisin"],
            "Tokelauan" => ["Tokelauan","Tokelauan"],"Tonga" => ["Tonga","Tonga"],"Tongan" => ["Tongaca","Tongaca"],
            "Turkish" => ["Türkçe","Türkçe"],
            "Turkmen" => ["Türkmence","Türkmence"],"Tuvaluan" => ["Tuvaluca","Tuvaluca"],"Ukrainian" => ["Ukraynaca","Ukraynaca"],
            "Umbundu" => ["Umbundu","Umbundu"],
            "Urdu" => ["Urduca","Urduca"],"Uzbek" => ["Özbekçe","Özbekçe"],"Vietnamese" => ["Vietnamca","Vietnamca"],
            "Welsh" => ["Velş","Velş"],
            "Wolof" => ["Volof","Volof"],"Xichangana" => ["Xichangana","Xichangana"]];

        foreach($languages as $language) {
            Language::insert([
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
                'language' => $language,
                'short_name' => $languagesShortAndLongDescription[$language][0],
                'long_name' => $languagesShortAndLongDescription[$language][1],
            ]);
        }
    }
}
