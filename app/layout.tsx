/// Vendor Modules
import type { Metadata, Viewport } from 'next';

/// Styling Modules
import 'halfmoon/css/halfmoon.min.css';

/** Baseline Metadata. */
export const metadata: Metadata = {
    title: 'NO_PROGRESS: Disabling ANSI Spinners/Progress Bars',
};

/** Baseline Viewport. */
export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
    colorScheme: 'light dark',
};

/** Layout Component. */
export default function Layout({ children }: LayoutProps<never>) {
    // prepare the wrapper to be contained
    const wrapper = <div className="container px-4 py-5" children={children} />;

    // construct the resulting layout now
    return (
        <html lang="en" data-bs-theme="dark">
            <body children={wrapper} />
        </html>
    );
}
