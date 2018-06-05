<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question1 extends Model
{
    protected $fillable = [
    	'comments', 'course_name', 'met_objectives'
    ];
}
