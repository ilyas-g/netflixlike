import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useBookmarksStore = defineStore('bookmark', {
  state: () => {
    return {
      // for initially empty lists
      userList: [] as UserInfo[],
      // for data that is not yet loaded
      user: null as UserInfo | null,
      count: 0 as number
    }
  },
  actions: {
    addMovie(name: string, imgSrc: string) {
      this.userList.push({name, imgSrc})
    },
    deleteEvent: function(event: any) {
      this.userList.splice(this.userList.indexOf(event), 1);
    }
  }
})

interface UserInfo {
  name: string
  imgSrc: string
}
