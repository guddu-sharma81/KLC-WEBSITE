// KLC Hospitals - Super Multispeciality Hospital (Kayra Lifecare) - Core Data

export const HOSPITAL_INFO = {
  name: "KLC Hospitals",
  fullName: "KLC Hospitals - Super Multispeciality Hospital",
  parentUnit: "A Unit of Anaisha Lifecare Pvt. Ltd.",
  group: "Kayra Lifecare Hospitals",
  tagline: "Super Multispeciality Healthcare (A Unit of Anaisha Lifecare Pvt. Ltd.)",
  established: "2008",
  accreditation: "NABH & JCI Accredited | ISO 9001:2015 Certified",
  emergencyNumber: "74820-68777",
  altNumber: "74820-98777",
  phoneNumbers: ["74820-68777", "74820-98777"],
  tollFree: "1800-456-9911",
  ambulanceDirect: "74820-68777",
  receptionEmail: "info@klchospitals.info",
  email: "info@klchospitals.info",
  address: "E-9, RBI Colony, Malahipakari Chowk, Kankarbagh, Patna, Bihar 800020",
  branches: [
    {
      id: "patna",
      name: "Patna Branch (Main Campus)",
      shortName: "Patna Campus",
      address: "E-9, RBI Colony, Malahipakari Chowk, Kankarbagh, Patna, Bihar 800020",
      mapAddress: "Chowk, near Malahipakri, RBI Flats Colony, Kankarbagh, Patna, Bihar 800020",
      landmark: "Opposite Pillar 42 / RBI Colony",
      city: "Patna",
      state: "Bihar",
      pincode: "800020",
      phone: "74820-68777",
      altPhone: "74820-98777",
      email: "info@klchospitals.info",
      isMain: true,
      googleMapsUrl: "https://maps.google.com/?q=Chowk,+near+Malahipakri,+RBI+Flats+Colony,+Kankarbagh,+Patna,+Bihar+800020",
      mapEmbedUrl: "https://maps.google.com/maps?q=Chowk,%20near%20Malahipakri,%20RBI%20Flats%20Colony,%20Kankarbagh,%20Patna,%20Bihar%20800020&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "chhapra",
      name: "Chhapra Branch",
      shortName: "Chhapra Campus",
      address: "Near Daudpur Station, Chhapra, Bihar 841205",
      mapAddress: "Near Daudpur Station, Chhapra, Bihar 841205",
      landmark: "Near Daudpur Railway Station",
      city: "Chhapra",
      state: "Bihar",
      pincode: "841205",
      phone: "74820-68555",
      altPhone: "74820-68777",
      email: "info@klchospitals.info",
      isMain: false,
      googleMapsUrl: "https://maps.google.com/?q=Near+Daudpur+Station,+Chhapra,+Bihar+841205",
      mapEmbedUrl: "https://maps.google.com/maps?q=Near%20Daudpur%20Station,%20Chhapra,%20Bihar%20841205&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  ],
  workingHours: "Open 24x7 Hours",
};

export const STATS = [
  { label: "Successful Surgeries", value: "52,000+", suffix: "", desc: "Over 16 years of clinical excellence" },
  { label: "Super Specialists", value: "160+", suffix: "", desc: "AIIMS & International trained faculty" },
  { label: "Patient Satisfaction", value: "99.4%", suffix: "", desc: "Based on 120,000+ verified reviews" },
  { label: "Smart ICU Beds", value: "480+", suffix: "", desc: "Equipped with AI vitals monitoring" },
  { label: "Emergency Response", value: "< 12 min", suffix: "", desc: "Average ambulance turnaround time" },
];

export const SPECIALTIES = [
  {
    id: "orthopaedics",
    title: "Ortho & Joint Replacement",
    shortDesc: "Comprehensive robotic knee, hip, shoulder replacements with sub-millimeter precision, orthopaedic trauma, and sports recovery.",
    icon: "Bone",
    accentColor: "#0284c7",
    bgGradient: "linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(2, 132, 199, 0.02) 100%)",
    procedures: ["Shoulder Replacement", "Knee Replacement", "Hip Replacement", "Orthopaedic Trauma"],
    doctorsCount: 18,
    badge: "Robotic Precision"
  },
  {
    id: "neurology",
    title: "Neurology & Spine",
    shortDesc: "Endoscopic spine surgery, 24/7 acute stroke intervention unit, disc decompression, and micro-neurosurgery.",
    icon: "Brain",
    accentColor: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.02) 100%)",
    procedures: ["Endoscopic Spine Surgery", "Stroke Unit & Thrombolysis", "Robotic Spine Care", "Spine Deformity Correction"],
    doctorsCount: 14,
    badge: "Comprehensive Stroke Care"
  },
  {
    id: "obgyn",
    title: "Obstetrics & Gynaecology",
    shortDesc: "Advanced maternal-fetal care, high-risk pregnancy management, painless normal delivery, and laparoscopic surgeries.",
    icon: "Baby",
    accentColor: "#ec4899",
    bgGradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(236, 72, 153, 0.02) 100%)",
    procedures: ["High-Risk Pregnancy Care", "Painless Normal Delivery", "Laparoscopic Gynae Surgery", "Infertility Management"],
    doctorsCount: 12,
    badge: "Modern Birthing Suites"
  },
  {
    id: "gensurgery",
    title: "General Surgery",
    shortDesc: "Minimally invasive laparoscopic hernia repair, gallbladder removal, appendix surgery, and trauma surgical care.",
    icon: "Activity",
    accentColor: "#10b981",
    bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%)",
    procedures: ["Gallbladder & Appendix", "Advanced Hernia Repair", "Thyroid & Breast Care", "Gastrointestinal Surgery"],
    doctorsCount: 15,
    badge: "Fast-Track Recovery"
  },
  {
    id: "laserlap",
    title: "Laser & Laproscopy Surgery",
    shortDesc: "Day-care laser surgery for piles, fissures, and fistula; endovenous laser for varicose veins with zero cut & painless discharge.",
    icon: "Cpu",
    accentColor: "#06b6d4",
    bgGradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.02) 100%)",
    procedures: ["Laser Piles & Fistula Care", "Laser Varicose Veins (EVLT)", "Single-Incision Laparoscopy", "Day-Care Discharge"],
    doctorsCount: 11,
    badge: "Zero Cuts • Painless"
  },
  {
    id: "cardiology",
    title: "Cardiology & Cardiac Surgery",
    shortDesc: "Leading heart institute with 24/7 Primary Angioplasty, TAVR, and minimally invasive bypass surgery.",
    icon: "HeartPulse",
    accentColor: "#ef4444",
    bgGradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.02) 100%)",
    procedures: ["TAVR / TAVI", "Coronary Angioplasty", "Minimally Invasive CABG", "Pediatric Heart Surgery"],
    doctorsCount: 18,
    badge: "24/7 Cath Lab Active"
  },
  {
    id: "emergency",
    title: "Emergency & Critical Care (ICU)",
    shortDesc: "Level-1 Trauma centre with dedicated helipad, ECMO-ready ambulances, and 12-second emergency intake triage.",
    icon: "Ambulance",
    accentColor: "#f59e0b",
    bgGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.02) 100%)",
    procedures: ["ECMO Support", "Polytrauma Resuscitation", "Toxicology & Poison ICU", "Cardiac Arrest Response"],
    doctorsCount: 22,
    badge: "Always Open 24x7"
  },
  {
    id: "oncology",
    title: "Comprehensive Cancer Centre",
    shortDesc: "Precision oncology featuring Linear Accelerator radiation, immunotherapy, targeted therapy, and surgical oncology.",
    icon: "ShieldAlert",
    accentColor: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.02) 100%)",
    procedures: ["IMRT / IGRT Radiation", "Surgical Oncology", "Bone Marrow Transplant", "Targeted Immunotherapy"],
    doctorsCount: 20,
    badge: "Tumour Board Supported"
  }
];

