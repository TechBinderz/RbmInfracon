import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const INDEX_HTML = path.join(DIST_DIR, 'index.html');
const SITE_URL = 'https://www.rbminfracon.com';
const SITE_NAME = 'RBM Infracon Limited';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const routes = [
  {
    path: '/',
    title: 'RBM Infracon Limited | EPC Services – Engineering, Procurement & Construction',
    description:
      'RBM Infracon Limited (NSE: RBMINFRA) – 30+ years of trusted EPC services in Engineering, Procurement, Construction, Operations & Maintenance across India and the Middle East. ISO 9001:2015 certified.',
  },
  {
    path: '/aboutus',
    title: 'About Us | RBM Infracon Limited',
    description:
      'Learn about RBM Infracon Limited – 30+ years of engineering excellence, corporate history, core leadership, and nationwide presence in EPC contracts.',
  },
  {
    path: '/aboutus/boardofdirector',
    title: 'Board of Directors | RBM Infracon Limited',
    description:
      "Meet the executive board and leadership team guiding RBM Infracon Limited's corporate governance, strategic growth, and engineering execution.",
  },
  {
    path: '/aboutus/current-projects',
    title: 'Current Projects | RBM Infracon Limited',
    description:
      'Explore ongoing EPC contracts, refinery maintenance, and infrastructure development projects currently executed by RBM Infracon Limited.',
  },
  {
    path: '/aboutus/executed-projects',
    title: 'Executed Projects | RBM Infracon Limited',
    description:
      'Track record of successfully completed EPC, plant turnaround, piping, and mechanical erection projects delivered by RBM Infracon Limited.',
  },
  {
    path: '/aboutus/awards',
    title: 'Awards & Recognitions | RBM Infracon Limited',
    description:
      'Safety excellence awards, client citations, and industry recognitions earned by RBM Infracon Limited from major industrial leaders.',
  },
  {
    path: '/services',
    title: 'EPC & Industrial Services | RBM Infracon Limited',
    description:
      'Comprehensive EPC, engineering design, turnaround, plant maintenance, piping, and tankage services for Oil & Gas, Petrochemicals, and Energy sectors.',
  },
  {
    path: '/services/engineeringServices',
    title: 'Engineering Services | RBM Infracon Limited',
    description:
      'Detailed engineering, structural design, 3D piping layouts, stress analysis, and technical consulting for industrial processing facilities.',
  },
  {
    path: '/services/procurementServices',
    title: 'Procurement Services | RBM Infracon Limited',
    description:
      'Global supply chain management, certified material sourcing, equipment procurement, and vendor quality management for major EPC contracts.',
  },
  {
    path: '/services/logisticsServices',
    title: 'Logistics Services | RBM Infracon Limited',
    description:
      'Heavy equipment haulage, oversize cargo transport, site mobilization, and integrated industrial logistics solutions across India.',
  },
  {
    path: '/services/turnaroundServices',
    title: 'Turnaround & Shutdown Services | RBM Infracon Limited',
    description:
      'Rapid plant turnaround, planned refinery shutdown maintenance, catalyst unloading/reloading, and overhaul services with zero downtime.',
  },
  {
    path: '/services/operationMaintenanceServices',
    title: 'Operation & Maintenance (O&M) Services | RBM Infracon Limited',
    description:
      'Continuous routine and preventive operation and maintenance (O&M) contracts for refineries, petrochemical plants, and thermal power stations.',
  },
  {
    path: '/services/workshopServices',
    title: 'Workshop & Fabrication Services | RBM Infracon Limited',
    description:
      'Modern heavy engineering workshop facilities for pressure vessels, pipe spools, structural skids, and precision machining.',
  },
  {
    path: '/services/renovationServices',
    title: 'Renovation & Revamping Services | RBM Infracon Limited',
    description:
      'Brownfield facility modernizations, industrial revamp, structural strengthening, and plant debottlenecking solutions.',
  },
  {
    path: '/services/constructionServices',
    title: 'Civil & Industrial Construction Services | RBM Infracon Limited',
    description:
      'Turnkey industrial civil construction, equipment foundations, structural concrete works, and infrastructure site development.',
  },
  {
    path: '/services/pipingServices',
    title: 'Piping Fabrication & Erection Services | RBM Infracon Limited',
    description:
      'High-pressure process piping fabrication, cross-country pipelines, alloy/CS/SS pipe welding, hydrotesting, and NDT inspection.',
  },
  {
    path: '/services/plateWork',
    title: 'Plate Work & Storage Tanks | RBM Infracon Limited',
    description:
      'Design, fabrication, and erection of large atmospheric crude storage tanks, cryogenic storage spheres, pressure vessels, and ducting systems.',
  },
  {
    path: '/services/heaterOperation',
    title: 'Fired Heater & Furnace Operations | RBM Infracon Limited',
    description:
      'Cracking furnace and reformer revamp, radiant coil replacement, refractory lining application, and burner maintenance.',
  },
  {
    path: '/services/drillingAndOMServices',
    title: 'Drilling & Upstream O&M Services | RBM Infracon Limited',
    description:
      'Onshore oil & gas drilling rig management, well maintenance, wireline support, and upstream operational support services.',
  },
  {
    path: '/services/structuralSteelWork',
    title: 'Structural Steel Fabrication & Erection | RBM Infracon Limited',
    description:
      'Heavy structural steel engineering, pipe rack modules, industrial buildings, technological structures, and offshore platforms.',
  },
  {
    path: '/services/boilerErectionWork',
    title: 'Boiler Erection & Overhauling | RBM Infracon Limited',
    description:
      'High-pressure utility boiler erection, header replacement, steam piping alignment, tube bundle welding, and refractory insulation.',
  },
  {
    path: '/services/workoverDrillingServices',
    title: 'Workover & Well Intervention Services | RBM Infracon Limited',
    description:
      'Workover rig services, well servicing, production enhancement, fishing, and completion operations in mature oil and gas fields.',
  },
  {
    path: '/services/hydrojetting',
    title: 'High-Pressure Hydrojetting & Chemical Cleaning | RBM Infracon Limited',
    description:
      'Hydrojetting up to 20,000 PSI, heat exchanger tube cleaning, vessel decontamination, chemical circulation, and surface preparation.',
  },
  {
    path: '/news',
    title: 'News & Press Announcements | RBM Infracon Limited',
    description:
      'Official corporate news, major contract sign-offs, financial results, NSE disclosures, and press announcements from RBM Infracon Limited.',
  },
  {
    path: '/news/ongc_work_order_signed',
    title: 'ONGC Contract Signing Milestone | RBM Infracon Limited',
    description:
      'RBM Infracon Limited officially signs a major work order with ONGC for production enhancement operations in mature oil & gas fields.',
  },
  {
    path: '/investors',
    title: 'Investor Relations & Financial Reports | RBM Infracon Limited',
    description:
      'NSE: RBMINFRA investor information: annual reports, quarterly filings, corporate governance, shareholding patterns, and earning call transcripts.',
  },
  {
    path: '/careers',
    title: 'Careers & Job Openings | RBM Infracon Limited',
    description:
      'Explore career vacancies at RBM Infracon Limited. Join our team of engineering, project management, and site professionals across India.',
  },
  {
    path: '/careers/CareerOpening',
    title: 'Submit Career Application | RBM Infracon Limited',
    description:
      'Submit your resume and job application for open engineering and site positions at RBM Infracon Limited.',
  },
  {
    path: '/contact',
    title: 'Contact Us & Global Offices | RBM Infracon Limited',
    description:
      'Get in touch with RBM Infracon Limited corporate headquarters in Jamnagar, Gujarat, regional offices in India, or Dubai operations.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | RBM Infracon Limited',
    description:
      'Read the official Privacy Policy of RBM Infracon Limited regarding user data privacy, protection, and website usage terms.',
  },
];

