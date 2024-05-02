import Link from "next/link"
import { createClient } from "../utils/supabase/server"
import { CustomButton } from "./Button"
import { signOut } from "../app/login/actions"

export const Header = async () => {
    const supabase = await createClient()
    const { data: {user} } = await supabase.auth.getUser()
return (
    <div className="">
    <header className="p-4 mx-10 flex justify-between items-center">
        <div className="text-black text-xl font-bold">
            <Link href={'/'}>
            Branda
        </Link>
            </div>
        <nav className="flex gap-3 items-center">
        <a href="#" className="">Services</a>
        <a href="#" className="">About Us</a>
        <a href="#" className="">Contact</a>
        <div className="">
    {
        user ? <form action={signOut} className="flex items-center gap-2">
            <p>{user.email?.slice(0,2)}***{user.email?.slice(-9)}</p>
            <CustomButton type="submit" text="Logout" />
        </form> : <button>
        <Link className="bg-primary text-sm p-2 text-white rounded cur" href='/login'>
        Get Started</Link></button>
    }
        </div>
        </nav>
    </header>
    </div>
)
}