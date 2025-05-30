import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Layout } from "../../components/layout/layout"
import { getLatestAdvertisements } from "./service";
import { type Advert } from "./service";


function AdvertisementPage() {
  const [advertisements, setAdvertisemets] = useState<Advert[]>([])
    useEffect(()=> {
      getLatestAdvertisements()
        .then((data) => {
          setAdvertisemets(data);
        })
        .catch((error: unknown) => {
          console.log(error)
        });
    }, []); 

  return (
    <Layout title="Listado de anuncios">
      <div>
        <h1 className="text-4xl font-bold text-pink-700" >Advertisement Page!!!</h1>
        <ul className="list-inside list-disc">
          {advertisements.map((advertisement) => (
            <div>
            <li key={advertisement.id}>
              <div>
              <h3>{advertisement.name}</h3>
              </div>
              <div>
              {advertisement.sale}
              </div>
              <div>
              {advertisement.price}
              </div>
              <div>
              {advertisement.tags}
              </div>
              <div>
              {advertisement.photo}
              </div>
            </li>

            </div>
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
