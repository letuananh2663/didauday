import Image from "next/image";

export default function PlayrulePage() {
    return (
        <div className="w-full">
            <div className="mx-auto w-full pt-16 px-8 md:px-32">
                <div className="text-center">
                    <div className="flex justify-between items-center">
                        <hr className="border-t-8 border-red-500 w-1/4" />
                        <h1 className="text-red-500 text-3xl md:text-5xl text-center font-black mb-4 uppercase">
                            Luật chơi
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4" />
                    </div>

                    <div className="flex flex-col md:flex-row-reverse justify-between mt-8">
                        <div className="w-full md:w-2/3 text-left text-red-500 text-lg leading-relaxed content-center">
                            <div className="text-end pl-6">
                                <span className="font-bold">Tim:</span>Khi vào game lần đầu tiên, người chơi sẽ có sẵn 5 tim. Với mỗi lượt trả lời câu hỏi sai, người chơi sẽ bị trừ đi 1 tim. Có 2 cách để nạp thêm tim:
                                <ul className="list-disc list-inside ml-6">
                                    <li>Cách 1: Chuyển đổi kinh nghiệm (exp) hiện có sang tim. 10 exp tương ứng được 1 tim.</li>
                                    <li>Cách 2: Trả phí để mua thêm tim, theo các gói có sẵn trong Shop.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                            <Image src="/heart.svg" alt="Heart" height={380} width={380} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mt-8">
                        <div className="w-full md:w-3/5 text-left text-red-500 text-lg leading-relaxed content-center">
                            <ul className="list-disc pl-5">
                                <div>
                                    <span className="font-bold">Kinh nghiệm (exp):</span>Khi mới vào game, exp của người chơi sẽ bằng 0. Ở mỗi chặng, nếu người chơi trả lời đúng 10/10 câu hỏi ngay lần đầu tiên thì người chơi sẽ được cộng thêm exp của chặng đó. Người chơi có thể chọn chơi lại chặng đến khi 10/10 để đạt được thêm tim, tuy nhiên kinh nghiệm chỉ được cộng nếu đạt 10/10 ngay lần đầu tiên vượt chặng đó.
                                </div>
                                <li>
                                    Kinh nghiệm tích lũy được càng nhiều thì ranking càng cao.
                                </li>
                                <li>
                                    Kinh nghiệm có thể được dùng để quy đổi sang tim. Khi quy đổi, exp sẽ bị mất đi, đồng nghĩa với việc người chơi có thể bị giảm thứ hạng. Nếu muốn bảo toàn exp/giữ thứ hạng, người chơi có thể chọn mua tim thay vì quy đổi từ exp.
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center md:justify-start items-center mt-4 md:mt-0">
                            <Image src="/quests.svg" alt="Quests" height={380} width={380} className="max-w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-16 w-full justify-self-center mt-16">
                        <hr className="border-t-8 border-red-500 w-1/4" />
                        <h1 className="text-red-500 text-3xl md:text-5xl text-center font-black mb-4 uppercase">
                            Lưu ý
                        </h1>
                        <hr className="border-t-8 border-red-500 w-1/4" />
                    </div>

                    <ul className="list-disc pl-5 font-bold text-red-500 text-xl place-items-center" style={{ textAlignLast: 'center' }}>
                        <li>
                            Người chơi chọn chặng giải đố trên map game (bản đồ VN)
                        </li>
                        <li>
                            Mỗi chặng chơi, người chơi sẽ phải hoàn thành 10 câu hỏi. Mỗi câu trả lời sai sẽ bị trừ 1 tim.
                        </li>
                        <li>
                            Chưa trả lời hết 10 câu mà số tim hiện có về 0 thì ngươi chơi sẽ bị yêu cầu dừng lại và chọn các cách thức nạp thêm tim nếu muốn tiếp tục chặng chơi.
                        </li>
                        <li>
                            Mỗi chặng chơi nếu người chơi trả lời đúng 10/10 câu thì chặng đó sẽ được hoàn thành và người chơi sẽ nhận được exp nếu đạt 10/10 ngay lần đầu tiên.
                        </li>
                        <li>
                            Các chặng sẽ được sắp xếp theo thứ tự. Phải tham gia chặng trước ít nhất 1 lần nếu muốn mở khóa chặng sau.
                        </li>
                    </ul>

                    <div className="w-full flex justify-center mt-8">
                        <Image src="/mapst.svg" alt="Map" height={380} width={380} className="max-w-full" />
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full p-12 flex justify-center shadow-xl shadow-red-200 mb-20">
            </div>
        </div >
    );
}
