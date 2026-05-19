import Footer from "@/components/layout/website/Footer";
import Sidebar from "@/components/layout/website/Navbar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Navbar */}
      <Sidebar/>     

      {/* Page Content */}
      <main className="flex-1 max-w-6xl mx-auto px-2 md:px-4 min-h-[50vh]">
        
        {children}</main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}