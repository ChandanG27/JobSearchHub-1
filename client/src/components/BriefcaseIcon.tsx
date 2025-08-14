import { Briefcase } from 'lucide-react';

interface BriefcaseIconProps {
  className?: string;
}

const BriefcaseIcon = ({ className = "w-5 h-5 text-white" }: BriefcaseIconProps) => {
  return (
    <Briefcase className={className} />
  );
};

export default BriefcaseIcon;