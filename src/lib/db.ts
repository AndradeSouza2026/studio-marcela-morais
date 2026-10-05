import fs from 'fs';
import path from 'path';

// Justificativa da arquitetura:
// Devido a um problema de SSL (ERR_SSL_CIPHER_OPERATION_FAILED) no ambiente host ao tentar baixar
// pacotes grandes como o Prisma, criamos esta camada de abstração em JSON.
// Ela simula a API do Prisma (findMany, findUnique, create, update, delete).
// Isso garante a simplicidade e segurança iniciais e permite migrar para PostgreSQL/Prisma
// no futuro apenas trocando este arquivo.

const DB_FILE = path.join(process.cwd(), 'local-db.json');

type ModelName = 'services' | 'courses' | 'gallery' | 'testimonials' | 'leads' | 'appointments' | 'settings';

interface DBStructure {
  services: any[];
  courses: any[];
  gallery: any[];
  testimonials: any[];
  leads: any[];
  appointments: any[];
  settings: any;
}

const defaultDB: DBStructure = {
  services: [],
  courses: [],
  gallery: [],
  testimonials: [],
  leads: [],
  appointments: [],
  settings: {
    name: "Studio Marcela Morais",
    phone: "(28) 99927-8468",
    address: "Rua Capitão Deslandes, Centro, Cachoeiro de Itapemirim - ES"
  }
};

function readDB(): DBStructure {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultDB, null, 2));
    return defaultDB;
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

function writeDB(data: DBStructure) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

class Model {
  constructor(private modelName: ModelName) {}

  async findMany() {
    const db = readDB();
    return db[this.modelName];
  }

  async findUnique({ where }: { where: { id: string } }) {
    const db = readDB();
    const items = db[this.modelName] as any[];
    return items.find((item: any) => item.id === where.id) || null;
  }

  async create({ data }: { data: any }) {
    const db = readDB();
    const newItem = { id: generateId(), createdAt: new Date().toISOString(), ...data };
    (db[this.modelName] as any[]).push(newItem);
    writeDB(db);
    return newItem;
  }

  async update({ where, data }: { where: { id: string }, data: any }) {
    const db = readDB();
    const items = db[this.modelName] as any[];
    const index = items.findIndex((item: any) => item.id === where.id);
    if (index === -1) throw new Error('Not found');
    items[index] = { ...items[index], ...data, updatedAt: new Date().toISOString() };
    writeDB(db);
    return items[index];
  }

  async delete({ where }: { where: { id: string } }) {
    const db = readDB();
    const items = db[this.modelName] as any[];
    const index = items.findIndex((item: any) => item.id === where.id);
    if (index === -1) throw new Error('Not found');
    const deleted = items.splice(index, 1);
    writeDB(db);
    return deleted[0];
  }
}

export const db = {
  service: new Model('services'),
  course: new Model('courses'),
  gallery: new Model('gallery'),
  testimonial: new Model('testimonials'),
  lead: new Model('leads'),
  appointment: new Model('appointments'),
  settings: {
    async findFirst() {
      return readDB().settings;
    },
    async update({ data }: { data: any }) {
      const dbData = readDB();
      dbData.settings = { ...dbData.settings, ...data };
      writeDB(dbData);
      return dbData.settings;
    }
  }
};
