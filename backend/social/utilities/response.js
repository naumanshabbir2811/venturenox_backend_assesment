const successResponse = (data, message, status) => {
    return {
        success: true,
        message,
        data,
        status:status
    }
}
 const errorResponse = (message,status) => {
    return {
        success: false,
        message,
        data: null,
        status:status
    }
}
const apiResponse=(obj)=> {
    return {
        success: obj.success,
        message: obj.message,
        data: obj.data
    }
}

module.exports={successResponse,errorResponse,apiResponse}