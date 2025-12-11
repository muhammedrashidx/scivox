// Analytics utility functions
// Add your analytics tracking here

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", eventName, properties);
  }

  // Custom analytics
  console.log("Event tracked:", eventName, properties);
};

export const trackPageView = (url: string) => {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: url,
    });
  }
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | object,
      config?: object
    ) => void;
  }
}

