
const places = [
  {
    name: 'Мемориал Славы',
    coords: [55.854096, 38.442158],
    hint: 'Площадь Победы · Вечный огонь',
    description:
      'Мемориал Славы посвящён жителям Богородска и Ногинска, ушедшим на фронт в годы Великой Отечественной войны. Сегодня это одно из главных памятных мест города, где проходят торжественные мероприятия в День Победы.',
    fact:
      'На фронт ушло около 37 000 ногинчан. Мемориал открыли 9 мая 1974 года, а Вечный огонь зажёг Герой Советского Союза Василий Черношеин.',
    question:
      'Сколько ногинчан не вернулось с фронта в годы Великой Отечественной войны?',
    answers: [
      '8 540 человек',
      '14 875 человек',
      '37 000 человек'
    ],
    correct: 1
  },

  {
    name: 'Богоявленский собор',
    coords: [55.857538, 38.439706],
    hint: 'ул. Рабочая, 16А',
    description:
      'Богоявленский собор — один из наиболее заметных исторических храмов Ногинска. Он связан с духовной историей города и с именем священномученика Константина Богородского.',
    fact:
      'Собор связан со священномучеником Константином Богородским. Его мощи покоятся здесь. В 1890 году на колокольню подняли колокол весом около 20 тонн.',
    question:
      'Когда на этом месте возвели первый каменный храм?',
    answers: [
      'В 1690–1701 годах',
      'В 1755–1767 годах',
      'В 1822–1824 годах'
    ],
    correct: 1
  },

  {
    name: 'Дом-музей семьи Морозова',
    coords: [55.880910, 38.464730],
    hint: 'Глуховский парк · ул. Краснослободская, 5',
    description:
      'Дом семьи Морозовых находится в исторической части Глухова. Здание связано с известной династией предпринимателей и текстильной промышленностью Богородского края.',
    fact:
      'Дом построен в 1907–1908 годах по проекту Александра Кузнецова. Морозов был старообрядцем, поэтому в мезонине находилась отдельная молельная комната.',
    question:
      'В каком архитектурном стиле построен дом Арсения Морозова?',
    answers: [
      'Поздний московский модерн',
      'Русское барокко',
      'Сталинский ампир'
    ],
    correct: 0
  },

  {
    name: 'Памятник В. П. Ногину',
    coords: [55.851660, 38.442540],
    hint: 'Привокзальный сквер',
    description:
      'Памятник Виктору Ногину расположен недалеко от железнодорожного вокзала. Именно его имя город получил в советскую эпоху.',
    fact:
      'Переименование предложил Михаил Калинин. Виктор Ногин начал трудовой путь на Богородско-Глуховской мануфактуре, где работал конторским служащим и красильщиком.',
    question:
      'В каком году Богородск переименовали в Ногинск?',
    answers: [
      'В 1924 году',
      'В 1930 году',
      'В 1958 году'
    ],
    correct: 1
  },

  {
    name: 'Первый памятник Ленину',
    coords: [55.876743, 38.467577],
    hint: 'пл. Ленина, 4Б',
    description:
      'Памятник относится к ранней советской истории города. Его открытие состоялось практически сразу после смерти Владимира Ленина, что делает его одним из заметных памятников той эпохи.',
    fact:
      'Памятник работы фабричного художника Фёдора Кузнецова открыли 22 января 1924 года — на следующий день после смерти Ленина.',
    question:
      'Из какого материала отлита статуя памятника?',
    answers: [
      'Из бронзы',
      'Из чугуна',
      'Из железобетона'
    ],
    correct: 2
  },

  {
    name: 'Стела «Екатерина»',
    coords: [55.855638, 38.436935],
    hint: 'Центр сквера Бугрова',
    description:
      'Стела посвящена Екатерине II и важному моменту в истории города. Именно при её правлении Рогожа получила статус города и стала Богородском.',
    fact:
      'Стелу установили в 2006 году к 225-летию города. Герб Богородска украшало мотовило — инструмент для сматывания шёлковых нитей.',
    question:
      'Когда село Рогожа стало городом Богородском?',
    answers: [
      '5 октября 1781 года',
      '12 июня 1812 года',
      '26 января 1930 года'
    ],
    correct: 0
  },

  {
    name: 'Памятник Патриарху Пимену',
    coords: [55.857923, 38.440893],
    hint: 'Перекрёсток улиц Рабочей и Декабристов',
    description:
      'Памятник Патриарху Пимену напоминает о человеке, чья жизнь была тесно связана с Богородском. Сергей Извеков родился здесь и получил часть образования в городе.',
    fact:
      'Сергей Извеков учился в школе № 2 имени Короленко и пел в архиерейском хоре собора. Памятник открыли в 2010 году к столетию со дня его рождения.',
    question:
      'В какой руке Патриарх Пимен держит посох?',
    answers: [
      'В правой',
      'В левой',
      'Обе руки подняты'
    ],
    correct: 1
  },

  {
    name: 'Добрый ангел мира',
    coords: [55.847234, 38.423611],
    hint: 'Центральный парк культуры и отдыха',
    description:
      'Скульптурная композиция «Добрый ангел мира» находится в Центральном парке культуры и отдыха. Образ ангела связан с идеями мира, благотворительности и меценатства.',
    fact:
      'Восьмиколонная ротонда символизирует восьмиконечную звезду меценатства. Ангел отпускает в небо голубя — символ мира.',
    question:
      'Сколько колонн окружает фигуру ангела?',
    answers: [
      'Шесть',
      'Восемь',
      'Двенадцать'
    ],
    correct: 1
  },

  {
    name: 'Музейно-выставочный центр',
    coords: [55.855950, 38.437315],
    hint: 'пл. Бугрова, 2',
    description:
      'Музейно-выставочный центр хранит материалы об истории города, его промышленности, культуре и известных жителях. Это место, где историю Богородского края можно изучать через реальные предметы.',
    fact:
      'Музей создали в 1927 году на основе отделов института краеведения имени М. В. Ломоносова. Сегодня собрание насчитывает около 14 000 единиц хранения.',
    question:
      'Что положило начало коллекции городского музея?',
    answers: [
      'Частное собрание Морозовых',
      'Богородский институт краеведения',
      'Архив текстильного комбината'
    ],
    correct: 1
  },

  {
    name: 'Пешеходный мост через Клязьму',
    coords: [55.858475, 38.439957],
    hint: 'Набережная · вид на Богоявленский собор',
    description:
      'Мост через Клязьму — хорошая точка, чтобы увидеть связь города с рекой. С воды открывается вид на историческую часть Ногинска и Богоявленский собор.',
    fact:
      'По Клязьме сплавляли лес и перевозили товары. Река определяла места переправ и влияла на развитие текстильных предприятий Богородского края.',
    question:
      'Какую роль Клязьма исторически играла для Богородска?',
    answers: [
      'Только разделяла город',
      'Была транспортной артерией и поддерживала промышленность',
      'Использовалась исключительно для рыболовства'
    ],
    correct: 1
  }
];


