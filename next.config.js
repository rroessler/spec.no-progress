/// Vendor Modules
import MDX from '@next/mdx';

/** The available Next JS configuration. */
export default MDX({ extension: /\.mdx?$/ })({
    output: 'export',
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
