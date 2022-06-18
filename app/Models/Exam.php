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
        'exam_desc',
        'url',
    ];

    protected $casts = [
        'exam_date' => 'datetime',
    ];

    public function patient()
    {
        return $this->hasOne(User::class, 'id', 'patient_id');
    }

    public function clinic()
    {
        return $this->hasOne(Clinic::class,'id', 'clinic_id');
    }
}
