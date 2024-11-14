
export const TextParallaxContentExample = () => {
	return (
		<div className='bg-white'>
			

			{/* blog card with iamge */}
			<article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
				<img
					alt=''
					src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
					className='h-56 w-full object-cover'
				/>

				<div className='bg-white p-4 sm:p-6'>
					<div className='block text-xs text-gray-500'>
						{' '}
						10th Oct 2022{' '}
					</div>

					<a href='#'>
						<h3 className='mt-0.5 text-lg text-gray-900'>How to position your furniture for positivity</h3>
					</a>

					<p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi
						temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
						soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis
						voluptatem?
					</p>
				</div>
			</article>

			{/* Grid paragraphs*/}
			<section className='py-32'>
				<div className='mx-auto max-w-5xl space-y-12 px-6'>
					<h2 className='text-title max-w-xl text-4xl font-medium lg:text-5xl'>
						The Gemini ecosystem brings together our models, products and platforms.
					</h2>
					<div className='grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24'>
						<div className='space-y-4'>
							<p className='text-body'>
								Gemini is evolving to be more than just the models.{' '}
								<span className='text-title font-medium'>It supports an entire ecosystem</span> &mdash; from products
								innovate.
							</p>
							<p>
								It supports an entire ecosystem &mdash; from products to the APIs and platforms helping developers and
								businesses innovate
							</p>
						</div>

						<p className='text-body'>
							Gemini is evolving to be more than just the models. It supports an entire ecosystem &mdash; from products
							to the APIs and platforms helping It supports an entire ecosystem developers and businesses innovate.
						</p>
					</div>
				</div>
			</section>

			{/* about flipped */}
			<section>
				{/* Container */}
				<div className='mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20'>
					{/* Component */}
					<div className='grid gap-12 sm:gap-20 lg:grid-cols-2'>
						{/* Content */}
						<div className='flex flex-col items-start gap-2'>
							<div className='flex items-center rounded-md bg-gray-300 px-3 py-1'>
								<div className='mr-1 h-2 w-2 rounded-full bg-black'></div>
								<p className='text-sm'>Available for work</p>
							</div>
							<p className='text-sm text-gray-500 sm:text-xl'>Developer &amp; UX Specialist</p>
							{/* Title */}
							<h1 className='mb-6 text-4xl font-bold md:text-6xl lg:mb-8'>Jonathan Smith</h1>
							<p className='text-sm text-gray-500 sm:text-xl'>
								Consectetur adipiscing elit duis tristique sollicitudin nibh. Augue mauris augue neque gravida in
								fermentum. Sapien pellentesque habitant morbi tristique pellentesque.
							</p>
							{/* Divider */}
							<div className='mb-8 mt-8 h-px w-full bg-black'></div>
							<div className='mb-6 flex flex-col gap-2 text-sm text-gray-500 sm:text-base lg:mb-8'>
								<p>
									<strong>2020: </strong>Site of the year in Awwwards.com
								</p>
								<p>
									<strong>2020: </strong>Site of the year in Awwwards.com
								</p>
							</div>
							{/* Link */}
							<a
								href='#'
								className='mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 lg:mb-12'>
								<p>All Achievements</p>
								<img
									src='https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg'
									alt=''
									className='inline-block'
								/>
							</a>
							{/* Buttons */}
							<div className='flex flex-col gap-4 font-semibold sm:flex-row'>
								<a href='#' className='flex items-center gap-4 rounded-md bg-black px-6 py-3 text-white'>
									<img
										src='https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg'
										alt=''
										className='inline-block'
									/>
									<p>Email Me</p>
								</a>
								<a href='#' className='flex gap-4 rounded-md border border-solid border-black px-6 py-3'>
									<img
										src='https://assets.website-files.com/6458c625291a94a195e6cf3a/64b14704c8616ad7ba080fe0_Note.svg'
										alt=''
										className='inline-block'
									/>
									<p>Resume</p>
								</a>
							</div>
						</div>
						{/* Image */}
						<div className='min-h-[530px] overflow-hidden rounded-md bg-gray-100'></div>
					</div>
				</div>
			</section>
		</div>
	);
};