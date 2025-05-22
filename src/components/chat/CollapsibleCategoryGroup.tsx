
import React from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type CollapsibleCategoryGroupProps = {
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const CollapsibleCategoryGroup = ({ 
  title, 
  isOpen, 
  setIsOpen, 
  children 
}: CollapsibleCategoryGroupProps) => {
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border border-dashed border-purple-500 rounded-md p-2"
    >
      <CollapsibleTrigger className="flex justify-between items-center w-full px-5 py-3.5 bg-sky-100 rounded-xl">
        <span className="text-sm">{title}</span>
        <ChevronDown 
          className="h-5 w-5 transition-transform duration-200" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} 
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">
        <div className="flex flex-col space-y-3">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleCategoryGroup;
