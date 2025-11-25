import { getCarDetail } from "@/sanity/schemaTypes/actions/getCarDetail";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carDetail = await getCarDetail(slug);

  if (!carDetail) notFound();

  return (
    <article className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Ảnh sản phẩm */}
        <figure className="w-full h-auto bg-white rounded-2xl shadow-md p-3">
          {carDetail.image ? (
            <Image
              src={urlFor(carDetail.image).url()}
              alt={`Hình ảnh ${carDetail.name}`}
              width={900}
              height={600}
              className="rounded-xl object-cover w-full h-auto"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-[300px] text-gray-400">
              No image available
            </div>
          )}
          <figcaption className="text-sm text-gray-500 mt-2">
            {carDetail.name}
          </figcaption>
        </figure>

        {/* Nội dung sản phẩm */}
        <header className="bg-white rounded-2xl p-8 shadow-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {carDetail.name}
          </h1>

          {/* Giá + Brand + Year */}
          <div className="flex flex-wrap items-center gap-5 mb-6">
            {carDetail.price && (
              <p className="text-3xl font-semibold text-red-600">
                {carDetail.price.toLocaleString()} ₫
              </p>
            )}
            {carDetail.brand && (
              <span className="text-lg text-gray-600">
                Hãng:{" "}
                <strong className="text-gray-900">{carDetail.brand.name}</strong>
              </span>
            )}
            {carDetail.year && (
              <span className="text-lg text-gray-600">
                Năm sản xuất:{" "}
                <strong className="text-gray-900">{carDetail.year}</strong>
              </span>
            )}
          </div>

          {/* Call to Action (SEO cũng thích phần này) */}
          <aside className="mt-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow">
              Liên hệ tư vấn ngay
            </button>
          </aside>
        </header>
      </div>

      {/* Mô tả sản phẩm */}
      <section className="max-w-6xl mx-auto bg-white rounded-2xl p-10 shadow-lg mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Mô tả chi tiết sản phẩm
        </h2>

        <div className="prose prose-lg max-w-none prose-img:rounded-xl prose-headings:text-gray-900 prose-p:text-gray-700">
          <PortableText
            value={carDetail.description}
            components={{
              types: {
                image: ({ value }) => (
                  <Image
                    src={urlFor(value).url()}
                    alt={value?.alt || "Hình mô tả sản phẩm"}
                    width={900}
                    height={600}
                    className="rounded-xl my-6"
                  />
                ),
                videoEmbed: ({ value }) => (
                  <div className="my-6">
                    <iframe
                      src={value.url}
                      className="w-full aspect-video rounded-xl"
                      allowFullScreen
                    />
                  </div>
                ),
              },
            }}
          />
        </div>
      </section>
    </article>
  );
}
