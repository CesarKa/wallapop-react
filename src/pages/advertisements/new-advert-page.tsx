import { useEffect, useState } from "react";
import { Button } from "../../components/button"
import { useNavigate } from "react-router";



export const NewAdvertPage = () => {
    const [FormData, setFormData] = useState<AdvertPayLoad>({
        name: "",
        price: 0,
        tags: [],
        sale: false,
        photo: ""
    });
    const [photoFile, setPhotofile] = useState<File | null>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [sekectedTags, setSelectedTags] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getTags = async () => {
            const tags = await getAdverTags();
            setTags();
        };
        getTags();
    }, []);
    
    return (
        <div>
            <h1>
                Crear anuncio
            </h1>
            <form
            onSubmit={handleSubmit}
            >
            {/* <Notification
                successMessage={successMessage}
                errorMessage={errorMessage}
            /> */}
            <div>
                <label 
                htmlFor="name"
                >
                    Nombre <span className="requiered">*</span>
                </label>
                <input 
                type="text"
                name="name"
                id="name"
                required
                value={FormData.name}
                onChange={handlechange} 
                />
            </div>
            
            <div>
                <label 
                htmlFor="name"
                >
                    Precio <span className="requiered">*</span>
                </label>
                <input 
                type="number"
                name="price"
                id="price"
                required
                value={FormData.price}
                onChange={handlechange} 
                />
            </div>

            <div>
            <label>
                Tags <span className="requiered">*</span>
            </label>
                <div>
                    {tags.map((tag) => (
                        <label key={tag}>
                            <input type="checkbox"
                            name="tags"
                            value={tag}
                            className="peer hidden"
                            checked={selectedtags.includes(tag)}
                            onChange={() => toggleTags(tag)} 
                            />
                        <span>
                            {tag}
                        </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label htmlFor="">
                    Tipo <span className="requiered">*</span>
                </label>
                <div>
                    <label 
                    htmlFor="compra"
                    >
                        <input 
                        type="radio"
                        name="sale"
                        id="compra"
                        value="compra"
                        required
                        checked={FormData.sale === true}
                        onChange={handleChange}
                        />
                        <span>
                            compra
                        </span>
                        <label 
                    htmlFor="venta"
                    >
                        <input 
                        type="radio"
                        name="sale"
                        id="venta"
                        value="venta"
                        required
                        checked={FormData.sale === false}
                        onChange={handleChange}
                        />
                        <span>
                            venta
                        </span>
                    </label>
                </div>
            </div>

            {/* <div>
                <label>
                    Foto (opcional)
                </label>
                <div>
                    <label 
                    htmlFor="photo"
                    >
                    <input 
                    type="file" 
                    name="photo" 
                    id="photo"
                    onChange={handleChange} 
                    />
                    </label>
                </div>
            </div>

            <div>
                <Button type="submit">
                    Publicar Anuncio
                </Button>
            </div> */}
            </form>
        </div>
    );
}