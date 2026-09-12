/**
 * NEXUS ENTERPRISE RESOURCE PORTAL - CORE SCRIPT
 * Performance-First, Vanilla JS Architecture with Zero Dependencies
 * Direct Root File
 */

// ==========================================================================
// 1. INITIAL ENTERPRISE DATASET (OFFLINE-FIRST)
// ==========================================================================

const INITIAL_RESOURCES = [
  {
    id: "res-01",
    name: "Nexus Cloud Infrastructure Console",
    category: "IT",
    department: "IT",
    type: "Portal",
    description: "Centralized AWS & Kubernetes orchestration dashboard for enterprise microservices, load balancers, and observability.",
    updated: "2026-09-08",
    favorite: false,
    url: "#it-console"
  },
  {
    id: "res-02",
    name: "Workday HR Management System",
    category: "HR",
    department: "HR",
    type: "Software",
    description: "Employee self-service for benefits enrollment, PTO balances, annual performance reviews, and compensation statements.",
    updated: "2026-09-02",
    favorite: true,
    url: "#workday"
  },
  {
    id: "res-03",
    name: "Concur Enterprise Expense Portal",
    category: "Finance",
    department: "Finance",
    type: "Software",
    description: "Corporate credit card reconciliation, mileage tracking, travel per-diem claims, and manager approval workflows.",
    updated: "2026-08-28",
    favorite: false,
    url: "#concur"
  },
  {
    id: "res-04",
    name: "Global Legal & Compliance Vault",
    category: "Legal",
    department: "Legal",
    type: "Guide",
    description: "Standard non-disclosure agreements, master services contracts, international trade compliance guidelines, and patent filings.",
    updated: "2026-09-10",
    favorite: false,
    url: "#legal-vault"
  },
  {
    id: "res-05",
    name: "Jira Enterprise Project Tracker",
    category: "Operations",
    department: "Operations",
    type: "Software",
    description: "Agile sprints, Kanban roadmap boards, cross-department dependency tracking, and executive release planning.",
    updated: "2026-09-09",
    favorite: true,
    url: "#jira"
  },
  {
    id: "res-06",
    name: "Brand Asset & Marketing Studio",
    category: "Marketing",
    department: "Marketing",
    type: "Portal",
    description: "Approved vector logos, typography packs, corporate slide deck master templates, and press release kits.",
    updated: "2026-08-20",
    favorite: false,
    url: "#brand-studio"
  },
  {
    id: "res-07",
    name: "Okta Identity & SSO Management",
    category: "Security",
    department: "Security",
    type: "Software",
    description: "Zero-trust biometric multi-factor authentication, security key registration, and SAML application access.",
    updated: "2026-09-11",
    favorite: false,
    url: "#okta"
  },
  {
    id: "res-08",
    name: "Global Office Desk & Room Booking",
    category: "Facilities",
    department: "Facilities",
    type: "Portal",
    description: "Interactive floor plan booking for hybrid desks, executive boardrooms, soundproof meeting pods, and guest passes.",
    updated: "2026-09-05",
    favorite: false,
    url: "#desk-booking"
  },
  {
    id: "res-09",
    name: "Nexus Engineering Design System",
    category: "IT",
    department: "IT",
    type: "Guide",
    description: "Reusable UI components, accessible color specifications, micro-interaction guidelines, and API contract specifications.",
    updated: "2026-09-07",
    favorite: true,
    url: "#design-system"
  },
  {
    id: "res-10",
    name: "Enterprise Learning & Certifications",
    category: "Training",
    department: "HR",
    type: "Portal",
    description: "Corporate subscriptions to Coursera, O'Reilly Learning, cloud architect certification reimbursements, and leadership tracks.",
    updated: "2026-08-15",
    favorite: false,
    url: "#learning"
  },
  {
    id: "res-11",
    name: "Cyber Incident Response Playbook",
    category: "Security",
    department: "Security",
    type: "Policy",
    description: "Standard operating procedures for phishing isolation, credential rotation, ransomware mitigation, and SOC escalation.",
    updated: "2026-09-01",
    favorite: false,
    url: "#cyber-playbook"
  },
  {
    id: "res-12",
    name: "Procurement & Vendor Portal (Coupa)",
    category: "Finance",
    department: "Finance",
    type: "Software",
    description: "Hardware purchase approvals, third-party software license requests, and vendor security assessment questionnaires.",
    updated: "2026-08-30",
    favorite: false,
    url: "#coupa"
  }
];

const INITIAL_DOCUMENTS = [
  {
    id: "doc-01",
    name: "Global Information Security Policy 2026",
    category: "Company Policies",
    department: "Security",
    format: "PDF",
    size: "4.2 MB",
    updated: "2026-09-01",
    status: "Active",
    favorite: true,
    summary: "Mandatory security standards regarding hardware encryption, password rotators, confidential data classification, and clean desk rules."
  },
  {
    id: "doc-02",
    name: "Employee Benefits & Health Coverage Handbook",
    category: "HR Documents",
    department: "HR",
    format: "PDF",
    size: "8.5 MB",
    updated: "2026-08-15",
    status: "Active",
    favorite: false,
    summary: "Comprehensive guide to global medical plans, dental, 401(k) / pension matching, wellness stipends, and parental leave."
  },
  {
    id: "doc-03",
    name: "Q3 2026 Enterprise Financial Guidance & Forecast",
    category: "Financial Documents",
    department: "Finance",
    format: "XLSX",
    size: "2.1 MB",
    updated: "2026-09-08",
    status: "Confidential",
    favorite: false,
    summary: "Budget allocations, capital expenditures, department variance analysis, and revised ARR forecasts."
  },
  {
    id: "doc-04",
    name: "Mutual Non-Disclosure Agreement (Standard 2026)",
    category: "Legal Documents",
    department: "Legal",
    format: "DOC",
    size: "340 KB",
    updated: "2026-07-20",
    status: "Active",
    favorite: true,
    summary: "Approved two-way NDA contract for customer consultations, supplier partnerships, and external contractor onboarding."
  },
  {
    id: "doc-05",
    name: "Distributed Cloud Architecture Blueprints",
    category: "Technical Documents",
    department: "IT",
    format: "PDF",
    size: "14.8 MB",
    updated: "2026-09-10",
    status: "Active",
    favorite: false,
    summary: "Detailed network topology, multi-region failover configurations, latency targets, and zero-trust perimeter schemas."
  },
  {
    id: "doc-06",
    name: "International Travel & Expense Reimbursement Policy",
    category: "Company Policies",
    department: "Finance",
    format: "PDF",
    size: "1.2 MB",
    updated: "2026-08-01",
    status: "Active",
    favorite: false,
    summary: "Flight class authorizations, hotel spending caps by tier-1 cities, daily meal allowances, and receipt submission guidelines."
  },
  {
    id: "doc-07",
    name: "Standard Equipment Request Form (Hardware Refresh)",
    category: "Forms",
    department: "IT",
    format: "PDF",
    size: "450 KB",
    updated: "2026-08-25",
    status: "Active",
    favorite: false,
    summary: "Form to request standard developer M3 Max MacBooks, 4K Dell UltraSharp monitors, ergonomic chairs, and headsets."
  },
  {
    id: "doc-08",
    name: "Annual ESG & Sustainability Progress Report",
    category: "Reports",
    department: "Operations",
    format: "SLIDES",
    size: "18.2 MB",
    updated: "2026-08-10",
    status: "Published",
    favorite: false,
    summary: "Carbon footprint tracking across global server locations, zero-waste office initiatives, and sustainable hardware recycling."
  }
];

const INITIAL_REQUESTS = [
  {
    id: "REQ-2026-4801",
    title: "Engineering M3 Max Laptop & Dock Upgrade",
    department: "Information Technology",
    priority: "High",
    date: "2026-09-10",
    status: "In Progress",
    assigned: "IT Hardware Desk",
    description: "MacBook Pro 16-inch 64GB Unified Memory with CalDigit Thunderbolt 4 dock for distributed builds."
  },
  {
    id: "REQ-2026-4795",
    title: "Annual Paid Time Off (PTO) - European Tech Summit",
    department: "Human Resources",
    priority: "Medium",
    date: "2026-09-08",
    status: "Approved",
    assigned: "Sarah Jenkins (VP HR)",
    description: "Requested 5 days PTO consecutive with Berlin engineering conference speaking engagement."
  },
  {
    id: "REQ-2026-4780",
    title: "Production AWS Multi-Region VPC Access",
    department: "Information Technology",
    priority: "Urgent",
    date: "2026-09-09",
    status: "Reviewing",
    assigned: "Cyber Security Ops",
    description: "Bastion host SSH access and IAM policy attach for Frankfurt and Tokyo database replication failover."
  },
  {
    id: "REQ-2026-4774",
    title: "Q3 Client Hospitality & Travel Reimbursement",
    department: "Finance & Accounting",
    priority: "Medium",
    date: "2026-09-05",
    status: "Completed",
    assigned: "Finance Accounts Payable",
    description: "Invoice #NX-9428 totaling $1,840.50 for client workshop catering and transit in London office."
  },
  {
    id: "REQ-2026-4762",
    title: "Ergonomic Standing Desk Assembly - Pod 4B",
    department: "Facilities & Workplace",
    priority: "Low",
    date: "2026-09-03",
    status: "Completed",
    assigned: "Facilities Team",
    description: "Motorized dual-motor sit-stand desk installation and cable management bracket in NY Tech Lab."
  },
  {
    id: "REQ-2026-4750",
    title: "Kubernetes Certified Administrator (CKA) Exam Fee",
    department: "Human Resources",
    priority: "Medium",
    date: "2026-09-01",
    status: "Approved",
    assigned: "People Ops Learning",
    description: "Corporate learning stipend reimbursement request for Linux Foundation CKA certification exam."
  }
];

const DEPARTMENTS = [
  {
    name: "Information Technology",
    manager: "David Chen",
    teamSize: 142,
    servicesCount: 14,
    email: "it-operations@nexus-enterprise.org",
    ext: "4000",
    openRequests: 8,
    description: "Core cloud architecture, identity services, enterprise software delivery, and cybersecurity infrastructure."
  },
  {
    name: "Human Resources",
    manager: "Sarah Jenkins",
    teamSize: 48,
    servicesCount: 9,
    email: "hr-desk@nexus-enterprise.org",
    ext: "4100",
    openRequests: 3,
    description: "Talent acquisition, organizational development, global compensation, benefits, and workplace culture."
  },
  {
    name: "Finance & Accounting",
    manager: "Marcus Vance",
    teamSize: 36,
    servicesCount: 7,
    email: "finance-ops@nexus-enterprise.org",
    ext: "4200",
    openRequests: 2,
    description: "Corporate treasury, revenue operations, financial planning, compliance reporting, and global payroll."
  },
  {
    name: "Global Operations",
    manager: "Elena Rostova",
    teamSize: 85,
    servicesCount: 8,
    email: "operations@nexus-enterprise.org",
    ext: "4300",
    openRequests: 4,
    description: "Logistics coordination, facility expansion, vendor governance, and business process automation."
  },
  {
    name: "Legal & Compliance",
    manager: "Alistair Sterling",
    teamSize: 22,
    servicesCount: 5,
    email: "legal@nexus-enterprise.org",
    ext: "4400",
    openRequests: 1,
    description: "International enterprise contracts, regulatory GDPR/CCPA governance, patent filings, and audit readiness."
  },
  {
    name: "Cyber Security & SOC",
    manager: "Vikram Malhotra",
    teamSize: 32,
    servicesCount: 6,
    email: "security-incident@nexus-enterprise.org",
    ext: "4500",
    openRequests: 2,
    description: "24/7 Security Operations Center, threat hunting, perimeter vulnerability assessment, and zero-trust policies."
  }
];

const EMPLOYEES = [
  {
    id: "emp-01",
    name: "Alex Lawrence",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "New York",
    status: "online",
    skills: ["System Architecture", "TypeScript", "Kubernetes", "Web Performance"],
    email: "alex.lawrence@nexus-enterprise.org",
    ext: "4082"
  },
  {
    id: "emp-02",
    name: "Sarah Jenkins",
    title: "VP Human Resources",
    department: "Human Resources",
    location: "London",
    status: "online",
    skills: ["Talent Strategy", "Executive Coaching", "Global Mobility", "Workday"],
    email: "sarah.jenkins@nexus-enterprise.org",
    ext: "4105"
  },
  {
    id: "emp-03",
    name: "David Chen",
    title: "Director of IT Infrastructure",
    department: "Information Technology",
    location: "Singapore",
    status: "busy",
    skills: ["Cloud Ops", "Terraform", "Zero-Trust", "Enterprise Networks"],
    email: "david.chen@nexus-enterprise.org",
    ext: "4010"
  },
  {
    id: "emp-04",
    name: "Marcus Vance",
    title: "Chief Financial Officer",
    department: "Finance",
    location: "New York",
    status: "away",
    skills: ["Capital Allocations", "M&A", "Treasury", "SEC Compliance"],
    email: "marcus.vance@nexus-enterprise.org",
    ext: "4201"
  },
  {
    id: "emp-05",
    name: "Elena Rostova",
    title: "Director of Operations",
    department: "Operations",
    location: "Dubai",
    status: "online",
    skills: ["Supply Chain", "Global Logistics", "Agile Leadership", "Facility Mgmt"],
    email: "elena.rostova@nexus-enterprise.org",
    ext: "4312"
  },
  {
    id: "emp-06",
    name: "Vikram Malhotra",
    title: "Lead Cybersecurity Architect",
    department: "Information Technology",
    location: "London",
    status: "online",
    skills: ["SOC Lead", "Penetration Testing", "IAM", "Incident Response"],
    email: "vikram.m@nexus-enterprise.org",
    ext: "4508"
  },
  {
    id: "emp-07",
    name: "Maya Lin",
    title: "Principal Product Designer",
    department: "Marketing",
    location: "Tokyo",
    status: "online",
    skills: ["Design Systems", "Figma", "Accessibility (a11y)", "UX Research"],
    email: "maya.lin@nexus-enterprise.org",
    ext: "4602"
  },
  {
    id: "emp-08",
    name: "Alistair Sterling",
    title: "Chief Legal Officer",
    department: "Legal",
    location: "London",
    status: "away",
    skills: ["Corporate Law", "IP Protection", "GDPR", "Cross-Border Tax"],
    email: "a.sterling@nexus-enterprise.org",
    ext: "4401"
  }
];

