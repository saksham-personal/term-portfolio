import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const resumeDirectory = path.join(process.cwd(), 'public/resume');
  const resumeFiles = fs.readdirSync(resumeDirectory).map(file => `/resume/${file}`);

  return NextResponse.json({ files: resumeFiles });
}