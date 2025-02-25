'use client';

import * as React from 'react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function DatePicker({
  date,
  updateDate,
  placeholder,
}: {
  date: Date | null;
  updateDate: (date: Date | null) => void;
  placeholder: string;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            ' justify-start text-left font-normal w-full',
            !date && 'text-muted-foreground',
          )}
        >
          {date ? format(date, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date ?? undefined}
          onSelect={(date) => updateDate(date ?? null)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
