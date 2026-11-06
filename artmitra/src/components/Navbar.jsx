export default function Navbar() {
	return (
		<nav className="navbar" aria-label="Main navigation">
			<a className="navbar-brand" href="/" aria-label="ArtMitra home">
				ArtMitra
			</a>
			<a className="navbar-admin-button" href="/admin">
				Admin
			</a>
		</nav>
	);
}
