export default ({ roadMapGoalsArray, roadMapSubtitleText }) => {
	const renderRoadMapGoals = (goalArray) => {
		return goalArray.map((goal) => {
			const { percentage, isDone, text } = goal;
			const backgroundColor = {
				backgroundColor: isDone === true ? '$blue' : '#0d7079',
			};
			return (
				<div className="roadmapGoal" key={percentage}>
					<div style={backgroundColor}>{`${percentage}%`}</div>
					<p>
						{isDone === true ? <span>DONE!</span> : <></>} {text}
					</p>
				</div>
			);
		});
	};
	return (
		<div className="roadmapContainer" id="roadmap">
			<h1>ROADMAP</h1>
			<p>{roadMapSubtitleText}</p>
			<div className="roadmap">
				<div className="roadmapTextAndBubbles">
					{renderRoadMapGoals(roadMapGoalsArray)}
				</div>
				<div className="monkeyPic"></div>
			</div>
		</div>
	);
};
