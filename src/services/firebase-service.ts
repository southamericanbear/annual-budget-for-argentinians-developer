import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, FirebaseStorage, listAll } from 'firebase/storage';
import firebaseConfig from '../configs/firebase.config';

export default class FirebaseService {
	private storage: FirebaseStorage;
	constructor() {
		initializeApp(firebaseConfig);
		this.storage = getStorage();
	}

	async getFiles(folder: string) {
		const list = await listAll(ref(this.storage, `files/${folder}`));
		return list;
	}

	async uploadFiles(folder: string, month: string, year: string, files: Express.Multer.File[]) {
		const downloadURLs: string[] = [];
		for (const file of files) {
			const storageRef = ref(this.storage, `files/${folder}/${year}/${month}/${file.originalname}`);
			const metadata = {
				contentType: file.mimetype,
			};
			const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
			const downloadURL = await getDownloadURL(snapshot.ref);
			downloadURLs.push(downloadURL);
		}
		return downloadURLs;
	}
}
