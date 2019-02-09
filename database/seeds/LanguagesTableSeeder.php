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
            "Seychellois Creole","Sharchhopka","Shimaore","Shona","Sindhi","Sinhala","siSwati","Slovak","Slovenian","Somali","Spanish","Swahili","Swedish","Tajik",
            "Tamil","Tatar","Telugu","Temne","Tetum","Thai","Tigrinya","Tok Pisin","Tokelauan","Tonga","Tongan","Turkish","Turkmen","Tuvaluan","Ukrainian","Umbundu",
            "Urdu","Uzbek","Vietnamese","Welsh","Wolof","Xichangana"];
        # Initiate a new timestamp we can use for created_at/updated_at fields
        $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK
        foreach($languages as $language) {
            Language::insert([
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
                'language' => $language,
                'short_name' => $language,
                'long_name' => $language,
            ]);
        }
    }    
}
