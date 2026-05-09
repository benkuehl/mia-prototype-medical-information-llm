import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PhoneVersion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-6">
      <div className="mb-6 flex gap-3">
        <Button variant="outline" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Desktop Version
          </Link>
        </Button>
      </div>

      <div className="relative">
        {/* iPhone frame */}
        <div className="w-[390px] h-[844px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
          <div className="w-full h-full bg-slate-800 rounded-[2.5rem] p-1 relative overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20" />
            <div className="w-full h-full rounded-[2.25rem] overflow-hidden bg-background">
              <iframe
                src="/?phoneframe=1"
                title="MIA mobile preview"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full" />
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Phone preview — the full MIA app rendered in a mobile viewport.
      </p>
    </div>
  );
};

export default PhoneVersion;
