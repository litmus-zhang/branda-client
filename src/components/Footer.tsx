export const Footer = () => {
    const year = new Date().getFullYear();
return (
    <div className="">
    <header className="bg-gray-1 w-screen px-14 p-4 flex justify-between items-center fixed bottom-0 left-0 right-0">
        <div className="text-sm font-sm">&copy;Branda {year}</div>
        <nav className="space-x-4">
        <a href="#" className="text-sm">Privacy Policy</a>
        <a href="#" className="text-sm">Terms and Condition</a>
        </nav>
    </header>
    </div>
)
}