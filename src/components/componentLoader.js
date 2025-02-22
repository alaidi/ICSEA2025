// Utility function for loading component content
export async function loadComponentContent(componentPath) {
    try {
        const response = await fetch(`/src/components/${componentPath}/index.html`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.text();
    } catch (error) {
        console.error(`Error loading ${componentPath} component:`, error);
        return '';
    }
} 
// export   get currentLang() {
//     return Alpine.store('app').currentLang
// }
export function getCurrentLang() {
    return Alpine.store('app').currentLang
}