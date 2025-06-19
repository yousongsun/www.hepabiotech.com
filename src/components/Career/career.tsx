import type React from 'react';

const jobList = [
  {
    title: '研发工程师',
    location: '上海',
    description: '负责新产品的研发与技术创新，参与项目全流程。',
    requirements: [
      '本科及以上学历，生物、化学相关专业',
      '具备良好的团队协作能力',
      '有相关工作经验者优先',
    ],
  },
  {
    title: '市场专员',
    location: '北京',
    description: '负责市场调研、品牌推广及客户关系维护。',
    requirements: [
      '本科及以上学历，市场营销相关专业',
      '具备良好的沟通能力',
      '有生物医药行业经验者优先',
    ],
  },
];

export const Career: React.FC = () => (
  <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
      加入我们
    </h1>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-blue-800">
        公司愿景与职业发展
      </h2>
      <p className="text-gray-700 leading-relaxed">
        在HEPA
        Biotech，我们致力于推动生物科技创新，改善人类健康。我们相信每一位员工都是公司最宝贵的财富。我们为员工提供广阔的发展空间、完善的培训体系和富有竞争力的薪酬福利。加入我们，与优秀的团队一起成长，实现自我价值，共创美好未来！
      </p>
    </section>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-5 text-blue-800">职位招聘</h2>
      {jobList.map((job, idx) => (
        <div
          key={idx.toString()}
          className="border border-gray-200 rounded-lg p-6 mb-6 bg-gray-50 shadow-sm"
        >
          <h3 className="text-xl font-bold text-blue-700 mb-2">{job.title}</h3>
          <p className="mb-1">
            <strong className="text-gray-600">工作地点：</strong>
            <span className="text-gray-800">{job.location}</span>
          </p>
          <p className="mb-1">
            <strong className="text-gray-600">岗位描述：</strong>
            <span className="text-gray-800">{job.description}</span>
          </p>
          <p className="mb-1">
            <strong className="text-gray-600">岗位要求：</strong>
          </p>
          <ul className="list-disc list-inside pl-4 text-gray-700">
            {job.requirements.map((req, i) => (
              <li key={i.toString()}>{req}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-3 text-blue-800">应聘方式</h2>
      <p className="text-gray-700">
        请将您的简历发送至{' '}
        <a
          href="mailto:hr@hepabiotech.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          hr@hepabiotech.com
        </a>
        ，邮件标题请注明“应聘职位+姓名”。
      </p>
    </section>
  </div>
);
