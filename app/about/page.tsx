export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">MyGear</h1>
        <p className="text-lg text-gray-600">
          Nâng tầm trải nghiệm công nghệ của bạn
        </p>
      </div>

      <img
        src="/assets/hero-electronics.jpg"
        alt="Thiết bị công nghệ hiện đại"
        className="rounded-2xl shadow-lg mx-auto mb-10"
      />

      <div className="space-y-8 leading-relaxed text-justify">
        <p>
          <strong>MyGear</strong> là cửa hàng trực tuyến chuyên cung cấp thiết bị điện tử
          và phụ kiện công nghệ chính hãng, mang đến cho bạn những sản phẩm chất
          lượng, giá tốt và trải nghiệm mua sắm tiện lợi nhất.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500">Sản phẩm đa dạng</h2>
        <p>
          Từ laptop, bàn phím cơ, tai nghe, chuột gaming, loa Bluetooth cho đến
          thiết bị mạng và linh kiện máy tính – tất cả đều được chọn lọc kỹ lưỡng
          từ những thương hiệu uy tín.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500">Dịch vụ chuyên nghiệp</h2>
        <p>
          Đội ngũ MyGear luôn sẵn sàng hỗ trợ khách hàng 24/7 – từ khâu tư vấn
          đến hỗ trợ kỹ thuật sau mua, giúp bạn có trải nghiệm mượt mà nhất.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500">Tầm nhìn & Sứ mệnh</h2>
        <p>
          Chúng tôi mong muốn trở thành nền tảng thương mại điện tử hàng đầu Việt
          Nam trong lĩnh vực công nghệ – nơi mọi người có thể an tâm mua sắm và
          tận hưởng trải nghiệm hiện đại.
        </p>

        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Khám phá ngay
          </a>
        </div>
      </div>
    </section>
  );
}
