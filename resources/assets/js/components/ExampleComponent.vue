<template>
  <div style="position: relative;">
    <div class="overlay" v-if="isSubmitting || isSuccess"></div>

    <div class="submitting" v-if="isSubmitting && !isSuccess">
      <div class="ui padded segment">
        <h4 class="ui header">Submitting your feedback</h4>

        <div class="loader"></div>
      </div>
    </div>

    <div class="success" v-if="isSuccess">
      <div class="ui padded segment">
        <h4 class="ui header">Success! Thanks for your feedback</h4>

        <i class="huge green check icon"></i>
      </div>
    </div>

    <form class="ui form">
      <tabs>

        <!-- Begin Tab: Course objectives -->

        <!-- Begin question #1 -->

        <tab name="Course objectives" :selected="true" title="tab1">
          <p>The following questions will evaluate how effectively the course met the learning objectives.</p>

          <h4 class="ui dividing header">1.	How well did each course meet the stated objectives?</h4>

          <div class="field">
            <multiselect
              v-model="question1Model"
              @close="question1Select"
              @open="question1Thanks=false"
              :options="question1Options.select"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              placeholder="Choose a course..."
            ></multiselect>
          </div>

          <template v-if="question1ItemActive">
            <h5 class="ui header">Did the "{{ question1Item.name }}" course successfully meet the learning objectives?</h5>

            <div class="inline fields">
              <p>Please select one:</p>

              <div class="field" v-for="option in question1Options.radio">
                <div class="ui radio checkbox">
                  <input type="radio" v-model="question1Item.options" :value="option" :id="option">

                  <label :for="option">{{ option }}</label>
                </div>

              </div>
            </div>

            <div class="field">
              <label>Comments</label>

              <textarea v-model="question1Item.comments"></textarea>
            </div>

            <div class="field">
              <button type="button" class="ui mini positive button" @click.prevent="addQuestion1Data">Submit additional feedback</button>
              <button type="button" class="ui mini basic button" @click.prevent="clearQuestion1Data">Cancel</button>
            </div>
          </template>

          <div class="ui positive message" v-if="question1Thanks">
            <i class="close icon" @click="question1Thanks=false"></i>
            <div class="header">
              Thank you!
            </div>
            <p>If you would like to submit feedback on another course, please choose one from the dropdown menu above.</p>
          </div>

          <!-- End question #1 -->

          <!-- Begin question #2 -->

          <h4 class="ui dividing header">2.	Do you have any suggestions that could help improve a specific module?</h4>

          <div class="field">
            <multiselect
              v-model="question2Model"
              @close="question2Select"
              @open="question2Thanks=false"
              :options="question2Options.select"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              placeholder="Choose a course..."
            ></multiselect>
          </div>

          <template v-if="question2ItemActive">
            <h5 class="ui header">Additional Feedback for {{ question2Item.name }}</h5>

            <div class="inline fields">
              <p>Select one or more of the following themes:</p>

              <div class="field" v-for="option in question2Options.checkbox">
                <div class="ui checkbox">
                  <input type="checkbox" v-model="question2Item.options" :value="option" :id="option">

                  <label :for="option">{{ option }}</label>
                </div>
              </div>
            </div>

            <div class="field">
              <label>Feel free to comment on the themes you chose...</label>

              <textarea v-model="question2Item.comments"></textarea>
            </div>

            <div class="field">
              <button type="button" class="ui mini positive button" @click.prevent="addQuestion2Data">Submit additional feedback</button>
              <button type="button" class="ui mini basic button" @click.prevent="clearQuestion2Data">Cancel</button>
            </div>
          </template>

          <div class="field" v-if="question2Thanks">
            <div class="ui positive message">
              <i class="close icon" @click="question2Thanks=false"></i>

              <div class="header">
                Thank you!
              </div>

              <p>If you would like to submit feedback on another course, please choose one from the dropdown menu above.</p>
            </div>
          </div>

          <div class="clearfix field">
            <button class="ui right floated primary button" @click.prevent="change('tab2')">
              Next
              <i class="right chevron icon"></i>
            </button>
          </div>

          <!-- End question #2 -->

        </tab>

        <!-- End Tab: Course objectives -->

        <!-- Begin Tab: Course content -->

        <tab name="Course content" title="tab2">
          <div class="field">
            <p>The following questions will evaluate the relevance of the material.</p>
          </div>

          <!-- Begin question #3 -->

          <h4 class="ui dividing header">3. Is there a topic that should be added to this course series?</h4>

          <div class="field" v-if="!question3Thanks">
            <input type="text" placeholder="Type a topic description..." v-model="question3Model">
          </div>

          <template v-if="question3Model.length > 0">
            <div class="field">
              <button type="button" class="ui mini positive button" @click.prevent="addQuestion3Data">Add topic</button>
            </div>
          </template>

          <div class="field" v-if="question3Thanks">
            <div class="ui positive message">
              <i class="close icon" @click="question3Thanks=false"></i>

              <div class="header">
                Thank you!
              </div>

              <p>Would you like to suggest an additional topic? <button class="ui mini positive button" @click.prevent="question3Thanks=false">Yes</button></p>
            </div>
          </div>

          <!-- End question #3 -->

          <!-- Begin question #4 -->

          <h4 class="ui dividing header">4. Was there a topic(s) that should be dealt with in more depth?</h4>

          <div class="field" v-for="option in question4Options">
            <div class="ui checkbox">
              <input type="checkbox" v-model="question4Data.options" :value="option">
              <label>{{ option }}</label>
            </div>
          </div>

          <div class="field">
            <label>Feel free to comment on any of your course choices...</label>

            <textarea v-model="question4Data.comments"></textarea>
          </div>

          <div class="clearfix field">
            <button class="ui left floated primary button" @click.prevent="change('tab1')">
              <i class="left chevron icon"></i>
              Previous
            </button>

            <button class="ui right floated primary button" @click.prevent="change('tab3')">
              Next
              <i class="right chevron icon"></i>
            </button>
          </div>

          <!-- End question #4 -->

        </tab>

        <!-- End Tab: Course objectives -->

        <!-- Begin Tab: Course structure -->

        <tab name="Course structure" title="tab3">
          <div class="field">
            <p>The following questions will evaluate the structure and organization of the course.</p>
          </div>

          <!-- Begin question #5 -->

          <h4 class="ui dividing header">5. Did you find the recommended paths helpful?</h4>

          <div class="inline fields">
            <div class="field" v-for="option in question5Options">
              <div class="ui radio checkbox">
                <input type="radio" v-model="question5Data.options" :value="option" :id="option">

                <label :for="option">{{ option }}</label>
              </div>
            </div>
          </div>

          <div class="field">
            <label>Feel free to expand more fully on your choice or provide a recommendation on how to change the course list under your chosen path?</label>

            <textarea v-model="question5Data.comments"></textarea>
          </div>

          <!-- End question #5 -->

          <!-- Begin question #6 -->

          <h4 class="ui dividing header">6. How did you find the overall length of the training material?</h4>

          <div class="inline fields">
            <div class="field" v-for="option in question6Options">
              <div class="ui radio checkbox">
                <input type="radio" v-model="question6Data" :value="option" :id="option">

                <label :for="option">{{ option }}</label>
              </div>
            </div>
          </div>

          <!-- End question #6 -->

          <!-- Begin question #7 -->

          <h4 class="ui dividing header">7. Do you have any suggestions that could help improve the radar renewal course series?</h4>

          <div class="field">
            <textarea v-model="question7Data"></textarea>
          </div>

          <div class="clearfix field">
            <button class="ui left floated primary button" @click.prevent="change('tab2')">
              <i class="left chevron icon"></i>
              Previous
            </button>
          </div>

          <!-- End question #7 -->

        </tab>

        <!-- End Tab: Course structure -->

      </tabs>

      <button class="big fluid positive bottom attached ui button" @click.prevent="submit">Submit feedback</button>
    </form>
  </div>
