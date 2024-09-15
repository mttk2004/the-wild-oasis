/**
 *  Project: the-wild-oasis
 *  File: supabase.js
 *  Created: 10:52 SA, 27/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kdhxfljhmilgkeihekvt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkaHhmbGpobWlsZ2tlaWhla3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3MjU3OTEsImV4cCI6MjA0MDMwMTc5MX0.dc97jynwdXULjwBl6tRvMOtUhTzeTr1Va7EiuFbOol4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
