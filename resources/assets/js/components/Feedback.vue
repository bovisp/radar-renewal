<template>
  <div style="position: relative;">
    <div class="overlay" v-if="isSubmitting || isSuccess"></div>

    <div class="submitting" v-if="isSubmitting && !isSuccess">
      <div class="ui padded segment">
        <h4 class="ui header">
          Submitting your feedback
        </h4>

        <div class="loader"></div>
      </div>
    </div>

    <div class="success" v-if="isSuccess">
      <div class="ui padded segment">
        <h4 class="ui header">
          Success! Thanks for your feedback
        </h4>

        <i class="huge green check icon"></i>
      </div>
    </div>

    <form class="ui form">
      <tabs>

        <!-- Begin Tab: Course objectives -->

        <!-- Begin question #1 -->

        <tab 
          :name="$t('tabs.objectives.title')" 
          :selected="true" 
          title="tab1"
        >
          <p>
            {{ $t('tabs.objectives.description') }}
          </p>

          <h4 class="ui dividing header">
            1.	{{ $t('questions.q1.text') }}
          </h4>

          <div class="field">
            <multiselect
              v-model="question1Model"
              @close="question1Select"
              @open="question1Thanks=false"
              :options="question1Options.select"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              :placeholder="$t('questions.q1.dropdown.option0')"
            ></multiselect>
          </div>

          <template v-if="question1ItemActive">
            <h5 class="ui header">
              {{ $t('questions.q1.additional.question.part1') }} "{{ question1Item.name }}" {{ $t('questions.q1.additional.question.part2') }}
            </h5>

            <div class="inline fields">
              <p>
                {{ $t('questions.q1.additional.radio.text') }}
              </p>

              <div class="field" v-for="option in question1Options.radio">
                <div class="ui radio checkbox">
                  <input 
                    type="radio" 
                    v-model="question1Item.options" 
                    :value="option" 
                    :id="option"
                  >

                  <label :for="option">{{ option }}</label>
                </div>

              </div>
            </div>

            <div class="field">
              <label>{{ $t('questions.q1.additional.comments') }}</label>

              <textarea v-model="question1Item.comments"></textarea>
            </div>

            <div class="field">
              <button 
                type="button" 
                class="ui mini positive button" 
                @click.prevent="addQuestion1Data"
              >{{ $t('questions.q1.additional.buttons.submit') }}</button>

              <button 
                type="button" 
                class="ui mini basic button"
                @click.prevent="clearQuestion1Data"
              >{{ $t('questions.q1.additional.buttons.cancel') }}</button>
            </div>
          </template>

          <div class="ui positive message" v-if="question1Thanks">
            <i class="close icon" @click="question1Thanks=false"></i>
            <div class="header">
              {{ $t('questions.q1.additional.message.header') }}
            </div>

            <p>
              {{ $t('questions.q1.additional.message.text') }}
            </p>
          </div>

          <!-- End question #1 -->

          <!-- Begin question #2 -->

          <h4 class="ui dividing header">
            2.	{{ $t('questions.q2.text') }}
          </h4>

          <div class="field">
            <multiselect
              v-model="question2Model"
              @close="question2Select"
              @open="question2Thanks=false"
              :options="question2Options.select"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              :placeholder="$t('questions.q2.dropdown.option0')"
            ></multiselect>
          </div>

          <template v-if="question2ItemActive">
            <h5 class="ui header">
              {{ $t('questions.q2.additional.label') }} {{ question2Item.name }}
            </h5>

            <div class="inline fields">
              <p>
                {{ $t('questions.q2.additional.checkbox.text') }}
              </p>

              <div class="field" v-for="option in question2Options.checkbox">
                <div class="ui checkbox">
                  <input 
                    type="checkbox" 
                    v-model="question2Item.options" 
                    :value="option" 
                    :id="option"
                  >

                  <label :for="option">{{ option }}</label>
                </div>
              </div>
            </div>

            <div class="field">
              <label>{{ $t('questions.q2.additional.comments') }}</label>

              <textarea v-model="question2Item.comments"></textarea>
            </div>

            <div class="field">
              <button 
                class="ui mini positive button" 
                @click.prevent="addQuestion2Data"
              >{{ $t('questions.q2.additional.buttons.submit') }}</button>

              <button 
                class="ui mini basic button" 
                @click.prevent="clearQuestion2Data"
              >{{ $t('questions.q2.additional.buttons.cancel') }}</button>
            </div>
          </template>

          <div class="field" v-if="question2Thanks">
            <div class="ui positive message">
              <i class="close icon" @click="question2Thanks=false"></i>

              <div class="header">
                {{ $t('questions.q2.additional.message.header') }}
              </div>

              <p>
                {{ $t('questions.q2.additional.message.text') }}
              </p>
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

        <tab :name="$t('tabs.content.title')" title="tab2">
          <div class="field">
            <p>{{ $t('tabs.content.description') }}</p>
          </div>

          <!-- Begin question #3 -->

          <h4 class="ui dividing header">
            3. {{ $t('questions.q3.text') }}
          </h4>

          <div class="field" v-if="!question3Thanks">
            <input 
              type="text" 
              :placeholder="$t('questions.q3.placeholder')" 
              v-model="question3Model"
            >
          </div>

          <template v-if="question3Model.length > 0">
            <div class="field">
              <button 
                type="button" 
                class="ui mini positive button" 
                @click.prevent="addQuestion3Data"
              >{{ $t('questions.q3.button') }}</button>
            </div>
          </template>

          <div class="field" v-if="question3Thanks">
            <div class="ui positive message">
              <i class="close icon" @click="question3Thanks=false"></i>

              <div class="header">
                {{ $t('questions.q3.additional.message.header') }}
              </div>

              <p>
                {{ $t('questions.q3.additional.message.text') }} 

                <button 
                  class="ui mini green label" 
                  style="margin-left: 1rem"
                  @click.prevent="question3Thanks=false"
                >{{ $t('questions.q3.additional.message.button') }}</button>
              </p>
            </div>
          </div>

          <!-- End question #3 -->

          <!-- Begin question #4 -->

          <h4 class="ui dividing header">
            4. {{ $t('questions.q4.text') }}
          </h4>

          <div class="field" v-for="option in question4Options">
            <div class="ui checkbox">
              <input 
                type="checkbox" 
                v-model="question4Data.options" 
                :value="option"
              >

              <label>{{ option }}</label>
            </div>
          </div>

          <div class="field">
            <label>{{ $t('questions.q4.comments') }}</label>

            <textarea v-model="question4Data.comments"></textarea>
          </div>

          <div class="clearfix field">
            <button 
              class="ui left floated primary button" 
              @click.prevent="change('tab1')"
            >
              <i class="left chevron icon"></i>

              Previous
            </button>

            <button 
              class="ui right floated primary button" 
              @click.prevent="change('tab3')"
            >
              Next

              <i class="right chevron icon"></i>
            </button>
          </div>

          <!-- End question #4 -->

        </tab>

        <!-- End Tab: Course objectives -->

        <!-- Begin Tab: Course structure -->

        <tab :name="$t('tabs.structure.title')" title="tab3">
          <div class="field">
            <p>{{ $t('tabs.structure.description') }}</p>
          </div>

          <!-- Begin question #5 -->

          <h4 class="ui dividing header">
            5. {{ $t('questions.q5.text') }}
          </h4>

          <div class="inline fields">
            <div class="field" v-for="option in question5Options">
              <div class="ui radio checkbox">
                <input 
                  type="radio" 
                  v-model="question5Data.options" 
                  :value="option" 
                  :id="option"
                >

                <label :for="option">{{ option }}</label>
              </div>
            </div>
          </div>

          <div class="field">
            <label>{{ $t('questions.q5.comments') }}</label>

            <textarea v-model="question5Data.comments"></textarea>
          </div>

          <!-- End question #5 -->

          <!-- Begin question #6 -->

          <h4 class="ui dividing header">
            6. {{ $t('questions.q6.text') }}
          </h4>

          <div class="inline fields">
            <div class="field" v-for="option in question6Options">
              <div class="ui radio checkbox">
                <input 
                  type="radio" 
                  v-model="question6Data" 
                  :value="option" 
                  :id="option"
                >

                <label :for="option">{{ option }}</label>
              </div>
            </div>
          </div>

          <!-- End question #6 -->

          <!-- Begin question #7 -->

          <h4 class="ui dividing header">
            7. {{ $t('questions.q7.text') }}
          </h4>

          <div class="field">
            <textarea v-model="question7Data"></textarea>
          </div>

          <div class="clearfix field">
            <button 
              class="ui left floated primary button" 
              @click.prevent="change('tab2')"
            >
              <i class="left chevron icon"></i>

              Previous
            </button>
          </div>

          <!-- End question #7 -->

        </tab>

        <!-- End Tab: Course structure -->

      </tabs>

      <button 
        class="big fluid positive bottom attached ui button" 
        @click.prevent="submit"
      >{{ $t('tabs.submit') }}</button>
    </form>
  </div>
