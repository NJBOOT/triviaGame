var myQuestions = [
    {
        question: "The universe is _____ billion years old",
        answers: [13.7, 28.4, 1, 68.4],
        correctAnswer: function () {
            return this.answers[0]
        }
    },
    {
        question: "How many planets are in our solar system?",
        answers: [5, 9, 8, 6],
        correctAnswer: function () {
            return this.answers[2]
        }

    },

    {
        question: "How fast is the speed of light?",
        answers: ["1.2 million miles per second", "186 thousand miles per second", "1.2 million miles per hour", "542 thousand miles per second"],
        correctAnswer: function () {
            return this.answers[1]
        }

    },
    {
        question: "We are located in the _______ Galaxy",
        answers: ["Andromeda", "846-D", "Messier", "Milky Way"],
        correctAnswer: function () {
            return this.answers[3]
        }

    },

    {
        question: "How many minutes does it take light from the Sun to reach Earth?",
        answers: [4, 40, 8, 15],
        correctAnswer: function () {
            return this.answers[2]
        }
    }

]

function hideDisplay() {
    var x = document.getElementById("start-page");
    console.log(x)
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    showQuiz();
}

document.getElementById("start-btn").addEventListener("click", hideDisplay);


function showQuiz() {
    for (var i = 0; i < myQuestions.length; i++) {
        var qAndA = document.createElement("div");
        var q = document.createElement("label")
        q.innerHTML = myQuestions[i].question;
        qAndA.appendChild(q)

        for (var j = 0; j < myQuestions[i].answers.length; j++) {
            var newDiv = document.createElement("div")
            var a = document.createElement("input");
            a.setAttribute("value", myQuestions[i].answers[j])
            a.setAttribute("type", "radio")
            a.setAttribute("name", myQuestions[i])
            newDiv.append(a)
            var label = document.createElement("label")
            label.innerHTML = myQuestions[i].answers[j];
            newDiv.append(label)
            qAndA.appendChild(newDiv)
        }
        console.log(qAndA);
        document.getElementById("quiz").appendChild(qAndA);
    }

    var button = document.createElement("button")
    button.setAttribute("type", "submit")
    button.setAttribute("id", "submit-btn")
    button.textContent = "Submit"
    document.getElementById("end").appendChild(button)

    var countdown = document.createElement("h2");
    countdown.setAttribute("id", "display-count");
    countdown.textContent = "1:00";
    document.getElementById("count-time").appendChild(countdown);
}

var userAnswers = []
var correct = 0
// var correctAnswers = myQuestions[i].correctAnswer
// // create a for loop to loop through all my answers and check against user answer
function checkAnswers() {

    for (var e; e < myQuestions.length; e++) {
        if (userAnswers === myQuestions[i].correctAnswer) {
            correct++
        }
    }
}
// need a timer function
// setTimeout(function, 60000)
// clear timeout
// document.getElementById("submit-btn").addEventListener("click", clearTimeout)



    // if the user doesn't click submit in 60 seconds...
    // then timeout function fires. 
    // display timer
