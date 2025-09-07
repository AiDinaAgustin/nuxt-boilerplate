export const useHttpRequest = () => {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const tokenCookie = useCookie('auth_token');

    const getHeaders = () => {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenCookie.value}`,
        };
    };

    const getAll = async (endpoint, page = 1) => {
        try {
            const response = await fetch(`${apiUrl}/${endpoint}?page=${page}`, {
                method: 'GET',
                headers: getHeaders(),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to fetch ${endpoint}:`, error);
            throw error;
        }
    };

    const getById = async (endpoint, id) => {
        try {
            const response = await fetch(`${apiUrl}/${endpoint}/${id}`, {
                method: 'GET',
                headers: getHeaders(),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to fetch ${endpoint} ${id}:`, error);
            throw error;
        }
    };

    const create = async (endpoint, data, isMultipart = false) => {
        try {
            const headers = isMultipart ? { 'Authorization': `Bearer ${tokenCookie.value}` } : getHeaders();
            const body = isMultipart ? data : JSON.stringify(data);

            const response = await fetch(`${apiUrl}/${endpoint}`, {
                method: 'POST',
                headers,
                body,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to create ${endpoint}:`, error);
            throw error;
        }
    };

    const update = async (endpoint, id, data, isMultipart = false) => {
        try {
            const headers = isMultipart ? { 'Authorization': `Bearer ${tokenCookie.value}` } : getHeaders();
            const body = isMultipart ? data : JSON.stringify(data);

            const response = await fetch(`${apiUrl}/${endpoint}/${id}`, {
                method: 'PUT',
                headers,
                body,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to update ${endpoint} ${id}:`, error);
            throw error;
        }
    };

    const remove = async (endpoint, id) => {
        try {
            const response = await fetch(`${apiUrl}/${endpoint}/${id}`, {
                method: 'DELETE',
                headers: getHeaders(),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to delete ${endpoint} ${id}:`, error);
            throw error;
        }
    };

    const exportData = async (endpoint) => {
        try {
            const response = await fetch(`${apiUrl}/${endpoint}/export`, {
                method: 'GET',
                headers: {
                    ...getHeaders(),
                    'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                },
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }
            return await response.blob();
        } catch (error) {
            console.error(`Failed to export ${endpoint}:`, error);
            throw error;
        }
    };

    const importData = async (endpoint, file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch(`${apiUrl}/${endpoint}/import`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tokenCookie.value}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to import ${endpoint}:`, error);
            throw error;
        }
    };

    const uploadPhoto = async (endpoint, photo) => {
        try {
            const formData = new FormData();
            formData.append('photo', photo);

            const response = await fetch(`${apiUrl}/${endpoint}/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tokenCookie.value}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to upload photo to ${endpoint}:`, error);
            throw error;
        }
    };

    return {
        getAll,
        getById,
        create,
        update,
        remove,
        exportData,
        importData,
        uploadPhoto,
    };
};