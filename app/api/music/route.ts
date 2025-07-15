import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const musicDirectory = path.join(process.cwd(), 'public/music');

  try {
    const files = fs.readdirSync(musicDirectory);
    const musicFiles = files.filter(
      (file) => file.endsWith('.mp3') || file.endsWith('.wav')
    );
    return NextResponse.json({ files: musicFiles });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read music directory' },
      { status: 500 }
    );
  }
}