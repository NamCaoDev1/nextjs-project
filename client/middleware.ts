import { getSession } from "@/lib/normal-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/me"];
const authPaths = ["/login", "/signup"];

const productEditRegex = /^\/products\/\d+\/edit$/;

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = await getSession();
  console.log("pahtname", pathname, sessionToken);
  // Chưa đăng nhập thì không cho vào private paths
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // Đăng nhập rồi thì không cho vào login/signup nữa
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/me", request.url));
  }
  if (pathname.match(productEditRegex) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/me", "/login", "/signup", "/products/:path*"],
};

// import NextAuth from "next-auth";
// import { authConfig } from "@/auth.config";
// import { NextResponse } from "next/server";

// const { auth } = NextAuth(authConfig);

// const privatePaths = ["/me"];
// const authPaths = ["/login", "/signup"];

// const productEditRegex = /^\/products\/\d+\/edit$/;

// export default auth((request) => {
//   const { pathname } = request.nextUrl;

//   const isAuthenticated = !!request.auth;
//   // Chưa đăng nhập thì không cho vào private paths
//   if (
//     privatePaths.some((path) => pathname.startsWith(path)) &&
//     !isAuthenticated
//   ) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   // Đăng nhập rồi thì không cho vào login/signup nữa
//   if (authPaths.some((path) => pathname.startsWith(path)) && isAuthenticated) {
//     return NextResponse.redirect(new URL("/me", request.url));
//   }
//   if (pathname.match(productEditRegex) && !isAuthenticated) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   return NextResponse.next();
// });

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
