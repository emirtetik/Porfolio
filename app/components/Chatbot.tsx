"use client";
import React, { useState } from "react";
import { Button } from "../_coreComponent/Button";
import { IoSend } from "react-icons/io5"
import { LuLoaderPinwheel } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import { useChatbot } from "../hook/useDeepseekChat";
import { useTranslation } from "react-i18next";
import { Input } from "../_coreComponent/Input";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const { messages, loading, handleSubmit } = useChatbot();
  const { t } = useTranslation();


  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(input);
    setInput("");
  };

  return (
    <div className="flex flex-col border border-5 border-gray-800 rounded-lg h-[450px] w-full max-w-lg mx-auto md:max-w-xl">
    <div className="bg-gray-800 p-2 text-start">
        <h1 className="text-white text-xl font-bold">ChatBot</h1>
        <p className="text-white text-xs">{t("Chat text")}</p>
      </div>
      <div className="flex-1 p-2 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-center p-1 rounded-lg ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role !== "user" && <RiRobot3Fill className="text-gray-700 mr-2" size={20} />}
            <span className="text-black">{msg.content}</span>
            {msg.role === "user" && <FaUser className="text-gray-700 ml-2" size={20} />}
          </div>
        ))}
      </div>
      <div className="p-2 bg-gray-800 border-t border-gray-600">
        <form onSubmit={onSubmitHandler} className="flex gap-2">
          <Input
            type="text"
            className="flex-1 p-2 text-white bg-gray-700 border border-gray-600 rounded-lg"
            value={input}
            disabled={loading}
            placeholder={t("Message placeholder")}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" disabled={loading || !input.trim()} className="bg-primary hover:bg-primary/90">
            {loading ? <LuLoaderPinwheel className="text-white animate-spin" size={20} /> : <IoSend className="text-white" size={20} />}
          </Button>
        </form>
      </div>
    </div>
  );
}