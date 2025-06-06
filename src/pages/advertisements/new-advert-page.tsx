import { useEffect, useState, type ChangeEvent } from "react";
import { Button } from "../../components/button";
import { useNavigate } from "react-router";

export const NewAdvertPage = () => {
  const [FormData, setFormData] = useState<AdvertPayLoad>({
    name: "",
    price: 0,
    tags: [],
    sale: true,
    photo: "",
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTags = async () => {
      const tags = await getAdverTags();
      setTags();
    };
    getTags();
  }, []);

  
  const handleSubmit = () => {};

  const handleChange = ({target: {name, value, type, files}, }:ChangeEvent <HTMLInputElement>) => {
    if (type === "file" && files) {
      setPhotoFile(files[0]);
    } else if (name === "price") {
      const parsedPrice = parseFloat(value);
      setFormData((prev) => ({
        ...prev,
        price: isNaN(parsedPrice) ? 0 : parsedPrice,
      }));
    } else if (name === "sale") {
      setFormData((prev) => ({ ...prev, sale: value === "Compra" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

  };

  return (
    <div>
      <h1>Crear anuncio</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Nombre <span className="requiered">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={FormData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="name">
            Precio <span className="requiered">*</span>
          </label>
          <input
            type="number"
            name="price"
            id="price"
            required
            value={FormData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            Tags <span className="requiered">*</span>
          </label>
          {/* <div>
            {tags.map((tag) => (
              <label key={tag}>
                <input
                  type="checkbox"
                  name="tags"
                  value={tag}
                  className="peer hidden"
                  checked={selectedtags.includes(tag)}
                  onChange={() => toggleTags(tag)}
                />
                <span>{tag}</span>
              </label>
            ))}
          </div> */}
        </div>

        <div>
          <label htmlFor="compra">
            Tipo <span className="requiered">*</span>
          </label>
          <div>
            <label htmlFor="compra">
              <input
                type="radio"
                name="sale"
                id="compra"
                value="compra"
                required
                checked={FormData.sale === true}
                onChange={handleChange}
              />
              <span>compra</span>
            </label>
            <label htmlFor="venta">
              <input
                type="radio"
                name="sale"
                id="venta"
                value="venta"
                required
                checked={FormData.sale === false}
                onChange={handleChange}
              />
              <span>venta</span>
            </label>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="photo">Insertar foto (Opcional)</label>

            <input
              type="file"
              name="photo"
              id="photo"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Button
            text="Publicar"
            classes="bg-sky-600 border-4 border-indigo-500/100 rounded bg-primary px-6 py-3 text-white text-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none"
            type="submit"
            disabled={false}
          />
        </div>
      </form>
    </div>
  );
};
