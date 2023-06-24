import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import firebaseConfig from '../../configs/firebase.config';

export const uploadFiles = async (folder: string, month: string, year: string, files: Express.Multer.File[]) => {
	initializeApp(firebaseConfig);
	const storage = getStorage();
	const downloadURLs: string[] = [];

	for (const file of files) {
		const storageRef = ref(storage, `files/${folder}/${year}/${month}/${file.originalname}`);
		const metadata = {
			contentType: file.mimetype,
		};
		const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
		const downloadURL = await getDownloadURL(snapshot.ref);

		downloadURLs.push(downloadURL);
	}

	return downloadURLs;
};
