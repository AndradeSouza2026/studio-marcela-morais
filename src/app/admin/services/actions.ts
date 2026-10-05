"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createService(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const duration = formData.get("duration") as string;
  const category = formData.get("category") as string;
  
  await db.service.create({
    data: {
      name,
      description,
      price,
      duration,
      category,
    },
  });

  revalidatePath("/admin/services");
  redirect("/admin/services");
}

export async function updateService(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const duration = formData.get("duration") as string;
  const category = formData.get("category") as string;
  
  await db.service.update({
    where: { id },
    data: {
      name,
      description,
      price,
      duration,
      category,
    },
  });

  revalidatePath("/admin/services");
  redirect("/admin/services");
}

export async function deleteService(id: string) {
  await db.service.delete({
    where: { id },
  });
  revalidatePath("/admin/services");
}
