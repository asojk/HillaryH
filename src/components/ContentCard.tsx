
import * as Separator from "@radix-ui/react-separator";

interface ContentCardProps {
	h3: string;
  p: string;
	p2: string;
	p3: string;
  lgSpan: string;
  smSpan: string;
}

export default function ContentCard({ h3, p, p2, p3, lgSpan, smSpan }: ContentCardProps) {
  return (

	<div className='flex flex-col bg-white rounded-3xl'>
	<div className='px-6 py-4'>
		<div className='grid items-center justify-center w-full grid-cols-1 text-left'>
			<div>
				<h3 className='text-base font-medium pb-1 text-gray-600 lg:text-xl'>{h3}</h3>
				<span className='text-sm font-medium text-gray-500'> {smSpan}</span>
				<p className='mt-2 text-sm text-gray-500'>{p}</p>
				<p className='mt-2 text-sm text-gray-500'>{p2}</p>
				<p className='mt-2 text-sm text-gray-500'>{p3}</p>
			</div>
			<div className='mt-6'>
				<p>
					<span className='text-5xl font-light tracking-tight text-black'>{lgSpan}</span>

				</p>
			</div>
		</div>
	</div>
	<div className='flex px-6 sm:px-8 py-4'>
	<Separator.Root className='bg-black/50 h-1 rounded-xl w-full' orientation='horizontal' />
	</div>
</div>
	);
}