</template>

<script>
  import Tab from './Tab'
  import Tabs from './Tabs'
  import Multiselect from 'vue-multiselect'

  export default {
    components: {
      Tab, Tabs, Multiselect
    },

    data () {
      return {
        question1Model: '',
        question2Model: '',
        question3Model: '',

        question1Data: [],
        question2Data: [],
        question3Data: [],
        question4Data: {
          options: [],
          comments: ''
        },
        question5Data: {
          options: '',
          comments: ''
        },
        question6Data: '',
        question7Data: '',

        question1Item: {
          name: '',
          options: '',
          comments: ''
        },
        question2Item: {
          name: '',
          options: [],
          comments: ''
        },

        question1ItemActive: false,
        question2ItemActive: false,

        question1Thanks: false,
        question2Thanks: false,
        question3Thanks: false,

        isSubmitting: false,
        isSuccess: false,

        question1Options: {
          select: [
            'Radar Refresher',
            'S-Band',
            'X-Band',
            'S/C/X-Band Comparison',
            'Dual-Polarization Fundamentals',
            'Dual Polarization: Basic Radar Products',
            'Dual Polarization: Advanced Radar Products'
          ],
          radio: [
            'Yes',
            'No',
            'Partially'
          ]
        },
        question2Options: {
          select: [
            'Radar Refresher',
            'S-Band',
            'X-Band',
            'S/C/X-Band Comparison',
            'Dual-Polarization Fundamentals',
            'Dual Polarization: Basic Radar Products',
            'Dual Polarization: Advanced Radar Products'
          ],
          checkbox: [
            'Audio',
            'Content',
            'Format',
            'Time to complete'
          ]
        },
        question4Options: [
          'Radar Refresher',
          'S-Band',
          'X-Band',
          'S/C/X-Band Comparison',
          'Dual-Polarization Fundamentals',
          'Dual Polarization: Basic Radar Products',
          'Dual Polarization: Advanced Radar Products'
        ],
        question5Options: [
          'Yes',
          'No',
        ],
        question6Options: [
          'Too little',
          'Too much',
          'Just right'
        ]
      }
    },

    methods: {
      change(tab) {
        window.events.$emit('changed', tab)
      },

      submit () {
        this.isSubmitting = true

        let data = {};

        if (this.question1Data.length) {
          data.question1 = this.question1Data
        }

        if (this.question2Data.length) {
          data.question2 = this.question2Data
        }

        if (this.question3Data.length) {
          data.question3 = this.question3Data
        }

        if (this.question4Data.options.length || this.question4Data.comments.length) {
          data.question4 = this.question4Data
        }

        if (this.question5Data.options.length || this.question5Data.comments.length) {
          data.question5 = this.question5Data
        }

        if (this.question6Data.length) {
          data.question6 = this.question6Data
        }

        if (this.question7Data.length) {
          data.question7 = this.question7Data
        }

        axios.post('/radar-renewal/feedback', data)
        .then(response => {
          this.isSubmitting = false
          this.isSuccess = true
        })
      },

      question1Select () {
        this.question1Item['name'] = this.question1Model

        this.question1ItemActive = true
      },

      addQuestion1Data () {
        this.question1Data.push(this.question1Item)

        this.question1Thanks = true

        let index = this.question1Options.select.findIndex(item => this.question1Model === item)

        this.question1Options.select.splice(index, 1)

        this.clearQuestion1Data()
      },

      clearQuestion1Data () {
        this.question1Model = ''

        this.question1Item = {
          name: '',
          options: [],
          comments: ''
        }

        this.question1ItemActive = false
      },

      question2Select () {
        this.question2Item['name'] = this.question2Model

        this.question2ItemActive = true
      },

      addQuestion2Data () {
        this.question2Data.push(this.question2Item)

        this.question2Thanks = true

        let index = this.question2Options.select.findIndex(item => this.question2Model === item)

        this.question2Options.select.splice(index, 1)

        this.clearQuestion2Data()
      },

      clearQuestion2Data () {
        this.question2Model = ''

        this.question2Item = {
          name: '',
          options: [],
          comments: ''
        }

        this.question2ItemActive = false
      },

      addQuestion3Data () {
        this.question3Data.push(this.question3Model)

        this.question3Thanks = true

        this.question3Model = ''
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
