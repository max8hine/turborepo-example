import { Button } from "ui";

export default function Web(props: { site: string; user: string }) {
  console.log(props, "props");
  return (
    <div>
      <h1>
        {props.site} | {props.user}
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
