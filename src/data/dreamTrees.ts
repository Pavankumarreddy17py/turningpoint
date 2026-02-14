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
      nextQuestion: 'study_hours',
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

    {
      key: 'cyber_goal',
      text: 'Which cyber security path do you prefer?',
      type: 'single',
      options: [
        { value: 'ethical_hacking', label: 'Ethical Hacking' },
        { value: 'security_analyst', label: 'Security Analyst' },
        { value: 'forensics', label: 'Digital Forensics' },
      ],
      nextQuestion: 'study_hours',
    },

    {
      key: 'ece_interest',
      text: 'Which ECE area interests you most?',
      type: 'single',
      options: [
        { value: 'embedded', label: 'Embedded Systems' },
        { value: 'vlsi', label: 'VLSI Design' },
        { value: 'telecom', label: 'Telecommunications' },
      ],
      nextQuestion: 'study_hours',
    },

    {
      key: 'mechanical_interest',
      text: 'Which mechanical domain do you prefer?',
      type: 'single',
      options: [
        { value: 'automobile', label: 'Automobile Engineering' },
        { value: 'robotics', label: 'Robotics' },
        { value: 'thermal', label: 'Thermal Engineering' },
      ],
      nextQuestion: 'study_hours',
    },

    {
      key: 'civil_interest',
      text: 'Which civil engineering field attracts you?',
      type: 'single',
      options: [
        { value: 'construction', label: 'Construction Management' },
        { value: 'structural', label: 'Structural Engineering' },
        { value: 'environmental', label: 'Environmental Engineering' },
      ],
      nextQuestion: 'study_hours',
    },

    {
      key: 'biotech_goal',
      text: 'What is your biotech career goal?',
      type: 'single',
      options: [
        { value: 'research', label: 'Biotech Research' },
        { value: 'pharma', label: 'Pharmaceutical Industry' },
        { value: 'genetics', label: 'Genetics & Genomics' },
      ],
      nextQuestion: 'study_hours',
    },

    /* ---------- POSTGRADUATE ---------- */
    {
      key: 'pg_goal',
      text: 'Why do you want to pursue postgraduate studies?',
      type: 'single',
      options: [
        { value: 'higher_salary', label: 'Higher Salary' },
        { value: 'specialization', label: 'Deep Specialization' },
        { value: 'career_shift', label: 'Career Shift' },
        { value: 'research', label: 'Research Interest' },
      ],
      nextQuestion: 'pg_field',
    },

    {
      key: 'pg_field',
      text: 'Which field for postgraduate?',
      type: 'single',
      options: [
        { value: 'mtech', label: 'M.Tech' },
        { value: 'mba', label: 'MBA' },
        { value: 'msc', label: 'M.Sc' },
        { value: 'abroad_masters', label: 'Masters Abroad' },
      ],
      nextQuestion: 'study_hours',
    },

    /* ---------- RESEARCH ---------- */
    {
      key: 'research_interest',
      text: 'Which research domain excites you?',
      type: 'single',
      options: [
        { value: 'ai_research', label: 'AI Research' },
        { value: 'space', label: 'Space & Aerospace' },
        { value: 'biotech_research', label: 'Biotechnology Research' },
        { value: 'social_science', label: 'Social Science Research' },
      ],
      nextQuestion: 'research_commitment',
    },

    {
      key: 'research_commitment',
      text: 'Are you ready for 4–6 years of deep research work?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, fully committed' },
        { value: 'maybe', label: 'Not sure yet' },
        { value: 'no', label: 'Not ready for long-term research' },
      ],
      nextQuestion: 'study_hours',
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
      nextQuestion: 'confidence_level',
    },

    {
      key: 'confidence_level',
      text: 'How confident are you about this education path?',
      type: 'single',
      options: [
        { value: 'very_confident', label: 'Very Confident' },
        { value: 'somewhat', label: 'Somewhat Confident' },
        { value: 'confused', label: 'Still Confused' },
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
        { value: 'kho_kho', label: 'Kho Kho', nextQuestion: 'kho_kho_role' },
        { value: 'gilli_danda', label: 'Gilli Danda', nextQuestion: 'gilli_skill' },
        { value: 'mallakhamb', label: 'Mallakhamb', nextQuestion: 'mallakhamb_type' },
        { value: 'polo', label: 'Polo', nextQuestion: 'polo_role' },
        { value: 'shooting', label: 'Shooting', nextQuestion: 'shooting_type' },
        { value: 'badminton', label: 'Badminton', nextQuestion: 'badminton_type' },

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

    {
      key: 'kho_kho_role',
      text: 'Your role in Kho Kho?',
      type: 'single',
      options: [
        { value: 'chaser', label: 'Chaser', nextQuestion: 'kho_kho_strength' },
        { value: 'runner', label: 'Runner', nextQuestion: 'kho_kho_strength' },
      ],
    },
    {
      key: 'kho_kho_strength',
      text: 'Your strongest ability?',
      type: 'single',
      options: [
        { value: 'speed', label: 'Speed', nextQuestion: 'competition_level' },
        { value: 'agility', label: 'Agility', nextQuestion: 'competition_level' },
      ],
    },

    {
      key: 'gilli_skill',
      text: 'Your strength in Gilli Danda?',
      type: 'single',
      options: [
        { value: 'power', label: 'Power Hitting', nextQuestion: 'competition_level' },
        { value: 'accuracy', label: 'Accuracy', nextQuestion: 'competition_level' },
      ],
    },

    {
      key: 'mallakhamb_type',
      text: 'Mallakhamb type?',
      type: 'single',
      options: [
        { value: 'rope', label: 'Rope Mallakhamb', nextQuestion: 'competition_level' },
        { value: 'pole', label: 'Pole Mallakhamb', nextQuestion: 'competition_level' },
      ],
    },

    {
      key: 'polo_role',
      text: 'Your role in Polo?',
      type: 'single',
      options: [
        { value: 'attacker', label: 'Attacker', nextQuestion: 'competition_level' },
        { value: 'defender', label: 'Defender', nextQuestion: 'competition_level' },
      ],
    },

    {
      key: 'shooting_type',
      text: 'Shooting category?',
      type: 'single',
      options: [
        { value: 'rifle', label: 'Rifle', nextQuestion: 'competition_level' },
        { value: 'pistol', label: 'Pistol', nextQuestion: 'competition_level' },
        { value: 'shotgun', label: 'Shotgun', nextQuestion: 'competition_level' },
      ],
    },

    {
  key: 'badminton_type',
  text: 'Which type of badminton do you want to play?',
  type: 'single',
  options: [
    { value: 'singles', label: 'Singles', nextQuestion: 'badminton_hand' },
    { value: 'doubles', label: 'Doubles', nextQuestion: 'badminton_hand' },
    { value: 'mixed_doubles', label: 'Mixed Doubles', nextQuestion: 'badminton_hand' },
  ],
},

{
  key: 'badminton_hand',
  text: 'Your playing hand?',
  type: 'single',
  options: [
    { value: 'right', label: 'Right-handed', nextQuestion: 'badminton_style' },
    { value: 'left', label: 'Left-handed', nextQuestion: 'badminton_style' },
  ],
},

{
  key: 'badminton_style',
  text: 'Your playing style?',
  type: 'single',
  options: [
    { value: 'attacking', label: 'Attacking (Smash-Oriented)', nextQuestion: 'badminton_strength' },
    { value: 'defensive', label: 'Defensive (Control & Rally)', nextQuestion: 'badminton_strength' },
    { value: 'balanced', label: 'Balanced', nextQuestion: 'badminton_strength' },
  ],
},

{
  key: 'badminton_strength',
  text: 'Your strongest area?',
  type: 'single',
  options: [
    { value: 'smash', label: 'Power Smash', nextQuestion: 'competition_level' },
    { value: 'net_play', label: 'Net Play', nextQuestion: 'competition_level' },
    { value: 'footwork', label: 'Footwork', nextQuestion: 'competition_level' },
    { value: 'stamina', label: 'Stamina', nextQuestion: 'competition_level' },
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

        { value: 'carrom', label: 'Carrom', nextQuestion: 'carrom_style' },
        { value: 'kalaripayattu', label: 'Kalaripayattu', nextQuestion: 'kalaripayattu_level' },
        { value: 'silambam', label: 'Silambam', nextQuestion: 'silambam_type' },
        { value: 'lawn_bowls', label: 'Lawn Bowls', nextQuestion: 'lawn_bowls_format' },
        { value: 'pocket_billiards', label: 'Pocket Billiards', nextQuestion: 'pocket_billiards_game' },
        { value: 'roller_skating', label: 'Roller Skating', nextQuestion: 'roller_skating_discipline' },
        { value: 'fencing', label: 'Fencing', nextQuestion: 'fencing_weapon' },
        { value: 'judo', label: 'Judo', nextQuestion: 'judo_weight' },
        { value: 'taekwondo', label: 'Taekwondo', nextQuestion: 'taekwondo_belt' },

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

{
      key: 'carrom_style',
      text: 'Carrom playing style?',
      type: 'single',
      options: [
        { value: 'offensive', label: 'Offensive', nextQuestion: 'competition_level' },
        { value: 'defensive', label: 'Defensive', nextQuestion: 'competition_level' },
      ],
    },

   {
      key: 'kalaripayattu_level',
      text: 'Training level?',
      type: 'single',
      options: [
        { value: 'basic', label: 'Basic', nextQuestion: 'competition_level' },
        { value: 'advanced', label: 'Advanced', nextQuestion: 'competition_level' },
      ],
    },

    {
      key: 'silambam_type',
      text: 'Silambam specialization?',
      type: 'single',
      options: [
        { value: 'stick', label: 'Single Stick', nextQuestion: 'competition_level' },
        { value: 'double', label: 'Double Stick', nextQuestion: 'competition_level' },
      ],
    },

    // =========================
    // COMMON CAREER QUESTIONS
    // =========================
    {
      key: 'competition_level',
      text: 'Highest competition level?',
      type: 'single',
      options: [
        { value: 'school', label: 'School', nextQuestion: 'practice_hours' },
        { value: 'district', label: 'District', nextQuestion: 'practice_hours' },
        { value: 'state', label: 'State', nextQuestion: 'practice_hours' },
        { value: 'national', label: 'National', nextQuestion: 'practice_hours' },
        { value: 'international', label: 'International', nextQuestion: 'practice_hours' },
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
  key: 'lawn_bowls_format',
  text: 'Which Lawn Bowls format do you prefer?',
  type: 'single',
  options: [
    { value: 'singles', label: 'Singles', nextQuestion: 'lawn_bowls_position' },
    { value: 'pairs', label: 'Pairs', nextQuestion: 'lawn_bowls_position' },
    { value: 'fours', label: 'Fours', nextQuestion: 'lawn_bowls_position' },
  ],
},
{
  key: 'lawn_bowls_position',
  text: 'Your playing role?',
  type: 'single',
  options: [
    { value: 'lead', label: 'Lead', nextQuestion: 'competition_level' },
    { value: 'skip', label: 'Skip', nextQuestion: 'competition_level' },
    { value: 'middle', label: 'Middle Player', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'pocket_billiards_game',
  text: 'Which pocket billiards game?',
  type: 'single',
  options: [
    { value: 'eight_ball', label: '8-Ball', nextQuestion: 'pocket_billiards_skill' },
    { value: 'nine_ball', label: '9-Ball', nextQuestion: 'pocket_billiards_skill' },
    { value: 'ten_ball', label: '10-Ball', nextQuestion: 'pocket_billiards_skill' },
  ],
},
{
  key: 'pocket_billiards_skill',
  text: 'Your strongest skill?',
  type: 'single',
  options: [
    { value: 'potting', label: 'Potting Accuracy', nextQuestion: 'competition_level' },
    { value: 'cue_control', label: 'Cue Ball Control', nextQuestion: 'competition_level' },
    { value: 'strategy', label: 'Strategic Play', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'roller_skating_discipline',
  text: 'Which skating discipline?',
  type: 'single',
  options: [
    { value: 'speed', label: 'Speed Skating', nextQuestion: 'roller_skating_surface' },
    { value: 'artistic', label: 'Artistic Skating', nextQuestion: 'roller_skating_surface' },
    { value: 'rink_hockey', label: 'Rink Hockey', nextQuestion: 'roller_skating_surface' },
  ],
},
{
  key: 'roller_skating_surface',
  text: 'Preferred skating surface?',
  type: 'single',
  options: [
    { value: 'indoor', label: 'Indoor Rink', nextQuestion: 'competition_level' },
    { value: 'outdoor', label: 'Outdoor Track', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'fencing_weapon',
  text: 'Which fencing weapon?',
  type: 'single',
  options: [
    { value: 'foil', label: 'Foil', nextQuestion: 'fencing_style' },
    { value: 'epee', label: 'Epee', nextQuestion: 'fencing_style' },
    { value: 'sabre', label: 'Sabre', nextQuestion: 'fencing_style' },
  ],
},
{
  key: 'fencing_style',
  text: 'Your fencing style?',
  type: 'single',
  options: [
    { value: 'offensive', label: 'Offensive', nextQuestion: 'competition_level' },
    { value: 'defensive', label: 'Defensive', nextQuestion: 'competition_level' },
    { value: 'counter_attack', label: 'Counter-Attack', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'judo_weight',
  text: 'Your weight category?',
  type: 'single',
  options: [
    { value: 'lightweight', label: 'Lightweight', nextQuestion: 'judo_style' },
    { value: 'middleweight', label: 'Middleweight', nextQuestion: 'judo_style' },
    { value: 'heavyweight', label: 'Heavyweight', nextQuestion: 'judo_style' },
  ],
},
{
  key: 'judo_style',
  text: 'Your strongest area?',
  type: 'single',
  options: [
    { value: 'throwing', label: 'Throwing Techniques', nextQuestion: 'competition_level' },
    { value: 'ground', label: 'Ground Fighting', nextQuestion: 'competition_level' },
  ],
},

{
  key: 'taekwondo_belt',
  text: 'Your current belt level?',
  type: 'single',
  options: [
    { value: 'white', label: 'White Belt', nextQuestion: 'taekwondo_focus' },
    { value: 'blue', label: 'Blue Belt', nextQuestion: 'taekwondo_focus' },
    { value: 'black', label: 'Black Belt', nextQuestion: 'taekwondo_focus' },
  ],
},
{
  key: 'taekwondo_focus',
  text: 'What is your main strength?',
  type: 'single',
  options: [
    { value: 'kicking', label: 'Kicking Power', nextQuestion: 'competition_level' },
    { value: 'speed', label: 'Speed & Agility', nextQuestion: 'competition_level' },
    { value: 'sparring', label: 'Sparring Skills', nextQuestion: 'competition_level' },
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

        { value: 'dentist', label: 'Dentistry (BDS/MDS)', nextQuestion: 'dentistry_specialization' },
        { value: 'psychology', label: 'Psychology / Mental Health', nextQuestion: 'psychology_type' },
        { value: 'medical_lab', label: 'Medical Lab Technology', nextQuestion: 'mlt_role' },
        { value: 'public_health', label: 'Public Health', nextQuestion: 'public_health_focus' },
        { value: 'radiology', label: 'Radiology / Imaging', nextQuestion: 'radiology_type' },
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

     {
      key: 'dentistry_specialization',
      text: 'Preferred dentistry specialization?',
      type: 'single',
      options: [
        { value: 'general_dentist', label: 'General Dentist', nextQuestion: 'dentistry_environment' },
        { value: 'orthodontics', label: 'Orthodontics', nextQuestion: 'dentistry_environment' },
        { value: 'oral_surgery', label: 'Oral Surgery', nextQuestion: 'dentistry_environment' },
      ],
    },
    {
      key: 'dentistry_environment',
      text: 'Where do you want to practice?',
      type: 'single',
      options: [
        { value: 'private_clinic', label: 'Private Clinic', nextQuestion: 'study_commitment' },
        { value: 'hospital', label: 'Hospital', nextQuestion: 'study_commitment' },
        { value: 'abroad', label: 'Abroad Practice', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 🔥 PSYCHOLOGY
    // =========================
    {
      key: 'psychology_type',
      text: 'Which psychology field interests you?',
      type: 'single',
      options: [
        { value: 'clinical', label: 'Clinical Psychologist', nextQuestion: 'psychology_environment' },
        { value: 'counseling', label: 'Counseling Psychologist', nextQuestion: 'psychology_environment' },
        { value: 'organizational', label: 'Organizational Psychology', nextQuestion: 'psychology_environment' },
      ],
    },
    {
      key: 'psychology_environment',
      text: 'Preferred work environment?',
      type: 'single',
      options: [
        { value: 'hospital', label: 'Hospital', nextQuestion: 'study_commitment' },
        { value: 'private_practice', label: 'Private Practice', nextQuestion: 'study_commitment' },
        { value: 'corporate', label: 'Corporate Sector', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 🔥 MEDICAL LAB TECHNOLOGY
    // =========================
    {
      key: 'mlt_role',
      text: 'Which lab field attracts you?',
      type: 'single',
      options: [
        { value: 'pathology', label: 'Pathology Lab', nextQuestion: 'study_commitment' },
        { value: 'microbiology', label: 'Microbiology Lab', nextQuestion: 'study_commitment' },
        { value: 'biochemistry', label: 'Biochemistry Lab', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 🔥 PUBLIC HEALTH
    // =========================
    {
      key: 'public_health_focus',
      text: 'Public health focus area?',
      type: 'single',
      options: [
        { value: 'epidemiology', label: 'Epidemiology', nextQuestion: 'study_commitment' },
        { value: 'health_policy', label: 'Health Policy', nextQuestion: 'study_commitment' },
        { value: 'community_health', label: 'Community Health', nextQuestion: 'study_commitment' },
      ],
    },

    // =========================
    // 🔥 RADIOLOGY
    // =========================
    {
      key: 'radiology_type',
      text: 'Radiology specialization?',
      type: 'single',
      options: [
        { value: 'xray', label: 'X-Ray Technician', nextQuestion: 'study_commitment' },
        { value: 'mri', label: 'MRI Specialist', nextQuestion: 'study_commitment' },
        { value: 'ct_scan', label: 'CT Scan Specialist', nextQuestion: 'study_commitment' },
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

        { value: 'competition', label: 'Competitive Yoga', nextQuestion: 'competition_category' },
        { value: 'research', label: 'Yoga Research & Philosophy', nextQuestion: 'research_area' },
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
   {
      key: 'competition_category',
      text: 'Which competitive yoga category?',
      type: 'single',
      options: [
        { value: 'asana', label: 'Asana Performance', nextQuestion: 'competition_goal' },
        { value: 'artistic', label: 'Artistic Yoga', nextQuestion: 'competition_goal' },
        { value: 'rhythmic', label: 'Rhythmic Yoga', nextQuestion: 'competition_goal' },
      ],
    },
    {
      key: 'competition_goal',
      text: 'Your competitive goal?',
      type: 'single',
      options: [
        { value: 'state', label: 'State Level', nextQuestion: 'practice_level' },
        { value: 'national', label: 'National Level', nextQuestion: 'practice_level' },
        { value: 'international', label: 'International Level', nextQuestion: 'practice_level' },
      ],
    },

    // =========================
    // 🔥 YOGA RESEARCH
    // =========================
    {
      key: 'research_area',
      text: 'Which research area interests you?',
      type: 'single',
      options: [
        { value: 'ancient_texts', label: 'Ancient Texts & Philosophy', nextQuestion: 'research_environment' },
        { value: 'scientific', label: 'Scientific Yoga Research', nextQuestion: 'research_environment' },
        { value: 'therapy_research', label: 'Yoga Therapy Research', nextQuestion: 'research_environment' },
      ],
    },
    {
      key: 'research_environment',
      text: 'Where would you like to work?',
      type: 'single',
      options: [
        { value: 'ashram', label: 'Ashram / Spiritual Center', nextQuestion: 'practice_level' },
        { value: 'university', label: 'University / Institution', nextQuestion: 'practice_level' },
        { value: 'research_center', label: 'Yoga Research Center', nextQuestion: 'practice_level' },
      ],
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

        { value: 'competition', label: 'Competitive Yoga', nextQuestion: 'competition_category' },
        { value: 'research', label: 'Yoga Research & Philosophy', nextQuestion: 'research_area' },

        { value: 'critical_thinking', label: 'Critical Thinking', nextQuestion: 'critical_focus' },
        { value: 'problem_solving', label: 'Problem Solving', nextQuestion: 'problem_focus' },
        { value: 'decision_making', label: 'Decision Making', nextQuestion: 'decision_style' },
        { value: 'creativity', label: 'Creativity & Innovation', nextQuestion: 'creativity_type' },
        { value: 'digital_literacy', label: 'Digital Literacy', nextQuestion: 'digital_focus' },
        { value: 'confidence', label: 'Confidence Building', nextQuestion: 'confidence_area' },
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
 {
      key: 'critical_focus',
      text: 'What aspect of critical thinking?',
      type: 'single',
      options: [
        { value: 'analysis', label: 'Analytical Thinking', nextQuestion: 'critical_application' },
        { value: 'logic', label: 'Logical Reasoning', nextQuestion: 'critical_application' },
        { value: 'evaluation', label: 'Evaluation Skills', nextQuestion: 'critical_application' },
      ],
    },
    {
      key: 'critical_application',
      text: 'Where will you apply this skill?',
      type: 'single',
      options: [
        { value: 'academics', label: 'Academics', nextQuestion: 'goal_type' },
        { value: 'career', label: 'Career Growth', nextQuestion: 'goal_type' },
        { value: 'daily_life', label: 'Daily Life Decisions', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 🔥 PROBLEM SOLVING
    // =========================
    {
      key: 'problem_focus',
      text: 'Which problem-solving area?',
      type: 'single',
      options: [
        { value: 'academic', label: 'Academic Problems', nextQuestion: 'problem_method' },
        { value: 'business', label: 'Business Problems', nextQuestion: 'problem_method' },
        { value: 'life', label: 'Life Challenges', nextQuestion: 'problem_method' },
      ],
    },
    {
      key: 'problem_method',
      text: 'Preferred problem-solving approach?',
      type: 'single',
      options: [
        { value: 'step_by_step', label: 'Step-by-Step Analysis', nextQuestion: 'goal_type' },
        { value: 'creative', label: 'Creative Thinking', nextQuestion: 'goal_type' },
        { value: 'team_based', label: 'Team-Based Solutions', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 🔥 DECISION MAKING
    // =========================
    {
      key: 'decision_style',
      text: 'Your decision-making style?',
      type: 'single',
      options: [
        { value: 'data_driven', label: 'Data-Driven', nextQuestion: 'decision_pressure' },
        { value: 'intuitive', label: 'Intuitive', nextQuestion: 'decision_pressure' },
        { value: 'collaborative', label: 'Collaborative', nextQuestion: 'decision_pressure' },
      ],
    },
    {
      key: 'decision_pressure',
      text: 'How do you handle pressure while making decisions?',
      type: 'single',
      options: [
        { value: 'calm', label: 'Stay Calm', nextQuestion: 'goal_type' },
        { value: 'rush', label: 'Decide Quickly', nextQuestion: 'goal_type' },
        { value: 'delay', label: 'Delay Until Clear', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 🔥 CREATIVITY
    // =========================
    {
      key: 'creativity_type',
      text: 'What type of creativity?',
      type: 'single',
      options: [
        { value: 'artistic', label: 'Artistic Creativity', nextQuestion: 'creativity_platform' },
        { value: 'innovation', label: 'Innovation & Ideas', nextQuestion: 'creativity_platform' },
        { value: 'design', label: 'Design Thinking', nextQuestion: 'creativity_platform' },
      ],
    },
    {
      key: 'creativity_platform',
      text: 'Where will you express creativity?',
      type: 'single',
      options: [
        { value: 'content', label: 'Content Creation', nextQuestion: 'goal_type' },
        { value: 'business', label: 'Business / Startup', nextQuestion: 'goal_type' },
        { value: 'personal', label: 'Personal Projects', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 🔥 DIGITAL LITERACY
    // =========================
    {
      key: 'digital_focus',
      text: 'Which digital skill?',
      type: 'single',
      options: [
        { value: 'basic_computer', label: 'Basic Computer Skills', nextQuestion: 'digital_level' },
        { value: 'online_safety', label: 'Online Safety & Security', nextQuestion: 'digital_level' },
        { value: 'social_media', label: 'Social Media Skills', nextQuestion: 'digital_level' },
      ],
    },
    {
      key: 'digital_level',
      text: 'Your current digital level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner', nextQuestion: 'goal_type' },
        { value: 'intermediate', label: 'Intermediate', nextQuestion: 'goal_type' },
        { value: 'advanced', label: 'Advanced', nextQuestion: 'goal_type' },
      ],
    },

    // =========================
    // 🔥 CONFIDENCE BUILDING
    // =========================
    {
      key: 'confidence_area',
      text: 'Which confidence area?',
      type: 'single',
      options: [
        { value: 'stage', label: 'Stage Confidence', nextQuestion: 'confidence_block' },
        { value: 'social', label: 'Social Confidence', nextQuestion: 'confidence_block' },
        { value: 'career', label: 'Career Confidence', nextQuestion: 'confidence_block' },
      ],
    },
    {
      key: 'confidence_block',
      text: 'What holds you back the most?',
      type: 'single',
      options: [
        { value: 'fear', label: 'Fear of Failure', nextQuestion: 'goal_type' },
        { value: 'criticism', label: 'Fear of Criticism', nextQuestion: 'goal_type' },
        { value: 'self_doubt', label: 'Self-Doubt', nextQuestion: 'goal_type' },
      ],
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

        
        { value: 'broker', label: 'Insurance Broker', nextQuestion: 'broker_client_type' },
        { value: 'risk_manager', label: 'Risk Manager', nextQuestion: 'risk_focus' },
        { value: 'insurance_marketing', label: 'Insurance Marketing', nextQuestion: 'marketing_channel' },
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
        { value: 'motor', label: 'Motor Insurance', nextQuestion: 'sales_experience' },      // 🔥 added
        { value: 'general', label: 'General Insurance', nextQuestion: 'sales_experience' }, 
        { value: 'both', label: 'Both Life & Health', nextQuestion: 'sales_experience' },
      ],
    },

    {
      key: 'broker_client_type',
      text: 'Which clients do you want to serve as a broker?',
      type: 'single',
      options: [
        { value: 'retail', label: 'Retail Customers', nextQuestion: 'broker_specialization' },
        { value: 'corporate', label: 'Corporate Clients', nextQuestion: 'broker_specialization' },
      ],
    },
    {
      key: 'broker_specialization',
      text: 'Broker specialization?',
      type: 'single',
      options: [
        { value: 'life', label: 'Life Insurance', nextQuestion: 'income_goal' },
        { value: 'health', label: 'Health Insurance', nextQuestion: 'income_goal' },
        { value: 'general', label: 'General Insurance', nextQuestion: 'income_goal' },
      ],
    },

    // =========================
    // 🔥 RISK MANAGER
    // =========================
    {
      key: 'risk_focus',
      text: 'Risk management focus area?',
      type: 'single',
      options: [
        { value: 'corporate', label: 'Corporate Risk', nextQuestion: 'risk_environment' },
        { value: 'insurance', label: 'Insurance Risk Analysis', nextQuestion: 'risk_environment' },
        { value: 'financial', label: 'Financial Risk', nextQuestion: 'risk_environment' },
      ],
    },
    {
      key: 'risk_environment',
      text: 'Preferred work environment?',
      type: 'single',
      options: [
        { value: 'mnc', label: 'MNC / Large Company', nextQuestion: 'time_commitment' },
        { value: 'insurance_company', label: 'Insurance Company', nextQuestion: 'time_commitment' },
        { value: 'consulting', label: 'Risk Consulting Firm', nextQuestion: 'time_commitment' },
      ],
    },

    // =========================
    // 🔥 INSURANCE MARKETING
    // =========================
    {
      key: 'marketing_channel',
      text: 'Preferred marketing channel?',
      type: 'single',
      options: [
        { value: 'digital', label: 'Digital Marketing', nextQuestion: 'marketing_target' },
        { value: 'field', label: 'Field Marketing', nextQuestion: 'marketing_target' },
        { value: 'corporate', label: 'Corporate Tie-Ups', nextQuestion: 'marketing_target' },
      ],
    },
    {
      key: 'marketing_target',
      text: 'Target audience?',
      type: 'single',
      options: [
        { value: 'young', label: 'Young Professionals', nextQuestion: 'income_goal' },
        { value: 'families', label: 'Families', nextQuestion: 'income_goal' },
        { value: 'business', label: 'Business Owners', nextQuestion: 'income_goal' },
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
        { value: 'motor_claims', label: 'Motor Claims', nextQuestion: 'work_style' }, 
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
        { value: 'railway', label: 'Railway Jobs (RRB)', nextQuestion: 'railway_role' },
        { value: 'police', label: 'Police / Paramilitary', nextQuestion: 'police_role' },
        { value: 'judiciary', label: 'Judiciary / Law', nextQuestion: 'law_background' },
        { value: 'engineering_services', label: 'Engineering Services (IES)', nextQuestion: 'technical_background' },
      
        // 🔥 NEW FULL PUBLIC SECTOR CATEGORIES
        { value: 'paramilitary', label: 'Paramilitary Forces (CRPF / BSF / CISF)', nextQuestion: 'physical_fitness' },
        { value: 'forest', label: 'Forest Services (IFS / Forest Guard)', nextQuestion: 'exam_prep' },
        { value: 'postal', label: 'Postal Department', nextQuestion: 'exam_prep' },
        { value: 'income_tax', label: 'Income Tax / GST / Customs', nextQuestion: 'exam_prep' },
        { value: 'railway_protection', label: 'Railway Protection Force (RPF)', nextQuestion: 'physical_fitness' },
        { value: 'public_health', label: 'Government Health Department', nextQuestion: 'education_level' },
        { value: 'municipal', label: 'Municipal / Local Body Jobs', nextQuestion: 'education_level' },
        { value: 'election', label: 'Election Commission Jobs', nextQuestion: 'exam_prep' },
        { value: 'intelligence', label: 'Intelligence Bureau / RAW', nextQuestion: 'exam_prep' },
      ],
    },

{
  key: 'police_role',
  text: 'Which police role?',
  type: 'single',
  options: [
    { value: 'constable', label: 'Constable', nextQuestion: 'physical_fitness' },
    { value: 'si', label: 'Sub Inspector (SI)', nextQuestion: 'physical_fitness' },
    { value: 'ips', label: 'IPS Officer (UPSC)', nextQuestion: 'exam_prep' },
    { value: 'state_psc', label: 'State Police (PSC)', nextQuestion: 'exam_prep' },
  ],
},

{
  key: 'law_background',
  text: 'Do you have LLB qualification?',
  type: 'single',
  options: [
    { value: 'yes', label: 'Yes', nextQuestion: 'judiciary_role' },
    { value: 'no', label: 'No', nextQuestion: 'education_level' },
  ],
},
{
  key: 'judiciary_role',
  text: 'Which judiciary role?',
  type: 'single',
  options: [
    { value: 'judge', label: 'Civil Judge / Magistrate', nextQuestion: 'exam_prep' },
    { value: 'public_prosecutor', label: 'Public Prosecutor', nextQuestion: 'exam_prep' },
    { value: 'legal_advisor', label: 'Government Legal Advisor', nextQuestion: 'exam_prep' },
  ],
},

{
  key: 'engineering_branch',
  text: 'Which engineering branch?',
  type: 'single',
  options: [
    { value: 'civil', label: 'Civil Engineering', nextQuestion: 'exam_prep' },
    { value: 'mechanical', label: 'Mechanical Engineering', nextQuestion: 'exam_prep' },
    { value: 'electrical', label: 'Electrical Engineering', nextQuestion: 'exam_prep' },
    { value: 'electronics', label: 'Electronics Engineering', nextQuestion: 'exam_prep' },
  ],
},

{
  key: 'paramilitary_force',
  text: 'Which paramilitary force?',
  type: 'single',
  options: [
    { value: 'crpf', label: 'CRPF', nextQuestion: 'physical_fitness' },
    { value: 'bsf', label: 'BSF', nextQuestion: 'physical_fitness' },
    { value: 'cisf', label: 'CISF', nextQuestion: 'physical_fitness' },
    { value: 'itbp', label: 'ITBP', nextQuestion: 'physical_fitness' },
  ],
},

{
  key: 'forest_role',
  text: 'Which forest role?',
  type: 'single',
  options: [
    { value: 'ifs', label: 'Indian Forest Service (IFS)', nextQuestion: 'exam_prep' },
    { value: 'forest_guard', label: 'Forest Guard', nextQuestion: 'physical_fitness' },
    { value: 'range_officer', label: 'Range Officer', nextQuestion: 'exam_prep' },
  ],
},

{
  key: 'postal_role',
  text: 'Which postal role?',
  type: 'single',
  options: [
    { value: 'postman', label: 'Postman / Mail Guard', nextQuestion: 'exam_prep' },
    { value: 'gds', label: 'Gramin Dak Sevak (GDS)', nextQuestion: 'education_level' },
    { value: 'postal_assistant', label: 'Postal Assistant', nextQuestion: 'exam_prep' },
  ],
},

{
  key: 'tax_role',
  text: 'Which tax department role?',
  type: 'single',
  options: [
    { value: 'inspector', label: 'Income Tax Inspector', nextQuestion: 'exam_prep' },
    { value: 'gst_officer', label: 'GST Officer', nextQuestion: 'exam_prep' },
    { value: 'customs', label: 'Customs Officer', nextQuestion: 'exam_prep' },
  ],
},

{
  key: 'rpf_role',
  text: 'Which RPF role?',
  type: 'single',
  options: [
    { value: 'rpf_constable', label: 'RPF Constable', nextQuestion: 'physical_fitness' },
    { value: 'rpf_si', label: 'RPF Sub Inspector', nextQuestion: 'physical_fitness' },
  ],
},

{
  key: 'public_health_role',
  text: 'Which public health role?',
  type: 'single',
  options: [
    { value: 'health_inspector', label: 'Health Inspector', nextQuestion: 'education_level' },
    { value: 'lab_technician', label: 'Government Lab Technician', nextQuestion: 'education_level' },
    { value: 'health_officer', label: 'Health Officer', nextQuestion: 'exam_prep' },
  ],
},

{
  key: 'municipal_role',
  text: 'Which municipal role?',
  type: 'single',
  options: [
    { value: 'junior_assistant', label: 'Junior Assistant', nextQuestion: 'exam_prep' },
    { value: 'sanitary_inspector', label: 'Sanitary Inspector', nextQuestion: 'education_level' },
    { value: 'municipal_engineer', label: 'Municipal Engineer', nextQuestion: 'technical_background' },
  ],
},

{
  key: 'election_role',
  text: 'Election Commission role?',
  type: 'single',
  options: [
    { value: 'election_officer', label: 'Election Officer', nextQuestion: 'exam_prep' },
    { value: 'data_entry', label: 'Data Entry / Clerk', nextQuestion: 'exam_prep' },
  ],
},

{
  key: 'intelligence_role',
  text: 'Which intelligence role?',
  type: 'single',
  options: [
    { value: 'ib_acio', label: 'IB ACIO', nextQuestion: 'exam_prep' },
    { value: 'raw_analyst', label: 'RAW Analyst', nextQuestion: 'exam_prep' },
    { value: 'intelligence_officer', label: 'Intelligence Officer', nextQuestion: 'exam_prep' },
  ],
},


    


{
  key: 'railway_role',
  text: 'Which railway category?',
  type: 'single',
  options: [
    { value: 'technical', label: 'Technical (JE / SSE)', nextQuestion: 'technical_background' },
    { value: 'ntpc', label: 'NTPC (Clerk / Station Master)', nextQuestion: 'exam_prep' },
    { value: 'group_d', label: 'Group D', nextQuestion: 'exam_prep' },
    { value: 'alp', label: 'Assistant Loco Pilot (ALP)', nextQuestion: 'technical_background' },
  ],
},


    {
      key: 'law_background',
      text: 'Do you have a law background (LLB)?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes', nextQuestion: 'exam_prep' },
        { value: 'no', label: 'No', nextQuestion: 'education_level' },
      ],
    },

    {
      key: 'gov_service',
      text: 'Which service are you aiming for?',
      type: 'single',
      options: [
        { value: 'ias', label: 'IAS / IPS / IFS', nextQuestion: 'exam_prep' },
        { value: 'ssc', label: 'SSC / CGL / CHSL', nextQuestion: 'exam_prep' },
        { value: 'clerk', label: 'Clerical Jobs', nextQuestion: 'exam_prep' },
        { value: 'audit', label: 'Audit & Accounts (CAG)', nextQuestion: 'exam_prep' },
        { value: 'assistant_section', label: 'Assistant Section Officer', nextQuestion: 'exam_prep' },
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
    { value: 'rbi_grade_b', label: 'RBI Grade B', nextQuestion: 'exam_prep' },
    { value: 'nabard', label: 'NABARD Officer', nextQuestion: 'exam_prep' },
  ],
},


    {
    key: 'defense_role',
    text: 'Which defense role interests you?',
    type: 'single',
    options: [
      { value: 'officer', label: 'Officer (NDA / CDS)', nextQuestion: 'physical_fitness' },
      { value: 'soldier', label: 'Soldier / Tradesman', nextQuestion: 'physical_fitness' },
      { value: 'technical_entry', label: 'Technical Entry', nextQuestion: 'technical_background' },
    ],
    },


{
  key: 'teaching_level',
  text: 'Which teaching level?',
  type: 'single',
  options: [
    { value: 'school', label: 'School Teacher (TET)', nextQuestion: 'education_level' },
    { value: 'college', label: 'College / Lecturer (NET)', nextQuestion: 'education_level' },
    { value: 'professor', label: 'Professor (PhD Required)', nextQuestion: 'education_level' },
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

        { value: 'real_estate', label: 'Real Estate', nextQuestion: 'real_estate_role' },
        { value: 'hospitality', label: 'Hospitality / Hotel Management', nextQuestion: 'hospitality_role' },
        { value: 'aviation', label: 'Aviation', nextQuestion: 'aviation_role' },
        { value: 'startup', label: 'Startup / Entrepreneurship Jobs', nextQuestion: 'startup_role' },
        { value: 'retail', label: 'Retail Industry', nextQuestion: 'retail_role' },
      ],
    },

     {
      key: 'real_estate_role',
      text: 'Real estate role?',
      type: 'single',
      options: [
        { value: 'agent', label: 'Property Agent', nextQuestion: 'work_style' },
        { value: 'marketing', label: 'Real Estate Marketing', nextQuestion: 'work_style' },
        { value: 'management', label: 'Property Management', nextQuestion: 'education_level' },
      ],
    },

    {
      key: 'hospitality_role',
      text: 'Hospitality role?',
      type: 'single',
      options: [
        { value: 'hotel_management', label: 'Hotel Management', nextQuestion: 'education_level' },
        { value: 'chef', label: 'Chef / Culinary', nextQuestion: 'education_level' },
        { value: 'front_office', label: 'Front Office', nextQuestion: 'work_style' },
      ],
    },

    {
      key: 'aviation_role',
      text: 'Aviation role?',
      type: 'single',
      options: [
        { value: 'pilot', label: 'Pilot', nextQuestion: 'education_level' },
        { value: 'cabin_crew', label: 'Cabin Crew', nextQuestion: 'physical_fitness' },
        { value: 'ground_staff', label: 'Ground Staff', nextQuestion: 'work_style' },
      ],
    },

    {
      key: 'startup_role',
      text: 'Startup role?',
      type: 'single',
      options: [
        { value: 'product', label: 'Product Management', nextQuestion: 'technical_skills' },
        { value: 'operations', label: 'Operations', nextQuestion: 'work_style' },
        { value: 'growth', label: 'Growth / Marketing', nextQuestion: 'technical_skills' },
      ],
    },

    {
      key: 'retail_role',
      text: 'Retail industry role?',
      type: 'single',
      options: [
        { value: 'store_manager', label: 'Store Manager', nextQuestion: 'work_style' },
        { value: 'sales_exec', label: 'Sales Executive', nextQuestion: 'work_style' },
        { value: 'inventory', label: 'Inventory Manager', nextQuestion: 'education_level' },
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
        { value: 'recruitment', label: 'Recruitment / Talent Acquisition', nextQuestion: 'recruitment_focus' },
        { value: 'training', label: 'Training & Development (L&D)', nextQuestion: 'training_focus' },
        { value: 'compensation', label: 'Compensation & Benefits', nextQuestion: 'compensation_focus' },
        { value: 'relations', label: 'Employee Relations', nextQuestion: 'relations_focus' },
        { value: 'generalist', label: 'HR Generalist', nextQuestion: 'hr_work_environment' },

        { value: 'hr_analytics', label: 'HR Analytics', nextQuestion: 'analytics_tools' },
        { value: 'hr_operations', label: 'HR Operations', nextQuestion: 'operations_focus' },
        { value: 'talent_management', label: 'Talent Management', nextQuestion: 'talent_focus' },
      ],
    },

     {
      key: 'recruitment_focus',
      text: 'Which recruitment area interests you?',
      type: 'single',
      options: [
        { value: 'it_hiring', label: 'IT Hiring', nextQuestion: 'hr_work_environment' },
        { value: 'non_it', label: 'Non-IT Hiring', nextQuestion: 'hr_work_environment' },
        { value: 'executive', label: 'Executive / Leadership Hiring', nextQuestion: 'hr_work_environment' },
      ],
    },

      {
      key: 'training_focus',
      text: 'Training focus area?',
      type: 'single',
      options: [
        { value: 'technical', label: 'Technical Training', nextQuestion: 'hr_work_environment' },
        { value: 'soft_skills', label: 'Soft Skills Training', nextQuestion: 'hr_work_environment' },
        { value: 'leadership_dev', label: 'Leadership Development', nextQuestion: 'hr_work_environment' },
      ],
    },

      {
      key: 'compensation_focus',
      text: 'Compensation focus?',
      type: 'single',
      options: [
        { value: 'payroll', label: 'Payroll Management', nextQuestion: 'hr_work_environment' },
        { value: 'benefits', label: 'Benefits & Insurance', nextQuestion: 'hr_work_environment' },
        { value: 'salary_structure', label: 'Salary Structuring', nextQuestion: 'hr_work_environment' },
      ],
    },

    {
      key: 'relations_focus',
      text: 'Employee relations focus?',
      type: 'single',
      options: [
        { value: 'conflict', label: 'Conflict Resolution', nextQuestion: 'hr_work_environment' },
        { value: 'engagement', label: 'Employee Engagement', nextQuestion: 'hr_work_environment' },
        { value: 'compliance', label: 'Labor Law Compliance', nextQuestion: 'hr_work_environment' },
      ],
    },

      {
      key: 'analytics_tools',
      text: 'Which HR analytics tools interest you?',
      type: 'single',
      options: [
        { value: 'excel', label: 'Advanced Excel', nextQuestion: 'hr_work_environment' },
        { value: 'powerbi', label: 'Power BI / Tableau', nextQuestion: 'hr_work_environment' },
        { value: 'sap', label: 'SAP HR / Workday', nextQuestion: 'hr_work_environment' },
      ],
    },

    {
      key: 'operations_focus',
      text: 'HR operations focus?',
      type: 'single',
      options: [
        { value: 'attendance', label: 'Attendance & Leave Management', nextQuestion: 'hr_work_environment' },
        { value: 'documentation', label: 'Employee Documentation', nextQuestion: 'hr_work_environment' },
        { value: 'policy', label: 'Policy Implementation', nextQuestion: 'hr_work_environment' },
      ],
    },

     {
      key: 'talent_focus',
      text: 'Talent management focus?',
      type: 'single',
      options: [
        { value: 'performance', label: 'Performance Management', nextQuestion: 'hr_work_environment' },
        { value: 'succession', label: 'Succession Planning', nextQuestion: 'hr_work_environment' },
        { value: 'career_pathing', label: 'Career Development Planning', nextQuestion: 'hr_work_environment' },
      ],
    },


    // =========================
    {
      key: 'hr_work_environment',
      text: 'Which work environment do you prefer?',
      type: 'single',
      options: [
        { value: 'corporate', label: 'Corporate / MNC', nextQuestion: 'industry_preference' },
        { value: 'startup', label: 'Startup / Growing Company', nextQuestion: 'industry_preference' },
        { value: 'consulting', label: 'HR Consulting Firm', nextQuestion: 'industry_preference' },
      ],
    },

    // 🔥 NEW INDUSTRY PREFERENCE
    {
      key: 'industry_preference',
      text: 'Preferred industry?',
      type: 'single',
      options: [
        { value: 'it', label: 'IT / Software', nextQuestion: 'hr_experience' },
        { value: 'manufacturing', label: 'Manufacturing', nextQuestion: 'hr_experience' },
        { value: 'healthcare', label: 'Healthcare', nextQuestion: 'hr_experience' },
        { value: 'banking', label: 'Banking & Finance', nextQuestion: 'hr_experience' },
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
        { value: 'people', label: 'People communication & empathy', nextQuestion: 'hr_career_goal' },
        { value: 'policy', label: 'Policies, compliance & structure', nextQuestion: 'hr_career_goal' },
        { value: 'analysis', label: 'HR analytics & data', nextQuestion: 'hr_career_goal' },
      ],
    },

    // 🔥 NEW CAREER GOAL
    {
      key: 'hr_career_goal',
      text: 'Your long-term HR goal?',
      type: 'single',
      options: [
        { value: 'hr_manager', label: 'HR Manager', nextQuestion: 'hr_salary_expectation' },
        { value: 'hr_director', label: 'HR Director', nextQuestion: 'hr_salary_expectation' },
        { value: 'hrbp', label: 'HR Business Partner (HRBP)', nextQuestion: 'hr_salary_expectation' },
        { value: 'consultant', label: 'Independent HR Consultant', nextQuestion: 'hr_salary_expectation' },
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
        { value: 'management', label: 'Management Consulting', nextQuestion: 'management_focus' },
        { value: 'financial', label: 'Financial Advisory', nextQuestion: 'financial_focus' },
        { value: 'it', label: 'IT / Technology Consulting', nextQuestion: 'it_focus' },
        { value: 'education', label: 'Education Consulting', nextQuestion: 'education_focus' },
        { value: 'career', label: 'Career Counseling', nextQuestion: 'career_focus' },
        { value: 'strategy', label: 'Business / Strategy Consulting', nextQuestion: 'strategy_focus' },

        // 🔥 NEW ADDED FIELDS
        { value: 'legal', label: 'Legal Consulting', nextQuestion: 'legal_focus' },
        { value: 'hr', label: 'HR Consulting', nextQuestion: 'hr_focus' },
        { value: 'startup', label: 'Startup / Entrepreneurship Consulting', nextQuestion: 'startup_focus' },
        { value: 'digital_marketing', label: 'Digital Marketing Consulting', nextQuestion: 'marketing_focus' },
      ],
    },

    {
      key: 'management_focus',
      text: 'Which management consulting focus?',
      type: 'single',
      options: [
        { value: 'operations', label: 'Operations Improvement', nextQuestion: 'consulting_mode' },
        { value: 'organizational', label: 'Organizational Restructuring', nextQuestion: 'consulting_mode' },
        { value: 'performance', label: 'Performance Optimization', nextQuestion: 'consulting_mode' },
      ],
    },

    // =========================
    // FINANCIAL
    // =========================
    {
      key: 'financial_focus',
      text: 'Which financial advisory area?',
      type: 'single',
      options: [
        { value: 'investment', label: 'Investment Advisory', nextQuestion: 'consulting_mode' },
        { value: 'tax', label: 'Tax Planning', nextQuestion: 'consulting_mode' },
        { value: 'wealth', label: 'Wealth Management', nextQuestion: 'consulting_mode' },
      ],
    },

    // =========================
    // IT CONSULTING
    // =========================
    {
      key: 'it_focus',
      text: 'Which IT consulting area?',
      type: 'single',
      options: [
        { value: 'cloud', label: 'Cloud Transformation', nextQuestion: 'consulting_mode' },
        { value: 'cyber', label: 'Cyber Security Advisory', nextQuestion: 'consulting_mode' },
        { value: 'data', label: 'Data & AI Consulting', nextQuestion: 'consulting_mode' },
      ],
    },

    // =========================
    // EDUCATION CONSULTING
    // =========================
    {
      key: 'education_focus',
      text: 'Education consulting focus?',
      type: 'single',
      options: [
        { value: 'study_abroad', label: 'Study Abroad Guidance', nextQuestion: 'consulting_mode' },
        { value: 'curriculum', label: 'Curriculum Design', nextQuestion: 'consulting_mode' },
        { value: 'institutional', label: 'Institutional Advisory', nextQuestion: 'consulting_mode' },
      ],
    },

    // =========================
    // CAREER CONSULTING
    // =========================
    {
      key: 'career_focus',
      text: 'Career consulting focus?',
      type: 'single',
      options: [
        { value: 'resume', label: 'Resume & Interview Coaching', nextQuestion: 'consulting_mode' },
        { value: 'career_switch', label: 'Career Transition Guidance', nextQuestion: 'consulting_mode' },
        { value: 'student', label: 'Student Career Planning', nextQuestion: 'consulting_mode' },
      ],
    },

    // =========================
    // STRATEGY
    // =========================
    {
      key: 'strategy_focus',
      text: 'Strategy consulting focus?',
      type: 'single',
      options: [
        { value: 'market_entry', label: 'Market Entry Strategy', nextQuestion: 'consulting_mode' },
        { value: 'growth', label: 'Growth Strategy', nextQuestion: 'consulting_mode' },
        { value: 'digital_transformation', label: 'Digital Transformation', nextQuestion: 'consulting_mode' },
      ],
    },

    // =========================
    // LEGAL CONSULTING
    // =========================
    {
      key: 'legal_focus',
      text: 'Legal consulting focus?',
      type: 'single',
      options: [
        { value: 'corporate_law', label: 'Corporate Law Advisory', nextQuestion: 'consulting_mode' },
        { value: 'compliance', label: 'Regulatory Compliance', nextQuestion: 'consulting_mode' },
        { value: 'contract', label: 'Contract Advisory', nextQuestion: 'consulting_mode' },
      ],
    },

    // =========================
    // HR CONSULTING
    // =========================
    {
      key: 'hr_focus',
      text: 'HR consulting focus?',
      type: 'single',
      options: [
        { value: 'talent', label: 'Talent Strategy', nextQuestion: 'consulting_mode' },
        { value: 'policy', label: 'HR Policy Advisory', nextQuestion: 'consulting_mode' },
        { value: 'analytics', label: 'HR Analytics Advisory', nextQuestion: 'consulting_mode' },
      ],
    },

    // =========================
    // STARTUP CONSULTING
    // =========================
    {
      key: 'startup_focus',
      text: 'Startup consulting focus?',
      type: 'single',
      options: [
        { value: 'funding', label: 'Fundraising Support', nextQuestion: 'consulting_mode' },
        { value: 'business_model', label: 'Business Model Design', nextQuestion: 'consulting_mode' },
        { value: 'scaling', label: 'Scaling Strategy', nextQuestion: 'consulting_mode' },
      ],
    },

    // =========================
    // MARKETING CONSULTING
    // =========================
    {
      key: 'marketing_focus',
      text: 'Digital marketing consulting focus?',
      type: 'single',
      options: [
        { value: 'seo', label: 'SEO Strategy', nextQuestion: 'consulting_mode' },
        { value: 'ads', label: 'Paid Ads Strategy', nextQuestion: 'consulting_mode' },
        { value: 'branding', label: 'Brand Positioning', nextQuestion: 'consulting_mode' },
      ],
    },
    //


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
      key: 'revenue_model',
      text: 'Preferred revenue model?',
      type: 'single',
      options: [
        { value: 'hourly', label: 'Hourly Billing', nextQuestion: 'expertise_level' },
        { value: 'project', label: 'Project-Based Fees', nextQuestion: 'expertise_level' },
        { value: 'retainer', label: 'Monthly Retainer Model', nextQuestion: 'expertise_level' },
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
        { value: 'other', label: 'Other Dance Forms', nextQuestion: 'dance_goal' },
        { value: 'folk', label: 'Folk Dance', nextQuestion: 'folk_style' },
        { value: 'international', label: 'International Dance Styles', nextQuestion: 'international_style' },
        { value: 'choreography', label: 'Choreography & Direction', nextQuestion: 'choreography_focus' },

        { value: 'ballroom', label: 'Ballroom / Latin Dance', nextQuestion: 'dance_goal' },
        { value: 'folk', label: 'Folk / Cultural Dance', nextQuestion: 'dance_goal' },
        { value: 'aerial', label: 'Aerial / Circus Arts', nextQuestion: 'dance_goal' },
        { value: 'salsa', label: 'Salsa / Latin Dance', nextQuestion: 'dance_goal' },
        { value: 'contemporary', label: 'Contemporary / Lyrical', nextQuestion: 'dance_goal' },
        { value: 'hiphop', label: 'Hip-hop / Street Dance', nextQuestion: 'dance_goal' },



  

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
        { value: 'mohiniyattam', label: 'Mohiniyattam', nextQuestion: 'dance_experience' },
        { value: 'kathakali', label: 'Kathakali', nextQuestion: 'dance_experience' },
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
        { value: 'locking', label: 'Locking & Popping', nextQuestion: 'dance_experience' },
        { value: 'krump', label: 'Krump', nextQuestion: 'dance_experience' },
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

        {
      key: 'dance_goal',
      text: 'What is your main goal?',
      type: 'single',
      options: [
        { value: 'performer', label: 'Professional Performer', nextQuestion: 'performance_platform' },
        { value: 'instructor', label: 'Dance Instructor', nextQuestion: 'certification_interest' },
        { value: 'academy', label: 'Start Dance Academy', nextQuestion: 'academy_setup' },
        { value: 'fitness', label: 'Fitness / Wellness', nextQuestion: 'practice_time' },
        { value: 'hobby', label: 'Hobby / Passion', nextQuestion: 'practice_time' },
      ],
    },

     {
      key: 'folk_style',
      text: 'Which folk dance style?',
      type: 'single',
      options: [
        { value: 'bhangra', label: 'Bhangra', nextQuestion: 'dance_experience' },
        { value: 'garba', label: 'Garba / Dandiya', nextQuestion: 'dance_experience' },
        { value: 'lavani', label: 'Lavani', nextQuestion: 'dance_experience' },
        { value: 'ghoomar', label: 'Ghoomar', nextQuestion: 'dance_experience' },
        { value: 'other', label: 'Other Folk Style', nextQuestion: 'dance_experience' },
      ],
    },

    // 🌍 INTERNATIONAL
    {
      key: 'international_style',
      text: 'Which international style?',
      type: 'single',
      options: [
        { value: 'ballet', label: 'Ballet', nextQuestion: 'dance_experience' },
        { value: 'salsa', label: 'Salsa', nextQuestion: 'dance_experience' },
        { value: 'tango', label: 'Tango', nextQuestion: 'dance_experience' },
        { value: 'ballroom', label: 'Ballroom', nextQuestion: 'dance_experience' },
      ],
    },

    // 🎬 CHOREOGRAPHY
    {
      key: 'choreography_focus',
      text: 'Choreography focus?',
      type: 'single',
      options: [
        { value: 'film', label: 'Film / Music Video Choreography', nextQuestion: 'dance_experience' },
        { value: 'stage', label: 'Stage Productions', nextQuestion: 'dance_experience' },
        { value: 'wedding', label: 'Wedding Choreography', nextQuestion: 'dance_experience' },
        { value: 'competition', label: 'Competition Choreography', nextQuestion: 'dance_experience' },
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

       {
      key: 'academy_setup',
      text: 'How do you want to start your academy?',
      type: 'single',
      options: [
        { value: 'offline', label: 'Physical Studio', nextQuestion: 'income_model' },
        { value: 'online', label: 'Online Classes', nextQuestion: 'income_model' },
        { value: 'hybrid', label: 'Hybrid Model', nextQuestion: 'income_model' },
      ],
    },

    // 💰 INCOME MODEL
    {
      key: 'income_model',
      text: 'Preferred income model?',
      type: 'single',
      options: [
        { value: 'monthly', label: 'Monthly Student Fees', nextQuestion: 'practice_time' },
        { value: 'events', label: 'Event-Based Earnings', nextQuestion: 'practice_time' },
        { value: 'digital', label: 'YouTube / Online Monetization', nextQuestion: 'practice_time' },
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
        
        // 🔥 NEW ADDED TYPES
        { value: 'hormonal', label: 'Hormonal Imbalance', nextQuestion: 'issue_duration' },
        { value: 'digestive', label: 'Digestive Problems', nextQuestion: 'issue_duration' },
        { value: 'skin', label: 'Skin / Hair Issues', nextQuestion: 'issue_duration' },
        { value: 'pain', label: 'Joint / Muscle Pain', nextQuestion: 'issue_duration' },
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
      key: 'symptom_pattern',
      text: 'When do symptoms usually occur?',
      type: 'single',
      options: [
        { value: 'morning', label: 'Morning', nextQuestion: 'medical_support' },
        { value: 'night', label: 'Night', nextQuestion: 'medical_support' },
        { value: 'after_food', label: 'After Meals', nextQuestion: 'medical_support' },
        { value: 'stress_trigger', label: 'During Stress', nextQuestion: 'medical_support' },
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
      key: 'test_history',
      text: 'Have you done any medical tests recently?',
      type: 'single',
      options: [
        { value: 'blood', label: 'Blood Tests', nextQuestion: 'lifestyle_focus' },
        { value: 'scan', label: 'Scan / Imaging', nextQuestion: 'lifestyle_focus' },
        { value: 'multiple', label: 'Multiple Tests', nextQuestion: 'lifestyle_focus' },
        { value: 'none', label: 'No Tests Done', nextQuestion: 'lifestyle_focus' },
      ],
    },
      {
      key: 'test_history',
      text: 'Have you done any medical tests recently?',
      type: 'single',
      options: [
        { value: 'blood', label: 'Blood Tests', nextQuestion: 'lifestyle_focus' },
        { value: 'scan', label: 'Scan / Imaging', nextQuestion: 'lifestyle_focus' },
        { value: 'multiple', label: 'Multiple Tests', nextQuestion: 'lifestyle_focus' },
        { value: 'none', label: 'No Tests Done', nextQuestion: 'lifestyle_focus' },
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

 {
      key: 'water_intake',
      text: 'Daily water intake?',
      type: 'single',
      options: [
        { value: 'low', label: 'Less than 1.5L', nextQuestion: 'activity_level' },
        { value: 'moderate', label: '1.5–2.5L', nextQuestion: 'activity_level' },
        { value: 'high', label: 'More than 2.5L', nextQuestion: 'activity_level' },
      ],
    },

    // 🔥 NEW ACTIVITY LEVEL
    {
      key: 'activity_level',
      text: 'How active are you physically?',
      type: 'single',
      options: [
        { value: 'sedentary', label: 'Mostly Sitting', nextQuestion: 'roadmap_goal' },
        { value: 'moderate', label: 'Light Exercise 2–3 days/week', nextQuestion: 'roadmap_goal' },
        { value: 'active', label: 'Active 4–6 days/week', nextQuestion: 'roadmap_goal' },
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
        { value: 'journaling', label: 'Daily Journaling', nextQuestion: 'habit_time' },
        { value: 'hydration', label: 'Drinking Enough Water', nextQuestion: 'habit_time' },
        { value: 'discipline', label: 'Self-Discipline Routine', nextQuestion: 'habit_time' },
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
        { value: 'alcohol', label: 'Alcohol Overuse', nextQuestion: 'habit_trigger' },
        { value: 'gaming', label: 'Excessive Gaming', nextQuestion: 'habit_trigger' },
        { value: 'anger', label: 'Anger / Emotional Reactions', nextQuestion: 'habit_trigger' },
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
      key: 'habit_environment',
      text: 'Does your environment support this habit?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, fully supportive', nextQuestion: 'accountability_type' },
        { value: 'partial', label: 'Partially supportive', nextQuestion: 'accountability_type' },
        { value: 'no', label: 'No, environment is distracting', nextQuestion: 'accountability_type' },
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
      key: 'trigger_frequency',
      text: 'How often does this habit occur?',
      type: 'single',
      options: [
        { value: 'daily', label: 'Daily', nextQuestion: 'accountability_type' },
        { value: 'weekly', label: 'Few times a week', nextQuestion: 'accountability_type' },
        { value: 'occasionally', label: 'Occasionally', nextQuestion: 'accountability_type' },
      ],
    },

    // 🔥 NEW ACCOUNTABILITY SYSTEM
    {
      key: 'accountability_type',
      text: 'How do you prefer to stay accountable?',
      type: 'single',
      options: [
        { value: 'self_tracking', label: 'Self Tracking (Journal / App)', nextQuestion: 'commitment_level' },
        { value: 'partner', label: 'Accountability Partner', nextQuestion: 'commitment_level' },
        { value: 'coach', label: 'Coach / Mentor Support', nextQuestion: 'commitment_level' },
        { value: 'none', label: 'No accountability system', nextQuestion: 'commitment_level' },
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

        { value: 'livestock', label: 'Dairy / Poultry / Animal Farming', nextQuestion: 'livestock_type' },
        { value: 'horticulture', label: 'Fruits / Vegetables / Floriculture', nextQuestion: 'horticulture_type' },
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

        { value: 'climate', label: 'Climate Change / Extreme Weather', nextQuestion: 'climate_support' },
        { value: 'storage', label: 'Storage / Post-Harvest Loss', nextQuestion: 'storage_support' },
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

     {
      key: 'market_problem_detail',
      text: 'What market problem are you facing?',
      type: 'single',
      options: [
        { value: 'low_price', label: 'Low Market Price', nextQuestion: 'roadmap_goal' },
        { value: 'middlemen', label: 'Dependence on Middlemen', nextQuestion: 'roadmap_goal' },
        { value: 'export', label: 'Export Difficulty', nextQuestion: 'export_support' },
      ],
    },

    {
      key: 'export_support',
      text: 'What export support do you need?',
      type: 'single',
      options: [
        { value: 'certification', label: 'Export Certification Guidance', nextQuestion: 'roadmap_goal' },
        { value: 'buyers', label: 'Finding International Buyers', nextQuestion: 'roadmap_goal' },
        { value: 'logistics', label: 'Export Logistics Support', nextQuestion: 'roadmap_goal' },
      ],
    },

    {
      key: 'climate_support',
      text: 'What climate-related help do you need?',
      type: 'single',
      options: [
        { value: 'resistant', label: 'Climate-Resistant Crops', nextQuestion: 'roadmap_goal' },
        { value: 'insurance', label: 'Crop Insurance Guidance', nextQuestion: 'roadmap_goal' },
        { value: 'forecast', label: 'Weather Forecast Planning', nextQuestion: 'roadmap_goal' },
      ],
    },

    {
      key: 'storage_support',
      text: 'What storage solution do you want?',
      type: 'single',
      options: [
        { value: 'cold_storage', label: 'Cold Storage Setup', nextQuestion: 'roadmap_goal' },
        { value: 'warehouse', label: 'Warehouse Planning', nextQuestion: 'roadmap_goal' },
        { value: 'processing', label: 'Value Addition / Processing', nextQuestion: 'roadmap_goal' },
      ],
    },

    /* ===== LIVESTOCK PATH (NEW) ===== */
    {
      key: 'livestock_type',
      text: 'Which livestock farming interests you?',
      type: 'single',
      options: [
        { value: 'dairy', label: 'Dairy Farming', nextQuestion: 'livestock_scale' },
        { value: 'poultry', label: 'Poultry Farming', nextQuestion: 'livestock_scale' },
        { value: 'goat', label: 'Goat / Sheep Farming', nextQuestion: 'livestock_scale' },
        { value: 'fishery', label: 'Fish Farming (Aquaculture)', nextQuestion: 'livestock_scale' },
      ],
    },

    {
      key: 'livestock_scale',
      text: 'What scale do you plan?',
      type: 'single',
      options: [
        { value: 'small', label: 'Small Scale', nextQuestion: 'livestock_support' },
        { value: 'medium', label: 'Medium Scale', nextQuestion: 'livestock_support' },
        { value: 'commercial', label: 'Commercial Large Scale', nextQuestion: 'livestock_support' },
      ],
    },

    {
      key: 'livestock_support',
      text: 'What support do you need?',
      type: 'single',
      options: [
        { value: 'training', label: 'Training & Veterinary Support', nextQuestion: 'roadmap_goal' },
        { value: 'loan', label: 'Loan / Subsidy Guidance', nextQuestion: 'roadmap_goal' },
        { value: 'marketing', label: 'Milk / Meat Marketing Support', nextQuestion: 'roadmap_goal' },
      ],
    },

    /* ===== HORTICULTURE PATH (NEW) ===== */
    {
      key: 'horticulture_type',
      text: 'Which horticulture area?',
      type: 'single',
      options: [
        { value: 'fruits', label: 'Fruit Farming', nextQuestion: 'horticulture_support' },
        { value: 'vegetables', label: 'Vegetable Farming', nextQuestion: 'horticulture_support' },
        { value: 'flowers', label: 'Floriculture', nextQuestion: 'horticulture_support' },
        { value: 'greenhouse', label: 'Greenhouse Farming', nextQuestion: 'horticulture_support' },
      ],
    },

    {
      key: 'horticulture_support',
      text: 'What support do you want?',
      type: 'single',
      options: [
        { value: 'subsidy', label: 'Government Subsidy Guidance', nextQuestion: 'roadmap_goal' },
        { value: 'modern', label: 'Modern Cultivation Techniques', nextQuestion: 'roadmap_goal' },
        { value: 'market_link', label: 'Market Linkage Support', nextQuestion: 'roadmap_goal' },
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

        {
      key: 'instrument_type',
      text: 'Which instrument interests you?',
      type: 'single',
      options: [
        { value: 'guitar', label: 'Guitar', nextQuestion: 'instrument_specialization' },
        { value: 'piano', label: 'Piano / Keyboard', nextQuestion: 'instrument_specialization' },
        { value: 'violin', label: 'Violin', nextQuestion: 'instrument_specialization' },
        { value: 'flute', label: 'Flute', nextQuestion: 'instrument_specialization' },
        { value: 'drums', label: 'Drums', nextQuestion: 'instrument_specialization' },
        { value: 'tabla', label: 'Tabla', nextQuestion: 'instrument_specialization' },
        { value: 'harmonium', label: 'Harmonium', nextQuestion: 'instrument_specialization' },
        { value: 'other', label: 'Other Instrument', nextQuestion: 'instrument_specialization' },
      ],
    },

    {
      key: 'instrument_specialization',
      text: 'What style of playing interests you?',
      type: 'single',
      options: [
        { value: 'solo', label: 'Solo Performance', nextQuestion: 'music_level' },
        { value: 'band', label: 'Band / Group Performance', nextQuestion: 'music_level' },
        { value: 'accompaniment', label: 'Accompaniment / Background Music', nextQuestion: 'music_level' },
        { value: 'composition', label: 'Music Composition / Creation', nextQuestion: 'music_level' },
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
        { value: 'professional', label: 'Become a Professional Musician', nextQuestion: 'career_path' },
        { value: 'teacher', label: 'Teach Music', nextQuestion: 'teaching_mode' },
        { value: 'performance', label: 'Stage / Live Performance', nextQuestion: 'performance_platform' },
      ],
    },

      {
      key: 'career_path',
      text: 'Which music career path interests you?',
      type: 'single',
      options: [
        { value: 'recording', label: 'Studio Recording Artist', nextQuestion: 'music_genre' },
        { value: 'live_artist', label: 'Live Concert Artist', nextQuestion: 'music_genre' },
        { value: 'composer', label: 'Composer / Music Director', nextQuestion: 'music_genre' },
        { value: 'session_player', label: 'Session Musician', nextQuestion: 'music_genre' },
      ],
    },

    // 🔥 NEW — TEACHING MODE
    {
      key: 'teaching_mode',
      text: 'How do you want to teach music?',
      type: 'single',
      options: [
        { value: 'academy', label: 'Music Academy', nextQuestion: 'certification_interest' },
        { value: 'online', label: 'Online Classes / YouTube', nextQuestion: 'certification_interest' },
        { value: 'private', label: 'Private Home Tuition', nextQuestion: 'certification_interest' },
      ],
    },

    // 🔥 NEW — PERFORMANCE PLATFORM
    {
      key: 'performance_platform',
      text: 'Where do you want to perform?',
      type: 'single',
      options: [
        { value: 'stage', label: 'Stage Shows / Events', nextQuestion: 'music_genre' },
        { value: 'tv', label: 'TV / Reality Shows', nextQuestion: 'music_genre' },
        { value: 'social', label: 'YouTube / Instagram', nextQuestion: 'music_genre' },
        { value: 'worship', label: 'Religious / Devotional Events', nextQuestion: 'music_genre' },
      ],
    },
    // 🎵 GENRE
    {
      key: 'music_genre',
      text: 'Which music style interests you most?',
      type: 'single',
      options: [
        { value: 'classical', label: 'Classical', nextQuestion: 'music_theory_level' },
        { value: 'film', label: 'Film / Movie Songs', nextQuestion: 'music_theory_level' },
        { value: 'western', label: 'Western / Pop / Rock', nextQuestion: 'music_theory_level' },
        { value: 'folk', label: 'Folk / Traditional', nextQuestion: 'music_theory_level' },
        { value: 'devotional', label: 'Devotional / Bhajans', nextQuestion: 'music_theory_level' },
      ],
    },
     {
      key: 'music_theory_level',
      text: 'How strong is your music theory knowledge?',
      type: 'single',
      options: [
        { value: 'none', label: 'No theory knowledge', nextQuestion: 'practice_commitment' },
        { value: 'basic', label: 'Basic understanding', nextQuestion: 'practice_commitment' },
        { value: 'advanced', label: 'Advanced theory knowledge', nextQuestion: 'practice_commitment' },
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
        { value: 'online', label: 'Online Courses / Videos', nextQuestion: 'investment_capacity' },
        { value: 'offline', label: 'Offline Classes / Guru', nextQuestion: 'investment_capacity' },
        { value: 'self', label: 'Self Practice', nextQuestion: 'investment_capacity' },
      ],
    },

    {
      key: 'investment_capacity',
      text: 'Are you willing to invest in instruments & training?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low Budget', nextQuestion: 'timeline' },
        { value: 'medium', label: 'Moderate Budget', nextQuestion: 'timeline' },
        { value: 'high', label: 'High Investment for Career Growth', nextQuestion: 'timeline' },
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
        { value: 'fresher', label: 'Fresher', nextQuestion: 'career_location' },
        { value: 'mid', label: '1–5 Years Experience', nextQuestion: 'career_location' },
        { value: 'senior', label: '5+ Years Experience', nextQuestion: 'career_location' },
      ],
    },

    {
      key: 'career_location',
      text: 'Where are you looking for opportunities?',
      type: 'single',
      options: [
        { value: 'local', label: 'Local / Nearby City', nextQuestion: 'career_salary_expectation' },
        { value: 'national', label: 'Anywhere in India', nextQuestion: 'career_salary_expectation' },
        { value: 'international', label: 'Abroad Opportunities', nextQuestion: 'career_salary_expectation' },
        { value: 'remote', label: 'Remote / Work From Home', nextQuestion: 'career_salary_expectation' },
      ],
    },

        {
      key: 'career_salary_expectation',
      text: 'What is your expected salary range?',
      type: 'single',
      options: [
        { value: 'entry', label: 'Entry-Level Salary', nextQuestion: 'career_competition' },
        { value: 'mid', label: 'Mid-Level Package', nextQuestion: 'career_competition' },
        { value: 'high', label: 'High / Premium Package', nextQuestion: 'career_competition' },
      ],
    },

        {
      key: 'career_competition',
      text: 'Are you ready to compete in a high-competition market?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, fully prepared', nextQuestion: 'roadmap_trigger' },
        { value: 'learning', label: 'Preparing gradually', nextQuestion: 'roadmap_trigger' },
        { value: 'unsure', label: 'Need guidance first', nextQuestion: 'roadmap_trigger' },
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
        { value: 'online', label: 'Online Business', nextQuestion: 'business_goal' },
        { value: 'offline', label: 'Offline / Physical Business', nextQuestion: 'business_goal' },
        { value: 'hybrid', label: 'Hybrid Model', nextQuestion: 'business_goal' },
      ],
    },

    {
      key: 'business_goal',
      text: 'What is your business goal?',
      type: 'single',
      options: [
        { value: 'income', label: 'Generate Steady Income', nextQuestion: 'business_timeline' },
        { value: 'scalable', label: 'Build Scalable Startup', nextQuestion: 'business_timeline' },
        { value: 'passive', label: 'Create Passive Income', nextQuestion: 'business_timeline' },
      ],
    },

        {
      key: 'business_timeline',
      text: 'When do you want to start earning?',
      type: 'single',
      options: [
        { value: 'immediate', label: 'Immediately (0–3 months)', nextQuestion: 'roadmap_trigger' },
        { value: 'mid', label: '3–6 months', nextQuestion: 'roadmap_trigger' },
        { value: 'long', label: '6+ months planning', nextQuestion: 'roadmap_trigger' },
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
        { value: 'online', label: 'Online', nextQuestion: 'education_budget' },
        { value: 'offline', label: 'Offline / Campus', nextQuestion: 'education_budget' },
        { value: 'hybrid', label: 'Hybrid', nextQuestion: 'education_budget' },
      ],
    },

        {
      key: 'education_budget',
      text: 'What is your education budget range?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low Budget / Scholarships', nextQuestion: 'roadmap_trigger' },
        { value: 'medium', label: 'Moderate Budget', nextQuestion: 'roadmap_trigger' },
        { value: 'high', label: 'Premium Institutions', nextQuestion: 'roadmap_trigger' },
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
        { value: 'low', label: '1–3 hours', nextQuestion: 'skill_market_demand' },
        { value: 'medium', label: '4–7 hours', nextQuestion: 'skill_market_demand' },
        { value: 'high', label: '8+ hours', nextQuestion: 'skill_market_demand' },
      ],
    },

  {
      key: 'skill_market_demand',
      text: 'Do you want to learn a high-demand market skill?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, high-income skill', nextQuestion: 'roadmap_trigger' },
        { value: 'balanced', label: 'Balanced demand & passion', nextQuestion: 'roadmap_trigger' },
        { value: 'passion', label: 'Passion over market demand', nextQuestion: 'roadmap_trigger' },
      ],
    },

    {
      key: 'roadmap_trigger',
      text: 'What do you want to generate now?',
      type: 'single',
      options: [
        { value: 'analysis', label: 'Opportunity Analysis Report' },
        { value: 'roadmap', label: 'Step-by-Step Action Roadmap' },
        { value: 'comparison', label: 'Compare Multiple Opportunities' },
        { value: 'best_match', label: 'Find Best Opportunity for Me' },
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
        { value: 'acting', label: 'Acting', nextQuestion: 'film_experience_level' },
        { value: 'direction', label: 'Direction', nextQuestion: 'film_experience_level' },
        { value: 'cinematography', label: 'Cinematography', nextQuestion: 'film_experience_level' },
        { value: 'editing', label: 'Editing', nextQuestion: 'film_experience_level' },
        { value: 'production', label: 'Production', nextQuestion: 'film_experience_level' },
        { value: 'writing', label: 'Screenplay Writing', nextQuestion: 'film_experience_level' },
        { value: 'music', label: 'Music / Background Score', nextQuestion: 'film_experience_level' },
        { value: 'vfx', label: 'VFX / Animation', nextQuestion: 'film_experience_level' },
      ],
    },
    {
      key: 'film_experience_level',
      text: 'What is your experience level?',
      type: 'single',
      options: [
        { value: 'none', label: 'No experience, complete beginner', nextQuestion: 'film_training_interest' },
        { value: 'some', label: 'Some experience or training', nextQuestion: 'film_training_interest' },
        { value: 'experienced', label: 'Experienced, looking to advance', nextQuestion: 'film_network_strength' },
      ],
    },

    {
      key: 'film_training_interest',
      text: 'Are you willing to undergo professional training?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, formal training', nextQuestion: 'film_platform' },
        { value: 'self', label: 'Self-learning & practice', nextQuestion: 'film_platform' },
        { value: 'unsure', label: 'Not sure yet', nextQuestion: 'film_platform' },
      ],
    },

    {
      key: 'film_network_strength',
      text: 'Do you have industry contacts or network?',
      type: 'single',
      options: [
        { value: 'strong', label: 'Strong network', nextQuestion: 'film_platform' },
        { value: 'building', label: 'Building network', nextQuestion: 'film_platform' },
        { value: 'none', label: 'No connections yet', nextQuestion: 'film_platform' },
      ],
    },

    {
      key: 'film_platform',
      text: 'Where do you want to work?',
      type: 'single',
      options: [
        { value: 'regional', label: 'Regional Cinema', nextQuestion: 'film_income_goal' },
        { value: 'bollywood', label: 'Bollywood', nextQuestion: 'film_income_goal' },
        { value: 'ott', label: 'OTT Platforms', nextQuestion: 'film_income_goal' },
        { value: 'independent', label: 'Independent / Short Films', nextQuestion: 'film_income_goal' },
      ],
    },

    {
      key: 'film_income_goal',
      text: 'What is your goal in film career?',
      type: 'single',
      options: [
        { value: 'fame', label: 'Recognition & Fame' },
        { value: 'income', label: 'Stable Income' },
        { value: 'creative', label: 'Creative Satisfaction' },
        { value: 'international', label: 'International Exposure' },
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
        { value: 'business', label: 'Business / Entrepreneurship', nextQuestion: 'specific_skill' },
      ],
    },

    /* ======================
       2️⃣ SPECIFIC SKILL
    ====================== */
    {
      key: 'specific_skill',
      text: 'Please specify the skill you want to develop',
      type: 'text',
      nextQuestion: 'training_experience_level',
    },

    {
      key: 'training_experience_level',
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
        { value: 'business', label: 'Start Own Business', nextQuestion: 'learning_commitment' },
        { value: 'interest', label: 'Personal Interest', nextQuestion: 'learning_commitment' },
      ],
    },

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
        { value: 'yes', label: 'Yes, certification is important', nextQuestion: 'industry_alignment' },
        { value: 'no', label: 'No, skills matter more', nextQuestion: 'industry_alignment' },
      ],
    },
    /* ======================
       9️⃣ PLACEMENT / OUTCOME
    ====================== */
 {
      key: 'industry_alignment',
      text: 'Is this skill aligned with current market demand?',
      type: 'single',
      options: [
        { value: 'high', label: 'High-demand skill', nextQuestion: 'placement_support' },
        { value: 'moderate', label: 'Moderate demand', nextQuestion: 'placement_support' },
        { value: 'unsure', label: 'Not sure', nextQuestion: 'placement_support' },
      ],
    },

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
        { value: 'agricultural', label: 'Agricultural Land', nextQuestion: 'land_size' },
        { value: 'garden', label: 'Garden / Landscaping', nextQuestion: 'land_size' },
        { value: 'commercial', label: 'Commercial Property', nextQuestion: 'land_size' },
      ],
    },

    {
      key: 'land_size',
      text: 'What is the size of the land?',
      type: 'single',
      options: [
        { value: 'small', label: 'Less than 2 acres', nextQuestion: 'water_source' },
        { value: 'medium', label: '2–10 acres', nextQuestion: 'water_source' },
        { value: 'large', label: 'More than 10 acres', nextQuestion: 'water_source' },
      ],
    },



    {
      key: 'water_source',
      text: 'What is the main water source?',
      type: 'single',
      options: [
        { value: 'rain', label: 'Rainwater', nextQuestion: 'water_availability' },
        { value: 'borewell', label: 'Borewell', nextQuestion: 'water_availability' },
        { value: 'canal', label: 'Canal', nextQuestion: 'water_availability' },
        { value: 'tank', label: 'Water Tank / Reservoir', nextQuestion: 'water_availability' },
      ],
    },

    {
      key: 'water_availability',
      text: 'Is water supply consistent throughout the year?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, consistent', nextQuestion: 'irrigation_method' },
        { value: 'seasonal', label: 'Seasonal only', nextQuestion: 'irrigation_method' },
        { value: 'limited', label: 'Very limited supply', nextQuestion: 'irrigation_method' },
      ],
    },

    {
      key: 'irrigation_method',
      text: 'Which irrigation method are you considering?',
      type: 'single',
      options: [
        { value: 'drip', label: 'Drip Irrigation', nextQuestion: 'automation_interest' },
        { value: 'sprinkler', label: 'Sprinkler System', nextQuestion: 'automation_interest' },
        { value: 'flood', label: 'Flood Irrigation', nextQuestion: 'automation_interest' },
        { value: 'micro', label: 'Micro Irrigation', nextQuestion: 'automation_interest' },
      ],
    },

    {
      key: 'automation_interest',
      text: 'Are you interested in smart / automated irrigation systems?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, fully automated', nextQuestion: 'budget_range' },
        { value: 'partial', label: 'Partially automated', nextQuestion: 'budget_range' },
        { value: 'no', label: 'Manual system is fine', nextQuestion: 'budget_range' },
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
        { value: 'engineering', label: 'Engineering', nextQuestion: 'career_specialization' },
        { value: 'agriculture', label: 'Agriculture', nextQuestion: 'career_specialization' },
        { value: 'diploma', label: 'Diploma / ITI', nextQuestion: 'career_specialization' },
        { value: 'other', label: 'Other', nextQuestion: 'career_specialization' },
      ],
    },
    {
      key: 'career_specialization',
      text: 'Which irrigation specialization interests you?',
      type: 'single',
      options: [
        { value: 'design', label: 'System Design & Planning', nextQuestion: 'career_goal' },
        { value: 'installation', label: 'Installation & Field Work', nextQuestion: 'career_goal' },
        { value: 'consulting', label: 'Consulting & Advisory', nextQuestion: 'career_goal' },
        { value: 'research', label: 'Water Management Research', nextQuestion: 'career_goal' },
      ],
    },

     {
      key: 'career_specialization',
      text: 'Which irrigation specialization interests you?',
      type: 'single',
      options: [
        { value: 'design', label: 'System Design & Planning', nextQuestion: 'career_goal' },
        { value: 'installation', label: 'Installation & Field Work', nextQuestion: 'career_goal' },
        { value: 'consulting', label: 'Consulting & Advisory', nextQuestion: 'career_goal' },
        { value: 'research', label: 'Water Management Research', nextQuestion: 'career_goal' },
      ],
    },

    {
      key: 'career_goal',
      text: 'What do you want to do in irrigation as a career?',
      type: 'single',
      options: [
        { value: 'designer', label: 'Irrigation System Designer', nextQuestion: 'roadmap_goal' },
        { value: 'technician', label: 'Installation Technician', nextQuestion: 'roadmap_goal' },
        { value: 'consultant', label: 'Irrigation Consultant', nextQuestion: 'roadmap_goal' },
        { value: 'business', label: 'Start Irrigation Business', nextQuestion: 'roadmap_goal' },
      ],
    },

    /* ================= FINAL ROADMAP ================= */

    {
      key: 'roadmap_goal',
      text: 'What do you want to generate now?',
      type: 'single',
      options: [
        { value: 'installation_plan', label: 'Step-by-Step Installation Plan' },
        { value: 'improvement_plan', label: 'Irrigation Improvement Roadmap' },
        { value: 'career_plan', label: 'Irrigation Career Roadmap' },
        { value: 'complete', label: 'Complete Water Management Strategy' },
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
        { value: 'fruits', label: 'Fruits', nextQuestion: 'cultivation_method' },
        { value: 'vegetables', label: 'Vegetables', nextQuestion: 'cultivation_method' },
        { value: 'flowers', label: 'Flowers', nextQuestion: 'cultivation_method' },
      ],
    },

    {
      key: 'cultivation_method',
      text: 'Which cultivation method are you considering?',
      type: 'single',
      options: [
        { value: 'open', label: 'Open Field Cultivation', nextQuestion: 'land_size' },
        { value: 'greenhouse', label: 'Greenhouse / Polyhouse', nextQuestion: 'land_size' },
        { value: 'organic', label: 'Organic Farming', nextQuestion: 'land_size' },
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

    {
      key: 'experience_level',
      text: 'What is your horticulture experience level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner', nextQuestion: 'market_focus' },
        { value: 'intermediate', label: 'Some Experience', nextQuestion: 'market_focus' },
        { value: 'advanced', label: 'Experienced Farmer', nextQuestion: 'market_focus' },
      ],
    },

    {
      key: 'market_focus',
      text: 'Where do you plan to sell your produce?',
      type: 'single',
      options: [
        { value: 'local', label: 'Local Market', nextQuestion: 'business_intent' },
        { value: 'wholesale', label: 'Wholesale / Mandis', nextQuestion: 'business_intent' },
        { value: 'export', label: 'Export Market', nextQuestion: 'business_intent' },
        { value: 'direct', label: 'Direct-to-Consumer / Online', nextQuestion: 'business_intent' },
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
        { value: 'business', label: 'Start a Business', nextQuestion: 'investment_capacity' },
        { value: 'job', label: 'Find a Job / Career', nextQuestion: 'job_role' },
        { value: 'hobby', label: 'Personal Interest / Hobby', nextQuestion: 'roadmap_goal' },
      ],
    },

        {
      key: 'investment_capacity',
      text: 'What is your investment capacity?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low Investment', nextQuestion: 'roadmap_goal' },
        { value: 'medium', label: 'Medium Investment', nextQuestion: 'roadmap_goal' },
        { value: 'high', label: 'High Investment', nextQuestion: 'roadmap_goal' },
      ],
    },

    {
      key: 'job_role',
      text: 'Which horticulture job role interests you?',
      type: 'single',
      options: [
        { value: 'supervisor', label: 'Farm Supervisor', nextQuestion: 'roadmap_goal' },
        { value: 'consultant', label: 'Horticulture Consultant', nextQuestion: 'roadmap_goal' },
        { value: 'research', label: 'Research / Scientist', nextQuestion: 'roadmap_goal' },
        { value: 'govt', label: 'Government Agriculture Officer', nextQuestion: 'roadmap_goal' },
      ],
    },

    /* ✅ FINAL ROADMAP */

    {
      key: 'roadmap_goal',
      text: 'What do you want to generate now?',
      type: 'single',
      options: [
        { value: 'business_plan', label: 'Horticulture Business Plan' },
        { value: 'cultivation_plan', label: 'Step-by-Step Cultivation Guide' },
        { value: 'career_plan', label: 'Horticulture Career Roadmap' },
        { value: 'complete', label: 'Complete Horticulture Growth Plan' },
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
        { value: 'mlops', label: 'MLOps Engineer', nextQuestion: 'programming_skills' },
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
        { value: 'ai_ethics', label: 'AI Ethics & Responsible AI', nextQuestion: 'ethics_focus' },
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
        { value: 'gan', label: 'GANs', nextQuestion: 'project_goal' },
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
        { value: 'rag', label: 'RAG Systems', nextQuestion: 'project_goal' },
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
        { value: 'chatgpt_apps', label: 'ChatGPT-like Apps', nextQuestion: 'ai_tools' },
        { value: 'image', label: 'Image Generation', nextQuestion: 'ai_tools' },
        { value: 'rag', label: 'RAG / AI Search Systems', nextQuestion: 'ai_tools' },
      ],
    },

    {
      key: 'ai_tools',
      text: 'Which AI tools or frameworks do you want to focus on?',
      type: 'single',
      options: [
        { value: 'pytorch', label: 'PyTorch', nextQuestion: 'project_goal' },
        { value: 'tensorflow', label: 'TensorFlow', nextQuestion: 'project_goal' },
        { value: 'openai', label: 'OpenAI APIs', nextQuestion: 'project_goal' },
        { value: 'huggingface', label: 'HuggingFace', nextQuestion: 'project_goal' },
      ],
    },

        {
      key: 'ethics_focus',
      text: 'Which responsible AI area interests you?',
      type: 'single',
      options: [
        { value: 'bias', label: 'Bias & Fairness', nextQuestion: 'project_goal' },
        { value: 'privacy', label: 'AI Privacy & Security', nextQuestion: 'project_goal' },
        { value: 'policy', label: 'AI Policy & Governance', nextQuestion: 'project_goal' },
      ],
    },

    {
      key: 'project_goal',
      text: 'What is your main goal with AI?',
      type: 'single',
      options: [
        { value: 'job', label: 'Get a Job in AI', nextQuestion: 'portfolio_status' },
        { value: 'startup', label: 'Build AI Startup', nextQuestion: 'portfolio_status' },
        { value: 'research', label: 'Research & Innovation', nextQuestion: 'portfolio_status' },
        { value: 'personal', label: 'Personal Learning', nextQuestion: 'portfolio_status' },
      ],
    },

    {
      key: 'portfolio_status',
      text: 'Do you have AI projects or portfolio?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, multiple projects', nextQuestion: 'learning_commitment' },
        { value: 'basic', label: 'Basic projects', nextQuestion: 'learning_commitment' },
        { value: 'no', label: 'No, need to build', nextQuestion: 'learning_commitment' },
      ],
    },

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
        { value: 'product', label: 'Full SaaS Product' },
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
        { value: '2d_graphic', label: '2D Graphic Design', nextQuestion: 'design_specialization_2d' },
        { value: 'ui_ux', label: 'UI / UX Design', nextQuestion: 'design_specialization_uiux' },
        { value: '3d_modeling', label: '3D Modeling & Rendering', nextQuestion: 'design_specialization_3d' },
        { value: 'animation', label: 'Animation & Motion Graphics', nextQuestion: 'design_specialization_animation' },
        { value: 'game_design', label: 'Game Design', nextQuestion: 'design_specialization_game' },
        { value: 'product_design', label: 'Product / Industrial Design', nextQuestion: 'design_specialization_product' },
        { value: 'ar_vr', label: 'AR / VR / Metaverse Design', nextQuestion: 'design_specialization_arvr' },
      ],
    },

     {
      key: 'design_specialization_2d',
      text: 'Which 2D design area interests you?',
      type: 'single',
      options: [
        { value: 'branding', label: 'Branding & Logo Design', nextQuestion: 'design_role' },
        { value: 'social_media', label: 'Social Media Design', nextQuestion: 'design_role' },
        { value: 'print', label: 'Print & Packaging', nextQuestion: 'design_role' },
      ],
    },

    
    {
      key: 'design_specialization_uiux',
      text: 'Which UI/UX focus area?',
      type: 'single',
      options: [
        { value: 'mobile_apps', label: 'Mobile App Design', nextQuestion: 'design_role' },
        { value: 'web_apps', label: 'Web App Design', nextQuestion: 'design_role' },
        { value: 'ux_research', label: 'UX Research & Testing', nextQuestion: 'design_role' },
      ],
    },
    
    {
      key: 'design_specialization_3d',
      text: 'Which 3D specialization?',
      type: 'single',
      options: [
        { value: 'architectural', label: 'Architectural Visualization', nextQuestion: 'design_role' },
        { value: 'product_render', label: 'Product Rendering', nextQuestion: 'design_role' },
        { value: 'character', label: 'Character Modeling', nextQuestion: 'design_role' },
      ],
    },

    {
      key: 'design_specialization_animation',
      text: 'Which animation field?',
      type: 'single',
      options: [
        { value: '2d_anim', label: '2D Animation', nextQuestion: 'design_role' },
        { value: '3d_anim', label: '3D Animation', nextQuestion: 'design_role' },
        { value: 'motion_graphics', label: 'Motion Graphics', nextQuestion: 'design_role' },
      ],
    },

    {
      key: 'design_specialization_game',
      text: 'Which game design area?',
      type: 'single',
      options: [
        { value: 'level_design', label: 'Level Design', nextQuestion: 'design_role' },
        { value: 'game_ui', label: 'Game UI', nextQuestion: 'design_role' },
        { value: 'environment', label: 'Environment Design', nextQuestion: 'design_role' },
      ],
    },

    {
      key: 'design_specialization_product',
      text: 'Which product design focus?',
      type: 'single',
      options: [
        { value: 'industrial', label: 'Industrial Design', nextQuestion: 'design_role' },
        { value: 'consumer', label: 'Consumer Product Design', nextQuestion: 'design_role' },
        { value: 'prototype', label: 'Prototyping & CAD', nextQuestion: 'design_role' },
      ],
    },

    {
      key: 'design_specialization_arvr',
      text: 'Which AR/VR focus?',
      type: 'single',
      options: [
        { value: 'metaverse', label: 'Metaverse Environments', nextQuestion: 'design_role' },
        { value: 'vr_training', label: 'VR Training Simulations', nextQuestion: 'design_role' },
        { value: 'immersive_ui', label: 'Immersive UI Design', nextQuestion: 'design_role' },
      ],
    },


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
        { value: 'beginner', label: 'Beginner', nextQuestion: 'portfolio_status' },
        { value: 'intermediate', label: 'Intermediate', nextQuestion: 'portfolio_status' },
        { value: 'advanced', label: 'Advanced / Professional', nextQuestion: 'portfolio_status' },
      ],
    },

        {
      key: 'portfolio_status',
      text: 'Do you have a design portfolio?',
      type: 'single',
      options: [
        { value: 'strong', label: 'Strong Portfolio', nextQuestion: 'design_tools' },
        { value: 'basic', label: 'Basic Portfolio', nextQuestion: 'design_tools' },
        { value: 'none', label: 'No Portfolio Yet', nextQuestion: 'design_tools' },
      ],
    },

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

    {
      key: 'ai_tools_interest',
      text: 'Are you interested in AI-powered design tools?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes', nextQuestion: 'ai_design_tools' },
        { value: 'maybe', label: 'Curious', nextQuestion: 'ai_design_tools' },
        { value: 'no', label: 'Prefer traditional tools', nextQuestion: 'income_goal' },
      ],
    },

    {
      key: 'ai_design_tools',
      text: 'Which AI design tools do you want to learn?',
      type: 'single',
      options: [
        { value: 'midjourney', label: 'Midjourney / DALL·E', nextQuestion: 'income_goal' },
        { value: 'firefly', label: 'Adobe Firefly', nextQuestion: 'income_goal' },
        { value: 'runway', label: 'Runway ML', nextQuestion: 'income_goal' },
        { value: 'stable', label: 'Stable Diffusion', nextQuestion: 'income_goal' },
      ],
    },

    {
      key: 'income_goal',
      text: 'How do you plan to earn from design?',
      type: 'single',
      options: [
        { value: 'freelance', label: 'Freelancing' },
        { value: 'job', label: 'Full-time Job' },
        { value: 'agency', label: 'Start Design Agency' },
        { value: 'content', label: 'YouTube / Instagram Content' },
        { value: 'hobby', label: 'Personal Projects Only' },
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

    {
      key: 'funding_plan',
      text: 'How do you plan to fund your startup?',
      type: 'single',
      options: [
        { value: 'self', label: 'Self-Funding / Bootstrapping', nextQuestion: 'risk_level' },
        { value: 'loan', label: 'Bank Loan / MSME Scheme', nextQuestion: 'risk_level' },
        { value: 'investor', label: 'Angel / VC Funding', nextQuestion: 'risk_level' },
        { value: 'grant', label: 'Government Grants', nextQuestion: 'risk_level' },
      ],
    },


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


    {
      key: 'investment_range',
      text: 'What is your investment capacity?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low (Below ₹50,000)', nextQuestion: 'risk_level' },
        { value: 'medium', label: 'Medium (₹50,000 – ₹5 Lakhs)', nextQuestion: 'risk_level' },
        { value: 'high', label: 'High (₹5 Lakhs – ₹50 Lakhs)', nextQuestion: 'risk_level' },
        { value: 'enterprise', label: 'Enterprise Level (₹50 Lakhs+)', nextQuestion: 'risk_level' },
      ],
    },

        {
      key: 'risk_level',
      text: 'How much business risk can you handle?',
      type: 'single',
      options: [
        { value: 'low', label: 'Low Risk Preference', nextQuestion: 'team_plan' },
        { value: 'medium', label: 'Moderate Risk', nextQuestion: 'team_plan' },
        { value: 'high', label: 'High Risk / High Reward', nextQuestion: 'team_plan' },
      ],
    },

     {
      key: 'team_plan',
      text: 'Will you start alone or with a team?',
      type: 'single',
      options: [
        { value: 'solo', label: 'Solo Founder', nextQuestion: 'timeline_goal' },
        { value: 'team', label: 'With Co-founders / Team', nextQuestion: 'timeline_goal' },
      ],
    },

    {
      key: 'timeline_goal',
      text: 'When do you want to launch?',
      type: 'single',
      options: [
        { value: '1_month', label: 'Within 1 Month', nextQuestion: 'growth_goal' },
        { value: '3_months', label: 'Within 3 Months', nextQuestion: 'growth_goal' },
        { value: '6_months', label: 'Within 6 Months', nextQuestion: 'growth_goal' },
        { value: '1_year', label: 'Within 1 Year', nextQuestion: 'growth_goal' },
      ],
    },

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
        { value: 'short', label: 'Within 30 days', nextQuestion: 'accountability_level' },
        { value: 'medium', label: '2–3 months', nextQuestion: 'accountability_level' },
        { value: 'long', label: '6 months or more', nextQuestion: 'accountability_level' },
      ],
    },

    {
      key: 'accountability_level',
      text: 'Do you need accountability support?',
      type: 'single',
      options: [
        { value: 'mentor', label: 'Yes, need mentor guidance', nextQuestion: 'improvement_goal' },
        { value: 'group', label: 'Group accountability', nextQuestion: 'improvement_goal' },
        { value: 'self', label: 'Self-driven', nextQuestion: 'improvement_goal' },
      ],
    },

    {
      key: 'improvement_goal',
      text: 'What transformation do you want?',
      type: 'single',
      options: [
        { value: 'confidence_boost', label: 'Become confident & fearless' },
        { value: 'career_growth', label: 'Improve career & opportunities' },
        { value: 'mental_peace', label: 'Gain mental clarity & balance' },
        { value: 'leadership_mastery', label: 'Master leadership presence' },
      ],
    },

  ],
},

  
/*
   ─────────────────────────┐
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
        { value: 'casual', label: 'Casual', nextQuestion: 'style_preference' },
        { value: 'professional', label: 'Professional', nextQuestion: 'style_preference' },
        { value: 'traditional', label: 'Traditional', nextQuestion: 'style_preference' },
        { value: 'all', label: 'All Occasions', nextQuestion: 'style_preference' },
      ],
    },

        {
      key: 'style_preference',
      text: 'What style do you prefer?',
      type: 'single',
      options: [
        { value: 'minimal', label: 'Minimal & Elegant' },
        { value: 'bold', label: 'Bold & Trendy' },
        { value: 'classic', label: 'Classic & Timeless' },
        { value: 'modern', label: 'Modern & Experimental' },
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
        { value: 'self_defense', label: 'Self-Defense Awareness', nextQuestion: 'self_defense_level' },
        { value: 'women', label: 'Women Safety', nextQuestion: 'safety_environment' },
        { value: 'children', label: 'Child Safety', nextQuestion: 'safety_environment' },
        { value: 'elderly', label: 'Elderly Safety', nextQuestion: 'safety_environment' },
        { value: 'online', label: 'Online / Cyber Safety', nextQuestion: 'online_safety_focus' },
      ],
    },

     {
      key: 'self_defense_level',
      text: 'What level of self-defense training do you prefer?',
      type: 'single',
      options: [
        { value: 'basic', label: 'Basic Awareness & Techniques', nextQuestion: 'safety_environment' },
        { value: 'intermediate', label: 'Intermediate Practical Training', nextQuestion: 'safety_environment' },
        { value: 'advanced', label: 'Advanced Combat Training', nextQuestion: 'safety_environment' },
      ],
    },

    {
      key: 'online_safety_focus',
      text: 'What type of online safety?',
      type: 'single',
      options: [
        { value: 'fraud', label: 'Online Fraud & Scams', nextQuestion: 'cyber_protection_level' },
        { value: 'privacy', label: 'Privacy Protection', nextQuestion: 'cyber_protection_level' },
        { value: 'social', label: 'Social Media Safety', nextQuestion: 'cyber_protection_level' },
      ],
    },

    {
      key: 'cyber_protection_level',
      text: 'Do you use strong security practices?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, 2FA & Secure Passwords', nextQuestion: 'safety_environment' },
        { value: 'basic', label: 'Basic Security Only', nextQuestion: 'safety_environment' },
        { value: 'no', label: 'No, need guidance', nextQuestion: 'safety_environment' },
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
        { value: 'worker', label: 'Worker / Employee', nextQuestion: 'safety_training_need' },
        { value: 'supervisor', label: 'Supervisor / Manager', nextQuestion: 'safety_training_need' },
        { value: 'owner', label: 'Owner / Employer', nextQuestion: 'safety_training_need' },
      ],
    },

    {
      key: 'safety_training_need',
      text: 'Do you need safety certification or compliance training?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, Certification Required' },
        { value: 'awareness', label: 'Awareness Training Only' },
        { value: 'audit', label: 'Safety Audit & Compliance Setup' },
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
        { value: 'first_time', label: 'First-Time Donor', nextQuestion: 'blood_group' },
        { value: 'regular', label: 'Regular Donor', nextQuestion: 'blood_group' },
        { value: 'unable', label: 'Unable to Donate Currently', nextQuestion: 'donation_restriction' },
      ],
    },

    {
      key: 'blood_group',
      text: 'What is your blood group?',
      type: 'single',
      options: [
        { value: 'a_positive', label: 'A+' },
        { value: 'a_negative', label: 'A-' },
        { value: 'b_positive', label: 'B+' },
        { value: 'b_negative', label: 'B-' },
        { value: 'ab_positive', label: 'AB+' },
        { value: 'ab_negative', label: 'AB-' },
        { value: 'o_positive', label: 'O+' },
        { value: 'o_negative', label: 'O-' },
        { value: 'unknown', label: 'I don’t know' },
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
      key: 'emergency_need_type',
      text: 'What emergency blood support do you need?',
      type: 'single',
      options: [
        { value: 'need_blood', label: 'Need Blood Urgently', nextQuestion: 'required_blood_group' },
        { value: 'be_donor', label: 'Become Emergency Blood Donor', nextQuestion: 'blood_group' },
        { value: 'coordination', label: 'Help in Blood Coordination', nextQuestion: 'support_mode' },
      ],
    },

  
    {
      key: 'required_blood_group',
      text: 'Which blood group is required?',
      type: 'single',
      options: [
        { value: 'a_positive', label: 'A+' },
        { value: 'a_negative', label: 'A-' },
        { value: 'b_positive', label: 'B+' },
        { value: 'b_negative', label: 'B-' },
        { value: 'ab_positive', label: 'AB+' },
        { value: 'ab_negative', label: 'AB-' },
        { value: 'o_positive', label: 'O+' },
        { value: 'o_negative', label: 'O-' },
        { value: 'unknown', label: 'Not Sure' },
      ],
    },

    {
      key: 'support_mode',
      text: 'How would you like to support during emergencies?',
      type: 'single',
      options: [
        { value: 'contact_network', label: 'Connect Donors & Patients' },
        { value: 'social_share', label: 'Share Emergency Requests' },
        { value: 'hospital_help', label: 'Coordinate with Hospitals' },
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
        { value: 'weight_loss', label: 'Weight Loss', nextQuestion: 'body_weight' },
        { value: 'weight_gain', label: 'Weight Gain', nextQuestion: 'body_weight' },
        { value: 'fitness', label: 'Fitness & Muscle Building', nextQuestion: 'body_weight' },
        { value: 'medical', label: 'Medical / Special Diet', nextQuestion: 'body_weight' },
      ],
    },

    {
      key: 'body_weight',
      text: 'What is your current body weight (kg)?',
      type: 'number',
      validation: { min: 20, max: 250 },
      nextQuestion: 'body_height',
    },

    {
      key: 'body_height',
      text: 'What is your height (cm)?',
      type: 'number',
      validation: { min: 100, max: 250 },
      nextQuestion: 'activity_level',
    },
    {
      key: 'activity_level',
      text: 'What is your daily activity level?',
      type: 'single',
      options: [
        { value: 'low', label: 'Sedentary (Little Exercise)', nextQuestion: 'diet_preference' },
        { value: 'moderate', label: 'Moderate (3–5 days workout)', nextQuestion: 'diet_preference' },
        { value: 'high', label: 'High (Daily intense training)', nextQuestion: 'diet_preference' },
      ],
    },
    
    {
      key: 'diet_preference',
      text: 'What is your diet preference?',
      type: 'single',
      options: [
        { value: 'vegetarian', label: 'Vegetarian', nextQuestion: 'calorie_target' },
        { value: 'non_veg', label: 'Non-Vegetarian', nextQuestion: 'calorie_target' },
        { value: 'vegan', label: 'Vegan', nextQuestion: 'calorie_target' },
        { value: 'mixed', label: 'Mixed Diet', nextQuestion: 'calorie_target' },
      ],
    },

       {
      key: 'calorie_target',
      text: 'Do you want a calorie-based meal plan?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, calculate my calories', nextQuestion: 'macro_focus' },
        { value: 'guidelines', label: 'General nutrition guidelines', nextQuestion: 'macro_focus' },
        { value: 'no', label: 'Simple healthy eating plan', nextQuestion: 'meal_plan_need' },
      ],
    },

    /* 🔥 NEW — MACRO TRACKING */
    {
      key: 'macro_focus',
      text: 'Which nutrition focus do you prefer?',
      type: 'single',
      options: [
        { value: 'high_protein', label: 'High Protein Plan', nextQuestion: 'meal_plan_need' },
        { value: 'balanced', label: 'Balanced Macros (Carbs + Protein + Fats)', nextQuestion: 'meal_plan_need' },
        { value: 'low_carb', label: 'Low Carb / Keto Style', nextQuestion: 'meal_plan_need' },
        { value: 'medical', label: 'Medical Condition-Based Diet', nextQuestion: 'meal_plan_need' },
      ],
    },


    {
      key: 'meal_plan_need',
      text: 'Do you need a structured meal plan?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, daily meal plan' },
        { value: 'weekly', label: 'Weekly meal schedule' },
        { value: 'guidelines', label: 'Only nutrition guidelines' },
        { value: 'no', label: 'General awareness only' },
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
        { value: 'professional', label: 'Professional Driving Career', nextQuestion: 'sector_interest' },
        { value: 'skill_upgrade', label: 'Improve Driving Skills', nextQuestion: 'skill_level' },
      ],
    },

    {
      key: 'sector_interest',
      text: 'Which sector are you interested in?',
      type: 'single',
      options: [
        { value: 'private', label: 'Private Sector Driving', nextQuestion: 'professional_type' },
        { value: 'government', label: 'Government / Public Sector Driving', nextQuestion: 'government_role' },
      ],
    },

    {
      key: 'private_role',
      text: 'Which private driving job interests you?',
      type: 'single',
      options: [
        { value: 'cab', label: 'Taxi / Cab Driver (Ola / Uber)', nextQuestion: 'commercial_vehicle' },
        { value: 'delivery', label: 'Delivery Driver (Amazon / Flipkart / Swiggy)', nextQuestion: 'commercial_vehicle' },
        { value: 'truck', label: 'Truck / Lorry Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'bus_private', label: 'Private Bus Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'school_bus', label: 'School Bus Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'ambulance_private', label: 'Private Hospital Ambulance Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'corporate', label: 'Corporate / Company Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'luxury', label: 'Luxury Car / Chauffeur Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'tourist', label: 'Tourist Vehicle Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'tanker', label: 'Oil / Water Tanker Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'crane', label: 'Crane / Heavy Equipment Driver', nextQuestion: 'commercial_vehicle' },
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
        { value: 'bike', label: 'Motorcycle (Gear)', nextQuestion: 'transmission_type' },
        { value: 'scooter', label: 'Scooter (Non-Gear)', nextQuestion: 'transmission_type' },
        { value: 'electric_2w', label: 'Electric Two-Wheeler', nextQuestion: 'transmission_type' },

        { value: 'hatchback', label: 'Hatchback Car', nextQuestion: 'transmission_type' },
        { value: 'sedan', label: 'Sedan Car', nextQuestion: 'transmission_type' },
        { value: 'suv', label: 'SUV / MUV', nextQuestion: 'transmission_type' },
        { value: 'electric_car', label: 'Electric Car', nextQuestion: 'transmission_type' },

        { value: 'auto', label: 'Auto Rickshaw', nextQuestion: 'transmission_type' },
        { value: 'tempo', label: 'Tempo / Goods Carrier', nextQuestion: 'transmission_type' },
        { value: 'tractor', label: 'Tractor', nextQuestion: 'transmission_type' },
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
        { value: 'mcwg', label: 'Motorcycle with Gear (MCWG)' },
        { value: 'lmv', label: 'LMV (Car)' },
        { value: 'transport', label: 'Transport / Commercial License' },
        { value: 'hmv', label: 'Heavy Motor Vehicle (HMV)' },
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

    {
      key: 'sector_interest',
      text: 'Which sector are you interested in?',
      type: 'single',
      options: [
        { value: 'private', label: 'Private Sector Driving', nextQuestion: 'professional_type' },
        { value: 'government', label: 'Government / Public Sector Driving', nextQuestion: 'government_role' },
      ],
    },

    /* ======================
       4️⃣ PROFESSIONAL DRIVING
    ====================== */
    {
      key: 'professional_type',
      text: 'What private driving role interests you?',
      type: 'single',
      options: [
        { value: 'taxi', label: 'Taxi / Cab Driver (Ola/Uber)', nextQuestion: 'commercial_vehicle' },
        { value: 'delivery', label: 'Delivery Driver (Amazon/Flipkart/Swiggy)', nextQuestion: 'commercial_vehicle' },
        { value: 'truck', label: 'Truck / Lorry Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'bus_private', label: 'Private Bus Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'corporate', label: 'Corporate / Company Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'ambulance', label: 'Ambulance Driver', nextQuestion: 'commercial_vehicle' },
      ],
    },

  {
      key: 'government_role',
      text: 'Which government driving job interests you?',
      type: 'single',
      options: [
        { value: 'rtc', label: 'RTC / State Transport Bus Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'police', label: 'Police Vehicle Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'army', label: 'Army / Defence Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'municipal', label: 'Municipal Corporation Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'fire', label: 'Fire Engine Driver', nextQuestion: 'commercial_vehicle' },
        { value: 'gov_ambulance', label: 'Government Ambulance Driver (108/102)', nextQuestion: 'commercial_vehicle' },
        { value: 'government_office', label: 'Government Office Staff Driver', nextQuestion: 'commercial_vehicle' },
      ],
    },


    {
      key: 'commercial_vehicle',
      text: 'Which commercial vehicle type?',
      type: 'single',
      options: [
        { value: 'light', label: 'Light Commercial Vehicle (LCV)', nextQuestion: 'commercial_license' },
        { value: 'medium', label: 'Medium Commercial Vehicle (MCV)', nextQuestion: 'commercial_license' },
        { value: 'heavy', label: 'Heavy Commercial Vehicle (HCV/HMV)', nextQuestion: 'commercial_license' },
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
        { value: 'hill', label: 'Hill / Ghat Road Driving' },
        { value: 'traffic', label: 'Heavy Traffic Handling' },
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
        { value: 'stroke', label: 'Stroke / Brain Emergency', nextQuestion: 'patient_condition' },
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

    {
      key: 'driver_sector',
      text: 'Which sector do you want to work in?',
      type: 'single',
      options: [
        { value: 'private', label: 'Private Hospital / Private Ambulance', nextQuestion: 'driver_experience' },
        { value: 'government', label: 'Government Ambulance (108 / 102 Services)', nextQuestion: 'driver_experience' },
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
      text: 'Do you want ambulance driver emergency response training?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, emergency driving + CPR training needed', nextQuestion: 'commercial_license' },
        { value: 'no', label: 'No, only licensing guidance', nextQuestion: 'commercial_license' },
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
        { value: 'dispatcher', label: 'Emergency Call Center Dispatcher', nextQuestion: 'education_level' },
      ],
    },

    {
      key: 'education_level',
      text: 'What is your education background?',
      type: 'single',
      options: [
        { value: '10th', label: '10th Pass' },
        { value: '12th', label: '12th Pass (Biology preferred)' },
        { value: 'diploma', label: 'Diploma in Paramedical / EMT' },
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
        { value: 'public_private', label: 'Government Contract / PPP Model', nextQuestion: 'ambulance_type' },
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
        { value: 'neonatal', label: 'Neonatal / Baby Ambulance', nextQuestion: 'business_support' },
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
        { value: 'gov_contract', label: 'Government Tender Guidance' },
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
        { value: 'bls', label: 'Basic Life Support (BLS)' },
        { value: 'als', label: 'Advanced Life Support (ALS)' },
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
│   leadership Dreams     │
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
        { value: 'military', label: 'Defence / Military Leadership', nextQuestion: 'military_role' },
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
        { value: 'hr_head', label: 'HR Head – People & Culture Leadership', nextQuestion: 'leadership_focus' },
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
        { value: 'operations_head', label: 'Operations Head – Process & Systems', nextQuestion: 'leadership_focus' },
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
        { value: 'education_admin', label: 'Education Administrator – Policy & Planning', nextQuestion: 'leadership_focus' },
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
        { value: 'bureaucrat', label: 'Bureaucrat – Policy Implementation (IAS/IPS)', nextQuestion: 'leadership_focus' },
        { value: 'administrator', label: 'Administrator – Governance & Planning', nextQuestion: 'leadership_focus' },
        { value: 'public_leader', label: 'Public Leader – Community Representation', nextQuestion: 'leadership_focus' },
        { value: 'policy_advisor', label: 'Policy Advisor – Research & Strategy', nextQuestion: 'leadership_focus' },
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
        { value: 'impact_manager', label: 'Impact Manager – Social Outcome Measurement', nextQuestion: 'leadership_focus' },
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
        { value: 'resident_welfare', label: 'Resident Welfare Association Leader', nextQuestion: 'leadership_focus' },
      ],
    },

        {
      key: 'military_role',
      text: 'Which defence leadership role interests you?',
      type: 'single',
      options: [
        { value: 'army_officer', label: 'Army Officer', nextQuestion: 'leadership_focus' },
        { value: 'navy_officer', label: 'Navy Officer', nextQuestion: 'leadership_focus' },
        { value: 'airforce_officer', label: 'Air Force Officer', nextQuestion: 'leadership_focus' },
        { value: 'paramilitary', label: 'Paramilitary Command Role', nextQuestion: 'leadership_focus' },
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
        { value: 'decision', label: 'Decision Making & Problem Solving', nextQuestion: 'leadership_level' },
        { value: 'communication', label: 'Communication & Influence', nextQuestion: 'leadership_level' },
        { value: 'team', label: 'Team Building & Motivation', nextQuestion: 'leadership_level' },
        { value: 'strategy', label: 'Vision, Strategy & Planning', nextQuestion: 'leadership_level' },
        { value: 'ethics', label: 'Ethics & Accountability', nextQuestion: 'leadership_level' },
        { value: 'crisis', label: 'Crisis Management', nextQuestion: 'leadership_level' },
      ],
    },

    {
      key: 'leadership_level',
      text: 'What is your current leadership level?',
      type: 'single',
      options: [
        { value: 'aspiring', label: 'Aspiring Leader' },
        { value: 'mid_level', label: 'Mid-Level Leader' },
        { value: 'senior', label: 'Senior Leader / Executive' },
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
        { value: 'concept_art', label: 'Concept Art / Game Art', nextQuestion: 'skill_level' },
        { value: 'tattoo', label: 'Tattoo Design', nextQuestion: 'skill_level' },
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
        { value: 'basics', label: 'Shapes, Lines & Shading', nextQuestion: 'practice_time' },
        { value: 'anatomy', label: 'Human Anatomy & Proportions', nextQuestion: 'practice_time' },
        { value: 'perspective', label: 'Perspective & Depth', nextQuestion: 'practice_time' },
        { value: 'color', label: 'Color Theory & Blending', nextQuestion: 'practice_time' },
        { value: 'speed', label: 'Speed & Accuracy', nextQuestion: 'practice_time' },
        { value: 'composition', label: 'Composition & Storytelling', nextQuestion: 'practice_time' },
      ],
    },

    {
      key: 'practice_time',
      text: 'How much time can you practice daily?',
      type: 'single',
      options: [
        { value: '15', label: '15–30 Minutes', nextQuestion: 'tools_used' },
        { value: '30', label: '30–60 Minutes', nextQuestion: 'tools_used' },
        { value: '60', label: '1–2 Hours', nextQuestion: 'tools_used' },
        { value: '120', label: 'More than 2 Hours', nextQuestion: 'tools_used' },
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
        { value: 'pencil', label: 'Pencil & Paper', nextQuestion: 'learning_mode' },
        { value: 'charcoal', label: 'Charcoal / Pastels', nextQuestion: 'learning_mode' },
        { value: 'paint', label: 'Paints & Brushes', nextQuestion: 'learning_mode' },
        { value: 'tablet', label: 'Tablet & Stylus', nextQuestion: 'learning_mode' },
        { value: 'mixed', label: 'Mixed Medium', nextQuestion: 'learning_mode' },
      ],
    },

    {
      key: 'learning_mode',
      text: 'How do you want to learn drawing?',
      type: 'single',
      options: [
        { value: 'self', label: 'Self Practice (YouTube / Books)', nextQuestion: 'portfolio_status' },
        { value: 'online_course', label: 'Online Course', nextQuestion: 'portfolio_status' },
        { value: 'offline_class', label: 'Offline Art Classes', nextQuestion: 'portfolio_status' },
        { value: 'mentor', label: 'Personal Mentor / Art Coach', nextQuestion: 'portfolio_status' },
      ],
    },

    {
      key: 'portfolio_status',
      text: 'Do you have an art portfolio?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, strong portfolio', nextQuestion: 'career_path' },
        { value: 'basic', label: 'Basic portfolio', nextQuestion: 'career_path' },
        { value: 'no', label: 'No, need to build one', nextQuestion: 'career_path' },
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
        { value: 'exhibition', label: 'Art Exhibitions / Galleries' },
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
        { value: 'crime', label: 'Crime / Detective', nextQuestion: 'language' },
        { value: 'adventure', label: 'Adventure', nextQuestion: 'language' },
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
        { value: 'plot', label: 'Story Plot & Structure', nextQuestion: 'writing_style' },
        { value: 'characters', label: 'Character Development', nextQuestion: 'writing_style' },
        { value: 'dialogue', label: 'Dialogue Writing', nextQuestion: 'writing_style' },
        { value: 'world', label: 'World-Building', nextQuestion: 'writing_style' },
        { value: 'editing', label: 'Editing & Polishing', nextQuestion: 'writing_style' },
        { value: 'pacing', label: 'Story Pacing & Suspense', nextQuestion: 'writing_style' },
      ],
    },

    {
      key: 'writing_style',
      text: 'Which writing style describes you best?',
      type: 'single',
      options: [
        { value: 'descriptive', label: 'Descriptive & Detailed', nextQuestion: 'writing_habit' },
        { value: 'minimal', label: 'Simple & Direct', nextQuestion: 'writing_habit' },
        { value: 'emotional', label: 'Emotion-Driven', nextQuestion: 'writing_habit' },
        { value: 'fast_paced', label: 'Fast-Paced & Plot-Driven', nextQuestion: 'writing_habit' },
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
        { value: 'daily', label: 'Daily', nextQuestion: 'word_target' },
        { value: 'weekly', label: 'Weekly', nextQuestion: 'word_target' },
        { value: 'flexible', label: 'Flexible Schedule', nextQuestion: 'word_target' },
      ],
    },

    {
      key: 'word_target',
      text: 'Do you set a word-count goal?',
      type: 'single',
      options: [
        { value: '500', label: '500 words per session', nextQuestion: 'publishing_goal' },
        { value: '1000', label: '1000 words per session', nextQuestion: 'publishing_goal' },
        { value: '2000', label: '2000+ words per session', nextQuestion: 'publishing_goal' },
        { value: 'no_target', label: 'No fixed target', nextQuestion: 'publishing_goal' },
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
        { value: 'contest', label: 'Writing Competitions & Awards' },
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
        { value: 'defence', label: 'Defence / Strategic Research', nextQuestion: 'research_type' },
        { value: 'economics', label: 'Economics & Public Policy', nextQuestion: 'research_type' },
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
        { value: 'comparative', label: 'Comparative Research', nextQuestion: 'research_method' },
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
        { value: 'survey', label: 'Surveys & Questionnaires', nextQuestion: 'sample_size' },
        { value: 'interview', label: 'Interviews / Focus Groups', nextQuestion: 'sample_size' },
        { value: 'case_study', label: 'Case Studies', nextQuestion: 'sample_size' },
        { value: 'experiment', label: 'Experiments / Simulations', nextQuestion: 'sample_size' },
        { value: 'secondary', label: 'Secondary Data Analysis', nextQuestion: 'sample_size' },
      ],
    },

    {
      key: 'sample_size',
      text: 'What is your expected sample size?',
      type: 'single',
      options: [
        { value: 'small', label: 'Small (Below 50)', nextQuestion: 'data_source' },
        { value: 'medium', label: 'Medium (50–500)', nextQuestion: 'data_source' },
        { value: 'large', label: 'Large (500+)', nextQuestion: 'data_source' },
        { value: 'not_applicable', label: 'Not Applicable (Theoretical)', nextQuestion: 'data_source' },
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
        { value: 'manual', label: 'Manual / Traditional Methods', nextQuestion: 'analysis_approach' },
        { value: 'software', label: 'Statistical Software (SPSS, R, Excel)', nextQuestion: 'analysis_approach' },
        { value: 'ai_tools', label: 'AI Tools (ChatGPT, Python, ML)', nextQuestion: 'analysis_approach' },
        { value: 'lab', label: 'Laboratory Equipment', nextQuestion: 'analysis_approach' },
      ],
    },

    {
      key: 'analysis_approach',
      text: 'How will you analyze your data?',
      type: 'single',
      options: [
        { value: 'statistical', label: 'Statistical Analysis', nextQuestion: 'skill_level' },
        { value: 'thematic', label: 'Thematic / Content Analysis', nextQuestion: 'skill_level' },
        { value: 'predictive', label: 'Predictive / AI Modeling', nextQuestion: 'skill_level' },
        { value: 'descriptive', label: 'Descriptive Analysis', nextQuestion: 'skill_level' },
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
        { value: 'beginner', label: 'Beginner (Need full guidance)', nextQuestion: 'publication_target' },
        { value: 'intermediate', label: 'Intermediate (Some experience)', nextQuestion: 'publication_target' },
        { value: 'advanced', label: 'Advanced / Researcher', nextQuestion: 'publication_target' },
      ],
    },

    {
      key: 'publication_target',
      text: 'Do you plan to publish your research?',
      type: 'single',
      options: [
        { value: 'journal', label: 'International Journal', nextQuestion: 'output_goal' },
        { value: 'conference', label: 'Conference Presentation', nextQuestion: 'output_goal' },
        { value: 'patent', label: 'Patent / Intellectual Property', nextQuestion: 'output_goal' },
        { value: 'internal', label: 'Internal / Academic Submission', nextQuestion: 'output_goal' },
        { value: 'no', label: 'No Publication Plan', nextQuestion: 'output_goal' },
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
        { value: 'data', label: 'Data & Analysis Based', nextQuestion: 'competitive_position' },
        { value: 'intuition', label: 'Experience & Intuition', nextQuestion: 'competitive_position' },
        { value: 'hybrid', label: 'Combination of Both', nextQuestion: 'competitive_position' },
      ],
    },

    /* ====================== 6️⃣ COMPETITIVE POSITION ====================== */
    {
      key: 'competitive_position',
      text: 'What is your current competitive position?',
      type: 'single',
      options: [
        { value: 'leader', label: 'Market Leader / Strong Position', nextQuestion: 'resources' },
        { value: 'challenger', label: 'Challenger / Growing Competitor', nextQuestion: 'resources' },
        { value: 'newcomer', label: 'New Entrant / Beginner', nextQuestion: 'resources' },
        { value: 'underdog', label: 'Underdog / Resource Limited', nextQuestion: 'resources' },
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
        { value: 'speed', label: 'Speed & Quick Wins', nextQuestion: 'adaptability' },
        { value: 'quality', label: 'Quality & Sustainability', nextQuestion: 'adaptability' },
        { value: 'scale', label: 'Scaling & Expansion', nextQuestion: 'adaptability' },
        { value: 'control', label: 'Control & Risk Management', nextQuestion: 'adaptability' },
      ],
    },

    /* ====================== 🔟 ADAPTABILITY ====================== */
    {
      key: 'adaptability',
      text: 'How adaptable should your strategy be?',
      type: 'single',
      options: [
        { value: 'fixed', label: 'Fixed Plan – Strict Execution', nextQuestion: 'success_metric' },
        { value: 'flexible', label: 'Flexible – Adjust with Situations', nextQuestion: 'success_metric' },
        { value: 'dynamic', label: 'Highly Dynamic – Rapid Iteration', nextQuestion: 'success_metric' },
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
        { value: 'legacy', label: 'Long-Term Legacy & Recognition' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│  entrance_exams Dream   │
└─────────────────────────┘
*/



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
    { value: 'iti', label: 'ITI / Skill Training', nextQuestion: 'after_10th' },
    { value: 'degree', label: 'Degree / UG', nextQuestion: 'after_degree' },
    { value: 'pg', label: 'Post Graduation', nextQuestion: 'after_pg' },
    { value: 'phd', label: 'PhD / Research Scholar', nextQuestion: 'after_pg' },
    { value: 'working', label: 'Working Professional', nextQuestion: 'after_degree' },
    { value: 'dropout', label: 'Gap Year / Dropped Out', nextQuestion: 'after_10th' },
    { value: 'open_school', label: 'Open Schooling (NIOS / State Open)', nextQuestion: 'after_10th' },
    { value: 'abroad_student', label: 'Planning Study Abroad', nextQuestion: 'after_degree' },
  ],
},

    /* ======================
       2️⃣ SCHOOL LEVEL
    ====================== */
    {
      key: 'school_exams',
      text: 'Which school-level exam are you preparing for?',
      type: 'single',
      options: [
        { value: 'navodaya', label: 'JNVST (Navodaya)' },
        { value: 'sainik', label: 'AISSEE (Sainik School)' },
        { value: 'rms', label: 'RMS Entrance Exam' },
        { value: 'olympiad', label: 'Science / Maths Olympiads (IMO, NSO, NTSE)' },
        { value: 'nmms', label: 'NMMS Scholarship' },
      ],
    },
    /* ======================
       3️⃣ AFTER 10TH
    ====================== */
    {
      key: 'after_10th',
      text: 'What entrance exam after 10th?',
      type: 'single',
      options: [
        { value: 'poly_cet', label: 'POLYCET' },
        { value: 'iti', label: 'ITI Admission Tests' },
        { value: 'paramedical', label: 'Paramedical Entrance' },
        { value: 'nda_early', label: 'NDA (after 12th planning)' },
        { value: 'intermediate', label: 'Intermediate (MPC / BiPC / Arts)' },
        { value: 'railway_group_d', label: 'Railway Group D'},
        { value: 'ssc_mts', label: 'SSC MTS' },
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

    {
      key: 'after_inter',
      text: 'Which entrance exam after Intermediate?',
      type: 'single',
      options: [
        { value: 'jee', label: 'JEE Main / Advanced', nextQuestion: 'exam_goal' },
        { value: 'neet', label: 'NEET UG', nextQuestion: 'exam_goal' },
        { value: 'state_cet', label: 'All State CETs (EAMCET / KCET / MHT-CET)', nextQuestion: 'exam_goal' },
        { value: 'cuet', label: 'CUET UG', nextQuestion: 'exam_goal' },
        { value: 'clat', label: 'CLAT / AILET (Law)', nextQuestion: 'exam_goal' },
        { value: 'nift', label: 'NIFT / NID / UCEED (Design)', nextQuestion: 'exam_goal' },
        { value: 'nda', label: 'NDA / Defence', nextQuestion: 'exam_goal' },
        { value: 'hotel', label: 'NCHMCT (Hotel Management)', nextQuestion: 'exam_goal' },
        { value: 'agriculture', label: 'ICAR AIEEA', nextQuestion: 'exam_goal' },
        { value: 'ca_foundation', label: 'CA Foundation', nextQuestion: 'exam_goal' },
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
        { value: 'ecet', label: 'ECET / Lateral Entry BTech', nextQuestion: 'exam_goal' },
        { value: 'gate_diploma', label: 'GATE (Some Streams)', nextQuestion: 'exam_goal' },
        { value: 'rrb_je', label: 'RRB JE', nextQuestion: 'exam_goal' },
        { value: 'ssc_je', label: 'SSC JE', nextQuestion: 'exam_goal' },
        { value: 'psu', label: 'PSU Diploma Recruitment', nextQuestion: 'exam_goal' },
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
        { value: 'upsc', label: 'UPSC CSE (IAS / IPS / IFS)', nextQuestion: 'exam_goal' },
        { value: 'state_psc', label: 'State PSC (Group 1/2/3)', nextQuestion: 'exam_goal' },
        { value: 'cat', label: 'CAT / XAT / SNAP / NMAT (MBA)', nextQuestion: 'exam_goal' },
        { value: 'banking', label: 'IBPS / SBI PO / RBI Grade B', nextQuestion: 'exam_goal' },
        { value: 'ssc_cgl', label: 'SSC CGL', nextQuestion: 'exam_goal' },
        { value: 'railways', label: 'RRB NTPC / ALP', nextQuestion: 'exam_goal' },
        { value: 'defence_grad', label: 'CDS / AFCAT / CAPF', nextQuestion: 'exam_goal' },
        { value: 'judiciary', label: 'Judiciary / APO Exams', nextQuestion: 'exam_goal' },
        { value: 'gre', label: 'GRE / GMAT (Abroad)', nextQuestion: 'exam_goal' },
        { value: 'ies', label: 'Engineering Services (ESE)', nextQuestion: 'exam_goal' },
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
        { value: 'phd', label: 'PhD Entrance (University Level)', nextQuestion: 'exam_goal' },
        { value: 'ugc_net', label: 'UGC NET / JRF', nextQuestion: 'exam_goal' },
        { value: 'csir_net', label: 'CSIR NET', nextQuestion: 'exam_goal' },
        { value: 'set', label: 'State Eligibility Test (SET)', nextQuestion: 'exam_goal' },
        { value: 'drdo_isro', label: 'DRDO / ISRO / BARC Exams', nextQuestion: 'exam_goal' },
        { value: 'research_fellowship', label: 'ICMR / DBT / Research Fellowships', nextQuestion: 'exam_goal' },
      ],
    },
    {
      key: 'research_exams',
      text: 'Which research fellowship exam are you targeting?',
      type: 'single',
      options: [
        { value: 'jrf', label: 'UGC NET JRF', nextQuestion: 'exam_goal' },
        { value: 'csir_jrf', label: 'CSIR JRF', nextQuestion: 'exam_goal' },
        { value: 'icmr', label: 'ICMR Research Fellowship', nextQuestion: 'exam_goal' },
        { value: 'dbt', label: 'DBT Fellowship', nextQuestion: 'exam_goal' },
        { value: 'drdo', label: 'DRDO Scientist Entry', nextQuestion: 'exam_goal' },
        { value: 'isro', label: 'ISRO Scientist / Research Entry', nextQuestion: 'exam_goal' },
      ],
    },

    /* ====================== 8️⃣ GOVERNMENT JOBS ====================== */
    {
      key: 'job_exams',
      text: 'Which government job exam interests you?',
      type: 'single',
      options: [
        { value: 'upsc', label: 'UPSC Civil Services (IAS/IPS/IFS)', nextQuestion: 'exam_goal' },
        { value: 'ssc', label: 'SSC (CGL / CHSL / MTS)', nextQuestion: 'exam_goal' },
        { value: 'banking', label: 'IBPS / SBI PO / Clerk', nextQuestion: 'exam_goal' },
        { value: 'railways', label: 'RRB (NTPC / Group D / ALP)', nextQuestion: 'exam_goal' },
        { value: 'defence', label: 'Army / Navy / Air Force', nextQuestion: 'exam_goal' },
        { value: 'state_psc', label: 'State PSC (Group 1/2/3)', nextQuestion: 'exam_goal' },
        { value: 'teaching', label: 'TET / DSC / KVS / NVS', nextQuestion: 'exam_goal' },
        { value: 'police', label: 'Police / SI / Constable Exams', nextQuestion: 'exam_goal' },
        { value: 'paramilitary', label: 'CRPF / BSF / CISF', nextQuestion: 'exam_goal' },
      ],
    },

    /* ====================== 9️⃣ STUDY ABROAD ====================== */
    {
      key: 'abroad_exams',
      text: 'Which exam are you preparing for study abroad?',
      type: 'single',
      options: [
        { value: 'ielts', label: 'IELTS', nextQuestion: 'exam_goal' },
        { value: 'toefl', label: 'TOEFL', nextQuestion: 'exam_goal' },
        { value: 'pte', label: 'PTE Academic', nextQuestion: 'exam_goal' },
        { value: 'gre', label: 'GRE', nextQuestion: 'exam_goal' },
        { value: 'gmat', label: 'GMAT', nextQuestion: 'exam_goal' },
        { value: 'sat', label: 'SAT (UG Abroad)', nextQuestion: 'exam_goal' },
        { value: 'usmle', label: 'USMLE (Medical Abroad)', nextQuestion: 'exam_goal' },
        { value: 'plab', label: 'PLAB (UK Medical)', nextQuestion: 'exam_goal' },
      ],
    },

    /* ====================== 🔟 EXAM GOAL (MODIFIED) ====================== */
    {
      key: 'exam_goal',
      text: 'What is your main goal with this exam?',
      type: 'single',
      options: [
        { value: 'college_admission', label: 'Get Admission in Top College / University' },
        { value: 'government_job', label: 'Secure Government Job' },
        { value: 'research_career', label: 'Build Research / Academic Career' },
        { value: 'psu_job', label: 'Join PSU / Public Sector Company' },
        { value: 'study_abroad', label: 'Study Abroad Opportunity' },
        { value: 'promotion', label: 'Career Promotion / Internal Growth' },
        { value: 'scholarship', label: 'Scholarship / Fellowship Funding' },
        { value: 'backup_plan', label: 'Backup Career Option' },
        { value: 'skill_upgrade', label: 'Skill Upgrade & Competitive Edge' },
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
        { value: 'financial', label: 'Financial Planning', nextQuestion: 'planning_area' }, // ✅ NEW
        { value: 'health', label: 'Health & Fitness Planning', nextQuestion: 'planning_area' }, // ✅ NEW
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
        { value: 'productivity', label: 'Productivity System', nextQuestion: 'time_horizon' }, // ✅ NEW
        { value: 'risk_management', label: 'Risk & Contingency Planning', nextQuestion: 'time_horizon' }, // ✅ NEW
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
        { value: 'quarterly', label: 'Quarterly Plan', nextQuestion: 'planning_depth' }, // ✅ NEW
        { value: 'yearly', label: 'Yearly Plan', nextQuestion: 'planning_depth' },
        { value: 'long_term', label: '3–5 Year Vision Plan', nextQuestion: 'planning_depth' }, // ✅ NEW
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
        { value: 'kpi_based', label: 'KPI / Metrics Based Planning', nextQuestion: 'flexibility_level' }, // ✅ NEW
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
        { value: 'unexpected', label: 'Unexpected Events / Emergencies', nextQuestion: 'support_needed' }, // ✅ NEW
        { value: 'skills', label: 'Skill Gaps', nextQuestion: 'support_needed' }, // ✅ NEW
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
        { value: 'schedule', label: 'Daily Schedule / Planner', nextQuestion: 'tracking_method' },
        { value: 'roadmap', label: 'Clear Roadmap', nextQuestion: 'tracking_method' },
        { value: 'tracking', label: 'Progress Tracking System', nextQuestion: 'tracking_method' },
        { value: 'mentor', label: 'Mentor / Guidance', nextQuestion: 'tracking_method' },
        { value: 'accountability', label: 'Accountability Partner', nextQuestion: 'tracking_method' }, // ✅ NEW
      ],
    },
      {
      key: 'tracking_method',
      text: 'How would you like to track your progress?',
      type: 'single',
      options: [
        { value: 'manual', label: 'Notebook / Manual Tracking', nextQuestion: 'review_cycle' },
        { value: 'app', label: 'Mobile App / Digital Tool', nextQuestion: 'review_cycle' },
        { value: 'spreadsheet', label: 'Excel / Google Sheets', nextQuestion: 'review_cycle' },
        { value: 'ai', label: 'AI-Based Smart Tracking', nextQuestion: 'review_cycle' }, // ✅ NEW
      ],
    },

    /* ======================
       9️⃣ REVIEW CYCLE (NEW)
    ====================== */
    {
      key: 'review_cycle',
      text: 'How often will you review and adjust your plan?',
      type: 'single',
      options: [
        { value: 'daily', label: 'Daily Review' },
        { value: 'weekly', label: 'Weekly Review' },
        { value: 'monthly', label: 'Monthly Review' },
        { value: 'milestone', label: 'After Each Milestone' },
      ],
    },
  ],
},

/*
┌─────────────────────────┐
│  usable_tips Dream      │
└─────────────────────────┘
*/

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
        { value: 'productivity', label: 'Productivity & Efficiency', nextQuestion: 'life_area' }, // ✅ NEW
        { value: 'relationships', label: 'Relationships & Social Life', nextQuestion: 'life_area' }, // ✅ NEW
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
        { value: 'family', label: 'Family Environment', nextQuestion: 'daily_habits' },
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
        { value: 'consistency', label: 'Consistency & Habit Tracking', nextQuestion: 'smart_skills' }, // ✅ NEW
        { value: 'reading', label: 'Daily Reading Habit', nextQuestion: 'smart_skills' },
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
        { value: 'negotiation', label: 'Negotiation Skills', nextQuestion: 'health_lifestyle' }, // ✅ NEW
        { value: 'communication', label: 'Better Communication', nextQuestion: 'health_lifestyle' },
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
        { value: 'hydration', label: 'Proper Water Intake', nextQuestion: 'safety_awareness' }, // ✅ NEW
        { value: 'mental_health', label: 'Mental Health Care', nextQuestion: 'safety_awareness' }, // ✅ NEW
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
        { value: 'cyber_fraud', label: 'Online Fraud Prevention', nextQuestion: 'financial_awareness' }, // ✅ NEW
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
        { value: 'investment', label: 'Basic Investment Knowledge', nextQuestion: 'personal_growth' }, // ✅ NEW
        { value: 'emergency_fund', label: 'Emergency Fund Planning', nextQuestion: 'personal_growth' }, // ✅ NEW
      ],
    },

    {
      key: 'personal_growth',
      text: 'Which personal growth area do you want to improve?',
      type: 'single',
      options: [
        { value: 'confidence', label: 'Self-Confidence', nextQuestion: 'daily_productivity_style' },
        { value: 'communication', label: 'Daily Communication Skills', nextQuestion: 'daily_productivity_style' },
        { value: 'learning', label: 'Continuous Learning Habit', nextQuestion: 'daily_productivity_style' },
        { value: 'mindset', label: 'Positive Mindset', nextQuestion: 'daily_productivity_style' },
        { value: 'emotional', label: 'Emotional Intelligence', nextQuestion: 'daily_productivity_style' }, // ✅ NEW
      ],
    },

    {
      key: 'daily_productivity_style',
      text: 'What productivity style suits you best?',
      type: 'single',
      options: [
        { value: 'structured', label: 'Highly Structured Routine', nextQuestion: 'final_outcome' },
        { value: 'flexible', label: 'Flexible & Adaptive Style', nextQuestion: 'final_outcome' },
        { value: 'goal_oriented', label: 'Goal-Oriented Focused Work', nextQuestion: 'final_outcome' },
        { value: 'minimalist', label: 'Simple & Minimal Lifestyle', nextQuestion: 'final_outcome' },
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
        { value: 'financial_stability', label: 'Financial Stability' }, // ✅ NEW
        { value: 'all', label: 'All of the Above' },
      ],
    },
  ],
},

/*
┌─────────────────────────┐
│  corporate_contacts     │
└─────────────────────────┘
*/


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
        { value: 'vendor', label: 'Vendor / Supplier Network', nextQuestion: 'industry_focus' }, 
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
        { value: 'energy', label: 'Energy / Power Sector', nextQuestion: 'contact_level' }, // ✅ NEW
        { value: 'media', label: 'Media / Entertainment', nextQuestion: 'contact_level' },
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
        { value: 'board', label: 'Board Members / Advisors', nextQuestion: 'contact_roles' },
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
        { value: 'operations', label: 'Operations / Supply Chain Head', nextQuestion: 'contact_channel' }, // ✅ NEW
        { value: 'finance_head', label: 'Finance Head / CFO Office', nextQuestion: 'contact_channel' },
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
        { value: 'industry_groups', label: 'Industry Associations / Groups', nextQuestion: 'communication_skill' }, 
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
        { value: 'corporate_etiquette', label: 'Corporate Etiquette & Professional Behavior', nextQuestion: 'tools_usage' }, 

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
        { value: 'automation', label: 'Automated Contact & Follow-up System', nextQuestion: 'ethics_compliance' }, 
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
        { value: 'brand_visibility', label: 'Personal Brand Visibility' }, 
        { value: 'multiple', label: 'All of the Above' },
      ],
    },
  ],
},

/*
┌─────────────────────────┐
│  manpower_handling      │
└─────────────────────────┘
*/


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
        { value: 'digital_transformation', label: 'Digital Workforce Transformation', nextQuestion: 'workplace_type' },

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
        { value: 'retail', label: 'Retail / Store Operations', nextQuestion: 'manpower_size' }, // ✅ NEW
        { value: 'warehouse', label: 'Warehouse / Logistics Hub', nextQuestion: 'manpower_size' },

      ],
    },

 {
      key: 'manpower_size',
      text: 'How large is the workforce you are handling?',
      type: 'single',
      options: [
        { value: 'small', label: '1 – 20 Employees', nextQuestion: 'employment_structure' },
        { value: 'medium', label: '21 – 100 Employees', nextQuestion: 'employment_structure' },
        { value: 'large', label: '100+ Employees', nextQuestion: 'employment_structure' },
      ],
    },

    // ✅ NEW SECTION
    {
      key: 'employment_structure',
      text: 'What type of employment structure do you follow?',
      type: 'single',
      options: [
        { value: 'permanent', label: 'Permanent Employees', nextQuestion: 'skill_level' },
        { value: 'contract', label: 'Contract / Temporary Workers', nextQuestion: 'skill_level' },
        { value: 'mixed', label: 'Mixed Workforce', nextQuestion: 'skill_level' },
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
        { value: 'overstaffing', label: 'Overstaffing / Idle Time', nextQuestion: 'work_allocation' }, // ✅ NEW
        { value: 'understaffing', label: 'Understaffing / Work Overload', nextQuestion: 'work_allocation' },
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
        { value: 'single', label: 'Single Shift', nextQuestion: 'overtime_management' },
        { value: 'double', label: 'Double Shift', nextQuestion: 'overtime_management' },
        { value: 'triple', label: 'Three Shifts / 24x7', nextQuestion: 'overtime_management' },
        { value: 'flexible', label: 'Flexible / Rotational Shifts', nextQuestion: 'overtime_management' },
      ],
    },

    // ✅ NEW SECTION
    {
      key: 'overtime_management',
      text: 'How do you handle overtime?',
      type: 'single',
      options: [
        { value: 'planned', label: 'Planned & Controlled Overtime', nextQuestion: 'cost_saving_methods' },
        { value: 'frequent', label: 'Frequent Overtime Required', nextQuestion: 'cost_saving_methods' },
        { value: 'none', label: 'No Overtime System', nextQuestion: 'cost_saving_methods' },
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
        { value: 'attendance', label: 'Attendance & Time Tracking', nextQuestion: 'analytics' },
        { value: 'kpi', label: 'KPIs & Productivity Metrics', nextQuestion: 'analytics' },
        { value: 'supervisor', label: 'Supervisor Reports', nextQuestion: 'analytics' },
        { value: 'software', label: 'HR / ERP Software', nextQuestion: 'analytics' },
      ],
    },

    // ✅ NEW SECTION
    {
      key: 'analytics',
      text: 'Do you use workforce analytics for decision making?',
      type: 'single',
      options: [
        { value: 'advanced', label: 'Advanced Data Analytics', nextQuestion: 'compliance' },
        { value: 'basic', label: 'Basic Reports Only', nextQuestion: 'compliance' },
        { value: 'none', label: 'No Analytics Used', nextQuestion: 'compliance' },
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
        { value: 'data_driven', label: 'Data-Driven Workforce Decisions' },
      ],
    },
  ],
},

/*
┌─────────────────────────┐
│      story_novel        │
└─────────────────────────┘
*/


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
        { value: 'income', label: 'Earn Income from Writing', nextQuestion: 'writing_format' },
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
        { value: 'novella', label: 'Novella', nextQuestion: 'genre' }, // ✅ NEW
        { value: 'web_novel', label: 'Web Novel / Online Series', nextQuestion: 'genre' },
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
        { value: 'historical', label: 'Historical Fiction', nextQuestion: 'audience' }, // ✅ NEW
        { value: 'mythology', label: 'Mythology / Folklore', nextQuestion: 'audience' }, // ✅ NEW
        { value: 'motivational', label: 'Inspirational / Motivational', nextQuestion: 'audience' },
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
        { value: 'niche', label: 'Specific Niche Audience', nextQuestion: 'language' },
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
        { value: 'regional', label: 'Other Regional Language', nextQuestion: 'experience' },
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
        { value: 'published', label: 'Previously Published Author', nextQuestion: 'writing_style' }, 
      ],
    },

