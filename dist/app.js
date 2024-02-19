"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const react_1 = require("react");
const react_query_1 = require("@tanstack/react-query");
const react_query_devtools_1 = require("@tanstack/react-query-devtools");
const HomePage_1 = require("./HomePage");
const root = (0, client_1.createRoot)(document.body);
const queryClient = new react_query_1.QueryClient();
root.render((0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsxs)(react_query_1.QueryClientProvider, { client: queryClient, children: [(0, jsx_runtime_1.jsx)(react_query_devtools_1.ReactQueryDevtools, { initialIsOpen: false }), (0, jsx_runtime_1.jsx)(HomePage_1.HomePage, {})] }) }));
//# sourceMappingURL=app.js.map