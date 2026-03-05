export const trackEvent = (eventName: string) => {
  if (typeof window !== "undefined") {
    console.log("Tracked:", eventName);

    if ((window as any).gtag) {
      (window as any).gtag("event", eventName, {
        event_category: "engagement",
      });
    }
  }
};
