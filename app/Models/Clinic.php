<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'cnpj',
        'name',
        'api_token',
    ];

    protected $casts = [
        'api_token_created_date' => 'datetime',
        'api_token_expire_date' => 'datetime',
    ];
}
