// Questions and answers as an array of objects,
const questionsAnswers = [
    {
        question: "Pick the one you won't be able to order for breakfast this week.",
        answerOptions: [
            "Mint and Kale Doughnut",
            "Spaghetti Doughnut",
            "Gold Dusted Doughnut",
            "Chili Doughnut"
        ],
        correctAnswer: "Mint and Kale Doughnut",
        correctImg: ["images/monica-trifle.gif", "Woman pretends to enjoy her trifle"],
        correctFeedback: "We're a little relieved that one isn't real. Vegetables do not belong in doughnuts.",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
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
        correctImg: ["images/patrick-star.gif", "Patrick enjoys his dinner"],
        correctFeedback: "Does the words 'sushi smoothie' make your hair stand on end too?",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
        wrongFeedback: "Technically you can make this in your own home if you really wanted to, but no restaurant in their right mind would serve you a sushi smoothie."
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
        correctImg: ["images/pooh-bear.gif", "Pooh sits down to enjoy his dinner"],
        correctFeedback: "Honestly, none of these sound all that refreshing, but pickled cabbage needs to stay far far away from our favorite summer treats.",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
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
        correctImg: ["images/monica-trifle.gif", "Woman pretends to enjoy her trifle"],
        correctFeedback: "Though not a real thing yet, a hot sauce cappuccino or mocha doesn't sound so bad...",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
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
        correctImg: ["images/patrick-star.gif", "Patrick enjoys his dinner"],
        correctFeedback: "By the time it's done cooking, wouldn't the grapes just be raisins? And who wants raisins on their pizza?",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
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
        correctImg: ["images/pooh-bear.gif", "Pooh sits down to enjoy his dinner"],
        correctFeedback: "There's no bad way to enjoy ramen, but as of yet you can't order a ramen cocktail.",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
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
        correctImg: ["images/monica-trifle.gif", "Woman pretends to enjoy her trifle"],
        correctFeedback: "I mean you COULD do this, but it wouldn't give you the effect you're looking for.",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
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
        correctImg: ["images/patrick-star.gif", "Patrick enjoys his dinner"],
        correctFeedback: "This candy cookie combo might not be real, but part of me thinks it needs to be.",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
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
        correctImg: ["images/pooh-bear.gif", "Pooh sits down to enjoy his dinner"],
        correctFeedback: "No matter how much you might love cheese, we hope we never see this chip flavor on the shelves.",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
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
        correctImg: ["images/monica-trifle.gif", "Woman pretends to enjoy her trifle"],
        correctFeedback: "Sometiems restaurants need to be stopped. I know I for one do not want to eat my food off anything but a plate. ",
        wrongImg: ["images/egg-on-face.gif", "Egg thrown on man's face"],
        wrongFeedback: "If my food was ever served in a bed pan, I think I'd die of shock. And, I'd be okay with that. "
    }
];