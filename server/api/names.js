export default defineEventHandler(async (event) => {

    // Handle query params
    const { name } = useQuery(event)

    // Handle post data
    const { age } = await useBody(event)

    return {
        message: `Hey, ${name}! you are ${age} young!`
    }
})