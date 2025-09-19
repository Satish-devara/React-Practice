const apiRequest = async (url = '', optionsObj = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) {
            const errMsg = await response.text();
            throw new Error(`HTTP ${response.status}: ${errMsg}`);
        }
        return null; // success
    } catch (err) {
        console.error("API request error:", err.message);
        return err.message;
    }
};

export default apiRequest;
