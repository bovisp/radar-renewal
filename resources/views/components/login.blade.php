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