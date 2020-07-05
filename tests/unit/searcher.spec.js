import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Searcher from '@/components/Searcher.vue'

describe('Searcher.vue', () => {
  let wrapper = shallowMount(Searcher);
  const title = 'iTunes Artists';
  const instruction = 'Please enter the artist name to find information about related albums:';

  it('check the text of title and instruction', () => {
    expect(wrapper.find('#title').text()).to.equal(title);
    expect(wrapper.find('#instruction-text').text()).to.equal(instruction);
  })

  it('show the text field and button to search', () => {
    expect(wrapper.find('#artist-name').exists()).to.equal(true);
    expect(wrapper.find('#search-button').exists()).to.equal(true);
  })
})