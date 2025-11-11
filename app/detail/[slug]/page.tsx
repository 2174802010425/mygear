import { getCarDetail } from "@/sanity/schemaTypes/actions/getCarDetail"
import { notFound } from "next/navigation"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const carDetail = await getCarDetail(slug)

  console.log("Slug:", slug)
  console.log("Car Detail:", carDetail)

  if (!carDetail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Ảnh sản phẩm */}
        <div className="relative w-full h-[400px] bg-gray-200">
          {carDetail.image ? (
            <Image
              src={urlFor(carDetail.image).url()}
              alt={carDetail.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No image available
            </div>
          )}
        </div>

        {/* Nội dung */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {carDetail.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            {carDetail.price && (
              <p className="text-3xl font-semibold text-red-600">
                {carDetail.price.toLocaleString()} ₫
              </p>
            )}
            {carDetail.brand && (
              <span className="text-lg text-gray-600">
                🚘 Brand:{" "}
                <span className="font-medium text-gray-800">
                  {carDetail.brand.name}
                </span>
              </span>
            )}
            {carDetail.year && (
              <span className="text-lg text-gray-600">
                📅 Year:{" "}
                <span className="font-medium text-gray-800">
                  {carDetail.year}
                </span>
              </span>
            )}
          </div>

          {/* Thông tin mô tả */}
          {carDetail.description && (
            <div className="mt-4 border-t pt-6 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                Mô tả chi tiết
              </h2>
              <p>{carDetail.description}</p>
            </div>
          )}

          {/* Các thông số kỹ thuật */}
          {carDetail.specs && (
            <div className="mt-6 border-t pt-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                Thông số kỹ thuật
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                {Object.entries(carDetail.specs).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="capitalize text-gray-600">{key}</span>
                    <span className="font-medium">{String(value)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