/* =========================================================
   НАСТРОЙКИ
   ========================================================= */

/*
 * Фиксированная начальная точка.
 *
 * ВАЖНО:
 * здесь НЕ используется GPS.
 * Маршрут всегда начинается отсюда,
 * пока пользователь не подтвердит первую точку.
 */

const START_POINT = [
  55.851011,
  38.443267
];


/* =========================================================
   СОСТОЯНИЕ ПРИЛОЖЕНИЯ
   ========================================================= */

let selectedPlaceIndex = null;

const completedPlaces = new Set();

let currentStartPoint = [
  ...START_POINT
];

let currentStartName =
  'Начальная точка';

let currentRoute = null;


/* =========================================================
   DOM
   ========================================================= */

const $ = (selector) =>
  document.querySelector(selector);


const introCard =
  $('#introCard');

const placeCard =
  $('#placeCard');

const progressElement =
  $('#progress');


const placeNumber =
  $('#placeNumber');

const placeName =
  $('#placeName');

const placeHint =
  $('#placeHint');

const placeDescription =
  $('#placeDescription');

const placeFact =
  $('#placeFact');


const routeBtn =
  $('#routeBtn');

const arrivedBtn =
  $('#arrivedBtn');

const closePlaceBtn =
  $('#closePlaceBtn');

