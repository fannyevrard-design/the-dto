-- Replace the permissive policy with one that validates input shape
DROP POLICY IF EXISTS "Anyone can sign up to the waitlist" ON public.waitlist_signups;

CREATE POLICY "Anyone can sign up to the waitlist"
  ON public.waitlist_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'
    AND char_length(email) <= 160
    AND (first_name IS NULL OR char_length(first_name) <= 80)
    AND source IN ('modal', 'inline')
    AND (lang IS NULL OR char_length(lang) <= 8)
  );