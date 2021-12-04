import { SiLinkedin, SiInstagram } from 'react-icons/si';

export default ({ teamArray, ourTeamSubtitle }) => {
	const renderLinks = (linksArray) => {
		return linksArray.map((link) => {
			const { href, Icon } = link;
			return (
				<a href={href} key={href}>
					{Icon}
				</a>
			);
		});
	};

	const renderTeamMembers = (arr) => {
		return arr.map((member) => {
			const { title, subtitle, icons, picture } = member;
			const styleArray = {
				background: picture === '' ? '$blue' : `url('${picture}')`,
			};
			return (
				<div className="monkeyCard">
					<div className="monkeyDrawing" style={styleArray}></div>
					<div className="monkeyInfo">
						<div className="monkeyText">
							<p>{title}</p>
							<h2>{subtitle}</h2>
						</div>
						<div className="monkeyIcons">{renderLinks(icons)}</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div className="ourTeamContainer" id="ourTeam">
			<h1>Our Team</h1>
			<p>{ourTeamSubtitle}</p>
			<div className="monkeyContainer">{renderTeamMembers(teamArray)}</div>
		</div>
	);
};
