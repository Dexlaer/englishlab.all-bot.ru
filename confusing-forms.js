const STORAGE_KEY = "english-lab-confusing-forms-v1";
const COLLAPSE_STORAGE_KEY = "english-lab-confusing-forms-collapsed-v1";
const REQUIRED_STREAK = 10;

const levels = [
  {
    id: "they-family",
    title: "they / their / there / they’re",
    description: "Они, их, там и they are.",
    cards: [
      ["___ are happy.", "Они счастливы.", "they", ["they", "their", "there", "they’re"], "кто делает?", "they = они, люди выполняют действие."],
      ["___ house is big.", "Их дом большой.", "their", ["they", "their", "there", "they’re"], "чей + предмет", "their + house = их дом. После their обычно стоит предмет."],
      ["They are ___ now.", "Они сейчас там.", "there", ["they", "their", "there", "they’re"], "место", "there = там / туда / в том месте."],
      ["___ ready.", "Они готовы.", "they’re", ["they", "their", "there", "they’re"], "they are", "they’re = they are. Можно раскрыть: They are ready."],
      ["___ waiting over ___.", "Они ждут вон там.", "they / there", ["they / there", "their / there", "there / they’re", "they’re / their"], "кто + место", "They = они. There = там."],
      ["___ car is over ___.", "Их машина вон там.", "their / there", ["their / there", "there / their", "they’re / there", "they / their"], "чей + место", "their car = их машина. over there = вон там."],
      ["___ not at home. ___ at work.", "Они не дома. Они на работе.", "they’re", ["they", "their", "there", "they’re"], "they are", "they’re not = they are not."],
      ["I know ___ friends.", "Я знаю их друзей.", "their", ["they", "their", "there", "they’re"], "чей + предмет", "their friends = их друзья."],
      ["Are ___ any questions?", "Есть какие-нибудь вопросы?", "there", ["they", "their", "there", "they’re"], "существует", "there are = есть / существует."],
      ["___ going to call us.", "Они собираются позвонить нам.", "they’re", ["they", "their", "there", "they’re"], "they are", "they’re going to = they are going to."],
      ["I can see ___ from here.", "Я вижу их отсюда.", "them", ["they", "them", "their", "there"], "кого?", "them = их / им, объект действия."],
      ["The keys are ___.", "Ключи там.", "there", ["their", "there", "they’re", "theirs"], "место", "there показывает место."],
    ],
  },
  {
    id: "contractions",
    title: "your / you’re, its / it’s",
    description: "Чье слово против сокращения с be.",
    cards: [
      ["___ phone is ringing.", "Твой телефон звонит.", "your", ["your", "you’re", "yours", "you"], "чей + предмет", "your + phone = твой телефон."],
      ["___ late again.", "Ты снова опоздал.", "you’re", ["your", "you’re", "yours", "you"], "you are", "you’re = you are."],
      ["Is this book ___?", "Эта книга твоя?", "yours", ["your", "you’re", "yours", "you"], "чей без предмета", "yours стоит один, без предмета после него."],
      ["___ my best friend.", "Ты мой лучший друг.", "you’re", ["your", "you’re", "yours", "you"], "you are", "you’re = you are."],
      ["I like ___ idea.", "Мне нравится твоя идея.", "your", ["your", "you’re", "yours", "you"], "чей + предмет", "your idea = твоя идея."],
      ["The dog is wagging ___ tail.", "Собака виляет своим хвостом.", "its", ["its", "it’s", "it", "itself"], "чей + предмет", "its + tail = его/ее хвост у животного или предмета."],
      ["___ very cold today.", "Сегодня очень холодно.", "it’s", ["its", "it’s", "it", "itself"], "it is", "it’s = it is."],
      ["I like this app. ___ useful.", "Мне нравится это приложение. Оно полезное.", "it’s", ["its", "it’s", "its’", "it"], "it is", "it’s useful = it is useful."],
      ["The company changed ___ logo.", "Компания изменила свой логотип.", "its", ["its", "it’s", "it", "itself"], "чей + предмет", "its logo = ее логотип."],
      ["___ not easy.", "Это нелегко.", "it’s", ["its", "it’s", "it", "itself"], "it is", "it’s not easy = it is not easy."],
      ["This seat is ___.", "Это место твое.", "yours", ["your", "you’re", "yours", "you"], "чей без предмета", "yours заменяет your seat."],
      ["Check ___ email.", "Проверь свою почту.", "your", ["your", "you’re", "yours", "you"], "чей + предмет", "your email = твоя почта."],
    ],
  },
  {
    id: "possessives",
    title: "my / mine, her / hers, their / theirs",
    description: "Чей + предмет и чей без предмета.",
    cards: [
      ["This is ___ bag.", "Это моя сумка.", "my", ["my", "mine", "me", "I"], "чей + предмет", "my + bag. После my стоит предмет."],
      ["This bag is ___.", "Эта сумка моя.", "mine", ["my", "mine", "me", "I"], "чей без предмета", "mine стоит один и заменяет my bag."],
      ["I called ___.", "Я позвонил ей.", "her", ["she", "her", "hers", "his"], "кому?", "her = ее / ей как объект."],
      ["This is ___ phone.", "Это ее телефон.", "her", ["she", "her", "hers", "his"], "чей + предмет", "her + phone = ее телефон."],
      ["This phone is ___.", "Этот телефон ее.", "hers", ["she", "her", "hers", "his"], "чей без предмета", "hers стоит без предмета после него."],
      ["___ room is clean.", "Их комната чистая.", "their", ["they", "their", "theirs", "there"], "чей + предмет", "their + room = их комната."],
      ["This room is ___.", "Эта комната их.", "theirs", ["they", "their", "theirs", "there"], "чей без предмета", "theirs заменяет their room."],
      ["This is ___ project.", "Это наш проект.", "our", ["we", "us", "our", "ours"], "чей + предмет", "our + project = наш проект."],
      ["This project is ___.", "Этот проект наш.", "ours", ["we", "us", "our", "ours"], "чей без предмета", "ours стоит один."],
      ["She knows ___.", "Она знает нас.", "us", ["we", "us", "our", "ours"], "кого?", "us = нас / нам, объект."],
      ["Is this jacket ___?", "Эта куртка его?", "his", ["he", "him", "his", "her"], "чей без предмета", "his может быть и his jacket, и The jacket is his."],
      ["I saw ___ yesterday.", "Я видел его вчера.", "him", ["he", "him", "his", "her"], "кого?", "him = его / ему как объект."],
    ],
  },
  {
    id: "whos-whose",
    title: "who’s / whose + mixed",
    description: "Кто есть и чей, плюс смешанные похожие формы.",
    cards: [
      ["___ bag is this?", "Чья это сумка?", "whose", ["who’s", "whose", "who", "whom"], "чей?", "whose = чей."],
      ["___ calling me?", "Кто мне звонит?", "who’s", ["who’s", "whose", "who", "whom"], "who is", "who’s = who is."],
      ["Do you know ___ phone this is?", "Ты знаешь, чей это телефон?", "whose", ["who’s", "whose", "who", "whom"], "чей?", "whose phone = чей телефон."],
      ["___ your teacher?", "Кто твой преподаватель?", "who’s", ["who’s", "whose", "who", "whom"], "who is", "who’s your teacher = who is your teacher."],
      ["___ turn is it?", "Чья очередь?", "whose", ["who’s", "whose", "who", "whom"], "чей?", "whose turn = чья очередь."],
      ["___ ready to start?", "Кто готов начать?", "who’s", ["who’s", "whose", "who", "whom"], "who is", "who’s ready = who is ready."],
      ["___ car is over ___?", "Чья машина вон там?", "whose / there", ["whose / there", "who’s / their", "whose / they’re", "who / there"], "чей + место", "whose car = чья машина. there = там."],
      ["___ here with ___ friends.", "Они здесь со своими друзьями.", "they’re / their", ["they’re / their", "their / there", "there / they’re", "they / theirs"], "they are + чей", "they’re = they are, their friends = их друзья."],
      ["___ book is this? Is it ___?", "Чья это книга? Она твоя?", "whose / yours", ["whose / yours", "who’s / your", "whose / your", "who / yours"], "чей + чей без предмета", "whose book = чья книга. yours = твоя без предмета."],
      ["___ raining, but the dog is in ___ house.", "Идет дождь, но собака в своей будке.", "it’s / its", ["it’s / its", "its / it’s", "it / its", "it’s / it’s"], "it is + чей", "it’s = it is. its house = его/ее домик."],
      ["I think ___ right, but this idea is not ___.", "Я думаю, ты прав, но эта идея не твоя.", "you’re / yours", ["you’re / yours", "your / yours", "you’re / your", "your / you’re"], "you are + чей без предмета", "you’re right = you are right. yours стоит один."],
      ["___ are over ___ with ___ parents.", "Они вон там со своими родителями.", "they / there / their", ["they / there / their", "their / there / they’re", "they’re / their / there", "there / they / their"], "кто + место + чей", "they = они, there = там, their parents = их родители."],
    ],
  },
  {
    id: "this-these",
    title: "this / these / that / those",
    description: "Это, эти, то и те: рядом/далеко и один/много.",
    cards: [
      ["___ book is mine.", "Эта книга моя.", "this", ["this", "these", "that", "those"], "рядом + один", "this = это рядом и в единственном числе."],
      ["___ books are mine.", "Эти книги мои.", "these", ["this", "these", "that", "those"], "рядом + много", "these = эти рядом и во множественном числе."],
      ["___ car is expensive.", "Та машина дорогая.", "that", ["this", "these", "that", "those"], "далеко + один", "that = то/та/тот, один предмет дальше от нас."],
      ["___ cars are expensive.", "Те машины дорогие.", "those", ["this", "these", "that", "those"], "далеко + много", "those = те, несколько предметов дальше от нас."],
      ["I like ___ idea.", "Мне нравится эта идея.", "this", ["this", "these", "that", "those"], "рядом + один", "this idea = эта идея."],
      ["I like ___ ideas.", "Мне нравятся эти идеи.", "these", ["this", "these", "that", "those"], "рядом + много", "these ideas = эти идеи."],
      ["Do you see ___ man?", "Ты видишь того мужчину?", "that", ["this", "these", "that", "those"], "далеко + один", "that man = тот мужчина."],
      ["Do you see ___ people?", "Ты видишь тех людей?", "those", ["this", "these", "that", "those"], "далеко + много", "those people = те люди."],
      ["___ is my phone.", "Это мой телефон.", "this", ["this", "these", "that", "those"], "рядом + один", "this is = это есть / вот это."],
      ["___ are my keys.", "Это мои ключи.", "these", ["this", "these", "that", "those"], "рядом + много", "these are = это/эти, если предметов несколько."],
      ["___ was a good day.", "То был хороший день.", "that", ["this", "these", "that", "those"], "одна ситуация", "that может ссылаться на одну прошлую ситуацию."],
      ["___ were difficult questions.", "То были сложные вопросы.", "those", ["this", "these", "that", "those"], "много + дальше/раньше", "those используется для нескольких предметов или идей."],
    ],
  },
];

