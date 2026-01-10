// analytics.ts: Custom event helpers for Umami analytics
// See https://umami.is/docs/tracker-api for event API

export function trackEvent(event: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).umami) {
    (window as any).umami.track(event, data);
  }
}

export function trackScrollDepth() {
  if (typeof window === 'undefined') return;
  let maxDepth = 0;
  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);
    if (percent > maxDepth) {
      maxDepth = percent;
      if (percent >= 25) trackEvent('Scroll 25%');
      if (percent >= 50) trackEvent('Scroll 50%');
      if (percent >= 75) trackEvent('Scroll 75%');
      if (percent >= 90) trackEvent('Scroll 90%');
    }
  }
  window.addEventListener('scroll', onScroll);
}
