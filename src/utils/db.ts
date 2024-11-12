import { neon, neonConfig } from '@neondatabase/serverless';

neonConfig.fetchConnectionCache = true;

const sql = neon(import.meta.env.VITE_DATABASE_URL);

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  preferred_contact: string;
}

interface OnboardingSubmission {
  project_name: string;
  description: string;
  services: string[];
  budget: string;
  timeline: string;
}

export const initDatabase = async () => {
  try {
    // Create contact_submissions table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        phone VARCHAR(50),
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        preferred_contact VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create onboarding_submissions table
    await sql`
      CREATE TABLE IF NOT EXISTS onboarding_submissions (
        id SERIAL PRIMARY KEY,
        project_name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        services TEXT[] NOT NULL,
        budget VARCHAR(50) NOT NULL,
        timeline VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

export const saveContactSubmission = async (data: ContactSubmission) => {
  try {
    const result = await sql`
      INSERT INTO contact_submissions (
        name, email, company, phone, subject, message, preferred_contact
      ) VALUES (
        ${data.name},
        ${data.email},
        ${data.company},
        ${data.phone},
        ${data.subject},
        ${data.message},
        ${data.preferred_contact}
      )
      RETURNING id
    `;
    return result[0];
  } catch (error) {
    console.error('Error saving contact submission:', error);
    throw error;
  }
};

export const saveOnboardingSubmission = async (data: OnboardingSubmission) => {
  try {
    const result = await sql`
      INSERT INTO onboarding_submissions (
        project_name, description, services, budget, timeline
      ) VALUES (
        ${data.project_name},
        ${data.description},
        ${data.services},
        ${data.budget},
        ${data.timeline}
      )
      RETURNING id
    `;
    return result[0];
  } catch (error) {
    console.error('Error saving onboarding submission:', error);
    throw error;
  }
};