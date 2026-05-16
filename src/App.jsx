import bgImg from '../public/bg.png'
import './App.css'
import logo from '../public/logo.png'
import tourBg from './assets/tourBg.jpg'
import tourBg2 from './assets/tourBg2.jpg'
import tourBg3 from './assets/tourBg3.jpg'
import bgImg2 from '../public/bg2.jpg'
import bgImg3 from '../public/bg3.png'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
function App() {
   const images = [
  "https://pero-travel.netlify.app/img/1.png",
  "https://pero-travel.netlify.app/img/2.png",
  "https://pero-travel.netlify.app/img/3.png",
  "https://pero-travel.netlify.app/img/4.png",
  "https://pero-travel.netlify.app/img/5.png",
  "https://pero-travel.netlify.app/img/6.png",
  "https://pero-travel.netlify.app/img/7.png",
  "https://pero-travel.netlify.app/img/8.png",
]

const reviews = [
  {
    name: "Алина",
    role: "Турист",
    text: "Очень понравилась экскурсия! Всё было организовано на высшем уровне, гид очень интересно рассказывал."
  },
  {
    name: "Руслан",
    role: "Путешественник",
    text: "Красивые места, отличная атмосфера и комфортный транспорт. Обязательно поеду ещё раз!"
  },
  {
    name: "Диана",
    role: "Блогер",
    text: "Это было невероятно! Фото получились просто топ, маршрут идеально продуман."
  }
];
   const scrollRef = useRef(null);
const itemStyle ="relative overflow-hidden rounded-2xl shadow-lg group"
    const tours = [tourBg3, tourBg2, tourBg];
  const loopTours = [...tours, ...tours, ...tours];
   useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const oneSetWidth = el.scrollWidth / 3;
    el.scrollLeft = oneSetWidth;

    const handleScroll = () => {
      if (el.scrollLeft <= 50) {
        el.scrollLeft = oneSetWidth;
      }

      if (el.scrollLeft >= oneSetWidth * 2) {
        el.scrollLeft = oneSetWidth;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);
   const scrollRef2 = useRef(null);

  const loopTours2 = [...reviews, ...reviews, ...reviews];
   useEffect(() => {
    const el = scrollRef2.current;
    if (!el) return;

    const oneSetWidth = el.scrollWidth / 3;
    el.scrollLeft = oneSetWidth;

    const handleScroll = () => {
      if (el.scrollLeft <= 50) {
        el.scrollLeft = oneSetWidth;
      }

      if (el.scrollLeft >= oneSetWidth * 2) {
        el.scrollLeft = oneSetWidth;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <header className="absolute top-0 left-0 w-full px-[5%] lg:px-[10%] py-5 flex items-center justify-between z-50">
          <div className="w-[38px] h-[38px] md:w-[45px] md:h-[45px]">
            <img src={logo} alt="logo" className="w-full h-full object-contain" />
          </div>

         <nav className="hidden md:flex items-center gap-6 lg:gap-10">
     <Link to="/" className="text-white text-[15px] lg:text-[17px] font-medium hover:text-[#FFC700] duration-300">
       Главная
     </Link>
     <Link to="/tours" className="text-white text-[15px] lg:text-[17px] font-medium hover:text-[#FFC700] duration-300">
       Экскурсии
     </Link>
     <Link to="/profile" className="text-white text-[15px] lg:text-[17px] font-medium hover:text-[#FFC700] duration-300">
       Личный кабинет
     </Link>
   </nav>
        </header>

        <section className="w-full min-h-screen flex flex-col justify-center px-[5%] lg:px-[10%]">
          <h1 className="text-white text-[42px] sm:text-[60px] md:text-[80px] xl:text-[110px] 2xl:text-[130px] leading-tight font-bold">
            ПУТЕШЕСТВУЙ <br /> PERO TRAVEL
          </h1>

          <button className="mt-6 text-white w-[180px] sm:w-[210px] md:w-[230px] h-[45px] md:h-[50px] bg-[#0499DD] rounded-full text-[16px] md:text-[20px] cursor-pointer">
            К экскурсиям
          </button>
        </section>
      </main>
 <section className="w-full py-20 flex flex-col items-center overflow-hidden">
      <div className="w-full px-[5%] lg:px-[10%] flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0499DD]">
          Популярные Экскурсии
        </h1>

        <button className="text-black underline cursor-pointer font-medium">
          смотреть все
        </button>
      </div>

      <div
        ref={scrollRef}
        className="w-full overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-5 px-[5%] min-w-max">
          {loopTours.map((img, i) => (
            <div
              key={i}
              className="w-[280px] sm:w-[320px] md:w-[360px] h-[500px] rounded-[10px] bg-cover bg-center flex flex-col justify-end px-[16px] py-8 text-white shrink-0"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div>
                <p>Автобусный Тур</p>
                <p className="text-yellow-300 font-bold">
                  Обзорная по Сочи (из Адлера)
                </p>
              </div>

              <p className="font-light py-4">
                Приглашаем вас на экскурсию "Обзорная по Большому Сочи":
                Экскурсия начнется с подъёма на гору Большой Ахун...
              </p>

              <button className="text-white w-[160px] h-[40px] bg-[#0499DD] rounded-full text-[15px] cursor-pointer">
                Подробнее
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-20 px-4"
        style={{ backgroundImage: `url(${bgImg2})` }}
      >
        <div className="w-full sm:w-[90%] md:w-[650px] min-h-[420px] bg-white rounded-[10px] flex flex-col justify-center px-[6%] py-10 gap-5">
          <h1 className="text-[#0499DD] font-bold text-[28px] md:text-[32px]">О нас</h1>

          <p className="text-[15px] md:text-[17px] leading-7">
            PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p className="text-[15px] md:text-[17px] leading-7">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </section>

      <section className="w-full py-20 flex flex-col items-center px-[5%]">
        <div className="mb-14">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0499DD] text-center">
            Виды экскурсий
          </h1>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 justify-center">
          <div className="flex flex-col gap-10">
            <div className="w-full xl:w-[500px]">
              <h2 className="text-[#0499DD] font-bold text-[18px] mb-3">Джиппинг</h2>
              <p className="text-[15px] md:text-[16px] leading-7">
                Это путешествие на автомобилях высокой проходимости с преодолением естественных препятствий.
              </p>
            </div>

            <div className="w-full xl:w-[500px]">
              <h2 className="text-[#0499DD] font-bold text-[18px] mb-3">Джиппинг</h2>
              <p className="text-[15px] md:text-[16px] leading-7">
                Это путешествие на автомобилях высокой проходимости с преодолением естественных препятствий.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="w-full xl:w-[500px]">
              <h2 className="text-[#0499DD] font-bold text-[18px] mb-3">Джиппинг</h2>
              <p className="text-[15px] md:text-[16px] leading-7">
                Это путешествие на автомобилях высокой проходимости с преодолением естественных препятствий.
              </p>
            </div>

            <div className="w-full xl:w-[500px]">
              <h2 className="text-[#0499DD] font-bold text-[18px] mb-3">Джиппинг</h2>
              <p className="text-[15px] md:text-[16px] leading-7">
                Это путешествие на автомобилях высокой проходимости с преодолением естественных препятствий.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-16 text-center">
          <p className="text-[15px] md:text-[17px] leading-7">
            Выбирайте на нашем сайте экскурсию, которая подходит именно вам <br className="hidden md:block" />
            и записывайтесь онлайн без очередей, просто и быстро!
          </p>

          <button className="bg-[#0499DD] w-[200px] md:w-[230px] h-[45px] md:h-[50px] text-white rounded-full cursor-pointer">
            К экскурсиям
          </button>
        </div>
      </section>


      <section>

    <div className="w-full px-[5%] lg:px-[10%] flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0499DD]">
          Популярные Экскурсии
        </h1>

        <button className="text-black underline cursor-pointer font-medium">
          смотреть все
        </button>
      </div>
    
         <div className="w-[80%] mx-auto p-4 pb-20">
      <div className="grid grid-cols-5 grid-rows-2 gap-4 h-[600px]">
        <div className={`${itemStyle} col-span-2 row-span-1`}>
          <img src={images[0]} className="w-full h-full object-cover group-hover:scale-105 transition" />
        </div>
        <div className={`${itemStyle} col-start-3 row-span-2`}>
          <img src={images[1]} className="w-full h-full object-cover group-hover:scale-105 transition" />
        </div>
        <div className={`${itemStyle} col-start-4 row-span-1`}>
          <img src={images[2]} className="w-full h-full object-cover group-hover:scale-105 transition" />
        </div>
        <div className={`${itemStyle} col-start-5 row-span-1`}>
          <img src={images[3]} className="w-full h-full object-cover group-hover:scale-105 transition" />
        </div>
        <div className={`${itemStyle} col-start-1 row-span-1`}>
          <img src={images[4]} className="w-full h-full object-cover group-hover:scale-105 transition" />
        </div>
        <div className="col-start-2 row-span-1 flex flex-col gap-4">
          <div className={`${itemStyle} flex-1`}>
            <img src={images[5]} className="w-full h-full object-cover group-hover:scale-105 transition" />
          </div>
          <div className={`${itemStyle} flex-1`}>
            <img src={images[6]} className="w-full h-full object-cover group-hover:scale-105 transition" />
          </div>
        </div>
        <div className={`${itemStyle} col-span-2 col-start-4 row-span-1`}>
          <img src={images[7]} className="w-full h-full object-cover group-hover:scale-105 transition" />
        </div>

      </div>
    </div>
      </section>


  <section className="w-full py-20 flex flex-col items-center overflow-hidden pb-20">
      {/* header */}
      <div className="w-full px-[5%] lg:px-[10%] flex justify-between items-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0499DD]">
          Отзывы
        </h1>

        <button className="underline font-medium">смотреть все</button>
      </div>

     <div className="w-full overflow-hidden">
  <div
    ref={scrollRef2}
    className="overflow-x-auto scrollbar-hide"
  >
    <div className="flex gap-5 min-w-max">
      {loopTours2.map((item, i) => (
        <div
          key={i}
          className="w-[320px] h-[200px] bg-white rounded-2xl shadow-sm p-5 flex flex-col justify-between shrink-0"
        >
          <div className="flex items-center gap-3">
            <div className="w-[45px] h-[45px] rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
              {item.name?.[0] || "U"}
            </div>

            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">
                Путешественник
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 line-clamp-4">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
    </section>

    <section className='w-[100%] h-[50vh] flex justify-end px-[10%]'         style={{ backgroundImage: `url(${bgImg3})` }}>
<div className="h-full w-[400px] bg-white/10 backdrop-blur-xl flex flex-col items-center justify-between p-8  border border-white/10">
  
  {/* Заголовок */}
  <div className="text-center mb-8">
    <h1 className="text-[18px] text-white font-bold mb-1">Остались вопросы?</h1>
    <p className="text-[12px] text-yellow-500 font-bold">Оставьте заявку, и мы ответим</p>
  </div>

  {/* Форма */}
  <form className="flex flex-col items-center w-full flex-1 justify-between">
    
    {/* Поля ввода */}
    <div className="w-full flex flex-col items-center gap-4 mb-8">
      <input 
        type="text" 
        placeholder="Имя" 
        className="text-white w-[85%] bg-transparent border-b-2 border-white/20 focus:border-white outline-none py-2 transition-colors placeholder:text-white/50"  
      />
      <input 
        type="number" 
        placeholder="Номер" 
        className="text-white w-[85%] bg-transparent border-b-2 border-white/20 focus:border-white outline-none py-2 transition-colors placeholder:text-white/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"   
      />
      <input 
        type="email" 
        placeholder="Почта" 
        className="text-white w-[85%] bg-transparent border-b-2 border-white/20 focus:border-white outline-none py-2 transition-colors placeholder:text-white/50"    
      />
    </div>

    {/* Кнопка */}
    <button 
      type="submit"
      className="text-white bg-[#0499DD] hover:bg-[#0388c4] w-[200px] h-[45px] font-bold cursor-pointer rounded-full transition-all active:scale-95 shadow-lg shadow-[#0499DD]/20"
    >
      Оставить Заявку
    </button>
  </form>

</div>  </section>

    <footer className="bg-white py-10 px-6 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* 1. Логотип (Воздушный шар) */}
        <div className="flex-shrink-0">
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
  )
}

export default App