import { getRandomInt } from '../../../helpers/common.js'

export default {
  CREATE_TAG(state, payload) {
    const copyTag = JSON.parse(JSON.stringify(state.tagTemplate))
    // tagId - нужен для :key в компоненте
    console.log(payload.name, payload.color, 'namecolor')
    copyTag.tagId = getRandomInt(1000000) + '_tagId'
    copyTag.tagName = payload.name
    copyTag.color = Boolean(payload.color) ? payload.color : '#000000'
    state.tags.push(copyTag)
  }
}