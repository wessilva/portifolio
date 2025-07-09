export const isValidUrl = (url?: string): boolean => {
    if (!url) return false;
    try {
        new URL(url);
        return url !== '#' && url !== '';
    } catch {
        return false;
    }
};