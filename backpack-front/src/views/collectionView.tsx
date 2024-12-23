import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

function CollectionView() {
	return (
		<div className="min-h-screen bg-white text-black">
		{/* Top Banner */}
		<div className="bg-black text-white text-center text-sm py-2">
			Place an inclusive 10% coupon for your first purchase
		</div>

		{/* Header/Navigation */}
		<header className="border-b">
			<nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					NEXURA
				</Link>
				
				<div className="flex items-center space-x-8">
					<Link href="#" className="text-sm hover:text-gray-600">Latest Products</Link>
					<Link href="#" className="text-sm hover:text-gray-600">Backpack</Link>
					<Link href="#" className="text-sm hover:text-gray-600">New Accessories</Link>
					<Link href="/collection" className="text-sm hover:text-gray-600">Collection</Link>
					<Link href="#" className="text-sm hover:text-gray-600">Utility</Link>
					<Link href="#" className="text-sm hover:text-gray-600">Service</Link>
				</div>
	
				<div className="flex items-center space-x-4">
					<button className="hover:text-gray-600">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
					<button className="hover:text-gray-600">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
						</svg>
					</button>
					<button className="hover:text-gray-600">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
						</svg>
					</button>
				</div>
			</nav>
		</header>

			<div className="bg-black text-white">
				{/* Newsletter and Stats Section */}
				<div className="relative">
				{/* Background Image */}
				<Image
					src="/images/hero-backpack.png"
					alt="Backpack"
					width={1920}
					height={600}
					className="w-full h-[400px] object-cover brightness-50"
				/>
				
				{/* Content Overlay */}
				<div className="absolute inset-0 bg-black bg-opacity-50">
					<div className="max-w-7xl mx-auto px-4 h-full">
						<div className="h-full flex items-end">
							<div className="flex w-full justify-between items-center pb-15">
							{/* Stats Section */}
								<div className="flex gap-16">
									<div>
										<p className="text-5xl font-bold text-white mb-2">80+</p>
										<p className="text-gray-300 text-sm">Product release</p>
									</div>
									<div>
										<p className="text-5xl font-bold text-white mb-2">120K</p>
										<p className="text-gray-300 text-sm">Customer in world</p>
									</div>
								</div>

								{/* Newsletter Section */}
								<div className="flex flex-col gap-4">
									<h3 className="text-white font-semibold">SUBSCRIBE TO OUR NEWSLETTER</h3>
									<div className="flex gap-2">
										<input
											type="email"
											placeholder="Enter Your Email"
											className="bg-zinc-400/20 text-white rounded-xl px-6 py-3 min-w-[300px]"
										/>
										<button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
											Subscribe
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="bg-zinc-900 text-white">
				<div className="max-w-7xl mx-auto px-4 py-16">
					{/* Brand Section */}
					<div>
						<div className="max-w-7xl mx-auto px-4">
							<div className="flex justify-between items-start py-8 border-b border-gray-800">
							{/* Brand and Description */}
							<div>
								<h2 className="text-2xl font-bold text-white mb-4">NEXURA</h2>
								<p className="text-gray-400 max-w-xl">
								Your ultimate travel companion. Durable, stylish, and spacious, designed for comfort and convenience on any adventure or commute.
								</p>
							</div>

							{/* Social Links */}
							<div className="flex items-center gap-4">
								<a href="#" className="text-gray-400 hover:text-white">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
								</svg>
								</a>
								<a href="#" className="text-gray-400 hover:text-white">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
								</svg>
								</a>
								<a href="#" className="text-gray-400 hover:text-white">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7C18.34 21.21 22 17.06 22 12.06c0-5.53-4.5-10.02-10-10.02z"/>
								</svg>
								</a>
								<a href="#" className="text-gray-400 hover:text-white">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"/>
								</svg>
								</a>
								<a href="#" className="text-gray-400 hover:text-white">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.562 16h-2.406v-3.65c0-1.12-.02-2.57-1.562-2.57-1.567 0-1.807 1.223-1.807 2.487v3.733h-2.406v-7.542h2.312v1.062h.032c.401-.76 1.382-1.562 2.845-1.562 3.042 0 3.604 2.002 3.604 4.603v3.439z"/>
								</svg>
								</a>
							</div>
							</div>
						</div>
					</div>

					{/* Main Footer */}
					<div className="max-w-7xl mx-auto px-4 py-16">
						<div className="grid grid-cols-4 gap-16">
							{/* City Image and Contact Info */}
							<div>
							<div className="relative h-48 rounded-lg overflow-hidden mb-8">
								<Image
								src="/images/city.png"
								alt="City"
								fill
								className="object-cover"
								/>
							</div>
							<div className="space-y-2 text-gray-400 text-sm">
								<p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
								<p>(308) 555-0121</p>
								<p>tientapspktn@gmail.com</p>
							</div>
							</div>

							{/* Quick Menu */}
							<div>
							<h3 className="text-white text-sm font-semibold mb-4">QUICK MENU</h3>
							<ul className="space-y-2">
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">Latest Products</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">Backpack</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">Bags</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">Accessories</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">Collection</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">Service</a></li>
							</ul>
							</div>

							{/* Support */}
							<div>
							<h3 className="text-white text-sm font-semibold mb-4">SUPPORT</h3>
							<ul className="space-y-2">
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">Product Instructions</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">FAQs</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white text-sm">Shipping Options</a></li>
							</ul>
							</div>
						</div>
					</div>

					{/* Footer Bottom */}
					<div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
						<p className="text-gray-400 text-sm">©Book Innovation. All Rights Reserved.</p>
						<div className="flex gap-4">
							<a href="#" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</a>
							<a href="#" className="text-gray-400 hover:text-white text-sm">|</a>
							<a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
	)
}

export default CollectionView