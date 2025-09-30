import type { RouterConfig } from "@nuxt/schema";

let lastLanguage: string | null = null;

const routerConfig: RouterConfig = {
  scrollBehavior(): { left: number; top: number } | false {
    const currentLanguage: string = localStorage.getItem("language") ?? "";
    const changedLanguage: boolean = currentLanguage !== lastLanguage;

    lastLanguage = currentLanguage;

    if (!changedLanguage) {
      return { top: 0, left: 0 };
    }

    return false;
  },
};

export default routerConfig;
