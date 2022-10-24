import { gql } from '@apollo/client';


const libraryID = "2yHnUUNBXzIOlFtyhIO9IR"

export const GET_PHOTOS = gql`
query GET_PHOTOS {
    photoLibrary(id: "${libraryID}") {
        photosCollection {
          items {
            photoDescription
            photoImage {
              url
            }
          }
        }
      }
}`