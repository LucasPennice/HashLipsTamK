export default ({ banner, bannerImages, children }) => {
	const { bannerText, nftQuantity } = banner;
	const { bannerImg, bigImage, animatedImage } = bannerImages;

	const styleArrayBanner = {
		background: bannerImg === '' ? '#1d3557' : `url('${bannerImg}')`,
	};
	const styleArrayBigImg = {
		background: bigImage === '' ? '#1d3557' : `url('${bigImage}')`,
	};
	const styleArrayAnimatedImg = {
		background: animatedImage === '' ? 'gray' : `url('${animatedImage}')`,
	};

	const renderText = (arr) => {
		return arr.map((par) => {
			return (
				<h2 className="bannerText" key={par}>
					{par}
				</h2>
			);
		});
	};
	return (
		<div className="banner">
			<div id="societyOfDerivativeApes" style={styleArrayBanner}></div>
			<div className="columnsContainer">
				<div className="leftColumn">
					<h1 className="nftQuantity">{nftQuantity}</h1>
					{children}
					{renderText(bannerText)}
				</div>
				<div className="rightColumn">
					<div id="monkeyPic" style={styleArrayBigImg}></div>
					<div className="flotatingImg" style={styleArrayAnimatedImg}></div>
				</div>
			</div>
		</div>
	);
};
