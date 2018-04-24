import Home from './Home/Home.vue'
import Picture from './Picture/Picture.vue'
import Video from './Video/Video.vue'
import Latest from './Latest/Latest.vue'
import Popular from './Popular/Popular.vue'
import LatestVideo from './LatestVideo/LatestVideo.vue'
import PopularVideo from './PopularVideo/PopularVideo.vue'
import Seach from './Seach/Seach.vue'
import SeachVideo from './SeachVideo/SeachVideo.vue'
export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/picture',
    component: Picture
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/picture/latest',
    component: Latest
  },
  {
    path: '/picture/popular',
    component: Popular
  },
  {
    path: '/video/latest',
    component: LatestVideo
  },
  {
    path: '/video/popular',
    component: PopularVideo
  },
  {
    path: '/seach',
    component: Seach
  },
  {
    path: '/seachvideo',
    component: SeachVideo
  },
  {
    path: '*',
    component: Home
  }
]
