//! states
let users = [
  {
    id: 101,
    firstName: "علیرضا",
    lastName: "محمدی کردخیلی",
    image: "images/profile-0.jpg",
    job: "توسعه دهنده وب",
    following: 272,
    follower: 2000,
    projects: 9,
    salary: 120000000,
    workHours: 49,
  },
  {
    id: 102,
    firstName: "نوید",
    lastName: "نیکنام",
    image: "images/profile-1.jpg",
    job: "برنامه‌نویس ارشد بک‌اند",
    following: 272,
    follower: 1200,
    projects: 60,
    salary: 170000000,
    workHours: 50,
  },
  {
    id: 103,
    firstName: "روژین",
    lastName: "کریمی",
    image: "images/profile-8w.jpg",
    job: "برنامه‌نویس وب",
    following: 50,
    follower: 350,
    projects: 55,
    salary: 220000000,
    workHours: 42,
  },
  {
    id: 104,
    firstName: "نازلی",
    lastName: "موسوی",
    image: "images/profile-5w.jpg",
    job: "مهندس نرم افزار",
    following: 1002,
    follower: 20,
    projects: 9,
    salary: 120000000,
    workHours: 49,
  },
  {
    id: 105,
    firstName: "هادی",
    lastName: "کریمی",
    image: "images/profile-4.jpg",
    job: "کارشناس سئو",
    following: 2720,
    follower: 7050,
    projects: 0,
    salary: 185000000,
    workHours: 49,
  },
  {
    id: 106,
    firstName: "پوریا",
    lastName: "براتیان",
    image: "images/profile-3.jpg",
    job: "کارشناس تولید محتوا",
    following: 9872,
    follower: 101,
    projects: 1,
    salary: 280000000,
    workHours: 56,
  },
  {
    id: 107,
    firstName: "ایمان",
    lastName: "جلیلی",
    image: "images/profile-6.jpg",
    job: "گرافیست",
    following: 65,
    follower: 2000,
    projects: 89,
    salary: 155000000,
    workHours: 30,
  },
  {
    id: 108,
    firstName: "پارسا",
    lastName: "سلمانیان",
    image: "images/profile-7.jpg",
    job: "عکاسی و تولید محتوا",
    following: 21,
    follower: 2000,
    projects: 20,
    salary: 81000000,
    workHours: 55,
  },
  {
    id: 109,
    firstName: "سهیل",
    lastName: "نعمتی",
    image: "images/profile-2.jpg",
    job: "سرپرست فروش",
    following: 50,
    follower: 2000,
    projects: 89,
    salary: 90000000,
    workHours: 44,
  },
  {
    id: 110,
    firstName: "مریم",
    lastName: "علوی",
    image: "images/profile-9w.jpg",
    job: "تصویر بردار و تدوین‌گر",
    following: 272,
    follower: 2000,
    projects: 50,
    salary: 450000000,
    workHours: 46,
  },
  {
    id: 111,
    firstName: "علی",
    lastName: "سلطانیان",
    image: "images/profile-10.jpg",
    job: "مدیر خلاقیت",
    following: 272,
    follower: 2000,
    projects: 32,
    salary: 340000000,
    workHours: 54,
  },
];
let topUsers = {
  bySalary: -1,
  byProjects: -1,
};
let gradients = [
  "from-red-500 to-orange-500",
  "from-orange-500 to-amber-500",
  "from-amber-500 to-yellow-500",
  "from-yellow-500 to-lime-500",
  "from-lime-500 to-green-500",
  "from-green-500 to-emerald-500",
  "from-emerald-500 to-teal-500",
  "from-teal-500 to-cyan-500",
  "from-cyan-500 to-sky-500",
  "from-sky-500 to-blue-500",
  "from-blue-500 to-indigo-500",
  "from-indigo-500 to-violet-500",
  "from-violet-500 to-purple-500",
  "from-purple-500 to-fuchsia-500",
  "from-fuchsia-500 to-pink-500",
  "from-pink-500 to-rose-500",
];

//! ELEMENTS
const userGridEl = document.querySelector(".user-grid");

//! USER GRID
const usersHTML = users.forEach(function (user) {
  const userHTML = `
      <div
        class="user-card w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center p-2"
      >
        <div class="user-card__inner border rounded-lg overflow-hidden">
          <div
            class="user-card__head from-emerald-500 to-teal-500 flex flex-wrap items-start justify-end gap-2 p-2 relative -z-10 bg-gradient-to-r w-full h-20"
          >
            <span
              class="dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              بیشترین حقوق </span
            ><span
              class="dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              بیشترین تعداد پروژه
            </span>
          </div>
          <div
            class="user-card__body flex flex-col items-center p-4 border-t"
          >
            <div
              class="user-card__image rounded-full overflow-hidden w-20 -mt-14 border-2 border-white"
            >
              <img class="w-100" src="${user.image}" />
            </div>
            <div class="user-card__user font-bold mt-2">
              ${user.firstName} ${user.lastName}
            </div>
            <div class="user-card__job"></div>
          </div>
          <div class="user-card__footer flex py-2 border-t">
            <div class="user-card__projects basis-1/3 border-l">
              <div>${user.following}</div>
              <div>Following</div>
            </div>
            <div class="user-card__follower basis-1/3 border-l">
              <div>${user.follower}</div>
              <div>Follower</div>
            </div>
            <div class="user-card__following basis-1/3">
              <div>${user.projects}</div>
              <div>Projects</div>
            </div>
          </div>
        </div>
      </div>
    `;
  userGridEl.insertAdjacentHTML("beforeend", userHTML);
});
