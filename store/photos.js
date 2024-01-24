import { types, getRoot, destroy, flow, applySnapshot } from "mobx-state-tree";


const Photo = types
  .model({
    "url": types.number,
    "user": types.number,
    "title": types.string,
    "id": types.identifier,
    "description": types.string
  })

export const Photos = types
  .model({
    photos: types.array(Photo),
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
        self.isLoading = true;
        //set data inside Mobx
        self.photos.set(response.data.photos);
        self.isLoading = false;
      }
      catch (error) {
        self.setError(error);
      }
    },
    setLoading: (loading) => {
      self.isLoading;
    },

  }))
  //getter
  .views((self) => ({
    get photos() {
      return self.photos
    }
  })
  );
