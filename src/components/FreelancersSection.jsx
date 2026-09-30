import { useModal } from '../context/ModalContext'
import { FREELANCERS } from '../data/content'
import StarRating from './StarRating'

function FreelancerCard({ f }) {
  const { open } = useModal()
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="relative">
          <img
            src={f.avatar}
            alt=""
            className="h-12 w-12 rounded-full object-cover"
          />
          {f.online && (
            <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
          )}
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-slate-900">{f.name}</h3>
          <p className="text-sm font-medium text-orange-500">{f.role}</p>
        </div>
      </div>
      <p className="mb-2 text-sm text-slate-500">
        Выполнено проектов: {f.projects}
      </p>
      <StarRating value={f.rating} />
      <button
        type="button"
        onClick={() => open('soon')}
        className="mt-5 w-full rounded-full bg-emerald-500 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
      >
        Написать
      </button>
    </div>
  )
}

function FreelancersSection() {
  const { open } = useModal()

  return (
    <section className="mx-auto max-w-7xl px-6 py-4">
      <h2 className="mb-8 text-2xl font-extrabold text-slate-900">
        Топ фрилансеров
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {FREELANCERS.map((f) => (
          <FreelancerCard key={f.name} f={f} />
        ))}
        <button
          type="button"
          onClick={() => open('soon')}
          className="flex items-center justify-center rounded-2xl bg-[#f3f1fb] transition hover:bg-[#ece9f9]"
        >
          <span className="font-semibold text-emerald-600">
            Посмотреть всех ТОП фрилансеров
          </span>
        </button>
      </div>
    </section>
  )
}

export default FreelancersSection
