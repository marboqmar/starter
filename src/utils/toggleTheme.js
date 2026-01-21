export const LOCAL_STORAGE_THEME_KEY = 'site-theme';

export const getActiveTheme = () => {
  const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  if (savedTheme) return savedTheme;

  const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isSystemThemeDark ? 'dark' : 'light';
};

export const toggleTheme = () => {
  const currentTheme = getActiveTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
};
