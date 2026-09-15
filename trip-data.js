window.TRIP_DATA = {
  booked: [
    ["16.9", "Klosterhof – Alpine Hideaway & Spa"],
    ["17.9", "Kempinski Hotel Berchtesgaden"],
    ["20–22.9", "TAUERN SPA Zell am See – Kaprun"]
  ],
  open: [
    ["18.9", "מלון באזור Wolfgangsee", "Отель в районе Wolfgangsee"],
    ["19.9", "לבדוק לילה נוסף ב־TAUERN SPA; אם אין, מלון ב־Kaprun", "Проверить дополнительную ночь в TAUERN SPA; если нет — отель в Kaprun"],
    ["22–24.9", "מלון Hallstatt / Obertraun", "Отель Hallstatt / Obertraun"],
    ["24.9", "מלון בווינה", "Отель в Вене"],
    ["25.9", "להזמין Sandbox VR בבוקר, עדיפות 10:00 / 10:40", "Забронировать Sandbox VR утром, лучше 10:00 / 10:40"]
  ],
  routeStops: ["Salzburg", "Berchtesgaden", "Fantasiana", "Wolfgangsee", "Kaprun", "Gosausee", "Hallstatt", "Vienna", "VIE"],
  days: [
    {
      iso:"2026-09-16", date:"16.9", wdHe:"רביעי", wdRu:"среда", badge:"booked", badgeHe:"✅ מלון סגור", badgeRu:"✅ Отель забронирован",
      titleHe:"נחיתה 08:00 → Klosterhof", titleRu:"Прилёт 08:00 → Klosterhof",
      summaryHe:"נוחתים מוקדם בזלצבורג, אוספים רכב ומתחילים בלי לחץ. מגיעים למלון, אוכלים, ספא ומנוחה. אם החדר עדיין לא מוכן ויש כוח, אפשר קפה והסתובבות קצרה ב־Bad Reichenhall.",
      summaryRu:"Рано прилетаем в Зальцбург, забираем машину и начинаем без спешки. Отель, еда, SPA и отдых. Если номер ещё не готов и есть силы, можно ненадолго заехать в Bad Reichenhall.",
      hotel:"Klosterhof – Alpine Hideaway & Spa", timingHe:"נחיתה 08:00 · יציאה מהשדה בערך 09:00–09:30", timingRu:"Прилёт 08:00 · выезд из аэропорта примерно 09:00–09:30", drive:"Salzburg Airport → Klosterhof", mainHe:"ספא, בריכה, ארוחת ערב ומנוחה", mainRu:"SPA, бассейн, ужин и отдых",
      route:{o:"Salzburg Airport",d:"Klosterhof Alpine Hideaway & Spa, Bayerisch Gmain"},
      notesHe:["באיסוף הרכב: לוודא בכתב שאפשר לעבור לגרמניה ושהכיסוי תקף.","לא קובעים אטרקציה עם שעה קשיחה ביום הנחיתה."],
      notesRu:["При получении машины: получить письменное подтверждение поездки в Германию и действия страхового покрытия.","В день прилёта ничего не бронируем на жёсткое время."],
      actions:[{t:"map",he:"☕ Bad Reichenhall — אופציונלי",ru:"☕ Bad Reichenhall — по желанию",q:"Bad Reichenhall Altstadt"}], recs:[]
    },
    {
      iso:"2026-09-17", date:"17.9", wdHe:"חמישי", wdRu:"четверг", badge:"booked", badgeHe:"✅ Kempinski סגור", badgeRu:"✅ Kempinski забронирован",
      titleHe:"מכרה המלח + Königssee", titleRu:"Соляная шахта + Königssee",
      summaryHe:"בוקר במכרה המלח, אחר כך שיט ב־Königssee, ובסוף יום רגוע ב־Kempinski.", summaryRu:"Утром соляная шахта, затем прогулка на кораблике по Königssee, а вечером спокойный отдых в Kempinski.",
      hotel:"Kempinski Hotel Berchtesgaden", timingHe:"יעד למכרה: סביב 09:00", timingRu:"Соляная шахта: около 09:00", drive:"Klosterhof → Salzbergwerk → Königssee → Kempinski", mainHe:"Salzbergwerk Berchtesgaden + Königssee", mainRu:"Salzbergwerk Berchtesgaden + Königssee",
      route:{o:"Klosterhof Alpine Hideaway & Spa, Bayerisch Gmain",d:"Kempinski Hotel Berchtesgaden",w:["Salzbergwerk Berchtesgaden","Königssee Seelände"]},
      notesHe:["את המכרה כדאי להזמין אחרי הנחיתה.","Königssee נשאר גמיש לפי מזג האוויר.","במכרה בערך 12°C — לקחת שכבה קלה."], notesRu:["Соляную шахту лучше забронировать после прилёта.","Königssee оставляем гибким по погоде.","В шахте около 12°C — взять лёгкий тёплый слой."],
      actions:[{t:"url",he:"🎟️ מכרה המלח",ru:"🎟️ Соляная шахта",url:"https://www.salzbergwerk.de/en/plan-a-visit"},{t:"map",he:"🅿️ Königssee",ru:"🅿️ Königssee",q:"Parkplatz Königssee Schönau am Königssee"}],
      recs:[
        {n:"Bauchgfui",i:"🍽️",he:"ארוחה קלילה ואיכותית",ru:"Вкусный лёгкий обед",dh:"מעולה לצהריים אם רוצים משהו טוב בלי ארוחה כבדה.",dr:"Хороший вариант на обед без тяжёлого ресторана.",q:"Bauchgfui Berchtesgaden"},
        {n:"zum Gatsby",i:"🍸",he:"בר",ru:"Бар",dh:"אופציה לדרינק בערב אם נשאר כוח אחרי Kempinski.",dr:"Вариант для коктейля вечером, если после Kempinski ещё будут силы.",q:"zum Gatsby Berchtesgaden"}
      ]
    },
    {
      iso:"2026-09-18", date:"18.9", wdHe:"שישי", wdRu:"пятница", badge:"open", badgeHe:"🟡 מלון פתוח", badgeRu:"🟡 Отель ещё не выбран",
      titleHe:"Fantasiana + Wolfgangsee", titleRu:"Fantasiana + Wolfgangsee",
      summaryHe:"פארק אחד לכל הטיול. מתקנים חזקים בשבילך, ומריה מקבלת פארק יפה, אווירה ודברים רגועים יותר. אחר הצהריים ממשיכים ל־Wolfgangsee.", summaryRu:"Один парк на всю поездку. Ноам получает более экстремальные аттракционы, Мария — красивый парк, атмосферу и спокойные развлечения. После обеда едем к Wolfgangsee.",
      hotel:"St. Wolfgang / Wolfgangsee", timingHe:"Fantasiana בערך 10:00–15:30", timingRu:"Fantasiana примерно 10:00–15:30", drive:"Berchtesgaden → Fantasiana → St. Wolfgang", mainHe:"Fantasiana + ערב על האגם", mainRu:"Fantasiana + вечер у озера",
      route:{o:"Kempinski Hotel Berchtesgaden",d:"St. Wolfgang im Salzkammergut",w:["FANTASIANA Erlebnispark Strasswalchen"]},
      notesHe:["לא חייבים להישאר עד הסגירה.","בערב: אגם, שקיעה, ארוחה טובה וצילום."], notesRu:["Не обязательно оставаться до закрытия.","Вечером: озеро, закат, хороший ужин и фотографии."],
      actions:[{t:"url",he:"🎢 Fantasiana",ru:"🎢 Fantasiana",url:"https://www.erlebnispark.at/"},{t:"map",he:"🅿️ חניה בפארק",ru:"🅿️ Парковка парка",q:"FANTASIANA Erlebnispark Parkplatz"}],
      recs:[
        {n:"PAUL der Wirt",i:"🍽️",he:"מסעדה ב־St. Wolfgang",ru:"Ресторан в St. Wolfgang",dh:"בחירה טובה ונוחה לערב ליד האגם.",dr:"Хороший и удобный вариант на вечер у озера.",q:"PAUL der Wirt St Wolfgang"},
        {n:"13er Haus",i:"🍸",he:"בר",ru:"Бар",dh:"אם בא לכם דרינק אחרי ארוחת הערב.",dr:"Если захочется выпить после ужина.",q:"13er Haus St Wolfgang"}
      ]
    },
    {
      iso:"2026-09-19", date:"19.9", wdHe:"שבת", wdRu:"суббота", badge:"open", badgeHe:"🟡 לינה טרם סגורה", badgeRu:"🟡 Ночёвка ещё не решена",
      titleHe:"SchafbergBahn → Kaprun", titleRu:"SchafbergBahn → Kaprun",
      summaryHe:"עולים בבוקר ברכבת ההרים ל־Schafberg, נהנים מהנוף וחוזרים לאגם. אחר כך נוסעים לקאפרון.", summaryRu:"Утром поднимаемся на Schafberg на зубчатом поезде, наслаждаемся видом и возвращаемся к озеру. Затем едем в Kaprun.",
      hotel:"TAUERN SPA אם מתפנה לילה 19→20 · אחרת מלון אחר ב־Kaprun", timingHe:"מומלץ: עלייה סביב 09:15", timingRu:"Рекомендуется подъём около 09:15", drive:"St. Wolfgang → Kaprun", mainHe:"SchafbergBahn + מעבר לקאפרון", mainRu:"SchafbergBahn + переезд в Kaprun",
      route:{o:"St. Wolfgang im Salzkammergut",d:"Kaprun, Austria",w:["SchafbergBahn St. Wolfgang"]},
      notesHe:["אחרי הנחיתה בודקים קודם אם התפנה לילה נוסף ב־TAUERN SPA.","אם מזג האוויר גרוע על ההר, לא נשרפים על כרטיסים סתם."], notesRu:["После прилёта сначала проверяем, освободилась ли дополнительная ночь в TAUERN SPA.","Если на горе плохая видимость, не тратим деньги на подъём зря."],
      actions:[{t:"url",he:"🚂 SchafbergBahn",ru:"🚂 SchafbergBahn",url:"https://www.5schaetze.at/en/schafbergbahn.html"},{t:"map",he:"🅿️ SchafbergBahn",ru:"🅿️ SchafbergBahn",q:"SchafbergBahn Parkplatz St Wolfgang"}], recs:[]
    },
    {
      iso:"2026-09-20", date:"20.9", wdHe:"ראשון", wdRu:"воскресенье", badge:"booked", badgeHe:"✅ TAUERN SPA סגור", badgeRu:"✅ TAUERN SPA забронирован",
      titleHe:"Kitzsteinhorn + Maisi Flitzer", titleRu:"Kitzsteinhorn + Maisi Flitzer",
      summaryHe:"TOP OF SALZBURG בגובה 3,029 מ׳. אחר כך יורדים ל־Maisi Flitzer — והפעם שניכם רוצים לעשות אותו 😄 — ובערב חוזרים לספא.", summaryRu:"TOP OF SALZBURG на высоте 3 029 м. Затем Maisi Flitzer — и на этот раз вы оба хотите прокатиться 😄 — после чего возвращаемся в SPA.",
      hotel:"TAUERN SPA Zell am See – Kaprun", timingHe:"לצאת בערך 08:30", timingRu:"Выезд примерно в 08:30", drive:"נסיעות קצרות בתוך Kaprun", mainHe:"Kitzsteinhorn + Alpine Coaster", mainRu:"Kitzsteinhorn + Alpine Coaster",
      route:{o:"TAUERN SPA Zell am See – Kaprun",d:"TAUERN SPA Zell am See – Kaprun",w:["Kitzsteinhorn Gletscherjet 1 Talstation","Maisi Flitzer Kaprun"]},
      notesHe:["לבדוק ראות ומצלמות ערב לפני.","שכבות: תרמי/ארוך, פליז, מעיל חם, שכבת רוח/גשם, כובע וכפפות דקות.","National Park Gallery אופציונלי."], notesRu:["Вечером проверить видимость и веб-камеры.","Слои: термо/длинный рукав, флис, тёплая куртка, защита от ветра/дождя, шапка и тонкие перчатки.","National Park Gallery — по желанию."],
      actions:[{t:"url",he:"🏔️ Kitzsteinhorn",ru:"🏔️ Kitzsteinhorn",url:"https://www.kitzsteinhorn.at/en/"},{t:"map",he:"🅿️ Gletscherjet",ru:"🅿️ Gletscherjet",q:"Gletscherjet 1 Talstation Parkplatz Kaprun"}],
      recs:[{n:"Hilberger's Beisl",i:"🍽️",he:"מסעדה ב־Kaprun",ru:"Ресторан в Kaprun",dh:"אוכל אוסטרי נעים אם לא אוכלים במלון.",dr:"Хороший вариант австрийской кухни, если не ужинаете в отеле.",q:"Hilberger's Beisl Kaprun"}]
    },
    {
      iso:"2026-09-21", date:"21.9", wdHe:"שני", wdRu:"понедельник", badge:"booked", badgeHe:"✅ TAUERN SPA סגור", badgeRu:"✅ TAUERN SPA забронирован",
      titleHe:"מאגרי Kaprun + ספא", titleRu:"Водохранилища Kaprun + SPA",
      summaryHe:"יום של מים, סכרים והרים ב־Mooserboden. הסיור בתוך הסכר הוא בונוס הנדסי בשבילך, אבל לא חובה למריה. אם נשאר כוח אפשר Sigmund-Thun-Klamm.", summaryRu:"День воды, плотин и гор в Mooserboden. Экскурсия внутри плотины — инженерный бонус для Ноама, но для Марии не обязательна. Если останутся силы — Sigmund-Thun-Klamm.",
      hotel:"TAUERN SPA Zell am See – Kaprun", timingHe:"יציאה 08:30–09:00", timingRu:"Выезд 08:30–09:00", drive:"TAUERN SPA → Kesselfall → TAUERN SPA", mainHe:"Kaprun High Mountain Reservoirs / Mooserboden", mainRu:"Kaprun High Mountain Reservoirs / Mooserboden",
      route:{o:"TAUERN SPA Zell am See – Kaprun",d:"TAUERN SPA Zell am See – Kaprun",w:["Kesselfall Alpenhaus, Kaprun","Sigmund-Thun-Klamm, Kaprun"]},
      notesHe:["Sigmund-Thun-Klamm רק אם באמת יש כוח.","אם עייפים — חוזרים לספא. לא ממלאים יום בכוח."], notesRu:["Sigmund-Thun-Klamm только если действительно будут силы.","Если устали — возвращаемся в SPA. Не перегружаем день ради галочки."],
      actions:[{t:"url",he:"💧 מאגרי Kaprun",ru:"💧 Водохранилища Kaprun",url:"https://visit.verbund.com/en/kaprun"},{t:"map",he:"🅿️ Kesselfall",ru:"🅿️ Kesselfall",q:"Kesselfall Alpenhaus Parkplatz Kaprun"}],
      recs:[
        {n:"Gastwirtschaft Tafern",i:"🍽️",he:"מסעדה ב־Kaprun",ru:"Ресторан в Kaprun",dh:"אופציה טובה לערב אם רוצים לצאת מהמלון.",dr:"Хороший вариант на вечер, если захочется выйти из отеля.",q:"Gastwirtschaft Tafern Kaprun"},
        {n:"Alpen Kaffee",i:"🍸",he:"בר / קפה",ru:"Бар / кафе",dh:"לדרינק או קפה בלי ארוחה כבדה.",dr:"Для напитка или кофе без большого ужина.",q:"Alpen Kaffee Kaprun"}
      ]
    },
    {
      iso:"2026-09-22", date:"22.9", wdHe:"שלישי", wdRu:"вторник", badge:"open", badgeHe:"🟡 מלון פתוח", badgeRu:"🟡 Отель ещё не выбран",
      titleHe:"Gosausee → Hallstatt", titleRu:"Gosausee → Hallstatt",
      summaryHe:"בוקר רגוע ב־TAUERN SPA ואז Gosausee: אגם, Dachstein, קפה וצילום בלי מסלול קשה. משם ממשיכים ל־Hallstatt / Obertraun.", summaryRu:"Спокойное утро в TAUERN SPA, затем Gosausee: озеро, Dachstein, кофе и фотографии без тяжёлого маршрута. После этого — Hallstatt / Obertraun.",
      hotel:"Hallstatt / Obertraun", timingHe:"בוקר רגוע אחרי ארוחת בוקר וספא", timingRu:"Спокойное утро после завтрака и SPA", drive:"Kaprun → Gosausee → Hallstatt", mainHe:"Gosausee + Hallstatt", mainRu:"Gosausee + Hallstatt",
      route:{o:"TAUERN SPA Zell am See – Kaprun",d:"Hallstatt, Austria",w:["Vorderer Gosausee, Gosau"]},
      notesHe:["מערות הקרח ירדו מהמסלול 😄","לא חייבים להקיף את כל האגם — נהנים בקצב שלנו."], notesRu:["Ледяные пещеры окончательно убраны из маршрута 😄","Не обязательно обходить всё озеро — отдыхаем в своём темпе."],
      actions:[{t:"map",he:"🅿️ Gosausee",ru:"🅿️ Gosausee",q:"Parkplatz Vorderer Gosausee"}],
      recs:[
        {n:"Seecafé Hallstatt",i:"☕",he:"קפה מול האגם",ru:"Кафе у озера",dh:"פשוט, יפה ונוח לקפה או משהו מתוק מול המים.",dr:"Простой и красивый вариант для кофе и десерта у воды.",q:"Seecafé Hallstatt"},
        {n:"Bräugasthof Hallstatt",i:"🍽️",he:"מסעדה",ru:"Ресторан",dh:"אוכל אוסטרי במיקום נוח בתוך Hallstatt.",dr:"Австрийская кухня в удобном месте в Hallstatt.",q:"Bräugasthof Hallstatt"}
      ]
    },
    {
      iso:"2026-09-23", date:"23.9", wdHe:"רביעי", wdRu:"среда", badge:"weather", badgeHe:"🌦️ תלוי ראות", badgeRu:"🌦️ Зависит от видимости",
      titleHe:"Krippenstein + 5fingers", titleRu:"Krippenstein + 5fingers",
      summaryHe:"עולים מוקדם ל־Krippenstein, תצפיות ו־5fingers. מריה לא חייבת לעלות על הפלטפורמות שמרגישות לה גבוהות מדי. אחר הצהריים חוזרים ל־Hallstatt.", summaryRu:"Рано поднимаемся на Krippenstein: смотровые площадки и 5fingers. Марии не обязательно выходить на платформы, если высота ей не понравится. После обеда возвращаемся в Hallstatt.",
      hotel:"Hallstatt / Obertraun", timingHe:"מומלץ להגיע לרכבל מוקדם", timingRu:"Лучше приехать к канатной дороге рано", drive:"Hallstatt / Obertraun → Krippenstein → Hallstatt", mainHe:"Dachstein Krippenstein + 5fingers", mainRu:"Dachstein Krippenstein + 5fingers",
      route:{o:"Hallstatt, Austria",d:"Hallstatt, Austria",w:["Dachstein Krippenstein Seilbahn, Obertraun"]},
      notesHe:["אם הכול בעננים — לא עולים רק כי זה כתוב בתוכנית.","בלי מערת קרח. נשארים בחוץ, בנוף."], notesRu:["Если всё в облаках — не поднимаемся только потому, что так написано в плане.","Без ледяных пещер. Остаёмся снаружи и наслаждаемся видами."],
      actions:[{t:"url",he:"🚠 Krippenstein",ru:"🚠 Krippenstein",url:"https://www.dachstein-salzkammergut.com/en/"},{t:"map",he:"🅿️ תחנת הרכבל",ru:"🅿️ Канатная дорога",q:"Dachstein Krippenstein Seilbahn Parkplatz Obertraun"}],
      recs:[{n:"The Wolf Cafe Bistro Bar",i:"☕",he:"קפה / בר קטן",ru:"Кафе / небольшой бар",dh:"אופציה קלילה אם לא מתחשק ערב מסעדה מלא.",dr:"Лёгкий вариант, если не хочется полноценного ужина.",q:"The Wolf Cafe Bistro Bar Hallstatt"}]
    },
    {
      iso:"2026-09-24", date:"24.9", wdHe:"חמישי", wdRu:"четверг", badge:"open", badgeHe:"🟡 מלון וינה פתוח", badgeRu:"🟡 Отель в Вене ещё не выбран",
      titleHe:"Hallstatt → Vienna · Madame Tussauds + Prater", titleRu:"Hallstatt → Vienna · Madame Tussauds + Prater",
      summaryHe:"אין עצירת ביניים מתוכננת. אחרי שבוע של אגמים והרים נוסעים ישר לווינה: עיר, צילום, Madame Tussauds, Prater, אוכל ואווירת ערב.", summaryRu:"Запланированных остановок по дороге нет. После недели озёр и гор едем прямо в Вену: город, фотографии, Madame Tussauds, Prater, еда и вечерняя атмосфера.",
      hotel:"Vienna", timingHe:"יציאה מומלצת מ־Hallstatt סביב 08:30–09:00", timingRu:"Рекомендуемый выезд из Hallstatt около 08:30–09:00", drive:"Hallstatt → Vienna ישירות · בערך 3:10 שעות נטו", mainHe:"Madame Tussauds + Prater + ערב בווינה", mainRu:"Madame Tussauds + Prater + вечер в Вене",
      route:{o:"Hallstatt, Austria",d:"Vienna, Austria"},
      notesHe:["Madame Tussauds נמצא בתוך אזור Prater — מתחבר טבעי.","Prater לא צריך לסיים. מסתובבים ועושים רק מה שמושך אתכם.","בונוס אם מגיעים מוקדם ויש כוח: Time Travel Vienna עם אודיו ברוסית. הראשון שיורד אם היום מתעכב."], notesRu:["Madame Tussauds находится прямо в районе Prater — удобно объединить.","Prater не нужно проходить весь. Выбираем только то, что понравится.","Бонус, если приедете рано: Time Travel Vienna с русским аудио. Это первое, что убираем, если день задерживается."],
      actions:[
        {t:"url",he:"📸 Madame Tussauds",ru:"📸 Madame Tussauds",url:"https://www.madametussauds.com/wien/en/"},
        {t:"url",he:"🎡 Prater",ru:"🎡 Prater",url:"https://www.praterwien.com/en/home"},
        {t:"map",he:"🅿️ Prater",ru:"🅿️ Prater",q:"Parkhaus Prater Wien"},
        {t:"url",he:"🎬 Time Travel — אופציונלי",ru:"🎬 Time Travel — по желанию",url:"https://www.timetravel-vienna.at/en/"}
      ],
      recs:[
        {n:"Schweizerhaus",i:"🍽️",he:"אוכל בתוך Prater",ru:"Ресторан в Prater",dh:"מקום אייקוני ונוח אם רוצים להישאר בתוך האווירה של Prater.",dr:"Знаковое место прямо в Prater — удобно не выходить из атмосферы парка.",q:"Schweizerhaus Wien Prater"},
        {n:"Plachutta Wollzeile",i:"🍽️",he:"ארוחת ערב וינאית",ru:"Венский ужин",dh:"בחירה טובה אם רוצים ארוחה וינאית קלאסית ומושקעת יותר.",dr:"Хороший выбор для более классического венского ужина.",q:"Plachutta Wollzeile Vienna"},
        {n:"Das LOFT",i:"🌃",he:"רופטופ בר",ru:"Rooftop-бар",dh:"לסיים את הערב עם דרינק ונוף אמיתי על וינה.",dr:"Закончить вечер напитком и красивым видом на Вену.",q:"Das LOFT Vienna"},
        {n:"Graben + Kärntner Straße",i:"🛍️",he:"שיטוט + חנויות",ru:"Прогулка + магазины",dh:"רחובות יפים, צילום וקצת חנויות בלי להפוך את היום ליום קניות.",dr:"Красивые улицы, фото и немного магазинов без отдельного дня шопинга.",q:"Graben Vienna"}
      ]
    },
    {
      iso:"2026-09-25", date:"25.9", wdHe:"שישי", wdRu:"пятница", badge:"flight", badgeHe:"✈️ טיסה 18:30", badgeRu:"✈️ Вылет 18:30",
      titleHe:"Sandbox VR → שדה התעופה · טיסה 18:30", titleRu:"Sandbox VR → аэропорт · вылет 18:30",
      summaryHe:"יום טיסה פשוט בכוונה: ארוחת בוקר, Stranger Things ב־Sandbox VR, ארוחה קלה ואז לשדה בלי להעמיס שום אטרקציה נוספת.", summaryRu:"День вылета специально простой: завтрак, Stranger Things в Sandbox VR, лёгкий обед и затем аэропорт без дополнительных аттракционов.",
      hotel:"יציאה מהמלון בווינה", timingHe:"Sandbox בבוקר — עדיפות ל־10:00 או 10:40", timingRu:"Sandbox утром — лучше 10:00 или 10:40", drive:"Vienna → Sandbox VR Columbus → Vienna Airport", mainHe:"Stranger Things: Catalyst + טיסה הביתה", mainRu:"Stranger Things: Catalyst + вылет домой",
      route:{o:"Sandbox VR Vienna Columbus",d:"Vienna International Airport"},
      notesHe:["Sandbox הוא הדבר היחיד עם שעה קשיחה ביום הזה.","להקדיש בערך שעה כולל הגעה, צ׳ק־אין והחוויה.","להתחיל להתקדם לשדה בערך 14:15–14:30 כדי להשאיר זמן להחזרת הרכב.","Sandbox נמצא ב־Columbus Center / Columbusplatz."], notesRu:["Sandbox — единственное мероприятие дня с фиксированным временем.","Заложить примерно час на прибытие, check-in и саму игру.","Начать ехать в аэропорт примерно в 14:15–14:30, чтобы спокойно вернуть машину.","Sandbox находится в Columbus Center / Columbusplatz."],
      actions:[
        {t:"url",he:"🥽 Sandbox VR",ru:"🥽 Sandbox VR",url:"https://sandboxvr.com/at/vienna/columbus"},
        {t:"url",he:"🎟️ הזמנה Stranger Things",ru:"🎟️ Бронирование Stranger Things",url:"https://sandboxvr.com/at/vienna/columbus/booking/experiences"},
        {t:"map",he:"🅿️ Columbus Center",ru:"🅿️ Columbus Center",q:"Columbus Center Garage Wien"},
        {t:"map",he:"🚗 החזרת רכב VIE",ru:"🚗 Возврат авто VIE",q:"Vienna Airport Car Rental Return"}
      ],
      recs:[{n:"Columbus Center",i:"☕",he:"קפה / אוכל לפני היציאה",ru:"Кофе / еда перед выездом",dh:"לא יעד בפני עצמו. פשוט נוח לאכול משהו ליד Sandbox ואז לצאת לשדה.",dr:"Не отдельная достопримечательность. Просто удобно поесть рядом с Sandbox перед аэропортом.",q:"Columbus Center Wien"}]
    }
  ]
};