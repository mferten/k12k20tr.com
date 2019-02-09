<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{

    /**
	   * Feature's countries (the only pivot one)
	   */
    public function countries() {
		    # a Flag Feature may have many Countries
		    # Define a many-to-many relationship.
        return $this->belongsToMany('App\Country');
	  }

    // Get All Unique Languages
    public static function getWorldLanguages()
    {
        # Read Feature Table Languages and return each unique value sorted ascending
        return Feature::select('value')->distinct()->where('feature','=',"Language")->orderBy('value', 'ASC')->get();
    }

    // Get All Unique Religions
    public static function getWorldReligions()
    {
        # Read Feature Table Religions and return each unique value sorted ascending
        return Feature::select('value')->distinct()->where('feature','=',"Religion")->orderBy('value', 'ASC')->get();
    }

    // Get All Unique Waters
    public static function getWorldWaters()
    {
        # Read Feature Table Waters and return each unique value sorted ascending
        return Feature::select('value')->distinct()->where('feature','=',"Water")->orderBy('value', 'ASC')->get();
    }

    // Get All Unique Flag Colors
    public static function getFlagsColors()
    {
        # Read Feature Table Colors and return each unique value sorted ascending
        return Feature::select('value')->distinct()->where('feature','=',"Color")->orderBy('value', 'ASC')->get();
    }

    // Get All Unique Flag Shapes
    public static function getFlagsShapes()
    {
        # Read Feature Table Shapes and return each unique value sorted ascending
        return Feature::select('value')->distinct()->where('feature','=',"Shape")->orderBy('value', 'ASC')->get();
    }


    // Get All Country Names for this Criteria: Each Category may have a range processing or not
    public static function getOneSelectionInfo($selectionId, $optionValue) {
        if ($optionValue == "ListAscending" || $optionValue == "ListDescending") {
            return Feature::getAscOrDescCompleteList($selectionId, $optionValue); // retrieve all sort either Asc (default) or Des
        } else { // One Value
            if ($selectionId == "DrivingSide" || $selectionId == "Language" || $selectionId == "Water" ||
                $selectionId == "Religion" || $selectionId == "Color" || $selectionId == "Shape" ||
                $selectionId == "Color2nd" || $selectionId == "Color3rd" || $selectionId == "Shape2nd" || $selectionId == "Shape3rd") {
                if ($selectionId == "Color2nd" || $selectionId == "Color3rd") $selectionId = "Color";
                if ($selectionId == "Shape2nd" || $selectionId == "Shape3rd") $selectionId = "Shape";
                $featureCountries = Feature::select('country_id')->where('feature','=',$selectionId)->where('value','=',$optionValue)->get();
                $countryNames = [];
                foreach($featureCountries as $feature) {
                    $countryNames[] = Country::getCountryCountryNameFromId($feature['country_id']);
                }
                return $countryNames;
            } else if ($selectionId == "CapitalCities") { // Captial Cities ---------> whereRaw('SUBSTRING(value, 1, 1) = ?', $optionValue)
                $featureCountries = Feature::select('country_id')->where('feature','=',$selectionId)
                                        ->whereRaw('SUBSTRING(value, 1, 1) = ?', $optionValue)->get();
                $countryNames = [];
                foreach($featureCountries as $feature) {
                    $countryNames[] = Country::getCountryCountryNameFromId($feature['country_id']);
                }
                return $countryNames;
            } else { // A Range: from to ------ So Excited and Happy: It works: ->whereRaw('value * 1 >= ? and value * 1 < ?', [$fromTo[0], $fromTo[1]])
                $fromTo = explode(",", $optionValue);
                $ascOrDesc = "desc";
                $featureCountries = Feature::select('country_id', 'value')->where('feature','=',$selectionId)
                                            ->whereRaw('value * 1 >= ? and value * 1 <= ?', [$fromTo[0], $fromTo[1]])
                                            ->orderByRaw('value * 1 ' . $ascOrDesc)->orderBy('country_id', $ascOrDesc)->get();
                $countryNames = [];
                foreach($featureCountries as $feature) {
                    $countryNames[] = Country::getCountryCountryNameFromId($feature['country_id']);
                }
                return $countryNames;
            }
        }
    }

    public static function getAscOrDescCompleteList($selectionId, $optionValue)
    {
        if ($optionValue == "ListAscending") $ascOrDesc = "asc"; // Add Colors or Shapes Section to return Color/Shape + Country values together.
        else $ascOrDesc = "desc"; // return all the countries but sorted by the $selectionId as $optionValue
        if ($selectionId == "Income") // if feature is Income use GDP to orderByRaw..
            $featureCountries = Feature::select('country_id')->where('feature','=',"GDP")->orderByRaw('value * 1 ' . $ascOrDesc)->orderByRaw('country_id', $ascOrDesc)->get();
        else if ($selectionId == "Color" || $selectionId == "Shape" || $selectionId == "Water" || $selectionId == "Language" || $selectionId == "Religion") {
            $featureCountries = Feature::select('value', 'country_id')->where('feature','=',$selectionId)
                ->orderBy('value', $ascOrDesc)->orderBy('country_id', $ascOrDesc)->get();
        }
        else if ($selectionId == "CapitalCities") {
            $featureCountries = Feature::select('country_id','value')->where('feature','=',$selectionId)
                ->orderBy('value', $ascOrDesc)->orderBy('country_id', $ascOrDesc)->get();
        }
        else $featureCountries = Feature::select('country_id')->where('feature','=',$selectionId)->orderByRaw('value * 1 ' . $ascOrDesc)->orderByRaw('country_id', $ascOrDesc)->get();
        $countryNames = [];
        foreach($featureCountries as $feature) {
            $countryName = Country::getCountryCountryNameFromId($feature['country_id']);
            if ($selectionId == "Color" || $selectionId == "Shape" || $selectionId == "Water" || $selectionId == "Language" || $selectionId == "Religion") {
                $feature['country_id'] = $countryName;
            }
            else {
                if (!in_array($countryName, $countryNames))
                    $countryNames[] = $countryName;
            }
        }
        if ($selectionId == "Color" || $selectionId == "Shape" || $selectionId == "Water" || $selectionId == "Language" || $selectionId == "Religion")
            return json_encode($featureCountries);
        else return $countryNames;
    }
}
