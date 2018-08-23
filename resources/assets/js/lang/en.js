export default {
    tabs: {
      objectives: {
      	title: 'Course objectives',
      	description: 'The following questions will evaluate how effectively the course met the learning objectives.'
      },
      content: {
      	title: 'Course content',
      	description: 'The following questions will evaluate the relevance of the material.'
      },
      structure: {
      	title: 'Course structure',
      	description: 'The following questions will evaluate the structure and organization of the course.'
      },
      submit: 'Submit feedback'
    },

    buttons: {
        next: 'Next',
        previous: 'Previous'
    },

    messages: {
        submitting: 'Submitting your feedback',
        submitted: 'Success! Thanks for your feedback'
    },

    questions: {
    	q1: {
    		text: 'How well did each course meet the stated objectives?',
    		dropdown: {
    			option0: 'Choose a course...',
    			option1: 'Radar Refresher / Une révision des principes radar',
    			option2: 'S-Band / Le radar en bande S',
    			option3: 'X-Band / Le radar en bande X',
    			option4: 'S/C/X-Band Comparison / La comparaison des bandes S/C/X',
    			option5: 'Dual-Polarization Fundamentals / Introduction à la double polarisation',
    			option6: 'Dual Polarization: Basic Radar Products / Les produits de base issus de la double polarisation',
    			option7: 'Dual Polarization: Advanced Radar Products / Les produits très poussés issus de la double polarisation',
    		},
    		additional: {
    			question: {
    				part1: 'Did the',
    				part2: 'course successfully meet the learning objectives?'
    			},
    			radio: {
    				text: 'Please select one:',
    				option1: 'Yes / Oui',
                    option2: 'No / Non',
                    option3: 'Partially / Partiellement'
    			},
    			comments: 'Comments',
    			buttons: {
    				submit: 'Submit additional feedback',
    				cancel: 'Cancel'
    			},
    			message: {
    				header: 'Thank you!',
    				text: 'If you would like to submit feedback on another course, please choose one from the dropdown menu above.'
    			}
    		}
    	},
    	q2: {
    		text: 'Do you have any suggestions that could help improve a specific module?',
    		dropdown: {
    			option0: 'Choose a course...',
    			option1: 'Radar Refresher / Une révision des principes radar',
    			option2: 'S-Band / Le radar en bande S',
    			option3: 'X-Band / Le radar en bande X',
    			option4: 'S/C/X-Band Comparison / La comparaison des bandes S/C/X',
    			option5: 'Dual-Polarization Fundamentals / Introduction à la double polarisation',
    			option6: 'Dual Polarization: Basic Radar Products / Les produits de base issus de la double polarisation',
    			option7: 'Dual Polarization: Advanced Radar Products / Les produits très poussés issus de la double polarisation',
    		},
    		additional: {
    			label: 'Rétroaction additionnelle pour',
    			checkbox: {
    				text: 'Choisir un ou plusieurs des champs suivantes :',
    				option1: 'Audio',
    				option2: 'Content / Contenu',
    				option3: 'Format',
    				option4: 'Time to complete / Durée'
    			},
    			comments: 'Feel free to comment on the themes you chose...',
    			buttons: {
    				submit: 'Submit additional feedback',
    				cancel: 'Cancel'
    			},
    			message: {
    				header: 'Thank you!',
    				text: 'If you would like to submit feedback on another course, please choose one from the dropdown menu above.'
    			}
    		}
    	},
    	q3: {
    		text: 'Is there a topic that should be added to this course series?',
    		placeholder: 'Type a topic description',
    		button: 'Add topic',
    		additional: {
    			message: {
    				header: 'Thank you!',
    				text: 'Would you like to suggest an additional topic? ',
    				button: 'Yes'
    			}
    		}
    	},
    	q4: {
    		text: 'Was there a topic(s) that should be dealt with in more depth?',
    		checkbox: {
    			option1: 'Radar Refresher / Une révision des principes radar',
    			option2: 'S-Band / Le radar en bande S',
    			option3: 'X-Band / Le radar en bande X',
    			option4: 'S/C/X-Band Comparison / La comparaison des bandes S/C/X',
    			option5: 'Dual-Polarization Fundamentals / Introduction à la double polarisation',
    			option6: 'Dual Polarization: Basic Radar Products / Les produits de base issus de la double polarisation',
    			option7: 'Dual Polarization: Advanced Radar Products / Les produits très poussés issus de la double polarisation'
    		},
    		comments: 'Feel free to comment on any of your course choices...'
    	},
    	q5: {
    		text: 'Did you find the recommended paths helpful?',
    		radio: {
    			option1: 'Yes / Oui',
    			option2: 'No / Non'
    		},
    		comments: 'Feel free expand more fully on your choice...'
    	},
    	q6: {
    		text: 'How did you find the overall length of the training material?',
    		radio: {
    			option1: 'Too little / Insuffisant',
    			option2: 'Too much / Excessif',
    			option3: 'Just right / Suffisant'
    		}
    	},
    	q7: {
    		text: 'Do you have any suggestions that could help improve the radar renewal course series?'
    	}
    }
}