// this entire _components folder is written with a "_"
// so that next.js ignores all the files in the app route
// good for performance so all components aren't treated
// as pages and routes
// bg-[url('https://utfs.io/f/f8a69125-fdcd-47fa-ac61-c9f0f364ce01-heo5io.jpeg')]


import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-2 bg-gradient-to-r from-blue-400 to-blue-800   border-8 border-slate-400 shadow-inner">
      <div className="flex items-center gap-2">
        <div className="bg-gray-300 border-2 border-gray-500 p-1 text-black font-bold">
          mimireact
        </div>
      </div>

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