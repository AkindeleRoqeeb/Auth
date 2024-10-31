import { LoginButton } from "@/components/auth/loginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {Poppins} from "next/font/google"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className={cn("flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800", font  )}>
      <div className="space-y-6 text-center capitalize">
      <h2 className="text-6xl font-semibold text-white drop-shadow-md">🔐 Auth</h2>
      <p className="text-white">a simple authentication service</p>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg" className="capitalize">sign in</Button>
        </LoginButton>
      </div>
      </div>
    </main>
  );
}
