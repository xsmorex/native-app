import { types } from "mobx-state-tree";
import axios from 'axios'; // Import Axios
import { values } from "mobx"


const options = {
  method: "GET",
  url: `https://api.slingacademy.com/v1/sample-data/photos`,
  headers: {},
  params: {},
};


const Photo = types.model("Photo", {
  url: types.string,
  user: types.number,
  title: types.string,
  id: types.identifierNumber,
  description: types.string,
});

export const Photos = types
  .model("Photos", {
    // map --> is to use put and set function
    photos: types.map(Photo),
    isLoading: false,
    //filter: types.optional(filterType, SHOW_ALL)
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
        //fetch data
        const response = await axios.request(options);
        self.setLoading(true);
        //set data inside Mobx//
        self.setPhotos(response.data.photos);
      } catch (error) {
        console.log("test", error);
        self.setError(error);
      } finally {
        self.setLoading(false);
      }
    },
    setPhotos: (photos) => {
      photos.forEach((photo) => self.photos.put(photo));
    },
    setLoading: (loading) => {
      self.isLoading = loading;
    },
    //immediately after an instance is created and initial values are applied. Children will fire this event before parents. You can't make assumptions about the parent safely, use afterAttach if you need to.
    afterCreate: () => {
      console.log("Created a new photos model!");
      self.loadPhotos();
    },
  }))
  //getter
  .views((self) => ({
    // change the value because get photos looks similar that self.photos
    get allPhotos() {
      // values put this map function into array. We call directly the allPhotos inside the components. 
      return values(self.photos);
    },
  }));

// .views((self) => ({
//   get photosArray() {
//     return self.photos.slice(); // Return a shallow copy of the array
//   },
// }
// ));
