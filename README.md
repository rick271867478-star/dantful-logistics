# 货代网站正式版（freight-site-v2）

按照《网站需求README.md》需求文档用 Astro 构建。所有待补充素材都用 `TODO【待补充】` 或灰色斜纹占位图标出，全局搜索 `TODO` 即可找到全部待填点。

## 本地运行

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 预览构建结果
```

## 已按需求文档实现的功能

| 需求 | 状态 |
|---|---|
| 顶部信息条：左手机号+邮箱、右三个社媒图标（可点击） | ✅ |
| 顶部信息条下滑消失，导航栏吸顶 | ✅ |
| 导航：Logo + 7 个菜单项，SERVICES/SHIP BY REGION/NEWS 悬停下拉 | ✅ |
| 手机端：汉堡菜单 + 下拉改点击展开 | ✅ |
| Banner：两张图（海运/空运）5 秒自动轮播 + 手动切换，中间文字 + CONTACT 按钮跳转表单 | ✅ |
| OUR SERVICES：6 个卡片，图上文下，可点击进详情页 | ✅ |
| OUR ADVANTAGES：6 个图标 + 文字 | ✅ |
| ABOUT US：左图右文 | ✅ |
| CLIENTS SAY：头像 + 名字 + 职位 + 评价 | ✅ |
| GET A QUOTE：5 字段，邮箱电话二选一必填（其余选填）+ SUBMIT | ✅ |
| Google SEO：每页独立 TDK / Canonical / OG / JSON-LD / sitemap / robots.txt | ✅ |
| 手机平板响应式 | ✅ |

## 数据文件（改内容不用动页面代码）

- `src/consts.ts` — 公司名/电话/邮箱/地址/三个社媒链接
- `src/data/services.ts` — 6 个服务（导航下拉、首页卡片、详情页自动同步）
- `src/data/regions.ts` — SHIP BY REGION 的 4 个地区和航线表
- `src/data/cases.ts` — CASE 页的 6 个案例
- `src/data/news.ts` — NEWS 页的 3 个分类和新闻

## 待补充清单（拿到素材后替换）

1. **域名**：`astro.config.mjs` 的 `site` + `public/robots.txt`
2. **Logo**：`src/components/Header.astro` 里标注的位置
3. **Banner 两张大图**（1920×800）：`src/components/Banner.astro`
4. **6 张服务图**（600×400）、**关于页图片**、**案例图**：各页面里的灰色占位块
5. **3 个客户头像 + 评价**：`src/pages/index.astro` 的 CLIENTS SAY 板块
6. **表单地址**：`src/components/QuoteForm.astro` 里的 Formspree action
7. **Google Maps 嵌入**：`src/pages/contact.astro`
8. 全局搜索 `TODO` 替换所有文案

## 部署

构建产物在 `dist/`，推荐 Vercel / Netlify / Cloudflare Pages（免费 HTTPS + 全球 CDN）。
上线后到 Google Search Console 提交 `sitemap-index.xml`。
