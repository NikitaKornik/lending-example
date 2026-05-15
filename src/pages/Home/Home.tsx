import Btn from "../../components/ui/Btn/Btn";

import s from "./Home.module.scss";

import Launch from "@/assets/icons/launch.svg?react";

export default function Home() {
  return (
    <div>
      <Btn variant="primary" rightIcon={<Launch />}>
        Botton
      </Btn>
    </div>
  );
}
