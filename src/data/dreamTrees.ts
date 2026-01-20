export interface QuestionOption {
  value: string;
  label: string;
  nextQuestion?: string;
}

export interface Question {
  key: string;
  text: string;
  type: 'single' | 'multiple' | 'text' | 'number';
  options?: QuestionOption[];
  nextQuestion?: string;
  validation?: {
    required?: boolean;
    min?: number;
    max?: number;
  };
}

export interface DreamCategory {
  key: string;
  name: string;
  icon: string;
  description: string;
  questions: Question[];
}

export const dreamCategories: DreamCategory[] = [

  /*
┌─────────────────────────┐
│        Education      │
└─────────────────────────┘
*/
{
  key: 'emergency_services',
  name: 'Emergency Services & Helplines',
  icon: 'PhoneCall',
  description: 'Emergency help and helpline numbers across India',
  questions: [

    /* ======================
       1️⃣ EMERGENCY TYPE
    ====================== */
    {
      key: 'emergency_type',
      text: 'What kind of emergency help do you need?',
      type: 'single',
      options: [
        { value: 'police', label: 'Police Emergency', nextQuestion: 'police_numbers' },
        { value: 'medical', label: 'Medical / Ambulance', nextQuestion: 'medical_numbers' },
        { value: 'fire', label: 'Fire Emergency', nextQuestion: 'fire_numbers' },
        { value: 'women', label: 'Women Safety', nextQuestion: 'women_numbers' },
        { value: 'child', label: 'Child Safety', nextQuestion: 'child_numbers' },
        { value: 'mental', label: 'Mental Health Support', nextQuestion: 'mental_numbers' },
        { value: 'disaster', label: 'Disaster Management', nextQuestion: 'disaster_numbers' },
      ],
    },

    /* ======================
       POLICE
    ====================== */
    {
      key: 'police_numbers',
      text: 'Police Emergency Numbers (All India)',
      type: 'single',
      options: [
        { value: '112', label: '📞 112 – National Emergency Number' },
        { value: '100', label: '📞 100 – Police Control Room' },
      ],
    },

    /* ======================
       MEDICAL
    ====================== */
    {
      key: 'medical_numbers',
      text: 'Medical / Ambulance Emergency Numbers',
      type: 'single',
      options: [
        { value: '108', label: '🚑 108 – Ambulance (All India)' },
        { value: '112', label: '📞 112 – Emergency Support' },
      ],
    },

    /* ======================
       FIRE
    ====================== */
    {
      key: 'fire_numbers',
      text: 'Fire Emergency Numbers',
      type: 'single',
      options: [
        { value: '101', label: '🔥 101 – Fire Services' },
        { value: '112', label: '📞 112 – Emergency Support' },
      ],
    },

    /* ======================
       WOMEN SAFETY
    ====================== */
    {
      key: 'women_numbers',
      text: 'Women Safety Helplines',
      type: 'single',
      options: [
        { value: '181', label: '👩 181 – Women Helpline' },
        { value: '1091', label: '🚔 1091 – Women Police' },
        { value: '112', label: '📞 112 – Emergency' },
      ],
    },

    /* ======================
       CHILD SAFETY
    ====================== */
    {
      key: 'child_numbers',
      text: 'Child Safety & Protection',
      type: 'single',
      options: [
        { value: '1098', label: '🧒 1098 – Child Helpline' },
        { value: '112', label: '📞 112 – Emergency' },
      ],
    },

    /* ======================
       MENTAL HEALTH
    ====================== */
    {
      key: 'mental_numbers',
      text: 'Mental Health Support',
      type: 'single',
      options: [
        { value: 'tele_manas', label: '🧠 Tele MANAS – 14416 / 1-800-891-4416' },
      ],
    },

    /* ======================
       DISASTER
    ====================== */
    {
      key: 'disaster_numbers',
      text: 'Disaster Management & Relief',
      type: 'single',
      options: [
        { value: 'ndma', label: '🌊 NDMA – 1078' },
        { value: '112', label: '📞 112 – Emergency Support' },
      ],
    },

  ],
},


{
  key: 'education',
  name: 'Education',
  icon: 'GraduationCap',
  description: 'Academic and higher education career planning',
  questions: [

    /* -------------------------------------------------- */
    /* LEVEL SELECTION */
    /* -------------------------------------------------- */
    {
      key: 'education_level',
      text: 'Which level of education are you planning for?',
      type: 'single',
      options: [
        { value: 'school', label: 'School (8–12)', nextQuestion: 'school_stream' },
        { value: 'undergraduate', label: 'Undergraduate (Degree / Engineering)', nextQuestion: 'ug_type' },
        { value: 'postgraduate', label: 'Postgraduate (Masters / MBA)', nextQuestion: 'pg_goal' },
        { value: 'research', label: 'Research / PhD', nextQuestion: 'research_interest' },
      ],
    },

    /* ================================================== */
    /* SCHOOL */
    /* ================================================== */
    {
      key: 'school_stream',
      text: 'Which stream are you interested in?',
      type: 'single',
      options: [
        { value: 'science_pcm', label: 'Science (PCM)', nextQuestion: 'school_goal' },
        { value: 'science_pcb', label: 'Science (PCB)', nextQuestion: 'school_goal' },
        { value: 'commerce', label: 'Commerce', nextQuestion: 'school_goal' },
        { value: 'arts', label: 'Arts / Humanities', nextQuestion: 'school_goal' },
      ],
    },
    {
      key: 'school_goal',
      text: 'What is your main goal after school?',
      type: 'single',
      options: [
        { value: 'competitive_exams', label: 'Competitive Exams (JEE / NEET / CA / UPSC)' },
        { value: 'college_abroad', label: 'Study Abroad' },
        { value: 'job_or_skill', label: 'Skill-based Job' },
      ],
    },

    /* ================================================== */
    /* UNDERGRADUATE */
    /* ================================================== */
    {
      key: 'ug_type',
      text: 'Which undergraduate path are you considering?',
      type: 'single',
      options: [
        { value: 'engineering', label: 'Engineering (B.Tech / BE)', nextQuestion: 'engineering_branch' },
        { value: 'degree', label: 'Degree (BSc / BCom / BA)', nextQuestion: 'degree_stream' },
        { value: 'professional', label: 'Professional Courses', nextQuestion: 'professional_course' },
      ],
    },

    /* ---------- ENGINEERING ---------- */
    {
      key: 'engineering_branch',
      text: 'Which engineering branch are you interested in?',
      type: 'single',
      options: [
        { value: 'cse', label: 'Computer Science (CSE)', nextQuestion: 'cse_specialization' },
        { value: 'ai_ml', label: 'AI & Machine Learning', nextQuestion: 'ai_goal' },
        { value: 'data_science', label: 'Data Science', nextQuestion: 'data_goal' },
        { value: 'cyber_security', label: 'Cyber Security', nextQuestion: 'cyber_goal' },
        { value: 'ece', label: 'Electronics & Communication (ECE)', nextQuestion: 'ece_interest' },
        { value: 'mechanical', label: 'Mechanical Engineering', nextQuestion: 'mechanical_interest' },
        { value: 'civil', label: 'Civil Engineering', nextQuestion: 'civil_interest' },
        { value: 'biotech', label: 'Biotechnology', nextQuestion: 'biotech_goal' },
      ],
    },

    /* CSE */
    {
      key: 'cse_specialization',
      text: 'Which CSE specialization excites you most?',
      type: 'single',
      options: [
        { value: 'full_stack', label: 'Full Stack Development' },
        { value: 'software', label: 'Software Engineering' },
        { value: 'cloud', label: 'Cloud & DevOps' },
        { value: 'blockchain', label: 'Blockchain & Web3' },
        { value: 'game_dev', label: 'Game Development' },
      ],
    },

    /* AI / ML */
    {
      key: 'ai_goal',
      text: 'What do you want to do with AI?',
      type: 'single',
      options: [
        { value: 'research', label: 'AI Research' },
        { value: 'industry', label: 'Industry Jobs (ML Engineer)' },
        { value: 'startups', label: 'AI Startups' },
      ],
    },

    /* DATA */
    {
      key: 'data_goal',
      text: 'Which data role do you prefer?',
      type: 'single',
      options: [
        { value: 'data_analyst', label: 'Data Analyst' },
        { value: 'data_scientist', label: 'Data Scientist' },
        { value: 'business_analytics', label: 'Business Analytics' },
      ],
    },

    /* ---------- DEGREE ---------- */
    {
      key: 'degree_stream',
      text: 'Which degree stream are you considering?',
      type: 'single',
      options: [
        { value: 'bsc', label: 'B.Sc', nextQuestion: 'bsc_subject' },
        { value: 'bcom', label: 'B.Com', nextQuestion: 'bcom_specialization' },
        { value: 'ba', label: 'B.A', nextQuestion: 'ba_subject' },
      ],
    },

    {
      key: 'bsc_subject',
      text: 'Which B.Sc subject?',
      type: 'single',
      options: [
        { value: 'computer_science', label: 'Computer Science' },
        { value: 'maths', label: 'Mathematics' },
        { value: 'physics', label: 'Physics' },
        { value: 'statistics', label: 'Statistics' },
        { value: 'biotech', label: 'Biotechnology' },
      ],
    },

    {
      key: 'bcom_specialization',
      text: 'Which B.Com specialization?',
      type: 'single',
      options: [
        { value: 'general', label: 'General Commerce' },
        { value: 'finance', label: 'Finance' },
        { value: 'accounting', label: 'Accounting' },
        { value: 'business_analytics', label: 'Business Analytics' },
      ],
    },

    {
      key: 'ba_subject',
      text: 'Which BA subject?',
      type: 'single',
      options: [
        { value: 'economics', label: 'Economics' },
        { value: 'psychology', label: 'Psychology' },
        { value: 'political_science', label: 'Political Science' },
        { value: 'sociology', label: 'Sociology' },
      ],
    },

    /* ---------- PROFESSIONAL ---------- */
    {
      key: 'professional_course',
      text: 'Which professional course are you interested in?',
      type: 'single',
      options: [
        { value: 'ca', label: 'CA' },
        { value: 'cs', label: 'CS' },
        { value: 'cma', label: 'CMA' },
        { value: 'law', label: 'Law (LLB)' },
        { value: 'design', label: 'Design (UI/UX, Fashion)' },
      ],
    },

    /* ================================================== */
    /* COMMON CLARITY QUESTIONS */
    /* ================================================== */
    {
      key: 'study_hours',
      text: 'How many hours per day can you realistically study?',
      type: 'number',
      validation: { min: 1, max: 16 },
      nextQuestion: 'financial_constraint',
    },

    {
      key: 'financial_constraint',
      text: 'Do you have financial constraints?',
      type: 'single',
      options: [
        { value: 'no', label: 'No constraints' },
        { value: 'moderate', label: 'Need affordable options' },
        { value: 'high', label: 'Need scholarships / free education' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│        Sports Dream   │
└─────────────────────────┘
*/

 {
  key: 'sports',
  name: 'Sports',
  icon: 'Trophy',
  description: 'Professional and competitive sports career',
  questions: [

    // =========================
    // 1️⃣ CATEGORY
    // =========================
    {
      key: 'sport_category',
      text: 'What type of sport are you interested in?',
      type: 'single',
      options: [
        { value: 'outdoor', label: 'Outdoor Sports', nextQuestion: 'outdoor_sport' },
        { value: 'indoor', label: 'Indoor Sports', nextQuestion: 'indoor_sport' },
      ],
    },

    // =========================
    // 2️⃣ OUTDOOR SPORTS
    // =========================
    {
      key: 'outdoor_sport',
      text: 'Which outdoor sport do you want to pursue?',
      type: 'single',
      options: [
        { value: 'cricket', label: 'Cricket', nextQuestion: 'cricket_role' },
        { value: 'football', label: 'Football', nextQuestion: 'football_position' },
        { value: 'athletics', label: 'Athletics', nextQuestion: 'athletics_event' },
        { value: 'kabaddi', label: 'Kabaddi', nextQuestion: 'kabaddi_role' },
        { value: 'hockey', label: 'Hockey', nextQuestion: 'hockey_position' },
        { value: 'basketball', label: 'Basketball', nextQuestion: 'basketball_position' },
        { value: 'volleyball', label: 'Volleyball', nextQuestion: 'volleyball_role' },
        { value: 'tennis', label: 'Tennis', nextQuestion: 'tennis_style' },
        { value: 'baseball', label: 'Baseball', nextQuestion: 'baseball_role' },
        { value: 'handball', label: 'Handball', nextQuestion: 'handball_position' },
        { value: 'rugby', label: 'Rugby', nextQuestion: 'rugby_position' },
        { value: 'archery', label: 'Archery', nextQuestion: 'archery_type' },
        { value: 'cycling', label: 'Cycling', nextQuestion: 'cycling_discipline' },
        { value: 'swimming', label: 'Swimming', nextQuestion: 'swimming_style' },
      ],
    },
    {
  key: 'tennis_style',
  text: 'Tennis playing style?',
  type: 'single',
  options: [
    { value: 'singles', label: 'Singles', nextQuestion: 'tennis_surface' },
    { value: 'doubles', label: 'Doubles', nextQuestion: 'tennis_surface' },
  ],
},
{
  key: 'tennis_surface',
  text: 'Preferred court surface?',
  type: 'single',
  options: [
    { value: 'clay', label: 'Clay', nextQuestion: 'competition_level' },
    { value: 'hard', label: 'Hard Court', nextQuestion: 'competition_level' },
    { value: 'grass', label: 'Grass', nextQuestion: 'competition_level' },
  ],
},
{
  key: 'baseball_role',
  text: 'Your role in baseball?',
  type: 'single',
  options: [
    { value: 'batter', label: 'Batter', nextQuestion: 'baseball_hand' },
    { value: 'pitcher', label: 'Pitcher', nextQuestion: 'baseball_hand' },
    { value: 'fielder', label: 'Fielder', nextQuestion: 'baseball_hand' },
  ],
},
{
  key: 'baseball_hand',
  text: 'Throwing / batting hand?',
  type: 'single',
  options: [
    { value: 'right', label: 'Right-handed', nextQuestion: 'competition_level' },
    { value: 'left', label: 'Left-handed', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'handball_position',
  text: 'Handball position?',
  type: 'single',
  options: [
    { value: 'wing', label: 'Wing', nextQuestion: 'handball_strength' },
    { value: 'backcourt', label: 'Backcourt', nextQuestion: 'handball_strength' },
    { value: 'pivot', label: 'Pivot', nextQuestion: 'handball_strength' },
    { value: 'goalkeeper', label: 'Goalkeeper', nextQuestion: 'handball_strength' },
  ],
},
{
  key: 'handball_strength',
  text: 'Your strongest skill?',
  type: 'single',
  options: [
    { value: 'throwing', label: 'Throwing Power', nextQuestion: 'competition_level' },
    { value: 'agility', label: 'Agility', nextQuestion: 'competition_level' },
    { value: 'defense', label: 'Defense', nextQuestion: 'competition_level' },
  ],
},
{
  key: 'rugby_position',
  text: 'Rugby position?',
  type: 'single',
  options: [
    { value: 'forward', label: 'Forward', nextQuestion: 'rugby_strength' },
    { value: 'back', label: 'Back', nextQuestion: 'rugby_strength' },
  ],
},
{
  key: 'rugby_strength',
  text: 'Your strongest trait?',
  type: 'single',
  options: [
    { value: 'strength', label: 'Physical Strength', nextQuestion: 'competition_level' },
    { value: 'speed', label: 'Speed', nextQuestion: 'competition_level' },
    { value: 'tackling', label: 'Tackling', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'archery_type',
  text: 'Archery category?',
  type: 'single',
  options: [
    { value: 'recurve', label: 'Recurve', nextQuestion: 'archery_distance' },
    { value: 'compound', label: 'Compound', nextQuestion: 'archery_distance' },
    { value: 'traditional', label: 'Traditional', nextQuestion: 'archery_distance' },
  ],
},
{
  key: 'archery_distance',
  text: 'Preferred shooting distance?',
  type: 'single',
  options: [
    { value: 'short', label: 'Short Range', nextQuestion: 'competition_level' },
    { value: 'long', label: 'Long Range', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'cycling_discipline',
  text: 'Cycling discipline?',
  type: 'single',
  options: [
    { value: 'road', label: 'Road Cycling', nextQuestion: 'cycling_strength' },
    { value: 'track', label: 'Track Cycling', nextQuestion: 'cycling_strength' },
    { value: 'mountain', label: 'Mountain Biking', nextQuestion: 'cycling_strength' },
  ],
},
{
  key: 'cycling_strength',
  text: 'Your cycling strength?',
  type: 'single',
  options: [
    { value: 'endurance', label: 'Endurance', nextQuestion: 'competition_level' },
    { value: 'sprint', label: 'Sprint Power', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'swimming_style',
  text: 'Swimming style?',
  type: 'single',
  options: [
    { value: 'freestyle', label: 'Freestyle', nextQuestion: 'swimming_distance' },
    { value: 'butterfly', label: 'Butterfly', nextQuestion: 'swimming_distance' },
    { value: 'backstroke', label: 'Backstroke', nextQuestion: 'swimming_distance' },
    { value: 'breaststroke', label: 'Breaststroke', nextQuestion: 'swimming_distance' },
  ],
},
{
  key: 'swimming_distance',
  text: 'Preferred distance?',
  type: 'single',
  options: [
    { value: 'short', label: 'Short Distance', nextQuestion: 'competition_level' },
    { value: 'long', label: 'Long Distance', nextQuestion: 'competition_level' },
  ],
},


    
    

    // =========================
    // 3️⃣ INDOOR SPORTS
    // =========================
    {
      key: 'indoor_sport',
      text: 'Which indoor sport do you prefer?',
      type: 'single',
      options: [
        { value: 'badminton', label: 'Badminton', nextQuestion: 'badminton_format' },
        { value: 'table_tennis', label: 'Table Tennis', nextQuestion: 'tt_style' },
        { value: 'chess', label: 'Chess', nextQuestion: 'chess_playing_type' },
        { value: 'boxing', label: 'Boxing', nextQuestion: 'boxing_weight' },
        { value: 'wrestling', label: 'Wrestling', nextQuestion: 'wrestling_style' },
        { value: 'karate', label: 'Karate', nextQuestion: 'karate_belt' },
        // ADD inside indoor_sport options (keep existing ones)
        { value: 'gymnastics', label: 'Gymnastics', nextQuestion: 'gymnastics_event' },
        { value: 'weightlifting', label: 'Weightlifting', nextQuestion: 'weightlifting_category' },
        { value: 'powerlifting', label: 'Powerlifting', nextQuestion: 'powerlifting_lift' },
        { value: 'snooker', label: 'Snooker / Billiards', nextQuestion: 'snooker_format' },
        { value: 'esports', label: 'Esports', nextQuestion: 'esports_game' },
        { value: 'yoga', label: 'Yoga (Competitive)', nextQuestion: 'yoga_style' },

      ],
    },

    // ==================================================
    // 🏏 CRICKET
    // ==================================================
    {
      key: 'cricket_role',
      text: 'Your role in cricket?',
      type: 'single',
      options: [
        { value: 'batsman', label: 'Batsman', nextQuestion: 'cricket_batting_style' },
        { value: 'bowler', label: 'Bowler', nextQuestion: 'cricket_bowling_type' },
        { value: 'allrounder', label: 'All-rounder', nextQuestion: 'cricket_batting_style' },
        { value: 'wicketkeeper', label: 'Wicket-Keeper', nextQuestion: 'cricket_batting_style' },
      ],
    },
    {
      key: 'cricket_batting_style',
      text: 'Batting style?',
      type: 'single',
      options: [
        { value: 'right', label: 'Right-handed', nextQuestion: 'cricket_format' },
        { value: 'left', label: 'Left-handed', nextQuestion: 'cricket_format' },
      ],
    },
    {
      key: 'cricket_bowling_type',
      text: 'Bowling type?',
      type: 'single',
      options: [
        { value: 'fast', label: 'Fast', nextQuestion: 'cricket_format' },
        { value: 'spin', label: 'Spin', nextQuestion: 'cricket_format' },
      ],
    },
    {
      key: 'cricket_format',
      text: 'Preferred cricket format?',
      type: 'single',
      options: [
        { value: 't20', label: 'T20', nextQuestion: 'competition_level' },
        { value: 'odi', label: 'ODI', nextQuestion: 'competition_level' },
        { value: 'test', label: 'Test', nextQuestion: 'competition_level' },
      ],
    },

    // ==================================================
    // ⚽ FOOTBALL
    // ==================================================
    {
      key: 'football_position',
      text: 'Football position?',
      type: 'single',
      options: [
        { value: 'goalkeeper', label: 'Goalkeeper', nextQuestion: 'football_strength' },
        { value: 'defender', label: 'Defender', nextQuestion: 'football_strength' },
        { value: 'midfielder', label: 'Midfielder', nextQuestion: 'football_strength' },
        { value: 'forward', label: 'Forward', nextQuestion: 'football_strength' },
      ],
    },
    {
      key: 'football_strength',
      text: 'Your strongest skill?',
      type: 'single',
      options: [
        { value: 'speed', label: 'Speed', nextQuestion: 'football_foot' },
        { value: 'passing', label: 'Passing', nextQuestion: 'football_foot' },
        { value: 'shooting', label: 'Shooting', nextQuestion: 'football_foot' },
      ],
    },
    {
      key: 'football_foot',
      text: 'Preferred foot?',
      type: 'single',
      options: [
        { value: 'right', label: 'Right', nextQuestion: 'competition_level' },
        { value: 'left', label: 'Left', nextQuestion: 'competition_level' },
        { value: 'both', label: 'Both', nextQuestion: 'competition_level' },
      ],
    },

    // ==================================================
    // 🏃 ATHLETICS
    // ==================================================
    {
      key: 'athletics_event',
      text: 'Athletics specialization?',
      type: 'single',
      options: [
        { value: 'sprint', label: 'Sprints', nextQuestion: 'athletics_strength' },
        { value: 'distance', label: 'Long Distance', nextQuestion: 'athletics_strength' },
        { value: 'jump', label: 'Jumping', nextQuestion: 'athletics_strength' },
        { value: 'throw', label: 'Throwing', nextQuestion: 'athletics_strength' },
      ],
    },
    {
      key: 'athletics_strength',
      text: 'Your strongest area?',
      type: 'single',
      options: [
        { value: 'speed', label: 'Speed', nextQuestion: 'competition_level' },
        { value: 'stamina', label: 'Stamina', nextQuestion: 'competition_level' },
        { value: 'power', label: 'Power', nextQuestion: 'competition_level' },
      ],
    },

    // ==================================================
    // 🤼 KABADDI
    // ==================================================
    {
      key: 'kabaddi_role',
      text: 'Kabaddi role?',
      type: 'single',
      options: [
        { value: 'raider', label: 'Raider', nextQuestion: 'kabaddi_strength' },
        { value: 'defender', label: 'Defender', nextQuestion: 'kabaddi_strength' },
        { value: 'allrounder', label: 'All-rounder', nextQuestion: 'kabaddi_strength' },
      ],
    },
    {
      key: 'kabaddi_strength',
      text: 'Your strength?',
      type: 'single',
      options: [
        { value: 'agility', label: 'Agility', nextQuestion: 'competition_level' },
        { value: 'strength', label: 'Strength', nextQuestion: 'competition_level' },
        { value: 'stamina', label: 'Stamina', nextQuestion: 'competition_level' },
      ],
    },

    // ==================================================
    // 🏑 HOCKEY
    // ==================================================
    {
      key: 'hockey_position',
      text: 'Hockey position?',
      type: 'single',
      options: [
        { value: 'forward', label: 'Forward', nextQuestion: 'hockey_skill' },
        { value: 'midfield', label: 'Midfield', nextQuestion: 'hockey_skill' },
        { value: 'defender', label: 'Defender', nextQuestion: 'hockey_skill' },
        { value: 'goalkeeper', label: 'Goalkeeper', nextQuestion: 'hockey_skill' },
      ],
    },
    {
      key: 'hockey_skill',
      text: 'Best hockey skill?',
      type: 'single',
      options: [
        { value: 'dribbling', label: 'Dribbling', nextQuestion: 'competition_level' },
        { value: 'passing', label: 'Passing', nextQuestion: 'competition_level' },
        { value: 'defense', label: 'Defense', nextQuestion: 'competition_level' },
      ],
    },

    // ==================================================
    // 🏸 BADMINTON
    // ==================================================
    {
      key: 'badminton_format',
      text: 'Badminton format?',
      type: 'single',
      options: [
        { value: 'singles', label: 'Singles', nextQuestion: 'badminton_strength' },
        { value: 'doubles', label: 'Doubles', nextQuestion: 'badminton_strength' },
      ],
    },
    {
      key: 'badminton_strength',
      text: 'Your strongest area?',
      type: 'single',
      options: [
        { value: 'smash', label: 'Smash', nextQuestion: 'competition_level' },
        { value: 'defense', label: 'Defense', nextQuestion: 'competition_level' },
        { value: 'footwork', label: 'Footwork', nextQuestion: 'competition_level' },
      ],
    },

    // ==================================================
    // 🏓 TABLE TENNIS
    // ==================================================
    {
      key: 'tt_style',
      text: 'Playing style?',
      type: 'single',
      options: [
        { value: 'attacking', label: 'Attacking', nextQuestion: 'tt_grip' },
        { value: 'defensive', label: 'Defensive', nextQuestion: 'tt_grip' },
      ],
    },
    {
      key: 'tt_grip',
      text: 'Grip type?',
      type: 'single',
      options: [
        { value: 'shakehand', label: 'Shakehand', nextQuestion: 'competition_level' },
        { value: 'penhold', label: 'Penhold', nextQuestion: 'competition_level' },
      ],
    },

    // ==================================================
    // ♟️ CHESS
    // ==================================================
    {
      key: 'chess_playing_type',
      text: 'Preferred format?',
      type: 'single',
      options: [
        { value: 'classical', label: 'Classical', nextQuestion: 'chess_strength' },
        { value: 'rapid', label: 'Rapid', nextQuestion: 'chess_strength' },
        { value: 'blitz', label: 'Blitz', nextQuestion: 'chess_strength' },
      ],
    },
    {
      key: 'chess_strength',
      text: 'Your strength?',
      type: 'single',
      options: [
        { value: 'opening', label: 'Openings', nextQuestion: 'competition_level' },
        { value: 'middlegame', label: 'Middlegame', nextQuestion: 'competition_level' },
        { value: 'endgame', label: 'Endgame', nextQuestion: 'competition_level' },
      ],
    },

    // ==================================================
    // 🎯 COMMON CAREER QUESTIONS
    // ==================================================
    {
      key: 'competition_level',
      text: 'Highest competition level?',
      type: 'single',
      options: [
        { value: 'school', label: 'School', nextQuestion: 'practice_hours' },
        { value: 'district', label: 'District', nextQuestion: 'practice_hours' },
        { value: 'state', label: 'State', nextQuestion: 'practice_hours' },
        { value: 'national', label: 'National', nextQuestion: 'practice_hours' },
        { value: 'none', label: 'None yet', nextQuestion: 'practice_hours' },
      ],
    },
    {
      key: 'practice_hours',
      text: 'Daily practice hours?',
      type: 'number',
      validation: { min: 1, max: 12 },
      nextQuestion: 'career_goal',
    },
    {
      key: 'career_goal',
      text: 'Your long-term sports goal?',
      type: 'single',
      options: [
        { value: 'professional', label: 'Professional Athlete' },
        { value: 'college', label: 'College Sports Quota' },
        { value: 'coach', label: 'Coach / Trainer' },
        { value: 'fitness', label: 'Fitness Career' },
      ],
    },
{
  key: 'gymnastics_event',
  text: 'Gymnastics specialization?',
  type: 'single',
  options: [
    { value: 'floor', label: 'Floor Exercise', nextQuestion: 'gymnastics_level' },
    { value: 'rings', label: 'Rings', nextQuestion: 'gymnastics_level' },
    { value: 'vault', label: 'Vault', nextQuestion: 'gymnastics_level' },
    { value: 'pommel', label: 'Pommel Horse', nextQuestion: 'gymnastics_level' },
    { value: 'bars', label: 'Parallel / Uneven Bars', nextQuestion: 'gymnastics_level' },
  ],
},
{
  key: 'gymnastics_level',
  text: 'Your gymnastics experience?',
  type: 'single',
  options: [
    { value: 'beginner', label: 'Beginner', nextQuestion: 'gymnastics_strength' },
    { value: 'intermediate', label: 'Intermediate', nextQuestion: 'gymnastics_strength' },
    { value: 'advanced', label: 'Advanced', nextQuestion: 'gymnastics_strength' },
  ],
},
{
  key: 'gymnastics_strength',
  text: 'Strongest area?',
  type: 'single',
  options: [
    { value: 'flexibility', label: 'Flexibility', nextQuestion: 'competition_level' },
    { value: 'balance', label: 'Balance', nextQuestion: 'competition_level' },
    { value: 'power', label: 'Power', nextQuestion: 'competition_level' },
  ],
},


{
  key: 'weightlifting_category',
  text: 'Weightlifting focus?',
  type: 'single',
  options: [
    { value: 'snatch', label: 'Snatch', nextQuestion: 'weightlifting_class' },
    { value: 'clean_jerk', label: 'Clean & Jerk', nextQuestion: 'weightlifting_class' },
  ],
},
{
  key: 'weightlifting_class',
  text: 'Your weight category?',
  type: 'single',
  options: [
    { value: 'light', label: 'Lightweight', nextQuestion: 'weightlifting_goal' },
    { value: 'middle', label: 'Middleweight', nextQuestion: 'weightlifting_goal' },
    { value: 'heavy', label: 'Heavyweight', nextQuestion: 'weightlifting_goal' },
  ],
},
{
  key: 'weightlifting_goal',
  text: 'Primary focus?',
  type: 'single',
  options: [
    { value: 'strength', label: 'Max Strength', nextQuestion: 'competition_level' },
    { value: 'technique', label: 'Technique Improvement', nextQuestion: 'competition_level' },
  ],
},


{
  key: 'powerlifting_lift',
  text: 'Strongest lift?',
  type: 'single',
  options: [
    { value: 'squat', label: 'Squat', nextQuestion: 'powerlifting_style' },
    { value: 'bench', label: 'Bench Press', nextQuestion: 'powerlifting_style' },
    { value: 'deadlift', label: 'Deadlift', nextQuestion: 'powerlifting_style' },
  ],
},
{
  key: 'powerlifting_style',
  text: 'Competition style?',
  type: 'single',
  options: [
    { value: 'raw', label: 'Raw', nextQuestion: 'powerlifting_goal' },
    { value: 'equipped', label: 'Equipped', nextQuestion: 'powerlifting_goal' },
  ],
},
{
  key: 'powerlifting_goal',
  text: 'Main objective?',
  type: 'single',
  options: [
    { value: 'competition', label: 'Competitive Meets', nextQuestion: 'competition_level' },
    { value: 'personal', label: 'Personal Records', nextQuestion: 'competition_level' },
  ],
},


{
  key: 'snooker_format',
  text: 'Preferred format?',
  type: 'single',
  options: [
    { value: 'snooker', label: 'Snooker', nextQuestion: 'snooker_skill' },
    { value: 'billiards', label: 'Billiards', nextQuestion: 'snooker_skill' },
    { value: 'pool', label: 'Pool', nextQuestion: 'snooker_skill' },
  ],
},
{
  key: 'snooker_skill',
  text: 'Best playing strength?',
  type: 'single',
  options: [
    { value: 'break_building', label: 'Break Building', nextQuestion: 'snooker_experience' },
    { value: 'safety', label: 'Safety Play', nextQuestion: 'snooker_experience' },
    { value: 'potting', label: 'Potting Accuracy', nextQuestion: 'snooker_experience' },
  ],
},
{
  key: 'snooker_experience',
  text: 'Years of experience?',
  type: 'single',
  options: [
    { value: 'beginner', label: '0–1 year', nextQuestion: 'competition_level' },
    { value: 'intermediate', label: '1–3 years', nextQuestion: 'competition_level' },
    { value: 'advanced', label: '3+ years', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'esports_game',
  text: 'Which esports genre?',
  type: 'single',
  options: [
    { value: 'fps', label: 'FPS (Valorant, CS)', nextQuestion: 'esports_role' },
    { value: 'moba', label: 'MOBA (Dota, LoL)', nextQuestion: 'esports_role' },
    { value: 'battle_royale', label: 'Battle Royale', nextQuestion: 'esports_role' },
  ],
},
{
  key: 'esports_role',
  text: 'Preferred role?',
  type: 'single',
  options: [
    { value: 'leader', label: 'In-game Leader', nextQuestion: 'esports_hours' },
    { value: 'fragger', label: 'Aggressive Player', nextQuestion: 'esports_hours' },
    { value: 'support', label: 'Support / Strategist', nextQuestion: 'esports_hours' },
  ],
},
{
  key: 'esports_hours',
  text: 'Daily practice hours?',
  type: 'single',
  options: [
    { value: '2_4', label: '2–4 hours', nextQuestion: 'competition_level' },
    { value: '5_8', label: '5–8 hours', nextQuestion: 'competition_level' },
    { value: '8_plus', label: '8+ hours', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'yoga_style',
  text: 'Yoga specialization?',
  type: 'single',
  options: [
    { value: 'asana', label: 'Asana Performance', nextQuestion: 'yoga_level' },
    { value: 'flexibility', label: 'Flexibility', nextQuestion: 'yoga_level' },
    { value: 'balance', label: 'Balance & Control', nextQuestion: 'yoga_level' },
  ],
},
{
  key: 'yoga_level',
  text: 'Your yoga experience?',
  type: 'single',
  options: [
    { value: 'beginner', label: 'Beginner', nextQuestion: 'yoga_goal' },
    { value: 'intermediate', label: 'Intermediate', nextQuestion: 'yoga_goal' },
    { value: 'advanced', label: 'Advanced', nextQuestion: 'yoga_goal' },
  ],
},
{
  key: 'yoga_goal',
  text: 'Yoga career goal?',
  type: 'single',
  options: [
    { value: 'competition', label: 'Competitive Yoga', nextQuestion: 'competition_level' },
    { value: 'instructor', label: 'Yoga Instructor', nextQuestion: 'competition_level' },
  ],
},


  ],
},

/*
┌─────────────────────────┐
│      Health Dream       │
└─────────────────────────┘
*/


  {
  key: 'health',
  name: 'Health',
  icon: 'Heart',
  description: 'Healthcare and wellness careers',
  questions: [

    // =========================
    // 1️⃣ HEALTH FIELD
    // =========================
    {
      key: 'health_field',
      text: 'Which area of healthcare interests you?',
      type: 'single',
      options: [
        { value: 'doctor', label: 'Doctor (MBBS/MD)', nextQuestion: 'medical_specialization' },
        { value: 'nursing', label: 'Nursing', nextQuestion: 'nursing_level' },
        { value: 'pharmacy', label: 'Pharmacy', nextQuestion: 'pharmacy_role' },
        { value: 'physiotherapy', label: 'Physiotherapy', nextQuestion: 'physio_focus' },
        { value: 'nutrition', label: 'Nutrition / Dietetics', nextQuestion: 'nutrition_focus' },
        { value: 'alternative', label: 'Alternative Medicine', nextQuestion: 'alternative_type' },
        { value: 'fitness', label: 'Fitness & Wellness', nextQuestion: 'fitness_role' },
      ],
    },

    // =========================
    // 2️⃣ DOCTOR PATH
    // =========================
    {
      key: 'medical_specialization',
      text: 'Preferred medical specialization?',
      type: 'single',
      options: [
        { value: 'general', label: 'General Practice', nextQuestion: 'medical_environment' },
        { value: 'surgery', label: 'Surgery', nextQuestion: 'medical_environment' },
        { value: 'pediatrics', label: 'Pediatrics', nextQuestion: 'medical_environment' },
        { value: 'cardiology', label: 'Cardiology', nextQuestion: 'medical_environment' },
        { value: 'orthopedic', label: 'Orthopedics', nextQuestion: 'medical_environment' },
        { value: 'other', label: 'Other Specialization', nextQuestion: 'medical_environment' },
      ],
    },
    {
      key: 'medical_environment',
      text: 'Where do you want to work?',
      type: 'single',
      options: [
        { value: 'hospital', label: 'Hospital', nextQuestion: 'study_commitment' },
        { value: 'clinic', label: 'Private Clinic', nextQuestion: 'study_commitment' },
        { value: 'research', label: 'Medical Research', nextQuestion: 'study_commitment' },
        { value: 'abroad', label: 'Abroad Practice', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 3️⃣ NURSING
    // =========================
    {
      key: 'nursing_level',
      text: 'Nursing qualification goal?',
      type: 'single',
      options: [
        { value: 'gnm', label: 'GNM', nextQuestion: 'nursing_department' },
        { value: 'bsc', label: 'B.Sc Nursing', nextQuestion: 'nursing_department' },
        { value: 'msc', label: 'M.Sc Nursing', nextQuestion: 'nursing_department' },
      ],
    },
    {
      key: 'nursing_department',
      text: 'Preferred nursing department?',
      type: 'single',
      options: [
        { value: 'general', label: 'General Ward', nextQuestion: 'study_commitment' },
        { value: 'icu', label: 'ICU', nextQuestion: 'study_commitment' },
        { value: 'pediatric', label: 'Pediatric', nextQuestion: 'study_commitment' },
        { value: 'emergency', label: 'Emergency', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 4️⃣ PHARMACY
    // =========================
    {
      key: 'pharmacy_role',
      text: 'Pharmacy career interest?',
      type: 'single',
      options: [
        { value: 'clinical', label: 'Clinical Pharmacist', nextQuestion: 'study_commitment' },
        { value: 'industry', label: 'Pharmaceutical Industry', nextQuestion: 'study_commitment' },
        { value: 'research', label: 'Drug Research', nextQuestion: 'study_commitment' },
        { value: 'retail', label: 'Medical Store', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 5️⃣ PHYSIOTHERAPY
    // =========================
    {
      key: 'physio_focus',
      text: 'Physiotherapy specialization?',
      type: 'single',
      options: [
        { value: 'sports', label: 'Sports Injury', nextQuestion: 'study_commitment' },
        { value: 'neuro', label: 'Neurological Rehab', nextQuestion: 'study_commitment' },
        { value: 'ortho', label: 'Orthopedic Rehab', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 6️⃣ NUTRITION
    // =========================
    {
      key: 'nutrition_focus',
      text: 'Nutrition career focus?',
      type: 'single',
      options: [
        { value: 'clinical', label: 'Clinical Nutritionist', nextQuestion: 'study_commitment' },
        { value: 'sports', label: 'Sports Nutritionist', nextQuestion: 'study_commitment' },
        { value: 'wellness', label: 'Wellness Coach', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 7️⃣ ALTERNATIVE MEDICINE
    // =========================
    {
      key: 'alternative_type',
      text: 'Which alternative medicine?',
      type: 'single',
      options: [
        { value: 'ayurveda', label: 'Ayurveda', nextQuestion: 'study_commitment' },
        { value: 'homeopathy', label: 'Homeopathy', nextQuestion: 'study_commitment' },
        { value: 'unani', label: 'Unani', nextQuestion: 'study_commitment' },
        { value: 'naturopathy', label: 'Naturopathy', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 8️⃣ FITNESS & WELLNESS
    // =========================
    {
      key: 'fitness_role',
      text: 'Fitness career choice?',
      type: 'single',
      options: [
        { value: 'trainer', label: 'Personal Trainer', nextQuestion: 'study_commitment' },
        { value: 'yoga', label: 'Yoga Instructor', nextQuestion: 'study_commitment' },
        { value: 'therapy', label: 'Rehabilitation Trainer', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 9️⃣ COMMON COMMITMENT
    // =========================
    {
      key: 'study_commitment',
      text: 'Are you ready for intensive study and training?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, fully committed' },
        { value: 'unsure', label: 'Unsure, need guidance' },
        { value: 'short_term', label: 'Prefer shorter courses' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│        Yoga Dream       │
└─────────────────────────┘
*/

{
  key: 'yoga',
  name: 'Yoga',
  icon: 'User',
  description: 'Yoga instruction and wellness',
  questions: [

    // =========================
    // 1️⃣ YOGA PATH
    // =========================
    {
      key: 'yoga_path',
      text: 'What aspect of yoga interests you?',
      type: 'single',
      options: [
        { value: 'instructor', label: 'Becoming a Yoga Instructor', nextQuestion: 'yoga_style' },
        { value: 'therapy', label: 'Yoga Therapy', nextQuestion: 'therapy_focus' },
        { value: 'personal', label: 'Personal Practice & Wellness', nextQuestion: 'practice_level' },
        { value: 'spiritual', label: 'Spiritual & Meditative Path', nextQuestion: 'spiritual_focus' },
      ],
    },

    // =========================
    // 2️⃣ YOGA STYLES
    // =========================
    {
      key: 'yoga_style',
      text: 'Which yoga style interests you most?',
      type: 'single',
      options: [
        { value: 'hatha', label: 'Hatha Yoga', nextQuestion: 'teaching_goal' },
        { value: 'ashtanga', label: 'Ashtanga Yoga', nextQuestion: 'teaching_goal' },
        { value: 'vinyasa', label: 'Vinyasa Flow', nextQuestion: 'teaching_goal' },
        { value: 'iyengar', label: 'Iyengar Yoga', nextQuestion: 'teaching_goal' },
        { value: 'power', label: 'Power Yoga', nextQuestion: 'teaching_goal' },
        { value: 'kundalini', label: 'Kundalini Yoga', nextQuestion: 'teaching_goal' },
      ],
    },

    // =========================
    // 3️⃣ TEACHING GOALS
    // =========================
    {
      key: 'teaching_goal',
      text: 'Where do you want to teach yoga?',
      type: 'single',
      options: [
        { value: 'studio', label: 'Yoga Studio', nextQuestion: 'certification_level' },
        { value: 'online', label: 'Online / YouTube', nextQuestion: 'certification_level' },
        { value: 'corporate', label: 'Corporate Wellness', nextQuestion: 'certification_level' },
        { value: 'abroad', label: 'International Teaching', nextQuestion: 'certification_level' },
      ],
    },

    // =========================
    // 4️⃣ YOGA THERAPY
    // =========================
    {
      key: 'therapy_focus',
      text: 'What therapeutic area interests you?',
      type: 'single',
      options: [
        { value: 'chronic', label: 'Chronic Pain Management', nextQuestion: 'therapy_clients' },
        { value: 'mental', label: 'Mental Health & Stress', nextQuestion: 'therapy_clients' },
        { value: 'rehabilitation', label: 'Physical Rehabilitation', nextQuestion: 'therapy_clients' },
        { value: 'women', label: 'Women’s Health', nextQuestion: 'therapy_clients' },
      ],
    },
    {
      key: 'therapy_clients',
      text: 'Who do you want to work with?',
      type: 'single',
      options: [
        { value: 'elderly', label: 'Elderly', nextQuestion: 'certification_level' },
        { value: 'athletes', label: 'Athletes', nextQuestion: 'certification_level' },
        { value: 'patients', label: 'Medical Patients', nextQuestion: 'certification_level' },
        { value: 'general', label: 'General Public', nextQuestion: 'certification_level' },
      ],
    },

    // =========================
    // 5️⃣ SPIRITUAL YOGA
    // =========================
    {
      key: 'spiritual_focus',
      text: 'Which spiritual practice attracts you?',
      type: 'single',
      options: [
        { value: 'meditation', label: 'Meditation & Mindfulness', nextQuestion: 'practice_level' },
        { value: 'pranayama', label: 'Pranayama & Breathwork', nextQuestion: 'practice_level' },
        { value: 'philosophy', label: 'Yoga Philosophy', nextQuestion: 'practice_level' },
        { value: 'retreats', label: 'Ashram / Retreat Life', nextQuestion: 'practice_level' },
      ],
    },

    // =========================
    // 6️⃣ PRACTICE LEVEL
    // =========================
    {
      key: 'practice_level',
      text: 'What is your current yoga practice level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner', nextQuestion: 'time_commitment' },
        { value: 'intermediate', label: 'Intermediate (1–2 years)', nextQuestion: 'time_commitment' },
        { value: 'advanced', label: 'Advanced (3+ years)', nextQuestion: 'time_commitment' },
      ],
    },

    // =========================
    // 7️⃣ CERTIFICATION
    // =========================
    {
      key: 'certification_level',
      text: 'Which certification level are you aiming for?',
      type: 'single',
      options: [
        { value: 'ytt200', label: '200 Hours (Beginner)', nextQuestion: 'time_commitment' },
        { value: 'ytt300', label: '300 Hours (Advanced)', nextQuestion: 'time_commitment' },
        { value: 'ytt500', label: '500 Hours (Master Level)', nextQuestion: 'time_commitment' },
        { value: 'not_sure', label: 'Not sure yet', nextQuestion: 'time_commitment' },
      ],
    },

    // =========================
    // 8️⃣ TIME COMMITMENT
    // =========================
    {
      key: 'time_commitment',
      text: 'How much time can you dedicate daily to yoga?',
      type: 'number',
      validation: { min: 1, max: 8 },
    },

  ],
},


  /*
┌─────────────────────────┐
│    LifeStyle Dream      │
└─────────────────────────┘
*/
{
  key: 'life_skills',
  name: 'Life Skills',
  icon: 'Lightbulb',
  description: 'Personal development and life skills training',
  questions: [

    // =========================
    // 1️⃣ SKILL AREA
    // =========================
    {
      key: 'skill_area',
      text: 'Which life skill do you want to develop or teach?',
      type: 'single',
      options: [
        { value: 'communication', label: 'Communication Skills', nextQuestion: 'communication_focus' },
        { value: 'leadership', label: 'Leadership & Management', nextQuestion: 'leadership_style' },
        { value: 'time_management', label: 'Time Management', nextQuestion: 'time_management_issue' },
        { value: 'emotional', label: 'Emotional Intelligence', nextQuestion: 'emotional_focus' },
        { value: 'financial', label: 'Financial Literacy', nextQuestion: 'financial_focus' },
      ],
    },

    // =========================
    // 2️⃣ COMMUNICATION
    // =========================
    {
      key: 'communication_focus',
      text: 'Which communication skill do you want to focus on?',
      type: 'single',
      options: [
        { value: 'public_speaking', label: 'Public Speaking', nextQuestion: 'goal_type' },
        { value: 'interpersonal', label: 'Interpersonal Communication', nextQuestion: 'goal_type' },
        { value: 'presentation', label: 'Presentation Skills', nextQuestion: 'goal_type' },
        { value: 'negotiation', label: 'Negotiation', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 3️⃣ LEADERSHIP
    // =========================
    {
      key: 'leadership_style',
      text: 'Which leadership style interests you?',
      type: 'single',
      options: [
        { value: 'transformational', label: 'Transformational', nextQuestion: 'goal_type' },
        { value: 'situational', label: 'Situational', nextQuestion: 'goal_type' },
        { value: 'servant', label: 'Servant Leadership', nextQuestion: 'goal_type' },
        { value: 'entrepreneurial', label: 'Entrepreneurial', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 4️⃣ TIME MANAGEMENT
    // =========================
    {
      key: 'time_management_issue',
      text: 'What is your biggest time management challenge?',
      type: 'single',
      options: [
        { value: 'procrastination', label: 'Procrastination', nextQuestion: 'goal_type' },
        { value: 'overwork', label: 'Overworking', nextQuestion: 'goal_type' },
        { value: 'focus', label: 'Lack of Focus', nextQuestion: 'goal_type' },
        { value: 'planning', label: 'Poor Planning', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 5️⃣ EMOTIONAL INTELLIGENCE
    // =========================
    {
      key: 'emotional_focus',
      text: 'Which emotional skill do you want to improve?',
      type: 'single',
      options: [
        { value: 'self_awareness', label: 'Self-Awareness', nextQuestion: 'goal_type' },
        { value: 'empathy', label: 'Empathy', nextQuestion: 'goal_type' },
        { value: 'stress', label: 'Stress Management', nextQuestion: 'goal_type' },
        { value: 'conflict', label: 'Conflict Resolution', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 6️⃣ FINANCIAL LITERACY
    // =========================
    {
      key: 'financial_focus',
      text: 'Which financial skill interests you?',
      type: 'single',
      options: [
        { value: 'saving', label: 'Saving & Budgeting', nextQuestion: 'goal_type' },
        { value: 'investing', label: 'Investing', nextQuestion: 'goal_type' },
        { value: 'tax', label: 'Tax Planning', nextQuestion: 'goal_type' },
        { value: 'business', label: 'Business Finance', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 7️⃣ GOAL TYPE
    // =========================
    {
      key: 'goal_type',
      text: 'What is your goal?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Development', nextQuestion: 'learning_style' },
        { value: 'teach', label: 'Teach / Train Others', nextQuestion: 'teaching_mode' },
        { value: 'both', label: 'Both Personal & Teaching', nextQuestion: 'learning_style' },
      ],
    },

    // =========================
    // 8️⃣ LEARNING STYLE
    // =========================
    {
      key: 'learning_style',
      text: 'How do you prefer to learn?',
      type: 'single',
      options: [
        { value: 'self', label: 'Self-Learning', nextQuestion: 'time_commitment' },
        { value: 'mentor', label: 'Mentor / Coach', nextQuestion: 'time_commitment' },
        { value: 'courses', label: 'Online Courses', nextQuestion: 'time_commitment' },
      ],
    },

    // =========================
    // 9️⃣ TEACHING MODE
    // =========================
    {
      key: 'teaching_mode',
      text: 'How do you want to teach or share your skills?',
      type: 'single',
      options: [
        { value: 'workshops', label: 'Workshops & Seminars', nextQuestion: 'income_goal' },
        { value: 'online', label: 'Online (YouTube / Courses)', nextQuestion: 'income_goal' },
        { value: 'coaching', label: '1-on-1 Coaching', nextQuestion: 'income_goal' },
        { value: 'institutes', label: 'Institutes / Schools', nextQuestion: 'income_goal' },
      ],
    },

    // =========================
    // 🔟 INCOME GOAL
    // =========================
    {
      key: 'income_goal',
      text: 'Do you want to earn from this skill?',
      type: 'single',
      options: [
        { value: 'fulltime', label: 'Yes, Full-Time Career', nextQuestion: 'time_commitment' },
        { value: 'parttime', label: 'Part-Time / Side Income', nextQuestion: 'time_commitment' },
        { value: 'no', label: 'No, Just Personal Growth', nextQuestion: 'time_commitment' },
      ],
    },

    // =========================
    // 1️⃣1️⃣ TIME COMMITMENT
    // =========================
    {
      key: 'time_commitment',
      text: 'How many hours can you dedicate per day?',
      type: 'number',
      validation: { min: 1, max: 6 },
    },

  ],
},

/*
┌─────────────────────────┐
      Insurance Dream     │
└─────────────────────────┘
*/

  {
  key: 'insurance',
  name: 'Term / Health Insurance',
  icon: 'Shield',
  description: 'Insurance career and advisory',
  questions: [

    // =========================
    // 1️⃣ ROLE SELECTION
    // =========================
    {
      key: 'insurance_role',
      text: 'What role interests you in insurance?',
      type: 'single',
      options: [
        { value: 'agent', label: 'Insurance Agent / Advisor', nextQuestion: 'insurance_type' },
        { value: 'underwriter', label: 'Underwriter', nextQuestion: 'underwriting_focus' },
        { value: 'claims', label: 'Claims Processing', nextQuestion: 'claims_focus' },
        { value: 'actuary', label: 'Actuary', nextQuestion: 'math_background' },
      ],
    },

    // =========================
    // 2️⃣ INSURANCE TYPE
    // =========================
    {
      key: 'insurance_type',
      text: 'Which type of insurance interests you?',
      type: 'single',
      options: [
        { value: 'life', label: 'Life Insurance', nextQuestion: 'sales_experience' },
        { value: 'health', label: 'Health Insurance', nextQuestion: 'sales_experience' },
        { value: 'both', label: 'Both Life & Health', nextQuestion: 'sales_experience' },
      ],
    },

    // =========================
    // 3️⃣ SALES EXPERIENCE
    // =========================
    {
      key: 'sales_experience',
      text: 'Do you have sales or client interaction experience?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, I have experience', nextQuestion: 'client_type' },
        { value: 'no', label: 'No, but willing to learn', nextQuestion: 'training_preference' },
      ],
    },

    // =========================
    // 4️⃣ CLIENT TYPE
    // =========================
    {
      key: 'client_type',
      text: 'Which type of clients do you prefer?',
      type: 'single',
      options: [
        { value: 'individual', label: 'Individuals & Families', nextQuestion: 'income_goal' },
        { value: 'corporate', label: 'Corporate Clients', nextQuestion: 'income_goal' },
        { value: 'both', label: 'Both', nextQuestion: 'income_goal' },
      ],
    },

    // =========================
    // 5️⃣ TRAINING PREFERENCE
    // =========================
    {
      key: 'training_preference',
      text: 'How would you like to learn insurance skills?',
      type: 'single',
      options: [
        { value: 'company', label: 'Company Training', nextQuestion: 'income_goal' },
        { value: 'certification', label: 'Certification Courses (IRDAI)', nextQuestion: 'income_goal' },
        { value: 'self', label: 'Self Learning + Practice', nextQuestion: 'income_goal' },
      ],
    },

    // =========================
    // 6️⃣ UNDERWRITING
    // =========================
    {
      key: 'underwriting_focus',
      text: 'Underwriting focus area?',
      type: 'single',
      options: [
        { value: 'risk', label: 'Risk Assessment', nextQuestion: 'insurance_type' },
        { value: 'medical', label: 'Medical Underwriting', nextQuestion: 'insurance_type' },
        { value: 'financial', label: 'Financial Evaluation', nextQuestion: 'insurance_type' },
      ],
    },

    // =========================
    // 7️⃣ CLAIMS PROCESSING
    // =========================
    {
      key: 'claims_focus',
      text: 'Which claims area interests you?',
      type: 'single',
      options: [
        { value: 'health_claims', label: 'Health Claims', nextQuestion: 'work_style' },
        { value: 'life_claims', label: 'Life Claims', nextQuestion: 'work_style' },
        { value: 'investigation', label: 'Claims Investigation', nextQuestion: 'work_style' },
      ],
    },

    // =========================
    // 8️⃣ ACTUARY – MATH BACKGROUND
    // =========================
    {
      key: 'math_background',
      text: 'Do you have a strong mathematics background?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, strong in mathematics', nextQuestion: 'exam_commitment' },
        { value: 'moderate', label: 'Moderate, willing to learn', nextQuestion: 'exam_commitment' },
        { value: 'no', label: 'No, prefer non-technical roles', nextQuestion: 'insurance_role' },
      ],
    },

    // =========================
    // 9️⃣ ACTUARIAL EXAMS
    // =========================
    {
      key: 'exam_commitment',
      text: 'Are you willing to clear multiple actuarial exams?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, fully committed', nextQuestion: 'time_commitment' },
        { value: 'maybe', label: 'Maybe, need guidance', nextQuestion: 'time_commitment' },
        { value: 'no', label: 'No', nextQuestion: 'insurance_role' },
      ],
    },

    // =========================
    // 🔟 WORK STYLE
    // =========================
    {
      key: 'work_style',
      text: 'Preferred work style?',
      type: 'single',
      options: [
        { value: 'office', label: 'Office-Based', nextQuestion: 'time_commitment' },
        { value: 'field', label: 'Field Work', nextQuestion: 'time_commitment' },
        { value: 'hybrid', label: 'Hybrid', nextQuestion: 'time_commitment' },
      ],
    },

    // =========================
    // 1️⃣1️⃣ INCOME GOAL
    // =========================
    {
      key: 'income_goal',
      text: 'What is your income goal?',
      type: 'single',
      options: [
        { value: 'commission', label: 'Commission-Based Income', nextQuestion: 'time_commitment' },
        { value: 'fixed', label: 'Fixed Salary', nextQuestion: 'time_commitment' },
        { value: 'both', label: 'Salary + Incentives', nextQuestion: 'time_commitment' },
      ],
    },

    // =========================
    // 1️⃣2️⃣ TIME COMMITMENT
    // =========================
    {
      key: 'time_commitment',
      text: 'How many hours can you dedicate daily?',
      type: 'number',
      validation: { min: 2, max: 10 },
    },

  ],
},

/*
┌─────────────────────────┐
│        job Dreams       │
└─────────────────────────┘
*/

 {
  key: 'job',
  name: 'Job',
  icon: 'Briefcase',
  description: 'Government and private sector jobs',
  questions: [

    // =========================
    // 1️⃣ JOB SECTOR
    // =========================
    {
      key: 'job_sector',
      text: 'Which sector are you interested in?',
      type: 'single',
      options: [
        { value: 'government', label: 'Government Job', nextQuestion: 'gov_level' },
        { value: 'private', label: 'Private Sector', nextQuestion: 'private_field' },
        { value: 'both', label: 'Open to Both', nextQuestion: 'gov_level' },
      ],
    },

    // =========================
    // 2️⃣ GOVERNMENT JOBS
    // =========================
    {
      key: 'gov_level',
      text: 'Which level of government job?',
      type: 'single',
      options: [
        { value: 'central', label: 'Central Government (UPSC / SSC)', nextQuestion: 'gov_service' },
        { value: 'state', label: 'State Government', nextQuestion: 'gov_service' },
        { value: 'psu', label: 'Public Sector Units (PSU)', nextQuestion: 'technical_background' },
        { value: 'banking', label: 'Banking (IBPS / SBI / RBI)', nextQuestion: 'banking_role' },
        { value: 'defense', label: 'Defense (Army / Navy / Air Force)', nextQuestion: 'defense_role' },
        { value: 'teaching', label: 'Government Teaching', nextQuestion: 'teaching_level' },
      ],
    },

    {
      key: 'gov_service',
      text: 'Which service are you aiming for?',
      type: 'single',
      options: [
        { value: 'ias', label: 'IAS / IPS / IFS', nextQuestion: 'exam_prep' },
        { value: 'ssc', label: 'SSC / Group B & C', nextQuestion: 'exam_prep' },
        { value: 'clerk', label: 'Clerical Jobs', nextQuestion: 'exam_prep' },
      ],
    },

    {
      key: 'banking_role',
      text: 'Preferred banking role?',
      type: 'single',
      options: [
        { value: 'po', label: 'Probationary Officer (PO)', nextQuestion: 'exam_prep' },
        { value: 'clerk', label: 'Clerk', nextQuestion: 'exam_prep' },
        { value: 'so', label: 'Specialist Officer (SO)', nextQuestion: 'technical_background' },
      ],
    },

    {
      key: 'defense_role',
      text: 'Which defense role interests you?',
      type: 'single',
      options: [
        { value: 'officer', label: 'Officer', nextQuestion: 'physical_fitness' },
        { value: 'soldier', label: 'Soldier / Tradesman', nextQuestion: 'physical_fitness' },
      ],
    },

    {
      key: 'teaching_level',
      text: 'Which teaching level?',
      type: 'single',
      options: [
        { value: 'school', label: 'School Teacher (TET)', nextQuestion: 'education_level' },
        { value: 'college', label: 'College / Lecturer (NET)', nextQuestion: 'education_level' },
      ],
    },

    // =========================
    // 3️⃣ PRIVATE SECTOR JOBS
    // =========================
    {
      key: 'private_field',
      text: 'Which private sector field interests you?',
      type: 'single',
      options: [
        { value: 'it', label: 'IT / Software', nextQuestion: 'it_role' },
        { value: 'finance', label: 'Finance / Accounting', nextQuestion: 'finance_role' },
        { value: 'marketing', label: 'Marketing / Sales', nextQuestion: 'marketing_type' },
        { value: 'hr', label: 'Human Resources', nextQuestion: 'education_level' },
        { value: 'manufacturing', label: 'Manufacturing / Production', nextQuestion: 'technical_background' },
        { value: 'healthcare', label: 'Healthcare Jobs', nextQuestion: 'healthcare_role' },
        { value: 'media', label: 'Media / Content / Design', nextQuestion: 'media_role' },
        { value: 'logistics', label: 'Logistics / Supply Chain', nextQuestion: 'work_style' },
      ],
    },

    // =========================
    // 4️⃣ IT JOBS
    // =========================
    {
      key: 'it_role',
      text: 'Which IT role interests you?',
      type: 'single',
      options: [
        { value: 'developer', label: 'Software Developer', nextQuestion: 'technical_skills' },
        { value: 'data', label: 'Data Analyst / Scientist', nextQuestion: 'technical_skills' },
        { value: 'testing', label: 'Software Testing', nextQuestion: 'technical_skills' },
        { value: 'cyber', label: 'Cyber Security', nextQuestion: 'technical_skills' },
        { value: 'cloud', label: 'Cloud / DevOps', nextQuestion: 'technical_skills' },
      ],
    },

    // =========================
    // 5️⃣ FINANCE
    // =========================
    {
      key: 'finance_role',
      text: 'Which finance role?',
      type: 'single',
      options: [
        { value: 'accountant', label: 'Accountant', nextQuestion: 'education_level' },
        { value: 'analyst', label: 'Financial Analyst', nextQuestion: 'education_level' },
        { value: 'ca', label: 'CA / CMA / CS', nextQuestion: 'exam_prep' },
      ],
    },

    // =========================
    // 6️⃣ MARKETING
    // =========================
    {
      key: 'marketing_type',
      text: 'Which marketing type?',
      type: 'single',
      options: [
        { value: 'digital', label: 'Digital Marketing', nextQuestion: 'technical_skills' },
        { value: 'sales', label: 'Sales Executive', nextQuestion: 'work_style' },
        { value: 'branding', label: 'Brand Management', nextQuestion: 'education_level' },
      ],
    },

    // =========================
    // 7️⃣ HEALTHCARE
    // =========================
    {
      key: 'healthcare_role',
      text: 'Which healthcare role?',
      type: 'single',
      options: [
        { value: 'hospital_admin', label: 'Hospital Administration', nextQuestion: 'education_level' },
        { value: 'lab', label: 'Lab Technician', nextQuestion: 'education_level' },
        { value: 'medical_rep', label: 'Medical Representative', nextQuestion: 'work_style' },
      ],
    },

    // =========================
    // 8️⃣ MEDIA
    // =========================
    {
      key: 'media_role',
      text: 'Media-related role?',
      type: 'single',
      options: [
        { value: 'content', label: 'Content Writer', nextQuestion: 'portfolio' },
        { value: 'design', label: 'Graphic / UI Designer', nextQuestion: 'portfolio' },
        { value: 'video', label: 'Video Editor', nextQuestion: 'portfolio' },
      ],
    },

    // =========================
    // 9️⃣ COMMON QUESTIONS
    // =========================
    {
      key: 'exam_prep',
      text: 'How many hours can you dedicate daily for preparation?',
      type: 'number',
      validation: { min: 1, max: 12 },
    },

    {
      key: 'technical_skills',
      text: 'Your technical skill level?',
      type: 'single',
      options: [
        { value: 'expert', label: 'Experienced', nextQuestion: 'work_style' },
        { value: 'learning', label: 'Learning Phase', nextQuestion: 'work_style' },
        { value: 'beginner', label: 'Beginner', nextQuestion: 'work_style' },
      ],
    },

    {
      key: 'technical_background',
      text: 'Do you have a technical background?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes', nextQuestion: 'education_level' },
        { value: 'no', label: 'No', nextQuestion: 'education_level' },
      ],
    },

    {
      key: 'physical_fitness',
      text: 'Are you physically fit as per standards?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes', nextQuestion: 'exam_prep' },
        { value: 'training', label: 'Currently Training', nextQuestion: 'exam_prep' },
      ],
    },

    {
      key: 'portfolio',
      text: 'Do you have a portfolio?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes', nextQuestion: 'work_style' },
        { value: 'no', label: 'No, need to build', nextQuestion: 'work_style' },
      ],
    },

    {
      key: 'work_style',
      text: 'Preferred work style?',
      type: 'single',
      options: [
        { value: 'office', label: 'Office Job' },
        { value: 'remote', label: 'Remote Job' },
        { value: 'field', label: 'Field Work' },
        { value: 'hybrid', label: 'Hybrid' },
      ],
    },

    {
      key: 'education_level',
      text: 'What is your education level?',
      type: 'single',
      options: [
        { value: 'intermediate', label: 'Intermediate / 12th' },
        { value: 'degree', label: 'Degree / Graduation' },
        { value: 'postgrad', label: 'Post Graduation' },
      ],
    },

  ],
},


  /*
┌─────────────────────────┐
│ Human Resources Dreams  │
└─────────────────────────┘
*/
{
  key: 'hr',
  name: 'Human Resources',
  icon: 'Users',
  description: 'HR and people management careers',
  questions: [

    {
      key: 'hr_specialization',
      text: 'Which HR specialization interests you?',
      type: 'single',
      options: [
        { value: 'recruitment', label: 'Recruitment / Talent Acquisition', nextQuestion: 'hr_work_environment' },
        { value: 'training', label: 'Training & Development (L&D)', nextQuestion: 'hr_work_environment' },
        { value: 'compensation', label: 'Compensation & Benefits', nextQuestion: 'hr_work_environment' },
        { value: 'relations', label: 'Employee Relations', nextQuestion: 'hr_work_environment' },
        { value: 'generalist', label: 'HR Generalist', nextQuestion: 'hr_work_environment' },
      ],
    },

    {
      key: 'hr_work_environment',
      text: 'Which work environment do you prefer?',
      type: 'single',
      options: [
        { value: 'corporate', label: 'Corporate / MNC', nextQuestion: 'hr_experience' },
        { value: 'startup', label: 'Startup / Growing Company', nextQuestion: 'hr_experience' },
        { value: 'consulting', label: 'HR Consulting Firm', nextQuestion: 'hr_experience' },
      ],
    },

    {
      key: 'hr_experience',
      text: 'Do you have HR experience or relevant education?',
      type: 'single',
      options: [
        { value: 'experienced', label: 'Yes, I have HR experience', nextQuestion: 'hr_certification' },
        { value: 'education', label: 'HR education / MBA / PGDM', nextQuestion: 'hr_certification' },
        { value: 'neither', label: 'No, starting fresh', nextQuestion: 'hr_certification' },
      ],
    },

    {
      key: 'hr_certification',
      text: 'Are you willing to pursue HR certifications?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes (SHRM / SAP HR / Analytics)', nextQuestion: 'hr_strength' },
        { value: 'maybe', label: 'Maybe later', nextQuestion: 'hr_strength' },
        { value: 'no', label: 'No, prefer experience-based growth', nextQuestion: 'hr_strength' },
      ],
    },

    {
      key: 'hr_strength',
      text: 'What is your strongest HR skill?',
      type: 'single',
      options: [
        { value: 'people', label: 'People communication & empathy', nextQuestion: 'hr_salary_expectation' },
        { value: 'policy', label: 'Policies, compliance & structure', nextQuestion: 'hr_salary_expectation' },
        { value: 'analysis', label: 'HR analytics & data', nextQuestion: 'hr_salary_expectation' },
      ],
    },

    {
      key: 'hr_salary_expectation',
      text: 'What is your salary expectation (monthly)?',
      type: 'single',
      options: [
        { value: 'low', label: '₹20k – ₹40k' },
        { value: 'mid', label: '₹40k – ₹80k' },
        { value: 'high', label: '₹80k+' },
      ],
    },

  ],
},


  /*
┌─────────────────────────┐
│    Consulting dream     │
└─────────────────────────┘
*/

  {
  key: 'consulting',
  name: 'Consulting / Advisory',
  icon: 'MessageCircle',
  description: 'Professional consulting and advisory services',
  questions: [

    {
      key: 'consulting_field',
      text: 'Which consulting area interests you?',
      type: 'single',
      options: [
        { value: 'management', label: 'Management Consulting', nextQuestion: 'consulting_mode' },
        { value: 'financial', label: 'Financial Advisory', nextQuestion: 'consulting_mode' },
        { value: 'it', label: 'IT / Technology Consulting', nextQuestion: 'consulting_mode' },
        { value: 'education', label: 'Education Consulting', nextQuestion: 'consulting_mode' },
        { value: 'career', label: 'Career Counseling', nextQuestion: 'consulting_mode' },
        { value: 'strategy', label: 'Business / Strategy Consulting', nextQuestion: 'consulting_mode' },
      ],
    },

    {
      key: 'consulting_mode',
      text: 'How do you want to work as a consultant?',
      type: 'single',
      options: [
        { value: 'firm', label: 'Consulting Firm / Company', nextQuestion: 'expertise_level' },
        { value: 'independent', label: 'Independent / Freelance Consultant', nextQuestion: 'expertise_level' },
        { value: 'hybrid', label: 'Both (Firm + Freelance)', nextQuestion: 'expertise_level' },
      ],
    },

    {
      key: 'expertise_level',
      text: 'What is your expertise level in this field?',
      type: 'single',
      options: [
        { value: 'expert', label: 'Expert (5+ years experience)', nextQuestion: 'consulting_strength' },
        { value: 'intermediate', label: 'Intermediate (2–5 years)', nextQuestion: 'consulting_strength' },
        { value: 'beginner', label: 'Beginner, want to develop expertise', nextQuestion: 'learning_commitment' },
      ],
    },

    {
      key: 'consulting_strength',
      text: 'What is your strongest consulting skill?',
      type: 'single',
      options: [
        { value: 'problem_solving', label: 'Problem Solving & Analysis', nextQuestion: 'client_handling' },
        { value: 'communication', label: 'Communication & Presentation', nextQuestion: 'client_handling' },
        { value: 'strategy', label: 'Strategy & Planning', nextQuestion: 'client_handling' },
        { value: 'technical', label: 'Technical / Domain Knowledge', nextQuestion: 'client_handling' },
      ],
    },

    {
      key: 'client_handling',
      text: 'Are you comfortable dealing directly with clients?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, confident with clients', nextQuestion: 'certification_interest' },
        { value: 'learning', label: 'Learning, need practice', nextQuestion: 'certification_interest' },
        { value: 'no', label: 'Prefer backend / analysis roles', nextQuestion: 'certification_interest' },
      ],
    },

    {
      key: 'certification_interest',
      text: 'Are you willing to pursue certifications?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes (MBA / PMP / CFA / IT Certs)' },
        { value: 'maybe', label: 'Maybe later' },
        { value: 'no', label: 'No, prefer experience-based growth' },
      ],
    },

    {
      key: 'learning_commitment',
      text: 'How much time can you dedicate weekly to learning?',
      type: 'number',
      validation: { min: 2, max: 40 },
    },

  ],
},


  /*
┌─────────────────────────┐
│       Dance Dream       │
└─────────────────────────┘
*/
{
  key: 'dance',
  name: 'Dance',
  icon: 'Music',
  description: 'Dance performance and instruction',
  questions: [

    {
      key: 'dance_category',
      text: 'Which dance category interests you?',
      type: 'single',
      options: [
        { value: 'classical', label: 'Classical Dance', nextQuestion: 'classical_form' },
        { value: 'modern', label: 'Modern / Contemporary', nextQuestion: 'modern_style' },
        { value: 'gymnastics', label: 'Gymnastics / Acro Dance', nextQuestion: 'gymnastics_type' },
        { value: 'zumba', label: 'Zumba / Fitness Dance', nextQuestion: 'dance_goal' },
      ],
    },

    // 🎭 CLASSICAL
    {
      key: 'classical_form',
      text: 'Which classical dance form?',
      type: 'single',
      options: [
        { value: 'bharatanatyam', label: 'Bharatanatyam', nextQuestion: 'dance_experience' },
        { value: 'kathak', label: 'Kathak', nextQuestion: 'dance_experience' },
        { value: 'kuchipudi', label: 'Kuchipudi', nextQuestion: 'dance_experience' },
        { value: 'odissi', label: 'Odissi', nextQuestion: 'dance_experience' },
        { value: 'other', label: 'Other Classical Form', nextQuestion: 'dance_experience' },
      ],
    },

    // 🕺 MODERN
    {
      key: 'modern_style',
      text: 'Which modern style?',
      type: 'single',
      options: [
        { value: 'contemporary', label: 'Contemporary', nextQuestion: 'dance_experience' },
        { value: 'hiphop', label: 'Hip-hop', nextQuestion: 'dance_experience' },
        { value: 'bollywood', label: 'Bollywood', nextQuestion: 'dance_experience' },
        { value: 'jazz', label: 'Jazz', nextQuestion: 'dance_experience' },
      ],
    },

    // 🤸 GYMNASTICS
    {
      key: 'gymnastics_type',
      text: 'Which gymnastics discipline?',
      type: 'single',
      options: [
        { value: 'artistic', label: 'Artistic Gymnastics', nextQuestion: 'dance_experience' },
        { value: 'rhythmic', label: 'Rhythmic Gymnastics', nextQuestion: 'dance_experience' },
        { value: 'acrobatic', label: 'Acrobatic Gymnastics', nextQuestion: 'dance_experience' },
      ],
    },

    // 📈 EXPERIENCE
    {
      key: 'dance_experience',
      text: 'What is your dance experience level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner', nextQuestion: 'dance_goal' },
        { value: 'intermediate', label: 'Intermediate (1–3 years)', nextQuestion: 'dance_goal' },
        { value: 'advanced', label: 'Advanced (3+ years)', nextQuestion: 'dance_goal' },
      ],
    },

    // 🎯 GOAL
    {
      key: 'dance_goal',
      text: 'What is your main goal?',
      type: 'single',
      options: [
        { value: 'performer', label: 'Professional Performer', nextQuestion: 'performance_platform' },
        { value: 'instructor', label: 'Dance Instructor', nextQuestion: 'certification_interest' },
        { value: 'fitness', label: 'Fitness / Wellness', nextQuestion: 'practice_time' },
        { value: 'hobby', label: 'Hobby / Passion', nextQuestion: 'practice_time' },
      ],
    },

    // 🎤 PLATFORM
    {
      key: 'performance_platform',
      text: 'Where do you want to perform?',
      type: 'single',
      options: [
        { value: 'stage', label: 'Stage / Live Shows', nextQuestion: 'competition_interest' },
        { value: 'tv', label: 'TV / Reality Shows', nextQuestion: 'competition_interest' },
        { value: 'digital', label: 'YouTube / Instagram', nextQuestion: 'competition_interest' },
        { value: 'events', label: 'Events / Weddings', nextQuestion: 'competition_interest' },
      ],
    },

    // 🏆 COMPETITIONS
    {
      key: 'competition_interest',
      text: 'Are you interested in competitions?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, highly interested', nextQuestion: 'practice_time' },
        { value: 'maybe', label: 'Maybe in future', nextQuestion: 'practice_time' },
        { value: 'no', label: 'No, focus on performance only', nextQuestion: 'practice_time' },
      ],
    },

    // 🎓 CERTIFICATION
    {
      key: 'certification_interest',
      text: 'Are you willing to pursue dance certifications?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes (Teaching / International)', nextQuestion: 'practice_time' },
        { value: 'later', label: 'Later', nextQuestion: 'practice_time' },
        { value: 'no', label: 'No', nextQuestion: 'practice_time' },
      ],
    },

    // ⏱️ PRACTICE
    {
      key: 'practice_time',
      text: 'How many hours can you practice daily?',
      type: 'number',
      validation: { min: 1, max: 10 },
    },

  ],
},


  /*
┌─────────────────────────┐
│     Health issues       │
└─────────────────────────┘
*/

{
  key: 'health_issues',
  name: 'Health Issues',
  icon: 'Activity',
  description: 'Root cause analysis and health solutions',
  questions: [

    {
      key: 'issue_type',
      text: 'What type of health concern do you have?',
      type: 'single',
      options: [
        { value: 'chronic', label: 'Chronic Condition', nextQuestion: 'issue_duration' },
        { value: 'lifestyle', label: 'Lifestyle-related Issue', nextQuestion: 'issue_duration' },
        { value: 'mental', label: 'Mental Health Concern', nextQuestion: 'issue_duration' },
        { value: 'nutrition', label: 'Nutrition / Diet Related', nextQuestion: 'issue_duration' },
      ],
    },

    {
      key: 'issue_duration',
      text: 'How long have you been experiencing this?',
      type: 'single',
      options: [
        { value: 'recent', label: 'Recent (less than 3 months)', nextQuestion: 'symptom_severity' },
        { value: 'moderate', label: 'Moderate (3–12 months)', nextQuestion: 'symptom_severity' },
        { value: 'chronic', label: 'Long-term (more than 1 year)', nextQuestion: 'symptom_severity' },
      ],
    },

    {
      key: 'symptom_severity',
      text: 'How severe are your symptoms?',
      type: 'single',
      options: [
        { value: 'mild', label: 'Mild & manageable', nextQuestion: 'medical_support' },
        { value: 'moderate', label: 'Moderate, affects routine', nextQuestion: 'medical_support' },
        { value: 'severe', label: 'Severe, daily life impacted', nextQuestion: 'medical_support' },
      ],
    },

    {
      key: 'medical_support',
      text: 'Have you consulted a doctor or professional?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, currently under treatment', nextQuestion: 'treatment_type' },
        { value: 'past', label: 'Consulted earlier', nextQuestion: 'treatment_type' },
        { value: 'no', label: 'Not yet', nextQuestion: 'treatment_type' },
      ],
    },

    {
      key: 'treatment_type',
      text: 'What kind of treatment are you following?',
      type: 'single',
      options: [
        { value: 'allopathy', label: 'Allopathy / Modern medicine', nextQuestion: 'lifestyle_focus' },
        { value: 'ayurveda', label: 'Ayurveda / Alternative medicine', nextQuestion: 'lifestyle_focus' },
        { value: 'self', label: 'Self-care / Home remedies', nextQuestion: 'lifestyle_focus' },
        { value: 'none', label: 'No treatment yet', nextQuestion: 'lifestyle_focus' },
      ],
    },

    {
      key: 'lifestyle_focus',
      text: 'Which lifestyle area needs the most improvement?',
      type: 'single',
      options: [
        { value: 'stress', label: 'Stress management', nextQuestion: 'roadmap_goal' },
        { value: 'sleep', label: 'Sleep routine', nextQuestion: 'roadmap_goal' },
        { value: 'diet', label: 'Diet & nutrition', nextQuestion: 'roadmap_goal' },
        { value: 'exercise', label: 'Physical activity', nextQuestion: 'roadmap_goal' },
      ],
    },

    // ✅ THIS QUESTION TRIGGERS ROADMAP (VERY IMPORTANT)
    {
      key: 'roadmap_goal',
      text: 'What do you want help with next?',
      type: 'single',
      options: [
        { value: 'recover', label: 'Recover and improve my health' },
        { value: 'manage', label: 'Manage condition long-term' },
        { value: 'prevent', label: 'Prevent future health issues' },
        { value: 'plan', label: 'Generate a personalized health roadmap' },
      ],
    },

  ],
},



  /*
┌─────────────────────────┐
│       Habits Dream      │
└─────────────────────────┘
*/

{
  key: 'habits',
  name: 'Habits',
  icon: 'CheckCircle',
  description: 'Building good habits and breaking bad ones',
  questions: [

    {
      key: 'habit_direction',
      text: 'What do you want to work on?',
      type: 'single',
      options: [
        { value: 'build_good', label: 'Build Good Habits', nextQuestion: 'good_habit_type' },
        { value: 'break_bad', label: 'Break Bad Habits', nextQuestion: 'bad_habit_type' },
        { value: 'both', label: 'Both (Build & Break)', nextQuestion: 'good_habit_type' },
      ],
    },

    {
      key: 'good_habit_type',
      text: 'Which good habit do you want to build?',
      type: 'single',
      options: [
        { value: 'exercise', label: 'Regular Exercise', nextQuestion: 'habit_time' },
        { value: 'reading', label: 'Daily Reading', nextQuestion: 'habit_time' },
        { value: 'meditation', label: 'Meditation / Mindfulness', nextQuestion: 'habit_time' },
        { value: 'sleep', label: 'Better Sleep Schedule', nextQuestion: 'habit_time' },
        { value: 'learning', label: 'Learning a New Skill', nextQuestion: 'habit_time' },
        { value: 'other', label: 'Other Good Habit', nextQuestion: 'habit_time' },
      ],
    },

    {
      key: 'bad_habit_type',
      text: 'Which bad habit do you want to break?',
      type: 'single',
      options: [
        { value: 'procrastination', label: 'Procrastination', nextQuestion: 'habit_trigger' },
        { value: 'phone', label: 'Excessive Phone / Social Media', nextQuestion: 'habit_trigger' },
        { value: 'sleep', label: 'Irregular Sleep', nextQuestion: 'habit_trigger' },
        { value: 'junk_food', label: 'Junk Food / Overeating', nextQuestion: 'habit_trigger' },
        { value: 'smoking', label: 'Smoking / Nicotine', nextQuestion: 'habit_trigger' },
        { value: 'other', label: 'Other Bad Habit', nextQuestion: 'habit_trigger' },
      ],
    },

    {
      key: 'habit_time',
      text: 'How much time can you dedicate daily?',
      type: 'single',
      options: [
        { value: '5', label: '5–10 minutes', nextQuestion: 'commitment_level' },
        { value: '15', label: '15–30 minutes', nextQuestion: 'commitment_level' },
        { value: '30', label: '30–60 minutes', nextQuestion: 'commitment_level' },
        { value: '60', label: 'More than 1 hour', nextQuestion: 'commitment_level' },
      ],
    },

    {
      key: 'habit_trigger',
      text: 'When does this habit usually happen most?',
      type: 'single',
      options: [
        { value: 'stress', label: 'During stress or anxiety', nextQuestion: 'commitment_level' },
        { value: 'boredom', label: 'When bored', nextQuestion: 'commitment_level' },
        { value: 'night', label: 'Late night', nextQuestion: 'commitment_level' },
        { value: 'social', label: 'Social situations', nextQuestion: 'commitment_level' },
        { value: 'routine', label: 'Part of daily routine', nextQuestion: 'commitment_level' },
      ],
    },

    {
      key: 'commitment_level',
      text: 'How committed are you to making this change?',
      type: 'single',
      options: [
        { value: 'very', label: 'Very committed', nextQuestion: 'roadmap_goal' },
        { value: 'moderate', label: 'Moderately committed', nextQuestion: 'roadmap_goal' },
        { value: 'exploring', label: 'Just exploring', nextQuestion: 'roadmap_goal' },
      ],
    },

    // ✅ FINAL QUESTION — ROADMAP TRIGGER
    {
      key: 'roadmap_goal',
      text: 'What do you want help with next?',
      type: 'single',
      options: [
        { value: 'build', label: 'Build strong daily habits' },
        { value: 'break', label: 'Break bad habits permanently' },
        { value: 'balance', label: 'Balance lifestyle habits' },
        { value: 'plan', label: 'Generate my habit improvement roadmap' },
      ],
    },

  ],
},


  /*
┌─────────────────────────┐
│    Agriculture Dream    │
└─────────────────────────┘
*/
  {
  key: 'agriculture',
  name: 'Agriculture',
  icon: 'Sprout',
  description: 'Agricultural problems, farming, and agribusiness solutions',
  questions: [

    {
      key: 'ag_focus',
      text: 'What do you want to focus on in agriculture?',
      type: 'single',
      options: [
        { value: 'problem', label: 'Solve Agricultural Problems', nextQuestion: 'problem_area' },
        { value: 'farming', label: 'Start or Improve Farming', nextQuestion: 'farming_type' },
        { value: 'business', label: 'Agribusiness / Startup', nextQuestion: 'business_area' },
      ],
    },

    /* ===== PROBLEM PATH ===== */
    {
      key: 'problem_area',
      text: 'Which problem are you facing?',
      type: 'single',
      options: [
        { value: 'crop', label: 'Crop Issues', nextQuestion: 'crop_problem' },
        { value: 'soil', label: 'Soil Issues', nextQuestion: 'soil_problem' },
        { value: 'water', label: 'Water Issues', nextQuestion: 'water_problem' },
        { value: 'market', label: 'Market Issues', nextQuestion: 'roadmap_goal' },
      ],
    },

    {
      key: 'crop_problem',
      text: 'What crop issue do you face most?',
      type: 'single',
      options: [
        { value: 'pest', label: 'Pests / Diseases', nextQuestion: 'crop_stage' },
        { value: 'yield', label: 'Low Yield', nextQuestion: 'crop_stage' },
        { value: 'climate', label: 'Weather Damage', nextQuestion: 'crop_stage' },
      ],
    },

    {
      key: 'crop_stage',
      text: 'Which crop stage is affected?',
      type: 'single',
      options: [
        { value: 'sowing', label: 'Sowing Stage', nextQuestion: 'crop_support' },
        { value: 'growth', label: 'Growth Stage', nextQuestion: 'crop_support' },
        { value: 'harvest', label: 'Harvest Stage', nextQuestion: 'crop_support' },
      ],
    },

    {
      key: 'crop_support',
      text: 'What support do you need most?',
      type: 'single',
      options: [
        { value: 'expert', label: 'Expert Guidance', nextQuestion: 'roadmap_goal' },
        { value: 'fertilizer', label: 'Fertilizer Plan', nextQuestion: 'roadmap_goal' },
        { value: 'pest', label: 'Pest Control Solution', nextQuestion: 'roadmap_goal' },
        { value: 'tech', label: 'Modern Farming Technology', nextQuestion: 'roadmap_goal' },
      ],
    },

    /* ===== SOIL PATH ===== */
    {
      key: 'soil_problem',
      text: 'What soil issue do you have?',
      type: 'single',
      options: [
        { value: 'fertility', label: 'Low Fertility', nextQuestion: 'soil_support' },
        { value: 'salinity', label: 'Salinity / Alkaline', nextQuestion: 'soil_support' },
        { value: 'erosion', label: 'Soil Erosion', nextQuestion: 'soil_support' },
      ],
    },

    {
      key: 'soil_support',
      text: 'What soil support do you want?',
      type: 'single',
      options: [
        { value: 'testing', label: 'Soil Testing Guidance', nextQuestion: 'roadmap_goal' },
        { value: 'organic', label: 'Organic Improvement', nextQuestion: 'roadmap_goal' },
        { value: 'fertilizer', label: 'Fertilizer Recommendation', nextQuestion: 'roadmap_goal' },
      ],
    },

    /* ===== WATER PATH ===== */
    {
      key: 'water_problem',
      text: 'What water issue are you facing?',
      type: 'single',
      options: [
        { value: 'scarcity', label: 'Water Scarcity', nextQuestion: 'water_support' },
        { value: 'irregular', label: 'Irregular Supply', nextQuestion: 'water_support' },
      ],
    },

    {
      key: 'water_support',
      text: 'What water solution do you need?',
      type: 'single',
      options: [
        { value: 'drip', label: 'Drip Irrigation', nextQuestion: 'roadmap_goal' },
        { value: 'harvest', label: 'Rainwater Harvesting', nextQuestion: 'roadmap_goal' },
        { value: 'planning', label: 'Water Management Plan', nextQuestion: 'roadmap_goal' },
      ],
    },

    /* ===== FARMING PATH ===== */
    {
      key: 'farming_type',
      text: 'What type of farming do you want?',
      type: 'single',
      options: [
        { value: 'traditional', label: 'Traditional Farming', nextQuestion: 'land_size' },
        { value: 'organic', label: 'Organic Farming', nextQuestion: 'land_size' },
        { value: 'natural', label: 'Natural / Zero Budget', nextQuestion: 'land_size' },
      ],
    },

    {
      key: 'land_size',
      text: 'How much land do you have?',
      type: 'single',
      options: [
        { value: 'small', label: 'Less than 2 acres', nextQuestion: 'farming_support' },
        { value: 'medium', label: '2–10 acres', nextQuestion: 'farming_support' },
        { value: 'large', label: 'More than 10 acres', nextQuestion: 'farming_support' },
      ],
    },

    {
      key: 'farming_support',
      text: 'What farming support do you want?',
      type: 'single',
      options: [
        { value: 'training', label: 'Training & Courses', nextQuestion: 'roadmap_goal' },
        { value: 'schemes', label: 'Government Schemes', nextQuestion: 'roadmap_goal' },
        { value: 'machinery', label: 'Machinery Guidance', nextQuestion: 'roadmap_goal' },
      ],
    },

    /* ===== AGRIBUSINESS PATH ===== */
    {
      key: 'business_area',
      text: 'Which agribusiness interests you?',
      type: 'single',
      options: [
        { value: 'processing', label: 'Food Processing', nextQuestion: 'investment' },
        { value: 'trading', label: 'Agri Trading / Export', nextQuestion: 'investment' },
        { value: 'agritech', label: 'AgriTech Startup', nextQuestion: 'investment' },
      ],
    },

    {
      key: 'investment',
      text: 'What is your investment capacity?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low', nextQuestion: 'roadmap_goal' },
        { value: 'medium', label: 'Medium', nextQuestion: 'roadmap_goal' },
        { value: 'high', label: 'High', nextQuestion: 'roadmap_goal' },
      ],
    },

    /* ✅ FINAL ROADMAP QUESTION */
    {
      key: 'roadmap_goal',
      text: 'What do you want to generate now?',
      type: 'single',
      options: [
        { value: 'solution', label: 'Agricultural problem solution roadmap' },
        { value: 'farming', label: 'Step-by-step farming roadmap' },
        { value: 'business', label: 'Agribusiness startup roadmap' },
        { value: 'complete', label: 'Complete agriculture growth roadmap' },
      ],
    },

  ],
},


  /*
┌─────────────────────────┐
│        Music dream      │
└─────────────────────────┘
*/

{
  key: 'music',
  name: 'Musical Instruments Training',
  icon: 'Music',
  description: 'Learning and teaching musical instruments',
  questions: [

    // 🎼 INSTRUMENT
    {
      key: 'instrument_type',
      text: 'Which instrument interests you?',
      type: 'single',
      options: [
        { value: 'guitar', label: 'Guitar', nextQuestion: 'music_level' },
        { value: 'piano', label: 'Piano / Keyboard', nextQuestion: 'music_level' },
        { value: 'violin', label: 'Violin', nextQuestion: 'music_level' },
        { value: 'flute', label: 'Flute', nextQuestion: 'music_level' },
        { value: 'drums', label: 'Drums', nextQuestion: 'music_level' },
        { value: 'tabla', label: 'Tabla', nextQuestion: 'music_level' },
        { value: 'harmonium', label: 'Harmonium', nextQuestion: 'music_level' },
        { value: 'other', label: 'Other Instrument', nextQuestion: 'music_level' },
      ],
    },

    // 🎓 LEVEL
    {
      key: 'music_level',
      text: 'What is your current skill level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner', nextQuestion: 'music_goal' },
        { value: 'intermediate', label: 'Intermediate', nextQuestion: 'music_goal' },
        { value: 'advanced', label: 'Advanced', nextQuestion: 'music_goal' },
      ],
    },

    // 🎯 GOAL
    {
      key: 'music_goal',
      text: 'What is your goal with music?',
      type: 'single',
      options: [
        { value: 'hobby', label: 'Learn as a Hobby', nextQuestion: 'music_genre' },
        { value: 'professional', label: 'Become a Professional Musician', nextQuestion: 'music_genre' },
        { value: 'teacher', label: 'Teach Music', nextQuestion: 'music_genre' },
        { value: 'performance', label: 'Stage / Live Performance', nextQuestion: 'music_genre' },
      ],
    },

    // 🎵 GENRE
    {
      key: 'music_genre',
      text: 'Which music style interests you most?',
      type: 'single',
      options: [
        { value: 'classical', label: 'Classical', nextQuestion: 'practice_commitment' },
        { value: 'film', label: 'Film / Movie Songs', nextQuestion: 'practice_commitment' },
        { value: 'western', label: 'Western / Pop / Rock', nextQuestion: 'practice_commitment' },
        { value: 'folk', label: 'Folk / Traditional', nextQuestion: 'practice_commitment' },
        { value: 'devotional', label: 'Devotional / Bhajans', nextQuestion: 'practice_commitment' },
      ],
    },

    // ⏱ PRACTICE TIME
    {
      key: 'practice_commitment',
      text: 'How much time can you practice daily?',
      type: 'single',
      options: [
        { value: '15', label: '15–30 minutes', nextQuestion: 'learning_mode' },
        { value: '30', label: '30–60 minutes', nextQuestion: 'learning_mode' },
        { value: '60', label: '1–2 hours', nextQuestion: 'learning_mode' },
        { value: '120', label: 'More than 2 hours', nextQuestion: 'learning_mode' },
      ],
    },

    // 📚 LEARNING MODE
    {
      key: 'learning_mode',
      text: 'How do you want to learn?',
      type: 'single',
      options: [
        { value: 'online', label: 'Online Courses / Videos', nextQuestion: 'timeline' },
        { value: 'offline', label: 'Offline Classes / Guru', nextQuestion: 'timeline' },
        { value: 'self', label: 'Self Practice', nextQuestion: 'timeline' },
      ],
    },

    // 🕒 TIMELINE
    {
      key: 'timeline',
      text: 'When do you want to see noticeable improvement?',
      type: 'single',
      options: [
        { value: '1_month', label: 'Within 1 month' },
        { value: '3_months', label: 'Within 3 months' },
        { value: '6_months', label: 'Within 6 months' },
        { value: '1_year', label: 'Within 1 year' },
      ],
    },

  ],
},

  /*
┌─────────────────────────┐
│  Opportunity Discovery  │
└─────────────────────────┘
*/

 {
  key: 'opportunity',
  name: 'Opportunity Discovery',
  icon: 'Search',
  description: 'Finding and evaluating opportunities',
  questions: [

    // 🔍 OPPORTUNITY TYPE
    {
      key: 'opportunity_type',
      text: 'What kind of opportunity are you looking for?',
      type: 'single',
      options: [
        { value: 'career', label: 'Career Opportunities', nextQuestion: 'field_preference' },
        { value: 'business', label: 'Business Opportunities', nextQuestion: 'investment_capacity' },
        { value: 'education', label: 'Educational Opportunities', nextQuestion: 'education_level' },
        { value: 'skill', label: 'Skill Development Opportunities', nextQuestion: 'skill_area' },
      ],
    },

    /* ======================
       🎯 CAREER PATH
    ====================== */
    {
      key: 'field_preference',
      text: 'Which field interests you most?',
      type: 'text',
      nextQuestion: 'career_goal',
    },

    {
      key: 'career_goal',
      text: 'What is your primary career goal?',
      type: 'single',
      options: [
        { value: 'job', label: 'Get a Job', nextQuestion: 'career_level' },
        { value: 'switch', label: 'Career Switch', nextQuestion: 'career_level' },
        { value: 'growth', label: 'Career Growth / Promotion', nextQuestion: 'career_level' },
      ],
    },

    {
      key: 'career_level',
      text: 'What is your experience level?',
      type: 'single',
      options: [
        { value: 'fresher', label: 'Fresher' },
        { value: 'mid', label: '1–5 Years Experience' },
        { value: 'senior', label: '5+ Years Experience' },
      ],
    },

    /* ======================
       💼 BUSINESS PATH
    ====================== */
    {
      key: 'investment_capacity',
      text: 'What is your investment capacity?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low (under 1 lakh)', nextQuestion: 'business_risk' },
        { value: 'medium', label: 'Medium (1–5 lakhs)', nextQuestion: 'business_risk' },
        { value: 'high', label: 'High (above 5 lakhs)', nextQuestion: 'business_risk' },
      ],
    },

    {
      key: 'business_risk',
      text: 'How much risk are you willing to take?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low risk', nextQuestion: 'business_mode' },
        { value: 'medium', label: 'Medium risk', nextQuestion: 'business_mode' },
        { value: 'high', label: 'High risk', nextQuestion: 'business_mode' },
      ],
    },

    {
      key: 'business_mode',
      text: 'What type of business do you prefer?',
      type: 'single',
      options: [
        { value: 'online', label: 'Online Business' },
        { value: 'offline', label: 'Offline / Physical Business' },
        { value: 'hybrid', label: 'Hybrid Model' },
      ],
    },

    /* ======================
       🎓 EDUCATION PATH
    ====================== */
    {
      key: 'education_level',
      text: 'What level of education are you interested in?',
      type: 'single',
      options: [
        { value: 'school', label: 'School Level', nextQuestion: 'education_goal' },
        { value: 'undergraduate', label: 'Undergraduate', nextQuestion: 'education_goal' },
        { value: 'postgraduate', label: 'Postgraduate', nextQuestion: 'education_goal' },
      ],
    },

    {
      key: 'education_goal',
      text: 'What is your purpose of education?',
      type: 'single',
      options: [
        { value: 'job', label: 'Job-Oriented', nextQuestion: 'education_mode' },
        { value: 'research', label: 'Research / Higher Studies', nextQuestion: 'education_mode' },
        { value: 'skill', label: 'Skill Enhancement', nextQuestion: 'education_mode' },
      ],
    },

    {
      key: 'education_mode',
      text: 'Preferred learning mode?',
      type: 'single',
      options: [
        { value: 'online', label: 'Online' },
        { value: 'offline', label: 'Offline / Campus' },
        { value: 'hybrid', label: 'Hybrid' },
      ],
    },

    /* ======================
       🧠 SKILL PATH
    ====================== */
    {
      key: 'skill_area',
      text: 'What skill area interests you?',
      type: 'text',
      nextQuestion: 'skill_goal',
    },

    {
      key: 'skill_goal',
      text: 'Why do you want to learn this skill?',
      type: 'single',
      options: [
        { value: 'job', label: 'Job / Career Growth', nextQuestion: 'skill_time' },
        { value: 'freelance', label: 'Freelancing / Side Income', nextQuestion: 'skill_time' },
        { value: 'interest', label: 'Personal Interest', nextQuestion: 'skill_time' },
      ],
    },

    {
      key: 'skill_time',
      text: 'How much time can you dedicate weekly?',
      type: 'single',
      options: [
        { value: 'low', label: '1–3 hours' },
        { value: 'medium', label: '4–7 hours' },
        { value: 'high', label: '8+ hours' },
      ],
    },

  ],
},
/*
┌─────────────────────────┐
│        Film Dream       │
└─────────────────────────┘
*/

  {
    key: 'film',
    name: 'Film Industry',
    icon: 'Film',
    description: 'Careers in film and entertainment',
    questions: [
      {
        key: 'film_role',
        text: 'Which role interests you in film industry?',
        type: 'single',
        options: [
          { value: 'acting', label: 'Acting', nextQuestion: 'experience_level' },
          { value: 'direction', label: 'Direction', nextQuestion: 'experience_level' },
          { value: 'cinematography', label: 'Cinematography', nextQuestion: 'experience_level' },
          { value: 'editing', label: 'Editing', nextQuestion: 'experience_level' },
          { value: 'production', label: 'Production', nextQuestion: 'experience_level' },
          { value: 'writing', label: 'Screenplay Writing', nextQuestion: 'experience_level' },
        ],
      },
      {
        key: 'experience_level',
        text: 'What is your experience level?',
        type: 'single',
        options: [
          { value: 'none', label: 'No experience, complete beginner' },
          { value: 'some', label: 'Some experience or training' },
          { value: 'experienced', label: 'Experienced, looking to advance' },
        ],
      },
    ],
  },
  {
  key: 'training',
  name: 'Training & Skill Development',
  icon: 'BookOpen',
  description: 'Professional training and skill development',
  questions: [

    /* ======================
       1️⃣ TRAINING FIELD
    ====================== */
    {
      key: 'training_field',
      text: 'What field do you want to develop skills in?',
      type: 'single',
      options: [
        { value: 'technical', label: 'Technical Skills (IT / Programming)', nextQuestion: 'specific_skill' },
        { value: 'soft_skills', label: 'Soft Skills (Communication / Leadership)', nextQuestion: 'specific_skill' },
        { value: 'vocational', label: 'Vocational Skills (Electrician, Mechanic, etc.)', nextQuestion: 'specific_skill' },
        { value: 'creative', label: 'Creative Skills (Design / Arts)', nextQuestion: 'specific_skill' },
      ],
    },

    /* ======================
       2️⃣ SPECIFIC SKILL
    ====================== */
    {
      key: 'specific_skill',
      text: 'Please specify the skill you want to develop',
      type: 'text',
      nextQuestion: 'experience_level',
    },

    /* ======================
       3️⃣ EXPERIENCE LEVEL
    ====================== */
    {
      key: 'experience_level',
      text: 'What is your current level in this skill?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner', nextQuestion: 'learning_goal' },
        { value: 'intermediate', label: 'Intermediate', nextQuestion: 'learning_goal' },
        { value: 'advanced', label: 'Advanced', nextQuestion: 'learning_goal' },
      ],
    },

    /* ======================
       4️⃣ LEARNING GOAL
    ====================== */
    {
      key: 'learning_goal',
      text: 'Why do you want to learn this skill?',
      type: 'single',
      options: [
        { value: 'job', label: 'Get a Job', nextQuestion: 'learning_commitment' },
        { value: 'promotion', label: 'Career Growth / Promotion', nextQuestion: 'learning_commitment' },
        { value: 'freelance', label: 'Freelancing / Side Income', nextQuestion: 'learning_commitment' },
        { value: 'interest', label: 'Personal Interest', nextQuestion: 'learning_commitment' },
      ],
    },

    /* ======================
       5️⃣ TIME COMMITMENT
    ====================== */
    {
      key: 'learning_commitment',
      text: 'How many hours per week can you dedicate?',
      type: 'number',
      validation: { min: 1, max: 40 },
      nextQuestion: 'learning_mode',
    },

    /* ======================
       6️⃣ LEARNING MODE
    ====================== */
    {
      key: 'learning_mode',
      text: 'Which learning mode do you prefer?',
      type: 'single',
      options: [
        { value: 'online', label: 'Online Courses', nextQuestion: 'budget_range' },
        { value: 'offline', label: 'Offline / Classroom Training', nextQuestion: 'budget_range' },
        { value: 'hybrid', label: 'Hybrid (Online + Offline)', nextQuestion: 'budget_range' },
      ],
    },

    /* ======================
       7️⃣ BUDGET
    ====================== */
    {
      key: 'budget_range',
      text: 'What is your budget for training?',
      type: 'single',
      options: [
        { value: 'free', label: 'Free Resources Only', nextQuestion: 'certification_need' },
        { value: 'low', label: 'Low Budget', nextQuestion: 'certification_need' },
        { value: 'medium', label: 'Medium Budget', nextQuestion: 'certification_need' },
        { value: 'high', label: 'High Budget', nextQuestion: 'certification_need' },
      ],
    },

    /* ======================
       8️⃣ CERTIFICATION
    ====================== */
    {
      key: 'certification_need',
      text: 'Do you need certification after training?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, certification is important', nextQuestion: 'placement_support' },
        { value: 'no', label: 'No, skills matter more', nextQuestion: 'placement_support' },
      ],
    },

    /* ======================
       9️⃣ PLACEMENT / OUTCOME
    ====================== */
    {
      key: 'placement_support',
      text: 'What outcome do you expect from this training?',
      type: 'single',
      options: [
        { value: 'job', label: 'Job Placement Support' },
        { value: 'portfolio', label: 'Portfolio / Project Guidance' },
        { value: 'freelance', label: 'Freelancing Guidance' },
        { value: 'knowledge', label: 'Skill Improvement Only' },
      ],
    },

  ],
},
/*
┌─────────────────────────┐
│    irrigation Dream     │
└─────────────────────────┘
*/
{
  key: 'irrigation',
  name: 'Irrigation Works',
  icon: 'Droplets',
  description: 'Irrigation systems and water management',
  questions: [

    {
      key: 'irrigation_interest',
      text: 'What is your interest in irrigation?',
      type: 'single',
      options: [
        { value: 'install', label: 'Installing Irrigation System', nextQuestion: 'land_type' },
        { value: 'improve', label: 'Improving Existing System', nextQuestion: 'current_problem' },
        { value: 'career', label: 'Career in Irrigation Engineering', nextQuestion: 'education_bg' },
      ],
    },

    {
      key: 'land_type',
      text: 'What type of land is this irrigation for?',
      type: 'single',
      options: [
        { value: 'agricultural', label: 'Agricultural Land', nextQuestion: 'water_source' },
        { value: 'garden', label: 'Garden / Landscaping', nextQuestion: 'water_source' },
        { value: 'commercial', label: 'Commercial Property', nextQuestion: 'water_source' },
      ],
    },

    {
      key: 'water_source',
      text: 'What is the main water source?',
      type: 'single',
      options: [
        { value: 'rain', label: 'Rainwater', nextQuestion: 'irrigation_method' },
        { value: 'borewell', label: 'Borewell', nextQuestion: 'irrigation_method' },
        { value: 'canal', label: 'Canal', nextQuestion: 'irrigation_method' },
        { value: 'tank', label: 'Water Tank / Reservoir', nextQuestion: 'irrigation_method' },
      ],
    },

    {
      key: 'irrigation_method',
      text: 'Which irrigation method are you considering?',
      type: 'single',
      options: [
        { value: 'drip', label: 'Drip Irrigation', nextQuestion: 'budget_range' },
        { value: 'sprinkler', label: 'Sprinkler System', nextQuestion: 'budget_range' },
        { value: 'flood', label: 'Flood Irrigation', nextQuestion: 'budget_range' },
        { value: 'micro', label: 'Micro Irrigation', nextQuestion: 'budget_range' },
      ],
    },

    {
      key: 'budget_range',
      text: 'What is your approximate budget?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low Budget', nextQuestion: 'government_support' },
        { value: 'medium', label: 'Medium Budget', nextQuestion: 'government_support' },
        { value: 'high', label: 'High Budget', nextQuestion: 'government_support' },
      ],
    },

    {
      key: 'government_support',
      text: 'Do you want information on government subsidies or schemes?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, subsidy details needed' },
        { value: 'no', label: 'No, private setup' },
      ],
    },

    {
      key: 'current_problem',
      text: 'What problem are you facing with your current irrigation system?',
      type: 'single',
      options: [
        { value: 'water_waste', label: 'Water Wastage', nextQuestion: 'system_age' },
        { value: 'uneven', label: 'Uneven Water Distribution', nextQuestion: 'system_age' },
        { value: 'maintenance', label: 'High Maintenance Cost', nextQuestion: 'system_age' },
        { value: 'pressure', label: 'Low Water Pressure', nextQuestion: 'system_age' },
      ],
    },

    {
      key: 'system_age',
      text: 'How old is your current irrigation system?',
      type: 'single',
      options: [
        { value: 'new', label: 'Less than 1 year', nextQuestion: 'improvement_goal' },
        { value: 'medium', label: '1–5 years', nextQuestion: 'improvement_goal' },
        { value: 'old', label: 'More than 5 years', nextQuestion: 'improvement_goal' },
      ],
    },

    {
      key: 'improvement_goal',
      text: 'What improvement are you mainly looking for?',
      type: 'single', // ✅ FIXED
      options: [
        { value: 'efficiency', label: 'Better Water Efficiency' },
        { value: 'automation', label: 'Automation / Smart Irrigation' },
        { value: 'cost', label: 'Reduced Operating Cost' },
        { value: 'repair', label: 'Repair & Maintenance Guidance' },
      ],
    },

    {
      key: 'education_bg',
      text: 'What is your educational background?',
      type: 'single',
      options: [
        { value: 'engineering', label: 'Engineering', nextQuestion: 'career_goal' },
        { value: 'agriculture', label: 'Agriculture', nextQuestion: 'career_goal' },
        { value: 'diploma', label: 'Diploma / ITI', nextQuestion: 'career_goal' },
        { value: 'other', label: 'Other', nextQuestion: 'career_goal' },
      ],
    },

    {
      key: 'career_goal',
      text: 'What do you want to do in irrigation as a career?',
      type: 'single',
      options: [
        { value: 'designer', label: 'Irrigation System Designer' },
        { value: 'technician', label: 'Installation Technician' },
        { value: 'consultant', label: 'Irrigation Consultant' },
        { value: 'business', label: 'Start Irrigation Business' },
      ],
    },

  ],
},



    /*
┌─────────────────────────┐
│   Horticulture dream    │
└─────────────────────────┘
*/
  {
  key: 'horticulture',
  name: 'Horticulture',
  icon: 'Flower',
  description: 'Horticulture and gardening careers',
  questions: [

    {
      key: 'horticulture_focus',
      text: 'What aspect of horticulture interests you?',
      type: 'single',
      options: [
        { value: 'commercial', label: 'Commercial Horticulture', nextQuestion: 'crop_type' },
        { value: 'landscaping', label: 'Landscaping / Garden Design', nextQuestion: 'design_experience' },
        { value: 'floriculture', label: 'Floriculture (Flower Cultivation)', nextQuestion: 'business_intent' },
        { value: 'nursery', label: 'Plant Nursery Business', nextQuestion: 'business_intent' },
      ],
    },

    /* 🌱 COMMERCIAL CROP PATH */
    {
      key: 'crop_type',
      text: 'Which crops interest you most?',
      type: 'single',
      options: [
        { value: 'fruits', label: 'Fruits', nextQuestion: 'land_size' },
        { value: 'vegetables', label: 'Vegetables', nextQuestion: 'land_size' },
        { value: 'flowers', label: 'Flowers', nextQuestion: 'land_size' },
      ],
    },

    {
      key: 'land_size',
      text: 'How much land do you have for cultivation?',
      type: 'single',
      options: [
        { value: 'small', label: 'Less than 2 acres', nextQuestion: 'experience_level' },
        { value: 'medium', label: '2–5 acres', nextQuestion: 'experience_level' },
        { value: 'large', label: 'More than 5 acres', nextQuestion: 'experience_level' },
      ],
    },

    /* 🎨 LANDSCAPING PATH */
    {
      key: 'design_experience',
      text: 'Do you have prior design or gardening experience?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, some experience', nextQuestion: 'project_type' },
        { value: 'no', label: 'No, need training', nextQuestion: 'training_need' },
      ],
    },

    {
      key: 'project_type',
      text: 'What type of projects interest you?',
      type: 'single',
      options: [
        { value: 'home', label: 'Home Gardens', nextQuestion: 'business_intent' },
        { value: 'commercial', label: 'Commercial Landscaping', nextQuestion: 'business_intent' },
        { value: 'public', label: 'Parks / Public Spaces', nextQuestion: 'business_intent' },
      ],
    },

    /* 📘 TRAINING */
    {
      key: 'training_need',
      text: 'What kind of training are you looking for?',
      type: 'single',
      options: [
        { value: 'basic', label: 'Basic Gardening Skills', nextQuestion: 'business_intent' },
        { value: 'advanced', label: 'Advanced Horticulture', nextQuestion: 'business_intent' },
        { value: 'certification', label: 'Certified Courses', nextQuestion: 'business_intent' },
      ],
    },

    /* 💼 BUSINESS / CAREER INTENT */
    {
      key: 'business_intent',
      text: 'What is your main goal?',
      type: 'single',
      options: [
        { value: 'business', label: 'Start a Business' },
        { value: 'job', label: 'Find a Job / Career' },
        { value: 'hobby', label: 'Personal Interest / Hobby' },
      ],
    },

  ],
},

  /*
┌─────────────────────────┐
│        AI dream         │
└─────────────────────────┘
*/
 {
  key: 'ai',
  name: 'Artificial Intelligence',
  icon: 'Brain',
  description: 'AI, Machine Learning, and future AI careers',
  questions: [

    /* ======================
       1️⃣ AI ROLE
    ====================== */
    {
      key: 'ai_role',
      text: 'What role interests you most in AI?',
      type: 'single',
      options: [
        { value: 'ml_engineer', label: 'Machine Learning Engineer', nextQuestion: 'programming_skills' },
        { value: 'data_scientist', label: 'Data Scientist', nextQuestion: 'programming_skills' },
        { value: 'ai_researcher', label: 'AI Researcher', nextQuestion: 'programming_skills' },
        { value: 'ai_developer', label: 'AI Application Developer', nextQuestion: 'programming_skills' },
        { value: 'ai_consultant', label: 'AI Consultant / Implementation', nextQuestion: 'programming_skills' },
      ],
    },

    /* ======================
       2️⃣ PROGRAMMING
    ====================== */
    {
      key: 'programming_skills',
      text: 'What is your programming skill level?',
      type: 'single',
      options: [
        { value: 'advanced', label: 'Advanced (Python, ML frameworks)', nextQuestion: 'math_background' },
        { value: 'intermediate', label: 'Intermediate (learning ML)', nextQuestion: 'math_background' },
        { value: 'beginner', label: 'Beginner (need basics)', nextQuestion: 'math_background' },
      ],
    },

    /* ======================
       3️⃣ MATHEMATICS
    ====================== */
    {
      key: 'math_background',
      text: 'How strong is your mathematics background?',
      type: 'single',
      options: [
        { value: 'strong', label: 'Strong (Statistics, Linear Algebra)', nextQuestion: 'ai_domain' },
        { value: 'moderate', label: 'Moderate, willing to learn', nextQuestion: 'ai_domain' },
        { value: 'weak', label: 'Weak, need foundation', nextQuestion: 'ai_domain' },
      ],
    },

    /* ======================
       4️⃣ AI DOMAIN
    ====================== */
    {
      key: 'ai_domain',
      text: 'Which AI domain interests you most?',
      type: 'single',
      options: [
        { value: 'ml', label: 'Machine Learning', nextQuestion: 'ml_type' },
        { value: 'dl', label: 'Deep Learning', nextQuestion: 'dl_focus' },
        { value: 'nlp', label: 'Natural Language Processing (NLP)', nextQuestion: 'nlp_usecase' },
        { value: 'cv', label: 'Computer Vision', nextQuestion: 'cv_usecase' },
        { value: 'genai', label: 'Generative AI (ChatGPT, LLMs)', nextQuestion: 'genai_goal' },
      ],
    },

    /* ======================
       5️⃣ MACHINE LEARNING
    ====================== */
    {
      key: 'ml_type',
      text: 'Which type of Machine Learning?',
      type: 'single',
      options: [
        { value: 'supervised', label: 'Supervised Learning', nextQuestion: 'project_goal' },
        { value: 'unsupervised', label: 'Unsupervised Learning', nextQuestion: 'project_goal' },
        { value: 'reinforcement', label: 'Reinforcement Learning', nextQuestion: 'project_goal' },
      ],
    },

    /* ======================
       6️⃣ DEEP LEARNING
    ====================== */
    {
      key: 'dl_focus',
      text: 'Which Deep Learning area?',
      type: 'single',
      options: [
        { value: 'cnn', label: 'CNN (Images)', nextQuestion: 'project_goal' },
        { value: 'rnn', label: 'RNN / LSTM', nextQuestion: 'project_goal' },
        { value: 'transformers', label: 'Transformers', nextQuestion: 'project_goal' },
      ],
    },

    /* ======================
       7️⃣ NLP
    ====================== */
    {
      key: 'nlp_usecase',
      text: 'What NLP use case interests you?',
      type: 'single',
      options: [
        { value: 'chatbot', label: 'Chatbots', nextQuestion: 'project_goal' },
        { value: 'translation', label: 'Language Translation', nextQuestion: 'project_goal' },
        { value: 'sentiment', label: 'Sentiment Analysis', nextQuestion: 'project_goal' },
      ],
    },

    /* ======================
       8️⃣ COMPUTER VISION
    ====================== */
    {
      key: 'cv_usecase',
      text: 'What Computer Vision use case?',
      type: 'single',
      options: [
        { value: 'face', label: 'Face Recognition', nextQuestion: 'project_goal' },
        { value: 'object', label: 'Object Detection', nextQuestion: 'project_goal' },
        { value: 'medical', label: 'Medical Imaging', nextQuestion: 'project_goal' },
      ],
    },

    /* ======================
       9️⃣ GENERATIVE AI
    ====================== */
    {
      key: 'genai_goal',
      text: 'What do you want to build with Generative AI?',
      type: 'single',
      options: [
        { value: 'chatgpt_apps', label: 'ChatGPT-like Apps', nextQuestion: 'deployment_goal' },
        { value: 'image', label: 'Image Generation', nextQuestion: 'deployment_goal' },
        { value: 'rag', label: 'RAG / AI Search Systems', nextQuestion: 'deployment_goal' },
      ],
    },

    /* ======================
       🔟 PROJECT GOAL
    ====================== */
    {
      key: 'project_goal',
      text: 'What is your main goal with AI?',
      type: 'single',
      options: [
        { value: 'job', label: 'Get a Job in AI', nextQuestion: 'learning_commitment' },
        { value: 'startup', label: 'Build AI Startup', nextQuestion: 'learning_commitment' },
        { value: 'research', label: 'Research & Innovation', nextQuestion: 'learning_commitment' },
        { value: 'personal', label: 'Personal Learning', nextQuestion: 'learning_commitment' },
      ],
    },

    /* ======================
       1️⃣1️⃣ TIME COMMITMENT
    ====================== */
    {
      key: 'learning_commitment',
      text: 'How many hours per week can you dedicate?',
      type: 'single',
      options: [
        { value: '5', label: '5–7 hours', nextQuestion: 'deployment_goal' },
        { value: '10', label: '10–15 hours', nextQuestion: 'deployment_goal' },
        { value: '20', label: '20+ hours', nextQuestion: 'deployment_goal' },
      ],
    },

    /* ======================
       1️⃣2️⃣ DEPLOYMENT
    ====================== */
    {
      key: 'deployment_goal',
      text: 'How do you want to deploy your AI work?',
      type: 'single',
      options: [
        { value: 'web', label: 'Web Application' },
        { value: 'mobile', label: 'Mobile App' },
        { value: 'api', label: 'API / Backend Service' },
        { value: 'research', label: 'Research Papers' },
      ],
    },

  ],
},


    /*
┌─────────────────────────┐
│       Design dream      │
└─────────────────────────┘
*/
  {
  key: 'design',
  name: '2D, 3D & AI Design',
  icon: 'Palette',
  description: 'Digital design, creative roles, and AI-powered design tools',
  questions: [

    /* ======================
       1️⃣ DESIGN DOMAIN
    ====================== */
    {
      key: 'design_type',
      text: 'Which design field interests you the most?',
      type: 'single',
      options: [
        { value: '2d_graphic', label: '2D Graphic Design', nextQuestion: 'design_role' },
        { value: 'ui_ux', label: 'UI / UX Design', nextQuestion: 'design_role' },
        { value: '3d_modeling', label: '3D Modeling & Rendering', nextQuestion: 'design_role' },
        { value: 'animation', label: 'Animation & Motion Graphics', nextQuestion: 'design_role' },
        { value: 'game_design', label: 'Game Design', nextQuestion: 'design_role' },
        { value: 'product_design', label: 'Product / Industrial Design', nextQuestion: 'design_role' },
        { value: 'ar_vr', label: 'AR / VR / Metaverse Design', nextQuestion: 'design_role' },
      ],
    },

    /* ======================
       2️⃣ DESIGN ROLE
    ====================== */
    {
      key: 'design_role',
      text: 'Which role do you want to pursue?',
      type: 'single',
      options: [
        { value: 'visual_designer', label: 'Visual / Brand Designer', nextQuestion: 'experience_level' },
        { value: 'ui_designer', label: 'UI Designer', nextQuestion: 'experience_level' },
        { value: 'ux_designer', label: 'UX Researcher / Designer', nextQuestion: 'experience_level' },
        { value: 'motion_designer', label: 'Motion Graphics Designer', nextQuestion: 'experience_level' },
        { value: '3d_artist', label: '3D Artist', nextQuestion: 'experience_level' },
        { value: 'game_artist', label: 'Game Artist / Level Designer', nextQuestion: 'experience_level' },
        { value: 'product_designer', label: 'Product Designer', nextQuestion: 'experience_level' },
        { value: 'creative_director', label: 'Creative Director', nextQuestion: 'experience_level' },
      ],
    },

    /* ======================
       3️⃣ EXPERIENCE LEVEL
    ====================== */
    {
      key: 'experience_level',
      text: 'What is your experience level in design?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner', nextQuestion: 'design_tools' },
        { value: 'intermediate', label: 'Intermediate', nextQuestion: 'design_tools' },
        { value: 'advanced', label: 'Advanced / Professional', nextQuestion: 'design_tools' },
      ],
    },

    /* ======================
       4️⃣ DESIGN SOFTWARE
    ====================== */
    {
      key: 'design_tools',
      text: 'Which design tools are you familiar with?',
      type: 'single',
      options: [
        { value: 'adobe', label: 'Adobe (Photoshop, Illustrator, After Effects)', nextQuestion: 'ai_tools_interest' },
        { value: 'figma', label: 'Figma / Sketch / XD', nextQuestion: 'ai_tools_interest' },
        { value: 'blender', label: 'Blender / Maya / 3ds Max', nextQuestion: 'ai_tools_interest' },
        { value: 'multiple', label: 'Multiple Tools', nextQuestion: 'ai_tools_interest' },
        { value: 'none', label: 'No tools yet', nextQuestion: 'ai_tools_interest' },
      ],
    },

    /* ======================
       5️⃣ AI TOOLS INTEREST
    ====================== */
    {
      key: 'ai_tools_interest',
      text: 'Are you interested in using AI-powered design tools?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, definitely', nextQuestion: 'ai_design_tools' },
        { value: 'maybe', label: 'Curious to learn', nextQuestion: 'ai_design_tools' },
        { value: 'no', label: 'Prefer traditional tools', nextQuestion: 'career_goal' },
      ],
    },

    /* ======================
       6️⃣ AI DESIGN TOOLS
    ====================== */
    {
      key: 'ai_design_tools',
      text: 'Which AI design tools do you want to learn?',
      type: 'single',
      options: [
        { value: 'midjourney', label: 'Midjourney / DALL·E (AI Art)', nextQuestion: 'career_goal' },
        { value: 'adobe_firefly', label: 'Adobe Firefly', nextQuestion: 'career_goal' },
        { value: 'figma_ai', label: 'Figma AI / UX AI Tools', nextQuestion: 'career_goal' },
        { value: 'runway', label: 'Runway ML (Video & Motion)', nextQuestion: 'career_goal' },
        { value: 'stable_diffusion', label: 'Stable Diffusion', nextQuestion: 'career_goal' },
        { value: 'multiple_ai', label: 'Multiple AI Tools', nextQuestion: 'career_goal' },
      ],
    },

    /* ======================
       7️⃣ CAREER GOAL
    ====================== */
    {
      key: 'career_goal',
      text: 'What is your main career goal in design?',
      type: 'single',
      options: [
        { value: 'freelance', label: 'Freelance Designer' },
        { value: 'job', label: 'Full-time Job in Company' },
        { value: 'startup', label: 'Design Startup / Studio' },
        { value: 'content', label: 'Content Creator / YouTuber' },
        { value: 'personal', label: 'Personal & Hobby Projects' },
      ],
    },

  ],
},


    /*
┌─────────────────────────┐
│      Business dream     │
└─────────────────────────┘
*/
 {
  key: 'business',
  name: 'Business & Entrepreneurship',
  icon: 'Store',
  description: 'Business ideas from small startups to large-scale enterprises',
  questions: [

    /* ======================
       1️⃣ BUSINESS STAGE
    ====================== */
    {
      key: 'business_stage',
      text: 'What stage of business are you interested in?',
      type: 'single',
      options: [
        { value: 'idea', label: 'Just an Idea / Startup', nextQuestion: 'business_model' },
        { value: 'small', label: 'Small Business (MSME)', nextQuestion: 'business_model' },
        { value: 'growing', label: 'Growing / Scaling Business', nextQuestion: 'business_model' },
        { value: 'large', label: 'Large / Enterprise Business', nextQuestion: 'business_model' },
      ],
    },

    /* ======================
       2️⃣ BUSINESS MODEL
    ====================== */
    {
      key: 'business_model',
      text: 'Which business model interests you?',
      type: 'single',
      options: [
        { value: 'startup', label: 'Startup (Innovative Idea)', nextQuestion: 'startup_type' },
        { value: 'traditional', label: 'Traditional Business', nextQuestion: 'traditional_type' },
        { value: 'online', label: 'Online / Digital Business', nextQuestion: 'online_type' },
        { value: 'manufacturing', label: 'Manufacturing Business', nextQuestion: 'manufacturing_type' },
        { value: 'service', label: 'Service-Based Business', nextQuestion: 'service_type' },
        { value: 'franchise', label: 'Franchise Business', nextQuestion: 'franchise_type' },
      ],
    },

    /* ======================
       3️⃣ STARTUP PATH
    ====================== */
    {
      key: 'startup_type',
      text: 'What type of startup are you interested in?',
      type: 'single',
      options: [
        { value: 'tech', label: 'Tech Startup (AI / SaaS / Apps)', nextQuestion: 'funding_plan' },
        { value: 'agri', label: 'Agri / Food Startup', nextQuestion: 'funding_plan' },
        { value: 'health', label: 'Health / Wellness Startup', nextQuestion: 'funding_plan' },
        { value: 'edtech', label: 'EdTech / Training Startup', nextQuestion: 'funding_plan' },
        { value: 'fintech', label: 'FinTech Startup', nextQuestion: 'funding_plan' },
      ],
    },

    /* ======================
       4️⃣ TRADITIONAL BUSINESS
    ====================== */
    {
      key: 'traditional_type',
      text: 'Which traditional business interests you?',
      type: 'single',
      options: [
        { value: 'retail', label: 'Retail Shop', nextQuestion: 'investment_range' },
        { value: 'wholesale', label: 'Wholesale / Distribution', nextQuestion: 'investment_range' },
        { value: 'trading', label: 'Import / Export Trading', nextQuestion: 'investment_range' },
        { value: 'food', label: 'Hotel / Restaurant / Cloud Kitchen', nextQuestion: 'investment_range' },
      ],
    },

    /* ======================
       5️⃣ ONLINE BUSINESS
    ====================== */
    {
      key: 'online_type',
      text: 'Which online business do you prefer?',
      type: 'single',
      options: [
        { value: 'ecommerce', label: 'E-commerce / D2C Brand', nextQuestion: 'investment_range' },
        { value: 'content', label: 'YouTube / Blogging / Influencer', nextQuestion: 'investment_range' },
        { value: 'freelance', label: 'Freelancing / Agency', nextQuestion: 'investment_range' },
        { value: 'saas', label: 'SaaS / Subscription Product', nextQuestion: 'investment_range' },
      ],
    },

    /* ======================
       6️⃣ MANUFACTURING
    ====================== */
    {
      key: 'manufacturing_type',
      text: 'Which manufacturing scale are you targeting?',
      type: 'single',
      options: [
        { value: 'small', label: 'Small-scale Manufacturing', nextQuestion: 'investment_range' },
        { value: 'medium', label: 'Medium-scale Industry', nextQuestion: 'investment_range' },
        { value: 'large', label: 'Large-scale Factory', nextQuestion: 'investment_range' },
      ],
    },

    /* ======================
       7️⃣ SERVICE BUSINESS
    ====================== */
    {
      key: 'service_type',
      text: 'Which service business interests you?',
      type: 'single',
      options: [
        { value: 'consulting', label: 'Consulting / Coaching', nextQuestion: 'investment_range' },
        { value: 'it', label: 'IT Services / Software Company', nextQuestion: 'investment_range' },
        { value: 'logistics', label: 'Logistics / Transport', nextQuestion: 'investment_range' },
        { value: 'realestate', label: 'Real Estate / Construction', nextQuestion: 'investment_range' },
      ],
    },

    /* ======================
       8️⃣ FRANCHISE
    ====================== */
    {
      key: 'franchise_type',
      text: 'What franchise type do you want?',
      type: 'single',
      options: [
        { value: 'food', label: 'Food & Beverage Franchise', nextQuestion: 'investment_range' },
        { value: 'retail', label: 'Retail Franchise', nextQuestion: 'investment_range' },
        { value: 'education', label: 'Education / Training Franchise', nextQuestion: 'investment_range' },
      ],
    },

    /* ======================
       9️⃣ INVESTMENT RANGE
    ====================== */
    {
      key: 'investment_range',
      text: 'What is your investment capacity?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low (Below ₹50,000)', nextQuestion: 'growth_goal' },
        { value: 'medium', label: 'Medium (₹50,000 – ₹5 Lakhs)', nextQuestion: 'growth_goal' },
        { value: 'high', label: 'High (₹5 Lakhs – ₹50 Lakhs)', nextQuestion: 'growth_goal' },
        { value: 'enterprise', label: 'Enterprise Level (₹50 Lakhs+)', nextQuestion: 'growth_goal' },
      ],
    },

    /* ======================
       🔟 GROWTH GOAL
    ====================== */
    {
      key: 'growth_goal',
      text: 'What is your long-term goal?',
      type: 'single',
      options: [
        { value: 'local', label: 'Local Business' },
        { value: 'state', label: 'State-Level Expansion' },
        { value: 'national', label: 'National Brand' },
        { value: 'global', label: 'Global / International Business' },
      ],
    },

  ],
},

  /*
┌─────────────────────────┐
│   personal_dev dream    │
└─────────────────────────┘
*/

 {
  key: 'personal_dev',
  name: 'Personal Development Programs',
  icon: 'Target',
  description: 'Self-improvement and personal growth',
  questions: [

    /* ======================
       1️⃣ DEVELOPMENT AREA
    ====================== */
    {
      key: 'development_area',
      text: 'Which area do you want to develop?',
      type: 'single',
      options: [
        { value: 'confidence', label: 'Self-Confidence', nextQuestion: 'current_level' },
        { value: 'public_speaking', label: 'Public Speaking', nextQuestion: 'current_level' },
        { value: 'personality', label: 'Personality Development', nextQuestion: 'current_level' },
        { value: 'stress', label: 'Stress Management', nextQuestion: 'current_level' },
        { value: 'relationships', label: 'Relationship & Social Skills', nextQuestion: 'current_level' },
        { value: 'leadership', label: 'Leadership Skills', nextQuestion: 'current_level' },
        { value: 'discipline', label: 'Self-Discipline & Focus', nextQuestion: 'current_level' },
      ],
    },

    /* ======================
       2️⃣ CURRENT LEVEL
    ====================== */
    {
      key: 'current_level',
      text: 'What is your current level in this area?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner / Struggling', nextQuestion: 'learning_style' },
        { value: 'intermediate', label: 'Intermediate', nextQuestion: 'learning_style' },
        { value: 'advanced', label: 'Advanced / Want mastery', nextQuestion: 'learning_style' },
      ],
    },

    /* ======================
       3️⃣ LEARNING STYLE
    ====================== */
    {
      key: 'learning_style',
      text: 'How do you prefer to improve?',
      type: 'single',
      options: [
        { value: 'coaching', label: '1-to-1 Coaching', nextQuestion: 'time_commitment' },
        { value: 'course', label: 'Structured Course', nextQuestion: 'time_commitment' },
        { value: 'practice', label: 'Daily Practice Tasks', nextQuestion: 'time_commitment' },
        { value: 'community', label: 'Group / Community Learning', nextQuestion: 'time_commitment' },
      ],
    },

    /* ======================
       4️⃣ TIME COMMITMENT
    ====================== */
    {
      key: 'time_commitment',
      text: 'How much time can you dedicate weekly?',
      type: 'single',
      options: [
        { value: 'low', label: '1–2 hours', nextQuestion: 'goal_timeline' },
        { value: 'medium', label: '3–5 hours', nextQuestion: 'goal_timeline' },
        { value: 'high', label: '6+ hours', nextQuestion: 'goal_timeline' },
      ],
    },

    /* ======================
       5️⃣ GOAL TIMELINE
    ====================== */
    {
      key: 'goal_timeline',
      text: 'When do you want to see results?',
      type: 'single',
      options: [
        { value: 'short', label: 'Within 30 days' },
        { value: 'medium', label: '2–3 months' },
        { value: 'long', label: '6 months or more' },
      ],
    },

  ],
},
  /*─────────────────────────┐
  │    Dress Selection dream │
  └─────────────────────────┘
*/
  {
  key: 'dress_selection',
  name: 'Dress Selection & Styling',
  icon: 'Shirt',
  description: 'Fashion consulting, styling, and fashion careers',
  questions: [

    /* ======================
       1️⃣ INTEREST TYPE
    ====================== */
    {
      key: 'interest_type',
      text: 'What is your interest in dress selection?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Styling Guidance', nextQuestion: 'personal_style_need' },
        { value: 'career', label: 'Career as Fashion Stylist', nextQuestion: 'fashion_background' },
        { value: 'business', label: 'Fashion Business', nextQuestion: 'business_model' },
      ],
    },

    /* ======================
       2️⃣ PERSONAL STYLING PATH
    ====================== */
    {
      key: 'personal_style_need',
      text: 'What do you need styling help for?',
      type: 'single',
      options: [
        { value: 'daily', label: 'Daily Wear', nextQuestion: 'occasion_type' },
        { value: 'office', label: 'Office / Corporate Wear', nextQuestion: 'occasion_type' },
        { value: 'events', label: 'Weddings / Functions', nextQuestion: 'occasion_type' },
        { value: 'body', label: 'Body Type & Color Matching', nextQuestion: 'occasion_type' },
      ],
    },

    {
      key: 'occasion_type',
      text: 'For which occasions do you want styling?',
      type: 'single',
      options: [
        { value: 'casual', label: 'Casual' },
        { value: 'professional', label: 'Professional' },
        { value: 'traditional', label: 'Traditional' },
        { value: 'all', label: 'All Occasions' },
      ],
    },

    /* ======================
       3️⃣ CAREER PATH
    ====================== */
    {
      key: 'fashion_background',
      text: 'Do you have fashion education or experience?',
      type: 'single',
      options: [
        { value: 'degree', label: 'Fashion Degree / Course', nextQuestion: 'career_goal' },
        { value: 'self_taught', label: 'Self-taught', nextQuestion: 'career_goal' },
        { value: 'none', label: 'No experience, want to start', nextQuestion: 'career_goal' },
      ],
    },

    {
      key: 'career_goal',
      text: 'What is your career goal in fashion?',
      type: 'single',
      options: [
        { value: 'stylist', label: 'Personal Stylist' },
        { value: 'celebrity', label: 'Celebrity / Influencer Stylist' },
        { value: 'corporate', label: 'Corporate Fashion Consultant' },
        { value: 'designer', label: 'Fashion Designer' },
      ],
    },

    /* ======================
       4️⃣ BUSINESS PATH
    ====================== */
    {
      key: 'business_model',
      text: 'What fashion business model interests you?',
      type: 'single',
      options: [
        { value: 'boutique', label: 'Boutique / Store', nextQuestion: 'budget_range' },
        { value: 'online', label: 'Online Fashion Brand', nextQuestion: 'budget_range' },
        { value: 'styling', label: 'Styling Services', nextQuestion: 'budget_range' },
        { value: 'custom', label: 'Custom Designer Wear', nextQuestion: 'budget_range' },
      ],
    },

    {
      key: 'budget_range',
      text: 'What is your budget range?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low Budget' },
        { value: 'medium', label: 'Medium Budget' },
        { value: 'high', label: 'High / Premium' },
      ],
    },

  ],
},
/*
┌─────────────────────────┐
│    Safety & Security    │
└─────────────────────────┘
*/
{
  key: 'safety',
  name: 'Safety & Security',
  icon: 'Shield',
  description: 'Personal, workplace, public, and emergency safety requirements',
  questions: [

    /* ======================
       1️⃣ SAFETY AREA
    ====================== */
    {
      key: 'safety_area',
      text: 'Which safety area do you want to focus on?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Safety', nextQuestion: 'personal_safety_type' },
        { value: 'workplace', label: 'Workplace Safety', nextQuestion: 'workplace_safety_type' },
        { value: 'public', label: 'Public Safety', nextQuestion: 'public_safety_type' },
        { value: 'emergency', label: 'Emergency & Disaster Safety', nextQuestion: 'emergency_type' },
      ],
    },

    /* ======================
       2️⃣ PERSONAL SAFETY
    ====================== */
    {
      key: 'personal_safety_type',
      text: 'Which personal safety requirement do you need?',
      type: 'single',
      options: [
        { value: 'self_defense', label: 'Self-Defense Awareness', nextQuestion: 'safety_environment' },
        { value: 'women', label: 'Women Safety', nextQuestion: 'safety_environment' },
        { value: 'children', label: 'Child Safety', nextQuestion: 'safety_environment' },
        { value: 'elderly', label: 'Elderly Safety', nextQuestion: 'safety_environment' },
        { value: 'online', label: 'Online / Cyber Safety', nextQuestion: 'online_safety_focus' },
      ],
    },

    {
      key: 'online_safety_focus',
      text: 'What type of online safety?',
      type: 'single',
      options: [
        { value: 'fraud', label: 'Online Fraud & Scams' },
        { value: 'privacy', label: 'Privacy Protection' },
        { value: 'social', label: 'Social Media Safety' },
      ],
    },

    /* ======================
       3️⃣ WORKPLACE SAFETY
    ====================== */
    {
      key: 'workplace_safety_type',
      text: 'Which workplace safety area applies to you?',
      type: 'single',
      options: [
        { value: 'industrial', label: 'Industrial / Factory Safety', nextQuestion: 'workplace_role' },
        { value: 'construction', label: 'Construction Site Safety', nextQuestion: 'workplace_role' },
        { value: 'office', label: 'Office / IT Safety', nextQuestion: 'workplace_role' },
        { value: 'healthcare', label: 'Hospital / Healthcare Safety', nextQuestion: 'workplace_role' },
      ],
    },

    {
      key: 'workplace_role',
      text: 'What is your role at the workplace?',
      type: 'single',
      options: [
        { value: 'worker', label: 'Worker / Employee' },
        { value: 'supervisor', label: 'Supervisor / Manager' },
        { value: 'owner', label: 'Owner / Employer' },
      ],
    },

    /* ======================
       4️⃣ PUBLIC SAFETY
    ====================== */
    {
      key: 'public_safety_type',
      text: 'Which public safety topic do you need?',
      type: 'single',
      options: [
        { value: 'road', label: 'Road & Traffic Safety', nextQuestion: 'road_user_type' },
        { value: 'crowd', label: 'Crowd / Event Safety', nextQuestion: 'public_place_type' },
        { value: 'transport', label: 'Public Transport Safety', nextQuestion: 'public_place_type' },
      ],
    },

    {
      key: 'road_user_type',
      text: 'You mainly travel as?',
      type: 'single',
      options: [
        { value: 'pedestrian', label: 'Pedestrian' },
        { value: 'two_wheeler', label: 'Two-Wheeler Rider' },
        { value: 'car', label: 'Car Driver' },
        { value: 'commercial', label: 'Commercial Driver' },
      ],
    },

    {
      key: 'public_place_type',
      text: 'Which public places concern you?',
      type: 'single',
      options: [
        { value: 'stations', label: 'Bus/Train Stations' },
        { value: 'markets', label: 'Markets & Malls' },
        { value: 'schools', label: 'Schools & Colleges' },
      ],
    },

    /* ======================
       5️⃣ EMERGENCY & DISASTER
    ====================== */
    {
      key: 'emergency_type',
      text: 'Which emergency safety do you want to learn?',
      type: 'single',
      options: [
        { value: 'fire', label: 'Fire Safety', nextQuestion: 'fire_safety_focus' },
        { value: 'medical', label: 'Medical Emergency / First Aid', nextQuestion: 'medical_safety_focus' },
        { value: 'natural', label: 'Natural Disasters', nextQuestion: 'disaster_type' },
      ],
    },

    {
      key: 'fire_safety_focus',
      text: 'Fire safety requirement?',
      type: 'single',
      options: [
        { value: 'prevention', label: 'Fire Prevention' },
        { value: 'evacuation', label: 'Evacuation Planning' },
        { value: 'equipment', label: 'Fire Extinguisher Usage' },
      ],
    },

    {
      key: 'medical_safety_focus',
      text: 'Medical emergency focus?',
      type: 'single',
      options: [
        { value: 'first_aid', label: 'First Aid Basics' },
        { value: 'cpr', label: 'CPR & Life Saving' },
        { value: 'ambulance', label: 'Ambulance & Emergency Response' },
      ],
    },

    {
      key: 'disaster_type',
      text: 'Which disaster safety?',
      type: 'single',
      options: [
        { value: 'flood', label: 'Flood Safety' },
        { value: 'earthquake', label: 'Earthquake Safety' },
        { value: 'cyclone', label: 'Cyclone / Storm Safety' },
      ],
    },

    /* ======================
       6️⃣ ENVIRONMENT
    ====================== */
    {
      key: 'safety_environment',
      text: 'Where do you need safety guidance?',
      type: 'single',
      options: [
        { value: 'home', label: 'Home' },
        { value: 'school', label: 'School / College' },
        { value: 'workplace', label: 'Workplace' },
        { value: 'outdoor', label: 'Outdoor / Travel' },
      ],
    },

  ],
},
 /*
┌─────────────────────────┐
│ BLOOD (Donation / Medical Awareness)        │
└─────────────────────────┘
*/

