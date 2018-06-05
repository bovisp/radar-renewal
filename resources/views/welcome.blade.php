<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
        <link rel="manifest" href="images/favicon/site.webmanifest">
        <link rel="mask-icon" href="images/favicon/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">

        <title>Radar Renewal</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet">

        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
      @include('components.masthead')

      @include('components.introduction')

      @include('components.courses')

      @include('components.paths')

      @include('components.feedback')

      <section class="ui container pt-16 pb-16">
        @if (Route::has('login'))
          <div>
            @auth
              <a class="is-muted" href="{{ url('/home') }}">Download feedback</a>
            @else
              <a class="is-muted" href="{{ route('login') }}">Login</a>
            @endauth
          </div>
        @endif
      </section>

      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14/dist/smooth-scroll.polyfills.min.js"></script>
      <script>
        var scroll = new SmoothScroll('a[href*="#"]', {
          speed: 700,
        });
      </script>
      <script src="js/app.js"></script>
    </body>
</html>
