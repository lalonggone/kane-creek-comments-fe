// vite-env.d.ts

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // Add other environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }