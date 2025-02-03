import MainLayout from "../layouts/main";
import { SplashScreen } from "src/components/loading-screen";

import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Page404 = lazy(() => import("src/pages/404"));
const Page500 = lazy(() => import("src/pages/500"));
const LandingPage = lazy(() => import("src/pages/landing"));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          children: [
            {
              element: (
                <MainLayout disabledSpacing>
                  <LandingPage />
                </MainLayout>
              ),
              index: true,
            },
          ],
        },
        { path: "error", element: <Page500 /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
