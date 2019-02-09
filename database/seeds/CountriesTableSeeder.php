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
            "FalklandIslands" => "Falkland",
            "StateofPalestine" => "Palestine",
            "CaymanIslands" => "Cayman",
            "NorthernMarianaIslands" => "Mariana",
            "NorfolkIsland" => "Norfolk",
            "FrenchPolynesia" => "Polynesia",
            "SaintPierreandMiquelon" => "St Pierre",
            "PitcairnIslands" => "Pitcairn",
            "SaintHelena" => "St Helena",
            "SvalbardandJanMayen" => "Svalbard",
            "SanMarino" => "San Marino",
            "SaoTomeandPrincipe" => "São Tomé",
            "TurksandCaicosIslands" => "Turks Caicos",
            "FrenchSouthernandAntarcticLands" => "Fr Antarctic",
            "VaticanCityAndHolySee" => "Vatican",
            "WallisandFutuna" => "Wallis",
            "HongKong" => "Hong Kong",
            "BonaireSintEustatiusandSaba" => "Bonaire",
            "FaroeIslands" => "Faroe",
            "SintMaarten" => "St Maarten",
            "SaintMartin" => "St Martin",
            "CaboVerde" => "Cabo Verde",
            "CotedIvoire" => "Côte d'Ivoire",
            "SierraLeone" => "Sierra Leone",
            "SouthAfrica" => "South Africa",
            "TimorLeste" => "Timor Leste",
            "NorthKorea" => "North Korea",
            "SouthKorea" => "South Korea",
            "RussianFederation" => "Russia",
            "SaudiArabia" => "Saudi Arabia",
            "CentralAfricanRepublic" => "CAR",
            "SriLanka" => "Sri Lanka",
            "UnitedArabEmirates" => "UAE",
            "BosniaandHerzegovina" => "Bosnia",
            "UnitedKingdom" => "UK",
            "CostaRica" => "Costa Rica",
            "DominicanRepublic" => "Dominican",
            "ElSalvador" => "El Salvador",
            "FrenchGuiana" => "Guiana",
            "SaintKittsandNevis" => "St Kitts",
            "SaintLucia" => "St Lucia",
            "SaintVincentandGrenadines" => "St Vincents",
            "TrinidadandTobago" => "Trinidad",
            "UnitedStatesofAmerica" => "USA",
            "MarshallIslands" => "Marshall",
            "NewZealand" => "N Zealand",
            "NewCaledonia" => "N Caledonia",
            "PapuaNewGuinea" => "P N Guinea",
            "SolomonIslands" => "Solomon",
            "BurkinaFaso" => "Burkina Faso",
            "BritishVirginIslands" => "BVI",
            "UnitedStatesVirginIslands" => "USVI",
            "EquatorialGuinea" => "E Guinea",
            "GuineaBissau" => "Guinea Bissau",
            "PuertoRico" => "Puerto Rico",
            "CookIslands" => "Cook",
            "TurkishRepublicofNorthernCyprus" => "TRNC",
            "Reunion" => "Réunion",
            "SaintBarthelemy" => "Barthélemy",
            "IsleofMan" => "Isle of Man",
            "AmericanSamoa" => "US Samoa",
            "ChristmasIsland" => "Christmas",
            "CocosIslands" => "Cocos",
            "AntarcticTreatySystem" => "Antarctic",
            "CanaryIslands" => "Canary",
            "SouthGeorgiaAndSouthSandwichIslands" => "S Georgia",
            "AlandIslands" => "Åland",
            "BouvetIsland" => "Bouvet",
            "HeardIslandandMcDonaldIslands" => "H McDonald",
            "UnitedStatesMinorOutlyingIslands" => "US Minor",
            "AntiguaandBarbuda" => "Antigua",
            "BritishIndianOceanTerritory" => "UK Indian",
            "DemocraticRepublicoftheCongo" => "DR Congo",
            "RepublicofCongo" => "Rep Congo",
            "WesternSahara" => "West Sahara",
            "Curacao" => "Curaçao",
            "SouthSudan" => "S Sudan",
        ];

        # Long Name for Congratulation Panel
        $longCountryNames =
        [
            "FalklandIslands" => "Falkland Islands",
            "StateofPalestine" => "State of Palestine",
            "CaymanIslands" => "Cayman Islands",
            "NorthernMarianaIslands" => "Northern Mariana Islands",
            "NorfolkIsland" => "Norfolk Island",
            "FrenchPolynesia" => "French Polynesia",
            "SaintPierreandMiquelon" => "Saint Pierre and Miquelon",
            "PitcairnIslands" => "Pitcairn Islands",
            "SaintHelena" => "Saint Helena",
            "SvalbardandJanMayen" => "Svalbard and Jan Mayen",
            "SanMarino" => "San Marino",
            "SaoTomeandPrincipe" => "São Tomé and Príncipe",
            "TurksandCaicosIslands" => "Turks and Caicos Islands",
            "FrenchSouthernandAntarcticLands" => "French Southern and Antarctic Lands",
            "VaticanCityAndHolySee" => "Vatican City and Holy See",
            "WallisandFutuna" => "Wallis and Futuna",
            "HongKong" => "Hong Kong",
            "BonaireSintEustatiusandSaba" => "Bonaire Sint Eustatius and Saba",
            "FaroeIslands" => "Faroe Islands",
            "SintMaarten" => "Sint Maarten",
            "SaintMartin" => "Saint Martin",
            "CaboVerde" => "Cabo Verde",
            "CotedIvoire" => "Côte d'Ivoire",
            "SierraLeone" => "Sierra Leone",
            "SouthAfrica" => "South Africa",
            "TimorLeste" => "Timor-Leste",
            "NorthKorea" => "North Korea",
            "SouthKorea" => "South Korea",
            "RussianFederation" => "Russian Federation",
            "SaudiArabia" => "Saudi Arabia",
            "CentralAfricanRepublic" => "Central African Republic",
            "SriLanka" => "Sri Lanka",
            "UnitedArabEmirates" => "United Arab Emirates",
            "BosniaandHerzegovina" => "Bosnia and Herzegovina",
            "UnitedKingdom" => "United Kingdom",
            "CostaRica" => "Costa Rica",
            "DominicanRepublic" => "Dominican Republic",
            "ElSalvador" => "El Salvador",
            "FrenchGuiana" => "French Guiana",
            "SaintKittsandNevis" => "St. Kitts & Nevis",
            "SaintLucia" => "Saint Lucia",
            "SaintVincentandGrenadines" => "Saint Vincent and the Grenadines",
            "TrinidadandTobago" => "Trinidad and Tobago",
            "UnitedStatesofAmerica" => "United States",
            "DemocraticRepublicoftheCongo" => "Democratic Republic of the Congo",
            "SouthSudan" => "South Sudan",
            "RepublicofCongo" => "Republic of Congo",
            "WesternSahara" => "Western Sahara",
            "MarshallIslands" => "Marshall Islands",
            "NewZealand" => "New Zealand",
            "NewCaledonia" => "New Caledonia",
            "PapuaNewGuinea" => "Papua New Guinea",
            "SolomonIslands" => "Solomon Islands",
            "BurkinaFaso" => "Burkina Faso",
            "BritishVirginIslands" => "British Virgin Islands",
            "UnitedStatesVirginIslands" => "United States Virgin Islands",
            "EquatorialGuinea" => "Equatorial Guinea",
            "GuineaBissau" => "Guinea-Bissau",
            "PuertoRico" => "Puerto Rico",
            "CookIslands" => "Cook Islands",
            "Taiwan" => "Taiwan: Republic of China",
            "TurkishRepublicofNorthernCyprus" => "Turkish Republic of Northern Cyprus",
            "Reunion" => "Réunion",
            "SaintBarthelemy" => "Saint Barthélemy",
            "IsleofMan" => "Isle of Man",
            "AmericanSamoa" => "American Samoa",
            "ChristmasIsland" => "Christmas Island",
            "CocosIslands" => "Cocos Islands",
            "Bahamas" => "Bahamas",
            "BritishIndianOceanTerritory" => "British Indian Ocean Territory",
            "AntarcticTreatySystem" => "Antarctic Treaty System",
            "CanaryIslands" => "Canary Islands",
            "SouthGeorgiaAndSouthSandwichIslands" => "South Georgia And South Sandwich Islands",
            "AlandIslands" => "Åland Islands",
            "BouvetIsland" => "Bouvet Island",
            "HeardIslandandMcDonaldIslands" => "Heard Island and McDonald Islands",
            "UnitedStatesMinorOutlyingIslands" => "United States Minor Outlying Islands",
            "AntiguaandBarbuda" => "Antigua and Barbuda",
            "Curacao" => "Curaçao"
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
