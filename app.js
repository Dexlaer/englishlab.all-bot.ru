const STORAGE_KEY = "ihnih-progress-v2";
const REQUIRED_STREAK = 10;

const levels = [
  {
    id: 0,
    title: "Уровень 1",
    emoji: "🧍",
    focus: "Кто делает действие?",
    description: "Тренируем he, she, they как главных героев предложения.",
    words: ["he", "she", "they"],
    medal: "🥉",
    questions: [
      {
        visual: "🧒",
        text: "The boy is at school. ___ is reading.",
        hint: "Один мальчик сам делает действие.",
        answer: "he",
        options: ["he", "him", "his", "they"],
      },
      {
        visual: "👧",
        text: "Anna is in the kitchen. ___ is cooking.",
        hint: "Одна девочка или женщина делает действие.",
        answer: "she",
        options: ["she", "her", "their", "them"],
      },
      {
        visual: "🧑‍🤝‍🧑",
        text: "My friends are outside. ___ are laughing.",
        hint: "Несколько людей делают действие.",
        answer: "they",
        options: ["they", "them", "their", "he"],
      },
      {
        visual: "👨",
        text: "Tom is tired. ___ wants to sleep.",
        hint: "Смотрим, кто сам хочет спать.",
        answer: "he",
        options: ["he", "his", "him", "she"],
      },
      {
        visual: "👩",
        text: "My sister is singing. ___ is happy.",
        hint: "Главный герой действия здесь одна девушка.",
        answer: "she",
        options: ["she", "her", "they", "their"],
      },
      {
        visual: "👨‍👩‍👧",
        text: "The family is ready. ___ are leaving now.",
        hint: "Несколько людей вместе.",
        answer: "they",
        options: ["them", "they", "her", "his"],
      },
      {
        visual: "👦",
        text: "Ben is in the garden. ___ is watering the flowers.",
        hint: "Один мальчик делает действие.",
        answer: "he",
        options: ["he", "him", "his", "them"],
      },
      {
        visual: "👩",
        text: "My aunt is at work. ___ is talking to a client.",
        hint: "Одна женщина сама выполняет действие.",
        answer: "she",
        options: ["she", "her", "their", "they"],
      },
      {
        visual: "👬",
        text: "The boys are on the bus. ___ are going home.",
        hint: "Несколько людей делают действие вместе.",
        answer: "they",
        options: ["them", "they", "his", "he"],
      },
      {
        visual: "👨",
        text: "My brother is in his room. ___ is drawing.",
        hint: "Кто сейчас рисует?",
        answer: "he",
        options: ["he", "him", "their", "his"],
      },
      {
        visual: "👧",
        text: "Kate is on the sofa. ___ is watching TV.",
        hint: "Одна девочка делает действие.",
        answer: "she",
        options: ["her", "she", "they", "them"],
      },
      {
        visual: "👩‍👩‍👧",
        text: "My cousins are in the park. ___ are running.",
        hint: "Речь о нескольких людях.",
        answer: "they",
        options: ["their", "they", "her", "him"],
      },
      {
        visual: "🧑",
        text: "The doctor is here. ___ is smiling.",
        hint: "Один человек сам делает действие.",
        answer: "he",
        options: ["he", "his", "him", "they"],
      },
      {
        visual: "👩‍🍳",
        text: "The cook is busy. ___ is making soup.",
        hint: "Одна женщина готовит.",
        answer: "she",
        options: ["she", "her", "them", "their"],
      },
      {
        visual: "🧑‍🤝‍🧑",
        text: "The students are early. ___ are waiting outside.",
        hint: "Несколько людей в роли подлежащего.",
        answer: "they",
        options: ["they", "them", "their", "he"],
      },
      {
        visual: "👨",
        text: "Dad is in the garage. ___ is fixing the bike.",
        hint: "Кто чинит велосипед?",
        answer: "he",
        options: ["him", "he", "his", "them"],
      },
      {
        visual: "👩",
        text: "Emma is at the piano. ___ is playing a song.",
        hint: "Одна девушка делает действие.",
        answer: "she",
        options: ["she", "their", "her", "they"],
      },
      {
        visual: "👨‍👨‍👦",
        text: "The team is ready. ___ are starting the game.",
        hint: "Несколько людей начинают действие.",
        answer: "they",
        options: ["they", "them", "his", "her"],
      },
    ],
  },
  {
    id: 1,
    title: "Уровень 2",
    emoji: "🎯",
    focus: "На кого направлено действие?",
    description: "Тренируем him, her, them как объект действия.",
    words: ["him", "her", "them"],
    medal: "🥈",
    questions: [
      {
        visual: "🧒",
        text: "I know the boy. I know ___.",
        hint: "Действие направлено на мальчика.",
        answer: "him",
        options: ["he", "him", "his", "they"],
      },
      {
        visual: "👧",
        text: "Can you help Anna? Can you help ___?",
        hint: "Кого нужно помочь?",
        answer: "her",
        options: ["she", "her", "their", "his"],
      },
      {
        visual: "🧑‍🤝‍🧑",
        text: "I can see my friends. I can see ___.",
        hint: "Кого я вижу?",
        answer: "them",
        options: ["they", "their", "them", "he"],
      },
      {
        visual: "👨",
        text: "We are waiting for Alex. We are waiting for ___.",
        hint: "Объект действия: один мужчина.",
        answer: "him",
        options: ["him", "he", "his", "them"],
      },
      {
        visual: "👩",
        text: "I am calling my mother. I am calling ___.",
        hint: "На кого направлен звонок?",
        answer: "her",
        options: ["she", "their", "her", "they"],
      },
      {
        visual: "👨‍👩‍👧‍👦",
        text: "We invited the neighbors. We invited ___.",
        hint: "Речь о нескольких людях.",
        answer: "them",
        options: ["them", "their", "they", "him"],
      },
      {
        visual: "👦",
        text: "I can hear the boy. I can hear ___.",
        hint: "На кого направлено действие?",
        answer: "him",
        options: ["he", "his", "him", "they"],
      },
      {
        visual: "👩",
        text: "Please ask Anna. Please ask ___.",
        hint: "Кого нужно спросить?",
        answer: "her",
        options: ["she", "her", "their", "they"],
      },
      {
        visual: "👨‍👩‍👧",
        text: "Do you know my cousins? Do you know ___?",
        hint: "Речь о нескольких людях как об объекте.",
        answer: "them",
        options: ["them", "their", "they", "him"],
      },
      {
        visual: "👨",
        text: "I can help my dad. I can help ___.",
        hint: "Один мужчина как объект действия.",
        answer: "him",
        options: ["him", "he", "his", "them"],
      },
      {
        visual: "👧",
        text: "We meet Lisa every day. We meet ___.",
        hint: "Кого мы встречаем?",
        answer: "her",
        options: ["she", "them", "her", "their"],
      },
      {
        visual: "🧑‍🤝‍🧑",
        text: "I visit my grandparents on Sunday. I visit ___.",
        hint: "Несколько людей как объект.",
        answer: "them",
        options: ["they", "their", "them", "him"],
      },
      {
        visual: "👨",
        text: "Can you see Mark? Can you see ___?",
        hint: "Кого можно увидеть?",
        answer: "him",
        options: ["him", "his", "he", "their"],
      },
      {
        visual: "👩",
        text: "I like my teacher. I like ___.",
        hint: "Действие направлено на одну женщину.",
        answer: "her",
        options: ["her", "she", "their", "they"],
      },
      {
        visual: "👨‍👩‍👧‍👦",
        text: "We call our friends in the evening. We call ___.",
        hint: "Объект действия: несколько друзей.",
        answer: "them",
        options: ["them", "they", "their", "her"],
      },
      {
        visual: "🧒",
        text: "The girl is waiting for Sam. She is waiting for ___.",
        hint: "На кого направлено ожидание?",
        answer: "him",
        options: ["his", "him", "he", "them"],
      },
      {
        visual: "👧",
        text: "The boy knows Julia. He knows ___.",
        hint: "Кого он знает?",
        answer: "her",
        options: ["her", "she", "their", "them"],
      },
      {
        visual: "🧑‍🤝‍🧑",
        text: "I can join the players. I can join ___.",
        hint: "Речь о нескольких людях как о дополнении.",
        answer: "them",
        options: ["their", "them", "they", "him"],
      },
    ],
  },
  {
    id: 2,
    title: "Уровень 3",
    emoji: "🏠",
    focus: "Кому принадлежит предмет?",
    description: "Тренируем his, her, their как слова принадлежности.",
    words: ["his", "her", "their"],
    medal: "🥇",
    questions: [
      {
        visual: "🧒 + 🎒",
        text: "This is the boy's backpack. It is ___ backpack.",
        hint: "Чей рюкзак?",
        answer: "his",
        options: ["he", "him", "his", "they"],
      },
      {
        visual: "👧 + 📚",
        text: "These books belong to Anna. They are ___ books.",
        hint: "Чьи это книги?",
        answer: "her",
        options: ["she", "her", "them", "their"],
      },
      {
        visual: "🧑‍🤝‍🧑 + 🚲",
        text: "The children have bikes. These are ___ bikes.",
        hint: "Принадлежность нескольким людям.",
        answer: "their",
        options: ["their", "they", "them", "his"],
      },
      {
        visual: "👨 + ☕",
        text: "The cup belongs to dad. It is ___ cup.",
        hint: "Один мужчина, принадлежность.",
        answer: "his",
        options: ["him", "his", "he", "her"],
      },
      {
        visual: "👩 + 👜",
        text: "The bag is Maria's. It is ___ bag.",
        hint: "Одна женщина владеет сумкой.",
        answer: "her",
        options: ["she", "their", "her", "them"],
      },
      {
        visual: "👨‍👩‍👧 + 🌳",
        text: "The family loves the yard. It is ___ yard.",
        hint: "Предмет принадлежит нескольким людям.",
        answer: "their",
        options: ["them", "they", "their", "his"],
      },
      {
        visual: "👦 + 🧥",
        text: "This jacket belongs to Leo. It is ___ jacket.",
        hint: "Чья это куртка?",
        answer: "his",
        options: ["he", "him", "his", "their"],
      },
      {
        visual: "👩 + 🪑",
        text: "The chair is Anna's. It is ___ chair.",
        hint: "Одна женщина владеет предметом.",
        answer: "her",
        options: ["she", "her", "them", "they"],
      },
      {
        visual: "👨‍👩‍👧‍👦 + 🚗",
        text: "The car belongs to my parents. It is ___ car.",
        hint: "Принадлежность нескольким людям.",
        answer: "their",
        options: ["their", "they", "them", "his"],
      },
      {
        visual: "👨 + 📱",
        text: "This phone is my brother's. It is ___ phone.",
        hint: "Чей телефон?",
        answer: "his",
        options: ["him", "his", "he", "their"],
      },
      {
        visual: "👧 + 🎨",
        text: "The painting is Eva's. It is ___ painting.",
        hint: "Одна девочка владеет предметом.",
        answer: "her",
        options: ["she", "their", "her", "them"],
      },
      {
        visual: "🧑‍🤝‍🧑 + 🏡",
        text: "The friends love this house. It is ___ house.",
        hint: "Дом принадлежит нескольким людям.",
        answer: "their",
        options: ["them", "their", "they", "his"],
      },
      {
        visual: "👨 + 🧢",
        text: "That cap belongs to the boy. It is ___ cap.",
        hint: "Принадлежность одного мальчика.",
        answer: "his",
        options: ["his", "he", "him", "their"],
      },
      {
        visual: "👩 + 🧣",
        text: "This scarf is my grandmother's. It is ___ scarf.",
        hint: "Чья это вещь?",
        answer: "her",
        options: ["her", "she", "them", "their"],
      },
      {
        visual: "👨‍👩‍👧 + 📦",
        text: "The boxes belong to the family. They are ___ boxes.",
        hint: "Несколько людей владеют вещами.",
        answer: "their",
        options: ["their", "them", "they", "his"],
      },
      {
        visual: "👨 + 🏀",
        text: "The basketball is Nick's. It is ___ basketball.",
        hint: "Один мужчина или мальчик как владелец.",
        answer: "his",
        options: ["him", "his", "he", "her"],
      },
      {
        visual: "👩 + 💡",
        text: "The idea is Maria's. It is ___ idea.",
        hint: "Одна женщина как владелец.",
        answer: "her",
        options: ["their", "she", "her", "them"],
      },
      {
        visual: "🧑‍🤝‍🧑 + 🌍",
        text: "The students made a project. It is ___ project.",
        hint: "Проект принадлежит нескольким людям.",
        answer: "their",
        options: ["they", "their", "them", "his"],
      },
    ],
  },
];

