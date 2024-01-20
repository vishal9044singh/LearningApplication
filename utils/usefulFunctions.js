export const commonError = (error) => {
    if (Array.isArray(error?.response?.data?.message)) {
        return error.response.data.message[0]
    }
    else {
        return 'Something Went Wrong!'
    }
}

export const getDateAndTime = (timestamp) => {
    const dateObject = new Date(timestamp);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const formattedDate = dateObject.toLocaleString('en-US', options);
    return formattedDate;
}