export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-6">Обо мне</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Я — Trytonottry, специалист в области информационной безопасности. 
          Моя экспертиза включает анализ уязвимостей, реверс-инжиниринг, 
          пентестинг и участие в CTF-соревнованиях. Я разрабатываю инструменты 
          для автоматизации анализа безопасности, исследую уязвимости в ПО 
          и стремлюсь делиться знаниями с сообществом.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Верю, что безопасность — это не опция, а обязательная часть любого продукта.
        </p>
      </div>
    </section>
  );
}