{
  key: 'blood',
  name: 'Blood Donation & Medical Awareness',
  icon: 'Droplet',
  description: 'Blood donation, transfusion awareness, and medical emergency support',
  questions: [

    /* ======================
       1️⃣ PURPOSE
    ====================== */
    {
      key: 'blood_interest',
      text: 'What is your interest related to blood?',
      type: 'single',
      options: [
        { value: 'donation', label: 'Blood Donation', nextQuestion: 'donor_status' },
        { value: 'awareness', label: 'Medical Awareness', nextQuestion: 'awareness_topic' },
        { value: 'emergency', label: 'Emergency Blood Support', nextQuestion: 'emergency_role' },
        { value: 'career', label: 'Career in Blood & Medical Field', nextQuestion: 'medical_background' },
      ],
    },

    /* ======================
       2️⃣ DONATION FLOW
    ====================== */
    {
      key: 'donor_status',
      text: 'What is your blood donation status?',
      type: 'single',
      options: [
        { value: 'first_time', label: 'First-Time Donor', nextQuestion: 'blood_group_known' },
        { value: 'regular', label: 'Regular Donor', nextQuestion: 'donation_frequency' },
        { value: 'unable', label: 'Unable to Donate Currently', nextQuestion: 'donation_restriction' },
      ],
    },

    {
      key: 'blood_group_known',
      text: 'Do you know your blood group?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes', nextQuestion: 'donation_location' },
        { value: 'no', label: 'No, want to check', nextQuestion: 'donation_location' },
      ],
    },

    {
      key: 'donation_frequency',
      text: 'How often do you donate blood?',
      type: 'single',
      options: [
        { value: '3_months', label: 'Every 3 months' },
        { value: '6_months', label: 'Every 6 months' },
        { value: 'occasionally', label: 'Occasionally' },
      ],
    },

    {
      key: 'donation_restriction',
      text: 'What is the reason you cannot donate?',
      type: 'single',
      options: [
        { value: 'medical', label: 'Medical Condition' },
        { value: 'age', label: 'Age / Weight Issues' },
        { value: 'fear', label: 'Fear / Lack of Awareness' },
      ],
    },

    {
      key: 'donation_location',
      text: 'Where would you prefer to donate blood?',
      type: 'single',
      options: [
        { value: 'hospital', label: 'Hospital Blood Bank' },
        { value: 'camp', label: 'Donation Camp' },
        { value: 'ngo', label: 'NGO / Red Cross' },
      ],
    },

    /* ======================
       3️⃣ AWARENESS FLOW
    ====================== */
    {
      key: 'awareness_topic',
      text: 'Which blood-related awareness do you want?',
      type: 'single',
      options: [
        { value: 'blood_groups', label: 'Blood Groups & Compatibility' },
        { value: 'transfusion', label: 'Blood Transfusion Process' },
        { value: 'myths', label: 'Donation Myths & Facts' },
        { value: 'diseases', label: 'Blood-Related Diseases' },
      ],
    },

    /* ======================
       4️⃣ EMERGENCY FLOW
    ====================== */
    {
      key: 'emergency_role',
      text: 'How do you want to help in emergencies?',
      type: 'single',
      options: [
        { value: 'donor', label: 'Emergency Donor' },
        { value: 'coordinator', label: 'Blood Coordination Support' },
        { value: 'volunteer', label: 'Hospital / NGO Volunteer' },
      ],
    },

    /* ======================
       5️⃣ CAREER FLOW
    ====================== */
    {
      key: 'medical_background',
      text: 'Do you have a medical background?',
      type: 'single',
      options: [
        { value: 'mbbs', label: 'MBBS / Medical Student', nextQuestion: 'career_interest' },
        { value: 'paramedical', label: 'Paramedical / Nursing', nextQuestion: 'career_interest' },
        { value: 'science', label: 'Science Graduate', nextQuestion: 'career_interest' },
        { value: 'none', label: 'No Medical Background', nextQuestion: 'career_interest' },
      ],
    },

    {
      key: 'career_interest',
      text: 'Which blood-related career interests you?',
      type: 'single',
      options: [
        { value: 'pathology', label: 'Pathologist / Lab Specialist' },
        { value: 'blood_bank', label: 'Blood Bank Officer' },
        { value: 'research', label: 'Medical Research' },
        { value: 'ngo', label: 'NGO / Social Service' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│       food Dreams       │
└─────────────────────────┘
*/

{
  key: 'food',
  name: 'Food & Nutrition',
  icon: 'Utensils',
  description: 'Nutrition guidance, food safety, and food-related businesses',
  questions: [

    /* ======================
       1️⃣ MAIN INTEREST
    ====================== */
    {
      key: 'food_interest',
      text: 'What is your main interest related to food?',
      type: 'single',
      options: [
        { value: 'nutrition', label: 'Nutrition & Healthy Eating', nextQuestion: 'nutrition_goal' },
        { value: 'safety', label: 'Food Safety & Hygiene', nextQuestion: 'safety_context' },
        { value: 'business', label: 'Food Business', nextQuestion: 'business_type' },
        { value: 'career', label: 'Career in Food Industry', nextQuestion: 'education_background' },
      ],
    },

    /* ======================
       2️⃣ NUTRITION FLOW
    ====================== */
    {
      key: 'nutrition_goal',
      text: 'What is your nutrition goal?',
      type: 'single',
      options: [
        { value: 'weight_loss', label: 'Weight Loss', nextQuestion: 'diet_preference' },
        { value: 'weight_gain', label: 'Weight Gain', nextQuestion: 'diet_preference' },
        { value: 'fitness', label: 'Fitness & Muscle Building', nextQuestion: 'diet_preference' },
        { value: 'medical', label: 'Medical / Special Diet', nextQuestion: 'diet_preference' },
      ],
    },

    {
      key: 'diet_preference',
      text: 'What is your diet preference?',
      type: 'single',
      options: [
        { value: 'vegetarian', label: 'Vegetarian', nextQuestion: 'meal_plan_need' },
        { value: 'non_veg', label: 'Non-Vegetarian', nextQuestion: 'meal_plan_need' },
        { value: 'vegan', label: 'Vegan', nextQuestion: 'meal_plan_need' },
        { value: 'mixed', label: 'Mixed Diet', nextQuestion: 'meal_plan_need' },
      ],
    },

    {
      key: 'meal_plan_need',
      text: 'Do you need a structured meal plan?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, daily meal plan' },
        { value: 'guidelines', label: 'Only nutrition guidelines' },
        { value: 'no', label: 'No, general awareness' },
      ],
    },

    /* ======================
       3️⃣ FOOD SAFETY FLOW
    ====================== */
    {
      key: 'safety_context',
      text: 'Where do you want food safety guidance?',
      type: 'single',
      options: [
        { value: 'home', label: 'Home Kitchen', nextQuestion: 'safety_focus' },
        { value: 'restaurant', label: 'Restaurant / Hotel', nextQuestion: 'safety_focus' },
        { value: 'street_food', label: 'Street Food / Vendor', nextQuestion: 'safety_focus' },
        { value: 'industry', label: 'Food Processing Industry', nextQuestion: 'safety_focus' },
      ],
    },

    {
      key: 'safety_focus',
      text: 'What food safety area do you want to focus on?',
      type: 'single',
      options: [
        { value: 'hygiene', label: 'Hygiene & Cleanliness' },
        { value: 'storage', label: 'Food Storage & Preservation' },
        { value: 'contamination', label: 'Preventing Contamination' },
        { value: 'certification', label: 'Food Safety Certification (FSSAI)' },
      ],
    },

    /* ======================
       4️⃣ FOOD BUSINESS FLOW
    ====================== */
    {
      key: 'business_type',
      text: 'What type of food business interests you?',
      type: 'single',
      options: [
        { value: 'home_food', label: 'Home-based Food Business', nextQuestion: 'business_scale' },
        { value: 'restaurant', label: 'Restaurant / Cafe', nextQuestion: 'business_scale' },
        { value: 'street', label: 'Street Food Stall', nextQuestion: 'business_scale' },
        { value: 'manufacturing', label: 'Food Manufacturing', nextQuestion: 'business_scale' },
      ],
    },

    {
      key: 'business_scale',
      text: 'What scale of business are you planning?',
      type: 'single',
      options: [
        { value: 'small', label: 'Small / Local', nextQuestion: 'investment_capacity' },
        { value: 'medium', label: 'City Level', nextQuestion: 'investment_capacity' },
        { value: 'large', label: 'Large / Multiple Locations', nextQuestion: 'investment_capacity' },
      ],
    },

    {
      key: 'investment_capacity',
      text: 'What is your investment capacity?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low (Under 1 lakh)' },
        { value: 'medium', label: 'Medium (1–10 lakhs)' },
        { value: 'high', label: 'High (Above 10 lakhs)' },
      ],
    },

    /* ======================
       5️⃣ CAREER FLOW
    ====================== */
    {
      key: 'education_background',
      text: 'What is your educational background?',
      type: 'single',
      options: [
        { value: 'nutrition', label: 'Nutrition / Dietetics', nextQuestion: 'career_interest' },
        { value: 'hotel', label: 'Hotel Management / Culinary Arts', nextQuestion: 'career_interest' },
        { value: 'science', label: 'Food Science / Biotechnology', nextQuestion: 'career_interest' },
        { value: 'none', label: 'No related background', nextQuestion: 'career_interest' },
      ],
    },

    {
      key: 'career_interest',
      text: 'Which food-related career interests you?',
      type: 'single',
      options: [
        { value: 'dietitian', label: 'Dietitian / Nutritionist' },
        { value: 'chef', label: 'Chef / Culinary Expert' },
        { value: 'quality', label: 'Food Quality & Safety Officer' },
        { value: 'entrepreneur', label: 'Food Entrepreneur' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│       Driver dream      │
└─────────────────────────┘
*/

{
  key: 'driver',
  name: 'Driver & Driving Skills',
  icon: 'Car',
  description: 'Driving skills, license guidance, and professional driving careers',
  questions: [

    /* ======================
       1️⃣ MAIN PURPOSE
    ====================== */
    {
      key: 'driving_purpose',
      text: 'Why do you want to learn or improve driving?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Driving', nextQuestion: 'vehicle_type' },
        { value: 'license', label: 'Driving License (LL/DL)', nextQuestion: 'license_stage' },
        { value: 'professional', label: 'Professional Driving Career', nextQuestion: 'professional_type' },
        { value: 'skill_upgrade', label: 'Improve Driving Skills', nextQuestion: 'skill_level' },
      ],
    },

    /* ======================
       2️⃣ PERSONAL DRIVING
    ====================== */
    {
      key: 'vehicle_type',
      text: 'Which vehicle do you want to drive?',
      type: 'single',
      options: [
        { value: 'two_wheeler', label: 'Two-Wheeler (Bike/Scooter)', nextQuestion: 'transmission_type' },
        { value: 'car', label: 'Car', nextQuestion: 'transmission_type' },
        { value: 'auto', label: 'Auto Rickshaw', nextQuestion: 'transmission_type' },
      ],
    },

    {
      key: 'transmission_type',
      text: 'Which transmission do you prefer?',
      type: 'single',
      options: [
        { value: 'manual', label: 'Manual', nextQuestion: 'driving_experience' },
        { value: 'automatic', label: 'Automatic', nextQuestion: 'driving_experience' },
      ],
    },

    {
      key: 'driving_experience',
      text: 'What is your driving experience?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner (No experience)', nextQuestion: 'training_mode' },
        { value: 'basic', label: 'Basic driving knowledge', nextQuestion: 'training_mode' },
        { value: 'experienced', label: 'Already driving, need polishing', nextQuestion: 'training_mode' },
      ],
    },

    {
      key: 'training_mode',
      text: 'How do you want to learn?',
      type: 'single',
      options: [
        { value: 'driving_school', label: 'Driving School' },
        { value: 'personal_trainer', label: 'Personal Trainer' },
        { value: 'self_practice', label: 'Self Practice with Guidance' },
      ],
    },

    /* ======================
       3️⃣ LICENSE FLOW
    ====================== */
    {
      key: 'license_stage',
      text: 'What is your license status?',
      type: 'single',
      options: [
        { value: 'no_license', label: 'No License', nextQuestion: 'license_type' },
        { value: 'learner', label: 'Learner License (LL)', nextQuestion: 'license_test_help' },
        { value: 'expired', label: 'Expired License', nextQuestion: 'renewal_need' },
      ],
    },

    {
      key: 'license_type',
      text: 'Which license do you want to apply for?',
      type: 'single',
      options: [
        { value: 'two_wheeler', label: 'Two-Wheeler License' },
        { value: 'lmv', label: 'LMV (Car)' },
        { value: 'both', label: 'Both Two-Wheeler & Car' },
      ],
    },

    {
      key: 'license_test_help',
      text: 'Do you need help with the driving test?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, test preparation needed' },
        { value: 'no', label: 'No, confident' },
      ],
    },

    {
      key: 'renewal_need',
      text: 'What do you need help with?',
      type: 'single',
      options: [
        { value: 'renew', label: 'License Renewal' },
        { value: 'address_change', label: 'Address Update' },
        { value: 'duplicate', label: 'Duplicate License' },
      ],
    },

    /* ======================
       4️⃣ PROFESSIONAL DRIVING
    ====================== */
    {
      key: 'professional_type',
      text: 'What type of professional driving interests you?',
      type: 'single',
      options: [
        { value: 'taxi', label: 'Taxi / Cab Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'truck', label: 'Truck / Lorry Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'bus', label: 'Bus Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'delivery', label: 'Delivery / Logistics Driver', nextQuestion: 'commercial_vehicle' },
      ],
    },

    {
      key: 'commercial_vehicle',
      text: 'Do you have experience with commercial vehicles?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, experienced', nextQuestion: 'commercial_license' },
        { value: 'no', label: 'No, need training', nextQuestion: 'commercial_license' },
      ],
    },

    {
      key: 'commercial_license',
      text: 'Do you have a commercial driving license?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No, need guidance' },
      ],
    },

    /* ======================
       5️⃣ SKILL IMPROVEMENT
    ====================== */
    {
      key: 'skill_level',
      text: 'Which driving skill do you want to improve?',
      type: 'single',
      options: [
        { value: 'confidence', label: 'Confidence & Road Awareness' },
        { value: 'parking', label: 'Parking Skills' },
        { value: 'highway', label: 'Highway Driving' },
        { value: 'night', label: 'Night Driving' },
        { value: 'defensive', label: 'Defensive & Safe Driving' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│    Ambulance Dream      │
└─────────────────────────┘
*/

{
  key: 'ambulance',
  name: 'Ambulance & Emergency Medical Services',
  icon: 'Ambulance',
  description: 'Emergency response, ambulance services, and medical careers',
  questions: [

    /* ======================
       1️⃣ MAIN PURPOSE
    ====================== */
    {
      key: 'ambulance_purpose',
      text: 'What is your purpose related to ambulance services?',
      type: 'single',
      options: [
        { value: 'emergency_help', label: 'Emergency Help for Patient', nextQuestion: 'emergency_type' },
        { value: 'driver', label: 'Ambulance Driver', nextQuestion: 'driver_experience' },
        { value: 'medical_staff', label: 'Medical / Paramedic Career', nextQuestion: 'medical_role' },
        { value: 'business', label: 'Start Ambulance Service Business', nextQuestion: 'business_scale' },
        { value: 'awareness', label: 'Emergency Awareness & Training', nextQuestion: 'training_interest' },
      ],
    },

    /* ======================
       2️⃣ EMERGENCY HELP PATH
    ====================== */
    {
      key: 'emergency_type',
      text: 'What type of emergency is it?',
      type: 'single',
      options: [
        { value: 'accident', label: 'Road Accident', nextQuestion: 'patient_condition' },
        { value: 'heart', label: 'Heart Attack / Chest Pain', nextQuestion: 'patient_condition' },
        { value: 'pregnancy', label: 'Pregnancy / Delivery Emergency', nextQuestion: 'patient_condition' },
        { value: 'breathing', label: 'Breathing Problem', nextQuestion: 'patient_condition' },
        { value: 'other', label: 'Other Medical Emergency', nextQuestion: 'patient_condition' },
      ],
    },

    {
      key: 'patient_condition',
      text: 'What is the patient condition?',
      type: 'single',
      options: [
        { value: 'critical', label: 'Critical', nextQuestion: 'hospital_preference' },
        { value: 'stable', label: 'Stable but needs transport', nextQuestion: 'hospital_preference' },
        { value: 'unknown', label: 'Not sure', nextQuestion: 'hospital_preference' },
      ],
    },

    {
      key: 'hospital_preference',
      text: 'Do you have a preferred hospital?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'Nearest Available Hospital' },
      ],
    },

    /* ======================
       3️⃣ AMBULANCE DRIVER PATH
    ====================== */
    {
      key: 'driver_experience',
      text: 'What is your driving experience?',
      type: 'single',
      options: [
        { value: 'experienced', label: 'Experienced Driver', nextQuestion: 'commercial_license' },
        { value: 'basic', label: 'Basic Driving Experience', nextQuestion: 'driver_training' },
        { value: 'none', label: 'No Experience', nextQuestion: 'driver_training' },
      ],
    },

    {
      key: 'driver_training',
      text: 'Do you want ambulance driver training?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, training needed' },
        { value: 'no', label: 'No, just guidance' },
      ],
    },

    {
      key: 'commercial_license',
      text: 'Do you have a commercial driving license?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No, need help to apply' },
      ],
    },

    /* ======================
       4️⃣ MEDICAL / PARAMEDIC CAREER
    ====================== */
    {
      key: 'medical_role',
      text: 'Which medical role interests you?',
      type: 'single',
      options: [
        { value: 'emt', label: 'EMT (Emergency Medical Technician)', nextQuestion: 'education_level' },
        { value: 'paramedic', label: 'Paramedic', nextQuestion: 'education_level' },
        { value: 'nurse', label: 'Emergency Nurse', nextQuestion: 'education_level' },
        { value: 'first_aid', label: 'First Aid Responder', nextQuestion: 'education_level' },
      ],
    },

    {
      key: 'education_level',
      text: 'What is your education background?',
      type: 'single',
      options: [
        { value: '10th', label: '10th Pass' },
        { value: '12th', label: '12th Pass (Biology preferred)' },
        { value: 'graduate', label: 'Graduate / Medical Field' },
      ],
    },

    /* ======================
       5️⃣ AMBULANCE BUSINESS
    ====================== */
    {
      key: 'business_scale',
      text: 'What scale of ambulance service do you want to start?',
      type: 'single',
      options: [
        { value: 'single', label: 'Single Ambulance', nextQuestion: 'ambulance_type' },
        { value: 'fleet', label: 'Fleet / Hospital Tie-up', nextQuestion: 'ambulance_type' },
      ],
    },

    {
      key: 'ambulance_type',
      text: 'Which type of ambulance?',
      type: 'single',
      options: [
        { value: 'basic', label: 'Basic Life Support (BLS)', nextQuestion: 'business_support' },
        { value: 'advanced', label: 'Advanced Life Support (ALS)', nextQuestion: 'business_support' },
        { value: 'icu', label: 'ICU Ambulance', nextQuestion: 'business_support' },
      ],
    },

    {
      key: 'business_support',
      text: 'What business support do you need?',
      type: 'single',
      options: [
        { value: 'license', label: 'Licensing & Permissions' },
        { value: 'equipment', label: 'Medical Equipment Setup' },
        { value: 'staff', label: 'Staff Hiring & Training' },
        { value: 'funding', label: 'Funding & Investment' },
      ],
    },

    /* ======================
       6️⃣ AWARENESS & TRAINING
    ====================== */
    {
      key: 'training_interest',
      text: 'Which emergency training are you interested in?',
      type: 'single',
      options: [
        { value: 'first_aid', label: 'First Aid & CPR' },
        { value: 'disaster', label: 'Disaster Management' },
        { value: 'road_safety', label: 'Road Accident Response' },
      ],
    },

  ],
},
/*
┌─────────────────────────┐
│     fire_services       │
└─────────────────────────┘
*/


