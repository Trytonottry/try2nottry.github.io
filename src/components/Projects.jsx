import { useEffect, useState } from 'react';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Trytonottry/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork && repo.description)
          .slice(0, 6);
        setRepos(filtered);
      })
      .catch(err => console.error('Ошибка:', err));
  }, []);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Последние проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.length > 0 ? (
            repos.map(repo => (
              <div
                key={repo.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{repo.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{repo.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">⭐ {repo.stargazers_count}</span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">Загрузка проектов...</p>
          )}
        </div>
      </div>
    </section>
  );
}