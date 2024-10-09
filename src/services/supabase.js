import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rrhkvlboeibhtdltqgbh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyaGt2bGJvZWliaHRkbHRxZ2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMjcyMzIsImV4cCI6MjA0MzgwMzIzMn0.a9Df9XeQ-ldSkYD-5MdlBXDglYT_K4V8QbvigV9Wu4g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
