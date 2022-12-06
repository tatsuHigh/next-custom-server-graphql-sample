"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.GetHelloWorldDocument = void 0;
var graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.GetHelloWorldDocument = (0, graphql_tag_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query getHelloWorld {\n  helloworld {\n    first\n    second\n  }\n}\n    "], ["\n    query getHelloWorld {\n  helloworld {\n    first\n    second\n  }\n}\n    "])));
var defaultWrapper = function (action, _operationName, _operationType) { return action(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        getHelloWorld: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.GetHelloWorldDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'getHelloWorld', 'query');
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1;
