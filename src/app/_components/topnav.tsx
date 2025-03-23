// this entire _components folder is written with a "_"
// so that next.js ignores all the files in the app route
// good for performance so all components aren't treated
// as pages and routes
// bg-[url('https://utfs.io/f/f8a69125-fdcd-47fa-ac61-c9f0f364ce01-heo5io.jpeg')]


import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (

    <nav className="flex w-full items-center justify-evenly p-2 bg-gradient-to-r from-blue-400 to-blue-800   border-8 border-slate-400 shadow-inner">
      <div className="flex items-center gap-2">
        <div className="bg-gray-300 border-2 border-gray-500 p-1 text-black font-bold">
          mimireact
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
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

// add a icon on the left side
//to be implemented: 
/* 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div class="bg-gradient-to-br from-pink-500 to-purple-600 border border-purple-600 shadow-lg p-2 flex items-center justify-between">
    <div class="hidden md:flex items-center space-x-2"></div>
    <div class="text-center font-bold text-pink-600">Windows 95</div>
    <div class="flex items-center space-x-2">
        <button class="w-8 h-8 bg-pink-300 rounded-lg focus:outline-none hover:bg-pink-400"></button>
        <button class="w-8 h-8 bg-purple-300 rounded-lg focus:outline-none hover:bg-purple-400"></button>
        <button class="w-8 h-8 bg-blue-300 rounded-lg focus:outline-none hover:bg-blue-400"></button>
    </div>
</div>
  </body>
</html> */
