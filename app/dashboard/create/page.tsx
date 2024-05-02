import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { CountryObject } from "../../../types/custom";
import { getCountries, getBrands } from "../../../utils/helpers";
import CreateBrandForm from "./createBrand";

export default async function Dashboard() {
    const countries = await getCountries()
    return (
        <div>
        <Header />
        <main className="px-14 flex gap-4 my-10 mx-auto">
           <div className="border border-gray-1 flex gap-2 w-[1000px] rounded mx-auto justify-center items-center">
            <div className="flex flex-col gap-4 p-8">
                <h1>Kindly Provide your brand details</h1>
                <CreateBrandForm countries={countries}   />
            </div>
            <div className="bg-gray-2 w-full h-full border-r-2 p-4">
                <div className="flex gap-2">
                   { [1,2,3,4,5,6,7].map((i) =>(<p className="bg-primary h-8 text-center rounded-full p-1 w-8 text-white font-bold" key={i}>{i}</p>) )}
                </div>
                <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Brand Name</h1>
                <p>Choose your preferred brand name</p>
                <div className="flex flex-col gap-3">
                    <label htmlFor="">
                        <input type="radio" name=""  id="" />
                        Option 1
                    </label>
                    <label htmlFor="">
                        <input type="radio" name=""  id="" />
                        Option 2
                    </label>
                    <label htmlFor="">
                        <input type="radio" name=""  id="" />
                        Option 3
                    </label>
                </div>
                </div>
            </div>
           </div>
        </main>
        <Footer />
        </div>
    )
}