import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            <header className="bg-gray-800 text-white py-20 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-bold">Связаться с нами</h1>
                    <p className="text-xl mt-4 max-w-3xl mx-auto">Готовы начать сотрудничество или у вас есть вопросы?</p>
                </div>
            </header>

            <main className="py-20 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 sm:p-12 rounded-lg shadow-xl">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Контактная информация</h2>
                                <p className="text-gray-600 mb-8">
                                    Мы всегда открыты для обсуждения новых идей, партнерства и ответов на ваши вопросы. Пожалуйста, используйте форму справа или свяжитесь с нами напрямую.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        <a href="mailto:info@digital-philosophy.ru" className="text-lg text-gray-700 hover:text-blue-600">info@digital-philosophy.ru</a>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        <span className="text-lg text-gray-700">+7 (812) 123-45-67</span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold mb-4">Мы в социальных сетях</h3>
                                    {/* Add social links here */}
                                </div>
                            </div>
                            <div>
                                {isSubmitted ? (
                                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                                        <p className="font-bold">Спасибо!</p>
                                        <p>Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Имя</label>
                                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Сообщение</label>
                                            <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                                Отправить сообщение
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
