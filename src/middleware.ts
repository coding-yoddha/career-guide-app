// import { NextRequest, NextResponse } from "next/server";

// const allowedOrigins = ["https://aglakadam.com", "http://localhost:3000"];

// const corsOptions = {
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization",
// };

// export function middleware(request: NextRequest) {
//   const origin = request.headers.get("origin") ?? "";

//   const isAllowedOrigin = allowedOrigins.includes(origin);

//   // Handle preflighted requests
//   const isPreflight = request.method === "OPTIONS";

//   if (isPreflight) {
//     const preflightHeaders = {
//       ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
//       ...corsOptions,
//     };
//     return NextResponse.json({}, { headers: preflightHeaders });
//   }

//   // Handle simple requests
//   const response = NextResponse.next();

//   if (isAllowedOrigin) {
//     response.headers.set("Access-Control-Allow-Origin", origin);
//   }

//   Object.entries(corsOptions).forEach(([key, value]) => {
//     response.headers.set(key, value);
//   });

//   return response;
// }

// // export function middleware(request: NextRequest) {
// //   console.log(request.nextUrl);
// //   const res = NextResponse.next();
// //   res.headers.append("ACCESS_CONTROL_ALLOW_ORIGIN", "*");
// //   return res;
// // }

// // export const config = {
// //   matcher: "/api/:path*",
// // };

// // import { NextRequest, NextResponse } from "next/server";

// // export function middleware(request: NextRequest) {
// //   console.log(request.nextUrl); // Log the request URL for debugging
// //   const response = NextResponse.next(); // Create a new response

// //   // Set CORS headers
// //   response.headers.set("Access-Control-Allow-Origin", "*"); // You can replace "*" with a specific domain
// //   response.headers.set(
// //     "Access-Control-Allow-Methods",
// //     "GET, POST, PUT, DELETE, OPTIONS"
// //   );
// //   response.headers.set(
// //     "Access-Control-Allow-Headers",
// //     "Content-Type, Authorization"
// //   );

// //   // Handle preflight requests
// //   if (request.method === "OPTIONS") {
// //     // Send a response for preflight requests
// //     return NextResponse.json({}, { headers: response.headers });
// //   }

// //   return response; // Return the response
// // }

// // export const config = {
// //   matcher: "/api/:path*", // Apply to all API routes
// // };

export function middleware() {}
