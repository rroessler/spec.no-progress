/// Vendor Modules
import mdx from '@next/mdx';

/** The available Next JS configuration. */
export default mdx({ extension: /\.mdx?$/, options: { remarkPlugins: [], rehypePlugins: ['rehype-pretty-code'] } })({
    output: 'export',
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
