import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professor Abdullah Ahsan Website",
  description: "Professor Abdullah Ahsan Website",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-4xl mx-auto px-3">
      <Navbar />
      <Separator className="bg-black mb-5" />
      {children}
      <Footer />
    </div>
  );
}
