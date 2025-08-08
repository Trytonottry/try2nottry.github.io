export default function GitHubStats() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">GitHub Статистика</h2>
        
        <div className="flex flex-col items-center gap-8">
          {/* Основная статистика */}
          <img
            src="https://github-readme-stats.vercel.app/api?username=Trytonottry&show_icons=true&theme=radical&border_radius=10&bg_color=1e1e1e&title_color=8a2be2&text_color=ffffff"
            alt="Trytonottry Stats"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />

          {/* Языки */}
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Trytonottry&layout=compact&theme=radical&bg_color=1e1e1e&title_color=8a2be2&text_color=ffffff"
            alt="Top Languages"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Статистика обновляется автоматически из моего GitHub.
        </p>
      </div>
    </section>
  );
}