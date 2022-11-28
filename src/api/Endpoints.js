export default {
  serverBaseURL: "https://gym-server2.vercel.app",
  api: {
    user: {
      create: "/users",
      update: "/users/",
      delete: "/users/",
      getAll: "/users/",
    },
    membership: {
      create: "/membership",
      update: "/membership/",
      delete: "/membership/",
      getAll: "/membership",
    },
    contactus: {
      create: "/contactus",
      update: "/contactus/",
      delete: "/contactus/",
      getAll: "/contactus",
    },
    register: {
      create: "/register",
      delete: "/register/",
      getAll: "/register",
    },
    auth: {
      userLogin: "/auth/login",
      validateToken: "/auth/validate-token",
      refreshToken: "/auth/refresh-token",
    },
  },
};
