<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/', function () {
    return "Nada para ver aqui!!";
});

Route::post('register', [App\Http\Controllers\Api\AuthController::class, 'register']);
Route::post('login', [App\Http\Controllers\Api\AuthController::class, 'login']);

Route::get('exams/history/{code}', [App\Http\Controllers\Api\ExamsController::class, 'history']);

Route::middleware('auth:api')->group( function () {

    /* User */
    Route::get('user', [App\Http\Controllers\Api\UserController::class, 'get']);
    Route::post('user/update', [App\Http\Controllers\Api\UserController::class, 'update']);

    /* Exams history */
    Route::get('exams/share', [App\Http\Controllers\Api\ExamsController::class, 'share']);
    Route::get('exams/unshare', [App\Http\Controllers\Api\ExamsController::class, 'unshare']);

    /* Clinic */

    /* Exams */
    Route::get('exams', [App\Http\Controllers\Api\ExamsController::class, 'list']);



});