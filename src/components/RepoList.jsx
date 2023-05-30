import { useEffect, useState } from "react"
import RepoItem from "./RepoItem"
import "./RepoItem.css"
export default function RepoList({ repoItems }) {
	const [commitList, setCommitList] = useState([])
	const [repoId, setRepoId] = useState("")

	useEffect(() => {
		// fetchCommits();
	}, [repoId])

	function handleItemClick(itemId) {
		console.log("Item clicked:", itemId)
		// We want to render by commits from this ID
		setRepoId(itemId)
	}

	// list of JSX elements
	function renderRepoCards() {
		return repoItems.map((item) => {
			return <RepoItem key={item.id} item={item} onClick={handleItemClick} />
		})
	}

	return <section className="repo-container">{renderRepoCards()}</section>
}
