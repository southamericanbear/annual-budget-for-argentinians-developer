/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
require('dotenv').config();
import app from './app';

const PORT = process.env.PORT || 1990;

app.listen(PORT, () => {
	console.log(`🚀 Server started on port ${PORT}!`);
});
