const scenarioText = document.getElementById("scenarioText");
const resultText = document.getElementById("resultText");
const scenarioBtn = document.getElementById("scenarioBtn");
const choicesDiv = document.getElementById("choices");
const progressText = document.getElementById("progressText");

const story = [
  {
    scenario: "You forgot your homework, coach benched you, and your crush saw you trip.",
    choices: [
      { text: "Tell the teacher the truth", effect: 5 },
      { text: "Ask for one more day", effect: 15 },
      { text: "Say your bag deleted it", effect: 30 }
    ]
  },
  {
    scenario: "You called the teacher 'mom'.",
    choices: [
      { text: "Laugh and move on", effect: 0 },
      { text: "Say sorry quietly", effect: 5 },
      { text: "Deny it like everyone is deaf", effect: 25 }
    ]
  },
  {
    scenario: "You confidently answered in class and got everything wrong.",
    choices: [
      { text: "Say 'my bad' and sit down", effect: 5 },
      { text: "Ask to try again", effect: 15 },
      { text: "Argue with the teacher", effect: 35 }
    ]
  },
  {
    scenario: "Coach said 'good hustle' after you played 14 seconds.",
    choices: [
      { text: "Take the compliment", effect: 5 },
      { text: "Say you were just warming up", effect: 15 },
      { text: "Act like you carried the team", effect: 25 }
    ]
  },
  {
    scenario: "You posted a story and deleted it after 11 views.",
    choices: [
      { text: "Leave it deleted", effect: 5 },
      { text: "Pretend it was for close friends", effect: 15 },
      { text: "Post 'ignore that' after", effect: 20 }
    ]
  },
  {
    scenario: "You slipped in public then pretended to check your shoe.",
    choices: [
      { text: "Keep walking normally", effect: 10 },
      { text: "Laugh at yourself", effect: 5 },
      { text: "Blame the floor out loud", effect: 25 }
    ]
  },
  {
    scenario: "You waved at someone who wasn't waving at you.",
    choices: [
      { text: "Turn it into fixing your hair", effect: 10 },
      { text: "Wave at someone behind them", effect: 20 },
      { text: "Freeze and stare at them", effect: 30 }
    ]
  },
  {
    scenario: "Your alarm didn't ring and first period started 40 mins ago.",
    choices: [
      { text: "Get ready fast and go", effect: 10 },
      { text: "Text that you are late", effect: 5 },
      { text: "Go back to sleep", effect: 35 }
    ]
  },
  {
    scenario: "You got crossed in basketball and people started yelling.",
    choices: [
      { text: "Play defense next possession", effect: 10 },
      { text: "Laugh and clap once", effect: 15 },
      { text: "Say your shoes have no grip", effect: 30 }
    ]
  },
  {
    scenario: "Your friend said 'be honest' and then got mad.",
    choices: [
      { text: "Apologize a little", effect: -5 },
      { text: "Explain what you meant", effect: 10 },
      { text: "Say 'you asked me though'", effect: 25 }
    ]
  }
];

let cooked = 0;
let currentScene = 0;

function loadScene() {
  if (currentScene >= story.length) {
    showEnding();
    return;
  }

  const scene = story[currentScene];

  progressText.textContent = `Scenario ${currentScene + 1} of ${story.length}`;
  scenarioText.textContent = scene.scenario;
  choicesDiv.innerHTML = "";

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;

    button.addEventListener("click", () => chooseOption(choice.effect));

    choicesDiv.appendChild(button);
  });
}

function chooseOption(effect) {
  cooked += effect;
  currentScene += 1;

  resultText.textContent =
    `Current cooked level: ${Math.max(0, Math.min(cooked, 100))}%`;

  loadScene();
}

function getEnding() {
  if (cooked < 150) {
    return "BARELY COOKED You somehow survived.";
  }

  if (cooked < 300) {
    return "MEDIUM COOKED Reputation slightly damaged.";
  }

  return "ABSOLUTELY FINISHED Seek prayer and snacks.";
}

function getGrade() {
  if (cooked < 50) {
    return "A";
  }

  if (cooked < 100) {
    return "B";
  }

  if (cooked < 200) {
    return "C";
  }

  if (cooked < 300) {
    return "D";
  }

  return "F";
}

function showEnding() {
  scenarioText.textContent = "Game Over";
  choicesDiv.innerHTML = "";
  resultText.innerHTML = `
  <strong>${Math.max(0, Math.min(cooked, 100))}% COOKED</strong><br>
  Grade: ${getGrade()}<br>
  ${getEnding()}
`;

  scenarioBtn.textContent = "Play Again";
  scenarioBtn.style.display = "block";
}

function startGame() {
  cooked = 0;
  currentScene = 0;

  scenarioBtn.style.display = "none";
  resultText.textContent = "Choose wisely...";
  loadScene();
}

scenarioBtn.addEventListener("click", startGame);
