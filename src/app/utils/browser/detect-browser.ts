import { Browser } from './browser.interface';

export class BrowserDetect implements Browser {
	browser: any;
	version: number | string;
	OS: string;
	private versionSearchString: string;
	navigator = window.navigator;

	dataBrowser = [
		{
			string: this.navigator.userAgent,
			subString: 'Chrome',
			identity: 'Chrome',
		},
		{
			string: this.navigator.userAgent,
			subString: 'OmniWeb',
			versionSearch: 'OmniWeb/',
			identity: 'OmniWeb',
		},
		{
			string: this.navigator.vendor,
			subString: 'Apple',
			identity: 'Safari',
			versionSearch: 'Version',
		},
		{ string: this.navigator.vendor, subString: 'iCab', identity: 'iCab' },
		{
			string: this.navigator.vendor,
			subString: 'KDE',
			identity: 'Konqueror',
		},
		{
			string: this.navigator.userAgent,
			subString: 'Firefox',
			identity: 'Firefox',
		},
		{
			string: this.navigator.vendor,
			subString: 'Camino',
			identity: 'Camino',
		},
		{
			// for newer Netscapes (6+)
			string: this.navigator.userAgent,
			subString: 'Netscape',
			identity: 'Netscape',
		},
		{
			string: this.navigator.userAgent,
			subString: 'MSIE',
			identity: 'Explorer',
			versionSearch: 'MSIE',
		},
		{
			string: this.navigator.userAgent,
			subString: 'Gecko',
			identity: 'Mozilla',
			versionSearch: 'rv',
		},
		{
			// for older Netscapes (4-)
			string: this.navigator.userAgent,
			subString: 'Mozilla',
			identity: 'Netscape',
			versionSearch: 'Mozilla',
		},
	];

	dataOS = [
		{
			string: this.navigator.platform,
			subString: 'Win',
			identity: 'Windows',
		},
		{ string: this.navigator.platform, subString: 'Mac', identity: 'Mac' },
		{
			string: this.navigator.userAgent,
			subString: 'iPhone',
			identity: 'iPhone/iPod',
		},
		{
			string: this.navigator.platform,
			subString: 'Linux',
			identity: 'Linux',
		},
	];

	constructor() {
		this.init();
	}
	public init() {
		this.browser =
			this.searchString(this.dataBrowser) || 'An unknown browser';
		this.version =
			this.searchVersion(navigator.userAgent) ||
			this.searchVersion(navigator.appVersion) ||
			'an unknown version';
		this.OS = this.searchString(this.dataOS) || 'an unknown OS';
	}

	private searchString(data) {
		for (let i = 0; i < data.length; i++) {
			const dataString = data[i].string;
			const dataProp = data[i].prop;
			this.versionSearchString =
				data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) !== -1)
					return data[i].identity;
			} else if (dataProp) return data[i].identity;
		}
	}

	private searchVersion(dataString) {
		const index = dataString.indexOf(this.versionSearchString);
		if (index === -1) return;
		return parseFloat(
			dataString.substring(index + this.versionSearchString.length + 1)
		);
	}
}