{
  key: 'fire_services',
  name: 'Fire Services',
  icon: 'Flame',
  description: 'Fire safety, firefighting, and emergency response services',
  questions: [

    /* ======================
       1️⃣ MAIN INTENT
    ====================== */
    {
      key: 'fire_purpose',
      text: 'What is your purpose related to fire services?',
      type: 'single',
      options: [
        { value: 'emergency', label: 'Fire Emergency Help', nextQuestion: 'fire_emergency_type' },
        { value: 'career', label: 'Career in Fire Services', nextQuestion: 'fire_career_role' },
        { value: 'safety', label: 'Fire Safety & Prevention', nextQuestion: 'safety_location' },
        { value: 'business', label: 'Fire Safety Business', nextQuestion: 'business_type' },
        { value: 'training', label: 'Fire Training & Awareness', nextQuestion: 'training_type' },
      ],
    },

    /* ======================
       2️⃣ FIRE EMERGENCY PATH
    ====================== */
    {
      key: 'fire_emergency_type',
      text: 'What type of fire emergency is it?',
      type: 'single',
      options: [
        { value: 'house', label: 'House / Apartment Fire', nextQuestion: 'fire_severity' },
        { value: 'factory', label: 'Factory / Industrial Fire', nextQuestion: 'fire_severity' },
        { value: 'vehicle', label: 'Vehicle Fire', nextQuestion: 'fire_severity' },
        { value: 'forest', label: 'Forest / Wildfire', nextQuestion: 'fire_severity' },
        { value: 'electrical', label: 'Electrical Fire', nextQuestion: 'fire_severity' },
      ],
    },

    {
      key: 'fire_severity',
      text: 'How severe is the fire?',
      type: 'single',
      options: [
        { value: 'small', label: 'Small / Controllable', nextQuestion: 'rescue_needed' },
        { value: 'medium', label: 'Medium', nextQuestion: 'rescue_needed' },
        { value: 'major', label: 'Major / Out of Control', nextQuestion: 'rescue_needed' },
      ],
    },

    {
      key: 'rescue_needed',
      text: 'Is rescue required?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, people trapped' },
        { value: 'no', label: 'No, only fire control' },
      ],
    },

    /* ======================
       3️⃣ FIRE SERVICE CAREER
    ====================== */
    {
      key: 'fire_career_role',
      text: 'Which fire service role interests you?',
      type: 'single',
      options: [
        { value: 'firefighter', label: 'Firefighter', nextQuestion: 'education_level' },
        { value: 'fire_officer', label: 'Fire Officer', nextQuestion: 'education_level' },
        { value: 'fire_engineer', label: 'Fire Safety Engineer', nextQuestion: 'education_level' },
        { value: 'rescue', label: 'Rescue Operations Specialist', nextQuestion: 'education_level' },
      ],
    },

    {
      key: 'education_level',
      text: 'What is your educational qualification?',
      type: 'single',
      options: [
        { value: '10th', label: '10th Pass' },
        { value: '12th', label: '12th Pass' },
        { value: 'graduate', label: 'Graduate / Engineering' },
      ],
    },

    /* ======================
       4️⃣ FIRE SAFETY & PREVENTION
    ====================== */
    {
      key: 'safety_location',
      text: 'Where do you need fire safety?',
      type: 'single',
      options: [
        { value: 'home', label: 'Home / Apartment', nextQuestion: 'safety_requirement' },
        { value: 'office', label: 'Office / Commercial Building', nextQuestion: 'safety_requirement' },
        { value: 'industry', label: 'Factory / Industry', nextQuestion: 'safety_requirement' },
        { value: 'public', label: 'Public Places', nextQuestion: 'safety_requirement' },
      ],
    },

    {
      key: 'safety_requirement',
      text: 'What fire safety support do you need?',
      type: 'single',
      options: [
        { value: 'inspection', label: 'Fire Safety Inspection' },
        { value: 'equipment', label: 'Fire Extinguishers & Alarms' },
        { value: 'evacuation', label: 'Evacuation Planning' },
        { value: 'compliance', label: 'Fire NOC & Compliance' },
      ],
    },

    /* ======================
       5️⃣ FIRE SAFETY BUSINESS
    ====================== */
    {
      key: 'business_type',
      text: 'Which fire-related business interests you?',
      type: 'single',
      options: [
        { value: 'equipment', label: 'Fire Safety Equipment Supply', nextQuestion: 'business_support' },
        { value: 'inspection', label: 'Fire Safety Inspection Services', nextQuestion: 'business_support' },
        { value: 'training', label: 'Fire Safety Training Institute', nextQuestion: 'business_support' },
        { value: 'maintenance', label: 'Fire Equipment Maintenance', nextQuestion: 'business_support' },
      ],
    },

    {
      key: 'business_support',
      text: 'What business support do you need?',
      type: 'single',
      options: [
        { value: 'license', label: 'Licensing & Certification' },
        { value: 'training', label: 'Technical Training' },
        { value: 'funding', label: 'Funding & Investment' },
        { value: 'marketing', label: 'Marketing & Client Acquisition' },
      ],
    },

    /* ======================
       6️⃣ FIRE TRAINING & AWARENESS
    ====================== */
    {
      key: 'training_type',
      text: 'Which fire training are you interested in?',
      type: 'single',
      options: [
        { value: 'basic', label: 'Basic Fire Safety Awareness' },
        { value: 'advanced', label: 'Advanced Firefighting Skills' },
        { value: 'disaster', label: 'Disaster & Emergency Management' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│   Internship Dreams     │
└─────────────────────────┘
*/


{
  key: 'leadership',
  name: 'Leadership',
  icon: 'Crown',
  description: 'Leadership roles, responsibilities, and development',
  questions: [

    /* ======================
       1️⃣ LEADERSHIP CONTEXT
    ====================== */
    {
      key: 'leadership_domain',
      text: 'In which area do you want to take a leadership role?',
      type: 'single',
      options: [
        { value: 'corporate', label: 'Corporate / Company', nextQuestion: 'corporate_role' },
        { value: 'startup', label: 'Startup / Entrepreneurship', nextQuestion: 'startup_role' },
        { value: 'education', label: 'Education / Student Leadership', nextQuestion: 'education_role' },
        { value: 'government', label: 'Government / Politics', nextQuestion: 'government_role' },
        { value: 'ngo', label: 'NGO / Social Leadership', nextQuestion: 'ngo_role' },
        { value: 'community', label: 'Community / Local Leadership', nextQuestion: 'community_role' },
      ],
    },

    /* ======================
       2️⃣ CORPORATE LEADERSHIP
    ====================== */
    {
      key: 'corporate_role',
      text: 'Which corporate leadership role interests you?',
      type: 'single',
      options: [
        { value: 'ceo', label: 'CEO – Vision, Strategy, Company Growth', nextQuestion: 'leadership_focus' },
        { value: 'cto', label: 'CTO – Technology & Innovation', nextQuestion: 'leadership_focus' },
        { value: 'cfo', label: 'CFO – Finance & Risk Management', nextQuestion: 'leadership_focus' },
        { value: 'manager', label: 'Manager – Team & Performance Management', nextQuestion: 'leadership_focus' },
        { value: 'team_lead', label: 'Team Lead – Task Execution & Mentoring', nextQuestion: 'leadership_focus' },
      ],
    },

    /* ======================
       3️⃣ STARTUP LEADERSHIP
    ====================== */
    {
      key: 'startup_role',
      text: 'Which startup leadership role suits you?',
      type: 'single',
      options: [
        { value: 'founder', label: 'Founder – Idea, Vision, Fundraising', nextQuestion: 'leadership_focus' },
        { value: 'cofounder', label: 'Co-Founder – Operations & Scaling', nextQuestion: 'leadership_focus' },
        { value: 'product_head', label: 'Product Head – Product Strategy', nextQuestion: 'leadership_focus' },
        { value: 'growth_lead', label: 'Growth Lead – Marketing & Expansion', nextQuestion: 'leadership_focus' },
      ],
    },

    /* ======================
       4️⃣ EDUCATIONAL LEADERSHIP
    ====================== */
    {
      key: 'education_role',
      text: 'Which education leadership role interests you?',
      type: 'single',
      options: [
        { value: 'principal', label: 'Principal – Academic & Administration', nextQuestion: 'leadership_focus' },
        { value: 'teacher_lead', label: 'Senior Teacher – Mentoring Faculty', nextQuestion: 'leadership_focus' },
        { value: 'student_leader', label: 'Student Leader – Representation & Events', nextQuestion: 'leadership_focus' },
        { value: 'trainer', label: 'Trainer – Skill & Knowledge Development', nextQuestion: 'leadership_focus' },
      ],
    },

    /* ======================
       5️⃣ GOVERNMENT / POLITICAL LEADERSHIP
    ====================== */
    {
      key: 'government_role',
      text: 'Which government or political leadership role interests you?',
      type: 'single',
      options: [
        { value: 'politician', label: 'Politician – Policy Making & Public Service', nextQuestion: 'leadership_focus' },
        { value: 'bureaucrat', label: 'Bureaucrat – Policy Implementation', nextQuestion: 'leadership_focus' },
        { value: 'administrator', label: 'Administrator – Governance & Planning', nextQuestion: 'leadership_focus' },
        { value: 'public_leader', label: 'Public Leader – Community Representation', nextQuestion: 'leadership_focus' },
      ],
    },

    /* ======================
       6️⃣ NGO / SOCIAL LEADERSHIP
    ====================== */
    {
      key: 'ngo_role',
      text: 'Which NGO leadership role attracts you?',
      type: 'single',
      options: [
        { value: 'ngo_director', label: 'NGO Director – Vision & Impact', nextQuestion: 'leadership_focus' },
        { value: 'project_head', label: 'Project Head – Program Execution', nextQuestion: 'leadership_focus' },
        { value: 'fundraising_lead', label: 'Fundraising Lead – Donor Relations', nextQuestion: 'leadership_focus' },
        { value: 'volunteer_lead', label: 'Volunteer Lead – Team Coordination', nextQuestion: 'leadership_focus' },
      ],
    },

    /* ======================
       7️⃣ COMMUNITY LEADERSHIP
    ====================== */
    {
      key: 'community_role',
      text: 'Which community leadership role fits you?',
      type: 'single',
      options: [
        { value: 'local_head', label: 'Local Head – Issue Resolution', nextQuestion: 'leadership_focus' },
        { value: 'youth_leader', label: 'Youth Leader – Awareness & Motivation', nextQuestion: 'leadership_focus' },
        { value: 'event_coordinator', label: 'Event Coordinator – Planning & Execution', nextQuestion: 'leadership_focus' },
      ],
    },

    /* ======================
       8️⃣ RESPONSIBILITY FOCUS
    ====================== */
    {
      key: 'leadership_focus',
      text: 'Which leadership responsibility do you want to strengthen?',
      type: 'single',
      options: [
        { value: 'decision', label: 'Decision Making & Problem Solving' },
        { value: 'communication', label: 'Communication & Influence' },
        { value: 'team', label: 'Team Building & Motivation' },
        { value: 'strategy', label: 'Vision, Strategy & Planning' },
        { value: 'ethics', label: 'Ethics & Accountability' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│      Drawing Dream      │
└─────────────────────────┘
*/


{
  key: 'drawing',
  name: 'Drawing & Art Skills',
  icon: 'Pencil',
  description: 'Drawing, sketching, illustration, and visual art careers',
  questions: [

    /* ======================
       1️⃣ DRAWING INTEREST
    ====================== */
    {
      key: 'drawing_interest',
      text: 'What is your main interest in drawing?',
      type: 'single',
      options: [
        { value: 'hobby', label: 'Hobby / Personal Interest', nextQuestion: 'drawing_type' },
        { value: 'career', label: 'Professional Career', nextQuestion: 'drawing_type' },
        { value: 'business', label: 'Art Business / Freelancing', nextQuestion: 'drawing_type' },
        { value: 'learning', label: 'Learning from Basics', nextQuestion: 'drawing_type' },
      ],
    },

    /* ======================
       2️⃣ DRAWING TYPES
    ====================== */
    {
      key: 'drawing_type',
      text: 'Which type of drawing interests you?',
      type: 'single',
      options: [
        { value: 'sketching', label: 'Pencil Sketching', nextQuestion: 'skill_level' },
        { value: 'realistic', label: 'Realistic Drawing', nextQuestion: 'skill_level' },
        { value: 'portrait', label: 'Portrait Drawing', nextQuestion: 'skill_level' },
        { value: 'cartoon', label: 'Cartoon / Caricature', nextQuestion: 'skill_level' },
        { value: 'anime', label: 'Anime / Manga Art', nextQuestion: 'skill_level' },
        { value: 'illustration', label: 'Illustration / Book Art', nextQuestion: 'skill_level' },
        { value: 'digital', label: 'Digital Drawing / Tablet Art', nextQuestion: 'skill_level' },
        { value: 'painting', label: 'Painting (Watercolor/Acrylic/Oil)', nextQuestion: 'skill_level' },
        { value: 'calligraphy', label: 'Calligraphy / Lettering', nextQuestion: 'skill_level' },
      ],
    },

    /* ======================
       3️⃣ SKILL LEVEL
    ====================== */
    {
      key: 'skill_level',
      text: 'What is your current drawing skill level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner (Basics)', nextQuestion: 'learning_goal' },
        { value: 'intermediate', label: 'Intermediate', nextQuestion: 'learning_goal' },
        { value: 'advanced', label: 'Advanced / Professional', nextQuestion: 'learning_goal' },
      ],
    },

    /* ======================
       4️⃣ LEARNING GOAL
    ====================== */
    {
      key: 'learning_goal',
      text: 'What do you want to improve most?',
      type: 'single',
      options: [
        { value: 'basics', label: 'Shapes, Lines & Shading', nextQuestion: 'tools_used' },
        { value: 'anatomy', label: 'Human Anatomy & Proportions', nextQuestion: 'tools_used' },
        { value: 'perspective', label: 'Perspective & Depth', nextQuestion: 'tools_used' },
        { value: 'color', label: 'Color Theory & Blending', nextQuestion: 'tools_used' },
        { value: 'speed', label: 'Speed & Accuracy', nextQuestion: 'tools_used' },
      ],
    },

    /* ======================
       5️⃣ TOOLS & MEDIUM
    ====================== */
    {
      key: 'tools_used',
      text: 'Which tools do you prefer for drawing?',
      type: 'single',
      options: [
        { value: 'pencil', label: 'Pencil & Paper', nextQuestion: 'career_path' },
        { value: 'charcoal', label: 'Charcoal / Pastels', nextQuestion: 'career_path' },
        { value: 'paint', label: 'Paints & Brushes', nextQuestion: 'career_path' },
        { value: 'tablet', label: 'Tablet & Stylus', nextQuestion: 'career_path' },
        { value: 'mixed', label: 'Mixed Medium', nextQuestion: 'career_path' },
      ],
    },

    /* ======================
       6️⃣ CAREER / USAGE PATH
    ====================== */
    {
      key: 'career_path',
      text: 'How do you want to use your drawing skills?',
      type: 'single',
      options: [
        { value: 'freelance', label: 'Freelance Artist / Illustrator' },
        { value: 'job', label: 'Job (Designer / Animator / Game Artist)' },
        { value: 'teaching', label: 'Teaching / Art Trainer' },
        { value: 'content', label: 'Content Creation (YouTube / Instagram)' },
        { value: 'business', label: 'Art Business (Commissions / Store)' },
        { value: 'personal', label: 'Personal Growth & Expression' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│   story_writing Dream   │
└─────────────────────────┘
*/

{
  key: 'story_writing',
  name: 'Story & Novel Writing',
  icon: 'PenTool',
  description: 'Creative writing, storytelling, and author careers',
  questions: [

    /* ======================
       1️⃣ WRITING PURPOSE
    ====================== */
    {
      key: 'writing_purpose',
      text: 'Why do you want to write?',
      type: 'single',
      options: [
        { value: 'hobby', label: 'Hobby / Self-Expression', nextQuestion: 'writing_format' },
        { value: 'career', label: 'Professional Writer / Author', nextQuestion: 'writing_format' },
        { value: 'business', label: 'Writing for Income', nextQuestion: 'writing_format' },
        { value: 'learning', label: 'Learn Writing from Basics', nextQuestion: 'writing_format' },
      ],
    },

    /* ======================
       2️⃣ WRITING FORMAT
    ====================== */
    {
      key: 'writing_format',
      text: 'What do you want to write?',
      type: 'single',
      options: [
        { value: 'short_story', label: 'Short Stories', nextQuestion: 'genre' },
        { value: 'novel', label: 'Novel', nextQuestion: 'genre' },
        { value: 'novella', label: 'Novella', nextQuestion: 'genre' },
        { value: 'screenplay', label: 'Screenplay / Script', nextQuestion: 'genre' },
        { value: 'poetry', label: 'Poetry', nextQuestion: 'genre' },
        { value: 'web_series', label: 'Web Stories / Blogs', nextQuestion: 'genre' },
        { value: 'fanfiction', label: 'Fan Fiction', nextQuestion: 'genre' },
      ],
    },

    /* ======================
       3️⃣ GENRE SELECTION
    ====================== */
    {
      key: 'genre',
      text: 'Which genre do you prefer?',
      type: 'single',
      options: [
        { value: 'romance', label: 'Romance', nextQuestion: 'language' },
        { value: 'thriller', label: 'Thriller / Mystery', nextQuestion: 'language' },
        { value: 'fantasy', label: 'Fantasy / Mythology', nextQuestion: 'language' },
        { value: 'sci_fi', label: 'Science Fiction', nextQuestion: 'language' },
        { value: 'horror', label: 'Horror', nextQuestion: 'language' },
        { value: 'drama', label: 'Drama / Slice of Life', nextQuestion: 'language' },
        { value: 'historical', label: 'Historical Fiction', nextQuestion: 'language' },
        { value: 'inspirational', label: 'Inspirational / Motivational', nextQuestion: 'language' },
      ],
    },

    /* ======================
       4️⃣ LANGUAGE & STYLE
    ====================== */
    {
      key: 'language',
      text: 'Which language will you write in?',
      type: 'single',
      options: [
        { value: 'english', label: 'English', nextQuestion: 'skill_level' },
        { value: 'telugu', label: 'Telugu', nextQuestion: 'skill_level' },
        { value: 'hindi', label: 'Hindi', nextQuestion: 'skill_level' },
        { value: 'bilingual', label: 'Bilingual / Mixed', nextQuestion: 'skill_level' },
      ],
    },

    /* ======================
       5️⃣ SKILL LEVEL
    ====================== */
    {
      key: 'skill_level',
      text: 'What is your writing level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner (Ideas but no structure)', nextQuestion: 'focus_area' },
        { value: 'intermediate', label: 'Intermediate (Some writing experience)', nextQuestion: 'focus_area' },
        { value: 'advanced', label: 'Advanced / Published Writer', nextQuestion: 'focus_area' },
      ],
    },

    /* ======================
       6️⃣ IMPROVEMENT FOCUS
    ====================== */
    {
      key: 'focus_area',
      text: 'What do you want to improve most?',
      type: 'single',
      options: [
        { value: 'plot', label: 'Story Plot & Structure', nextQuestion: 'writing_habit' },
        { value: 'characters', label: 'Character Development', nextQuestion: 'writing_habit' },
        { value: 'dialogue', label: 'Dialogue Writing', nextQuestion: 'writing_habit' },
        { value: 'world', label: 'World-Building', nextQuestion: 'writing_habit' },
        { value: 'editing', label: 'Editing & Polishing', nextQuestion: 'writing_habit' },
      ],
    },

    /* ======================
       7️⃣ WRITING HABIT
    ====================== */
    {
      key: 'writing_habit',
      text: 'How often can you write?',
      type: 'single',
      options: [
        { value: 'daily', label: 'Daily', nextQuestion: 'publishing_goal' },
        { value: 'weekly', label: 'Weekly', nextQuestion: 'publishing_goal' },
        { value: 'flexible', label: 'Flexible Schedule', nextQuestion: 'publishing_goal' },
      ],
    },

    /* ======================
       8️⃣ PUBLISHING GOAL
    ====================== */
    {
      key: 'publishing_goal',
      text: 'What is your publishing goal?',
      type: 'single',
      options: [
        { value: 'self', label: 'Self-Publishing (Amazon, Kindle, etc.)' },
        { value: 'traditional', label: 'Traditional Publisher' },
        { value: 'online', label: 'Online Platforms (Wattpad, Medium)' },
        { value: 'film', label: 'Adaptation for Film / Series' },
        { value: 'personal', label: 'Personal Satisfaction Only' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│     Research dream      │
└─────────────────────────┘
*/

{
  key: 'research',
  name: 'Research & Analysis',
  icon: 'Microscope',
  description: 'Academic, scientific, business, and applied research',
  questions: [

    /* ======================
       1️⃣ PURPOSE OF RESEARCH
    ====================== */
    {
      key: 'research_purpose',
      text: 'Why do you want to do research?',
      type: 'single',
      options: [
        { value: 'academic', label: 'Academic / Education', nextQuestion: 'research_domain' },
        { value: 'career', label: 'Research Career', nextQuestion: 'research_domain' },
        { value: 'business', label: 'Business / Market Research', nextQuestion: 'research_domain' },
        { value: 'innovation', label: 'Innovation / Product Development', nextQuestion: 'research_domain' },
        { value: 'personal', label: 'Personal / Independent Research', nextQuestion: 'research_domain' },
      ],
    },

    /* ======================
       2️⃣ DOMAIN SELECTION
    ====================== */
    {
      key: 'research_domain',
      text: 'Which research domain interests you?',
      type: 'single',
      options: [
        { value: 'science', label: 'Science & Technology', nextQuestion: 'research_type' },
        { value: 'medical', label: 'Medical & Health Research', nextQuestion: 'research_type' },
        { value: 'social', label: 'Social Sciences', nextQuestion: 'research_type' },
        { value: 'business', label: 'Business / Management', nextQuestion: 'research_type' },
        { value: 'ai', label: 'AI / Data / Machine Learning', nextQuestion: 'research_type' },
        { value: 'legal', label: 'Legal / Policy Research', nextQuestion: 'research_type' },
        { value: 'design', label: 'UX / Design Research', nextQuestion: 'research_type' },
        { value: 'environment', label: 'Environmental Research', nextQuestion: 'research_type' },
      ],
    },

    /* ======================
       3️⃣ RESEARCH TYPE
    ====================== */
    {
      key: 'research_type',
      text: 'What type of research do you want to conduct?',
      type: 'single',
      options: [
        { value: 'qualitative', label: 'Qualitative Research', nextQuestion: 'research_method' },
        { value: 'quantitative', label: 'Quantitative Research', nextQuestion: 'research_method' },
        { value: 'mixed', label: 'Mixed Methods', nextQuestion: 'research_method' },
        { value: 'theoretical', label: 'Theoretical / Literature-Based', nextQuestion: 'research_method' },
        { value: 'experimental', label: 'Experimental / Lab Research', nextQuestion: 'research_method' },
      ],
    },

    /* ======================
       4️⃣ RESEARCH METHOD
    ====================== */
    {
      key: 'research_method',
      text: 'Which research method will you use?',
      type: 'single',
      options: [
        { value: 'survey', label: 'Surveys & Questionnaires', nextQuestion: 'data_source' },
        { value: 'interview', label: 'Interviews / Focus Groups', nextQuestion: 'data_source' },
        { value: 'case_study', label: 'Case Studies', nextQuestion: 'data_source' },
        { value: 'experiment', label: 'Experiments / Simulations', nextQuestion: 'data_source' },
        { value: 'secondary', label: 'Secondary Data Analysis', nextQuestion: 'data_source' },
      ],
    },

    /* ======================
       5️⃣ DATA SOURCE
    ====================== */
    {
      key: 'data_source',
      text: 'What will be your primary data source?',
      type: 'single',
      options: [
        { value: 'primary', label: 'Primary Data (Field / Lab)', nextQuestion: 'tools' },
        { value: 'secondary', label: 'Secondary Data (Reports / Papers)', nextQuestion: 'tools' },
        { value: 'both', label: 'Both Primary & Secondary', nextQuestion: 'tools' },
      ],
    },

    /* ======================
       6️⃣ TOOLS & TECHNOLOGY
    ====================== */
    {
      key: 'tools',
      text: 'Which tools do you plan to use?',
      type: 'single',
      options: [
        { value: 'manual', label: 'Manual / Traditional Methods', nextQuestion: 'skill_level' },
        { value: 'software', label: 'Statistical / Research Software', nextQuestion: 'skill_level' },
        { value: 'ai_tools', label: 'AI Tools (ChatGPT, SPSS, Python)', nextQuestion: 'skill_level' },
        { value: 'lab', label: 'Laboratory Equipment', nextQuestion: 'skill_level' },
      ],
    },

    /* ======================
       7️⃣ SKILL LEVEL
    ====================== */
    {
      key: 'skill_level',
      text: 'What is your current research skill level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner (Need full guidance)', nextQuestion: 'output_goal' },
        { value: 'intermediate', label: 'Intermediate (Some experience)', nextQuestion: 'output_goal' },
        { value: 'advanced', label: 'Advanced / Researcher', nextQuestion: 'output_goal' },
      ],
    },

    /* ======================
       8️⃣ OUTPUT GOAL
    ====================== */
    {
      key: 'output_goal',
      text: 'What is the expected outcome of your research?',
      type: 'single',
      options: [
        { value: 'paper', label: 'Research Paper / Journal' },
        { value: 'thesis', label: 'Thesis / Dissertation' },
        { value: 'product', label: 'Product / Innovation' },
        { value: 'report', label: 'Business / Market Report' },
        { value: 'policy', label: 'Policy Recommendation' },
      ],
    },

  ],
},


/*
┌─────────────────────────┐
│    Strategy Dream       │
└─────────────────────────┘
*/

{
  key: 'strategy',
  name: 'Strategy & Strategic Thinking',
  icon: 'Chess',
  description: 'Planning, decision-making, and long-term success strategies',
  questions: [

    /* ======================
       1️⃣ STRATEGY PURPOSE
    ====================== */
    {
      key: 'strategy_purpose',
      text: 'Why do you want to build a strategy?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Life Strategy', nextQuestion: 'strategy_domain' },
        { value: 'career', label: 'Career Growth Strategy', nextQuestion: 'strategy_domain' },
        { value: 'business', label: 'Business / Startup Strategy', nextQuestion: 'strategy_domain' },
        { value: 'leadership', label: 'Leadership & Team Strategy', nextQuestion: 'strategy_domain' },
        { value: 'competition', label: 'Competitive / Game / Sports Strategy', nextQuestion: 'strategy_domain' },
      ],
    },

    /* ======================
       2️⃣ STRATEGY DOMAIN
    ====================== */
    {
      key: 'strategy_domain',
      text: 'Which domain does your strategy belong to?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Growth & Discipline', nextQuestion: 'strategy_type' },
        { value: 'career', label: 'Job / Skill / Promotion Strategy', nextQuestion: 'strategy_type' },
        { value: 'startup', label: 'Startup & Entrepreneurship', nextQuestion: 'strategy_type' },
        { value: 'business', label: 'Large Business / Corporate', nextQuestion: 'strategy_type' },
        { value: 'marketing', label: 'Marketing & Branding', nextQuestion: 'strategy_type' },
        { value: 'military', label: 'Defense / Military Thinking', nextQuestion: 'strategy_type' },
        { value: 'sports', label: 'Sports / Competitive Games', nextQuestion: 'strategy_type' },
        { value: 'ai', label: 'AI / Technology Strategy', nextQuestion: 'strategy_type' },
      ],
    },

    /* ======================
       3️⃣ STRATEGY TYPE
    ====================== */
    {
      key: 'strategy_type',
      text: 'What type of strategy do you want to build?',
      type: 'single',
      options: [
        { value: 'long_term', label: 'Long-Term Vision Strategy', nextQuestion: 'risk_level' },
        { value: 'short_term', label: 'Short-Term Execution Strategy', nextQuestion: 'risk_level' },
        { value: 'growth', label: 'Growth & Expansion Strategy', nextQuestion: 'risk_level' },
        { value: 'defensive', label: 'Risk Control / Defensive Strategy', nextQuestion: 'risk_level' },
        { value: 'competitive', label: 'Competitive / Opponent-Based Strategy', nextQuestion: 'risk_level' },
      ],
    },

    /* ======================
       4️⃣ RISK APPETITE
    ====================== */
    {
      key: 'risk_level',
      text: 'What level of risk are you comfortable with?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low Risk – Stability First', nextQuestion: 'decision_style' },
        { value: 'medium', label: 'Medium Risk – Balanced', nextQuestion: 'decision_style' },
        { value: 'high', label: 'High Risk – Aggressive Growth', nextQuestion: 'decision_style' },
      ],
    },

    /* ======================
       5️⃣ DECISION STYLE
    ====================== */
    {
      key: 'decision_style',
      text: 'How do you prefer to make strategic decisions?',
      type: 'single',
      options: [
        { value: 'data', label: 'Data & Analysis Based', nextQuestion: 'resources' },
        { value: 'intuition', label: 'Experience & Intuition', nextQuestion: 'resources' },
        { value: 'hybrid', label: 'Combination of Both', nextQuestion: 'resources' },
      ],
    },

    /* ======================
       6️⃣ AVAILABLE RESOURCES
    ====================== */
    {
      key: 'resources',
      text: 'What resources do you currently have?',
      type: 'single',
      options: [
        { value: 'limited', label: 'Limited Resources', nextQuestion: 'time_horizon' },
        { value: 'moderate', label: 'Moderate Resources', nextQuestion: 'time_horizon' },
        { value: 'strong', label: 'Strong Resources (Team/Money)', nextQuestion: 'time_horizon' },
      ],
    },

    /* ======================
       7️⃣ TIME HORIZON
    ====================== */
    {
      key: 'time_horizon',
      text: 'What is your strategy time horizon?',
      type: 'single',
      options: [
        { value: 'weeks', label: 'Weeks (Immediate Action)', nextQuestion: 'execution_focus' },
        { value: 'months', label: 'Months (Mid-Term)', nextQuestion: 'execution_focus' },
        { value: 'years', label: 'Years (Long-Term Vision)', nextQuestion: 'execution_focus' },
      ],
    },

    /* ======================
       8️⃣ EXECUTION FOCUS
    ====================== */
    {
      key: 'execution_focus',
      text: 'What should your strategy focus on most?',
      type: 'single',
      options: [
        { value: 'speed', label: 'Speed & Quick Wins', nextQuestion: 'success_metric' },
        { value: 'quality', label: 'Quality & Sustainability', nextQuestion: 'success_metric' },
        { value: 'scale', label: 'Scaling & Expansion', nextQuestion: 'success_metric' },
        { value: 'control', label: 'Control & Risk Management', nextQuestion: 'success_metric' },
      ],
    },

    /* ======================
       9️⃣ SUCCESS METRIC
    ====================== */
    {
      key: 'success_metric',
      text: 'How will you measure success?',
      type: 'single',
      options: [
        { value: 'money', label: 'Financial Growth' },
        { value: 'position', label: 'Position / Authority / Rank' },
        { value: 'impact', label: 'Impact & Influence' },
        { value: 'stability', label: 'Stability & Security' },
        { value: 'mastery', label: 'Skill & Mastery' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│       Target Dream      │
└─────────────────────────┘
*/

{
  key: 'target',
  name: 'Target & Goal Setting',
  icon: 'Target',
  description: 'Setting clear targets and achieving measurable goals',
  questions: [

    /* ======================
       1️⃣ TARGET PURPOSE
    ====================== */
    {
      key: 'target_purpose',
      text: 'Why are you setting this target?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Life Goal', nextQuestion: 'target_area' },
        { value: 'career', label: 'Career / Job Goal', nextQuestion: 'target_area' },
        { value: 'business', label: 'Business / Startup Goal', nextQuestion: 'target_area' },
        { value: 'education', label: 'Education / Learning Goal', nextQuestion: 'target_area' },
        { value: 'health', label: 'Health / Fitness Goal', nextQuestion: 'target_area' },
      ],
    },

    /* ======================
       2️⃣ TARGET AREA
    ====================== */
    {
      key: 'target_area',
      text: 'Which area does your target belong to?',
      type: 'single',
      options: [
        { value: 'finance', label: 'Money / Income', nextQuestion: 'target_type' },
        { value: 'skill', label: 'Skill Development', nextQuestion: 'target_type' },
        { value: 'position', label: 'Position / Rank', nextQuestion: 'target_type' },
        { value: 'performance', label: 'Performance / Results', nextQuestion: 'target_type' },
        { value: 'impact', label: 'Impact / Influence', nextQuestion: 'target_type' },
      ],
    },

    /* ======================
       3️⃣ TARGET TYPE
    ====================== */
    {
      key: 'target_type',
      text: 'What kind of target is this?',
      type: 'single',
      options: [
        { value: 'short_term', label: 'Short-Term Target', nextQuestion: 'time_frame' },
        { value: 'mid_term', label: 'Mid-Term Target', nextQuestion: 'time_frame' },
        { value: 'long_term', label: 'Long-Term Target', nextQuestion: 'time_frame' },
      ],
    },

    /* ======================
       4️⃣ TIME FRAME
    ====================== */
    {
      key: 'time_frame',
      text: 'What is the time frame for this target?',
      type: 'single',
      options: [
        { value: 'days', label: 'Days', nextQuestion: 'measurement_type' },
        { value: 'weeks', label: 'Weeks', nextQuestion: 'measurement_type' },
        { value: 'months', label: 'Months', nextQuestion: 'measurement_type' },
        { value: 'years', label: 'Years', nextQuestion: 'measurement_type' },
      ],
    },

    /* ======================
       5️⃣ MEASUREMENT TYPE
    ====================== */
    {
      key: 'measurement_type',
      text: 'How will this target be measured?',
      type: 'single',
      options: [
        { value: 'numeric', label: 'Numbers (marks, money, count)', nextQuestion: 'target_value' },
        { value: 'milestone', label: 'Milestones / Steps', nextQuestion: 'target_value' },
        { value: 'habit', label: 'Habit / Consistency', nextQuestion: 'target_value' },
      ],
    },

    /* ======================
       6️⃣ TARGET VALUE
    ====================== */
    {
      key: 'target_value',
      text: 'Enter your target value or description',
      type: 'text',
      nextQuestion: 'difficulty_level',
    },

    /* ======================
       7️⃣ DIFFICULTY LEVEL
    ====================== */
    {
      key: 'difficulty_level',
      text: 'How difficult is this target for you?',
      type: 'single',
      options: [
        { value: 'easy', label: 'Easy & Comfortable', nextQuestion: 'commitment_level' },
        { value: 'medium', label: 'Challenging but Achievable', nextQuestion: 'commitment_level' },
        { value: 'hard', label: 'Very Challenging', nextQuestion: 'commitment_level' },
      ],
    },

    /* ======================
       8️⃣ COMMITMENT LEVEL
    ====================== */
    {
      key: 'commitment_level',
      text: 'How committed are you to achieving this target?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low Commitment' },
        { value: 'medium', label: 'Moderate Commitment' },
        { value: 'high', label: 'Full Commitment (No Excuses)' },
      ],
    },

  ],
},


{
  key: 'entrance_exams',
  name: 'Entrance Exams & Education Path',
  icon: 'GraduationCap',
  description: 'All entrance exams mapped from 10th to higher education and jobs',
  questions: [

    /* ======================
       1️⃣ CURRENT EDUCATION
    ====================== */
    {
      key: 'current_level',
      text: 'What is your current education level?',
      type: 'single',
      options: [
        { value: 'below_10', label: 'Below 10th Class', nextQuestion: 'school_exams' },
        { value: '10th', label: '10th Passed', nextQuestion: 'after_10th' },
        { value: 'inter', label: 'Intermediate / 12th', nextQuestion: 'after_inter' },
        { value: 'polytechnic', label: 'Polytechnic / Diploma', nextQuestion: 'after_polytechnic' },
        { value: 'degree', label: 'Degree / UG', nextQuestion: 'after_degree' },
        { value: 'pg', label: 'Post Graduation', nextQuestion: 'after_pg' },
      ],
    },

    /* ======================
       2️⃣ SCHOOL LEVEL
    ====================== */
    {
      key: 'school_exams',
      text: 'Which school-level exam path are you interested in?',
      type: 'single',
      options: [
        { value: 'foundation', label: 'Foundation / Olympiads', nextQuestion: 'exam_goal' },
        { value: 'navodaya', label: 'Navodaya Vidyalaya', nextQuestion: 'exam_goal' },
        { value: 'sainik', label: 'Sainik School', nextQuestion: 'exam_goal' },
        { value: 'scholarship', label: 'Scholarship Exams', nextQuestion: 'exam_goal' },
      ],
    },

    /* ======================
       3️⃣ AFTER 10TH
    ====================== */
    {
      key: 'after_10th',
      text: 'What do you want to pursue after 10th?',
      type: 'single',
      options: [
        { value: 'intermediate', label: 'Intermediate (MPC / BiPC / Arts)', nextQuestion: 'after_inter' },
        { value: 'poly_cet', label: 'POLYCET (Polytechnic)', nextQuestion: 'after_polytechnic' },
        { value: 'iti', label: 'ITI / Skill Courses', nextQuestion: 'exam_goal' },
        { value: 'paramedical', label: 'Paramedical Courses', nextQuestion: 'exam_goal' },
      ],
    },

    /* ======================
       4️⃣ AFTER INTERMEDIATE
    ====================== */
    {
      key: 'after_inter',
      text: 'Which entrance exam after Intermediate?',
      type: 'single',
      options: [
        { value: 'eamcet', label: 'EAMCET / State CETs', nextQuestion: 'exam_goal' },
        { value: 'jee', label: 'JEE Main / Advanced', nextQuestion: 'exam_goal' },
        { value: 'neet', label: 'NEET UG', nextQuestion: 'exam_goal' },
        { value: 'cuet', label: 'CUET', nextQuestion: 'exam_goal' },
        { value: 'clat', label: 'CLAT (Law)', nextQuestion: 'exam_goal' },
        { value: 'nift', label: 'NIFT / NID (Design)', nextQuestion: 'exam_goal' },
        { value: 'nda', label: 'Defence (NDA)', nextQuestion: 'exam_goal' },
      ],
    },

    /* ======================
       5️⃣ AFTER POLYTECHNIC
    ====================== */
    {
      key: 'after_polytechnic',
      text: 'What is your plan after Polytechnic / Diploma?',
      type: 'single',
      options: [
        { value: 'ecet', label: 'ECET (Lateral Entry BTech)', nextQuestion: 'exam_goal' },
        { value: 'leee', label: 'Other Lateral Entry Exams', nextQuestion: 'exam_goal' },
        { value: 'govt_jobs', label: 'Government Jobs (Diploma)', nextQuestion: 'exam_goal' },
        { value: 'private_jobs', label: 'Private Jobs / Industry', nextQuestion: 'exam_goal' },
      ],
    },

    /* ======================
       6️⃣ AFTER DEGREE
    ====================== */
    {
      key: 'after_degree',
      text: 'Which exam do you want after Degree?',
      type: 'single',
      options: [
        { value: 'gate', label: 'GATE (MTech / PSU)', nextQuestion: 'exam_goal' },
        { value: 'upsc', label: 'UPSC (IAS / IPS)', nextQuestion: 'exam_goal' },
        { value: 'cat', label: 'CAT / XAT (MBA)', nextQuestion: 'exam_goal' },
        { value: 'ssc', label: 'SSC / Banking Exams', nextQuestion: 'exam_goal' },
        { value: 'gre', label: 'GRE / GMAT (Abroad)', nextQuestion: 'exam_goal' },
        { value: 'defence_grad', label: 'Defence (CDS / AFCAT)', nextQuestion: 'exam_goal' },
      ],
    },

    /* ======================
       7️⃣ AFTER POST GRADUATION
    ====================== */
    {
      key: 'after_pg',
      text: 'What do you want after Post Graduation?',
      type: 'single',
      options: [
        { value: 'phd', label: 'PhD / Research Entrance', nextQuestion: 'exam_goal' },
        { value: 'ugc_net', label: 'UGC NET / JRF', nextQuestion: 'exam_goal' },
        { value: 'faculty', label: 'Teaching / Professor', nextQuestion: 'exam_goal' },
        { value: 'industry', label: 'Industry / Corporate Roles', nextQuestion: 'exam_goal' },
      ],
    },

    /* ======================
       8️⃣ FINAL GOAL
    ====================== */
    {
      key: 'exam_goal',
      text: 'What is your main goal?',
      type: 'single',
      options: [
        { value: 'higher_study', label: 'Higher Education' },
        { value: 'govt_job', label: 'Government Job' },
        { value: 'private_job', label: 'Private Job' },
        { value: 'research', label: 'Research / Academia' },
        { value: 'abroad', label: 'Study Abroad' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│     Planning Dream      │
└─────────────────────────┘
*/

{
  key: 'planning',
  name: 'Planning',
  icon: 'Calendar',
  description: 'Structured planning for goals, projects, and success',
  questions: [

    /* ======================
       1️⃣ PLANNING PURPOSE
    ====================== */
    {
      key: 'planning_purpose',
      text: 'What do you want to plan for?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Life', nextQuestion: 'planning_area' },
        { value: 'career', label: 'Career / Job', nextQuestion: 'planning_area' },
        { value: 'business', label: 'Business / Startup', nextQuestion: 'planning_area' },
        { value: 'education', label: 'Education / Study', nextQuestion: 'planning_area' },
        { value: 'project', label: 'Project / Task', nextQuestion: 'planning_area' },
      ],
    },

    /* ======================
       2️⃣ PLANNING AREA
    ====================== */
    {
      key: 'planning_area',
      text: 'Which area do you want to plan?',
      type: 'single',
      options: [
        { value: 'time', label: 'Time Management', nextQuestion: 'time_horizon' },
        { value: 'goals', label: 'Goals & Milestones', nextQuestion: 'time_horizon' },
        { value: 'resources', label: 'Resources & Budget', nextQuestion: 'time_horizon' },
        { value: 'execution', label: 'Execution Strategy', nextQuestion: 'time_horizon' },
        { value: 'growth', label: 'Growth & Improvement', nextQuestion: 'time_horizon' },
      ],
    },

    /* ======================
       3️⃣ TIME HORIZON
    ====================== */
    {
      key: 'time_horizon',
      text: 'What is the planning duration?',
      type: 'single',
      options: [
        { value: 'daily', label: 'Daily Plan', nextQuestion: 'planning_depth' },
        { value: 'weekly', label: 'Weekly Plan', nextQuestion: 'planning_depth' },
        { value: 'monthly', label: 'Monthly Plan', nextQuestion: 'planning_depth' },
        { value: 'yearly', label: 'Yearly Plan', nextQuestion: 'planning_depth' },
      ],
    },

    /* ======================
       4️⃣ PLANNING DEPTH
    ====================== */
    {
      key: 'planning_depth',
      text: 'How detailed should the plan be?',
      type: 'single',
      options: [
        { value: 'basic', label: 'Basic Outline', nextQuestion: 'flexibility_level' },
        { value: 'detailed', label: 'Detailed Step-by-Step', nextQuestion: 'flexibility_level' },
        { value: 'advanced', label: 'Advanced with Tracking', nextQuestion: 'flexibility_level' },
      ],
    },

    /* ======================
       5️⃣ FLEXIBILITY LEVEL
    ====================== */
    {
      key: 'flexibility_level',
      text: 'How flexible should this plan be?',
      type: 'single',
      options: [
        { value: 'strict', label: 'Strict (No Deviations)', nextQuestion: 'risk_factors' },
        { value: 'balanced', label: 'Balanced & Adjustable', nextQuestion: 'risk_factors' },
        { value: 'flexible', label: 'Very Flexible', nextQuestion: 'risk_factors' },
      ],
    },

    /* ======================
       6️⃣ RISK FACTORS
    ====================== */
    {
      key: 'risk_factors',
      text: 'What are the biggest challenges you expect?',
      type: 'single',
      options: [
        { value: 'time', label: 'Lack of Time', nextQuestion: 'support_needed' },
        { value: 'discipline', label: 'Lack of Discipline', nextQuestion: 'support_needed' },
        { value: 'resources', label: 'Limited Resources', nextQuestion: 'support_needed' },
        { value: 'motivation', label: 'Low Motivation', nextQuestion: 'support_needed' },
      ],
    },

    /* ======================
       7️⃣ SUPPORT NEEDED
    ====================== */
    {
      key: 'support_needed',
      text: 'What kind of support would help you?',
      type: 'single',
      options: [
        { value: 'schedule', label: 'Daily Schedule / Planner' },
        { value: 'roadmap', label: 'Clear Roadmap' },
        { value: 'tracking', label: 'Progress Tracking System' },
        { value: 'mentor', label: 'Mentor / Guidance' },
      ],
    },

    

  ],
  
},

{
  key: 'energy_saving',
  name: 'Energy & Power Saving',
  icon: 'Zap',
  description: 'Energy efficiency, power saving techniques, and cost reduction',
  questions: [

    /* ======================
       1️⃣ PURPOSE
    ====================== */
    {
      key: 'energy_purpose',
      text: 'Why do you want to focus on energy saving?',
      type: 'single',
      options: [
        { value: 'cost', label: 'Reduce Electricity Bills', nextQuestion: 'usage_area' },
        { value: 'environment', label: 'Environmental Protection', nextQuestion: 'usage_area' },
        { value: 'industry', label: 'Industrial Power Optimization', nextQuestion: 'usage_area' },
        { value: 'business', label: 'Energy Consulting / Business', nextQuestion: 'usage_area' },
      ],
    },

    /* ======================
       2️⃣ USAGE AREA
    ====================== */
    {
      key: 'usage_area',
      text: 'Where do you want to apply energy saving?',
      type: 'single',
      options: [
        { value: 'home', label: 'Home / Residential', nextQuestion: 'power_source' },
        { value: 'office', label: 'Office / Corporate', nextQuestion: 'power_source' },
        { value: 'industry', label: 'Factory / Industry', nextQuestion: 'power_source' },
        { value: 'commercial', label: 'Commercial Buildings', nextQuestion: 'power_source' },
      ],
    },

    /* ======================
       3️⃣ POWER SOURCE
    ====================== */
    {
      key: 'power_source',
      text: 'What is the primary power source?',
      type: 'single',
      options: [
        { value: 'grid', label: 'Electric Grid', nextQuestion: 'energy_problem' },
        { value: 'solar', label: 'Solar Power', nextQuestion: 'energy_problem' },
        { value: 'diesel', label: 'Generator / Diesel', nextQuestion: 'energy_problem' },
        { value: 'hybrid', label: 'Hybrid (Grid + Solar)', nextQuestion: 'energy_problem' },
      ],
    },

    /* ======================
       4️⃣ CURRENT PROBLEM
    ====================== */
    {
      key: 'energy_problem',
      text: 'What is the biggest power-related issue?',
      type: 'single',
      options: [
        { value: 'high_bill', label: 'High Electricity Bills', nextQuestion: 'saving_focus' },
        { value: 'wastage', label: 'Energy Wastage', nextQuestion: 'saving_focus' },
        { value: 'inefficiency', label: 'Low Efficiency Equipment', nextQuestion: 'saving_focus' },
        { value: 'power_loss', label: 'Power Loss / Downtime', nextQuestion: 'saving_focus' },
      ],
    },

    /* ======================
       5️⃣ SAVING FOCUS
    ====================== */
    {
      key: 'saving_focus',
      text: 'Which area should be optimized?',
      type: 'single',
      options: [
        { value: 'lighting', label: 'Lighting Systems', nextQuestion: 'automation_level' },
        { value: 'machinery', label: 'Machinery & Motors', nextQuestion: 'automation_level' },
        { value: 'hvac', label: 'HVAC / Cooling Systems', nextQuestion: 'automation_level' },
        { value: 'behavior', label: 'Human Usage Behavior', nextQuestion: 'automation_level' },
      ],
    },

    /* ======================
       6️⃣ AUTOMATION
    ====================== */
    {
      key: 'automation_level',
      text: 'Do you want automation in power saving?',
      type: 'single',
      options: [
        { value: 'none', label: 'Manual Control', nextQuestion: 'investment_level' },
        { value: 'partial', label: 'Partial Automation (Sensors)', nextQuestion: 'investment_level' },
        { value: 'full', label: 'Full Smart Automation (IoT)', nextQuestion: 'investment_level' },
      ],
    },

    /* ======================
       7️⃣ INVESTMENT
    ====================== */
    {
      key: 'investment_level',
      text: 'What is your investment capacity?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low / No Investment', nextQuestion: 'time_frame' },
        { value: 'medium', label: 'Medium Investment', nextQuestion: 'time_frame' },
        { value: 'high', label: 'High (Industrial Scale)', nextQuestion: 'time_frame' },
      ],
    },

    /* ======================
       8️⃣ RESULTS EXPECTATION
    ====================== */
    {
      key: 'time_frame',
      text: 'When do you want results?',
      type: 'single',
      options: [
        { value: 'immediate', label: 'Immediate Savings' },
        { value: 'short', label: 'Within 3–6 Months' },
        { value: 'long', label: 'Long-Term Savings' },
      ],
    },

  ],
},

{
  key: 'usable_tips',
  name: 'Usable Tips',
  icon: 'Lightbulb',
  description: 'Daily life improvement, smart habits, productivity, savings, and healthy living tips',
  questions: [
    {
      key: 'tips_goal',
      text: 'What type of daily improvement are you looking for?',
      type: 'single',
      options: [
        { value: 'time', label: 'Time Management', nextQuestion: 'life_area' },
        { value: 'money', label: 'Money Saving', nextQuestion: 'life_area' },
        { value: 'health', label: 'Health & Hygiene', nextQuestion: 'life_area' },
        { value: 'food', label: 'Food & Nutrition', nextQuestion: 'life_area' },
        { value: 'energy', label: 'Energy & Power Saving', nextQuestion: 'life_area' },
        { value: 'mental', label: 'Mental Peace & Focus', nextQuestion: 'life_area' },
        { value: 'technology', label: 'Smart Use of Technology', nextQuestion: 'life_area' },
      ],
    },

    {
      key: 'life_area',
      text: 'Where do you want to apply these tips?',
      type: 'single',
      options: [
        { value: 'home', label: 'Home', nextQuestion: 'daily_habits' },
        { value: 'work', label: 'Office / Workplace', nextQuestion: 'daily_habits' },
        { value: 'college', label: 'College / School', nextQuestion: 'daily_habits' },
        { value: 'travel', label: 'Travel / Outdoor', nextQuestion: 'daily_habits' },
        { value: 'digital', label: 'Digital Life', nextQuestion: 'daily_habits' },
      ],
    },

    {
      key: 'daily_habits',
      text: 'Which daily habit do you want to improve most?',
      type: 'single',
      options: [
        { value: 'morning', label: 'Morning Routine', nextQuestion: 'smart_skills' },
        { value: 'sleep', label: 'Sleep Quality', nextQuestion: 'smart_skills' },
        { value: 'focus', label: 'Focus & Concentration', nextQuestion: 'smart_skills' },
        { value: 'discipline', label: 'Self-Discipline', nextQuestion: 'smart_skills' },
        { value: 'screen', label: 'Screen Time Control', nextQuestion: 'smart_skills' },
      ],
    },

    {
      key: 'smart_skills',
      text: 'Which smart living skill do you want to learn?',
      type: 'single',
      options: [
        { value: 'budgeting', label: 'Budget Planning', nextQuestion: 'health_lifestyle' },
        { value: 'decision', label: 'Smart Decision Making', nextQuestion: 'health_lifestyle' },
        { value: 'minimal', label: 'Minimal Living', nextQuestion: 'health_lifestyle' },
        { value: 'automation', label: 'Automating Daily Tasks', nextQuestion: 'health_lifestyle' },
        { value: 'problem', label: 'Problem Solving in Daily Life', nextQuestion: 'health_lifestyle' },
      ],
    },

    {
      key: 'health_lifestyle',
      text: 'Which lifestyle area matters most to you?',
      type: 'single',
      options: [
        { value: 'diet', label: 'Healthy Diet', nextQuestion: 'safety_awareness' },
        { value: 'exercise', label: 'Basic Exercise & Movement', nextQuestion: 'safety_awareness' },
        { value: 'posture', label: 'Posture & Body Care', nextQuestion: 'safety_awareness' },
        { value: 'stress', label: 'Stress Reduction', nextQuestion: 'safety_awareness' },
      ],
    },

    {
      key: 'safety_awareness',
      text: 'Which safety area do you want tips for?',
      type: 'single',
      options: [
        { value: 'home_safety', label: 'Home Safety', nextQuestion: 'financial_awareness' },
        { value: 'digital_safety', label: 'Digital & Online Safety', nextQuestion: 'financial_awareness' },
        { value: 'travel_safety', label: 'Travel Safety', nextQuestion: 'financial_awareness' },
        { value: 'emergency', label: 'Emergency Preparedness', nextQuestion: 'financial_awareness' },
      ],
    },

    {
      key: 'financial_awareness',
      text: 'Which financial tip do you want?',
      type: 'single',
      options: [
        { value: 'saving', label: 'Daily Expense Saving', nextQuestion: 'personal_growth' },
        { value: 'spending', label: 'Smart Spending', nextQuestion: 'personal_growth' },
        { value: 'planning', label: 'Monthly Planning', nextQuestion: 'personal_growth' },
        { value: 'avoid_debt', label: 'Avoiding Unnecessary Debt', nextQuestion: 'personal_growth' },
      ],
    },

    {
      key: 'personal_growth',
      text: 'Which personal growth area do you want to improve?',
      type: 'single',
      options: [
        { value: 'confidence', label: 'Self-Confidence', nextQuestion: 'final_outcome' },
        { value: 'communication', label: 'Daily Communication Skills', nextQuestion: 'final_outcome' },
        { value: 'learning', label: 'Continuous Learning Habit', nextQuestion: 'final_outcome' },
        { value: 'mindset', label: 'Positive Mindset', nextQuestion: 'final_outcome' },
      ],
    },

    {
      key: 'final_outcome',
      text: 'What outcome do you expect?',
      type: 'single',
      options: [
        { value: 'better_life', label: 'Better Daily Life' },
        { value: 'smart_living', label: 'Smart & Efficient Living' },
        { value: 'healthy_balance', label: 'Healthy Work-Life Balance' },
        { value: 'all', label: 'All of the Above' },
      ],
    },
  ],
},


{
  key: 'corporate_contacts',
  name: 'Corporate Contacts',
  icon: 'Briefcase',
  description: 'Building, managing, and leveraging professional and corporate relationships',
  questions: [
    {
      key: 'contact_purpose',
      text: 'Why do you want to build corporate contacts?',
      type: 'single',
      options: [
        { value: 'job', label: 'Job / Career Opportunities', nextQuestion: 'industry_focus' },
        { value: 'business', label: 'Business Growth / Clients', nextQuestion: 'industry_focus' },
        { value: 'partnership', label: 'Partnerships / Collaborations', nextQuestion: 'industry_focus' },
        { value: 'investment', label: 'Investors / Funding', nextQuestion: 'industry_focus' },
        { value: 'knowledge', label: 'Learning & Mentorship', nextQuestion: 'industry_focus' },
      ],
    },

    {
      key: 'industry_focus',
      text: 'Which industry do you want corporate contacts in?',
      type: 'single',
      options: [
        { value: 'it', label: 'IT / Software / AI', nextQuestion: 'contact_level' },
        { value: 'manufacturing', label: 'Manufacturing / Industry', nextQuestion: 'contact_level' },
        { value: 'finance', label: 'Finance / Banking', nextQuestion: 'contact_level' },
        { value: 'healthcare', label: 'Healthcare / Pharma', nextQuestion: 'contact_level' },
        { value: 'education', label: 'Education / Training', nextQuestion: 'contact_level' },
        { value: 'construction', label: 'Construction / Infrastructure', nextQuestion: 'contact_level' },
        { value: 'logistics', label: 'Logistics / Supply Chain', nextQuestion: 'contact_level' },
        { value: 'startup', label: 'Startups / Entrepreneurs', nextQuestion: 'contact_level' },
      ],
    },

    {
      key: 'contact_level',
      text: 'What level of professionals do you want to connect with?',
      type: 'single',
      options: [
        { value: 'entry', label: 'Entry-Level Professionals', nextQuestion: 'contact_roles' },
        { value: 'mid', label: 'Mid-Level Managers', nextQuestion: 'contact_roles' },
        { value: 'senior', label: 'Senior Management', nextQuestion: 'contact_roles' },
        { value: 'cxos', label: 'CXOs (CEO, CTO, CFO, etc.)', nextQuestion: 'contact_roles' },
        { value: 'founders', label: 'Founders / Co-founders', nextQuestion: 'contact_roles' },
      ],
    },

    {
      key: 'contact_roles',
      text: 'Which role is most important for you?',
      type: 'single',
      options: [
        { value: 'hr', label: 'HR / Talent Acquisition', nextQuestion: 'contact_channel' },
        { value: 'sales', label: 'Sales / Business Development', nextQuestion: 'contact_channel' },
        { value: 'tech', label: 'Technical Leads / Architects', nextQuestion: 'contact_channel' },
        { value: 'procurement', label: 'Procurement / Vendors', nextQuestion: 'contact_channel' },
        { value: 'legal', label: 'Legal / Compliance', nextQuestion: 'contact_channel' },
        { value: 'marketing', label: 'Marketing / Branding', nextQuestion: 'contact_channel' },
      ],
    },

    {
      key: 'contact_channel',
      text: 'How do you want to build corporate contacts?',
      type: 'single',
      options: [
        { value: 'linkedin', label: 'LinkedIn', nextQuestion: 'communication_skill' },
        { value: 'email', label: 'Professional Emails', nextQuestion: 'communication_skill' },
        { value: 'events', label: 'Conferences / Networking Events', nextQuestion: 'communication_skill' },
        { value: 'referrals', label: 'Referrals', nextQuestion: 'communication_skill' },
        { value: 'cold_calls', label: 'Cold Calls / Outreach', nextQuestion: 'communication_skill' },
      ],
    },

    {
      key: 'communication_skill',
      text: 'Which communication skill do you want to improve?',
      type: 'single',
      options: [
        { value: 'pitching', label: 'Pitching Yourself / Business', nextQuestion: 'tools_usage' },
        { value: 'negotiation', label: 'Negotiation Skills', nextQuestion: 'tools_usage' },
        { value: 'followup', label: 'Follow-ups & Relationship Building', nextQuestion: 'tools_usage' },
        { value: 'presentation', label: 'Presentation & Public Speaking', nextQuestion: 'tools_usage' },
      ],
    },

    {
      key: 'tools_usage',
      text: 'How do you want to manage corporate contacts?',
      type: 'single',
      options: [
        { value: 'crm', label: 'CRM Tools (Zoho, HubSpot, etc.)', nextQuestion: 'ethics_compliance' },
        { value: 'spreadsheets', label: 'Excel / Google Sheets', nextQuestion: 'ethics_compliance' },
        { value: 'manual', label: 'Manual Tracking', nextQuestion: 'ethics_compliance' },
      ],
    },

    {
      key: 'ethics_compliance',
      text: 'Do you want guidance on corporate ethics and professional conduct?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, very important', nextQuestion: 'final_goal' },
        { value: 'basic', label: 'Basic understanding', nextQuestion: 'final_goal' },
        { value: 'no', label: 'Not required', nextQuestion: 'final_goal' },
      ],
    },

    {
      key: 'final_goal',
      text: 'What is your ultimate goal with corporate contacts?',
      type: 'single',
      options: [
        { value: 'career_growth', label: 'Career Growth' },
        { value: 'business_expansion', label: 'Business Expansion' },
        { value: 'long_term_network', label: 'Strong Long-Term Network' },
        { value: 'multiple', label: 'All of the Above' },
      ],
    },
  ],
},

{
  key: 'manpower_handling',
  name: 'Manpower Handling & Savings',
  icon: 'Users',
  description: 'Effective workforce management, productivity improvement, and manpower cost optimization across industries',
  questions: [
    {
      key: 'manpower_goal',
      text: 'What is your main objective in manpower handling?',
      type: 'single',
      options: [
        { value: 'productivity', label: 'Increase Employee Productivity', nextQuestion: 'workplace_type' },
        { value: 'cost_reduction', label: 'Reduce Manpower Cost', nextQuestion: 'workplace_type' },
        { value: 'optimization', label: 'Optimize Workforce Utilization', nextQuestion: 'workplace_type' },
        { value: 'scaling', label: 'Manage Growth & Scaling Teams', nextQuestion: 'workplace_type' },
      ],
    },

    {
      key: 'workplace_type',
      text: 'What type of workplace do you want to manage manpower for?',
      type: 'single',
      options: [
        { value: 'factory', label: 'Factory / Manufacturing Unit', nextQuestion: 'manpower_size' },
        { value: 'office', label: 'Office / Corporate', nextQuestion: 'manpower_size' },
        { value: 'construction', label: 'Construction / Site Work', nextQuestion: 'manpower_size' },
        { value: 'hospital', label: 'Hospital / Healthcare', nextQuestion: 'manpower_size' },
        { value: 'service', label: 'Service Industry / Operations', nextQuestion: 'manpower_size' },
      ],
    },

    {
      key: 'manpower_size',
      text: 'How large is the workforce you are handling?',
      type: 'single',
      options: [
        { value: 'small', label: '1 – 20 Employees', nextQuestion: 'skill_level' },
        { value: 'medium', label: '21 – 100 Employees', nextQuestion: 'skill_level' },
        { value: 'large', label: '100+ Employees', nextQuestion: 'skill_level' },
      ],
    },

    {
      key: 'skill_level',
      text: 'What is the general skill level of your manpower?',
      type: 'single',
      options: [
        { value: 'unskilled', label: 'Unskilled / Helper Level', nextQuestion: 'key_challenges' },
        { value: 'semi_skilled', label: 'Semi-Skilled Workers', nextQuestion: 'key_challenges' },
        { value: 'skilled', label: 'Skilled / Technical Staff', nextQuestion: 'key_challenges' },
        { value: 'professional', label: 'Professional / Management Level', nextQuestion: 'key_challenges' },
      ],
    },

    {
      key: 'key_challenges',
      text: 'What is the biggest challenge you are facing?',
      type: 'single',
      options: [
        { value: 'absenteeism', label: 'Absenteeism / Late Coming', nextQuestion: 'work_allocation' },
        { value: 'low_productivity', label: 'Low Productivity', nextQuestion: 'work_allocation' },
        { value: 'high_cost', label: 'High Salary or Wage Cost', nextQuestion: 'work_allocation' },
        { value: 'attrition', label: 'High Employee Turnover', nextQuestion: 'work_allocation' },
        { value: 'discipline', label: 'Discipline & Behavior Issues', nextQuestion: 'work_allocation' },
        { value: 'skill_gap', label: 'Skill Gaps & Training Needs', nextQuestion: 'work_allocation' },
      ],
    },

    {
      key: 'work_allocation',
      text: 'How is work currently allocated to employees?',
      type: 'single',
      options: [
        { value: 'manual', label: 'Manual Allocation by Supervisor', nextQuestion: 'shift_management' },
        { value: 'fixed', label: 'Fixed Roles & Shifts', nextQuestion: 'shift_management' },
        { value: 'dynamic', label: 'Dynamic / Flexible Allocation', nextQuestion: 'shift_management' },
        { value: 'automated', label: 'Software / ERP Based Allocation', nextQuestion: 'shift_management' },
      ],
    },

    {
      key: 'shift_management',
      text: 'Do you use shift-based manpower management?',
      type: 'single',
      options: [
        { value: 'single', label: 'Single Shift', nextQuestion: 'cost_saving_methods' },
        { value: 'double', label: 'Double Shift', nextQuestion: 'cost_saving_methods' },
        { value: 'triple', label: 'Three Shifts / 24x7', nextQuestion: 'cost_saving_methods' },
        { value: 'flexible', label: 'Flexible / Rotational Shifts', nextQuestion: 'cost_saving_methods' },
      ],
    },

    {
      key: 'cost_saving_methods',
      text: 'Which manpower cost-saving approach do you want to focus on?',
      type: 'single',
      options: [
        { value: 'multi_skilling', label: 'Multi-Skilling Employees', nextQuestion: 'training_interest' },
        { value: 'automation', label: 'Automation / Machines', nextQuestion: 'training_interest' },
        { value: 'outsourcing', label: 'Outsourcing / Contract Staffing', nextQuestion: 'training_interest' },
        { value: 'performance_pay', label: 'Performance-Based Pay', nextQuestion: 'training_interest' },
        { value: 'lean', label: 'Lean Workforce Planning', nextQuestion: 'training_interest' },
      ],
    },

    {
      key: 'training_interest',
      text: 'Do you want to invest in training & skill development?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, Regular Training Programs', nextQuestion: 'monitoring_tools' },
        { value: 'need_based', label: 'Only Need-Based Training', nextQuestion: 'monitoring_tools' },
        { value: 'no', label: 'No Training Planned', nextQuestion: 'monitoring_tools' },
      ],
    },

    {
      key: 'monitoring_tools',
      text: 'How do you want to monitor manpower performance?',
      type: 'single',
      options: [
        { value: 'attendance', label: 'Attendance & Time Tracking', nextQuestion: 'compliance' },
        { value: 'kpi', label: 'KPIs & Productivity Metrics', nextQuestion: 'compliance' },
        { value: 'supervisor', label: 'Supervisor Reports', nextQuestion: 'compliance' },
        { value: 'software', label: 'HR / ERP Software', nextQuestion: 'compliance' },
      ],
    },

    {
      key: 'compliance',
      text: 'Do you need guidance on labor laws and compliance?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, Full Legal & Compliance Support', nextQuestion: 'final_expectation' },
        { value: 'basic', label: 'Basic Awareness Only', nextQuestion: 'final_expectation' },
        { value: 'no', label: 'No Compliance Help Needed', nextQuestion: 'final_expectation' },
      ],
    },

    {
      key: 'final_expectation',
      text: 'What is your primary expected result?',
      type: 'single',
      options: [
        { value: 'lower_cost', label: 'Reduced Labor Cost' },
        { value: 'higher_output', label: 'Higher Output & Efficiency' },
        { value: 'stability', label: 'Stable & Disciplined Workforce' },
        { value: 'growth', label: 'Scalable Workforce for Growth' },
      ],
    },
  ],
},


{
  key: 'story_novel',
  name: 'Story / Novel Writing',
  icon: 'BookOpen',
  description: 'Creative writing skills for stories, novels, and fiction writing',
  questions: [

    {
      key: 'writing_goal',
      text: 'Why do you want to write a story or novel?',
      type: 'single',
      options: [
        { value: 'passion', label: 'Personal Passion', nextQuestion: 'writing_format' },
        { value: 'career', label: 'Career as Writer', nextQuestion: 'writing_format' },
        { value: 'publish', label: 'Publish a Book', nextQuestion: 'writing_format' },
        { value: 'expression', label: 'Self Expression', nextQuestion: 'writing_format' },
      ],
    },

    {
      key: 'writing_format',
      text: 'What format do you want to write?',
      type: 'single',
      options: [
        { value: 'short_story', label: 'Short Story', nextQuestion: 'genre' },
        { value: 'novel', label: 'Novel', nextQuestion: 'genre' },
        { value: 'series', label: 'Story Series', nextQuestion: 'genre' },
        { value: 'script', label: 'Script / Screenplay', nextQuestion: 'genre' },
      ],
    },

    {
      key: 'genre',
      text: 'Which genre interests you most?',
      type: 'single',
      options: [
        { value: 'romance', label: 'Romance', nextQuestion: 'audience' },
        { value: 'thriller', label: 'Thriller / Mystery', nextQuestion: 'audience' },
        { value: 'fantasy', label: 'Fantasy', nextQuestion: 'audience' },
        { value: 'scifi', label: 'Science Fiction', nextQuestion: 'audience' },
        { value: 'horror', label: 'Horror', nextQuestion: 'audience' },
        { value: 'drama', label: 'Drama / Life Story', nextQuestion: 'audience' },
      ],
    },

    {
      key: 'audience',
      text: 'Who is your target audience?',
      type: 'single',
      options: [
        { value: 'children', label: 'Children', nextQuestion: 'language' },
        { value: 'teen', label: 'Teenagers', nextQuestion: 'language' },
        { value: 'adult', label: 'Adults', nextQuestion: 'language' },
        { value: 'all', label: 'All Age Groups', nextQuestion: 'language' },
      ],
    },

    {
      key: 'language',
      text: 'Which language will you write in?',
      type: 'single',
      options: [
        { value: 'english', label: 'English', nextQuestion: 'experience' },
        { value: 'telugu', label: 'Telugu', nextQuestion: 'experience' },
        { value: 'hindi', label: 'Hindi', nextQuestion: 'experience' },
        { value: 'mixed', label: 'Mixed Language', nextQuestion: 'experience' },
      ],
    },

    {
      key: 'experience',
      text: 'What is your writing experience level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner', nextQuestion: 'writing_style' },
        { value: 'intermediate', label: 'Intermediate', nextQuestion: 'writing_style' },
        { value: 'advanced', label: 'Advanced', nextQuestion: 'writing_style' },
      ],
    },

    {
      key: 'writing_style',
      text: 'What writing style do you prefer?',
      type: 'single',
      options: [
        { value: 'simple', label: 'Simple & Easy Language', nextQuestion: 'inspiration' },
        { value: 'descriptive', label: 'Detailed & Descriptive', nextQuestion: 'inspiration' },
        { value: 'dialogue', label: 'Dialogue Driven', nextQuestion: 'inspiration' },
        { value: 'poetic', label: 'Poetic / Artistic', nextQuestion: 'inspiration' },
      ],
    },

    {
      key: 'inspiration',
      text: 'Where do you get inspiration from?',
      type: 'single',
      options: [
        { value: 'real_life', label: 'Real Life Events', nextQuestion: 'publishing_goal' },
        { value: 'imagination', label: 'Pure Imagination', nextQuestion: 'publishing_goal' },
        { value: 'movies', label: 'Movies / Series', nextQuestion: 'publishing_goal' },
        { value: 'books', label: 'Books / Novels', nextQuestion: 'publishing_goal' },
      ],
    },

    {
      key: 'publishing_goal',
      text: 'What do you plan to do after writing?',
      type: 'single',
      options: [
        { value: 'self_publish', label: 'Self Publish Online' },
        { value: 'publisher', label: 'Approach Publisher' },
        { value: 'platforms', label: 'Post on Writing Platforms' },
        { value: 'personal', label: 'Keep it Personal' },
      ],
    },

  ],
},

