import Counter from "./Counter";

async function getInfo() {
  return {
    title: "О проекте",
    description: "Данные получены на сервере без использования useEffect.",
  };
}

export default async function AboutPage() {
  const info = await getInfo();

  return (
    <main className="content-card">
      <h1>{info.title}</h1>
      <p>{info.description}</p>

      <h2>О моей работе</h2>
      <p>
        Этот сайт создан в рамках практической работы №1.2
        по изучению фреймворка Next.js.
      </p>
      <p>
        В проекте используются Server Components, Client Components,
        динамические маршруты и API-маршруты.
      </p>

      <h2>Счётчик кликов</h2>
      <p>Нажми на кнопку, чтобы проверить интерактивность:</p>
      <Counter />
    </main>
  );
}
