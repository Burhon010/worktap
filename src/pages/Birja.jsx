import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import StarRating from '../components/StarRating'
import { CATEGORIES, ORDERS } from '../data/content'

function OrderRow({ order }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-slate-100 py-6">
      <div className="flex flex-1 items-start gap-4">
        <img
          src={order.avatar}
          alt=""
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
        <div>
          <h3 className="text-[15px] font-bold text-slate-900">
            {order.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{order.author}</p>
          <p className="text-sm text-slate-400">
            Размещено проектов на бирже: {order.projects}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <StarRating value={order.rating} />
            <span className="text-xs font-medium text-slate-400">
              {order.reviews} отзывов
            </span>
          </div>
        </div>
      </div>
      <div className="shrink-0 text-right">
        <p className="font-bold text-emerald-600">Бюджет: {order.budget}</p>
        <p className="mt-2 text-xs text-slate-400">{order.time}</p>
        <p className="mt-4 text-sm text-slate-500">
          Предложений: {order.offers}
        </p>
      </div>
    </div>
  )
}

function Birja() {
  const [searchParams] = useSearchParams()
  const [active, setActive] = useState('Дизайн')
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sortAsc, setSortAsc] = useState(true)
  const [visible, setVisible] = useState(6)

  const filtered = useMemo(() => {
    let list = ORDERS.filter((o) =>
      o.title.toLowerCase().includes(query.toLowerCase()),
    )
    if (minPrice) list = list.filter((o) => o.budgetValue >= Number(minPrice))
    if (maxPrice) list = list.filter((o) => o.budgetValue <= Number(maxPrice))
    list = [...list].sort((a, b) =>
      sortAsc ? a.budgetValue - b.budgetValue : b.budgetValue - a.budgetValue,
    )
    return list
  }, [query, minPrice, maxPrice, sortAsc])

  return (
    <div className="bg-white">
      <div className="border-b border-slate-100 bg-[#f3f1fb]">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-md flex-1 gap-3"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setVisible(6)
                }}
                placeholder="Какую работу ищете?"
                className="w-full rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-400"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-orange-400 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500"
              >
                Найти
              </button>
            </form>

            <div className="flex items-center gap-3 text-sm text-slate-500">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Минимальная цена"
                className="w-32 rounded-full border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-emerald-400"
              />
              <span>—</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Максимальная цена"
                className="w-32 rounded-full border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-emerald-400"
              />
              <button
                type="button"
                onClick={() => setSortAsc((s) => !s)}
                className="ml-2 flex items-center gap-1 font-semibold text-slate-900"
              >
                По {sortAsc ? 'возрастанию' : 'убыванию'} цены
                <svg
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 fill-slate-500 transition ${sortAsc ? '' : 'rotate-180'}`}
                >
                  <path d="M5 8l5 5 5-5z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  active === cat
                    ? 'border border-orange-300 text-orange-500'
                    : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-4 text-sm font-semibold text-slate-500">
          {filtered.length} проектов по {active.toLowerCase()}
        </p>

        <div>
          {filtered.slice(0, visible).map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
          {filtered.length === 0 && (
            <p className="py-10 text-center text-slate-400">
              Ничего не найдено. Попробуйте изменить запрос или фильтры.
            </p>
          )}
        </div>

        {visible < filtered.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + 4)}
              className="rounded-full border border-emerald-500 px-8 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
            >
              Загрузить еще
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Birja
