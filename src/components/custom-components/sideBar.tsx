import { Calendar, DollarSign, Home, Settings, Users } from "lucide-react";
export function SideBar() {
  return (
    <aside className="hidden border-r bg-muted/40 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="text-primary">BeautySalon</span>
          </a>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              Inicio
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg bg-primary text-primary-foreground px-3 py-2"
            >
              <Calendar className="h-4 w-4" />
              Agenda
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Users className="h-4 w-4" />
              Clientes
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <DollarSign className="h-4 w-4" />
              Finanzas
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Settings className="h-4 w-4" />
              Configuración
            </a>
          </nav>
        </div>
      </div>
    </aside>
  );
}
