import { AdminNav } from "@/components/AdminNav";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-[#efe8dc] md:flex-row">
      <AdminNav />
      <div className="flex-1 p-6 md:p-10">{children}</div>
    </div>
  );
}