const levelsGridEl = document.getElementById("levelsGrid");
const trainerTitleEl = document.getElementById("trainerTitle");
const trainerDescriptionEl = document.getElementById("trainerDescription");
const levelNameEl = document.getElementById("levelName");
const streakEl = document.getElementById("streak");
const medalsCountEl = document.getElementById("medalsCount");
const confettiLayerEl = document.getElementById("confettiLayer");
const promptVisualEl = document.getElementById("promptVisual");
const promptTextEl = document.getElementById("promptText");
const promptHintEl = document.getElementById("promptHint");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const nextButtonFill = document.getElementById("nextButtonFill");
const nextButtonLabel = document.getElementById("nextButtonLabel");
const repeatLevelButton = document.getElementById("repeatLevelButton");
const resetAllButton = document.getElementById("resetAllButton");

const defaultProgress = () => ({
  activeLevel: 0,
  completed: [],
  streaks: {},
});

let progress = loadProgress();
let currentQuestion = null;
let locked = false;
let statusMessage = "Нажми на вариант ниже.";
let questionQueuesByLevel = {};
let autoNextTimeout = null;
let autoNextAction = null;

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return defaultProgress();
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      activeLevel: typeof parsed.activeLevel === "number" ? parsed.activeLevel : 0,
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      streaks: parsed.streaks && typeof parsed.streaks === "object" ? parsed.streaks : {},
    };
  } catch (error) {
    return defaultProgress();
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function clearAutoNext() {
  if (autoNextTimeout) {
    clearTimeout(autoNextTimeout);
    autoNextTimeout = null;
  }

  autoNextAction = null;
  nextButton.classList.remove("auto-progress");
  nextButtonLabel.textContent = "Следующий вопрос";
  nextButtonFill.style.width = "0";
}

function launchConfetti() {
  if (!confettiLayerEl) {
    return;
  }

  confettiLayerEl.innerHTML = "";

  const palette = ["#ea6b2d", "#1d8f7a", "#ffcf5a", "#f39f76", "#7fc8b8", "#ffffff"];

  for (let index = 0; index < 28; index += 1) {
    const piece = document.createElement("span");
    const driftX = `${Math.random() * 320 - 160}px`;
    const driftY = `${220 + Math.random() * 120}px`;
    const spin = `${Math.random() * 540 - 270}deg`;

    piece.className = `confetti ${Math.random() > 0.65 ? "round" : ""}`;
    piece.style.left = `${18 + Math.random() * 64}%`;
    piece.style.background = palette[index % palette.length];
    piece.style.animationDelay = `${Math.random() * 180}ms`;
    piece.style.setProperty("--drift-x", driftX);
    piece.style.setProperty("--drift-y", driftY);
    piece.style.setProperty("--spin", spin);
    confettiLayerEl.appendChild(piece);
  }

  window.setTimeout(() => {
    confettiLayerEl.innerHTML = "";
  }, 1600);
}

function isLevelUnlocked(levelId) {
  return levelId === 0 || progress.completed.includes(levelId - 1);
}

function getLevelStreak(levelId) {
  return progress.streaks[levelId] || 0;
}

function setLevelStreak(levelId, value) {
  progress.streaks[levelId] = value;
}

function countMedals() {
  return progress.completed.length;
}

function renderLevels() {
  levelsGridEl.innerHTML = levels
    .map((level) => {
      const unlocked = isLevelUnlocked(level.id);
      const active = progress.activeLevel === level.id;
      const completed = progress.completed.includes(level.id);
      const streak = getLevelStreak(level.id);

      return `
        <button
          class="level-card ${unlocked ? "" : "locked"} ${active ? "active" : ""}"
          data-level-id="${level.id}"
          type="button"
          ${unlocked ? "" : "disabled"}
        >
          <div class="level-head">
            <div>
              <h3>${level.title}</h3>
              <p>${level.focus}</p>
            </div>
            <div class="medal-slot ${completed ? "earned" : ""}">
              ${completed ? level.medal : "•"}
            </div>
          </div>
          <p>${level.description}</p>
          <div class="word-strip">
            ${level.words.map((word) => `<span class="word-chip">${word}</span>`).join("")}
          </div>
          <div class="level-foot">
            <span class="streak-mini">Серия: ${streak}/${REQUIRED_STREAK}</span>
            <span>${level.emoji}</span>
          </div>
        </button>
      `;
    })
    .join("");

  Array.from(levelsGridEl.querySelectorAll(".level-card")).forEach((card) => {
    card.addEventListener("click", () => {
      const levelId = Number(card.dataset.levelId);
      if (!isLevelUnlocked(levelId)) {
        return;
      }

      progress.activeLevel = levelId;
      currentQuestion = getRandomQuestion(levelId);
      saveProgress();
      renderLevels();
      renderTrainer();
      window.location.hash = "trainer";
    });
  });
}

function shuffle(array) {
  const copy = [...array];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function getRandomQuestion(levelId) {
  const questions = levels[levelId].questions;
  const existingQueue = questionQueuesByLevel[levelId];

  if (!existingQueue || existingQueue.length === 0) {
    questionQueuesByLevel[levelId] = shuffle(
      questions.map((_, questionIndex) => questionIndex)
    );
  }

  if (questions.length > 1) {
    const queue = questionQueuesByLevel[levelId];
    const lastQuestionText = currentQuestion && progress.activeLevel === levelId
      ? currentQuestion.text
      : null;

    if (queue.length === questions.length && questions[queue[0]].text === lastQuestionText) {
      queue.push(queue.shift());
    }
  }

  const nextIndex = questionQueuesByLevel[levelId].shift();
  return questions[nextIndex];
}

function renderTrainer() {
  const activeLevel = levels[progress.activeLevel];
  const streak = getLevelStreak(activeLevel.id);

  clearAutoNext();

  if (!currentQuestion) {
    currentQuestion = getRandomQuestion(activeLevel.id);
  }

  trainerTitleEl.textContent = activeLevel.title;
  trainerDescriptionEl.textContent =
    activeLevel.description + ` Чтобы пройти дальше, нужно ${REQUIRED_STREAK} верных подряд.`;
  levelNameEl.textContent = `${activeLevel.id + 1}`;
  streakEl.textContent = String(streak);
  medalsCountEl.textContent = String(countMedals());
  promptVisualEl.textContent = currentQuestion.visual;
  promptTextEl.textContent = currentQuestion.text;
  promptHintEl.textContent = currentQuestion.hint;
  feedbackEl.textContent = statusMessage;
  choicesEl.innerHTML = "";
  locked = false;

  const shuffledOptions = shuffle(currentQuestion.options);

  shuffledOptions.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => chooseOption(option, button));
    choicesEl.appendChild(button);
  });
}

