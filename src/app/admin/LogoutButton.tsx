"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm transition-colors text-left"
    >
      Sair
    </button>
  );
}
