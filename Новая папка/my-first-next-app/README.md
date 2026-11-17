# My First Next.js App

Учебный мини-блог для практической работы №1.2 «Создание Next.js-приложения».

## Требования

- Node.js 18.18 или новее (рекомендуется LTS)
- npm

## Запуск проекта

Откройте терминал в папке проекта и выполните:

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Страницы и маршруты

- `/` — главная страница со ссылками на статьи.
- `/about` — страница о проекте (Server Component).
- `/blog/nextjs-vvedenie` — динамическая статья о Next.js.
- `/blog/react-osnovy` — динамическая статья о React.
- `/api/hello` — API-маршрут, возвращающий JSON.

## Что демонстрирует проект

- App Router и файловую маршрутизацию.
- Server Component с `async/await`.
- Client Component со счётчиком (`useState` и `onClick`).
- Динамический маршрут `[slug]`.
- `generateStaticParams()` для статической генерации страниц.
- API Route Handler с методом `GET`.

## Проверка production-сборки

```bash
npm run build
```

## Загрузка на GitHub

Создайте пустой репозиторий на GitHub, затем выполните команды в терминале из папки проекта:

```bash
git init
git add .
git commit -m "Create first Next.js application"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/my-first-next-app.git
git push -u origin main
```

Замените адрес репозитория на свой.
