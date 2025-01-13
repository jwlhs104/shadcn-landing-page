import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "將機器人加入好友",
    description:
      "將機器人加入好友，接著將他加入您想備份的群組裡面！",
  },
  {
    icon: <MapIcon />,
    title: "授權Google Drive",
    description:
      "前往後台，點擊授權Google Drive按鈕，選擇您想存放資料的Google帳號!",
  },
  {
    icon: <PlaneIcon />,
    title: "為群組啟動備份功能",
    description:
      "從後台的可以看到您跟機器人的共同群組，開啟開關即可開始備份囉!",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        怎麼開始{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          備份{" "}
        </span>
        手把手教學
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        簡單三步驟就可以設定完成囉！
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 lg:m-auto gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
