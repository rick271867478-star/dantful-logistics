/**
 * 客户案例数据（CASE 页）
 * 每个案例按"背景 -> 问题 -> 方案 -> 结果"结构撰写，融入 Google SEO 长尾关键词。
 */
export interface CaseItem {
  slug: string;       // 新增：用于锚点 /case/#{slug}
  title: string;
  industry: string;
  region: string;     // 新增：region slug（north-america / europe / australia / southeast-asia 等）
  summary: string;
  results: string[];  // 新增：关键结果指标（如 "22% cost saving"）
}

export const featuredRegions: string[] = ['north-america', 'europe', 'australia'];

export const cases: CaseItem[] = [
  {
    slug: 'amazon-fba-shenzhen-los-angeles',
    title: 'Amazon FBA Sea-Express: 40HQ FCL Shenzhen to Los Angeles in 18 Days',
    industry: 'E-commerce',
    region: 'north-america',
    summary:
      'A US-based kitchenware Amazon seller needed 150 CBM of stock delivered to LGB8, ONT8 and LAX9 fulfillment centers before Prime Day. We arranged a 40HQ FCL container from Shenzhen Yantian to Long Beach with 18-day port-to-port Trans-Pacific transit, handled ISF-10 filing, US customs clearance, and truck delivery to three Amazon FCs -- 5 days ahead of schedule, saving 22% on landed cost versus their previous freight forwarder.',
    results: ['22% cost saving', '5 days ahead of schedule', '3 Amazon FCs delivered'],
  },
  {
    slug: 'cnc-machinery-shanghai-hamburg',
    title: 'Project Cargo: Oversize CNC Machinery Break-Bulk Shanghai to Hamburg',
    industry: 'Machinery',
    region: 'europe',
    summary:
      'A German manufacturer required shipping of three oversize CNC machining centers (total 42 tons, OOG dimensions) from Shanghai to Hamburg. We coordinated break-bulk loading on a Maersk vessel, arranged specialized heavy-lift rigging, obtained all DG and OOG permits, and provided marine insurance coverage. Cargo arrived at Hamburg port in 32 days with zero damage; our Hamburg partner handled EU import customs clearance and door delivery.',
    results: ['Zero damage', '32 days port-to-port', 'Full DG/OOG permits'],
  },
  {
    slug: 'lcl-ddp-furniture-guangzhou-sydney',
    title: 'LCL Consolidation + DDP: Flat-Pack Furniture Guangzhou to Sydney',
    industry: 'Furniture',
    region: 'australia',
    summary:
      'An Australian furniture retailer sourcing flat-pack products from 6 Guangzhou factories needed a single consolidated shipment delivered DDP to their Sydney warehouse. We collected goods from all suppliers, performed AQL Level II quality inspection at our Shenzhen warehouse, consolidated into one LCL container, handled Australian import duties, GST and AQIS biosecurity clearance, and delivered door-to-door in 16 days with zero customs delays.',
    results: ['16 days door-to-door', 'Zero customs delays', '6 suppliers consolidated'],
  },
  {
    slug: 'fast-fashion-textile-yiwu-newyork',
    title: 'Urgent Air Freight: Fast-Fashion Textile Yiwu to New York JFK',
    industry: 'Textile',
    region: 'north-america',
    summary:
      'A fast-fashion brand needed 2.5 tons of textile products shipped from Yiwu to New York within 5 days for a seasonal product launch. We arranged same-day factory pickup, trucking to PVG airport, and booked space on a Cathay Pacific cargo flight via Hong Kong to JFK. With proper HS code classification and duty documentation, the cargo cleared US customs in 4 hours and reached the client warehouse on day 4.',
    results: ['4 days delivery', '4-hour US customs clearance', 'Same-day pickup'],
  },
  {
    slug: 'dg-lithium-batteries-shenzhen-rotterdam',
    title: 'DG Cargo Air Freight: Lithium Batteries Shenzhen to Rotterdam',
    industry: 'Electronics',
    region: 'europe',
    summary:
      'A Shenzhen electronics manufacturer needed to ship 8 pallets of UN3480 lithium-ion batteries (Class 9 DG cargo) to Rotterdam by air. Our IATA-certified DG team verified MSDS and UN38.3 test reports, arranged PI965-compliant packaging and labeling, booked space on an Emirates SkyCargo freighter via Dubai, and filed ENS pre-manifest declarations. The shipment arrived safely at Schiphol Airport in 5 days with full regulatory compliance.',
    results: ['Full IATA DG compliance', '5 days transit', 'UN38.3 verified'],
  },
  {
    slug: 'auto-parts-ddp-ningbo-mexico-city',
    title: 'Door-to-Door DDP: Auto Parts Ningbo to Mexico City',
    industry: 'Auto Parts',
    region: 'north-america',
    summary:
      'A Mexican auto parts distributor required JIT delivery of 12 pallets of components from a Ningbo supplier to their Mexico City warehouse. We arranged ocean FCL from Ningbo to Manzanillo, handled all Mexico import customs clearance, IVA and DTA tax prepayment under the DDP Incoterm, and provided last-mile truck delivery to the client warehouse in 24 days -- 40% cheaper than the air freight alternative and within the JIT production window.',
    results: ['40% cheaper than air', '24 days transit', 'All taxes pre-paid'],
  },
];