{
  key: 'ladies_caring',
  name: "Lady's Caring",
  icon: 'Heart',
  description: 'Personal care, health, safety, emotional well-being, and life management for women at every stage',
  questions: [

    {
      key: 'care_focus',
      text: 'What is your main focus in ladies caring?',
      type: 'single',
      options: [
        { value: 'self_care', label: 'Self Care & Personal Well-being', nextQuestion: 'age_group' },
        { value: 'family', label: 'Family & Home Care', nextQuestion: 'age_group' },
        { value: 'health', label: 'Health & Physical Care', nextQuestion: 'age_group' },
        { value: 'emotional', label: 'Emotional & Mental Care', nextQuestion: 'age_group' },
      ],
    },

    {
      key: 'age_group',
      text: 'Which age group does this caring focus on?',
      type: 'single',
      options: [
        { value: 'teen', label: 'Teenage Girls', nextQuestion: 'daily_care' },
        { value: 'young', label: 'Young Women', nextQuestion: 'daily_care' },
        { value: 'adult', label: 'Adult Women', nextQuestion: 'daily_care' },
        { value: 'senior', label: 'Senior Women', nextQuestion: 'daily_care' },
      ],
    },

    {
      key: 'daily_care',
      text: 'Which daily care area do you want help with?',
      type: 'single',
      options: [
        { value: 'hygiene', label: 'Personal Hygiene', nextQuestion: 'health_topics' },
        { value: 'diet', label: 'Diet & Nutrition', nextQuestion: 'health_topics' },
        { value: 'fitness', label: 'Fitness & Exercise', nextQuestion: 'health_topics' },
        { value: 'sleep', label: 'Sleep & Routine', nextQuestion: 'health_topics' },
      ],
    },

    {
      key: 'health_topics',
      text: 'Which health-related area do you need guidance on?',
      type: 'single',
      options: [
        { value: 'periods', label: 'Menstrual Health', nextQuestion: 'mental_care' },
        { value: 'hormonal', label: 'Hormonal Balance', nextQuestion: 'mental_care' },
        { value: 'pregnancy', label: 'Pregnancy & Motherhood', nextQuestion: 'mental_care' },
        { value: 'general', label: 'General Health & Immunity', nextQuestion: 'mental_care' },
      ],
    },

    {
      key: 'mental_care',
      text: 'What kind of mental or emotional care do you want?',
      type: 'single',
      options: [
        { value: 'stress', label: 'Stress Management', nextQuestion: 'safety' },
        { value: 'confidence', label: 'Confidence & Self-esteem', nextQuestion: 'safety' },
        { value: 'relationships', label: 'Relationship Handling', nextQuestion: 'safety' },
        { value: 'peace', label: 'Mental Peace & Balance', nextQuestion: 'safety' },
      ],
    },

    {
      key: 'safety',
      text: 'Which safety-related guidance do you need?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Safety Awareness', nextQuestion: 'career_life' },
        { value: 'workplace', label: 'Workplace Safety', nextQuestion: 'career_life' },
        { value: 'travel', label: 'Travel Safety', nextQuestion: 'career_life' },
        { value: 'digital', label: 'Online / Digital Safety', nextQuestion: 'career_life' },
      ],
    },

    {
      key: 'career_life',
      text: 'Do you want guidance related to career or life balance?',
      type: 'single',
      options: [
        { value: 'career_growth', label: 'Career Growth', nextQuestion: 'financial_care' },
        { value: 'work_life', label: 'Work–Life Balance', nextQuestion: 'financial_care' },
        { value: 'skills', label: 'Skill Development', nextQuestion: 'financial_care' },
        { value: 'not_now', label: 'Not Required Now', nextQuestion: 'financial_care' },
      ],
    },

    {
      key: 'financial_care',
      text: 'Do you want help with financial awareness?',
      type: 'single',
      options: [
        { value: 'saving', label: 'Savings & Budgeting' },
        { value: 'independent', label: 'Financial Independence' },
        { value: 'planning', label: 'Future Planning' },
        { value: 'no', label: 'No Financial Guidance Needed' },
      ],
    },

  ],
},



