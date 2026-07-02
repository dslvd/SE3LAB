import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-[200px_1fr] h-screen">
      <aside>
        <Sidebar />
      </aside>
      <main className="bg-primary h-full w-full flex flex-col items-center justify-start p-8 pt-5">
        {children}
      </main>
    </div>
  );
}
