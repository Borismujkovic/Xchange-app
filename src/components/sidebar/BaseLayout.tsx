import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode | ReactNode[];
}

const BaseLayout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content">{children}</main>;
    </div>
  );
};

export default BaseLayout;
