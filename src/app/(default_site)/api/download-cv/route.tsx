import 'server-only'

import { NextRequest, NextResponse } from 'next/server';
import { Readable } from 'stream'
import { ReadFileAsync } from '@/libs/FileLibrary';
import path from 'path';
import { Blob, atob } from 'buffer';
export async function GET(request: NextRequest) {
    var file = await ReadFileAsync(path.join(process.cwd(), 'public/resume -Navithu Sriyananda.pdf'), 'base64');
    const binaryString = atob(file.split(',')[1]); // Binary data string

    var blob = new Blob([file], { type: 'pdf/*' });
    const headers = new Headers();

    headers.set("Content-Type", "pdf/*");

    return new NextResponse(file, { status: 200, statusText: "OK", headers });
}
