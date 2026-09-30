import { useState } from 'react'
import { CATEGORIES } from '../data/content'
import { useModal } from '../context/ModalContext'

function CreateOrder() {
  const { open } = useModal()
  const [form, setForm] = useState({
    title: '',
    category: CATEGORIES[0],
    budget: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
          ✅
        </div>
        <h1 className="mt-6 text-2xl font-extrabold text-slate-900">
          Заказ «{form.title}» создан!
        </h1>
        <p className="mt-3 text-slate-500">
          Специалисты уже видят ваш заказ в категории «{form.category}» и
          скоро начнут откликаться с предложениями.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm({ title: '', category: CATEGORIES[0], budget: '', description: '' })
          }}
          className="mt-8 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          Создать ещё один заказ
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <h1 className="text-2xl font-extrabold text-slate-900">
        Создать заказ
      </h1>
      <p className="mt-1 text-slate-500">
        Опишите задачу — специалисты сами откликнутся с предложениями
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Название заказа
          </label>
          <input
            required
            type="text"
            value={form.title}
            onChange={update('title')}
            placeholder="Например: Нужно сделать дизайн сайта"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Категория
          </label>
          <select
            value={form.category}
            onChange={update('category')}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-400"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Бюджет, тенге
          </label>
          <input
            required
            type="number"
            min="0"
            value={form.budget}
            onChange={update('budget')}
            placeholder="50000"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Описание задачи
          </label>
          <textarea
            required
            rows={5}
            value={form.description}
            onChange={update('description')}
            placeholder="Расскажите подробнее, что нужно сделать"
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Опубликовать заказ
          </button>
          <button
            type="button"
            onClick={() => open('soon')}
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-400"
          >
            Сохранить как черновик
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateOrder
