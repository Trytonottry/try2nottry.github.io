export default function Avatar() {
  return (
    <div className="relative mb-6">
      <img
        src="/avatar.jpg"
        alt="Trytonottry"
        className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-2xl object-cover mx-auto transform transition hover:scale-105 duration-300"
      />
    </div>
  );
}