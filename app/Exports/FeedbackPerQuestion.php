<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class FeedbackPerQuestion implements FromQuery, WithTitle, WithHeadings
{
	protected $question;
	protected $headers;

	public function __construct($question, $headers)
	{
		$this->question = $question;
		$this->headers = $headers;
	}    

    public function query()
    {
    	$model = '\App\\' . $this->question;

        return $model::query();
    }

    public function title(): string
    {
        return $this->question;
    }

    public function headings(): array
    {
        return $this->headers;
    }
}