{
  key: 'interior_design',
  name: 'Interior Design',
  icon: 'Home',
  description: 'Designing, planning, and improving interior spaces for homes, offices, and commercial environments',
  questions: [

    {
      key: 'design_purpose',
      text: 'What is your purpose for interior design?',
      type: 'single',
      options: [
        { value: 'new_home', label: 'New Home Interior', nextQuestion: 'space_type' },
        { value: 'renovation', label: 'Renovation / Remodeling', nextQuestion: 'space_type' },
        { value: 'office', label: 'Office / Workspace Design', nextQuestion: 'space_type' },
        { value: 'commercial', label: 'Shop / Commercial Space', nextQuestion: 'space_type' },
      ],
    },

    {
      key: 'space_type',
      text: 'Which space do you want to design?',
      type: 'single',
      options: [
        { value: 'living', label: 'Living Room', nextQuestion: 'design_style' },
        { value: 'bedroom', label: 'Bedroom', nextQuestion: 'design_style' },
        { value: 'kitchen', label: 'Kitchen', nextQuestion: 'design_style' },
        { value: 'bathroom', label: 'Bathroom', nextQuestion: 'design_style' },
        { value: 'full_home', label: 'Complete Home', nextQuestion: 'design_style' },
      ],
    },

    {
      key: 'design_style',
      text: 'Which interior design style do you prefer?',
      type: 'single',
      options: [
        { value: 'modern', label: 'Modern', nextQuestion: 'budget_range' },
        { value: 'minimal', label: 'Minimal', nextQuestion: 'budget_range' },
        { value: 'traditional', label: 'Traditional', nextQuestion: 'budget_range' },
        { value: 'luxury', label: 'Luxury', nextQuestion: 'budget_range' },
      ],
    },

    {
      key: 'budget_range',
      text: 'What is your approximate budget range?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low Budget', nextQuestion: 'material_choice' },
        { value: 'medium', label: 'Medium Budget', nextQuestion: 'material_choice' },
        { value: 'high', label: 'High Budget', nextQuestion: 'material_choice' },
        { value: 'flexible', label: 'Flexible Budget', nextQuestion: 'material_choice' },
      ],
    },

    {
      key: 'material_choice',
      text: 'What type of materials do you prefer?',
      type: 'single',
      options: [
        { value: 'wood', label: 'Wood-Based Materials', nextQuestion: 'color_theme' },
        { value: 'ply', label: 'Plywood / MDF', nextQuestion: 'color_theme' },
        { value: 'metal', label: 'Metal & Glass', nextQuestion: 'color_theme' },
        { value: 'mixed', label: 'Mixed Materials', nextQuestion: 'color_theme' },
      ],
    },

    {
      key: 'color_theme',
      text: 'Which color theme do you like?',
      type: 'single',
      options: [
        { value: 'light', label: 'Light & Neutral Colors', nextQuestion: 'lighting_plan' },
        { value: 'dark', label: 'Dark & Bold Colors', nextQuestion: 'lighting_plan' },
        { value: 'warm', label: 'Warm Tones', nextQuestion: 'lighting_plan' },
        { value: 'custom', label: 'Custom Color Theme', nextQuestion: 'lighting_plan' },
      ],
    },

    {
      key: 'lighting_plan',
      text: 'What type of lighting do you want?',
      type: 'single',
      options: [
        { value: 'natural', label: 'Maximum Natural Light', nextQuestion: 'storage_needs' },
        { value: 'ambient', label: 'Ambient & Soft Lighting', nextQuestion: 'storage_needs' },
        { value: 'focused', label: 'Focused / Task Lighting', nextQuestion: 'storage_needs' },
        { value: 'decorative', label: 'Decorative Lighting', nextQuestion: 'storage_needs' },
      ],
    },

    {
      key: 'storage_needs',
      text: 'What are your storage requirements?',
      type: 'single',
      options: [
        { value: 'basic', label: 'Basic Storage', nextQuestion: 'timeline' },
        { value: 'moderate', label: 'Moderate Storage', nextQuestion: 'timeline' },
        { value: 'maximum', label: 'Maximum Storage', nextQuestion: 'timeline' },
        { value: 'hidden', label: 'Hidden / Smart Storage', nextQuestion: 'timeline' },
      ],
    },

    {
      key: 'timeline',
      text: 'What is your expected completion timeline?',
      type: 'single',
      options: [
        { value: 'immediate', label: 'Immediate', nextQuestion: 'final_expectation' },
        { value: 'month', label: 'Within 1 Month', nextQuestion: 'final_expectation' },
        { value: 'three_months', label: '1–3 Months', nextQuestion: 'final_expectation' },
        { value: 'flexible', label: 'Flexible Timeline', nextQuestion: 'final_expectation' },
      ],
    },

    {
      key: 'final_expectation',
      text: 'What is your final expectation from interior design?',
      type: 'single',
      options: [
        { value: 'comfort', label: 'Comfort & Functionality' },
        { value: 'aesthetic', label: 'Beautiful & Stylish Look' },
        { value: 'space', label: 'Better Space Utilization' },
        { value: 'all', label: 'All of the Above' },
      ],
    },

  ],
},


