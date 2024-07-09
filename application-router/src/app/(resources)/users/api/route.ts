import { NextResponse } from 'next/server';

export const GET = async () => {
  const users: string[] = ['Вася', 'Петя'];

  return NextResponse.json({ users });
};
