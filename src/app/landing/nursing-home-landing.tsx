
"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  Heart,
  Shield,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  Brain,
  Stethoscope,
  Wheat,
  Dumbbell, 
  HeartPulse,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@/app/components/ui/input";
import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function NursingHomeLanding() {
  useEffect(() => {
    AOS.init({ duration: 1400, once: true });
  }, []);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-8 w-8 text-rose-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">
            Hogar Complejo del Este
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">``
          <Link
            href="#about"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#amenities"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            Amenities
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white">
          <div className="px-4 md:px-6 max-w-screen-2xl mx-auto">
            <div className="relative">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-6">
                    <Badge
                      className="bg-rose-100 text-rose-800 hover:bg-rose-200"
                      variant={undefined}
                    >
                      Cuidado integral desde 1985
                    </Badge>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                      El hogar de tus Abuelos
                      <br />
                      <span className="text-rose-600"> en Buenos Aires</span>
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl">
                      La experiencia de la calidez, hospitalidad, y una comunidad
                      donde tus seres queridos pueden vivir en tranquilidad, con
                      el mejor de los cuidados.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      size="lg"
                      className="bg-rose-600 hover:bg-rose-700"
                      variant={undefined}
                    >
                      Agenda un tour
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-rose-200 text-rose-700 hover:bg-rose-50"
                    >
                      Sobre nosotros
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">
                        Recomendados por nuestros huespedes
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="font-medium">
                        Personal Gerontologico y medico on call
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 bottom-[-100px] z-10">
                <Image
                  src="/grandparents.png"
                  width={500}
                  height={500}
                  alt="Abuelos sonrientes"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

         {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
          data-aos="fade-up"
        >
          <div className="px-4 md:px-6 max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Ofrecemos...
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Proveemos cuidado personalizado a todos nuestros residentes, y
                  servicios a la orden de sus necesidades medicas y de calidad
                  de vida.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              
              <SpotlightCard
                data-aos="fade-up"
                className="custom-spotlight-card bg-rose-50 border-rose-100 min-h-[220px]"
                spotlightColor="rgba(225, 29, 72, 1)"
              >
                <h2 className="text-gray-9000 font-semibold">
                  Enfermeras Profesionales <Stethoscope className="h-4 w-4 text-rose-600 inline-block ml-2 align-text-bottom" />
                </h2>
                <div className="text-muted-foreground text-sm">
                  {" "}
                  Cuidado medico profesional con Enfermeras disponibles las 24
                  horas
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <br />
                  <li>• Administración de medicación</li>
                  <li>• Tratamiento y cuidado de lesiones</li>
                  <li>• Manejo de condiciónes cronicas</li>
                </ul>
              </SpotlightCard>

              <SpotlightCard
                data-aos="fade-up"
                className="custom-spotlight-card bg-rose-50 border-rose-100 min-h-[220px]"
                spotlightColor="rgba(225, 29, 72, 1)"
              >
                <h2 className="text-gray-9000 font-semibold">
                  Médico gerontólogo
                  <Brain className="h-4 w-4 text-rose-600 inline-block ml-2 align-text-bottom" />
                </h2>
                <div className="text-muted-foreground text-sm">
                  {" "}
                  Medicina Gerontologica on demand
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <br />
                  <li>• Terapia Fisica</li>
                  <li>• Labor Terapia</li>
                  <li>• Recuperacion post cirugía</li>
                  <br />
                </ul>
              </SpotlightCard>

              <SpotlightCard
                data-aos="fade-up"
                className="custom-spotlight-card bg-rose-50 border-rose-100 min-h-[220px]"
                spotlightColor="rgba(225, 29, 72, 1)"
              >
                <h2 className="text-gray-9000 font-semibold">
                  Medica Clínica
                  <HeartPulse className="h-4 w-4 text-rose-600 inline-block ml-2 align-text-bottom" />
                </h2>
                <div className="text-muted-foreground text-sm">
                  {" "}
                  Consultas a la disposición del residente
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <br />
                  Nuestro personal medico esta siempre cerca y a las ordenes
                  <br />
                  <br />
                </ul>
              </SpotlightCard>

              <SpotlightCard
                data-aos="fade-up"
                className="custom-spotlight-card bg-rose-50 border-rose-100 min-h-[220px]"
                spotlightColor="rgba(225, 29, 72, 1)"
              >
                <h2 className="text-gray-9000 font-semibold">
                  Psicologo Grupal e Individual
                  <Brain className="h-4 w-4 text-rose-600 inline-block ml-2 align-text-bottom" />
                </h2>
                <div className="text-muted-foreground text-sm">
                  {" "}
                  Profesional de la piscologia realiza visitas recurrentes
                </div>
                <div className="text-gray-600 text-sm space-y-1">
                  <br />
                  Estimulación de la conversación y promoción del bienestar
                  emocional.
                  <br />
                </div>
                <br />
              </SpotlightCard>

               <SpotlightCard
                data-aos="fade-up"
                className="custom-spotlight-card bg-rose-50 border-rose-100 min-h-[220px]"
                spotlightColor="rgba(225, 29, 72, 1)"
              >
                <h2 className="text-gray-9000 font-semibold">
                  Nutricionista
                  <Wheat className="h-4 w-4 text-rose-600 inline-block ml-2 align-text-bottom" />
                </h2>
                <div className="text-muted-foreground text-sm">
                  {" "}
                  Planes de alimentación personalizados
                </div>
                <div className="text-gray-600 text-sm space-y-1">
                  <br />
                  Cuidamos la alimentación segun las necesidades particulares del huesped
                </div>
                <br />
              </SpotlightCard>

               <SpotlightCard
                data-aos="fade-up"
                className="custom-spotlight-card bg-rose-50 border-rose-100 min-h-[220px]"
                spotlightColor="rgba(225, 29, 72, 1)"
              >
                <h2 className="text-gray-9000 font-semibold">
                  Instructores de Yoga
                  <Dumbbell className="h-4 w-4 text-rose-600 inline-block ml-2 align-text-bottom" />
                </h2>
                <div className="text-muted-foreground text-sm">
                  {" "}
                  Clases Incorporadas con rutinas personalizadas
                </div>
                <div className="text-gray-600 text-sm space-y-1">
                  <br />
                  En complejo del Este promovemos el movimiento para mejorar la salud fisica
                </div>
                <br />
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6 max-w-screen-2xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
              <Image
                src="/manoAbuela.webp"
                width="600"
                height="400"
                alt="Caring staff member with elderly resident"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                    Cuidando de tu familia como cuidamos de la nuestra
                  </h2>
                  <p className="text-gray-600 md:text-lg">
                    La experiencia nos avala, con mas de 30 años de experiencia en el trato con el adulto mayor. 
                    En complejo del Este nuestra
                    filosofia es una de cuidado, respeto y atención
                    personalizada.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Cuidado personalizado
                      </h3>
                      <p className="text-sm text-gray-600">
                        100% atendido por personal geriatrico especializado
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Inclusivo con la familia
                      </h3>
                      <p className="text-sm text-gray-600">
                        Comunicamos e involucramos las familias en las vidas de
                        nuestros residentes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Ambiente seguro
                      </h3>
                      <p className="text-sm text-gray-600">
                        Procedimiento protocolar, seguridad asegurada. 
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Siempre disponibles
                      </h3>
                      <p className="text-sm text-gray-600">
                        Atención y cuidado las 24 horas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6 max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Nuestras Instalaciones
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Contamos con todos los espacios necesarios para una dia a dia placentero
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Image
                  src="/comedor-ventanales.webp"
                  width="200"
                  height="200"
                  alt="Beautiful gardens"
                  className="aspect-square overflow-hidden rounded-lg object-cover"
                />
                <h3 className="font-semibold text-gray-900">
                  Areas comunes espaciosas
                </h3>
                <p className="text-sm text-gray-600">
                  Espacios comodos y luminosos
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Image
                  src="/cocina.jpg"
                  width="200"
                  height="200"
                  alt="Dining room"
                  className="aspect-square overflow-hidden rounded-lg object-cover"
                />
                <h3 className="font-semibold text-gray-900">Cocina</h3>
                <p className="text-sm text-gray-600">
                  Cocina in house con adaptaciones dietéticas
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Image
                  src="/vecteezy_multilayered-flowerbeds-in-garden_1971420.jpg"
                  width="200"
                  height="200"
                  alt="Activity room"
                  className="aspect-square overflow-hidden rounded-lg object-cover"
                />
                <h3 className="font-semibold text-gray-900">
                  Programas de Actividades
                </h3>
                <p className="text-sm text-gray-600">
                  Actividades diarias, entretenimiento y eventos sociales
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Image
                  src="/camas-complejo.jpg"
                  width="200"
                  height="200"
                  alt="Private rooms"
                  className="aspect-square overflow-hidden rounded-lg object-cover"
                />
                <h3 className="font-semibold text-gray-900">
                  Habitaciones Privadas
                </h3>
                <p className="text-sm text-gray-600">
                  Espacios cómodos y personalizados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-rose-50"
        >
          <div className="px-4 md:px-6 max-w-screen-2xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                    Agende su visita hoy
                  </h2>
                  <p className="text-gray-600 md:text-lg">
                    Nos encantaría mostrarle nuestras instalaciones y responder
                    sus preguntas. Contáctenos para agendar una visita.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-rose-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        1139220767 (Lola) / 1160568089 (María)
                      </p>
                      <p className="text-sm text-gray-600">Disponibles 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-rose-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        complejodeleste@info@gmail.com
                      </p>
                      <p className="text-sm text-gray-600">
                        Respondemos en menos de 24 horas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-rose-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Correa 2346 - Núñez - CABA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-rose-200">
                <CardHeader className={undefined}>
                  <CardTitle className="text-gray-900">
                    Solicitar Información
                  </CardTitle>
                  <CardDescription className={undefined}>
                    Complete el formulario y nos pondremos en contacto en menos
                    de 24 horas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium text-gray-900"
                      >
                        Nombre
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Ingrese su nombre"
                        className={undefined}
                        type={undefined}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium text-gray-900"
                      >
                        Apellido
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Ingrese su apellido"
                        className={undefined}
                        type={undefined}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ingrese su correo electrónico"
                      className={undefined}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-900"
                    >
                      Telefono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Ingrese su número de teléfono"
                      className={undefined}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-900"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Cuéntenos sobre sus necesidades o dudas..."
                    />
                  </div>
                  <Button
                    className="w-full bg-rose-600 hover:bg-rose-700"
                    variant={undefined}
                    size={undefined}
                  >
                    Enviar Mensaje
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-rose-600" />
          <p className="text-xs text-gray-600">
            © 2025 Complejo del Este SRL todos los derechos reservados.
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-600"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-600"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-600"
          >
            Accessibility
          </Link>
        </nav>
      </footer>
    </div>
  );
}
