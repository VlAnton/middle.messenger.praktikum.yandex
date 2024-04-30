## Описание

Мессенджер с возможностью отправлять и получать сообщения, создавать и участвовать в групповых чатах.

## Установка и запуск

- `npm install` — установка зависимостей
- `npm run dev` — запуск проекта в dev режиме
- `npm run start` — сборка стабильной версии
- `npm run lint` — прогон через eslint
- `npm run stylelint` — прогон через stylelint
- `npm run test` — прогон тестов

После запуска доступно на http://localhost:3000/

## Проект на действии

Проект в действии можно посмотреть на [Netlify](https://anton-vlasov-messenger.netlify.app/)

## Ссылка на макет

[Figma](https://www.figma.com/file/VOFxubk1asA0v1pOt06Qwy/messenger?type=design&node-id=0%3A1&mode=design&t=MWbIY5IXXwjKcRzM-1)

## Макет по страницам

- [Авторизация](https://www.figma.com/file/VOFxubk1asA0v1pOt06Qwy/messenger?type=design&node-id=1-674&mode=design&t=MWbIY5IXXwjKcRzM-11)
- [Регистрация](https://www.figma.com/file/VOFxubk1asA0v1pOt06Qwy/messenger?type=design&node-id=1-732&mode=design&t=MWbIY5IXXwjKcRzM-11)
- [Чат](https://www.figma.com/file/VOFxubk1asA0v1pOt06Qwy/messenger?type=design&node-id=1-2&mode=design&t=MWbIY5IXXwjKcRzM-11)
- [Профиль](https://www.figma.com/file/VOFxubk1asA0v1pOt06Qwy/messenger?type=design&node-id=1-398&mode=design&t=MWbIY5IXXwjKcRzM-11)
- [Изменение данных](https://www.figma.com/file/VOFxubk1asA0v1pOt06Qwy/messenger?type=design&node-id=1-539&mode=design&t=MWbIY5IXXwjKcRzM-11)
- [Изменение пароля](https://www.figma.com/file/VOFxubk1asA0v1pOt06Qwy/messenger?type=design&node-id=1-579&mode=design&t=MWbIY5IXXwjKcRzM-11)
- [Ошибка 404](https://www.figma.com/file/VOFxubk1asA0v1pOt06Qwy/messenger?type=design&node-id=1-686&mode=design&t=MWbIY5IXXwjKcRzM-11)
- [Ошибка 500](https://www.figma.com/file/VOFxubk1asA0v1pOt06Qwy/messenger?type=design&node-id=1-690&mode=design&t=MWbIY5IXXwjKcRzM-11)

## Ссылки на страницы в проекте

- [Авторизация](https://anton-vlasov-messenger.netlify.app/)
- [Регистрация](https://anton-vlasov-messenger.netlify.app/sign-up)
- [Чат](https://anton-vlasov-messenger.netlify.app/messenger)
- [Профиль](https://anton-vlasov-messenger.netlify.app/settings)
- [Изменение данных](https://anton-vlasov-messenger.netlify.app/change-profile)
- [Изменение пароля](https://anton-vlasov-messenger.netlify.app/change-password)
- [Ошибка 404](https://anton-vlasov-messenger.netlify.app/404)
- [Ошибка 500](https://anton-vlasov-messenger.netlify.app/500)

## Как это работает

Сначала открывается страница логин. Если у вас нет пользователя, то нажимаем на кнопку "Нет аккаунта?" и регистрируем.

Далее мы попадаем в мессенджер. Чтобы создать чат, нажимаем кнопку "Создать чат", вводим название чата, появляется список пользователей и поле ввода, куда мы вводим логин необходимого пользователя. Выбираем пользователей, нажимаем кнопку "Добавить пользователей".

Нажав на чат, мы сможем писать сообщения, отправлять их на кнопку со стрелочкой. В правом верхнем углу кнопка с действиями, где мы можем удалить пользотеля из чата, добавить пользователя в чат, либо удалить чат.

Перейдя по ссылке "Профиль", мы попадаем в меню с информацией о пользователе. Тут мы можем выйти из аккаунта, изменить данные, либо сменить пароль.

## Разработчик

[Антон Власов](https://github.com/VlAnton)
