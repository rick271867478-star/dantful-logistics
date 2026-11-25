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
  faq?: { q: string; a: string }[];
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
      { from: 'Shenzhen', to: 'New York', mode: 'Ocean FCL', transit: '34-42 days' },
      { from: 'Guangzhou', to: 'Chicago', mode: 'Air', transit: '4-6 days' },
    ],
    faq: [
      { q: 'How long does shipping from China to North America take?', a: 'Sea FCL from Shanghai or Shenzhen to Los Angeles and Long Beach takes 14 to 18 days port-to-port, and to the US East Coast (New York, Savannah) via the Panama Canal 25 to 30 days. Air freight to Chicago or New York takes 4 to 6 days. Vancouver is the fastest China-to-Canada ocean port.' },
      { q: 'Do you handle ISF-10 and US customs clearance?', a: 'Yes. We file ISF-10 and AMS 24 hours before vessel loading and run full import clearance through our licensed US brokerage, including the customs bond and duty payment, so your DDP door-to-door shipment clears without delay.' },
      { q: 'What duties and tariffs apply to China-US imports?', a: 'Duty depends on the HTS code, and many China-origin goods carry an additional 7.5% to 25% Section 301 tariff. We classify your goods under the correct HTS code and pre-pay all duties, merchandise processing fees and bonds under DDP.' },
      { q: 'Can you deliver to Amazon FBA fulfillment centers?', a: 'Yes. We deliver to ONT8, LGB8, LAX9, EWR4, BFI3 and YYZ4, with FNSKU labeling, poly-bagging, palletization and direct FC appointment booking, plus sea express and air express modes.' }
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
      { from: 'Ningbo', to: 'Hamburg', mode: 'Ocean FCL', transit: '34-42 days' },
      { from: 'Hong Kong', to: 'Frankfurt', mode: 'Air', transit: '4-6 days' },
    ],
    faq: [
      { q: 'How long does shipping from China to Europe take?', a: 'Ocean FCL from Shanghai or Ningbo to Rotterdam takes 28 to 35 days, and to Hamburg 30 to 38 days via the Suez Canal. Air freight to Frankfurt, Amsterdam, Paris or London takes 4 to 6 days door-to-door.' },
      { q: 'Do I need an EORI number and ENS declaration?', a: 'Yes. EU imports require EORI registration and an ENS/ICS2 pre-manifest filed 24 hours before loading. Our customs team files ENS, ICS2 and the full import entry in-house.' },
      { q: 'Can you lower my import duty using an FTA?', a: 'Yes. We issue FORM E ASEAN FTA and RCEP certificates of origin where your goods qualify, which can reduce or eliminate import duty across the EU 27.' },
      { q: 'Do you ship to the UK after Brexit?', a: 'Yes. We serve Felixstowe and other UK ports, and handle UK customs declarations separately from the EU under your own EORI or our IOR.' }
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
      { from: 'Shanghai', to: 'Dubai (Jebel Ali)', mode: 'Ocean FCL', transit: '20-28 days' },
      { from: 'Shenzhen', to: 'Dammam', mode: 'Ocean FCL', transit: '24-30 days' },
      { from: 'Guangzhou', to: 'Dubai', mode: 'Air', transit: '3-5 days' },
    ],
    faq: [
      { q: 'How long does shipping from China to the Middle East take?', a: 'Ocean FCL to Jebel Ali (Dubai) takes 18 to 22 days, and to Dammam (Saudi Arabia) 22 to 26 days. Air freight via Emirates SkyCargo from Guangzhou to Dubai takes 3 to 5 days.' },
      { q: 'What duties and VAT apply in the GCC?', a: 'Standard GCC import duty is 5% plus 5% VAT in most states. We issue a GCC certificate of origin to cut duty under FTA terms and pre-pay all duties, VAT and clearance fees under DDP.' },
      { q: 'Do you handle SABER certification for Saudi Arabia?', a: 'Yes. We manage SABER registration and conformity certificates for regulated products bound for Saudi Arabia so your cargo clears Saudi customs without delay.' },
      { q: 'What air freight options are available?', a: 'We offer Emirates SkyCargo and Qatar Airways Cargo block space from Guangzhou, Shenzhen and Shanghai to Dubai, Doha and Riyadh, with door-to-door DDP delivery across the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.' }
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
      { from: 'Shanghai', to: 'Durban', mode: 'Ocean FCL', transit: '30-36 days' },
      { from: 'Guangzhou', to: 'Mombasa', mode: 'Ocean LCL', transit: '34-42 days' },
      { from: 'Shenzhen', to: 'Lagos', mode: 'Air', transit: '5-7 days' },
    ],
    faq: [
      { q: 'How long does shipping from China to Africa take?', a: 'Ocean FCL from Shanghai to Durban takes 28 to 32 days, and LCL to Mombasa 25 to 30 days. Air freight from Shenzhen to Lagos takes 5 to 7 days.' },
      { q: 'What is the cheapest way to ship to Africa?', a: 'LCL consolidation is the most cost-effective for SME importers shipping under 15 CBM. We combine goods from multiple Chinese suppliers at our Shenzhen warehouse to cut the per-CBM cost.' },
      { q: 'Do you offer storage for consolidation?', a: 'Yes, we offer 30 days of free bonded storage in Shenzhen, where we collect, combine, repack and label your goods before shipping to reduce cost.' },
      { q: 'Which African countries do you cover door-to-door?', a: 'Our DDP door-to-door service covers South Africa, Kenya, Nigeria and Ghana, with full import clearance and last-mile delivery.' }
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
      { from: 'Shanghai', to: 'Sydney', mode: 'Ocean FCL', transit: '20-26 days' },
      { from: 'Shenzhen', to: 'Melbourne', mode: 'Ocean FCL', transit: '20-28 days' },
      { from: 'Guangzhou', to: 'Auckland', mode: 'Air', transit: '3-5 days' },
    ],
    faq: [
      { q: 'How long does shipping from China to Australia take?', a: 'Ocean FCL from Shanghai to Sydney takes 16 to 20 days, and to Melbourne 18 to 22 days. Air freight to Sydney or Melbourne takes 3 to 5 days.' },
      { q: 'Do I need AQIS biosecurity clearance?', a: 'Yes. Australia requires AQIS biosecurity quarantine inspection. We handle AQIS documentation, fumigation and ISPM-15 inspection, plus full import clearance in-house.' },
      { q: 'What taxes apply when shipping to Australia?', a: 'Australia applies 10% GST on most imports plus duty based on the HS code. Under DDP we pre-pay all import duty, GST and AQIS fees in one all-in quote.' },
      { q: 'Do you deliver to Amazon AU FBA?', a: 'Yes, we deliver to SYD1, MEL1, BNE3 and PER3 fulfillment centers with FNSKU labeling, poly-bagging, palletization and direct FC appointment booking.' }
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
    faq: [
      { q: 'How long does shipping from China to Southeast Asia take?', a: 'Ocean FCL from Shenzhen to Singapore takes 5 to 7 days, and LCL to Bangkok 7 to 10 days. Air freight from Shenzhen to Manila takes 2 to 3 days.' },
      { q: 'Can I reduce import duty with an FTA?', a: 'Yes. ASEAN-China FTA and RCEP can reduce or eliminate duty. We issue FORM E and RCEP certificates of origin to lower your landed cost.' },
      { q: 'Do you offer LCL consolidation to ASEAN?', a: 'Yes, weekly LCL consolidation runs from Shenzhen with 30 days of free bonded storage so you can combine goods from multiple suppliers before shipping.' },
      { q: 'Which countries do you cover door-to-door?', a: 'We provide DDP door-to-door to Singapore, Thailand, Vietnam, Philippines, Malaysia, Indonesia and Cambodia, pre-paying import duties, VAT and last-mile delivery.' }
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
      { from: 'Shanghai', to: 'Santos', mode: 'Ocean FCL', transit: '40-48 days' },
      { from: 'Shenzhen', to: 'Buenos Aires', mode: 'Ocean FCL', transit: '42-50 days' },
      { from: 'Guangzhou', to: 'Callao (Peru)', mode: 'Air', transit: '5-7 days' },
    ],
    faq: [
      { q: 'How long does shipping from China to South America take?', a: 'Ocean FCL from Shanghai to Santos takes 38 to 42 days, and from Shenzhen to Buenos Aires 40 to 45 days. Air freight from Guangzhou to Sao Paulo or Lima takes 5 to 7 days.' },
      { q: 'Why does shipping to South America take so long?', a: 'South America is far from China, so vessels route via the Cape of Good Hope or the Panama Canal, adding transit time. Air freight is recommended for time-sensitive cargo.' },
      { q: 'Do you offer DDP to Brazil and other South American countries?', a: 'Yes. We pre-pay import duties, IGV (Peru), IPI and customs clearance fees under DDP for Brazil, Argentina, Peru and Chile.' },
      { q: 'Can you transship via Mexico?', a: 'Yes. For cargo moving to Central America and the Pacific coast of South America, we can transship via Manzanillo, Mexico.' }
    ],
  },
  {
    slug: 'russia',
    name: 'Russia',
    intro:
      'Ocean FCL, LCL consolidation, China-Europe Railway Express and air freight from China to Russia. Direct sailings to Vladivostok and Vostochny. Weekly block trains to Moscow. EAC customs clearance and GOST R conformity certification with DDP door-to-door delivery.',
    seoTitle: 'Shipping from China to Russia | Dantful',
    seoDescription:
      'Shipping from China to Russia: ocean FCL to Vladivostok, Vostochny. China-Europe Railway to Moscow. Air freight to SVO. EAC customs clearance, GOST R. DDP door-to-door.',
    overview: [
      'We ship direct ocean FCL and LCL consolidation from China to Russian Far East ports. Vladivostok is the largest container port in Russia\'s Far East. Transit from Shanghai to Vladivostok is 10 to 14 days with weekly sailings by FESCO, SASCO and Maersk.',
      'China-Europe Railway Express (CRE) is the fastest growing mode to Russia. Block trains run from Yiwu, Xi\'an, Chengdu, Chongqing and Shijiazhuang to Moscow (Kuntsevo and Voronino stations). Transit is 12 to 15 days - half the time of ocean shipping and one-third the cost of air freight.',
      'Russian West (Moscow, St. Petersburg) is also served via St. Petersburg seaport by ocean freight through the Suez Canal. Transit from Shanghai to St. Petersburg is 35 to 42 days. For time-sensitive cargo to Moscow, block train or air freight is recommended.',
      'Air freight serves Moscow Sheremetyevo (SVO), Domodedovo (DME) and St. Petersburg Pulkovo (LED). Carriers include AirBridgeCargo, Aeroflot Cargo and China Eastern Cargo. Transit from Guangzhou to Moscow is 4 to 6 days door-to-door.',
      'EAC (Eurasian Economic Union) customs clearance requires EAC declaration, EAC certificate of conformity and GOST R certification for regulated products. Our team handles full EAC clearance, import duties (5-15% depending on HS code) and VAT (20%) under DDP terms.',
      'E-commerce and Ozon/Wildberries sellers ship from Yiwu, Guangzhou and Shenzhen warehouses to Moscow distribution centers via block train + last-mile trucking. Consolidation, FNSKU-style labeling and repacking available at our Shenzhen bonded warehouse.',
    ],
    highlights: ['Weekly FCL to Vladivostok', 'Block train to Moscow (14-18 days)', 'EAC customs & GOST R certification', 'E-commerce to Ozon & Wildberries'],
    relatedServices: ['ocean-freight', 'air-freight', 'customs-clearance', 'door-to-door', 'warehousing'],
    routes: [
      { from: 'Shanghai', to: 'Vladivostok', mode: 'Ocean FCL', transit: '12-16 days' },
      { from: 'Yiwu', to: 'Moscow', mode: 'Block Train', transit: '14-18 days' },
      { from: 'Guangzhou', to: 'Moscow (SVO)', mode: 'Air', transit: '4-6 days' },
    ],
    faq: [
      { q: 'How long does shipping from China to Russia take?', a: 'Ocean FCL from Shanghai to Vladivostok takes 10 to 14 days. The China-Europe block train to Moscow takes 12 to 15 days - roughly half the time of ocean shipping. Air freight to Moscow SVO takes 4 to 6 days.' },
      { q: 'What is the best mode for time-sensitive cargo to Moscow?', a: 'The block train is the best balance: about half the transit of ocean freight and roughly one-third the cost of air. We run weekly block trains from Yiwu, Xi\'an, Chengdu, Chongqing and Shijiazhuang to Moscow.' },
      { q: 'Do I need EAC and GOST R certification?', a: 'Yes. Russia requires EAC declaration and, for regulated products, GOST R conformity certification. We handle full EAC clearance, import duty (5-15% depending on HS code) and VAT (20%) under DDP.' },
      { q: 'Do you ship to Ozon and Wildberries sellers?', a: 'Yes. We consolidate from Yiwu, Guangzhou and Shenzhen warehouses to Moscow distribution centers via block train plus last-mile trucking, with labeling and repacking at our Shenzhen bonded warehouse.' }
    ],
  },
  {
    slug: 'central-asia',
    name: 'Central Asia',
    intro:
      'China-Europe Railway, ocean+rail intermodal and air freight from China to the five Central Asian states - Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan and Turkmenistan. Direct block trains to Almaty, Tashkent and Bishkek with EAC and national customs clearance plus DDP delivery.',
    seoTitle: 'Shipping from China to Central Asia | Dantful',
    seoDescription:
      'Shipping from China to Central Asia: China-Europe Railway to Almaty, Tashkent, Bishkek. Ocean+rail via Lianyungang. Air freight to ALA, TAS. EAC & national customs. DDP door-to-door.',
    overview: [
      'Central Asia is served primarily by the China-Europe Railway Express via the Khorgos and Alashankou border crossings. Block trains run from Lianyungang, Xi\'an, Chengdu, Chongqing and Urumqi to Almaty (Kazakhstan), Tashkent (Uzbekistan) and Bishkek (Kyrgyzstan).',
      'Kazakhstan is the largest market. Main destinations: Almaty, Astana, Shymkent and Aktau (Caspian Sea port). Transit from Lianyungang to Almaty is 8 to 12 days by rail. Direct air freight from Urumqi (URC) to Almaty (ALA) takes 1 to 2 days.',
      'Uzbekistan service covers Tashkent, Samarkand and Bukhara. Block trains enter via Khorgos-Kazakhstan corridor. Transit from Xi\'an to Tashkent is 12 to 16 days. We also offer trucking via the Irkeshtam and Karasu border crossings for LCL and e-commerce cargo.',
      'Kyrgyzstan, Tajikistan and Turkmenistan are served via transit through Kazakhstan or direct trucking via the Torugart and Irkeshtam passes. Transit to Bishkek is 10 to 14 days by rail. Turkmenistan transshipment via Aktau port and Caspian Sea ferry.',
      'EAC customs clearance applies for Kazakhstan, Kyrgyzstan and Russia. Uzbekistan, Tajikistan and Turkmenistan have separate customs regimes - we handle national conformity certs, GOST and import VAT (12% in Uzbekistan, 12% in Kazakhstan, 18% in Tajikistan).',
      'Intermodal ocean+rail service: cargo ships from south China ports to Lianyungang or Qingdao, then block train to Central Asia. Combines cost-efficiency of LCL consolidation with railway speed. Ideal for steel, machinery, building materials, electronics and e-commerce.',
    ],
    highlights: ['Block train to Almaty (8-12 days)', 'Khorgos & Alashankou border crossings', 'EAC & national customs clearance', 'Intermodal ocean+rail service'],
    relatedServices: ['ocean-freight', 'air-freight', 'customs-clearance', 'door-to-door', 'warehousing'],
    routes: [
      { from: 'Lianyungang', to: 'Almaty', mode: 'Block Train', transit: '8-12 days' },
      { from: 'Xi\'an', to: 'Tashkent', mode: 'Block Train', transit: '12-16 days' },
      { from: 'Urumqi', to: 'Almaty (ALA)', mode: 'Air', transit: '1-2 days' },
    ],
    faq: [
      { q: 'How long does shipping from China to Central Asia take?', a: 'Block train from Lianyungang to Almaty takes 8 to 12 days, and from Xi\'an to Tashkent 12 to 16 days. Air freight from Urumqi to Almaty takes 1 to 2 days.' },
      { q: 'What shipping modes are available to Central Asia?', a: 'We offer China-Europe Railway block trains via the Khorgos and Alashankou crossings, ocean-plus-rail intermodal via Lianyungang, and air freight - plus trucking for LCL and e-commerce cargo.' },
      { q: 'What customs and certification are required?', a: 'EAC clearance applies for Kazakhstan, Kyrgyzstan and Russia. Uzbekistan, Tajikistan and Turkmenistan have separate customs regimes, and we handle national conformity certificates and GOST for each.' },
      { q: 'What are the VAT rates in Central Asia?', a: 'Import VAT is 12% in Kazakhstan, 12% in Uzbekistan and 18% in Tajikistan. We pre-pay these under DDP so you get one all-in landed cost.' }
    ],
  },
];
