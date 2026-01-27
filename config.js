// mybookshare/config.js
// Runtime configuration for MyBookShare Inventory
// NOTE: These values are still visible in the browser (anon keys only)

window.MYBOOKSHARE_CONFIG = {
  // =========================
  // SUPABASE
  // =========================
  SUPABASE_URL: "https://YOUR_PROJECT_ID.supabase.co",
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_PUBLIC_KEY",

  // =========================
  // IMAGE UPLOAD (ImgBB)
  // =========================
  IMGBB_API_KEY: "YOUR_IMGBB_API_KEY",

  // =========================
  // EMAILJS
  // =========================
  EMAILJS_PUBLIC_KEY: "YOUR_EMAILJS_PUBLIC_KEY",
  EMAILJS_SERVICE_ID: "YOUR_EMAILJS_SERVICE_ID",
  EMAILJS_ADMIN_REVIEW_TEMPLATE_ID: "YOUR_ADMIN_REVIEW_TEMPLATE_ID",
  EMAILJS_APPROVAL_TEMPLATE_ID: "YOUR_APPROVAL_TEMPLATE_ID",

  // Optional (used in admin notification emails)
  ADMIN_EMAIL: "admin@mybookshare.com",

  // =========================
  // ADMIN PASSWORD (SHA-256)
  // =========================
  // Generate with:
  //   crypto.subtle.digest('SHA-256', new TextEncoder().encode("password"))
  //   then convert to hex
  ADMIN_PASSWORD_SHA256: "YOUR_SHA256_HASH_HERE"
};
