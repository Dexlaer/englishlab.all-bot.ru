const STORAGE_KEY = "english-lab-phrase-switch-v1";
const REQUIRED_STREAK = 10;

const levels = [
  {
    id: "be-do",
    title: "Be or Do",
    description: "Отличаем состояние/место от обычного действия.",
    pattern: "be vs do",
    cards: [
      ["Она дома.", "She is at home.", "S + is + place", "Нет действия: нужен to be.", "to_be"],
      ["Она работает дома.", "She works at home.", "S + V-s + place", "Есть обычное действие: work, не is.", "present_simple"],
      ["Он не врач.", "He is not a doctor.", "S + is not + noun", "Профессия идет через to be.", "to_be"],
      ["Он не работает врачом.", "He doesn't work as a doctor.", "S + doesn't + V", "С he/she/it в отрицании нужен doesn't, глагол без -s.", "does_negative"],
      ["Они готовы?", "Are they ready?", "Are + S + adjective?", "Вопрос с to be: be ставится перед subject.", "to_be_question"],
      ["Они живут здесь?", "Do they live here?", "Do + S + V?", "Обычный глагол live в вопросе требует do.", "do_question"],
      ["Она устала.", "She is tired.", "S + is + adjective", "Состояние описываем через to be.", "to_be"],
      ["Она любит чай.", "She likes tea.", "S + V-s + object", "Обычный глагол с she получает -s.", "present_simple"],
      ["Ты занят?", "Are you busy?", "Are + you + adjective?", "С busy нужен to be.", "to_be_question"],
      ["Ты работаешь здесь?", "Do you work here?", "Do + you + V?", "С обычным глаголом work нужен do.", "do_question"],
    ],
  },
  {
    id: "questions",
    title: "Questions",
    description: "Быстро ставим do/does/is/are после вопросительного слова.",
    pattern: "question words",
    cards: [
      ["Где она?", "Where is she?", "Where + is + S?", "После where все равно нужен глагол-связка.", "wh_to_be"],
      ["Где она работает?", "Where does she work?", "Where + does + S + V?", "С she в вопросе нужен does, основной глагол без -s.", "wh_does"],
      ["Что ты делаешь?", "What are you doing?", "What + are + S + V-ing?", "Действие сейчас: are + doing.", "wh_continuous"],
      ["Что ты обычно делаешь?", "What do you usually do?", "What + do + S + adverb + V?", "Usually подсказывает Present Simple.", "wh_do"],
      ["Почему он злой?", "Why is he angry?", "Why + is + S + adjective?", "Angry — состояние, нужен is.", "wh_to_be"],
      ["Почему он не приходит?", "Why doesn't he come?", "Why + doesn't + S + V?", "В отрицательном вопросе с he нужен doesn't.", "wh_does"],
      ["Когда они дома?", "When are they at home?", "When + are + S + place?", "At home требует to be.", "wh_to_be"],
      ["Когда они играют?", "When do they play?", "When + do + S + V?", "Обычное действие: do + play.", "wh_do"],
      ["Сколько это стоит?", "How much does it cost?", "How much + does + it + V?", "С it в Present Simple вопрос строится через does.", "wh_does"],
      ["Куда ты идешь?", "Where are you going?", "Where + are + S + V-ing?", "Движение сейчас: are going.", "wh_continuous"],
    ],
  },
  {
    id: "now-usually",
    title: "Now or Usually",
    description: "Различаем привычку и действие прямо сейчас.",
    pattern: "simple vs continuous",
    cards: [
      ["Я работаю каждый день.", "I work every day.", "S + V + time", "Every day = регулярность, Present Simple.", "present_simple"],
      ["Я сейчас работаю.", "I am working now.", "S + am + V-ing + now", "Now = действие происходит сейчас.", "continuous"],
      ["Она обычно учится утром.", "She usually studies in the morning.", "S + usually + V-s", "Usually = привычка, у she глагол с -s.", "present_simple"],
      ["Она сейчас учится.", "She is studying now.", "S + is + V-ing", "Now = is + studying.", "continuous"],
      ["Они не смотрят телевизор каждый день.", "They don't watch TV every day.", "S + don't + V", "С they отрицание через don't.", "simple_negative"],
      ["Они не смотрят телевизор сейчас.", "They aren't watching TV now.", "S + aren't + V-ing", "Сейчас: be + V-ing.", "continuous_negative"],
      ["Ты ждешь меня сейчас?", "Are you waiting for me now?", "Are + S + V-ing?", "Вопрос про сейчас: are перед subject.", "continuous_question"],
      ["Ты ждешь меня каждый день?", "Do you wait for me every day?", "Do + S + V?", "Регулярность: do + wait.", "simple_question"],
      ["Он часто звонит тебе?", "Does he often call you?", "Does + S + adverb + V?", "С he вопрос строится через does.", "does_question"],
      ["Он звонит тебе сейчас?", "Is he calling you now?", "Is + S + V-ing?", "Сейчас: is calling.", "continuous_question"],
    ],
  },
  {
    id: "past",
    title: "Past",
    description: "Переключаем did и was/were в прошлом.",
    pattern: "did vs was",
    cards: [
      ["Я был уставшим вчера.", "I was tired yesterday.", "S + was + adjective", "Состояние в прошлом: was.", "past_to_be"],
      ["Я работал вчера.", "I worked yesterday.", "S + V2 + time", "Действие в прошлом: worked.", "past_simple"],
      ["Ты был дома?", "Were you at home?", "Were + S + place?", "Вопрос с to be в прошлом: were перед subject.", "past_to_be_question"],
      ["Ты видел это?", "Did you see it?", "Did + S + V?", "После did основной глагол в базовой форме.", "did_question"],
      ["Она не была готова.", "She wasn't ready.", "S + wasn't + adjective", "Состояние в прошлом: wasn't.", "past_to_be_negative"],
      ["Она не пришла.", "She didn't come.", "S + didn't + V", "После didn't глагол без второй формы.", "did_negative"],
      ["Где они были?", "Where were they?", "Where + were + S?", "Место/состояние в прошлом: were.", "wh_past_to_be"],
      ["Куда они пошли?", "Where did they go?", "Where + did + S + V?", "Действие в прошлом: did + go.", "wh_did"],
      ["Он был занят?", "Was he busy?", "Was + S + adjective?", "Busy = состояние, в прошлом was.", "past_to_be_question"],
      ["Он звонил тебе?", "Did he call you?", "Did + S + V?", "Вопрос с обычным глаголом в прошлом требует did.", "did_question"],
    ],
  },
  {
    id: "mixed",
    title: "Mixed Speed",
    description: "Все вперемешку: как в реальной речи.",
    pattern: "mixed",
    cards: [
      ["Она дома?", "Is she at home?", "Is + S + place?", "Место: to be.", "to_be_question"],
      ["Она работает дома?", "Does she work at home?", "Does + S + V?", "Обычное действие: does + work.", "does_question"],
      ["Она сейчас работает дома?", "Is she working at home now?", "Is + S + V-ing?", "Сейчас: is working.", "continuous_question"],
      ["Она работала дома вчера?", "Did she work at home yesterday?", "Did + S + V?", "Прошлое действие: did + work.", "did_question"],
      ["Она будет работать завтра?", "Will she work tomorrow?", "Will + S + V?", "Будущее: will + базовый глагол.", "future_question"],
      ["Я не готов.", "I am not ready.", "S + am not + adjective", "Состояние: to be.", "to_be_negative"],
      ["Я не знаю.", "I don't know.", "S + don't + V", "Обычный глагол know в отрицании: don't.", "simple_negative"],
      ["Я не жду.", "I am not waiting.", "S + am not + V-ing", "Действие сейчас: am not waiting.", "continuous_negative"],
      ["Где ты живешь?", "Where do you live?", "Where + do + S + V?", "Обычный глагол live требует do.", "wh_do"],
      ["Где ты сейчас живешь?", "Where are you living now?", "Where + are + S + V-ing?", "Временная ситуация сейчас: are living.", "wh_continuous"],
      ["Они уже пришли?", "Have they come yet?", "Have + S + V3?", "Present Perfect вопрос: have + come.", "perfect_question"],
      ["Я закончил.", "I have finished.", "S + have + V3", "Результат к настоящему моменту: have finished.", "perfect"],
    ],
  },
];

