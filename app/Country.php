<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    public function regions()
    {
		    # Country can have many Regions
		    # Define a many-to-many relationship.
		    return $this->belongsToMany('App\Region');
    }

    public function waters()
    {
		    # Country can have many Waters
		    # Define a many-to-many relationship.
		    return $this->belongsToMany('App\Water')->withTimestamps();
	  }

    public function languages() {
		    # Country can have many Languages
		    # Define a many-to-many relationship.
		    return $this->belongsToMany('App\Language')->withTimestamps();
	  }

    public function features() {
		    # Country can have many Feastures
		    # Define a many-to-many relationship.
		    return $this->belongsToMany('App\Feature');
	  }

    public function tips()
    {
        # Country can have many Tips
        # Define a many-to-many relationship.
        return $this->hasMany('App\Tip');
    }

    public function capitalCities() {
		    # Country can have many Capital Cities (e.g. South Africa)
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\CapitalCity');
	  }

    public function applicationLanugages() {
		    # Country can have many Application Languagess as its Languages (e.g.Switzerland, India)
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\ApplicationLanguage');
	  }

    public function countryDataLanguages()
    {
		    # Country can have many Country Data Languages
		    # Define a one-to-many relationship.
		    return $this->hasMany('App\CountryDataLanguage');
	  }

    public function coordinates()
    {
		    # Country can have many interest area Coordinates (Latitudes and Longitude)
		    # Define a many-to-many relationship.
		    return $this->belongsToMany('App\Coordinate');
    }

    // For Application Language Page excluding USA and Turkey
    public static function getCountriesForLanguagePage($selectedApplicationLanguageTexts)
    {
        # read countries table: sorted by the name ascending
        $countriesDropDown = "<option value='choose'>" . $selectedApplicationLanguageTexts['id_ChooseOne'] . "</option>";
        $countries = Country::orderBy('country', 'ASC')->get();
        foreach ($countries as $country) :
            # if country long name is null/blank use country
            $countryName = ($country->long_name == null || $country->long_name == '') ? $country->country : $country->long_name;
            # skip USA
            if ($countryName == "USA")
            {
                // User can not modify the core application languages: Use Email sending option for them to request (version II)
            }
            else
            {
                $countriesDropDown .= "<option value='$country->id'>$countryName</option>";
            }
        endforeach;
        return $countriesDropDown;
    }

    // Only the Country list (no other related models (region) and no other column but the country name)
    public static function getCountries()
    {
        # read countries table: sorted by the name ascending
        $countriesDropDown = "<option value='choose'>" . $selectedApplicationLanguageTexts['id_ChooseOne'] . "</option>";
        $countries = Country::orderBy('country', 'ASC')->get();
        foreach ($countries as $country) :
            # if long name is null/blank use country
            $countryName = ($country->long_name == null || $country->long_name == '') ? $country->country : $country->long_name;
            # skip Turkey and USA
            $countriesDropDown .= "<option value='$country->id'>$countryName</option>";
        endforeach;
        return $countriesDropDown;
    }

    # Get the given Countries Languages
    public static function getRegionCountriesLanguages($aRegionCountries)
    {
        # Retrieve Each Country Languages
        $regionCountriesLanguages = [];
        foreach ($aRegionCountries as $country)
        {
            $countryLanguages = Country::with('languages')->where('country','=',$country)->first();
            $languageArray = $countryLanguages->languages->toArray();
            foreach ($languageArray as $key)
            {
                # this version a country has only one (primary) language
                # version II the value must be an array to add each language for the country
                $regionCountriesLanguages[$countryLanguages->country] = $key['long_name'];
            }
        }
        return $regionCountriesLanguages;
    }

    # Get the given Countries Unique Languages
    public static function getRegionCountriesUniqueLanguages($regionCountriesLanguages)
    {
        $uniqueLanguageArray = [];
        foreach ($regionCountriesLanguages as $language)
        {
            if (!in_array($language, $uniqueLanguageArray))
            {
                $uniqueLanguageArray[] = $language;
            }
        }
        sort($uniqueLanguageArray);
        return $uniqueLanguageArray;
    }

    # Get the given Countries Tips
    public static function getRegionCountriesTips($aRegionCountries)
    {
        # Retrieve Each Country Tips
        $regionCountriesTips = [];
        foreach ($aRegionCountries as $country)
        {
            $countryTips = Country::with("tips")->where('country','=',$country)->first();
            if ($countryTips)
            {
                $tipsArray = $countryTips->tips->toArray();
                foreach ($tipsArray as $key)
                {
                    # this version a country has only one (primary) Tip
                    # version II the value must be an array to add each capital city for the country
                    $regionCountriesTips[$countryTips->country] = $key['tip'];
                }
            }
        }
        return $regionCountriesTips;
    }

    # Get the given Countries Population
    public static function getRegionCountriesPopulations($aRegionCountries)
    {
        # Retrieve Each Country Languages
        $regionCountriesPopulations = [];
        foreach ($aRegionCountries as $country)
        {
            $countryPopulations = Country::where('country','=',$country)->first();
            if ($countryPopulations)
            {
                $regionCountriesPopulations[$countryPopulations->country] = $countryPopulations->population;
            }
        }
        return $regionCountriesPopulations;
    }

    #get full country name for the Congratulation status Panel
    public static function getFullCountryName($counryName)
    {
        $countryFullName = Country::where('country','=',$counryName)->pluck("long_name");
        return $countryFullName[0];
    }

    #get all short country names
    public static function getShortCountryNames()
    {
        $countryShortNames = Country::orderBy('short_name', 'ASC')->pluck("short_name");;
        return $countryShortNames;
    }

    # Get the Country Waters
    public static function getRegionCountriesWaters($aRegionCountries)
    {
        # Retrieve Each Country Waters
        $regionCountriesWaters = [];
        foreach ($aRegionCountries as $country)
        {
            $countryWaters = Country::with('waters')->where('country','=',$country)->first();
            $waterArray = $countryWaters->waters->toArray();
            foreach ($waterArray as $key)
            {
                # this version a country has only one (primary) water
                # version II the value must be an array to add each water for the country
                $regionCountriesWaters[$countryWaters->country] = $key['long_name'];
            }
        }
        return $regionCountriesWaters;
    }

    #get country object
    public static function getCountryObject($counryName)
    {
        return Country::where('country','=',$counryName)->orWhere('short_name','=',$counryName)->orWhere('long_name','=',$counryName)->first();
    }

    #get country id
    public static function getCountryIdFromName($counryName)
    {
        // if the $countryName is a match to country or short
        $countryId = Country::where('country','=',$counryName)->orWhere('short_name','=',$counryName)->pluck('id');
        return $countryId[0];
    }

    #get country object from id
    public static function getCountryObjectFromId($counryId)
    {
        return Country::where('id','=',$counryId)->first();
    }

    #get country name from id
    public static function getCountryCountryNameFromId($counryId)
    {
        return Country::where('id','=',$counryId)->pluck('country')[0];
    }

    // All the Countries with All the columns
    public static function getCountriesAllColumns()
    {
        # read countries table with all the columns sorted by (country) name
        $countries = Country::orderBy('country', 'ASC')->get();
        return $countries->toArray();
    }

    #get the names of the world countries: only "country" column
    public static function getAllCountriesNames()
    {
        $allCountries = Country::orderBy('country', 'ASC')->get();
        $allCountryNames = [];
        foreach ($allCountries as $country)
        {
            $allCountryNames[] = $country['country'];
        }
        return $allCountryNames;
    }

    #get the full names of the world countries: only "long_name" column
    public static function getAllCountriesFullNames()
    {
        $allCountries = Country::orderBy('country', 'ASC')->get();
        $allCountryFullNames = [];
        foreach ($allCountries as $country)
        {
            $allCountryFullNames[] = $country['long_name'];
        }
        return $allCountryFullNames;
    }

    #get the languages of the world countries: country : language (one and only one at this version (no array yet))
    public static function getAllCountriesLanguages()
    {
        $allCountries = Country::orderBy('country', 'ASC')->get();
        $allCountryLanguages = [];
        foreach ($allCountries as $country)
        {
            $countryLanguages = Country::with('languages')->where('country','=',$country["country"])->first();
            $languageArray = $countryLanguages->languages->toArray();
            foreach ($languageArray as $key)
            {
                $allCountryLanguages[$countryLanguages->country] = $key['language'];
            }
        }
        return $allCountryLanguages;
    }
}
