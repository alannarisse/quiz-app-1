// Questions and answers as an array of objects,
const questionsAnswers = [
    {
        question: "Pick the pastry you won't be able to order for breakfast this week.",
        answerOptions: [
            "Mint and Kale Doughnut",
            "Spaghetti Doughnut",
            "Gold Dusted Doughnut",
            "Chili Doughnut"
        ],
        correctAnswer: "Mint and Kale Doughnut",
        correctImg: "images/monica-trifle.gif", 
        correctAlt: "Woman pretends to enjoy her trifle",
        correctFeedback: "We're a little relieved that one isn't real. Vegetables do not belong in doughnuts.",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "The right answer was mint and kale doughnuts. Unfortunately your favorite super food and breaksfast pastry haven't been combined quite yet."
    },
    {
        question: "There's quite a few ways to eat sushi, which one of these isn't one of them?",
        answerOptions: [
            "Watermelon Sushi",
            "Sushi Burger",
            "Sushi Smoothie",
            "Sushi Bread"
        ],
        correctAnswer: "Sushi Smoothie",
        correctImg: "images/patrick-star.gif", 
        correctAlt: "Patrick enjoys his dinner",
        correctFeedback: "Does the words 'sushi smoothie' make your hair stand on end too?",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "Technically you can make sushi smoothies in your own home if you really wanted to, but no restaurant in their right mind would serve you one."
    },
    {
        question: "Choose the flavor you won't find on a hot day.",
        answerOptions: [
            "Ham Ice Cream",
            "Mayonnaise Ice Cream",
            "Sauerkraut Ice Cream",
            "Sriracha Ice Cream"
        ],
        correctAnswer: "Sauerkraut Ice Cream",
        correctImg: "images/pooh-bear.gif",
        correctAlt: "Pooh sits down to enjoy his dinner",
        correctFeedback: "Honestly, none of these sound all that refreshing, but pickled cabbage needs to stay far far away from our favorite summer treats.",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "Sauerkraut ice cream is the correct answer, though someone needs to stop whoever is making these other flavors too."
    },
    {
        question: "Which of these is not a way you can take your morning coffee or tea?",
        answerOptions: [
            "Cheese Tea",
            "Hot Sauce Cappuccino",
            "Avocado Latte",
            "Glitter latte"
        ],
        correctAnswer: "Hot Sauce Cappuccino",
        correctImg: "images/monica-trifle.gif", 
        correctAlt: "Woman pretends to enjoy her trifle",
        correctFeedback: "Though not a real thing yet, a hot sauce cappuccino or mocha doesn't sound so bad...",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "You might not be able to find a hot sauce cappuccino yet, but you can always add a few dabs to make your own."
    },
    {
        question: "What pizza topping are you unlikely to find in the U.S.?",
        answerOptions: [
            "Grape Pizza",
            "Strawberry Pizza",
            "Pizza Bouquet",
            "Mustard Pizza"
        ],
        correctAnswer: "Grape Pizza",
        correctImg: "images/patrick-star.gif", 
        correctAlt: "Patrick enjoys his dinner",
        correctFeedback: "By the time it's done cooking, wouldn't the grapes just be raisins? And who wants raisins on their pizza?",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "Though not the most unappetizing of all the options, grape pizza is the correct answer."
    },
    {
        question: "What's one way you can't enjoy ramen, at least not yet?",
        answerOptions: [
            "Ramen Burger",
            "Ramen Cocktail",
            "Beer Ramen",
            "Pringles-Flavored Instant Ramen"
        ],
        correctAnswer: "Ramen Cocktail",
        correctImg: "images/pooh-bear.gif",
        correctAlt: "Pooh sits down to enjoy his dinner",
        correctFeedback: "There's no bad way to enjoy ramen, but as of yet you can't order a ramen cocktail.",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "There's no bad way to enjoy ramen, but as of yet you can't order a ramen cocktail."
    },
    {
        question: "What edible is, unfortunately, not on the market for consumption?",
        answerOptions: [
            "Pot Lobster",
            "THC Salad",
            "Cannabis Cocktails",
            "CBD Chocolate Milk"
        ],
        correctAnswer: "THC Salad",
        correctImg: "images/monica-trifle.gif", 
        correctAlt: "Woman pretends to enjoy her trifle",
        correctFeedback: "I mean you COULD do this, but it wouldn't give you the effect you're looking for.",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "Sorry vegans, but THC salads are not on the menu yet."
    },
    {
        question: "Which cookie isn't actually available to satisfy your sweet tooth?",
        answerOptions: [
            "Red Hot Chips Ahoy",
            "Wasabi Oreos",
            "Peanut Butter and Jelly Cookies",
            "S'mores Cookies"
        ],
        correctAnswer: "Red Hot Chips Ahoy",
        correctImg: "images/patrick-star.gif", 
        correctAlt: "Patrick enjoys his dinner",
        correctFeedback: "This candy cookie combo might not be real, but part of me thinks it needs to be.",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "Red Hot Chips Ahoy is one brand partnership that isn't off the ground quite yet. "
    },
    {
        question: "Which of these snacks is not for sale in stores?",
        answerOptions: [
            "Pickle Popcorn",
            "Grilled Cheese and Ketchup Chips",
            "Blue Cheese Chips",
            "Butter Garlic Scallop Chips"
        ],
        correctAnswer: "Blue Cheese Chips",
        correctImg: "images/pooh-bear.gif",
        correctAlt: "Pooh sits down to enjoy his dinner",
        correctFeedback: "No matter how much you might love cheese, we hope we never see this chip flavor on the shelves.",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "It might seem like fish does not belong as a chip flavor, but neither does blue cheese. Thankfully we can still spare ourselves from the latter. "
    },
    {
        question: "What one of these is thankfully not a way you might be served food at a trendy restaurant?",
        answerOptions: [
            "Lego Bowl",
            "Shovel Plate",
            "Shoe Scooper",
            "Bed Pan Platter"
        ],
        correctAnswer: "Bed Pan Platter",
        correctImg: "images/monica-trifle.gif", 
        correctAlt: "Woman pretends to enjoy her trifle",
        correctFeedback: "Sometiems restaurants need to be stopped. I know I for one do not want to eat my food off anything but a plate. ",
        wrongImg: "images/egg-on-face.gif",
        wrongAlt: "Egg thrown on man's face",
        wrongFeedback: "If my food was ever served in a bed pan, I think I'd die of shock. And, I'd be okay with that. "
    }
];

