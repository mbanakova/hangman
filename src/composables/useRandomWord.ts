import { getRandomName } from '@/api/getRandomName'
import { ref, onMounted } from 'vue'

export const useRandomWord = () => {
  const word = ref('')

  const getRandomWord = async () => {
    try {
      const name = await getRandomName()
      word.value = name.toLowerCase()
    } catch (error) {
      console.log(error)
      word.value = ''
    }
  }

  onMounted(() => {
    getRandomWord()
  })

  return { word, getRandomWord }
}
