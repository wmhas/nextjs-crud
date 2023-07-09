import { NextResponse } from "next/server";

export default function middleware(req) {
   
   console.log("mysql : " + process.env.MYSQL_HOST)    
   return NextResponse.next();
   
}

export const config = {
    matcher: '/',
}