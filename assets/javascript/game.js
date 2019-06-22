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
    displayDOM();
    startTimer();
}

document.getElementById("start-btn").addEventListener("click", hideDisplay);

function showQuiz() {
    for (var i = 0; i < myQuestions.length; i++) {
        var qAndA = document.createElement("div");
        qAndA.setAttribute("class", "question-class")
        var q = document.createElement("label")
        q.innerHTML = myQuestions[i].question;
        qAndA.appendChild(q)

        for (var j = 0; j < myQuestions[i].answers.length; j++) {
            var newDiv = document.createElement("div")

            var a = document.createElement("input");
            a.setAttribute("value", myQuestions[i].answers[j])
            a.setAttribute("type", "radio")
            a.setAttribute("name", myQuestions[i].answers)
            a.setAttribute("class", "radio-class")
            newDiv.append(a)
            var label = document.createElement("label")
            label.innerHTML = myQuestions[i].answers[j];
            newDiv.append(label)
            qAndA.appendChild(newDiv)
        }
        console.log(qAndA);
        document.getElementById("quiz").appendChild(qAndA);

    }

}

function displayDOM() {

    var button = document.createElement("button")
    button.setAttribute("type", "submit")
    button.setAttribute("id", "submit-btn")
    button.textContent = "Submit"
    document.getElementById("end").appendChild(button)

    function submit() {
        clearInterval(setTimeout);
        var qClass = document.getElementsByClassName("question-class")
        checkAnswers(qClass);
    }
    document.getElementById("submit-btn").addEventListener("click", submit);

    var countdown = document.createElement("h2");
    countdown.setAttribute("id", "display-count");
    countdown.textContent = "1:00";
    document.getElementById("count-time").appendChild(countdown);
}
var userAnswers = []
var correct = 0

function checkAnswers(arr) {


    for (var e = 0; e < arr.length; e++) {
        var current = arr[e];
        var radios = current.getElementsByClassName('radio-class')
        console.log(radios)
        // console.log(radios.querySelector('input:checked'))
        for (c = 0; c < radios.length; c++) {
            var isChecked = radios[c].checked
            if (isChecked) {
                var userChoice = radios[c].value
                console.log(userChoice)
                console.log(myQuestions[e].correctAnswer())
                if (userChoice == myQuestions[e].correctAnswer()){
                    correct++;
                    
                }
            }     
               
        }
    }
    alert("You got " + correct + " out of 5!");
}

var counter = 60

function startTimer () {
    
    setInterval(function (){counter--;
    var display = document.getElementById("display-count");
    display.innerHTML = counter;
    }, 1000)

    if (counter < 0){
        clearTimeout(setInterval);
        alert ("You ran out of time!")
    }
}



//check answers
// retrieve "value" attribute of user answers
//loop through correct answers and compare "value" to correct answer "value"
// increment correct for every correct
// update DOM to show x out of 5 correct
// cleartimeout

// need a timer function
// var count = 60, timer = setInterval(function() {
//     document.getElementById("display-count").innerHTML(count--);
//     if(count == 1) clearInterval(timer);
// }, 1000);
// setTimeout(showQuiz, 60000)
// var timeInterval = setInterval(clock, 1000)

