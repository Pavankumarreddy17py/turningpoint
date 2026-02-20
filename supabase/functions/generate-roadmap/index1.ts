const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Request type
interface RoadmapRequest {
  dreamCategory?: string;
  dreamKey?: string;
  dreamName?: string;
  responses?: Record<string, string>;
}

// Roadmap return type
interface Roadmap {
  confirmed_dream: string;
  exact_role: string;
  required_skills: string[];
  education_training: string;
  daily_routine: string;
  short_term_goals: string[];
  backup_options: string[];
}

// ---------------- SERVER ----------------

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as RoadmapRequest;

    const dreamCategory = body.dreamCategory || body.dreamKey;
    const dreamName = body.dreamName || "Your Dream";
    const responses = body.responses || {};

    if (!dreamCategory) {
      throw new Error("Missing dreamCategory or dreamKey");
    }

    const roadmap = generateRoadmap(dreamCategory, dreamName, responses);

    return new Response(JSON.stringify(roadmap), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: 200,
    });

  } catch (error: any) {
    console.error("Backend Error:", error.message);

    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 400,
      }
    );
  }
});

/* ---------------- ROUTER ---------------- */

function generateRoadmap(
  key: string,
  dreamName: string,
  responses: Record<string, string>
) {
  const normalizedKey = key.toLowerCase().trim().replace(/[\s-]+/g, "_");

  console.log("Routing Key:", normalizedKey);

  const roadmapGenerators: Record<string, RoadmapGenerator> = {
    education: generateEducationRoadmap,
    sports: generateSportsRoadmap,
    health: generateHealthRoadmap,
    yoga: generateYogaRoadmap,
    life_skills: generateLifeSkillsRoadmap,
    insurance: generateInsuranceRoadmap,
    job: generateJobRoadmap,
    hr: generateHRRoadmap,
    consulting: generateConsultingRoadmap,
    dance: generateDanceRoadmap,
    health_issues: generateHealthIssuesRoadmap,
    habits: generateHabitsRoadmap,
    agriculture: generateAgricultureRoadmap,
    music: generateMusicTrainingRoadmap,
    opportunity: generateOpportunityRoadmap,
    film: generateFilmRoadmap,
    training: generateSkillTrainingRoadmap,
    irrigation: generateIrrigationRoadmap,
    horticulture: generateHorticultureRoadmap,
    ai: generateAIRoadmap,
    design: generateDesignRoadmap,
    business: generateBusinessRoadmap,
    personal_dev: generatePersonalDevelopmentRoadmap,
    dress_selection: generateStylingRoadmap,
    safety: generateSafetyRoadmap,
    blood: generateBloodRoadmap,
    food: generateFoodNutritionRoadmap,
    driver: generateDriverRoadmap,
    ambulance: generateAmbulanceRoadmap,
    fire_services: generateFireServicesRoadmap,
    leadership: generateLeadershipRoadmap,
    drawing: generateDrawingRoadmap,
    research: generateResearchRoadmap,
    strategy: generateStrategyRoadmap,
    entrance_exams: generateEntranceExamRoadmap,
    planning: generatePlanningRoadmap,
    usable_tips: generateTipsRoadmap,
    corporate_contacts: generateCorporateRoadmap,
    manpower_handling: generateManpowerRoadmap,
    story_novel: generateWritingRoadmap,
    ladies_caring: generateLadiesCareRoadmap,
    interior_design: generateDesignRoadmap,
    poetry: generatePoetryRoadmap,
    gym: generateGymRoadmap,
  };
  const generator = roadmapGenerators[normalizedKey];

  if (!generator) {
    throw new Error(`No roadmap generator found for key: ${normalizedKey}`);
  }

  return generator(dreamName, responses);
}
/* ---------------- SPECIFIC GENERATORS ---------------- */

// Helper to capitalize titles
const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

function generateSportsRoadmap(
  dreamName: string,
  responses: Record<string, string>
): Roadmap {

  const sportType = responses.sport_type || "sports";

  return {
    confirmed_dream: `Professional ${sportTitle} Athlete`,
    exact_role: roleTitle,
    required_skills: [
      'Elite physical conditioning, agility, and stamina',
      `Mastery of core ${sportTitle} mechanics and techniques`,
      'Tactical awareness and strategic game sense',
      'Mental resilience, focus under pressure, and emotional control',
      'Strict adherence to sports nutrition and recovery protocols',
      'Strong teamwork and effective communication on the field',
      'Adaptability to different opponents and playing conditions'
    ],
    education_training: `🔹 **Foundation phase (Months 1-6):** Enroll in a premier sports academy specialized in ${sportTitle}. Focus purely on correcting form and building specialized muscle strength.\n🔹 **Specialization phase (Months 6-18):** Hire a dedicated position coach for '${roleTitle}' specific drills. Participate in high-intensity interval training (HIIT).\n🔹 **Competition phase (Months 18+):** Play in district/state-level structured leagues. Regularly review match footage with analysts.\n🔹 **Continuous Education:** Take certified courses in sports psychology, injury prevention, and bio-mechanics to understand your body better.`,
    daily_routine: `🌅 **Morning (5:30 AM - 8:30 AM):**\n- 30 mins: Dynamic mobility and flexibility drills\n- 90 mins: Core physical conditioning (endurance/strength depending on the day)\n- 60 mins: Isolated technical skill work for ${sportTitle}\n\n🥗 **Mid-Day (11:00 AM - 2:00 PM):**\n- High-protein nutrient-dense meal\n- Tactical study, sports psychology reading, or studying opponent footage\n- 60 mins: Rest / Power nap for muscular recovery\n\n⚡ **Evening (4:00 PM - 7:00 PM):**\n- 120-180 mins: High-intensity team practice or match simulations (Minimum ${practiceHours} hours total active daily practice)\n- 30 mins: Cool-down, stretching, and ice-baths/recovery\n\n💤 **Night:** Strict 8-9 hours of sleep for peak athletic recovery.`,
    short_term_goals: [
      'Join an elite, competitive academy or club within the next 4 weeks',
      'Undergo a comprehensive sports-science fitness assessment to identify physical baselines',
      'Participate in at least 3 competitive local or regional tournaments in the next 6 months',
      'Work with a sports nutritionist to develop a personalized macro-diet plan',
      'Log and analyze at least 10 hours of match footage to identify technical flaws',
      'Achieve a quantifiable 15% increase in core strength or sprint speed'
    ],
    backup_options: [
      'Certified Sports Coach / Academy Director',
      'Strength and Conditioning Specialist / Fitness Expert',
      'Sports Management, Marketing, or Administration',
      'Sports Analyst / Commentator / Journalist',
      'Physical Education Director at premier institutions'
    ],
  };
}

function generateEducationRoadmap(
  dreamName: string,
  responses: Record<string, string>
): Roadmap {


  return {
    confirmed_dream: `Excellence in ${formatTitle(field)} Education`,
    exact_role: `${formatTitle(level)} Scholar specializing in ${formatTitle(specificGoal)}`,
    required_skills: [
      'Deep conceptual understanding and analytical problem-solving',
      'Advanced research, data gathering, and fact-checking capabilities',
      'Strict time management and structured study discipline',
      'High-level reading comprehension and effective note-taking (e.g., Cornell method)',
      'Critical thinking to apply theoretical knowledge to practical scenarios',
      'Strong written and verbal communication for exams and presentations',
      'Resilience against academic burnout and stress management'
    ],
    education_training: `🔹 **Phase 1 (Foundation):** Build an unbreakable understanding of core concepts. For competitive tracks, rigorously complete all NCERT/Base-level curriculum before touching advanced reference books.\n🔹 **Phase 2 (Intensive Prep):** If aiming for competitive exams/top-tier universities, enroll in specialized coaching or high-quality online mock-test series immediately.\n🔹 **Phase 3 (Application):** Move beyond theory. Engage in practical projects, scholarly papers, or relevant internships to build a robust academic portfolio.\n🔹 **Mentorship:** Connect with seniors or professors who have successfully navigated this exact path for guidance.`,
    daily_routine: `🌅 **Morning (5:30 AM - 8:30 AM):**\n- Most crucial study block: Tackle the hardest subject when the brain is fresh.\n- Active recall sessions (no passive reading).\n\n🏛️ **School/College Hours:**\n- 100% active listening. Anticipate the teacher's next point.\n- Ask questions immediately; do not let doubts pile up.\n\n📚 **Evening (4:00 PM - 9:00 PM):**\n- ${studyHours} hours of focused, completely distraction-free study (use Pomodoro 50/10 method).\n- 60 mins: Practice MCQs, previous year papers, or essay writing.\n- 30 mins: Plan the exact schedule/topics for the next day.\n\n💤 **Night:** Minimum 7-8 hours of uninterrupted sleep to consolidate memory.`,
    short_term_goals: [
      'Create a macro-study calendar mapping out the entire syllabus down to daily tasks',
      'Identify and deeply revise the top 3 weakest subjects within the next 45 days',
      'Start attempting at least one full-length mock paper every two weeks',
      'Form or join a highly focused, no-nonsense peer study group',
      'Learn and apply active recall and spaced repetition techniques (e.g., using Anki)',
      'Gather all high-tier reference materials and organize digital/physical notes'
    ],
    backup_options: [
      'Pivot to interdisciplinary or emerging fields (e.g., If failing Pure Science, pivot to Data Science)',
      'Vocational training or specialized diplomas highly valued in the industry',
      'State-level or secondary-tier competitive exams as safety nets',
      'Taking a structured gap year dedicated 100% to test preparation',
      'Transitioning into skill-based roles rather than purely academic ones'
    ],
  };
}

