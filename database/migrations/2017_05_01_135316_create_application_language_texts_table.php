<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApplicationLanguageTextsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
         Schema::create('application_language_texts', function (Blueprint $table) {
             # Increments method will make a Primary, Auto-Incrementing field.
             $table->increments('id');

             # This generates two columns: `created_at` and `updated_at` to
             # keep track of changes to a row
             $table->timestamps();

             # The rest of the fields...
             $table->integer('application_language_id')->unsigned();
             $table->integer('application_i18ntag_id')->unsigned();
             $table->string('text');

             # Make foreign keys
             $table->foreign('application_language_id')->references('id')->on('application_languages');
             $table->foreign('application_i18ntag_id')->references('id')->on('application_i18ntags');
        });
     }

     /**
      * Reverse the migrations.
      *
      * @return void
      */
     public function down()
     {
         $table->dropForeign('application_language_texts_application_i18ntag_id_foreign');
         $table->dropForeign('application_language_texts_application_language_id_foreign');
         Schema::drop('application_language_texts');
     }
}
