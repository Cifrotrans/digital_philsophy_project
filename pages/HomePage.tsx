import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import GameOfLifeCanvas from '../components/GameOfLifeCanvas';

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="relative bg-[#0d1117] text-white py-24 sm:py-32 text-center overflow-hidden h-[60vh] md:h-[70vh] flex items-center justify-center">
        <GameOfLifeCanvas />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Ваша идея достойна быть услышанной в цифровую эпоху
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            <strong>Лаборатория цифровой философии.</strong> Мы помогаем вам использовать технологии, чтобы расширить границы гуманитарных наук.
          </p>
          <div className="mt-8">
            <Link to="/products" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Начать обучение
            </Link>
          </div>
        </div>
      </section>

      <main>
        <section className="py-20 sm:py-24 bg-white">
          <AnimatedSection>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Чувствуете, что отстаёте?</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Академический мир меняется стремительно. Объемы информации растут, а традиционные методы анализа уже не справляются. Пока вы тратите недели на ручной поиск и обработку источников, конкуренция в научной среде усиливается, а страх «цифрового разрыва» становится реальной угрозой для карьеры.
              </p>
            </div>
          </AnimatedSection>
        </section>

        <section className="py-20 sm:py-24 bg-gray-50">
          <AnimatedSection>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Мы дадим вам инструменты</h2>
               <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
                ИИ — это не угроза, а мощный инструмент. Перечислим выгоды:
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-blue-700">Экономия времени</h3>
                    <p className="text-gray-600">Сократите рутинные задачи по поиску и систематизации информации.</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-blue-700">Повышение качества</h3>
                    <p className="text-gray-600">Анализируйте большие объемы данных и находите неочевидные связи в текстах.</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-blue-700">Рост продуктивности</h3>
                    <p className="text-gray-600">Ускорьте подготовку публикаций, докладов и аналитических отчетов.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section className="py-20 sm:py-24 bg-white">
          <AnimatedSection>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Промпт-инжиниринг: ИИ-помощник в научных исследованиях</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
                Это не очередной теоретический курс о технологиях. Это практикум, где вы получите реальные навыки для решения исследовательских задач. Научитесь ставить нейросетям правильные задачи для написания статей, подготовки докладов и анализа сложных философских концепций.
              </p>
              <Link to="/products" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Узнать больше о курсе
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
