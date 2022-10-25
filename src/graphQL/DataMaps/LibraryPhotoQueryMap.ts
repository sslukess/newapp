
export default function LibraryPhotoQueryMap(data: any) {


    interface IPhotoObj {
        photoDescription: string; 
        url: string
    }

    interface IReturnedPhoto {
        __typename: string;
        url: string; 
    }

    let photos: Array<IPhotoObj> = [];

//    console.log(data);
    data.photoLibrary?.photosCollection?.items?.forEach((photo: any) => {


        const { photoDescription, photoImage }: {photoDescription: string, photoImage: IReturnedPhoto} = photo;

        const url: string = photoImage.url; 

        let element: IPhotoObj = { photoDescription, url };

        photos.push(element);

    });

    return photos;
    
}