{
  key: 'poetry',
  name: 'Poetry',
  icon: 'Feather',
  description: 'Writing, understanding, and expressing thoughts, emotions, and stories through poetry',
  questions: [

    {
      key: 'poetry_interest',
      text: 'Why are you interested in poetry?',
      type: 'single',
      options: [
        { value: 'expression', label: 'Self-Expression & Emotions', nextQuestion: 'poetry_type' },
        { value: 'storytelling', label: 'Storytelling Through Words', nextQuestion: 'poetry_type' },
        { value: 'art', label: 'Artistic Creativity', nextQuestion: 'poetry_type' },
        { value: 'career', label: 'Career / Publishing', nextQuestion: 'poetry_type' },
      ],
    },

    {
      key: 'poetry_type',
      text: 'What type of poetry do you like or want to write?',
      type: 'single',
      options: [
        { value: 'free_verse', label: 'Free Verse', nextQuestion: 'poetry_theme' },
        { value: 'rhyming', label: 'Rhyming Poetry', nextQuestion: 'poetry_theme' },
        { value: 'haiku', label: 'Haiku / Short Poems', nextQuestion: 'poetry_theme' },
        { value: 'narrative', label: 'Narrative Poetry', nextQuestion: 'poetry_theme' },
      ],
    },

    {
      key: 'poetry_theme',
      text: 'Which theme do you want to focus on?',
      type: 'single',
      options: [
        { value: 'love', label: 'Love & Relationships', nextQuestion: 'language_choice' },
        { value: 'nature', label: 'Nature & Life', nextQuestion: 'language_choice' },
        { value: 'pain', label: 'Pain, Struggle & Healing', nextQuestion: 'language_choice' },
        { value: 'motivation', label: 'Motivation & Hope', nextQuestion: 'language_choice' },
      ],
    },

    {
      key: 'language_choice',
      text: 'In which language do you want to write poetry?',
      type: 'single',
      options: [
        { value: 'english', label: 'English', nextQuestion: 'experience_level' },
        { value: 'telugu', label: 'Telugu', nextQuestion: 'experience_level' },
        { value: 'hindi', label: 'Hindi', nextQuestion: 'experience_level' },
        { value: 'mixed', label: 'Mixed Languages', nextQuestion: 'experience_level' },
      ],
    },

    {
      key: 'experience_level',
      text: 'What is your experience level in poetry?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner', nextQuestion: 'writing_style' },
        { value: 'intermediate', label: 'Intermediate', nextQuestion: 'writing_style' },
        { value: 'advanced', label: 'Advanced', nextQuestion: 'writing_style' },
        { value: 'exploring', label: 'Just Exploring', nextQuestion: 'writing_style' },
      ],
    },

    {
      key: 'writing_style',
      text: 'Which writing style do you prefer?',
      type: 'single',
      options: [
        { value: 'simple', label: 'Simple & Clear', nextQuestion: 'learning_goal' },
        { value: 'deep', label: 'Deep & Emotional', nextQuestion: 'learning_goal' },
        { value: 'symbolic', label: 'Symbolic & Metaphorical', nextQuestion: 'learning_goal' },
        { value: 'experimental', label: 'Experimental Style', nextQuestion: 'learning_goal' },
      ],
    },

    {
      key: 'learning_goal',
      text: 'What do you want to learn in poetry?',
      type: 'single',
      options: [
        { value: 'vocabulary', label: 'Improve Vocabulary', nextQuestion: 'sharing_platform' },
        { value: 'imagery', label: 'Imagery & Metaphors', nextQuestion: 'sharing_platform' },
        { value: 'rhythm', label: 'Rhythm & Flow', nextQuestion: 'sharing_platform' },
        { value: 'emotion', label: 'Expressing Emotions Better', nextQuestion: 'sharing_platform' },
      ],
    },

    {
      key: 'sharing_platform',
      text: 'Do you want to share your poetry?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Journal Only', nextQuestion: 'final_expectation' },
        { value: 'social', label: 'Social Media', nextQuestion: 'final_expectation' },
        { value: 'stage', label: 'Open Mic / Stage', nextQuestion: 'final_expectation' },
        { value: 'publish', label: 'Books / Online Publishing', nextQuestion: 'final_expectation' },
      ],
    },

    {
      key: 'final_expectation',
      text: 'What do you expect from poetry?',
      type: 'single',
      options: [
        { value: 'peace', label: 'Mental Peace' },
        { value: 'expression', label: 'Emotional Expression' },
        { value: 'identity', label: 'Creative Identity' },
        { value: 'all', label: 'All of the Above' },
      ],
    },

  ],
}









];

