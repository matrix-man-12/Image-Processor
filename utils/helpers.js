export const isValidUrl = (urlString) => {
    try {
        // 
        new URL(urlString);
        return true;
    } catch (_) {
        return false;
    }
}
  