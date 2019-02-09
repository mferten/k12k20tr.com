<?php

use Illuminate\Database\Seeder;
use App\Country;
use App\Feature;

class FeaturesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # Load json file into PHP array: this will be a copy from public js/ without the variable
        $countryFeature = json_decode(file_get_contents(database_path().'/jsonfile/countriesFeatures.json'), true);
        # Initiate a new timestamp we can use for created_at/updated_at fields
        $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK
        foreach($countryFeature as $countryName => $features)
        {
            $countryId = Country::getCountryIdFromName($countryName);
            if (!is_null($countryId))
            {
                foreach ($features as $oneFeatureObject)
                {
                    // skip any Display (not Data) Object
                    if (strpos($oneFeatureObject['feature'], "Display") == false)
                    {
                        Feature::insert([
                            'created_at' => $timestamp,
                            'updated_at' => $timestamp,
                            'value' => $oneFeatureObject['value'],
                            'feature' => $oneFeatureObject['feature'],
                            'comment' => $oneFeatureObject['comment'],
                            'country_id' => $countryId,
                        ]);
                    }
                }
            }
        }
    }
}
