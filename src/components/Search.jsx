import "./Search.css"

export default function Search(props) {
	const { type, search, setSearch } = props
	return (
		<form className="form">
			<div>
				<label htmlFor={`github${type}Search`} hidden>
					Search for GitHub {type}
				</label>
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					type="text"
					className="form-control"
					id={`github${type}Search`}
					aria-describedby={`github${type}Search`}
					placeholder={`Search for a GitHub ${type}`}
				/>
			</div>
			<button type="submit" className="btn btn-search">
				Search
			</button>
		</form>
	)
}
