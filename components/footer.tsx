export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12">
      <div className="container max-w-[640px]">
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-medium">Navigation</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#home" className="hover:text-[#0ea5e9]">
                  Home
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#0ea5e9]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#0ea5e9]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#0ea5e9]">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0ea5e9]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Social</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://github.com/SahilSuman1011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0ea5e9]"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sahilsuman11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0ea5e9]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/SahilSuman1111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0ea5e9]"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://peerlist.io/sahilsuman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0ea5e9]"
                >
                  Peerlist
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Links</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="https://manuarora.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#0ea5e9]">
                  Portfolio inspired by Manu Paaji 🧡
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

