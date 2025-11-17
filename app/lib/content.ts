export type ToolLink = {
  label: string;
  href: string;
};

export type ToolCategory = {
  id: string;
  name: string;
  description: string;
  links: ToolLink[];
};

export type WriteUpArticle = {
  slug: string;
  title: string;
  description: string;
  pdfHref: string;
};

export type WriteUpCategory = {
  id: string;
  name: string;
  description: string;
  articles: WriteUpArticle[];
};

export const toolCategories: ToolCategory[] = [
  {
    id: "cti",
    name: "CTI",
    description: "Veille cyber et corrélation d'indicateurs de compromission.",
    links: [
      { label: "Analyse d'éxécutable", href: "https://www.virustotal.com" },
      { label: "Certificat TLS", href: "https://crt.sh/" },
      { label: "Shodan", href: "https://www.shodan.io/" },
      { label: "Ransomfeed", href: "https://ransomfeed.it/" },
      { label: "OCCRP Aleph", href: "https://aleph.occrp.org/" },
    ],
  },
  {
    id: "darkweb",
    name: "DARKWEB",
    description: "Cartographie des services onion et places de marché.",
    links: [
      { label: "Ransomfeed", href: "https://ransomfeed.it/" },
      { label: "Hidden Wiki", href: "https://inthehiddenwiki.net" },
    ],
  },
  {
    id: "entreprises",
    name: "ENTREPRISES",
    description: "Analyse sociétés, dirigeants et organigrammes.",
    links: [
      { label: "Pappers", href: "https://www.pappers.fr" },
      { label: "Opencorporates", href: "https://opencorporates.com/" },
      { label: "INPI", href: "https://www.inpi.fr" },
    ],
  },
/*  {
    id: "ferroviaire",
    name: "FERROVIAIRE",
    description: "Suivi des réseaux ferrés, horaires et incidents.",
    links: [
      { label: "Rail Tracker", href: "https://polyint.tools/ferroviaire/rail-tracker" },
      { label: "Incident Log", href: "https://polyint.tools/ferroviaire/incident-log" },
    ],
  },*/

/*  {
    id: "maritime",
    name: "MARITIME",
    description: "Veille AIS, routes maritimes et ports.",
    links: [
      { label: "AIS Recon", href: "https://polyint.tools/maritime/ais-recon" },
      { label: "IMO Lookup", href: "https://polyint.tools/maritime/imo-lookup" },
    ],
  },
  */
/*  {
    id: "finint",
    name: "FININT",
    description: "Renseignement financier, flux et conformité.",
    links: [
      { label: "Ledger Watch", href: "https://polyint.tools/finint/ledger-watch" },
      { label: "Beneficial Owner", href: "https://polyint.tools/finint/ubo" },
    ],
  },
  */
  {
    id: "fluvial",
    name: "FLUVIAL",
    description: "Observation des voies navigables intérieures.",
    links: [
      { label: "VNF", href: "https://www.vnf.fr/vnf/" },
    ],
  },
/*  {
    id: "forums",
    name: "FORUMS",
    description: "Collecte et indexation de forums spécialisés.",
    links: [
      { label: "Forum Crawler", href: "https://polyint.tools/forums/crawler" },
      { label: "Topic Diff", href: "https://polyint.tools/forums/topic-diff" },
    ],
  },
  {
    id: "geoint",
    name: "GEOINT",
    description: "Localisation d'images et analyse géospatiale.",
    links: [
      { label: "Tile Recon", href: "https://polyint.tools/geoint/tile-recon" },
      { label: "Sun & Shadow", href: "https://polyint.tools/geoint/sun-shadow" },
    ],
  },
  {
    id: "legalint",
    name: "LEGALINT",
    description: "Exploitation de sources juridiques ouvertes.",
    links: [
      { label: "Court Explorer", href: "https://polyint.tools/legalint/court-explorer" },
      { label: "Law Monitor", href: "https://polyint.tools/legalint/law-monitor" },
    ],
  },
  {
    id: "medint",
    name: "MEDINT",
    description: "Veille sources médicales et sanitaires.",
    links: [
      { label: "Outbreak Radar", href: "https://polyint.tools/medint/outbreak-radar" },
      { label: "Clinical Trials", href: "https://polyint.tools/medint/clinical-trials" },
    ],
  },
  {
    id: "mindmap",
    name: "MINDMAP",
    description: "Production de mindmaps et graphes relationnels.",
    links: [
      { label: "Graph Builder", href: "https://polyint.tools/mindmap/graph-builder" },
      { label: "Link Merge", href: "https://polyint.tools/mindmap/link-merge" },
    ],
  },*/
  {
    id: "nature",
    name: "NATURE",
    description: "Identification faune, flore et écosystèmes.",
    links: [
      { label: "Birdnet", href: "https://birdnet.cornell.edu/api/" },
      { label: "Plantnet", href: "https://plantnet.org/en/" },
    ],
  },
 /* {
    id: "opsec",
    name: "OPSEC",
    description: "Réduction de surface d'exposition et empreinte numérique.",
    links: [
      { label: "Surface Mapper", href: "https://polyint.tools/opsec/surface-mapper" },
      { label: "Alias Sanitizer", href: "https://polyint.tools/opsec/alias-sanitizer" },
    ],
  },
  */
/*  {
    id: "sigint",
    name: "SIGINT",
    description: "Analyse du spectre et interceptions radio.",
    links: [
      { label: "Spectrum Watch", href: "https://polyint.tools/sigint/spectrum-watch" },
      { label: "P25 Decoder", href: "https://polyint.tools/sigint/p25-decoder" },
    ],
  },*/
 /* {
    id: "socmint",
    name: "SOCMINT",
    description: "Extraction et corrélation de profils sociaux.",
    links: [
      { label: "Username Scan", href: "https://polyint.tools/socmint/username-scan" },
      { label: "Timeline Builder", href: "https://polyint.tools/socmint/timeline-builder" },
    ],
  },*/
  /*{
    id: "web",
    name: "WEB",
    description: "Capture, archives et empreintes web.",
    links: [
      { label: "Snapshotter", href: "https://polyint.tools/web/snapshotter" },
      { label: "Tech Fingerprint", href: "https://polyint.tools/web/tech-fingerprint" },
    ],
  },*/
  {
    id: "stegano",
    name: "STEGANO",
    description: "Détection et extraction de données cachées.",
    links: [
      { label: "Aperisolve", href: "https://www.aperisolve.com/" },
      { label: "StegOnline", href: "https://georgeom.net/StegOnline/upload" },
    ],
  },
  {
    id: "archives",
    name: "ARCHIVES",
    description: "Recherche dans archives web et presse.",
    links: [
      { label: "Wayback Machine", href: "https://web.archive.org/" },
      { label: "Wayback Collection Search", href: "https://web.archive.org/collection-search" },
    ],
  },
  {
    id: "aerien",
    name: "AERIEN",
    description: "Suivi du trafic aérien et immatriculations.",
    links: [
      { label: "ADS-B Exchange", href: "https://globe.adsbexchange.com/" },
      { label: "Photos aériennes FR", href: "https://remonterletemps.ign.fr" },
      { label: "Dictator Alert", href: "https://data.dictatoralert.org" },
      { label: "Flightaware", href: "https://www.flightaware.com/" },
      { label: "Plane Spotter", href: "https://www.planespotters.net" },

    ],
  },
  /*{
    id: "techint",
    name: "TECHINT",
    description: "Renseignement technique, brevets et R&D.",
    links: [
      { label: "Patent Scout", href: "https://polyint.tools/techint/patent-scout" },
      { label: "Stack Radar", href: "https://polyint.tools/techint/stack-radar" },
    ],
  },*/
 /* {
    id: "govint",
    name: "GOVINT",
    description: "Veille institutions publiques et appels d'offres.",
    links: [
      { label: "Tender Watch", href: "https://polyint.tools/govint/tender-watch" },
      { label: "Gov Directory", href: "https://polyint.tools/govint/directory" },
    ],
  },*/

  {
    id: "search-engines",
    name: "SEARCH ENGINES",
    description: "Métamoteurs et agrégateurs spécialisés pour l'OSINT.",
    links: [
      { label: "IntelX", href: "https://intelx.io/" },
      { label: "Google", href: "https://google.com/" },
      { label: "Bing", href: "https://www.bing.com" },
      { label: "Yandex", href: "https://www.yandex.com" },
      { label: "DuckDuckGo", href: "https://duckduckgo.com" },
      { label: "Google News", href: "https://www.google.com/webhp?tbm=nws" },
      { label: "Yahoo", href: "https://search.yahoo.com" },
      { label: "Qwant", href: "https://www.qwant.com/?q=" },
      { label: "Brave", href: "https://search.brave.com/" },
      { label: "Ahmia", href: "https://ahmia.fi/" },
      { label: "Baidu", href: "https://www.baidu.com/" },
      { label: "StartPage", href: "https://www.startpage.com" },

    ],
  },
];

