import logo from "../assets/public/logo.png";
import bgImg from "../assets/public/bg.png";
import { Link } from "react-router-dom";
const tours = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    title: "Морская прогулка",
    description:
      "Насладитесь кристально чистой водой, красивыми пейзажами и свежим морским воздухом.",
    price: "1 618 ₽",
    duration: "2,5 часа",
  },
   {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    title: "Морская прогулка",
    description:
      "Насладитесь кристально чистой водой, красивыми пейзажами и свежим морским воздухом.",
    price: "1 618 ₽",
    duration: "2,5 часа",
  },
];
export default function Tours() {
  return (
    <>
    <main className="w-full min-h-screen relative flex-col">
      <header className="absolute top-0 left-0 w-full px-[5%] lg:px-[10%] py-5 flex items-center justify-between z-50">
        <div className="w-[38px] h-[38px] md:w-[45px] md:h-[45px]">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link
            to="/"
            className="text-white text-[15px] lg:text-[17px] font-medium hover:text-[#FFC700] duration-300"
          >
            Главная
          </Link>

          <Link
            to="/tours"
            className="text-white text-[15px] lg:text-[17px] font-medium hover:text-[#FFC700] duration-300"
          >
            Экскурсии
          </Link>

          <Link
            to="/profile"
            className="text-white text-[15px] lg:text-[17px] font-medium hover:text-[#FFC700] duration-300"
          >
            Личный кабинет
          </Link>
        </nav>
      </header>

      <section className="w-full h-screen flex flex-col bg-amber-600">
        {/* Левая сторона */}
       <div
  className="w-full h-[100%] bg-cover bg-center bg-no-repeat flex items-center justify-start px-[10%] "
  style={{ backgroundImage: `url(${bgImg})` }}
>
<h1 className="text-6xl text-white text-start ">Наши Экскурсии</h1>

</div>

        {/* Правая сторона */}
        <div className="w-full  h-full flex items-center  justify-center bg-gray-100">
          <div className="w-[80%] h-[90%] bg-white rounded-[30px] flex flex-col items-center justify-center gap-3">
            <h1 className="text-4xl text-blue-500">Инфо о вас</h1>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <input
  type="text"
  placeholder="Введите текст..."
  className="
    w-full
    px-4
    py-3
    rounded-xl
    border
    border-blue-200
    bg-white
    text-gray-800
    placeholder:text-gray-400
    outline-none
    transition-all
    duration-300
    focus:border-blue-500
    focus:ring-4
    focus:ring-blue-100
    shadow-sm
  "
/><input
  type="text"
  placeholder="Введите текст..."
  className="
    w-full
    px-4
    py-3
    rounded-xl
    border
    border-blue-200
    bg-white
    text-gray-800
    placeholder:text-gray-400
    outline-none
    transition-all
    duration-300
    focus:border-blue-500
    focus:ring-4
    focus:ring-blue-100
    shadow-sm
  "
/><input
  type="text"
  placeholder="Введите текст..."
  className="
    w-full
    px-4
    py-3
    rounded-xl
    border
    border-blue-200
    bg-white
    text-gray-800
    placeholder:text-gray-400
    outline-none
    transition-all
    duration-300
    focus:border-blue-500
    focus:ring-4
    focus:ring-blue-100
    shadow-sm
  "
/>
              </div>
<button
  className="
    px-8
    py-3
    rounded-xl
    bg-[#0C91FE]
    text-white
    font-semibold
    shadow-md
    shadow-blue-500/20
    transition-all
    duration-300
    hover:bg-[#0077E6]
    hover:shadow-lg
    hover:shadow-blue-500/30
    active:scale-95
  "
>
  Зафиксировать
</button>            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%] h-screen bg-gray-100 flex flex-col gap-5 px-[10%] py-5">
       <h1 className="text-5xl text-blue-600  ">Виды экскурсий</h1>
       <div className="flex flex-col gap-8">
  {tours.map((item) => (
  <div
    key={item.id}
    className="w-full bg-white rounded-2xl overflow-hidden flex"
  >
    <div
      className="w-[220px] h-[220px] bg-cover bg-center"
      style={{ backgroundImage: `url(${item.image})` }}
    />

    <div className="flex-1 p-5">
      <h2 className="text-2xl font-bold">{item.title}</h2>

      <div className="flex gap-4 mt-3 text-blue-500 font-bold">
        <span>{item.price}</span>
        <span>{item.duration}</span>
      </div>

      <p className="mt-3 text-gray-600 text-sm">
        {item.description}
      </p>

      <Link to="/cabinet" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
        Подробнее
      </Link>
    </div>
  </div>
))}
</div>
      </section>

      
    </main>
      <footer className="bg-white py-10 px-6 border-t border-gray-100 font-sans ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* 1. Логотип (Воздушный шар) */}
        <div className="shrink-0">
          <img 
            src="/logo.png" 
            alt="PeroTravel" 
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* 2. Навигация */}
        <div className="flex flex-col space-y-2 text-[15px] text-gray-700">
          <a href="/" className="hover:text-orange-500 transition-colors">Главная</a>
          <a href="/excursions" className="hover:text-orange-500 transition-colors">Экскурсии</a>
          <a href="/profile" className="hover:text-orange-500 transition-colors">Личный кабинет</a>
        </div>

        {/* 3. Контакты (Телефоны и Телеграм) */}
        <div className="flex flex-col space-y-3 text-[15px] text-gray-800">
          <div className="flex items-center gap-2">
            {/* WhatsApp/Phone Icon */}
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <a href="tel:+79649441874" className="hover:text-orange-500">+7 964 944 18 74</a>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <a href="tel:+79189199828" className="hover:text-orange-500">+7 918 919 98 28</a>
          </div>

          <div className="flex items-center gap-2 font-medium">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.53.26l.204-2.894 5.273-4.76c.23-.204-.05-.316-.354-.113L6.5 12.91l-2.8-.874c-.61-.19-.62-.61.126-.9l10.96-4.225c.508-.19.953.11.708 1.31z"/>
            </svg>
            <span>Телеграм-бот PeroTravel</span>
          </div>
        </div>

        {/* 4. Почта и Соцсети */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2 text-[15px]">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <a href="mailto:office@perotravel.ru" className="hover:underline">office@perotravel.ru</a>
          </div>

          <div className="flex items-center gap-4">
            {/* VK (Красный акцент из макета) */}
            <a href="#" className="text-[#c13535] hover:opacity-75">
              <span className="font-bold text-xl">VK</span>
            </a>
            {/* Instagram-style (Желто-оранжевый) */}
            <a href="#" className="text-orange-400 hover:opacity-75 text-xl">
              <i className="inline-block border-2 border-current rounded-md w-6 h-6 leading-none text-center">●</i>
            </a>
            {/* Facebook-style (Голубой) */}
            <a href="#" className="text-cyan-400 hover:opacity-75">
              <span className="font-bold text-xl text-cyan-400">f</span>
            </a>
          </div>
        </div>

      </div>
    </footer>

    </>


  );
}




// <div className="flex flex-col gap-8">
//   {tours.map((item) => (
//     <div
//       key={item.id}
//       className="w-full bg-white rounded-2xl overflow-hidden flex"
//     >
//       <div
//         className="w-[300px] h-[300px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${item.image})` }}
//       />

//       <div className="flex-1 p-8">
//         <h2 className="text-3xl font-bold">{item.title}</h2>

//         <div className="flex gap-6 mt-4 text-blue-500 font-bold">
//           <span>{item.price}</span>
//           <span>{item.duration}</span>
//         </div>

//         <p className="mt-4 text-gray-600">
//           {item.description}
//         </p>

//         <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-full">
//           Подробнее
//         </button>
//       </div>
//     </div>
//   ))}
// </div>