<?php

use Illuminate\Database\Seeder;
use App\ApplicationLanguageData;
use App\ApplicationLanguage;

class ApplicationLanguageDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # These will be only valid after the Application Text is defined and created
        # These are the final text for any defined Language: For now USA English and Turkey Turkish and Slovakia Slovak
        /*
            A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
            Vowels: a, e, ı, i, o, ö, u, ü
            Consonants: b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z

        */
        // javascript stringVariable.split("?"); ?=whatever is the character value
        // php $newArrayVariable = explode("?", $stringWithArrayValues); ?=whatever is the character value
        $dataTR = ["Düşük","Orta","Yüksek","Afganistan","Afganistan","Aland","Aland Adası","Arnavutluk","Arnavutluk","Cezayir","Cezayir","ABD Samoa",
        "Amerikan Samao","Andorra","Andorra","Angola","Angola","Anguilla","Anguilla","Antartika","Antarktika Antlaşması Sistemi","Antigua","Antigua ve Barbuda",
        "Arjantin","Arjantin","Ermenistan","Ermenistan","Aruba","Aruba","Avustralya","Avustralya","Avusturya","Avusturya","Azerbaycan","Azerbaycan",
        "Bahamalar","Bahamalar","Bahreyn","Bahreyn","Bangaldeş","Bangaldeş","Barbados","Barbados","Belarus","Belarus","Belçika","Belçika","Belize","Belize",
        "Benin","Benin","Bermuda","Bermuda","Butan","Butan","Bolivya","Bolivya","Bonaire","Bonaire Sint Eustatius ve Saba","Bosna","Bosna Hersek","Botsvana",
        "Botsvana","Bouvet","Bouvet Adası","Brezilya","Brezilya","BK Hint","Britanya Hint Okyanus Alanı","BBA","Britanya Bakire Adaları","Bruney","Bruney",
        "Bulgaristan","Bulgaristan","Burkina Faso","Burkina Faso","Burundi","Burundi","Kamboçya","Kamboçya","Kamerun","Kamerun","Kanada","Kanada","Kanarya",
        "Kanarya Adaları","Cabo Verde","Cabo Verde","Keymın","Keymın Adaları","OAC","Orta Afrika Cumhuriyeti","Çad","Çad","Şili","Şili","Çin","Çin","Noel Adası",
        "Noel Adası","Kokos","Kokos Adası","Kolombiya","Kolombiya","Komorlar","Komorlar","Kuk","Kuk Adaları","Kosta Rika","Kosta Rika","Kotdivuar","Kotdivuar",
        "Hırvatistan","Hırvatistan","Küba","Küba","Kuraço","Kuraço","Kıbrıs","Kıbrıs","Çekya","Çekya","Kongo DC","Kongo Demokratik Cumhuriyeti","Danimarka",
        "Danimarka","Cibuti","Cibuti","Dominika","Dominika","Dominikan","Dominik Cumhuriyeti","Ekvator","Ekvator","Mısır","Mısır","El Salvador","El Salvador",
        "E Ginesi","Ekvator Ginesi","Eritre","Eritre","Estonya","Estonya","Esvatini","Esvatini","Etiyopya","Etiyopya","Falkland","Falkland Adaları","Faroye",
        "Faroye Adaları","Fiji","Fiji","Finlandiya","Finlandiya","Fransa","Fransa","Guyana","French Guyana","Polenezya","Fransız Polenezya","Fr Antartik",
        "Fransız GÜney ve Antartik Alanı","Gabon","Gabon","Gambiya","Gambiya","Gürcistan","Gürcistan","Almanya","Almanya","Gana","Gana","Cebelitarık",
        "Cebelitarık","Yunanistan","Yunanistan","Grönland","Grönland","Grenada","Grenada","Guadelup","Guadelup","Guyam","Guyam","Guatemala","Guatemala",
        "Görnse","Görnse","Gine","Gine","Gine Bissau","Gine-Bissau","Guyana","Guyana","Haiti","Haiti","H MekDonald","Hörd ve MekDonal Adaları","Honduras",
        "Honduras","Hong Kong","Hong Kong","Macaristan","Macaristan","İzlanda","İzlanda","Hindistan","Hindistan","Endonezya","Endonezya","İran","İran","Irak",
        "Irak","İrlanda","İrlanda","Ayıl ov Men","Ayıl ov Men",
        "İsrail","İsrail","İtalya","İtalya","Jamaika","Jamaika","Japonya","Japonya","Jörsiy","Jörsiy","Ürdün","Ürdün","Kazakistan","Kazakistan","Kenya",
        "Kenya","Kiribati","Kiribati","Kosova","Kosova","Kuveyt","Kuveyt","Kırgızistan","Kırgızistan","Laos","Laos","Letonya","Letonya","Lübnan","Lübnan",
        "Lesotho","Lesotho","Liberya","Liberya","Libya","Libya","Lihtenştayn","Lihtenştayn","Litvanya","Litvanya","Lüksemburg","Lüksemburg","Makau",
        "Makau","Makedonya","Makedonya","Madagaskar","Madagaskar","Malavi","Malavi","Malezya","Malezya","Maldivler","Maldivler","Mali","Mali","Malta",
        "Malta","Marşal","Marşal Adaları","Martinik","Martinik","Moritanya","Moritanya","Morityus","Morityus","Mayot","Mayot","Meksika","Meksika",
        "Mikronezya","Mikronezya","Moldova","Moldova","Monako","Monako","Moğolistan","Moğolistan","Karadağ","Karadağ","Monserat","Monserat","Fas","Fas",
        "Mozambik","Mozambik","Myanmar","Myanmar","Namibya","Namibya","Nauru","Nauru","Nepal","Nepal","Hollanda","Hollanda","Y Kaledonya","Yeni Kaledonya",
        "Y Zelanda","Yeni Zelanda","Nikaragua","Nikaragua","Nijer","Nijer","Nijerya","Nijerya","Niyu","Niyu","Norfolk","Norfolk Adası","Mariyana",
        "Kuzey Mariyana Adaları","Kuzey Kore","Kuzey Kore","Norveç","Norveç","Umman","Umman","Pakistan","Pakistan","Palau","Palau","Panama","Panama",
        "P Y Gine","Papua Yeni Gine","Paraguay","Paraguay","Peru","Peru","Filipinler","Filipinler","Pitcairn","Pitcairn Adaları","Polonya","Polonya",
        "Portekiz","Portekiz","Puerto Riko","Puerto Riko","Katar","Katar","Kongo","Kongo Cumhuriyeti","Réunion","Réunion","Romanya","Romanya","Rusya",
        "Rusya Federasyonu","Ruanda","Ruanda","Bartelemi","Aziz Bartelemi","Az Helena","Azize Helena","Az Kits","Aziz Kits ve Nevis","Az Luciya",
        "Azize Luciya","Az Martin","Aziz Martin","Az Piyer","Aziz Piyer ve Mikelon","Az Vincen","Aziz Vincen ve Grenadin","Samoa","Samoa","San Marino",
        "San Marino","São Tomé","São Tomé ve Príncipe","Suudi Arabistan","Suudi Arabistan","Senegal","Senegal","Sırbistan","Sırbistan","Seyşeller",
        "Seyşeller","Sierra Leone","Sierra Leone","Singapur","Singapur","Az Marten","Aziz Marten","Slovakya","Slovakya","Slovenya","Slovenya",
        "Solomon","Solomon Adaları","Somali","Somali","Güney Afrika Cumhuriyeti","Güney Afrika Cumhuriyeti","G Gorgiya",
        "Güney Jorgiya ve GÜney Sandavic Adaları","Güney Kore","Güney Kore","G Sudan","Güney Sudan","İspanya","İspanya","Sri Lanka","Sri Lanka",
        "Filistin","Filistin Devleti","Sudan","Sudan","Surinam","Surinam","Svalbard","Svalbard ve Jen Mayen","İsveç","İsveç","İsviçre","İsviçre",
        "Suriye","Suriye","Tayvan","Tayvan Cumhuriyeti","Tacikistan","Tacikistan","Tanzanya","Tanzanya","Tayland","Tayland","Doğu Timor","Doğu-Timor",
        "Togo","Togo","Tokelau","Tokelau","Tonga","Tonga","Trinidad","Trinidad ve Tobago","Tunus","Tunus","Türkiye","Türkiye","KKTC",
        "Kuzey Kıbrıs Türk Cumhuriyeti","Türkmenistan","Türkmenistan","Türkler ve Kayıkları","Türkler ve Kayıkları (Turks Caicos) Adaları",
        "Tuvalu","Tuvalu","Uganda","Uganda","Ukrayna","Ukrayna","BAE","Birleşik Arap Emirlikleri","BK","Birleşik Krallık","ABD Minor",
        "ABD Minor Outlying Adaları","ABD","Amerika Birleşik Devletleri","ABD-BA","Amerikan Bakire Adaları","Uruguay","Uruguay","Özbekistan",
        "Özbekistan","Vanuatu","Vanuatu","Vatikan","Vatikan Şehri","Venezuela","Venezuela","Vietnam","Vietnam","Walis","Walis ve Futuna",
        "B Sahara","Batı Sahara","Yemen","Yemen","Zambiya","Zambiya","Zimbabve","Zimbabve","Abu Dabi","Abuja","Akra","Adamstown","Addis Ababa",
        "Cezayir","Alofi","Amman","Amsterdam","Andorra la Vella","Ankara","Antananarivo","Apia","Aşkabat","Asmara","Astana","Asunsion","Atina","Avarua",
        "Bağdat","Bakü","Bamako","Bandar Seri Begavan","Bangkok","Bangui","Banjul","Basse-Terre","Baster","Pekin","Beyrut","Belgrad","Belmopan",
        "Berlin","Bern","Bişkek","Bissau","Bloemfontein","Bogota","Brades","Brazilya","Bratislava","Brazavil","Bridgetown","Brüksel","Bükreş",
        "Budapeşte","Buenos Aires","Bujumbura","Kahire","Adalet Kampı","Kanberra","Cape Town","Karakas","Castries","Cayenne","Charlotte Amalie",
        "Kişinev","Cockburn Town","Kolombo","Konakri","Kopenhag","Dakar","Şam","Dakka","Dili","Cibuti","Dodoma","Doha","Douglas","Dublin","Duşanbe",
        "Doğu Kudüs","El Aaiún","Flying Fish Cove","Fort-de-France","Freetown","Funafuti","Gaboron","Garapan","George Town","Georgetown","Cebelitarık",
        "Guatemala","Gustavia","Hagåtña","Hamilton","Hanoi","Harare","Havana","Helsinki","Hong Kong","Honiara","İslamabad","Cakarta","Jamestown",
        "Kudüs","Juba","Kâbil","Kampala","Katmandu","Hartum","Kigali","King Edward Point","Kingston-JM","Kingston-NF","Kingstown","Kinşasa",
        "Kralendijk","Kuala Lumpur","Kuveyt","Kiev","La Paz","Las Palmas","Librevil","Lilongve","Lima","Lizbon","Lübliyana","Lobamba","Lome",
        "Londra","Longyearbyen","Luanda","Lusaka","Lüksemburg","Macau","Madrid","Majuro","Malabo","Male","Mamoudzou","Managua","Manama","Manila",
        "Maputo","Mariehamn","Marigot","Maseru","Matu-Utu","Mbabane","Melekeok","Meksika","Minsk","Mogadişu","Monako","Monrovia","Montevideo","Moroni",
        "Moskova","Muskat","Encemine","N/A-AQ","N/A-BV","N/A-HM","Nairobi","Nassau","Nepido","Yeni Delhi","Niamey","Lefkoşa","Yok","Kuzey Lefkoşa",
        "Nuakşot","Nouméa","Nuku'alofa","Nuuk","Oranjestad","Oslo","Ottava","Vagadugu","Pago Pago","Palikir","Panama","Papeete","Paramaribo","Paris",
        "Philipsburg","Punom Pen","Podgoritsa","Port Louis","Port Moresby","Port of Spain","Port Vila","Port-au-Prince","Porto-Novo","Prag","Praia",
        "Pretorya","Pristina","Pyongyang","Kito","Rabat","Reykjavik","Riga","Riyad","Road Town","Roma","Roseau","Saint George's","Saint Helier",
        "Saint John's","Saint-Denis","Saint-Pierre-PM","Saint-Pierre-TF","San Hose","San Juan","San Marino","San Salvador","Sana",
        "Santa Cruz de Tenerife","Santiago","Santo Domingo","Sao Tome","Saraybosna","Seul","Singapore","Üsküp","Sofya","Sri Jayewardenepura Kotte",
        "St Peter Port","Stanley","Stokholm","Sucre","Suva","Taipei","Tallin","Tarava","Taşkent","Tiflis","Tegusigalpa","Tahran","The Valley","Timpu",
        "Tiran","Tokelau","Tokyo","Tórshavn","Trablus","Tunus","Ulanbator","Vaduz","Valetta","Vatikan","Victoria","Viyana","Vientiane","Vilnius",
        "Varşova","Vaşington","Wellington","West Island","Willemstad","Windhoek","Yamusukro","Yaunde","Yaren","Erivan","Zagreb","Kara","Mavi","Kahverengi",
        "Giri","Yeşil","Bordo","Portakal","Pembe","Mor","Kırmızı","Safran","Beyaz","Sarı","Dolar $","ABD $","Avro €","Afghani AFN ؋",
        "Arnavut Leki LEK","Hollanda Antiller Florini ANG","Madagaskar Doları MGA","Avusturalya Doları AUD $","AUD $","Avusturalya Doları AUD $",
        "Tayland Bahtı THB ฿","Panama Balboası PAB","Etiyopya Biri ETB","Venezuela Bolivarı VEF",'Bolivya Bolivyanosu BOB $b',"Gana Cedisi GHS ¢",
        "Kosta Rika Kolonu CRC ₡","El Salvador Kolonu SVC $","Gambiya Dalasisi GMD","Makedonya Dinarı MKD ден","Bahreyn Dinarı BHD د.ب",
        "Cezayir Dinarı DZD","Irak Dinarı IQD","Ürdün Dinarı JOD","Kuveyt Dinarı KWD د.ك","Libya Dinarı LYD","Sırp Dinarı RSD Дин",
        "Tunus Dinarı TND","B.A.E. Dirhemi AED د.إ","Fas Dirhemi MAD","Danimarka Kronu DKK","Avustralya Doları AUD $","Barbados Doları BBD $",
        "Bermuda Doları BMD $","Brunei Doları BND $","Bahama Doları BSD $","Belize Doları BZD $","Kanada Doları CAD $","Fiji Doları FJD $",
        "Guyana Doları GYD $","Jamaika Doları JMD $","Liberya Doları LRD $","Namibya Doları NAD $","Singapur Doları SGD $","Surinam Doları SRD $",
        "Trinidad ve Tobago Doları TTD $","Zimbabve Doları ZWL $","Vietnam Dongu VND","Ermenistan Dramı AMD",
        "Mısır Lirası İsrail Yeni Şekeli Ürdün Dinarı EGP ILS JOD","Cape Verde Eskudosu CVE","Euro €","Falkland Adaları Lirası FKP £",
        "Aruba Florini AWG","Macar Forinti HUF","Burundi Frangı BIF","Kongo Frangı CDF","İsviçre Frangı CHF","Cibuti Frangı DJF",
        "Gine Frangı GNF","Komor Frangı KMF","Ruanda Frangı RWF","CFA Frangı BEAC","Bati Afrika Frangı CFA: XOF","Büyük Okyanus Fransız Frangı XPF - CFP",
        "CFA Frangı XAF","Sterlin £ GBP","Guernsey Pound GGP","Cebelitarık Pound £","Haiti Gurdesi HTG","Paraguay Guaranisi PYG","Hong Kong Doları HKD $",
        "Ukrayna Hryvniası UAH ₴","Papua Yeni Gine Kinası PGK","Laos Kipi LAK ₭","Çek Korunası CZK č","İzlanda Kronu ISK","İsveç Kronu","Danimarka Kronu DKK",
        "Norveç Kronu NOK","Hırvat Kunası HRK","Malavi Kvakası MWK","Zambian Kwacha ZMW","Angola Kvanzası AOA","Myanmar Kyatı MMK","Keyman Adaları Doları KYD $",
        "Gürcistan Larisi GEL","Honduras Lempirası HNL","Sierra Leone Leonu SLL","Moldova Leyi MDL","Romen Leyi RON","Svaziland Lilangenisi SZL",
        "Lesotho Lotisi LSL","Azerbaycan Manatı AZN","Türkmenistan Y. Manatı TMT","Bosna Konvertibl Mark BAM","Makau Patacası MOP",
        "Nijerya Nairası NGN ₦","Eritre Nakfası ERN","Bhutan Ngultrumu BTN","Norveç Kronu","Tayvan Yeni Doları NT$ TWD $","Yeni Zelanda Doları NZD $",
        "Umman Riyali OMR ﷼","Nikaragua Kordoba Orosu NIO $","Moritanya Ouguiyası MRO","Tonga Paangası TOP","Arjantin Pezosu ARS $","Şili Pezosu CLP $",
        "Kolombiya Pezosu COP $","Küba Pezosu CUP ₱","Meksika Pezosu MXN $","Filipinler Pesosu PHP ₱","Uruguay Pezosu UYU $","Mısır Lirası EGP £",
        "Lübnan Paundu LBP £","Sudan Dinarı SDG","Güney Sudan Pound SSP","Pound Sterlin GBP £","Suriye Lirası SYP £","Botsvana Pulası BWP",
        "Guatemala Kuetzalı GTQ","Güney Afrika Randı ZAR","Brazilya Reali BRL $","İran Riyali IRR ﷼","Katar Riyali QAR ﷼","Yemen Riyali YER ﷼",
        "Malezya Ringiti MYR","Suudi A. Riyali SAR ﷼","Belarus Rublesi BYR","Rus Rublesi RUB б","Maldiv Rufiyası MVR","Hindistan Rupisi INR ₹",
        "Sri Lanka Rupisi LKR","Mauritus Rupisi MUR","Nepal Rupisi NPR","Pakistani Rupee PKR","Seyşeller Rupisi","Endonezya Rupisi",
        "Solomon Adaları Doları SBD $","İsrail Yeni Şekeli ILS ₪","Kenya Şilini KES","Somali Şilini SOS $","Tanzanya Şilini TZS",
        "Uganda Şilini","Saint Helena Paundu SHP £","Peru Yeni Solu PEN","Kırgızistan Somu KGS 	лв","Tacikistan Somonisi TJS",
        "Sao Tome ve P. Dobrası","Özbekistan Sumu	UZS лв","İsviçre Frangı CHF","Bangladeş Takası BDT ৳","Samoa Talası WST",
        "Kazakhstani Tenge KZT лв","Moğolistan Tugriki MNT ₮","Vanuatu Vatusu VUV","Kuzey Kore Vonu	KPW ₩","Güney Kore Wonu	KRW ₩",
        "Doğu Karayip Doları XCD $","Fransız Ploneziya Frank XPF","Japon Yeni JPY ¥","Çin Yuanı CNY ¥","Polonya Zlotisi PLN",
        "Türk Lirası TRY ₺","Sol","Sağ","Afrikanca","Arnavutça","Amharca","Antil Krığıl  (Antillean Creole)","Arapça","Ermenice",
        "Asante","Asamiz (Assamese)","Aymara","Azerice","Bahasa","Endonez Bahasa","Bacan","Bamana","Bengal","Kamp Dilleri",
        "Beyaz Rusca","Bemba","Bengalce","Bocpuri (Bhojpuri)","Bislama","Boşnakça","Bulgarca","Burma","Katalan","Çamoro (Chamorro)",
        "Çiçeva (Chichewa)","Krığıl (Creole)","Kırayulo (Crioulo)","Hırvatça","Çekce","Danimarkaca","Dari","Divehi","Dioula",
        "Felamenkçe (Dutch)","Butanez (Dzongkha)","Makua (Emakhuwa)","İngizlice","Estonyaca","Ewe","Fante","Ficice","Filipince",
        "Fince","Fransızca","Fulani","Gelik (Gaelic)","Ganda","Gürcüce","Almanca","Yunanca","Kalaallisut (Greenlandic)","Guarani",
        "Gucurati (Gujarati)","İbranice","Hintçe","Hiri Motu","Macarca","Kiribati","İzlandaca","Endonezca (Indonesian)","İrlandaca",
        "Zulu","Italyanca","Japonca","Javaca","Kannada","Keşmirce (Kashmiri)","Kazakça","Kamir","Kinyarvanda","Kirundi","Korece",
        "Kiriyo (Krio)","Kürtçe","Kırgızca","Laoca","Letonca","Luhotşampaz (Lhotshamkha)","Lingala","Litvanca","Luganda","Lüksemburgiş",
        "Makedonca","Maithili","Makasay","Malagasi","Mıley (Malay)","Malayalam","Malti (Maltese)","Mambai","Çince","Mandinka","Marati",
        "Marşaliz","Maya","Malezian pigin","Mende","Romence","Moğolca","Monokutuba","Karadağca","Nauruca","Navat","Indebeli","Nepali",
        "Niyuce (Niuean)","Norveçce","Niyanca (Nyanja)","Oriya","Oromo","Palauca (Palaun)","Papimentu","Peştu","Farsça","Lehce",
        "Portekizce","puncapi (Punjabi)","Kicua (Quechua)","Rarotongan","Romence","Romanş (Romansch)","Rusça","Samoaca","Sango",
        "Senskirit (Sanskrit)","Saraiki","Sikot (Scots)","Sekalanga","Sepedi","Sırpça","Sesotho","Setswana","Seyşel Krığıl (Creole)",
        "Sharchhopka","Shona","İşaret dili","Sindhi","Sinhala","Swati","Slovakça","Slovence","Somalice","İspanyolca","Svahili","İsveçce","Tacikçe",
        "Tamilce","Tatar","Telugu","Temne","Tetum","Taylandca","Tigrinya","Tok Pisin","Tokelauan","Tonga","Tongaca","Türkçe","Türkmence","Tuvaluca",
        "Ukraynaca","Umbundu","Urduca","Özbekçe","Vietnamca","Velş","Volof","Xichangana","Afrika","Asya","Avrupa","Kuzey Amerika","Kuzey Amerika",
        "Okyanusya","Güney Amerika","Şüpheci","Canlıcılık (Animism)","Budizm","Hiristiyanlık","Konfüçyüsçülük","Dürzi","Halk","Hinduizm","Yerli",
        "İslam","Yahudilik","Şamanizm","Şintoizm","Taoculuk","Bağlı olmayan","Alpaka","Çapa","Angkor Wat","Hayvan","Arapça","Silahlı küre","Zırh",
        "Zırhlı","Ok","Ok başı","Balta","Muz","Grup","Bar","Varil","Körfez","Körfez defnesi","Süngü","İncil","Kuş","Kitap","Sınır","Yay","Dal",
        "Köprü","İngiliz bayrağı","Boru","Bina","Kakao","Kaktüs","Kartal","Top","Kano","Kanton","Kapak","Halı","Kale","Sedir","Zincir","Daire",
        "Karanfil","Arması","Kakao","Hindistan cevizi","Madeni para","Pusula","Akbaba","Kordon","Bereket","Adliye","İnek","Leylek","Hilâl","İbik",
        "Çapraz (Haç)","Taç","Güneyhaçı","Hançer","Çapraz","Elmas","Köpek","Yunus","Çift çapraz","Güvercin","Ejderha","Davul","Kartal","Sekiz Köşeli Yıldız",
        "Amblem","İngilizce","Eşkenar","Altı Dalgalı Kenarlı Yıldız","Yüz","Tüy","Dişi","Eğreltiotu","Fimbriation","Ateş","Beş Yaprak",
        "Beş Köşeli Yıldız","Bayrak","Fleurs-de-lys","Çiçek","Çırpma teli uçmak","On Dört Köşeli Yıldız","Dört Köşeli Yıldız","Fransızca",
        "Meyve","Vites","Haç","Küre","Keçi","Çimen","El","Harp","Şapka","Baş","Kask","Altı Köşeli Yıldız","Tepe","Kapüşon","Yatay","Boynuz",
        "İnsan Yüzü","Buz","İkizkenar","Mücevher","Anahtar","kufi","Hanımefendi","Lama","Lamba","Latin","Defne","Yaprak","Bacak","Leopar",
        "Hat","Aslan","Istakoz","Lotus","Pala","Maun (Mahogany)","Mango","Örtü","Harita","Çınar (Akçaağaç)","Miro","Anıt","Ay","Dağ",
        "Tekir (Mullet)","Namele","Küçük Hindistan Cevizi","Meşe","Kürek","Eğik","Okyanus","Zeytin","Süs","Devekuşu-tüy","Palmiye",
        "Papalık tacı","Paralelkenar","Güneş Şemsiyesi","Papağan","Desen","İnci","Penguen","Flama","Beş Köşeli Yıldız","Kişi","Sütun",
        "Çam","Ananas","Nar","Portekizce","Patates","Gökkuşağı","Koç","Işın","Dikdörtgen","Ren Geyiği","Eşkenar Dörtgen","Kurdele","Tüfek",
        "Halka","Nehir (Irmak)","Halat","Gül","Adaçayı","Yelken","Yelkenli","Saltire (haç)","Elyazısı","Deniz","Denizatı","Folk Balığı",
        "Yedi Köşeli Yıldız","Şehadet","Kılıf","Koyun","Kabuk","Kalkan","Gemi","Altı Köşeli Yıldız","Sapan","Duman","Yılan","Kar",
        "İspanyol(ca)","Mızrak","Mahmuz","Kare","Merdivenler","Sap","Yıldız","Taş","Şerit","Şeker Kamışı","Güneş","Mayıs Güneşi",
        "Kılıç","Sembol","Taegeukgi (Güney Kore Bayrağı)","Taiji (En Yüce)","Tekbir","Çadır","Sülüs","Meşale","Totem","Kule","Yamuk",
        "Yamuk Dörtgen","Ağaç","Üçgen","Üç Dişli Mızrak","Trigram","Lale","Kaplumbağa","Uzun diş","On İki Köşeli Yıldız",
        "Yirmi Dört Köşeli Yıldız","Dikey","Volkan (Yanardağ)","Su","Dalga","Dalgalar","Silah","Buğday","Tekerlek","El Arabası",
        "Beyaz Saltire","Kanat","Çelenk","Yin Yang","Zodyak","Adriyatik","Ege","Andaman","Antartik","Arap","Arafura","Arktik",
        "Atlantik","Bali","Baltık","Banda","Barent","Bengal Körfezi","Biscay Körfezi","Bering","Bering Denizleri","Bismarck",
        "Kara","Karayip","Hazar","Celebes","Kelt","Ceram","Chukchi","Doğu Çin","Doğu Sibirya","İngiliz kanalı","Flores",
        "Aden Körfezi","Akabe Körfezi","Kaliforniya Körfezi","Gine Körfezi","Meksika körfezi","Umman Körfezi","Tayland Körfezi",
        "Tayland Körfezi ve Pasifik Okyanusu","Halmahera","Hint","Hint Okyanusu","İyon","İrlanda","Java","Kara","Laccadive","Malavi Gölü",
        "Victoria Gölü","Kara İle Çevrili","Laptev","Liguria","Marmara","Akdeniz","Molacca","Natuna","Kuzey","Norveççe","Pasifik (Büyük)",
        "İran Körfezi","Filipin","Kızıl","Savu","Azov denizi","Japon Denizi","Okhotsk Denizi","Solomon","Güney Çin","Güney","Sulu","Tasman",
        "Timor","Sarı","Sarı Deniz (Yellow)"];

        # Initiate a new timestamp
        $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK

        // Insert Turkey-Turkish Data
        foreach($dataTR as $key => $data)
        {
            ApplicationLanguageData::insert([
                 'created_at' => $timestamp,
                 'updated_at' => $timestamp,
                 'application_language_id' => "2",
                 'application_language_id_count' => $key,
                 'this_language_feature_value' => $data,
                 'based_on_application_language_id' => "999",
            ]);
        }

    }
}
