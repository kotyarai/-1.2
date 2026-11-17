import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <span className="eyebrow">МОЙ ПЕРВЫЙ ПРОЕКТ НА NEXT.JS</span>
        <h1>Добро пожаловать в мой блог!</h1>
        <p>
          Это мой первый сайт, созданный с помощью React и Next.js.
          Здесь я изучаю современные технологии веб-разработки.
        </p>

        <div className="actions">
          <Link href="/about" className="button">
            О проекте
          </Link>
          <Link href="/blog/nextjs-vvedenie" className="button secondary">
            Читать блог
          </Link>
        </div>
      </section>

      <section className="articles">
        <h2>Мои статьи</h2>
        <div className="article-grid">
          <article className="article-card">
            <span>СТАТЬЯ №1</span>
            <h3>Введение в Next.js</h3>
            <p>Знакомство с возможностями фреймворка Next.js.</p>
            <Link href="/blog/nextjs-vvedenie">Читать →</Link>
          </article>

          <article className="article-card">
            <span>СТАТЬЯ №2</span>
            <h3>Основы React</h3>
            <p>Изучение компонентов и принципов React.</p>
            <Link href="/blog/react-osnovy">Читать →</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
