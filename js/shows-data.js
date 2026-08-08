// ── נתוני התוכניות ───────────────────────────────────────────────────────
// ערכו את הרשימה הזו כדי להוסיף / להסיר / לעדכן תוכניות. כל תוכנית היא אובייקט אחד.
//
// audio:  שם קובץ בלבד, חייב להיות בתיקייה assets/audio/  (השאירו "" אם עדיין אין)
// link:   קישור חיצוני להאזנה (ספוטיפיי, hearthis.at וכו'). אם יש גם audio וגם
//         link, מוצג הנגן המקומי. אחרת, אם יש link, מוצג כפתור "האזינו".
// cover:  שם קובץ בלבד, חייב להיות בתיקייה assets/images/ (השאירו "" לתמונה אוטומטית)
// tags:   רשימת תגיות קצרה (ז'אנר/נושא), מוצגת ככפתורים על הכרטיס
//
// זהו קובץ נתונים פשוט (ללא צורך בבנייה) כדי שיהיה קל לערוך בלי לגעת בקוד אחר.

const SHOWS = [
  {
    title: "#התחלנו עם מאיה בצלאל עסיס וקותי סבג",
    station: "כאן ג'",
    duration: "",
    tags: ["תרבות", "אקטואליה", "פנאי"],
    description:
      "בכל תוכנית ישוחחו מאיה וקותי עם האנשים הכי מסקרנים ומפתיעים שעל סדר היום, יקשיבו לסיפורים של המאזינים, יתנו הצצה לחייהם האישיים.",
    audio: "",
    link: "https://www.kan.org.il/content/kan/kan-gimel/p-765064/",
    cover: "begin.jpeg",
  },
  {
    title: "חצי קילו גלידה",
    station: "רדיו BGU",
    duration: "",
    tags: ["מוזיקה", "חי"],
    description: "תוכנית שצוללת לעומק ומסעירה את פני השטח.",
    audio: "",
    link: "https://hearthis.at/bgu-radio/set/halfaklooficecream/",
    cover: "ice.jpeg",
  },
  {
    title: "סטודנט יקר",
    station: "רדיו BGU",
    duration: "",
    tags: ["כלכלי", "מגזין"],
    description: "מדריך כלכלי לסטודנטים ולצעירים בתחילת הדרך הפיננסית שלהם.",
    audio: "",
    link: "https://open.spotify.com/show/6dcpHJWuDFZLlznmfqrUeC?si=e68c77bbf0cb428f",
    cover: "expansive student.jpeg",
  },
  {
    title: "חלונות",
    station: "רדיו BGU",
    duration: "",
    tags: ["תיעודי אישי", "הנצחה"],
    description:
      'הפודקאסט מביא את סיפורם של כותבי הספר "אינני באף מקום אחר", בעקבות אירועי השבעה באוקטובר.',
    audio: "",
    link: "https://open.spotify.com/show/6NiVFJcEJEnosKEnAGCmre?si=903fcae3adfa48fc",
    cover: "windos.jpeg",
  },
  {
    title: "הנצחה בנעלי בית",
    station: "המחלקה לספרות עברית, אוניברסיטת בן גוריון",
    duration: "",
    tags: ["תיעודי אישי", "הנצחה"],
    description:
      "סיפורם האישי של החללים, סיפורים קטנים שיגרתיים וביתיים שמנציחים אותם כפי שהיו.",
    audio: "",
    link: "https://lp.vp4.me/1scg",
    cover: "homeshoes.jpeg",
  },
];
