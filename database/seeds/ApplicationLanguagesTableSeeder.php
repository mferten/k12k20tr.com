<?php

use Illuminate\Database\Seeder;

use App\ApplicationLanguage;
use App\Country;
use App\Language;

class ApplicationLanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # Array of Initial (Users can not change/delete) Application Core Languages
        $language = ['English', 'Turkish', 'Slovak'];
        $country = ['UnitedStatesofAmerica', 'Turkey', 'Slovakia'];
        # Initiate a new timestamp we can use for created_at/updated_at fields
        $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK

        # Loop through each Region, adding them to the database
        # USA English MUST be the FIRST for the Application Language Text and Data
        $loop = 0;
        while ($loop < 3)
        {
            ApplicationLanguage::insert([
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
                'country_id' => Country::getCountryIdFromName($country[$loop]),
                'language_id' => Language::getLanguageId($language[$loop]),
            ]);
            $loop++;
        }
    }
}
