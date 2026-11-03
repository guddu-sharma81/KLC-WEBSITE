import {
  orthoImg,
  neuroImg,
  obgynImg,
  generalSurgeryImg,
  laserLapImg,
  gastroImg,
  oncologyImg,
  pediatricsImg,
  urologyImg,
  vascularImg
} from '../assets/hospitalAssets';

export const SPECIALITIES_DETAIL = {
  // 1. Shoulder Replacement
  'shoulder-replacement': {
    id: 'shoulder-replacement',
    slug: 'shoulder-replacement',
    parentSpecialty: 'ortho-joint-replacement',
    parentTitle: 'Ortho & Joint Replacement',
    title: 'Shoulder Replacement Surgery (Arthroplasty)',
    tagline: 'Precision Shoulder Reconstruction for Lasting Pain Relief & Complete Range of Motion',
    overviewHeading: 'Pioneering Shoulder Arthroplasty & Rotator Cuff Reconstruction',
    badge: 'Advanced Arthroplasty',
    image: orthoImg,
    statHighlights: [
      { label: 'Procedures Done', value: '2,800+' },
      { label: 'Mobility Regained', value: '98.5%' },
      { label: 'Incision Technique', value: 'Muscle-Safe' },
      { label: 'Hospital Stay', value: '24-48 Hrs' }
    ],
    overview: 'Shoulder replacement surgery at KLC Hospitals combines cutting-edge 3D pre-operative planning, sub-millimeter surgical precision, and advanced prosthesis designs. Whether addressing severe osteoarthritis, avascular necrosis, or massive irreparable rotator cuff tears, our senior orthopaedic surgeons restore natural shoulder mechanics and pain-free mobility.',
    procedures: [
      {
        title: 'Reverse Total Shoulder Replacement (rTSA)',
        desc: 'Specialized biomechanical implant that reverses the natural ball-and-socket anatomy, utilizing the deltoid muscle to power the shoulder when rotator cuff tendons are severely damaged.'
      },
      {
        title: 'Anatomic Total Shoulder Arthroplasty (TSA)',
        desc: 'Replaces the damaged humeral head with a high-grade cobalt-chrome or ceramic ball and lines the glenoid socket with a medical-grade polyethylene component for smooth articulation.'
      },
      {
        title: 'Shoulder Hemiarthroplasty',
        desc: 'Replaces only the humeral ball joint while preserving the natural socket, ideal for select four-part proximal humerus fractures and younger patients.'
      },
      {
        title: 'Arthroscopic Rotator Cuff Repair & Reconstruction',
        desc: 'Minimally invasive keyhole repair of torn rotator cuff tendons using bio-absorbable suture anchors, preserving native joint tissue before arthroplasty is needed.'
      }
    ],
    symptoms: [
      'Severe, deep shoulder ache that worsens at night and disturbs sleep',
      'Inability to lift the arm overhead or reach behind the back',
      'Grating, clicking, or crunching sensation (crepitus) inside the joint',
      'Progressive muscle weakness in the upper arm and shoulder girdle',
      'Stiffness not improving with medications, injections, or regular therapy'
    ],
    technologies: [
      '3D CT-based Pre-operative Surgical Planning & Virtual Implantation',
      'Patient-Specific Instrumentation (PSI) for accurate glenoid pin positioning',
      'Laminar Flow Modular Operation Theatres with HEPA Air Purification',
      'Ultrasonic Bone Scalpels minimizing soft tissue and vascular trauma',
      'Dedicated Post-Operative Shoulder Rehabilitation & Hydrotherapy Protocols'
    ],
    recoveryTimeline: [
      { phase: 'Day 0 - 1', text: 'Surgery completed in ~90 mins. Post-op pain management via regional nerve blocks. Mobilization starts within 24 hours.' },
      { phase: 'Weeks 1 - 3', text: 'Gentle passive pendulum exercises with lightweight arm sling protection. Discharge typically on Day 2.' },
      { phase: 'Weeks 4 - 6', text: 'Active assisted range-of-motion exercises under certified physiotherapist guidance. Sling discontinued.' },
      { phase: 'Weeks 8 - 12', text: 'Strengthening protocols initiated. Return to driving, office work, and normal daily household activities.' }
    ],
    faqs: [
      {
        q: 'When is a Reverse Shoulder Replacement recommended over a traditional one?',
        a: 'A reverse shoulder replacement is recommended when there is a combination of severe shoulder arthritis and large, non-repairable rotator cuff tears, or failed previous shoulder surgery. It relies on the deltoid muscle instead of rotator cuff tendons.'
      },
      {
        q: 'How long does a modern shoulder implant last?',
        a: 'Modern shoulder prostheses crafted from high-crosslinked polyethylene and titanium alloys routinely last 20 to 25+ years with appropriate physical therapy and bone health maintenance.'
      },
      {
        q: 'Is shoulder replacement painful during recovery?',
        a: 'At KLC Hospitals, we utilize advanced continuous ultrasound-guided regional nerve blocks and multimodal analgesia, keeping post-operative pain minimal and comfortable throughout your hospital stay.'
      },
      {
        q: 'Does insurance cover shoulder replacement at KLC Hospitals?',
        a: 'Yes, KLC Hospitals is empanelled with 45+ leading insurance companies and TPAs. We offer 100% cashless admission and approval assistance.'
      }
    ]
  },

  // 2. Knee Replacement
  'knee-replacement': {
    id: 'knee-replacement',
    slug: 'knee-replacement',
    parentSpecialty: 'ortho-joint-replacement',
    parentTitle: 'Ortho & Joint Replacement',
    title: 'Advanced Robotic Knee Replacement',
    tagline: 'Computer-Guided Robotic Precision for Natural Feel, Zero Muscle Damage, and 25+ Year Implant Durability',
    overviewHeading: 'Next-Gen Robotic Knee Arthroplasty & Sub-Millimeter Precision',
    badge: 'Robotic Precision',
    image: orthoImg,
    statHighlights: [
      { label: 'Knee Surgeries', value: '18,500+' },
      { label: 'Early Walking', value: 'Day 1 (99%)' },
      { label: 'Implant Durability', value: '25-30 Years' },
      { label: 'Infection Rate', value: '< 0.08%' }
    ],
    overview: 'KLC Hospitals is the regional leader in Robotic Knee Replacement in Eastern India. Utilizing autonomous robotic arms and 3D sub-millimeter navigation, our surgeons preserve healthy bone and critical collateral ligaments, ensuring precise joint balancing and allowing patients to walk comfortably within 24 hours.',
    procedures: [
      {
        title: 'Robotic Total Knee Replacement (TKR)',
        desc: 'Complete resurfacing of femoral, tibial, and patellar surfaces with sub-millimeter robotic precision for optimal alignment and long-lasting stability.'
      },
      {
        title: 'Partial / Unicondylar Knee Replacement',
        desc: 'Minimally invasive replacement of only the worn compartment (inner or outer), preserving 75% of your natural knee joint and cruciate ligaments.'
      },
      {
        title: 'Bilateral Simultaneous Knee Replacement',
        desc: 'Replacement of both knees in a single surgical sitting under high-safety cardiac and anaesthetic monitoring for eligible patients.'
      },
      {
        title: 'Revision Knee Arthroplasty',
        desc: 'Advanced reconstructive solutions for loose, worn out, or infected implants performed at other centers, utilizing hinged and constrained knee systems.'
      }
    ],
    symptoms: [
      'Severe knee joint pain while walking, climbing stairs, or getting up from chairs',
      'Visible deformity of the leg: Bow legs (Varus) or Knock knees (Valgus)',
      'Chronic swelling, warmth, and stiffness that persists even at rest',
      'Bone-on-bone friction with loud cracking sounds and progressive loss of height',
      'Failed response to painkillers, viscosupplementation injections, and therapy'
    ],
    technologies: [
      'Robotic Arm Surgical Console with real-time 3D optical tracking',
      'Sub-millimeter ligament tension sensor balancing the knee through full flexion',
      'Gold & Oxinium Ceramic Implants providing allergy-free 30-year wear life',
      'High-Definition Intraoperative Navigation eliminating intramedullary rods',
      'Rapid Mobilization Protocol enabling unassisted walking within 24 hours'
    ],
    recoveryTimeline: [
      { phase: 'Day 1 (Within 24 Hours)', text: 'Patient stands and walks with a walker under our physiotherapy team. Range of motion exercises start.' },
      { phase: 'Day 2 - 3', text: 'Independent toilet mobility, stair negotiation training, and suture-less skin closure dressing.' },
      { phase: 'Day 3 - 4', text: 'Comfortable discharge to home with a customized exercise and medication schedule.' },
      { phase: 'Weeks 2 - 4', text: 'Transition to walking stick or unassisted walking. Return to driving and active daily life.' }
    ],
    faqs: [
      {
        q: 'How does Robotic Knee Surgery differ from traditional knee replacement?',
        a: 'Robotic knee surgery allows virtual 3D pre-planning and boundary-restricted bone cuts accurate to 0.5mm and 0.5 degrees. It avoids cutting natural ligaments, minimizes soft tissue injury, eliminates blood loss, and delivers a much more natural-feeling knee.'
      },
      {
        q: 'Will I be able to walk and climb stairs after surgery?',
        a: 'Yes. At KLC Hospitals, over 99% of our patients walk within 24 hours of surgery and learn to navigate stairs safely before discharge on Day 3 or 4.'
      },
      {
        q: 'Can both knees be replaced at the same time?',
        a: 'Yes, Bilateral Simultaneous Knee Replacement is performed routinely for fit patients after thorough cardiac, pulmonary, and anaesthetic evaluation.'
      },
      {
        q: 'What is the lifespan of modern knee implants used at KLC?',
        a: 'We utilize internationally proven US-FDA approved titanium, cobalt-chromium, and Oxinium ceramic implants designed to last 25 to 30 years.'
      }
    ]
  },

  // 3. Hip Replacement
  'hip-replacement': {
    id: 'hip-replacement',
    slug: 'hip-replacement',
    parentSpecialty: 'ortho-joint-replacement',
    parentTitle: 'Ortho & Joint Replacement',
    title: 'Total Hip Replacement & Preservation',
    tagline: 'Direct Anterior & Muscle-Sparing Hip Arthroplasty with Dual Mobility Cups & Ceramic Bearings',
    overviewHeading: 'Direct Anterior Muscle-Sparing Hip Arthroplasty & Joint Preservation',
    badge: 'High-Flexion Implants',
    image: orthoImg,
    statHighlights: [
      { label: 'Hip Replacements', value: '7,400+' },
      { label: 'Dislocation Risk', value: '< 0.05%' },
      { label: 'Muscle Cutting', value: 'Zero (DAA)' },
      { label: 'Joint Mobility', value: 'High-Flexion' }
    ],
    overview: 'Hip replacement at KLC Hospitals restores fluid, painless motion for individuals suffering from Avascular Necrosis (AVN), advanced osteoarthritis, ankylosing spondylitis, or femoral neck fractures. Our surgeons specialize in muscle-sparing approaches and dual-mobility ceramic joints that offer exceptional stability and allow active lifestyle resumption.',
    procedures: [
      {
        title: 'Direct Anterior Approach Total Hip Replacement (DAA)',
        desc: 'Advanced muscle-sparing surgery entering through natural muscle intervals in front of the hip. Zero muscle or tendon detachment means virtually zero dislocation risk and accelerated healing.'
      },
      {
        title: 'Dual Mobility Total Hip Arthroplasty',
        desc: 'Innovative French dual-bearing design with two articulation points, offering unmatched stability, extreme range of motion, and elimination of post-op movement restrictions.'
      },
      {
        title: 'Ceramic-on-Ceramic Joint Arthroplasty',
        desc: 'Ultra-low wear ceramic head and acetabular liner that produces virtually zero polyethylene debris, providing superior longevity for young and active patients.'
      },
      {
        title: 'Core Decompression with Stem Cell & Bone Marrow Aspirate',
        desc: 'Hip preservation procedure for early Stage-1 and Stage-2 AVN to stimulate revascularization and avoid joint replacement in young adults.'
      }
    ],
    symptoms: [
      'Deep groin ache or buttock pain radiating down the front of the thigh to the knee',
      'Difficulty putting on socks, tying shoelaces, or clipping toenails',
      'Limping (Trendelenburg gait) and noticeable leg length discrepancy',
      'Pain when getting in or out of a car or standing up from low seating',
      'Avascular Necrosis (AVN) diagnosis following steroid use or post-COVID complications'
    ],
    technologies: [
      'Specialized Direct Anterior Hip Traction Orthopaedic Tables',
      'Intraoperative Fluoroscopic Leg-Length & Offset Verification Systems',
      'Trabecular Metal Acetabular Cups for rapid biological bone ingrowth',
      'Fourth-Generation Biolox Delta Ceramic Bearings',
      'Computer-Assisted Navigation for optimal femoral stem anteversion'
    ],
    recoveryTimeline: [
      { phase: 'Day 1', text: 'Full weight-bearing walking initiated with physiotherapy team. No strict dislocation restrictions with anterior approach.' },
      { phase: 'Day 2 - 3', text: 'Independent walking with crutches or walker. Stair climbing practice and personal care training.' },
      { phase: 'Day 3', text: 'Discharge with waterproof dressing allowing comfortable home showering.' },
      { phase: 'Weeks 3 - 6', text: 'Discontinue walking aids. Normal driving, office duties, and low-impact sports resumed.' }
    ],
    faqs: [
      {
        q: 'What is Avascular Necrosis (AVN) of the hip and how is it treated?',
        a: 'AVN occurs when blood supply to the femoral head is interrupted, causing bone collapse and joint breakdown. Early stages can be treated with core decompression and bone marrow therapy; advanced stages are cured permanently with total hip replacement.'
      },
      {
        q: 'Will I be able to sit cross-legged or squat after hip replacement?',
        a: 'With modern high-flexion implants, dual mobility cups, and anterior muscle-sparing surgery, many eligible patients achieve exceptional range of motion allowing sitting cross-legged and unrestricted daily function.'
      },
      {
        q: 'How does the Direct Anterior approach prevent dislocation?',
        a: 'Because the surgeon works between the natural muscular planes without cutting the gluteal muscles or posterior capsule, the natural muscular envelope remains intact, preventing the ball from slipping out.'
      }
    ]
  },

  // 4. Orthopaedic Trauma
  'orthopaedic-trauma': {
    id: 'orthopaedic-trauma',
    slug: 'orthopaedic-trauma',
    parentSpecialty: 'ortho-joint-replacement',
    parentTitle: 'Ortho & Joint Replacement',
    title: '24/7 Complex Orthopaedic Trauma & Fracture Care',
    tagline: 'Round-the-Clock Emergency Polytrauma Resuscitation, Pelvic-Acetabular Fractures & Bone Reconstruction',
    overviewHeading: '24/7 Level-1 Emergency Polytrauma & Complex Fracture Reconstruction',
    badge: 'Level-1 Trauma Care',
    image: orthoImg,
    statHighlights: [
      { label: 'Response Time', value: '< 10 Mins' },
      { label: 'Trauma Surgeries', value: '22,000+' },
      { label: 'Pelvic Success', value: '98.8%' },
      { label: 'Laminar Theatres', value: '24/7 Active' }
    ],
    overview: 'KLC Hospitals houses one of Bihar’s foremost 24x7 Level-1 Orthopaedic Trauma units. Supported by round-the-clock emergency physicians, vascular surgeons, neurosurgeons, and advanced trauma OTs, our team manages high-velocity road accident injuries, crushed compound fractures, pelvic acetabular trauma, and non-healing fractures with unmatched clinical success.',
    procedures: [
      {
        title: 'Damage Control Orthopaedics (DCO)',
        desc: 'Rapid emergency stabilization of life-threatening polytrauma injuries using temporary external fixators before definitive internal fixation.'
      },
      {
        title: 'Pelvic & Acetabular Fracture Reconstruction',
        desc: 'High-precision surgical reduction and anatomical plating of shattered pelvic ring and hip socket fractures using 3D C-arm fluoroscopy.'
      },
      {
        title: 'Minimally Invasive Plate Osteosynthesis (MIPPO)',
        desc: 'Biological fracture fixation through tiny keyhole incisions without opening the fracture site, preserving bone blood supply and speeding bone union.'
      },
      {
        title: 'Ilizarov & Hexapod Ring Fixation',
        desc: 'Specialized circular frame techniques for limb lengthening, bone gap reconstruction, chronic infected non-unions, and severe bone defects.'
      }
    ],
    symptoms: [
      'High-impact vehicular collision injuries or falls from significant heights',
      'Open compound fractures with visible bone protruding or severe soft tissue loss',
      'Pelvic pain with inability to bear weight after an accident',
      'Non-union (fractures that have failed to heal months after surgery elsewhere)',
      'Chronic bone infections (Osteomyelitis) with discharging sinuses'
    ],
    technologies: [
      'Dual 3D Flat-Panel C-Arm Imaging Systems in Emergency Theatres',
      'Dedicated Blood Bank with Component Separation & Massive Transfusion Protocols',
      'High-Speed Surgical Power Tools & Anatomical Locking Compression Plates (LCP)',
      'Vacuum-Assisted Closure (VAC) Wound Therapy Units for high-energy soft tissue injuries',
      'Integrated Plastic & Vascular Surgery Support for immediate limb salvage'
    ],
    recoveryTimeline: [
      { phase: 'Immediate Resuscitation', text: 'Golden hour intake, blood stabilization, CT whole-body polytrauma scan, and pain relief.' },
      { phase: 'Definitive Fixation', text: 'Internal fixation using titanium anatomical plates, intramedullary interlocking nails, or screws.' },
      { phase: 'Post-Op ICU Monitoring', text: 'Intensive hemodynamic care, thromboembolism prevention, and antibiotic coverage.' },
      { phase: 'Early Functional Rehabilitation', text: 'Continuous passive motion (CPM), muscle isometric therapy, and progressive weight-bearing.' }
    ],
    faqs: [
      {
        q: 'What is the Golden Hour in orthopaedic trauma?',
        a: 'The Golden Hour refers to the critical first 60 minutes after a severe accident. Prompt emergency triage, hemorrhage control, and fracture stabilization at KLC Hospitals significantly reduce mortality and prevent permanent limb amputations.'
      },
      {
        q: 'How does KLC treat fractures that failed to join at other hospitals (Non-Unions)?',
        a: 'We specialize in revision osteosynthesis using biological bone grafting, specialized locking plates, and circular external fixators (Ilizarov/LRS) to stimulate fresh bone formation and eradicate deep-seated infections.'
      }
    ]
  },

  // 5. Ortho & Joint Replacement (Main Department)
  'ortho-joint-replacement': {
    id: 'ortho-joint-replacement',
    slug: 'ortho-joint-replacement',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Institute of Orthopaedics & Joint Replacement',
    tagline: 'World-Class Bone, Joint, Spine & Trauma Care Powered by Robotic Navigation & Sports Medicine',
    overviewHeading: 'Pioneering Musculoskeletal Excellence & Robotic Joint Mastery',
    badge: 'Centre of Excellence',
    image: orthoImg,
    statHighlights: [
      { label: 'Total Surgeries', value: '32,000+' },
      { label: 'Senior Surgeons', value: '18+' },
      { label: 'Robotic Suite', value: 'Robotic AI' },
      { label: 'Rehab Success', value: '99.4%' }
    ],
    overview: 'The Institute of Orthopaedics & Joint Replacement at KLC Hospitals provides end-to-end musculoskeletal solutions. From computerized robotic joint arthroplasty to complex trauma and arthroscopic sports medicine, we restore movement, eliminate chronic agony, and return patients to their active lives.',
    subPages: [
      { slug: 'knee-replacement', title: 'Robotic Knee Replacement', desc: 'Total & partial knee arthroplasty with sub-millimeter robotic precision.' },
      { slug: 'hip-replacement', title: 'Total Hip Replacement', desc: 'Direct anterior approach and dual-mobility ceramic hip solutions.' },
      { slug: 'shoulder-replacement', title: 'Shoulder Replacement', desc: 'Anatomic and reverse shoulder replacement for painless motion.' },
      { slug: 'orthopaedic-trauma', title: 'Orthopaedic Trauma Center', desc: '24/7 Level-1 polytrauma, fracture care and pelvic reconstruction.' }
    ],
    procedures: [
      { title: 'Robotic Knee & Hip Arthroplasty', desc: 'Sub-millimeter accurate joint replacement with zero muscle trauma.' },
      { title: 'Keyhole Arthroscopic Ligament Repair', desc: 'ACL, PCL, Meniscus, and Rotator cuff tear repairs for athletes.' },
      { title: 'Complex Pelvic & Fracture Surgery', desc: '24/7 emergency fixation of complex and open compound fractures.' },
      { title: 'Pediatric Orthopaedics & Deformity Correction', desc: 'Clubfoot, CTEV, developmental dysplasia, and limb lengthening.' }
    ],
    symptoms: [
      'Chronic knee, hip, shoulder, or ankle joint pain',
      'Sports injuries: ACL tears, twisted ligaments, cartilage damage',
      'Difficulty in walking, sitting on floor, or climbing stairs',
      'Post-accident fractures, bone deformities, and joint dislocations'
    ],
    technologies: [
      'Robotic Arm Navigation Console with 3D Optical Tracking',
      '4K Arthroscopy Towers for minimally invasive joint surgery',
      'Modular Class-100 Laminar Airflow Theatres',
      'High-Definition C-Arm Fluoroscopy Units'
    ],
    faqs: [
      { q: 'How experienced are KLC orthopaedic surgeons?', a: 'Our team comprises senior consultants with 15 to 25+ years of experience trained at top institutions including AIIMS, PGIMER, and prestigious fellowships in Germany, the UK, and South Korea.' }
    ]
  },

  // 6. Neurology & Spine
  'neurology-spine': {
    id: 'neurology-spine',
    slug: 'neurology-spine',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Centre of Neurosciences & Spine Surgery',
    tagline: 'Advanced Brain, Spine & Stroke Care Powered by Endoscopic Navigation & 24/7 Neuro-ICU',
    overviewHeading: 'Pioneering Neurosciences, Micro-Neurosurgery & Endoscopic Spine Care',
    badge: 'Comprehensive Stroke & Spine',
    image: neuroImg,
    statHighlights: [
      { label: 'Neuro Surgeries', value: '9,500+' },
      { label: 'Stroke Unit', value: '24/7 Rapid' },
      { label: 'Spine Keyhole', value: '< 18 mm' },
      { label: 'Neuro-ICU Beds', value: '24 Beds' }
    ],
    overview: 'The Centre of Neurosciences at KLC Hospitals brings together neurosurgeons, neurologists, neuro-anesthetists, and interventional radiologists to provide world-class management of brain tumours, stroke, endoscopic spine disorders, aneurysms, and chronic neural conditions.',
    procedures: [
      {
        title: 'Minimally Invasive Endoscopic Spine Surgery (MISS)',
        desc: 'Removal of slipped discs and spinal canal decompression through pencil-sized incisions with zero muscle cutting and same-day mobilization.'
      },
      {
        title: '24/7 Acute Stroke Care & Mechanical Thrombectomy',
        desc: 'Emergency clot-dissolving thrombolysis and catheter-based clot retrieval within the golden window to reverse paralytic stroke symptoms.'
      },
      {
        title: 'Brain Tumour Microsurgery & Awake Craniotomy',
        desc: 'Microscopic excision of glioma, meningioma, and acoustic neuroma under real-time cortical mapping to preserve speech and motor function.'
      },
      {
        title: 'Cervical & Lumbar Spinal Fusion (TLIF / ACDF)',
        desc: 'Rigid titanium cage and pedicle screw stabilization for spondylolisthesis, spinal deformities, and severe degenerative disc disease.'
      }
    ],
    symptoms: [
      'Persistent shooting pain in the back radiating down the leg (Sciatica)',
      'Numbness, tingling, or loss of grip strength in hands or feet',
      'Sudden face drooping, arm weakness, or slurred speech (Stroke warning signs)',
      'Severe unremitting headaches, seizures, or bouts of dizziness and vertigo',
      'Difficulty walking or loss of bladder and bowel sensation'
    ],
    technologies: [
      'Carl Zeiss Neuro-Surgical Operating Microscope with Fluorescence Imaging',
      '32-Channel Intraoperative Neuro-Monitoring (IONM) System',
      'Karl Storz High-Definition Endoscopic Spine Instrumentation',
      'Dedicated 24-Bed Neuro-Intensive Care Unit with continuous ICP monitors'
    ],
    faqs: [
      {
        q: 'Is spine surgery safe at KLC Hospitals?',
        a: 'Yes. With intraoperative neuromonitoring and endoscopic keyhole techniques, spine surgery at KLC has an outstanding safety record of over 99.4%, eliminating the risk of nerve injury.'
      },
      {
        q: 'How fast must a stroke patient reach the hospital?',
        a: 'Every second counts in stroke. A patient must reach KLC Hospitals within 4.5 hours for IV thrombolysis and within 6 to 24 hours for mechanical thrombectomy to restore brain perfusion.'
      }
    ]
  },

  // 7. Obstetrics & Gynaecology
  'obstetrics-gynaecology': {
    id: 'obstetrics-gynaecology',
    slug: 'obstetrics-gynaecology',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Department of Obstetrics & Gynaecology',
    tagline: 'Compassionate Women’s Care: Painless Deliveries, High-Risk Pregnancy & Advanced Laparoscopy',
    overviewHeading: 'Compassionate Women’s Health, Painless Delivery & Gynae Laparoscopy',
    badge: 'Mother & Child Care',
    image: obgynImg,
    statHighlights: [
      { label: 'Deliveries Done', value: '14,000+' },
      { label: 'Normal Delivery', value: 'High Success' },
      { label: 'Level-3 NICU', value: '24/7 Backup' },
      { label: 'Laparoscopic Care', value: 'Zero Scar' }
    ],
    overview: 'KLC Hospitals offers nurturing, comprehensive care for women across every phase of life. From pre-conception counselling and painless normal deliveries in boutique birthing suites to complex laparoscopic gynaecological procedures and menopause wellness, our female specialist consultants are dedicated to your wellbeing.',
    procedures: [
      {
        title: 'Painless Normal Delivery with Epidural Analgesia',
        desc: 'Safe, controlled pain relief administered by senior obstetric anesthetists, enabling mothers to experience childbirth joyfully without intense labor pain.'
      },
      {
        title: 'High-Risk Pregnancy & Critical Maternal Care',
        desc: 'Specialized management for expectant mothers with pre-eclampsia, gestational diabetes, twins/triplets, recurrent miscarriages, or placenta previa.'
      },
      {
        title: 'Total Laparoscopic Hysterectomy (TLH)',
        desc: 'Gentle keyhole removal of the uterus through 3 tiny 5mm punctures with minimal discomfort and hospital discharge within 48 hours.'
      },
      {
        title: 'Laparoscopic Myomectomy & Ovarian Cystectomy',
        desc: 'Uterus-preserving surgical removal of large fibroids and ovarian cysts to protect fertility in reproductive-age women.'
      }
    ],
    symptoms: [
      'High-risk pregnancy complications: high blood pressure, protein in urine, bleeding',
      'Heavy, prolonged, or intensely painful menstrual cycles (Menorrhagia/Dysmenorrhea)',
      'Lower abdominal pelvic pressure caused by uterine fibroids or ovarian cysts',
      'Irregular periods, weight gain, and acne related to PCOS / PCOD',
      'Difficulty conceiving or recurrent pregnancy losses'
    ],
    technologies: [
      'Modern LDR (Labor, Delivery, Recovery) Private Suites',
      'Wireless Fetal Heart Rate Telemetry & CTG Monitoring',
      'Level-3 Neonatal Intensive Care Unit (NICU) with High-Frequency Oscillators',
      '4K Ultra-HD Karl Storz Gynaecological Laparoscopy System'
    ],
    faqs: [
      {
        q: 'Does epidural analgesia affect the baby during normal delivery?',
        a: 'No. Epidural analgesia is internationally recognized as the gold standard for childbirth pain relief. It stays localized to the mother’s spinal nerves and does not sedate the baby.'
      },
      {
        q: 'Can large fibroids be removed without removing the uterus?',
        a: 'Yes, our surgeons perform Laparoscopic Myomectomy to safely excise fibroids while preserving the uterus and fertility.'
      }
    ]
  },

  // 8. General Surgery
  'general-surgery': {
    id: 'general-surgery',
    slug: 'general-surgery',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Department of General & Minimal Access Surgery',
    tagline: 'Gold-Standard Laparoscopic Procedures, Emergency Trauma & Comprehensive Abdominal Surgery',
    overviewHeading: 'Advanced Minimal Access Laparoscopic & Comprehensive Surgical Care',
    badge: 'Advanced Laparoscopy',
    image: generalSurgeryImg,
    statHighlights: [
      { label: 'Surgeries Done', value: '26,000+' },
      { label: 'Day-Care Cases', value: '85% Patients' },
      { label: 'Rapid Recovery', value: '24-48 Hours' },
      { label: 'Laminar OTs', value: 'Class-100' }
    ],
    overview: 'The Department of General & Minimal Access Surgery at KLC Hospitals provides advanced surgical care for disorders of the digestive tract, abdominal wall, gallbladder, thyroid, and soft tissues. Our faculty utilizes 4K laparoscopic imaging to ensure shorter hospital stays, virtually invisible scars, and quick return to work.',
    procedures: [
      {
        title: 'Laparoscopic Cholecystectomy (Gallbladder Surgery)',
        desc: 'Gold-standard removal of gallstones and inflamed gallbladder through tiny keyhole punctures with same-day or next-day discharge.'
      },
      {
        title: 'Advanced Laparoscopic Hernia Repair (TEP / TAPP)',
        desc: 'Tension-free 3D mesh placement behind the abdominal muscle wall for inguinal, umbilical, and incisional hernias, minimizing recurrence.'
      },
      {
        title: 'Laparoscopic Appendectomy',
        desc: 'Emergency and planned removal of acute or chronic inflamed appendix through 3 micro-incisions with instant pain relief.'
      },
      {
        title: 'Thyroid, Parathyroid & Breast Lump Surgeries',
        desc: 'Delicate open and minimally invasive resections for benign and malignant thyroid nodules, parathyroid adenomas, and breast fibroadenomas.'
      }
    ],
    symptoms: [
      'Upper right abdominal pain after fatty meals (Gallstone colic)',
      'Bulging or swelling in the groin or near the navel that worsens when coughing (Hernia)',
      'Sudden sharp lower right abdominal pain accompanied by nausea and fever (Appendicitis)',
      'Unexplained swelling or nodules in the neck or breast',
      'Non-healing diabetic foot ulcers or soft tissue infections'
    ],
    technologies: [
      '4K Ultra-HD Laparoscopic Imaging Towers',
      'Ethicon Harmonic Scalpel & Covidien Ligasure Energy Devices',
      'Advanced 3D Anatomical Prolene & Dual-Layer Hernia Meshes',
      '24/7 Dedicated Emergency Surgical Response Team'
    ],
    faqs: [
      {
        q: 'How soon can I resume work after laparoscopic gallbladder surgery?',
        a: 'Most patients are discharged within 24 to 48 hours and can comfortably resume light work and routine activities within 5 to 7 days.'
      },
      {
        q: 'Why is laparoscopic hernia repair better than open surgery?',
        a: 'Laparoscopic repair places the strengthening mesh inside the abdominal wall without cutting groin muscles, resulting in drastically less pain, quicker recovery, and lower recurrence rates.'
      }
    ]
  },

  // 9. Laser & Laproscopy Surgery
  'laser-laproscopy': {
    id: 'laser-laproscopy',
    slug: 'laser-laproscopy',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Laser & Advanced Proctology Surgery',
    tagline: 'Painless Diode Laser Treatments for Piles, Fistula, Fissures & Varicose Veins with Zero Cuts',
    overviewHeading: 'Advanced 1470nm Laser Proctology & Minimally Invasive Daycare Surgery',
    badge: 'Zero Cuts • Day Care',
    image: laserLapImg,
    statHighlights: [
      { label: 'Laser Surgeries', value: '11,200+' },
      { label: 'Discharge Within', value: 'Same Day' },
      { label: 'Pain & Bleeding', value: 'Near Zero' },
      { label: 'Return to Work', value: '24-48 Hours' }
    ],
    overview: 'KLC Hospitals is a pioneer in daycare Laser Proctology and Endovenous Laser Therapy (EVLT). Using certified 1470nm diode medical lasers, we treat piles (haemorrhoids), anal fissures, complex fistulas, pilonidal sinus, and varicose veins without cutting muscles or creating painful open wounds.',
    procedures: [
      {
        title: 'Laser Haemorrhoidoplasty (LHP for Piles)',
        desc: 'Laser fiber energy coagulates the haemorrhoidal arterial blood supply from within, causing piles nodes to shrink naturally without cutting or stitching.'
      },
      {
        title: 'FiLaC (Fistula Laser Closure)',
        desc: 'Radial laser fiber cleanly destroys the epithelial fistula tract from the inside while preserving 100% of anal sphincter muscles, ensuring zero risk of incontinence.'
      },
      {
        title: 'Laser Sphincterotomy for Anal Fissures',
        desc: 'Controlled laser vaporisation that relieves internal sphincter spasm instantly, enabling rapid fissure healing without pain.'
      },
      {
        title: 'Endovenous Laser Therapy (EVLT) for Varicose Veins',
        desc: 'Catheter-guided laser energy seals incompetent diseased veins in the leg through a 1mm puncture, eliminating swelling and leg ulcers.'
      }
    ],
    symptoms: [
      'Painless bright red bleeding during or after passing stools',
      'Painful swelling or lump outside the anus that hurts while sitting',
      'Persistent itching, pus, or watery discharge staining undergarments (Fistula)',
      'Sharp, cutting tear-like pain during bowel movements (Anal Fissure)',
      'Twisted, bulging blue veins on calves and legs with heaviness and nighttime cramps'
    ],
    technologies: [
      'German 1470nm Diode Medical Laser Generators',
      '360-Degree Radial Laser Emission Fibers for uniform energy delivery',
      'Duplex Colour Ultrasound for precision intraoperative vein mapping',
      'Private Day-Care Recovery Suites with same-day discharge'
    ],
    faqs: [
      {
        q: 'Is laser piles surgery really painless?',
        a: 'Yes. Because there is no surgical cutting of the sensitive perianal skin or muscle, post-operative pain is minimal and managed with simple mild analgesics.'
      },
      {
        q: 'How many hours will I need to stay in the hospital?',
        a: 'Laser proctology is performed as a day-care procedure. Patients are usually discharged within 4 to 8 hours on the very same day.'
      }
    ]
  },

  // 10. Gastroenterology
  'gastroenterology': {
    id: 'gastroenterology',
    slug: 'gastroenterology',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Department of Medical & Surgical Gastroenterology',
    tagline: 'Advanced Digestive, Liver, Pancreas & Endoscopic Interventions',
    overviewHeading: 'Comprehensive Digestive Health, Therapeutic Endoscopy & Liver Care',
    badge: 'Digestive Health',
    image: gastroImg,
    statHighlights: [
      { label: 'Endoscopies Done', value: '16,000+' },
      { label: 'ERCP Success', value: '98.5%' },
      { label: 'Liver Care Clinic', value: 'Dedicated' },
      { label: 'GI Bleed Response', value: '24/7 Unit' }
    ],
    overview: 'The Department of Gastroenterology & Hepatology provides complete clinical evaluation and endoscopic treatment for diseases of the esophagus, stomach, liver, gallbladder, pancreas, and bowels. Our Olympus endoscopy suites deliver diagnostic clarity and non-surgical stone and polyp extraction.',
    procedures: [
      { title: 'Upper GI Endoscopy & Biopsy', desc: 'High-definition mucosal inspection, ulcer treatment, and H. pylori detection.' },
      { title: 'Colonoscopy & Polypectomy', desc: 'Colorectal cancer screening and painless endoscopic removal of precancerous polyps.' },
      { title: 'ERCP (Endoscopic Retrograde Cholangiopancreatography)', desc: 'Non-surgical extraction of common bile duct stones and jaundice stenting.' },
      { title: 'Chronic Liver Disease & Hepatitis Clinic', desc: 'Modern antivirals, cirrhosis management, and portal hypertension treatment.' }
    ],
    symptoms: [
      'Chronic heartburn, GERD, acid reflux, or difficulty swallowing',
      'Unexplained jaundice (yellow eyes/skin) and dark tea-colored urine',
      'Blood in vomit (hematemesis) or black tarry stools (melena)',
      'Chronic diarrhea, abdominal bloating, and severe weight loss'
    ],
    technologies: [
      'Olympus EVIS EXERA III High-Definition Endoscopy Suites',
      'Narrow Band Imaging (NBI) for early cancer lesion detection',
      'Argon Plasma Coagulation (APC) for bleeding GI angiodysplasias'
    ],
    faqs: [
      { q: 'Is endoscopy done under sedation?', a: 'Yes, all our endoscopic procedures are performed under conscious sedation with zero throat discomfort or choking sensation.' }
    ]
  },

  // 11. Oncology
  'oncology': {
    id: 'oncology',
    slug: 'oncology',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Comprehensive Cancer Care Institute',
    tagline: 'Multidisciplinary Cancer Treatment: Surgical Oncology, Precision Chemotherapy & Immunotherapy',
    overviewHeading: 'Integrated Surgical Oncology, Tumour Board & Precision Chemotherapy',
    badge: 'Tumour Board Supported',
    image: oncologyImg,
    statHighlights: [
      { label: 'Cancer Patients', value: '8,400+' },
      { label: 'Tumour Board', value: '100% Cases' },
      { label: 'Chemo Day-Care', value: '16 Beds' },
      { label: 'Onco Specialists', value: 'AIIMS Trained' }
    ],
    overview: 'The Comprehensive Cancer Care Institute at KLC Hospitals provides evidence-based, compassionate cancer treatment. Every patient case is evaluated by our multidisciplinary Tumour Board to personalize surgical excision, targeted immunotherapy, and chemo regimens.',
    procedures: [
      { title: 'Surgical Oncology', desc: 'Radical oncological resections for breast, head & neck, gastrointestinal, and gynaecological cancers.' },
      { title: 'Day-Care Chemotherapy Lounge', desc: 'Comfortable infusion suites with dedicated oncology-certified nursing staff.' },
      { title: 'Targeted Therapy & Immunotherapy', desc: 'Next-generation biological medicines tailored to tumour genetic mutations.' },
      { title: 'Preventive Cancer Screening & Pap Smears', desc: 'Early detection mammography, oral cancer screening, and PET-CT imaging.' }
    ],
    symptoms: [
      'Unexplained persistent lump in breast, neck, or groin',
      'Non-healing ulcers in mouth or tongue, especially with tobacco history',
      'Sudden drastic weight loss and persistent unexplained fever',
      'Changes in bowel or bladder habits, or unusual bleeding'
    ],
    technologies: [
      'Laminar Flow Chemotherapy Reconstitution Hoods',
      'Oncology-Specific High-Resolution Pathology & IHC Testing',
      'PICC Line & Chemoport Insertion Suites for painless infusions'
    ],
    faqs: [
      { q: 'What is a Multidisciplinary Tumour Board?', a: 'It is a collaborative panel of surgical oncologists, medical oncologists, radiologists, and pathologists who review complex cancer cases together to decide the best treatment plan.' }
    ]
  },

  // 12. Pediatrics
  'pediatrics': {
    id: 'pediatrics',
    slug: 'pediatrics',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Department of Pediatrics & Neonatology (Level-3 NICU)',
    tagline: 'Nurturing Newborn & Child Care with Advanced Level-3 Neonatal Intensive Care',
    overviewHeading: 'Nurturing Pediatric Medicine, Level-3 NICU & Specialized Child Care',
    badge: '24/7 Child Health',
    image: pediatricsImg,
    statHighlights: [
      { label: 'NICU Success', value: '99.1%' },
      { label: 'Preterm Infants', value: '3,500+' },
      { label: 'Pediatric Care', value: '24/7 Available' },
      { label: 'Vaccination', value: 'WHO Standard' }
    ],
    overview: 'Our Department of Pediatrics & Neonatology offers gentle, world-class healthcare for infants, children, and adolescents. Backed by a Level-3 NICU with advanced neonatal ventilators, incubators, and pediatric emergency specialists, your child’s health is in expert hands.',
    procedures: [
      { title: 'Level-3 Advanced Neonatal ICU (NICU)', desc: 'Intensive care for premature babies, low birth weight infants, and respiratory distress.' },
      { title: 'Pediatric Intensive Care (PICU)', desc: 'Specialized critical care for severe childhood infections, asthma, and trauma.' },
      { title: 'Comprehensive Vaccination & Immunization', desc: 'Complete immunization programs following WHO and IAP guidelines.' },
      { title: 'Developmental Assessment & Nutrition Clinic', desc: 'Monitoring milestones, growth trajectories, and childhood dietary management.' }
    ],
    symptoms: [
      'High persistent fever in infants, febrile convulsions, or lethargy',
      'Rapid breathing, wheezing, or difficulty in feeding',
      'Delayed physical milestones: walking, talking, or poor weight gain',
      'Severe vomiting, dehydration, and childhood infections'
    ],
    technologies: [
      'High-Frequency Oscillatory Ventilators (HFOV)',
      'LED Double-Surface Phototherapy for Neonatal Jaundice',
      'Servo-Controlled Warmers and Micro-Infusion Syringe Pumps'
    ],
    faqs: [
      { q: 'Does KLC have emergency pediatric care available at night?', a: 'Yes, our emergency triage and pediatric intensive care specialists are physically stationed in the hospital 24 hours a day.' }
    ]
  },

  // 13. Urology
  'urology': {
    id: 'urology',
    slug: 'urology',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Institute of Urology & Kidney Stone Care',
    tagline: 'Laser Kidney Stone Removal, Prostate Treatments (TURP) & Minimally Invasive Urological Surgery',
    overviewHeading: 'Advanced Holmium Laser Stone Dusting, RIRS & Endoscopic Prostate Care',
    badge: 'Laser Stone Center',
    image: urologyImg,
    statHighlights: [
      { label: 'Stone Surgeries', value: '14,000+' },
      { label: 'Laser Dusting', value: '100 Micron' },
      { label: 'Day-Care Stone Care', value: 'Available' },
      { label: 'Bipolar TURP', value: 'Zero Cut' }
    ],
    overview: 'The Institute of Urology at KLC Hospitals is equipped with high-power Holmium Lasers, flexible digital ureterorenoscopes (RIRS), and mini-PCNL systems. We treat kidney stones, enlarged prostate (BPH), strictures, and urological malignancies without major cuts.',
    procedures: [
      { title: 'RIRS (Retrograde Intrarenal Surgery with Laser)', desc: 'Flexible keyhole laser dusting of kidney stones without any incision on the skin.' },
      { title: 'Mini-PCNL (Percutaneous Nephrolithotomy)', desc: 'Puncture-hole removal of large complex staghorn kidney stones.' },
      { title: 'Bipolar TURP for Enlarged Prostate', desc: 'Endoscopic shaving of obstructing prostate gland with minimal bleeding.' },
      { title: 'Urethral Stricture Reconstruction & URS', desc: 'Laser visual urethrotomy and ureteric calculus fragmentation.' }
    ],
    symptoms: [
      'Severe flank pain radiating to lower abdomen and groin',
      'Blood in urine (hematuria) accompanied by burning sensations',
      'Weak urinary stream, frequent nighttime urination, or difficulty passing urine',
      'Recurrent urinary tract infections (UTIs) with fever'
    ],
    technologies: [
      'High-Wattage Holmium:YAG Medical Laser System',
      'Digital Flexible Ureterorenoscopes (Karl Storz)',
      'Bipolar Saline-Electrosurgical Prostate Resection Towers'
    ],
    faqs: [
      { q: 'What is RIRS and why is it preferred for kidney stones?', a: 'RIRS reaches the stone through the natural urinary tract using a flexible scope. The stone is pulverized into dust by laser without any cut on your body.' }
    ]
  },

  // 14. Vascular Surgery
  'vascular-surgery': {
    id: 'vascular-surgery',
    slug: 'vascular-surgery',
    parentSpecialty: null,
    parentTitle: null,
    title: 'Department of Peripheral Vascular & Endovascular Surgery',
    tagline: 'Cutting-Edge Interventions for Arterial, Venous, DVT & Dialysis Access Disorders',
    overviewHeading: 'Peripheral Vascular Interventions, Endovascular Laser & Limb Salvage',
    badge: 'Endovascular Excellence',
    image: vascularImg,
    statHighlights: [
      { label: 'Interventions', value: '6,200+' },
      { label: 'Limb Salvage', value: '96.8%' },
      { label: 'AV Fistula Patency', value: 'High Success' },
      { label: 'Cath Lab Backup', value: '24/7 Active' }
    ],
    overview: 'The Department of Peripheral Vascular Surgery treats complex blood vessel conditions outside the heart and brain. From saving limbs in diabetic gangrene and peripheral arterial blockages to dialysis AV fistulas and deep vein thrombosis (DVT) clot dissolution, our specialists offer life-changing vascular care.',
    procedures: [
      { title: 'Endovascular Angioplasty & Stenting for Peripheral Arteries', desc: 'Restoring blood flow to legs in severe gangrene and claudication through catheter ballooning.' },
      { title: 'Arteriovenous (AV) Fistula & Graft for Dialysis', desc: 'Expert surgical creation of high-flow vascular access for renal hemodialysis patients.' },
      { title: 'Catheter-Directed Thrombolysis for Deep Vein Thrombosis (DVT)', desc: 'Emergency dissolution of leg vein clots to prevent fatal pulmonary embolism.' },
      { title: 'Diabetic Foot Revascularization & Limb Salvage', desc: 'Combined vascular bypass and wound reconstruction saving feet from amputation.' }
    ],
    symptoms: [
      'Severe pain in calf muscles while walking that stops when resting (Claudication)',
      'Blackish discoloration, cold toes, or non-healing ulcers on feet',
      'Sudden painful swelling and redness in one leg (Deep Vein Thrombosis)',
      'Requirement of reliable long-term dialysis vascular access'
    ],
    technologies: [
      'Dedicated Digital Subtraction Angiography (DSA) Cath Lab Suite',
      'Intraoperative Vascular Doppler Ultrasound Flowmeters',
      'Rotational Atherectomy & AngioJet Clot Suction Systems'
    ],
    faqs: [
      { q: 'Can diabetic foot gangrene be cured without amputation?', a: 'Yes. By opening blocked blood vessels through vascular angioplasty or surgical bypass, we deliver oxygenated blood to the foot, enabling ulcers to heal and saving limbs from amputation.' }
    ]
  }
};

export default SPECIALITIES_DETAIL;
