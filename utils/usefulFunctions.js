export const commonError = (error) => {
    if (Array.isArray(error?.response?.data?.message)) {
        return error.response.data.message[0]
    }
    else {
        return 'Something Went Wrong!'
    }
}