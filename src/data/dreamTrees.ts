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



  {
    key: 'opportunity',
    name: 'Opportunity Discovery',
    icon: 'Search',
    description: 'Finding and evaluating opportunities',
    questions: [
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
      {
        key: 'field_preference',
        text: 'Which field interests you most?',
        type: 'text',
      },
      {
        key: 'investment_capacity',
        text: 'What is your investment capacity?',
        type: 'single',
        options: [
          { value: 'low', label: 'Low (under 1 lakh)' },
          { value: 'medium', label: 'Medium (1-5 lakhs)' },
          { value: 'high', label: 'High (above 5 lakhs)' },
        ],
      },
      {
        key: 'education_level',
        text: 'What level of education?',
        type: 'single',
        options: [
          { value: 'school', label: 'School Level' },
          { value: 'undergraduate', label: 'Undergraduate' },
          { value: 'postgraduate', label: 'Postgraduate' },
        ],
      },
      {
        key: 'skill_area',
        text: 'What skill area interests you?',
        type: 'text',
      },
    ],
  },
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
      {
        key: 'training_field',
        text: 'What field do you want to develop skills in?',
        type: 'single',
        options: [
          { value: 'technical', label: 'Technical Skills (IT/Programming)', nextQuestion: 'specific_skill' },
          { value: 'soft_skills', label: 'Soft Skills (Communication/Leadership)', nextQuestion: 'specific_skill' },
          { value: 'vocational', label: 'Vocational Skills (Trades)', nextQuestion: 'specific_skill' },
          { value: 'creative', label: 'Creative Skills (Design/Arts)', nextQuestion: 'specific_skill' },
        ],
      },
      {
        key: 'specific_skill',
        text: 'Please specify the skill you want to develop',
        type: 'text',
        nextQuestion: 'learning_commitment',
      },
      {
        key: 'learning_commitment',
        text: 'How many hours per week can you dedicate?',
        type: 'number',
        validation: { min: 1, max: 40 },
      },
    ],
  },


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
        text: 'What type of land?',
        type: 'single',
        options: [
          { value: 'agricultural', label: 'Agricultural Land' },
          { value: 'garden', label: 'Garden/Landscaping' },
          { value: 'commercial', label: 'Commercial Property' },
        ],
      },
      {
        key: 'current_problem',
        text: 'What is the current problem?',
        type: 'text',
      },
      {
        key: 'education_bg',
        text: 'What is your educational background?',
        type: 'single',
        options: [
          { value: 'engineering', label: 'Engineering' },
          { value: 'agriculture', label: 'Agriculture' },
          { value: 'other', label: 'Other' },
        ],
      },
    ],
  },
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
          { value: 'landscaping', label: 'Landscaping/Garden Design', nextQuestion: 'design_experience' },
          { value: 'floriculture', label: 'Floriculture (Flower Cultivation)', nextQuestion: 'business_intent' },
          { value: 'nursery', label: 'Plant Nursery Business', nextQuestion: 'business_intent' },
        ],
      },
      {
        key: 'crop_type',
        text: 'Which crops interest you?',
        type: 'single',
        options: [
          { value: 'fruits', label: 'Fruits', nextQuestion: 'business_intent' },
          { value: 'vegetables', label: 'Vegetables', nextQuestion: 'business_intent' },
          { value: 'flowers', label: 'Flowers', nextQuestion: 'business_intent' },
        ],
      },
      {
        key: 'design_experience',
        text: 'Do you have design experience?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes', nextQuestion: 'business_intent' },
          { value: 'no', label: 'No, need training', nextQuestion: 'business_intent' },
        ],
      },
      {
        key: 'business_intent',
        text: 'Are you planning this as a business?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes, business venture' },
          { value: 'job', label: 'No, looking for job/career' },
          { value: 'hobby', label: 'Hobby/Personal interest' },
        ],
      },
    ],
  },
  {
    key: 'ai',
    name: 'Artificial Intelligence',
    icon: 'Brain',
    description: 'AI and machine learning careers',
    questions: [
      {
        key: 'ai_role',
        text: 'What role interests you in AI?',
        type: 'single',
        options: [
          { value: 'ml_engineer', label: 'Machine Learning Engineer', nextQuestion: 'programming_skills' },
          { value: 'data_scientist', label: 'Data Scientist', nextQuestion: 'programming_skills' },
          { value: 'ai_researcher', label: 'AI Researcher', nextQuestion: 'programming_skills' },
          { value: 'ai_consultant', label: 'AI Consultant/Implementation', nextQuestion: 'programming_skills' },
        ],
      },
      {
        key: 'programming_skills',
        text: 'What is your programming skill level?',
        type: 'single',
        options: [
          { value: 'advanced', label: 'Advanced (Python, frameworks)', nextQuestion: 'math_background' },
          { value: 'intermediate', label: 'Intermediate, learning AI/ML', nextQuestion: 'math_background' },
          { value: 'beginner', label: 'Beginner, need to start', nextQuestion: 'math_background' },
        ],
      },
      {
        key: 'math_background',
        text: 'How strong is your mathematics background?',
        type: 'single',
        options: [
          { value: 'strong', label: 'Strong (Statistics, Linear Algebra)' },
          { value: 'moderate', label: 'Moderate, willing to learn' },
          { value: 'weak', label: 'Weak, need foundation' },
        ],
      },
    ],
  },
  {
    key: 'design',
    name: '2D & 3D Design',
    icon: 'Palette',
    description: 'Digital design and modeling',
    questions: [
      {
        key: 'design_type',
        text: 'Which design field interests you?',
        type: 'single',
        options: [
          { value: '2d_graphic', label: '2D Graphic Design', nextQuestion: 'design_software' },
          { value: '3d_modeling', label: '3D Modeling', nextQuestion: 'design_software' },
          { value: 'animation', label: 'Animation', nextQuestion: 'design_software' },
          { value: 'ui_ux', label: 'UI/UX Design', nextQuestion: 'design_software' },
          { value: 'game_design', label: 'Game Design', nextQuestion: 'design_software' },
        ],
      },
      {
        key: 'design_software',
        text: 'Do you have experience with design software?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes (Adobe/Blender/etc)', nextQuestion: 'career_goal' },
          { value: 'learning', label: 'Currently learning', nextQuestion: 'career_goal' },
          { value: 'no', label: 'No experience yet', nextQuestion: 'career_goal' },
        ],
      },
      {
        key: 'career_goal',
        text: 'What is your career goal?',
        type: 'single',
        options: [
          { value: 'freelance', label: 'Freelance Designer' },
          { value: 'job', label: 'Full-time Job' },
          { value: 'business', label: 'Design Studio/Business' },
        ],
      },
    ],
  },
  {
    key: 'business',
    name: 'Business',
    icon: 'Store',
    description: 'Entrepreneurship and business ventures',
    questions: [
      {
        key: 'business_type',
        text: 'What type of business interests you?',
        type: 'single',
        options: [
          { value: 'home_based', label: 'Home-based Business', nextQuestion: 'home_business_idea' },
          { value: 'network_marketing', label: 'Network Marketing', nextQuestion: 'sales_comfort' },
          { value: 'sustainable', label: 'Sustainable/Social Enterprise', nextQuestion: 'sustainability_focus' },
          { value: 'traditional', label: 'Traditional Business', nextQuestion: 'investment_range' },
        ],
      },
      {
        key: 'home_business_idea',
        text: 'What home-based business idea interests you?',
        type: 'single',
        options: [
          { value: 'online', label: 'Online Business (E-commerce/Services)', nextQuestion: 'investment_range' },
          { value: 'food', label: 'Food Business', nextQuestion: 'investment_range' },
          { value: 'crafts', label: 'Crafts/Handmade Products', nextQuestion: 'investment_range' },
          { value: 'consulting', label: 'Consulting/Coaching', nextQuestion: 'investment_range' },
        ],
      },
      {
        key: 'sales_comfort',
        text: 'Are you comfortable with sales and networking?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes, confident in sales', nextQuestion: 'investment_range' },
          { value: 'learning', label: 'Willing to learn', nextQuestion: 'investment_range' },
          { value: 'no', label: 'No, prefer other business models', nextQuestion: 'investment_range' },
        ],
      },
      {
        key: 'sustainability_focus',
        text: 'What sustainability focus?',
        type: 'single',
        options: [
          { value: 'environment', label: 'Environmental', nextQuestion: 'investment_range' },
          { value: 'social', label: 'Social Impact', nextQuestion: 'investment_range' },
          { value: 'both', label: 'Both', nextQuestion: 'investment_range' },
        ],
      },
      {
        key: 'investment_range',
        text: 'What is your investment capacity?',
        type: 'single',
        options: [
          { value: 'minimal', label: 'Minimal (under 50k)' },
          { value: 'moderate', label: 'Moderate (50k - 5 lakhs)' },
          { value: 'substantial', label: 'Substantial (above 5 lakhs)' },
        ],
      },
    ],
  },
  {
    key: 'personal_dev',
    name: 'Personal Development Programs',
    icon: 'Target',
    description: 'Self-improvement and personal growth',
    questions: [
      {
        key: 'development_area',
        text: 'Which area do you want to develop?',
        type: 'single',
        options: [
          { value: 'confidence', label: 'Self-Confidence', nextQuestion: 'commitment_level' },
          { value: 'public_speaking', label: 'Public Speaking', nextQuestion: 'commitment_level' },
          { value: 'personality', label: 'Personality Development', nextQuestion: 'commitment_level' },
          { value: 'stress', label: 'Stress Management', nextQuestion: 'commitment_level' },
          { value: 'relationships', label: 'Relationship Skills', nextQuestion: 'commitment_level' },
        ],
      },
      {
        key: 'commitment_level',
        text: 'How committed are you to this development?',
        type: 'single',
        options: [
          { value: 'high', label: 'Highly committed' },
          { value: 'moderate', label: 'Moderately committed' },
          { value: 'exploring', label: 'Just exploring' },
        ],
      },
    ],
  },
  {
    key: 'dress_selection',
    name: 'Dress Selection',
    icon: 'Shirt',
    description: 'Fashion consulting and styling',
    questions: [
      {
        key: 'interest_type',
        text: 'What is your interest in dress selection?',
        type: 'single',
        options: [
          { value: 'personal', label: 'Personal Styling Guidance', nextQuestion: 'occasion_type' },
          { value: 'career', label: 'Career as Fashion Consultant', nextQuestion: 'fashion_background' },
          { value: 'business', label: 'Fashion Business', nextQuestion: 'business_model' },
        ],
      },
      {
        key: 'occasion_type',
        text: 'What type of occasions do you need help with?',
        type: 'single',
        options: [
          { value: 'traditional', label: 'Traditional Events (Weddings/Festivals)' },
          { value: 'professional', label: 'Professional/Corporate' },
          { value: 'casual', label: 'Casual/Daily Wear' },
          { value: 'all', label: 'All Occasions' },
        ],
      },
      {
        key: 'fashion_background',
        text: 'Do you have fashion education or experience?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes, formal education/experience' },
          { value: 'self_taught', label: 'Self-taught, passionate' },
          { value: 'no', label: 'No, want to start' },
        ],
      },
      {
        key: 'business_model',
        text: 'What business model interests you?',
        type: 'single',
        options: [
          { value: 'boutique', label: 'Boutique/Store' },
          { value: 'online', label: 'Online Fashion Store' },
          { value: 'styling', label: 'Styling Services' },
        ],
      },
    ],
  },
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
