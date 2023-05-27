import Products from "./products/page";
import Categories from "./categories/page";
import Users from "./users/page";
import Link from "next/link";


export default function Home({product}) {
	return (
		<main>
			<div>
				<section className="bg-white dark:bg-gray-900">
					<div className="border-b dark:border-gray-700">
						<div className="container m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
							<div className="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
								<div className="col-span-1">
									<div className="relative w-full">
										<img
											src="https://media.istockphoto.com/id/1320501530/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=dgnAb4BsW_O8LEPUaEurgYj82H6x7fA_OCcuBTDUVCA="
											alt="shoes"
											loading="lazy"
											width="100%"
											height="640"
										/>
										<div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800">
											<div className="flex p-1">
												<button
													aria-label="button-left"
													className="p-3 border-r dark:border-gray-600"
												>
													<svg
														className="fill-gray-800 dark:fill-white rotate-180 bi bi-chevron-right"
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														
														fill="currentColor"
													
														viewBox="0 0 16 16"
													>
														<path
															fill-rule="evenodd"
															d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
														/>
													</svg>
												</button>
												<button aria-label="button-right" className="p-3">
													<svg
														className="fill-gray-800 dark:fill-white"
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-chevron-right"
														viewBox="0 0 16 16"
													>
														<path
															fill-rule="evenodd"
															d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div className="relative col-span-1">
									<h1 className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">
										A Look for every{" "}
										<span className="text-cyan-800 dark:text-cyan-400">
											mood
										</span>
										.
									</h1>
									<div className="mt-8 lg:mt-16 space-y-8">
										<p className="text-gray-700 dark:text-gray-300">
											Sit amet consectetur adipisicing elit. eligendi tenetur
											nihil quaerat suscipit, sunt dignissimos.
										</p>
										<div className="flex space-x-4 mt-6">
											<button
												type="button"
												title="Start buying"
												className="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max"
											>
												<span className="block text-white text-sm">
													Shop now
												</span>
											</button>
											<button
												type="button"
												title="Start buying"
												className="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 dark:border-gray-700 sm:w-max"
											>
												<span className="block text-gray-800 text-sm dark:text-white">
													View store
												</span>
											</button>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div classNameName="flex min-h-screen flex-wrap items-center justify-between p-24">
				<Products />
				<Categories/>
				<Users/>
			</div>
		</main>
	);
}