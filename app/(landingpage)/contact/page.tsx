import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="w-full shadow-xl shadow-red-200 mb-12 mt-1">
            <div className="h-[221px] lg:mt-[-40px] bg-[url('/background.svg')] bg-contain bg-no-repeat lg:bg-cover lg:h-[718px] w-full flex flex-1 flex-col lg:flex-row mt-[-104px] justify-center">
                <div className="flex justify-center items-end lg:pb-20">
                    <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg lg:block w-1/3 hidden">
                        <h2 className="text-2xl font-bold mb-4">LIÊN HỆ</h2>
                        <p className="mb-4">Điền thông tin để gửi lời nhắn đến chúng mình nhé!</p>
                        <form>
                            <div className="flex space-x-4 mb-4">
                                <input type="text" placeholder="Tên*" className="w-1/2 p-2 rounded border border-gray-300" />
                                <input type="text" placeholder="Họ*" className="w-1/2 p-2 rounded border border-gray-300" />
                            </div>
                            <input type="email" placeholder="Email*" className="w-full p-2 mb-4 rounded border border-gray-300" />
                            <textarea placeholder="Để lại lời nhắn cho Đi Đâu Đây?!" className="w-full p-2 mb-4 rounded border border-gray-300"></textarea>
                            <Button type="submit" variant='default'>GỬI</Button>
                        </form>
                    </div>
                    <div className="bg-white text-red-500 lg:p-8 p-3 w-1/2 rounded-lg shadow-lg lg:w-1/3 lg:ml-48">
                        <h2 className="text-xs font-bold mb-4">ĐĂNG KÝ NHẬN THÔNG BÁO TỪ ĐI ĐÂU ĐÂY?!</h2>
                        <form>
                            <input type="email" placeholder="Email*" className="w-full p-2 mb-4 rounded border border-gray-300" />
                            <Button type="submit" variant='danger'>ĐĂNG KÝ</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
