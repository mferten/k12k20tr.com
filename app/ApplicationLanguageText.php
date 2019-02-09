<?php

namespace App;

use App\ApplicationI18ntag;
use App\ApplicationLanguage;

use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;

class ApplicationLanguageText extends Model
{

    /**
	* ApplicationLanguageText's Application Language (a foreign key)
	*/
    public function applicationLanguges() {
		# a ApplicationLanguageText can have only one ApplicationLanguage
		# Define an inverse one-to-many relationship.
        return $this->belongsTo('App\ApplicationLanguage');
	}

    /**
	* ApplicationLanguageText's Application I18tag (a foreign key)
	*/
    public function applicationI18ntags() {
		# a ApplicationLanguageText can have only one ApplicationI8ntag
		# Define an inverse one-to-many relationship.
        return $this->belongsTo('App\ApplicationI8ntag');
	}

    public static function retrieveApplicationLanguageTexts($applicationLanguageId)
    {
        # Retrieve all Texts
        $applicationTexts = ApplicationLanguageText::where('application_language_id',"=", $applicationLanguageId)->orderBy("application_i18ntag_id")->get();
        # no Row return
        if (!$applicationTexts)
        {
            return "no row";
        }
        else
        {
            # to be Returned Array tag => text
            $returnArray = [];
            # Read each Row (tagId => text): return tag => text
            foreach($applicationTexts as $applicationText)
            {
                $applicationText = $applicationText->toArray();
                $returnArray [ApplicationI18ntag::getApplicationI18ntagName($applicationText["application_i18ntag_id"])] = $applicationText["text"];
            }
            return json_encode($returnArray);
        }
    }

    public static function saveApplicationLanguageTexts($count, $texts, $applicationLanguageId)
    {
        # Retrieve each tagId to replace the Text
        # If does not Exist: insert tagId + Text
        //  *** loop here with the parameter Array.....
        $textArray = explode("|", $texts);
        # Initiate a new timestamp
        $timestamp = Carbon::now()->toDateTimeString(); # same is OK
        for ($loop = 0; $loop < $count; $loop++)
        {
            # USA_ENGLISH i18n Tags Count rows regardless of any data in it will be saved (even only one i18n tag has text in it)
            $applicationTexts = ApplicationLanguageText::where('application_language_id',"=", $applicationLanguageId)->where('application_i18ntag_id',"=", $loop+1)->first();
            # no Row: insert
            if ($applicationTexts == null)
            {
                $newOne = new ApplicationLanguageText; // this way save() takes care of the create_at and updated_at
                $newOne->created_at = $timestamp;
                $newOne->updated_at = $timestamp;
                $newOne->application_language_id = $applicationLanguageId;
                $newOne->application_i18ntag_id = $loop+1;
                $newOne->text = $textArray[$loop];
                $newOne->save();
            }
            # found Row: update
            else
            {
                $applicationTexts->updated_at = $timestamp;
                $applicationTexts->text = $textArray[$loop];
                $applicationTexts->update();
            }
        }
        # No Exception: Success
        return $applicationLanguageId;
    }

    public static function createApplicationLanguageTexts($count, $texts, $countryId, $languageId)
    {
        // Create the new Application Language (Country-Language) and receive the new Application Language Id
        $applicationLanguageId = ApplicationLanguage::createNewApplicationLanguage($countryId, $languageId);
        // Save new Application Language's Texts
        ApplicationLanguageText::saveApplicationLanguageTexts($count, $texts, $applicationLanguageId);
    }

    public static function deleteApplicationLanguageTexts($applicationLanguageId)
    {
        # Delete the child (Texts) First
        ApplicationLanguageText::where('application_language_id',"=", $applicationLanguageId)->delete();
        # Now delete the Pivot Application Language
        ApplicationLanguage::destroy($applicationLanguageId);
        # No Exception: Success
        return "success";
    }

    public static function retrieveApplicationLanguageCRUDTexts($countryId, $languageId)
    {
        # Retrieve all Texts
        $applicationLanguageId = ApplicationLanguage::getApplicationLanguageId($countryId, $languageId);
        if ($applicationLanguageId == -1)
        {
            return "no row";
        }
        else
        {
            $applicationTexts = ApplicationLanguageText::where('application_language_id',"=", $applicationLanguageId)->orderBy("application_i18ntag_id")->get();
            # no Row return
            if (!$applicationTexts)
            {
                return "no row";
            }
            else
            {
                return $applicationTexts->toJson();
            }
        }
    }

    public static function retrieveApplicationLanguageUsaCRUDTexts($countryId)
    {
        # Retrieve all Texts
        $applicationTexts = ApplicationLanguageText::where('application_language_id',"=", $countryId)->orderBy("application_i18ntag_id")->get();
        # no Row return
        if (!$applicationTexts)
        {
            return "no row";
        }
        else
        {
            return $applicationTexts->toJson();
        }
    }
}
