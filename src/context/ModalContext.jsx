import { createContext, useContext, useState } from 'react'
import Modal from '../components/Modal'

const ModalContext = createContext(null)

const CONTENT = {
  about: {
    title: 'О нас',
    body: (
      <p>
        WorkTap — онлайн сервис поиска частных специалистов для решения
        бизнес задач в кратчайшие сроки. Наша платформа объединяет
        заказчиков услуг, которым необходимо выполнить какую-либо работу, и
        компетентных специалистов, ищущих подработку или дополнительный
        заработок.
      </p>
    ),
  },
  howItWorks: {
    title: 'Как это работает',
    body: (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {[
          {
            step: '1',
            title: 'Укажите вид работы и категорию',
            text: '',
          },
          {
            step: '2',
            title: 'Выберите специалиста',
            text: 'Каждый специалист перед началом работы проходит тщательную проверку, имеет рейтинг и отзывы предыдущих заказчиков.',
          },
          {
            step: '3',
            title: 'Оплатите услугу',
            text: '',
          },
          {
            step: '4',
            title: 'Специалист выполняет работу',
            text: 'После выполнения заказа у вас будет возможность поставить специалисту оценку и написать отзыв.',
          },
        ].map((s) => (
          <div key={s.step}>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
              {s.step}
            </div>
            <h3 className="mb-1 font-bold text-slate-900">{s.title}</h3>
            {s.text && <p className="text-slate-500">{s.text}</p>}
          </div>
        ))}
      </div>
    ),
  },
  security: {
    title: 'Политика безопасности',
    body: (
      <div className="space-y-4">
        <p className="font-bold text-slate-900">
          БЕЗОПАСНОСТЬ ОНЛАЙН ПЛАТЕЖЕЙ
        </p>
        <p>
          Наш сайт подключён к интернет-эквайрингу, и Вы можете оплатить
          Услугу банковской картой Visa или Mastercard. После подтверждения
          выбранного товара либо услуги откроется защищённое окно с
          платёжной страницей процессингового центра CloudPayments, где Вам
          необходимо ввести данные Вашей банковской карты. Для
          дополнительной аутентификации держателя карты используется
          протокол 3-D Secure.
        </p>
        <p>
          Услуга онлайн-оплаты осуществляется в соответствии с правилами
          Международных платёжных систем Visa и MasterCard на принципах
          соблюдения конфиденциальности и безопасности совершения платежа.
        </p>
        <p>
          Процессинговый центр CloudPayments защищает и обрабатывает данные
          Вашей банковской карты по стандарту безопасности PCI DSS 3.0.
          Передача информации в платёжный шлюз происходит с применением
          технологии шифрования SSL. CloudPayments не передаёт данные Вашей
          карты нам и иным третьим лицам.
        </p>
      </div>
    ),
    footer: true,
  },
  rules: {
    title: 'Правила сервиса',
    body: (
      <div className="space-y-4">
        <p className="font-bold text-slate-900">Правила сайта</p>
        <p>
          1. Пользоваться сервисом worktap.kz может любой человек,
          достигший совершеннолетия. Для создания или заказа ворка
          необходима регистрация с помощью email.
        </p>
        <p>
          2. У одного человека может быть только один аккаунт. Администрация
          оставляет за собой право удалить дублирующие аккаунты.
        </p>
        <p>
          3. При регистрации пользователь самостоятельно выбирает логин,
          который будет виден всем пользователям сайта.
        </p>
        <p>
          4. Ответственность за всю размещённую пользователем информацию
          несёт сам пользователь.
        </p>
        <p>
          5. На сайте запрещена ненормативная лексика, грубое общение,
          несанкционированная реклама, размещение материалов, негативно
          влияющих на имидж сайта.
        </p>
        <p>
          6. Администрация ресурса оставляет за собой право удалить любые
          материалы (проекты, ворки, отзывы, комментарии), а также
          заблокировать или удалить пользователя без объяснения причин.
        </p>
      </div>
    ),
  },
  privacy: {
    title: 'Политика приватности',
    body: (
      <p>
        Мы собираем только те данные, которые необходимы для работы
        сервиса: контактную информацию, историю заказов и отзывы. Данные
        не передаются третьим лицам без вашего согласия, кроме случаев,
        предусмотренных законодательством. Вы можете запросить удаление
        своих данных, обратившись в поддержку.
      </p>
    ),
  },
  faq: {
    title: 'FAQ',
    body: (
      <div className="space-y-4">
        <div>
          <p className="font-bold text-slate-900">Как разместить заказ?</p>
          <p>
            Нажмите «Создать заказ», опишите задачу и укажите бюджет —
            специалисты сами откликнутся на ваш проект.
          </p>
        </div>
        <div>
          <p className="font-bold text-slate-900">Как получить оплату?</p>
          <p>
            Средства резервируются на счёте при заказе и переводятся
            исполнителю после подтверждения выполненной работы.
          </p>
        </div>
        <div>
          <p className="font-bold text-slate-900">Что если работа не устроит?</p>
          <p>
            Сервис гарантирует возврат средств в полном объёме в случае
            невыполнения заказа.
          </p>
        </div>
      </div>
    ),
  },
  contacts: {
    title: 'Контакты',
    body: (
      <div className="space-y-2">
        <p>Email: support@worktap.kz</p>
        <p>Телефон: +7 700 000 00 00</p>
        <p>Адрес: г. Алматы, Казахстан</p>
      </div>
    ),
  },
  press: {
    title: 'Пресса о нас',
    body: (
      <p>
        Публикации о WorkTap скоро появятся здесь. Следите за обновлениями
        в наших соцсетях.
      </p>
    ),
  },
  soon: {
    title: 'Скоро',
    body: <p>Этот раздел находится в разработке. Загляните позже!</p>,
  },
}

export function ModalProvider({ children }) {
  const [active, setActive] = useState(null)

  const open = (key) => setActive(key)
  const close = () => setActive(null)

  const content = active ? CONTENT[active] : null

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {content && (
        <Modal
          title={content.title}
          onClose={close}
          footer={
            content.footer ? (
              <>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Понятно
                </button>
                <button
                  type="button"
                  className="rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-400"
                >
                  Скачать документ
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={close}
                className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Понятно
              </button>
            )
          }
        >
          {content.body}
        </Modal>
      )}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}