import doctorPhotos from '../assets/doctorImages';
import {
  emergencyFacilityImg,
  radiologyFacilityImg,
  labFacilityImg,
  pharmacyFacilityImg,
  deluxeRoomImg,
  icuRoomImg,
  nicuRoomImg,
  generalWardImg
} from '../assets/hospitalAssets';

export const DOCTORS = [
  {
    id: "doc-1",
    name: "Dr. Rajesh K. Varma",
    degrees: "MBBS, MS, MCh (AIIMS), FRCS (London)",
    role: "Chief Cardiothoracic Surgeon & Director",
    department: "cardiology",
    experience: "24+ Years",
    rating: 4.98,
    reviews: 1420,
    speciality: "Heart Surgery & Valve Repairs",
    availableToday: true,
    slots: ["10:30 AM", "01:30 PM", "04:30 PM"],
    image: doctorPhotos[0],
    badges: ["Gold Medalist", "12,000+ Surgeries"]
  },
  {
    id: "doc-2",
    name: "Dr. Ananya Sen Gupta",
    degrees: "MBBS, MD (Medicine), DM (Neurology)",
    role: "Head of Neurosciences & Stroke Program",
    department: "neurology",
    experience: "19+ Years",
    rating: 4.95,
    reviews: 980,
    speciality: "Stroke Care & Epilepsy Management",
    availableToday: true,
    slots: ["11:00 AM", "02:30 PM", "05:00 PM"],
    image: doctorPhotos[1],
    badges: ["Stroke Pioneer", "International Fellow"]
  },
  {
    id: "doc-3",
    name: "Dr. Vikramaditya Rathore",
    degrees: "MBBS, MS (Ortho), Fellowship in Robotic Joint Surgery (Germany)",
    role: "Director of Robotic Orthopaedics & Trauma",
    department: "orthopaedics",
    experience: "21+ Years",
    rating: 4.96,
    reviews: 1650,
    speciality: "Robotic Knee & Hip Replacements",
    availableToday: true,
    slots: ["09:30 AM", "12:30 PM", "03:45 PM"],
    image: doctorPhotos[2],
    badges: ["Robotic Expert", "Sports Specialist"]
  },
  {
    id: "doc-4",
    name: "Dr. Meenakshi Sundaram",
    degrees: "MBBS, MD, DM (Medical Oncology - Tata Memorial)",
    role: "Senior Consultant - Precision Oncology",
    department: "oncology",
    experience: "17+ Years",
    rating: 4.97,
    reviews: 870,
    speciality: "Immunotherapy & Breast Cancer Care",
    availableToday: false,
    slots: ["Tomorrow 10:00 AM", "Tomorrow 02:00 PM"],
    image: doctorPhotos[3],
    badges: ["Global Oncology Chair", "Cancer Research Leader"]
  },
  {
    id: "doc-5",
    name: "Dr. Prateek Singhal",
    degrees: "MBBS, MS, Fellowship in Da Vinci Robotic Surgery (USA)",
    role: "Chief Robotic & Laparoscopic Surgeon",
    department: "robotic",
    experience: "16+ Years",
    rating: 4.94,
    reviews: 1100,
    speciality: "Single-Incision Robotic Procedures",
    availableToday: true,
    slots: ["11:30 AM", "03:00 PM", "06:00 PM"],
    image: doctorPhotos[4],
    badges: ["Da Vinci Mentor", "Fast Recovery Pioneer"]
  },
  {
    id: "doc-6",
    name: "Dr. Shalini Kulkarni",
    degrees: "MBBS, MD (Pediatrics), Fellowship in Neonatology (Australia)",
    role: "Director of Child & Newborn Institute",
    department: "paediatrics",
    experience: "15+ Years",
    rating: 4.99,
    reviews: 1890,
    speciality: "Neonatal Critical Care & Development",
    availableToday: true,
    slots: ["10:00 AM", "01:00 PM", "04:00 PM"],
    image: doctorPhotos[5],
    badges: ["NICU Director", "Child Nutritionist"]
  },
  {
    id: "doc-7",
    name: "Dr. Alok Ranjan",
    degrees: "MBBS, MS (General Surgery), FIAGES",
    role: "Head of General & Minimal Access Surgery",
    department: "gensurgery",
    experience: "18+ Years",
    rating: 4.95,
    reviews: 1350,
    speciality: "Advanced Laparoscopic & GI Surgery",
    availableToday: true,
    slots: ["10:00 AM", "02:00 PM", "05:00 PM"],
    image: doctorPhotos[6],
    badges: ["Laparoscopy Specialist", "Hernia Master"]
  },
  {
    id: "doc-8",
    name: "Dr. Sunita Mishra",
    degrees: "MBBS, MS (Obs & Gynae), DGO, FICOG",
    role: "Chief Consultant - Obstetrics & Gynaecology",
    department: "obgyn",
    experience: "20+ Years",
    rating: 4.98,
    reviews: 2100,
    speciality: "Painless Delivery & High-Risk Pregnancy",
    availableToday: true,
    slots: ["09:00 AM", "12:00 PM", "04:00 PM"],
    image: doctorPhotos[7],
    badges: ["High-Risk Specialist", "Mother Care Lead"]
  },
  {
    id: "doc-9",
    name: "Dr. Amit Kumar Singh",
    degrees: "MBBS, MS (Ortho), DNB (Orthopaedics)",
    role: "Senior Consultant - Joint Replacement & Trauma",
    department: "orthopaedics",
    experience: "14+ Years",
    rating: 4.93,
    reviews: 1220,
    speciality: "Shoulder & Knee Arthroscopy",
    availableToday: true,
    slots: ["11:00 AM", "01:30 PM", "06:00 PM"],
    image: doctorPhotos[8],
    badges: ["Shoulder Fellow", "Trauma Surgeon"]
  },
  {
    id: "doc-10",
    name: "Dr. Rakesh Ranjan",
    degrees: "MBBS, MS, MCh (Neurosurgery - AIIMS)",
    role: "Senior Consultant Neurosurgeon & Spine Specialist",
    department: "neurology",
    experience: "16+ Years",
    rating: 4.97,
    reviews: 1450,
    speciality: "Endoscopic Spine Surgery & Brain Microsurgery",
    availableToday: true,
    slots: ["10:30 AM", "03:30 PM"],
    image: doctorPhotos[9],
    badges: ["AIIMS Alumnus", "Endoscopic Spine Lead"]
  },
  {
    id: "doc-11",
    name: "Dr. Priya Verma",
    degrees: "MBBS, MS (Surgery), Fellow in Laser Proctology",
    role: "Senior Consultant - Day-Care Laser Proctology",
    department: "laserlap",
    experience: "13+ Years",
    rating: 4.96,
    reviews: 1180,
    speciality: "Laser Piles, Fistula & Fissure Treatments",
    availableToday: true,
    slots: ["10:00 AM", "01:00 PM", "04:30 PM"],
    image: doctorPhotos[10],
    badges: ["Laser Specialist", "Painless Proctology"]
  },
  {
    id: "doc-12",
    name: "Dr. Manoj K. Jha",
    degrees: "MBBS, MD, DM (Gastroenterology)",
    role: "Head of Medical Gastroenterology & Hepatology",
    department: "gastroenterology",
    experience: "18+ Years",
    rating: 4.94,
    reviews: 990,
    speciality: "Therapeutic Endoscopy & Liver Care",
    availableToday: true,
    slots: ["09:30 AM", "01:00 PM", "05:00 PM"],
    image: doctorPhotos[11],
    badges: ["Endoscopy Expert", "Liver Fellow"]
  },
  {
    id: "doc-13",
    name: "Dr. Saurabh Roy",
    degrees: "MBBS, MS, MCh (Urology)",
    role: "Chief Urologist & Kidney Stone Specialist",
    department: "urology",
    experience: "15+ Years",
    rating: 4.96,
    reviews: 1340,
    speciality: "Laser RIRS & Prostate Surgery (TURP)",
    availableToday: true,
    slots: ["11:00 AM", "02:30 PM", "06:00 PM"],
    image: doctorPhotos[12],
    badges: ["Laser Stone Master", "Gold Medalist"]
  },
  {
    id: "doc-14",
    name: "Dr. Manish Sharma",
    degrees: "MBBS, MS, Fellowship in Peripheral Vascular Surgery",
    role: "Consultant Vascular & Endovascular Surgeon",
    department: "vascular",
    experience: "14+ Years",
    rating: 4.93,
    reviews: 820,
    speciality: "Varicose Veins (EVLT) & DVT Interventions",
    availableToday: true,
    slots: ["10:00 AM", "02:00 PM", "04:00 PM"],
    image: doctorPhotos[13],
    badges: ["Vascular Fellow", "Limb Salvage Pioneer"]
  }
];

