// mybookshare/config.js
// Runtime configuration for MyBookShare Inventory
// NOTE: These values are visible in the browser (publishable/anon keys only)

(function () {
  window.MYBOOKSHARE_CONFIG = {
    // =========================
    // SUPABASE
    // =========================
    SUPABASE_URL: "https://vpswhgppgyngxxxxvfkf.supabase.co",
    SUPABASE_ANON_KEY: "sb_publishable_adjGINGJHz6FZZCEuarvLw_oFMpDKfX",

    // =========================
    // IMAGE UPLOAD (ImgBB)
    // =========================
    IMGBB_API_KEY: "d2874cf23320c36b80524a4e065e1353",

    // =========================
    // EMAILJS
    // =========================
    EMAILJS_PUBLIC_KEY: "mStUPqb1pL-tKIfKk",
    EMAILJS_SERVICE_ID: "service_hrwfurl",
    EMAILJS_ADMIN_REVIEW_TEMPLATE_ID: "template_9iyhtuo",
    EMAILJS_APPROVAL_TEMPLATE_ID: "template_la29vmh",

    // Optional (used in admin notification emails)
    ADMIN_EMAIL: "zdjimas@gmail.com",

    // =========================
    // ADMIN PASSWORD (SHA-256)
    // =========================
    ADMIN_PASSWORD_SHA256: "e6312d962cab94c3b169983c631ae8b5ffc6b0878badb455f6b3ae936caaf3a7"
  };

  // Lightweight verification (safe): helps confirm the file actually loaded.
  // You should see this once in DevTools console after a refresh.
  console.log(
    "[MyBookShare] config.js loaded. SUPABASE_URL =",
    window.MYBOOKSHARE_CONFIG.SUPABASE_URL
  );
})();
