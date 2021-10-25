const state = {
	quizStarted: false,
	quizCompleted: false,
	scrollHeight: 0,
	questions: [
		// PERSONALITY QUESTIONS
		{
			content: "You’re bored. Pick a smartphone activity / app:",
			isAnswered: false,
			illustrationRef: 0,
			ingredientRef: 0,
			answers: [
				{
					content: "Instagram",
					value: 0
				},
				{
					content: "Facebook",
					value: 3
				},
				{
					content: "Twitter",
					value: 1
				},
				{
					content: "Reminders",
					value: 2
				},
				{
					content: "Camera",
					value: 4
				},
				{
					content: "Pinterest",
					value: 5
				}
			]
		},
		{
			content: "Pick an experience:",
			isAnswered: false,
			illustrationRef: 0,
			ingredientRef: 0,
			answers: [
				{
					content: "Concert",
					value: 0
				},
				{
					content: "Game Night",
					value: 1
				},
				{
					content: "Staycation",
					value: 3
				},
				{
					content: "Burning Man",
					value: 4
				},
				{
					content: "Try a new restaurant",
					value: 5
				},
				{
					content: "A workshop, class or conference",
					value: 2
				}
			]
		},
		{
			content: "Of the following, which is most important to you?",
			isAnswered: false,
			illustrationRef: 0,
			ingredientRef: 0,
			answers: [
				{
					content: "Expression",
					value: 4
				},
				{
					content: "Efficiency",
					value: 1
				},
				{
					content: "Harmony",
					value: 2
				},
				{
					content: "Open Mindedness",
					value: 5
				},
				{
					content: "Peace",
					value: 3
				},
				{
					content: "Current Events",
					value: 0
				}
			]
		},
		{
			content: "Which best represents you?",
			isAnswered: false,
			illustrationRef: 0,
			ingredientRef: 0,
			answers: [
				{
					content: "The roof",
					value: 3
				},
				{
					content: "The door",
					value: 5
				},
				{
					content: "The window",
					value: 4
				},
				{
					content: "The living room",
					value: 0
				},
				{
					content: "The space",
					value: 5
				},
				{
					content: "The pillars",
					value: 2
				}
			]
		},
		{
			content: "You get a bonus day off. What do you do with it?",
			isAnswered: false,
			illustrationRef: 0,
			ingredientRef: 0,
			answers: [
				{
					content: "Make plans to go out",
					value: 0
				},
				{
					content: "Indulge in a hobby",
					value: 5
				},
				{
					content: "Dive into a book",
					value: 1
				},
				{
					content: "Catch up on some work",
					value: 2
				},
				{
					content: "Spend time with the fam",
					value: 3
				},
				{
					content: "Do something spontaneous",
					value: 4
				}
			]
		},
		{
			content: "My Kryptonite:",
			isAnswered: false,
			illustrationRef: 0,
			ingredientRef: 0,
			answers: [
				{
					content: "Emotions",
					value: 1
				},
				{
					content: "Too Much Pressure",
					value: 3
				},
				{
					content: "Rigid Rules & Institutions",
					value: 4
				},
				{
					content: "Analysis Paralysis",
					value: 2
				},
				{
					content: "Micromanagement",
					value: 5
				},
				{
					content: "Unwanted Change",
					value: 0
				}
			]
		},
		{
			content: "Zombie apocalypse! Pick a thing",
			isAnswered: false,
			illustrationRef: 0,
			ingredientRef: 0,
			answers: [
				{
					content: "Armor",
					value: 3
				},
				{
					content: "Crossbow",
					value: 2
				},
				{
					content: "Cool outfit",
					value: 0
				},
				{
					content: "Laboratory",
					value: 1
				},
				{
					content: "Abandoned Mall",
					value: 4
				},
				{
					content: "Car",
					value: 5
				}
			]
		},
		// MOOD QUESTIONS
		{
			content: "How’s it going?",
			isAnswered: false,
			illustrationRef: 1,
			ingredientRef: 1,
			answers: [
				{
					content: "Meh",
					value: 2
				},
				{
					content: "Everything stay cherry",
					value: 4
				},
				{
					content: "I can’t sit still",
					value: 3
				},
				{
					content: "I’m doing amazing!",
					value: 0
				},
				{
					content: "Grr!!",
					value: 5
				},
				{
					content: "There’s a lot on my mind",
					value: 1
				}
			]
		},
		{
			content: "Quickly — pick a spirit animal",
			isAnswered: false,
			illustrationRef: 1,
			ingredientRef: 1,
			answers: [
				{
					content: "Turtle",
					value: 4
				},
				{
					content: "Puppy",
					value: 0
				},
				{
					content: "Whale",
					value: 1
				},
				{
					content: "Sloth",
					value: 2
				},
				{
					content: "Squirrel",
					value: 3
				},
				{
					content: "Cactus",
					value: 5
				}
			]
		},
		{
			content: "Pick a color",
			isAnswered: false,
			illustrationRef: 1,
			ingredientRef: 1,
			answers: [
				{
					content: "Yellow",
					value: 0
				},
				{
					content: "Blue",
					value: 1
				},
				{
					content: "Red",
					value: 5
				},
				{
					content: "White",
					value: 3
				},
				{
					content: "Gray",
					value: 2
				},
				{
					content: "Green",
					value: 4
				}
			]
		},
		{
			content: "Pick an emoji",
			isAnswered: false,
			illustrationRef: 1,
			ingredientRef: 1,
			answers: [
				{
					content: "T_T",
					value: 1
				},
				{
					content: "-_-",
					value: 2
				},
				{
					content: "(╯°Д°）╯︵ ┻━┻",
					value: 5
				},
				{
					content: "^____^",
					value: 0
				},
				{
					// eslint-disable-next-line no-useless-escape
					content: "¯\\_(ツ)_/¯",
					value: 4
				},
				{
					content: "(＠_＠)",
					value: 3
				}
			]
		},
		{
			content: "You usually sleep",
			isAnswered: false,
			illustrationRef: 1,
			ingredientRef: 1,
			answers: [
				{
					content: "Full Fetal",
					value: 3
				},
				{
					content: "Half fetal",
					value: 1
				},
				{
					content: "Vampire",
					value: 0
				},
				{
					content: "Starfish",
					value: 4
				},
				{
					content: "Stomach",
					value: 5
				},
				{
					content: "Log",
					value: 2
				}
			]
		},
		{
			content: "Choose a Bob",
			isAnswered: false,
			illustrationRef: 2,
			ingredientRef: 2,
			answers: [
				{
					content: "Ross",
					value: 1
				},
				{
					content: "Marley",
					value: 3
				},
				{
					content: "Sponge",
					value: 4
				},
				{
					content: "Dylan",
					value: 0
				},
				{
					content: "‘s BBQ",
					value: 2
				},
				{
					content: "Julia Roberts",
					value: 5
				}
			]
		},
		{
			content: "Which object best represents you?",
			isAnswered: false,
			illustrationRef: 2,
			ingredientRef: 2,
			answers: [
				{
					content: "Sponge",
					value: 3
				},
				{
					content: "Tree",
					value: 0
				},
				{
					content: "Book",
					value: 1
				},
				{
					content: "Gem",
					value: 5
				},
				{
					content: "Ball",
					value: 4
				},
				{
					content: "Slippah",
					value: 2
				}
			]
		},
		{
			content: "Choose a condiment or topping",
			isAnswered: false,
			illustrationRef: 2,
			ingredientRef: 2,
			answers: [
				{
					content: "Kikkoman Shoyu",
					value: 2
				},
				{
					content: "Scallions",
					value: 5
				},
				{
					content: "Nori",
					value: 1
				},
				{
					content: "Tobiko",
					value: 4
				},
				{
					content: "Microgreens",
					value: 0
				},
				{
					content: "Yuzu Kosho",
					value: 3
				}
			]
		}
	]
};

const getters = {
	allQuestions: state => state.questions,
	quizCompleted: state => state.quizCompleted,
	quizStarted: state => state.quizStarted,
	scrollHeight: state => state.scrollHeight
};

const actions = {};

const mutations = {
	setScrollHeight(state, { value }) {
		state.scrollHeight = value;
	},
	setQuestionsToAnswered(state, { selected, value }) {
		state.questions.map(question => {
			if (question.content == selected) {
				question.isAnswered = value;
			}
		});
	},
	setQuizStatus(state, { result }) {
		state.quizCompleted = result;
	},
	setQuizStarted(state, { value }) {
		state.quizStarted = value;
	},
	resetAllAnsweredStatus(state) {
		state.questions.map(question => {
			question.isAnswered = false;
		});
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
