/*
  # HJR Dream Guidance System Schema

  1. New Tables
    - `students`
      - `id` (uuid, primary key)
      - `name` (text)
      - `age` (integer)
      - `class_level` (text) - Class 7, 8, 9, 10, Inter, Degree, B.Tech
      - `email` (text, optional)
      - `phone` (text, optional)
      - `created_at` (timestamptz)
    
    - `dream_sessions`
      - `id` (uuid, primary key)
      - `student_id` (uuid, foreign key)
      - `dream_category` (text) - Selected dream category
      - `current_step` (integer) - Current question step
      - `total_steps` (integer) - Total questions in this path
      - `progress_percentage` (integer) - Progress 0-100
      - `is_completed` (boolean)
      - `started_at` (timestamptz)
      - `completed_at` (timestamptz, nullable)
    
    - `session_responses`
      - `id` (uuid, primary key)
      - `session_id` (uuid, foreign key)
      - `question_key` (text) - Unique identifier for the question
      - `question_text` (text) - The actual question asked
      - `answer` (text) - Student's answer
      - `step_number` (integer)
      - `answered_at` (timestamptz)
    
    - `dream_roadmaps`
      - `id` (uuid, primary key)
      - `session_id` (uuid, foreign key)
      - `confirmed_dream` (text)
      - `exact_role` (text)
      - `required_skills` (jsonb)
      - `education_training` (text)
      - `daily_routine` (text)
      - `short_term_goals` (jsonb)
      - `backup_options` (jsonb)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for public access (since no auth for MVP)
*/

-- Students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  age integer,
  class_level text,
  email text,
  phone text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to students"
  ON students FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to students"
  ON students FOR INSERT
  TO public
  WITH CHECK (true);

-- Dream sessions table
CREATE TABLE IF NOT EXISTS dream_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  dream_category text NOT NULL,
  current_step integer DEFAULT 0,
  total_steps integer DEFAULT 0,
  progress_percentage integer DEFAULT 0,
  is_completed boolean DEFAULT false,
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

ALTER TABLE dream_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to dream_sessions"
  ON dream_sessions FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to dream_sessions"
  ON dream_sessions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to dream_sessions"
  ON dream_sessions FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Session responses table
CREATE TABLE IF NOT EXISTS session_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES dream_sessions(id) ON DELETE CASCADE,
  question_key text NOT NULL,
  question_text text NOT NULL,
  answer text NOT NULL,
  step_number integer NOT NULL,
  answered_at timestamptz DEFAULT now()
);

ALTER TABLE session_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to session_responses"
  ON session_responses FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to session_responses"
  ON session_responses FOR INSERT
  TO public
  WITH CHECK (true);

-- Dream roadmaps table
CREATE TABLE IF NOT EXISTS dream_roadmaps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES dream_sessions(id) ON DELETE CASCADE,
  confirmed_dream text NOT NULL,
  exact_role text NOT NULL,
  required_skills jsonb DEFAULT '[]'::jsonb,
  education_training text,
  daily_routine text,
  short_term_goals jsonb DEFAULT '[]'::jsonb,
  backup_options jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE dream_roadmaps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to dream_roadmaps"
  ON dream_roadmaps FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to dream_roadmaps"
  ON dream_roadmaps FOR INSERT
  TO public
  WITH CHECK (true);