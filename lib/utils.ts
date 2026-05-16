import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  }).format(new Date(date))
}

export function truncate(text: string, length: number): string {
  return text.length > length ? text.substring(0, length) + '...' : text
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .trim()
}
