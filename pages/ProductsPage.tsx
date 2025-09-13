import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Наши продукты и услуги</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">Инструменты для академиков и бизнеса в эпоху ИИ.</p>
        </div>
      </header>

      <main className="py-20 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden h-full flex flex-col">
                <div className="p-8 md:p-10 flex-grow">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">Промпт-инжиниринг для академической среды</h2>
                  <p className="text-gray-600 mb-6 text-base">
                    Наш флагманский курс разработан специально для ученых, преподавателей и студентов гуманитарных специальностей. Это не просто теория — это интенсивный практикум, на котором вы научитесь:
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">&#10003;</span>
                      <span><strong>Формулировать точные запросы (промпты)</strong> для решения исследовательских задач.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">&#10003;</span>
                      <span><strong>Использовать ИИ для анализа текстов,</strong> поиска литературы и генерации гипотез.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">&#10003;</span>
                      <span><strong>Интегрировать нейросети</strong> в процесс написания научных статей и докладов.</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 font-semibold">
                    Этот курс уникален, потому что он создан гуманитариями для гуманитариев и сфокусирован на решении реальных академических кейсов.
                  </p>
                </div>
                <div className="bg-gray-100 p-6">
                  <Link to="/contact" className="w-full text-center block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Записаться на курс
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden h-full flex flex-col">
                <div className="p-8 md:p-10 flex-grow">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">Семинары по этике и безопасности ИИ для бизнеса</h2>
                  <p className="text-gray-600 mb-6 text-base">
                    Наш B2B-продукт для компаний, стремящихся к ответственному внедрению искусственного интеллекта. Мы помогаем бизнесу понять и минимизировать риски, связанные с использованием ИИ.
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">&#10003;</span>
                      <span><strong>Анализ этических рисков</strong> в ваших ИИ-системах.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">&#10003;</span>
                      <span><strong>Разработка корпоративных стандартов</strong> безопасного ИИ.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">&#10003;</span>
                      <span><strong>Обучение сотрудников</strong> принципам ответственной работы с нейросетями.</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 font-semibold">
                    Внедряйте инновации безопасно, укрепляя доверие клиентов и партнеров.
                  </p>
                </div>
                 <div className="bg-gray-100 p-6">
                  <Link to="/contact" className="w-full text-center block bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Оставить заявку
                  </Link>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