const SERVICES = [
  {
    id: "srv-01",
    title: "Tier-1 IT Hardware & Laptop Provisioning",
    dept: "Information Technology",
    sla: "< 24 Hours",
    availability: "Mon - Fri, 24/5",
    description: "Standard laptop deployments, replacement chargers, docking stations, and remote worker shipping.",
    formTarget: "equipment"
  },
  {
    id: "srv-02",
    title: "Production Infrastructure & VPN Access",
    dept: "Information Technology",
    sla: "< 2 Hours",
    availability: "24/7/365",
    description: "Privileged cloud IAM credentials, WireGuard VPN keys, staging database read replicas, and SSH certificates.",
    formTarget: "access"
  },
  {
    id: "srv-03",
    title: "Official Proof of Employment & Visa Letters",
    dept: "Human Resources",
    sla: "< 48 Hours",
    availability: "Mon - Fri, 9am - 5pm",
    description: "Notarized corporate letters for mortgage applications, travel visas, and academic verification.",
    formTarget: "employee_service"
  },
  {
    id: "srv-04",
    title: "Executive Travel & Lodging Authorization",
    dept: "Finance & Operations",
    sla: "< 12 Hours",
    availability: "Mon - Sat",
    description: "Booking approval for international flights, hotel reservations, client conference passes, and transit per-diem.",
    formTarget: "travel"
  },
  {
    id: "srv-05",
    title: "Enterprise Expense Reimbursement Review",
    dept: "Finance",
    sla: "< 3 Business Days",
    availability: "Continuous",
    description: "Processing of Concur expense vouchers, corporate card reconciliations, and wire transfers.",
    formTarget: "expense"
  },
  {
    id: "srv-06",
    title: "Ergonomic Desk & Equipment Setup",
    dept: "Facilities",
    sla: "< 24 Hours",
    availability: "Mon - Fri",
    description: "In-office ergonomic assessments, motorized sit-stand desk adjustments, dual monitor arms, and badge repairs.",
    formTarget: "facility"
  }
];

const KNOWLEDGE_ARTICLES = [
  {
    id: "kb-01",
    title: "Enterprise Zero-Trust & MFA Setup Guide",
    category: "Security",
    readTime: "4 min read",
    updated: "2026-09-02",
    summary: "Step-by-step instructions for enrolling YubiKeys and Okta Verify with biometric TouchID / Windows Hello authentication.",
    content: "### Overview\nAll employee accounts are guarded by mandatory FIDO2 / WebAuthn passwordless authentication.\n\n1. Connect your company-issued hardware security key.\n2. Access the Okta Identity dashboard.\n3. Register both your primary hardware key and mobile biometric authenticator as backup.\n4. Remember: IT Support will NEVER ask for your one-time code or hardware tap."
  },
  {
    id: "kb-02",
    title: "Remote Worker Expense & Home Office Stipend Policy",
    category: "Finance",
    readTime: "6 min read",
    updated: "2026-08-20",
    summary: "Everything you need to know about claiming your annual $1,000 ergonomic equipment and $80/month internet reimbursement.",
    content: "### Home Office Reimbursement\nFull-time remote team members are eligible for:\n\n* **Initial Setup Stipend:** $1,000 for approved monitors, chairs, and desks.\n* **Monthly Connectivity:** $80 per calendar month filed via Concur.\n* Receipts must be submitted within 60 days of purchase."
  },
  {
    id: "kb-03",
    title: "Local Kubernetes Development with Minikube & Tilt",
    category: "IT & Infrastructure",
    readTime: "8 min read",
    updated: "2026-09-06",
    summary: "Standardized local container workflow for spinning up enterprise microservice mocks with live hot reloading.",
    content: "### Getting Started\nClone the enterprise developer bundle from Git and execute:\n\n```bash\nbrew install tilt minikube\ntilt up\n```\nThis mounts local source code into the development cluster and forwards port 8080."
  },
  {
    id: "kb-04",
    title: "Global Paid Time Off (PTO) & Public Holiday Calendars",
    category: "HR & Benefits",
    readTime: "5 min read",
    updated: "2026-08-11",
    summary: "Regional statutory holidays, roll-over guidelines for unused annual leave, and bereavement leave procedures.",
    content: "### Annual PTO Entitlement\n* Full-time employees receive 25 days paid vacation annually.\n* Up to 5 unused days may roll over to the subsequent calendar year.\n* Apply via the Leave Request form at least 2 weeks in advance for vacations exceeding 3 consecutive days."
  }
];

const ANNOUNCEMENTS = [
  {
    id: "ann-01",
    title: "Global Q3 All-Hands Executive Town Hall Scheduled",
    category: "Executive",
    priority: "Critical",
    date: "2026-09-11",
    read: false,
    summary: "CEO and department leaders will present Q3 financial results, global product milestones, and celebrate annual employee awards. Remote live stream available across all timezones."
  },
  {
    id: "ann-02",
    title: "Scheduled Maintenance: Okta SSO & Core Network Upgrades",
    category: "IT Maintenance",
    priority: "Important",
    date: "2026-09-09",
    read: false,
    summary: "Core identity servers will undergo routine patch upgrades this Saturday from 02:00 to 04:00 UTC. Brief 5-minute disconnects may occur for active VPN sessions."
  },
  {
    id: "ann-03",
    title: "New Flexible Travel & Health Insurance Upgrades",
    category: "HR",
    priority: "General",
    date: "2026-09-04",
    read: true,
    summary: "Starting next month, worldwide emergency medical assistance coverage through Allianz has been added automatically for all international business travelers."
  },
  {
    id: "ann-04",
    title: "Annual SOC2 Type II Audit Completed with Zero Exceptions",
    category: "Security",
    priority: "General",
    date: "2026-08-28",
    read: true,
    summary: "Independent audit firm Ernst & Young has officially certified our global cloud infrastructure and data privacy controls without any remediations required."
  }
];

const INITIAL_CALENDAR_EVENTS = [
  {
    id: "ev-01",
    title: "Q3 Executive Town Hall",
    date: "2026-09-15",
    time: "14:00",
    category: "Executive",
    location: "Global Broadcast Stream"
  },
  {
    id: "ev-02",
    title: "Cloud Infrastructure Maintenance",
    date: "2026-09-19",
    time: "02:00",
    category: "Maintenance",
    location: "AWS us-east-1 & eu-central-1"
  },
  {
    id: "ev-03",
    title: "Cybersecurity Threat Briefing",
    date: "2026-09-22",
    time: "11:00",
    category: "Training",
    location: "Zoom Virtual Hall"
  },
  {
    id: "ev-04",
    title: "Financial Q4 Budget Submissions Due",
    date: "2026-09-30",
    time: "17:00",
    category: "Deadline",
    location: "Finance Concur Vault"
  }
];

const INITIAL_CHATS = {
  "it-helpdesk": {
    name: "IT Infrastructure Helpdesk",
    role: "Technical Operations Support",
    avatar: "IT",
    messages: [
      { sender: "them", text: "Hello Alex, welcome to NEXUS Enterprise Helpdesk. How can we assist you with hardware, cloud access, or VPN today?", time: "09:15" },
      { sender: "you", text: "Hi! Inquiring about the Thunderbolt 4 dock requisition for my workstation.", time: "09:20" },
      { sender: "them", text: "Your request REQ-2026-4801 has been approved and is scheduled for dispatch from our logistics warehouse today.", time: "09:22" }
    ]
  },
  "hr-team": {
    name: "Sarah Jenkins (VP HR)",
    role: "People & Talent Management",
    avatar: "SJ",
    messages: [
      { sender: "them", text: "Hi Alex! Just confirming your travel authorization for the Berlin conference is processed.", time: "Yesterday" }
    ]
  },
  "finance-ops": {
    name: "Finance & Accounting Desk",
    role: "Expense & Payroll Queries",
    avatar: "FN",
    messages: [
      { sender: "them", text: "All monthly expense claims submitted before the 15th will be credited in next Friday's payroll cycle.", time: "Sep 05" }
    ]
  }
};

// ==========================================================================
// 2. STORAGE & APPLICATION STATE MANAGER
// ==========================================================================

const ERP_STORAGE_KEYS = {
  RESOURCES: "nexus_erp_resources_v1",
  DOCUMENTS: "nexus_erp_documents_v1",
  REQUESTS: "nexus_erp_requests_v1",
  NOTIFICATIONS: "nexus_erp_notifications_v1",
  CALENDAR: "nexus_erp_calendar_v1",
  ANNOUNCEMENTS: "nexus_erp_announcements_v1",
  CHATS: "nexus_erp_chats_v1",
  PROFILE: "nexus_erp_profile_v1",
  THEME: "nexus_erp_theme_v1",
  DENSITY: "nexus_erp_density_v1",
  LANG: "nexus_erp_lang_v1"
};

class StorageManager {
  static get(key, defaultValue) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn("LocalStorage access failed for " + key, e);
      return defaultValue;
    }
  }

  static set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("LocalStorage write failed for " + key, e);
    }
  }
}

// Global App State
const state = {
  resources: StorageManager.get(ERP_STORAGE_KEYS.RESOURCES, INITIAL_RESOURCES),
  documents: StorageManager.get(ERP_STORAGE_KEYS.DOCUMENTS, INITIAL_DOCUMENTS),
  requests: StorageManager.get(ERP_STORAGE_KEYS.REQUESTS, INITIAL_REQUESTS),
  announcements: StorageManager.get(ERP_STORAGE_KEYS.ANNOUNCEMENTS, ANNOUNCEMENTS),
  calendarEvents: StorageManager.get(ERP_STORAGE_KEYS.CALENDAR, INITIAL_CALENDAR_EVENTS),
  chats: StorageManager.get(ERP_STORAGE_KEYS.CHATS, INITIAL_CHATS),
  userProfile: StorageManager.get(ERP_STORAGE_KEYS.PROFILE, {
    name: "Alex Lawrence",
    title: "Senior Software Engineer",
    department: "Information Technology",
    location: "New York HQ",
    email: "alex.lawrence@nexus-enterprise.org",
    ext: "4082"
  }),
  activeChatContact: "it-helpdesk",
  calendarDate: new Date(2026, 8, 11), // September 2026
  activeDocView: "table",
  language: StorageManager.get(ERP_STORAGE_KEYS.LANG, "en"),
  theme: StorageManager.get(ERP_STORAGE_KEYS.THEME, "light"),
  density: StorageManager.get(ERP_STORAGE_KEYS.DENSITY, "cozy")
};

// ==========================================================================
// 3. I18N / TRANSLATIONS (ENGLISH & URDU READY)
// ==========================================================================