{
      key: 'writing_style',
      text: 'What writing style do you prefer?',
      type: 'single',
      options: [
        { value: 'simple', label: 'Simple & Easy Language', nextQuestion: 'story_structure' },
        { value: 'descriptive', label: 'Detailed & Descriptive', nextQuestion: 'story_structure' },
        { value: 'dialogue', label: 'Dialogue Driven', nextQuestion: 'story_structure' },
        { value: 'poetic', label: 'Poetic / Artistic', nextQuestion: 'story_structure' },
        { value: 'fast_paced', label: 'Fast-Paced & Engaging', nextQuestion: 'story_structure' }, // ✅ NEW
      ],
    },

    // ✅ NEW STRUCTURE SECTION
    {
      key: 'story_structure',
      text: 'How do you want to structure your story?',
      type: 'single',
      options: [
        { value: 'three_act', label: 'Three-Act Structure', nextQuestion: 'inspiration' },
        { value: 'hero_journey', label: 'Hero’s Journey', nextQuestion: 'inspiration' },
        { value: 'non_linear', label: 'Non-Linear Narrative', nextQuestion: 'inspiration' },
        { value: 'episodic', label: 'Episodic Format', nextQuestion: 'inspiration' },
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
        { value: 'history', label: 'History & Culture', nextQuestion: 'writing_habit' },
      ],
    },

    {
      key: 'writing_habit',
      text: 'How often can you dedicate time to writing?',
      type: 'single',
      options: [
        { value: 'daily', label: 'Daily Writing Practice', nextQuestion: 'publishing_goal' },
        { value: 'weekly', label: 'Weekly Writing Sessions', nextQuestion: 'publishing_goal' },
        { value: 'flexible', label: 'Flexible Schedule', nextQuestion: 'publishing_goal' },
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
        
        { value: 'adaptation', label: 'Adapt for Film / Web Series' }, // ✅ NEW
        { value: 'competition', label: 'Submit to Writing Competitions' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│     ladies_caring       │
└─────────────────────────┘
*/


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
        { value: 'career_support', label: 'Career & Personal Growth Support', nextQuestion: 'age_group' },
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
        { value: 'all', label: 'All Age Groups', nextQuestion: 'daily_care' },
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
        { value: 'skin', label: 'Skin & Beauty Care', nextQuestion: 'health_topics' },
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
        { value: 'pcos', label: 'PCOS / PCOD Awareness', nextQuestion: 'mental_care' }, // ✅ NEW
        { value: 'menopause', label: 'Menopause Care', nextQuestion: 'mental_care' },
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
        { value: 'anxiety', label: 'Anxiety & Emotional Stability', nextQuestion: 'safety' },
      ],
    },

 {
      key: 'safety',
      text: 'Which safety-related guidance do you need?',
      type: 'single',
      options: [
        { value: 'personal', label: 'Personal Safety Awareness', nextQuestion: 'legal_awareness' },
        { value: 'workplace', label: 'Workplace Safety', nextQuestion: 'legal_awareness' },
        { value: 'travel', label: 'Travel Safety', nextQuestion: 'legal_awareness' },
        { value: 'digital', label: 'Online / Digital Safety', nextQuestion: 'legal_awareness' },
      ],
    },

    // ✅ NEW SECTION
    {
      key: 'legal_awareness',
      text: 'Do you want awareness about women’s legal rights?',
      type: 'single',
      options: [
        { value: 'yes_full', label: 'Yes, Full Legal Rights Guidance', nextQuestion: 'career_life' },
        { value: 'basic', label: 'Basic Awareness Only', nextQuestion: 'career_life' },
        { value: 'no', label: 'Not Required', nextQuestion: 'career_life' },
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
        { value: 'entrepreneur', label: 'Women Entrepreneurship', nextQuestion: 'financial_care' },
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
        { value: 'investment', label: 'Investment & Wealth Building' },
        { value: 'no', label: 'No Financial Guidance Needed' },
      ],
    },

  ],
},

