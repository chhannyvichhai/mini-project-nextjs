const CategoryCard = ({category}) => {
	return (
		<div className="w-80 h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3">
			<a href="#">
				<img className="p-8 rounded-t-lg object-contain" src={category.image} alt="" />
			</a>
			<div className="p-5">
				<a href="#">
					<div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{category.name}
					</h5>
                    </div>
				</a>
			</div>
		</div>
	);
};
export default CategoryCard;
