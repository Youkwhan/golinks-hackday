import RepoItem from "./RepoItem"
export default function RepoList({ repoItems }) {
	// list of JSX elements
	function renderRepoCards() {
		return repoItems.map((item) => {
			return <RepoItem key={item.id} item={item} />
		})
	}
	return <section>{renderRepoCards()}</section>
}
