import { ref } from 'vue';
import { defineStore } from 'pinia'
import type Cocktail from '@/cocktails/types/Cocktail'

export const useCocktailsStore = defineStore('cocktails', () => {
    const cocktails = ref<Cocktail[]>([])
    const currentCocktails = ref<Cocktail[]>([])
    const activeCocktail = ref<Cocktail>({
        cocktailId: 'placeholder',
        name: 'placeholder',
        flavour: 'placeholder',
        ingredients: 'placeholder',
        method: 'placeholder',
        glass: 'placeholder',
        ice: 'placeholder',
        garnish: 'placeholder',
        spirit: 'placeholder',
    })
  
    return { cocktails, currentCocktails, activeCocktail }
})