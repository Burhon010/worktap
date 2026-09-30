export const CATEGORIES = [
  'Тексты и переводы',
  'Разработка',
  'Дизайн',
  'Аудио, видео монтаж',
  'SEO и оптимизация',
  'Бизнес и жизнь',
  'Соцсети и реклама',
]

export const WORKS = [
  {
    title: 'Сделать дизайн интернет-магазина',
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    title: 'Верстка landing page',
    avatar: 'https://i.pravatar.cc/80?img=32',
    highlighted: true,
  },
  {
    title: 'Сделать дизайн сайта-каталога и посадить на какой нибудь ко...',
    avatar: 'https://i.pravatar.cc/80?img=45',
  },
  {
    title: 'Продвижение instagram',
    avatar: 'https://i.pravatar.cc/80?img=15',
  },
  {
    title: 'Срочно! Нужен веб дизайнер!',
    avatar: 'https://i.pravatar.cc/80?img=52',
  },
]

export const FREELANCERS = [
  {
    name: 'Марина Королёва',
    role: 'Разработчик PHP',
    projects: 65,
    rating: 4,
    online: true,
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    name: 'Семён Сергеев',
    role: 'Копирайтер',
    projects: 104,
    rating: 4,
    online: true,
    avatar: 'https://i.pravatar.cc/120?img=13',
  },
  {
    name: 'Ангелина Сорокина',
    role: 'Дизайнер сайтов',
    projects: 25,
    rating: 5,
    online: false,
    avatar: 'https://i.pravatar.cc/120?img=48',
  },
  {
    name: 'Никита Зайцев',
    role: 'Маркетолог',
    projects: 144,
    rating: 4,
    online: true,
    avatar: 'https://i.pravatar.cc/120?img=14',
  },
  {
    name: 'Наталья Захарова',
    role: 'Motion дизайнер',
    projects: 71,
    rating: 5,
    online: false,
    avatar: 'https://i.pravatar.cc/120?img=44',
  },
]

export const ORDERS = Array.from({ length: 10 }).map((_, i) => {
  const budgetValue = 30000 + i * 7500
  return {
    id: i + 1,
    title: 'Нужно сделать Дизайн сайта по тематике авто',
    author: 'Екатерина Иванова',
    avatar: 'https://i.pravatar.cc/80?img=' + (5 + i),
    projects: 25,
    rating: i % 3 === 0 ? 4 : 5,
    reviews: 15,
    time: '4 часа 28 минут назад',
    budgetValue,
    budget: `${budgetValue.toLocaleString('ru-RU')} тенге`,
    offers: 50,
  }
})
