export const getHeaders = (isAuth = false) => {
    if(isAuth)
        return {
            "Content-Type": "application/json",
        }
    return {
        "Content-Type": "application/json"
    }
}
