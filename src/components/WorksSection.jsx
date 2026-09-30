import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext'
import { WORKS } from '../data/content'

function WorkCard({ work }) {
  const { open } = useModal()
  return (
    <div
      className={`flex flex-col rounded-2xl border p-6 ${
        work.highlighted
          ? 'border-emerald-200 bg-white shadow-sm'
          : 'border-slate-200 bg-white'
      }`}
    >
      <div className="mb-3 flex items-center gap-3">
        <img
          src={work.avatar}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <h3 className="text-[15px] font-bold text-slate-900">{work.title}</h3>
      </div>
      <p className="flex-1 text-sm text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
        leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices magna
        est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra
        consectetur nec est convallis...
      </p>
      <button
        type="button"
        onClick={() => open('soon')}
        className={`mt-5 w-full rounded-full py-2.5 text-sm font-semibold transition ${
          work.highlighted
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'border border-emerald-500 text-emerald-600 hover:bg-emerald-50'
        }`}
      >
        Посмотреть
      </button>
    </div>
  )
}

function WorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-extrabold text-slate-900">
        Актуальные ворки
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {WORKS.slice(0, 3).map((w) => (
          <WorkCard key={w.title} work={w} />
        ))}
        {WORKS.slice(3, 5).map((w) => (
          <WorkCard key={w.title} work={w} />
        ))}
        <Link
          to="/birja"
          className="flex items-center justify-center rounded-2xl bg-[#f3f1fb] transition hover:bg-[#ece9f9]"
        >
          <span className="font-semibold text-emerald-600">
            Смотреть все ворки
          </span>
        </Link>
      </div>
    </section>
  )
}

export default WorksSection
