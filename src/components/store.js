const KEY = 'mathGameDifficulty'

export const load = () => {
    const savedObj = localStorage.getItem(KEY)
    if (savedObj) return JSON.parse(savedObj)
    return null
}
export const save = (obj) => localStorage.setItem(KEY, JSON.stringify(obj))
