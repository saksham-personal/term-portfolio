import { NextResponse } from 'next/server';

export async function GET() {
  const musicFiles = [
    '/music/Aphex Twin - Lisbon Acid.mp3',
    '/music/did i tell that i miss u.mp3',
    '/music/Don\'t Let Me Go - Cigarettes After Sex.mp3',
    '/music/ian - 3.5.mp3',
    '/music/Mi Amor - Sharn Meet PRG .mp3',
    '/music/Satellite Anthem Icarus.mp3',
    '/music/Tchaikovsky - Valse Sentimentale.mp3',
  ];

  return NextResponse.json({ files: musicFiles });
}