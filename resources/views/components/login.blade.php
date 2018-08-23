<section class="ui container pt-16 pb-16">
  @if (Route::has('login'))
    <div>
      @auth
        <a class="is-muted" href="{{ url('/home') }}">
        	{{ trans('app.sections.login.download') }}
        </a>
      @else
        <a class="is-muted" href="{{ route('login') }}">
        	{{ trans('app.sections.login.login') }}
        </a>
      @endauth
    </div>
  @endif
</section>