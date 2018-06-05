<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class FeedbackExport implements WithMultipleSheets
{
    use Exportable;

    protected $questions = [
    	'Question1', 'Question2', 'Question3', 'Question4', 'Question5', 'Question6', 'Question7'
    ];

    protected $headers = [
    	'Question1' => [
    		'#', 'Comments', 'Course', 'Met objectives', 'Date created', 'Date updated'
    	],
    	'Question2' => [
    		'#', 'Comments', 'Course', 'Themes', 'Date created', 'Date updated'
    	],
    	'Question3' => [
    		'#', 'Suggested topics', 'Date created', 'Date updated'
    	],
    	'Question4' => [
    		'#', 'Courses', 'Comments', 'Date created', 'Date updated'
    	],
    	'Question5' => [
    		'#', 'Paths helpful', 'Comments', 'Date created', 'Date updated'
    	],
    	'Question6' => [
    		'#', 'Overall length', 'Date created', 'Date updated'
    	],
    	'Question7' => [
    		'#', 'Suggestions', 'Date created', 'Date updated'
    	]
    ];

    public function sheets(): array
    {
        $sheets = [];

        foreach ($this->questions as $question) {
        	$sheets[] = new FeedbackPerQuestion(
        		$question, $this->headers[$question]
        	);
        }

        return $sheets;
    }
}