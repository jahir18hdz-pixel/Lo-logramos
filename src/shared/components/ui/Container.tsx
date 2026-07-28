import type { PropsWithChildren } from 'react';
import { cn } from '@/shared/utils/cn';
export function Container({ children, className }: PropsWithChildren<{ className?: string }>) { return <div className={cn('mx-auto w-full max-w-[var(--content-width)] px-[var(--section-x)]', className)}>{children}</div>; }