import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Layout } from "../../components/layout/layout";
import { getLatestAdvertisements } from "./service";
import { type Advert } from "./service";

function AdvertisementPage() {
  const [advertisements, setAdvertisemets] = useState<Advert[]>([]);
  useEffect(() => {
    getLatestAdvertisements()
      .then((data) => {
        setAdvertisemets(data);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout title="">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-5xl font-extrabold text-pink-700">
          Advertisements{" "}
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advertisements.map((advertisement) => (
            <div
              key={advertisement.id}
              className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                {advertisement.name}
              </h3>

              {advertisement.photo ? (
                <img
                  src={advertisement.photo}
                  alt={advertisement.name}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
              ) : (
                <div className="mb-4 flex h-48 w-full items-center justify-center rounded-lg bg-gray-200 text-sm text-gray-500">
                  No image available
                </div>
              )}

              <div className="mb-2 text-base text-gray-600">
                <span className="font-medium">Sale: </span>
                {advertisement.sale ? "Yes" : "No"}
              </div>

              <div className="mb-2 text-base text-gray-600">
                <span className="font-medium">Price: </span>
                {advertisement.price}€
              </div>

              <div className="mb-2 text-base text-gray-600">
                <span className="font-medium">Tags: </span>
                {advertisement.tags.join(", ")}
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
