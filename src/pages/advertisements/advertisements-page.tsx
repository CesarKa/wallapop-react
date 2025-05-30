import { Button } from "../../components/button";
import { Layout } from "../../components/layout/layout"

const advertisements = [
  {
    id: "1",
    name: "iPhone 14 Pro",
    price: 1200,
    type: "venta", 
    tags: ["tecnología", "móvil"],
  },
  {
    id: "2",
    name: "Patinete Xiaomi",
    price: 300,
    type: "venta",
    tags: ["movilidad", "tecnología"],
  },
  {
    id: "3",
    name: "Busco MacBook Pro usado",
    price: 800,
    type: "compra",
    tags: ["tecnología", "portátil"],
  },
  {
    id: "4",
    name: "Cámara Canon EOS 2000D",
    price: 450,
    type: "venta",
    tags: ["fotografía", "tecnología"],
  },
];

function AdvertisementPage() {
  return (
    <Layout title="Listado de anuncios">
      <div>
        <h1 className="text-4xl font-bold text-pink-700" >Advertisement Page!!!</h1>
        <ul className="list-inside list-disc">
          {advertisements.map((advertisement) => (
            <li>{advertisement.name}</li>
          ))}
        </ul>
        <Button
                text="New advert"
                classes="bg-sky-600 border-4 border-indigo-500/100 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                type="submit"
                disabled={true}
        />
      </div>
    </Layout>
  );
}

export default AdvertisementPage;
