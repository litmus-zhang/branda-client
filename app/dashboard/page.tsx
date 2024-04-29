import { redirect } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { createClient } from "../../utils/supabase/server";

export default async function Dashboard(){
  const supabase = await createClient()
  const { data: {user} } = await supabase.auth.getUser()
  if(!user){
    return redirect('/login')
  }
    return (
    <div>
      <Header />
    <main className="px-14 flex gap-4 my-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis rerum, unde provident fuga ullam ut. Ea dolorum a est saepe? Quo exercitationem laudantium quam ex nesciunt neque animi ut.
</main>
        <Footer />
    </div>
    )
}