export const FACILITIES = [
  {
    id: "fac-1",
    name: "24/7 Level-1 Emergency & Trauma Care",
    desc: "Equipped with dedicated triage, resuscitation bays, and emergency minor/major surgical suites.",
    stats: "Triage Intake in < 12 Seconds",
    image: emergencyFacilityImg,
    features: ["Sub-millimeter accuracy", "Minimal tissue trauma", "Discharge within 24-48 hours", "Low infection risk"]
  },
  {
    id: "fac-2",
    name: "Advanced Radiology & 3.0 Tesla Imaging",
    desc: "Ultra-high field neuro and cardiac imaging with zero radiation high-speed scanning for hyper-accurate diagnostic clarity.",
    stats: "Scans done in 45% less time",
    image: radiologyFacilityImg,
    features: ["Noise-reduction technology", "Whole body scan in minutes", "Pediatric-friendly ambient lighting", "AI-assisted diagnostics"]
  },
  {
    id: "fac-3",
    name: "AI-Monitored Smart ICU (480 Beds)",
    desc: "Continuous predictive monitoring that alerts medical emergency teams 4 hours ahead of critical physiological deterioration.",
    stats: "1:1 Dedicated Nurse to Patient Ratio",
    image: icuRoomImg,
    features: ["Infection-controlled HEPA airflow", "Tele-ICU specialist connectivity", "ECMO & Dialysis bedside integration", "Noise dampened rooms"]
  },
  {
    id: "fac-4",
    name: "24x7 NABL Accredited Diagnostic Pathology",
    desc: "Fully automated clinical biochemistry, microbiology, hematology and molecular diagnostics for rapid results.",
    stats: "Turnaround Time < 60 Mins",
    image: labFacilityImg,
    features: ["Automated barcoded processing", "AI-reviewed microscopy", "24/7 round-the-clock availability", "Online digital report delivery"]
  },
  {
    id: "fac-5",
    name: "24x7 In-House Hospital Pharmacy",
    desc: "Comprehensive pharmaceutical inventory with temperature-controlled storage and home delivery support.",
    stats: "100% Genuine Certified Medicines",
    image: pharmacyFacilityImg,
    features: ["Zero counterfeit guarantee", "Cold-chain insulin storage", "Critical emergency injectables", "Bedside medicine delivery"]
  }
];

