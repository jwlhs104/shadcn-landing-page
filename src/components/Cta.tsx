import { Button } from "./ui/button";
import LineLogoIcon from "@/components/logos/line";
import { buttonVariants } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            還是太複雜了嗎?
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              加入好友{" "}
            </span>
            <br/>
            機器人會引導您完成的!
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            點擊按鈕將機器人加入好友!之後他會一步一步帶您完成所有步驟.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
            rel="noreferrer noopener"
            href="https://lin.ee/e0sqgkW"
            target="_blank"
            className={`w-full md:mr-4 md:w-auto ${buttonVariants()}`}
          >
            <LineLogoIcon className="mr-2 w-5 h-5" color="#000"/>
            加入LINE好友
          </a>
          </div>
      </div>
    </section>
  );
};
