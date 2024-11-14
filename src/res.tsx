import ContentCard from './components/ContentCard';

const ResumeComponent = () => {
	return (
		<div className='wrapper clearfix text-[#333332]'>
			<div className='left'>
				<div className='name-hero'>
					<div className='me-img'>
						<img
							src='https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/Hill-0xxvK8OSzlFnlgaPE5FhQSkwfdsBVm.webp'
							alt='Me'
						/>
					</div>
					<div className='name-text'>
						<h1>
							Hillary <em>Hamilton</em>
						</h1>
						<p>10 Iroquois St Knoxville, KY 12345</p>
						<p>hamilhab@gmail.com</p>
						<p>(123) 867-5309</p>
					</div>
				</div>
			</div>
			<div className='right'>
				<div className='inner'>
					<section>
          <div className='flex flex-col bg-white rounded-3xl'>
	<div className='px-6 py-8 sm:p-10 sm:pb-6'>
		<div className='grid items-center justify-center w-full grid-cols-1 text-left'>
			<div>
				<h2 className='text-lg font-medium tracking-tight text-gray-600 lg:text-3xl pb-8'>Research</h2>
						<ContentCard
							h3='project title'
							smSpan='Winter 2015 - Present sunt | suntr'
							p='Deserunt pariatur sint magna Lorem magna ea eiusmod. Aute cupidatat magna nulla nulla sit. Ullamco dolor fugiat aute dolore nulla laborum aliquip exercitation nostrud dolor voluptate est. Laboris reprehenderit do voluptate ex irure. Nisi in eu adipisicing proident. Amet laborum adipisicing adipisicing et duis ex. Commodo amet et irure voluptate est est sit nisi duis. Incididunt ut aliqua aliquip duis incididunt et elit.'
							p2=''
							p3=''
							lgSpan=''></ContentCard>
						<ContentCard
							h3='project title'
							smSpan='Spring 2012 - Winter 2015 | sunt| sunt'
							p='Proident labore proident aute ullamco non fugiat elit est qui commodo aliquip occaecat. Commodo reprehenderit reprehenderit sint occaecat. Ex est culpa laboris quis elit cupidatat et in non culpa pariatur et aliqua sunt voluptate. Duis reprehenderit esse ut non duis adipisicing cillum cupidatat commodo fugiat magna ut voluptate in do. Occaecat aute do consectetur eiusmod exercitation commodo enim commodo quis.'
							p2='Duis tempor incididunt aliquip esse ullamco elit eu. Officia non labore velit id. Dolor incididunt velit laboris et excepteur velit anim nulla labore incididunt esse est veniam do. Elit velit irure excepteur. Enim consectetur cillum occaecat laboris incididunt incididunt aliqua cillum qui in ullamco aliqua nisi incididunt. Cillum reprehenderit sint esse nisi proident est sint velit. Culpa ullamco deserunt laborum reprehenderit minim labore laborum ad Lorem. Cupidatat dolore ea nulla officia officia non elit magna fugiat irure laboris quis id qui.'
							p3=''
							lgSpan=''></ContentCard>
						<ContentCard
							h3='project tile'
							smSpan='Spring 2012 - Winter 2015 | sunt| sunt'
							p='Proident labore proident aute ullamco non fugiat elit est qui commodo aliquip occaecat. Commodo reprehenderit reprehenderit sint occaecat. Ex est culpa laboris quis elit cupidatat et in non culpa pariatur et aliqua sunt voluptate. Duis reprehenderit esse ut non duis adipisicing cillum cupidatat commodo fugiat magna ut voluptate in do. Occaecat aute do consectetur eiusmod exercitation commodo enim commodo quis.'
							p2='Duis tempor incididunt aliquip esse ullamco elit eu. Officia non labore velit id. Dolor incididunt velit laboris et excepteur velit anim nulla labore incididunt esse est veniam do. Elit velit irure excepteur. Enim consectetur cillum occaecat laboris incididunt incididunt aliqua cillum qui in ullamco aliqua nisi incididunt. Cillum reprehenderit sint esse nisi proident est sint velit. Culpa ullamco deserunt laborum reprehenderit minim labore laborum ad Lorem. Cupidatat dolore ea nulla officia officia non elit magna fugiat irure laboris quis id qui.'
							p3='Deserunt quis eu enim exercitation consequat.'
							lgSpan=''></ContentCard>
              </div>
              </div>
              </div>
              </div>
					</section>
					<section>
						<h1>Some kind of list of skills/specializations/areas of focus?</h1>
						<ul className='skill-set flex flex-wrap justify-center pb-8'>
							<li>Quant</li>
							<li>Qual</li>
							<li>Bacon</li>
							<li>Eggs</li>
							<li>Gilmore Girls</li>
							<li>Robin Hood</li>
							<li>Farming</li>
							<li>Cats</li>
							<li></li>
							<li></li>
						</ul>
					</section>
					<section>
						<h1>References</h1>
						<p>
							William Grand | <em>Grand Interactive, llc. | CEO</em>
						</p>
						<p>(617) 448-0910 | wgrand@grandinteractive.com</p>
						<p>
							Eric Chauvin | <em>PadMatcher Inc. | CEO</em>
						</p>
						<p>(617) 448-0910 | eric@padmatcher.com</p>
						<p>
							Chris Heller <em>Penrose Realty LLC. | Broker</em>
						</p>
						<p>(617) 794-4554 | chris@penroserealty.com</p>
					</section>
					<section>
						<h1>Personal Interests/idk another list/links?</h1>
						<ul className='skill-set'>
							<li>Faith</li>
							<li>Biblical Studies</li>
							<li>Playing Guitar</li>
							<li>Song Writing</li>
							<li>Health & Nutrition</li>
							<li>Reading</li>
						</ul>
					</section>
					<section>
						<div className='handmade'>
							<p className='text-xs text-center text-gray-500 dark:text-gray-400 mt-4'>
								Crafted with <span className='text-red-500'>♥</span> by{' '}
								<a
									href='https://www.selynt.com'
									target='_blank'
									rel='noopener noreferrer'
									className='font-semibold text-a-dark hover:text-s dark:text-s dark:hover:text-s-light transition-colors duration-300'>
									Selynt
								</a>{' '}
								| Empowering Small Businesses & Individual Professionals
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default ResumeComponent;
