import { Compute } from 'google-auth-library';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import { google, sheets_v4 } from 'googleapis';

class GoogleSheetsServie {
	private auth;
	private client: JSONClient | Compute;
	private googleSheets: sheets_v4.Sheets;
	private spreadsheetId = process.env.GOOGLE_SPREED_SHEET_ID;
	constructor() {
		this.auth = new google.auth.GoogleAuth({
			keyFile: 'credentials.json',
			scopes: 'https://www.googleapis.com/auth/spreadsheets',
		});
		this.getClient();
		this.getGoogleSheets();
	}

	async getClient() {
		this.client = await this.auth.getClient();
	}

	async getGoogleSheets() {
		this.googleSheets = google.sheets({ version: 'v4', auth: this.client });
	}

	async getSepecificCell(range: string) {
		return await this.googleSheets.spreadsheets.values.get({
			auth: this.auth,
			spreadsheetId: this.spreadsheetId,
			range,
		});
	}

	async updateSpecificCell(range: string, value: number) {
		const resource = {
			values: [[value]],
		};
		return await this.googleSheets.spreadsheets.values.update({
			auth: this.auth,
			spreadsheetId: this.spreadsheetId,
			range,
			valueInputOption: 'USER_ENTERED',
			requestBody: resource,
		});
	}
}

export default new GoogleSheetsServie();
