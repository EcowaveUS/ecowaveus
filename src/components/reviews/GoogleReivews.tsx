import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    // Hide Elfsight attribution link after widget loads
    const hideElfsightLink = () => {
      const elfsightLink = document.querySelector('#google-reviews a[href*="elfsight.com"]');
      if (elfsightLink) {
        (elfsightLink as HTMLElement).style.display = 'none';
      }
    };

    // Try to hide immediately and also set up observer
    const observer = new MutationObserver(() => {
      hideElfsightLink();
    });

    // Observe the google-reviews container for changes
    const container = document.getElementById('google-reviews');
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true,
      });
    }

    // Also try periodically as a fallback
    const interval = setInterval(hideElfsightLink, 500);

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={import.meta.env.VITE_ELFSIGHT_APP_CLASS || "elfsight-app-0c9a7989-0eaf-46ae-a2cc-c28564e34e70"} />
  );
}