export const HEALTH_PACKAGES = [
  {
    id: "pkg-1",
    title: "KLC Executive Wellness Shield",
    subtitle: "Recommended for adults aged 25-45",
    originalPrice: "₹ 8,500",
    price: "₹ 4,499",
    testsCount: "68 Vital Tests Included",
    highlight: "Popular",
    features: [
      "Complete Hemogram (28 parameters)",
      "Comprehensive Lipid & Cardiac Risk Profile",
      "Liver Function Test (LFT) & Kidney Function (KFT)",
      "Thyroid Profile (T3, T4, TSH)",
      "HbA1c & Fasting Blood Sugar",
      "Vitamin D3 & Vitamin B12 Levels",
      "Ultrasound Abdomen & Pelvis",
      "ECG & Chest X-Ray",
      "Consultation with Senior Physician"
    ]
  },
  {
    id: "pkg-2",
    title: "Comprehensive Cardiac Care Guard",
    subtitle: "Essential for complete heart & vascular assessment",
    originalPrice: "₹ 14,000",
    price: "₹ 7,999",
    testsCount: "82 Vital Tests + Scans",
    highlight: "Best for Heart",
    features: [
      "All Executive Wellness Tests Included",
      "Treadmill Test (TMT / Stress Test)",
      "2D Echocardiography with Color Doppler",
      "High-Sensitivity Troponin-I & CRP",
      "Carotid Artery Doppler Ultrasound",
      "Pulmonary Function Test (PFT)",
      "Comprehensive Diabetic Retinopathy Check",
      "1-on-1 Consultation with Chief Cardiologist",
      "Personalized Diet & Lifestyle Plan"
    ]
  },
  {
    id: "pkg-3",
    title: "Senior Citizen Platinum Health Check",
    subtitle: "Tailored for adults aged 60+",
    originalPrice: "₹ 12,000",
    price: "₹ 6,499",
    testsCount: "74 Comprehensive Tests",
    highlight: "Senior Care",
    features: [
      "Complete Blood & Metabolic Evaluation",
      "Bone Mineral Density (DEXA Scan)",
      "Prostate Specific Antigen (PSA) for Men / Mammography for Women",
      "Audiometry & Comprehensive Eye Screening",
      "Joint Mobility & Arthritis Assessment",
      "Renal & Glomerular Filtration Screen",
      "Neuro-cognitive screening for memory",
      "Home Blood Collection Free of Charge",
      "Physician & Geriatrician Consultation"
    ]
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Rameshwar Prasad Sharma",
    age: "58 Years",
    treatment: "Robotic Total Knee Replacement",
    rating: 5,
    comment: "I was unable to walk without support for 4 years. Dr. Vikramaditya and the robotic surgery team at KLC changed my life. I was walking without pain on the second day after surgery! The hospital is cleaner than a 5-star hotel and nurses are extraordinarily attentive.",
    date: "August 2026",
    location: "Bengaluru"
  },
  {
    id: "rev-2",
    author: "Pooja Venkatesh",
    age: "36 Years",
    treatment: "Emergency Cardiac Intervention",
    rating: 5,
    comment: "When my father had severe chest pain at 2 AM, KLC's emergency ambulance arrived within 10 minutes with an emergency paramedic. The cath lab was ready immediately upon arrival. Dr. Rajesh Varma's team saved his life. Grateful to KLC forever.",
    date: "July 2026",
    location: "Indiranagar"
  },
  {
    id: "rev-3",
    author: "Col. Sanjeev Nair (Retd.)",
    age: "64 Years",
    treatment: "Neuro Spine Decompression",
    rating: 5,
    comment: "World-class facilities matching London and Boston hospitals. Transparent billing, digital reports accessible via phone, and genuine doctors who treat patients like family. Truly the pride of healthcare.",
    date: "May 2026",
    location: "Mysuru"
  }
];

