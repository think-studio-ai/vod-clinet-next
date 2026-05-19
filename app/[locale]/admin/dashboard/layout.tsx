

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Sidebar</h1>
      {children}
      <h1>Footer</h1>
    </div>
  );
}