const routeStatus =
  $('#routeStatus');


const quiz =
  $('#quiz');

const quizTag =
  $('#quizTag');

const question =
  $('#question');

const answersContainer =
  $('#answers');

const feedback =
  $('#feedback');

const fact =
  $('#fact');

const quizBackBtn =
  $('#quizBackBtn');


const finish =
  $('#finish');


/* =========================================================
   КАРТА
   ========================================================= */

const map =
  L.map('map', {
    zoomControl: false
  }).setView(
    [55.86, 38.445],
    14
  );


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution:
      '© OpenStreetMap'
  }
).addTo(map);


/* =========================================================
   ФОНОВЫЙ МАРШРУТ
   ========================================================= */

const fallbackRoute =
  L.polyline(
    places.map(
      (place) => place.coords
    ),
    {
      color: '#f15a37',
      weight: 3,
      opacity: 0.2,
      dashArray: '5 9'
    }
  ).addTo(map);


/* =========================================================
   СТАРТОВАЯ ТОЧКА
   ========================================================= */

const startIcon =
  L.divIcon({
    className:
      'start-point-marker',

    html:
      '<div></div>',

    iconSize:
      [24, 24],

    iconAnchor:
      [12, 12]
  });


const startMarker =
  L.marker(
    START_POINT,
    {
      icon:
        startIcon,

      zIndexOffset:
        1000
    }
  ).addTo(map);


startMarker.bindPopup(
  '<strong>Начальная точка</strong><br>' +
  'Отсюда начинается маршрут'
);


const startCircle =
  L.circle(
    START_POINT,
    {
      radius: 35,

      color: '#2e9d50',
      weight: 3,

      fillColor: '#2e9d50',
      fillOpacity: 0.2
    }
  ).addTo(map);


/* =========================================================
   ИКОНКА ТОЧКИ
   ========================================================= */

function makeIcon(index) {

  const isDone =
    completedPlaces.has(index);

  const isActive =
    selectedPlaceIndex === index;


  let classes =
    'quest-marker';


  if (isDone) {
    classes += ' done';
  }


  if (isActive) {
    classes += ' active';
  }


  return L.divIcon({

    className:
      classes,

    html:
      isDone
        ? '✓'
        : String(index + 1),

    iconSize:
      [36, 36],

    iconAnchor:
      [18, 18]

  });
}


/* =========================================================
   МАРКЕРЫ ВСЕХ ТОЧЕК
   ========================================================= */

const markers =
  places.map(
    (place, index) => {

      const marker =
        L.marker(
          place.coords,
          {
            icon:
              makeIcon(index)
          }
        ).addTo(map);


      marker.on(
        'click',
        () => {

          selectPlace(index);

        }
      );


      return marker;

    }
  );


/* =========================================================
   ОБНОВЛЕНИЕ МАРКЕРОВ
   ========================================================= */

function refreshMarkers() {

  markers.forEach(
    (marker, index) => {

      marker.setIcon(
        makeIcon(index)
      );

    }
  );

}


/* =========================================================
   ПРОГРЕСС
   ========================================================= */

function updateProgress() {

  progressElement.textContent =
    `${completedPlaces.size} / ${places.length}`;

}


/* =========================================================
   МОБИЛЬНАЯ КАРТОЧКА
   ========================================================= */

/*
 * Добавляет:
 *
 * ─ полоску сверху карточки;
 * ─ кнопку ⌄ / ⌃;
 * ─ возможность свернуть карточку.
 */

