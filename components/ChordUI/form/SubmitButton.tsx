import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

interface ButtonProps {
    isLoading: boolean;
    className?: string;
    children: React.ReactNode;
    click?:any;
}

const SubmitButton = ({ isLoading, className, children, click }: ButtonProps) => {
    return (
        <Button
            variant='outline'
            onClick={click}
            disabled={isLoading}
            className={className ?? "rounded-md w-full text-xl font-bold "}
        >
            {isLoading ? (
                <div className="flex items-center gap-4">
                    <Loader className="animate-pulse"/>
                    Loading...
                    <Loader className="animate-pulse"/>
                </div>
            ) : (
                children
            )}
        </Button>
    );
};

export default SubmitButton;