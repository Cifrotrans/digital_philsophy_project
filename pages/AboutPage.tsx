import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">О проекте «Цифровая философия»</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">Мы — мост между наукой и технологиями.</p>
        </div>
      </header>

      <main className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">Наша миссия</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                В эпоху стремительной цифровизации, наша цель — не просто наблюдать за изменениями, а глубоко осмыслить их влияние на общество, культуру и самого человека. Мы стремимся вооружить исследователей, преподавателей и специалистов гуманитарных и технических наук инструментами для эффективной работы в новой цифровой реальности, соединяя классическую академическую строгость с передовыми технологиями.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="mb-16">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Наша команда</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                <img 
                  src="https://picsum.photos/seed/dmitry/200/200" 
                  alt="Фото Дмитрия Ярочкина" 
                  className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
                />
                <div className="text-left max-w-2xl">
                  <p className="text-lg text-gray-700 mb-4">
                    «Цифровая философия» — это научно-исследовательский проект, созданный на базе Института философии Санкт-Петербургского государственного университета. Мы объединяем гуманитарные и технические науки, чтобы вместе отвечать на вызовы новой эпохи.
                  </p>
                  <p className="text-lg text-gray-700">
                    Руководитель проекта — <strong>Дмитрий Ярочкин</strong>, координатор Лаборатории цифровой философии СПбГУ, исследователь и практик в области применения ИИ в гуманитарных науках. Его экспертиза является ядром нашего проекта, гарантируя высочайший научный уровень всех наших продуктов и исследований.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">Наши ценности</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                В основе всей нашей работы лежит глубокое убеждение в важности этического подхода к технологиям. Мы не просто учим использовать ИИ, мы исследуем его влияние и работаем над созданием принципов безопасного и ответственного внедрения искусственного интеллекта. Этичность, безопасность и научная честность — наши ключевые ориентиры.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