function addMobileControls(card) {

  if (!card) {
    return;
  }


  /*
   * Не создаём элементы повторно.
   */

  if (
    card.querySelector(
      '.mobile-collapse-btn'
    )
  ) {
    return;
  }


  /*
   * Верхняя полоска.
   */

  const handle =
    document.createElement(
      'div'
    );

  handle.className =
    'mobile-sheet-handle';


  /*
   * Кнопка свернуть / развернуть.
   */

  const button =
    document.createElement(
      'button'
    );

  button.type =
    'button';

  button.className =
    'mobile-collapse-btn';

  button.textContent =
    '⌄';

  button.setAttribute(
    'aria-label',
    'Свернуть карточку'
  );


  button.addEventListener(
    'click',
    (event) => {

      event.stopPropagation();


      const isCollapsed =
        card.classList.toggle(
          'mobile-collapsed'
        );


      if (isCollapsed) {

        button.textContent =
          '⌃';

        button.setAttribute(
          'aria-label',
          'Развернуть карточку'
        );

      } else {

        button.textContent =
          '⌄';

        button.setAttribute(
          'aria-label',
          'Свернуть карточку'
        );

      }


      /*
       * Сообщаем Leaflet,
       * что размер доступной карты изменился.
       */

      setTimeout(
        () => {
          map.invalidateSize();
        },
        300
      );

    }
  );


  /*
   * Добавляем элементы в карточку.
   */

  card.insertBefore(
    handle,
    card.firstChild
  );

  card.appendChild(
    button
  );

}


/*
 * Возвращает карточку
 * в раскрытое состояние.
 */

function resetMobileCard(card) {

  if (!card) {
    return;
  }


  card.classList.remove(
    'mobile-collapsed'
  );


  const button =
    card.querySelector(
      '.mobile-collapse-btn'
    );


  if (button) {

    button.textContent =
      '⌄';

    button.setAttribute(
      'aria-label',
      'Свернуть карточку'
    );

  }

}


/* =========================================================
   СВАЙП КАРТОЧКИ НА МОБИЛЬНОМ
   ========================================================= */

let touchStartY = 0;
let touchCurrentY = 0;


function enableSwipe(card) {

  if (!card) {
    return;
  }


  /*
   * Не подключаем обработчики второй раз.
   */

  if (
    card.dataset.swipeEnabled === 'true'
  ) {
    return;
  }


  card.dataset.swipeEnabled =
    'true';


  card.addEventListener(
    'touchstart',
    (event) => {

      /*
       * Работаем только одним пальцем.
       */

      if (
        event.touches.length !== 1
      ) {
        return;
      }


      touchStartY =
        event.touches[0].clientY;

      touchCurrentY =
        touchStartY;

    },
    {
      passive: true
    }
  );


  card.addEventListener(
    'touchmove',
    (event) => {

      if (
        event.touches.length !== 1
      ) {
        return;
      }


      touchCurrentY =
        event.touches[0].clientY;

    },
    {
      passive: true
    }
  );


  card.addEventListener(
    'touchend',
    () => {

      const difference =
        touchCurrentY -
        touchStartY;


      /*
       * Свайп вниз.
       */

      if (difference > 60) {

        card.classList.add(
          'mobile-collapsed'
        );


        const button =
          card.querySelector(
            '.mobile-collapse-btn'
          );


        if (button) {

          button.textContent =
            '⌃';

          button.setAttribute(
            'aria-label',
            'Развернуть карточку'
          );

        }


        setTimeout(
          () => {
            map.invalidateSize();
          },
          300
        );

      }


      /*
       * Свайп вверх.
       */

      if (difference < -60) {

        card.classList.remove(
          'mobile-collapsed'
        );


        const button =
          card.querySelector(
            '.mobile-collapse-btn'
          );


        if (button) {

          button.textContent =
            '⌄';

          button.setAttribute(
            'aria-label',
            'Свернуть карточку'
          );

        }


        setTimeout(
          () => {
            map.invalidateSize();
          },
          300
        );

      }

    },
    {
      passive: true
    }
  );

}


