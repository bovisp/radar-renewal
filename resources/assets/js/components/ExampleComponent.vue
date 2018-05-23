<template>
  <div>
    <form class="ui form">
      <tabs>
        <tab name="Course objectives" :selected="true" title="tab1">
          <div class="field">
            <p>The following questions will evaluate how effectively the course met the learning objectives.</p>
          </div>

          <div class="field">
            <label for="stated_objectives">1.	How well did each course meet the stated objectives?</label>

            <multiselect
              v-model="stated_objectives"
              @close="statedObjectives"
              @open="statedObjectivesThanks=false"
              :options="data.tab1.stated_objectives.data"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              placeholder="Choose a course..."
              id="stated_objectives"
            ></multiselect>
          </div>

          <template v-if="statedObjectivesCourseFeedbackActive">
            <h4 class="ui dividing header">Did "{{ statedObjectivesCourseFeedback.name }}" successfully meet the learning objectives?</h4>

            <div class="inline fields">
              <label>Please select one:</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" v-model="statedObjectivesCourseFeedback.checkedOptions" value="Yes">
                  <label>Yes</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" v-model="statedObjectivesCourseFeedback.checkedOptions" value="No">
                  <label>No</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" v-model="statedObjectivesCourseFeedback.checkedOptions" value="Partially">
                  <label>Partially</label>
                </div>
              </div>
            </div>

            <div class="field">
              <label>Comments</label>
              <textarea v-model="statedObjectivesCourseFeedback.additionalFeedback"></textarea>
            </div>

            <div class="field">
              <button type="button" class="ui mini positive button" @click.prevent="addStatedObjectivesFeedback">Submit additional feedback</button>
              <button type="button" class="ui mini basic button" @click.prevent="clearStatedObjectivesFeedback">Cancel</button>
            </div>
          </template>

          <div class="field" v-if="statedObjectivesThanks">
            <div class="ui positive message">
              <i class="close icon" @click="statedObjectivesThanks=false"></i>
              <div class="header">
                Thank you!
              </div>
              <p>If you would like to submit feedback on another course, please choose one from the dropdown menu above.</p>
            </div>
          </div>

          <div class="field">
            <label for="specific_courses">2.	Do you have any suggestions that could help improve a specific module?</label>

            <multiselect
              v-model="specific_courses"
              @close="specificSelect"
              @open="specificCoursesThanks=false"
              :options="data.tab1.specific_courses.data"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              placeholder="Choose a course..."
              id="specific_courses"
            ></multiselect>
          </div>

          <template v-if="specificCoursesCourseFeedbackActive">
            <h4 class="ui dividing header">Additional Feedback for {{ specificCoursesCourseFeedback.name }}</h4>

            <div class="inline fields">
              <label>Select one or more of the following themes:</label>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" v-model="specificCoursesCourseFeedback.checkedOptions" value="Audio">
                  <label>Audio</label>
                </div>
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" v-model="specificCoursesCourseFeedback.checkedOptions" value="Content">
                  <label>Content</label>
                </div>
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" v-model="specificCoursesCourseFeedback.checkedOptions" value="Format">
                  <label>Format</label>
                </div>
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" v-model="specificCoursesCourseFeedback.checkedOptions" value="Time to complete">
                  <label>Time to complete</label>
                </div>
              </div>
            </div>

            <div class="field">
              <label>Feel free to comment on the themes you chose...</label>
              <textarea v-model="specificCoursesCourseFeedback.additionalFeedback"></textarea>
            </div>

            <div class="field">
              <button type="button" class="ui mini positive button" @click.prevent="addSpecificCourseFeedback">Submit additional feedback</button>
              <button type="button" class="ui mini basic button" @click.prevent="clearSpecificCourseFeedback">Cancel</button>
            </div>
          </template>

          <div class="field" v-if="specificCoursesThanks">
            <div class="ui positive message">
              <i class="close icon" @click="specificCoursesThanks=false"></i>
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
        </tab>

        <tab name="Course content" title="tab2">
          <div class="field">
            <p>The following questions will evaluate the relevance of the material.</p>
          </div>

          <div class="field" v-if="!topicsThanks">
            <label for="additionalTopic">3. Is there a topic that should be added to this course?</label>
            <input type="text" placeholder="Type a topic description..." id="additionalTopic" v-model="additional_topic">
          </div>

          <template v-if="additional_topic.length > 0">
            <div class="field">
              <button type="button" class="ui mini positive button" @click.prevent="addTopic">Add topic</button>
            </div>
          </template>

          <div class="field" v-if="topicsThanks">
            <div class="ui positive message">
              <i class="close icon" @click="topicsThanks=false"></i>
              <div class="header">
                Thank you!
              </div>
              <p>Would you like to suggest an additional topic? <button class="ui mini positive button" @click.prevent="topicsThanks=false">Yes</button></p>
            </div>
          </div>

          <div class="field">
            <h5>4. Was there a topic(s) that should be dealt with in more depth?</h5>
          </div>

          <div class="field" v-for="course in data.tab2.topic_depth.data">
            <div class="ui checkbox">
              <input type="checkbox" v-model="topicDepthData.topics" :value="course">
              <label>{{ course }}</label>
            </div>
          </div>

          <div class="field">
            <label>Feel free to comment on any of your course choices...</label>

            <textarea v-model="topicDepthData.comments"></textarea>
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

        <tab name="Course structure" title="tab3">
          <div class="field">
            <p>The following questions will evaluate the structure and organization of the course.</p>
          </div>

          <div class="field">
            <h5>5. Did you find the recommended paths helpful?</h5>
          </div>

          <div class="inline fields">
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" v-model="pathsHelpfulData.checkedOptions" value="Yes">
                <label>Yes</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" v-model="pathsHelpfulData.checkedOptions" value="No">
                <label>No</label>
              </div>
            </div>
          </div>

          <div class="field">
            <label>Feel free expand more fully on your choice...</label>
            <textarea v-model="pathsHelpfulData.comments"></textarea>
          </div>

          <div class="field">
            <h5>6. How did you find the overall length of the training material?</h5>
          </div>

          <div class="inline fields">
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" v-model="overallLengthData" value="Too little">
                <label>Too little</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" v-model="overallLengthData" value="Too much">
                <label>Too much</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" v-model="overallLengthData" value="Just right">
                <label>Just right</label>
              </div>
            </div>
          </div>

          <div class="field">
            <label>7. Do you have any suggestions that could help improve the radar renewal course series?</label>
            <textarea v-model="improveCourseData"></textarea>
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
        stated_objectives: '',
        specific_courses: '',
        additional_topic: '',

        specificCoursesData: [],
        statedObjectivesData: [],
        topicsData: [],
        topicDepthData: {
          topics: [],
          comments: ''
        },
        pathsHelpfulData: {
          checkedOptions: '',
          comments: ''
        },
        overallLengthData: '',
        improveCourseData: '',

        specificCoursesCourseFeedback: {
          name: '',
          checkedOptions: [],
          additionalFeedback: ''
        },
        statedObjectivesCourseFeedback: {
          name: '',
          checkedOptions: [],
          additionalFeedback: ''
        },

        specificCoursesCourseFeedbackActive: false,
        statedObjectivesCourseFeedbackActive: false,

        specificCoursesThanks: false,
        statedObjectivesThanks: false,
        topicsThanks: false,

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
            stated_objectives: {
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
          },
          tab2: {
            topic_depth: {
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
      },

      specificSelect () {
        this.specificCoursesCourseFeedback['name'] = this.specific_courses

        this.specificCoursesCourseFeedbackActive = true
      },

      addSpecificCourseFeedback () {
        this.specificCoursesData.push(this.specificCoursesCourseFeedback)

        this.specificCoursesThanks = true

        this.specificCoursesCourseFeedbackActive = false

        let index = this.data.tab1.specific_courses.data.findIndex(item => this.specific_courses === item)

        this.data.tab1.specific_courses.data.splice(index, 1)

        this.specific_courses = ''

        this.specificCoursesCourseFeedback = {
          name: '',
          checkedOptions: [],
          additionalFeedback: ''
        }
      },

      clearSpecificCourseFeedback () {
        this.specific_courses = ''

        this.specificCoursesCourseFeedback = {
          name: '',
          checkedOptions: [],
          additionalFeedback: ''
        }

        this.specificCoursesCourseFeedbackActive = false
      },

      statedObjectives () {
        this.statedObjectivesCourseFeedback['name'] = this.stated_objectives

        this.statedObjectivesCourseFeedbackActive = true
      },

      addStatedObjectivesFeedback () {
        this.statedObjectivesData.push(this.statedObjectivesCourseFeedback)

        this.statedObjectivesThanks = true

        this.statedObjectivesCourseFeedbackActive = false

        let index = this.data.tab1.stated_objectives.data.findIndex(item => this.stated_objectives === item)

        this.data.tab1.stated_objectives.data.splice(index, 1)

        this.stated_objectives = ''

        this.statedObjectivesCourseFeedback = {
          name: '',
          checkedOptions: [],
          additionalFeedback: ''
        }
      },

      clearStatedObjectivesFeedback () {
        this.stated_objectives = ''

        this.statedObjectivesCourseFeedback = {
          name: '',
          checkedOptions: [],
          additionalFeedback: ''
        }

        this.statedObjectivesCourseFeedbackActive = false
      },

      addTopic () {
        this.topicsData.push(this.additional_topic)

        this.topicsThanks = true

        this.additional_topic = ''
      }
    },

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
