"use client";

// clerk
import { SignedIn, UserButton } from "@clerk/nextjs";

const UserNav = () => {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
};

export default UserNav;