function lockChoices() {
  Array.from(choicesEl.children).forEach((choice) => {
    choice.disabled = true;
    if (choice.textContent === currentQuestion.answer) {
      choice.classList.add("correct");
    }
  });
}

function completeLevel(levelId) {
  clearAutoNext();

  if (!progress.completed.includes(levelId)) {
    progress.completed.push(levelId);
  }

  const nextLevelId = levelId + 1;
  if (nextLevelId < levels.length) {
    progress.activeLevel = nextLevelId;
    currentQuestion = getRandomQuestion(nextLevelId);
    statusMessage =
      `Уровень пройден! Медаль ${levels[levelId].medal} получена. Открылся ${levels[nextLevelId].title}.`;
    window.setTimeout(() => {
      launchConfetti();
    }, 80);
  } else {
    progress.activeLevel = levelId;
    currentQuestion = getRandomQuestion(levelId);
    statusMessage =
      `Все уровни пройдены. Медаль ${levels[levelId].medal} получена. Можно повторять любой блок.`;
  }

  saveProgress();
  renderLevels();
  renderTrainer();
}

function chooseOption(option, button) {
  if (locked) {
    return;
  }

  locked = true;
  clearAutoNext();
  lockChoices();
  statusMessage = "Нажми на вариант ниже.";

  const levelId = progress.activeLevel;
  const currentStreak = getLevelStreak(levelId);
  const isCorrect = option === currentQuestion.answer;

  if (isCorrect) {
    const nextStreak = currentStreak + 1;
    setLevelStreak(levelId, nextStreak);
    button.classList.add("correct");

    if (nextStreak >= REQUIRED_STREAK) {
      statusMessage = `Верно. ${REQUIRED_STREAK} из ${REQUIRED_STREAK} подряд. Сейчас получишь медаль.`;
      feedbackEl.textContent = statusMessage;
      startAutoNext(() => completeLevel(levelId), "Медаль через 1 сек");
      return;
    }

    saveProgress();
    streakEl.textContent = String(nextStreak);
    statusMessage = `Верно. Уже ${nextStreak} из ${REQUIRED_STREAK} подряд.`;
    feedbackEl.textContent = statusMessage;
    startAutoNext(nextQuestion, "Следующий вопрос через 1 сек");
    return;
  }

  setLevelStreak(levelId, 0);
  button.classList.add("wrong");
  saveProgress();
  streakEl.textContent = "0";
  statusMessage =
    `Неверно. Правильный ответ: ${currentQuestion.answer}. Серия сброшена, продолжаем уровень.`;
  feedbackEl.textContent = statusMessage;
  renderLevels();
}

