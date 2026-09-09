/**
 * 新闻数据（NEWS 页，三个分类对应导航下拉）
 * 每条新闻含标题、日期、摘要，融入 Google SEO 长尾关键词。
 */
export interface NewsItem {
  title: string;
  category: string;
  date: string;
  summary: string;
}

export const newsCategories = ['Company News', 'Industry Updates', 'Shipping Guides'];

export const news: NewsItem[] = [
  {
    title: 'Dantful Logistics Opens New European Consolidation Hub in Hamburg',
    category: 'Company News',
    date: '2026-08-15',
    summary:
      'Dantful Logistics has expanded its European network with a new bonded consolidation hub in Hamburg, Germany, strengthening our China-EU ocean freight FCL, LCL and DDP door-to-door logistics capabilities. The 4,000 sqm warehouse offers customs clearance, cross-docking, and Amazon FBA prep services for clients shipping from Shanghai, Ningbo and Shenzhen to all 27 EU member states.',
  },
  {
    title: 'Dantful Achieves IATA CEIV Pharma Certification for Temperature-Controlled Air Freight',
    category: 'Company News',
    date: '2026-07-20',
    summary:
      'Dantful Logistics has been awarded the IATA CEIV Pharma certification, enabling us to handle temperature-sensitive pharmaceutical air freight shipments from China to global destinations. This validates our cold-chain logistics capabilities, including active and passive temperature-controlled containers, GDP-compliant handling, and real-time temperature monitoring via IoT data loggers.',
  },
  {
    title: '2026 Trans-Pacific Container Freight Rate Forecast: What Shippers Should Expect',
    category: 'Industry Updates',
    date: '2026-08-28',
    summary:
      'Container freight rates on the Trans-Pacific eastbound route (Shanghai to Los Angeles) are projected to remain volatile through Q4 2026 due to ongoing capacity reallocation and peak-season GRI surcharges. We analyze the impact on FCL 40HQ rates, LCL consolidation pricing, and Amazon FBA sea-express shipping costs, plus strategies to lock in preferential all-in rates with NVOCC contracts.',
  },
  {
    title: 'China-Europe Rail Freight Corridor Expands with New Xian to Duisburg Route',
    category: 'Industry Updates',
    date: '2026-08-10',
    summary:
      'The China-Europe Railway Express has added a direct corridor from Xian to Duisburg, Germany, offering a 14-18 day transit alternative between ocean and air freight. This rail freight service is ideal for high-value electronics, automotive parts and e-commerce goods requiring faster delivery than sea freight but at 60% lower cost than air freight from China to Europe.',
  },
  {
    title: 'How to File ISF-10 for US Imports: A Complete Guide for Chinese Exporters',
    category: 'Shipping Guides',
    date: '2026-09-01',
    summary:
      'ISF-10 (Importer Security Filing) is mandatory for all ocean freight shipments to the United States. This guide explains the 24-hour pre-sailing filing requirement, the 10+2 data elements, HS code classification, how to avoid CBP penalties for late or incorrect filings, and how Dantful licensed US customs brokerage team handles the entire ISF process for FCL and LCL shipments from China.',
  },
  {
    title: 'Amazon FBA Prep Checklist: Labeling, Packaging and Pallet Requirements for Chinese Sellers',
    category: 'Shipping Guides',
    date: '2026-08-22',
    summary:
      'Shipping to Amazon FBA fulfillment centers requires strict compliance with Amazon packaging and prep guidelines. This checklist covers FNSKU labeling, suffocation warning labels on polybags, ISPM-15 heat-treated pallets, box weight and dimension limits, ASIN shipping plan setup in Seller Central, and how our FBA prep team in Shenzhen ensures 100% compliance for LGB8, ONT8, LAX9, DFW6 and other US FCs.',
  },
];