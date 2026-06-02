import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
const mainRoutePoints = [
    'Город Гагра, Колоннада, ресторан "Гагрипш", Парк принца Ольденбургского;',
    'Смотровая площадка "Прощай Родина", "Чабгарский" карниз, Подвесной мост через реку "Бзыбь";',
    'Дегустация сыра, меда, вина, чачи (входит в стоимость экскурсии), Голубое Озеро, Юпшарский каньон ("Каменный мешок"), Озеро "Рица", Водопады "Девичьи и мужские слезы".'
  ];

  // Данные точек на выбор
  const optionalRoutePoints = [
    'Монастырь "Новый Афон", Новоафонская Пещера, "Рукотворный" водопад, храм "Симона Кананита", Лебединое озеро.',
    'Термальный источник в с. Приморское.'
  ];
// Импорт ассетов
import logo from "../assets/public/logo.png";
import bgImg from "../assets/public/bg.png";
import bgImg3 from "../assets/public/bg3.png";
const expensesData = [
  { id: 1, price: 500, label: 'Дача сталина' },
  { id: 2, price: 500, label: 'Молочный водопад' },
  { id: 3, price: 500, label: 'Новоафинская пещера' },
  { id: 4, price: 500, label: 'Термальный источник' },
  { id: 5, price: 200, label: 'Обед' },
];
const images = [
  "https://pero-travel.netlify.app/img/1.png",
  "https://pero-travel.netlify.app/img/2.png",
  "https://pero-travel.netlify.app/img/3.png",
  "https://pero-travel.netlify.app/img/4.png",
  "https://pero-travel.netlify.app/img/5.png",
  "https://pero-travel.netlify.app/img/6.png",
  "https://pero-travel.netlify.app/img/7.png",
  "https://pero-travel.netlify.app/img/8.png",
];

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

const itemStyle = "relative overflow-hidden rounded-2xl shadow-lg group";

export default function Tours() {
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
      <main className="w-full min-h-screen relative flex flex-col">
        {/* Шапка */}
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

        {/* Главный баннер */}
        <section className="w-full h-screen flex flex-col bg-amber-600">
          <div
            className="w-full h-[100%] bg-cover bg-center bg-no-repeat flex flex-col justify-center px-[10%]"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="flex items-center gap-3 text-white mb-6">
              <Link
                to="/tours"
                className="text-lg hover:text-[#FFC700] duration-300"
              >
                К другим экскурсиям
              </Link>
              <span>/</span>
              <span className="text-lg opacity-90">
                Автобусный тур ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ (ИЗ АДЛЕРА)
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-5xl">
              Автобусный тур ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ (ИЗ АДЛЕРА)
            </h1>
          </div>
        </section>
      </main>

      {/* Описание экскурсии */}
      <section className="w-full bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-[#0493CE] text-4xl font-bold mb-8">
            Описание экскурсии
          </h2>

          <p className="max-w-4xl text-center text-gray-800 text-lg leading-relaxed mb-24">
            Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер
            (20 мест). По маршруту вас будет сопровождать профессиональный гид.
            Посадка на экскурсию осуществляется с вашего отеля или ближайшей
            автобусной остановки. Пересечение границы без пересадок.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Цена взрослый */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#FFC700]" />
              <div className="relative bg-white rounded-2xl shadow-lg px-10 py-8 min-w-[220px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl">🪙</span>
                  <span className="text-[#0493CE] text-4xl font-bold">1 618 ₽</span>
                </div>
                <p className="text-gray-700 text-xl">Взрослый билет</p>
              </div>
            </div>

            {/* Цена детский */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#FFC700]" />
              <div className="relative bg-white rounded-2xl shadow-lg px-10 py-8 min-w-[220px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl">🪙</span>
                  <span className="text-[#0493CE] text-4xl font-bold">1 412 ₽</span>
                </div>
                <p className="text-gray-700 text-xl">Детский билет</p>
              </div>
            </div>

            {/* Время */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#FFC700]" />
              <div className="relative bg-white rounded-2xl shadow-lg px-10 py-8 min-w-[220px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl">🕒</span>
                  <span className="text-[#0493CE] text-4xl font-bold">12 часов</span>
                </div>
                <p className="text-gray-700 text-xl">Продолжительность</p>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="w-full max-w-5xl px-6 py-8 font-sans bg-white select-none px-[10%] pb-10">
      {/* Основной заголовок секции */}
      <h2 className="text-[#009ae2] text-2xl font-bold mb-10 tracking-wide">
        Описание маршрута
      </h2>

      {/* Список основного маршрута */}
      <ul className="space-y-5 mb-8">
        {mainRoutePoints.map((point, index) => (
          <li key={index} className="flex items-start gap-4 text-[#333333] text-[15px] leading-relaxed">
            {/* Желтый маркер */}
            <span className="w-3 h-3 bg-[#ffcc00] rounded-full flex-shrink-0 mt-[6px]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Подзаголовок выбора */}
      <h3 className="text-black font-bold text-[15px] mb-5 pl-7">
        Далее на выбор:
      </h3>

      {/* Список опционального маршрута */}
      <ul className="space-y-5">
        {optionalRoutePoints.map((point, index) => (
          <li key={index} className="flex items-start gap-4 text-[#333333] text-[15px] leading-relaxed">
            {/* Желтый маркер */}
            <span className="w-3 h-3 bg-[#ffcc00] rounded-full flex-shrink-0 mt-[6px]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
      <section className="w-full max-w-5xl px-6 py-8 font-sans px-[10%]">
      {/* Заголовок секции */}
      <h2 className="text-[#009ae2] text-2xl font-bold mb-8">
        Дополнительные расходы (по желанию)
      </h2>

      {/* Сетка для карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
        {expensesData.map((item) => (
          <div key={item.id} className="relative pt-4 pl-4 max-w-[280px] w-full">
            
            {/* Желтый декоративный круг на заднем плане */}
            <div className="absolute top-0 left-0 w-12 h-12 bg-[#ffcc00] rounded-full z-0" />

            {/* Основная карточка */}
            <div className="relative z-10 bg-white/80 backdrop-blur-[2px] rounded-xl p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-white/40 flex flex-col gap-1.5 transition-transform duration-200 hover:scale-[1.02]">
              
              {/* Блок с ценой и иконкой */}
              <div className="flex items-center gap-2 text-[#009ae2] font-black text-2xl tracking-wide">
                {/* Иконка стопки монет (SVG) */}
                <svg 
                  className="w-7 h-7 flex-shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M3 16.5c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5M3 12c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5M3 7.5C3 9.43 7.03 11 12 11s9-1.57 9-3.5M3 7.5C3 5.57 7.03 4 12 4s9 1.57 9 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span>{item.price} ₽</span>
              </div>

              {/* Название услуги */}
              <span className="text-[#333333] text-sm font-medium pl-1">
                {item.label}
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>

      {/* Популярные Экскурсии (Галерея) */}
      <section className="w-full py-10">
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
              <img src={images[0]} alt="tour" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className={`${itemStyle} col-start-3 row-span-2`}>
              <img src={images[1]} alt="tour" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className={`${itemStyle} col-start-4 row-span-1`}>
              <img src={images[2]} alt="tour" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className={`${itemStyle} col-start-5 row-span-1`}>
              <img src={images[3]} alt="tour" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className={`${itemStyle} col-start-1 row-span-1`}>
              <img src={images[4]} alt="tour" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="col-start-2 row-span-1 flex flex-col gap-4">
              <div className={`${itemStyle} flex-1`}>
                <img src={images[5]} alt="tour" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className={`${itemStyle} flex-1`}>
                <img src={images[6]} alt="tour" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
            </div>
            <div className={`${itemStyle} col-span-2 col-start-4 row-span-1`}>
              <img src={images[7]} alt="tour" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="w-full py-20 flex flex-col items-center overflow-hidden pb-20">
        <div className="w-full px-[5%] lg:px-[10%] flex justify-between items-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0499DD]">
            Отзывы
          </h1>
          <button className="underline font-medium">смотреть все</button>
        </div>

        <div className="w-full overflow-hidden">
          <div ref={scrollRef2} className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-5 min-w-max px-6">
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
                      <p className="text-sm text-gray-500">{item.role}</p>
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

      {/* Форма обратной связи */}
      <section 
        className="w-full h-[65vh] bg-cover bg-center flex justify-end px-[10%]" 
        style={{ backgroundImage: `url(${bgImg3})` }}
      >
        <div className="h-full w-[400px] bg-white/10 backdrop-blur-xl flex flex-col items-center justify-between p-8 border border-white/10">
          <div className="text-center mb-8">
            <h1 className="text-[18px] text-white font-bold mb-1">Остались вопросы?</h1>
            <p className="text-[12px] text-yellow-500 font-bold">Оставьте заявку, и мы ответим</p>
          </div>

          <form className="flex flex-col items-center w-full flex-1 justify-between">
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

            <button
              type="submit"
              className="text-white bg-[#0499DD] hover:bg-[#0388c4] w-[200px] h-[45px] font-bold cursor-pointer rounded-full transition-all active:scale-95 shadow-lg shadow-[#0499DD]/20"
            >
              Оставить Заявку
            </button>
          </form>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-white py-10 px-6 border-t border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="shrink-0">
            <img
              src={logo}
              alt="PeroTravel"
              className="h-20 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col space-y-2 text-[15px] text-gray-700">
            <Link to="/" className="hover:text-orange-500 transition-colors">Главная</Link>
            <Link to="/tours" className="hover:text-orange-500 transition-colors">Экскурсии</Link>
            <Link to="/profile" className="hover:text-orange-500 transition-colors">Личный кабинет</Link>
          </div>

          <div className="flex flex-col space-y-3 text-[15px] text-gray-800">
            <div className="flex items-center gap-2">
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
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.53.26l.204-2.894 5.273-4.76c.23-.204-.05-.316-.354-.113L6.5 12.91l-2.8-.874c-.61-.19-.62-.61.126-.9l10.96-4.225c.508-.19.953.11.708 1.31z" />
              </svg>
              <span>Телеграм-бот PeroTravel</span>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-[15px]">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <a href="mailto:office@perotravel.ru" className="hover:underline">office@perotravel.ru</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-[#c13535] hover:opacity-75 font-bold text-xl">VK</a>
              <a href="#" className="text-orange-400 hover:opacity-75 text-xl">
                <i className="inline-block border-2 border-current rounded-md w-6 h-6 leading-none text-center">●</i>
              </a>
              <a href="#" className="text-cyan-400 hover:opacity-75 font-bold text-xl">f</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}