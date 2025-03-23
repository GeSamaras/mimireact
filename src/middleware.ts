// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// route matcher that checks if user is in the dashboard
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

// auth function 
export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
