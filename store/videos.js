import { types } from "mobx-state-tree";
import { values } from "mobx"
import json from "../mock/api.json"

const Video = types.model("Video", {
  contentMeta: types.array(
    types.model({
      type: types.string,
      contentType: types.string,
      availableQualities: types.array(
        types.model({
          qualityDepth: types.string,
          fileSize: types.number,
          resolution: types.model({
            width: types.number,
            height: types.number,
          }),
        })
      ),
      fileId: types.string,
    })
  ),
  numOfLikes: types.number,
  publishedAt: types.string,
  userId: types.string,
  textCaption: types.string,
  mentions: types.array(),
  numOfComments: types.number,
  id: types.string,
  tags: types.array(),
});

export const Videos = types
  .model("Videos", {
    // map --> is to use put and set function
    videos: types.map(Video),
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
    loadVideos: async () => {
      try {
        //fetch data
        self.setLoading(true);
        controle.log(json.message.items)
        self.setVideos(json.message.items);
      } catch (error) {
        console.log("test", error);
        self.setError(error);
      } finally {
        self.setLoading(false);
      }
    },
    setVideos: (videos) => {
      videos.forEach((video) => self.videos.put(video));
    },
    setLoading: (loading) => {
      self.isLoading = loading;
    },
    //immediately after an instance is created and initial values are applied. Children will fire this event before parents. You can't make assumptions about the parent safely, use afterAttach if you need to.
    afterCreate: () => {
      console.log("Created a new videos model!");
      self.loadVideos();
    },
  }))
  //getter
  .views((self) => ({
    // change the value because get videos looks similar that self.videos
    get allVideos() {
      // values put this map function into array. We call directly the allVideos inside the components. 
      return values(self.videos);
    },
  }));