/* =========================================================
   ВЫБОР ТОЧКИ
   ========================================================= */

function selectPlace(index) {

  selectedPlaceIndex =
    index;


  const place =
    places[index];


  /*
   * Заполняем карточку.
   */

  placeNumber.textContent =
    String(index + 1)
      .padStart(2, '0');


  placeName.textContent =
    place.name;


  placeHint.textContent =
    place.hint;


  placeDescription.textContent =
    place.description;


  placeFact.textContent =
    place.fact;


  /*
   * Сбрасываем старый статус маршрута.
   */

  routeStatus.classList.add(
    'hidden'
  );

  routeStatus.textContent =
    '';


  routeBtn.disabled =
    false;

  routeBtn.textContent =
    'Построить маршрут';


  /*
   * Показываем карточку точки.
   */

  introCard.classList.add(
    'hidden'
  );

  placeCard.classList.remove(
    'hidden'
  );


  /*
   * На мобильном открываем
   * карточку полностью.
   */

  resetMobileCard(
    placeCard
  );


  /*
   * Обновляем маркеры.
   */

  refreshMarkers();


  /*
   * Перемещаем карту к выбранной точке.
   */

  map.flyTo(
    place.coords,
    17,
    {
      duration: 1
    }
  );

}


/* =========================================================
   МАРШРУТИЗАЦИЯ
   ========================================================= */

const ROUTER =
  'https://routing.openstreetmap.de/routed-foot/route/v1/driving/';


async function buildRouteToSelectedPlace() {

  if (
    selectedPlaceIndex === null
  ) {
    return;
  }


  const place =
    places[
      selectedPlaceIndex
    ];


  routeBtn.disabled =
    true;

  routeBtn.textContent =
    'Строим маршрут…';


  routeStatus.classList.remove(
    'hidden'
  );


  routeStatus.textContent =
    `Маршрут от «${currentStartName}» к «${place.name}»…`;


  try {

    /*
     * ВАЖНО:
     *
     * Маршрут начинается НЕ от GPS.
     * Используется последняя подтверждённая точка.
     */

    const start =
      `${currentStartPoint[1]},${currentStartPoint[0]}`;


    const destination =
      `${place.coords[1]},${place.coords[0]}`;


    const url =
      `${ROUTER}${start};${destination}` +
      '?overview=full' +
      '&geometries=geojson';


    const response =
      await fetch(url);


    if (!response.ok) {

      throw new Error(
        'Сервис маршрутизации временно недоступен.'
      );

    }


    const data =
      await response.json();


    if (
      data.code !== 'Ok' ||
      !data.routes ||
      !data.routes[0]
    ) {

      throw new Error(
        'Не удалось построить маршрут.'
      );

    }


    const route =
      data.routes[0];


    /*
     * Удаляем предыдущий маршрут.
     */

    if (currentRoute) {

      map.removeLayer(
        currentRoute
      );

    }


    /*
     * Рисуем новый маршрут.
     */

    currentRoute =
      L.geoJSON(
        route.geometry,
        {
          style: {
            color: '#f15a37',
            weight: 6,
            opacity: 0.9,
            lineCap: 'round',
            lineJoin: 'round'
          }
        }
      ).addTo(map);


    /*
     * Расстояние.
     */

    const distanceKm =
      route.distance / 1000;


    /*
     * Время.
     */

    const durationMin =
      Math.round(
        route.duration / 60
      );


    /*
     * Информация пользователю.
     */

    routeStatus.innerHTML =
      `<strong>Маршрут построен</strong><br>` +
      `От: ${currentStartName}<br>` +
      `До: ${place.name}<br>` +
      `Пешком: ${formatDistance(distanceKm)} · ` +
      `примерно ${durationMin} мин.`;


    routeBtn.textContent =
      'Перестроить маршрут';


    /*
     * Показываем весь маршрут.
     */

    map.fitBounds(
      currentRoute.getBounds(),
      {
        padding:
          [70, 70]
      }
    );


  } catch (error) {

    console.error(
      error
    );


    routeStatus.textContent =
      error.message ||
      'Не удалось построить маршрут.';


    routeBtn.textContent =
      'Попробовать снова';


  } finally {

    routeBtn.disabled =
      false;

  }

}


