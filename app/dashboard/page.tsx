
import { redirect } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { createClient } from "../../utils/supabase/server";
import { OpenCreateNewBrand } from "./actions";
import CreateBrandButton from "./createBrand";

export default async function Dashboard(){
  const supabase = await createClient()
  const { data: {user} } = await supabase.auth.getUser()
  if(!user){
    return redirect('/login')
  }
  const {data, error, count}= await supabase.from('brand').select().order('name', {ascending: false})
  if(error){
    return <div>
       <Header />
      <main className="px-14 flex gap-4 my-10">
        {error.message}
      </main>
    </div>
  }
  if(data.length === 0){
    return <div>
       <Header />
      <main className="px-14 flex gap-4 my-10">
        <div className="flex flex-col items-center mx-auto">
       <p className="text-2xl">No brand created yet 🤧</p>
        <CreateBrandButton/>
        </div>
      </main>
    </div>
  }
    return (
    <div>
      <Header />
    <main className="px-14 flex gap-4 my-10">
       These are the brands
</main>
        <Footer />
    </div>
    )
}