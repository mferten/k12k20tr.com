<?php

use Illuminate\Database\Seeder;
use App\ApplicationI18ntag;

class ApplicationI18ntagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // "var" is as it is but "id" can be replaced by "innerHTML" or "value"
        // if all of them are not "innerHTML"
        $i18Tags = [
            'Flag Color' => 'id',
            'Second Flag Color' => 'id',
            'Third Flag Color' => 'id',
            'Flag Shape' => 'id',
            'Second Flag Shape' => 'id',
            'Third Flag Shape' => 'id',
            'Cellular Phone' => 'id',
            'Language Name' => 'id',
            'Population Name' => 'id',
            'Religion Name' => 'id',
            'Income - GDP' => 'id',
            'Overweight Ratio %' => 'id',
            'Life Expectancy' => 'id',
            'Internet Usage %' => 'id',
            'R & D per GDP%' => 'id',
            'Clean Drinking Water %' => 'id',
            'Clean Toilet Facility %' => 'id',
            'Capital Cities' => 'id',
            'Surface Area' => 'id',
            'Oceans, Seas or Lakes' => 'id',
            'Driving Side' => 'id',
            'Sex Ratio M per 100 F' => 'id',
            'Seats Held By Women %' => 'id',
            'id_ReverseImage'  => 'id',
            'id_CleanWaterDM'  => 'id',
            'id_CleanToiletDM'  => 'id',
            'id_CellDM'  => 'id',
            'id_RandDDM'  => 'id',
            'id_InternetDM'  => 'id',
            'id_SexRatioDM'  => 'id',
            'id_SeatRatioDM'  => 'id',
            'id_HDIDM'  => 'id',
            'id_GiniDM'  => 'id',
            'id_CountryCodesDM'  => 'id',
            'id_And' => 'id',
            'id_Or' => 'id',
            'id_Right' => 'id',
            'id_Left' => 'id',
            'id_Women' => 'id',
            'id_CountryThText' => 'id',
            'id_IncomeThText' => 'id',
            'id_RegionThText' => 'id',
            'id_CapitalThText' => 'id',
            'id_PopulationThText' => 'id',
            'id_SurfaceThText' => 'id',
            'id_LargestThText' => 'id',
            'id_Country CodesThText' => 'id',
            'id_HowItWorks' => 'id',
            'id_Basics' => 'id',
            'id_TechnologiesTitle' => 'id',
            'id_HowTechnologiesUsed' => 'id',
            'id_InternationalizationI18n' => 'id',
            'id_AboutTextOne' => 'id',
            'id_AboutTextTwo' => 'id',
            'id_AboutTextThree' => 'id',
            'id_AboutTextFour' => 'id',
            'id_AboutTextFive' => 'id',
            'id_DataLanguages_Ii18n' => 'id',
            'id_LanguagePlaceHolder' => 'id',
            'id_AmericanEnglish' => 'id',
            'id_AmericanEnglishInOtherLanguage' => 'id',
            'id_EWorldMagic' => 'id',
            'id_InteractiveMaps' => 'id',
            'id_CountryInformation' => 'id',
            'id_SVGNationalFlags' => 'id',
            'id_NationalAnthem' => 'id',
            'id_LinuxServer' => 'id',
            'id_WebServer' => 'id',
            'id_MailServer' => 'id',
            'id_WorldFactsCia' => 'id',
            'id_WorldFactsWiki' => 'id',
            'id_Required' => 'id',
            'id_Save' => 'id',
            'id_World' => 'id',
            'id_Regions' => 'id',
            'id_Africa' => 'id',
            'id_Asia' => 'id',
            'id_Europe' => 'id',
            'id_NorthAmerica' => 'id',
            'id_Oceania' => 'id',
            'id_SouthAmerica' => 'id',
            'id_Religiosity' => 'id',
            'id_Color' => 'id',
            'id_Color2nd' => 'id',
            'id_Color3rd' => 'id',
            'id_Shape' => 'id',
            'id_Shape2nd' => 'id',
            'id_Shape3rd' => 'id',
            'id_Cell' => 'id',
            'id_Internet' => 'id',
            'id_RandD' => 'id',
            'id_CleanWater' => 'id',
            'id_CleanToilet' => 'id',
            'id_SexRatio' => 'id',
            'id_SeatRatio' => 'id',
            'id_SexRatioDisplay' => 'id',
            'id_SeatRatioDisplay' => 'id',
            'id_CellDisplay' => 'id',
            'id_InternetDisplay' => 'id',
            'id_RandDDisplay' => 'id',
            'id_CleanWaterDisplay' => 'id',
            'id_CleanToiletDisplay' => 'id',
            'id_Overweight' => 'id',
            'id_OverweightDisplay' => 'id',
            'id_LifeExpectancy' => 'id',
            'id_LifeExpectancyDisplay' => 'id',
            'id_Population' => 'id',
            'id_Reports' => 'id',
            'id_PopulationDisplay' => 'id',
            'id_Language' => 'id',
            'id_LanguageDisplay' => 'id',
            'id_Religion' => 'id',
            'id_ReligionDisplay' => 'id',
            'id_CapitalCities' => 'id',
            'id_CapitalCitiesDisplay' => 'id',
            'id_CountryList' => 'id',
            'id_Income' => 'id',
            'id_Country' => 'id',
            'id_IncomeDisplay' => 'id',
            'id_Water' => 'id',
            'id_WaterDisplay' => 'id',
            'id_LandArea' => 'id',
            'id_LandAreaDisplay' => 'id',
            'id_DrivingSide' => 'id',
            'id_DrivingSideDisplay' => 'id',
            'id_TourismDisplay' => 'id',
            'id_GovernmentDisplay' => 'id',
            'id_WeatherDisplay' => 'id',
            'id_TravelWarningDisplay' => 'id',
            'id_WikiCountryDisplay' => 'id',
            'id_CIACountryDisplay' => 'id',
            'id_UNCountryDisplay' => 'id',
            'id_TimeAndDateDisplay' => "id",
            'id_CountryCodesDisplay' => "id",
            'id_CountryCodes' => "id",
            'id_CurrencyDisplay' => "id",
            'id_GiniDisplay' => "id",
            'id_HDIDisplay' => "id",
            'id_GoogleMapDisplay' => "id",
            'id_PlaySound' => 'id',
            'id_SmallEntityText' => 'id',
            'id_CombineSearchText' => 'id',
            'id_CombineSearchReverse' => 'id',
            'id_CombineSearchNone' => 'id',
            'id_CombineSearchAnd' => 'id',
            'id_CombineSearchOr' => 'id',
            'title_CombineSearchReverse' => 'title',
            'title_CombineSearchNone' => 'title',
            'title_CombineSearchAnd' => 'title',
            'title_CombineSearchOr' => 'title',
            'title_soundOnOffIconPause' => 'title',
            'title_soundOnOffIconPlay' => 'title',
            'title_SaveStartupValues' => 'title',
            'id_AnthemApple' => 'id',
            'id_GreetingApple' => 'id',
            'id_DrillDown' => 'id',
            'id_DrillDown' => 'id',
            'id_TextLanguages' => 'id',
            'id_DataLanguages' => 'id',
            'id_AboutMe' => 'id',
            'id_Reset' => 'id',
            'id_Return' => 'id',
            'id_FirstMessage' => 'id',
            'id_Surfing' => 'id',
            'id_Searching' => 'id',
            'id_Register' => 'id',
            'id_RegisterUser' => 'id',
            'id_ChooseOne' => 'id',
            'id_LanguageImplementedBy' => 'id',
            'id_Billions' => 'id',
            'id_Millions' => 'id',
            'id_Thousands' => 'id',
            'id_Citations' => 'id',
            'id_CountryFacts' => 'id',
            'id_RegionLegend' => 'id',
            'id_Upgraded' => 'id',
            'id_PanelOneText' => 'id',
            'id_PanelTwoText' => 'id',
            'id_PanelTwoOneText' => 'id',
            'id_PanelThreeText' => 'id',
            'id_PanelFourText' => 'id',
            'id_PanelFiveText' => 'id',
            'id_PanelSixText' => 'id',
            'id_PanelSevenText' => 'id',
            'id_PanelEightText' => 'id',
            'id_ListAscending' => 'id',
            'id_ListDescending' => 'id',
            'id_ConfigureLegend' => 'id',
            "id_EMail" => 'id',
            "id_ElementarySchool" => 'id',
            "id_MiddleSchool" => 'id',
            "id_HighSchool" => 'id',
            "id_College" => 'id',
            "id_Please" => 'id',
            "id_SelectQuestion" => 'id',
            "id_FromCategory" => 'id',
            "id_ShowAnswer" => 'id',
            "id_ShowCountry" => 'id',
            "id_StartWith" => 'id',
            "id_AppLanguageToUseB" => 'id',
            "id_Menu" => 'id',
            "id_MenuStart" => 'id',
            "id_MenuUsage" => 'id',
            "id_Countries" => 'id'
        ];

        # Initiate a new timestamp we can use for created_at/updated_at fields
         $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK

        foreach($i18Tags as $key => $value)
        {
            ApplicationI18ntag::insert([
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
                'application_tag' => $key,
                'id_or_var' => $value,
            ]);
        }
    }
}
