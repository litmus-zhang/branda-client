import React, {  } from 'react';
import { CustomButton } from "../../../components/Button"
import { CountryObject } from "../../../types/custom"


export default function CreateBrandForm({countries}: {countries: CountryObject[] }) {
    console.log(countries)

    return(
        <form className="w-[300px] flex flex-col gap-3" action="">
            <label htmlFor="niche">Niche:</label>
            <input className='border px-3 py-1 rounded w-full' id="niche" name="niche" type="text" required />
            <label htmlFor="country">Country:</label>
            {/* <select className='border px-3 py-1 rounded w-full' id="country" name="country" required>
            {
               countries.map((c: CountryObject, index:any) => (
                    <option value={c.name.name} key={index}>
                        {c.name.name}
                    </option>
                ))
            }
            {/* <option value="same">same</option>
            <option value="same">same 1</option>
            <option value="same">same 2</option> */}
            {/* </select> */}
            <input className='border px-3 py-1 rounded w-full' id="country" name="country" type="text" required />
            <label htmlFor="audience">Target Audience:</label>
            <textarea className='border px-3 py-1 rounded w-full' id="audience" name="audience"  required />
            <label htmlFor="description">Brand description:</label>
            <textarea className='border px-3 py-1 rounded w-full' id="description" name="description" required />
            <CustomButton className="w-full rounded" text="Create Brand" />
        </form>
    )
}
