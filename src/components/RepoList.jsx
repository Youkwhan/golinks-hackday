import RepoItem from "./RepoItem"
import "./RepoItem.css"
export default function RepoList({ repoItems }) {
	// list of JSX elements
	function renderRepoCards() {
		return repoItems.map((item) => {
			return <RepoItem key={item.id} item={item} />
		})
	}
	return <section className="repo-container">{renderRepoCards()}</section>
}
