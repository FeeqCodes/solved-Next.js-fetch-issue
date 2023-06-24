



export default function Navbar() {
    return (
			<>
				{/*------ NAVBAR STARTS ------*/}
				<section>
					<div className="relative pt-6 px-2 sm:px-6 lg:px-0">
						<nav className="relative" aria-label="Global">
							<div className="flex justify-between">
								<div>
									<a href="/" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Home</a>
									<a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Features</a>
									<a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Marketplace</a>
								</div>
								<div>
									<a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Company</a>
									<a href="#" className="font-medium mr-8 text-indigo-600 hover:text-indigo-500">Log in</a>
								</div>
							</div>
						</nav>
					</div>
				</section>
				{/*------ NAVBAR ENDS ------*/}
			</>
	)
}