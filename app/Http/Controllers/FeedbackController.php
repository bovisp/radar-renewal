<?php

namespace App\Http\Controllers;

use App\Question1;
use App\Question2;
use App\Question3;
use App\Question4;
use App\Question5;
use App\Question6;
use App\Question7;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
    	if ($request->has('question1')) {
    		$this->processQuestion1($request);
    	}

    	if ($request->has('question2')) {
    		$this->processQuestion2($request);
    	}

    	if ($request->has('question3')) {
    		$this->processQuestion3($request);
    	}

    	if ($request->has('question4')) {
    		Question4::create([
	    		'course_name' => implode(',', $request->question4['options']),
	    		'comments' => $request->question4['comments']
	    	]);
    	}

    	if ($request->has('question5')) {
    		Question5::create([
	    		'paths_helpful' => $request->question5['options'],
	    		'comments' => $request->question5['comments']
	    	]);
    	}

    	if ($request->has('question6')) {
    		Question6::create([
	    		'overall_length' => $request->question6
	    	]);
    	}

    	if ($request->has('question7')) {
    		Question7::create([
	    		'suggestions' => $request->question7
	    	]);
    	}

    	return response()->json([
			'flash' => 'Success'
		]);
    }

    protected function processQuestion1(Request $request)
    {
    	foreach ($request->question1 as $response) {
    		Question1::create([
    			'course_name' => $response['name'],
    			'met_objectives' => $response['options'],
    			'comments' => $response['comments']
    		]);
    	}
    }

    protected function processQuestion2(Request $request)
    {
    	foreach ($request->question2 as $response) {
    		Question2::create([
    			'course_name' => $response['name'],
    			'themes' => implode(',', $response['options']),
    			'comments' => $response['comments']
    		]);
    	}
    }

    protected function processQuestion3(Request $request)
    {
    	foreach ($request->question3 as $response) {
    		Question3::create([
    			'suggested_topics' => $response
    		]);
    	}
    }
}
