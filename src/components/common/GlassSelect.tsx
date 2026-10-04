import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Check, Search } from 'lucide-react';

export interface GlassSelectOption {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

interface GlassSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: GlassSelectOption[];
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
  menuClassName?: string;
  align?: 'left' | 'right';
  enableSearch?: boolean;
  size?: 'sm' | 'md';
}

export const GlassSelect: React.FC<GlassSelectProps> = ({
  value,
  onChange,
  options,
  icon,
  placeholder = 'Select...',
  className = '',
  menuClassName = '',
  align = 'left',
  enableSearch,
  size = 'md',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      // Auto-focus search if options are numerous
      if (enableSearch || options.length > 8) {
        setTimeout(() => searchInputRef.current?.focus(), 50);
      }
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, enableSearch, options.length]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);

  // Filter options if search is enabled
  const showSearch = enableSearch ?? options.length > 8;
  const filteredOptions = showSearch && searchQuery.trim()
    ? options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (opt.sublabel && opt.sublabel.toLowerCase().includes(searchQuery.toLowerCase())) ||
        opt.value.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : options;

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchQuery('');
  };

  const isSmall = size === 'sm';

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>

      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex items-center justify-between gap-2.5 transition-all duration-300 cursor-pointer select-none text-left w-full
          ${isSmall ? 'px-3.5 py-1.5 rounded-full text-xs' : 'px-4 py-2.5 rounded-2xl text-xs md:text-sm'}
          bg-[#0d1322] border backdrop-blur-2xl shadow-md
          ${isOpen
            ? 'border-primary/60 bg-[#131b30] shadow-[0_0_20px_hsl(var(--primary)/0.35)] ring-1 ring-primary/50'
            : 'border-white/15 hover:border-primary/40 hover:bg-[#131b30]/80'
          }
        `}
      >
        <div className="flex items-center gap-2 min-w-0">
          {icon && <span className="text-primary shrink-0">{icon}</span>}
          <span className="font-display font-semibold text-foreground truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {selectedOption?.sublabel && (
            <span className="font-display text-[10px] text-muted-foreground hidden sm:inline truncate">
              ({selectedOption.sublabel})
            </span>
          )}
        </div>

        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
            }`}
        />
      </button>


      {isOpen && (
        <div
          role="listbox"
          tabIndex={-1}
          style={{
            backgroundColor: 'rgba(10, 14, 26, 0.98)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
          }}
          className={`glass-dropdown-menu absolute ${align === 'right' ? 'right-0' : 'left-0'} top-full mt-2.5 z-50 min-w-[220px] max-w-[340px] w-max
            rounded-2xl p-2 border border-white/20
            shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.2),0_24px_64px_rgba(0,0,0,0.85)]
            animate-in fade-in-0 zoom-in-95 duration-200 ${menuClassName}`}
        >

          {showSearch && (
            <div className="p-1 mb-1.5 border-b border-white/10">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.08] border border-white/15 text-xs">
                <Search className="w-3.5 h-3.5 text-primary shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter options..."
                  className="bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none w-full text-xs font-display font-medium"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}


          <div className="max-h-64 overflow-y-auto space-y-1 custom-scrollbar pr-1">
            {filteredOptions.length === 0 ? (
              <div className="py-4 px-3 text-center text-xs font-display text-muted-foreground">
                No matching options
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-display transition-all duration-200 cursor-pointer select-none
                      ${isSelected
                        ? 'bg-primary/25 text-primary font-bold border border-primary/40 shadow-[0_0_15px_hsl(var(--primary)/0.25)]'
                        : 'text-foreground hover:text-white hover:bg-white/10 active:bg-white/15 border border-transparent'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                      <span className="truncate font-medium">{opt.label}</span>
                      {opt.sublabel && (
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border tracking-wider ${isSelected
                            ? 'text-primary bg-primary/15 border-primary/30'
                            : 'text-muted-foreground bg-white/5 border-white/10'
                          }`}>
                          {opt.sublabel}
                        </span>
                      )}
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-primary shrink-0 stroke-[2.5]" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlassSelect;
