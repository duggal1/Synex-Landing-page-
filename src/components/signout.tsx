"use client";

import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";

const SignOut = () => {

    const { signOut } = useClerk();

    return <Button onClick={() => signOut()}>
        Sign Out
    </Button>;
};

export default SignOut;
