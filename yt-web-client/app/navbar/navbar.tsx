// Import necessary dependencies and components
'use client';

import SignIn from "./signIn";
import Link from "next/link";

import styles from "./navbar.module.css";
import Upload from "./upload";
import { useEffect, useState } from "react";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";

// Define the NavBar component
function NavBar() {
  // Initialize user state with useState hook
  const [user, setUser] = useState<User | null>(null);

  // Use useEffect hook to handle authentication state changes
  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChangedHelper((user) => {
      // Update user state when auth state changes
      setUser(user);
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [] /* Empty dependency array, effect runs only once on mount */);

  // Render the NavBar component
  return (
    <nav className={styles.nav}>
      {/* Create a link to the home page */}
      <Link href="/">
        <span className={styles.logoContainer}>
          {/* Display the YouTube logo */}
          <img className={styles.logo} src="/youtube-logo.svg" alt="YouTube Logo" />
        </span>
      </Link>
      {/* Render the SignIn component, passing the current user */}
      <SignIn user={user} />
    </nav>
  );
}

// Export the NavBar component as the default export
export default NavBar;