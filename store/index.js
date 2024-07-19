import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      tools: [
        { id: 1, name: 'Tool 1', description: 'Description of tool 1.', image: '/tool1.png' },
        { id: 2, name: 'Tool 2', description: 'Description of tool 2.', image: '/tool2.png' },
        { id: 3, name: 'Tool 3', description: 'Description of tool 3.', image: '/tool3.png' }
      ]
    }
  },
  getters: {
    getToolById: (state) => (id) => {
      return state.tools.find(tool => tool.id === id)
    }
  },
  mutations: {
    addTool(state, tool) {
      state.tools.push(tool)
    },
    updateTool(state, updatedTool) {
      const index = state.tools.findIndex(tool => tool.id === updatedTool.id)
      if (index !== -1) {
        state.tools[index] = updatedTool
      }
    }
  },
  actions: {
    addTool({ commit }, tool) {
      commit('addTool', tool)
    },
    updateTool({ commit }, updatedTool) {
      commit('updateTool', updatedTool)
    }
  }
})

export default store