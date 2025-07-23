import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const musicDirectory = path.join(process.cwd(), 'public/music');
  const musicFiles = fs.readdirSync(musicDirectory).map(file => `/music/${file}`);

  return NextResponse.json({ files: musicFiles });
}