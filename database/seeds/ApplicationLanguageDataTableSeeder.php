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
        $dataTR = ["Düşük","Orta","Yüksek","Afganistan","Afganistan","Aland","Aland Adası","Arnavutluk","Arnavutluk","CEZAYİR","CEZAYİR","ABD Samoa","Amerikan Samao",
        "ANDORRA","ANDORRA","Angola","Angola","Anguilla","Anguilla","Antarktika","Antarktika Anlaşma Sistemi","Antigua",
        "Antigua and Barbuda","ARJANTİN","ARJANTİN","ERMENİSTAN","ERMENİSTAN","Aruba","Aruba","AVUSTRALYA","AVUSTRALYA","AVUSTURYA","AVUSTURYA","AZERBAYCAN",
        "AZERBAYCAN","BAHAMALAR","BAHAMALAR","BAHREYN","BAHREYN","BANGLADEŞ","BANGLADEŞ","BARBADOS","BARBADOS","BELARUS","BELARUS","BELÇİKA","BELÇİKA",
        "BELİZE","BELİZE","BENİN","BENİN","Bermuda","Bermuda","BUTAN","BUTAN","BOLİVYA","BOLİVYA","Bonaire","Bonaire Sint Eustatius and Saba","BOSNA",
        "BOSNA HERSEK","BOTSVANA","BOTSVANA","Bouvet",
        "Bouvet Adası","BREZİLYA","BREZİLYA","BK Hint","Britanya Hint Okyanus Alanı","BBA","Britanya Bakire Adaları","BRUNEY","BRUNEY","BULGARİSTAN",
        "BULGARİSTAN","BURKİNA FASO","BURKİNA FASO","BURUNDİ","BURUNDİ","KAMBOÇYA","KAMBOÇYA","KAMERUN","KAMERUN","Kanada","Kanada","Kanarya",
        "Kanarya Adaları","CABO VERDE","CABO VERDE",
        "Kayman","Kayman Adaları","OAC","ORTA AFRİKA CUMHURİYETİ","ÇAD","ÇAD","ŞİLİ","ŞİLİ","ÇİN","ÇİN","Kiristmas","Kiristmas Adası","Kokos",
        "Kokos Adası","KOLOMBİYA","KOLOMBİYA","KOMORLAR","KOMORLAR","Kuk","Kuk Adası","KOSTA RİKA","KOSTA RİKA","KOTDİVUAR","KOTDİVUAR","HIRVATİSTAN",
        "HIRVATİSTAN","KÜBA","KÜBA","Kuraço","Kuraço","Kıbrıs","Kıbrıs","ÇEKYA","ÇEKYA","KONGO DC","KONGO DEMOKRATİK CUMHURİYETİ","DANİMARKA","DANİMARKA",
        "CİBUTİ","CİBUTİ","DOMİNİKA","DOMİNİKA","Dominikan","DOMİNİK CUMHURİYETİ","EKVATOR","EKVATOR","MISIR","MISIR","EL SALVADOR","EL SALVADOR","E GİNESİ",
        "EKVATOR GİNESİ","ERİTRE","ERİTRE","ESTONYA","ESTONYA","ESVATİNİ","ESVATİNİ","ETİYOPYA","ETİYOPYA","Falkland","Falkland Adaları","Faroye",
        "Faroye Adaları","FİJİ","FİJİ","FİNLANDİYA","FİNLANDİYA","FRANSA","FRANSA","Guyana","French Guyana","Polenezya","Fransız Polenezya","Fr Antarktik",
        "Fransız GÜney ve Antarktik Alanı","GABON","GABON","GAMBİYA","GAMBİYA","GÜRCİSTAN","GÜRCİSTAN","ALMANYA","ALMANYA","GANA","GANA",
        "Cebelitarık","Cebelitarık","YUNANİSTAN","YUNANİSTAN","Grönland","Grönland","GRENADA","GRENADA","Guadelup","Guadelup","Guyam","Guyam",
        "GUATEMALA","GUATEMALA","Görnse","Görnse","GİNE","GİNE","GİNE BİSSAU","GİNE-BİSSAU","GUYANA","GUYANA","HAİTİ","HAİTİ","H MekDonald",
        "Hörd ve MekDonal Adaları","HONDURAS","HONDURAS","Hong Kong","Hong Kong","MACARİSTAN","MACARİSTAN","İZLANDA","İZLANDA","HİNDİSTAN",
        "HİNDİSTAN","ENDONEZYA","ENDONEZYA","İRAN","İRAN","IRAK","IRAK","İRLANDA","İRLANDA","Ayıl ov Men","Ayıl ov Men","İSRAİL","İSRAİL","İTALYA","İTALYA",
        "JAMAİKA","JAMAİKA","JAPONYA","JAPONYA","Jörsiy","Jörsiy","ÜRDÜN","ÜRDÜN","KAZAKİSTAN","KAZAKİSTAN",
        "KENYA","KENYA","KİRİBATİ","KİRİBATİ","KOSOVA","KOSOVA","Kuwait","Kuwait","KIRGIZİSTAN","KIRGIZİSTAN","LAOS","LAOS","LETONYA","LETONYA","LÜBNAN",
        "LÜBNAN","LESOTHO","LESOTHO","LİBERYA","LİBERYA","LİBERYA","LİBERYA","LİHTENŞTAYN","LİHTENŞTAYN","LİTVANYA","LİTVANYA","LÜKSEMBURG","LÜKSEMBURG",
        "Macau","Macau","MAKEDONYA","MAKEDONYA","MADAGASKAR","MADAGASKAR","MALAVİ","MALAVİ","MALEZYA","MALEZYA","MALDİVLER","MALDİVLER","MALİ","MALİ",
        "MALTA","MALTA","MARŞAL","MARŞAL ADALARI","Martinik","Martinik","MORİTANYA","MORİTANYA","MORİTYUS","MORİTYUS","Mayot","Mayot","MEKSİKA","MEKSİKA","MİKRONEZYA",
        "MİKRONEZYA","MOLDOVA","MOLDOVA","MONAKO","MONAKO","MOĞOLİSTAN","MOĞOLİSTAN","KARADAĞ","KARADAĞ","Monserat","Monserat","FAS","FAS",
        "MOZAMBİK","MOZAMBİK","MYANMAR","MYANMAR","NAMİBYA","NAMİBYA","NAURU","NAURU","NEPAL","NEPAL","Netherlands","Netherlands","Y Kaledonya",
        "Yeni Kaledonya","Y ZELANDA","YENİ ZELANDA","NİKARAGUA","NİKARAGUA","NİJER","NİJER","NİJERYA","NİJERYA","Niyu","Niyu","Norfolk","Norfolk Adası",
        "Mariyana","Kuzey Mariyana Adaları","KUZEY KORE","KUZEY KORE","NORVEÇ","NORVEÇ","UMMAN","UMMAN","PAKİSTAN","PAKİSTAN","PALAU","PALAU","PANAMA",
        "PANAMA","PAPUA YENİ GİNE","PAPUA YENİ GİNE","PARAGUAY","PARAGUAY","PERU","PERU","FİLİPİNLER","FİLİPİNLER","Pitcairn","Pitcairn Adaları","POLONYA",
        "POLONYA","PORTEKİZ","PORTEKİZ","Puerto Riko","Puerto Riko","Katar","Katar","KONGO","KONGO CUMHURİYETİ","Reyunyin","Reyunyin","ROMANYA","ROMANYA",
        "RUSYA","RUSYA FEDERASYONU","RUANDA","RUANDA","Bartelemi","Aziz Bartelemi","Az Helena","Azize Helena","Az Kits","Az Kits ve Nevis","Az Luciya",
        "Azize Luciya","Az Martin","Aziz Martin","Az Piyer","Aziz Piyer ve Mikelon","Az Vincen","Aziz Vincen ve Grenadin","Samoa","Samoa","San Marino",
        "San Marino","Sag Tome (yumusak g?)","Sag Tome ve Principe","SUUDİ ARABİSTAN","SUUDİ ARABİSTAN","SENEGAL","SENEGAL","SIRBİSTAN","SIRBİSTAN",
        "SEYŞELLER","SEYŞELLER","SİERRA LEONE","SİERRA LEONE",
        "SİNGAPUR","SİNGAPUR","Az Marten","Aziz Marten","SLOVAKYA","SLOVAKYA","SLOVENYA","SLOVENYA","Solomon","SOLOMON ADALARI","SOMALİ","SOMALİ",
        "GÜNEY AFRİKA CUMHURİYETİ","GÜNEY AFRİKA CUMHURİYETİ","G Gorgiya","GÜNEY Gorgiya ve GÜney Sandavic AdalarI","GÜNEY KORE","GÜNEY KORE",
        "G SUDAN","GÜNEY SUDAN","İSPANYA","İSPANYA","SRİ LANKA","SRİ LANKA","FİLİSTİN","FİLİSTİN DEVLETİ","SUDAN","SUDAN","SURİNAM","SURİNAM",
        "Svalbard","Svalbard ve Jen Mayen","İSVEÇ","İSVEÇ","İSVİÇRE","İSVİÇRE","SURİYE","SURİYE","Tayvan","Tayvan Cumhuriyeti","TACİKİSTAN",
        "TACİKİSTAN","TANZANYA","TANZANYA","TAYLAND","TAYLAND","DOĞU TİMOR","DOĞU-TİMOR","TOGO","TOGO","Tokelau","Tokelau","TONGA","TONGA",
        "TRİNİDAD VE TOBAGO","TRİNİDAD VE TOBAGO","TUNUS","TUNUS","TÜRKİYE","TÜRKİYE","KKTC","KUZEY KIBRIS TÜRK CUMHURİYETİ","TÜRKMENİSTAN",
        "TÜRKMENİSTAN","Turkler ve Kayiklari","Turkler ve Kayiklari Adalari","Tuvalu","Tuvalu","UGANDA","UGANDA","UKRAYNA","UKRAYNA","BAE",
        "BİRLEŞİK ARAP EMİRLİKLERİ","BK","BİRLEŞİK KRALLIK","ABD Maynir","ABD Maynir Outlaying Adalari","ABD","AMERİKA BİRLEŞİK DEVLETLERİ",
        "ABD-BA","Amerikan Bakire Adalari","URUGUAY","URUGUAY","ÖZBEKİSTAN","ÖZBEKİSTAN","VANUATU","VANUATU","VATİKAN","VATİKAN","VENEZUELA",
        "VENEZUELA","VİETNAM","VİETNAM","Walis","Walis ve Futuna","Bati Sahara","Bati Sahara","Yemen","Yemen","ZAMBİYA","ZAMBİYA","ZİMBABVE",
        "ZİMBABVE","Abu Dabi","Abuja","Akra","Adamstown","Addis Ababa","Cezayir","Alofi","Amman","Amsterdam","Andorra la Vella","Ankara","Antananarivo",
        "Apia","Aşkabat","Asmara","Astana","Asunsion","Atina","Avarua","Bagdat","Bakü","Bamako","Bandar Seri Begavan","Bangkok","Bangui","Banjul",
        "Basse-Terre","Baster","Pekin","Beyrut","Belgrad","Belmopan","Berlin","Bern","Bişkek","Bissau","Bloemfontein","Bogota","Brades","Brazilya",
        "Bratislava","Brazavil","Bridgetown","Brüksel","Bükreş","Budapeşte","Buenos Aires","Bujumbura","Kahire","Adalet Kampı","Kanberra","Cape Town",
        "Karakas","Castries","Cayenne","Charlotte Amalie","Kişinev","Cockburn Town","Kolombo","Konakri","Kopenhag","Dakar","Şam","Dakka","Dili","Cibuti",
        "Dodoma","Doha","Douglas","Dublin","Duşanbe","Doğu Kudüs","El Aaiún","Flying Fish Cove","Fort-de-France","Freetown","Funafuti","Gaboron","Garapan",
        "George Town","Georgetown","Cebelitarık","Guatemala","Gustavia","Hagåtña","Hamilton","Hanoi","Harare","Havana","Helsinki","Hong Kong","Honiara",
        "İslamabad","Cakarta","Jamestown","Kudüs","Juba","Kâbil","Kampala","Katmandu","Hartum","Kigali","King Edward Point","Kingston-JM","Kingston-NF",
        "Kingstown","Kinşasa","Kralendijk","Kuala Lumpur","Kuveyt","Kiev","La Paz","Las Palmas","Librevil","Lilongve","Lima","Lizbon","Lübliyana","Lobamba",
        "Lome","Londra","Longyearbyen","Luanda","Lusaka","Lüksemburg","Macau","Madrid","Majuro","Malabo","Male","Mamoudzou","Managua","Manama","Manila",
        "Maputo","Mariehamn","Marigot","Maseru","Matu-Utu","Mbabane","Melekeok","Meksika","Minsk","Mogadişu","Monako","Monrovia","Montevideo","Moroni",
        "Moskova","Muskat","Encemine","N/A-AQ","N/A-BV","N/A-HM","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","tz-2-2","tz-1-1","tz 1"];

        $dataSK = ["Nízky","Stredný","Vysoký","Afganistan","Afganistan","Alandy","Alandské ostrovy","Albánsko","Albánsko","Alžírsko",
        "Alžírsko","Americká Samoa","Americká Samoa","Andorra","Andorra","Angola","Angola","Anguilla","Anguilla","Antarktída","","Antigua","Antigua a Barbuda",
        "Argentína","Argentína","Arménsko","Arménsko","Aruba","Aruba","Aruba","Aruba","Rakúsko","Rakúsko","Azerbajdžan","Azerbajdžan",
        "Bahamy","Bahamy","Bahrajn","Bahrajn","Bangladéš","Bangladéš","Barbados","Barbados","Bielorusko","Bielorusko","Belgicko","Belgicko","Belize",
        "Belize","Benin","Benin","Bermudy","Bermudy","Bhután","Bhután","Bolívia","Bolívia","Bonaire","Bonaire Sint Eustatius a Saba","Bosna",
        "Bosna a Hercegovina","Botswana","Botswana","Bouvet","Ostrov Bouvet","Brazília","Brazília","Britské územie Indického oceánu",
        "Britské územie Indického oceánu","Britské Panenské ostrovy","Britské Panenské ostrovy","Brunej","Brunej","Bulharsko","Bulharsko","Burkina Faso",
        "Burkina Faso","Burundi","Burundi","Kambodža","Kambodža","Kamerun","Kamerun","Kanada","Kanada","Kanarske","Kanarske ostrovy","Kapverdy","Kapverdy",
        "Kajmany","Kajmanské ostrovy","Stredoafrická republika","Stredoafrická republika","Čad","Čad","Čile","Čile","Čína","Čína","Vianočný","Vianočný ostrov",
        "Kokosové","Kokosové ostrovy","Kolumbia","Kolumbia","Komory","Komory","Cookove","Cookove ostrovy","Kostarika","Kostarika","Pobrežie Slonoviny",
        "Pobrežie Slonoviny","Chorvátsko","Chorvátsko","Kuba","Kuba","Curaçao","Curaçao","Cyprus","Cyprus","Česko","Česko","Konžská DR","Konžská demokratická republika",
        "Dánsko","Dánsko","Džibutsko","Džibutsko","Dominika","Dominika","Dominikánska","Dominikánska republika","Ekvádor","Ekvádor","Egypt","Egypt","Salvádor","Salvádor",
        "R. Guinea","Rovníková Guinea","Eritrea","Eritrea","Estónsko","Estónsko","Eswatini","Eswatini","Etiópia","Etiópia","Falklandy","Falklandské ostrovy",
        "Faery","Faerské ostrovy","Fidži","Fidži","Fínsko","Fínsko","Francúzsko","Francúzsko","Guiana","Francúzska Guiana","Polynézia","Francúzska Polynézia",
        "Francúzske antarktické","Francúzske južné a antarktické územia","Gabon","Gabon","Gambia","Gambia","Gruzínsko","Gruzínsko","Nemecko","Nemecko","Ghana",
        "Ghana","Gibraltár","Gibraltár","Grécko","Grécko","Grónsko","Grónsko","Grenada","Grenada","Guadeloupe","Guadeloupe","Guam","Guam","Guatemala","Guatemala",
        "Guernsey","Guernsey","Guinea","Guinea","Guinea Bissau","Guinea-Bissau","Guyana","Guyana","Haiti","Haiti","H McDonald","Ostrov Heard a ostrovy McDonald",
        "Honduras","Honduras","Hong Kong","Hong Kong","Maďarsko","Maďarsko","Island","Island","India","India","Indonézia","Indonézia","Irán","Irán","Irak","Irak",
        "Írsko","Írsko","Isle of Man","Isle of Man","Izrael","Izrael","Taliansko","Taliansko","Jamajka","Jamajka","Japonsko","Japonsko","Jersey","Jersey","Jordán",
        "Jordán","Kazachstan","Kazachstan",
        "Keňa","Keňa","Kiribati","Kiribati","Kosovo","Kosovo","Kuvajt","Kuvajt","Kirgizsko","Kirgizsko","Laos","Laos","Lotyšsko","Lotyšsko","Libanon","Libanon",
        "Lesotho","Lesotho","Libéria","Libéria","Líbya","Líbya","Lichtenštajnsko","Lichtenštajnsko","Litva","Litva","Luxembursko","Luxembursko","Macau","Macau",
        "Macedónska republika","Macedónska republika","Madagaskar","Madagaskar","Malawi","Malawi","Malajzia","Malajzia","Maldivy","Maldivy","Mali","Mali","Malta",
        "Malta","Marshallove","Marshallove ostrovy","Martinique","Martinique","Mauritánia","Mauritánia","Maurícius","Maurícius","Mayotte","Mayotte","Mexiko",
        "Mexiko","Mikronézia","Mikronézia","Moldavsko","Moldavsko","Monako","Monako","Mongolsko","Mongolsko","Čierna Hora","Čierna Hora","Montserrat","Montserrat",
        "Maroko","Maroko","Mozambik","Mozambik","Mjanmarsko","Mjanmarsko","Namíbia","Namíbia","Nauru","Nauru","Nepál","Nepál","Holandsko","Holandsko","N Kaledónia",
        "Nová Kaledónia","N Zéland","Nový Zéland","Nikaragua","Nikaragua","Niger","Niger","Nigéria","Nigéria","Niue","Niue","Norfolk","Norfolkský ostrov","Mariány",
        "Severné Mariány","Severná Kórea","Severná Kórea","Nórsko","Nórsko","Omán","Omán","Pakistan","Pakistan","Pakistan","Pakistan","Pakistan","Pakistan",
        "P N Guinea","Papua-Nová Guinea","Paraguaj","Paraguaj","Peru","Peru","Filipíny","Filipíny","Pitcairn","Pitcairn ostrovy","Poľsko","Poľsko","Portugalsko",
        "Portugalsko","Portoriko","Portoriko","Katar","Katar","Kongo","Konžská demokratická republika","Réunion","Réunion","Rumunsko","Rumunsko","Rusko","Ruská federácia",
        "Rwanda","Rwanda","Bartolomej","Svätý Bartolomej","Sv Helena","Svätá Helena","Sv Krištof","Svätý Krištof a Nevis","Sv Lucia","Svätá Lucia","Sv Martin",
        "Svätý Martin","Sv Pierre","Svätý Pierre a Miquelon","Sv Vincent","Svätý Vincent a Grenadíny","Samoa","Samoa","San Maríno","San Maríno","Svätý Tomáš",
        "Svätý Tomáš a Princov ostrov","Saudská Arábia","Saudská Arábia","Senegal","Senegal","Srbsko","Srbsko","Seychely","Seychely","Sierra Leone","Sierra Leone",
        "Singapur","Singapur","St Maarten","Sint Maarten","Slovensko","Slovensko","Slovinsko","Slovinsko","Šalamúnske","Šalamúnove ostrovy","Somálsko","Somálsko",
        "Južná Afrika","Južná Afrika","J Gruzínsko","Južná Gruzínsko a Južné Sandwichove ostrovy","Južná Kórea","Južná Kórea","J Sudán","Južný Sudán","Španielsko",
        "Španielsko","Srí Lanka","Srí Lanka","Palestína","Palestínsky štát","Sudán","Sudán","Surinam","Surinam","Svalbard","Svalbard and Jan Mayen","Švédsko",
        "Švédsko","Švajčiarsko","Švajčiarsko","Sýria","Sýria","Taiwan","Taiwan: Čína","Tadžikistan","Tadžikistan","Tanzánia","Tanzánia","Thajsko","Thajsko",
        "Timor Leste","Timor-Leste","Togo","Togo","Tokelau","Tokelau","Tonga","Tonga","Trinidad","Trinidad a Tobago","Tunisko","Tunisko","Turecko","Turecko",
        "TRSC","Turecká republika severného Cypru","Turkménsko","Turkménsko","Turks Caicos","Ostrovy Turks a Caicos","Tuvalu","Tuvalu","Uganda","Uganda","Ukrajina",
        "Ukrajina","SAE","Spojené Arabské Emiráty","UK","Spojené kráľovstvo","US Minor","Malé odľahlé ostrovy Spojených štátoch","USA","Spojené štáty","USVI",
        "Americké Panenské ostrovy","Uruguaj","Uruguaj","Uzbekistan","Uzbekistan","Vanuatu","Vanuatu","Vatikán","Vatikánske a Svätá stolica","Venezuela","Venezuela",
        "Vietnam","Vietnam","Wallis","Wallis a Futuna","Západná Sahara","Západná Sahara","Jemen","Jemen","Zambia","Zambia","Zimbabwe","Zimbabwe","Abú Dhabí",
        "Abuja","Akkra","Adamstown","Addis Abeba","Alžír","Alofi","Ammán","Amsterdam","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","sz-2","sz-1","szb"];

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

        // Insert Slovakia-Slovak Data
        foreach($dataSK as $key => $data)
        {
            ApplicationLanguageData::insert([
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
                'application_language_id' => "3",
                'application_language_id_count' => $key,
                'this_language_feature_value' => $data,
                'based_on_application_language_id' => "999",
            ]);
        }

    }
}
