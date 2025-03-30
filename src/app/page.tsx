import { ModeToggle } from "@/components/ModelToogle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      <SignedOut>
        <SignInButton>
          <Button className="">
            Sign In
          </Button>
        </SignInButton>
        {/* <SignUpButton /> */}
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle/>
    </div>
  );
}
