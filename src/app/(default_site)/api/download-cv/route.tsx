import 'server-only'

import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: Request) {

    return Response.json({ "product": 123 })
}