
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NejA1ahSKIF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Books</h1>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              placeholder="Search books..."
              type="text"
            />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <img
              alt="Book Cover"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">The Great Gatsby</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A classic novel about the decadence and excess of the Roaring Twenties.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">F. Scott Fitzgerald</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Fiction</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <img
              alt="Book Cover"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">To Kill a Mockingbird</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A timeless story of justice, courage, and the power of compassion.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Harper Lee</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Fiction</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <img
              alt="Book Cover"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">1984</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A dystopian novel about the dangers of totalitarianism and surveillance.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">George Orwell</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Fiction</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <img
              alt="Book Cover"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">The Catcher in the Rye</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A coming-of-age novel that explores themes of alienation and rebellion.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">J.D. Salinger</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Fiction</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}





// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Inter } from 'next/font/google'
import './styles.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}