import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<
  string,
  { title: string; description: string; content: string }
> = {
  "nextjs-vvedenie": {
    title: "Введение в Next.js",
    description: "Знакомство с современным React-фреймворком.",
    content:
      "Next.js — это фреймворк для React, который предоставляет маршрутизацию, серверный рендеринг, оптимизацию и возможность создания API. Он помогает разработчикам создавать современные веб-приложения.",
  },
  "react-osnovy": {
    title: "Основы React",
    description: "Изучение компонентов и принципов React.",
    content:
      "React — это JavaScript-библиотека для создания пользовательских интерфейсов. Основой React являются компоненты, свойства (props) и состояние (state).",
  },
};

export function generateStaticParams() {
  return [
    { slug: "nextjs-vvedenie" },
    { slug: "react-osnovy" },
  ];
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="content-card">
      <Link href="/" className="back-link">
        ← На главную
      </Link>

      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <hr />
      <p>{article.content}</p>
    </main>
  );
}
