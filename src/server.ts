/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
require('dotenv').config();
import app from './app';

app.listen(1990, () => {
	console.log('🚀 Server started on port 1990!');
});
