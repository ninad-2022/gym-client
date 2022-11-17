import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../../shared/routes/AdminRoutes";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../app/slices/authSlice";

const SidebarRoutes = (props) => {
  //   const loggedUser = useSelector(selectUser);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* {Array.isArray(routes) &&
            routes.map(({ path, component }, i) => (
              <Route key={path + "-" + i} path={path} element={component} />
            ))} */}

          {Array.isArray(routes) &&
            routes.map(({ path, component }, i) => (
              <Route key={path + "_" + i} path={path} element={component} />
            ))}
        </Routes>
      </Suspense>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Array.isArray(routes) &&
            routes
              .filter((route) => route.role.includes(loggedUser.role))
              .map(({ path, component, hasSubRoutes }, i) => (
                <Route
                  key={path + "-" + i}
                  path={hasSubRoutes ? `${path}/*` : path}
                  element={component}
                />
              ))}
        </Routes>
      </Suspense> */}
    </>
  );
};

export default SidebarRoutes;
