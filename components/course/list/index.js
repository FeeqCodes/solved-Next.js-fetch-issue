
// import Image from "next/image"
import Link from "next/link"

import { getLocalData } from "../lib/getdata"


export default async function List(){
  const posts = await getLocalData()
	return(
		<>
			{/*------ COURSE CARD STARTS ------*/}
			<section className="grid grid-cols-2 gap-4 mb-5">
			 { posts.map(post =>
        <div
          key={post.id}
          className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
						<div className="md:flex">
							<div className="md:flex-shrink-0">
								 <img
                className="h-48 w-full object-cover md:w-48"
                src={post.coverImage}
                alt={post.title}
              />
							</div>
							<div className="p-8">
							<div
                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {post.type}
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {post.title}
              </a>
              <p
                className="mt-2 text-gray-500">
                {post.description}
              </p>
							</div>
						</div>
					</div>
				) }
			</section>
      {/*------ COURSE CARD ENDS ------*/}
		</>
	)
}


	







// creating a card template with multiple cards that increments
// export default function List({courses}) {
// 	return(
// 		<>
// 			{/*------ COURSE CARD STARTS ------*/}
// 			<section className="grid grid-cols-2 gap-4 mb-5">
// 				{ Array.from({length: 4}).map((_, i) =>
// 					<div key={i} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
// 						<div className="md:flex">
// 							<div className="md:flex-shrink-0">
// 								<img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store" />
// 							</div>
// 							<div className="p-8">
// 								<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
// 								<a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
// 								<p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
// 							</div>
// 						</div>
// 					</div>
// 				)}
// 			</section>
//       {/*------ COURSE CARD ENDS ------*/}
// 		</>
// 	)
// }


