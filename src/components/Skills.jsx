const skills = [
  "Информационная безопасность",
  "Анализ уязвимостей",
  "Реверс-инжиниринг",
  "Пентестинг",
  "CTF",
  "Python",
  "Bash",
  "Wireshark",
  "Burp Suite",
  "Metasploit",
  "Nmap",
  "Cryptography"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Навыки</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm md:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}