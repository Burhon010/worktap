import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext'
import Logo from './Logo'

function Header() {
  const { open } = useModal()

  return (
    <header className="relative z-10 border-b border-slate-200/60 bg-[#f3f1fb]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-slate-700 lg:flex">
          <Link to="/birja" className="transition hover:text-emerald-600">
            Биржа
          </Link>
          <Link to="/birja" className="transition hover:text-emerald-600">
            Ворки
          </Link>
          <button
            type="button"
            onClick={() => open('soon')}
            className="transition hover:text-emerald-600"
          >
            Конкурсы
          </button>
          <button
            type="button"
            onClick={() => open('soon')}
            className="transition hover:text-emerald-600"
          >
            Создать заказ
          </button>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => open('soon')}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
          >
            Регистрация
          </button>
          <button
            type="button"
            onClick={() => open('soon')}
            className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Войти
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
