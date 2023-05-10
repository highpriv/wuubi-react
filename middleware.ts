import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
 
export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      });
 const currentUrl = request.nextUrl.pathname;
  if ((currentUrl.startsWith('/login') || currentUrl.startsWith('/register')) && token) {
    return NextResponse.rewrite(new URL('/', request.url));
  }
}