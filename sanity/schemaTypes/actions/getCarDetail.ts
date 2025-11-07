import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

export const getCarDetail = async (slug: string) => {
    const CAR_DETAIL_QUERY = defineQuery(`
        *[_type == 'car' && slug.current == $slug][0] {
            _id,
            name,
            slug,
            price,
            description,
            image,
            brand-> {
                _id,
                name
            }
        }
    `)
    
    try {
        const car = await sanityFetch({
            query: CAR_DETAIL_QUERY,
            params: { slug }
        })
        return car.data || null
    } catch (error) {
        console.log("Error fetching car detail:", error)
        return null
    }
}

