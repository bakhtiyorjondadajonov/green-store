import React from "react";
import type { FC } from "react";
import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import myStore from "../../redux";
type ProviderProps = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();
const ProviderConfig: FC<ProviderProps> = ({ children }) => {
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <BrowserRouter>
        <ConfigProvider>
          <QueryClientProvider client={queryClient}>
            <Provider store={myStore}>{children}</Provider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ConfigProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default ProviderConfig;
