/// Vendor Modules
import type { MDXComponents } from 'mdx/types';

/** Exposes Components to MDX. */
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,

        blockquote: ({ ...props }) => <blockquote className="px-4" {...props} />,
        pre: ({ ...props }) => <pre className="card rounded-top-0 p-3" {...props} />,
        figcaption: ({ ...props }) => (
            <div className="card p-2 border-bottom-0 rounded-bottom-0">
                <figcaption className="font-monospace" {...props} />
            </div>
        ),
    };
}
