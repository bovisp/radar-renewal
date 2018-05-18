<template>
  <div>
    <form class="ui form">
      <tabs>
        <tab name="Specific course questions" :selected="true" title="tab1">
          <div class="required field">
            <label for="most_benefical">Which course do you feel was the most beneficial?</label>

            <multiselect 
              v-model="most_benefical"
              :options="data.tab1.most_benefical.data"
              :searchable="false"
              :close-on-select="true" 
              :show-labels="false"
              placeholder="Choose a course..."
              id="most_benefical"
            ></multiselect>
          </div>

          <div class="required field">
            <label for="least_benefical">Which course do you feel was the least beneficial?</label>

            <multiselect 
              v-model="least_benefical"
              :options="data.tab1.least_benefical.data"
              :searchable="false"
              :close-on-select="true" 
              :show-labels="false"
              placeholder="Choose a course..."
              id="least_benefical"
            ></multiselect>
          </div>

          <div class="field">
            <label for="specific_courses">Do you have comments about specific course(s)?</label>

            <multiselect 
              v-model="specific_courses"
              :options="data.tab1.specific_courses.data"
              :searchable="false"
              :close-on-select="true" 
              :show-labels="false"
              placeholder="Choose a course..."
              id="specific_courses"
            ></multiselect>
          </div>

          <div class="clearfix field">
            <button class="ui right floated primary button" @click.prevent="change('tab2')">
              Next
              <i class="right chevron icon"></i>
            </button>
          </div>
        </tab>

        <tab name="About Our Culture" title="tab2">
          <div class="field">
            <label for="field3">Field #3</label>
            <input type="text" name="field3" placeholder="Field #3" id="field3" v-model="tab2.field1">
          </div>

          <div class="field">
            <label for="field4">Field #4</label>
            <input type="text" name="field4" placeholder="Field #4" id="field4" v-model="tab2.field2">
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
        </tab>

        <tab name="About Our Vision" title="tab3">
          <div class="field">
            <label for="field5">Field #5</label>
            <input type="text" name="field5" placeholder="Field #5" id="field5" v-model="tab3.field1">
          </div>

          <div class="field">
            <label for="field6">Field #6</label>
            <input type="text" name="field6" placeholder="Field #6" id="field6" v-model="tab3.field2">
          </div>

          <div class="clearfix field">
            <button class="ui left floated primary button" @click.prevent="change('tab2')">
              <i class="left chevron icon"></i>
              Previous
            </button>
          </div>
        </tab>
      </tabs>

      <button class="big fluid positive bottom attached ui button" @click.prevent="validate">Submit feedback</button>
    </form>

    <div class="ui error message">
      <div class="header">
        Some required fields were left blank
      </div>
      <p>Here are the fields:</p>
    </div>
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
        most_benefical: '',
        least_benefical: '',
        specific_courses: '',
        tab1: {
          field1: '',
          field2: ''
        },
        tab2: {
          field1: '',
          field2: ''
        },
        tab3: {
          field1: '',
          field2: ''
        },
        data: {
          tab1: {
            most_benefical: {
              required: true,
              hasError: false,
              value: '',
              data: [
                'Radar Refresher',
                'S-Band',
                'X-Band',
                'S/C/X-Band Comparison',
                'Dual-Polarization Fundamentals',
                'Dual Polarization: Basic Radar Products',
                'Dual Polarization: Advanced Radar Products'
              ],
            },
            least_benefical: {
              required: true,
              hasError: false,
              value: '',
              data: [
                'Radar Refresher',
                'S-Band',
                'X-Band',
                'S/C/X-Band Comparison',
                'Dual-Polarization Fundamentals',
                'Dual Polarization: Basic Radar Products',
                'Dual Polarization: Advanced Radar Products'
              ],
            },
            specific_courses: {
              required: false,
              hasError: false,
              value: '',
              data: [
                'Radar Refresher',
                'S-Band',
                'X-Band',
                'S/C/X-Band Comparison',
                'Dual-Polarization Fundamentals',
                'Dual Polarization: Basic Radar Products',
                'Dual Polarization: Advanced Radar Products'
              ],
            }
          }
        }
      }
    },

    methods: {
      change(tab) {
        window.events.$emit('changed', tab)
      },

      validate () {
        let data = {}

        data = flattenObject(this.data, 1, '')
        
        console.log(data)
      }
    },

    watch: {
      specific_courses () {
        let index = this.data.tab1.specific_courses.data.findIndex(item => this.specific_courses === item)

        console.log(index)

        this.data.tab1.specific_courses.data.splice(index, 1)

        this.specific_courses = ''
      }
    }

    // watch: {
    //   tab1: {
    //     handler(val, oldVal) {
    //       if (this.tab1.field1 !== '' && this.tab1.field2 !== '') {
    //         window.events.$emit('filled', {
    //           tab: 'tab1',
    //           filled: true
    //         })
    //       } else {
    //         window.events.$emit('filled', {
    //           tab: 'tab1',
    //           filled: false
    //         })
    //       }
    //     },
    //     deep:true
    //   },
    //   tab2: {
    //     handler(val, oldVal) {
    //       if (this.tab2.field1 !== '' && this.tab2.field2 !== '') {
    //         window.events.$emit('filled', {
    //           tab: 'tab2',
    //           filled: true
    //         })
    //       } else {
    //         window.events.$emit('filled', {
    //           tab: 'tab2',
    //           filled: false
    //         })
    //       }
    //     },
    //     deep:true
    //   },
    //   tab3: {
    //     handler(val, oldVal) {
    //       if (this.tab3.field1 !== '' && this.tab3.field2 !== '') {
    //         window.events.$emit('filled', {
    //           tab: 'tab3',
    //           filled: true
    //         })
    //       } else {
    //         window.events.$emit('filled', {
    //           tab: 'tab3',
    //           filled: false
    //         })
    //       }
    //     },
    //     deep:true
    //   },
    // },
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
