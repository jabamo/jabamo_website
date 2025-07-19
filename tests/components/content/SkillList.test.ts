import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SkillList from '../../../app/components/content/SkillList.vue'
import { mockSkills } from '../../fixtures/mockData'

describe('SkillList', () => {
  it('renders with default props', async () => {
    // given
    // when
    const wrapper = await mountSuspended(SkillList, {
      props: { skills: mockSkills }
    })

    // then
    expect(wrapper.find('.flex.items-center').exists()).toBe(true)
    expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
  })

  it('renders skills list', async () => {
    // given
    // when
    const wrapper = await mountSuspended(SkillList, {
      props: {
        title: 'My Skills',
        skills: mockSkills
      }
    })

    // then
    expect(wrapper.text()).toContain('My Skills')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('Progressive JavaScript Framework')
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('Type-safe JavaScript superset')
  })

  it('renders with custom title', async () => {
    // given
    const customTitle = 'Custom Skills'

    // when
    const wrapper = await mountSuspended(SkillList, {
      props: {
        title: customTitle,
        skills: mockSkills
      }
    })

    // then
    expect(wrapper.text()).toContain(customTitle)
  })
}) 