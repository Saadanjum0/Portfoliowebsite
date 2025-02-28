export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white/50 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-white font-medium tracking-wide">Created by Saad Anjum</p>
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 