// Umami Analytics loader for privacy-friendly analytics
// See: https://umami.is/docs/quick-start

// This file is a placeholder for the Umami script loader.
// Replace 'YOUR_UMAMI_SCRIPT_URL' and 'YOUR_UMAMI_WEBSITE_ID' with your actual values.

(function() {
  var d = document, s = d.createElement('script');
  s.async = true;
  s.src = 'https://analytics.umami.is/script.js'; // Example public instance
  s.dataset.websiteId = 'YOUR_UMAMI_WEBSITE_ID'; // Replace with your site ID
  d.body.appendChild(s);
})();
