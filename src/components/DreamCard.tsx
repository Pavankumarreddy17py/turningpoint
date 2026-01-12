import * as Icons from 'lucide-react';
import { Card } from './Card';

interface DreamCardProps {
  name: string;
  description: string;
  icon: string;
  onClick: () => void;
}

export function DreamCard({ name, description, icon, onClick }: DreamCardProps) {
  const IconComponent = (Icons as any)[icon] || Icons.Circle;

  return (
    <Card hover onClick={onClick}>
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <IconComponent className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Card>
  );
}
