var selectedSubject = "";
var selectedTopic = "";

function showSubjects() {
  document.getElementById("first-page").style.display = "none";
  document.getElementById("subject-selection").style.display = "block";
}

function selectSubject(subject) {
  var subjectButtons = document.getElementsByClassName("subject-button");
  for (var i = 0; i < subjectButtons.length; i++) {
    subjectButtons[i].classList.remove("selected");
  }

  event.target.classList.add("selected");
  selectedSubject = subject;
  console.log(selectedSubject);
}

function showTopicSelection() {
  if (selectedSubject !== "") {
    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("topic-selection").style.display = "block";
    generateTopics(selectedSubject); // Generate topics based on the selected subject
  } else {
    alert("Please select a subject first.");

  }
}

function generateTopics(subject) {
  var topicsList = document.getElementById("topics-list");
  topicsList.innerHTML = ""; // Clear existing topics

  // Placeholder for topic generation logic
  var topics = [];

  // Generating topics based on the selected subject
  switch (subject) {
    case "science":
      topics = ["Periodic table", "General Biology", "General Chemistry"];
      break;
    case "math":
      topics = ["Algebra", "Derivatives", "Basic Math"];
      break;
    case "history":
      topics = ["World War 1", "World War 2", "Ancient History"];
      break;
    case "philosophy":
      topics = ["Ethics", "Politics", "Metaphysics"];
      break;
    // Add more cases for other subjects if needed
  }

  // Displaying topics
  topics.forEach(function (topic) {
    topicsList.innerHTML +=
      '<button class="subject-button" onclick="selectTopic(this, \'' +
      topic +
      "')\">" +
      topic +
      "</button><br>";
  });
}

function selectTopic(button, topic) {
  var topicButtons = document.getElementsByClassName("subject-button");
  for (var i = 0; i < topicButtons.length; i++) {
    topicButtons[i].classList.remove("selected");
  }

  button.classList.add("selected");
  selectedTopic = topic;
  console.log(selectedTopic);
}

function showInputQuestion() {
  document.getElementById("topic-selection").style.display = "none";
  document.getElementById("input-question").style.display = "block";
}

function beginQuiz() {
  // Implement quiz start logic
  var quantity = document.getElementById("quantity").value;
  if (quantity <= 0 || isNaN(quantity)) {
    alert("Please enter a valid number of questions.");
    return;
  }

  document.getElementById("input-question").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";
  document.getElementById("selected-subject").innerText = selectedSubject;
  document.getElementById("selected-topic").innerText = selectedTopic;
  generateQuestions(selectedSubject, selectedTopic, quantity);
}

function generateQuestions(subject, topic, quantity) {
  var questionList = document.getElementById("question-list");
  questionList.innerHTML = ""; // Clear existing questions

  // Placeholder for AI question generation logic
  var questions = [];

  // Generating questions based on the selected subject and topic
  for (var i = 1; i <= quantity; i++) {
    questions.push(
      "Question " +
        i +
        ": This is a sample question for " +
        subject +
        " - " +
        topic
    );
  }

  // Displaying questions
  questions.forEach(function (question) {
    questionList.innerHTML += "<p>" + question + "</p>";
  });
}
