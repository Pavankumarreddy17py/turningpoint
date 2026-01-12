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
  {
    key: 'education',
    name: 'Education',
    icon: 'GraduationCap',
    description: 'Academic and learning goals',
    questions: [
      {
        key: 'education_level',
        text: 'What level of education are you interested in?',
        type: 'single',
        options: [
          { value: 'school', label: 'School Education', nextQuestion: 'school_focus' },
          { value: 'undergraduate', label: 'Undergraduate (Degree/B.Tech)', nextQuestion: 'ug_field' },
          { value: 'postgraduate', label: 'Postgraduate (Masters/MBA)', nextQuestion: 'pg_field' },
          { value: 'research', label: 'Research/PhD', nextQuestion: 'research_field' },
        ],
      },
      {
        key: 'school_focus',
        text: 'Which stream are you most interested in?',
        type: 'single',
        options: [
          { value: 'science', label: 'Science (PCM/PCB)', nextQuestion: 'study_hours' },
          { value: 'commerce', label: 'Commerce', nextQuestion: 'study_hours' },
          { value: 'arts', label: 'Arts/Humanities', nextQuestion: 'study_hours' },
        ],
      },
      {
        key: 'ug_field',
        text: 'Which field interests you most?',
        type: 'single',
        options: [
          { value: 'engineering', label: 'Engineering', nextQuestion: 'study_hours' },
          { value: 'medicine', label: 'Medicine', nextQuestion: 'study_hours' },
          { value: 'business', label: 'Business/Commerce', nextQuestion: 'study_hours' },
          { value: 'science', label: 'Pure Sciences', nextQuestion: 'study_hours' },
          { value: 'arts', label: 'Arts/Humanities', nextQuestion: 'study_hours' },
        ],
      },
      {
        key: 'pg_field',
        text: 'What specialization are you considering?',
        type: 'text',
        nextQuestion: 'study_hours',
      },
      {
        key: 'research_field',
        text: 'What research area interests you?',
        type: 'text',
        nextQuestion: 'study_hours',
      },
      {
        key: 'study_hours',
        text: 'How many hours per day can you dedicate to studying?',
        type: 'number',
        validation: { min: 1, max: 16 },
        nextQuestion: 'financial_constraint',
      },
      {
        key: 'financial_constraint',
        text: 'Do you have financial constraints for education?',
        type: 'single',
        options: [
          { value: 'no', label: 'No financial constraints' },
          { value: 'moderate', label: 'Some constraints, need affordable options' },
          { value: 'significant', label: 'Significant constraints, need scholarships' },
        ],
      },
    ],
  },
  {
    key: 'sports',
    name: 'Sports',
    icon: 'Trophy',
    description: 'Athletic and sports career',
    questions: [
      {
        key: 'sport_type',
        text: 'Which sport are you interested in?',
        type: 'single',
        options: [
          { value: 'cricket', label: 'Cricket', nextQuestion: 'cricket_role' },
          { value: 'football', label: 'Football', nextQuestion: 'football_position' },
          { value: 'badminton', label: 'Badminton', nextQuestion: 'singles_doubles' },
          { value: 'tennis', label: 'Tennis', nextQuestion: 'singles_doubles' },
          { value: 'athletics', label: 'Athletics', nextQuestion: 'athletics_event' },
          { value: 'other', label: 'Other Sport', nextQuestion: 'sport_name' },
        ],
      },
      {
        key: 'cricket_role',
        text: 'What role do you want to play?',
        type: 'single',
        options: [
          { value: 'batter', label: 'Batter', nextQuestion: 'batting_hand' },
          { value: 'bowler', label: 'Bowler', nextQuestion: 'bowling_hand' },
          { value: 'allrounder', label: 'All-rounder', nextQuestion: 'batting_hand' },
          { value: 'wicketkeeper', label: 'Wicket-keeper', nextQuestion: 'batting_hand' },
        ],
      },
      {
        key: 'batting_hand',
        text: 'Which hand do you bat with?',
        type: 'single',
        options: [
          { value: 'right', label: 'Right-handed', nextQuestion: 'practice_hours' },
          { value: 'left', label: 'Left-handed', nextQuestion: 'practice_hours' },
        ],
      },
      {
        key: 'bowling_hand',
        text: 'Which arm do you bowl with?',
        type: 'single',
        options: [
          { value: 'right_fast', label: 'Right-arm Fast', nextQuestion: 'practice_hours' },
          { value: 'left_fast', label: 'Left-arm Fast', nextQuestion: 'practice_hours' },
          { value: 'right_spin', label: 'Right-arm Spin', nextQuestion: 'practice_hours' },
          { value: 'left_spin', label: 'Left-arm Spin', nextQuestion: 'practice_hours' },
        ],
      },
      {
        key: 'football_position',
        text: 'What position do you prefer?',
        type: 'single',
        options: [
          { value: 'goalkeeper', label: 'Goalkeeper', nextQuestion: 'practice_hours' },
          { value: 'defender', label: 'Defender', nextQuestion: 'practice_hours' },
          { value: 'midfielder', label: 'Midfielder', nextQuestion: 'practice_hours' },
          { value: 'forward', label: 'Forward/Striker', nextQuestion: 'practice_hours' },
        ],
      },
      {
        key: 'singles_doubles',
        text: 'Do you prefer singles or doubles?',
        type: 'single',
        options: [
          { value: 'singles', label: 'Singles', nextQuestion: 'practice_hours' },
          { value: 'doubles', label: 'Doubles', nextQuestion: 'practice_hours' },
          { value: 'both', label: 'Both', nextQuestion: 'practice_hours' },
        ],
      },
      {
        key: 'athletics_event',
        text: 'Which athletics event?',
        type: 'single',
        options: [
          { value: 'sprint', label: 'Sprint (100m, 200m, 400m)', nextQuestion: 'practice_hours' },
          { value: 'distance', label: 'Long Distance (800m+)', nextQuestion: 'practice_hours' },
          { value: 'jump', label: 'Jumping Events', nextQuestion: 'practice_hours' },
          { value: 'throw', label: 'Throwing Events', nextQuestion: 'practice_hours' },
        ],
      },
      {
        key: 'sport_name',
        text: 'Please specify the sport you are interested in',
        type: 'text',
        nextQuestion: 'practice_hours',
      },
      {
        key: 'practice_hours',
        text: 'How many hours can you practice daily?',
        type: 'number',
        validation: { min: 1, max: 12 },
        nextQuestion: 'fitness_level',
      },
      {
        key: 'fitness_level',
        text: 'How would you rate your current fitness level?',
        type: 'single',
        options: [
          { value: 'beginner', label: 'Beginner', nextQuestion: 'coaching_access' },
          { value: 'intermediate', label: 'Intermediate', nextQuestion: 'coaching_access' },
          { value: 'advanced', label: 'Advanced', nextQuestion: 'coaching_access' },
        ],
      },
      {
        key: 'coaching_access',
        text: 'Do you have access to professional coaching?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes, I have regular coaching', nextQuestion: 'injuries' },
          { value: 'limited', label: 'Limited access', nextQuestion: 'injuries' },
          { value: 'no', label: 'No access currently', nextQuestion: 'injuries' },
        ],
      },
      {
        key: 'injuries',
        text: 'Do you have any existing injuries or health concerns?',
        type: 'single',
        options: [
          { value: 'none', label: 'No injuries' },
          { value: 'minor', label: 'Minor issues, manageable' },
          { value: 'major', label: 'Major concerns that need addressing' },
        ],
      },
    ],
  },
  {
    key: 'health',
    name: 'Health',
    icon: 'Heart',
    description: 'Healthcare and wellness careers',
    questions: [
      {
        key: 'health_field',
        text: 'Which area of healthcare interests you?',
        type: 'single',
        options: [
          { value: 'doctor', label: 'Doctor (MBBS/MD)', nextQuestion: 'medical_specialization' },
          { value: 'nursing', label: 'Nursing', nextQuestion: 'study_commitment' },
          { value: 'pharmacy', label: 'Pharmacy', nextQuestion: 'study_commitment' },
          { value: 'physiotherapy', label: 'Physiotherapy', nextQuestion: 'study_commitment' },
          { value: 'nutrition', label: 'Nutrition/Dietetics', nextQuestion: 'study_commitment' },
          { value: 'alternative', label: 'Alternative Medicine (Ayurveda/Homeopathy)', nextQuestion: 'study_commitment' },
        ],
      },
      {
        key: 'medical_specialization',
        text: 'Are you interested in any specific specialization?',
        type: 'single',
        options: [
          { value: 'general', label: 'General Practice', nextQuestion: 'study_commitment' },
          { value: 'surgery', label: 'Surgery', nextQuestion: 'study_commitment' },
          { value: 'pediatrics', label: 'Pediatrics', nextQuestion: 'study_commitment' },
          { value: 'cardiology', label: 'Cardiology', nextQuestion: 'study_commitment' },
          { value: 'other', label: 'Other Specialization', nextQuestion: 'study_commitment' },
        ],
      },
      {
        key: 'study_commitment',
        text: 'Are you ready for intensive study (10-15 years for doctors)?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes, fully committed' },
          { value: 'unsure', label: 'Unsure, need more information' },
          { value: 'prefer_shorter', label: 'Prefer shorter duration programs' },
        ],
      },
    ],
  },
  {
    key: 'yoga',
    name: 'Yoga',
    icon: 'User',
    description: 'Yoga instruction and wellness',
    questions: [
      {
        key: 'yoga_path',
        text: 'What aspect of yoga interests you?',
        type: 'single',
        options: [
          { value: 'instructor', label: 'Becoming a Yoga Instructor', nextQuestion: 'yoga_style' },
          { value: 'therapy', label: 'Yoga Therapy', nextQuestion: 'therapy_focus' },
          { value: 'personal', label: 'Personal Practice & Wellness', nextQuestion: 'practice_level' },
        ],
      },
      {
        key: 'yoga_style',
        text: 'Which yoga style interests you most?',
        type: 'single',
        options: [
          { value: 'hatha', label: 'Hatha Yoga', nextQuestion: 'practice_level' },
          { value: 'ashtanga', label: 'Ashtanga Yoga', nextQuestion: 'practice_level' },
          { value: 'vinyasa', label: 'Vinyasa Flow', nextQuestion: 'practice_level' },
          { value: 'iyengar', label: 'Iyengar Yoga', nextQuestion: 'practice_level' },
          { value: 'power', label: 'Power Yoga', nextQuestion: 'practice_level' },
        ],
      },
      {
        key: 'therapy_focus',
        text: 'What therapeutic area interests you?',
        type: 'single',
        options: [
          { value: 'chronic', label: 'Chronic Pain Management', nextQuestion: 'practice_level' },
          { value: 'mental', label: 'Mental Health & Stress', nextQuestion: 'practice_level' },
          { value: 'rehabilitation', label: 'Physical Rehabilitation', nextQuestion: 'practice_level' },
        ],
      },
      {
        key: 'practice_level',
        text: 'What is your current yoga practice level?',
        type: 'single',
        options: [
          { value: 'beginner', label: 'Beginner', nextQuestion: 'time_commitment' },
          { value: 'intermediate', label: 'Intermediate (1-2 years)', nextQuestion: 'time_commitment' },
          { value: 'advanced', label: 'Advanced (3+ years)', nextQuestion: 'time_commitment' },
        ],
      },
      {
        key: 'time_commitment',
        text: 'How much time can you dedicate daily?',
        type: 'number',
        validation: { min: 1, max: 8 },
      },
    ],
  },
  {
    key: 'life_skills',
    name: 'Life Skills',
    icon: 'Lightbulb',
    description: 'Personal development and life skills training',
    questions: [
      {
        key: 'skill_area',
        text: 'Which life skill do you want to develop or teach?',
        type: 'single',
        options: [
          { value: 'communication', label: 'Communication Skills', nextQuestion: 'goal_type' },
          { value: 'leadership', label: 'Leadership & Management', nextQuestion: 'goal_type' },
          { value: 'time_management', label: 'Time Management', nextQuestion: 'goal_type' },
          { value: 'emotional', label: 'Emotional Intelligence', nextQuestion: 'goal_type' },
          { value: 'financial', label: 'Financial Literacy', nextQuestion: 'goal_type' },
        ],
      },
      {
        key: 'goal_type',
        text: 'What is your goal?',
        type: 'single',
        options: [
          { value: 'personal', label: 'Personal Development' },
          { value: 'teach', label: 'Teach/Train Others' },
          { value: 'both', label: 'Both Personal & Teaching' },
        ],
      },
    ],
  },
  {
    key: 'insurance',
    name: 'Term / Health Insurance',
    icon: 'Shield',
    description: 'Insurance career and advisory',
    questions: [
      {
        key: 'insurance_role',
        text: 'What role interests you in insurance?',
        type: 'single',
        options: [
          { value: 'agent', label: 'Insurance Agent/Advisor', nextQuestion: 'insurance_type' },
          { value: 'underwriter', label: 'Underwriter', nextQuestion: 'insurance_type' },
          { value: 'claims', label: 'Claims Processing', nextQuestion: 'insurance_type' },
          { value: 'actuary', label: 'Actuary', nextQuestion: 'math_background' },
        ],
      },
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
      {
        key: 'math_background',
        text: 'Do you have a strong mathematics background?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes, strong in mathematics' },
          { value: 'moderate', label: 'Moderate, willing to learn' },
          { value: 'no', label: 'No, prefer non-technical roles' },
        ],
      },
      {
        key: 'sales_experience',
        text: 'Do you have sales or client interaction experience?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes, I have experience' },
          { value: 'no', label: 'No, but willing to learn' },
        ],
      },
    ],
  },
  {
    key: 'job',
    name: 'Job',
    icon: 'Briefcase',
    description: 'Government and private sector jobs',
    questions: [
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
      {
        key: 'gov_level',
        text: 'Which level of government job?',
        type: 'single',
        options: [
          { value: 'central', label: 'Central Government (UPSC/SSC)', nextQuestion: 'exam_prep' },
          { value: 'state', label: 'State Government', nextQuestion: 'exam_prep' },
          { value: 'psu', label: 'Public Sector Units (PSU)', nextQuestion: 'exam_prep' },
          { value: 'banking', label: 'Banking (IBPS/SBI)', nextQuestion: 'exam_prep' },
        ],
      },
      {
        key: 'private_field',
        text: 'Which private sector field interests you?',
        type: 'single',
        options: [
          { value: 'it', label: 'IT/Software', nextQuestion: 'technical_skills' },
          { value: 'finance', label: 'Finance/Banking', nextQuestion: 'education_level' },
          { value: 'marketing', label: 'Marketing/Sales', nextQuestion: 'education_level' },
          { value: 'hr', label: 'Human Resources', nextQuestion: 'education_level' },
          { value: 'manufacturing', label: 'Manufacturing/Production', nextQuestion: 'education_level' },
        ],
      },
      {
        key: 'exam_prep',
        text: 'How much time can you dedicate to exam preparation daily?',
        type: 'number',
        validation: { min: 1, max: 12 },
      },
      {
        key: 'technical_skills',
        text: 'Do you have programming or technical skills?',
        type: 'single',
        options: [
          { value: 'yes', label: 'Yes, I have skills' },
          { value: 'learning', label: 'Currently learning' },
          { value: 'no', label: 'No, need to start' },
        ],
      },
      {
        key: 'education_level',
        text: 'What is your education level?',
        type: 'single',
        options: [
          { value: 'intermediate', label: 'Intermediate/12th' },
          { value: 'degree', label: 'Degree/Graduation' },
          { value: 'postgrad', label: 'Post-graduation' },
        ],
      },
    ],
  },
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
          { value: 'recruitment', label: 'Recruitment/Talent Acquisition', nextQuestion: 'hr_experience' },
          { value: 'training', label: 'Training & Development', nextQuestion: 'hr_experience' },
          { value: 'compensation', label: 'Compensation & Benefits', nextQuestion: 'hr_experience' },
          { value: 'relations', label: 'Employee Relations', nextQuestion: 'hr_experience' },
          { value: 'generalist', label: 'HR Generalist', nextQuestion: 'hr_experience' },
        ],
      },
      {
        key: 'hr_experience',
        text: 'Do you have HR experience or relevant education?',
        type: 'single',
        options: [
          { value: 'experienced', label: 'Yes, I have experience' },
          { value: 'education', label: 'Have HR education/MBA' },
          { value: 'neither', label: 'Neither, want to start fresh' },
        ],
      },
    ],
  },
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
          { value: 'management', label: 'Management Consulting', nextQuestion: 'expertise_level' },
          { value: 'financial', label: 'Financial Advisory', nextQuestion: 'expertise_level' },
          { value: 'it', label: 'IT Consulting', nextQuestion: 'expertise_level' },
          { value: 'education', label: 'Education Consulting', nextQuestion: 'expertise_level' },
          { value: 'career', label: 'Career Counseling', nextQuestion: 'expertise_level' },
        ],
      },
      {
        key: 'expertise_level',
        text: 'What is your expertise level in this field?',
        type: 'single',
        options: [
          { value: 'expert', label: 'Expert (5+ years experience)' },
          { value: 'intermediate', label: 'Intermediate (2-5 years)' },
          { value: 'beginner', label: 'Beginner, want to develop expertise' },
        ],
      },
    ],
  },
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
          { value: 'modern', label: 'Modern/Contemporary', nextQuestion: 'modern_style' },
          { value: 'gymnastics', label: 'Gymnastics', nextQuestion: 'gymnastics_type' },
          { value: 'zumba', label: 'Zumba/Fitness Dance', nextQuestion: 'dance_goal' },
        ],
      },
      {
        key: 'classical_form',
        text: 'Which classical dance form?',
        type: 'single',
        options: [
          { value: 'bharatanatyam', label: 'Bharatanatyam', nextQuestion: 'dance_goal' },
          { value: 'kathak', label: 'Kathak', nextQuestion: 'dance_goal' },
          { value: 'kuchipudi', label: 'Kuchipudi', nextQuestion: 'dance_goal' },
          { value: 'odissi', label: 'Odissi', nextQuestion: 'dance_goal' },
          { value: 'other', label: 'Other Classical Form', nextQuestion: 'dance_goal' },
        ],
      },
      {
        key: 'modern_style',
        text: 'Which modern style?',
        type: 'single',
        options: [
          { value: 'contemporary', label: 'Contemporary', nextQuestion: 'dance_goal' },
          { value: 'hiphop', label: 'Hip-hop', nextQuestion: 'dance_goal' },
          { value: 'bollywood', label: 'Bollywood', nextQuestion: 'dance_goal' },
          { value: 'jazz', label: 'Jazz', nextQuestion: 'dance_goal' },
        ],
      },
      {
        key: 'gymnastics_type',
        text: 'Which gymnastics discipline?',
        type: 'single',
        options: [
          { value: 'artistic', label: 'Artistic Gymnastics', nextQuestion: 'dance_goal' },
          { value: 'rhythmic', label: 'Rhythmic Gymnastics', nextQuestion: 'dance_goal' },
          { value: 'acrobatic', label: 'Acrobatic Gymnastics', nextQuestion: 'dance_goal' },
        ],
      },
      {
        key: 'dance_goal',
        text: 'What is your main goal?',
        type: 'single',
        options: [
          { value: 'performer', label: 'Professional Performer', nextQuestion: 'practice_time' },
          { value: 'instructor', label: 'Dance Instructor', nextQuestion: 'practice_time' },
          { value: 'hobby', label: 'Hobby/Fitness', nextQuestion: 'practice_time' },
        ],
      },
      {
        key: 'practice_time',
        text: 'How many hours can you practice daily?',
        type: 'number',
        validation: { min: 1, max: 10 },
      },
    ],
  },
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
          { value: 'nutrition', label: 'Nutrition/Diet Related', nextQuestion: 'issue_duration' },
        ],
      },
      {
        key: 'issue_duration',
        text: 'How long have you been experiencing this?',
        type: 'single',
        options: [
          { value: 'recent', label: 'Recent (less than 3 months)' },
          { value: 'moderate', label: 'Moderate (3-12 months)' },
          { value: 'chronic', label: 'Long-term (more than 1 year)' },
        ],
      },
    ],
  },
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
          { value: 'both', label: 'Both', nextQuestion: 'good_habit_type' },
        ],
      },
      {
        key: 'good_habit_type',
        text: 'Which good habit do you want to build?',
        type: 'single',
        options: [
          { value: 'exercise', label: 'Regular Exercise', nextQuestion: 'commitment_level' },
          { value: 'reading', label: 'Reading Daily', nextQuestion: 'commitment_level' },
          { value: 'meditation', label: 'Meditation/Mindfulness', nextQuestion: 'commitment_level' },
          { value: 'sleep', label: 'Better Sleep Schedule', nextQuestion: 'commitment_level' },
          { value: 'other', label: 'Other Good Habit', nextQuestion: 'commitment_level' },
        ],
      },
      {
        key: 'bad_habit_type',
        text: 'Which bad habit do you want to break?',
        type: 'single',
        options: [
          { value: 'procrastination', label: 'Procrastination', nextQuestion: 'commitment_level' },
          { value: 'phone', label: 'Excessive Phone/Social Media', nextQuestion: 'commitment_level' },
          { value: 'sleep', label: 'Irregular Sleep', nextQuestion: 'commitment_level' },
          { value: 'junk_food', label: 'Junk Food', nextQuestion: 'commitment_level' },
          { value: 'other', label: 'Other Bad Habit', nextQuestion: 'commitment_level' },
        ],
      },
      {
        key: 'commitment_level',
        text: 'How committed are you to making this change?',
        type: 'single',
        options: [
          { value: 'very', label: 'Very committed, ready to start now' },
          { value: 'moderate', label: 'Moderately committed, need support' },
          { value: 'exploring', label: 'Just exploring options' },
        ],
      },
    ],
  },
  {
    key: 'agriculture',
    name: 'Agriculture',
    icon: 'Sprout',
    description: 'Agricultural problems and solutions',
    questions: [
      {
        key: 'ag_focus',
        text: 'What is your focus in agriculture?',
        type: 'single',
        options: [
          { value: 'problems', label: 'Solving Agricultural Problems', nextQuestion: 'problem_type' },
          { value: 'farming', label: 'Starting/Improving Farming', nextQuestion: 'farming_type' },
          { value: 'agribusiness', label: 'Agribusiness/Entrepreneurship', nextQuestion: 'business_type' },
        ],
      },
      {
        key: 'problem_type',
        text: 'What type of problem are you facing?',
        type: 'single',
        options: [
          { value: 'crop', label: 'Crop Yield/Disease', nextQuestion: 'land_size' },
          { value: 'water', label: 'Water/Irrigation Issues', nextQuestion: 'land_size' },
          { value: 'soil', label: 'Soil Quality', nextQuestion: 'land_size' },
          { value: 'market', label: 'Marketing/Selling', nextQuestion: 'land_size' },
        ],
      },
      {
        key: 'farming_type',
        text: 'What type of farming interests you?',
        type: 'single',
        options: [
          { value: 'traditional', label: 'Traditional Farming', nextQuestion: 'land_size' },
          { value: 'organic', label: 'Organic Farming', nextQuestion: 'land_size' },
          { value: 'hydroponics', label: 'Hydroponics/Soilless', nextQuestion: 'land_size' },
          { value: 'livestock', label: 'Livestock/Dairy', nextQuestion: 'land_size' },
        ],
      },
      {
        key: 'business_type',
        text: 'What agribusiness interests you?',
        type: 'single',
        options: [
          { value: 'processing', label: 'Food Processing', nextQuestion: 'land_size' },
          { value: 'supply', label: 'Supply Chain/Distribution', nextQuestion: 'land_size' },
          { value: 'inputs', label: 'Agricultural Inputs (Seeds/Fertilizer)', nextQuestion: 'land_size' },
        ],
      },
      {
        key: 'land_size',
        text: 'How much land do you have access to?',
        type: 'single',
        options: [
          { value: 'small', label: 'Small (less than 2 acres)' },
          { value: 'medium', label: 'Medium (2-10 acres)' },
          { value: 'large', label: 'Large (more than 10 acres)' },
          { value: 'none', label: 'No land yet' },
        ],
      },
    ],
  },
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
          { value: 'guitar', label: 'Guitar', nextQuestion: 'music_goal' },
          { value: 'piano', label: 'Piano/Keyboard', nextQuestion: 'music_goal' },
          { value: 'violin', label: 'Violin', nextQuestion: 'music_goal' },
          { value: 'flute', label: 'Flute', nextQuestion: 'music_goal' },
          { value: 'drums', label: 'Drums', nextQuestion: 'music_goal' },
          { value: 'tabla', label: 'Tabla', nextQuestion: 'music_goal' },
          { value: 'harmonium', label: 'Harmonium', nextQuestion: 'music_goal' },
          { value: 'other', label: 'Other Instrument', nextQuestion: 'music_goal' },
        ],
      },
      {
        key: 'music_goal',
        text: 'What is your goal?',
        type: 'single',
        options: [
          { value: 'hobby', label: 'Learn as Hobby', nextQuestion: 'practice_commitment' },
          { value: 'professional', label: 'Professional Musician', nextQuestion: 'practice_commitment' },
          { value: 'teacher', label: 'Teach Music', nextQuestion: 'practice_commitment' },
        ],
      },
      {
        key: 'practice_commitment',
        text: 'How many hours can you practice daily?',
        type: 'number',
        validation: { min: 0.5, max: 8 },
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