/* =========================================================
   ФОРМАТ РАССТОЯНИЯ
   ========================================================= */

function formatDistance(km) {

  if (km < 1) {

    return `${Math.round(km * 1000)} м`;

  }


  return `${km.toFixed(1).replace('.', ',')} км`;

}


/* =========================================================
   ОТКРЫТИЕ ВИКТОРИНЫ
   ========================================================= */

function openQuiz() {

  if (
    selectedPlaceIndex === null
  ) {
    return;
  }


  const place =
    places[
      selectedPlaceIndex
    ];


  quizTag.textContent =
    `Точка ${selectedPlaceIndex + 1} · ${place.name}`;


  question.textContent =
    place.question;


  feedback.textContent =
    '';


  fact.classList.add(
    'hidden'
  );

  fact.innerHTML =
    '';


  quizBackBtn.classList.add(
    'hidden'
  );


  /*
   * Создаём варианты ответа.
   */

  answersContainer.innerHTML =
    place.answers
      .map(
        (answer, index) => `
          <button
            class="answer"
            data-index="${index}"
            type="button"
          >
            ${answer}
          </button>
        `
      )
      .join('');


  /*
   * Обработчики вариантов.
   */

  document
    .querySelectorAll(
      '.answer'
    )
    .forEach(
      (button) => {

        button.addEventListener(
          'click',
          () => {

            answerQuestion(
              Number(
                button.dataset.index
              )
            );

          }
        );

      }
    );


  quiz.showModal();

}


/* =========================================================
   ОТВЕТ НА ВОПРОС
   ========================================================= */

function answerQuestion(
  answerIndex
) {

  const place =
    places[
      selectedPlaceIndex
    ];


  const buttons =
    [
      ...document.querySelectorAll(
        '.answer'
      )
    ];


  const correctIndex =
    place.correct;


  /*
   * Показываем правильный
   * и неправильный ответы.
   */

  buttons.forEach(
    (button, index) => {

      button.disabled =
        true;


      if (
        index === correctIndex
      ) {

        button.classList.add(
          'correct'
        );

      }


      if (
        index === answerIndex &&
        answerIndex !== correctIndex
      ) {

        button.classList.add(
          'wrong'
        );

      }

    }
  );


  /*
   * Если ответ неправильный —
   * разрешаем попробовать ещё раз.
   */

  if (
    answerIndex !== correctIndex
  ) {

    feedback.textContent =
      'Не совсем. Осмотрись внимательнее и попробуй ещё раз.';


    setTimeout(
      () => {

        buttons.forEach(
          (button) => {

            button.disabled =
              false;

            button.className =
              'answer';

          }
        );


        feedback.textContent =
          '';

      },
      900
    );


    return;
  }


  /*
   * Правильный ответ.
   */

  feedback.textContent =
    'Верно!';


  fact.innerHTML =
    `<strong>История места</strong>${place.fact}`;


  fact.classList.remove(
    'hidden'
  );


  /*
   * Помечаем точку выполненной.
   */

  completedPlaces.add(
    selectedPlaceIndex
  );


  /*
   * САМАЯ ВАЖНАЯ ЛОГИКА МАРШРУТА:
   *
   * после подтверждения точки
   * именно она становится новой
   * стартовой точкой.
   */

  currentStartPoint = [
    place.coords[0],
    place.coords[1]
  ];


  currentStartName =
    place.name;


  /*
   * Обновляем прогресс
   * и маркеры.
   */

  updateProgress();

  refreshMarkers();


  /*
   * Показываем кнопку возврата
   * к карточке.
   */

  quizBackBtn.classList.remove(
    'hidden'
  );


  /*
   * Если выполнены все точки —
   * показываем финальное окно.
   */

  if (
    completedPlaces.size ===
    places.length
  ) {

    setTimeout(
      () => {

        quiz.close();

        finish.showModal();

      },
      800
    );

  }

}


