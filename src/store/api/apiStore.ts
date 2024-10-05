import { create } from "zustand";

type Actions = {
  get: (url: string, content_type?: string) => Promise<any>;
  post: (url: string, body: any, content_type?: string) => Promise<any>;
  put: (url: string, body: any, content_type?: string) => Promise<any>;
};

export const useAPIStore = create<Actions>(() => ({
  get: async (url, content_type) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          ...(content_type && { "Content-Type": content_type }),
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  post: async (url, body, content_type) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          ...(content_type && { "Content-Type": content_type }),
        },
        body,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  put: async (url, body, content_type) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          ...(content_type && { "Content-Type": content_type }),
        },
        body,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
}));
