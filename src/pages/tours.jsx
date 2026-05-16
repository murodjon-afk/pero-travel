import React from 'react';

export default function Tours() {
  return (
    <main
      className="w-full h-[50vh] bg-cover bg-center bg-no-repeat relative flex flex-col justify-end"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Затемняющий оверлей, чтобы белый текст читался на любом фоне */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Шапка сайта */}
      <header className="absolute top-0 left-0 w-full px-[5%] lg:px-[10%] py-5 flex items-center justify-between z-50">
        <div className="w-[38px] h-[38px] md:w-[45px] md:h-[45px]">
          <img src="/logo.png" alt="logo" className="w-full h-full object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <a href="#" className="text-white text-[15px] lg:text-[17px] font-medium hover:text-[#FFC700] duration-300">Главная</a>
          <a href="#" className="text-white text-[15px] lg:text-[17px] font-medium hover:text-[#FFC700] duration-300">Экскурсии</a>
          <a href="#" className="text-white text-[15px] lg:text-[17px] font-medium hover:text-[#FFC700] duration-300">Личный кабинет</a>
        </nav>
      </header>

      {/* Контентная часть внутри 50vh */}
      <section className="w-full relative z-20 px-[5%] lg:px-[10%] pb-12">
        <h1 className="text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-tight font-bold tracking-wide">
          ПУТЕШЕСТВУЙ <br /> PERO TRAVEL
        </h1>

        <button className="mt-4 text-white w-[180px] sm:w-[210px] md:w-[230px] h-[45px] md:h-[50px] bg-[#0499DD] hover:bg-[#0388c4] transition-all rounded-full text-[16px] md:text-[18px] cursor-pointer active:scale-95 duration-200 shadow-lg shadow-[#0499DD]/20">
          К экскурсиям
        </button>
      </section>
    </main>
  );
}