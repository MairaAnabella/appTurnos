import { useState } from "react"
import { Calendar, Clock, DollarSign, Plus, Users, X } from "lucide-react"
import { addDays, format, startOfWeek } from "date-fns"
import { es } from "date-fns/locale"
import { Button } from "../components/ui/button"
import { Card,CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
//import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Sidebar} from "../components/custom-components/headerMobile"
import { DialogTurno } from "../components/custom-components/dialogFormTurno"

export default function Dashboard() {
  const [date] = useState(new Date())

  const startOfCurrentWeek = startOfWeek(date, { weekStartsOn: 1 })

  // Mock data for appointments
  const appointments = [
    {
      id: 1,
      client: "María García",
      service: "Manicura",
      time: "10:00",
      duration: 60,
      day: 1, // Monday
      status: "confirmed",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      client: "Laura Pérez",
      service: "Corte de pelo",
      time: "11:30",
      duration: 45,
      day: 1, // Monday
      status: "confirmed",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      client: "Carmen Rodríguez",
      service: "Tratamiento facial",
      time: "14:00",
      duration: 90,
      day: 2, // Tuesday
      status: "confirmed",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      client: "Ana Martínez",
      service: "Pedicura",
      time: "16:00",
      duration: 60,
      day: 3, // Wednesday
      status: "pending",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 5,
      client: "Sofía López",
      service: "Maquillaje",
      time: "17:30",
      duration: 75,
      day: 4, // Thursday
      status: "confirmed",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 6,
      client: "Elena Sánchez",
      service: "Depilación",
      time: "10:00",
      duration: 45,
      day: 5, // Friday
      status: "cancelled",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  // Genera lista con los dias de la semana
  
  const weekDays = Array.from({ length: 7 }).map((_, index) => {
    const day = addDays(startOfCurrentWeek, index) //agrega dias
    return {
      date: day, // fecha completa
      dayName: format(day, "EEEE", { locale: es }), // nombre
      dayNumber: format(day, "d"),// numero
      month: format(day, "MMMM", { locale: es }), //mes
      appointments: appointments.filter((app) => app.day === index + 1), // filtra los clientes por dia 
    }
  })
  

  // Monthly statistics
  const monthlyStats = {
    totalAppointments: 87,
    completedAppointments: 72,
    cancelledAppointments: 8,
    pendingAppointments: 7,
    revenue: 4350,
    newClients: 12,
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* menu*/}
       <Sidebar></Sidebar> 
      <div >


        {/* Content Principal */}
        <main className="flex flex-1 flex-col">
          <div className="flex-1">
            <div className="container mx-auto p-4 md:p-6 space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                  <p className="text-muted-foreground">Gestiona tus turnos y visualiza tus estadísticas.</p>
                </div>
                <div className="flex items-center gap-2">

                  <Button >
                    <Plus className="mr-2 h-4 w-4" />
                    Nuevo Turno
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
{/*               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total de Turnos (Mes)</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{monthlyStats.totalAppointments}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium">{monthlyStats.completedAppointments}</span>{" "}
                        completados
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="text-red-500 font-medium">{monthlyStats.cancelledAppointments}</span>{" "}
                        cancelados
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="text-amber-500 font-medium">{monthlyStats.pendingAppointments}</span>{" "}
                        pendientes
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ingresos (Mes)</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${monthlyStats.revenue}</div>
                    <p className="text-xs text-muted-foreground">
                      Promedio: ${Math.round(monthlyStats.revenue / monthlyStats.completedAppointments)} por turno
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Clientes Nuevos (Mes)</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{monthlyStats.newClients}</div>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((monthlyStats.newClients / monthlyStats.totalAppointments) * 100)}% de los turnos
                    </p>
                  </CardContent>
                </Card>
              </div>
 */}
              {/* Weekly Calendar */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Agenda Semanal</CardTitle>
{/*                     <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Hoy
                      </Button>
                      <Select defaultValue="week">
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Ver por" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="day">Día</SelectItem>
                          <SelectItem value="week">Semana</SelectItem>
                          <SelectItem value="month">Mes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
                  </div>
                  <CardDescription>
                    {format(weekDays[0].date, "d MMMM", { locale: es })} -{" "}
                    {format(weekDays[6].date, "d MMMM yyyy", { locale: es })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="week" className="w-full">
                    <TabsList className="grid w-full grid-cols-7 bg-violet-50 " style={{height:'60px'}}>
                      {weekDays.map((day, index) => (
                        <TabsTrigger key={index} value={`day-${index}`} className="flex flex-col">
                          <span className="text-xs capitalize">{day.dayName.slice(0, 3)}</span>
                          <span className="text-sm font-bold">{day.dayNumber}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {weekDays.map((day, dayIndex) => (
                      <TabsContent key={dayIndex} value={`day-${dayIndex}`} className="mt-4">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium capitalize">
                              {day.dayName}, {day.dayNumber} de {day.month}
                            </h3>
                            <Button size="sm">
                              <Plus className="mr-2 h-4 w-4" />
                              Agregar Turno
                            </Button>
                          </div>

                          {day.appointments.length > 0 ? (
                            <div className="space-y-3">
                              {day.appointments.map((appointment) => (
                                <div
                                  key={appointment.id}
                                  className={`flex items-center p-3 rounded-lg border ${
                                    appointment.status === "confirmed"
                                      ? "bg-green-50 border-green-200"
                                      : appointment.status === "cancelled"
                                        ? "bg-red-50 border-red-200"
                                        : "bg-amber-50 border-amber-200"
                                  }`}
                                >
                                  <div className="flex-1 flex items-center gap-3">
                                    <Avatar>
                                      <AvatarImage src={appointment.avatar} alt={appointment.client} />
                                      <AvatarFallback>
                                        {appointment.client
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <div className="font-medium">{appointment.client}</div>
                                      <div className="text-sm text-muted-foreground">{appointment.service}</div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {appointment.time} ({appointment.duration} min)
                                    </Badge>
                                    <Badge
                                      variant={
                                        appointment.status === "confirmed"
                                          ? "default"
                                          : appointment.status === "cancelled"
                                            ? "destructive"
                                            : "outline"
                                      }
                                    >
                                      {appointment.status === "confirmed"
                                        ? "Confirmado"
                                        : appointment.status === "cancelled"
                                          ? "Cancelado"
                                          : "Pendiente"}
                                    </Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8 text-muted-foreground">
                              No hay turnos programados para este día
                            </div>
                          )}
                        </div>
                      </TabsContent>
                    ))}
                    <TabsContent value="week" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {weekDays
                          .filter((day) => day.appointments.length > 0)
                          .map((day, dayIndex) => (
                            <Card key={dayIndex}>
                              <CardHeader className="pb-2">
                                <CardTitle className="text-base capitalize">
                                  {day.dayName}, {day.dayNumber}
                                </CardTitle>
                                <CardDescription>{day.appointments.length} turnos</CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-2">
                                {day.appointments.map((appointment) => (
                                  <div
                                    key={appointment.id}
                                    className={`flex items-center p-2 rounded-lg border text-sm ${
                                      appointment.status === "confirmed"
                                        ? "bg-green-50 border-green-200"
                                        : appointment.status === "cancelled"
                                          ? "bg-red-50 border-red-200"
                                          : "bg-amber-50 border-amber-200"
                                    }`}
                                  >
                                    <div className="flex-1 flex items-center gap-2">
                                      <Avatar className="h-6 w-6">
                                        <AvatarImage src={appointment.avatar} alt={appointment.client} />
                                        <AvatarFallback className="text-xs">
                                          {appointment.client
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <div className="font-medium">{appointment.client}</div>
                                        <div className="text-xs text-muted-foreground">{appointment.service}</div>
                                      </div>
                                    </div>
                                    <div className="text-xs font-medium">{appointment.time}</div>
                                  </div>
                                ))}
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Recent Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle>Próximos Turnos</CardTitle>
                  <CardDescription>Visualiza y gestiona los próximos turnos programados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments
                      .filter((app) => app.status !== "cancelled")
                      .slice(0, 5)
                      .map((appointment) => (
                        <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={appointment.avatar} alt={appointment.client} />
                              <AvatarFallback>
                                {appointment.client
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{appointment.client}</div>
                              <div className="text-sm text-muted-foreground">{appointment.service}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-muted-foreground">
                              {weekDays[appointment.day - 1].dayName}, {weekDays[appointment.day - 1].dayNumber} •{" "}
                              {appointment.time}
                            </div>
                            <Badge variant={appointment.status === "confirmed" ? "default" : "outline"}>
                              {appointment.status === "confirmed" ? "Confirmado" : "Pendiente"}
                            </Badge>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

