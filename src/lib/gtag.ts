declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

export const pageview = (path: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
};
