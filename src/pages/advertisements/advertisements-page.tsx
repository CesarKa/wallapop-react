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
    <Layout title="">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-5xl font-extrabold text-pink-700 mb-8 text-center">Advertisements </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {advertisements.map((advertisement) => (
        <div 
          key={advertisement.id}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{advertisement.name}</h3>
          
          {advertisement.photo ? (
            <img 
              src={advertisement.photo} 
              alt={advertisement.name} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500 text-sm">
              No image available
            </div>
          )}


          <div className="text-gray-600 text-base mb-2">
            <span className="font-medium">Sale: </span>{advertisement.sale ? "Yes" : "No"}
          </div>

          <div className="text-gray-600 text-base mb-2">
            <span className="font-medium">Price: </span>{advertisement.price}€
          </div>

          <div className="text-gray-600 text-base mb-2">
            <span className="font-medium">Tags: </span>{advertisement.tags.join(", ")}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 flex justify-center">
      <Button
        text="New advert"
        classes="bg-sky-600 border-4 border-indigo-500/100 rounded bg-primary px-6 py-3 text-white text-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none"
        type="submit"
        disabled={false}
      />
    </div>
  </div>
</Layout>

  );
}

export default AdvertisementPage;