//Variable for storing question number
let questionNumber = 0;

//Variable for storing score
let score = 0;

//Generate question form
function createQuestion () {
    if (questionNumber < questionsAnswers.length) {
        return `<form>
                <fieldset>
                    <legend>
                        <h3 class="questionHeadline">${questionsAnswers[questionNumber].question}</h3><br>
                    </legend>
                    <label for="answerOne">
                        <input type="radio" id="answerOne" value="${questionsAnswers[questionNumber].answerOptions[0]}" name="answer" required>
                        <span>${questionsAnswers[questionNumber].answerOptions[0]}</span>
                    </label>
                    <label for="answerTwo">
                        <input type="radio" id="answerTwo" value="${questionsAnswers[questionNumber].answerOptions[1]}" name="answer" required>
                        <span>${questionsAnswers[questionNumber].answerOptions[1]}</span>
                    </label>
                   <label for="answerThree">
                        <input type="radio" id="answerThree" value="${questionsAnswers[questionNumber].answerOptions[2]}" name="answer" required>
                        <span>${questionsAnswers[questionNumber].answerOptions[2]}</span>
                    </label>
                    <label for="answerFour">
                        <input type="radio" id="answerFour" value="${questionsAnswers[questionNumber].answerOptions[3]}" name="answer" required>
                        <span>${questionsAnswers[questionNumber].answerOptions[3]}</span>
                    </label>
                    <button role="button" class="submitButton">SUBMIT</button>
                </fieldset>
            </form>`;
    } else {
        renderFinalResults();
        restartQuiz();
        $('.scoreKeeper').addClass('hidden');
    }   
}

//Create HTML for right answers
function correctAnswer() {
    return `<div class="css-rightAnswer">
            <img src="${questionsAnswers[questionNumber].correctImg}" alt="${questionsAnswers[questionNumber].correctAlt}" class="answerGifs">
            <h3>ORDER UP!</h3>
            <p>${questionsAnswers[questionNumber].correctFeedback}</p>
            <button role="button" class="nextButton">NEXT QUESTION</button>
        </div>`;
}

