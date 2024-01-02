import LocomotiveScroll from "locomotive-scroll";

export default defineNuxtPlugin(nuxtApp =>{
  nuxtApp.LocomotiveScroll = LocomotiveScroll;
  nuxtApp.$LocomotiveScroll = LocomotiveScroll;
})