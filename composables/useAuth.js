export const useAuthApi = () => {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const tokenCookie = useCookie('auth_token');

    const getBasicHeaders = () => {
        return {
            'Content-Type': 'application/json',
        }
    };

    const getAuthHeaders = () => {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenCookie.value}`,
        }
    }

    const login = async (credentials) => {
        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: getBasicHeaders(),
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Failed to login:", error);
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const response = await fetch(`${apiUrl}/register`, {
                method: 'POST',
                headers: getBasicHeaders(),
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Failed to register:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            const response = await fetch(`${apiUrl}/logout`, {
                method: 'POST',
                headers: getAuthHeaders(),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }

            tokenCookie.value = null;
            return await response.json();
        } catch (error) {
            console.error("Failed to logout:", error);
            throw error;
        }
    }

    return {
        login,
        register,
        logout
    }
}