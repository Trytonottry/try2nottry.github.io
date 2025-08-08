import Avatar from './Avatar';

export default function Home() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 text-center bg-gradient-to-b from-gray-900 via-purple-900/20 to-black">
      <div className="container mx-auto px-6">
        <Avatar />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Привет, я <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Trytonottry</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Специалист по <strong>информационной безопасности</strong>.<br />
          Анализирую уязвимости, пишу эксплойты, участвую в CTF и защищаю системы.
        </p>
      </div>
    </section>
  );
}