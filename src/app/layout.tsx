import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '合珀生物',
  description:
    '聚焦于3D器官模型及器官芯片技术研发，为药物研发临床前阶段新靶点的发现与验证以及候选药物代谢分析， 有效性和毒副作用评价提供准确可靠的依据。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
