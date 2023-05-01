import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

// フォントの読み込み
const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

// ページのメタデータ
export const metadata = {
  title: "Next.js Awesome Memo App",
  description: "Generated by create next app",
};

// ページのレイアウト
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* ページやレイアウトの内容を表示 */}
      <body className={NotoSansJP.className}>{children}</body>
    </html>
  );
}
