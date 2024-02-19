"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_query_1 = require("@tanstack/react-query");
const constants_1 = require("./constants");
const HomePage = () => {
    const testMessage = (0, react_query_1.useQuery)({
        queryKey: ["testMessage"],
        queryFn: () => axios_1.default.get(`${constants_1.SERVER_URL}`, {
            headers: {
                "Content-Type": "application/json",
            },
        }),
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Hello from Home Page!" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("p", { children: "Test message from server:" }), (0, jsx_runtime_1.jsx)("br", {}), testMessage.data &&
                testMessage.data.data &&
                testMessage.data.data.length > 0 && ((0, jsx_runtime_1.jsx)("ul", { children: testMessage.data.data.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { children: item }, index))) })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {})] }));
};
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map