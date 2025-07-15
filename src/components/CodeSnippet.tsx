import React, { useState } from "react";
import algoSnippets from "../data/algoSnippets";
import { Copy, Check, Code } from "lucide-react";
import { cn } from "../utils/cn";

type Props = {
  algorithm: keyof typeof algoSnippets;
};

type LanguageKey = keyof (typeof algoSnippets)["bubble"];

const languageLabels: Record<LanguageKey, string> = {
  cpp: "C++",
  java: "Java",
  python: "Python",
  c: "C",
  javascript: "JavaScript",
};

const CodeSnippet: React.FC<Props> = ({ algorithm }) => {
  const languageKeys = Object.keys(algoSnippets[algorithm]) as LanguageKey[];
  const [language, setLanguage] = useState<LanguageKey>(
    languageKeys.includes("cpp" as LanguageKey) ? "cpp" : languageKeys[0]
  );
  const [copied, setCopied] = useState(false);

  const code = algoSnippets[algorithm]?.[language] || "// Code not available";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-2xl p-0 overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-[#232526]">
        <div className="flex items-center gap-3">
          <Code size={22} className="text-blue-400" />
          <span className="font-semibold text-lg tracking-wide text-white">
            {languageLabels[language]} Code
          </span>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as LanguageKey)}
            className="bg-[#232526] border border-gray-600 px-3 py-1 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            {languageKeys.map((lang) => (
              <option key={lang} value={lang}>
                {languageLabels[lang]}
              </option>
            ))}
          </select>
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-sm font-medium text-white border border-gray-600",
              copied && "bg-green-600 border-green-700 hover:bg-green-500"
            )}
            title="Copy code"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span className="ml-1">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
      <div className="bg-[#18191A] p-6 overflow-x-auto">
        <pre className="text-sm leading-relaxed whitespace-pre rounded-lg font-mono text-gray-100">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
