import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professor Abdullah Al-Ahsan Website",
  description: "Professor Abdullah Al-Ahsan Website",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Navbar />
      <Separator className="bg-gray-500 mb-5" />
      {children}
      <Footer />
    </div>
  );
}