function startAutoNext(action, label) {
  clearAutoNext();
  autoNextAction = action;
  nextButton.classList.add("auto-progress");
  nextButtonLabel.textContent = label;
  autoNextTimeout = window.setTimeout(() => {
    autoNextTimeout = null;
    const pendingAction = autoNextAction;
    autoNextAction = null;
    if (pendingAction) {
      pendingAction();
    }
  }, 1000);
}

function nextQuestion() {
  clearAutoNext();
  currentQuestion = getRandomQuestion(progress.activeLevel);
  statusMessage = "Нажми на вариант ниже.";
  renderTrainer();
}

function restartCurrentLevel() {
  clearAutoNext();
  setLevelStreak(progress.activeLevel, 0);
  currentQuestion = getRandomQuestion(progress.activeLevel);
  statusMessage = "Серия уровня сброшена. Начинаем заново.";
  saveProgress();
  renderLevels();
  renderTrainer();
}

function resetAllProgress() {
  clearAutoNext();
  progress = defaultProgress();
  currentQuestion = getRandomQuestion(0);
  statusMessage = "Весь прогресс очищен. Можно начинать сначала.";
  saveProgress();
  renderLevels();
  renderTrainer();
}

nextButton.addEventListener("click", () => {
  if (autoNextAction) {
    const pendingAction = autoNextAction;
    clearAutoNext();
    pendingAction();
    return;
  }

  nextQuestion();
});
repeatLevelButton.addEventListener("click", restartCurrentLevel);
resetAllButton.addEventListener("click", resetAllProgress);

currentQuestion = getRandomQuestion(progress.activeLevel);
renderLevels();
renderTrainer();
