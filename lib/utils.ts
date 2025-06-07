<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx"
=======
import { clsx, type ClassValue } from "clsx"
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
