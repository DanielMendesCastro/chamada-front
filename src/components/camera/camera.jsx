import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

const PHOTO_STORAGE = "photos";
export const usePhotoGallery = () => {
    const { getPhoto } = useCamera();
    const [photos, setPhotos] = useState([]);
    const { deleteFile, getUri, readFile, writeFile } = useFilesystem();
    const { get, set } = useStorage();

    const savePicture = async (photo, fileName) => {
        let base64Data;

        if (isPlatform('hybrid')) {
            const file = await readFile({
                path: photo.path
            });
            base64Data = file.data;
        } else {
            base64Data = await base64FromPath(photo.webPath);
        }
        const savedFile = await writeFile({
            path: fileName,
            data: base64Data,
            directory: FilesystemDirectory.Data
        });

        if (isPlatform('hybrid')) {
            return {
                filepath: savedFile.uri,
                webviewPath: Capacitor.convertFileSrc(savedFile.uri),
            };
        }
        else {
            return {
                filepath: fileName,
                webviewPath: photo.webPath
            };
        }
    };

    useEffect(() => {
        const loadSaved = async () => {
            const photosString = await get('photos');
            const photosInStorage = (photosString ? JSON.parse(photosString) : []);
            if (!isPlatform('hybrid')) {
                for (let photo of photosInStorage) {
                    const file = await readFile({
                        path: photo.filepath,
                        directory: FilesystemDirectory.Data
                    });
                    photo.base64 = `data:image/jpeg;base64,${file.data}`;
                }
            }
            setPhotos(photosInStorage);
        };
        loadSaved();
    }, [get, readFile]);

    const takePhoto = async () => {
        const cameraPhoto = await getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 25
        });
        const fileName = new Date().getTime() + '.jpeg';
        const newPhotos = [{
            filepath: fileName,
            webviewPath: cameraPhoto.webPath
        }, ...photos];
        const savedFileImage = await savePicture(cameraPhoto, fileName);
        setPhotos(newPhotos)
        set(PHOTO_STORAGE,
            isPlatform('hybrid')
                ? JSON.stringify(newPhotos)
                : JSON.stringify(newPhotos.map(p => {
                    const photoCopy = { ...p };
                    delete photoCopy.base64;
                    return photoCopy;
                })));
    };

    return {
        photos,
        takePhoto
    };
}