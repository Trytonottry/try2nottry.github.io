import { SiGithub, SiReddit, SiTelegram } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/Trytonottry',
      icon: SiGithub,
      color: 'hover:text-gray-900'
    },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/user/CrazyGeneral3301',
      icon: SiReddit,
      color: 'hover:text-orange-600'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/moriartyyyyy',
      icon: SiTelegram,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      url: 'mailto:popovsemyona@gmail.com',
      icon: MdEmail,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Связь со мной</h2>
        <p className="text-lg text-gray-300 mb-10">
          Готов к сотрудничеству и новым проектам!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center space-x-2 px-5 py-3 rounded-full bg-gray-800 text-white text-sm md:text-base
                transform transition hover:scale-105 ${link.color} shadow-md hover:shadow-lg`}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}