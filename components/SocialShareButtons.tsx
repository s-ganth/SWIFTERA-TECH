import React from 'react';

interface SocialShareButtonsProps {
    url: string;
    title: string;
}

const SocialShareButton: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, ...props }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center h-12 w-12 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-full transition-colors"
        {...props}
    >
        {children}
    </a>
);

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return (
        <div className="flex justify-center space-x-4">
            {/* Twitter */}
            <SocialShareButton 
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                aria-label="Share on Twitter"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.98-2.08z"/></svg>
            </SocialShareButton>

            {/* LinkedIn */}
            <SocialShareButton 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                aria-label="Share on LinkedIn"
            >
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </SocialShareButton>
            
            {/* Facebook */}
            <SocialShareButton
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                aria-label="Share on Facebook"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"></path></svg>
            </SocialShareButton>
        </div>
    );
};

export default SocialShareButtons;
