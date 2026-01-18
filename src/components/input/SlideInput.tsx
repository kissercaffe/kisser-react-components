import { useState } from "react";
import { PlusIcon } from "lucide-react";

export default function SlideInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("入力値:", value); // ← ここで親に渡したり保存したり
    setValue("");
    setIsOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: isOpen ? "1px solid #ccc" : "none",
        borderRadius: "24px",
        padding: isOpen ? "4px" : "0px",
        backgroundColor: isOpen ? "#fff" : "transparent",
        transition: isOpen ? "all 0.3s ease-out" : "all 0.3s ease-out",
        maxWidth: isOpen ? "480px" : "48px",
        width: isOpen ? "480px" : "48px",
        overflow: "hidden",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          flex: 1,
          opacity: isOpen ? 1 : 0,
          minWidth: isOpen ? "240px" : "0",
          maxWidth: isOpen ? "480px" : "0",
          width: isOpen ? "100%" : "0",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: isOpen ? "all 0.3s ease-out" : "all 0.3s ease-out",
          overflow: "hidden",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <input
          autoFocus={isOpen}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="入力してください"
          style={{
            flex: 1,
            minWidth: 200,
            padding: "8px 12px",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
          }}
        />
      </form>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          fontSize: 24,
          cursor: "pointer",
          flexShrink: 0,
          transition: isOpen ? "all 0.3s ease-out" : "all 0.6s ease-out",
          border: "none",
          backgroundColor: isOpen ? "transparent" : "#007bff",
          color: isOpen ? "#333" : "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: isOpen ? "transform 0.3s ease-out" : "transform 0.6s ease-out",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            lineHeight: 0,
          }}
        >
          <PlusIcon size={20} />
        </span>
      </button>
    </div>
  );
}