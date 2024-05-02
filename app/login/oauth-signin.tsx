'use client'
import { Provider } from "@supabase/supabase-js"
import { FcGoogle } from "react-icons/fc";
import { OAuthSignin } from "./actions";
type OAuthProvider = {
    name: Provider,
    displayName: string,
    icon?: JSX.Element,
}

export function OAuthButtons(){
    const OAuthProviders: OAuthProvider[] =[
        {
            name: "google",
            displayName: "Google",
            icon: <FcGoogle className="size-5"/>
        }
    ]
    return(
        OAuthProviders.map((provider) => (
            <button 
            onClick={async () => await OAuthSignin(provider.name)}
            key={provider.name} className="flex items-center justify-center gap-2 border rounded border-primary p-2 rounded w-full hover:bg-primary hover:text-white cursor-pointer">
            {provider.icon}
                <span> Login with {provider.displayName}</span>
            </button>
        ))
    )
}