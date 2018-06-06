@extends('layouts.app')

@section('content')
<div class="ui container">
    <div class="ui secondary menu">
      <div class="right menu">
        <div class="ui item">
          <a 
            href="{{ route('logout') }}"
            onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
          >
            Logout
          </a>

          <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            {{ csrf_field() }}
          </form>
        </div>
      </div>
    </div>
</div>

<div class="ui container pt-16">
    <div class="ui two column centered grid">
        <div class="column">
            <h2>Dashboard</h2>

            <a 
                class="ui large positive button" 
                href="feedback/download" 
                download
            >Download feedback</a>
        </div>
    </div>
</div>
@endsection
