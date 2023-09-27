import { create } from "zustand";

interface SessionState {
  showingInitialAnimation: boolean;
  trigger:boolean,
  getSessionStorageShowingInitialAnimation: () => void;
}

const useSessionStore = create<SessionState>()((set, get) => ({
  showingInitialAnimation: false,
  trigger:false,
  getSessionStorageShowingInitialAnimation: () => {
    const isInitialLoad = sessionStorage.getItem("initialLoadDone");
    if (!isInitialLoad) {
      set({ showingInitialAnimation: true });
      // sessionStorage.setItem("initialLoadDone", "true");
    }
    set({ trigger: true });
  },
}));

export default useSessionStore;
