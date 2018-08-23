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

    buttons: {
        next: 'suivant',
        previous: 'précédent'
    },

    messages: {
        submitting: 'Soumission de votre rétroaction',
        submitted: 'Réussi! Merci pour vos commentaires'
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
    				part1: 'Le cours',
    				part2: `a-t-il atteint les objectifs d'apprentissage?`
    			},
    			radio: {
    				text: 'S’il vous plait, choisir une réponse :',
    				option1: 'Yes / Oui',
    				option2: 'No / Non',
    				option3: 'Partially / Partiellement'
    			},
    			comments: 'Commentaires',
    			buttons: {
    				submit: 'Soumettre une rétroaction additionnelle',
    				cancel: 'Annuler'
    			},
    			message: {
    				header: 'Merci!',
    				text: 'Si vous désirez nous faire parvenir une rétroaction pour un autre cours, S.V.P. le sélectionner dans le menu déroulant ci-dessus.'
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
                    option2: 'Content / Contenu',
                    option3: 'Format',
                    option4: 'Time to complete / Durée'
    			},
    			comments: `N'hésitez pas à commenter les champs que vous avez choisis...`,
    			buttons: {
    				submit: 'Soumettre une rétroaction additionnelle',
    				cancel: 'Annuler'
    			},
    			message: {
    				header: 'Merci!',
    				text: 'Si vous désirez nous faire parvenir une rétroaction pour un autre cours, S.V.P. le sélectionner dans le menu déroulant ci-dessus.'
    			}
    		}
    	},
    	q3: {
    		text: 'Le cas échéant, quel sujet devrait être ajouté à cette série de cours?',
    		placeholder: 'Taper une description de sujet',
    		button: 'Ajouter un sujet',
    		additional: {
    			message: {
    				header: 'Merci',
    				text: 'Aimeriez-vous proposer un autre sujet',
    				button: 'Oui'
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
    		comments: `N'hésitez pas à commenter chacun de vos choix de cours...`
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