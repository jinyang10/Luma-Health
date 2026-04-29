
// 1)server components cannot receive or forward function props --> must be a client component
"use client";

import InteractiveSignInButton from "./interactive-sign-in-button";

// defining props interface, define an optional prop called onMobileActionComplete
interface MobileUserMenuProps {
    onMobileActionComplete?: ()=> void;
}

// extract prop onMobileActionComplete from the props object 
export default function MobileUserSignOrAvator({onMobileActionComplete}: MobileUserMenuProps) {
    return (
        // in order to pass the function (which closes the sidebar) down, must receive it as a prop from menu-client
        <InteractiveSignInButton onNavigateStart={onMobileActionComplete}/>
    )
}