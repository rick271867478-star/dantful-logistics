/**
 * 新闻数据（NEWS 页，三个分类对应导航下拉）
 * 每条新闻含标题、日期、摘要，融入 Google SEO 长尾关键词。
 * body 字段为可选的完整正文（HTML），有 body 的文章会生成独立页面。
 */
export interface NewsItem {
  title: string;
  slug: string;
  category: string;
  region?: string;
  date: string;
  summary: string;
  body?: string[];
}

export const newsCategories = ['Company News', 'Industry Updates', 'Shipping Guides'];
export const newsRegions = ['north-america', 'europe', 'middle-east', 'africa', 'australia', 'southeast-asia', 'south-america'];

export const news: NewsItem[] = [
  {
    title: 'Case Study: 40HQ Shipment from Shenzhen to Montreal, Canada',
    slug: 'case-study-40hq-shenzhen-to-montreal',
    category: 'Company News',
    region: 'north-america',
    date: '2026-10-20',
    summary:
      'How a Montreal importer verified our credentials and shipped a 40HQ container from Shenzhen to Montreal door-to-door. Full case study with timeline.',
    body: [
      '<p><strong>Client:</strong> a home and garden products importer based in Montreal, Quebec. <strong>Cargo:</strong> one 40HQ container of outdoor furniture sets. <strong>Route:</strong> factory pickup in Foshan, export through Shenzhen Yantian, door-to-door delivery to a warehouse in Montreal. This case study walks through how a first email became a closed deal, and what importers can learn from the process.</p>',
      '<h2>The Client and the Cargo</h2>',
      '<p>The client is a family-owned importer in Montreal that has been sourcing outdoor furniture from factories in Guangdong for several years. Rising rates and missed sailings with their previous forwarder pushed them to look for a new long-term partner. Their search was simple: freight forwarder China to Canada. That search led them to our <a href="/routes/china-to-canada/">China to Canada shipping guide</a>, and a first inquiry email arrived the same day.</p>',
      '<h2>Step 1: The First Email</h2>',
      '<p>The inquiry email was well prepared. It listed the product name, carton dimensions, total volume of about 62 CBM, gross weight, pickup city, and the delivery postal code in Montreal. Clear data like this allows a forwarder to quote accurately within hours. We replied the same day with three service options and asked for the packing list to confirm every detail.</p>',
      '<h2>Step 2: Quotation and Negotiation</h2>',
      '<p>Over the next two weeks we exchanged about a dozen emails and WhatsApp messages. The client compared our offer with three other forwarders. The negotiation focused on three points:</p>',
      '<ul>',
      '<li><strong>Price:</strong> an all-in DDP quote for the 40HQ, covering ocean freight, Canadian duties and taxes, and last-mile delivery. It was not the lowest offer they received, but it was the most transparent.</li>',
      '<li><strong>Transit time:</strong> 30-38 days door-to-door. We presented two routings, an all-water service to Montreal, and a Vancouver arrival with rail transfer, so the client could balance cost against speed.</li>',
      '<li><strong>Terms:</strong> DDP versus FOB. The client finally chose DDP so that all duties and taxes were settled in one price with no surprise bills. See our <a href="/services/door-to-door/">DDP door-to-door service</a> for details.</li>',
      '</ul>',
      '<h2>Step 3: Due Diligence - How the Client Verified Us</h2>',
      '<p>Before paying anything, the client ran a serious background check. They asked for our business license, our NVOCC registration, sample bills of lading from past shipments, and references from existing customers. We sent a full document package the same week and invited them to a video call from our Shenzhen warehouse so they could see the operation with their own eyes.</p>',
      '<p>This step matters. A trustworthy <a href="/services/ocean-freight/">ocean freight</a> partner never refuses verification. If a forwarder hesitates to show its license or share past bill of lading samples, treat it as a red flag. You can review the licenses we hold on our <a href="/about/credentials/">company credentials page</a>.</p>',
      '<h2>Step 4: Booking, Loading and Export Clearance</h2>',
      '<p>After the deposit was settled, the booking was confirmed with the carrier for the intended sailing. Our trucking team picked up the cargo from two factories in Foshan, and the warehouse team supervised loading with photo and video records. Carton counts matched the packing list exactly. Our <a href="/services/customs-clearance/">customs team</a> filed the export declaration, and the container was gated in at Yantian ahead of the cut-off.</p>',
      '<h2>Ocean Transit and Delivery to Montreal</h2>',
      '<p>The container sailed from Yantian on schedule. Throughout the voyage the client received weekly status updates. On arrival, the container cleared CBSA import clearance smoothly because the pre-arrival data and the final documents had been prepared in advance. From the rail ramp to the warehouse door in Montreal, final delivery took 2-3 days. Total door-to-door transit was 30-38 days, inside the promised window.</p>',
      '<h2>The Result</h2>',
      '<p>The first shipment arrived complete, undamaged and on time. Two months later the client booked a second 40HQ, and we now handle their recurring orders from Guangdong to Montreal on a fixed schedule. The deal closed not because we were the cheapest, but because every question had a clear answer and every document was ready before it was requested.</p>',
      '<h2>What Importers Can Learn from This Case</h2>',
      '<ul>',
      '<li><strong>Verify before you pay.</strong> Ask for the business license, NVOCC registration and past bill of lading samples. A licensed forwarder will send them the same day.</li>',
      '<li><strong>Put the routing in writing.</strong> Confirm whether your quote is all-water or via Vancouver rail, and what the door-to-door transit promise is.</li>',
      '<li><strong>Choose transparent terms.</strong> DDP with a single all-in price avoids surprise duty bills at destination.</li>',
      '</ul>',
      '<h2>Frequently Asked Questions</h2>',
      '<h3>How long does shipping from China to Montreal take?</h3>',
      '<p>Door-to-door ocean freight from Shenzhen to Montreal takes about 30-38 days: 24-30 days on the water plus customs clearance and inland delivery. Options via Vancouver with rail transfer can save about a week on certain schedules. Full details are in our <a href="/routes/china-to-canada/">China to Canada shipping guide</a>.</p>',
      '<h3>What documents should I check before choosing a freight forwarder?</h3>',
      '<p>At minimum, request the company business license, the NVOCC or freight forwarding registration, sample bills of lading from previous customers, and two reference contacts you can email directly. Our <a href="/about/credentials/">credentials page</a> lists the licenses we hold.</p>',
      '<h3>Can you handle DDP delivery to Canada?</h3>',
      '<p>Yes. We deliver DDP to Toronto, Montreal, Vancouver and Calgary with duties and GST included in one upfront price. Send your packing list and postal code for a fixed quote through our <a href="/contact/">contact page</a>.</p>',
      '<p>Planning your own shipment from China to Canada? <a href="/contact/">Request a quote</a> and receive an all-in rate within 2 hours, or message us on WhatsApp +86 15143552568.</p>',
    ],
  },
  {
    title: 'Dantful Logistics Opens New European Consolidation Hub in Hamburg',
    slug: 'european-consolidation-hub-hamburg',
    category: 'Company News',
    region: 'europe',
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
    region: 'north-america',
    date: '2026-08-28',
    summary:
      'Container freight rates on the Trans-Pacific eastbound route (Shanghai to Los Angeles) are projected to remain volatile through Q4 2026 due to ongoing capacity reallocation and peak-season GRI surcharges. We analyze the impact on FCL 40HQ rates, LCL consolidation pricing, and Amazon FBA sea-express shipping costs, plus strategies to lock in preferential all-in rates with NVOCC contracts.',
  },
  {
    title: 'China-Europe Rail Freight Corridor Expands with New Xian to Duisburg Route',
    slug: 'china-europe-rail-freight-xian-duisburg',
    category: 'Industry Updates',
    region: 'europe',
    date: '2026-08-10',
    summary:
      'The China-Europe Railway Express has added a direct corridor from Xian to Duisburg, Germany, offering a 14-18 day transit alternative between ocean and air freight. This rail freight service is ideal for high-value electronics, automotive parts and e-commerce goods requiring faster delivery than sea freight but at 60% lower cost than air freight from China to Europe.',
  },
  {
    title: 'How to File ISF-10 for US Imports: A Complete Guide for Chinese Exporters',
    slug: 'isf-10-filing-guide-us-imports',
    category: 'Shipping Guides',
    region: 'north-america',
    date: '2026-09-01',
    summary:
      'ISF-10 (Importer Security Filing) is mandatory for all ocean freight shipments to the United States. This guide explains the 24-hour pre-sailing filing requirement, the 10+2 data elements, HS code classification, how to avoid CBP penalties for late or incorrect filings, and how Dantful licensed US customs brokerage team handles the entire ISF process for FCL and LCL shipments from China.',
  },
  {
    title: 'Amazon FBA Prep Checklist: Labeling, Packaging and Pallet Requirements for Chinese Sellers',
    slug: 'amazon-fba-prep-checklist',
    category: 'Shipping Guides',
    region: 'north-america',
    date: '2026-08-22',
    summary:
      'Shipping to Amazon FBA fulfillment centers requires strict compliance with Amazon packaging and prep guidelines. This checklist covers FNSKU labeling, suffocation warning labels on polybags, ISPM-15 heat-treated pallets, box weight and dimension limits, ASIN shipping plan setup in Seller Central, and how our FBA prep team in Shenzhen ensures 100% compliance for LGB8, ONT8, LAX9, DFW6 and other US FCs.',
  },
  {
    title: 'Shipping from China to USA: Complete Guide 2026',
    slug: 'shipping-from-china-to-usa-guide-2026',
    category: 'Shipping Guides',
    region: 'north-america',
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