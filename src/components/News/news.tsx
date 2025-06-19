import Link from 'next/link';

const newsList = [
  {
    id: 1,
    title: '公司荣获2024年度创新奖',
    date: '2024-06-01',
    summary:
      '我司在生物科技领域的创新成果获得业界高度认可，荣获2024年度创新奖。',
  },
  {
    id: 2,
    title: '新产品发布会圆满举行',
    date: '2024-05-20',
    summary: '新一代生物制药产品发布会在上海成功举办，吸引了众多行业专家。',
  },
  {
    id: 3,
    title: '与高校合作推动科研发展',
    date: '2024-05-10',
    summary: '公司与多所高校签署合作协议，共同推动生物医药科研进步。',
  },
];

export const NewsList = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">新闻资讯</h1>
      <ul className="space-y-6">
        {newsList.map((news) => (
          <li
            key={news.id}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{news.date}</p>
            <p className="text-gray-700 mb-4">{news.summary}</p>
            <Link
              href={`/news/${news.id}`}
              className="text-blue-600 hover:underline"
            >
              阅读详情 &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
