import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    const existingUser = await db.user.findFirst();
    
    if (existingUser) {
      return NextResponse.json({ message: 'Um admin já existe. Configuração ignorada.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const user = await db.user.create({
      data: {
        name: 'Admin',
        email: 'admin@studiomarcelamorais.com.br',
        password: hashedPassword,
      }
    });

    return NextResponse.json({ message: 'Admin criado com sucesso! E-mail: admin@studiomarcelamorais.com.br | Senha: admin123' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar admin' }, { status: 500 });
  }
}