function generateHealthRoadmap(dreamName: string, responses: Record<string, string>) {
  const field = responses.health_field || 'healthcare';
  const specialization = responses.medical_specialization || 'general practice';
  const studyHours = responses.study_hours || '6-8';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Elite Career in ${formatTitle(field)}`,
    exact_role: formatTitle(specialization),
    required_skills: [
      'Razor-sharp diagnostic and clinical reasoning skills',
      'In-depth knowledge of human anatomy, physiology, and pathology',
      'High emotional intelligence, empathy, and patient communication',
      'Stamina to work exceptionally long and irregular shifts',
      'Ability to make critical life-saving decisions under extreme pressure',
      'Commitment to lifelong learning regarding new medical advancements'
    ],
    education_training: `🔹 **Undergraduate (MBBS/BDS/BSc):** Excel in Science (Physics, Chemistry, Biology). Clear rigorous entrance exams like NEET with top percentiles.\n🔹 **Clinical Rotations (Internships):** Gain hands-on experience in hospital wards. Do not just observe; actively learn patient interaction and case history taking.\n🔹 **Postgraduation (MD/MS/Specialization):** Prepare simultaneously for PG entrances. Focus entirely on your selected specialization (e.g., Surgery, Cardiology).\n🔹 **Fellowships:** Pursue super-specialty fellowships for advanced expertise. Publish research papers in medical journals.`,
    daily_routine: `🌅 **Morning:**\n- 6:00 AM - 8:00 AM: Intense study session (Hard topics/Memorization).\n- 8:00 AM - 9:00 AM: Exercise and breakfast (Crucial for physical stamina).\n\n🏥 **Daytime (Clinical/College):**\n- Attend lectures and practical labs with 100% focus.\n- Ask questions and actively engage in case discussions.\n\n📚 **Evening:**\n- ${studyHours} hours of dedicated self-study.\n- Practice MCQs and review clinical case studies.\n- Summarize notes using mind-maps for quick revision.\n\n💤 **Night:** Minimum 7-8 hours of sleep required for memory consolidation.`,
    short_term_goals: [
      'Master the core concepts of Anatomy, Physiology, and Biochemistry this semester',
      'Complete a minimum of 100 MCQs daily to build rapid problem-solving reflexes',
      'Shadow a senior practitioner or doctor for at least 2 weeks during vacation',
      'Create comprehensive revision flashcards for high-yield topics',
      'Identify and strengthen the weakest subject within the next 30 days'
    ],
    backup_options: [
      'Allied Health Sciences (Physiotherapy, Radiology, Anesthesia Tech)',
      'Clinical Research, Pharmacovigilance, or Drug Development roles',
      'Hospital Administration and Healthcare Management (MBA in Healthcare)',
      'Medical Technology, Biotech startups, or Health-Tech consulting',
      'Public Health Policy making and Epidemiology (MPH)'
    ],
  };
}

function generateJobRoadmap(dreamName: string, responses: Record<string, string>) {
  const sector = responses.job_sector || 'both';
  const govLevel = responses.gov_level || '';
  const privateField = responses.private_field || '';
  const examPrep = responses.exam_prep || '6-8';
  
  const isGov = sector === 'government' || sector === 'both';
  const roleName = isGov ? (govLevel || 'Government Services') : (privateField || 'Corporate Professional');
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = formatTitle(roleName);

  if (isGov) {
    return {
      confirmed_dream: `Prestigious ${title} Career`,
      exact_role: `${title} Officer`,
      required_skills: [
        'Exceptional grasp of General Studies, Current Affairs, and Polity',
        'Strong analytical and logical reasoning capabilities',
        'Mastery of time-management during high-pressure exams',
        'Excellent written communication for subjective exam papers',
        'Unshakable perseverance and emotional control during preparation phases',
        'Leadership, decision-making, and ethical judgment (for interviews)'
      ],
      education_training: `🔹 **Phase 1 (Syllabus Decoding & Basics):** Thoroughly analyze the exam syllabus and previous year questions (PYQs). Complete standard foundational books (e.g., NCERTs).\n🔹 **Phase 2 (Deep Study & Notes):** Dive into advanced reference books. Make concise, revision-friendly notes. Read a standard newspaper (e.g., The Hindu/Indian Express) daily.\n🔹 **Phase 3 (Testing & Refinement):** Join a reputed mock test series. Answer writing practice is non-negotiable. Analyze every mistake.\n🔹 **Phase 4 (Interview/Personality):** Form mock-interview groups. Focus on articulation, body language, and balanced opinions on current issues.`,
      daily_routine: `🌅 **Morning (5:00 AM - 9:00 AM):**\n- 2 hours: Hardest subject or core GS topics.\n- 2 hours: Current affairs compilation and newspaper reading.\n\n📚 **Mid-Day (11:00 AM - 3:00 PM):**\n- 2 hours: Subject 2 (Optional or Aptitude/CSAT).\n- 1 hour: Revision of previous day's notes.\n\n📝 **Evening (5:00 PM - 9:00 PM):**\n- 2 hours: Mock tests or answer writing practice.\n- 1 hour: Honest evaluation of the test and noting down weak areas.\n- 1 hour: Light reading or essay preparation.\n\nTotal focused study: ${examPrep} hours. Remember: Consistency beats intensity.`,
      short_term_goals: [
        'Memorize the entire exam syllabus word-by-word within 3 days',
        'Complete all basic foundational reading (NCERTs) in the next 45 days',
        'Develop a daily newspaper reading habit restricted to 60 minutes maximum',
        'Write at least two full-length subjective answers every day',
        'Solve previous 10 years question papers within the next 2 months'
      ],
      backup_options: [
        'State-level administrative or localized government exams',
        'Banking, SSC, or Railway regulatory exams as parallel safety nets',
        'Think-tanks, public policy research, or public policy consulting roles',
        'Subject matter expert in Ed-tech coaching institutes',
        'Private sector equivalent roles emphasizing management and administration'
      ],
    };
  } else {
    return {
      confirmed_dream: `High-Impact Career in ${title}`,
      exact_role: `${title} Specialist / Executive`,
      required_skills: [
        'Deep domain-specific technical or operational expertise',
        'Advanced problem-solving and critical thinking methodologies',
        'Excellent corporate communication and presentation skills',
        'Agility to learn new tools and adapt to changing industry trends',
        'Stakeholder management and cross-functional team collaboration',
        'Data-driven decision making and business acumen'
      ],
      education_training: `🔹 **Phase 1 (Skill Acquisition):** Master the hyper-specific skills required for the role via certifications, bootcamps, or intensive self-study.\n🔹 **Phase 2 (Experience Building):** Do not wait for a job. Build a portfolio, do freelance gigs, or secure internships to gain practical, real-world experience.\n🔹 **Phase 3 (Networking & Branding):** Optimize LinkedIn. Connect directly with hiring managers and industry peers. Your network is your net worth.\n🔹 **Phase 4 (Interview Mastery):** Prepare compelling STAR (Situation, Task, Action, Result) stories for behavioral interviews. Master technical rounds.`,
      daily_routine: `🌅 **Morning:**\n- 1-2 hours: Upskilling (learning a new tool, language, or methodology).\n- 30 mins: Reviewing industry news and trends.\n\n💼 **Mid-Day:**\n- Apply to 5-10 highly targeted roles with customized resumes/cover letters.\n- Work intensely on a personal project or freelance gig to build portfolio.\n\n🤝 **Evening:**\n- Reach out to 2-3 professionals on LinkedIn for informational interviews.\n- Practice technical interview questions or case studies.\n- Relax and detach from work to prevent burnout.`,
      short_term_goals: [
        'Complete a recognized, industry-standard certification within 6 weeks',
        'Revamp resume and LinkedIn profile to highlight achievements, not just duties',
        'Build and deploy 2 high-quality portfolio projects within 60 days',
        'Conduct informational interviews with 3 people currently in your target role',
        'Prepare and memorize answers to the top 20 behavioral interview questions'
      ],
      backup_options: [
        'Consulting or freelance contractor in the same domain',
        'Pivoting to adjacent roles (e.g., Marketing to Product Management)',
        'Bootstrapping a micro-agency offering your specific skill as a service',
        'Joining an early-stage startup for rapid skill acquisition',
        'Teaching or creating courses around your specific skill set'
      ],
    };
  }
}

