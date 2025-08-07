import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qkposctejiaurhtokuok.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrcG9zY3RlamlhdXJodG9rdW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1Mjc3MDUsImV4cCI6MjA3MDEwMzcwNX0.yWHFeS1V8aZraPvQjbWoD7ZNdcUx26vXLYFP94UR2iI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
