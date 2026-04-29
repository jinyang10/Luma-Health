"use client";

// useTransition hook provides way to keep UI responsive even
// while navigating --> superior to useState
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InteractiveSignInButtonProps {
    // optional prop that doesn't return anything
    // purpose is to close the sidebar on Mobile view
    // once user clicks sign-in
    onNavigateStart?: () => void;
    // classname added to modify styling of button if required
    className?: string;
}

// this component would be called by the SigninOrAvatar component 
// and the MobileSigninOrAvatar component
export default function InteractiveSignInButton({onNavigateStart, className}: InteractiveSignInButtonProps) {
  const [isNavigating, startTrans] = useTransition();
  const router = useRouter();

  const handleClick = () => {
    // when startTransition is called, 
    // useTransition() sets isNavigating to true
    // also, tells react that code inside the function is a non-urgent update,
    // and that it can be prepared in background without freezing UI
    startTrans(() => {
        router.push("/sign-in");

        //if onNavigateStart is provided, call the function

        // when user is navigated to the sign in page, we close the sidesheet
        if (onNavigateStart) {
            onNavigateStart();
        }
    })

    
  };

  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={handleClick}
      //when isNavigating is true -> button is disabled
      disabled={isNavigating}
      className={className}
    >
      {isNavigating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        "Sign in"
      )}
    </Button>
  );
}