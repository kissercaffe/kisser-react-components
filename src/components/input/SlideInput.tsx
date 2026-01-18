import { useState, useRef, useEffect } from "react";
import { PlusIcon } from "lucide-react";

export default function SlideInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("入力値:", value); // ← ここで親に渡したり保存したり
    setValue("");
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center rounded-3xl overflow-hidden transition-all duration-300 ease-out ${
        isOpen
          ? "border border-gray-300 p-1 bg-white w-[480px] max-w-[480px]"
          : "border-none p-0 bg-transparent w-12 max-w-12"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`flex gap-2 items-center flex-1 overflow-hidden transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 min-w-[240px] max-w-[480px] w-full translate-x-0 pointer-events-auto"
            : "opacity-0 min-w-0 max-w-0 w-0 -translate-x-full pointer-events-none"
        }`}
      >
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="入力してください"
          className="flex-1 min-w-[200px] py-2 px-3 border-none outline-none bg-transparent"
        />
      </form>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-10 h-10 rounded-full text-2xl cursor-pointer shrink-0 border-none flex items-center justify-center relative z-[1] ${
          isOpen
            ? "bg-transparent text-gray-700 transition-all duration-300 ease-out"
            : "bg-blue-500 text-white transition-all duration-600 ease-out"
        }`}
      >
        <span
          className={`flex items-center justify-center leading-[0] ${
            isOpen
              ? "rotate-45 transition-transform duration-300 ease-out"
              : "rotate-0 transition-transform duration-600 ease-out"
          }`}
        >
          <PlusIcon size={20} />
        </span>
      </button>
    </div>
  );
}