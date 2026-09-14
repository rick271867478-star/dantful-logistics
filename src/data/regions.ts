/**
 * 地区数据（SHIP BY REGION 页）
 * slug 用于锚点跳转：/ship-by-region/#north-america
 * intro / overview / seoDescription 融入 Google SEO 长尾关键词。
 */
export interface RegionRoute {
  from: string;
  to: string;
  mode: string;
  transit: string;
}

export interface Region {
  slug: string;
  name: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  overview: string[];
  highlights: string[];
  relatedServices: string[];
  routes: RegionRoute[];
}

export const regions: Region[] = [
  {
    slug: 'north-america',
    name: 'North America',
    intro:
      'Direct ocean FCL, LCL consolidation and air freight from China to the USA and Canada. Weekly sailings to LA, Long Beach, New York and Vancouver with ISF-10 filing, US customs clearance and Amazon FBA DDP door-to-door delivery.',
    seoTitle: 'Shipping from China to North America | Dantful',
    seoDescription:
      'Shipping from China to North America: ocean FCL, LCL, air freight to LA, New York, Vancouver. ISF-10, US customs clearance, Amazon FBA DDP door-to-door.',
    overview: [
      'We ship direct ocean FCL and LCL consolidation from Shanghai, Shenzhen, Ningbo and Guangzhou to US West Coast ports. Los Angeles (LAX/LGB) and Long Beach are the main gateways. Transit is 14 to 18 days with weekly fixed-day sailings by Maersk, MSC, COSCO, ONE and Evergreen.',
      'US East Coast service calls at New York, Newark, Savannah and Miami. Transit is 25 to 30 days via Panama Canal. We handle AMS, ISF-10 filing and complete import customs clearance with our licensed US brokerage team.',
      'Canadian services cover Vancouver, Prince Rupert and Toronto. Vancouver is the fastest China-to-Canada port. Prince Rupert offers the shortest rail link to the Midwest and Toronto.',
      'ISF-10 must be filed 24 hours before vessel loading. We submit ISF-10, AMS and import entries in-house. Our DDP door-to-door service pre-pays all US duties, merchandise processing fees and customs bonds.',
      'Amazon FBA sellers ship to ONT8, LGB8, LAX9, EWR4, BFI3 and YYZ4 fulfillment centers. We handle FNSKU labeling, poly-bagging, palletization and direct FC appointments. Sea express, air express and UPS/FedEx courier modes are available.',
    ],
    highlights: ['Weekly direct FCL sailings', 'ISF-10 & US customs clearance', 'Amazon FBA door-to-FC', 'DDP all-in pricing'],
    relatedServices: ['ocean-freight', 'air-freight', 'amazon-fba', 'customs-clearance', 'door-to-door'],
    routes: [
      { from: 'Shanghai', to: 'Los Angeles', mode: 'Ocean FCL', transit: '14-18 days' },
      { from: 'Shenzhen', to: 'New York', mode: 'Ocean FCL', transit: '25-30 days' },
      { from: 'Guangzhou', to: 'Chicago', mode: 'Air', transit: '4-6 days' },
    ],
  },
  {
    slug: 'europe',
    name: 'Europe',
    intro:
      'Ocean FCL, LCL consolidation and air freight from China to all 27 EU member states plus the UK. Direct weekly sailings to Hamburg, Rotterdam, Antwerp and Felixstowe. We handle EORI, ENS and FORM E FTA certificates with DDP door-to-door delivery.',
    seoTitle: 'Shipping from China to Europe | Dantful',
    seoDescription:
      'Shipping from China to Europe: ocean FCL, LCL, air freight to Hamburg, Rotterdam, Antwerp. EORI, ENS, FORM E FTA certs. DDP door-to-door across EU 27 and UK.',
    overview: [
      'Our China-to-Europe network covers all 27 EU member states plus the United Kingdom. Direct ocean FCL and LCL consolidation services call at Hamburg, Rotterdam, Antwerp and Felixstowe. Weekly sailings from Shanghai, Ningbo, Shenzhen and Guangzhou.',
      'Carrier partners include Maersk, MSC, CMA CGM, ONE and Evergreen. Transit to Rotterdam is 28 to 35 days. Hamburg is 30 to 38 days via Suez. LCL consolidation runs weekly from Shenzhen.',
      'EU imports require EORI registration and ENS pre-manifest declaration 24 hours before loading. Our customs team files ENS, ICS2 and full import entries. We also issue FORM E ASEAN FTA and RCEP certificates of origin to cut import duty.',
      'Air freight connects PVG, SZX, CAN and HKG with Frankfurt, Amsterdam, Paris CDG and London Heathrow. Carriers include Air China Cargo, Lufthansa Cargo, Cathay Pacific and Emirates SkyCargo. Transit is 4 to 6 days door-to-door.',
    ],
    highlights: ['Direct FCL to all EU ports', 'EORI & ENS declaration', 'FORM E FTA certificates', 'Air freight to major EU hubs'],
    relatedServices: ['ocean-freight', 'air-freight', 'customs-clearance', 'door-to-door', 'warehousing'],
    routes: [
      { from: 'Shanghai', to: 'Rotterdam', mode: 'Ocean FCL', transit: '28-35 days' },
      { from: 'Ningbo', to: 'Hamburg', mode: 'Ocean FCL', transit: '30-38 days' },
      { from: 'Hong Kong', to: 'Frankfurt', mode: 'Air', transit: '4-6 days' },
    ],
  },
  {
    slug: 'middle-east',
    name: 'Middle East',
    intro:
      'Ocean FCL, LCL consolidation and air freight from China to the UAE, Saudi Arabia, Qatar and Kuwait. Direct sailings to Jebel Ali and Dammam. Emirates SkyCargo and Qatar Airways cargo with DDP door-to-door delivery.',
    seoTitle: 'Shipping from China to Middle East | Dantful',
    seoDescription:
      'Shipping from China to Middle East: ocean FCL to Jebel Ali, Dammam. Air freight via Emirates SkyCargo. DDP door-to-door to UAE, Saudi Arabia, Qatar, Kuwait.',
    overview: [
      'We ship direct ocean FCL and LCL consolidation from Shanghai, Shenzhen and Guangzhou to the Middle East. Jebel Ali Port in Dubai is the largest container port in the region. Transit is 18 to 22 days with weekly sailings.',
      'Saudi Arabia services call at Dammam and Jubail on the east coast. Dammam is the gateway to Riyadh and the Eastern Province. Transit from China is 22 to 26 days. We also serve Jeddah on the Red Sea.',
      'Qatar calls at Hamad Port in Doha. We offer air freight via Emirates SkyCargo from Dubai and Qatar Airways Cargo from Doha. Transit from Guangzhou to Dubai is 3 to 5 days by air.',
      'Our DDP door-to-door service covers the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain. We pre-pay all GCC import duties, VAT and clearance fees. GCC certificate of origin is available to reduce duty under FTA terms.',
    ],
    highlights: ['Direct FCL to Jebel Ali', 'Air freight via Emirates SkyCargo', 'DDP door-to-door delivery', 'GCC customs clearance'],
    relatedServices: ['ocean-freight', 'air-freight', 'door-to-door', 'customs-clearance'],
    routes: [
      { from: 'Shanghai', to: 'Dubai (Jebel Ali)', mode: 'Ocean FCL', transit: '18-22 days' },
      { from: 'Shenzhen', to: 'Dammam', mode: 'Ocean FCL', transit: '22-26 days' },
      { from: 'Guangzhou', to: 'Dubai', mode: 'Air', transit: '3-5 days' },
    ],
  },
  {
    slug: 'africa',
    name: 'Africa',
    intro:
      'Ocean FCL, LCL consolidation and air freight from China to Africa. We serve South Africa, East Africa and West Africa. LCL consolidation to Durban, Mombasa and Lagos. Air freight to Johannesburg and Lagos with DDP door-to-door.',
    seoTitle: 'Shipping from China to Africa | Dantful',
    seoDescription:
      'Shipping from China to Africa: ocean FCL, LCL to Durban, Mombasa, Lagos. Air freight to Johannesburg, Lagos. DDP door-to-door. Free 30-day bonded storage.',
    overview: [
      'We ship ocean FCL and LCL consolidation from China to major African ports. South Africa service calls at Durban and Cape Town. Transit from Shanghai to Durban is 28 to 32 days with weekly sailings.',
      'East Africa service covers Mombasa in Kenya and Dar es Salaam in Tanzania. LCL consolidation from Guangzhou to Mombasa takes 25 to 30 days. We also serve Djibouti for Ethiopia transit cargo.',
      'West Africa service calls at Lagos, Tema and Apapa. Lagos is the busiest port in West Africa. LCL consolidation is the main mode for SME importers. Air freight from Shenzhen to Lagos takes 5 to 7 days.',
      'Air freight serves Johannesburg, Lagos and Nairobi. Carriers include Ethiopian Airlines Cargo, South African Airways and Emirates SkyCargo via Dubai. Our DDP door-to-door service covers South Africa, Kenya, Nigeria and Ghana.',
      'Free 30-day bonded storage in Shenzhen supports LCL consolidation from multiple Chinese suppliers. We combine goods, repack and label before shipment to cut per-CBM cost.',
    ],
    highlights: ['LCL consolidation to major African ports', 'Air freight to Lagos & Johannesburg', 'DDP door-to-door available', 'Free 30-day bonded storage'],
    relatedServices: ['ocean-freight', 'air-freight', 'warehousing', 'door-to-door'],
    routes: [
      { from: 'Shanghai', to: 'Durban', mode: 'Ocean FCL', transit: '28-32 days' },
      { from: 'Guangzhou', to: 'Mombasa', mode: 'Ocean LCL', transit: '25-30 days' },
      { from: 'Shenzhen', to: 'Lagos', mode: 'Air', transit: '5-7 days' },
    ],
  },
  {
    slug: 'australia',
    name: 'Australia & Oceania',
    intro:
      'Direct ocean FCL, LCL consolidation and air freight from China to Australia and New Zealand. Weekly sailings to Sydney, Melbourne, Brisbane and Auckland. AQIS biosecurity clearance and Amazon AU FBA prep with DDP door-to-door delivery.',
    seoTitle: 'Shipping from China to Australia | Dantful',
    seoDescription:
      'Shipping from China to Australia: ocean FCL, LCL, air freight to Sydney, Melbourne, Auckland. AQIS biosecurity clearance, Amazon AU FBA, DDP with GST pre-paid.',
    overview: [
      'We offer direct ocean FCL and LCL consolidation from China to Australia. Service ports include Sydney, Melbourne, Brisbane, Adelaide and Fremantle. Weekly sailings from Shanghai, Shenzhen, Ningbo and Guangzhou.',
      'New Zealand service calls at Auckland and Wellington. Transit from Shanghai to Sydney is 16 to 20 days. Melbourne is 18 to 22 days via the Trans-Pacific route.',
      'Australian import requires GST (10%) and AQIS biosecurity quarantine inspection. We handle AQIS documentation, fumigation, ISPM-15 inspection and complete import clearance in-house.',
      'Amazon Australia FBA sellers ship to SYD1, MEL1, BNE3 and PER3 fulfillment centers. We handle FNSKU labeling, poly-bagging, palletization and direct FC appointments. Air freight via Air China Cargo, Cathay Pacific and Qantas Freight connects PVG and HKG with Sydney, Melbourne and Auckland in 3 to 5 days.',
      'Our DDP door-to-door service pre-pays Australian import duty, GST, AQIS fees and last-mile delivery. Single all-in per-CBM quote with no hidden charges.',
    ],
    highlights: ['Weekly FCL to Sydney & Melbourne', 'AQIS biosecurity clearance', 'Amazon AU FBA prep', 'DDP with GST pre-paid'],
    relatedServices: ['ocean-freight', 'air-freight', 'amazon-fba', 'customs-clearance', 'door-to-door'],
    routes: [
      { from: 'Shanghai', to: 'Sydney', mode: 'Ocean FCL', transit: '16-20 days' },
      { from: 'Shenzhen', to: 'Melbourne', mode: 'Ocean FCL', transit: '18-22 days' },
      { from: 'Guangzhou', to: 'Auckland', mode: 'Air', transit: '3-5 days' },
    ],
  },
  {
    slug: 'southeast-asia',
    name: 'Southeast Asia',
    intro:
      'Ocean FCL, LCL consolidation and air freight from China to ASEAN ports. Direct sailings to Singapore, Bangkok, Ho Chi Minh, Manila, Port Klang and Jakarta. ASEAN-China FTA and RCEP origin certs with DDP door-to-door delivery.',
    seoTitle: 'Shipping from China to Southeast Asia | Dantful',
    seoDescription:
      'Shipping from China to Southeast Asia: ocean FCL, LCL to Singapore, Bangkok, HCM, Manila, Jakarta. ASEAN FTA, RCEP origin certs. DDP door-to-door delivery.',
    overview: [
      'Southeast Asia is one of our fastest-growing shipping routes from China. We cover Singapore, Thailand, Vietnam, Philippines, Malaysia, Indonesia and Cambodia. Transit times are as short as 5 to 7 days for nearby ports.',
      'Ocean FCL and LCL consolidation run from Shenzhen, Guangzhou, Shanghai and Xiamen. Singapore is the main transshipment hub. Bangkok and Laem Chabang serve Thailand. Ho Chi Minh and Hai Phong serve Vietnam.',
      'Other ports include Manila in the Philippines, Port Klang in Malaysia, Jakarta and Surabaya in Indonesia, and Sihanoukville in Cambodia. LCL consolidation from Shenzhen runs weekly.',
      'ASEAN-China FTA and RCEP agreements reduce or eliminate import duty. We issue FORM E and RCEP certificates of origin to cut landed cost. Free 30-day bonded storage in Shenzhen supports LCL consolidation from multiple suppliers.',
      'Our DDP door-to-door service covers import duties, VAT and last-mile delivery across ASEAN. Air freight from Shenzhen to Manila takes 2 to 3 days.',
    ],
    highlights: ['5-7 day FCL to Singapore', 'ASEAN FTA & RCEP origin certs', 'LCL consolidation from Shenzhen', 'DDP door-to-door delivery'],
    relatedServices: ['ocean-freight', 'air-freight', 'customs-clearance', 'door-to-door', 'warehousing'],
    routes: [
      { from: 'Shenzhen', to: 'Singapore', mode: 'Ocean FCL', transit: '5-7 days' },
      { from: 'Guangzhou', to: 'Bangkok', mode: 'Ocean LCL', transit: '7-10 days' },
      { from: 'Shenzhen', to: 'Manila', mode: 'Air', transit: '2-3 days' },
    ],
  },
  {
    slug: 'south-america',
    name: 'South America',
    intro:
      'Ocean FCL, LCL consolidation and air freight from China to South America. Direct sailings to Santos, Buenos Aires and Callao. Air freight to Sao Paulo, Buenos Aires and Lima. DDP with all duties pre-paid.',
    seoTitle: 'Shipping from China to South America | Dantful',
    seoDescription:
      'Shipping from China to South America: ocean FCL to Santos, Buenos Aires, Callao. Air freight to Sao Paulo, Lima. DDP with all duties pre-paid. Mexico transshipment.',
    overview: [
      'We ship direct ocean FCL and LCL consolidation from China to South America. Brazil service calls at Santos, the largest port in Latin America. Transit from Shanghai to Santos is 38 to 42 days.',
      'Argentina service calls at Buenos Aires. Transit from Shenzhen is 40 to 45 days via the Cape of Good Hope or Panama Canal. We also serve Callao in Peru and San Antonio and Valparaiso in Chile.',
      'Air freight serves Sao Paulo (GRU), Buenos Aires (EZE) and Lima (LIM). Carriers include LATAM Cargo, Copa Airlines Cargo and Emirates SkyCargo via Dubai. Transit from Guangzhou to Callao is 5 to 7 days by air.',
      'Mexico transshipment is available via Manzanillo for cargo moving to Central America and the Pacific coast of South America. Our DDP door-to-door service pre-pays all import duties, IGV, IPI and customs clearance fees.',
    ],
    highlights: ['Direct FCL to Santos & Buenos Aires', 'Air freight to Sao Paulo & Lima', 'DDP with all duties pre-paid', 'Mexico transshipment available'],
    relatedServices: ['ocean-freight', 'air-freight', 'customs-clearance', 'door-to-door'],
    routes: [
      { from: 'Shanghai', to: 'Santos', mode: 'Ocean FCL', transit: '38-42 days' },
      { from: 'Shenzhen', to: 'Buenos Aires', mode: 'Ocean FCL', transit: '40-45 days' },
      { from: 'Guangzhou', to: 'Callao (Peru)', mode: 'Air', transit: '5-7 days' },
    ],
  },
];
