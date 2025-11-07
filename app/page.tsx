import { Car } from "@/sanity.types"
import { urlFor } from "@/sanity/lib/image"
import { getAllCars } from "@/sanity/schemaTypes/actions/getAllCars"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import Link from "next/link"
export default async function HomePage() {
  const cars: Car[] = await getAllCars()

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">🚗 Đại lý Ô tô HuyAuto</h1>

      {/* GRID hiển thị 3 cột */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Ảnh xe */}
            {car.image && (
              <div className="relative w-full aspect-[4/3]">
                <Link href={`/detail/${car.slug?.current}`}>
                  <Image
                  src={urlFor(car.image).url()}
                  alt={car.name || "Car image"}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                </Link>
              </div>
            )}

            {/* Nội dung xe */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-1">{car.name}</h2>

              <p className="text-red-600 font-bold text-lg mb-2">
                {car.price ? `${car.price.toLocaleString()} VND` : "Liên hệ"}
              </p>

              {/* Mô tả block content (PortableText) */}
              <div className="text-gray-600 text-sm overflow-hidden line-clamp-3 prose prose-sm max-w-none">
                <PortableText value={car.description!} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
