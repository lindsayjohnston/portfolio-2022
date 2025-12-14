import { Link } from 'react-router-dom';
import './UnderConstruction.css';

const UnderConstruction = () => {
	return (
		<div className="under-page page-content flex-column fade-in">
			<h2>Web Development — Under Construction</h2>

			<div className="uc-hero">
				<div className="uc-icon" role="img" aria-label="under construction">🚧</div>
				<p>
					I'm rebuilding this section of the portfolio. New projects and case
					studies will appear here soon — thanks for your patience!
				</p>
			</div>

			<div className="links">
				<Link className="secondary-link-style" to="/">Home</Link>
				<a
					className="secondary-link-style"
					href="https://github.com/lindsayjohnston"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</div>
		</div>
	);
};

export default UnderConstruction;

