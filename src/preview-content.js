"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_1 = __importStar(require("react"));
const PreviewContent = ({ children }) => {
    const [isCopied, setIsCopied] = react_1.useState(false);
    const previewRef = react_1.useRef();
    const copyText = () => {
        if (!previewRef.current) {
            return;
        }
        setIsCopied(true);
        // @ts-ignore
        previewRef.current.select();
        document.execCommand('copy');
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };
    return (react_1.default.createElement("div", { className: "preview-content" },
        react_1.default.createElement("div", { className: "preview-content__text" },
            react_1.default.createElement("div", { className: "preview-content__button-placeholder" }),
            children),
        react_1.default.createElement("textarea", { className: "preview-content__hidden-copy", style: { visibility: 'hidden' }, ref: previewRef, value: children }),
        react_1.default.createElement("button", { type: "button", className: "preview-content__button button", onClick: copyText }, isCopied ? 'Copied to clipboard!' : 'Copy to clipboard')));
};
exports.default = PreviewContent;