const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_resources: "Resources",
    nav_documents: "Documents",
    nav_forms: "Forms",
    nav_requests: "Requests",
    nav_services: "Services",
    nav_directory: "Directory",
    nav_knowledge: "Knowledge",
    nav_calendar: "Calendar",
    search_placeholder: "Search resources, documents...",
    create_request_btn: "Create Request",
    hero_badge: "Global Operational Hub",
    hero_headline_1: "Everything Your Enterprise Needs.",
    hero_headline_2: "One Powerful",
    hero_headline_3: "Portal.",
    hero_subtext: "Provide employees and teams with fast, centralized access to business resources, internal services, documents, departments and enterprise tools.",
    explore_resources_cta: "Explore Resources",
    submit_request_cta: "Submit Request",
    knowledge_base_cta: "Knowledge Base",
    dashboard_kpis_title: "Enterprise Operational Overview",
    quick_actions_title: "Enterprise Quick Actions",
    resource_library_title: "Enterprise Resource Library",
    document_center_title: "Enterprise Document Center",
    forms_center_title: "Enterprise Forms Center",
    requests_management_title: "Request Management Desk",
    departments_title: "Enterprise Department Directory",
    employee_directory_title: "Internal Employee Directory",
    service_catalog_title: "Enterprise Service Catalog",
    knowledge_base_title: "Enterprise Knowledge Base",
    announcements_title: "Company Announcement Center",
    calendar_title: "Enterprise Events & Calendar",
    analytics_title: "Resource Analytics & Management Insights",
    chat_title: "Internal Department Messenger",
    kpi_total_resources: "Total Resources",
    kpi_pending_requests: "Pending Requests",
    kpi_documents: "Enterprise Documents",
    kpi_active_services: "Active Services",
    kpi_announcements: "Announcements",
    kpi_open_tasks: "Open Schedules",
    action_find_resource: "Find Resource",
    action_submit_request: "Submit Request",
    action_view_documents: "View Documents",
    action_contact_hr: "Contact HR",
    action_contact_it: "Contact IT",
    action_view_directory: "View Directory",
    action_report_issue: "Report Issue",
    action_open_kb: "Knowledge Base"
  },
  ur: {
    nav_home: "ہوم",
    nav_resources: "وسائل",
    nav_documents: "دستاویزات",
    nav_forms: "فارمز",
    nav_requests: "درخواستیں",
    nav_services: "خدمات",
    nav_directory: "ڈائریکٹری",
    nav_knowledge: "معلومات",
    nav_calendar: "کیلنڈر",
    search_placeholder: "وسائل، دستاویزات تلاش کریں...",
    create_request_btn: "درخواست بنائیں",
    hero_badge: "عالمی کاروباری مرکز",
    hero_headline_1: "آپ کے ادارے کی تمام ضروریات۔",
    hero_headline_2: "ایک طاقتور",
    hero_headline_3: "پورٹل۔",
    hero_subtext: "ملازمین اور ٹیموں کو کاروباری وسائل، اندرونی خدمات، دستاویزات، شعبہ جات اور انٹرپرائز ٹولز تک تیز اور مرکزی رسائی فراہم کریں۔",
    explore_resources_cta: "وسائل تلاش کریں",
    submit_request_cta: "درخواست جمع کریں",
    knowledge_base_cta: "معلوماتی مرکز",
    dashboard_kpis_title: "ادارہ جاتی جائزہ",
    quick_actions_title: "فوری کارروائیاں",
    resource_library_title: "ادارہ جاتی وسائل کی لائبریری",
    document_center_title: "دستاویزات کا مرکز",
    forms_center_title: "ادارہ جاتی فارمز کا مرکز",
    requests_management_title: "درخواستوں کا انتظامی ڈیسک",
    departments_title: "شعبہ جات کی ڈائریکٹری",
    employee_directory_title: "ملازمین کی ڈائریکٹری",
    service_catalog_title: "انٹرپرائز سروس کیٹلاگ",
    knowledge_base_title: "نالج بیس",
    announcements_title: "کمپنی اعلانات کا مرکز",
    calendar_title: "تقریبات و کیلنڈر",
    analytics_title: "وسائل کا تجزیہ اور بصیرت",
    chat_title: "اندرونی میسنجر",
    kpi_total_resources: "کل وسائل",
    kpi_pending_requests: "زیر التواء درخواستیں",
    kpi_documents: "دستاویزات",
    kpi_active_services: "فعال سروسز",
    kpi_announcements: "اعلانات",
    kpi_open_tasks: "شیڈول کام",
    action_find_resource: "وسیلہ تلاش کریں",
    action_submit_request: "درخواست بھیجیں",
    action_view_documents: "دستاویزات دیکھیں",
    action_contact_hr: "HR رابطہ",
    action_contact_it: "IT رابطہ",
    action_view_directory: "ڈائریکٹری دیکھیں",
    action_report_issue: "مسئلہ رپورٹ کریں",
    action_open_kb: "معلوماتی مرکز"
  }
};

function applyTranslations(lang) {
  state.language = lang;
  StorageManager.set(ERP_STORAGE_KEYS.LANG, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";

  const langLabel = document.getElementById("langLabel");
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });
}

// ==========================================================================
// 4. UI NOTIFICATIONS & TOAST SYSTEM
// ==========================================================================

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.setAttribute("role", "alert");

  let iconSvg = "";
  if (type === "success") {
    iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
  } else if (type === "error") {
    iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
  } else {
    iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0047AB" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
  }

  toast.innerHTML = `
    ${iconSvg}
    <div style="flex:1; font-size:0.85rem; font-weight:600;">${escapeHtml(message)}</div>
    <button style="background:transparent; border:none; cursor:pointer; color:var(--text-muted);" aria-label="Close Notification">&times;</button>
  `;

  toast.querySelector("button").addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  });

  container.appendChild(toast);
  // Trigger animation
  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 250);
    }
  }, 4000);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================================================
// 5. KPI COUNTERS & HERO PULSE
// ==========================================================================

function updateKPIs() {
  const totalResourcesElem = document.getElementById("kpiTotalResources");
  const pendingRequestsElem = document.getElementById("kpiPendingRequests");
  const pulsePendingElem = document.getElementById("pulsePendingCount");
  const totalDocsElem = document.getElementById("kpiTotalDocs");
  const activeServicesElem = document.getElementById("kpiActiveServices");
  const announcementsElem = document.getElementById("kpiAnnouncements");
  const openTasksElem = document.getElementById("kpiOpenTasks");
  const pulseAnnounceElem = document.getElementById("pulseAnnounceCount");

  const pendingCount = state.requests.filter(r => r.status === "Submitted" || r.status === "Reviewing" || r.status === "In Progress").length;
  const unreadAnnouncements = state.announcements.filter(a => !a.read).length;

  if (totalResourcesElem) totalResourcesElem.textContent = state.resources.length;
  if (pendingRequestsElem) pendingRequestsElem.textContent = pendingCount;
  if (pulsePendingElem) pulsePendingElem.textContent = pendingCount;
  if (totalDocsElem) totalDocsElem.textContent = state.documents.length;
  if (activeServicesElem) activeServicesElem.textContent = SERVICES.length;
  if (announcementsElem) announcementsElem.textContent = state.announcements.length;
  if (pulseAnnounceElem) pulseAnnounceElem.textContent = unreadAnnouncements;
  if (openTasksElem) openTasksElem.textContent = state.calendarEvents.length;

  // Favorites count
  updateFavoritesBadge();
}

function updateFavoritesBadge() {
  const favCount = 
    state.resources.filter(r => r.favorite).length +
    state.documents.filter(d => d.favorite).length;

  const badge = document.getElementById("favoritesBadgeCount");
  if (badge) badge.textContent = favCount;
}

function startLiveClock() {
  const clockElem = document.getElementById("livePortalClock");
  if (!clockElem) return;

  function tick() {
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMins = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSecs = String(now.getUTCSeconds()).padStart(2, '0');
    clockElem.textContent = `${utcHours}:${utcMins}:${utcSecs} UTC`;
  }
  tick();
  setInterval(tick, 1000);
}

// ==========================================================================
// 6. RESOURCE LIBRARY CONTROLLER
// ==========================================================================

