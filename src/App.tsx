import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { authProvider, dataProvider, liveProvider } from "./providers";
import { Home, ForgotPassword, Login, Register } from './pages';
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";
import Layout from "./components/layout";
import { resources } from "./config/resources";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={ dataProvider }
                liveProvider={ liveProvider }
                notificationProvider={ useNotificationProvider }
                routerProvider={ routerBindings }
                authProvider={ authProvider }
                resources={ resources }
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "l1Wwtt-oQApLd-cas0Kb",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  <Route path="/graphql" element={<Navigate to="/" />} /> 
                  <Route path="/register" index element={<Register />} />
                  <Route path="/login" index element={<Login />} />
                  <Route path="/forgot-password" index element={<ForgotPassword />} />
                  <Route
                    element=
                      {
                        <Authenticated
                          key="authenticated-layout"
                          fallback={ <CatchAllNavigate to="/login" />}
                        >
                          <Layout>
                            <Outlet />
                          </Layout>
                        </Authenticated>
                      }
                    >
                      <Route index element={<Home />} />
                  </Route>
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
