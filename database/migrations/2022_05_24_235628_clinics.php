<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clinics', function (Blueprint $table) {
            $table->id();
            $table->string('cnpj', 14)->unique()->nullable(false);
            $table->String('name',255)->nullable(false);
            $table->string('api_token')->nullable(true);
            $table->dateTime('api_token_create_date')->nullable(true);
            $table->dateTime('api_token_expire_date')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
