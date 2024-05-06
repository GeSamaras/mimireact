// this entire _components folder is written with a "_"
// so that next.js ignores all the files in the app route
// good for performance so all components aren't treated
// as pages and routes

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-evenly p-4 text-xl font-extrabold 
    bg-[url('https://utfs.io/f/f8a69125-fdcd-47fa-ac61-c9f0f364ce01-heo5io.jpeg')] bg-cover
    ">
      <div>mimireact</div>

      <div className="flex flex-row items-center gap-4 ">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}