import Image from "next/image";

export default function StorylinePage() {
    return (
        <div className="w-full">
            <div className="mx-auto w-full pt-16 px-8 md:px-32">
                <div className="text-center">
                    <div className="flex justify-between items-center">
                        <hr className="border-t-8 border-red-500 w-1/4" />
                        <h1 className="text-red-500 text-3xl md:text-5xl text-center font-black mb-8 uppercase">
                            PHỐ CỔ HỘI AN
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between my-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="mb-4">Bạn có muốn lạc vào một thế giới cổ kính, nơi thời gian như ngừng trôi? Hãy đến với Hội An, một thành phố cổ kính ven sông, nơi bạn sẽ được trải nghiệm những điều kỳ diệu.
                                Nếu có dịp đến phố Hội lần đầu, chắc hẳn bạn sẽ không khỏi ngạc nhiên khi nhìn thấy sự pha trộn văn hóa vẫn tồn tại trên từng nếp nhà, ngõ hẻm. Kiến trúc của thành phố này là sự kết hợp giao hòa giữa nét đẹp truyền thống Việt Nam cùng những tinh túy của văn hóa Á Đông.</p>
                            <p className="mb-4">
                                Phố cổ Hội An được biết đến như một khu đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng của tỉnh Quảng Nam. Thành phố Hội An cách Đà Nẵng khoảng 30km về phía Nam, tương đương khoảng 1 giờ chạy xe.</p>
                            <p className="mb-4">Và chính lối kiến trúc này đã giúp Hội An trở thành một trong những địa điểm du lịch cực kì nổi tiếng tại Việt Nam. Hằng năm chào đón một số lượng lớn khách du lịch tới tham quan và khám phá, trở thành một trong số những địa điểm phải đến nếu bạn ghé Đà Nẵng. Với thời gian mà Hội An đã tồn tại và chứng kiến thì không quá khi xem Hội An chính là một nhân chứng sống, một bảo tàng lưu giữ về kiến trúc và lối sống đô thị của người dân nơi đây.</p>
                            <p className="mb-4">
                                Bên cạnh đó, sau khi xem xét những nét kiến trúc văn hóa đặc trưng và những gì mà thành phố Hội An đã chứng kiến bên cạnh sông Thu Bồn trong suốt nhiều thế kỉ, tại kỳ họp lần thứ 23 ngày 4/12/1999, Tổ chức Giáo dục, Khoa học và Văn hóa Liên Hiệp Quốc (UNESCO) đã công nhận đô thị cổ Hội An là một di sản văn hóa thế giới.
                                Hội An - viên ngọc lung linh bên dòng Thu Bồn, sẽ luôn là điểm đến níu chân du khách bởi vẻ đẹp cổ kính, bình yên và đầy sức sống.</p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                            <Image src="/dishoian.svg" alt="Pho co Hoi An" height={460} width={460} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <hr className="border-t-8 border-red-500 w-1/4" />
                        <h1 className="text-red-500 text-3xl md:text-5xl text-center font-black mb-8 uppercase">
                            THÁNH ĐỊA MỸ SƠN
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4" />
                    </div>
                    <div className="flex flex-col md:flex-row-reverse justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="mb-4">Giữa lòng Quảng Nam, ẩn mình trong một thung lũng yên bình là quần thể đền tháp Mỹ Sơn - một kiệt tác kiến trúc của người Chăm cổ đại. Với những ngôi tháp cao vút chạm tới mây trời, Mỹ Sơn như một giấc mơ huyền ảo, cuốn hút biết bao du khách.</p>
                            <p className="mb-4">
                                Mang ý nghĩa và giá trị lịch sử to lớn, Khu di tích đền tháp Mỹ Sơn có một vị trí rất quan trọng trong nền văn hóa nghệ thuật của vùng Đông Nam Á. Trước những giá trị nổi bật toàn cầu của một di sản văn hóa cần phải được bảo vệ vì lợi ích của cả nhân loại, ngày 4/12/1999, Di tích này được Uỷ ban Văn hoá Khoa học Giáo dục Liên hiệp quốc (UNESCO) công nhận là di sản văn hoá thế giới.</p>
                            <p className="mb-4">Khu di tích Mỹ Sơn thuộc địa phận xã Duy Phú, huyện Duy Xuyên, tỉnh Quảng Nam, cách thành phố Đà Nẵng khoảng 70km về hướng tây nam. Di tích tọa lạc trong một thung lũng kín có địa thế núi non hùng vĩ, thâm nghiêm ở tỉnh Quảng Nam, được khởi công từ thế kỷ IV bởi vị vua Bhadravarman (trị vì từ năm 349 đến năm 361) và kết thúc vào cuối thế kỷ thứ XIII, đầu thế kỷ XIV dưới triều vua Jaya Simhavarman III (Chế Mân). </p>
                            <p className="mb-4">Không đồ sộ kỳ vĩ như các quần thể, di tích Chămpa khác nhưng Mỹ Sơn vẫn có một chỗ đứng quan trọng trong nền nghệ thuật Đông Nam Á bởi nó là khu di tích duy nhất của cả khu vực có thời gian phát triển liên tục gần 9 thế kỷ, kiến trúc của Mỹ Sơn đã chắt lọc được những tinh hoa của người nghệ sĩ, sự kết hợp giữa kỹ thuật kiến trúc và nghệ thuật trang trí người Champa xưa đã tạo cho các đền tháp một vẻ uy nghiêm và kỳ bí.</p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-start items-center mt-4 md:mt-0">
                            <Image src="/dismyson.svg" alt="Thanh dia My Son" height={460} width={460} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <hr className="border-t-8 border-red-500 w-1/4" />
                        <h1 className="text-red-500 text-3xl md:text-5xl text-center font-black my-8 uppercase">
                            CỐ ĐÔ HUẾ
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="mb-4">Bạn có bao giờ tò mò về cuộc sống của vua chúa thời Nguyễn? Bạn muốn khám phá những bí ẩn ẩn chứa trong những cung điện cổ kính? Hãy đến với Cố đô Huế, nơi bạn sẽ được trải nghiệm một hành trình khám phá đầy thú vị.</p>
                            <p className="mb-4">Cố đô Huế từng là trái tim của một đế quốc phong kiến hùng mạnh vào đầu thế kỷ XIX với những công trình kiến trúc độc đáo, các nghi lễ tôn giáo trang nghiêm gắn liền cùng nhiều sự kiện lịch sử quan trọng. Vào năm 1993, UNESCO đã công nhận quần thể di tích cố đô Huế là Di sản Văn hoá Thế giới đầu tiên khẳng định giá trị mang tính toàn cầu. Đây là một sự kiện trọng đại trong lịch sử văn hoá Việt Nam, trở thành niềm tự hào của dân tộc ta.</p>
                            <p className="mb-4">
                                Cố đô Huế không chỉ là một di sản văn hóa vật thể, mà còn là một di sản tinh thần vô giá. Đến với Huế, du khách không chỉ được chiêm ngưỡng những công trình kiến trúc độc đáo mà còn được trải nghiệm một không gian văn hóa đậm đà bản sắc, tìm về cội nguồn và cảm nhận vẻ đẹp của truyền thống dân tộc.</p>
                            <p className="mb-4">
                                Với hệ thống kiến trúc đồ sộ, các lễ nghi cung đình độc đáo và những giá trị văn hóa tinh thần sâu sắc, Cố đô Huế là minh chứng sinh động cho sự phát triển của nền văn minh Đại Việt. Việc bảo tồn và phát huy giá trị của di sản này là trách nhiệm của mỗi người dân Việt Nam.&rdquo;</p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                            <Image src="/discodo.svg" alt="Co do Hue" height={460} width={460} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <hr className="border-t-8 border-red-500 w-1/4" />
                        <h1 className="text-red-500 text-3xl md:text-5xl text-center font-black my-8 uppercase">
                            HOÀNG THÀNH THĂNG LONG
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4" />
                    </div>
                    <div className="flex flex-col md:flex-row-reverse justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="mb-4">Bạn có muốn khám phá một kho tàng lịch sử ngay giữa lòng Hà Nội? Hãy đến với Hoàng thành Thăng Long, nơi bạn sẽ được trải nghiệm một hành trình khám phá đầy thú vị.</p>
                            <p className="mb-4">Trung tâm Hoàng Thành Thăng Long – Hà Nội là di sản thứ 6 của Việt Nam được UNESCO công nhận, sau Vịnh Hạ Long, Vườn Quốc gia Phong Nha – Kẻ Bàng (di sản thiên nhiên), Quần thể di tích cố đô Huế, Phố cổ Hội An, Thánh địa Mỹ Sơn (di sản văn hóa). Không kỳ vĩ lớn lao, không đẹp đẽ rực rỡ, song di sản Hoàng Thành Thăng Long có một giá trị đặc biệt mà những di sản khác ở Việt Nam không có – Đó là giá trị văn hoá – lịch sử của chiều dài ngàn năm văn hiến của Thủ đô.</p>
                            <p className="mb-4">Nếu bạn đã từng nghiêng mình trước vẻ đẹp trầm mặc, uy nghi của Hoàng thành Huế, thì chắc chắn sẽ không thể bỏ qua di chỉ khảo cổ Hoàng thành Thăng Long ở thủ đô, một công trình kiến trúc đồ sộ được xây dựng qua nhiều triều đại phong kiến của Việt Nam, và cũng là một trong những di tích quan trọng bậc nhất trong hệ thống các di tích lịch sử của Việt Nam</p>
                            <p className="mb-4">
                                Qua bao thăng trầm lịch sử, Hoàng thành Thăng Long vẫn giữ được những dấu tích của các triều đại phong kiến, từ Lý, Trần, Lê, Mạc đến Nguyễn. Nơi đây là chứng nhân lịch sử của những sự kiện trọng đại của đất nước.&rdquo;</p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center  items-center mt-4 md:mt-0">
                            <Image src="/dishoangthanh.svg" alt="Hoang thanh Thang Long" height={460} width={460} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <hr className="border-t-8 border-red-500 w-1/4" />
                        <h1 className="text-red-500 text-3xl md:text-5xl text-center font-black my-8 uppercase">
                            THÀNH NHÀ HỒ
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="mb-4">Thành nhà Hồ, một kỳ quan kiến trúc độc đáo, là minh chứng cho sự phát triển của kiến trúc Việt Nam thời kỳ trung đại</p>
                            <p className="mb-4">
                                Thành Nhà Hồ là công trình kiến trúc lịch sử ở xã Vĩnh Long, huyện Vĩnh Lộc, tỉnh Thanh Hóa, nơi đây cách trung tâm Hà Nội khoảng 140km. Thành Nhà Hồ được xây dựng từ những năm cuối của thế kỷ 14 tính đến hiện tại đã tồn tại hơn 600 năm. Đến năm 1962, Thành Nhà Hồ chính thức trở thành di tích cấp quốc gia. Năm 2011, di tích lịch sử này được UNESCO công nhận là di sản văn hóa thế giới.</p>
                            <p className="mb-4">Thành Nhà Hồ là hiện tượng có tính đột khởi về kỹ thuật khai thác, chế tác và xây dựng một đại công trình với nguyên liệu cơ bản là các tảng đá lớn. Không phải công trình duy nhất trong nước và khu vực có lối kiến trúc bằng đá, nhưng Thành Nhà Hồ vẫn là minh chứng “vô tiền khoáng hậu” về kỹ thuật xây dựng khác biệt, độc đáo.</p>
                            <p className="mb-4">
                                Theo sử liệu, năm 1397, trước nguy cơ đất nước bị giặc Minh từ phương Bắc xâm lăng, Hồ Quý Ly đã chọn đất An Tôn (nay là Vĩnh Lộc, Thanh Hóa) để xây dựng kinh thành nhằm chuẩn bị cho một cuộc kháng chiến lâu dài.</p>
                            <p className="mb-4">Với tư cách là kinh đô của nhà nước Đại Việt cuối Trần đầu Hồ, Tây Đô được xây dựng dựa trên những nguyên tắc cơ bản về địa thế, phong thủy, tiền án hậu chẩm đều có hình sông thế núi bao bọc. Thành tọa lạc ở vị trí giáp ranh đồng bằng và miền núi, cảnh quan đẹp, sông núi hài hòa, địa hình đa dạng tạo lợi thế về quân sự. Phía Bắc có núi Thổ Tượng, phía Tây có núi Ngưu Ngọa, phía Đông có núi Hắc Khuyển, phía Nam còn là nơi hội tụ của sông Mã chảy từ phía Tây về và sông Bưởi chảy tới. </p>
                            <p className="mb-4">Sau 10 năm được UNESCO công nhận là di sản văn hóa thế giới (2011-2021), Thành nhà Hồ đã bảo tồn phát huy giá trị vốn có, thực hiện nhiều cuộc khai quật và đã tìm thấy nhiều cứ liệu quý, góp phần rất lớn cho việc trùng tu, tôn tạo tòa thành đá “độc nhất vô nhị” này.</p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                            <Image src="/disnhaho.svg" alt="Thanh nha Ho" height={460} width={460} className="max-w-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full p-12 flex justify-center shadow-xl shadow-red-200 mb-20">
            </div>
        </div>
    );
}
