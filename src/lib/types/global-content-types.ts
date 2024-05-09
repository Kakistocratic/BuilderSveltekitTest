// global-content-types.ts

interface NavigationLink {
    navigationLinkTitle: string;
    navigationLinkUrl: string;
}

interface LayoutData {
    navigationLinks: NavigationLink[];
    siteLogo: string;
    // Add other properties here if needed
}

export type { LayoutData, NavigationLink }