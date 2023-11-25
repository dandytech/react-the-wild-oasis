import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yamzjqtlqxhrclwqekep.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhbXpqcXRscXhocmNsd3Fla2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4Nzg5NDQsImV4cCI6MjAxMzQ1NDk0NH0.mNVWsIirS2INPOW65BhaW_FdpZm3na-lX8ENY9zCFe4";

export const supabase = createClient(supabaseUrl, supabaseKey);
