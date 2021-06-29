export const isApiSupported = (api: any) => api in window;
export const isClient = typeof window === 'object';

export function openInNewTab(url: string) {
  const win: any = window.open(url, '_blank');
  win.focus();
}