function generateBusinessRoadmap(
  dreamName: string,
  responses: Record<string, string>
): Roadmap {


  return {
    confirmed_dream: `Build a Successful ${formatTitle(businessType)} Business`,
    exact_role: `Founder & CEO - ${formatTitle(businessType)} Domain`,
    required_skills: [
      'Relentless execution, adaptability, and high risk-tolerance',
      'Financial mastery (cash flow management, unit economics, forecasting)',
      'Sales psychology and customer acquisition strategies',
      'Leadership, team building, and delegation',
      'Data-driven problem solving and strategic pivoting',
      'Understanding of legal compliance and tax structures'
    ],
    education_training: `🔹 **Phase 1 (Validation):** Do not build a product first. Talk to 100 potential customers. Validate the problem.\n🔹 **Phase 2 (MVP):** Build a Minimum Viable Product with the lowest possible budget. Use no-code tools if possible.\n🔹 **Phase 3 (GTM):** Master Go-To-Market strategies. Learn digital marketing, SEO, and direct sales tactics.\n🔹 **Continuous Learning:** Read business biographies. Listen to founder podcasts. Network relentlessly with other localized business owners.`,
    daily_routine: `🌅 **Morning (Deep Work):**\n- 1-2 hours: Core strategic planning or highest-value operational task.\n- 30 mins: Reviewing daily cash flow, core metrics, and KPIs.\n\n🤝 **Mid-Day (Execution & People):**\n- 2 hours: Prospecting, sales calls, or client meetings.\n- 1 hour: Internal team syncs, hiring interviews, or vendor negotiations.\n\n⚡ **Evening (Growth & Learning):**\n- 1 hour: Focused learning (marketing, product, or leadership).\n- 30 mins: Planning the mandatory top 3 tasks for the next day.\n\n💤 **Night:** Prioritize sleep. Burnout destroys businesses.`,
    short_term_goals: [
      'Conduct 20 detailed customer discovery interviews within 2 weeks',
      'Draft a 1-page lean business plan (Lean Canvas model)',
      'Acquire the first 10 paying customers with ZERO marketing spend (manual outreach)',
      'Register the business legally and open a dedicated corporate bank account',
      'Set up a basic landing page/website to capture leads',
      'Build a simple financial model tracking projected income and expenses'
    ],
    backup_options: [
      'Consulting in your industry using the skills you already developed',
      'Joining an early-stage startup as a core team member / operations head',
      'Freelancing / Agency model as a stepping stone to a product business',
      'Acquiring an existing micro-business rather than starting from scratch',
      'Pivoting the business model entirely based on user feedback'
    ],
  };
}

function generateAIRoadmap(dreamName: string, responses: Record<string, string>) {
  const role = responses.ai_role || 'ml_engineer';
  const programmingSkills = responses.programming_skills || 'beginner';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: 'Pioneering Career in Artificial Intelligence',
    exact_role: formatTitle(role),
    required_skills: [
      'Advanced proficiency in Python and SQL',
      'Strong mathematical foundation in Linear Algebra, Calculus, and Statistics',
      'Expertise in Deep Learning frameworks (PyTorch, TensorFlow)',
      'Data wrangling and feature engineering capabilities',
      'Understanding of LLM fine-tuning, RAG architecture, and prompt engineering',
      'Ability to deploy ML models to production (MLOps, Docker, Kubernetes)'
    ],
    education_training: `🔹 **Phase 1 (Core Math & Code):** Master Python data structures. Complete deep-dives into Calculus, Probability, and Matrix Algebra.\n🔹 **Phase 2 (ML Algorithms):** Understand the math behind classic ML (Regression, SVM, Random Forests) before touching Neural Networks.\n🔹 **Phase 3 (Deep Learning & Specialization):** Take specialized courses (e.g., fast.ai or DeepLearning.AI). Specialize in NLP, Computer Vision, or Generative AI.\n🔹 **Phase 4 (Engineering):** Learn Git, Cloud (AWS/GCP), and MLOps tools to actually deploy your models.`,
    daily_routine: `🌅 **Morning (Theory):**\n- 60 mins: Read 1 research paper (ArXiv) or study a new mathematical concept.\n- 60 mins: Focused algorithmic problem solving (LeetCode/HackerRank).\n\n💻 **Mid-Day (Practical):**\n- 2-3 hours: Hands-on coding. Building models, cleaning datasets, or tuning hyperparameters.\n\n🧠 **Evening (Community & Portfolio):**\n- 60 mins: Work on a portfolio project (end-to-end deployment, not just a Jupyter notebook).\n- 30 mins: Engage with the AI community (Twitter, GitHub, Discord).`,
    short_term_goals: [
      'Complete a comprehensive Python for Data Science bootcamp',
      'Build and train 3 classic ML models from scratch using scikit-learn',
      'Participate in at least 1 Kaggle competition to understand real-world messy data',
      'Deploy a simple ML or GenAI application using Streamlit/Gradio and HuggingFace',
      'Replicate the results of a famous older ML paper to understand the architecture',
      'Build a strong GitHub portfolio with clean, documented code'
    ],
    backup_options: [
      'Data Scientist or Data Analyst',
      'Backend Software Engineer',
      'MLOps Engineer or Cloud Architect',
      'AI Product Manager',
      'Quantitative Researcher in Finance'
    ],
  };
}

function generateDanceRoadmap(dreamName: string, responses: Record<string, string>) {
  const category = responses.dance_category || 'modern';
  const form = responses.classical_form || responses.modern_style || responses.gymnastics_type || category;
  const goal = responses.dance_goal || 'performer';
  const practiceTime = responses.practice_time || '2-4';

  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = formatTitle(form);

  return {
    confirmed_dream: `Professional ${formatTitle(category)} Dance Career`,
    exact_role: `${title} ${formatTitle(goal)}`,
    required_skills: [
      'Exceptional physical flexibility, strength, and spatial awareness',
      'Perfect understanding of rhythm, timing, and musicality',
      'Expressive stage presence and emotional storytelling',
      'Choreographic memory and rapid routine retention',
      'Stamina for grueling, repetitive rehearsals',
      'Knowledge of self-promotion and personal branding'
    ],
    education_training: `🔹 **Phase 1 (Technique):** Enroll in a reputable, specialized dance studio. Master the foundational postures, moves, and core strength specific to ${title}.\n🔹 **Phase 2 (Versatility):** Even if focusing on ${title}, cross-train in other styles (e.g., Ballet for balance, Hip-Hop for isolation) to become a versatile dancer.\n🔹 **Phase 3 (Performance):** Audition constantly. Participate in local workshops, talent shows, and battles.\n🔹 **Phase 4 (Certification):** Obtain recognized certifications if pursuing choreography or teaching.`,
    daily_routine: `🌅 **Morning (Body Prep):**\n- 45 mins: Intensive stretching, Yoga, or Pilates for flexibility.\n- 45 mins: Core strengthening and cardiovascular stamina building.\n\n💃 **Mid-Day (Technical Practice):**\n- 2 hours: Drilling foundational techniques of ${title}. Breaking down complex movements.\n\n🎭 **Evening (Choreography & Rehearsal):**\n- ${practiceTime} hours: Studio rehearsal. Learning choreography, practicing routines, and refining expressions.\n- 30 mins: Cool-down and deep tissue stretching to prevent injury.\n\n📱 **Night:** Record yourself, review the footage for mistakes, and post content to social media for branding.`,
    short_term_goals: [
      'Enroll in advanced classes with a top-tier instructor in your city within 2 weeks',
      'Improve core flexibility (e.g., achieve full splits) within 3 months',
      'Choreograph and record a 1-minute original routine perfectly',
      'Participate in at least 2 live performances or competitions within 6 months',
      'Build an active Instagram/TikTok persona showcasing your dance journey',
      'Attend a major masterclass workshop by an international artist'
    ],
    backup_options: [
      'Professional Choreographer for events or films',
      'Dance / Fitness Instructor (Zumba, Aerobics)',
      'Backup Dancer for commercial artists or theater productions',
      'Dance Studio Owner or Arts Administrator',
      'Movement Director or Dance Therapist'
    ],
  };
}

function generateGenericRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: dreamName.toUpperCase(),
    exact_role: 'Aspiring Professional',
    required_skills: [
      'In-depth domain-specific knowledge',
      'Agile learning and continuous upskilling',
      'Strong networking and relationship-building abilities',
      'Critical thinking and unstructured problem-solving',
      'Extreme perseverance and emotional resilience',
      'Effective communication and self-marketing'
    ],
    education_training: `🔹 **Step 1 (Research):** Deconstruct the dream. Find 5 people who have achieved exactly this. Study their career trajectories.\n🔹 **Step 2 (Skill Mapping):** Identify the 3 hardest, most valuable skills required. Begin intensive self-study or formal education to master them.\n🔹 **Step 3 (Proof of Work):** Build a portfolio. Degrees matter less than undeniable proof that you can execute the job.\n🔹 **Step 4 (Outreach):** Cold email mentors, offer free value, and secure internships or practical exposure.`,
    daily_routine: `🌅 **Morning:**\n- 60 mins: Focused learning. Read books, take courses, or consume high-level industry podcasts.\n- 60 mins: Hard-skill practice. Do the reps.\n\n💼 **Mid-Day:**\n- Action phase. Apply for roles, work on your portfolio, or build the actual product.\n\n🤝 **Evening:**\n- Engage with your industry community. Leave thoughtful comments on LinkedIn, join Discord groups, and send 2 cold emails to potential mentors.\n- 15 mins: Plan exactly what you must accomplish tomorrow.`,
    short_term_goals: [
      'Define the end-goal clearly and map backward to where you are today',
      'Identify and connect with 3 mentors or professionals in this exact field',
      'Complete one foundational course or book directly related to this goal',
      'Produce one tangible piece of "Proof of Work" (an essay, a project, a video, etc.)',
      'Establish a strict, non-negotiable daily habit dedicated to this dream'
    ],
    backup_options: [
      'Pivot to a related micro-niche within the same broad industry',
      'Take a supporting or operational role in a company doing what you want to do',
      'Freelance or consult using the skills you have acquired so far',
      'Become an educator or content creator documenting your journey in this field',
      'Maintain it as a passionate side-hustle while holding a stable day job'
    ],
  };
}

function generateGymRoadmap(dreamName: string, responses: Record<string, string>) {
  const goal = responses.gym_goal || 'fit';
  const roleTitle = goal === 'bulk' ? 'Muscle Hypertrophy & Strength' : (goal === 'cut' ? 'Extreme Fat Loss & Shredding' : 'Athletic Conditioning');

  return {
    confirmed_dream: `Physical Transformation Masters: ${goal.toUpperCase()}`,
    exact_role: roleTitle,
    required_skills: [
      'Unyielding workout consistency and mental toughness',
      'Strict adherence to macronutrient and caloric tracking',
      'Mastery of biomechanics and proper lifting form',
      'Progressive overload tracking and program management',
      'Deep understanding of muscular recovery and sleep hygiene',
      'Emotional control to avoid binge-eating or over-training'
    ],
    education_training: `🔹 **Phase 1 (Form & Diet):** Do not ego lift. Perfect your form on major compound movements. Calculate your exact TDEE (Total Daily Energy Expenditure).\n🔹 **Phase 2 (Programming):** Choose a structured, science-based split (e.g., Push/Pull/Legs or Upper/Lower). Stop doing random workouts.\n🔹 **Phase 3 (Progressive Overload):** Log every single workout. You MUST lift heavier weights or do more reps over time.\n🔹 **Phase 4 (Recovery):** Muscle is built in bed, not the gym. Prioritize high protein intake and 8 hours of sleep.`,
    daily_routine: `🌅 **Morning:**\n- Hydrate immediately (1L water). Fasted cardio (if your goal is aggressive cutting).\n- Meal 1: High protein, moderate complex carbs.\n\n💪 **Workout Window (60-90 mins):**\n- 10 mins: Dynamic warm-up (do not skip).\n- 60 mins: Intense resistance training. Track sets and reps.\n- 15 mins: Post-workout stretch / light cardio.\n\n🥗 **Rest of Day:**\n- Consume meals every 3-4 hours hitting exact protein targets (1.6g - 2.2g per kg of bodyweight).\n\n💤 **Night:**\n- Casein protein or cottage cheese before bed. Minimum 8 hours of deep sleep.`,
    short_term_goals: [
      'Track every single calorie and macro for 14 straight days using an app like MyFitnessPal',
      'Establish a 1-Rep Max (1RM) baseline for Squat, Bench, and Deadlift',
      'Maintain a perfect 4-5 day gym attendance streak for an entire month',
      'Eliminate all liquid calories and ultra-processed foods from the diet',
      'Achieve a visible body composition change (take weekly progress photos)',
      'Increase all major compound lifts by 5-10% within 8 weeks'
    ],
    backup_options: [
      'Certified Personal Trainer (ACE / NASM)',
      'Sports Nutritionist or Dietician',
      'Fitness Influencer or Online Coach',
      'Competitive Bodybuilder / Powerlifter',
      'Start a specialized meal-prep delivery business'
    ],
  };
}

function generateWritingRoadmap(dreamName: string, responses: Record<string, string>) {
  const genre = responses.genre || 'creative fiction';

  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = formatTitle(genre);

  return {
    confirmed_dream: `Professional ${title} Writer`,
    exact_role: `Published Author & ${title} Specialist`,
    required_skills: [
      'Mastery of narrative structure, pacing, and storytelling arcs',
      'Deep character psychology and world-building capabilities',
      'Flawless grammar and advanced vocabulary deployment',
      'Ruthless self-editing and openness to critical feedback',
      'Consistent daily writing discipline (overcoming writer\'s block)',
      'Understanding of the publishing industry (Traditional & Self-Publishing)'
    ],
    education_training: `🔹 **Phase 1 (Consumption):** Read 50+ of the best books in the ${title} genre. Deconstruct why they work. Highlight structural turning points.\n🔹 **Phase 2 (The Shitty First Draft):** Write without editing. Just get the words on the page. The magic happens in the rewrite.\n🔹 **Phase 3 (Critique):** Join a highly critical writing group. Let Beta readers tear your work apart.\n🔹 **Phase 4 (Publishing):** Learn querying for traditional agents OR master KDP (Kindle Direct Publishing) and Amazon Ads for self-publishing.`,
    daily_routine: `🌅 **Morning (Creation):**\n- 90 mins: Write 1,000 to 2,000 words *before* checking your phone or emails.\n- 30 mins: Read a non-fiction book to gather ideas and expand mental models.\n\n📚 **Mid-Day (Editing & Business):**\n- 60 mins: Ruthless editing of yesterday\'s writing.\n- 30 mins: Marketing tasks (Newsletter, social media, querying agents).\n\n🌙 **Evening (Consumption):**\n- Read fiction in your specific genre for pleasure and analysis.\n- Note down 3 interesting character traits or plot ideas for tomorrow.`,
    short_term_goals: [
      'Write 1,000 words every single day for 30 consecutive days without fail',
      'Finish a complete 5,000-word short story and submit it to a literary magazine',
      'Build a rudimentary author website to start collecting reader emails',
      'Read and fully deconstruct 3 bestselling books in your target genre',
      'Outline the core plot-points and character arcs for a full-length manuscript',
      'Join an active local or online writer\'s critique group'
    ],
    backup_options: [
      'High-ticket Copywriter or Content Marketer',
      'Screenwriter for short films, YouTube, or indie projects',
      'Freelance Ghostwriter for executives or celebrities',
      'Technical Writer or Documentation Specialist',
      'Literary Editor or Proofreader'
    ],
  };
}

function generateStrategyRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: 'Master Strategic Thinker',
    exact_role: 'Strategic Planner & Decision Architect',
    required_skills: [
      'First-principles thinking and logical deconstruction',
      'Advanced risk analysis and probabilistic forecasting',
      'Game theory and competitive dynamics understanding',
      'Ability to align short-term actions with 10-year visions',
      'Rapid synthesis of large amounts of complex data',
      'Persuasive communication to align stakeholders with the strategy'
    ],
    education_training: `🔹 **Phase 1 (Mental Models):** Study Charlie Munger\'s mental models. Learn cognitive biases and how to avoid them.\n🔹 **Phase 2 (Frameworks):** Master business/military strategy frameworks (SWOT, Porter\'s Five Forces, OODA Loop).\n🔹 **Phase 3 (Case Studies):** Read dozens of HBR case studies. Deconstruct why companies succeeded or failed.\n🔹 **Phase 4 (Application):** Offer free strategic teardowns for local businesses or friends\' startups to gain practical reps.`,
    daily_routine: `🌅 **Morning (Deep Thought):**\n- 60 mins: Read deep-dive analyses on geopolitics, economics, or tech trends.\n- 30 mins: Journaling and "Thinking time" with a blank piece of paper.\n\n📊 **Daytime (Execution):**\n- Apply structured frameworks to your current job or projects.\n- Build financial models or scenario plans (Best/Worst/Base cases).\n\n🧠 **Evening (Review):**\n- Play strategy games (Chess, Strategy video games) to wire the brain for consequences.\n- Review the day\'s decisions and analyze the outcomes against expectations.`,
    short_term_goals: [
      'Read "Thinking, Fast and Slow" and "Good Strategy Bad Strategy" within 4 weeks',
      'Write a comprehensive strategic teardown of a public company and publish it',
      'Identify 5 cognitive biases you fall prey to and create rules to bypass them',
      'Build a simple decision-matrix template for your own life choices',
      'Map out the precise competitive landscape of your current industry'
    ],
    backup_options: [
      'Management Consultant (MBB tier)',
      'Chief of Staff at a high-growth startup',
      'Venture Capital Analyst or Associate',
      'Corporate Development / M&A Specialist',
      'Product Manager'
    ],
  };
}

function generateResearchRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: 'Professional Elite Researcher',
    exact_role: 'Lead Research Analyst / Scientist',
    required_skills: [
      'Rigorous quantitative and qualitative data analysis',
      'Unbiased critical thinking and hypothesis testing',
      'Academic writing and ability to structure complex arguments',
      'Mastery of research methodologies and statistical significance',
      'Proficiency in statistical tools (SPSS, R, Python, Stata)',
      'Extreme patience and attention to minute details'
    ],
    education_training: `🔹 **Foundation:** Master the scientific method. Learn the difference between correlation and causation deeply.\n🔹 **Tooling:** Learn Python (Pandas/NumPy) or R for heavy data manipulation. Do not rely entirely on Excel.\n🔹 **Literature Review:** Learn how to read academic papers quickly (Abstract -> Conclusion -> Methodology).\n🔹 **Publication:** Understand the peer-review process. Aim to co-author a paper with a senior researcher to learn the ropes.`,
    daily_routine: `🌅 **Morning (Literature):**\n- 60 mins: Read the latest papers published in your field (Nature, Science, ArXiv).\n- 30 mins: Draft literature review notes in a knowledge management system (e.g., Obsidian/Notion).\n\n🔬 **Mid-Day (Analysis):**\n- 2-4 hours: Deep data analysis, cleaning datasets, or running statistical models.\n- 1 hour: Methodology design or writing experimental protocols.\n\n📝 **Evening (Writing):**\n- 60 mins: Draft sections of your current paper (Results/Discussion).\n- 30 mins: Organize citations using Zotero or Mendeley.`,
    short_term_goals: [
      'Master a reference management software (Zotero) within 3 days',
      'Complete a course in basic Biostatistics or Applied Statistics within 4 weeks',
      'Read and comprehensively summarize 10 foundational papers in your specific niche',
      'Clean a messy raw dataset and perform exploratory data analysis (EDA)',
      'Draft the methodology section for a hypothetical or current project',
      'Secure a research assistant position or collaborate on an ongoing study'
    ],
    backup_options: [
      'Data Scientist or Data Analyst in the tech sector',
      'Quantitative UX Researcher',
      'Market Research Analyst for hedge funds or consulting firms',
      'Public Policy Advisor or Think-Tank Analyst',
      'Science Communicator or Technical Writer'
    ],
  };
}

function generateEntranceExamRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: 'Conquer the Entrance Exam',
    exact_role: 'Top Percentile Aspirant',
    required_skills: [
      'Merciless time management and prioritization',
      'Crystal clear conceptual understanding replacing rote memorization',
      'Hyper-accurate mock test analysis to identify blind spots',
      'Rapid calculation and shortcut methodologies (where applicable)',
      'Extreme consistency over a long duration',
      'Psychological resilience to handle low mock scores'
    ],
    education_training: `🔹 **Phase 1 (Syllabus & PYQs):** Print the syllabus. Read the last 5 years of Previous Year Questions (PYQs) before reading a single textbook to understand the examiner's mind.\n🔹 **Phase 2 (Concept Building):** Use standard, universally recommended books only. Avoid collecting PDF materials.\n🔹 **Phase 3 (Revision Loops):** Implement Spaced Repetition. Re-read the same book 5 times rather than reading 5 different books.\n🔹 **Phase 4 (Mock Phobia Removal):** Write mock tests even if the syllabus is incomplete. Mocks are for learning, not just assessing.`,
    daily_routine: `🌅 **Morning (Prime Brain Time):**\n- 3-4 hours: Focus exclusively on the hardest, most complex subject.\n\n📚 **Mid-Day (Consolidation):**\n- 2 hours: Practice MCQs/Questions related to the morning session.\n- 2 hours: Second subject (relatively easier or more scoring).\n\n📝 **Evening (Testing & Review):**\n- 1-2 hours: Sectional mock test or timed practice.\n- 1 hour: Deep analysis of mistakes. Log them in an "Error Book".\n\n💤 **Night:**\n- 30 mins: Light revision of formulas or facts before a strict 7-8 hour sleep.`,
    short_term_goals: [
      'Deconstruct the syllabus and allocate specific days/weeks to every single topic',
      'Procure only the absolute essential standard books and delete material hoarding',
      'Complete the first full reading of the core syllabus within 3 months',
      'Attempt at least 2 full-length previous year papers to set a baseline score',
      'Create an "Error Book" where every single mock mistake is documented and reviewed weekly'
    ],
    backup_options: [
      'State-level equivalent entrance exams (usually slightly less competitive)',
      'Private university entrance exams as a strong safety net',
      'Pursuing an alternative foundational degree and attempting the exam again later',
      'Leveraging the intense preparation to pivot into competitive Government Exams',
      'Skill-based diploma courses in the same broad field'
    ],
  };
}

