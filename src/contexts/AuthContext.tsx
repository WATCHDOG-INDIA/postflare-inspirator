
import React, { createContext, useState, useEffect, useContext } from 'react';
import { 
  User, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  browserPopupRedirectResolver
} from 'firebase/auth';
import { auth } from '../integrations/firebase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      console.log("Auth state changed:", currentUser ? "User logged in" : "User logged out");
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      console.log("Attempting Google sign in...");
      const provider = new GoogleAuthProvider();
      
      // Configure Google Sign In
      provider.setCustomParameters({
        prompt: 'select_account',
        // Use localhost as a fallback if deployed URL doesn't work
        login_hint: 'user@example.com',
      });
      
      // Use browserPopupRedirectResolver for better cross-browser compatibility
      const result = await signInWithPopup(auth, provider, browserPopupRedirectResolver);
      console.log("Sign in successful:", result.user.displayName);
      
      toast({
        title: "Sign in successful",
        description: "You are now signed in with Google",
      });
    } catch (error: any) {
      console.error("Google sign in error:", error);
      
      // Provide more specific error messages
      let errorMessage = "Failed to sign in with Google";
      
      if (error.code === 'auth/unauthorized-domain') {
        errorMessage = "This domain is not authorized for authentication. Please add it to your Firebase console under Authentication > Sign-in method > Authorized domains.";
      } else if (error.code === 'auth/configuration-not-found') {
        errorMessage = "Authentication configuration is missing. Make sure Google Sign-in is enabled in your Firebase console.";
      } else if (error.code === 'auth/popup-blocked') {
        errorMessage = "Pop-up was blocked by your browser. Please allow pop-ups for this site.";
      } else if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = "Authentication was cancelled. Please try again.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Authentication error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      toast({
        title: "Signed out",
        description: "You have been signed out successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
