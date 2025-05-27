import { client } from "../../api/client"

const adverts_url = "api/adverts"

export const getLatestAdvertisements = async () => {
    const advertisements = await client.get(adverts_url)
}