function extraCards(entries, structure, explanation, pattern) {
  return entries.map(([ru, answer]) => [ru, answer, structure, explanation, pattern]);
}

const extraCardsByLevel = {
  "be-do": [
    ...extraCards([
      ["Я дома.", "I am at home."],
      ["Мы в офисе.", "We are in the office."],
      ["Она в школе.", "She is at school."],
      ["Они не дома.", "They are not at home."],
      ["Ты не один.", "You are not alone."],
      ["Он сейчас в машине.", "He is in the car now."],
      ["Мой брат занят.", "My brother is busy."],
      ["Ее родители готовы.", "Her parents are ready."],
    ], "S + am/is/are + place/adjective", "Если нет действия, нужен to be.", "to_be"),
    ...extraCards([
      ["Я живу рядом.", "I live nearby."],
      ["Мы работаем вместе.", "We work together."],
      ["Она учится вечером.", "She studies in the evening."],
      ["Он играет после школы.", "He plays after school."],
      ["Они часто звонят.", "They often call."],
      ["Мой брат водит машину.", "My brother drives a car."],
      ["Ее родители живут в Сочи.", "Her parents live in Sochi."],
      ["Ты говоришь быстро.", "You speak fast."],
    ], "S + V / V-s", "Есть обычное действие: нужен смысловой глагол, не to be.", "present_simple"),
    ...extraCards([
      ["Я не готов.", "I am not ready."],
      ["Она не дома.", "She is not at home."],
      ["Он не устал.", "He is not tired."],
      ["Они не заняты.", "They are not busy."],
      ["Мы не в центре.", "We are not in the city center."],
      ["Это не дорого.", "It is not expensive."],
      ["Ты не прав.", "You are not right."],
      ["Комната не чистая.", "The room is not clean."],
    ], "S + am/is/are not + noun/adjective/place", "Отрицание состояния строится через to be + not.", "to_be_negative"),
    ...extraCards([
      ["Я не работаю по субботам.", "I don't work on Saturdays."],
      ["Она не пьет кофе.", "She doesn't drink coffee."],
      ["Он не живет здесь.", "He doesn't live here."],
      ["Они не знают ответ.", "They don't know the answer."],
      ["Мы не смотрим новости.", "We don't watch the news."],
      ["Ты не понимаешь меня.", "You don't understand me."],
      ["Моя сестра не любит рыбу.", "My sister doesn't like fish."],
      ["Этот магазин не открывается рано.", "This shop doesn't open early."],
    ], "S + don't/doesn't + V", "В отрицании с обычным глаголом нужен do/does, а глагол без -s.", "simple_negative"),
    ...extraCards([
      ["Ты дома?", "Are you at home?"],
      ["Она готова?", "Is she ready?"],
      ["Они заняты?", "Are they busy?"],
      ["Он твой учитель?", "Is he your teacher?"],
      ["Это бесплатно?", "Is it free?"],
      ["Мы опоздали?", "Are we late?"],
      ["Твой телефон новый?", "Is your phone new?"],
      ["Дети в комнате?", "Are the children in the room?"],
    ], "Am/Is/Are + S + noun/adjective/place?", "В вопросе с to be сам be выходит вперед.", "to_be_question"),
    ...extraCards([
      ["Ты любишь кофе?", "Do you like coffee?"],
      ["Она работает здесь?", "Does she work here?"],
      ["Он говорит по-английски?", "Does he speak English?"],
      ["Они живут рядом?", "Do they live nearby?"],
      ["Мы начинаем сейчас?", "Do we start now?"],
      ["Твой брат водит машину?", "Does your brother drive a car?"],
      ["Этот автобус идет в центр?", "Does this bus go to the city center?"],
      ["Ты часто готовишь?", "Do you often cook?"],
    ], "Do/Does + S + V?", "В вопросе с обычным глаголом нужен do/does.", "do_question"),
  ],
  questions: [
    ...extraCards([
      ["Кто она?", "Who is she?"],
      ["Где твоя сумка?", "Where is your bag?"],
      ["Почему ты грустный?", "Why are you sad?"],
      ["Когда он свободен?", "When is he free?"],
      ["Сколько это стоит?", "How much is it?"],
      ["Почему они дома?", "Why are they at home?"],
      ["Где мой телефон?", "Where is my phone?"],
      ["Кто твой преподаватель?", "Who is your teacher?"],
    ], "Question word + am/is/are + S?", "После вопросительного слова все равно нужен to be.", "wh_to_be"),
    ...extraCards([
      ["Где ты работаешь?", "Where do you work?"],
      ["Где она живет?", "Where does she live?"],
      ["Когда он просыпается?", "When does he wake up?"],
      ["Почему они уходят рано?", "Why do they leave early?"],
      ["Что ты хочешь?", "What do you want?"],
      ["Что она делает по вечерам?", "What does she do in the evenings?"],
      ["Как часто ты тренируешься?", "How often do you exercise?"],
      ["Почему это работает?", "Why does it work?"],
    ], "Question word + do/does + S + V?", "С обычным глаголом после question word нужен do/does.", "wh_do_does"),
    ...extraCards([
      ["Что ты сейчас читаешь?", "What are you reading now?"],
      ["Где она сейчас работает?", "Where is she working now?"],
      ["Почему они ждут?", "Why are they waiting?"],
      ["Что он сейчас смотрит?", "What is he watching now?"],
      ["Куда ты идешь?", "Where are you going?"],
      ["Что мы обсуждаем?", "What are we discussing?"],
      ["Почему ребенок плачет?", "Why is the child crying?"],
      ["Кого ты сейчас слушаешь?", "Who are you listening to now?"],
    ], "Question word + am/is/are + S + V-ing?", "Действие сейчас в вопросе строится через be + V-ing.", "wh_continuous"),
    ...extraCards([
      ["Где ты был вчера?", "Where were you yesterday?"],
      ["Почему она опоздала?", "Why was she late?"],
      ["Когда они были в Москве?", "When were they in Moscow?"],
      ["Кто был дома?", "Who was at home?"],
      ["Почему он был злой?", "Why was he angry?"],
      ["Где были ключи?", "Where were the keys?"],
      ["Когда ты был свободен?", "When were you free?"],
      ["Почему дверь была открыта?", "Why was the door open?"],
    ], "Question word + was/were + S?", "Состояние или место в прошлом: was/were.", "wh_past_to_be"),
    ...extraCards([
      ["Куда ты пошел вчера?", "Where did you go yesterday?"],
      ["Что она сказала?", "What did she say?"],
      ["Когда они приехали?", "When did they arrive?"],
      ["Почему он не позвонил?", "Why didn't he call?"],
      ["Что ты купил?", "What did you buy?"],
      ["Кого они встретили?", "Who did they meet?"],
      ["Как ты это нашел?", "How did you find it?"],
      ["Почему это случилось?", "Why did it happen?"],
    ], "Question word + did + S + V?", "После did основной глагол остается в базовой форме.", "wh_did"),
    ...extraCards([
      ["Когда ты позвонишь?", "When will you call?"],
      ["Что она будет делать?", "What will she do?"],
      ["Где они будут жить?", "Where will they live?"],
      ["Кто поможет нам?", "Who will help us?"],
      ["Почему ты не придешь?", "Why won't you come?"],
      ["Когда это начнется?", "When will it start?"],
      ["Что мы будем есть?", "What will we eat?"],
      ["Как ты это сделаешь?", "How will you do it?"],
    ], "Question word + will + S + V?", "Будущее в вопросе строится через will + базовый глагол.", "wh_future"),
  ],
  "now-usually": [
    ...extraCards([
      ["Я обычно завтракаю дома.", "I usually have breakfast at home."],
      ["Она часто читает перед сном.", "She often reads before bed."],
      ["Он работает по понедельникам.", "He works on Mondays."],
      ["Мы ходим туда каждую неделю.", "We go there every week."],
      ["Они иногда смотрят фильмы.", "They sometimes watch movies."],
      ["Ты всегда приходишь рано.", "You always come early."],
      ["Мой брат играет в футбол по выходным.", "My brother plays football at weekends."],
      ["Этот поезд идет быстро.", "This train goes fast."],
    ], "S + adverb + V / V-s", "Регулярность и привычка: Present Simple.", "present_simple"),
    ...extraCards([
      ["Я сейчас завтракаю.", "I am having breakfast now."],
      ["Она сейчас читает.", "She is reading now."],
      ["Он работает прямо сейчас.", "He is working right now."],
      ["Мы сейчас идем туда.", "We are going there now."],
      ["Они смотрят фильм сейчас.", "They are watching a movie now."],
      ["Ты сейчас приходишь?", "Are you coming now?"],
      ["Мой брат играет в футбол сейчас.", "My brother is playing football now."],
      ["Поезд сейчас идет быстро.", "The train is going fast now."],
    ], "S + am/is/are + V-ing", "Действие происходит сейчас: be + V-ing.", "continuous"),
    ...extraCards([
      ["Я не ем мясо.", "I don't eat meat."],
      ["Она не пьет молоко.", "She doesn't drink milk."],
      ["Он не работает ночью.", "He doesn't work at night."],
      ["Мы не ходим туда часто.", "We don't go there often."],
      ["Они не играют каждый день.", "They don't play every day."],
      ["Ты не звонишь мне утром.", "You don't call me in the morning."],
      ["Моя мама не смотрит сериалы.", "My mother doesn't watch series."],
      ["Этот лифт не работает по утрам.", "This lift doesn't work in the morning."],
    ], "S + don't/doesn't + V", "Отрицание регулярного действия строится через don't/doesn't.", "simple_negative"),
    ...extraCards([
      ["Я сейчас не ем.", "I am not eating now."],
      ["Она сейчас не пьет кофе.", "She is not drinking coffee now."],
      ["Он сейчас не работает.", "He is not working now."],
      ["Мы сейчас не идем туда.", "We are not going there now."],
      ["Они сейчас не играют.", "They are not playing now."],
      ["Ты сейчас не слушаешь.", "You are not listening now."],
      ["Моя мама сейчас не смотрит сериал.", "My mother is not watching a series now."],
      ["Лифт сейчас не работает.", "The lift is not working now."],
    ], "S + am/is/are not + V-ing", "Отрицание действия сейчас: be not + V-ing.", "continuous_negative"),
    ...extraCards([
      ["Ты часто ездишь в центр?", "Do you often go to the city center?"],
      ["Она обычно готовит дома?", "Does she usually cook at home?"],
      ["Он работает каждый день?", "Does he work every day?"],
      ["Они смотрят новости вечером?", "Do they watch the news in the evening?"],
      ["Мы начинаем в девять?", "Do we start at nine?"],
      ["Твой брат учится по выходным?", "Does your brother study at weekends?"],
      ["Этот магазин закрывается рано?", "Does this shop close early?"],
      ["Ты всегда пьешь чай утром?", "Do you always drink tea in the morning?"],
    ], "Do/Does + S + adverb + V?", "Вопрос про привычку или регулярность требует do/does.", "simple_question"),
    ...extraCards([
      ["Ты сейчас едешь в центр?", "Are you going to the city center now?"],
      ["Она сейчас готовит дома?", "Is she cooking at home now?"],
      ["Он работает сейчас?", "Is he working now?"],
      ["Они сейчас смотрят новости?", "Are they watching the news now?"],
      ["Мы начинаем сейчас?", "Are we starting now?"],
      ["Твой брат сейчас учится?", "Is your brother studying now?"],
      ["Магазин сейчас закрывается?", "Is the shop closing now?"],
      ["Ты сейчас пьешь чай?", "Are you drinking tea now?"],
    ], "Am/Is/Are + S + V-ing?", "Вопрос про действие сейчас: be перед subject.", "continuous_question"),
  ],
  past: [
    ...extraCards([
      ["Я был дома вчера.", "I was at home yesterday."],
      ["Она была занята утром.", "She was busy in the morning."],
      ["Он был в офисе.", "He was in the office."],
      ["Мы были готовы.", "We were ready."],
      ["Они были в дороге.", "They were on the way."],
      ["Ты был прав.", "You were right."],
      ["Погода была хорошая.", "The weather was good."],
      ["Двери были закрыты.", "The doors were closed."],
    ], "S + was/were + noun/adjective/place", "Состояние или место в прошлом: was/were.", "past_to_be"),
    ...extraCards([
      ["Я позвонил ей вчера.", "I called her yesterday."],
      ["Она открыла окно.", "She opened the window."],
      ["Он купил билет.", "He bought a ticket."],
      ["Мы посмотрели фильм.", "We watched a movie."],
      ["Они приехали поздно.", "They arrived late."],
      ["Ты сделал это быстро.", "You did it quickly."],
      ["Мой брат потерял ключи.", "My brother lost the keys."],
      ["Поезд остановился.", "The train stopped."],
    ], "S + V2", "Завершенное действие в прошлом: Past Simple.", "past_simple"),
    ...extraCards([
      ["Я не был готов.", "I wasn't ready."],
      ["Она не была дома.", "She wasn't at home."],
      ["Он не был злой.", "He wasn't angry."],
      ["Мы не были вместе.", "We weren't together."],
      ["Они не были уверены.", "They weren't sure."],
      ["Ты не был поздно.", "You weren't late."],
      ["Комната не была чистой.", "The room wasn't clean."],
      ["Ответ не был правильным.", "The answer wasn't correct."],
    ], "S + wasn't/weren't + noun/adjective/place", "Отрицание состояния в прошлом строится через wasn't/weren't.", "past_to_be_negative"),
    ...extraCards([
      ["Я не звонил ей.", "I didn't call her."],
      ["Она не открыла окно.", "She didn't open the window."],
      ["Он не купил билет.", "He didn't buy a ticket."],
      ["Мы не смотрели фильм.", "We didn't watch a movie."],
      ["Они не приехали поздно.", "They didn't arrive late."],
      ["Ты не сделал это.", "You didn't do it."],
      ["Мой брат не потерял ключи.", "My brother didn't lose the keys."],
      ["Поезд не остановился.", "The train didn't stop."],
    ], "S + didn't + V", "После didn't основной глагол остается в базовой форме.", "did_negative"),
    ...extraCards([
      ["Ты был готов?", "Were you ready?"],
      ["Она была дома?", "Was she at home?"],
      ["Он был в офисе?", "Was he in the office?"],
      ["Мы были правы?", "Were we right?"],
      ["Они были вместе?", "Were they together?"],
      ["Погода была плохая?", "Was the weather bad?"],
      ["Дверь была открыта?", "Was the door open?"],
      ["Ответ был правильным?", "Was the answer correct?"],
    ], "Was/Were + S + adjective/place?", "Вопрос с to be в прошлом: was/were перед subject.", "past_to_be_question"),
    ...extraCards([
      ["Ты позвонил ей?", "Did you call her?"],
      ["Она открыла окно?", "Did she open the window?"],
      ["Он купил билет?", "Did he buy a ticket?"],
      ["Мы смотрели фильм?", "Did we watch a movie?"],
      ["Они приехали поздно?", "Did they arrive late?"],
      ["Ты сделал это?", "Did you do it?"],
      ["Мой брат потерял ключи?", "Did my brother lose the keys?"],
      ["Поезд остановился?", "Did the train stop?"],
    ], "Did + S + V?", "После did глагол идет в базовой форме.", "did_question"),
  ],
  mixed: [
    ...extraCards([
      ["Я буду дома завтра.", "I will be at home tomorrow."],
      ["Она позвонит позже.", "She will call later."],
      ["Они не придут сегодня.", "They won't come today."],
      ["Ты поможешь мне?", "Will you help me?"],
      ["Где он будет жить?", "Where will he live?"],
      ["Мы не забудем.", "We won't forget."],
      ["Это будет сложно?", "Will it be difficult?"],
      ["Когда ты начнешь?", "When will you start?"],
    ], "Will + S + V?", "Будущее строится через will + базовый глагол.", "future"),
    ...extraCards([
      ["Я уже закончил.", "I have already finished."],
      ["Она еще не пришла.", "She hasn't come yet."],
      ["Ты когда-нибудь был там?", "Have you ever been there?"],
      ["Они уже сделали это.", "They have already done it."],
      ["Он потерял телефон.", "He has lost his phone."],
      ["Мы еще не решили.", "We haven't decided yet."],
      ["Ты видел этот фильм?", "Have you seen this movie?"],
      ["Она когда-нибудь работала здесь?", "Has she ever worked here?"],
    ], "Have/Has + S + V3?", "Present Perfect связывает опыт или результат с настоящим.", "perfect"),
    ...extraCards([
      ["Она не дома, она работает.", "She isn't at home, she is working."],
      ["Я не знаю, где он.", "I don't know where he is."],
      ["Ты готов или ты еще ждешь?", "Are you ready or are you still waiting?"],
      ["Они обычно приходят рано, но сегодня опаздывают.", "They usually come early, but today they are late."],
      ["Он не любит кофе, но сейчас пьет его.", "He doesn't like coffee, but he is drinking it now."],
      ["Мы были дома, но не спали.", "We were at home, but we weren't sleeping."],
      ["Она работала вчера и сегодня отдыхает.", "She worked yesterday and she is resting today."],
      ["Я закончил и теперь свободен.", "I have finished and now I am free."],
    ], "Mixed sentence", "Смешанные фразы тренируют переключение между схемами.", "mixed_combo"),
    ...extraCards([
      ["Где она сейчас?", "Where is she now?"],
      ["Где она сейчас работает?", "Where is she working now?"],
      ["Где она обычно работает?", "Where does she usually work?"],
      ["Где она работала вчера?", "Where did she work yesterday?"],
      ["Где она будет работать завтра?", "Where will she work tomorrow?"],
      ["Она уже закончила работу?", "Has she finished work yet?"],
      ["Она не работала вчера?", "Didn't she work yesterday?"],
      ["Она не работает сегодня?", "Isn't she working today?"],
    ], "Question switch", "Похожая русская мысль меняет английский мотор.", "mixed_questions"),
    ...extraCards([
      ["Я дома каждый вечер.", "I am at home every evening."],
      ["Я работаю каждый вечер.", "I work every evening."],
      ["Я сейчас дома.", "I am at home now."],
      ["Я сейчас работаю.", "I am working now."],
      ["Я был дома вчера.", "I was at home yesterday."],
      ["Я работал вчера.", "I worked yesterday."],
      ["Я буду дома завтра.", "I will be at home tomorrow."],
      ["Я буду работать завтра.", "I will work tomorrow."],
    ], "Contrast drill", "Пары с похожими словами помогают быстро выбрать схему.", "mixed_contrast"),
    ...extraCards([
      ["Почему ты дома?", "Why are you at home?"],
      ["Почему ты работаешь дома?", "Why do you work at home?"],
      ["Почему ты сейчас работаешь дома?", "Why are you working at home now?"],
      ["Почему ты работал дома вчера?", "Why did you work at home yesterday?"],
      ["Почему ты будешь работать дома завтра?", "Why will you work at home tomorrow?"],
      ["Почему ты еще не закончил?", "Why haven't you finished yet?"],
      ["Почему она не пришла?", "Why didn't she come?"],
      ["Почему она еще не пришла?", "Why hasn't she come yet?"],
    ], "Why + grammar engine", "Question word не отменяет нужный вспомогательный глагол.", "mixed_wh"),
  ],
};

