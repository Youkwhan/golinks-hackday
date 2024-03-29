export default function RepoItem({ item, onClick}) {
	function handleClick() {
		if (onClick) {
			onClick(item.id)
		}
	}

	return (
		<div className="card" onClick={handleClick}>
			<div className="card__title">
				<h2>{item.repoName}</h2>
				<p className="prop date">Created at {item.dateCreated}</p>
			</div>
			<p className="card__desc">{item.description}</p>
			<div className="card__props">
				<p className="prop language"><i className="fa-solid fa-circle"></i>{item.language}</p>
				<p className="prop star"><i className="fa-regular fa-star"></i>{item.stars}</p>
				<p className="prop fork"><i className="fa-solid fa-code-fork"></i>{item.forks}</p>
				<p className="prop date">Updated at {item.updatedAt}</p>
			</div>
		</div>
	)
}
