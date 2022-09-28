import { createStore } from 'vuex';
interface Section {
  id: string,
  name: string,
  active?: boolean,
}

interface State {
  sections: Section[],
}

function activeSection(state: State): Section {
  let section = state.sections.find(item => item.active === true);
  if (!section) {
    section = state.sections[0];
    section.active = true;
  }

  return section;
}

export default createStore({
  state: {
    sections: [
      {
        id: 'home',
        name: 'Home',
        active: true,
      },
      {
        id: 'works',
        name: 'Works',
      },
      {
        id: 'skills',
        name: 'Skills',
      },
      {
        id: 'contacts',
        name: 'Contacts',
      },
    ],
    contentMenuIsActive: false,
  },
  mutations: {
    changeSection(state, delta) {
      const activeItem = activeSection(state);

      if (!activeItem) {
        return;
      }

      activeItem.active = false;

      const index = state.sections.indexOf(activeItem);
      let nextIndex;
      if (delta < 0) {
        nextIndex = state.sections.length <= index + 1 ? 0 : index + 1;
      } else {
        nextIndex = index - 1 < 0 ? state.sections.length - 1 : index - 1;
      }

      state.sections[nextIndex].active = true;
    },

    setActiveSection(state, sectionId) {
      const activeItem = activeSection(state);
      activeItem.active = false;

      const nextSection = state.sections.find(item => item.id === sectionId);
      if (nextSection) {
        nextSection.active = true;
      }
    },

    toggleContentMenu(state, open) {
      state.contentMenuIsActive = typeof open === undefined ? !state.contentMenuIsActive : open;
    },
  },
  actions: {
  },

  getters: {
    activeSection,
  },
});