const el = {
  levels: document.getElementById("levels"),
  modeLabel: document.getElementById("modeLabel"),
  levelTitle: document.getElementById("levelTitle"),
  levelDescription: document.getElementById("levelDescription"),
  streak: document.getElementById("streak"),
  errorCount: document.getElementById("errorCount"),
  roleChip: document.getElementById("roleChip"),
  hintChip: document.getElementById("hintChip"),
  promptText: document.getElementById("promptText"),
  translationText: document.getElementById("translationText"),
  choices: document.getElementById("choices"),
  feedback: document.getElementById("feedback"),
  feedbackStatus: document.getElementById("feedbackStatus"),
  correctLine: document.getElementById("correctLine"),
  explanationText: document.getElementById("explanationText"),
  nextButton: document.getElementById("nextButton"),
  reviewErrorsButton: document.getElementById("reviewErrorsButton"),
  resetButton: document.getElementById("resetButton"),
};

const defaultProgress = () => ({
  activeLevelId: "they-family",
  unlockedLevelIds: ["they-family"],
  completedLevelIds: [],
  streaks: {},
  errorIds: [],
});

let progress = loadProgress();
let activeCard = null;
let queue = [];
let reviewMode = false;
let answered = false;
let collapsedSections = loadCollapsedSections();

const allCards = levels.flatMap((level) =>
  level.cards.map((card, index) => makeCard(card, level.id, index))
);

