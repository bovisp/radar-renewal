<?php

namespace App\Http\Controllers;

use App\Exports\FeedbackExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class DownloadFeedbackController extends Controller
{
    public function export() 
	{
	    return (new FeedbackExport)->download('feedback.xlsx');
	}
}