export function getDreamCategory(key: string): DreamCategory | undefined {
  return dreamCategories.find((cat) => cat.key === key);
}

export function getQuestion(
  dreamKey: string,
  questionKey: string
): Question | undefined {
  const dream = getDreamCategory(dreamKey);
  return dream?.questions.find((q) => q.key === questionKey);
}

export function getNextQuestion(
  dreamKey: string,
  currentQuestionKey: string,
  answer: string
): Question | undefined {
  const currentQuestion = getQuestion(dreamKey, currentQuestionKey);
  if (!currentQuestion) return undefined;

  let nextQuestionKey: string | undefined;

  if (currentQuestion.type === 'single' && currentQuestion.options) {
    const selectedOption = currentQuestion.options.find(
      (opt) => opt.value === answer
    );
    nextQuestionKey = selectedOption?.nextQuestion || currentQuestion.nextQuestion;
  } else {
    nextQuestionKey = currentQuestion.nextQuestion;
  }

  if (!nextQuestionKey) return undefined;

  return getQuestion(dreamKey, nextQuestionKey);
}

export function getFirstQuestion(dreamKey: string): Question | undefined {
  const dream = getDreamCategory(dreamKey);
  return dream?.questions[0];
}

export function getTotalQuestionsForPath(
  dreamKey: string,
  responses: Record<string, string>
): number {
  let count = 0;
  const dream = getDreamCategory(dreamKey);
  if (!dream) return 0;

  let currentQuestion = dream.questions[0];
  const visited = new Set<string>();

  while (currentQuestion && !visited.has(currentQuestion.key)) {
    visited.add(currentQuestion.key);
    count++;

    const answer = responses[currentQuestion.key];
    if (!answer) break;

    const next = getNextQuestion(dreamKey, currentQuestion.key, answer);
    if (!next) break;
    currentQuestion = next;
  }

  return count;
}
