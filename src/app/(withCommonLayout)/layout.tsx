import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdullah al-Ahsan Website",
  description: "Abdullah al-Ahsan Website",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-10 md:px-6">
      <Navbar />
      <Separator className="bg-gray-500 mb-5" />
      {children}
      <Footer />
    </div>
  );
}
