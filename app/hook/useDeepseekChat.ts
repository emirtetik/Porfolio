import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const fakeRagData: { [key: string]: string } = {
  "Emir Tetik kimdir?":
    "Emir Tetik, JavaScript ekosisteminde Frontend Developer olarak, React, Next.js, React Native ve Nest.js teknolojilerini kullanarak ölçeklenebilir ve yüksek performanslı mobil ve web uygulamaları geliştiren bir yazılım geliştiricisidir. " +
    "Frontend konusunda daha yetkin olan Emir, Backend üzerine de projeleriyle kendini geliştirmektedir. 10.000+ saatlik kodlama deneyimiyle, GitHub üzerinde 50 farklı projeye katkıda bulunmuş ve " +
    "React Native ile App Store ve Play Store'da yayınladığı projeleri ile başarıya ulaşmıştır. Ayrıca bir uygulamasını beta aşamasına kadar geliştirip, hisse karşılığında bir yazılım şirketine pazarlamıştır. " +
    "Frontend ve Backend geliştirme, temiz, sürdürülebilir kod yazma ve API entegrasyonları konusunda güçlü bir yetkinliğe sahip olan Emir, yeni teknolojilere ilgi duyarak yenilikçi projeler üretmeye devam etmektedir. " +
    "Son bir yıl boyunca yalnızca React Native ile projeler üzerinde çalışmış ve Tetrig adlı bir projeyi kafelere tanıtmayı amaçlamaktadır. Aynı zamanda Next.js ile yeni portfolyo sitesini hazırlarken Deepseek, ChatGPT, Gemini gibi yapay zeka sistemleri üzerine çalışmalar yapmaktadır. " +
    "Kariyerinde çeşitli projeler yer almakta ve teknoloji dünyasında kendini sürekli geliştirerek katkı sağlamaktadır.\n\n",
};
const fakeRagDataEn: { [key: string]: string } = {
  "Who is Emir Tetik?":
    "Emir Tetik is a software developer specializing in Frontend Development in the JavaScript ecosystem. He develops scalable and high-performance mobile and web applications using technologies such as React, Next.js, React Native, and Nest.js. " +
    "While Emir is more proficient in Frontend development, he is also enhancing his skills in Backend through his projects. With over 10,000 hours of coding experience, he has contributed to 50 different projects on GitHub and " +
    "achieved success with his projects published on the App Store and Play Store using React Native. Additionally, he developed one of his applications up to the beta stage and marketed it to a software company in exchange for equity. " +
    "Emir is highly skilled in Frontend and Backend development, writing clean, sustainable code, and API integrations. He continues to create innovative projects, driven by his interest in new technologies. " +
    "Over the past year, he has worked exclusively on React Native projects and aims to promote a project called Tetrig to cafes. He is also working on AI systems like Deepseek, ChatGPT, and Gemini while preparing his new portfolio site with Next.js. " +
    "His career includes various projects, and he continues to contribute to the technology world by constantly improving himself.",
};
export const useChatbot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();


  const handleSubmit = async (input: string) => {
    if (!input.trim()) return;
    const Deepseek = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;
    if (!Deepseek) {
      console.error("API Key is missing or incorrect");
      setLoading(false);
      return;
    }
    setLoading(true);
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const isEmirQuestion =
      input.toLowerCase().includes("emir") ||
      input.toLowerCase().includes("tetik") ||
      input.toLowerCase().includes("emir tetik");

    if (isEmirQuestion) {
      const botMessage = {
        role: "assistant",
        content:
          t("language") === "en"
            ? fakeRagDataEn["Who is Emir Tetik?"]
            : fakeRagData["Emir Tetik kimdir?"],
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "deepseek/deepseek-r1:free",
          messages: [...messages, userMessage],
        },
        {
          headers: {
            Authorization: `Bearer ${Deepseek}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = response.data.choices[0].message;
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, handleSubmit };
};