function makeCard(card, levelId, index) {
  const [prompt, translation, answer, options, role, explanation] = card;
  return {
    id: `${levelId}-${index}`,
    levelId,
    prompt,
    translation,
    answer,
    options,
    role,
    explanation,
  };
}

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return defaultProgress();
  }

  try {
    return { ...defaultProgress(), ...JSON.parse(saved) };
  } catch (error) {
    return defaultProgress();
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function loadCollapsedSections() {
  const saved = localStorage.getItem(COLLAPSE_STORAGE_KEY);
  if (!saved) {
    return {};
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    return {};
  }
}

function saveCollapsedSections() {
  localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(collapsedSections));
}

function setupCollapsibleSections() {
  document.querySelectorAll("[data-collapse-id]").forEach((section) => {
    const sectionId = section.dataset.collapseId;
    const button = section.querySelector(".collapse-toggle");

    if (!button) {
      return;
    }

    const applyState = () => {
      const isCollapsed = Boolean(collapsedSections[sectionId]);
      section.classList.toggle("is-collapsed", isCollapsed);
      button.textContent = isCollapsed ? "Развернуть" : "Свернуть";
      button.setAttribute("aria-expanded", String(!isCollapsed));
    };

    button.addEventListener("click", () => {
      collapsedSections[sectionId] = !collapsedSections[sectionId];
      saveCollapsedSections();
      applyState();
    });

    applyState();
  });
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function getActiveLevel() {
  return levels.find((level) => level.id === progress.activeLevelId) || levels[0];
}

function getCardsForMode() {
  if (reviewMode) {
    const errorSet = new Set(progress.errorIds);
    return allCards.filter((card) => errorSet.has(card.id));
  }

  const level = getActiveLevel();
  return level.cards.map((card, index) => makeCard(card, level.id, index));
}

function refillQueue() {
  queue = shuffle(getCardsForMode());
}

function getNextCard() {
  if (queue.length === 0) {
    refillQueue();
  }

  if (queue.length === 0) {
    reviewMode = false;
    refillQueue();
  }

  return queue.shift();
}

function renderLevels() {
  el.levels.innerHTML = levels
    .map((level) => {
      const active = level.id === progress.activeLevelId && !reviewMode;
      const unlocked = progress.unlockedLevelIds.includes(level.id);
      const completed = progress.completedLevelIds.includes(level.id);
      const streak = progress.streaks[level.id] || 0;

      return `
        <button class="level-card ${active ? "active" : ""} ${unlocked ? "" : "locked"}" data-level-id="${level.id}" type="button" ${unlocked ? "" : "disabled"}>
          <strong>${completed ? "✓ " : ""}${level.title}</strong>
          <span>${level.description}</span>
          <div class="level-meta">Серия ${streak}/${REQUIRED_STREAK}</div>
        </button>
      `;
    })
    .join("");

  Array.from(el.levels.querySelectorAll(".level-card")).forEach((button) => {
    button.addEventListener("click", () => {
      progress.activeLevelId = button.dataset.levelId;
      reviewMode = false;
      queue = [];
      saveProgress();
      startCard();
    });
  });
}

function renderCard() {
  const level = getActiveLevel();
  el.modeLabel.textContent = reviewMode ? "повтор ошибок" : "practice";
  el.levelTitle.textContent = reviewMode ? "Повтор ошибок" : level.title;
  el.levelDescription.textContent = reviewMode
    ? "Показываю только карточки, где раньше была ошибка."
    : level.description;
  el.streak.textContent = String(progress.streaks[level.id] || 0);
  el.errorCount.textContent = String(progress.errorIds.length);
  el.roleChip.textContent = activeCard.role;
  el.hintChip.textContent = activeCard.answer.includes("/") ? "несколько пропусков" : "один пропуск";
  el.promptText.textContent = activeCard.prompt;
  el.translationText.textContent = activeCard.translation;
  el.feedback.hidden = true;
  el.feedback.className = "feedback";
  el.nextButton.disabled = false;
  answered = false;

  el.choices.innerHTML = "";
  shuffle(activeCard.options).forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => choose(option, button));
    el.choices.appendChild(button);
  });
}

