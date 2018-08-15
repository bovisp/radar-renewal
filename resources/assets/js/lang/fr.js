export default {
    tabs: {
      objectives: {
      	title: 'Objectifs d’apprentissage',
      	description: 'Les questions suivantes permettront d’évaluer à quel point le cours a contribué à atteindre les objectifs d’apprentissage.'
      },
      content: {
      	title: 'Contenu du cours',
      	description: 'Les questions suivantes permettront d’évaluer la pertinence du matériel.'
      },
      structure: {
      	title: 'Structure du cours',
      	description: 'Les questions suivantes permettront d’évaluer la structure et l’organisation du cours.'
      },
      submit: 'Soumettre'
    },

    questions: {
    	q1: {
    		text: 'Dans quelle mesure chaque cours a-t-il atteint les objectifs énoncés?',
    		dropdown: {
    			option0: 'Choisissez un cours...',
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
    				option1: 'Yes',
    				option2: 'No',
    				option3: 'Partially'
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
    		text: 'Avez-vous des suggestions qui pourraient améliorer un cours particulier?',
    		dropdown: {
    			option0: 'Choisissez un cours...',
    			option1: 'Radar Refresher / Une révision des principes radar',
    			option2: 'S-Band / Le radar en bande S',
    			option3: 'X-Band / Le radar en bande X',
    			option4: 'S/C/X-Band Comparison / La comparaison des bandes S/C/X',
    			option5: 'Dual-Polarization Fundamentals / Introduction à la double polarisation',
    			option6: 'Dual Polarization: Basic Radar Products / Les produits de base issus de la double polarisation',
    			option7: 'Dual Polarization: Advanced Radar Products / Les produits très poussés issus de la double polarisation',
    		},
    		additional: {
    			label: 'Additional feedback for',
    			checkbox: {
    				text: 'Select one or more of the following themes:',
    				option1: 'Audio',
    				option2: 'Content',
    				option3: 'Format',
    				option4: 'Time to complete'
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
    		text: 'Le cas échéant, quel sujet devrait être ajouté à cette série de cours?',
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
    		text: 'Le cas échéant, quels sujets profiteraient d’un traitement plus en profondeur?',
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
    		text: 'Jugez-vous utiles les parcours d’apprentissage proposés?',
    		radio: {
    			option1: 'Yes / Oui',
    			option2: 'No / Non'
    		},
    		comments: 'N’hésitez pas à préciser votre réponse...'
    	},
    	q6: {
    		text: 'Que pensez-vous du volume du matériel de formation?',
    		radio: {
    			option1: 'Too little / Insuffisant',
    			option2: 'Too much / Excessif',
    			option3: 'Just right / Suffisant'
    		}
    	},
    	q7: {
    		text: 'Avez-vous des suggestions qui nous permettraient d’améliorer la série de cours portant sur le renouvèlement des radars?'
    	}
    }
}