'use client'

import { useRouter } from "next/navigation";

interface loginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
}


export const LoginButton = ({children, mode= "redirect", asChild}: loginButtonProps) => {

    const router = useRouter()
    
    const onClick = () => {

        router.push("/auth/login")
    }

    if(mode === "modal"){
        return(
        <p>
            Todo implement model
        </p>)
    }

    return(
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}