</template>

<script>
  import Tab from './Tab'
  import Tabs from './Tabs'
  import Multiselect from 'vue-multiselect'

  export default {
    props: ['locale'],

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
            this.$t('questions.q1.dropdown.option1'),
            this.$t('questions.q1.dropdown.option2'),
            this.$t('questions.q1.dropdown.option3'),
            this.$t('questions.q1.dropdown.option4'),
            this.$t('questions.q1.dropdown.option5'),
            this.$t('questions.q1.dropdown.option6'),
            this.$t('questions.q1.dropdown.option7'),
          ],
          radio: [
            this.$t('questions.q1.additional.radio.option1'),
            this.$t('questions.q1.additional.radio.option2'),
            this.$t('questions.q1.additional.radio.option3')
          ]
        },
        question2Options: {
          select: [
            this.$t('questions.q2.dropdown.option1'),
            this.$t('questions.q2.dropdown.option2'),
            this.$t('questions.q2.dropdown.option3'),
            this.$t('questions.q2.dropdown.option4'),
            this.$t('questions.q2.dropdown.option5'),
            this.$t('questions.q2.dropdown.option6'),
            this.$t('questions.q2.dropdown.option7')
          ],
          checkbox: [
            this.$t('questions.q2.additional.checkbox.option1'),
            this.$t('questions.q2.additional.checkbox.option2'),
            this.$t('questions.q2.additional.checkbox.option3'),
            this.$t('questions.q2.additional.checkbox.option4')
          ]
        },
        question4Options: [
          this.$t('questions.q4.checkbox.option1'),
          this.$t('questions.q4.checkbox.option2'),
          this.$t('questions.q4.checkbox.option3'),
          this.$t('questions.q4.checkbox.option4'),
          this.$t('questions.q4.checkbox.option5'),
          this.$t('questions.q4.checkbox.option6'),
          this.$t('questions.q4.checkbox.option7')
        ],
        question5Options: [
          this.$t('questions.q5.radio.option1'),
          this.$t('questions.q5.radio.option2')
        ],
        question6Options: [
          this.$t('questions.q6.radio.option1'),
          this.$t('questions.q6.radio.option2'),
          this.$t('questions.q6.radio.option3')
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
        if (this.question1Model) {
          this.question1Item['name'] = this.question1Model

          this.question1ItemActive = true
        }
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
        if (this.question2Model) {
          this.question2Item['name'] = this.question2Model

          this.question2ItemActive = true
        }
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
    },

    mounted () {
      this.$i18n.locale = this.locale
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
