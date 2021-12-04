import { SiLinkedin, SiInstagram, SiYoutube } from 'react-icons/si';
import { GiSailboat } from 'react-icons/gi';
import { SiDiscord, SiTwitter } from 'react-icons/si';

export const bannerImages = { bannerImg: '', bigImage: '', animatedImage: '' };
export const buyAnApeText = {
	titleText: 'Title',
	middleText: 'Middle',
	buttonText: 'Click Me',
};
export const roadMapSubtitleText =
	'We are here for the long run. We have ambitious plans, some of which were never before seen in the NFT space, stay tuned.';
export const joinTheCommunity = {
	subtitleText:
		'Join the Discord and follow us on Twitter for more information, our latest news and announcements.',
	icons: [
		{ href: '', Icon: <SiTwitter /> },
		{ href: '', Icon: <SiDiscord /> },
	],
};
export const smartContactAdress = {
	text: '0x827acb09a2dc20e39c9aad7f7190d9bc53534192',
	href: 'https://polygonscan.com/token/0x827acb09a2dc20e39c9aad7f7190d9bc53534192',
};

export const menuLinks = [
	{ href: '', iconClass: 'menuLinks', text: 'lorem', Icon: '' },
	{ href: '#roadmap', iconClass: 'menuLinks', text: 'Roadmap', Icon: '' },
	{ href: '#ourTeam', iconClass: 'menuLinks', text: 'Team', Icon: '' },
	{ href: '', iconClass: 'icons', text: '', Icon: <GiSailboat /> },
	{ href: '', iconClass: 'icons', text: '', Icon: <SiTwitter /> },
	{ href: '', iconClass: 'discordIcon', text: '', Icon: <SiDiscord /> },
];
//If you want to add or remove a question then you have to modify this array
export const frequentlyAskedQuestionsArray = [
	{ title: 'Title 1', text: 'Text 1', id: 1 },
	{ title: 'Title 2', text: 'Text 2', id: 2 },
	{ title: 'Title 3', text: 'Text 3', id: 3 },
	{ title: 'Title 4', text: 'Text 3', id: 4 },
	{ title: 'Title 5', text: 'Text 3', id: 5 },
	{ title: 'Title 6', text: 'Text 3', id: 6 },
];
//If you want to add or remove a road map goal then you have to modify this array
export const roadMapGoalsArray = [
	{
		percentage: 10,
		isDone: true,
		text: 'Gift 10000000 dollars to charity',
	},
	{
		percentage: 20,
		isDone: true,
		text: 'Gift 10000000 dollars to charity',
	},
	{
		percentage: 30,
		isDone: true,
		text: 'Gift 10000000 dollars to charity',
	},
	{
		percentage: 50,
		isDone: false,
		text: 'Gift 10000000 dollars to charity',
	},
	{
		percentage: 60,
		isDone: false,
		text: 'Gift 10000000 dollars to charity',
	},
	{
		percentage: 70,
		isDone: false,
		text: 'Gift 10000000 dollars to charity',
	},
];

export const ourTeamSubtitle = 'This is the subtitle for the OUR TEAM section';
export const teamArray = [
	{
		title: 'Lord',
		subtitle: 'Co-Founder',
		icons: [
			{ href: '', Icon: <SiLinkedin /> },
			{ href: '', Icon: <SiInstagram /> },
		],
		picture: '',
	},
	{
		title: 'Engineer',
		subtitle: 'Thinker',
		icons: [
			{ href: '', Icon: <SiLinkedin /> },
			{ href: '', Icon: <SiInstagram /> },
		],
		picture: '',
	},
	{
		title: 'Artist',
		subtitle: 'Designer',
		icons: [
			{ href: '', Icon: <SiLinkedin /> },
			{ href: '', Icon: <SiInstagram /> },
		],
		picture: '',
	},
];

export const footerTermsOfService = {
	topText: 'Terms & Conditions',
	bottomText: '© 2021',
	href: '',
};
export const footerLogoUrl = 'https://i.imgur.com/D5xMoXB.png';
export const footerIcons = [
	{ href: '', Icon: <SiYoutube /> },
	{ href: '', Icon: <SiTwitter /> },
	{ href: '', Icon: <SiInstagram /> },
	{ href: '', Icon: <SiDiscord /> },
];