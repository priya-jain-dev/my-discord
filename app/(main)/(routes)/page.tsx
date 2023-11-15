import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <p>
        <UserButton
          afterSignOutUrl="/"
          afterSwitchSessionUrl="/"
          afterMultiSessionSingleSignOutUrl="/"
        />
      </p>
    </div>
  );
}
