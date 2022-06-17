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

Route::middleware('auth:api')->group( function () {
    Route::get('user', [App\Http\Controllers\Api\UserController::class, 'get']);
    Route::post('user/update', [App\Http\Controllers\Api\UserController::class, 'update']);
});