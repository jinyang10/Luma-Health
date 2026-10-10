import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { getIconComponent } from "@/lib/utils";

interface DepartmentCardProps {
  id: string;
  name: string;
  iconName: string;
}

export default function DepartmentCard({name, iconName}: DepartmentCardProps) {
  const IconComponent = getIconComponent(iconName);
  const displayName = name;

  return (
    <Card className="w-full bg-background border border-border-2 rounded-lg shadow-md p-0">
      {/* 
        CardContent has default padding, so we reset it with p-0 
        since we are centering everything using the parent Card's flexbox 
      */}
      <CardContent className="flex flex-col flex-grow items-center p-6 gap-4">
        
        <IconComponent 
          className="h-8 w-8 fill-primary text-blue-500" 
        />
        {/* Title */}
        <h3 className="text-text-title truncate w-full text-center">
          {displayName}
        </h3>
        
      </CardContent>
    </Card>
  );
}