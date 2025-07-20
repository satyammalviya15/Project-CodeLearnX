"use client";

import * as React from "react";
import {
  Search,
  TrendingUp
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "../components/ui/command"; // Adjust the path if needed

export function SearchButton() {
  const [open, setOpen] = React.useState(false);

  // Keyboard shortcut: ⌘+J or Ctrl+J
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* Clickable trigger */}
      <p
        className="text-sm text-muted-foreground flex items-center gap-2 cursor-pointer border-2 border-neutral-900 border-dashed rounded-md p-2 hover:bg-muted transition-colors"
        onClick={() => setOpen(true)}
      >
        <Search/>
        <span>Search</span>
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[15px] font-medium opacity-100 select-none mt-1">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Popular on CodeLearn">
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <span>agetic ai</span>
            </CommandItem>
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <span>n8n</span>
            </CommandItem>
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <span>pmp</span>
            </CommandItem>
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <span>aws</span>
            </CommandItem>
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <span>playwright</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Trending Searches">
            <CommandItem>
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>satyam malviya</span>
            </CommandItem>
            <CommandItem>
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>lovable</span>
            </CommandItem>
            <CommandItem>
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>playwright automation</span>
            </CommandItem>
            <CommandItem>
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>iim engineering</span>
            </CommandItem>
            <CommandItem>
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>brad traversy</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
