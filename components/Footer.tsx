export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white/50 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:your.email@example.com" 
                  className="hover:text-white transition-colors duration-200"
                >
                  your.email@example.com
                </a>
              </li>
              <li>Location: Your City, Country</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#work" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Work
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Farzam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 