export const AMBULANCE_LOCATIONS = [
  { area: "Metro Central Hub", status: "Active & Ready", time: "5 - 8 mins" },
  { area: "North City Highway Point", status: "On Standby", time: "8 - 12 mins" },
  { area: "South Electronic Corridor", status: "Active & Ready", time: "6 - 10 mins" },
  { area: "East Tech Park Station", status: "Active & Ready", time: "7 - 11 mins" },
];

export const FAQS = [
  {
    q: "How can I book an instant OPD appointment?",
    a: "You can use our online booking widget on this website to select your department, doctor, and preferred time slot in less than 60 seconds. You will immediately receive a digital confirmation ticket and SMS."
  },
  {
    q: "Do you have cashless insurance tie-ups with TPAs?",
    a: "Yes! KLC Hospital is empaneled with 45+ leading insurance companies and TPAs including Star Health, HDFC Ergo, ICICI Lombard, Max Bupa, Care Health, and all government health schemes (CGHS/ECHS/State Schemes)."
  },
  {
    q: "How fast does your emergency ambulance respond?",
    a: "Our GPS-tracked Advanced Life Support (ALS) ambulances have an average response time of under 12 minutes within the metro area, equipped with ventilator, defibrillator, and live telemedicine telemetry."
  },
  {
    q: "Are video consultations available for outstation patients?",
    a: "Yes, our Super Specialists are available for tele-consultation with digital prescription delivery through our high-definition patient portal."
  }
];

