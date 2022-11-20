const normalizedGenres = [
  {
    id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
    name: "Фэнтези",
    books: [
      "d75f762a-eadd-49be-8918-ed0daa8dd024",
      "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
      "bd129641-c0eb-432b-84b6-8b81d2930358",
    ],
  },
  {
    id: "bb8afbec-2fec-491f-93e9-7f13950dd80b",
    name: "Детектив",
    books: [
      "25402233-0095-49ea-9939-1e67ed89ffb9",
      "90902233-0095-49ea-9939-1e67ed89ffb9",
    ],
  },
  {
    id: "982bfbce-c5e0-41a0-9f99-d5c20ecee49d",
    name: "Ужасы",
    books: [
      "08c9ffa0-d003-4310-9e15-20978743296e",
      "64a4967c-2080-4a99-9074-4655a4569a95",
      "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
    ],
  },
];

const normalizedBooks = [
  {
    id: "d75f762a-eadd-49be-8918-ed0daa8dd024",
    name: "Несносное проклятье некроманта",
    author: "Блинова Маргарита",
    price: 250,
    rating: 4,
    reviews: [
      "5909796d-5030-4e36-adec-68b8f9ec2d96",
      "429dea85-11dd-4054-a31e-c60c92e17255",
    ],
  },
  {
    id: "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
    name: "Книга ночи",
    author: "Блэк Холли",
    price: 250,
    rating: 4,
    reviews: [
      "53b642d7-5e86-4717-a466-0640a1dee076",
      "c27ab88e-375c-4e98-aa94-8a180150a797",
      "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
    ],
  },
  {
    id: "bd129641-c0eb-432b-84b6-8b81d2930358",
    name: "Благие знамения",
    price: 250,
    rating: 4,
    reviews: ["13b642d7-5e86-4717-a466-0640a1dee076"],
  },
  {
    id: "25402233-0095-49ea-9939-1e67ed89ffb9",
    name: "Целительница. Первое испытание",
    author: "Бульба Наталья",
    price: 250,
    rating: 4,
    reviews: [
      "c27ab88e-375c-4e98-aa94-8a180150a797",
      "429dea85-11dd-4054-a31e-c60c92e17255",
    ],
  },
  {
    id: "90902233-0095-49ea-9939-1e67ed89ffb9",
    name: "Собака Баскервилей",
    author: "Артур Конан Дойл",
    price: 250,
    rating: 4,
    reviews: [
      "c27ab88e-375c-4e98-aa94-8a180150a797",
      "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
    ],
  },
  {
    id: "08c9ffa0-d003-4310-9e15-20978743296e",
    name: "Убийство на улице Морг",
    author: "Эдгар Аллан По",
    price: 250,
    rating: 4,
    reviews: [
      "c27ab88e-375c-4e98-aa94-8a180150a797",
      "53b642d7-5e86-4717-a466-0640a1dee076",
    ],
  },
  {
    id: "64a4967c-2080-4a99-9074-4655a4569a95",
    name: "Кладбище домашних животных",
    author: "Стивен Кинг",
    price: 250,
    rating: 4,
    reviews: [
      "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
      "c27ab88e-375c-4e98-aa94-8a180150a797",
    ],
  },
  {
    id: "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
    name: "Противостояние",
    author: "Стивен Кинг",
    price: 250,
    rating: 4,
    reviews: [
      "429dea85-11dd-4054-a31e-c60c92e17255",
      "c27ab88e-375c-4e98-aa94-8a180150a797",
    ],
  },
];

const normalizedReviews = [
  {
    id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
    userId: "a304959a-76c0-4b34-954a-b38dbf310360",
    text: "Not bad",
    rating: 5,
  },
  {
    id: "429dea85-11dd-4054-a31e-c60c92e17255",
    userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    text: "Грязно",
    rating: 3,
  },
  {
    id: "53b642d7-5e86-4717-a466-0640a1dee076",
    userId: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
    text: "Хороший попкорн",
    rating: 5,
  },
  {
    id: "c27ab88e-375c-4e98-aa94-8a180150a797",
    userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    text: "Жесткие стулья",
    rating: 4,
  },
  {
    id: "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
    userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
    text: "Отличный звук",
    rating: 5,
  },
  {
    id: "13b642d7-5e86-4717-a466-0640a1dee076",
    userId: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
    text: "Удобное расположение",
    rating: 5,
  },
];

const normalizedUsers = [
  {
    id: "a304959a-76c0-4b34-954a-b38dbf310360",
    name: "Antony",
  },
  {
    id: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
    name: "Diana",
  },
  {
    id: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
    name: "Lolly",
  },
  {
    id: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
    name: "Agata",
  },
  {
    id: "1547335a-ea18-4547-a73d-32bd6e9f651c",
    name: "Rebeca",
  },
  {
    id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    name: "Sam",
  },
];

module.exports = {
  books: normalizedBooks,
  genres: normalizedGenres,
  reviews: normalizedReviews,
  users: normalizedUsers,
};
