import { createAuthClient } from '@neondatabase/neon-js/auth';
import { BetterAuthReactAdapter } from '@neondatabase/neon-js/auth/react';

export const authClient = createAuthClient(
    import.meta.env.VITE_NEON_AUTH_URL,
    {
        // This line generates the hooks like useSession
        adapter: BetterAuthReactAdapter()
    }
);

// Export the hook specifically so other files can find it
export const { useSession } = authClient;