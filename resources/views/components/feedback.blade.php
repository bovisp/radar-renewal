<section class="ui container pt-16 pb-16" id="feedback">
  <h2 class="flow-header is-centered pb-16">
  	{{ trans('app.sections.feedback.title') }}
  </h2>

  <p class="flow-text is-light pb-8">
  	{{ trans('app.sections.feedback.description.para_1') }}
  </p>

  <p class="flow-text pb-16">
  	{{ trans('app.sections.feedback.description.para_2') }}
  </p>

  <div id="app">
    <feedback locale="{{ app()->getLocale() }}"></feedback>
  </div>
</section>
