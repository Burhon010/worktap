import { Link } from 'react-router-dom'

const POINTS = [
  { icon: '💳', text: 'Оплачивайте с р/с или карты компании' },
  { icon: '💰', text: 'Экономьте до 87% бюджета на фрилансе' },
  { icon: '⏱️', text: 'Экономьте до 75% времени на решении фриланс задач' },
]

function BusinessBanner() {
  return (
    <section className="bg-gradient-to-br from-amber-400 to-yellow-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 lg:text-3xl">
            Как WorkTap помогает бизнесу?
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {POINTS.map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-4 rounded-xl bg-white/90 px-5 py-3.5"
              >
                <span className="text-xl">{p.icon}</span>
                <span className="text-sm font-medium text-slate-800">
                  {p.text}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 font-semibold text-slate-900">
            WorkTap — быстро, просто и безопасно!
          </p>
          <Link
            to="/birja"
            className="mt-4 inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Начать!
          </Link>
        </div>

        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80"
            alt="Рабочее место"
            className="ml-auto h-72 w-full max-w-md rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default BusinessBanner
