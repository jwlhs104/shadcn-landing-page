import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-10 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-1">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            Line機器人/Google Drive
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h3>
            &copy; 2025 made by{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/jwlhs104"
              className="text-primary transition-all border-primary hover:border-b-2"
            >
              謝中耘
            </a>
          </h3>
          <div className="flex gap-2">
            <a target="_blank" href="/privacy-policy">
              隱私權政策
            </a>
            <a target="_blank" href="/terms-of-service">
              服務條款
            </a>
            <a target="_blank" href="/refund-policy">
              退款政策
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
