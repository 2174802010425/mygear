import Link from 'next/link'
export default function AboutPage() {
  return (
    <>
      <header className="bg-blue-700 text-white p-8 shadow-lg">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                <span className="block">MYGEAR:</span>
                <span className="block text-blue-200 text-3xl mt-1">Điểm Đến Tin Cậy Cho Mọi Linh Kiện Điện Tử Bạn Cần!</span>
            </h1>
        </div>
    </header>

    <main className="container mx-auto px-4 py-12">
        <article className="bg-white p-6 md:p-10 rounded-xl shadow-2xl">

            <section className="mb-10 border-b pb-6 border-blue-100">
                <p className="text-lg mb-4 leading-relaxed">
                    Bạn là một người đam mê điện tử, một kỹ sư đang tìm kiếm những linh kiện chất lượng, hay đơn giản chỉ là muốn sửa chữa đồ dùng trong nhà? Dù bạn là ai, <strong className="text-blue-600">MyGear</strong> chính là địa chỉ không thể bỏ qua tại <strong className="text-red-500">[Địa điểm của bạn - ví dụ: Hà Nội, TP.HCM, Đà Nẵng]</strong> và trên toàn quốc!
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
                    Chào Mừng Đến Với Thế Giới Linh Kiện Điện Tử Đa Dạng Tại MyGear
                </h2>
                <p className="text-lg leading-relaxed">
                    Chúng tôi hiểu rằng việc tìm kiếm linh kiện điện tử phù hợp, chất lượng cao với giá cả hợp lý có thể là một thách thức. Đó là lý do tại sao <strong className="text-blue-600">MyGear</strong> ra đời, với sứ mệnh trở thành đối tác tin cậy của bạn trong mọi dự án điện tử. Từ những con chip nhỏ nhất đến các module phức tạp, chúng tôi tự hào cung cấp một danh mục sản phẩm phong phú, đáp ứng mọi nhu cầu từ cơ bản đến chuyên nghiệp.
                </p>
            </section>
            
            <div className="mb-10 shadow-lg rounded-lg overflow-hidden border-4 border-blue-200">
               
                <p className="text-center text-sm italic text-gray-500 py-2 bg-gray-100">
                    MyGear: Không gian mua sắm hiện đại, đa dạng sản phẩm và đội ngũ hỗ trợ chuyên nghiệp.
                </p>
            </div>

            <section className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 pb-2 border-red-500">
                    Tại Sao Nên Chọn MyGear Để Mua Linh Kiện Điện Tử?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 11H3v2a2 2 0 002 2h2a2 2 0 002-2v-2H5zM11 5h2a2 2 0 002-2v2a2 2 0 00-2 2h-2V5zM11 15v2a2 2 0 002 2h2a2 2 0 002-2v-2h-4z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            1. Sản Phẩm Đa Dạng – Đáp Ứng Mọi Nhu Cầu
                        </h3>
                        <p className="text-gray-700">
                            Chúng tôi cung cấp hàng ngàn sản phẩm từ các nhà sản xuất uy tín trên thế giới. Dù bạn cần diode, transistor, IC, cảm biến, Arduino, Raspberry Pi, hay các loại dây dẫn, connector... <strong className="text-blue-500">MyGear</strong> đều có!
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m5.66 4.34a8 8 0 10-11.32-11.32A8 8 0 0017.66 16.34z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            2. Chất Lượng Đảm Bảo – Nguồn Gốc Rõ Ràng
                        </h3>
                        <p className="text-gray-700">
                            <strong className="text-blue-500">MyGear</strong> cam kết chỉ bán các sản phẩm chất lượng cao, có nguồn gốc xuất xứ rõ ràng. Sự an tâm của bạn là ưu tiên hàng đầu, giúp dự án của bạn hoạt động ổn định và bền bỉ.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M8 10a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"></path></svg>
                            3. Giá Cả Cạnh Tranh – Tiết Kiệm Chi Phí
                        </h3>
                        <p className="text-gray-700">
                            Chúng tôi luôn nỗ lực mang đến mức giá tốt nhất trên thị trường. Thường xuyên có các chương trình <strong className="text-red-500">khuyến mãi hấp dẫn</strong> cho khách hàng thân thiết và mua số lượng lớn.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 11.586l-1.293-1.293z"></path></svg>
                            4. Tư Vấn Chuyên Nghiệp – Hỗ Trợ Tận Tình
                        </h3>
                        <p className="text-gray-700">
                            Đội ngũ <strong className="text-blue-500">MyGear</strong> là những chuyên gia có kiến thức sâu rộng về điện tử, sẵn sàng hỗ trợ bạn tìm ra giải pháp tối ưu nhất cho dự án.
                        </p>
                    </div>
                </div>
            </section>
            
            <div className="mb-10 shadow-lg rounded-lg overflow-hidden border-4 border-red-200">

                <p className="text-center text-sm italic text-gray-500 py-2 bg-gray-100">
                    Khám phá kho module, chip, và công cụ đo lường đa dạng tại MyGear.
                </p>
            </div>

            <section className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-500 pl-3">
                    Danh Mục Sản Phẩm Nổi Bật Của MyGear:
                </h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc pl-5">
                    <li className="hover:text-blue-600 transition duration-150">
                        <strong className="font-semibold">Linh kiện bán dẫn:</strong> Diode, Transistor, MOSFET, IC các loại (logic, op-amp, vi điều khiển...).
                    </li>
                    <li className="hover:text-blue-600 transition duration-150">
                        <strong className="font-semibold">Linh kiện thụ động:</strong> Điện trở, Tụ điện (gốm, hóa, film), Cuộn cảm.
                    </li>
                    <li className="hover:text-blue-600 transition duration-150">
                        <strong className="font-semibold">Module và Kit phát triển:</strong> <span className="text-red-500">Arduino, Raspberry Pi</span>, ESP32/ESP8266, các loại màn hình LCD/OLED.
                    </li>
                    <li className="hover:text-blue-600 transition duration-150">
                        <strong className="font-semibold">Cảm biến và Actuators:</strong> Cảm biến nhiệt độ, độ ẩm, khoảng cách, động cơ servo, step motor.
                    </li>
                    <li className="hover:text-blue-600 transition duration-150">
                        <strong className="font-semibold">Dụng cụ và Phụ kiện:</strong> Mỏ hàn, đồng hồ đo đa năng, dây test, nguồn xung, connector.
                    </li>
                </ul>
            </section>

            <section className="p-8 bg-blue-100 rounded-xl text-center shadow-inner">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    Liên Hệ MyGear Ngay Hôm Nay!
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                    Đừng ngần ngại liên hệ hoặc ghé thăm cửa hàng của chúng tôi để trải nghiệm sự khác biệt.
                </p>
                <div className="space-y-4 md:space-y-0 md:space-x-6">
                    <Link href="/" className="inline-block px-8 py-3 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105">
                        👉 Xem Sản Phẩm Online Ngay!
                    </Link>
                    <a href="tel:[SỐ ĐIỆN THOẠI CỦA BẠN]" className="inline-block px-8 py-3 bg-gray-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105">
                        📞 Hotline: 0931469037
                    </a>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                    Địa chỉ cửa hàng: <strong className="text-gray-700">[ĐỊA CHỈ CỬA HÀNG CỦA BẠN]</strong>
                </p>
            </section>

        </article>
    </main>

    <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto text-center text-sm">
            <p>&copy; <span id="year">2025</span> MyGear. Mọi Quyền Được Bảo Lưu. | Linh Kiện Điện Tử Chất Lượng Cao.</p>
        </div>
        <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
    </footer>    
    </>
  );
}
