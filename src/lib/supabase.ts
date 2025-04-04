
import { createClient } from '@supabase/supabase-js';

// Use the same Supabase connection details as in src/integrations/supabase/client.ts
const supabaseUrl = "https://mwafpzgvbklixjkhnkrx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13YWZwemd2YmtsaXhqa2hua3J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3Mzg1MDcsImV4cCI6MjA1OTMxNDUwN30.WAlDHkx_Dp482Q7uP3LxPxXQrc6NesmtBIuadKcDDsc";

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseKey);
