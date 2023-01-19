import { Button } from "ui";
import HeroSection from "@components/sections/hero";

export default function Web(props: { site: string; user: string }) {
  return (
    <div>
      <HeroSection />
      <h1 className="text-blue-500">
        {props.site} | {props.user} | {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
      <Button />
    </div>
  );
}
export async function getServerSideProps() {
  return {
    props: {
      site: "Web",
      user: process.env.USER,
    },
  };
}
