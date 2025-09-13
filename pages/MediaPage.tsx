import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const MediaPage: React.FC = () => {
  const articles = [
    { title: 'Как мы научили нейросеть говорить на языке философии', link: '#' },
    { title: 'Этика в коде: как ИИ изменит облик городов', link: '#' },
    { title: 'Цифровой двойник Платона: эксперимент по реконструкции диалогов', link: '#' },
  ];

  const videos = [
    { title: 'Выступление на Хабр: Сонификация данных', platform: 'YouTube' },
    { title: 'Лекция: Философские вызовы искусственного интеллекта', platform: 'Конференция' },
    { title: 'Подкаст: Будущее гуманитарных наук в цифровую эпоху', platform: 'Подкаст' },
  ];

  return (
    <div>
      <header className="bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Наши исследования и медиа-проекты</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">Делимся знаниями и формируем научную повестку.</p>
        </div>
      </header>

      <main className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Статьи по цифровой философии</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                Здесь мы публикуем результаты наших исследований, научные статьи и аналитические материалы, посвященные пересечению философии, этики и технологий.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <a key={index} href={article.link} className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <h3 className="font-bold text-xl text-blue-800 mb-3">{article.title}</h3>
                  <span className="font-semibold text-blue-600 hover:text-blue-800">Читать далее &rarr;</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Видео и подкасты</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                В этом разделе собраны наши выступления на конференциях, лекции, а также участие в подкастах и медиа-проектах.
              </p>
            </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <span className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">{video.platform}</span>
                  <h3 className="font-bold text-xl text-gray-800">{video.title}</h3>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </main>
    </div>
  );
};

export default MediaPage;
