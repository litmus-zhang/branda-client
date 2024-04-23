import { CustomButton } from "./Button"

export const Header = () => {
return (
    <div className="">
    <header className="p-4 mx-10 flex justify-between items-center">
        <div className="text-black text-xl font-bold">Branda</div>
        <nav className="flex gap-3 items-center">
        <a href="#" className="">Services</a>
        <a href="#" className="">About Us</a>
        <a href="#" className="">Contact</a>
        <CustomButton text="Get Started" size="sm" />
        </nav>
    </header>
    </div>
)
}