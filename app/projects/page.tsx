import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <main className="max-w-screen-xl m-auto p-2 grid md:grid-cols-4 gap-2">
      <Card>
        <CardHeader>
          <CardTitle>FLOKOOB</CardTitle>
          <CardDescription>Eventos deportivos</CardDescription>
        </CardHeader>
        <CardContent>
          Flokoob permite publicar eventos deportivos y facilitar el proceso de
          inscripción, pago y acreditación de los competidores, tomar las
          métricas por cronometraje y compartir sus resultados mediante ticket
          digital. En el shop, el atleta también puede personalizar su kit con
          accesorios, indumentaria, geles repositores de energía, etc.
          <CardFooter className="flex justify-end mt-2 p-0">
            <Button>
              <a href="https://flokoob.vercel.app" target="_blank">
                Demo
              </a>
            </Button>
          </CardFooter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom AI Chatbot</CardTitle>
          <CardDescription>Your customisable AI chat agent.</CardDescription>
        </CardHeader>
        <CardContent>
          Your customisable AI chat agent that helps you manage your customer
          conversations.
          <CardFooter className="flex justify-end mt-2 p-0">
            <Button>
              <a
                href="https://custom-ai-chatbot-mocha.vercel.app/"
                target="_blank"
              >
                Demo
              </a>
            </Button>
          </CardFooter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Programación, Robótica y pensamiento computacional
          </CardTitle>
          <CardDescription>
            ¿Cuáles son las habilidades demandadas en estos tiempos?
          </CardDescription>
        </CardHeader>
        <CardContent>
          Nos introducimos en el mundo de la programación, la robótica y el
          pensamiento computacional. Abordaremos conceptos fundamentales y
          llevaremos a cabo varios proyectos.
          <CardFooter className="flex justify-end mt-2 p-0">
            <Button>
              <a
                href="https://docs.google.com/document/d/1pQBDmInx3LE_RfnpFDMvIPeqjonCtEehYeQd6Zk7OW4/edit?usp=sharing"
                target="_blank"
              >
                Demo
              </a>
            </Button>
          </CardFooter>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Trigonometría y las medidas indirectas</CardTitle>
          <CardDescription>¿Qué son las medidas indirectas?</CardDescription>
        </CardHeader>
        <CardContent>
          Abordamos varios conceptos fundamentales de la trigonometría y su
          aplicación en la medición indirecta. ¿Cómo medimos el ancho de un río?
          ¿La distancia hasta el sol? Construimos un telémtro y desarrollamos un
          software para automatizar cómputos.
          <CardFooter className="flex justify-end mt-2 p-0">
            <Button>
              <a
                href="https://drive.google.com/file/d/1fZJxg15YZPu6oQBdzGcQdDluB3C8EHS6/view?usp=sharing"
                target="_blank"
              >
                Demo
              </a>
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </main>
  );
}
