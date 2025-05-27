import { Button } from "../../components/button";


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
    <div>
      <h1>Advertisement Page!!!</h1>
      <ul className="list-inside list-disc">
        {advertisements.map((advertisement) => (
          <li>{advertisement.name}</li>
        ))}
      </ul>
      <Button
              text="Click"
              classes="w-full rounded px-4 py-2 text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none"
              type="submit"
              disabled={true}
            />
    </div>
  );
}

export default AdvertisementPage;
