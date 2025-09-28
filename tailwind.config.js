tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: '#00A3FF',
                'background-light': '#FFFFFF',
                'background-dark': '#010E14',
                'card-light': '#F3F4F6',
                'card-dark': '#091C24',
                'text-light': '#1F2937',
                'text-dark': '#E5E7EB',
                'secondary-text-light': '#6B7280',
                'secondary-text-dark': '#9CA3AF',
                'accent': '#00FFA3',
            },
            fontFamily: {
                display: ['Poppins', 'sans-serif'],
            },
            borderRadius: {
                'DEFAULT': '0.5rem',
            },
            boxShadow: {
                'glow-cyan': '0 0 20px 5px rgba(0, 255, 163, 0.3)',
                'glow-blue': '0 0 20px 5px rgba(0, 163, 255, 0.3)',
            }
        },
    },
};