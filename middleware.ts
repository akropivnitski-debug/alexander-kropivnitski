import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const expectedUser = process.env.REPORTS_AUTH_USER;
  const expectedPass = process.env.REPORTS_AUTH_PASS;

  if (auth?.startsWith("Basic ")) {
    const [user, pass] = atob(auth.slice(6)).split(":");
    if (user === expectedUser && pass === expectedPass) {
      const res = NextResponse.next();
      res.headers.set("Cache-Control", "private, no-store");
      return res;
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Reports"',
      "Cache-Control": "private, no-store",
      "X-Auth-Debug": `userSet=${expectedUser !== undefined},userLen=${expectedUser?.length ?? 0},passSet=${expectedPass !== undefined},passLen=${expectedPass?.length ?? 0}`,
    },
  });
}

export const config = {
  matcher: "/reports/:path*",
};
