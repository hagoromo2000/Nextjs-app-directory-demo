import { z } from "zod";

// APIやDBから取得した値の形式を定義
export const zVersion = z.string().regex(/^\d+\.\d+\.\d+$/); // 3つの数字がピリオドで区切られているバージョン番号 例:1.0.0
export const zSetting = z.object({
  version: zVersion,
  faq: z.string(),
  tos: z.string(),
});

export type Settings = z.infer<typeof zSetting>; // zodの型定義から型を生成
