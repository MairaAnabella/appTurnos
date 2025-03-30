import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../ui/calendar";
//import { Input } from "../custom-components/input";

// Esquema de validación con Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "El nombre de usuario debe tener al menos 2 caracteres.",
  }),
  
});

export function DialogTurno() {
  
  // Definir el formulario dentro del componente
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // Manejador de envío del formulario
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      {/* ✅ `asChild` permite que `Button` funcione correctamente */}
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Turno
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nuevo Turno</DialogTitle>
          <DialogDescription>
            Ingresa los datos y presiona "Guardar".
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field:{ref,...field} }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Juan Pérez" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>






              )}
            />
            <DialogFooter>
     {/*          {*✅ Asegúrate de que este botón esté dentro del formulario *} */}
              <Button type="submit">Guardar</Button>
            </DialogFooter>
          </form>
        </Form> 
      </DialogContent>
    </Dialog>
  );
}