export const writeUpCategories: WriteUpCategory[] = [
  {
    id: "ecw",
    name: "ECW",
    description: "Write-ups et méthodologies issues des challenges European Cyber Week.",
    articles: [
      {
        slug: "whosdatcat",
        title: "WhosDatCat?",
        description: "Identifier un propriétaire à partir d'une photo de son chat et d'indices open source.",
        pdfHref: "/writeups/ecw/whosdatcat.pdf",
      },
      {
        slug: "dark-signal",
        title: "ECW 2023 – Dark Signal",
        description: "Corrélation de logs radio et données publiques pour identifier un navire détourné.",
        pdfHref: "/writeups/ecw/dark-signal.pdf",
      },
    ],
  },
  {
    id: "0xlaugh",
    name: "0xLaugh CTF",
    description: "Solutions et comptes-rendus du CTF 0xLaugh (épreuves OSINT, forensic, web).",
    articles: [
      {
        slug: "trace-me",
        title: "0xLaugh 2024 – Trace Me",
        description: "Retrouver un influenceur via empreinte numérique et archives sociales.",
        pdfHref: "/writeups/0xlaugh/trace-me.pdf",
      },
      {
        slug: "shipping-lanes",
        title: "0xLaugh 2023 – Shipping Lanes",
        description: "Reconstitution d'un itinéraire maritime à partir d'images partagées.",
        pdfHref: "/writeups/0xlaugh/shipping-lanes.pdf",
      },
    ],
  },
];