function generateStaticRoutes() {
  if (!fs.existsSync(INDEX_HTML)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(INDEX_HTML, 'utf8');
  let generatedCount = 0;

  for (const route of routes) {
    if (route.path === '/') {
      continue; // dist/index.html already represents '/'
    }

    const routeDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
    fs.mkdirSync(routeDir, { recursive: true });

    const canonicalUrl = `${SITE_URL}${route.path}`;

    let routeHtml = baseHtml;
    // Replace Title
    routeHtml = routeHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${route.title}</title>`
    );
    // Replace Description
    routeHtml = routeHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );
    // Replace Canonical
    routeHtml = routeHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
    // Replace OG Title & Twitter Title
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    // Replace OG Desc & Twitter Desc
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );
    // Replace OG URL
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    const destFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(destFile, routeHtml, 'utf8');
    generatedCount++;
  }

  // Generate 404.html with noindex, nofollow
  let notFoundHtml = baseHtml;
  notFoundHtml = notFoundHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>404 – Page Not Found | ${SITE_NAME}</title>`
  );
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+name=["']robots["']\s+content=["'].*?["']\s*\/?>/i,
    '<meta name="robots" content="noindex, nofollow" />'
  );
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml, 'utf8');

  console.log(`Successfully generated static HTML shells for ${generatedCount} routes + dist/404.html!`);
}

generateStaticRoutes();