//Create HTML for wrong answers
function wrongAnswer() {
    return `<div class="css-wrongAnswer">
            <img src="${questionsAnswers[questionNumber].wrongImg}" alt="${questionsAnswers[questionNumber].wrongAlt}" class="answerGifs">
            <h3>OOP, YOU'VE GOT EGG ON YOUR FACE!</h3>
            <p>${questionsAnswers[questionNumber].wrongFeedback}</p>
            <button role="button" class="nextButton">NEXT QUESTION</button>
        </div>`;
}

//Function to update the score
function updateScore() {
    score++;
}

function updateScoreTicker() {
    updateScore();
    $('.score').text(score);
}

//Function to update the question number ticker
function updateQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
}

//Function that starts the quiz when clicking start button
function startQuiz () {
    $('.startQuiz').on('click', '.startButton', function(event) {
        $('.startQuiz').addClass('hidden');
        $('.questionAnswerForm').removeClass('hidden');
        $('.scoreKeeper').removeClass('hidden');
        $('.questionNumber').text(1);
    });
}

//Render first question
function renderFirstQuestion() {
    $('.questionAnswerForm').html(createQuestion());
}

//What's seen if you submit a correct answer
//Calls HTML from above
function renderIfCorrect() {
    $('.correctAnswerScreen').html(correctAnswer());
  }

  function correctAnswerVisible() {
    $('.questionAnswerForm').addClass('hidden');
    renderIfCorrect();
    $('.correctAnswerScreen').removeClass('hidden');
}

//What's seen if you submit a wrong answer
//Calls HTML from above
function renderIfWrong() {
    $('.wrongAnswerScreen').html(wrongAnswer());
  }

function wrongAnswerVisible() {
    $('.questionAnswerForm').addClass('hidden');
    renderIfWrong();
    $('.wrongAnswerScreen').removeClass('hidden');
}

//Create event listener looking for submitted answer
//Create view based on question number
//Create a loop pushing to final results if last set in array
function answerChoice() {
    $('form').on('submit', function (event) {
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer= `${questionsAnswers[questionNumber].correctAnswer}`;

        if (correctAnswer.includes(answer)) {
            if (questionNumber === 9) {
                correctAnswerVisible();
                $('.scoreKeeper').addClass('hidden');
                updateScoreTicker();
                $('.correctAnswerScreen button').replaceWith(
                    `<button role="button" class="nextButton">VIEW FINAL RESULTS</button>`);
            } else if (questionNumber < 9) {
                correctAnswerVisible ();
                updateScoreTicker();
            }
        } else if (!correctAnswer.includes(answer)) {
            if (questionNumber === 9) {
                wrongAnswerVisible();
                $('.scoreKeeper').addClass('hidden');
                $('.wrongAnswerScreen button').replaceWith(
                    `<button role="button" class="nextButton">VIEW FINAL RESULTS</button>`);
            } else if (questionNumber < 9) {
                wrongAnswerVisible();
            }
        }
    });
}

//Move on to next question
function renderNextQuestion() {
    $('.feedbackScreen').on('click', '.nextButton', function (event){
        updateQuestionNumber ();
        renderFirstQuestion ();
        $('.correctAnswerScreen').addClass('hidden');
        $('.wrongAnswerScreen').addClass('hidden');
        $('.questionAnswerForm').removeClass('hidden');
        answerChoice();
    });
}

//Render final results
function renderFinalResults() {
    if (score >= 6) {
        $('.questionAnswerForm form').replaceWith(
            `<div role="final score" class="finalScore">
                <img src="images/celebration.gif" alt="Friends dancing" class="answerGifs">
                <h3>GREAT JOB!</h3>
                <p>Your results: <span class="style">${score}</span> out of <span class="style">10</span>.<br>You probably already know this, but you're quite the foodie.</p>
            </div>`
        );
    } else {
        $('.questionAnswerForm form').replaceWith(
            `<div role="final score" class="finalScore">
                <img src="images/sad.gif" alt="Boy puts head down on desk" class="answerGifs">
                <h3>OH NO!</h3>
                <p>Your results: <span class="style">${score}</span> out of <span class="style">10</span>.<br>Honestly, it's probably a good thing you haven't gotten caught up in these trends.</p>
            </div>`
        );
    }
    $('.finalScore').append(`<button role="button" class="restart">RESTART</button>`);
}

//Restart the quiz when button is clicked
function restartQuiz() {
    $('.restart').on('click', function (event) {
        location.reload();
    });
}

//Initiate quiz when page loads
function initiateQuiz() {
    startQuiz();
    renderFirstQuestion();
    answerChoice();
    renderNextQuestion();
}

$(initiateQuiz);
