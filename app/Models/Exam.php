<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'specialty',
        'desc',
        'url',
    ];

    protected $casts = [
        'exam_date' => 'datetime',
    ];
}
