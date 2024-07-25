import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dgvazgknpmosfumyczyd.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndmF6Z2tucG1vc2Z1bXljenlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MDM3MTIsImV4cCI6MjAyNjM3OTcxMn0.Ix4PcZUTHBbeRzn3NiyQwwAN1xv1eEMLWC_nAJwcSlk`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