levels.forEach((level) => {
  level.cards.push(...(extraCardsByLevel[level.id] || []));
});

const el = {
  levels: document.getElementById("levels"),
  totalDone: document.getElementById("totalDone"),
  accuracy: document.getElementById("accuracy"),
  errorCount: document.getElementById("errorCount"),
  modeLabel: document.getElementById("modeLabel"),
  levelTitle: document.getElementById("levelTitle"),
  levelDescription: document.getElementById("levelDescription"),
  cardIndex: document.getElementById("cardIndex"),
  streak: document.getElementById("streak"),
  patternPill: document.getElementById("patternPill"),
  timerRing: document.getElementById("timerRing"),
  timerValue: document.getElementById("timerValue"),
  ruPrompt: document.getElementById("ruPrompt"),
  answerPanel: document.getElementById("answerPanel"),
  answerText: document.getElementById("answerText"),
  structureText: document.getElementById("structureText"),
  explanationText: document.getElementById("explanationText"),
  beforeAnswerActions: document.getElementById("beforeAnswerActions"),
  showAnswerButton: document.getElementById("showAnswerButton"),
  skipButton: document.getElementById("skipButton"),
  ratingActions: document.getElementById("ratingActions"),
  reviewErrorsButton: document.getElementById("reviewErrorsButton"),
  resetButton: document.getElementById("resetButton"),
  speedButtons: Array.from(document.querySelectorAll(".speed-button")),
};