/* =========================================================
   КНОПКА «Я НА МЕСТЕ»
   ========================================================= */

arrivedBtn.addEventListener(
  'click',
  openQuiz
);


/* =========================================================
   КНОПКА «ПОСТРОИТЬ МАРШРУТ»
   ========================================================= */

routeBtn.addEventListener(
  'click',
  buildRouteToSelectedPlace
);


/* =========================================================
   ЗАКРЫТИЕ КАРТОЧКИ
   ========================================================= */

closePlaceBtn.addEventListener(
  'click',
  () => {

    placeCard.classList.add(
      'hidden'
    );


    selectedPlaceIndex =
      null;


    refreshMarkers();

  }
);


/* =========================================================
   КНОПКА «НАЧАТЬ»
   ========================================================= */

$('#startBtn').addEventListener(
  'click',
  () => {

    introCard.classList.add(
      'hidden'
    );


    map.fitBounds(
      fallbackRoute.getBounds(),
      {
        padding:
          [70, 70]
      }
    );

  }
);


/* =========================================================
   ЗАКРЫТИЕ ВИКТОРИНЫ
   ========================================================= */

$('#closeQuiz').addEventListener(
  'click',
  () => {

    quiz.close();

  }
);


/* =========================================================
   НАЗАД ИЗ ВИКТОРИНЫ
   ========================================================= */

quizBackBtn.addEventListener(
  'click',
  () => {

    quiz.close();

  }
);


/* =========================================================
   ПЕРЕЗАПУСК ИГРЫ
   ========================================================= */

$('#restartBtn').addEventListener(
  'click',
  () => {

    finish.close();


    /*
     * Сбрасываем выполненные точки.
     */

    completedPlaces.clear();


    /*
     * Сбрасываем выбранную точку.
     */

    selectedPlaceIndex =
      null;


    /*
     * Возвращаем начальную точку
     * в исходное состояние.
     */

    currentStartPoint = [
      START_POINT[0],
      START_POINT[1]
    ];


    currentStartName =
      'Начальная точка';


    /*
     * Удаляем текущий маршрут.
     */

    if (currentRoute) {

      map.removeLayer(
        currentRoute
      );

      currentRoute =
        null;

    }


    /*
     * Обновляем интерфейс.
     */

    updateProgress();

    refreshMarkers();


    /*
     * Показываем стартовую карточку.
     */

    placeCard.classList.add(
      'hidden'
    );

    introCard.classList.remove(
      'hidden'
    );


    resetMobileCard(
      introCard
    );


    /*
     * Возвращаем карту
     * к общему маршруту.
     */

    map.fitBounds(
      fallbackRoute.getBounds(),
      {
        padding:
          [70, 70]
      }
    );

  }
);


/* =========================================================
   ВКЛЮЧАЕМ МОБИЛЬНУЮ КАРТОЧКУ
   ========================================================= */

addMobileControls(
  introCard
);

addMobileControls(
  placeCard
);


/* =========================================================
   ВКЛЮЧАЕМ СВАЙП
   ========================================================= */

enableSwipe(
  introCard
);

enableSwipe(
  placeCard
);


/* =========================================================
   ПЕРВОНАЧАЛЬНОЕ СОСТОЯНИЕ
   ========================================================= */

updateProgress();

refreshMarkers();


/*
 * Показываем весь маршрут
 * при загрузке приложения.
 */

map.fitBounds(
  fallbackRoute.getBounds(),
  {
    padding:
      [70, 70]
  }
);


/*
 * Исправляем размер Leaflet
 * после первоначальной отрисовки.
 */

setTimeout(
  () => {

    map.invalidateSize();

  },
  300
);