function startCard() {
  activeCard = getNextCard();
  renderLevels();
  renderCard();
}

function unlockNextLevel(levelId) {
  const currentIndex = levels.findIndex((level) => level.id === levelId);
  const nextLevel = levels[currentIndex + 1];
  if (nextLevel && !progress.unlockedLevelIds.includes(nextLevel.id)) {
    progress.unlockedLevelIds.push(nextLevel.id);
  }
}

function choose(option, selectedButton) {
  if (answered) {
    return;
  }

  answered = true;
  const isCorrect = option === activeCard.answer;
  const levelId = activeCard.levelId;

  Array.from(el.choices.children).forEach((button) => {
    button.disabled = true;
    if (button.textContent === activeCard.answer) {
      button.classList.add("correct");
    }
  });

  if (isCorrect) {
    progress.streaks[levelId] = (progress.streaks[levelId] || 0) + 1;
    progress.errorIds = progress.errorIds.filter((id) => id !== activeCard.id);
    selectedButton.classList.add("correct");
    el.feedback.classList.add("success");
    el.feedbackStatus.textContent = "Верно";

    if (progress.streaks[levelId] >= REQUIRED_STREAK) {
      if (!progress.completedLevelIds.includes(levelId)) {
        progress.completedLevelIds.push(levelId);
      }
      unlockNextLevel(levelId);
    }
  } else {
    progress.streaks[levelId] = 0;
    if (!progress.errorIds.includes(activeCard.id)) {
      progress.errorIds.push(activeCard.id);
    }
    selectedButton.classList.add("wrong");
    el.feedback.classList.add("error");
    el.feedbackStatus.textContent = "Почти";
    queue.splice(Math.min(2, queue.length), 0, activeCard);
  }

  el.correctLine.textContent = `Правильный вариант: ${activeCard.answer}`;
  el.explanationText.textContent = activeCard.explanation;
  el.feedback.hidden = false;
  saveProgress();
  renderLevels();
  el.streak.textContent = String(progress.streaks[levelId] || 0);
  el.errorCount.textContent = String(progress.errorIds.length);
}

el.nextButton.addEventListener("click", startCard);

el.reviewErrorsButton.addEventListener("click", () => {
  if (progress.errorIds.length === 0) {
    return;
  }
  reviewMode = true;
  queue = [];
  startCard();
});

el.resetButton.addEventListener("click", () => {
  progress = defaultProgress();
  reviewMode = false;
  queue = [];
  saveProgress();
  startCard();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startCard();
  }
});

setupCollapsibleSections();
startCard();