const defaultProgress = () => ({
  activeLevelId: "be-do",
  unlockedLevelIds: ["be-do"],
  streaks: {},
  attempts: 0,
  easy: 0,
  mistakes: 0,
  slow: 0,
  errorIds: [],
  completedLevelIds: [],
});

let progress = loadProgress();
let activeSeconds = 5;
let activeCard = null;
let queue = [];
let reviewMode = false;
let timerId = null;
let remaining = activeSeconds;

function makeCard(raw, levelId, index) {
  const [ru, answer, structure, explanation, pattern] = raw;
  return {
    id: `${levelId}-${index}`,
    levelId,
    ru,
    answer,
    structure,
    explanation,
    pattern,
  };
}

const allCards = levels.flatMap((level) =>
  level.cards.map((card, index) => makeCard(card, level.id, index))
);

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

function getCardsForCurrentMode() {
  if (reviewMode) {
    const errorSet = new Set(progress.errorIds);
    return allCards.filter((card) => errorSet.has(card.id));
  }

  const level = getActiveLevel();
  return level.cards.map((card, index) => makeCard(card, level.id, index));
}

function refillQueue() {
  const cards = getCardsForCurrentMode();
  queue = shuffle(cards);
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

function renderStats() {
  el.totalDone.textContent = String(progress.attempts);
  el.errorCount.textContent = String(progress.errorIds.length);
  el.accuracy.textContent = progress.attempts
    ? `${Math.round((progress.easy / progress.attempts) * 100)}%`
    : "0%";
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
  el.modeLabel.textContent = reviewMode ? "Mistake review" : "Speak mode";
  el.levelTitle.textContent = reviewMode ? "Повтор ошибок" : level.title;
  el.levelDescription.textContent = reviewMode
    ? "Повторяем только карточки, где раньше были ошибки или медленный ответ."
    : level.description;
  el.cardIndex.textContent = activeCard ? activeCard.id.split("-").at(-1) : "1";
  el.streak.textContent = String(progress.streaks[level.id] || 0);
  el.patternPill.textContent = activeCard.pattern;
  el.ruPrompt.textContent = activeCard.ru;
  el.answerText.textContent = activeCard.answer;
  el.structureText.textContent = activeCard.structure;
  el.explanationText.textContent = activeCard.explanation;
  el.answerPanel.hidden = true;
  el.ratingActions.hidden = true;
  el.beforeAnswerActions.hidden = false;
}

function startTimer() {
  stopTimer();
  remaining = activeSeconds;
  el.timerValue.textContent = String(remaining);
  el.timerRing.classList.add("running");
  timerId = window.setInterval(() => {
    remaining -= 1;
    el.timerValue.textContent = String(Math.max(remaining, 0));
    if (remaining <= 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  el.timerRing.classList.remove("running");
}

function startCard() {
  activeCard = getNextCard();
  renderStats();
  renderLevels();
  renderCard();
  startTimer();
}

function showAnswer() {
  stopTimer();
  el.answerPanel.hidden = false;
  el.beforeAnswerActions.hidden = true;
  el.ratingActions.hidden = false;
}

function unlockNextLevel(currentLevelId) {
  const currentIndex = levels.findIndex((level) => level.id === currentLevelId);
  const nextLevel = levels[currentIndex + 1];

  if (!nextLevel) {
    return;
  }

  if (!progress.unlockedLevelIds.includes(nextLevel.id)) {
    progress.unlockedLevelIds.push(nextLevel.id);
  }
}

function rateCard(rating) {
  const levelId = activeCard.levelId;
  progress.attempts += 1;

  if (rating === "easy") {
    progress.easy += 1;
    progress.streaks[levelId] = (progress.streaks[levelId] || 0) + 1;
    progress.errorIds = progress.errorIds.filter((id) => id !== activeCard.id);

    if (progress.streaks[levelId] >= REQUIRED_STREAK) {
      if (!progress.completedLevelIds.includes(levelId)) {
        progress.completedLevelIds.push(levelId);
      }
      unlockNextLevel(levelId);
    }
  } else {
    if (rating === "mistake") {
      progress.mistakes += 1;
    }
    if (rating === "slow") {
      progress.slow += 1;
    }
    progress.streaks[levelId] = 0;
    if (!progress.errorIds.includes(activeCard.id)) {
      progress.errorIds.push(activeCard.id);
    }
    queue.splice(Math.min(2, queue.length), 0, activeCard);
  }

  saveProgress();
  startCard();
}

el.showAnswerButton.addEventListener("click", showAnswer);
el.skipButton.addEventListener("click", () => {
  showAnswer();
});

el.ratingActions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rating]");
  if (!button) {
    return;
  }
  rateCard(button.dataset.rating);
});

el.speedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeSeconds = Number(button.dataset.seconds);
    el.speedButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    startTimer();
  });
});

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
  if (event.key !== "Enter") {
    return;
  }

  if (el.answerPanel.hidden) {
    showAnswer();
    return;
  }

  rateCard("easy");
});

startCard();
