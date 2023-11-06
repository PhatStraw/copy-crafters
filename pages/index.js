"use client";

import { useChat } from "ai/react";
import Search from "components/components/Search";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  console.log(messages);
  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <Search
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
      />

      {messages.length > 0 && messages[messages.length - 1].role !== "user" ? (
        <div className="whitespace-pre-wrap my-4">
          {messages[messages.length - 1].content}
          <button
            className="absolute right-0 p-2 bg-blue-500 text-white"
            onClick={() => {
              const textToCopy = messages[messages.length - 1].content;
              navigator.clipboard.writeText(textToCopy);
            }}
          >
            Copy
          </button>
        </div>
      ) : (
        <div className="text-xl">
          Input your product features and press Enter to instantly craft an engaging product description that sells!
        </div>
      )}
    </div>
  );
}

// the smithblade, american made, michellon used all over the world, stainless steel
