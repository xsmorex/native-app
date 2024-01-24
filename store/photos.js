import { types } from "mobx-state-tree";
import axios from 'axios'; // Import Axios

const Photo = types
  .model({
    url: types.number,
    user: types.number,
    title: types.string,
    id: types.identifier,
    description: types.string
  });

export const Photos = types
  .model({
    photos: types.array(Photo),
    isLoading: false,
  })
  .volatile((self) => ({
    error: undefined,
  }))
  .actions((self) => ({
    setError: (error) => {
      self.error = error;
    },
    loadPhotos: async () => {
      try {
        // Fetch data
        const response = await axios.request(options); // Assuming options is defined
        self.isLoading = true;
        // Set data inside Mobx
        self.photos.replace(response.data.photos); // Use replace for arrays
        self.isLoading = false;
      } catch (error) {
        self.setError(error);
      }
    },
    setLoading: (loading) => {
      self.isLoading = loading; // Corrected to set self.isLoading
    },
  }))
  // .views((self) => ({
  //   get photosArray() {
  //     return self.photos.slice(); // Return a shallow copy of the array
  //   },
  // }
  // ));
