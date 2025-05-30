import { client } from "../../api/client"

const adverts_url = "/api/v1/adverts"

export interface FormAdverts {
    name: string,
    sale: boolean,
    price: number,
    tags: string[],
    photo?: string | null,
};

export interface Advert extends FormAdverts {
    id: string,
    createdAt: string,
}


export const getLatestAdvertisements = async (): Promise<Advert[]> => {
    const response = await client.get<Advert[]>(adverts_url)
    return response.data;
}