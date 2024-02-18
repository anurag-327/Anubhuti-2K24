"use client";

// Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function (props) {
	return (
		<>
			<Header />
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
						Events
					</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						This year we have a number of great events lined up for
						you. From dancing to singing, we have it all.
					</p>
				</div>
				{/* Grid */}
				<div className="grid lg:grid-cols-2 gap-6">
					{Array.from({ length: 7 }).map((_, i) => (
						<Card key={i} />
					))}
				</div>
				{/* End Grid */}
			</div>
			<Footer />
		</>
	);
}

function Card(props) {
	return (
		<a
			className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
			href="#"
		>
			<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
				<img
					className="size-full absolute top-0 start-0 object-cover"
					src="https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1062&q=80"
					alt="Image Description"
				/>
			</div>
			<div className="absolute top-0 inset-x-0 z-10">
				<div className="p-4 flex flex-col h-full sm:p-6">
					{/* Avatar */}
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<img
								className="size-[46px] border-2 border-white rounded-full"
								src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
								alt="Image Description"
							/>
						</div>
						<div className="ms-2.5 sm:ms-4">
							<h4 className="font-semibold text-white">Gloria</h4>
							<p className="text-xs text-white/[.8]">
								May 30, 2021
							</p>
						</div>
					</div>
					{/* End Avatar */}
				</div>
			</div>
			<div className="absolute bottom-0 inset-x-0 z-10">
				<div className="flex flex-col h-full p-4 sm:p-6">
					<h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
						Classical Show-Off
					</h3>
					<p className="mt-2 text-white/[.8]">
						An intense battle of breathtaking classical dance.
					</p>
				</div>
			</div>
		</a>
	);
}
