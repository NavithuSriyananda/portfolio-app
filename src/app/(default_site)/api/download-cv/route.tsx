import 'server-only'

import { NextRequest, NextResponse } from 'next/server';
import { GetFileBufferAsync } from '@/libs/FileLibrary';
import path from 'path';


export async function GET(request: Request) {
    var cvFilePath = path.join(process.cwd(), 'public/', 'NavithuSriyananda-Resume.pdf');
    var buffer = await GetFileBufferAsync(cvFilePath);
    const headers = new Headers();
    headers.append('Content-Disposition', 'attachment; filename="NavithuSriyananda-Resume.pdf"');
    headers.append('Content-Type', 'application/pdf');

    return new Response(buffer, {
        headers,
    });
}
