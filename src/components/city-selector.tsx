'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, Plane } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTripDetailsContext } from '@/hooks/use-trip-details-context';
import { City } from '@/contexts/trip-details-context';

const cities: City[] = [
  { name: 'New York', country: 'USA', flag: '🇺🇸' },
  { name: 'London', country: 'UK', flag: '🇬🇧' },
  { name: 'Paris', country: 'France', flag: '🇫🇷' },
  { name: 'Tokyo', country: 'Japan', flag: '🇯🇵' },
  { name: 'Sydney', country: 'Australia', flag: '🇦🇺' },
  { name: 'Dubai', country: 'UAE', flag: '🇦🇪' },
  { name: 'Rio de Janeiro', country: 'Brazil', flag: '🇧🇷' },
  { name: 'Moscow', country: 'Russia', flag: '🇷🇺' },
  { name: 'Cairo', country: 'Egypt', flag: '🇪🇬' },
  { name: 'Mumbai', country: 'India', flag: '🇮🇳' },
  { name: 'Beijing', country: 'China', flag: '🇨🇳' },
  { name: 'Cape Town', country: 'South Africa', flag: '🇿🇦' },
  { name: 'Toronto', country: 'Canada', flag: '🇨🇦' },
  { name: 'Berlin', country: 'Germany', flag: '🇩🇪' },
  { name: 'Mexico City', country: 'Mexico', flag: '🇲🇽' },
  { name: 'Amsterdam', country: 'Netherlands', flag: '🇳🇱' },
  { name: 'Singapore', country: 'Singapore', flag: '🇸🇬' },
  { name: 'Bangkok', country: 'Thailand', flag: '🇹🇭' },
  { name: 'Istanbul', country: 'Turkey', flag: '🇹🇷' },
  { name: 'Rome', country: 'Italy', flag: '🇮🇹' },
];

export function CitySelector() {
  const { updateTripDetails, tripDetails } = useTripDetailsContext();

  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-zinc-700">
          {' '}
          <Plane className="w-4 h-4 mr-2" />
          Origin
        </label>

        <CitySelect
          value={tripDetails.origin}
          onChange={(value) => {
            console.log(value);
            updateTripDetails('origin', value);
          }}
          disabledCity={tripDetails.destination}
          label="Origin"
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-zinc-700">
          <Plane className="w-4 h-4 mr-2 transform rotate-90" />
          Destination
        </label>
        <CitySelect
          value={tripDetails.destination}
          onChange={(value) => updateTripDetails('destination', value)}
          disabledCity={tripDetails.origin}
          label="Destination"
        />
      </div>
    </div>
  );
}

type CitySelectProps = {
  value: City | null;
  onChange: (value: City | null) => void;
  disabledCity: City | null;
  label: string;
};

function CitySelect({ value, onChange, disabledCity, label }: CitySelectProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value ? (
            <>
              <span className="mr-2">{value.flag}</span>
              {value.name}, {value.country}
            </>
          ) : (
            `Select ${label}...`
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {cities.map((city) => (
                <CommandItem
                  key={city.name}
                  onSelect={() => {
                    onChange(city === value ? null : city);
                    setOpen(false);
                  }}
                  disabled={city.name === disabledCity?.name}
                  className="flex items-center"
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value?.name === city.name ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <span className="mr-2">{city.flag}</span>
                  {city.name}, {city.country}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
