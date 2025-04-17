import React, { useState, useEffect, useRef } from "react";
import { latinToCyrillic, cyrillicToLatin } from "../utils/tr";
import Wrapper from "../layout/wrapper";
import {
  ArrowLeftRight,
  Clipboard,
  ClipboardCheck,
  Undo2,
  X,
} from "lucide-react";

const ConverterBoard = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [mode, setMode] = useState("latin-to-cyrillic");
  const [copied, setCopied] = useState("");
  const [history, setHistory] = useState([]);

  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, [typingTimeout]);

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
    setHistory((prev) => [...prev, input]);

    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }

    if (typingTimeout) clearTimeout(typingTimeout);

    const newTimeout = setTimeout(() => {
      const converted =
        mode === "latin-to-cyrillic"
          ? latinToCyrillic(text)
          : cyrillicToLatin(text);
      setOutput(converted);
      if (outputRef.current) {
        outputRef.current.style.height = "auto";
        outputRef.current.style.height = `${outputRef.current.scrollHeight}px`;
      }
    }, 400);

    setTypingTimeout(newTimeout);
  };

  const handleSwitchMode = () => {
    setMode((prev) =>
      prev === "latin-to-cyrillic" ? "cyrillic-to-latin" : "latin-to-cyrillic"
    );
    setInput(output);
    setOutput(input);
    setCopied("");
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setCopied("");
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <Wrapper>
      <div className="flex justify-center items-center gap-4 mt-6 bg-white rounded-lg py-2">
        <div className="w-20">
          <h1>{mode === "latin-to-cyrillic" ? "Lotin" : "Кирилл"}</h1>
        </div>

        <button
          onClick={handleSwitchMode}
          className="p-2 bg-[#004AAD] cursor-pointer text-white rounded-full hover:bg-blue-700"
        >
          <ArrowLeftRight className="w-5 h-5" />
        </button>

        <div className="px-4 w-20">
          <h1>{mode === "latin-to-cyrillic" ? "Кирилл" : "Lotin"}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="relative rounded-xl p-4 shadow-sm min-h-[200px] bg-white">
          <button
            onClick={handleClear}
            title="Tozalash"
            className="absolute top-2 right-2"
          >
            <X className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer" />
          </button>

          <textarea
            ref={inputRef}
            value={input}
            onChange={handleChange}
            placeholder="Bu yerga lotin yoki kirill yozuviga o‘girish kerak bo‘lgan matnni kiriting..."
            className="w-full outline-none resize-none bg-transparent overflow-hidden pr-4"
            style={{ height: "auto" }}
          />

          <div className="absolute bottom-2 right-2 flex gap-3">
            <button
              onClick={() => {
                if (history.length > 0) {
                  const prev = history[history.length - 1];
                  setInput(prev);
                  setHistory((prevHistory) => prevHistory.slice(0, -1));
                  setCopied("");
                  if (inputRef.current) {
                    inputRef.current.style.height = "auto";
                    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
                  }
                }
              }}
            >
              <Undo2 className="w-5 h-5 text-gray-500 hover:text-yellow-500 cursor-pointer" />
            </button>

            <button
              onClick={() => handleCopy(input, "input")}
              title="Nusxalash"
            >
              {copied === "input" ? (
                <ClipboardCheck className="w-5 h-5 text-green-500 cursor-pointer" />
              ) : (
                <Clipboard className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        <div className="relative rounded-xl p-4 shadow-sm bg-white min-h-[200px]">
          <textarea
            ref={outputRef}
            readOnly
            value={output}
            className="w-full outline-none resize-none bg-transparent text-gray-800 overflow-hidden"
            style={{ height: "auto" }}
          />
          <div className="absolute bottom-2 right-2 flex gap-2">
            <button
              onClick={() => handleCopy(output, "output")}
              title="Nusxalash"
            >
              {copied === "output" ? (
                <ClipboardCheck className="w-5 h-5 text-green-500 cursor-pointer" />
              ) : (
                <Clipboard className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ConverterBoard;
