export default {
  serverBaseURL: "http://localhost:2023",
  api: {
    user: {
      create: "/users",
      update: "/users/",
      delete: "/users/",
      getAll: "/users/",
    },
    auth: {
      userLogin: "/auth/login",
      validateToken: "/auth/validate-token",
      refreshToken: "/auth/refresh-token",
    },
  },
};
