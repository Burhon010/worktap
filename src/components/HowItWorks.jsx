const STEPS = [
  {
    icon: '🧑‍💼',
    title: 'Выберите услугу',
    text: 'В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.',
  },
  {
    icon: '💵',
    title: 'Оплатите',
    text: 'Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите.',
  },
  {
    icon: '📝',
    title: 'Получите результат',
    text: 'Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.',
  },
]

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-extrabold text-slate-900">
        Как решать задачи на WorkTap?
      </h2>
      <p className="mt-1 text-slate-500">
        Идеально подходит для бизнеса и частных лиц
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.title}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
              {s.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">
              {s.title}
            </h3>
            <p className="max-w-xs text-sm text-slate-500">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
