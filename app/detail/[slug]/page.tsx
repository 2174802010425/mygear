import { getCarDetail } from "@/sanity/schemaTypes/actions/getCarDetail"
import { notFound } from "next/navigation"

export default async function CarDetailPage({params} : {params : Promise<{slug : string}>}) {
    const {slug} = await params
    const carDetail = await getCarDetail(slug)
    
    console.log("Slug:", slug)
    console.log("Car Detail:", carDetail)
    
    if (!carDetail) {
        notFound()
    }
    
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-10 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-red-500 mb-4">{carDetail.name}</h1>
                {carDetail.price && (
                    <p className="text-2xl font-semibold text-gray-800">
                        {carDetail.price.toLocaleString()} VND
                    </p>
                )}
                {carDetail.brand && (
                    <p className="text-lg text-gray-600 mt-2">Brand: {carDetail.brand.name}</p>
                )}
            </div>
        </div>
    )
}