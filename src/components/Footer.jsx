import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext'

const CATEGORY_LINKS = [
  'Тексты и переводы',
  'Разработка',
  'Дизайн',
  'Аудио, видео монтаж',
  'Соцсети и реклама',
  'Бизнес и жизнь',
  'SEO и оптимизация',
]

const ABOUT_LINKS = [
  { label: 'О Нас', key: 'about' },
  { label: 'Как Это Работает', key: 'howItWorks' },
  { label: 'Политика Приватности', key: 'privacy' },
  { label: 'Правила Пользования', key: 'rules' },
  { label: 'Пресса о нас', key: 'press' },
]

const SUPPORT_LINKS = [
  { label: 'Контакты', key: 'contacts' },
  { label: 'Политика Безопасности', key: 'security' },
  { label: 'FAQ', key: 'faq' },
]

const SOCIALS = [
  { name: 'facebook', bg: 'bg-slate-900', href: 'https://facebook.com' },
  { name: 'twitter', bg: 'bg-emerald-500', href: 'https://twitter.com' },
  { name: 'instagram', bg: 'bg-slate-900', href: 'https://instagram.com' },
  { name: 'linkedin', bg: 'bg-slate-900', href: 'https://linkedin.com' },
]

function Footer() {
  const { open } = useModal()

  return (
    <footer className="border-t border-slate-200/60 bg-[#f3f1fb]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-base font-bold text-slate-900">
              Топ категории
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {CATEGORY_LINKS.map((link) => (
                <li key={link}>
                  <Link to="/birja" className="transition hover:text-emerald-600">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-slate-900">
              О Проекте
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {ABOUT_LINKS.map((link) => (
                <li key={link.key}>
                  <button
                    type="button"
                    onClick={() => open(link.key)}
                    className="text-left transition hover:text-emerald-600"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-slate-900">
              Поддержка
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.key}>
                  <button
                    type="button"
                    onClick={() => open(link.key)}
                    className="text-left transition hover:text-emerald-600"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-slate-900">
              Follow
            </h3>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition hover:opacity-80 ${s.bg}`}
                >
                  <span className="h-3.5 w-3.5 rounded-sm bg-white/90" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/60 py-6 text-center text-sm text-slate-500">
        Copyright @ {new Date().getFullYear()} | WorkTap – Worktap.KZ. All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
