import Link from "next/link";

export default function NotFound() {
  return (
    <main className="content-card">
      <h1>Страница не найдена</h1>
      <p>К сожалению, такой страницы не существует.</p>
      <Link href="/">Вернуться на главную</Link>
    </main>
  );
}
