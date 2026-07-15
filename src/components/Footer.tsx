import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-orange-400">Yes</span>
              <span className="text-2xl font-bold text-white">Crew</span>
            </div>
            <p className="text-gray-400">
              Risk Free Marketing® empowers people to do what they love by getting them clients with zero upfront costs.
            </p>
            <div className="mt-4">
              <p className="text-gray-400">Los Angeles, CA</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/apply" className="text-gray-400 hover:text-orange-400 transition-colors">Risk Free Marketing®</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+14249990653" className="text-gray-400 hover:text-orange-400 transition-colors">
                  (424) 999-0653
                </a>
              </li>
              <li>
                <a href="mailto:info@yescrew.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                  info@yescrew.com
                </a>
              </li>
            </ul>
            <p className="mt-4 text-gray-500 text-sm">M-F: 10am – 8pm<br />S-S: Closed (sometimes)</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Yes Crew. All rights reserved.</p>
          <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-400 transition-colors mt-2 md:mt-0">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
