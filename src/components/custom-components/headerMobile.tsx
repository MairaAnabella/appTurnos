import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Calendar, DollarSign, Home,  Settings, Users,ChevronRight   } from "lucide-react"


export function Sidebar(){
    return(
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" >
              <ChevronRight   className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" >
            <nav className="grid gap-2  font-medium">

               <a  className="flex items-center gap-2 text-lg font-semibold">
                <h1 className="text-pink-400 mt-6 ml-4 font-stretch-100% ">BeautySalon</h1>
              </a> 
              <a
           
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Inicio
              </a>
              <a className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-foreground">
                <Calendar className="h-5 w-5" />
                Agenda
              </a>
              <a
             
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                Clientes
              </a>
              <a
                
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <DollarSign className="h-5 w-5" />
                Finanzas
              </a>
              <a
               
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Settings className="h-5 w-5" />
                Configuración
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <a  className="flex items-center gap-2 font-semibold ">
          <span className="text-primary">BeautySalon</span>
        </a>
        <div className="flex-1"></div>
        <img src="/src/assets/logo.webp" alt=""  width={40}/>

        {/* 
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Plus className="h-4 w-4" />
          <span>Nuevo Turno</span>
        </Button> */}
      </header>
    )
}