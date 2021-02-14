// Function that can be used globally in the application to edit local state.
export const updateState = (current: any, hookFunction: (...args: any) => void, key: string, value: string) => {
    hookFunction({
        ...current,
        [key]: value
    })
}