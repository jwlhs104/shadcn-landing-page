import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "我只能連結一個Google帳號嗎?",
    answer: "是的，我們現在只支援一個Google帳號, 您的群組照片會以資料夾分類存放",
    value: "item-1",
  },
  {
    question: "機器人會打擾到我的群組嗎?",
    answer:
      "不會，他只會安安靜靜地幫您備份照片，所有資訊都可以從後台跟您的Google Drive中查看",
    value: "item-2",
  },
  {
    question:
      "我不會設定!請問要怎麼請人協助?",
    answer:
      "您可以參考我們的簡單三步驟完成設定，如果您是專業版的用戶您可以直接向機器人發問，會有專人回覆您．",
    value: "item-3",
  },
  {
    question: "我可以請機器人備份個人對話的照片嗎?",
    answer: "很抱歉，您跟朋友個人的對話機器人是沒有辦法讀取到的，當然就沒辦法幫您備份囉!",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        常見{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          問題
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        還有其他問題嗎?{" "}
        <a
          rel="noreferrer noopener"
          href="https://lin.ee/e0sqgkW"
          target="_blank"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          直接詢問機器人吧!
        </a>
      </h3>
    </section>
  );
};
