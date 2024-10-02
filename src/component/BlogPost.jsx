import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img8 from "../images/img8.jpg";
import img10 from "../images/img10.jpg";

const posts = [
	{
		id: 1,
		imageUrl: img3,
	},
	{
		id: 2,
		imageUrl: img4,
	},
	{
		id: 3,
		imageUrl: img5,
  },
  {
		id: 4,
		imageUrl: img6,
  },
  {
		id: 5,
		imageUrl: img8,
  },
  {
		id: 6,
		imageUrl: img10,
	},
	// More posts...
];

export default function BlogPost() {
	return (
		<section id="blog" className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-amber-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">
						Blogs Post
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Look for my latest blog together with my friends.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<article
							key={post.id}
							className="flex flex-col items-start justify-between"
						>
							<div className="relative w-full">
								<img
									alt=""
									src={post.imageUrl}
									className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/3]"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