/*
┌─────────────────────────┐
│  interior_design        │
└─────────────────────────┘
*/

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

/*
┌─────────────────────────┐
│          poetry         │
└─────────────────────────┘
*/


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
        { value: 'healing', label: 'Emotional Healing & Therapy', nextQuestion: 'poetry_type' },
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
        { value: 'slam', label: 'Spoken Word / Slam Poetry', nextQuestion: 'poetry_theme' }, // ✅ NEW
        { value: 'sonnet', label: 'Sonnet (Structured Form)', nextQuestion: 'poetry_theme' },
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
        { value: 'social', label: 'Social Issues & Society', nextQuestion: 'language_choice' }, // ✅ NEW
        { value: 'spiritual', label: 'Spirituality & Philosophy', nextQuestion: 'language_choice' },
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
        { value: 'regional', label: 'Other Regional Language', nextQuestion: 'experience_level' },
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
        { value: 'minimal', label: 'Minimalistic & Short Lines', nextQuestion: 'learning_goal' },
      ],
    },

     {
      key: 'learning_goal',
      text: 'What do you want to learn in poetry?',
      type: 'single',
      options: [
        { value: 'vocabulary', label: 'Improve Vocabulary', nextQuestion: 'performance_interest' },
        { value: 'imagery', label: 'Imagery & Metaphors', nextQuestion: 'performance_interest' },
        { value: 'rhythm', label: 'Rhythm & Flow', nextQuestion: 'performance_interest' },
        { value: 'emotion', label: 'Expressing Emotions Better', nextQuestion: 'performance_interest' },
        { value: 'structure', label: 'Poetic Structure & Forms', nextQuestion: 'performance_interest' }, // ✅ NEW
      ],
    },

    // ✅ NEW SECTION
    {
      key: 'performance_interest',
      text: 'Are you interested in performing your poetry?',
      type: 'single',
      options: [
        { value: 'yes_stage', label: 'Yes, Open Mic / Stage', nextQuestion: 'sharing_platform' },
        { value: 'online_video', label: 'Yes, YouTube / Instagram Reels', nextQuestion: 'sharing_platform' },
        { value: 'no', label: 'No, Only Writing', nextQuestion: 'sharing_platform' },
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
        { value: 'competitions', label: 'Poetry Competitions', nextQuestion: 'final_expectation' }, 
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
        { value: 'recognition', label: 'Recognition & Fame' },
        { value: 'all', label: 'All of the Above' },
      ],
    },

  ],
},