function renderResources() {
  const container = document.getElementById("resourceGrid");
  if (!container) return;

  const searchVal = (document.getElementById("resourceSearchInput")?.value || "").toLowerCase().trim();
  const deptVal = document.getElementById("resourceDeptFilter")?.value || "all";
  const typeVal = document.getElementById("resourceTypeFilter")?.value || "all";
  const activeCategoryChip = document.querySelector("#resourceCategoryChips .chip-btn.active")?.getAttribute("data-cat") || "all";

  const filtered = state.resources.filter(res => {
    const matchSearch = !searchVal || 
      res.name.toLowerCase().includes(searchVal) || 
      res.description.toLowerCase().includes(searchVal) ||
      res.department.toLowerCase().includes(searchVal);

    const matchDept = (deptVal === "all") || (res.department.toUpperCase() === deptVal.toUpperCase());
    const matchType = (typeVal === "all") || (res.type.toLowerCase() === typeVal.toLowerCase());
    const matchCat = (activeCategoryChip === "all") || (res.category.toUpperCase() === activeCategoryChip.toUpperCase());

    return matchSearch && matchDept && matchType && matchCat;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-default);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom:0.75rem;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h4 style="color:var(--text-primary);">No Resources Found</h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">Try adjusting your keyword search, category chips, or department filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(res => {
    const isFavorited = res.favorite;
    const badgeColorClass = res.category === "IT" || res.category === "Security" ? "badge-cobalt" : "badge-copper";

    return `
      <div class="resource-card" data-resource-id="${res.id}">
        <div>
          <div class="resource-card-header">
            <div class="resource-badge-group">
              <span class="badge-tag ${badgeColorClass}">${escapeHtml(res.category)}</span>
              <span class="badge-tag">${escapeHtml(res.type)}</span>
            </div>
            <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" data-action="toggle-fav-resource" data-id="${res.id}" title="${isFavorited ? 'Remove from favorites' : 'Pin to favorites'}" aria-label="Favorite">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="${isFavorited ? '#F59E0B' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </button>
          </div>
          <h4 class="resource-title">${escapeHtml(res.name)}</h4>
          <p class="resource-desc">${escapeHtml(res.description)}</p>
        </div>

        <div class="resource-meta">
          <span>Dept: <strong>${escapeHtml(res.department)}</strong></span>
          <div class="resource-footer-actions">
            <button class="btn btn-outline btn-sm" data-action="view-resource-detail" data-id="${res.id}">Details</button>
            <button class="btn btn-primary btn-sm" data-action="launch-resource" data-id="${res.id}">Launch</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 7. DOCUMENT CENTER CONTROLLER
// ==========================================================================

function renderDocuments() {
  const tableBody = document.getElementById("documentsTableBody");
  const container = document.getElementById("documentsContainer");
  if (!tableBody || !container) return;

  const searchVal = (document.getElementById("docSearchInput")?.value || "").toLowerCase().trim();
  const catVal = document.getElementById("docCategoryFilter")?.value || "all";
  const sortVal = document.getElementById("docSortFilter")?.value || "date-desc";

  let filtered = state.documents.filter(doc => {
    const matchSearch = !searchVal ||
      doc.name.toLowerCase().includes(searchVal) ||
      doc.summary.toLowerCase().includes(searchVal) ||
      doc.department.toLowerCase().includes(searchVal);

    const matchCat = (catVal === "all") || (doc.category === catVal);
    return matchSearch && matchCat;
  });

  // Sorting
  filtered.sort((a, b) => {
    if (sortVal === "date-desc") return new Date(b.updated) - new Date(a.updated);
    if (sortVal === "date-asc") return new Date(a.updated) - new Date(b.updated);
    if (sortVal === "name-asc") return a.name.localeCompare(b.name);
    if (sortVal === "size-desc") return parseFloat(b.size) - parseFloat(a.size);
    return 0;
  });

  if (state.activeDocView === "table") {
    container.innerHTML = `
      <div class="table-container">
        <table class="table" id="documentsTable">
          <thead>
            <tr>
              <th style="width: 40px;"></th>
              <th>Document Name</th>
              <th>Category</th>
              <th>Department</th>
              <th>Format</th>
              <th>Size</th>
              <th>Updated</th>
              <th>Status</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `
              <tr>
                <td colspan="9" style="text-align:center; padding:2.5rem; color:var(--text-muted);">
                  No documents found matching your filter criteria.
                </td>
              </tr>
            ` : filtered.map(doc => {
              const formatClass = doc.format === "PDF" ? "file-pdf" :
                doc.format === "DOC" ? "file-doc" :
                doc.format === "XLSX" ? "file-sheet" : "file-slides";

              return `
                <tr data-doc-id="${doc.id}">
                  <td>
                    <button class="favorite-btn ${doc.favorite ? 'favorited' : ''}" data-action="toggle-fav-doc" data-id="${doc.id}" aria-label="Favorite">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="${doc.favorite ? '#F59E0B' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </button>
                  </td>
                  <td style="font-weight: 700; color:var(--text-primary); cursor:pointer;" data-action="view-doc-detail" data-id="${doc.id}">
                    ${escapeHtml(doc.name)}
                  </td>
                  <td>${escapeHtml(doc.category)}</td>
                  <td>${escapeHtml(doc.department)}</td>
                  <td><span class="file-type-chip ${formatClass}">${doc.format}</span></td>
                  <td>${escapeHtml(doc.size)}</td>
                  <td>${escapeHtml(doc.updated)}</td>
                  <td><span class="status-pill status-approved">${escapeHtml(doc.status)}</span></td>
                  <td style="text-align: right;">
                    <button class="btn btn-outline btn-sm" data-action="view-doc-detail" data-id="${doc.id}">Preview</button>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  } else {
    // Grid View
    container.innerHTML = `
      <div class="resource-grid">
        ${filtered.length === 0 ? `
          <div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; color: var(--text-muted);">
            No documents found matching filters.
          </div>
        ` : filtered.map(doc => {
          const formatClass = doc.format === "PDF" ? "file-pdf" :
            doc.format === "DOC" ? "file-doc" :
            doc.format === "XLSX" ? "file-sheet" : "file-slides";

          return `
            <div class="resource-card" data-doc-id="${doc.id}">
              <div>
                <div class="resource-card-header">
                  <span class="file-type-chip ${formatClass}">${doc.format} • ${doc.size}</span>
                  <button class="favorite-btn ${doc.favorite ? 'favorited' : ''}" data-action="toggle-fav-doc" data-id="${doc.id}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="${doc.favorite ? '#F59E0B' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </button>
                </div>
                <h4 class="resource-title">${escapeHtml(doc.name)}</h4>
                <p class="resource-desc">${escapeHtml(doc.summary)}</p>
              </div>
              <div class="resource-meta">
                <span>Dept: <strong>${escapeHtml(doc.department)}</strong></span>
                <button class="btn btn-primary btn-sm" data-action="view-doc-detail" data-id="${doc.id}">View File</button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }
}

// ==========================================================================
// 8. ENTERPRISE FORMS CENTER CONTROLLER
// ==========================================================================

const FORM_TEMPLATES = {
  leave: {
    title: "Leave Request Application",
    desc: "Submit vacation, medical, or official absence requests to HR operations.",
    department: "Human Resources",
    fields: [
      { name: "leaveType", label: "Absence Category", type: "select", options: ["Annual Paid Vacation", "Sick / Medical Leave", "Compassionate Leave", "Remote Off-site"], required: true },
      { name: "startDate", label: "Leave Start Date", type: "date", required: true },
      { name: "endDate", label: "Leave End Date", type: "date", required: true },
      { name: "coverEmployee", label: "Stand-In / Backup Colleague", type: "text", placeholder: "e.g. Maya Lin (ext 4602)", required: true },
      { name: "comments", label: "Details / Travel destination", type: "textarea", placeholder: "Provide any handover notes or coverage details...", fullWidth: true }
    ]
  },
  equipment: {
    title: "IT Equipment & Hardware Request",
    desc: "Requisition enterprise laptops, monitors, accessories, or ergonomic peripherals.",
    department: "Information Technology",
    fields: [
      { name: "deviceType", label: "Hardware Classification", type: "select", options: ["Developer Laptop (M3 Max MacBook Pro)", "UltraSharp 4K 32\" Display", "Ergonomic Mechanical Keyboard & Mouse", "Thunderbolt 4 Docking Station", "Noise-Cancelling Headset"], required: true },
      { name: "urgency", label: "Urgency Level", type: "select", options: ["Standard (3-5 days)", "Urgent (Hardware replacement)", "Critical Blockage"], required: true },
      { name: "deliveryAddress", label: "Office Desk or Remote Address", type: "text", placeholder: "e.g. Floor 4 Pod B, or home shipping address", required: true },
      { name: "managerApproval", label: "Approving Engineering Manager", type: "text", placeholder: "e.g. David Chen", required: true },
      { name: "justification", label: "Business Justification", type: "textarea", placeholder: "State why this hardware is required for project deliverables...", fullWidth: true, required: true }
    ]
  },
  it_support: {
    title: "IT Infrastructure Support Request",
    desc: "Report network issues, VPN disconnects, software errors, or cloud credentials.",
    department: "Information Technology",
    fields: [
      { name: "issueCategory", label: "Problem Area", type: "select", options: ["VPN & Zero-Trust Connectivity", "Software License Activation", "Kubernetes & Staging Cluster", "Email / SSO Account Issue", "Operating System Error"], required: true },
      { name: "severity", label: "Severity Level", type: "select", options: ["Severity 3 - Minor inconvenience", "Severity 2 - Impaired productivity", "Severity 1 - Total work halt"], required: true },
      { name: "systemDetails", label: "Affected System / Hostname", type: "text", placeholder: "e.g. Mac-OSX-4802 or Cloud Pod", required: true },
      { name: "errorLogs", label: "Error Message or Steps to Reproduce", type: "textarea", placeholder: "Paste relevant error codes or console output...", fullWidth: true, required: true }
    ]
  },
  expense: {
    title: "Expense Reimbursement Claim",
    desc: "Submit business expenses, client dinners, software subscriptions, or home office bills.",
    department: "Finance",
    fields: [
      { name: "expenseType", label: "Expense Category", type: "select", options: ["Client Meals & Entertainment", "Travel & Transit", "Software / Cloud Tooling", "Home Office Equipment", "Conference & Education"], required: true },
      { name: "amount", label: "Total Claim Amount (USD)", type: "number", placeholder: "e.g. 350.00", required: true },
      { name: "currency", label: "Billing Currency", type: "select", options: ["USD ($)", "EUR (€)", "GBP (£)", "SGD ($)", "AED (AED)"], required: true },
      { name: "receiptId", label: "Receipt / Invoice Number", type: "text", placeholder: "e.g. INV-2026-9810", required: true },
      { name: "businessPurpose", label: "Business Purpose & Attendees", type: "textarea", placeholder: "List attendees, client name, and project objective...", fullWidth: true, required: true }
    ]
  },
  travel: {
    title: "Corporate Travel Authorization",
    desc: "Pre-approval for international client engagements, conferences, and lodging.",
    department: "Finance",
    fields: [
      { name: "destination", label: "Destination City & Country", type: "text", placeholder: "e.g. Berlin, Germany", required: true },
      { name: "travelDates", label: "Departure & Return Dates", type: "text", placeholder: "e.g. Oct 10, 2026 - Oct 16, 2026", required: true },
      { name: "estBudget", label: "Estimated Budget (Flights + Hotel)", type: "number", placeholder: "e.g. 2400", required: true },
      { name: "tripReason", label: "Trip Objective", type: "textarea", placeholder: "Describe the strategic client goal or conference agenda...", fullWidth: true, required: true }
    ]
  },
  purchase: {
    title: "Department Purchase Requisition",
    desc: "Procure vendor services, third-party software contracts, or hardware supplies.",
    department: "Finance",
    fields: [
      { name: "vendorName", label: "Vendor / Supplier Name", type: "text", placeholder: "e.g. Datadog Inc.", required: true },
      { name: "purchaseAmount", label: "Total PO Value (USD)", type: "number", placeholder: "e.g. 5000", required: true },
      { name: "contractTerm", label: "Contract Duration", type: "select", options: ["One-Time Purchase", "Annual Subscription", "Multi-Year Service"], required: true },
      { name: "poDetails", label: "Scope of Service & Quote Link", type: "textarea", placeholder: "Detail license seat counts or deliverables...", fullWidth: true, required: true }
    ]
  },
  facility: {
    title: "Facility & Workplace Service",
    desc: "Request room configurations, desk ergonomics, keycards, or office supplies.",
    department: "Facilities",
    fields: [
      { name: "officeLoc", label: "Office Location", type: "select", options: ["New York HQ (Manhattan)", "London Hub (Canary Wharf)", "Singapore Marina Bay", "Dubai DIFC", "Tokyo Ginza"], required: true },
      { name: "requestType", label: "Facility Service Needed", type: "select", options: ["Physical Access Badge / Reprogram", "Desk Ergonomics & Dual Mount", "Meeting Room Audio/Visual Setup", "Locker Assignment"], required: true },
      { name: "floorDesk", label: "Specific Desk / Room #", type: "text", placeholder: "e.g. Room 402 or Desk 14-B", required: true },
      { name: "facilityNotes", label: "Service Specifications", type: "textarea", placeholder: "Explain exact adjustments required...", fullWidth: true }
    ]
  },
  access: {
    title: "System Access & Privilege Request",
    desc: "Request AWS IAM roles, GitHub org access, production database credentials, or JIRA admin rights.",
    department: "Security",
    fields: [
      { name: "accessTarget", label: "Target System / Repository", type: "select", options: ["Production AWS Cloud Console", "GitHub Enterprise Admin Team", "Snowflake Analytics Data Warehouse", "Salesforce Enterprise CRM", "Jira Project Administration"], required: true },
      { name: "accessDuration", label: "Requested Duration", type: "select", options: ["Permanent Role-Based Access", "Temporary (30 Days)", "Audit & Debug Only (48 Hours)"], required: true },
      { name: "sponsorManager", label: "Sponsor Manager Name", type: "text", placeholder: "e.g. Vikram Malhotra (Security Lead)", required: true },
      { name: "justification", label: "Detailed Security Justification", type: "textarea", placeholder: "Provide JIRA ticket reference and technical need...", fullWidth: true, required: true }
    ]
  },
  training: {
    title: "Professional Training & Certification",
    desc: "Apply for corporate budget to attend conferences, courses, or cloud certs.",
    department: "Human Resources",
    fields: [
      { name: "courseName", label: "Certification or Conference Name", type: "text", placeholder: "e.g. AWS Certified Solutions Architect", required: true },
      { name: "institution", label: "Provider / Organization", type: "text", placeholder: "e.g. Linux Foundation / Coursera", required: true },
      { name: "tuitionFee", label: "Total Cost (USD)", type: "number", placeholder: "e.g. 450", required: true },
      { name: "careerBenefit", label: "Relevance to Current Engineering Goals", type: "textarea", placeholder: "How this training benefits enterprise team velocity...", fullWidth: true, required: true }
    ]
  },
  employee_service: {
    title: "Employee Document & HR Verification",
    desc: "Request certified employment confirmation, visa sponsorship letters, or tenure certificates.",
    department: "Human Resources",
    fields: [
      { name: "docType", label: "Letter Type", type: "select", options: ["Official Employment & Salary Verification", "Embassy Travel Visa Support Letter", "Bank Loan / Mortgage Proof Letter", "Experience Certificate & Tenure"], required: true },
      { name: "recipientOrg", label: "Addressed To (Bank/Embassy/Landlord)", type: "text", placeholder: "e.g. Embassy of Germany / Chase Bank", required: true },
      { name: "deliveryFormat", label: "Fulfillment Format", type: "select", options: ["Digital PDF with Digital Corporate Seal", "Physical Stamped Hardcopy via Courier"], required: true },
      { name: "additionalNotes", label: "Specific Wording or Clause Needed", type: "textarea", placeholder: "Any specific reference or account numbers to include...", fullWidth: true }
    ]
  }
};

let currentSelectedForm = "leave";

function setupFormSelector() {
  const formButtons = document.querySelectorAll("#formsNavList .form-select-btn");
  formButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      formButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const formKey = btn.getAttribute("data-form");
      loadForm(formKey);
    });
  });

  loadForm("leave");
}

function loadForm(formKey) {
  currentSelectedForm = formKey;
  const tpl = FORM_TEMPLATES[formKey] || FORM_TEMPLATES.leave;

  const titleElem = document.getElementById("activeFormTitle");
  const descElem = document.getElementById("activeFormDesc");
  const deptBadge = document.getElementById("activeFormDeptBadge");
  const fieldsContainer = document.getElementById("formDynamicFields");

  if (titleElem) titleElem.textContent = tpl.title;
  if (descElem) descElem.textContent = tpl.desc;
  if (deptBadge) deptBadge.textContent = tpl.department;

  if (fieldsContainer) {
    fieldsContainer.innerHTML = tpl.fields.map(f => {
      const colClass = f.fullWidth ? "field-col-full" : "";
      let inputHtml = "";

      if (f.type === "select") {
        inputHtml = `
          <select class="form-control" name="${f.name}" ${f.required ? 'required' : ''}>
            ${f.options.map(opt => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join("")}
          </select>
        `;
      } else if (f.type === "textarea") {
        inputHtml = `
          <textarea class="form-control" name="${f.name}" placeholder="${escapeHtml(f.placeholder || '')}" ${f.required ? 'required' : ''}></textarea>
        `;
      } else {
        inputHtml = `
          <input type="${f.type}" class="form-control" name="${f.name}" placeholder="${escapeHtml(f.placeholder || '')}" ${f.required ? 'required' : ''}>
        `;
      }

      return `
        <div class="form-group ${colClass}">
          <label class="form-label">${escapeHtml(f.label)} ${f.required ? '<span style="color:var(--status-danger);">*</span>' : ''}</label>
          ${inputHtml}
        </div>
      `;
    }).join("");
  }
}

function setupFormSubmission() {
  const formElem = document.getElementById("enterpriseInteractiveForm");
  if (!formElem) return;

  formElem.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formElem);
    const formKey = currentSelectedForm;
    const tpl = FORM_TEMPLATES[formKey];

    // Generate Request ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newRequestId = `REQ-2026-${randomNum}`;

    let generatedTitle = `${tpl.title}`;
    // Try extract first field value as subtitle
    const firstKey = tpl.fields[0]?.name;
    if (firstKey && formData.get(firstKey)) {
      generatedTitle = `${formData.get(firstKey)} (${tpl.title})`;
    }

    const newRequest = {
      id: newRequestId,
      title: generatedTitle,
      department: tpl.department,
      priority: formKey === "it_support" || formKey === "access" ? "Urgent" : "Medium",
      date: new Date().toISOString().split("T")[0],
      status: "Submitted",
      assigned: `${tpl.department} Dispatch Desk`,
      description: `Submitted by ${state.userProfile.name} via Enterprise Forms Center. Dynamic ticket created with audit trail.`
    };

    // Save to state
    state.requests.unshift(newRequest);
    StorageManager.set(ERP_STORAGE_KEYS.REQUESTS, state.requests);

    // Refresh UI
    updateKPIs();
    renderRequests();
    formElem.reset();

    showToast(`Request ${newRequestId} submitted successfully!`, "success");

    // Scroll to requests desk
    const reqSection = document.getElementById("requests");
    if (reqSection) {
      reqSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ==========================================================================
// 9. REQUEST MANAGEMENT DESK CONTROLLER
// ==========================================================================

function renderRequests() {
  const tbody = document.getElementById("requestsTableBody");
  if (!tbody) return;

  const searchVal = (document.getElementById("requestSearchInput")?.value || "").toLowerCase().trim();
  const statusVal = document.getElementById("requestStatusFilter")?.value || "all";
  const priorityVal = document.getElementById("requestPriorityFilter")?.value || "all";

  const filtered = state.requests.filter(req => {
    const matchSearch = !searchVal ||
      req.id.toLowerCase().includes(searchVal) ||
      req.title.toLowerCase().includes(searchVal) ||
      req.assigned.toLowerCase().includes(searchVal);

    const matchStatus = (statusVal === "all") || (req.status === statusVal);
    const matchPriority = (priorityVal === "all") || (req.priority === priorityVal);

    return matchSearch && matchStatus && matchPriority;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding: 2.5rem; color:var(--text-muted);">
          No enterprise requests found matching current filters.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(req => {
    const statusClass = 
      req.status === "Submitted" ? "status-submitted" :
      req.status === "Reviewing" ? "status-reviewing" :
      req.status === "In Progress" ? "status-inprogress" :
      req.status === "Approved" ? "status-approved" :
      req.status === "Rejected" ? "status-rejected" : "status-completed";

    const priorityClass =
      req.priority === "Urgent" ? "priority-urgent" :
      req.priority === "High" ? "priority-high" :
      req.priority === "Medium" ? "priority-medium" : "priority-low";

    const isCancelable = req.status === "Submitted" || req.status === "Reviewing";

    return `
      <tr data-request-id="${req.id}">
        <td style="font-family: var(--font-mono); font-weight:700; color:var(--cobalt-600);">${escapeHtml(req.id)}</td>
        <td style="font-weight:600; color:var(--text-primary); cursor:pointer;" data-action="view-request-detail" data-id="${req.id}">${escapeHtml(req.title)}</td>
        <td>${escapeHtml(req.department)}</td>
        <td><span class="${priorityClass}">● ${escapeHtml(req.priority)}</span></td>
        <td>${escapeHtml(req.date)}</td>
        <td><span class="status-pill ${statusClass}">${escapeHtml(req.status)}</span></td>
        <td>${escapeHtml(req.assigned)}</td>
        <td style="text-align: right; white-space:nowrap;">
          <button class="btn btn-outline btn-sm" data-action="view-request-detail" data-id="${req.id}">Audit</button>
          ${isCancelable ? `
            <button class="btn btn-ghost btn-sm" style="color:var(--status-danger);" data-action="cancel-request" data-id="${req.id}">Cancel</button>
          ` : ''}
        </td>
      </tr>
    `;
  }).join("");
}

// ==========================================================================
// 10. DEPARTMENT & EMPLOYEE DIRECTORY
// ==========================================================================

function renderDepartments() {
  const container = document.getElementById("departmentGrid");
  if (!container) return;

  container.innerHTML = DEPARTMENTS.map(dept => {
    return `
      <div class="dept-card" data-action="view-dept-detail" data-name="${escapeHtml(dept.name)}">
        <div class="dept-card-top">
          <div class="dept-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 3h12M6 7h12"/></svg>
          </div>
          <div>
            <h4 class="dept-name">${escapeHtml(dept.name)}</h4>
            <span class="dept-head">Lead: <strong>${escapeHtml(dept.manager)}</strong></span>
          </div>
        </div>
        <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.4; margin-bottom:0.5rem;">${escapeHtml(dept.description)}</p>
        <div class="dept-stats">
          <span>Headcount: <strong>${dept.teamSize}</strong></span>
          <span>Services: <strong>${dept.servicesCount} Active</strong></span>
          <span>Open Tasks: <strong>${dept.openRequests}</strong></span>
          <span>Ext: <strong>#${dept.ext}</strong></span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
          <span style="font-size:0.75rem; color:var(--cobalt-600); font-weight:700;">${escapeHtml(dept.email)}</span>
          <button class="btn btn-outline btn-sm">Overview →</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderEmployees() {
  const container = document.getElementById("employeeGrid");
  if (!container) return;

  const searchVal = (document.getElementById("employeeSearchInput")?.value || "").toLowerCase().trim();
  const deptVal = document.getElementById("employeeDeptFilter")?.value || "all";
  const locVal = document.getElementById("employeeLocationFilter")?.value || "all";

  const filtered = EMPLOYEES.filter(emp => {
    const matchSearch = !searchVal ||
      emp.name.toLowerCase().includes(searchVal) ||
      emp.title.toLowerCase().includes(searchVal) ||
      emp.skills.some(s => s.toLowerCase().includes(searchVal));

    const matchDept = (deptVal === "all") || (emp.department === deptVal);
    const matchLoc = (locVal === "all") || (emp.location === locVal);

    return matchSearch && matchDept && matchLoc;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; color: var(--text-muted);">
        No team members found matching search filters.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(emp => {
    const initials = emp.name.split(" ").map(n => n[0]).join("");
    const statusClass = `status-${emp.status}`;

    return `
      <div class="employee-card">
        <span class="employee-status-badge ${statusClass}" title="Status: ${emp.status}"></span>
        <div class="employee-avatar-wrap">
          <div class="avatar avatar-lg">${initials}</div>
        </div>
        <h4 class="employee-name">${escapeHtml(emp.name)}</h4>
        <span class="employee-title">${escapeHtml(emp.title)}</span>
        <span class="employee-dept">${escapeHtml(emp.department)} • ${escapeHtml(emp.location)}</span>

        <div class="employee-skills">
          ${emp.skills.map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join("")}
        </div>

        <div class="employee-actions">
          <button class="btn btn-outline btn-sm" data-action="view-emp-profile" data-id="${emp.id}">Profile</button>
          <button class="btn btn-primary btn-sm" data-action="message-emp" data-id="${emp.id}">Message</button>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 11. ENTERPRISE SERVICE CATALOG
// ==========================================================================

function renderServices() {
  const container = document.getElementById("serviceCatalogGrid");
  if (!container) return;

  container.innerHTML = SERVICES.map(srv => {
    return `
      <div class="service-card">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
            <span class="badge-tag badge-copper">${escapeHtml(srv.dept)}</span>
            <span style="font-size:0.72rem; font-weight:700; color:var(--status-success);">SLA: ${escapeHtml(srv.sla)}</span>
          </div>
          <h4 style="font-size:1.05rem; font-weight:700; margin-bottom:0.4rem; color:var(--text-primary);">${escapeHtml(srv.title)}</h4>
          <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.45; margin-bottom:1rem;">${escapeHtml(srv.description)}</p>
        </div>
        <div style="border-top:1px solid var(--border-subtle); padding-top:0.85rem; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(srv.availability)}</span>
          <button class="btn btn-primary btn-sm" data-action="request-service" data-target="${srv.formTarget}">Request Service</button>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 12. KNOWLEDGE BASE CONTROLLER
// ==========================================================================

function renderKnowledgeBase() {
  const container = document.getElementById("knowledgeGrid");
  if (!container) return;

  const searchVal = (document.getElementById("kbSearchInput")?.value || "").toLowerCase().trim();
  const activeChip = document.querySelector("#kbCategoryChips .chip-btn.active")?.getAttribute("data-cat") || "all";

  const filtered = KNOWLEDGE_ARTICLES.filter(art => {
    const matchSearch = !searchVal ||
      art.title.toLowerCase().includes(searchVal) ||
      art.summary.toLowerCase().includes(searchVal) ||
      art.category.toLowerCase().includes(searchVal);

    const matchCat = (activeChip === "all") || (art.category === activeChip);
    return matchSearch && matchCat;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; color: var(--text-muted);">
        No articles found in this knowledge topic.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(art => {
    return `
      <div class="knowledge-card" data-action="read-article" data-id="${art.id}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <span class="badge-tag badge-cobalt">${escapeHtml(art.category)}</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">${escapeHtml(art.readTime)}</span>
        </div>
        <h4 style="font-size:1.05rem; font-weight:700; margin-bottom:0.4rem; color:var(--text-primary);">${escapeHtml(art.title)}</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.45; margin-bottom:1rem;">${escapeHtml(art.summary)}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; font-size:0.75rem; color:var(--text-muted); border-top:1px solid var(--border-subtle); padding-top:0.75rem;">
          <span>Updated: ${escapeHtml(art.updated)}</span>
          <span style="color:var(--cobalt-600); font-weight:700;">Read Article →</span>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 13. ANNOUNCEMENT CENTER CONTROLLER
// ==========================================================================

function renderAnnouncements() {
  const container = document.getElementById("announcementsGrid");
  if (!container) return;

  container.innerHTML = state.announcements.map(ann => {
    const priorityColor = ann.priority === "Critical" ? "badge-copper" : "badge-cobalt";

    return `
      <div class="announcement-card ${ann.read ? '' : 'unread'}" data-ann-id="${ann.id}">
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.4rem;">
            <span class="badge-tag ${priorityColor}">${escapeHtml(ann.priority)}</span>
            <span class="badge-tag">${escapeHtml(ann.category)}</span>
            <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(ann.date)}</span>
          </div>
          <h4 style="font-size:1.08rem; font-weight:700; margin-bottom:0.35rem; color:var(--text-primary);">${escapeHtml(ann.title)}</h4>
          <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.5;">${escapeHtml(ann.summary)}</p>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.5rem;">
          <button class="btn btn-outline btn-sm" data-action="toggle-read-announcement" data-id="${ann.id}">
            ${ann.read ? 'Mark Unread' : 'Mark as Read'}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 14. ENTERPRISE CALENDAR ENGINE
// ==========================================================================

function renderCalendar() {
  const grid = document.getElementById("calendarDaysGrid");
  const monthTitle = document.getElementById("calendarCurrentMonthTitle");
  if (!grid || !monthTitle) return;

  const curDate = state.calendarDate;
  const year = curDate.getFullYear();
  const month = curDate.getMonth();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthTitle.textContent = `${monthNames[month]} ${year}`;

  // Days header
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let html = dayNames.map(d => `<div class="calendar-day-header">${d}</div>`).join("");

  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Empty cells before month start
  for (let i = 0; i < firstDayIndex; i++) {
    html += `<div class="calendar-day-cell" style="opacity:0.25; pointer-events:none;"></div>`;
  }

  const todayStr = "2026-09-11"; // Fixed portfolio presentation reference date
  const selectedDay = curDate.getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month + 1).padStart(2, '0');
    const dateStr = `${year}-${formattedMonth}-${formattedDay}`;

    const hasEvents = state.calendarEvents.some(e => e.date === dateStr);
    const isToday = dateStr === todayStr;
    const isSelected = day === selectedDay;

    html += `
      <div class="calendar-day-cell ${isSelected ? 'active-day' : ''} ${isToday ? 'today' : ''}" data-day="${day}" data-date="${dateStr}">
        <span>${day}</span>
        ${hasEvents ? '<span class="day-event-dot"></span>' : ''}
      </div>
    `;
  }

  grid.innerHTML = html;
  renderSelectedDayEvents();
}

function renderSelectedDayEvents() {
  const container = document.getElementById("calendarDayEventsList");
  const label = document.getElementById("calendarSelectedDateLabel");
  const sub = document.getElementById("calendarSelectedDateSub");
  if (!container) return;

  const curDate = state.calendarDate;
  const year = curDate.getFullYear();
  const month = String(curDate.getMonth() + 1).padStart(2, '0');
  const day = String(curDate.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;

  if (label) label.textContent = `Schedule: ${dateStr}`;

  const events = state.calendarEvents.filter(e => e.date === dateStr);

  if (sub) sub.textContent = `${events.length} event(s) scheduled on this day`;

  if (events.length === 0) {
    container.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No events scheduled for this date. Click "+ Add Event" above to schedule meetings or milestones.
      </div>
    `;
    return;
  }

  container.innerHTML = events.map(ev => {
    return `
      <div class="event-item-card">
        <div>
          <span class="badge-tag badge-cobalt" style="font-size:0.68rem;">${escapeHtml(ev.category)} • ${escapeHtml(ev.time)}</span>
          <h5 style="font-weight:700; margin: 0.25rem 0 0.15rem 0;">${escapeHtml(ev.title)}</h5>
          <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(ev.location || 'Online')}</span>
        </div>
        <button class="btn btn-ghost btn-sm" style="color:var(--status-danger);" data-action="delete-event" data-id="${ev.id}" title="Remove Event">&times;</button>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 15. RESOURCE ANALYTICS & CANVAS CHARTS
// ==========================================================================

function drawMonthlyRequestsChart() {
  const canvas = document.getElementById("monthlyRequestsCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
  const data = [142, 198, 220, 285, 312, 364];
  const maxVal = 400;

  const width = rect.width;
  const height = rect.height;
  const padBottom = 30;
  const padTop = 20;
  const padLeft = 40;
  const padRight = 20;

  ctx.clearRect(0, 0, width, height);

  // Background Grid Lines
  ctx.strokeStyle = state.theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padTop + ((height - padTop - padBottom) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(width - padRight, y);
    ctx.stroke();

    // Axis label
    ctx.fillStyle = state.theme === "dark" ? "#94A3B8" : "#64748B";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(String(Math.round(maxVal - (maxVal / 4) * i)), padLeft - 6, y + 3);
  }

  // Draw Bars
  const chartWidth = width - padLeft - padRight;
  const barWidth = Math.min(36, chartWidth / months.length - 12);
  const step = chartWidth / months.length;

  months.forEach((m, idx) => {
    const val = data[idx];
    const barHeight = ((val / maxVal) * (height - padTop - padBottom));
    const x = padLeft + idx * step + (step - barWidth) / 2;
    const y = height - padBottom - barHeight;

    // Gradient bar
    const grad = ctx.createLinearGradient(0, y, 0, height - padBottom);
    grad.addColorStop(0, "#0047AB");
    grad.addColorStop(1, "#1D4ED8");
    ctx.fillStyle = grad;

    // Rounded rectangle
    const radius = 4;
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.lineTo(x + barWidth - radius, y);
    ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius);
    ctx.lineTo(x + barWidth, height - padBottom);
    ctx.lineTo(x, height - padBottom);
    ctx.closePath();
    ctx.fill();

    // Value on top
    ctx.fillStyle = state.theme === "dark" ? "#F8FAFC" : "#0F172A";
    ctx.font = "bold 10px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(String(val), x + barWidth / 2, y - 5);

    // Month Label
    ctx.fillStyle = state.theme === "dark" ? "#94A3B8" : "#64748B";
    ctx.font = "11px sans-serif";
    ctx.fillText(m, x + barWidth / 2, height - padBottom + 18);
  });
}

function drawDepartmentDistributionChart() {
  const canvas = document.getElementById("deptDistributionCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = rect.height;

  ctx.clearRect(0, 0, width, height);

  const segments = [
    { label: "IT Systems", val: 38, color: "#0047AB" },
    { label: "Operations", val: 24, color: "#C86432" },
    { label: "HR & Talent", val: 18, color: "#10B981" },
    { label: "Finance", val: 12, color: "#F59E0B" },
    { label: "Legal", val: 8, color: "#6366F1" }
  ];

  const centerX = width * 0.35;
  const centerY = height * 0.5;
  const outerRadius = Math.min(centerX, centerY) - 15;
  const innerRadius = outerRadius * 0.58;

  let startAngle = -Math.PI / 2;

  segments.forEach(seg => {
    const sliceAngle = (seg.val / 100) * 2 * Math.PI;

    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, startAngle, startAngle + sliceAngle);
    ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();

    startAngle += sliceAngle;
  });

  // Center Text
  ctx.fillStyle = state.theme === "dark" ? "#F8FAFC" : "#0F172A";
  ctx.font = "bold 16px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("100%", centerX, centerY + 3);
  ctx.font = "9px sans-serif";
  ctx.fillStyle = state.theme === "dark" ? "#94A3B8" : "#64748B";
  ctx.fillText("Active Share", centerX, centerY + 16);

  // Legend on Right Side
  const legendX = width * 0.65;
  let legendY = height * 0.22;

  segments.forEach(seg => {
    ctx.fillStyle = seg.color;
    ctx.fillRect(legendX, legendY - 8, 10, 10);

    ctx.fillStyle = state.theme === "dark" ? "#F8FAFC" : "#0F172A";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`${seg.label} (${seg.val}%)`, legendX + 16, legendY);

    legendY += 26;
  });
}

// ==========================================================================
// 16. INTERNAL MESSENGER CONTROLLER
// ==========================================================================

function renderMessenger() {
  const contactList = document.getElementById("messengerContactList");
  if (!contactList) return;

  const contacts = [
    { id: "it-helpdesk", name: "IT Infrastructure Helpdesk", role: "Helpdesk & Cloud", status: "Online", avatar: "IT" },
    { id: "hr-team", name: "Sarah Jenkins (VP HR)", role: "People Operations", status: "Online", avatar: "SJ" },
    { id: "finance-ops", name: "Finance & Accounting Desk", role: "Expense Approvals", status: "Away", avatar: "FN" }
  ];

  contactList.innerHTML = contacts.map(c => {
    const isActive = c.id === state.activeChatContact;
    return `
      <div class="contact-item ${isActive ? 'active' : ''}" data-action="switch-chat-contact" data-id="${c.id}">
        <div class="avatar avatar-sm">${c.avatar}</div>
        <div style="flex:1; overflow:hidden;">
          <div style="font-size:0.85rem; font-weight:700; color:var(--text-primary); text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">${escapeHtml(c.name)}</div>
          <div style="font-size:0.72rem; color:var(--text-muted);">${escapeHtml(c.role)}</div>
        </div>
      </div>
    `;
  }).join("");

  renderChatMessages();
}

function renderChatMessages() {
  const messagesBody = document.getElementById("chatMessagesBody");
  const activeAvatar = document.getElementById("chatActiveAvatar");
  const activeName = document.getElementById("chatActiveName");
  if (!messagesBody) return;

  const chat = state.chats[state.activeChatContact] || { name: "Channel", avatar: "CH", messages: [] };

  if (activeAvatar) activeAvatar.textContent = chat.avatar;
  if (activeName) activeName.textContent = chat.name;

  messagesBody.innerHTML = chat.messages.map(msg => {
    const isOut = msg.sender === "you";
    return `
      <div class="chat-bubble ${isOut ? 'outgoing' : 'incoming'}">
        <div>${escapeHtml(msg.text)}</div>
        <span class="chat-time">${escapeHtml(msg.time)}</span>
      </div>
    `;
  }).join("");

  messagesBody.scrollTop = messagesBody.scrollHeight;
}

function setupChatForm() {
  const form = document.getElementById("chatMessageForm");
  const input = document.getElementById("chatTextInput");
  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (!state.chats[state.activeChatContact]) {
      state.chats[state.activeChatContact] = { name: "Channel", avatar: "CH", messages: [] };
    }

    state.chats[state.activeChatContact].messages.push({
      sender: "you",
      text: text,
      time: timeStr
    });

    StorageManager.set(ERP_STORAGE_KEYS.CHATS, state.chats);
    input.value = "";
    renderChatMessages();

    // Automated smart enterprise auto-reply
    setTimeout(() => {
      const replies = [
        "Your inquiry has been logged with audit reference and dispatched to the on-call engineer.",
        "Understood. We are verifying the access credentials and will notify you momentarily.",
        "Thank you Alex. Your request has been queued in our SLA pipeline.",
        "Confirmed. A confirmation email with ticket documentation has been sent."
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];

      state.chats[state.activeChatContact].messages.push({
        sender: "them",
        text: randomReply,
        time: `${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}`
      });

      StorageManager.set(ERP_STORAGE_KEYS.CHATS, state.chats);
      renderChatMessages();
    }, 600);
  });
}

// ==========================================================================
// 17. GLOBAL OMNISEARCH ENGINE (Ctrl + K)
// ==========================================================================

function setupGlobalOmnisearch() {
  const modal = document.getElementById("globalSearchModal");
  const input = document.getElementById("modalOmniSearchInput");
  const resultsContainer = document.getElementById("omniSearchResultsList");
  const triggerBtn = document.getElementById("globalSearchBtn");

  function openSearch() {
    modal.classList.add("open");
    input.value = "";
    input.focus();
    renderOmniResults("");
  }

  function closeSearch() {
    modal.classList.remove("open");
  }

  if (triggerBtn) triggerBtn.addEventListener("click", openSearch);

  // Keyboard shortcut Ctrl+K / Cmd+K
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeSearch();
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSearch();
  });

  input.addEventListener("input", () => {
    renderOmniResults(input.value.trim().toLowerCase());
  });

  function renderOmniResults(query) {
    if (!query) {
      resultsContainer.innerHTML = `
        <div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">
          Type anything to cross-search across Resources, Documents, Employees, Articles, and Requests.
        </div>
      `;
      return;
    }

    const matchedResources = state.resources.filter(r => r.name.toLowerCase().includes(query) || r.description.toLowerCase().includes(query)).slice(0, 3);
    const matchedDocs = state.documents.filter(d => d.name.toLowerCase().includes(query) || d.summary.toLowerCase().includes(query)).slice(0, 3);
    const matchedEmployees = EMPLOYEES.filter(e => e.name.toLowerCase().includes(query) || e.title.toLowerCase().includes(query)).slice(0, 2);
    const matchedArticles = KNOWLEDGE_ARTICLES.filter(a => a.title.toLowerCase().includes(query)).slice(0, 2);

    const total = matchedResources.length + matchedDocs.length + matchedEmployees.length + matchedArticles.length;

    if (total === 0) {
      resultsContainer.innerHTML = `
        <div style="padding:2rem; text-align:center; color:var(--text-muted); font-size:0.88rem;">
          No enterprise records found matching "<strong>${escapeHtml(query)}</strong>".
        </div>
      `;
      return;
    }

    let html = "";

    if (matchedResources.length > 0) {
      html += `<div style="font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); padding:0.5rem 1rem 0.25rem 1rem;">Resources</div>`;
      matchedResources.forEach(r => {
        html += `
          <div class="search-result-item" data-action="search-goto-resource" data-id="${r.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cobalt-600)" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            <div style="flex:1;">
              <div style="font-weight:700; font-size:0.9rem;">${escapeHtml(r.name)}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(r.department)} • ${escapeHtml(r.type)}</div>
            </div>
            <span class="badge-tag badge-cobalt">Launch</span>
          </div>
        `;
      });
    }

    if (matchedDocs.length > 0) {
      html += `<div style="font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); padding:0.5rem 1rem 0.25rem 1rem;">Documents</div>`;
      matchedDocs.forEach(d => {
        html += `
          <div class="search-result-item" data-action="search-goto-doc" data-id="${d.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--copper-600)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <div style="flex:1;">
              <div style="font-weight:700; font-size:0.9rem;">${escapeHtml(d.name)}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(d.format)} • ${escapeHtml(d.size)}</div>
            </div>
            <span class="badge-tag">View</span>
          </div>
        `;
      });
    }

    if (matchedEmployees.length > 0) {
      html += `<div style="font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); padding:0.5rem 1rem 0.25rem 1rem;">Team Members</div>`;
      matchedEmployees.forEach(e => {
        html += `
          <div class="search-result-item" data-action="search-goto-emp" data-id="${e.id}">
            <div class="avatar avatar-sm">${e.name.split(" ").map(n=>n[0]).join("")}</div>
            <div style="flex:1;">
              <div style="font-weight:700; font-size:0.9rem;">${escapeHtml(e.name)}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(e.title)} • ${escapeHtml(e.location)}</div>
            </div>
            <span class="badge-tag">Profile</span>
          </div>
        `;
      });
    }

    resultsContainer.innerHTML = html;
  }
}

// ==========================================================================
// 18. FAVORITES & NOTIFICATIONS DRAWERS
// ==========================================================================

function setupDrawers() {
  const favDrawer = document.getElementById("favoritesDrawer");
  const notifDrawer = document.getElementById("notificationsDrawer");
  const favBtn = document.getElementById("favoritesDrawerBtn");
  const notifBtn = document.getElementById("notificationsBtn");

  favBtn?.addEventListener("click", () => {
    favDrawer.classList.toggle("open");
    if (favDrawer.classList.contains("open")) renderFavoritesDrawer();
  });

  document.getElementById("closeFavoritesDrawerBtn")?.addEventListener("click", () => {
    favDrawer.classList.remove("open");
  });

  notifBtn?.addEventListener("click", () => {
    notifDrawer.classList.toggle("open");
    if (notifDrawer.classList.contains("open")) renderNotificationsDrawer();
  });

  document.getElementById("closeNotificationsDrawerBtn")?.addEventListener("click", () => {
    notifDrawer.classList.remove("open");
  });

  document.getElementById("drawerMarkAllReadBtn")?.addEventListener("click", () => {
    state.announcements.forEach(a => a.read = true);
    StorageManager.set(ERP_STORAGE_KEYS.ANNOUNCEMENTS, state.announcements);
    renderNotificationsDrawer();
    updateKPIs();
    renderAnnouncements();
    showToast("All enterprise alerts marked as read.", "success");
  });
}

function renderFavoritesDrawer() {
  const container = document.getElementById("drawerFavoritesList");
  if (!container) return;

  const favResources = state.resources.filter(r => r.favorite);
  const favDocs = state.documents.filter(d => d.favorite);

  if (favResources.length === 0 && favDocs.length === 0) {
    container.innerHTML = `
      <div style="padding: 2.5rem 1rem; text-align:center; color:var(--text-muted); font-size:0.88rem;">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom:0.75rem;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <p>No items pinned to your favorites yet.</p>
        <span style="font-size:0.78rem;">Click the star icon on any resource or document to pin it here.</span>
      </div>
    `;
    return;
  }

  let html = "";

  if (favResources.length > 0) {
    html += `<h5 style="margin-bottom:0.5rem; text-transform:uppercase; font-size:0.75rem; color:var(--text-muted);">Pinned Resources</h5>`;
    favResources.forEach(r => {
      html += `
        <div style="background:var(--bg-subtle); padding:0.75rem 1rem; border-radius:var(--radius-md); margin-bottom:0.6rem; display:flex; align-items:center; justify-content:space-between;">
          <div>
            <div style="font-weight:700; font-size:0.88rem;">${escapeHtml(r.name)}</div>
            <span style="font-size:0.72rem; color:var(--text-muted);">${escapeHtml(r.department)}</span>
          </div>
          <button class="btn btn-outline btn-sm" data-action="launch-resource" data-id="${r.id}">Launch</button>
        </div>
      `;
    });
  }

  if (favDocs.length > 0) {
    html += `<h5 style="margin:1rem 0 0.5rem 0; text-transform:uppercase; font-size:0.75rem; color:var(--text-muted);">Pinned Documents</h5>`;
    favDocs.forEach(d => {
      html += `
        <div style="background:var(--bg-subtle); padding:0.75rem 1rem; border-radius:var(--radius-md); margin-bottom:0.6rem; display:flex; align-items:center; justify-content:space-between;">
          <div>
            <div style="font-weight:700; font-size:0.88rem;">${escapeHtml(d.name)}</div>
            <span style="font-size:0.72rem; color:var(--text-muted);">${escapeHtml(d.format)} • ${escapeHtml(d.size)}</span>
          </div>
          <button class="btn btn-primary btn-sm" data-action="view-doc-detail" data-id="${d.id}">View</button>
        </div>
      `;
    });
  }

  container.innerHTML = html;
}

function renderNotificationsDrawer() {
  const container = document.getElementById("drawerNotificationsList");
  const countText = document.getElementById("drawerNotifCountText");
  if (!container) return;

  const unreadAnnouncements = state.announcements.filter(a => !a.read);
  if (countText) countText.textContent = `${unreadAnnouncements.length} Unread Alerts`;

  const dot = document.getElementById("unreadNotifDot");
  if (dot) dot.style.display = unreadAnnouncements.length > 0 ? "block" : "none";

  container.innerHTML = state.announcements.map(a => {
    return `
      <div style="background:var(--bg-subtle); padding:0.85rem; border-radius:var(--radius-md); margin-bottom:0.75rem; border-left:3px solid ${a.read ? 'transparent' : 'var(--copper-600)'};">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
          <span class="badge-tag badge-cobalt" style="font-size:0.68rem;">${escapeHtml(a.category)}</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">${escapeHtml(a.date)}</span>
        </div>
        <h5 style="font-size:0.88rem; font-weight:700; margin-bottom:0.25rem;">${escapeHtml(a.title)}</h5>
        <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.4;">${escapeHtml(a.summary)}</p>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 19. PROFILE, SETTINGS & SSO MODAL
// ==========================================================================

function setupProfileAndSettings() {
  const profileBtn = document.getElementById("userProfileBtn");
  const profileModal = document.getElementById("userProfileModal");
  const closeProfileModalBtn = document.getElementById("closeUserProfileModalBtn");
  const profileForm = document.getElementById("userProfileEditForm");

  profileBtn?.addEventListener("click", () => {
    profileModal.classList.add("open");
  });

  closeProfileModalBtn?.addEventListener("click", () => {
    profileModal.classList.remove("open");
  });

  profileModal?.addEventListener("click", (e) => {
    if (e.target === profileModal) profileModal.classList.remove("open");
  });

  profileForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    state.userProfile.name = document.getElementById("prefNameInput").value;
    state.userProfile.title = document.getElementById("prefTitleInput").value;
    state.userProfile.department = document.getElementById("prefDeptInput").value;
    state.userProfile.location = document.getElementById("prefLocationInput").value;
    state.userProfile.ext = document.getElementById("prefExtInput").value;

    const density = document.getElementById("prefDensitySelect").value;
    state.density = density;
    document.documentElement.setAttribute("data-density", density);
    StorageManager.set(ERP_STORAGE_KEYS.DENSITY, density);

    StorageManager.set(ERP_STORAGE_KEYS.PROFILE, state.userProfile);
    updateHeaderUserProfile();
    profileModal.classList.remove("open");
    showToast("Profile and preferences saved successfully!", "success");
  });

  // Demo SSO Modal Switch
  const authModal = document.getElementById("demoAuthModal");
  const demoAuthSwitchBtn = document.getElementById("demoAuthSwitchBtn");
  const closeDemoAuthModalBtn = document.getElementById("closeDemoAuthModalBtn");
  const demoAuthForm = document.getElementById("demoAuthForm");

  demoAuthSwitchBtn?.addEventListener("click", () => {
    profileModal.classList.remove("open");
    authModal.classList.add("open");
  });

  closeDemoAuthModalBtn?.addEventListener("click", () => {
    authModal.classList.remove("open");
  });

  authModal?.addEventListener("click", (e) => {
    if (e.target === authModal) authModal.classList.remove("open");
  });

  demoAuthForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const roleVal = document.getElementById("authRoleSelect").value;
    const [name, title, dept] = roleVal.split("|");

    state.userProfile.name = name;
    state.userProfile.title = title;
    state.userProfile.department = dept;

    StorageManager.set(ERP_STORAGE_KEYS.PROFILE, state.userProfile);
    updateHeaderUserProfile();
    authModal.classList.remove("open");
    showToast(`Switched account to ${name} (${title})`, "success");
  });

  document.getElementById("demoLogoutBtn")?.addEventListener("click", () => {
    state.userProfile = {
      name: "Guest Employee",
      title: "Contractor Access",
      department: "General Operations",
      location: "Remote",
      email: "guest@nexus-enterprise.org",
      ext: "0000"
    };
    StorageManager.set(ERP_STORAGE_KEYS.PROFILE, state.userProfile);
    updateHeaderUserProfile();
    authModal.classList.remove("open");
    showToast("Logged out to Guest Mode.", "info");
  });
}

function updateHeaderUserProfile() {
  const avatarElem = document.getElementById("headerUserAvatar");
  const nameElem = document.getElementById("headerUserName");
  const deptElem = document.getElementById("headerUserDept");

  const modalAvatar = document.getElementById("profileModalAvatar");
  const modalName = document.getElementById("profileModalNameDisplay");
  const modalTitle = document.getElementById("profileModalTitleDisplay");

  const initials = state.userProfile.name.split(" ").map(n => n[0]).join("");

  if (avatarElem) avatarElem.textContent = initials;
  if (nameElem) nameElem.textContent = state.userProfile.name;
  if (deptElem) deptElem.textContent = state.userProfile.title;

  if (modalAvatar) modalAvatar.textContent = initials;
  if (modalName) modalName.textContent = state.userProfile.name;
  if (modalTitle) modalTitle.textContent = `${state.userProfile.title} • ${state.userProfile.department}`;
}

// ==========================================================================
// 20. THEME & DENSITY TOGGLE CONTROLLER
// ==========================================================================

function setupThemeAndDensity() {
  const themeBtn = document.getElementById("themeToggleBtn");
  const langBtn = document.getElementById("langToggleBtn");

  // Apply saved theme
  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.setAttribute("data-density", state.density);

  themeBtn?.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    StorageManager.set(ERP_STORAGE_KEYS.THEME, state.theme);
    drawMonthlyRequestsChart();
    drawDepartmentDistributionChart();
  });

  langBtn?.addEventListener("click", () => {
    const newLang = state.language === "en" ? "ur" : "en";
    applyTranslations(newLang);
    showToast(newLang === "ur" ? "اردو زبان فعال کر دی گئی ہے۔" : "Language switched to English.", "info");
  });
}

// ==========================================================================
// 21. GLOBAL DELEGATED EVENT LISTENERS (EVERY BUTTON WORKS)
// ==========================================================================

function setupGlobalEventListeners() {
  // Mobile Nav Toggle
  const mobileNavToggle = document.getElementById("mobileNavToggle");
  const mainNav = document.getElementById("mainNav");
  mobileNavToggle?.addEventListener("click", () => {
    if (mainNav.style.display === "flex") {
      mainNav.style.display = "";
    } else {
      mainNav.style.display = "flex";
      mainNav.style.position = "absolute";
      mainNav.style.top = "72px";
      mainNav.style.left = "0";
      mainNav.style.right = "0";
      mainNav.style.background = "var(--bg-surface)";
      mainNav.style.flexDirection = "column";
      mainNav.style.padding = "1rem";
      mainNav.style.boxShadow = "var(--shadow-xl)";
      mainNav.style.borderBottom = "1px solid var(--border-subtle)";
    }
  });

  // Header Nav Click Highlighting
  document.querySelectorAll(".main-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".main-nav .nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      if (window.innerWidth <= 768 && mainNav) mainNav.style.display = "";
    });
  });

  // Hero CTAs
  document.getElementById("heroCreateRequestBtn")?.addEventListener("click", () => {
    const formsSec = document.getElementById("forms");
    formsSec?.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("headerCreateRequestBtn")?.addEventListener("click", () => {
    const formsSec = document.getElementById("forms");
    formsSec?.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("deskNewRequestBtn")?.addEventListener("click", () => {
    const formsSec = document.getElementById("forms");
    formsSec?.scrollIntoView({ behavior: "smooth" });
  });

  // Quick Action Tiles
  document.querySelectorAll(".quick-action-tile").forEach(tile => {
    tile.addEventListener("click", () => {
      const action = tile.getAttribute("data-action");
      if (action === "quick-find-resource") {
        document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" });
        document.getElementById("resourceSearchInput")?.focus();
      } else if (action === "quick-submit-request") {
        document.getElementById("forms")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "quick-view-docs") {
        document.getElementById("documents")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "quick-contact-hr") {
        state.activeChatContact = "hr-team";
        renderMessenger();
        document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "quick-contact-it") {
        state.activeChatContact = "it-helpdesk";
        renderMessenger();
        document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "quick-view-directory") {
        document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "quick-report-issue") {
        loadForm("it_support");
        document.getElementById("forms")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "quick-open-kb") {
        document.getElementById("knowledge")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // KPI Card Clicks
  document.querySelectorAll(".kpi-card").forEach(card => {
    card.addEventListener("click", () => {
      const action = card.getAttribute("data-action");
      if (action === "filter-resources") {
        document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "filter-requests") {
        document.getElementById("requests")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "filter-documents") {
        document.getElementById("documents")?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "scroll-section") {
        const target = card.getAttribute("data-target");
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Resource Category Chips
  document.querySelectorAll("#resourceCategoryChips .chip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#resourceCategoryChips .chip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderResources();
    });
  });

  // Resource Filters
  document.getElementById("resourceSearchInput")?.addEventListener("input", renderResources);
  document.getElementById("resourceDeptFilter")?.addEventListener("change", renderResources);
  document.getElementById("resourceTypeFilter")?.addEventListener("change", renderResources);
  document.getElementById("resourceResetFiltersBtn")?.addEventListener("click", () => {
    document.getElementById("resourceSearchInput").value = "";
    document.getElementById("resourceDeptFilter").value = "all";
    document.getElementById("resourceTypeFilter").value = "all";
    document.querySelectorAll("#resourceCategoryChips .chip-btn").forEach(b => b.classList.remove("active"));
    document.querySelector("#resourceCategoryChips .chip-btn[data-cat='all']")?.classList.add("active");
    renderResources();
  });

  // Document Filters & View Switchers
  document.getElementById("docSearchInput")?.addEventListener("input", renderDocuments);
  document.getElementById("docCategoryFilter")?.addEventListener("change", renderDocuments);
  document.getElementById("docSortFilter")?.addEventListener("change", renderDocuments);

  document.getElementById("docViewTableBtn")?.addEventListener("click", () => {
    state.activeDocView = "table";
    document.getElementById("docViewTableBtn").classList.add("active");
    document.getElementById("docViewGridBtn").classList.remove("active");
    renderDocuments();
  });

  document.getElementById("docViewGridBtn")?.addEventListener("click", () => {
    state.activeDocView = "grid";
    document.getElementById("docViewGridBtn").classList.add("active");
    document.getElementById("docViewTableBtn").classList.remove("active");
    renderDocuments();
  });

  // Request Management Filters
  document.getElementById("requestSearchInput")?.addEventListener("input", renderRequests);
  document.getElementById("requestStatusFilter")?.addEventListener("change", renderRequests);
  document.getElementById("requestPriorityFilter")?.addEventListener("change", renderRequests);

  // Directory Filters
  document.getElementById("employeeSearchInput")?.addEventListener("input", renderEmployees);
  document.getElementById("employeeDeptFilter")?.addEventListener("change", renderEmployees);
  document.getElementById("employeeLocationFilter")?.addEventListener("change", renderEmployees);

  // Knowledge Base Category Chips & Search
  document.querySelectorAll("#kbCategoryChips .chip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#kbCategoryChips .chip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderKnowledgeBase();
    });
  });
  document.getElementById("kbSearchInput")?.addEventListener("input", renderKnowledgeBase);

  // Announcements Mark All Read
  document.getElementById("markAllAnnouncementsReadBtn")?.addEventListener("click", () => {
    state.announcements.forEach(a => a.read = true);
    StorageManager.set(ERP_STORAGE_KEYS.ANNOUNCEMENTS, state.announcements);
    renderAnnouncements();
    updateKPIs();
    showToast("All broadcasts marked as read.", "success");
  });

  // Calendar Controls
  document.getElementById("calPrevMonthBtn")?.addEventListener("click", () => {
    state.calendarDate = new Date(state.calendarDate.getFullYear(), state.calendarDate.getMonth() - 1, 1);
    renderCalendar();
  });
  document.getElementById("calNextMonthBtn")?.addEventListener("click", () => {
    state.calendarDate = new Date(state.calendarDate.getFullYear(), state.calendarDate.getMonth() + 1, 1);
    renderCalendar();
  });

  // Add Calendar Event Modal
  const calModal = document.getElementById("calendarEventModal");
  document.getElementById("addCalendarEventBtn")?.addEventListener("click", () => {
    const year = state.calendarDate.getFullYear();
    const month = String(state.calendarDate.getMonth() + 1).padStart(2, '0');
    const day = String(state.calendarDate.getDate()).padStart(2, '0');
    document.getElementById("eventDateInput").value = `${year}-${month}-${day}`;
    calModal.classList.add("open");
  });

  document.getElementById("closeCalEventModalBtn")?.addEventListener("click", () => {
    calModal.classList.remove("open");
  });
  document.getElementById("cancelCalEventBtn")?.addEventListener("click", () => {
    calModal.classList.remove("open");
  });

  document.getElementById("newCalendarEventForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const newEvent = {
      id: `ev-${Date.now()}`,
      title: document.getElementById("eventTitleInput").value,
      date: document.getElementById("eventDateInput").value,
      time: document.getElementById("eventTimeInput").value,
      category: document.getElementById("eventCategoryInput").value,
      location: document.getElementById("eventLocationInput").value || "Corporate Conference"
    };

    state.calendarEvents.push(newEvent);
    StorageManager.set(ERP_STORAGE_KEYS.CALENDAR, state.calendarEvents);

    calModal.classList.remove("open");
    renderCalendar();
    updateKPIs();
    showToast("Enterprise event scheduled successfully!", "success");
  });

  // Detail Modal Elements
  const detailModal = document.getElementById("detailModal");
  const detailTitle = document.getElementById("detailModalTitle");
  const detailBody = document.getElementById("detailModalBody");
  const closeDetailModalBtn = document.getElementById("closeDetailModalBtn");
  const detailModalCloseBtn = document.getElementById("detailModalCloseBtn");
  const detailModalActionBtn = document.getElementById("detailModalActionBtn");

  closeDetailModalBtn?.addEventListener("click", () => detailModal.classList.remove("open"));
  detailModalCloseBtn?.addEventListener("click", () => detailModal.classList.remove("open"));
  detailModal?.addEventListener("click", (e) => {
    if (e.target === detailModal) detailModal.classList.remove("open");
  });

  // Main Delegated Click Handler on Document
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-action]");
    if (!target) return;

    const action = target.getAttribute("data-action");
    const id = target.getAttribute("data-id");

    // Toggle Favorite on Resource
    if (action === "toggle-fav-resource") {
      const res = state.resources.find(r => r.id === id);
      if (res) {
        res.favorite = !res.favorite;
        StorageManager.set(ERP_STORAGE_KEYS.RESOURCES, state.resources);
        renderResources();
        updateFavoritesBadge();
        showToast(`${res.name} ${res.favorite ? 'pinned to' : 'removed from'} favorites.`, "info");
      }
    }

    // Toggle Favorite on Document
    if (action === "toggle-fav-doc") {
      const doc = state.documents.find(d => d.id === id);
      if (doc) {
        doc.favorite = !doc.favorite;
        StorageManager.set(ERP_STORAGE_KEYS.DOCUMENTS, state.documents);
        renderDocuments();
        updateFavoritesBadge();
        showToast(`${doc.name} ${doc.favorite ? 'pinned to' : 'removed from'} favorites.`, "info");
      }
    }

    // View Resource Detail
    if (action === "view-resource-detail") {
      const res = state.resources.find(r => r.id === id);
      if (res) {
        detailTitle.textContent = res.name;
        detailBody.innerHTML = `
          <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
            <span class="badge-tag badge-cobalt">${escapeHtml(res.category)}</span>
            <span class="badge-tag">${escapeHtml(res.type)}</span>
            <span class="badge-tag">${escapeHtml(res.department)}</span>
          </div>
          <p style="font-size:0.95rem; line-height:1.6; margin-bottom:1.25rem;">${escapeHtml(res.description)}</p>
          <div style="background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-md); font-size:0.85rem;">
            <div>Governance: <strong>Enterprise Verified TLS 1.3</strong></div>
            <div>Access Scope: <strong>Global Organizational License</strong></div>
            <div>Last Health Verification: <strong>${escapeHtml(res.updated)}</strong></div>
          </div>
        `;
        detailModalActionBtn.textContent = "Launch Application";
        detailModalActionBtn.onclick = () => {
          showToast(`Launching ${res.name}... (Simulated Single Sign-On)`, "success");
          detailModal.classList.remove("open");
        };
        detailModal.classList.add("open");
      }
    }

    // Launch Resource Direct
    if (action === "launch-resource") {
      const res = state.resources.find(r => r.id === id);
      showToast(`Launching ${res ? res.name : 'Resource'} via Okta SSO...`, "success");
    }

    // View Document Detail
    if (action === "view-doc-detail") {
      const doc = state.documents.find(d => d.id === id);
      if (doc) {
        detailTitle.textContent = doc.name;
        detailBody.innerHTML = `
          <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
            <span class="badge-tag badge-copper">${escapeHtml(doc.category)}</span>
            <span class="badge-tag">${escapeHtml(doc.format)} • ${escapeHtml(doc.size)}</span>
            <span class="badge-tag">${escapeHtml(doc.status)}</span>
          </div>
          <p style="font-size:0.95rem; line-height:1.6; margin-bottom:1.25rem;">${escapeHtml(doc.summary)}</p>
          <div style="background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-md); font-size:0.85rem;">
            <div>Originating Division: <strong>${escapeHtml(doc.department)}</strong></div>
            <div>Revision Date: <strong>${escapeHtml(doc.updated)}</strong></div>
            <div>Checksum SHA-256: <code>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</code></div>
          </div>
        `;
        detailModalActionBtn.textContent = `Download ${doc.format}`;
        detailModalActionBtn.onclick = () => {
          showToast(`Downloading ${doc.name} (${doc.size})...`, "success");
          detailModal.classList.remove("open");
        };
        detailModal.classList.add("open");
      }
    }

    // View Request Detail
    if (action === "view-request-detail") {
      const req = state.requests.find(r => r.id === id);
      if (req) {
        detailTitle.textContent = `${req.id}: ${req.title}`;
        detailBody.innerHTML = `
          <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
            <span class="status-pill status-approved">${escapeHtml(req.status)}</span>
            <span class="badge-tag">${escapeHtml(req.priority)} Priority</span>
            <span class="badge-tag">${escapeHtml(req.department)}</span>
          </div>
          <p style="font-size:0.95rem; line-height:1.6; margin-bottom:1.25rem;">${escapeHtml(req.description)}</p>
          <div style="background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-md); font-size:0.85rem;">
            <div>Assigned Queue: <strong>${escapeHtml(req.assigned)}</strong></div>
            <div>Creation Timestamp: <strong>${escapeHtml(req.date)} 09:00:00 UTC</strong></div>
            <div>Audit Status: <strong>Verified by Supervisor Policy Engine</strong></div>
          </div>
        `;
        detailModalActionBtn.textContent = "Print Audit Record";
        detailModalActionBtn.onclick = () => {
          window.print();
        };
        detailModal.classList.add("open");
      }
    }

    // Cancel Request
    if (action === "cancel-request") {
      if (confirm(`Are you sure you want to cancel ${id}?`)) {
        const req = state.requests.find(r => r.id === id);
        if (req) {
          req.status = "Rejected";
          req.description += " [Cancelled by Employee]";
          StorageManager.set(ERP_STORAGE_KEYS.REQUESTS, state.requests);
          renderRequests();
          updateKPIs();
          showToast(`Request ${id} cancelled.`, "info");
        }
      }
    }

    // View Department Detail
    if (action === "view-dept-detail") {
      const deptName = target.getAttribute("data-name");
      const dept = DEPARTMENTS.find(d => d.name === deptName);
      if (dept) {
        detailTitle.textContent = `${dept.name} Division`;
        detailBody.innerHTML = `
          <p style="font-size:0.95rem; line-height:1.6; margin-bottom:1rem;">${escapeHtml(dept.description)}</p>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:0.75rem; background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-md); font-size:0.85rem;">
            <div>Executive Lead: <strong>${escapeHtml(dept.manager)}</strong></div>
            <div>Global Headcount: <strong>${dept.teamSize} specialists</strong></div>
            <div>Contact Email: <strong>${escapeHtml(dept.email)}</strong></div>
            <div>Direct Extension: <strong>#${dept.ext}</strong></div>
          </div>
        `;
        detailModalActionBtn.textContent = "Contact Department";
        detailModalActionBtn.onclick = () => {
          detailModal.classList.remove("open");
          state.activeChatContact = "it-helpdesk";
          renderMessenger();
          document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" });
        };
        detailModal.classList.add("open");
      }
    }

    // Message Employee
    if (action === "message-emp") {
      const emp = EMPLOYEES.find(e => e.id === id);
      if (emp) {
        state.activeChatContact = "it-helpdesk";
        showToast(`Opened message channel with ${emp.name}`, "info");
        renderMessenger();
        document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" });
      }
    }

    // View Employee Profile Modal
    if (action === "view-emp-profile") {
      const emp = EMPLOYEES.find(e => e.id === id);
      if (emp) {
        detailTitle.textContent = `${emp.name} — Corporate Profile`;
        detailBody.innerHTML = `
          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">
            <div class="avatar avatar-lg">${emp.name.split(" ").map(n=>n[0]).join("")}</div>
            <div>
              <h4 style="font-size:1.15rem; font-weight:700;">${escapeHtml(emp.name)}</h4>
              <p style="font-size:0.85rem; color:var(--copper-600); font-weight:600;">${escapeHtml(emp.title)}</p>
              <span style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(emp.department)} • ${escapeHtml(emp.location)} Office</span>
            </div>
          </div>
          <div style="background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-md); font-size:0.85rem; margin-bottom:1rem;">
            <div>Corporate Email: <strong>${escapeHtml(emp.email)}</strong></div>
            <div>Internal Phone Ext: <strong>#${escapeHtml(emp.ext)}</strong></div>
            <div>Current Availability: <strong style="color:var(--status-success);">● ${escapeHtml(emp.status)}</strong></div>
          </div>
          <h5 style="margin-bottom:0.5rem; font-size:0.82rem; text-transform:uppercase; color:var(--text-muted);">Verified Core Competencies</h5>
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
            ${emp.skills.map(s => `<span class="badge-tag">${escapeHtml(s)}</span>`).join("")}
          </div>
        `;
        detailModalActionBtn.textContent = "Send Direct Message";
        detailModalActionBtn.onclick = () => {
          detailModal.classList.remove("open");
          document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" });
        };
        detailModal.classList.add("open");
      }
    }

    // Request Service CTA
    if (action === "request-service") {
      const formTarget = target.getAttribute("data-target");
      loadForm(formTarget);
      document.querySelectorAll("#formsNavList .form-select-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-form") === formTarget);
      });
      document.getElementById("forms")?.scrollIntoView({ behavior: "smooth" });
    }

    // Read Article
    if (action === "read-article") {
      const art = KNOWLEDGE_ARTICLES.find(a => a.id === id);
      if (art) {
        detailTitle.textContent = art.title;
        detailBody.innerHTML = `
          <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
            <span class="badge-tag badge-cobalt">${escapeHtml(art.category)}</span>
            <span class="badge-tag">${escapeHtml(art.readTime)}</span>
            <span style="font-size:0.78rem; color:var(--text-muted); margin-left:auto;">Updated ${escapeHtml(art.updated)}</span>
          </div>
          <div style="font-size:0.95rem; line-height:1.65; color:var(--text-primary); white-space:pre-line;">
            ${escapeHtml(art.content)}
          </div>
        `;
        detailModalActionBtn.textContent = "Print Playbook";
        detailModalActionBtn.onclick = () => window.print();
        detailModal.classList.add("open");
      }
    }

    // Toggle Read on Announcement
    if (action === "toggle-read-announcement") {
      const ann = state.announcements.find(a => a.id === id);
      if (ann) {
        ann.read = !ann.read;
        StorageManager.set(ERP_STORAGE_KEYS.ANNOUNCEMENTS, state.announcements);
        renderAnnouncements();
        updateKPIs();
        showToast(`Announcement marked as ${ann.read ? 'read' : 'unread'}.`, "info");
      }
    }

    // Delete Calendar Event
    if (action === "delete-event") {
      state.calendarEvents = state.calendarEvents.filter(e => e.id !== id);
      StorageManager.set(ERP_STORAGE_KEYS.CALENDAR, state.calendarEvents);
      renderCalendar();
      updateKPIs();
      showToast("Event removed from calendar.", "info");
    }

    // Calendar Day Selection
    const calCell = target.closest(".calendar-day-cell");
    if (calCell && calCell.getAttribute("data-day")) {
      const day = parseInt(calCell.getAttribute("data-day"), 10);
      state.calendarDate.setDate(day);
      document.querySelectorAll(".calendar-day-cell").forEach(c => c.classList.remove("active-day"));
      calCell.classList.add("active-day");
      renderSelectedDayEvents();
    }

    // Switch Messenger Contact
    if (action === "switch-chat-contact") {
      state.activeChatContact = id;
      renderMessenger();
    }

    // Omnisearch Goto Actions
    if (action === "search-goto-resource") {
      document.getElementById("globalSearchModal").classList.remove("open");
      document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" });
    }
    if (action === "search-goto-doc") {
      document.getElementById("globalSearchModal").classList.remove("open");
      document.getElementById("documents")?.scrollIntoView({ behavior: "smooth" });
    }
    if (action === "search-goto-emp") {
      document.getElementById("globalSearchModal").classList.remove("open");
      document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Clear Chat History
  document.getElementById("clearChatHistoryBtn")?.addEventListener("click", () => {
    if (state.chats[state.activeChatContact]) {
      state.chats[state.activeChatContact].messages = [];
      StorageManager.set(ERP_STORAGE_KEYS.CHATS, state.chats);
      renderChatMessages();
      showToast("Chat thread cleared.", "info");
    }
  });

  // Refresh Sync Button
  document.getElementById("refreshDashboardBtn")?.addEventListener("click", () => {
    updateKPIs();
    renderResources();
    renderDocuments();
    renderRequests();
    drawMonthlyRequestsChart();
    drawDepartmentDistributionChart();
    showToast("Live enterprise metrics synchronized.", "success");
  });

  // Window Resize -> redraw charts
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      drawMonthlyRequestsChart();
      drawDepartmentDistributionChart();
    }, 150);
  });
}

// ==========================================================================
// 22. INSTANT STARTUP INITIALIZER (NO BLOCKING DELAYS)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial State & Theme setup
  setupThemeAndDensity();
  updateHeaderUserProfile();
  applyTranslations(state.language);

  // 2. Render Core Modules
  updateKPIs();
  startLiveClock();
  renderResources();
  renderDocuments();
  setupFormSelector();
  setupFormSubmission();
  renderRequests();
  renderDepartments();
  renderEmployees();
  renderServices();
  renderKnowledgeBase();
  renderAnnouncements();
  renderCalendar();
  renderMessenger();
  setupChatForm();

  // 3. Draw Performance Visualizations
  drawMonthlyRequestsChart();
  drawDepartmentDistributionChart();

  // 4. Setup Modals, Drawers & Global Search
  setupGlobalOmnisearch();
  setupDrawers();
  setupProfileAndSettings();
  setupGlobalEventListeners();

  console.log("NEXUS Enterprise Resource Portal successfully initialized. Zero dependencies.");
});
