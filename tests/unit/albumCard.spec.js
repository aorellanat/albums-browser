import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AlbumCard from '@/components/AlbumCard.vue'

describe('AlbumCard.vue', () => {
  const album = 'X&Y';
  const artist = 'Coldplay';
  const price = 9.99;

  let wrapper = shallowMount(AlbumCard, {
    propsData: {
      album,
      artist,
      price
    }
  })

  it('check fields on an album card', () => {
    expect(wrapper.find('.album-name').text()).to.equal(album);
    expect(wrapper.find('.album-artist').text()).to.equal(artist);
    expect(wrapper.find('.album-price').text()).to.equal(`Price: ${price} USD`);
    expect(wrapper.find('.album-img').exists()).to.equal(true);
  })

  it('verify default image url in album card', () => {
    expect(wrapper.find('.album-img').props('src')).to.equal('https://resistencia.es/wp-content/uploads/2018/10/music.png');
  })
})