export const SPECIALTIES_DROPDOWN = [
  {
    category: "Ortho & Joint Replacement",
    id: "ortho-joint",
    icon: "Bone",
    subItems: [
      { name: "Knee Replacement", desc: "Total & partial robotic knee resurfacing" },
      { name: "Hip Replacement", desc: "Minimally invasive anterior hip arthroplasty" },
      { name: "Shoulder Replacement", desc: "Reverse shoulder & rotator cuff repair" },
      { name: "Orthopaedic Trauma", desc: "Complex pelvic & polytrauma reconstruction" }
    ]
  },
  {
    category: "Neurology & Spine",
    id: "neuro-spine",
    icon: "Brain",
    subItems: [
      { name: "Endoscopic Spine Surgery", desc: "Keyhole disc & nerve decompression" },
      { name: "Stroke Unit & Thrombolysis", desc: "24/7 acute stroke intervention" },
      { name: "Spine Deformity Correction", desc: "Scoliosis & degenerative disc care" }
    ]
  },
  {
    category: "Obstetrics & Gynaecology",
    id: "ob-gyn",
    icon: "Baby",
    subItems: [
      { name: "High-Risk Pregnancy Care", desc: "Specialist maternal-fetal medicine" },
      { name: "Painless Normal Delivery", desc: "Modern birthing suites with LDR beds" },
      { name: "Laparoscopic Gynae Surgery", desc: "Hysterectomy & ovarian cystectomy" }
    ]
  },
  {
    category: "General Surgery",
    id: "gen-surgery",
    icon: "Activity",
    subItems: [
      { name: "Gallbladder & Appendix", desc: "Minimally invasive laparoscopic removal" },
      { name: "Advanced Hernia Repair", desc: "3D mesh & robotic groin/ventral hernia" },
      { name: "Thyroid & Breast Care", desc: "Benign & malignant surgical interventions" }
    ]
  },
  {
    category: "Laser & Laproscopy Surgery",
    id: "laser-lap",
    icon: "Cpu",
    subItems: [
      { name: "Laser Piles & Fistula Care", desc: "Zero cuts, pain-free day-care recovery" },
      { name: "Laser Varicose Veins (EVLT)", desc: "Walk home within 2 hours of procedure" },
      { name: "Single-Incision Laparoscopy", desc: "Near-invisible scar surgical excellence" }
    ]
  }
];

