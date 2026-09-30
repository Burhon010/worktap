import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../data/content'
import StarRating from './StarRating'

function Hero() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(query ? `/birja?q=${encodeURIComponent(query)}` : '/birja')
  }

  return (
    <section className="relative overflow-hidden bg-[#f3f1fb]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-orange-200/70" />
        <div className="absolute top-24 right-24 h-16 w-16 rounded-full bg-orange-200/50" />
        <div className="absolute top-40 left-10 h-40 w-40 rounded-full bg-orange-200/60" />
        <div className="absolute bottom-10 left-72 h-16 w-16 rounded-full bg-emerald-200/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl leading-tight font-extrabold text-slate-900 lg:text-5xl">
            Покупайте фриланс-услуги
            <br />в <span className="text-emerald-500">два клика</span>
          </h1>
          <p className="mt-5 max-w-md text-slate-600">
            Ворк — единица работы продавца, которую можно купить как товар в
            магазине
          </p>

          <form onSubmit={handleSearch} className="mt-8 flex max-w-md gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Что нужно сделать?"
              className="w-full rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-400"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-orange-400 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              Найти
            </button>
          </form>

          <p className="mt-8 text-sm font-medium text-slate-500">
            Выберите рубрику, чтобы начать
          </p>
          <div className="mt-3 flex max-w-lg flex-wrap gap-x-6 gap-y-3 text-sm text-slate-700">
            {CATEGORIES.map((cat, i) =>
              i === CATEGORIES.length - 1 ? (
                <Link
                  key={cat}
                  to="/birja"
                  className="rounded-full border border-orange-300 px-4 py-1.5 font-medium text-orange-500"
                >
                  Все категории
                </Link>
              ) : (
                <Link
                  key={cat}
                  to="/birja"
                  className="font-medium transition hover:text-emerald-600"
                >
                  {cat}
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="relative mx-auto flex h-[380px] w-[380px] items-center justify-center">
          <div className="absolute h-full w-full rounded-full bg-orange-200/70" />
          <div className="absolute top-2 -left-2 h-10 w-10 rounded-full bg-orange-300/70" />
          <div className="absolute right-2 bottom-16 h-6 w-6 rounded-full bg-orange-300/70" />
          <div className="absolute bottom-4 left-8 grid grid-cols-6 gap-1.5">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-300" />
            ))}
          </div>

          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
            alt="Специалист WorkTap"
            className="relative z-10 h-[320px] w-[320px] rounded-full object-cover"
          />

          <div className="absolute top-10 -left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">
            <span className="text-lg">⭐</span>
          </div>
          <div className="absolute bottom-10 -right-4 z-20 rounded-xl bg-white px-4 py-2.5 shadow-lg">
            <StarRating value={5} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
