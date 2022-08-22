export const user_middleware = {
    validateUser: (req: any, res: any, next: any) => {
        console.log("I am Validate User")
        next()

    }
}