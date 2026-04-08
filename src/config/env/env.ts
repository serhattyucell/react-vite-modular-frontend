type EnvConfig = {
  appName: string;
  apiBaseUrl: string;
};

const getRequiredEnv = (value: string | undefined, fallback: string): string => {
  return value && value.trim().length > 0 ? value : fallback;
};

export const env: EnvConfig = {
  appName: getRequiredEnv(import.meta.env.VITE_APP_NAME, 'Modular Frontend'),
  apiBaseUrl: getRequiredEnv(import.meta.env.VITE_API_BASE_URL, 'http://localhost:3000/api'),
};
