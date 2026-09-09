/**
 * 地区数据（SHIP BY REGION 页）
 * id 用于锚点跳转：/ship-by-region/#north-america
 * intro 段落融入 Google SEO 长尾关键词。
 */
export interface Region {
  id: string;
  name: string;
  intro: string;
  routes: { from: string; to: string; mode: string; transit: string }[];
}

export const regions: Region[] = [
  {
    id: 'north-america',
    name: 'North America',
    intro:
      'We provide comprehensive ocean freight (FCL and LCL) and air freight shipping services from all major Chinese ports to the USA and Canada. Key US destinations include Los Angeles (LAX/LGB), Long Beach, New York/Newark, Chicago, Dallas, Seattle and Miami, served by Maersk, MSC, COSCO, ONE and Evergreen with weekly fixed-day sailings. Canadian services cover Vancouver, Prince Rupert and Toronto. Our in-house licensed US customs brokerage team handles ISF-10 filings, AMS, and complete import clearance for both commercial cargo and Amazon FBA shipments, with DDP door-to-door delivery to any address.',
    routes: [
      { from: 'Shanghai', to: 'Los Angeles', mode: 'Ocean FCL', transit: '14-18 days' },
      { from: 'Shenzhen', to: 'New York', mode: 'Ocean FCL', transit: '25-30 days' },
      { from: 'Guangzhou', to: 'Chicago', mode: 'Air', transit: '4-6 days' },
    ],
  },
  {
    id: 'europe',
    name: 'Europe',
    intro:
      'Our China-to-Europe freight forwarding network covers all 27 EU member states plus the United Kingdom, with direct ocean FCL and LCL consolidation services to Hamburg, Rotterdam, Antwerp, Felixstowe and Le Havre. Carrier partners include Maersk, MSC, CMA CGM, ONE and Evergreen, with weekly sailings from Shanghai, Ningbo, Shenzhen and Guangzhou. For time-sensitive cargo, our air freight service connects PVG, SZX, CAN and HKG with Frankfurt, Amsterdam, Paris CDG and London Heathrow via Air China Cargo, Lufthansa Cargo, Cathay Pacific and Emirates SkyCargo. We handle EU import customs clearance, EORI registration, ENS pre-manifest declarations and FORM E ASEAN FTA certificates of origin.',
    routes: [
      { from: 'Shanghai', to: 'Rotterdam', mode: 'Ocean FCL', transit: '28-35 days' },
      { from: 'Ningbo', to: 'Hamburg', mode: 'Ocean FCL', transit: '30-38 days' },
      { from: 'Hong Kong', to: 'Frankfurt', mode: 'Air', transit: '4-6 days' },
    ],
  },
  {
    id: 'southeast-asia',
    name: 'Southeast Asia',
    intro:
      'Southeast Asia is one of our fastest-growing shipping routes from China, covering Singapore, Thailand (Bangkok, Laem Chabang), Vietnam (Ho Chi Minh, Hai Phong), Philippines (Manila), Malaysia (Port Klang), Indonesia (Jakarta, Surabaya) and Cambodia. We offer ocean FCL, LCL consolidation and air freight from Shenzhen, Guangzhou, Shanghai and Xiamen, with transit times as short as 5-7 days for nearby ports. Our bonded warehousing in Shenzhen provides free 30-day storage for LCL consolidation from multiple Chinese suppliers, with DDP door-to-door delivery including import duties, VAT and certificates of origin under the ASEAN-China FTA and RCEP agreements.',
    routes: [
      { from: 'Shenzhen', to: 'Singapore', mode: 'Ocean FCL', transit: '5-7 days' },
      { from: 'Guangzhou', to: 'Bangkok', mode: 'Ocean LCL', transit: '7-10 days' },
      { from: 'Shenzhen', to: 'Manila', mode: 'Air', transit: '2-3 days' },
    ],
  },
  {
    id: 'australia',
    name: 'Australia & Oceania',
    intro:
      'We offer direct ocean freight (FCL and LCL) and air freight shipping from China to Australia and New Zealand, serving Sydney, Melbourne, Brisbane, Adelaide, Fremantle, Auckland and Wellington. Ocean carriers include Maersk, MSC, COSCO, ONE and ANL, with weekly sailings from Shanghai, Shenzhen, Ningbo and Guangzhou. Our DDP door-to-door service covers Australian import duties, GST (10%), and AQIS biosecurity quarantine inspections, plus complete customs brokerage for both commercial cargo and Amazon Australia FBA shipments. Air freight via Air China Cargo, Cathay Pacific and Qantas Freight connects PVG and HKG with Sydney, Melbourne and Auckland in 3-5 days.',
    routes: [
      { from: 'Shanghai', to: 'Sydney', mode: 'Ocean FCL', transit: '16-20 days' },
      { from: 'Shenzhen', to: 'Melbourne', mode: 'Ocean FCL', transit: '18-22 days' },
      { from: 'Guangzhou', to: 'Auckland', mode: 'Air', transit: '3-5 days' },
    ],
  },
];