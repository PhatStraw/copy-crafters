"use client";

import { useChat } from "ai/react";
import Search from "components/components/Search";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-xl pt-12 md:pt-24 flex flex-col">
      <Search
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
      />

      {messages.length > 0 && messages[messages.length - 1].role !== "user" ? (
        <div className="whitespace-pre-wrap h-[78vh] md:h-[70vh] mx-2 p-2 shadow-lg overflow-y-auto">
          {messages[messages.length - 1].content}
          <button
            className="absolute right-0 top-[90px] p-2 bg-blue-500 text-white"
            onClick={() => {
              const textToCopy = messages[messages.length - 1].content;
              navigator.clipboard.writeText(textToCopy);
            }}
          >
            Copy
          </button>
        </div>
      ) : (
        <div className="whitespace-pre-wrap m-4 text-xl shadow-lg p-2 ">
          Input your product features and press Enter to instantly craft an
          engaging product description that sells!
        </div>
      )}
    </div>
  );
}

// the smithblade, american made, michellon used all over the world, stainless steel
