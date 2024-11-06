import Image from "next/image";

export default function StorylinePage() {
    return (
        <div className="w-full">
            <div className="mx-auto w-full pt-16 px-8 md:px-32">
                <div className="text-center">
                    <div className="flex justify-between items-center">
                        <hr className="border-t-8 border-red-500 w-1/4" />
                        <h1 className="text-red-500 text-3xl md:text-5xl text-center font-black mb-4 uppercase">
                            Cốt truyện
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="text-justify text-base md:text-xl">
                                <span className="font-bold">[Nhân vật]</span> Bình Minh, một nhà khoa học trẻ tài năng và đam mê thám hiểm. Từ nhỏ, Minh đã được ông nội mình - một nhà sử học lỗi lạc, kể cho nghe những câu chuyện lịch sử về thế giới tương lai Minh đang sống, nơi mà sự tiến bộ vượt bậc của công nghệ khiến nhân loại đánh mất đi cội nguồn lịch sử của chính mình.
                            </p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                            <Image src="/character.svg" alt="Character" height={380} width={380} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="text-justify text-base md:text-xl">
                                <span className="font-bold">[Mascot]</span> Tinh Tú là người bạn trung thành ông nội để lại cho Minh, có khả năng ghi nhớ toàn bộ di sản kiến thức lịch sử mà ông Minh dày công nghiên cứu hàng năm qua, với sứ mệnh đồng hành cùng Minh trên hành trình tìm lại cội nguồn lịch sử nhân loại.
                            </p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-start items-center mt-4 md:mt-0">
                            <Image src="/mascot.svg" alt="Mascot" height={400} width={400} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="text-justify text-base md:text-xl">
                                <span className="font-bold">[Đồng hồ]</span> Khi còn nhỏ, Bình Minh được ông tặng cho một chiếc đồng hồ cổ, đây không chỉ là kỷ vật quý giá Minh luôn mang theo bên mình mà còn là chìa khóa mở ra hành trình tìm lại cội nguồn nhân loại.
                            </p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                            <Image src="/clock.svg" alt="Clock" height={400} width={400} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="text-justify text-base md:text-xl">
                                <span className="font-bold">[Hộp bí ẩn]</span> Khi ông nội qua đời, Bình Minh được thừa kế một chiếc hộp bí ẩn. Để mở được chiếc hộp này, Minh phải kết hợp nó với chiếc đồng hồ và vượt qua năm thử thách đầy cam go. Mỗi thử thách sẽ đưa Minh đến một địa điểm khác nhau, một thời đại khác nhau, nơi những di sản văn hóa của Việt Nam vẫn còn được bảo tồn.
                            </p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                            <Image src="/box.svg" alt="Box" height={400} width={400} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="text-justify text-base md:text-xl">
                                <span className="font-bold">[Bản đồ]</span> Bình Minh nhận ra rằng chiếc đồng hồ và chiếc hộp không chỉ là những vật kỷ niệm, mà còn là một sứ mệnh mà ông nội đã giao phó cho mình. Đó là sứ mệnh tìm lại cội nguồn, khám phá những giá trị văn hóa đã bị lãng quên, và bảo vệ chúng khỏi sự tàn phá của thời gian.
                            </p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                            <Image src="/mapst.svg" alt="Map" height={400} width={400} className="max-w-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full p-12 flex justify-center shadow-xl shadow-red-200 mb-20">
            </div>
        </div>
    );
}
