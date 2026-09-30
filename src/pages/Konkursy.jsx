import { useModal } from '../context/ModalContext'
import { CONTESTS } from '../data/contests'

function ContestCard({ contest }) {
  const { open } = useModal()

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
        {contest.category}
      </span>
      <h3 className="mt-3 text-[15px] font-bold text-slate-900">
        {contest.title}
      </h3>
      <p className="mt-2 text-sm text-slate-500">Приём заявок {contest.deadline}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-bold text-emerald-600">Приз: {contest.prize}</p>
        <p className="text-sm text-slate-400">{contest.entries} заявок</p>
      </div>
      <button
        type="button"
        onClick={() => open('soon')}
        className="mt-5 w-full rounded-full bg-emerald-500 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
      >
        Участвовать
      </button>
    </div>
  )
}

function Konkursy() {
  const { open } = useModal()

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Конкурсы</h1>
          <p className="mt-1 text-slate-500">
            Предложите лучшую идею и получите денежный приз
          </p>
        </div>
        <button
          type="button"
          onClick={() => open('soon')}
          className="rounded-full bg-orange-400 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500"
        >
          Создать конкурс
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {CONTESTS.map((c) => (
          <ContestCard key={c.id} contest={c} />
        ))}
      </div>
    </div>
  )
}

export default Konkursy
