<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.css" />

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body>
      <div class="ui container" id="app">
        <example-component></example-component>
      </div>

      <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
