<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApplicationI18ntagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
         Schema::create('application_i18ntags', function (Blueprint $table) {
             # Increments method will make a Primary, Auto-Incrementing field.
             $table->increments('id');

             # This generates two columns: `created_at` and `updated_at` to
             # keep track of changes to a row
             $table->timestamps();

             # The rest of the fields... Application I18nTags has no FK
             $table->string('application_tag');
             $table->string('id_or_var');
         });
     }

     /**
      * Reverse the migrations.
      *
      * @return void
      */
     public function down()
     {
         Schema::drop('application_i18ntags');
     }
}
