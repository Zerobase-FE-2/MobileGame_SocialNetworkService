/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_APIKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
