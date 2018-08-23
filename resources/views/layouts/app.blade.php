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

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />

        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
        <div class="ui basic segment" style="margin-bottom: 0;">
            <div class="ui horizonal list">
                <div class="item" style="display: {{ app()->getLocale() === 'en' ? 'none' : 'block' }};">
                    <div class="right floated content">
                        <a href="{{ url('lang/en') }}">
                            <i class="gb flag"></i> English
                        </a>
                    </div>
                </div>

                <div class="item" style="display: {{ app()->getLocale() === 'fr' ? 'none' : 'block' }};">
                    <div class="right floated content">
                        <a href="{{ url('lang/fr') }}">
                            <i class="france flag"></i> Français
                        </a>
                    </div>
                </div>
            </div>
        </div>

        @yield('content')

      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14/dist/smooth-scroll.polyfills.min.js"></script>

      <script>
        var scroll = new SmoothScroll('a[href*="#"]', {
          speed: 700,
        });
      </script>
      
      <script src="js/app.js"></script>
    </body>
</html>
