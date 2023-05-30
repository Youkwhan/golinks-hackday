export default function RepoItem({ item }) {
	return (
		<div>
			<div>
				<h2>{item.repoName}</h2>
				<p>{item.dateCreated}</p>
			</div>
			<p>{item.description}</p>
			<div>
				<p>{item.stars}</p>
				<p>{item.forks}</p>
				<p>{item.updatedAt}</p>
			</div>
		</div>
	)
}
