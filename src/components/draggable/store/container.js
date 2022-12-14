import { ACTION_CACHE } from "./cache";
import Vue from "vue";

const store = new Vue.observable({});

export const setDraggableContainer = (id) => {
  ACTION_CACHE[id] = {};
  Vue.set(store, id, {
    popup_ids: [],
    popup_ids_show: [],
    sidebar_ids: [],
    sidebar_ids_show: [],
    mobile_ids: [],
    mobile_ids_show: [],
    parent: { width: 0, height: 0 },
    isMobile: false,
    cardComponent: "map-card",
    cardPopupComponent: "map-card",
    cardSidebarComponent: "map-card",
    cardBottomComponent: "map-card"
  });
};
export const removeDraggableContainer = (id) => {
  delete ACTION_CACHE[id];
  Vue.delete(store, id);
};
export const getStoreDraggable = (id) => store[id] || {};

export const getParentProps = (id) => getStoreDraggable(id).parent;
export const getParentWidth = (id) => getStoreDraggable(id).parent.width;
export const getParentHeight = (id) => getStoreDraggable(id).parent.height;

export const setParentProps = (id, { width, height }) => {
  if (!id) return;
  getStoreDraggable(id).parent.width = width;
  getStoreDraggable(id).parent.height = height;
  setIsMobile(id, width && width <= 600);
};

export const isMobile = (id) => getStoreDraggable(id).isMobile;
export const setIsMobile = (id, value) => {
  getStoreDraggable(id).isMobile = value;
};
export const setCardComponent = (
  id,
  {
    cardComponent,
    cardPopupComponent,
    cardSidebarComponent,
    cardBottomComponent
  }
) => {
  let store = getStoreDraggable(id);
  store.cardComponent = cardComponent;
  store.cardPopupComponent = cardPopupComponent;
  store.cardSidebarComponent = cardSidebarComponent;
  store.cardBottomComponent = cardBottomComponent;
};
export const getCardPopupComponent = (id) => {
  let store = getStoreDraggable(id);
  return store.cardPopupComponent || store.cardComponent;
};

export const getCardSidebarComponent = (id) => {
  let store = getStoreDraggable(id);
  return store.cardSidebarComponent || store.cardComponent;
};

export const getCardBottomComponent = (id) => {
  let store = getStoreDraggable(id);
  return store.cardBottomComponent || store.cardComponent;
};
