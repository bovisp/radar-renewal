<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question2 extends Model
{
    protected $fillable = [
    	'comments', 'course_name', 'themes'
    ];
}
