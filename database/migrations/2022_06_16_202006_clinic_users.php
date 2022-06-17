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
        Schema::create('clinic_users', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable(false);
            $table->unsignedBigInteger('clinic_id')->nullable(false);
            $table->timestamps();

            $table->primary(['user_id', 'clinic_id']);
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('clinic_id')->references('id')->on('clinics');
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