function generatePoetryRoadmap(dreamName: string, responses: Record<string, string>) {
  const type = responses.poetry_type || 'free_verse';
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: 'Mastery of Poetic Expression',
    exact_role: `Eminent ${formatTitle(type)} Poet`,
    required_skills: [
      'Profound emotional intelligence and human observation',
      'Expansive and precise vocabulary',
      'Mastery of imagery, metaphor, and literary devices',
      'Understanding of rhythm, meter, and sonic flow (even in free verse)',
      'Ruthless editing to remove every unnecessary word',
      'Ability to translate abstract feelings into concrete imagery'
    ],
    education_training: `🔹 **Read Broadly:** Read classical and contemporary poetry daily. Analyze why certain lines invoke a physical reaction.\n🔹 **Deconstruction:** Rewrite famous poems using different words to understand the original master\'s choices.\n🔹 **Form Mastery:** Even if writing free verse, learn traditional forms (Sonnets, Haikus, Villanelles) to understand structure and constraints.\n🔹 **Community:** Attend open mic nights, slam poetry events, or join online critique circles. Submit to literary magazines aggressively.`,
    daily_routine: `🌅 **Morning (Observation):**\n- 20 mins: Morning pages (stream of consciousness journaling) to clear the mind.\n- 30 mins: Read 5 poems closely. Dissect the imagery.\n\n✒️ **Daytime (Creation):**\n- Carry a notebook everywhere. Record snippets of conversation, specific colors, and fleeting emotions immediately.\n\n📚 **Evening (Refining):**\n- 60 mins: Write a new draft or aggressively edit an older poem.\n- Practice reading your poetry out loud to test the rhythm and breath pauses.`,
    short_term_goals: [
      'Write one new poem every day for 30 consecutive days (quantity leads to quality)',
      'Read and deconstruct 3 complete anthologies of renowned poets',
      'Submit 5 polished poems to a respected online literary journal',
      'Memorize 3 of your favorite poems to internalize rhythm and flow',
      'Perform at least once at a local open mic or virtual poetry reading',
      'Curate a portfolio of your best 10 pieces for future chapbook publication'
    ],
    backup_options: [
      'Lyricist or Songwriter for musicians',
      'High-end Copywriter focusing on brand storytelling',
      'Literary Editor or Creative Writing Instructor',
      'Greeting Card / Specialized Content Writer',
      'Spoken Word Artist and Performer'
    ],
  };
}

function generateDrawingRoadmap(dreamName: string, responses: Record<string, string>) {
  const type = responses.drawing_type || 'sketching';
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Professional ${formatTitle(type)} Artist`,
    exact_role: 'Master Illustrator / Fine Artist',
    required_skills: [
      'Mastery of foundational shapes, perspective, and proportion',
      'Advanced understanding of lighting, shading, and color theory',
      'Anatomical accuracy (for character or figure drawing)',
      'Proficiency in chosen medium (graphite, digital, oils, etc.)',
      'Patience to repeatedly study real-world references',
      'Strong visual storytelling and composition logic'
    ],
    education_training: `🔹 **Foundation:** Ignore style initially. Focus 100% on drawing boxes, spheres, and cylinders perfectly in perspective.\n🔹 **Observation:** Draw from life, not just photos. Go outside and sketch environments or everyday objects.\n🔹 **Digital/Medium Mastery:** Once foundations are solid, master the tools (e.g., Procreate, Photoshop, or specific paints).\n🔹 **Portfolio:** Build a portfolio of 10-15 flawless pieces rather than 100 mediocre sketches. Target it to the industry you want (e.g., Concept Art, Children\'s Books).`,
    daily_routine: `🌅 **Morning (Warm-up):**\n- 15 mins: Gesture drawing (30-second to 2-minute poses to capture flow).\n- 45 mins: Study and replicate a specific element (e.g., drawing only hands or trees today).\n\n🎨 **Daytime (Creation):**\n- 2-3 hours: Focused work on a master piece or commissioned work.\n\n👀 **Evening (Analysis):**\n- 30 mins: Master study. Attempt to recreate a piece by a master artist you admire to reverse-engineer their technique.\n- Save references and build a visual library.`,
    short_term_goals: [
      'Complete a 100-day sketch challenge focusing explicitly on human anatomy or perspective',
      'Recreate 5 masterworks to deeply understand their use of color and light',
      'Build a professional digital portfolio website or ArtStation profile',
      'Secure at least one small commissioned artwork within the next 3 months',
      'Learn how to effectively market and price your art on social media'
    ],
    backup_options: [
      'Concept Artist for Video Games or Film',
      'Commercial Graphic Designer',
      'Storyboard Artist for animation or advertising',
      'Tattoo Artist Simulator & Apprenticeship',
      'Freelance Illustrator for publications'
    ],
  };
}

function generatePlanningRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: 'Elite Structured Planning Expert',
    exact_role: 'Goal & Time Architect',
    required_skills: [
      'Advanced time-blocking and calendar management',
      'Ruthless prioritization using the Eisenhower Matrix',
      'Ability to break micro-tasks out of macro-goals',
      'Consistent execution and discipline over motivation',
      'Proficiency in tracking systems (Notion, Jira, Trello)',
      'Contingency planning and agility in chaotic situations'
    ],
    education_training: `🔹 **Phase 1 (Audit):** Conduct a 7-day time audit. Write down exactly what you do every 30 minutes.\n🔹 **Phase 2 (Frameworks):** Learn the OKR (Objectives and Key Results) system used by elite companies.\n🔹 **Phase 3 (Tools):** Pick ONE tool (e.g., Notion) and master it. Do not jump between different app ecosystems.\n🔹 **Phase 4 (Review Cycle):** Implement the Weekly Review methodology (GTD - Getting Things Done).`,
    daily_routine: `🌅 **Morning (Eat the Frog):**\n- First 2 hours: Do the hardest, most impactful task of the day with absolute zero distractions.\n\n📅 **Mid-Day (Batching):**\n- Batch email checking, meetings, and low-cognitive tasks into specific 60-minute windows.\n\n🔍 **Evening (The Daily Review):**\n- 15 mins: Review what was accomplished. Move incomplete tasks.\n- 15 mins: Time-block tomorrow\'s schedule down to the hour. Never wake up wondering what to do.`,
    short_term_goals: [
      'Conduct a 7-day absolute time-audit to identify and eliminate time-wasting loops',
      'Build a customized 90-day OKR plan for your personal life or business',
      'Set up a central "Second Brain" digital system to capture all ideas and tasks immediately',
      'Achieve a 14-day streak of completing your top 3 daily priorities',
      'Eliminate all non-essential phone notifications permanently'
    ],
    backup_options: [
      'Certified Project Manager (PMP / Agile Certified)',
      'Operations Manager or Chief Operating Officer',
      'Productivity Coach or Consultant',
      'Executive Assistant to high-net-worth individuals',
      'Business Strategist leading PMO (Project Management Office)'
    ],
  };
}

function generateLeadershipRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: 'Dynamic Leadership Career',
    exact_role: 'Visionary Team Leader / Executive',
    required_skills: [
      'Decisive action in highly ambiguous situations',
      'Exceptional emotional intelligence and empathy',
      'Mastery of conflict resolution and tough conversations',
      'Ability to inspire, align, and rally a team behind a massive vision',
      'Strategic delegation and trust-building',
      'Flawless public speaking and persuasive communication'
    ],
    education_training: `🔹 **Self-Leadership:** You cannot lead others if you cannot lead yourself. Master personal discipline first.\n🔹 **Communication:** Join Toastmasters or take public speaking courses. Learn how to articulate ideas commandingly.\n🔹 **Psychology:** Study organizational behavior and human psychology. Understand what truly motivates people beyond money.\n🔹 **Mentorship:** Find a leader 10 years ahead of you. Observe how they handle crises.`,
    daily_routine: `🌅 **Morning (Vision):**\n- 30 mins: Read leadership philosophy (e.g., Marcus Aurelius, modern business leaders).\n- 30 mins: Strategic planning. Are we moving toward the big vision?\n\n👥 **Daytime (People):**\n- 1-on-1s. Listen 80% of the time, speak 20%. Ensure your team has the resources they need to win.\n- Make the tough calls that are causing bottlenecks.\n\n🧠 **Evening (Reflection):**\n- Evaluate your decisions today. Were they driven by ego or by the mission?`,
    short_term_goals: [
      'Take complete ownership of a failing or stagnant project and turn it around',
      'Read "Extreme Ownership" by Jocko Willink and apply the principles immediately',
      'Conduct a 360-degree feedback review on yourself to locate blind spots',
      'Develop the ability to give constructive, direct feedback without causing resentment',
      'Lead a public meeting or presentation with zero notes or slides'
    ],
    backup_options: [
      'Human Resources Director or VP of People',
      'Entrepreneur / Founder building a proprietary startup',
      'Organizational Consultant or Corporate Trainer',
      'Non-profit Director or Community Organizer',
      'Executive Coach for emerging managers'
    ],
  };
}

function generateCorporateRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: 'Master Corporate Networking',
    exact_role: 'High-Value Professional Connector',
    required_skills: [
      'Advanced networking and relationship maintenance',
      'Art of the flawless cold email and LinkedIn outreach',
      'Impeccable professional etiquette and follow-up discipline',
      'Identifying mutual value and creating win-win scenarios',
      'Personal branding and high-visibility corporate positioning',
      'Political savviness within large organizations'
    ],
    education_training: `🔹 **Asset Building:** Optimize your LinkedIn profile obsessively. Treat it like a high-converting landing page.\n🔹 **The Warm Intro:** Learn how to navigate corporate hierarchies. Never ask for a job directly; ask for advice or insights.\n🔹 **Value First:** Before connecting, find out what the other person is struggling with and offer a solution or article related to it.\n🔹 **CRM:** Treat your network like a sales pipeline. Keep a spreadsheet of contacts, last contact date, and their personal interests.`,
    daily_routine: `🌅 **Morning:**\n- 15 mins: Engage meaningfully with 3-5 high-value posts on LinkedIn.\n- Send 2 highly personalized outbound connection requests or emails.\n\n🤝 **Daytime:**\n- Have at least one 15-minute "virtual coffee" or informational interview per week.\n\n✉️ **Evening:**\n- Follow up instantly. If you met someone today, send a customized note thanking them for their time before you sleep.`,
    short_term_goals: [
      'Rewrite your LinkedIn headline and summary to be strictly value-driven',
      'Reach out to 5 alumni from your college who work at your target companies',
      'Build a simple CRM (Excel/Notion) containing 50 specific individuals you want to know',
      'Attend 2 highly relevant industry conferences or premium webinars this quarter',
      'Secure a warm introduction to someone two levels senior to you'
    ],
    backup_options: [
      'B2B Enterprise Sales or Business Development Executive',
      'Public Relations (PR) or Corporate Comms Specialist',
      'Executive Search / Headhunting Consultant',
      'Client Success Manager for high-ticket accounts',
      'Partnerships or Alliances Director'
    ],
  };
}

function generateManpowerRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: 'Efficient Workforce & Operations Management',
    exact_role: 'Operations & Manpower Director',
    required_skills: [
      'Large-scale team coordination and shift management',
      'Ruthless overhead cost control and budget optimization',
      'Deep understanding of labor laws and union compliance',
      'Data-driven productivity tracking and KPI analysis',
      'Crisis management and rapid logistical redeployment',
      'Ability to motivate blue-collar or frontline workforces'
    ],
    education_training: `🔹 **Fundamentals:** Master the legal side. Understand localized labor laws, wage acts, and OSHA/safety compliance deeply.\n🔹 **Analytics:** Learn how to build capacity models in Excel/SQL. Know exactly how many people are needed for X volume of work.\n🔹 **Systems:** Master ERP (Enterprise Resource Planning) and HRMS tools like SAP, Workday, or Oracle.\n🔹 **Leadership:** Spend time on the shop floor. You cannot manage frontline workers purely from an air-conditioned office.`,
    daily_routine: `🌅 **Morning (Daily Standup):**\n- 30 mins: Review absentee rates, safety incidents, and productivity metrics from the previous shift.\n- 15 mins: Toolbox talk / briefing with floor supervisors.\n\n🏭 **Daytime (Floor & Systems):**\n- 2 hours: Gemba walk (walk the actual operational floor to spot inefficiencies).\n- 2 hours: Headcount planning, roster making, and payroll compliance checks.\n\n📊 **Evening (Reporting):**\n- Analyze labor cost vs. output ratio. Adjust tomorrow\'s staffing plan accordingly.`,
    short_term_goals: [
      'Implement a straightforward digital attendance and leave-tracking system',
      'Reduce unexplained absenteeism by 10% within the next quarter',
      'Conduct a thorough safety compliance audit of the entire facility',
      'Create standard operating procedures (SOPs) for the 3 most common tasks',
      'Identify and remove one massive bottleneck in the daily worker routine'
    ],
    backup_options: [
      'Supply Chain & Logistics Manager',
      'Factory/Plant Manager or Facility Head',
      'Industrial Relations (IR) Specialist',
      'Lean Six Sigma Consultant',
      'Human Resources Director (Operations focused)'
    ],
  };
}

function generateLadiesCareRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: "Holistic Women's Well-Being & Empowerment",
    exact_role: 'Empowered Lifestyle Architect',
    required_skills: [
      'Comprehensive women\'s health and hormonal awareness',
      'Robust financial literacy and independent wealth building',
      'Emotional intelligence and stress/anxiety management',
      'Personal boundary setting and assertive communication',
      'Self-defense and situational awareness basics',
      'Time-blocking for intense self-care amid responsibilities'
    ],
    education_training: `🔹 **Health:** Understand your exact biological cycles. Learn the difference between hormonal and physical wellness.\n🔹 **Wealth:** Read "Rich Dad Poor Dad" or "Psychology of Money". Open an independent investment account (Mutual Funds/SIPs) immediately.\n🔹 **Mentality:** Master the art of saying "No" without guilt. Read "Set Boundaries, Find Peace".\n🔹 **Safety:** Enroll in a foundational Krav Maga or practical self-defense seminar.`,
    daily_routine: `🌅 **Morning (Sanctuary Time):**\n- 30 mins: Wake up before the house. Do not check your phone. Hydrate, meditate, or stretch.\n- 15 mins: Review financial goals or read empowering literature.\n\n🛡️ **Daytime (Assertive Execution):**\n- Execute professional or personal tasks while fiercely protecting your energy boundaries.\n- Eat nutrient-dense, hormone-balancing meals.\n\n🌙 **Evening (Unplugging):**\n- 30 mins: Light physical activity (walking/yoga) to release cortisol.\n- Implement a strict digital curfew 1 hour before bed for mental peace.`,
    short_term_goals: [
      'Schedule and complete a comprehensive full-body and gynecological checkup',
      'Start a SIP (Systematic Investment Plan) of even a micro-amount in your own name',
      'Practice saying "No" to one non-essential obligation this week without apologizing',
      'Build a customized 15-minute daily self-care routine that is non-negotiable',
      'Curate a supportive network of 3 high-value, ambitious women'
    ],
    backup_options: [
      'Certified Wellness or Life Coach for Women',
      'Financial Advisor specializing in female independence',
      'Women\'s Health Advocate or NGO Leader',
      'Community Builder focusing on empowerment',
      'Corporate Diversity & Inclusion (D&I) Leader'
    ],
  };
}

function generateTipsRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: 'Ultimate Life Optimization & Efficiency',
    exact_role: 'Lifestyle Hacker & Optimizer',
    required_skills: [
      'Ruthless elimination of micro-frictions in daily life',
      'Financial automation and minimalist budgeting',
      'Energy management (tracking circadian rhythms)',
      'Digital minimalism and attention-span protection',
      'Meal prepping and household task automation',
      'Agile problem solving for everyday inconveniences'
    ],
    education_training: `🔹 **Audit:** Track exactly where your money, time, and energy go for 7 days. Identify the "leaks".\n🔹 **Automation:** Set up auto-pay for all bills. Set up auto-transfers to investments on payday.\n🔹 **Digital Diet:** Delete every app that you haven\'t used in 30 days. Turn off all non-human notifications.\n🔹 **Batching:** Never do a chore once if it can be batched. Cook twice a week, do laundry once.`,
    daily_routine: `🌅 **Morning (Frictionless Start):**\n- Wake up to clothes laid out the night before. Zero decision fatigue.\n- Follow an identical, optimized morning routine every single weekday.\n\n⚡ **Daytime (Deep Work):**\n- Phone in grayscale mode or completely out of sight.\n- Utilize the 2-Minute Rule (If a task takes less than 2 minutes, do it immediately).\n\n🧹 **Evening (Reset):**\n- 15 mins: The "Closing Duty" - reset the kitchen and living space to baseline.\n- Plan the 3 critical tasks for tomorrow so you wake up with immediate purpose.`,
    short_term_goals: [
      'Automate 100% of your savings and fixed bill payments within 48 hours',
      'Implement a strict Sunday meal-prep routine to eliminate weekday cooking stress',
      'Unsubscribe from all promotional emails and mute useless WhatsApp groups',
      'Establish a "closing duty" routine for your workspace and home',
      'Identify the top 3 purchases draining your budget and eliminate two of them'
    ],
    backup_options: [
      'Professional Organizer or KonMari Consultant',
      'Productivity Coach helping executives reclaim time',
      'Lifestyle Blogger focusing on minimalism and life hacks',
      'Efficiency Consultant for small businesses',
      'Operations specialist focusing on process automation'
    ],
  };
}

