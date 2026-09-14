/**
 * 新闻数据（NEWS 页，三个分类对应导航下拉）
 * 每条新闻含标题、日期、摘要，融入 Google SEO 长尾关键词。
 * body 字段为可选的完整正文（HTML），有 body 的文章会生成独立页面。
 */
export interface NewsItem {
  title: string;
  slug: string;
  category: string;
  date: string;
  summary: string;
  body?: string[];
}

export const newsCategories = ['Company News', 'Industry Updates', 'Shipping Guides'];

export const news: NewsItem[] = [
  {
    title: 'Dantful Logistics Opens New European Consolidation Hub in Hamburg',
    slug: 'european-consolidation-hub-hamburg',
    category: 'Company News',
    date: '2026-08-15',
    summary:
      'Dantful Logistics has expanded its European network with a new bonded consolidation hub in Hamburg, Germany, strengthening our China-EU ocean freight FCL, LCL and DDP door-to-door logistics capabilities. The 4,000 sqm warehouse offers customs clearance, cross-docking, and Amazon FBA prep services for clients shipping from Shanghai, Ningbo and Shenzhen to all 27 EU member states.',
  },
  {
    title: 'Dantful Achieves IATA CEIV Pharma Certification for Temperature-Controlled Air Freight',
    slug: 'iata-ceiv-pharma-certification',
    category: 'Company News',
    date: '2026-07-20',
    summary:
      'Dantful Logistics has been awarded the IATA CEIV Pharma certification, enabling us to handle temperature-sensitive pharmaceutical air freight shipments from China to global destinations. This validates our cold-chain logistics capabilities, including active and passive temperature-controlled containers, GDP-compliant handling, and real-time temperature monitoring via IoT data loggers.',
  },
  {
    title: '2026 Trans-Pacific Container Freight Rate Forecast: What Shippers Should Expect',
    slug: 'trans-pacific-freight-rate-forecast-2026',
    category: 'Industry Updates',
    date: '2026-08-28',
    summary:
      'Container freight rates on the Trans-Pacific eastbound route (Shanghai to Los Angeles) are projected to remain volatile through Q4 2026 due to ongoing capacity reallocation and peak-season GRI surcharges. We analyze the impact on FCL 40HQ rates, LCL consolidation pricing, and Amazon FBA sea-express shipping costs, plus strategies to lock in preferential all-in rates with NVOCC contracts.',
  },
  {
    title: 'China-Europe Rail Freight Corridor Expands with New Xian to Duisburg Route',
    slug: 'china-europe-rail-freight-xian-duisburg',
    category: 'Industry Updates',
    date: '2026-08-10',
    summary:
      'The China-Europe Railway Express has added a direct corridor from Xian to Duisburg, Germany, offering a 14-18 day transit alternative between ocean and air freight. This rail freight service is ideal for high-value electronics, automotive parts and e-commerce goods requiring faster delivery than sea freight but at 60% lower cost than air freight from China to Europe.',
  },
  {
    title: 'How to File ISF-10 for US Imports: A Complete Guide for Chinese Exporters',
    slug: 'isf-10-filing-guide-us-imports',
    category: 'Shipping Guides',
    date: '2026-09-01',
    summary:
      'ISF-10 (Importer Security Filing) is mandatory for all ocean freight shipments to the United States. This guide explains the 24-hour pre-sailing filing requirement, the 10+2 data elements, HS code classification, how to avoid CBP penalties for late or incorrect filings, and how Dantful licensed US customs brokerage team handles the entire ISF process for FCL and LCL shipments from China.',
  },
  {
    title: 'Amazon FBA Prep Checklist: Labeling, Packaging and Pallet Requirements for Chinese Sellers',
    slug: 'amazon-fba-prep-checklist',
    category: 'Shipping Guides',
    date: '2026-08-22',
    summary:
      'Shipping to Amazon FBA fulfillment centers requires strict compliance with Amazon packaging and prep guidelines. This checklist covers FNSKU labeling, suffocation warning labels on polybags, ISPM-15 heat-treated pallets, box weight and dimension limits, ASIN shipping plan setup in Seller Central, and how our FBA prep team in Shenzhen ensures 100% compliance for LGB8, ONT8, LAX9, DFW6 and other US FCs.',
  },
  {
    title: 'Shipping from China to USA: Complete Guide 2026',
    slug: 'shipping-from-china-to-usa-guide-2026',
    category: 'Shipping Guides',
    date: '2026-09-14',
    summary:
      'Importing from China to the USA? This guide covers everything you need. Learn the top US ports: Los Angeles, Long Beach, Oakland, New York, Savannah and Houston. Compare ocean freight (FCL and LCL) vs air freight transit times and costs. Understand ISF-10 filing, Section 301 tariffs, and US customs clearance requirements. Discover DDP door-to-door shipping with all duties pre-paid. Find out how Amazon FBA sellers ship directly from Shenzhen and Yiwu to US fulfillment centers like ONT8 and LGB8. Get a quote within 2 hours from Dantful Logistics.',
    body: [
      '<h2>Top US Ports for Imports from China</h2>',
      '<p>The United States has several major ports receiving cargo from China. Knowing which port to use can save you time and money.</p>',
      '<p><strong>West Coast ports</strong> are closer to Asia, meaning shorter transit times. Los Angeles and Long Beach are the busiest. They handle over 60% of China-US ocean freight. Oakland serves Northern California. Seattle and Tacoma serve the Pacific Northwest.</p>',
      '<p><strong>East Coast ports</strong> take longer to reach but avoid West Coast congestion. New York and Newark are the largest. Savannah is growing fast. Houston is ideal for Gulf Coast deliveries.</p>',
      '<p>Choosing the right port depends on your final destination. If your warehouse is in California, use Los Angeles. If your customers are in New York, ship to the East Coast directly.</p>',
      '<h2>Ocean Freight vs Air Freight: Which to Choose?</h2>',
      '<p>Ocean freight is the most popular choice for China to USA shipping. It is cost-effective and handles large volumes well.</p>',
      '<h3>FCL (Full Container Load)</h3>',
      '<p>FCL means you rent an entire container. A 40HQ container fits about 68 CBM of cargo. Transit time from Shenzhen to Los Angeles is 14-18 days. FCL is best for shipments over 15 CBM. Your cargo is sealed at the factory and not opened until arrival. This reduces damage risk.</p>',
      '<h3>LCL (Less than Container Load)</h3>',
      '<p>LCL means you share a container with other shippers. You pay only for the space you use. LCL is ideal for small shipments under 15 CBM. Transit takes 18-25 days, slightly longer than FCL due to consolidation. LCL costs more per CBM but less total for small cargo.</p>',
      '<h3>Air Freight</h3>',
      '<p>Air freight is the fastest option. Delivery takes 2-7 days from China to USA. It is ideal for urgent, high-value, or lightweight cargo. Express service via FedEx, UPS, or DHL takes 2-3 days. Economy air freight takes 5-7 days. Air freight costs 5-10x more than ocean freight per kg.</p>',
      '<h2>US Customs Clearance Requirements</h2>',
      '<p>Every shipment from China to the USA must clear US Customs and Border Protection (CBP). Here is what you need to know.</p>',
      '<h3>ISF-10 Filing</h3>',
      '<p>ISF-10 (Importer Security Filing) is mandatory for all ocean freight. You must file it at least 24 hours before the vessel sails from China. The filing includes 10 data elements such as seller, buyer, origin, and HS code. Late or incorrect filing can result in CBP penalties up to $5,000. <a href="/services/customs-clearance/">Our licensed US customs brokerage team</a> handles the entire ISF process for you.</p>',
      '<h3>Section 301 Tariffs</h3>',
      '<p>Section 301 tariffs apply to many Chinese goods. Rates range from 7.5% to 25% depending on the product. You must check if your HS code is on the tariff list. These tariffs are paid in addition to normal customs duties. DDP shipping includes all tariffs in one upfront price, so you have no surprises.</p>',
      '<h3>Customs Bond</h3>',
      '<p>A customs bond is required for all commercial imports. It guarantees payment of duties and compliance with CBP regulations. Single-entry bonds cover one shipment. Continuous bonds cover all shipments for one year. We can arrange the right bond for your import volume.</p>',
      '<h2>DDP Door-to-Door Shipping from China to USA</h2>',
      '<p>DDP (Delivered Duty Paid) is the easiest shipping method for importers. You pay one all-in price. We handle everything else.</p>',
      '<p>Our DDP service includes: factory pickup in China, export customs clearance, ocean or air freight, import customs clearance, duty and tax payment, and last-mile delivery to your US address. No hidden charges. No surprise fees. You just wait for your cargo to arrive.</p>',
      '<p>DDP is perfect for Amazon FBA sellers, first-time importers, and businesses that want a hassle-free experience. <a href="/services/door-to-door/">Learn more about our DDP door-to-door service</a>.</p>',
      '<h2>Amazon FBA Shipping from China to USA</h2>',
      '<p>Amazon FBA sellers need to ship inventory directly to Amazon fulfillment centers. We handle the entire process.</p>',
      '<p>Our FBA prep services include: FNSKU labeling, polybagging, suffocation warning labels, bubble wrapping, and palletization. We ensure 100% compliance with Amazon FBA requirements. We ship to all major US FCs including ONT8 (California), LGB8 (California), LAX9 (California), DFW6 (Texas), and MEM1 (Tennessee).</p>',
      '<p>Sea-express is the most popular FBA route. Ocean freight from Shenzhen to Los Angeles takes 14-18 days. Then trucking to the Amazon FC takes 1-3 days. Total door-to-Amazon time is about 20-25 days. <a href="/services/amazon-fba/">Learn more about our Amazon FBA prep service</a>.</p>',
      '<h2>Get a Quote in 2 Hours</h2>',
      '<p>Ready to ship from China to the USA? We provide quotes within 2 hours. No obligations. Just tell us your cargo details and destination. We will recommend the best shipping method for your needs and budget.</p>',
      '<p><a href="/contact/">Contact us now</a> or WhatsApp +86 15143552568. Our team is ready to help you ship smarter from China to the USA.</p>',
    ],
  },
];