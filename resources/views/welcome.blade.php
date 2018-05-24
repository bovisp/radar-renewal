<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet">

        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
      <header class="ui basic masthead segment" style="background-image: url('images/banner.jpg') !important;">
        <div class="ui container">
          <h1 class="mb-8">New radars are in range</h1>

          <div class="is-centered">
            <button class="huge blue ui button mr-8">View courses</button>

            <button class="huge blue basic ui button">Give feedback</button>
          </div>
        </div>
      </header>
      <div class="ui container" id="app">
        <example-component></example-component>
      </div>

      <script src="js/app.js"></script>
    </body>
</html>