function generateBloodRoadmap(dreamName: string, responses: Record<string, string>) {
  return {
    confirmed_dream: 'Maximum Impact Blood Donation Advocate',
    exact_role: 'Life-Saving Network Architect',
    required_skills: [
      'Deep understanding of blood groups, plasma, and donation safety',
      'Community organizing, mobilization, and mass communication',
      'Crisis management and rapid emergency response networking',
      'Event management and logistical coordination (for donation camps)',
      'Empathy and the ability to persuade hesitant donors',
      'Record-keeping and database management'
    ],
    education_training: `🔹 **Knowledge Base:** Learn exactly who can donate to whom, hemoglobin requirements, and plasma specifics.\n🔹 **Networking:** Build relationships with local blood banks, hospital emergency wards, and Red Cross equivalents.\n🔹 **Database:** Create a secure, localized WhatsApp group or Notion database categorized by blood group and location.\n🔹 **Campaigning:** Learn how to run effective social media awareness campaigns to debunk donation myths.`,
    daily_routine: `🌅 **Morning:**\n- Monitor local emergency SOS messages or requests on social networks.\n- Maintain your own physical health (iron-rich diet) to remain an eligible donor.\n\n📞 **Daytime (Networking):**\n- Verify emergency requests. Filter out fake or old forwards.\n- Connect verified patients with the correct matched donors from your database.\n\n📅 **Evening (Planning):**\n- Follow up on successful donations. Thank the donors.\n- Work on organizing the next macro-level community donation camp.`,
    short_term_goals: [
      'Build a verified local database of at least 100 willing donors categorized by blood type',
      'Personally donate blood (if medically eligible) and document the safe process online',
      'Organize one small-scale local blood donation camp in your society or college',
      'Debunk 3 major blood donation myths via social media infographics',
      'Establish a direct contact line with the directors of 3 local blood banks'
    ],
    backup_options: [
      'Healthcare NGO Director or Founder',
      'Medical Social Worker or Hospital PRO',
      'Public Health Awareness Campaign Manager',
      'Disaster Relief Coordinator',
      'Paramedical or Emergency Response Staff'
    ],
  };
}

function generateYogaRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Yoga Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Yoga`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Yoga. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Yoga.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateLifeSkillsRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Life Skills Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Life Skills`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Life Skills. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Life Skills.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateInsuranceRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Insurance Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Insurance`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Insurance. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Insurance.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateHRRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'H R Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in H R`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for H R. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in H R.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateConsultingRoadmap(
  dreamName: string,
  responses: Record<string, string> = {}
) {
  const specificInterest =
    responses.interest ||
    responses.goal ||
    responses.consulting_field ||
    'Consulting Specialist';

  const timeCommitment =
    responses.time_commitment ||
    responses.study_hours ||
    '2-3';

  const formatTitle = (str: string) =>
    str
      .replace(/_/g, ' ')
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

  const roleTitle = formatTitle(specificInterest);

  return {
    confirmed_dream: `Achieve Mastery in Consulting`,
    exact_role: `Professional ${roleTitle}`,

    required_skills: [
      'Deep domain expertise and industry-specific knowledge',
      'Advanced analytical and structured problem-solving ability',
      'High-impact communication and executive-level presentation skills',
      'Client acquisition and relationship management capability',
      'Strategic thinking with measurable ROI focus',
      'Negotiation and stakeholder influence skills',
      'Adaptability to changing business environments'
    ],

    education_training: `🔹 **Phase 1 – Foundation (0-6 Months):** Study core business frameworks (SWOT, Porter's 5 Forces, Value Chain). Complete at least one industry-recognized certification.\n\n🔹 **Phase 2 – Applied Strategy (6-12 Months):** Solve 20+ real case studies. Offer free advisory to small clients for experience.\n\n🔹 **Phase 3 – Monetization (12+ Months):** Define niche specialization, build authority on LinkedIn, secure recurring consulting contracts.\n\n🔹 **Continuous Growth:** Study global market trends and build proprietary consulting methodology.`,

    daily_routine: `🌅 **Morning:**\n- 60 mins: Strategic reading or case analysis\n\n⚡ **Work Block:**\n- ${timeCommitment} hours: Deep consulting work (analysis, proposal creation, client calls)\n\n🧠 **Evening:**\n- 30 mins: Industry research\n- Relationship follow-ups & networking`,

    short_term_goals: [
      'Complete one high-value certification',
      'Solve 25 structured business case studies',
      'Secure first 2 consulting clients',
      'Publish 10 thought-leadership posts',
      'Define clear niche positioning'
    ],

    backup_options: [
      'Corporate Strategy Role',
      'Business Analyst Position',
      'Freelance Advisory',
      'Industry Trainer',
      'Startup Co-founder'
    ]
  };
}

function generateHealthIssuesRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Health Issues Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Health Issues`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Health Issues. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Health Issues.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateHabitsRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Habits Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Habits`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Habits. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Habits.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateAgricultureRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Agriculture Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Agriculture`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Agriculture. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Agriculture.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}


function generateMusicTrainingRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Music Training Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Music Training`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Music Training. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Music Training.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateOpportunityRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Opportunity Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Opportunity`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Opportunity. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Opportunity.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateFilmRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Film Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Film`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Film. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Film.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateSkillTrainingRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Skill Training Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Skill Training`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Skill Training. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Skill Training.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}
function generateIrrigationRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Irrigation Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Irrigation`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Irrigation. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Irrigation.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}



function generateHorticultureRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Horticulture Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Horticulture`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Horticulture. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Horticulture.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateDesignRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Design Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Design`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Design. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Design.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generatePersonalDevelopmentRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Personal Development Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Personal Development`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Personal Development. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Personal Development.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateStylingRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Styling Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Styling`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Styling. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Styling.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateSafetyRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Safety Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Safety`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Safety. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Safety.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateFoodNutritionRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Food Nutrition Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Food Nutrition`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Food Nutrition. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Food Nutrition.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateDriverRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Driver Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Driver`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Driver. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Driver.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateAmbulanceRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Ambulance Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Ambulance`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Ambulance. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Ambulance.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

function generateFireServicesRoadmap(dreamName: string, responses: Record<string, string> = {}) {
  const specificInterest = responses.interest || responses.goal || 'Fire Services Specialist';
  const timeCommitment = responses.time_commitment || '2-3';
  
  const formatTitle = (str: string) => str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    confirmed_dream: `Achieve Mastery in Fire Services`,
    exact_role: `Professional ${formatTitle(specificInterest)}`,
    required_skills: [
      'In-depth foundational knowledge and theoretical understanding',
      'Consistent daily practice and practical application',
      'Strong problem-solving and critical thinking within the domain',
      'Effective communication and networking skills',
      'Adaptability to new trends, tools, and methodologies',
      'Attention to detail and quality execution'
    ],
    education_training: `🔹 **Phase 1 (Immersion):** Consume the foundational texts, courses, or certifications required for Fire Services. Build a solid theoretical base.\n🔹 **Phase 2 (Mentorship):** Find someone who has achieved what you want in this field. Offer value in exchange for guidance.\n🔹 **Phase 3 (Practical Application):** Theory without execution is useless. Start a project, take on clients, or practice the skill in the real world.\n🔹 **Phase 4 (Specialization):** Once the foundation is laid, niche down into a specific high-value sub-category.`,
    daily_routine: `🌅 **Morning (Learning):**\n- 45 mins: Uninterrupted study of new concepts or techniques in Fire Services.\n\n⚡ **Daytime (Execution):**\n- Apply the skills. Work on actual projects, practice routines, or shadow professionals.\n\n🧠 **Evening (Review):**\n- ${timeCommitment} hours: Deep, focused work on your primary goal.\n- 30 mins: Review mistakes. What could have been done better today?`,
    short_term_goals: [
      'Complete one highly regarded introductory course or certification',
      'Dedicate a minimum of 14 consecutive days to practicing the core skill',
      'Connect with 3 industry professionals or peers on LinkedIn/Community groups',
      'Create one tangible piece of work, project, or portfolio item',
      'Identify the biggest personal bottleneck and create a plan to overcome it'
    ],
    backup_options: [
      'Consulting or advising others based on your acquired knowledge',
      'Teaching or creating educational content in this specific niche',
      'Applying the skill to a related, secondary industry',
      'Taking a project management role overseeing practitioners of this skill',
      'Freelance contracting on specialized tasks'
    ],
  };
}

