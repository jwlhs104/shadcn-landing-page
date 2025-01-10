import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  LINE{" "}
                </span>
                機器人
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                在群組的日常對話中，照片總是無聲無息地堆積著，它的使命很簡單，但卻格外重要：為您保存那些珍貴的瞬間。它並不吵鬧，也不引人注目。當照片被分享時，它總是靜靜地工作，像一位專注的園丁，將這些美好的瞬間小心翼翼地整理好，依照使用者的心願，送往那片專屬於他們的星空。

「這是屬於你的記憶，」機器人彷彿在說，「我會好好幫你保存，無論你想要每天回憶一次，還是每月翻開一次，它們都會在那裡，等著你。」
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
