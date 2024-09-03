import { ref } from 'vue';
import { defineStore } from 'pinia'
import type Cocktail from '@/cocktails/types/Cocktail'

export const useCocktailsStore = defineStore('cocktails', () => {
    const cocktails = ref<Cocktail[]>([])
    const currentCocktails = ref<Cocktail[]>([])
    const activeCocktail = ref<Cocktail>({
        cocktailId: '',
        name: '',
        flavour: '',
        ingredients: '',
        method: '',
        glass: '',
        ice: '',
        garnish: '',
        spirit: '',
    })
  
    return { cocktails, currentCocktails, activeCocktail }
}, {
    persist: {
        storage: sessionStorage
    }
})