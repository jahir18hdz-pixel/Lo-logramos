import type { PropsWithChildren } from 'react'; import { cn } from '@/shared/utils/cn';
export function GlassCard({ children, className }: PropsWithChildren<{ className?: string }>) { return <div className={cn('rounded-[var(--radius-md)] border border-[var(--color-ink)]/15 bg-white/45 p-6 shadow-[var(--shadow-glow)] backdrop-blur-2xl', className)}>{children}</div>; }
