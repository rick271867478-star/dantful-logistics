/**
 * 服务数据（需求文档板块 2：OUR SERVICES 共 6 个）
 * 增删服务只改这里，导航下拉、首页卡片、详情页都会自动同步。
 */
export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  highlights: string[];
  body: string[];
}

export const services: Service[] = [
  {
    slug: 'ocean-freight',
    title: 'Ocean Freight',
    short:
      'Reliable FCL and LCL ocean freight shipping from China to global ports with competitive rates, weekly sailings and guaranteed peak-season container space.',
    description:
      'Professional ocean freight forwarding from China covering FCL 20ft/40ft/40HQ, LCL consolidation and special cargo shipping. Direct carrier contracts with Maersk, MSC, COSCO, ONE and Evergreen for stable capacity and competitive rates to US, EU, UK, Australia, Canada and Southeast Asia.',
    icon: 'M3 16l2-6h14l2 6M5 16h14v4H5zm2 2h.01M17 18h.01M7 10V6h10v4',
    highlights: ['FCL 20ft / 40ft / 40HQ', 'Weekly LCL consolidation', 'All major China ports', 'Door-to-door available'],
    body: [
      'China ocean freight is the backbone of international trade. Our FCL and LCL services deliver dependable, cost-effective solutions for every business. We hold long-term direct contracts with Maersk, MSC, COSCO, ONE, Evergreen, CMA CGM and Hapag-Lloyd. This secures preferential rates and guaranteed space even during peak seasons.',
      'We cover Pre-CNY, Amazon Prime Day and Black Friday windows. Exporters ship from Shanghai, Ningbo, Shenzhen (Yantian, Shekou), Qingdao, Tianjin, Guangzhou Nansha, Xiamen and Fuzhou. Our carrier sales desks maintain above 98% on-time performance across Trans-Pacific, North Europe, Mediterranean, UK, Australia, Canada, Mexico and Latin America lanes.',
      'Our sea freight workflow is transparent and reduces landed cost. Step 1: get an all-in rate quote within 2 hours of sending your cargo details. Step 2: we issue a shipping order and arrange trucking to pickup from any factory in mainland China. This includes Yiwu, Dongguan, Suzhou, Hangzhou, Changzhou and Wuxi.',
      'Step 3: our licensed customs team handles export declaration, CIQ inspection and CO or FORM A/E/F certificates. Step 4: the container sails on schedule with weekly tracking emails. Step 5: overseas partners manage import clearance, duties and last-mile delivery under DDU or DDP terms.',
      'Our LCL consolidation, project cargo and warehousing set us apart. We run weekly LCL hubs in Shenzhen, Shanghai and Guangzhou. Multiple supplier cargo combines into single containers. This cuts per-CBM cost by 30 to 60 percent versus FCL for shipments under 20 CBM. Ideal for startups, Amazon sellers, SMEs and sample orders.',
      'Our 30,000 sqm bonded warehouses offer FREE 30-day storage. Collect from multiple vendors, consolidate, repack, relabel and inspect at no extra charge. For OOG, break-bulk, reefer or dangerous goods, our project team designs custom flat-rack, open-top or ISO-tank solutions. Choose us for stable space, transparent pricing and zero hidden surcharges.'
    ],
  },
  {
    slug: 'air-freight',
    title: 'Air Freight',
    short:
      'Fast and secure air cargo shipping from Shanghai Pudong, Shenzhen, Guangzhou and Hong Kong airports with daily departures, express / economy / charter options and real-time tracking.',
    description:
      'Time-sensitive air freight forwarding from China with daily departures to 200+ global destinations. Block-space agreements with Air China, China Southern, Cathy Pacific, Lufthansa, Emirates, Qatar Airways and Turkish Airlines guarantee capacity, stable rates and 2 to 5 day transits worldwide.',
    icon: 'M10.5 20l1.5-6-6 1.5L3 13l18-8-6 15-2.5-3.5L10.5 20z',
    highlights: ['Daily departures', 'Express & economy', 'DDP door-to-door', 'Charter available'],
    body: [
      'When speed matters, our air freight service delivers in 2 to 7 days. Choose airport-to-airport, door-to-airport or door-to-door. We hold block-space agreements with 40+ airlines. This includes Air China Cargo, Lufthansa, Emirates, Qatar Airways, Turkish Cargo, Korean Air and Cargolux.',
      'These contracts lock in preferential per-KG rates and guaranteed uplift. Even during Q4 holiday shipping and electronics launches. Your high-priority cargo never gets bumped.',
      'Air freight pricing uses the higher of actual weight versus volumetric weight. The standard ratio is 1 CBM equals 167 KG. We display both calculations transparently. Choose from three service levels. EXPRESS AIR: 1 to 3 days, direct flight with priority handling.',
      'ECONOMY AIR: 3 to 7 days, consolidated at lower rates. AIR CHARTER: for oversized, heavy or temperature-controlled cargo using B737, B767 or B747 freighters. All shipments include USD 2 per KG insurance, email and WeChat alerts, and real-time tracking with AWB numbers.',
      'We specialize in sensitive and restricted cargo. This includes built-in battery electronics with MSDS and UN38.3 reports. Lithium-ion batteries, magnetic goods with degaussing certificates. Cosmetics and food with CIQ health certificates and FDA pre-notification. Branded goods with trademark authorization. Medical devices requiring NMPA, CE or FDA.',
      'For FBA sellers, we consolidate air cargo into our overseas trucking networks. Door-to-door DDP to US, EU, UK, Canada, Australia, Japan, Korea and Southeast Asia. All duties, VAT and bonds pre-paid. No extra charges on delivery.'
    ],
  },
  {
    slug: 'amazon-fba',
    title: 'Amazon FBA',
    short:
      'End-to-end Amazon FBA prep and shipping from China to US, EU, UK, CA, AU, MX and JP fulfillment centers by sea express, air express and direct courier with DDP and compliance prep.',
    description:
      'Specialized Amazon FBA freight forwarder delivering private-label and wholesale inventory from China factories directly into Amazon FC warehouses across the USA, Canada, UK, EU, Australia, Mexico and Japan. Sea express, air express and UPS/FedEx modes with FNSKU labeling, poly-bagging, carton bundling, palletization and Seller Central shipping plan sync.',
    icon: 'M20 8l-8-4-8 4v8l8 4 8-4V8zM12 12L4 8m8 4l8-4m-8 4v8',
    highlights: ['Sea & air express', 'Label & carton prep', 'Direct appointments', 'US/EU/UK/CA/MX'],
    body: [
      'We are an Amazon-partnered China FBA freight forwarder with 8+ years of experience. We serve 2,400+ private-label sellers and wholesale distributors. We understand every Amazon requirement, policy and penalty rule. Our FBA team handles the full end-to-end shipping and prep workflow.',
      'You focus on sourcing, listings and PPC. We ensure your cargo arrives at the correct FC with compliant labels, packaging, appointments and shipping plan matching.',
      'We offer four optimized FBA shipping lanes from China. FBA SEA EXPRESS: sea freight to our overseas warehouses in LA, New Jersey, Dallas, Chicago, Seattle, Vancouver, Hamburg, Rotterdam, Tilbury, Sydney or Mexico City. Then trucked to Amazon FC by UPS, FedEx, GLS or DHL. Best for stock above 50 CBM at 22 to 35 days. FBA AIR EXPRESS: air freight via PVG, SZX, CAN or HKG.',
      'Delivered by UPS or FedEx in 7 to 12 days. Ideal for Q4 replenishment and Prime Day. FBA DIRECT COURIER: DHL, UPS or FedEx in 3 to 6 days for samples under 300 KG. FBA RAILWAY: China-Europe rail to Poland or Germany in 15 to 20 days.',
      'Our FREE FBA PREP service saves thousands in Amazon labeling fees. We reduce shipment refusal and FC processing delays. Prep services in our Shenzhen warehouse: FNSKU barcode labeling per unit. Polybag bundling with suffocation warning labels. Bubble wrap and corner protectors for fragile goods.',
      'ISPM-15 palletization with stretch wrap. MADE IN CHINA marking per carton. FCC, CE, UKCA, RoHS, CPSIA stickers. Expiration date coding. Photo proof before every shipment. Extras include AQL Level II inspection, return re-labeling and Seller Central shipping plan sync.'
    ],
  },
  {
    slug: 'customs-clearance',
    title: 'Customs Clearance',
    short:
      'Licensed Class-A China customs brokerage for export and import declarations, ISF / AMS / ENS filings, FORM A / E / F certificates, RCEP / duty-drawback consulting and fast-track clearance for sensitive commodities.',
    description:
      'Class-A licensed Chinese customs brokerage covering all major air, sea and land ports. Professional export and import declarations, ISF-10 (10+2), AMS, ENS and ACI pre-manifest filings, Certificate of Origin (CO, FORM A, FORM E, FORM F, FORM RCEP), and HS classification to minimize import duty legally.',
    icon: 'M9 12l2 2 4-5m5.4-3A9 9 0 1112 3a9 9 0 009 3z',
    highlights: ['Licensed brokerage', 'ISF / AMS / ENS', 'CO, FORM A/E', 'Sensitive goods'],
    body: [
      'Our in-house team holds a Class-A customs brokerage license from GACC. We have authorized declarant cards and direct EDI access at 22 major customs districts. This includes Shanghai, Shenzhen, Guangzhou, Qingdao, Tianjin, Ningbo, Xiamen and China-Europe rail gates.',
      'Our 12+ years of HS classification experience and direct EDI link clear 96% of export declarations within 4 hours. This avoids missed vessel closings, airline cutoffs and VAT refund deadlines.',
      'Every booking is handled by a licensed senior declarant. Services include: HS CODE CLASSIFICATION — verified against China Customs Tariff with 8-digit HS and 2-digit CIQ code. We provide 3 alternative codes, VAT refund rates and FTA duty rates. This saves 3 to 15 percent in landed duty. DOCUMENT PREPARATION — commercial invoice, packing list, BL/AWB, declaration form and POA.',
      'Full consistency prevents inspections. PRE-MANIFEST FILINGS — ISF-10 for USA 48h before departure. AMS for US air. ENS for EU 24h before load. ACI for Canada. Zero late penalties. CERTIFICATES OF ORIGIN — CO, FORM A, E, F, RCEP delivered as PDF within 2 days.',
      'We specialize in sensitive and regulated products. Categories include lithium-ion batteries with MSDS and UN38.3. FDA and CFDA medical devices, cosmetics and food. Textile quota items. EU EPR products (WEEE, REACH). Branded goods with authorization. Dangerous goods classes 2 to 9.',
      'Used machinery with CCIC inspection. When GACC inspection is triggered, our on-site liaison officer attends personally. We resolve queries the same day and provide a written report. We also offer VAT drawback guidance, ATA Carnet handling and penalty appeal assistance.'
    ],
  },
  {
    slug: 'warehousing',
    title: 'Warehousing',
    short:
      'Modern bonded and general 3PL warehouses in Shenzhen, Shanghai and Guangzhou with FREE 30-day storage, consolidation, repacking, FBA prep, quality inspection, labeling and 24/7 CCTV secured WMS.',
    description:
      'Professional China warehousing and 3PL distribution with 58,000 sqm of total space across 3 modern facilities near Yantian, Yangshan and Nansha ports. Cloud WMS managed. Services include supplier pickup, consolidation, free 30-day temporary storage, FBA prep, repack, relabel, QC inspection, kitting and dispatch to sea / air / rail hubs.',
    icon: 'M3 21V8l9-5 9 5v13M9 21v-6h6v6M9 11h.01M15 11h.01M9 14h.01M15 14h.01',
    highlights: ['Free storage 30 days', 'Consolidation & repack', 'FBA prep service', 'CCTV secured'],
    body: [
      'We operate 58,000 sqm of 3PL warehouse space near major China hubs. 22,000 sqm in Shenzhen Longhua (30 min from Yantian Port). 20,000 sqm in Shanghai Songjiang (near Hongqiao Airport and Yangshan Port). 16,000 sqm in Guangzhou Nansha (bonded, beside Nansha Port).',
      'Every facility has 12m racking for 10,000+ pallet positions. We use reach trucks, VNA turret trucks and forklifts. Our cloud WMS integrates with Amazon Seller Central, ShipStation and Linnworks for real-time inventory visibility.',
      'Free services for all partners include: 30-day temporary storage for export consolidation. Collect from 5 to 20 suppliers without daily charges. Free supplier pickup for combined shipments over 2 CBM within 200 km. Free inbound unloading, quantity count and barcode receiving with photos.',
      'Damaged goods quarantine and same-day email notification. Free monthly physical inventory reconciliation. We maintain 24/7 HD CCTV with 90-day backup. Fire sprinklers, pest control and 24/7 security. Insurance up to USD 5 million per event.',
      'Premium services include: CONSOLIDATION — combine goods from multiple factories into one container. Cut per-unit shipping cost by 30 to 55 percent. ISPM-15 pallets, shrink wrap and corner boards. QC INSPECTION — AQL Level II from USD 85 per man-day. 100% inspection for critical SKUs. Includes 15 to 25 photos, defect report and PASS or FAIL recommendation.',
      'LABELING AND KITTING — FNSKU, UPC, EAN labeling. FCC, CE, UKCA stickers. Multi-SKU kitting and polybagging. ORDER FULFILLMENT — pick-pack-ship same-day China express via SF, STO, JD. CROSS-DOCKING — de-consolidate 40HQ or air pallets for immediate re-dispatch. Ideal for retail restocking and JIT programs.'
    ],
  },
  {
    slug: 'door-to-door',
    title: 'Door to Door (DDP)',
    short:
      'One-stop DDP door-to-door shipping from any Chinese supplier factory to overseas residential, commercial or warehouse address — all import duties, VAT, GST, customs bonds and last-mile delivery pre-paid with live end-to-end tracking.',
    description:
      'Complete end-to-end Delivered Duty Paid service from supplier factory in China to consignee final address across USA, Canada, EU 27, UK, Australia, NZ, Japan, Korea, Southeast Asia, Middle East and Latin America. Single all-in per-KG or per-CBM quote covers pickup, export declaration, origin handling, sea / air / rail main carriage, destination clearance, duties, VAT, bonded trucking and last-mile delivery — no hidden charges.',
    icon: 'M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
    highlights: ['Pickup from supplier', 'All taxes included', 'Tailwind / trucking', 'Full tracking'],
    body: [
      'Our Door-to-Door DDP service gives you one all-in price from Chinese factory to your doorstep. No extra duties, VAT, customs bond or destination fees. Unlike FOB or CIF with 3 to 5 invoices from different parties, you get exactly one quote, one invoice and one contact.',
      'Your shipment is tracked from factory gate to final consignee. Cost and timing are fully predictable.',
      'The DDP workflow is simple across 60+ countries. Step 1: send us the factory address, product details and consignee address. We reply with one all-in per-CBM (sea) or per-KG (air) quote. This covers factory pickup, export clearance, main carriage, destination clearance, duties, VAT and last-mile delivery. Step 2: confirm booking. We dispatch pickup truck to the supplier.',
      'Step 3: goods arrive at our warehouse for free quantity count, label check and palletization. Step 4: cargo ships with live tracking and weekly email updates. Step 5: goods clear customs with all duties paid by us and are delivered to your door. You sign with zero extra charges.',
      'We cover 60+ countries with our own IOR network. Four transit modes: SEA DDP (28 to 45 days, lowest cost for 5+ CBM). AIR DDP (7 to 14 days, most popular for 200 to 3000 KG). RAIL DDP (18 to 28 days, mid-price via Central Asia to Europe). EXPRESS DDP (3 to 7 days, DHL or FedEx for samples under 300 KG).',
      'We hold IOR and EORI numbers for USA, Canada, EU 27, UK, Australia, Japan, Korea, Mexico, Southeast Asia, Middle East and Turkey. We work directly with our own subsidiaries or audited 10+ year partners. Lower cost, faster clearance and 24/7 support. We also offer DAP and DDU if you use your own importer number.'
    ],
  },
];