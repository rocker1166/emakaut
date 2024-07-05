import React from 'react'


const Filter2: React.FC = () => {
    return <div>
		<div className="w-full md:full my-4  backdrop-blur-3xl  shadow-red-500  border-b-2 border-red-600  shadow p-5 rounded-lg  bg-transparent">
			<div className="relative">
				<div className="absolute flex items-center ml-2 h-full">
					<svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
					</svg>
				</div>

				<input type="text" placeholder="1st year math, 2nd year english notes......." className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" />
			</div>

			<div className="flex items-center justify-between mt-4">
				<p className="font-medium text-white">
					Filters
				</p>

				<button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
					Reset Filter
				</button>
			</div>

			<div>
				<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
					<select title="1" defaultValue="1st" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">

						<option value="1st">1st</option>
						<option value="2nd">2nd</option>
						<option value="3rd">3rd</option>
						<option value="4th">4th</option>
					</select> 

					<select title="1" defaultValue="CSE" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
						<option value="CSE">CSE </option>
						<option value="IT">IT</option>
						<option value="ECE">ECE</option>
						<option value="E.E">E.E</option>
					</select>


					<select title="4" defaultValue="Math" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
					    <option value="">Subject</option>
						<option value="Math">Math</option>
						<option value="Physics">Physics</option>
						<option value="Chemistry">Chemistry</option>
						<option value="English">English</option>
					</select>

					<select title="4" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
						<option value="">Content Type</option>
						<option value="ebook">E-book</option>
						<option value="youtube">Youtube Playlilst</option>
						<option value="notes">Notes</option>
						<option value="question">Question Bank</option>
					</select>

					<select title="1" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
						<option value="">Price</option>
						<option value="Free">Free</option>
						<option value="paid">Paid</option>
					</select>

					

					
				</div>
			</div>
		</div>

	</div>
}
export default Filter2;