export const ABOUT_DATA = {
  heading: "About KLC Hospitals (Kayra Lifecare)",
  subheading: "A Unit of Anaisha Lifecare Pvt. Ltd.",
  description: "Located prominently in Kankarbagh, Patna, KLC Hospitals stands as Bihar's premier super multispeciality healthcare facility. Built on the tenets of clinical excellence, cutting-edge surgical robotics, and heartfelt patient care, we bring world-standard tertiary medical treatments directly to Eastern India.",
  pillars: [
    { title: "24x7 Level-1 Trauma", desc: "Direct admission for acute stroke, polytrauma, and cardiac arrest with zero wait time." },
    { title: "Robotic & Laser Precision", desc: "4th Generation robotic platforms and laser surgery units for painless, rapid-recovery treatments." },
    { title: "45+ Cashless TPAs", desc: "Full cashless hospitalization tie-up with all major private and government health insurances." },
    { title: "Ethical & Transparent", desc: "Patient-first care with fair transparent billing and digital treatment summaries." }
  ],
  stats: [
    { num: "15+", label: "Years of Trust" },
    { num: "52,000+", label: "Successful Surgeries" },
    { num: "160+", label: "Senior Doctors" },
    { num: "100%", label: "24x7 Emergency Ready" }
  ]
};

export const PHYSIOTHERAPY_DATA = {
  heading: "Advanced Physiotherapy & Neuro-Rehabilitation",
  subheading: "Restore Mobility, Strength, and Pain-Free Living",
  description: "Our dedicated Department of Physiotherapy and Physical Medicine at Kankarbagh, Patna is equipped with robotic gait trainers, electrotherapy, hydro-rehab, and specialized post-operative orthopaedic protocols.",
  programs: [
    { title: "Post Joint Replacement Rehab", desc: "Rapid recovery exercise protocols after knee, hip, and shoulder replacement surgery to regain 100% natural mobility.", icon: "Bone" },
    { title: "Neuro-Rehabilitation", desc: "Specialized rehabilitation for stroke, Parkinson's disease, spinal cord injury, and balance disorders.", icon: "Brain" },
    { title: "Spine & Back Pain Therapy", desc: "Spinal decompression, core stabilization, and manual therapy for disc prolapse, sciatica, and cervical pain.", icon: "Activity" },
    { title: "Sports Injury & Arthroscopy Recovery", desc: "Targeted rehab for ACL reconstruction, meniscus tears, rotator cuff injury, and athletic conditioning.", icon: "HeartPulse" }
  ],
  features: [
    "Certified Neuro & Orthopaedic Physical Therapists",
    "Computerized Spinal Traction & Laser Therapy",
    "Matrix Rhythm Therapy (MaRhyThe) for Chronic Pain",
    "Tailored Ergonomic & Home Care Regimens"
  ]
};

export const GALLERY_DATA = [
  {
    id: "g1",
    title: "24/7 Level-1 Emergency & Trauma Care",
    category: "Emergency Care",
    image: emergencyFacilityImg
  },
  {
    id: "g2",
    title: "Advanced 3.0 Tesla Radiology & Imaging Suite",
    category: "Technology",
    image: radiologyFacilityImg
  },
  {
    id: "g3",
    title: "Smart Intensive Care Unit (ICU)",
    category: "Critical Care",
    image: icuRoomImg
  },
  {
    id: "g4",
    title: "Deluxe Inpatient Suites",
    category: "In-Patient Care",
    image: deluxeRoomImg
  },
  {
    id: "g5",
    title: "Level-3 Advanced Neonatal ICU (NICU)",
    category: "Newborn Care",
    image: nicuRoomImg
  },
  {
    id: "g6",
    title: "Clean & Spacious General Recovery Ward",
    category: "In-Patient Care",
    image: generalWardImg
  }
];

