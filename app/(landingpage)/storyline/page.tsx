import Image from "next/image";

export default function StorylinePage() {
    return (
        <div className="w-full">
            <div className="mx-auto w-full pt-32 px-32">
                <div className="mb-8 flex flex-col items-center">
                    <h1 className="text-red-500 text-5xl text-center font-black mb-4 uppercase">
                        Hệ thống nhân vật
                    </h1>
                    <Image src="/charandmas.svg" alt="Character and Mascot" height={1024} width={1024} />
                </div>
                <div className="text-center">
                    <div className="flex justify-between items-center">
                        <hr className="border-t-8 border-red-500 w-1/4">
                        </hr>
                        <h1 className="text-red-500 text-5xl text-center font-black mb-4 uppercase">
                            Cốt truyện
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4">
                        </hr>
                    </div>
                    <div className="flex justify-between mt-8">
                        <div className="w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="text-justify">
                                Trong tương lai, nơi những tòa nhà chọc trời vươn cao đến tận mây, nơi con người chìm đắm trong sự tiến bộ vượt bậc của công nghệ mà đã đánh mất đi cội nguồn lịch sử của nhân loại.<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>là một nhà khoa học trẻ tài năng và đam mê thám hiểm. Trong lòng<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>luôn canh cánh nỗi lo về lịch sử, với khát khao tìm về cội nguồn của nhân loại.
                            </p>
                            <p className="text-justify">
                                Khi còn nhỏ,<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>đã được ông nội tặng cho một chiếc đồng hồ cổ. Chiếc đồng hồ ấy không chỉ đơn thuần là một vật dụng, mà còn là một kỷ vật vô giá mà<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>luôn mang theo bên mình. Ông nội<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>, một nhà sử học lỗi lạc, thường kể cho<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>nghe những câu chuyện về lịch sử, về những di sản văn hóa đã bị nhân loại lãng quên.
                            </p>
                        </div>
                        <div className="w-2/5 flex justify-end items-center">
                            <Image src="/clock.svg" alt="Clock" height={580} width={580} />
                        </div>
                    </div>
                    <div className="flex justify-between mt-8 flex-row-reverse">
                        <div className="w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="text-justify">
                                Khi ông nội qua đời, <span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span> đã được thừa kế một chiếc hộp bí ẩn. Chiếc hộp ấy được làm từ một chất liệu kỳ lạ, và trên bề mặt của nó khắc những hoa văn cổ xưa. Theo lời ông nội để lại, để mở được chiếc hộp này, <span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span> phải kết hợp nó với chiếc đồng hồ và vượt qua năm thử thách đầy cam go. Mỗi thử thách sẽ đưa <span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span> đến một địa điểm khác nhau, một thời đại khác nhau, nơi những di sản văn hóa của Việt Nam vẫn còn được bảo tồn.
                            </p>
                            <p className="text-justify">
                                <span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span> nhận ra rằng chiếc đồng hồ và chiếc hộp không chỉ là những vật kỷ niệm, mà còn là một sứ mệnh mà ông nội đã giao phó cho <span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>. Đó là sứ mệnh tìm lại cội nguồn, khám phá những giá trị văn hóa đã bị lãng quên, và bảo vệ chúng khỏi sự tàn phá của thời gian.
                            </p>
                        </div>
                        <div className="w-2/5 flex justify-start items-center">
                            <Image src="/box.svg" alt="Clock" height={580} width={580} />
                        </div>
                    </div>
                    <div className="flex justify-between mt-8">
                        <div className="w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <p className="text-justify">Với sự tò mò và lòng nhiệt huyết của tuổi trẻ,<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>đã quyết định bước vào cuộc hành trình đầy nguy hiểm và kỳ thú.</p>
                            <p className="text-justify"><span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span> biết rằng con đường phía trước sẽ không hề dễ dàng, nhưng<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>tin rằng mình sẽ hoàn thành được sứ mệnh, thực hiện được ước nguyện của ông nội. Bởi vì, trong sâu thẳm tâm hồn,<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>luôn cảm thấy một mối liên kết kỳ lạ với lịch sử, với những giá trị truyền thống của dân tộc.</p>
                            <p className="text-justify"><span className="inline-table"><Image src="/mascot.svg" alt="Clock" height={40} width={40} /></span> là một người bạn trung thành mà ông nội để lại cho <span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>. <span className="inline-table"><Image src="/mascot.svg" alt="Clock" height={40} width={40} /></span> được tạo ra để ghi nhớ toàn bộ di sản kiến thức lịch sử mà ông nội<span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>dày công nghiên cứu hàng năm qua. Sứ mệnh của <span className="inline-table"><Image src="/mascot.svg" alt="Clock" height={40} width={40} /></span> là người bạn đồng hành của <span className="underline">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></p>
                        </div>
                        <div className="w-2/5 flex justify-end items-center">
                            <Image src="/mascot.svg" alt="Clock" height={580} width={580} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-16">
                        <hr className="border-t-8 border-red-500 w-1/4">
                        </hr>
                        <h1 className="text-red-500 text-5xl text-center font-black mb-4 uppercase">
                            Luật chơi
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4">
                        </hr>
                    </div>
                    <div className="flex justify-between mt-8 flex-row-reverse">
                        <div className="w-2/3 text-left text-red-500 text-lg leading-relaxed content-center">
                            <ul className="list-disc list-inside">
                                <li className="text-end">
                                    Tim: Khi vào game lần đầu tiên, người chơi sẽ có sẵn 5 tim. Với mỗi lượt trả lời câu hỏi sai, người chơi sẽ bị trừ đi 1 tim. Có 2 cách để nạp thêm tim:
                                    <ul className="list-disc list-inside ml-6">
                                        <li>Cách 1: Chuyển đổi kinh nghiệm hiện có sang tim. 10 exp tương ứng được 1 tim.</li>
                                        <li>Cách 2: Trả phí để mua thêm tim. Có các gói như sau:
                                            <ul className="list-disc list-inside ml-6">
                                                <li>5 tim = 5.000 VNĐ</li>
                                                <li>10 tim = 9.000 VNĐ</li>
                                                <li>20 tim = 18.000 VNĐ</li>
                                                <li>Unlimited</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/3 flex justify-end items-center">
                            <Image src="/heart.svg" alt="Clock" height={580} width={580} />
                        </div>
                    </div>
                    <div className="flex justify-between mt-8">
                        <div className="w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <ul className="list-disc pl-5">
                                <li>
                                    <span className="font-bold">Kinh nghiệm (exp):</span> Khi mới vào game, exp của người chơi sẽ bằng 0. Ở mỗi chặng, nếu người chơi trả lời đúng 10/10 câu hỏi ngay lần đầu tiên thì người chơi sẽ được cộng thêm kinh nghiệm của chặng đó. Người chơi có thể chọn chơi lại chặng đến khi 10/10 để đạt được thêm tim, tuy nhiên kinh nghiệm chỉ được cộng nếu được 10/10 ở lần đầu tiên.
                                </li>
                                <li>
                                    Kinh nghiệm tích lũy được càng nhiều thì ranking càng cao.
                                </li>
                                <li>
                                    Kinh nghiệm có thể được dùng để quy đổi sang tim. Khi quy đổi, exp sẽ bị mất đi, đồng nghĩa với việc có thể bị tuột hạng. Nếu muốn bảo toàn exp/giữ thứ hạng, người chơi có thể chọn mua tim thay vì quy đổi từ exp. (Hoặc người chơi ưu tiên việc không tốn phí hơn thứ hạng thì vẫn có thể chọn quy đổi từ exp).
                                </li>
                            </ul>
                        </div>
                        <div className="w-2/5 flex justify-start items-center">
                            <Image src="/quests.svg" alt="Clock" height={580} width={580} />
                        </div>
                    </div>
                    <div className="text-start text-red-500 font-extrabold items-center my-8">
                        <ul className="list-disc ml-6 flex flex-col items-center">
                            <li>Người chơi chọn chặng giải đố trên map game (bản đồ VN)</li>
                            <li>Mỗi chặng chơi, người chơi sẽ phải hoàn thành 10 câu hỏi. Mỗi câu trả lời sai sẽ bị trừ 1 tim.</li>
                            <li>Chưa trả lời hết 10 câu mà số tim hiện có = 0 thì người chơi sẽ bị yêu cầu dừng lại và chọn các cách thức nạp thêm tim nếu muốn tiếp tục chặng chơi.</li>
                            <li>Hoàn thành chặng nếu người chơi trả lời đúng 10/10 câu thì chặng đó sẽ được hoàn thành và người chơi sẽ nhận được exp nếu đạt 10/10 ngay lần đầu tiên.</li>
                            <li>Các chặng sẽ được sắp xếp theo thứ tự (từ Bắc vào Nam hay từ dễ đến khó cái này bên làm câu hỏi quy định). Phải tham gia chặng trước ít nhất 1 lần nếu muốn mở khóa chặng sau (mở khóa tức là được phép chơi chặng đó chứ không phải là hoàn thành, đúng 10/10 mới hoàn thành)</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center">
                        <Image src="/mapst.svg" alt="Map" height={580} width={580} />
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full p-12 flex justify-center  shadow-xl shadow-red-200 mb-20">
            </div>
        </div >
    );
}