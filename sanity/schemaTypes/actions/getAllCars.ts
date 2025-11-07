import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
export const getAllCars = async () => {
    const CARS_QUERY = defineQuery(`*[_type == 'car'] | order(name asc)`)
    try {
        const cars = await sanityFetch({query : CARS_QUERY})
        return cars.data || []
    } catch (error) {
        console.log(error)
    }
}