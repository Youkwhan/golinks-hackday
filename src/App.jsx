import { useEffect, useState } from "react"
import "./App.css"
import Search from "./components/Search"
import RepoList from "./components/RepoList"

function App() {
	// our fetched items
	const [repoItems, setRepoItems] = useState([])
	// user input search repo
	const orgName = "Netflix"
	const [searchOrg, setSearchOrg] = useState("")
	const [searchRepo, setSearchRepo] = useState("") //repo search, in our set orgName
	const [delaySearch, setDelaySearch] = useState("")
	const apiUrlOrg = `https://api.github.com/search/repositories?q=org:${encodeURIComponent(
		orgName
	)}+${encodeURIComponent(delaySearch)}&sort=stars&order=desc`

	useEffect(() => {
		fetchRepos()
	}, [])

	// debouncer logic
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (delaySearch !== searchRepo) {
				setDelaySearch(searchRepo)
				fetchRepos()
			}
		}, 200)
		// If run again, reset our timer by canceling the old one
		return () => clearTimeout(timeoutId)
	}, [searchRepo])

	async function fetchRepos() {
		try {
			const res = await fetch(apiUrlOrg)
			if (!res.ok) {
				if (res.status === 422) {
					//Validation failed, or the endpoint has been spammed. (not enough admin power)
					throw new Error("Unprocessable Entity: Invalid search query.")
				}
				throw new Error(`Request failed with status code ${res.status}`)
			}

			const data = await res.json()
			// console.log(data)
			const parsedRepoObjData = parseRepos(data)
			setRepoItems(parsedRepoObjData)
		} catch (error) {
			handleApiError(error)
		}
	}

	function parseRepos(data) {
		const repositories = data.items
		return repositories.map((repo) => ({
			id: repo.id,
			repoName: repo.name,
			description: repo.description,
			updatedAt: repo.updated_at,
			language: repo.language,
			stars: repo.stargazers_count,
			forks: repo.forks_count,
			dateCreated: repo.created_at,
		}))
	}

	function handleApiError(error) {
		if (error.message === "Unprocessable Entity: Invalid search query.") {
			console.log("Invalid search query. Please check your search parameters.")
		}
	}

	return (
		<div className="App">
			<nav>
				<h1>Search for Github Organizations </h1>
				<Search type="Org" search={searchOrg} setSearch={setSearchOrg} />
			</nav>
			<main className="main">
				<header className="main__header">
					<h2>Repositories</h2>
					<Search type="Repo" search={searchRepo} setSearch={setSearchRepo} />
				</header>
				<hr className="hr" />

				<RepoList repoItems={repoItems} />
			</main>
		</div>
	)
}

export default App
