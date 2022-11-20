export default {
  serverBaseURL: "http://localhost:2023",
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
    auth: {
      userLogin: "/auth/login",
      validateToken: "/auth/validate-token",
      refreshToken: "/auth/refresh-token",
    },
  },
};
