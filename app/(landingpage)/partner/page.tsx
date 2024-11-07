import Image from "next/image";

export default function PartnerPage() {
    return (
        <div className="w-full text-red-500">
            <div className="mx-auto w-full pt-16 px-8 md:px-32">
                <h1 className="text-4xl font-bold mb-4">ĐỐI TÁC</h1>
                <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
                    <Image src="/hoada.svg" alt="Hoa Da" height={300} width={300} />
                    <Image src="/tiredcity.svg" alt="Tired City" height={300} width={300} />
                    <Image src="/tramgocbanhcham.svg" alt="Tram goc banh cham" height={300} width={300} />
                </div>
            </div>

            <div className="mx-auto w-full p-12 flex justify-center shadow-xl shadow-red-200 mb-20">
            </div>
        </div >
    );
}