{
  key: 'gym',
  name: 'Gym & Fitness',
  icon: 'Dumbbell',
  description: 'Gym training, body transformation, strength building, and diet planning',
  questions: [

    /* ====================== 1️⃣ FITNESS GOAL ====================== */
    {
      key: 'fitness_goal',
      text: 'What is your main fitness goal?',
      type: 'single',
      options: [
        { value: 'bulk', label: 'Bulk (Muscle Gain)', nextQuestion: 'experience_level' },
        { value: 'cut', label: 'Cut (Fat Loss)', nextQuestion: 'experience_level' },
        { value: 'fit', label: 'Stay Fit & Active', nextQuestion: 'experience_level' },
        { value: 'strength', label: 'Increase Strength', nextQuestion: 'experience_level' },
        { value: 'endurance', label: 'Improve Stamina & Endurance', nextQuestion: 'experience_level' },
        { value: 'weight_loss', label: 'Weight Loss', nextQuestion: 'experience_level' },
        { value: 'weight_gain', label: 'Healthy Weight Gain', nextQuestion: 'experience_level' },
      ],
    },

    /* ====================== 2️⃣ EXPERIENCE LEVEL ====================== */
    {
      key: 'experience_level',
      text: 'What is your gym experience level?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner (0–3 months)', nextQuestion: 'gym_type' },
        { value: 'intermediate', label: 'Intermediate (3–12 months)', nextQuestion: 'gym_type' },
        { value: 'advanced', label: 'Advanced (1+ years)', nextQuestion: 'gym_type' },
      ],
    },

    /* ====================== 3️⃣ GYM TYPE ====================== */
    {
      key: 'gym_type',
      text: 'Which type of training do you prefer?',
      type: 'single',
      options: [
        { value: 'weight_training', label: 'Weight Training (Machines & Free Weights)', nextQuestion: 'training_split' },
        { value: 'crossfit', label: 'CrossFit', nextQuestion: 'training_split' },
        { value: 'calisthenics', label: 'Calisthenics / Bodyweight Training', nextQuestion: 'training_split' },
        { value: 'cardio', label: 'Cardio Focused Training', nextQuestion: 'training_split' },
        { value: 'functional', label: 'Functional Training', nextQuestion: 'training_split' },
        { value: 'powerlifting', label: 'Powerlifting', nextQuestion: 'training_split' },
        { value: 'home_workout', label: 'Home Workouts', nextQuestion: 'training_split' },
      ],
    },

    /* ====================== 4️⃣ TRAINING SPLIT ====================== */
    {
      key: 'training_split',
      text: 'How many days per week can you train?',
      type: 'single',
      options: [
        { value: '3_days', label: '3 Days', nextQuestion: 'diet_preference' },
        { value: '4_days', label: '4 Days', nextQuestion: 'diet_preference' },
        { value: '5_days', label: '5 Days', nextQuestion: 'diet_preference' },
        { value: '6_days', label: '6 Days', nextQuestion: 'diet_preference' },
      ],
    },

    /* ====================== 5️⃣ DIET PREFERENCE ====================== */
    {
      key: 'diet_preference',
      text: 'What is your diet preference?',
      type: 'single',
      options: [
        { value: 'veg', label: 'Vegetarian', nextQuestion: 'calorie_level' },
        { value: 'nonveg', label: 'Non-Vegetarian', nextQuestion: 'calorie_level' },
        { value: 'vegan', label: 'Vegan', nextQuestion: 'calorie_level' },
        { value: 'mixed', label: 'Mixed Diet', nextQuestion: 'calorie_level' },
      ],
    },

    /* ====================== 6️⃣ CALORIE PLAN ====================== */
    {
      key: 'calorie_level',
      text: 'What type of calorie plan do you need?',
      type: 'single',
      options: [
        { value: 'surplus', label: 'Calorie Surplus (For Bulking)', nextQuestion: 'protein_need' },
        { value: 'deficit', label: 'Calorie Deficit (For Cutting)', nextQuestion: 'protein_need' },
        { value: 'maintenance', label: 'Maintenance Calories (Stay Fit)', nextQuestion: 'protein_need' },
      ],
    },

    /* ====================== 7️⃣ PROTEIN REQUIREMENT ====================== */
    {
      key: 'protein_need',
      text: 'Do you want help calculating protein intake?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, Calculate per Body Weight', nextQuestion: 'supplements' },
        { value: 'no', label: 'No, Basic Guidance Only', nextQuestion: 'supplements' },
      ],
    },

    /* ====================== 8️⃣ SUPPLEMENTS ====================== */
    {
      key: 'supplements',
      text: 'Are you interested in supplements?',
      type: 'single',
      options: [
        { value: 'whey', label: 'Whey Protein', nextQuestion: 'health_condition' },
        { value: 'creatine', label: 'Creatine', nextQuestion: 'health_condition' },
        { value: 'multivitamin', label: 'Multivitamins', nextQuestion: 'health_condition' },
        { value: 'mass_gainer', label: 'Mass Gainer', nextQuestion: 'health_condition' },
        { value: 'no', label: 'No Supplements', nextQuestion: 'health_condition' },
      ],
    },

    /* ====================== 9️⃣ HEALTH CONDITION ====================== */
    {
      key: 'health_condition',
      text: 'Do you have any health conditions?',
      type: 'single',
      options: [
        { value: 'none', label: 'No Health Issues', nextQuestion: 'final_expectation' },
        { value: 'back_pain', label: 'Back / Joint Pain', nextQuestion: 'final_expectation' },
        { value: 'bp', label: 'High / Low Blood Pressure', nextQuestion: 'final_expectation' },
        { value: 'diabetes', label: 'Diabetes', nextQuestion: 'final_expectation' },
        { value: 'obesity', label: 'Obesity', nextQuestion: 'final_expectation' },
      ],
    },

    /* ====================== 🔟 FINAL EXPECTATION ====================== */
    {
      key: 'final_expectation',
      text: 'What result do you expect?',
      type: 'single',
      options: [
        { value: 'aesthetic', label: 'Aesthetic Physique' },
        { value: 'athletic', label: 'Athletic Body' },
        { value: 'strong', label: 'Strong & Powerful' },
        { value: 'healthy', label: 'Healthy Lifestyle' },
        { value: 'confidence', label: 'Confidence Boost' },
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
