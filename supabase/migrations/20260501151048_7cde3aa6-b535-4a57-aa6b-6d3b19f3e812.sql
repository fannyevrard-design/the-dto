-- Table to store waitlist signups
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT,
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'modal',
  lang TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Prevent duplicate emails (case-insensitive)
CREATE UNIQUE INDEX waitlist_signups_email_unique ON public.waitlist_signups (lower(email));

-- Enable Row Level Security
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to insert a signup
CREATE POLICY "Anyone can sign up to the waitlist"
  ON public.waitlist_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies => no one can read or modify from the client.
-- The owner can view entries via the Cloud backend dashboard.