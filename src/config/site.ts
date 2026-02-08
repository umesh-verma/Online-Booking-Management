/**
 * Site Configuration
 * Central place to configure branding, currency, and language settings
 */

export const siteConfig = {
    // Branding
    name: "CG Rental",
    tagline: "Premium Car Rentals",
    description: "Find your perfect rental car with CG Rental. Quality vehicles, competitive prices, and excellent service.",

    // Currency (INR only)
    currency: {
        code: "INR",
        symbol: "₹",
        locale: "en-IN",
    },

    // Languages
    defaultLanguage: "en",
    languages: [
        { code: "en", name: "English", description: "India" },
        { code: "hi", name: "हिन्दी", description: "Hindi" },
    ],

    // Contact
    contact: {
        phone: "+91 98765 43210",
        email: "info@cgrental.com",
        address: "123 Main Street, Mumbai, India",
    },

    // Social Links
    social: {
        facebook: "https://facebook.com/cgrental",
        instagram: "https://instagram.com/cgrental",
        twitter: "https://twitter.com/cgrental",
        youtube: "https://youtube.com/cgrental",
    },
};

/**
 * Format price with INR currency symbol
 */
export function formatPrice(amount: number): string {
    return `${siteConfig.currency.symbol}${amount.toLocaleString(siteConfig.currency.locale)}`;
}
